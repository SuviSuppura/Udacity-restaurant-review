//importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
  e.waitUntil (
    caches.open('restaurants').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/data/restaurants.json',
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/register.js',
        '/img/',
        '/css/styles.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
