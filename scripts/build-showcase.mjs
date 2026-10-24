import fs from 'node:fs';
fs.mkdirSync('build/site/packages/web',{recursive:true});
fs.cpSync('packages/web/dist','build/site/packages/web/dist',{recursive:true});
fs.cpSync('examples/web','build/site',{recursive:true});
// Local source paths become relative deployment paths.
for(const name of ['index.html','showcase.js','reference.js','ui-components.js']){const p='build/site/'+name;fs.writeFileSync(p,fs.readFileSync(p,'utf8').replaceAll('../../packages/','./packages/'));}
console.log('Static showcase built in build/site');
