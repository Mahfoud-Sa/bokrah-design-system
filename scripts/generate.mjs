import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>JSON.parse(fs.readFileSync(path.join(root,'tokens',name),'utf8'));
const t=read('tokens.json'),icons=read('icons.json'),categories=read('categories.json');
const kebab=s=>s.replace(/[A-Z]/g,c=>'-'+c.toLowerCase());
const title=s=>s[0].toUpperCase()+s.slice(1);
const block=(selector,values)=>selector+' {\n'+Object.entries(values).map(([k,v])=>'  --bk-'+kebab(k)+': '+v+';').join('\n')+'\n}\n';
const pxGroups=['space','radius','fontSize','layout','borderWidth','iconSize','iconStroke'];
const numberGroups=['fontWeight','lineHeight','elevation','accessibility'];
let css='/* Generated. Edit tokens/*.json and run npm run generate. */\n';
for(const [mode,colors] of Object.entries(t.color))css+=block(mode==='light'?':root, [data-bk-theme="light"]':`[data-bk-theme="${kebab(mode)}"]`,colors);
const values={};
for(const group of [...pxGroups,...numberGroups,'motion','letterSpacing'])for(const [key,v] of Object.entries(t[group]))values[kebab(group)+'-'+kebab(key)]=v+(pxGroups.includes(group)?'px':group==='motion'?'ms':group==='letterSpacing'?'em':'');
for(const key of ['focusWidth','focusOffset','touchTarget'])values['accessibility-'+kebab(key)]=t.accessibility[key]+'px';
values['accessibility-reduced-motion']=t.accessibility.reducedMotion+'ms';
for(const [key,v] of Object.entries(t.font))values['font-'+key]=`'${v}'`;
for(const [key,v] of Object.entries(t.easing))values['easing-'+key]=`cubic-bezier(${v.join(',')})`;
for(const [key,v] of Object.entries(t.shadow))values['shadow-'+key]=`${v.x}px ${v.y}px ${v.blur}px ${v.spread}px rgb(0 0 0 / ${v.opacity})`;
for(const [key,v] of Object.entries(t.dropShadow))values['drop-shadow-'+key]=`drop-shadow(${v.x}px ${v.y}px ${v.blur}px rgb(0 0 0 / ${v.opacity}))`;
for(const [key,v] of Object.entries(t.transition))values['transition-'+key]=`${t.motion[v.duration]}ms cubic-bezier(${t.easing[v.easing].join(',')})`;
for(const group of ['columns','gutter','margin','breakpoint'])for(const [key,v] of Object.entries(t.grid[group]))values[`grid-${group}-${key}`]=v+(group==='columns'?'':'px');
css+=block(':root',values);
css+=`.bk-container{inline-size:100%;max-inline-size:${t.grid.maxWidth}px;margin-inline:auto;padding-inline:var(--bk-grid-margin-compact)}\n.bk-layout-grid{display:grid;grid-template-columns:repeat(var(--bk-grid-columns-compact),minmax(0,1fr));gap:var(--bk-grid-gutter-compact)}\n`;
for(const key of ['medium','wide'])css+=`@media(min-width:${t.grid.breakpoint[key]}px){.bk-container{padding-inline:var(--bk-grid-margin-${key})}.bk-layout-grid{grid-template-columns:repeat(var(--bk-grid-columns-${key}),minmax(0,1fr));gap:var(--bk-grid-gutter-${key})}}\n`;
const dartColor=h=>'Color(0xFF'+h.slice(1).toUpperCase()+')';
let dart="// Generated. Edit tokens/*.json and run npm run generate.\nimport 'package:flutter/material.dart';\n\n";
for(const [mode,colors] of Object.entries(t.color))dart+='abstract final class Bk'+title(mode)+'Colors {\n'+Object.entries(colors).map(([k,v])=>'  static const '+k+' = '+dartColor(v)+';').join('\n')+'\n}\n';
dart+='abstract final class BkFont {\n'+Object.entries(t.font).map(([k,v])=>`  static const ${k} = ${JSON.stringify(v)};`).join('\n')+'\n}\n';
dart+='abstract final class BkPalettes {\n  static const Map<String, Map<String, Color>> all = {\n'+Object.entries(t.color).map(([mode,colors])=>`    '${kebab(mode)}': {${Object.keys(colors).map(k=>`'${k}': Bk${title(mode)}Colors.${k}`).join(', ')}},`).join('\n')+'\n  };\n}\n';
for(const group of [...pxGroups,...numberGroups,'motion','letterSpacing'])dart+='abstract final class Bk'+title(group)+' {\n'+Object.entries(t[group]).map(([k,v])=>'  static const double '+k+' = '+(Number.isInteger(v)?v+'.0':String(v))+';').join('\n')+'\n}\n';
dart+='abstract final class BkEasing {\n'+Object.entries(t.easing).map(([k,v])=>`  static const ${k} = Cubic(${v.map(n=>Number(n).toFixed(1)).join(', ')});`).join('\n')+'\n}\n';
dart+='abstract final class BkTransition {\n'+Object.entries(t.transition).map(([k,v])=>`  static const ${k} = (duration: Duration(milliseconds: ${t.motion[v.duration]}), curve: BkEasing.${v.easing});`).join('\n')+'\n}\n';
// JSON doubles, strings and collection literals are valid Dart constant expressions.
dart+='abstract final class BkGrid {\n'+Object.entries(t.grid).map(([k,v])=>`  static const ${k} = ${JSON.stringify(v)};`).join('\n')+'\n}\n';
for(const [group,klass,shadowType] of [['shadow','BkShadow','BoxShadow'],['dropShadow','BkDropShadow','Shadow']])dart+=`abstract final class ${klass} {\n`+Object.entries(t[group]).map(([k,v])=>`  static const ${k} = ${shadowType}(color: Color(0x${Math.round(v.opacity*255).toString(16).padStart(2,'0').toUpperCase()}000000), offset: Offset(${v.x}.0, ${v.y}.0), blurRadius: ${v.blur}.0${shadowType==='BoxShadow'?`, spreadRadius: ${v.spread}.0`:''});`).join('\n')+'\n}\n';
const reference=categories.map(c=>({...c,values:Object.fromEntries(c.groups.map(group=>[group,t[group]]))}));
const svg=(name,paths)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g${name==='arrowForward'?' data-directional="true"':''}>${paths.map(commands=>'<path d="'+commands.map(([op,...coords])=>op+coords.join(' ')).join(' ')+'"/>').join('')}</g></svg>\n`;
const outputs={
 'packages/web/dist/tokens.css':css,
 'packages/web/dist/tokens.json':JSON.stringify(t,null,2)+'\n',
 'packages/web/dist/tokens.js':'// Generated.\nexport const tokens = '+JSON.stringify(t,null,2)+';\n',
 'packages/web/dist/foundations.js':'// Generated.\nexport const foundations = '+JSON.stringify(reference,null,2)+';\nexport const icons = '+JSON.stringify(icons,null,2)+';\n',
 'packages/flutter/lib/src/tokens.g.dart':dart,
 'packages/flutter/lib/src/foundations.g.dart':`// Generated.\nabstract final class BkFoundations {\n  static const categories = ${JSON.stringify(reference,null,2)};\n  static const icons = ${JSON.stringify(icons,null,2)};\n}\n`
};
for(const [name,paths] of Object.entries(icons))outputs[`packages/web/dist/icons/${name}.svg`]=svg(name,paths);
const fontManifest=JSON.parse(fs.readFileSync(path.join(root,'tokens/fonts.json'),'utf8'));
outputs['packages/web/dist/fonts.css']='/* Generated from tokens/fonts.json. */\n'+fontManifest.fonts.map(font=>`@font-face{font-family:'${fontManifest.family}';src:url('./fonts/${font.file}') format('opentype');font-weight:${font.weight};font-style:${font.style};font-display:swap}`).join('\n')+'\n';
let stale=false;
for(const [name,content] of Object.entries(outputs)){
 const target=path.join(root,name);
 if(process.argv.includes('--check')){if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==content){console.error('Stale generated file: '+name);stale=true}}
 else{fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content)}
}
if(stale)process.exit(1);
console.log(process.argv.includes('--check')?'Generated foundations are current.':'Generated web and Flutter foundations.');
