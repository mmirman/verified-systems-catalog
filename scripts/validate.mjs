import fs from 'node:fs';
const xs=JSON.parse(fs.readFileSync(new URL('../data/components.json',import.meta.url)));
const required=['name','assistant','category','maturity','artifact','spec','theorem','assumptions','excludes','evidence'];
for(const [i,x] of xs.entries()) for(const k of required) if(!x[k]||!x[k].length) throw Error(`entry ${i} missing ${k}`);
for(const x of xs) for(const [label,url] of x.evidence) { if(!label||!/^https:\/\//.test(url)) throw Error(`bad evidence in ${x.name}`); }
console.log(`validated ${xs.length} entries`);
