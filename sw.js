// 간단 캐시용 서비스 워커
const CACHE = 'love-arcana-cache-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  // 필요하면 이미지도 캐시에 추가
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});