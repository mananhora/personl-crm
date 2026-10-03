// Wraps app/myvillage.html (the artifact-ready page body) into a standalone
// dist/index.html that any static host can serve. No dependencies.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const body = readFileSync(new URL('../app/myvillage.html', import.meta.url), 'utf8');
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#1E9A8C">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#1E9A8C"/><text x="32" y="46" font-family="Georgia,serif" font-weight="700" font-size="40" fill="#fff" text-anchor="middle">V</text></svg>')}">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}img{max-width:100%}</style>
</head>
<body>
${body}
</body>
</html>
`;
mkdirSync(new URL('../dist/', import.meta.url), { recursive: true });
writeFileSync(new URL('../dist/index.html', import.meta.url), page);
console.log('Built dist/index.html (' + Math.round(page.length / 1024) + ' KB)');
