import fs from 'fs';
import path from 'path';

let count = 0;
let doubleFooters = 0;
let badCanonicals = 0;
let badTitles = 0;
const sampleCanonicals = [];

function walk(current) {
  const entries = fs.readdirSync(current, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(current, e.name);
    if (e.isDirectory()) {
      walk(full);
    } else if (e.name.endsWith('.html')) {
      count++;
      const content = fs.readFileSync(full, 'utf8');

      // Check footers
      const footers = (content.match(/<footer/gi) || []).length;
      if (footers > 1) {
        console.warn(`[WARN] Multiple footers (${footers}) in: ${full}`);
        doubleFooters++;
      } else if (footers === 0 && !full.includes('404')) {
        console.warn(`[WARN] Zero footers in: ${full}`);
      }

      // Check canonical
      const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/i);
      if (canonicalMatch) {
        if (sampleCanonicals.length < 8) {
          sampleCanonicals.push({ file: full, canonical: canonicalMatch[1] });
        }
      } else if (!full.includes('404') && !full.includes('_not-found')) {
        console.warn(`[WARN] Missing canonical in: ${full}`);
        badCanonicals++;
      }

      // Check title
      const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
      if (titleMatch) {
        const t = titleMatch[1];
        if (t.includes('Virtual Stack | Virtual Stack') || t.includes('Virtual Stack - Virtual Stack')) {
          console.warn(`[WARN] Duplicate brand in title in ${full}: "${t}"`);
          badTitles++;
        }
      }
    }
  }
}

walk('out');

console.log(`\n--- Build Verification Report ---`);
console.log(`Checked ${count} HTML pages.`);
console.log(`Double footers: ${doubleFooters}`);
console.log(`Missing canonicals: ${badCanonicals}`);
console.log(`Bad title duplications: ${badTitles}`);
console.log(`\nSample Canonicals:`);
sampleCanonicals.forEach((s) => console.log(`  ${s.file} -> ${s.canonical}`));
