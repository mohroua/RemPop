const CACHE_NAME = 'hifz-app-cache-v1';
const ASSETS = [
    '/hifz_app_pwa.html',
    '/manifest.json',
    '/css/style.css',
    '/js/app.js',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png',
    '/' // إضافة المسار الجذري
];

// 1. حدث التثبيت (Install Event)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache: adding core assets');
                return cache.addAll(ASSETS);
            })
    );
    self.skipWaiting();
});

// 2. حدث الجلب (Fetch Event) - لخدمة الملفات من الكاش أولاً
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // ارجع الملف من الكاش إذا كان موجوداً
                if (response) {
                    return response;
                }
                
                // وإلا، قم بالبحث عنه في الشبكة
                return fetch(event.request);
            })
    );
});

// 3. حدث التنشيط (Activate Event) - لتنظيف الكاش القديم
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});
