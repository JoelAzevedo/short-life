// Writes steam/achievements.json and steam/achievements.csv from the in-game list,
// ready to copy into the Steamworks "Stats & Achievements" configuration.
import fs from 'fs';
const src = fs.readFileSync(new URL('../src/engine/achievements.js', import.meta.url), 'utf8');
const block = src.slice(src.indexOf('export const ACHIEVEMENTS = ['), src.indexOf('];', src.indexOf('export const ACHIEVEMENTS = [')) + 2);
const list = (0, eval)('(' + block.replace('export const ACHIEVEMENTS = ', '').replace(/;$/, '') + ')');
const rows = list.map((a) => ({ apiName: a.steam ?? 'ACH_' + a.id.toUpperCase().replace(/[^A-Z0-9]/g, '_'), id: a.id, displayName: a.title, description: a.desc, hidden: !!a.hidden, category: a.cat }));
fs.mkdirSync(new URL('../steam/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL('../steam/achievements.json', import.meta.url), JSON.stringify(rows, null, 2) + '\n');
const esc = (s) => '"' + String(s).replace(/"/g, '""') + '"';
fs.writeFileSync(new URL('../steam/achievements.csv', import.meta.url), 'apiName,displayName,description,hidden,category\n' + rows.map((r) => [r.apiName, r.displayName, r.description, r.hidden, r.category].map(esc).join(',')).join('\n') + '\n');
console.log(`exported ${rows.length} achievements`);
