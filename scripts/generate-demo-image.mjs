import fs from 'node:fs';
import zlib from 'node:zlib';
const width=640,height=360;
const colors={cream:[247,247,240],green:[22,75,57],sage:[184,208,161],white:[255,255,255],ink:[22,63,50]};
const pixels=Buffer.alloc((width*4+1)*height);
for(let y=0;y<height;y++){const offset=y*(width*4+1);pixels[offset]=0;for(let x=0;x<width;x++){let color=colors.cream;
 if(x>=28&&x<=612&&y>=28&&y<=332)color=colors.green;
 for(const [cx,cy] of [[190,180],[450,180]]){const d=Math.hypot(x-cx,y-cy);if(d<104)color=colors.sage;if(d<78)color=colors.white;if(d<62)color=colors.cream;}
 if(x>=310&&x<=330&&y>=75&&y<=285)color=colors.sage;
 const i=offset+1+x*4;pixels[i]=color[0];pixels[i+1]=color[1];pixels[i+2]=color[2];pixels[i+3]=255;}}
function crc32(buffer){let crc=0xffffffff;for(const byte of buffer){crc^=byte;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0)}return (crc^0xffffffff)>>>0}
function chunk(name,data){const type=Buffer.from(name);const length=Buffer.alloc(4);length.writeUInt32BE(data.length);const crc=Buffer.alloc(4);crc.writeUInt32BE(crc32(Buffer.concat([type,data])));return Buffer.concat([length,type,data,crc])}
const header=Buffer.alloc(13);header.writeUInt32BE(width,0);header.writeUInt32BE(height,4);header[8]=8;header[9]=6;
fs.writeFileSync('examples/flutter/assets/dining-room.png',Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',header),chunk('IDAT',zlib.deflateSync(pixels)),chunk('IEND',Buffer.alloc(0))]));
fs.writeFileSync('examples/web/assets/dining-room.svg',`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="#f7f7f0"/><rect x="28" y="28" width="584" height="304" fill="#164b39"/>${[190,450].map(cx=>`<circle cx="${cx}" cy="180" r="104" fill="#b8d0a1"/><circle cx="${cx}" cy="180" r="78" fill="white"/><circle cx="${cx}" cy="180" r="62" fill="#f7f7f0"/>`).join('')}<path d="M310 75h20v210h-20z" fill="#b8d0a1"/></svg>\n`);
