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

navigator.serviceWorker && navigator.serviceWorker.register('/sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});

if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        album: 'Whenever You Need Somebody',
        artwork: [
            { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
            { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
        ]
    });
}