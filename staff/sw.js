var C="afq-v1";
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!="GET"||new URL(r.url).origin!=location.origin)return;
 var k=r.url.split("?")[0];
 e.respondWith(fetch(r.url,{cache:"no-cache"}).then(function(res){if(res&&res.ok){var c2=res.clone();caches.open(C).then(function(c){c.put(k,c2)})}return res}).catch(function(){return caches.match(k).then(function(m){return m||caches.match(new URL("./",location).href)})}))});
