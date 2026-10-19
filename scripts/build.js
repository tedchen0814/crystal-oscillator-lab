// 把 crystal-lab.html（Artifact 格式，沒有 <html>/<head>）包成完整網頁，輸出到 site/index.html
// Vercel 部署與本機預覽共用同一個外框
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'crystal-lab.html');

function wrap(body) {
  // <div class="wrap"> 之前是 <title>、<meta>、字型與 <style>，搬進 <head>
  const cut = body.indexOf('<div class="wrap">');
  const headPart = cut > 0 ? body.slice(0, cut) : '';
  const bodyPart = cut > 0 ? body.slice(cut) : body;
  return '<!doctype html>\n<html lang="zh-Hant">\n<head>\n<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
    '<meta name="description" content="晶體振盪互動教學：Pierce 振盪器起振、C1/C2/Rs/Rf 匹配、ppm 與時間誤差、溫度補償與 TCXO 接法。">\n' +
    '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}' +
    'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n' +
    headPart + '</head>\n<body>\n' + bodyPart + '\n</body>\n</html>\n';
}

function build() {
  const out = path.join(root, 'site');
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'index.html'), wrap(fs.readFileSync(src, 'utf8')));
  return path.join(out, 'index.html');
}

module.exports = { wrap, src };

if (require.main === module) console.log('built ' + build());
