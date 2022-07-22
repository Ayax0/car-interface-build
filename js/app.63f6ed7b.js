(function(){"use strict";var e={6341:function(e,t,n){var r=n(9963),o=n(3907);n(2801);const a=n(9669);function i(e){const t=btoa("7d3a99474aa94be9b78b1040f712a7a5:487f1e587730445798647d5d10f6fec8"),n=new URLSearchParams;return n.append("grant_type","refresh_token"),n.append("refresh_token",e),a.post("https://accounts.spotify.com/api/token",n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${t}`}})}var s=e=>new Promise(((t,n)=>{const r=a.create({baseURL:"https://api.spotify.com/v1"});r.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${r.access_token}`,e))),i(e).then((n=>(r.refresh_token=e,r.access_token=n.data.access_token,r.scope=n.data.scope,t(r)))).catch((e=>n(e.response)))})),c=n(2914),u=n(9669),l=n.n(u),d=(0,o.MT)({state(){return{accounts:[],account:void 0,current_playing:void 0,status:void 0,primary:"rgb(22,22,22)",secondary:"rgb(10,10,10)",search_items:void 0,search_query:void 0}},getters:{accounts(e){return e.accounts.sort(((e,t)=>e.display_name<t.display_name?-1:e.display_name==t.display_name?0:1))},image(e){if(e.current_playing)return e.current_playing.album.images.sort(((e,t)=>e.width>t.width?-1:1))[0]},artists(e){if(e.current_playing)return e.current_playing.artists.map((e=>e.name)).join(", ")}},mutations:{addAccount(e,t){e.accounts.push(t)},setAccount(e,t){e.account=t},setCurrentPlaying(e,t){e.current_playing=t},setStatus(e,t){e.status=t},setPrimary(e,t){e.primary=t},setSecondary(e,t){e.secondary=t},setSearchItems(e,t){e.search_items=t},setSearchQuery(e,t){e.search_query=t}},actions:{async init({commit:e,state:t,dispatch:r}){const o=async()=>new Promise(((e,t)=>{l().get(window.location.origin+"/variables.json").then((t=>e(t.data))).catch((()=>{const r=n(5668);r?e(r):t()}))})),a=await o(),i=a.refresh_tokens;for(const n of i)s(n).then((t=>{t.get("/me").then((n=>{e("addAccount",{...n.data,api:t,getAccessToken:()=>t.access_token,getRefreshToken:()=>t.refresh_token})})).catch((e=>console.error(e.response)))})).catch((e=>console.error(e)));window.onSpotifyWebPlaybackSDKReady=()=>{const e=new window.Spotify.Player({name:"Opel Corsa C14",getOAuthToken:e=>e(t.account.api.access_token),volume:.1});e.addListener("ready",(e=>{console.log(e),setTimeout((()=>t.account.api.put("/me/player",{device_ids:[e.device_id],play:!0}).catch((e=>console.log(e.response)))),1e3)})),e.addListener("player_state_changed",(e=>{r("setStatus",e)})),e.connect()}},setStatus({commit:e,state:t},n){const r=n.track_window.current_track,o=r.album.images.sort(((e,t)=>e.width>t.width?-1:1))[0];t.current_playing&&r.id==t.current_playing.id||(0,c.j)(o).then((t=>{e("setPrimary",`rgb(${t[0].r},${t[0].g},${t[0].b})`),e("setSecondary",`rgb(${t[1].r},${t[1].g},${t[1].b})`)})),e("setCurrentPlaying",r),e("setStatus",n)},search({commit:e,state:t}){t.search_query?t.account.api.get("/search?q="+encodeURI(t.search_query)+"&type=artist,playlist,track,show").then((t=>e("setSearchItems",t.data))).catch((e=>console.error(e.response))):e("setSearchItems",void 0)}}}),h=n(6252);const f={id:"app"};function p(e,t,n,r,o,a){const i=(0,h.up)("router-view");return(0,h.wg)(),(0,h.iD)("div",f,[(0,h.Wm)(i)])}var g={watch:{$route:{immediate:!0,handler(e){document.title=`Lorem - ${e.name}`}}},created(){this.init()},methods:{...(0,o.nv)(["init"])}},m=n(3744);const b=(0,m.Z)(g,[["render",p]]);var v=b,y=n(2201),w=[{path:"/",name:"Home",component:()=>n.e(168).then(n.bind(n,8168))},{path:"/search",name:"Search",component:()=>n.e(566).then(n.bind(n,2566))},{path:"/login",name:"Login",component:()=>n.e(636).then(n.bind(n,2636))},{path:"/show/:id",name:"Show",component:()=>n.e(828).then(n.bind(n,2828))},{path:"/playlist/:id",name:"Playlist",component:()=>n.e(617).then(n.bind(n,7617))}];const _=(0,y.p7)({history:(0,y.r5)(),routes:w});var k=_,S=n(6542),A=n(999),C=n(5205);(0,C.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),A.Z.color="rgba(255, 255, 255, 0.35)",A.Z.zIndex=100;const O=(0,r.ri)(v);O.component("Icon",S.JO),O.directive("ripple",A.Z),O.use(k),O.use(d),O.mount("#app")},2914:function(e,t,n){function r(e){return new Promise(((t,n)=>{var r,o,a,i,s=5,c={r:0,g:0,b:0},u=50,l=220,d=20,h=10,f=document.createElement("canvas"),p=f.getContext&&f.getContext("2d"),g=new Image,m=-4,b=[],v=[];if(!p)return c;a=f.height=e.height,o=f.width=e.width,g.crossOrigin="anonymous",g.src=e.url,g.onload=()=>{p.drawImage(g,0,0);try{r=p.getImageData(0,0,o,a)}catch(f){return n(c)}i=r.data.length;while((m+=4*s)<i){const e=[r.data[m],r.data[m+1],r.data[m+2]].sort(),t=Math.abs(e[0]-e[2]);if(t>50){const e={r:Math.round(r.data[m]/d)*d,g:Math.round(r.data[m+1]/d)*d,b:Math.round(r.data[m+2]/d)*d};let t=b.findIndex((t=>t.r==e.r&&t.g==e.g&&t.b==e.b));-1!=t?b[t].c+=1:b.push({...e,c:1})}if(!(r.data[m]<u&&r.data[m+1]<u&&r.data[m+2]<u)&&r.data[m]<l&&r.data[m+1]<l&&r.data[m+2]<l){const e={r:Math.round(r.data[m]/d)*d,g:Math.round(r.data[m+1]/d)*d,b:Math.round(r.data[m+2]/d)*d};let t=v.findIndex((t=>t.r==e.r&&t.g==e.g&&t.b==e.b));-1!=t?v[t].c+=1:v.push({...e,c:1})}}b=b.sort(((e,t)=>e.c<t.c?-1:e.c==t.c?0:1)).reverse(),v=v.sort(((e,t)=>e.c<t.c?-1:e.c==t.c?0:1)).reverse(),console.log("pallette A:",b[0],b[1],b[2]),console.log("pallette B:",v[0],v[1],v[2]);var e=[];console.log("1. selection round");for(const t of b)if(0==e.length&&e.push(t),1==e.length){let t=1;while(1==e.length&&t<b.length){let n=b[t];(Math.abs(n.r-e[0].r)>h||Math.abs(n.g-e[0].g)>h||Math.abs(n.b-e[0].b)>h)&&e.push(n),t++}}if(2==e.length)return t(e);console.log("2. selection round");for(const t of v)if(0==e.length&&e.push(t),1==e.length){let t=1;while(1==e.length&&t<b.length){let n=b[t];(Math.abs(n.r-e[0].r)>h||Math.abs(n.g-e[0].g)>h||Math.abs(n.b-e[0].b)>h)&&e.push(n),t++}}if(2==e.length)return t(e);console.log("3. selection round");for(const t of b)0==e.length&&e.push(t),1==e.length&&e.push(t);if(2==e.length)return t(e);console.log("4. selection round");for(const t of v)0==e.length&&e.push(t),1==e.length&&e.push(t);return 2==e.length?t(e):t([{r:22,g:22,b:22},{r:48,g:48,b:48}])}}))}n.d(t,{j:function(){return r}})},5668:function(e){e.exports=JSON.parse('{"refresh_tokens":["AQA7bfvhDvFzeqCgpbnvhK4L6VbqUmghFI7uZ18hhrde5sEYlkpiFzDvG6GkYoAfpNeaqfI-fx29ddRNhPFJswo_fcfQ8pJ88tDSJfLES7JhSd2eM3VbkW8j49ceLvYmDGI"]}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{168:"bdb8ebf2",566:"3af9a5b9",617:"174b75d2",636:"50fb5cc8",828:"490a4243"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{168:"e5e959bf",566:"013ff264",617:"3be7e1d4",636:"5d98a7c5",828:"4133385b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-boilerplate:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={168:1,566:1,617:1,636:1,828:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkvue_boilerplate"]=self["webpackChunkvue_boilerplate"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6341)}));r=n.O(r)})();
//# sourceMappingURL=app.63f6ed7b.js.map