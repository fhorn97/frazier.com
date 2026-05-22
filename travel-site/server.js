const http = require('http');
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, 'locations.json');

const mime = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.css': 'text/css' };

function serve(req, res) {
  // API: save edits
  if (req.method === 'POST' && req.url === '/api/save') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      fs.writeFileSync(DATA, body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"ok":true}');
    });
    return;
  }
  // API: lookup nearby places via Nominatim
  if (req.url.startsWith('/api/lookup?')) {
    const params = new URL(req.url, 'http://localhost').searchParams;
    const lat = params.get('lat'), lng = params.get('lng');
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&zoom=18`;
    const nearbyUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&zoom=16`;
    const poiUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=8&bounded=1&viewbox=${+lng-0.005},${+lat+0.005},${+lng+0.005},${+lat-0.005}&q=`;
    Promise.all([
      fetch(url, { headers: { 'User-Agent': 'TravelSiteEditor/1.0' } }).then(r => r.json()),
      fetch(nearbyUrl, { headers: { 'User-Agent': 'TravelSiteEditor/1.0' } }).then(r => r.json()).catch(() => null),
      fetch(poiUrl + 'restaurant+hotel+bar+cafe+museum+park', { headers: { 'User-Agent': 'TravelSiteEditor/1.0' } }).then(r => r.json()).catch(() => [])
    ]).then(([reverse, broader, pois]) => {
      const nearby = pois || [];
      if (broader && broader.display_name && broader.display_name !== reverse.display_name) {
        nearby.unshift(broader);
      }
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ reverse, nearby }));
    }).catch(e => {
      res.writeHead(500);
      res.end(JSON.stringify({ error: e.message }));
    });
    return;
  }
  // Static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
  fs.createReadStream(filePath).pipe(res);
}

http.createServer(serve).listen(8080, () => console.log('Travel site editor: http://localhost:8080'));
