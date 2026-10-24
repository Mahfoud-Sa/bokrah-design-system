import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {tokens} from '../packages/web/dist/index.js';
const manifest=JSON.parse(fs.readFileSync('tokens/fonts.json','utf8'));
function tables(buffer){const result={};for(let i=0;i<buffer.readUInt16BE(4);i++){const at=12+i*16;result[buffer.toString('ascii',at,at+4)]=buffer.readUInt32BE(at+8)}return result;}
function hasGlyph(buffer,table,char){const code=char.codePointAt(0),cmap=table.cmap;
 for(let i=0;i<buffer.readUInt16BE(cmap+2);i++){
  const record=cmap+4+i*8,platform=buffer.readUInt16BE(record),sub=cmap+buffer.readUInt32BE(record+4);
  if(![0,3].includes(platform)||buffer.readUInt16BE(sub)!==4)continue;
  const count=buffer.readUInt16BE(sub+6)/2,end=sub+14,start=end+count*2+2,delta=start+count*2,range=delta+count*2;
  for(let j=0;j<count;j++){const first=buffer.readUInt16BE(start+j*2),last=buffer.readUInt16BE(end+j*2);if(code<first||code>last)continue;
   const adjustment=buffer.readInt16BE(delta+j*2),offset=buffer.readUInt16BE(range+j*2);
   let glyph=offset===0?(code+adjustment)&65535:buffer.readUInt16BE(range+j*2+offset+(code-first)*2);
   if(offset!==0&&glyph!==0)glyph=(glyph+adjustment)&65535;if(glyph!==0)return true;
  }
 }return false;
}
test('Somar Sans is registered with real normal/italic weights in both packages',()=>{
 assert.equal(manifest.family,'Somar Sans');
 assert.deepEqual(Object.values(tokens.font),['Somar Sans','Somar Sans','Somar Sans']);
 const css=fs.readFileSync('packages/web/dist/fonts.css','utf8'),pubspec=fs.readFileSync('packages/flutter/pubspec.yaml','utf8');
 assert.equal(manifest.fonts.length,18);
 for(const style of ['normal','italic'])assert.deepEqual(manifest.fonts.filter(font=>font.style===style).map(font=>font.weight),[100,200,300,400,500,600,700,800,900]);
 assert.ok(pubspec.includes('family: Somar Sans'));
 for(const font of manifest.fonts){
  assert.ok(css.includes(`src:url('./fonts/${font.file}') format('opentype');font-weight:${font.weight};font-style:${font.style}`));
  const registration=pubspec.split('asset: assets/fonts/'+font.file)[1]?.split('- asset:')[0];
  assert.ok(registration?.includes('weight: '+font.weight),font.file+' weight registration');
  assert.equal(registration.includes('style: italic'),font.style==='italic');
  for(const folder of ['packages/web/dist/fonts','packages/flutter/assets/fonts']){
   const buffer=fs.readFileSync(folder+'/'+font.file),table=tables(buffer);
   assert.equal(buffer.toString('ascii',0,4),'OTTO');
   assert.equal(createHash('sha256').update(buffer).digest('hex'),font.sha256,font.file+' modified');
   assert.equal(buffer.readUInt16BE(table['OS/2']+4),font.weight);
   assert.ok(table.GSUB!==undefined,font.file+' Arabic shaping table');
   for(const char of 'Bokrah0123456789بكرةالمطعم')assert.ok(hasGlyph(buffer,table,char),font.file+' missing '+char);
  }
 }
});
