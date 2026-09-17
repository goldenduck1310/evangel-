import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const target=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return}const data=await readFile(target);res.writeHead(200,{'Content-Type':({'html':'text/html; charset=utf-8','css':'text/css','js':'text/javascript','svg':'image/svg+xml','jpg':'image/jpeg','png':'image/png'})[target.split('.').pop()]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404).end('Not found')}}).listen(5173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:5173'));
