import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8080;
const staticDir = path.join(__dirname, process.env.STATIC_DIR || 'dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.map': 'application/json; charset=utf-8',
};

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, 'http://localhost');
  let pathname = requestUrl.pathname;

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const filePath = path.join(staticDir, pathname);
  const ext = path.extname(filePath);

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    if (!ext) {
      const fallbackPath = path.join(staticDir, 'index.html');
      if (existsSync(fallbackPath) && statSync(fallbackPath).isFile()) {
        res.writeHead(200, { 'Content-Type': mimeTypes['.html'] });
        createReadStream(fallbackPath).pipe(res);
        return;
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
