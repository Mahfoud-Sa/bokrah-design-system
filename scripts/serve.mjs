import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.ttf':'font/ttf','.wasm':'application/wasm','.svg':'image/svg+xml','.png':'image/png'};
http.createServer((req,res)=>{
 let pathname;
 try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end()}
 if(pathname==='/')pathname='/examples/web/index.html';
 else if(pathname.endsWith('/'))pathname+='index.html';
 const file=path.resolve(root,'.'+pathname);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}
 fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data)});
}).listen(4180,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4180/examples/web/'));
