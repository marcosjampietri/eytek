if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),f={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5ConTTVV47yOeJivVPKpu/_buildManifest.js",revision:"11b17b772d5ce08f2c341c5777d3630a"},{url:"/_next/static/5ConTTVV47yOeJivVPKpu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2.bcf1b73cf11628f9.js",revision:"bcf1b73cf11628f9"},{url:"/_next/static/chunks/417.fe110ff0ebc9fc59.js",revision:"fe110ff0ebc9fc59"},{url:"/_next/static/chunks/438.122b802c6a4dd008.js",revision:"122b802c6a4dd008"},{url:"/_next/static/chunks/588.c11437b82fbe3a68.js",revision:"c11437b82fbe3a68"},{url:"/_next/static/chunks/651.8aaebbbff3fb4a6d.js",revision:"8aaebbbff3fb4a6d"},{url:"/_next/static/chunks/712.cd94c5db694b4a53.js",revision:"cd94c5db694b4a53"},{url:"/_next/static/chunks/741.5c49c5ccb4a0a8f7.js",revision:"5c49c5ccb4a0a8f7"},{url:"/_next/static/chunks/84.fa1a9faad458f9eb.js",revision:"fa1a9faad458f9eb"},{url:"/_next/static/chunks/857.f0cf15016016c5e1.js",revision:"f0cf15016016c5e1"},{url:"/_next/static/chunks/863.2239141ec368a230.js",revision:"2239141ec368a230"},{url:"/_next/static/chunks/873-fbb3d18746b3876f.js",revision:"fbb3d18746b3876f"},{url:"/_next/static/chunks/framework-3583eef75b58b7b2.js",revision:"3583eef75b58b7b2"},{url:"/_next/static/chunks/main-3c6124877e81da77.js",revision:"3c6124877e81da77"},{url:"/_next/static/chunks/pages/404-9c5572e0df7d2542.js",revision:"9c5572e0df7d2542"},{url:"/_next/static/chunks/pages/500-0273ca2ded39796a.js",revision:"0273ca2ded39796a"},{url:"/_next/static/chunks/pages/_app-2c91186c23902791.js",revision:"2c91186c23902791"},{url:"/_next/static/chunks/pages/_error-3c9a37b9888d2d4e.js",revision:"3c9a37b9888d2d4e"},{url:"/_next/static/chunks/pages/about-1e432247183ec4fb.js",revision:"1e432247183ec4fb"},{url:"/_next/static/chunks/pages/index-cd824241e78808a4.js",revision:"cd824241e78808a4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-dbfc32c45dc0a8c9.js",revision:"dbfc32c45dc0a8c9"},{url:"/_next/static/css/a68dc74709f1eef2.css",revision:"a68dc74709f1eef2"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Modena Sans.otf",revision:"b1579e82835f8d4cc5495f5f1caa0c27"},{url:"/fonts/Modena Script.otf",revision:"0815612e5bb20d7a655fde7cbfd2f922"},{url:"/fonts/ModenaSans-Regular.eot",revision:"69bb6c79dd3347cc923b89ffe19c4621"},{url:"/fonts/ModenaSans-Regular.svg",revision:"f5ee89a0a18422a0a479edf6bc7e4dff"},{url:"/fonts/ModenaSans-Regular.woff",revision:"937e8867e185aa58c3240262ebd85264"},{url:"/fonts/ModenaSans-Regular.woff2",revision:"d33790ea0a11f1381df17a79885d99c7"},{url:"/fonts/ModenaScript-Regular.eot",revision:"e32cd2f82d1962e16528550132a50fa9"},{url:"/fonts/ModenaScript-Regular.svg",revision:"e61c38d838ad252f9e57c74ee450a033"},{url:"/fonts/ModenaScript-Regular.woff",revision:"5de4cc4e3756f82263ce421bbe5049c1"},{url:"/fonts/ModenaScript-Regular.woff2",revision:"efc836d5dbc715147acf7e75e2af4d6d"},{url:"/fonts/Polly-Bold.otf",revision:"05a7c32211a49088865605459cdf4b78"},{url:"/fonts/Polly-Bold.woff",revision:"e30a24fbd3ca338d879d352f8e93b9ad"},{url:"/fonts/Polly-Bold.woff2",revision:"69b0b25731bd368a926302ac537c9742"},{url:"/fonts/Polly-Regular.otf",revision:"b5b5dc0a416c966e62f676f7c75312c8"},{url:"/fonts/Polly-Regular.woff",revision:"7e43360e1f49f4a2a67a4d94758bb030"},{url:"/fonts/Polly-Regular.woff2",revision:"7ab4ebb44575819cd63213878f2a1614"},{url:"/fonts/Polly-Thin.otf",revision:"e790affd61b5f7cd239f85b7853f0f2f"},{url:"/fonts/Polly-Thin.woff",revision:"f12a00bcbb24df047fad43663c911f65"},{url:"/fonts/Polly-Thin.woff2",revision:"ec9051651897f4196cedad8d55848a3a"},{url:"/icons/circle.svg",revision:"42da81ea71ff5924005dbe3f8bec7651"},{url:"/icons/circleci.svg",revision:"8d235a94a48907e28aaa2fc432898593"},{url:"/img/SSC.jpg",revision:"7664ba16f81f7e6ebd697c48199376ad"},{url:"/img/andrea.jpg",revision:"6b9d278cde611b2716956a5d1d977f4f"},{url:"/img/e-shop.jpg",revision:"029c8fb88c44d587c2493b51a4d280ab"},{url:"/img/kll.jpg",revision:"9d5acf0d3dc07f879a7ca6988a37169a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));