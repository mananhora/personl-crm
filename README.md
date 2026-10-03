# MyVillage

A personal CRM for staying close to the people who matter. Sort people into circles, get nudged when it's been too long, and see your whole network at a glance.

**Live app (private to you):** https://claude.ai/artifact/N3esC6NVh67qXGVaVWaust

## What it does

- **Today**: who to reach out to now (overdue first), who's coming up this week, upcoming birthdays, circle health, and recent touchpoints. One tap logs a call, text or coffee and resets that person's reminder. You can also snooze someone, or say roughly when you last talked.
- **People**: instant search across names, companies, notes and tags. Filter by circle, reminder status, location, tags, company and favorites. Switch between cards, list and table, and group by circle, location, company, tag or status.
- **Network**: an orbit map of everyone, with closer rings for closer people, colored by reminder status or by city. Also shows breakdowns by place, company, tag and how you met. Tap any bar to filter People.
- **Person**: company, role, location, how you know them, email, phone, LinkedIn, birthday, tags, free-form notes, a timeline of touchpoints, and a per-person reminder rhythm. Everything autosaves.
- **Import**:
  - iPhone contacts (`.vcf`), Google/Android contacts (`.vcf` or Google CSV), LinkedIn `Connections.csv`, Notion database CSV, or any spreadsheet. Columns are detected automatically and can be adjusted.
  - Duplicates are merged by email, LinkedIn URL, phone, or name.
  - **Smart paste**: paste a LinkedIn profile, an email signature or a list of names, or drop screenshots, and Claude extracts the people.
- **Backup**: export JSON (full backup, restorable) or CSV from Settings.
- Shortcuts: `⌘K` or `/` to search anything, `N` to add a person, `Esc` to close.

## Circles and reminders

| Circle | Default reminder |
| --- | --- |
| 1 · Inner circle | every 2 weeks |
| 2 · Close friends | every month |
| 3 · Friends | every 3 months |
| 4 · Network | no reminder |

You can rename circles and change their defaults in Settings, and each person can have their own rhythm. A Notion `Relationship` column like `a/Tier 1 💛` maps to circle 1.

## How it's built

The app is one file, [`app/myvillage.html`](app/myvillage.html): Preact and htm loaded from a CDN, with no build step and no backend to run.

Storage adapts to where the page runs:

- **On claude.ai (the live link):** data lives in the artifact's database. It syncs across your phone and laptop, and the access rules make it readable and writable only by you.
- **Anywhere else:** data lives in that browser's `localStorage`. Use Settings → Export backup to move it.

### Self-hosting

```sh
npm run build        # writes dist/index.html, a standalone page
npm run serve        # preview at http://localhost:8080
```

You can drop `dist/index.html` onto any static host (Netlify Drop, Cloudflare Pages, Vercel, GitHub Pages). It needs no server.

### Tests

```sh
npm install          # preact, htm and playwright, used only for tests
npm test
```

`tests/e2e.mjs` drives the built page in headless Chromium. It covers parser unit checks, real Notion/LinkedIn/vCard imports with dedupe, reminders and touchpoints, search and filters, editing and persistence across reloads, delete and undo, the command palette, the network map, export, and phone-width layout in dark mode. It runs once against browser storage and once against a mock of the claude.ai database.

## Legacy code

The original 2018 Flask + Angular app is preserved in [`legacy/`](legacy/). Earlier commits also contained a Heroku Postgres URL with a password and a Facebook app secret. Both are redacted in the current tree but remain in git history, so rotate them if they're still live.
