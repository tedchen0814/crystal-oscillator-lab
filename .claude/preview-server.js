// 本機預覽：用和 Vercel 相同的外框（scripts/build.js）即時提供 crystal-lab.html
const http = require('http');
const fs = require('fs');
const { wrap, src } = require('../scripts/build.js');

http.createServer((req, res) => {
  fs.readFile(src, 'utf8', (err, body) => {
    if (err) { res.writeHead(500); res.end(String(err)); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(wrap(body));
  });
}).listen(4173, () => console.log('preview on http://localhost:4173'));
