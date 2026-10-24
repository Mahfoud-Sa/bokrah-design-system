import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { tokens, foundations, icons, setBokrahLanguage, setBokrahTheme } from '../packages/web/dist/index.js';
const luminance = hex => {
 const rgb = hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);
 return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
};
const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
for(const [mode,c] of Object.entries(tokens.color)){
 test(`${mode}: body, secondary text and status text meet WCAG AA`,()=>{
  const pairs=[['text','background'],['text','surface'],['text','surfaceAlt'],['muted','background'],['muted','surface'],['muted','surfaceAlt'],['primary','background'],['onPrimary','primary'],['onPrimary','primaryHover']];
  for(const name of ['secondary','accent'])pairs.push([name,name+'Surface'],['on'+name[0].toUpperCase()+name.slice(1),name]);
  pairs.push(['onNeutral','neutral']);
  for(const name of ['success','warning','danger','info'])pairs.push([name,name+'Surface'],['on'+name[0].toUpperCase()+name.slice(1),name]);
  for(const [fg,bg] of pairs)assert.ok(contrast(c[fg],c[bg]) >= (mode==='highContrast'?7:4.5),`${fg}/${bg}: ${contrast(c[fg],c[bg]).toFixed(2)}`);
 });
 test(`${mode}: controls and focus meet 3:1 contrast`,()=>{
  for(const name of ['focus','controlBorder'])for(const surface of ['background','surface'])assert.ok(contrast(c[name],c[surface])>=3,`${name}/${surface}`);
 });
}
test('language helper establishes direction and rejects unsupported input without mutation',()=>{
 const root={lang:'en',dir:'ltr'};setBokrahLanguage('ar',root);assert.deepEqual(root,{lang:'ar',dir:'rtl'});
 setBokrahLanguage('en',root);assert.deepEqual(root,{lang:'en',dir:'ltr'});
 assert.throws(()=>setBokrahLanguage('fr',root),TypeError);assert.equal(root.lang,'en');
});
test('theme helper validates before changing the supplied root',()=>{
 const root={dataset:{}};setBokrahTheme('dark',root);assert.equal(root.dataset.bkTheme,'dark');
 setBokrahTheme('high-contrast',root);assert.equal(root.dataset.bkTheme,'high-contrast');
 setBokrahTheme('dark',root);
 assert.throws(()=>setBokrahTheme('invalid',root),TypeError);assert.equal(root.dataset.bkTheme,'dark');
});
test('legacy font assets retain their original OFL notices',()=>{
 for(const folder of ['packages/web/dist/fonts','packages/flutter/assets/fonts'])for(const name of ['DMSans','Manrope','NotoSansArabic']){
  assert.ok(fs.statSync(`${folder}/${name}.ttf`).size>10000);
  assert.match(fs.readFileSync(`${folder}/${name}-OFL.txt`,'utf8'),/SIL OPEN FONT LICENSE/);
 }
});

test('every requested foundation category has bilingual coverage',()=>{
 assert.deepEqual(foundations.map(x=>x.id),['colors','typography','spacing','borders','shadows','icons','grid','motion','themes','accessibility']);
 for(const category of foundations){assert.ok(category.en&&category.ar);assert.equal(category.itemsEn.length,category.itemsAr.length);for(const group of category.groups)assert.ok(tokens[group]);}
 for(const transition of Object.values(tokens.transition)){assert.ok(transition.duration in tokens.motion);assert.ok(transition.easing in tokens.easing);}
 assert.deepEqual(Object.values(tokens.space).filter(x=>x<=48),[4,8,12,16,24,32,48]);
});
test('all vector paths have valid shared geometry and distributable SVGs',()=>{
 for(const [name,paths] of Object.entries(icons)){
  assert.ok(paths.length);for(const path of paths){assert.equal(path[0][0],'M');for(const [op,...coords] of path){assert.ok(['M','L','Z'].includes(op));assert.equal(coords.length,op==='Z'?0:2);assert.ok(coords.every(n=>Number.isFinite(n)&&n>=0&&n<=24));}}
  assert.ok(fs.existsSync('packages/web/dist/icons/'+name+'.svg'));
 }
});
