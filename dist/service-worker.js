if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const n=s=>e(s,r),u={module:{uri:r},exports:t,require:n};i[r]=Promise.all(l.map((s=>u[s]||n(s)))).then((s=>(c(...s),t)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"facility_app"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"index.html",revision:"79bc3d08d0b014c03b9f3cf8e1520d83"},{url:"manifest.json",revision:"dbbc8dc424ea50bbcc4bbb1a62ffc77e"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"static/css/allFacility.48e57111.css",revision:null},{url:"static/css/app.dbe1ebcb.css",revision:null},{url:"static/css/chunk-vendors.53e72368.css",revision:null},{url:"static/css/feedback.a9353cc7.css",revision:null},{url:"static/css/feedback/feedbackDetail.b80d7139.css",revision:null},{url:"static/css/feedback/my.367283cd.css",revision:null},{url:"static/css/home.7fdc4b7b.css",revision:null},{url:"static/css/index.837a1f4e.css",revision:null},{url:"static/css/login.b86dac86.css",revision:null},{url:"static/css/map.f9842b37.css",revision:null},{url:"static/css/my.19094bc3.css",revision:null},{url:"static/css/record/recordDetail.1eea5b58.css",revision:null},{url:"static/css/reservation/reservationResult.e30448b5.css",revision:null},{url:"static/css/room.66703603.css",revision:null},{url:"static/css/roomDetail.1ef7150d.css",revision:null},{url:"static/css/scanner.e94e9d1d.css",revision:null},{url:"static/css/set.8cb6f55e.css",revision:null},{url:"static/img/dui6.8304a6fb.png",revision:null},{url:"static/img/feekback.efde3bfa.png",revision:null},{url:"static/img/logo.0b533bbf.jpg",revision:null},{url:"static/img/my_page_top_background.f3047be8.png",revision:null},{url:"static/img/yuyue3.95181698.png",revision:null},{url:"static/js/198.c66053ec.js",revision:null},{url:"static/js/443.a72c52fa.js",revision:null},{url:"static/js/663.07eef017.js",revision:null},{url:"static/js/707.d24e9772.js",revision:null},{url:"static/js/allFacility.458c3106.js",revision:null},{url:"static/js/app.3c1b19c2.js",revision:null},{url:"static/js/chunk-vendors.855918d2.js",revision:null},{url:"static/js/feedback.a7e5d5e4.js",revision:null},{url:"static/js/feedback/feedbackDetail.cbf27012.js",revision:null},{url:"static/js/feedback/my.6fe43e24.js",revision:null},{url:"static/js/home.ca8c452b.js",revision:null},{url:"static/js/index.8fe8862a.js",revision:null},{url:"static/js/login.97b5cf7a.js",revision:null},{url:"static/js/map.e3700ac7.js",revision:null},{url:"static/js/my.9925307e.js",revision:null},{url:"static/js/record/recordDetail.2289ca63.js",revision:null},{url:"static/js/reservation/reservationResult.b3bc2969.js",revision:null},{url:"static/js/room.9ddeb852.js",revision:null},{url:"static/js/roomDetail.572f7996.js",revision:null},{url:"static/js/scanner.5ac163bf.js",revision:null},{url:"static/js/set.1cd56c85.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
