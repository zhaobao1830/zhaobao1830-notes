import{d as f,N as $,L as D,g as d,o as s,c as r,m as k,e as c,a as w,_,D as I,k as p,F as m,f as M,n as y,t as h,b as L,E as B,M as N,u as C,a3 as g,y as T,v,a4 as F,a5 as R,a6 as V,a7 as S,a8 as j,a9 as H,aa as z,ab as O,ac as x,ad as W,X as G,j as K,z as U,ae as X,af as q,ag as J}from"./chunks/framework.1nBpG9uI.js";import{t as b}from"./chunks/theme.yFw0sPQB.js";const Q={class:"copyright"},Y=["src"],Z=f({__name:"MDocFooter",setup(e){const t=$("DEV"),n=D(),a=d(()=>n.path.replace("/mm-notes",""));return(i,o)=>(s(),r("div",Q,[k(t)?c("",!0):(s(),r("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${a.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,Y)),w(" Copyright © 2023-present zhaobao1830 ")]))}}),ee=_(Z,[["__scopeId","data-v-480aed3a"]]),te=/[\u0000-\u001f]/g,ne=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,ae=/[\u0300-\u036F]/g,E=e=>e.normalize("NFKD").replace(ae,"").replace(te,"").replace(ne,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),oe=["href"],se={class:"box-header"},re=["innerHTML"],ie={key:1,class:"icon"},ce=["src","alt"],le=["id"],ue={key:1,class:"desc"},de=f({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=d(()=>t.title?E(t.title):""),a=d(()=>typeof t.icon=="object"?t.icon.svg:""),i=d(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(o,Ce)=>{const P=I("Badge");return o.link?(s(),r("a",{key:0,class:"m-nav-link",href:o.link,target:"_blank",rel:"noreferrer"},[p("article",{class:y(["box",{"has-badge":i.value}])},[p("div",se,[o.noIcon?c("",!0):(s(),r(m,{key:0},[a.value?(s(),r("div",{key:0,class:"icon",innerHTML:a.value},null,8,re)):o.icon&&typeof o.icon=="string"?(s(),r("div",ie,[p("img",{src:k(M)(o.icon),alt:o.title,onerror:"this.parentElement.style.display='none'"},null,8,ce)])):c("",!0)],64)),o.title?(s(),r("h5",{key:1,id:n.value,class:y(["title",{"no-icon":o.noIcon}])},h(o.title),11,le)):c("",!0)]),i.value?(s(),L(P,{key:0,class:"badge",type:i.value.type,text:i.value.text},null,8,["type","text"])):c("",!0),o.desc?(s(),r("p",ue,h(o.desc),1)):c("",!0)],2)],8,oe)):c("",!0)}}}),pe=_(de,[["__scopeId","data-v-f6a1464b"]]),fe=["id"],me=["href"],he={class:"m-nav-links"},ge=f({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=d(()=>E(t.title));return(a,i)=>(s(),r(m,null,[a.title?(s(),r("h2",{key:0,id:n.value,tabindex:"-1"},[w(h(a.title)+" ",1),p("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,me)],8,fe)):c("",!0),p("div",he,[(s(!0),r(m,null,B(a.items,o=>(s(),L(pe,N({noIcon:a.noIcon},o),null,16,["noIcon"]))),256))])],64))}}),ve=_(ge,[["__scopeId","data-v-822c035a"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let l;const _e={extends:b,Layout:()=>{var n;const e={},{frontmatter:t}=C();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),g(b.Layout,e,{"doc-after":()=>g(ee)})},enhanceApp({app:e,router:t}){e.component("MNavLinks",ve),e.provide("DEV",!1),typeof window<"u"&&T(()=>t.route.data.relativePath,()=>ye(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function ye(e){if(e){if(l)return;l=document.createElement("style"),l.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(l)}else{if(!l)return;l.remove(),l=void 0}}function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const u=A(_e),be=f({name:"VitePressApp",setup(){const{site:e}=C();return K(()=>{U(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&X(),q(),J(),u.setup&&u.setup(),()=>g(u.Layout)}});async function ke(){const e=Le(),t=we();t.provide(R,e);const n=V(e.route);return t.provide(S,n),t.component("Content",j),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),u.enhanceApp&&await u.enhanceApp({app:t,router:e,siteData:z}),{app:t,router:e,data:n}}function we(){return O(be)}function Le(){let e=v,t;return x(n=>{let a=W(n),i=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),i=G(()=>import(a),__vite__mapDeps([]))),v&&(e=!1),i},u.NotFound)}v&&ke().then(({app:e,router:t,data:n})=>{t.go().then(()=>{F(t.route,n.site),e.mount("#app")})});export{ke as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}