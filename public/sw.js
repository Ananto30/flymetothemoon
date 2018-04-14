// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('your-magic-cache').then(function (cache) {
            return cache.addAll([
                '.',
                'sw.js',
                'manifest.json',
                'assets/js/jquery.js',
                'assets/js/bootstrap.min.js',
                'assets/js/plugins.js',
                'assets/jplayer/jplayer/jquery.jplayer.js',
                'assets/js/jPlayer.js',
                'assets/js/mainVideo.js',
                'assets/js/site.js',
                'assets/css/master.css',
                'https://fonts.googleapis.com/css?family=Dancing+Script',
            ]);
        })
    );
});
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});