// Offline cache for the Day 3 Maths Lab.
// After the first visit, the page, the editor, the fonts and Python itself
// are served from this cache, so the lab keeps working without internet.
// Change CACHE whenever you publish a new version of index.html.
const CACHE = 'day3-lab-v23';

const CORE = [
  './',
  'index.html',
  'vendor/fonts/fonts.css',
  'assets/smvec-logo.png',
  'vendor/katex/katex.min.css',
  'vendor/katex/katex.min.js',
  'vendor/codemirror/codemirror.css',
  'vendor/codemirror/codemirror.js',
  'vendor/codemirror/python.js',
  'vendor/codemirror/matchbrackets.js',
  'vendor/codemirror/closebrackets.js',
  'vendor/codemirror/runmode.js',
  'vendor/pyodide/pyodide.js',
  'vendor/pyodide/pyodide.asm.js',
  'vendor/pyodide/pyodide.asm.wasm',
  'vendor/pyodide/python_stdlib.zip',
  'vendor/pyodide/pyodide-lock.json',
  'vendor/pyodide/package.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // The page itself: try the network first so updates show up, fall back to the cache offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // Everything else (Python, editor, fonts): cache first, then network.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
