import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {entries,sections} from '../docs/reference-catalog.mjs';
import {componentReference} from '../examples/web/component-reference.js';
const base='packages/flutter/lib/src/';
const sources=fs.readdirSync(base).filter(name=>name.endsWith('.dart')).map(name=>fs.readFileSync(base+name,'utf8'));
const css=['packages/web/dist/styles.css','packages/web/dist/tokens.css'].map(file=>fs.readFileSync(file,'utf8')).join('\n');

test('every public Flutter widget and surface helper has a unique reference',()=>{
 const widgets=sources.flatMap(text=>[...text.matchAll(/class (Bk\w+)(?:<[^>]+>)? extends (?:StatelessWidget|StatefulWidget)/g)].map(match=>match[1]));
 const documented=new Set(entries.map(entry=>entry.symbol));
 for(const symbol of [...widgets,'BkToast','showBkModal','showBkBottomSheet'])assert.ok(documented.has(symbol),'Missing '+symbol);
 assert.equal(documented.size,entries.length,'Duplicate Flutter symbol');
 assert.equal(new Set(entries.map(entry=>entry.id)).size,entries.length,'Duplicate component id');
});
test('every component has all ten bilingual documentation sections and examples',()=>{
 assert.deepEqual(sections.map(s=>s.id),['description','usage','variants','api','states','accessibility','responsive','rtl','examples','guidance']);
 for(const entry of entries){
  for(const key of ['description','usage','variants','states','accessibility','responsive','rtl'])for(const lang of ['en','ar'])assert.ok(entry[key]?.[lang]?.trim().length>15&&!/^(TODO|TBD|N\/A)$/i.test(entry[key][lang]),`${entry.id}: ${key}/${lang}`);
  for(const key of ['do','dont'])for(const lang of ['en','ar'])assert.ok(entry.guidance[key][lang].length>15,`${entry.id}: ${key}/${lang}`);
  assert.ok(entry.examples.flutter.includes(entry.symbol),entry.id+': Flutter example does not use its API');
  assert.match(entry.examples.web,/<[a-z][\s\S]*>/i,entry.id+': missing HTML example');
  const markdown=fs.readFileSync('docs/reference/'+entry.id+'.md','utf8');
  for(const [index,section]of sections.entries())assert.ok(markdown.includes(`id="${index+1}-${section.id}"`),entry.id+': missing TOC destination');
 }
});
test('web examples use shipped CSS classes and documented bindings exist',()=>{
 const declarations=fs.readFileSync('packages/web/dist/index.d.ts','utf8');
 for(const entry of entries){
  for(const match of entry.examples.web.matchAll(/class="([^"]+)"/g))for(const name of match[1].split(' '))if(name.startsWith('bk-'))assert.ok(css.includes('.'+name),entry.id+': unknown CSS '+name);
  for(const name of entry.webBindings??[])assert.ok(declarations.includes('function '+name+'('),entry.id+': missing '+name);
 }
 for(const match of declarations.matchAll(/function (bindBokrah\w+)\(/g))assert.ok(entries.some(entry=>entry.webBindings?.includes(match[1])),'Undocumented binding '+match[1]);
});
test('generated API references point to their actual source declarations',()=>{
 for(const entry of componentReference){
  const line=fs.readFileSync(entry.source.path,'utf8').split(/\r?\n/)[entry.source.line-1];
  assert.ok(line.includes(entry.symbol),entry.id+': wrong source line');
  assert.ok(entry.api.flutter.includes(entry.symbol),entry.id+': empty API');
  assert.ok(fs.readFileSync('packages/flutter/test/documentation_examples.dart','utf8').includes(entry.examples.flutter),entry.id+': uncompiled example');
 }
});
