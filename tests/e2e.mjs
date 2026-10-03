// End-to-end check of the built app (dist/index.html) in headless Chromium.
// Usage: node scripts/build.mjs && node tests/e2e.mjs [--cloud] [--shots=dir]
// CDN scripts are served from local node_modules so the test runs offline.
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const load = (m) => { try { return require(m); } catch { return require(path.join(process.env.NPM_GLOBAL || '/opt/node22/lib/node_modules', m)); } };
const { chromium } = load('playwright');
const resolveDep = (p) => [root, process.env.DEPS_DIR].filter(Boolean).map((d) => path.join(d, 'node_modules', p)).find(existsSync);

const cloud = process.argv.includes('--cloud');
const shotsArg = process.argv.find((a) => a.startsWith('--shots='));
const shots = shotsArg ? shotsArg.split('=')[1] : null;
if (shots) mkdirSync(shots, { recursive: true });

const server = createServer((req, res) => {
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(readFileSync(path.join(root, 'dist/index.html')));
}).listen(0);
const url = `http://localhost:${server.address().port}/`;

const CDN = {
  'preact@10.24.3/dist/preact.umd.js': 'preact/dist/preact.umd.js',
  'preact@10.24.3/hooks/dist/hooks.umd.js': 'preact/hooks/dist/hooks.umd.js',
  'htm@3.1.1/dist/htm.umd.js': 'htm/dist/htm.umd.js',
};

// In-memory stand-in for the claude.ai `db` capability (persists to localStorage to survive reloads).
const MOCK_DB = `(() => {
  const KEY = '__mockdb';
  const docs = new Map(Object.entries(JSON.parse(localStorage.getItem(KEY) || '{}')));
  const subs = new Set();
  const save = () => localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(docs)));
  const snapDoc = (p) => ({ id: p.split('/').pop(), exists: docs.has(p), data: () => docs.get(p), metadata: {} });
  const fire = () => setTimeout(() => subs.forEach((s) => s()), 0);
  const colSnap = (c) => { const ds = [...docs.keys()].filter((k) => k.startsWith(c + '/') && k.split('/').length === c.split('/').length + 1).sort().map(snapDoc); return { docs: ds, size: ds.length, empty: !ds.length, metadata: {}, docChanges: () => [] }; };
  const docRef = (p) => ({ id: p.split('/').pop(), path: p,
    get: async () => snapDoc(p),
    set: async (d) => { if (typeof d !== 'object') throw { code: 'invalid_argument' }; docs.set(p, JSON.parse(JSON.stringify(d))); save(); fire(); },
    update: async (d) => { docs.set(p, { ...docs.get(p), ...d }); save(); fire(); },
    delete: async () => { docs.delete(p); save(); fire(); },
    onSnapshot: (next) => { const f = () => next(snapDoc(p)); subs.add(f); setTimeout(f, 5); return () => subs.delete(f); } });
  const colRef = (c) => ({ path: c, doc: (id) => docRef(c + '/' + id), get: async () => colSnap(c),
    onSnapshot: (next) => { const f = () => next(colSnap(c)); subs.add(f); setTimeout(f, 5); return () => subs.delete(f); } });
  const db = Object.freeze({ doc: docRef, collection: colRef });
  window.__writes = 0;
  window.claude = { use: async (n) => (n === 'db' ? db : null) };
})();`;

const errors = [];
const results = [];
const check = (name, ok, detail = '') => { results.push([ok ? 'PASS' : 'FAIL', name, detail]); };

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, ...opts });
  await ctx.route('https://cdn.jsdelivr.net/npm/**', (route) => {
    const key = Object.keys(CDN).find((k) => route.request().url().endsWith(k));
    if (!key) return route.abort();
    route.fulfill({ contentType: 'application/javascript', body: readFileSync(resolveDep(CDN[key])) });
  });
  await ctx.route('https://fonts.googleapis.com/**', (r) => r.fulfill({ contentType: 'text/css', body: '' }));
  await ctx.route('https://fonts.gstatic.com/**', (r) => r.abort());
  if (cloud) await ctx.addInitScript(MOCK_DB);
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  return { ctx, page };
}
const countIs = async (page, sel, n) => { for (let i = 0; i < 40; i++) { if ((await page.locator(sel).count()) === n) return true; await page.waitForTimeout(50); } return false; };
const snap = async (page, name) => { if (shots) await page.screenshot({ path: path.join(shots, name + '.png'), fullPage: false }); };
const fixture = (f) => path.join(root, 'tests/fixtures', f);

const { ctx, page } = await newPage();
await page.goto(url);
await page.waitForSelector('text=Your village');
check('empty state renders', true);
await snap(page, '01-empty');

// ---- parser unit checks inside the page
const unit = await page.evaluate(() => {
  const M = window.__myvillage;
  const out = {};
  out.csvQuoted = JSON.stringify(M.parseCSV('a,b\n"x, y","he said ""hi"""\n'));
  out.tier = [M.parseTier('a/Tier 1 💛'), M.parseTier('b/ Tier 2 😊'), M.parseTier('Tier 3 🙂'), M.parseTier('acquaintance')].join(',');
  out.bday = [M.parseBirthday('1604-10-05'), M.parseBirthday('--0712'), M.parseBirthday('1994-07-12'), M.parseBirthday('7/4')].join(',');
  out.tags = M.splitTags('* myContacts ::: Friends ::: College').join('|');
  const t = '2026-03-10';
  out.status = [M.statusOf({ cadence: 14, lastContacted: '2026-02-20' }, t).key, M.statusOf({ cadence: 14, lastContacted: '2026-03-01' }, t).key,
    M.statusOf({ cadence: 30, lastContacted: '2026-03-05' }, t).key, M.statusOf({ cadence: null }, t).key, M.statusOf({ cadence: 14, lastContacted: '' }, t).key,
    M.statusOf({ cadence: 14, lastContacted: '2026-01-01', snoozeUntil: '2026-03-20' }, t).key].join(',');
  return out;
});
check('csv quoting', unit.csvQuoted === '[["a","b"],["x, y","he said \\"hi\\""]]', unit.csvQuoted);
check('tier parsing', unit.tier === '1,2,3,4', unit.tier);
check('birthday parsing', unit.bday === '--10-05,--07-12,1994-07-12,--07-04', unit.bday);
check('google label tags', unit.tags === 'Friends|College', unit.tags);
check('reminder status', unit.status === 'overdue,soon,ok,none,unknown,snoozed', unit.status);

// ---- import Notion
async function importFile(file, expectTitle) {
  await page.evaluate(() => { location.hash = 'import'; });
  await page.waitForSelector('text=Bring your people in');
  await page.setInputFiles('input[type=file]:not([multiple])', fixture(file));
  await page.waitForSelector(`h1:has-text("${expectTitle}")`);
  const summary = await page.textContent('.import-bar');
  await snap(page, 'import-' + file.slice(0, 8).replace(/\W/g, ''));
  await page.click('.import-bar .btn.primary');
  await page.waitForSelector('text=Done.');
  return summary;
}
let s = await importFile('Personal CRM 0f3c9a7d2b1e4c5f8a9b0c1d2e3f4a5b_all.csv', 'Review 5 people');
check('notion import summary', /5 new · 0 merged/.test(s), s);
s = await importFile('Connections.csv', 'Review 3 people');
check('linkedin dedupe', /2 new · 1 merged/.test(s), s);
s = await importFile('contacts.vcf', 'Review 4 people');
check('vcard dedupe', /3 new · 1 merged/.test(s), s);

const stored = await page.evaluate(() => {
  const raw = localStorage.getItem('__mockdb');
  if (raw) { const o = JSON.parse(raw); return Object.entries(o).filter(([k]) => k.startsWith('contacts/')).map(([, v]) => v); }
  return Object.values(JSON.parse(localStorage.getItem('myvillage:data:v1')).contacts);
});
check('10 people stored', stored.length === 10, String(stored.length));
const rahul = stored.find((c) => c.name === 'Rahul Kayala');
check('merge kept data from all sources', rahul && rahul.role === 'Senior Engineer' && rahul.phone && rahul.tier === 1 && rahul.location === 'San Francisco' && rahul.tags.includes('linkedin') && rahul.tags.includes('college'), JSON.stringify(rahul));
const annie = stored.find((c) => c.name === 'Annie Kim');
check('vcard fields', annie && annie.location === 'Boston' && annie.country === 'United States' && annie.birthday === '1994-07-12' && annie.company === 'Harvard' && /climbing gym, loves/.test(annie.notes) && /anniekim/.test(annie.linkedin), JSON.stringify(annie));
check('quoted-printable name', stored.some((c) => c.name === 'Jürgen Müller'));
const fek = stored.find((c) => c.name === 'Fekare');
check('notion extras + tier cadence', fek && fek.extra['Making Plans'] === 'Hike, Coffee' && fek.cadence === 14 && fek.email === 'fekare@example.com', JSON.stringify(fek));
const priya = stored.find((c) => c.name === 'Priya Shah');
check('linkedin new person defaults', priya && priya.tier === 4 && priya.cadence === null && priya.extra['Connected On'] === '02 Jan 2024', JSON.stringify(priya));

// ---- Today
await page.evaluate(() => { location.hash = 'today'; });
await page.waitForSelector('text=Reach out');
const heroBefore = await page.textContent('.hero-line');
await snap(page, '02-today');
await page.click('.qrow >> nth=0 >> text=This week');
await page.waitForTimeout(150);
await page.click('.qrow >> nth=0 >> button:has-text("Log")');
await page.fill('.composer input[placeholder^="What did you talk"]', 'Caught up about the new job');
await page.click('text=Save touchpoint');
await page.waitForSelector('.toast:has-text("Logged")');
const heroAfter = await page.textContent('.hero-line');
check('queue shrinks after actions', heroBefore !== heroAfter, `${heroBefore} -> ${heroAfter}`);
await page.waitForSelector('text=Recent touchpoints');
check('touchpoint shows in recent', (await page.textContent('.today-side')).includes('Caught up about the new job'));

// ---- People search + filters
await page.evaluate(() => { location.hash = 'people'; });
await page.waitForSelector('#people-search');
await snap(page, '03-people');
await page.fill('#people-search', 'stripe');
await page.waitForTimeout(100);
check('search finds by company', (await page.locator('.pcard').count()) === 1 && (await page.textContent('.pcard')).includes('Priya'));
await page.fill('#people-search', '');
await page.click('.filterbar .fchip >> nth=0');
await page.waitForTimeout(100);
const t1 = await page.locator('.pcard').count();
check('tier filter', t1 === 3, String(t1));
await page.click('text=Clear filters');
await page.click('.filterbar button:has-text("Location")');
await page.click('.pop .opt:has-text("Seattle")');
await page.keyboard.press('Escape');
check('location filter', (await page.locator('.pcard').count()) === 1);
await page.click('text=Clear filters');
await page.click('.toggle button[title="Table"]');
await page.waitForSelector('table.grid');
check('table view', (await page.locator('table.grid tbody tr').count()) === 10);
await page.selectOption('.resultbar select >> nth=1', 'location');
await page.waitForTimeout(100);
check('group by location', (await page.locator('.group-h').count()) >= 4);
await snap(page, '04-people-table');
await page.selectOption('.resultbar select >> nth=1', 'none');
await page.click('.toggle button[title="Cards"]');

// ---- Person sheet edits persist
await page.fill('#people-search', 'annie');
await page.click('.pcard');
await page.waitForSelector('.sheet');
await page.fill('textarea[aria-label="Notes"]', 'Ask about the climbing trip to Yosemite');
await page.click('.tiers button.t2');
await page.fill('.tagbox input', 'climbing');
await page.keyboard.press('Enter');
await page.waitForTimeout(800);
await snap(page, '05-sheet');
await page.click('button[aria-label="Close"]');
await page.reload();
await page.waitForSelector('#people-search');
await page.fill('#people-search', 'yosemite');
await page.waitForTimeout(100);
const card = await page.locator('.pcard').count();
check('notes persisted across reload and searchable', card === 1);
await page.click('.pcard');
await page.waitForSelector('.sheet');
check('tier + tag persisted', (await page.locator('.tiers button.t2[aria-pressed="true"]').count()) === 1 && (await page.textContent('.tagbox')).includes('climbing'));
await page.keyboard.press('Escape');
await page.waitForSelector('.sheet', { state: 'detached' });

// ---- Add a new person by hand
await page.keyboard.press('n');
await page.waitForSelector('.sheet');
await page.keyboard.type('Maya Patel');
await page.fill('input[aria-label="Company"]', 'Figma');
await page.waitForTimeout(800);
await page.keyboard.press('Escape');
await page.fill('#people-search', 'figma');
await page.waitForTimeout(100);
check('add person via keyboard', await countIs(page, '.pcard', 1));

// ---- Delete + undo
await page.click('.pcard');
await page.click('text=Delete person');
await page.click('text=Tap again to delete');
await page.waitForSelector('.toast:has-text("Deleted")');
check('delete removes', await countIs(page, '.pcard', 0));
await page.click('.toast button:has-text("Undo")');
check('undo restores', await countIs(page, '.pcard', 1));
await page.fill('#people-search', '');

// ---- Palette
await page.keyboard.press('Control+k');
await page.keyboard.type('rahul');
await page.keyboard.press('Enter');
await page.waitForSelector('.sheet input[aria-label="Name"]');
check('palette opens person', (await page.inputValue('.sheet input[aria-label="Name"]')) === 'Rahul Kayala');
await page.keyboard.press('Escape');

// ---- Network
await page.evaluate(() => { location.hash = 'network'; });
await page.waitForSelector('svg.orbit');
check('orbit nodes', await countIs(page, 'svg.orbit .node', 11), String(await page.locator('svg.orbit .node').count()));
await page.hover('svg.orbit .node >> nth=0');
check('orbit tooltip', await page.isVisible('.orbit-tip'));
await snap(page, '06-network');
await page.click('.bar:has-text("San Francisco")');
await page.waitForSelector('#people-search');
check('drill from network to people', await countIs(page, '.pcard', 2), String(await page.locator('.pcard').count()));

// ---- Settings + export (standalone path uses an <a download>)
await page.evaluate(() => { location.hash = 'settings'; });
await page.waitForSelector('text=Where your data lives');
const [dl] = await Promise.all([page.waitForEvent('download'), page.click('text=Export backup (.json)')]);
const backup = JSON.parse(readFileSync(await dl.path(), 'utf8'));
check('backup export', backup.contacts.length === 11, backup.contacts.map((c) => c.name).join(', '));
await snap(page, '07-settings');

// ---- Mobile + dark
const m = await newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: 'dark' });
await m.page.goto(url);
if (!cloud) await m.page.evaluate((d) => localStorage.setItem('myvillage:data:v1', d), JSON.stringify({ contacts: Object.fromEntries(backup.contacts.map((c) => [c.id, c])), settings: null }));
else await m.page.evaluate((d) => localStorage.setItem('__mockdb', d), JSON.stringify(Object.fromEntries(backup.contacts.map((c) => ['contacts/' + c.id, c]))));
await m.page.reload();
await m.page.waitForSelector('.tabbar');
const overflow = await m.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
check('no horizontal scroll on phone (today)', !overflow);
await snap(m.page, '08-mobile-today');
await m.page.click('.tab:has-text("People")');
await m.page.waitForSelector('.pcard');
check('no horizontal scroll on phone (people)', !(await m.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)));
await snap(m.page, '09-mobile-people');
await m.page.click('.pcard >> nth=0');
await m.page.waitForSelector('.sheet');
await m.page.waitForTimeout(400);
await snap(m.page, '10-mobile-sheet');
await m.page.click('button[aria-label="Close"]');
await m.page.click('.tab:has-text("Network")');
await m.page.waitForSelector('svg.orbit');
check('no horizontal scroll on phone (network)', !(await m.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)));
await snap(m.page, '11-mobile-network');
await m.page.click('.tab:has-text("Import")');
check('no horizontal scroll on phone (import)', !(await m.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)));
await snap(m.page, '12-mobile-import');

await browser.close();
server.close();
for (const r of results) console.log(r[0], r[1], r[0] === 'FAIL' ? '→ ' + r[2] : '');
const real = errors.filter((e) => !/fonts\.gstatic|ERR_FAILED/.test(e));
if (real.length) console.log('ERRORS:\n' + real.join('\n'));
const failed = results.filter((r) => r[0] === 'FAIL').length + real.length;
console.log(`\n${results.length - results.filter((r) => r[0] === 'FAIL').length}/${results.length} checks passed${cloud ? ' (cloud store mock)' : ' (browser store)'}`);
process.exit(failed ? 1 : 0);
