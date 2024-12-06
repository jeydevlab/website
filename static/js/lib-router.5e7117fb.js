/*! For license information please see lib-router.5e7117fb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["118"],{776:function(e,t,n){n.d(t,{AW:function(){return X},VK:function(){return ex},Z5:function(){return Z},j3:function(){return K},rU:function(){return eC}});var r=n(294);n(777);var a="popstate";function o(e,t){if(!1===e||null==e)throw Error(t)}function l(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function i(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function s({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n="/"){return function(e,t,n,r){let a=f(("string"==typeof t?c(t):t).pathname||"/",n);if(null==a)return null;let i=function e(t,n=[],r=[],a=""){let l=(t,l,i)=>{let u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};u.relativePath.startsWith("/")&&(o(u.relativePath.startsWith(a),`Absolute route path "${u.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(a.length));let s=w([a,u.relativePath]),c=r.concat(u);if(t.children&&t.children.length>0&&(o(!0!==t.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),e(t.children,n,c,s)),null!=t.path||!!t.index)n.push({path:s,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(d)&&(r+=-2),t&&(r+=2),n.filter(e=>!d(e)).reduce((e,t)=>e+(p.test(t)?3:""===t?1:10),r)}(s,t.index),routesMeta:c})};return t.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(0===a.length)return o?[l,""]:[l];let i=e(a.join("/")),u=[];return u.push(...i.map(e=>""===e?l:[l,e].join("/"))),o&&u.push(...i),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))l(e,t,n);else l(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(i);let u=null;for(let e=0;null==u&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}(a);u=function(e,t,n=!1){let{routesMeta:r}=e,a={},o="/",l=[];for(let e=0;e<r.length;++e){let i=r[e],u=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=m({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},s),h=i.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=m({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:w([o,c.pathname]),pathnameBase:E(w([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=w([o,c.pathnameBase]))}return l}(i[e],t,r)}return u}(e,t,n,!1)}var p=/^:[\w-]+$/,d=e=>"*"===e;function m(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=u[r]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let a=u[r];return n&&!a?e[t]=void 0:e[t]=(a||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function f(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function g(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y(e){let t=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function v(e,t,n,r=!1){let a,l;"string"==typeof e?a=c(e):(o(!(a={...e}).pathname||!a.pathname.includes("?"),g("?","pathname","search",a)),o(!a.pathname||!a.pathname.includes("#"),g("#","pathname","hash",a)),o(!a.search||!a.search.includes("#"),g("#","search","hash",a)));let i=""===e||""===a.pathname,u=i?"/":a.pathname;if(null==u)l=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}l=e>=0?t[e]:"/"}let s=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?c(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:b(r),hash:x(a)}}(a,l),h=u&&"/"!==u&&u.endsWith("/"),p=(i||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||p)&&(s.pathname+="/"),s}var w=e=>e.join("/").replace(/\/\/+/g,"/"),E=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",x=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function R(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("ResetLoaderData");var C=r.createContext(null);C.displayName="DataRouter";var S=r.createContext(null);S.displayName="DataRouterState";var $=r.createContext({isTransitioning:!1});$.displayName="ViewTransition",r.createContext(new Map).displayName="Fetchers";var k=r.createContext(null);k.displayName="Await";var L=r.createContext(null);L.displayName="Navigation";var P=r.createContext(null);P.displayName="Location";var N=r.createContext({outlet:null,matches:[],isDataRoute:!1});N.displayName="Route";var O=r.createContext(null);O.displayName="RouteError";function T(){return null!=r.useContext(P)}function F(){return o(T(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(P).location}var _="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function A(e){!r.useContext(L).static&&r.useLayoutEffect(e)}var M=r.createContext(null);function W(e,{relative:t}={}){let{matches:n}=r.useContext(N),{pathname:a}=F(),o=JSON.stringify(y(n));return r.useMemo(()=>v(e,JSON.parse(o),a,"path"===t),[e,o,a,t])}function B(e,t,n,a){let i;o(T(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=r.useContext(L),{matches:s}=r.useContext(N),p=s[s.length-1],d=p?p.params:{},m=p?p.pathname:"/",f=p?p.pathnameBase:"/",g=p&&p.route;{let e=g&&g.path||"";V(m,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let y=F();if(t){let e="string"==typeof t?c(t):t;o("/"===f||e.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`),i=e}else i=y;let v=i.pathname||"/",E=v;if("/"!==f){let e=f.replace(/^\//,"").split("/");E="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=h(e,{pathname:E});l(g||null!=b,`No routes matched location "${i.pathname}${i.search}${i.hash}" `),l(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${i.pathname}${i.search}${i.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=function(e,t=[],n=null,a=null){if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let l=e,i=n?.errors;if(null!=i){let e=l.findIndex(e=>e.route.id&&i?.[e.route.id]!==void 0);o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,s=-1;if(n)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){u=!0,l=s>=0?l.slice(0,s+1):[l[0]];break}}}return l.reduceRight((e,a,o)=>{let c;let h=!1,p=null,d=null;n&&(c=i&&a.route.id?i[a.route.id]:void 0,p=a.route.errorElement||U,u&&(s<0&&0===o?(V("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,d=null):s===o&&(h=!0,d=a.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,o+1)),f=()=>{let t;return t=c?p:h?d:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(D,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(j,{location:n.location,revalidation:n.revalidation,component:p,error:c,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:w([f,u.encodeLocation?u.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:w([f,u.encodeLocation?u.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,n,a);return t&&x?r.createElement(P.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...i},navigationType:"POP"}},x):x}var U=r.createElement(function(){let e=function(){let e=r.useContext(O),t=I("useRouteError"),n=J("useRouteError");return void 0!==e?e:t.errors?.[n]}(),t=R(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"\uD83D\uDCBF Hey developer \uD83D\uDC4B"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:o},"ErrorBoundary")," or"," ",r.createElement("code",{style:o},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:{padding:"0.5rem",backgroundColor:a}},n):null,l)},null),j=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(N.Provider,{value:this.props.routeContext},r.createElement(O.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D({routeContext:e,match:t,children:n}){let a=r.useContext(C);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),r.createElement(N.Provider,{value:e},n)}function H(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I(e){let t=r.useContext(S);return o(t,H(e)),t}function J(e){var t;let n;let a=(t=e,o(n=r.useContext(N),H(t)),n),l=a.matches[a.matches.length-1];return o(l.route.id,`${e} can only be used on routes that contain a unique "id"`),l.route.id}function z(){let{matches:e,loaderData:t}=I("useMatches");return r.useMemo(()=>e.map(e=>(function(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}})(e,t)),[e,t])}var Y={};function V(e,t,n){!t&&!Y[e]&&(Y[e]=!0,l(!1,n))}r.memo(function({routes:e,future:t,state:n}){return B(e,void 0,n,t)});function K(e){var t;let n;return t=e.context,(n=r.useContext(N).outlet)?r.createElement(M.Provider,{value:t},n):n}function X(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function q({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:i,static:u=!1}){o(!T(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),h=r.useMemo(()=>({basename:s,navigator:i,static:u,future:{}}),[s,i,u]);"string"==typeof n&&(n=c(n));let{pathname:p="/",search:d="",hash:m="",state:g=null,key:y="default"}=n,v=r.useMemo(()=>{let e=f(p,s);return null==e?null:{location:{pathname:e,search:d,hash:m,state:g,key:y},navigationType:a}},[s,p,d,m,g,y,a]);return(l(null!=v,`<Router basename="${s}"> is not able to match the URL "${p}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v)?null:r.createElement(L.Provider,{value:h},r.createElement(P.Provider,{children:t,value:v}))}function Z({children:e,location:t}){var n;return n=function e(t,n=[]){let a=[];return r.Children.forEach(t,(t,l)=>{if(!r.isValidElement(t))return;let i=[...n,l];if(t.type===r.Fragment){a.push.apply(a,e(t.props.children,i));return}o(t.type===X,`[${"string"==typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let u={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(u.children=e(t.props.children,i)),a.push(u)}),a}(e),B(n,t)}r.Component;var G="get",Q="application/x-www-form-urlencoded";function ee(e){return null!=e&&"string"==typeof e.tagName}var et=null,en=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function er(e){return null==e||en.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Q}"`),null)}function ea(e,t){if(!1===e||null==e)throw Error(t)}async function eo(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function el(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function ei(e,t,n){return function(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{var o;if(t&&!(null!=(o=a)&&"string"==typeof o.page)&&"script"===a.as&&a.href&&r.has(a.href))return e;let l=JSON.stringify(function(e){let t={};for(let n of Object.keys(e).sort())t[n]=e[n];return t}(a));return!n.has(l)&&(n.add(l),e.push({key:l,link:a})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await eo(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(el).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function eu(e,t,n,r,a,o){let l=(e,t)=>!n[t]||e.route.id!==n[t].route.id,i=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>l(e,t)||i(e,t)):"data"===o?t.filter((t,o)=>{let u=r.routes[t.route.id];if(!u||!u.hasLoader)return!1;if(l(t,o)||i(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function es(e){return{__html:e}}Symbol("SingleFetchRedirect");function ec({error:e,isOutsideRemixApp:t}){let n;console.error(e);let a=r.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `}});return R(e)?r.createElement(eh,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),a):(n=e instanceof Error?e:Error(null==e?"Unknown Error":"object"==typeof e&&"toString"in e?e.toString():JSON.stringify(e)),r.createElement(eh,{title:"Application Error!",isOutsideRemixApp:t},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),a))}function eh({title:e,renderScripts:t,isOutsideRemixApp:n,children:a}){let{routeModules:o}=ef();return o.root?.Layout&&!n?a:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,e)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,t?r.createElement(eE,null):null)))}r.Component;function ep(){let e=r.useContext(C);return ea(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ed(){let e=r.useContext(S);return ea(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var em=r.createContext(void 0);function ef(){let e=r.useContext(em);return ea(e,"You must render this element inside a <HydratedRouter> element"),e}em.displayName="FrameworkContext";function eg(e,t){return n=>{e&&e(n),!n.defaultPrevented&&t(n)}}function ey({page:e,...t}){let{router:n}=ep(),a=r.useMemo(()=>h(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?r.createElement(ev,{page:e,matches:a,...t}):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ev({page:e,matches:t,...n}){let a=F(),{manifest:o,routeModules:l}=ef(),{loaderData:i,matches:u}=ed(),s=r.useMemo(()=>eu(e,t,u,o,a,"data"),[e,t,u,o,a]),c=r.useMemo(()=>eu(e,t,u,o,a,"assets"),[e,t,u,o,a]),h=r.useMemo(()=>{var n;let r;if(e===a.pathname+a.search+a.hash)return[];let u=new Set,c=!1;if(t.forEach(e=>{let t=o.routes[e.route.id];if(!!t&&!!t.hasLoader)!s.some(t=>t.route.id===e.route.id)&&e.route.id in i&&l[e.route.id]?.shouldRevalidate?c=!0:t.hasClientLoader?c=!0:u.add(e.route.id)}),0===u.size)return[];let h=("/"===(r="string"==typeof(n=e)?new URL(n,"undefined"==typeof window?"server://singlefetch/":window.location.origin):n).pathname?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r);return c&&u.size>0&&h.searchParams.set("_routes",t.filter(e=>u.has(e.route.id)).map(e=>e.route.id).join(",")),[h.pathname+h.search]},[i,a,o,s,t,e,l]),p=r.useMemo(()=>{var e,t;return e=c,t=o,function(e){return[...new Set(e)]}(e.map(e=>{let n=t.routes[e.route.id];if(!n)return[];let r=[n.module];return n.imports&&(r=r.concat(n.imports)),r}).flat(1))},[c,o]),d=function(e){let{manifest:t,routeModules:n}=ef(),[a,o]=r.useState([]);return r.useEffect(()=>{let r=!1;return ei(e,t,n).then(e=>{!r&&o(e)}),()=>{r=!0}},[e,t,n]),a}(c);return r.createElement(r.Fragment,null,h.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),p.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),d.map(({key:e,link:t})=>r.createElement("link",{key:e,...t})))}var ew=!1;function eE(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:o}=ef(),{router:l,static:i,staticContext:u}=ep(),{matches:s}=ed(),c=!a;o&&(o.didRenderScripts=!0);let p=function(e,t,n){if(n&&!ew)return[e[0]];return e}(s,null,a);r.useEffect(()=>{ew=!0},[]);let d=r.useMemo(()=>{let a=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=i?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${c?"":`import ${JSON.stringify(t.url)}`};
${p.map((e,n)=>`import * as route${n} from ${JSON.stringify(t.routes[e.route.id].module)};`).join("\n")}
  ${c?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map(e=>e.route.id)),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach(e=>{let r=h(t.routes,e,t.basename);r&&r.forEach(e=>n.add(e.route.id))});let o=[...n].reduce((t,n)=>Object.assign(t,{[n]:e.routes[n]}),{});return{...e,routes:o}}(t,l),null,2)};`:""}
  window.__reactRouterRouteModules = {${p.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),m=p.map(e=>{let n=t.routes[e.route.id];return n?(n.imports||[]).concat([n.module]):[]}).flat(1),f=ew?[]:t.entry.imports.concat(m);return ew?null:r.createElement(r.Fragment,null,c?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin}),(function(e){return[...new Set(e)]})(f).map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin})),d)}var eb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{eb&&(window.__reactRouterVersion="7.0.2")}catch(e){}function ex({basename:e,children:t,window:n}){let l=r.useRef();null==l.current&&(l.current=function(e={}){return function(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,h=l.history,p="POP",d=null,m=f();function f(){return(h.state||{idx:null}).idx}function g(){p="POP";let e=f(),t=null==e?null:e-m;m=e,d&&d({action:p,location:v.location,delta:t})}null==m&&(m=0,h.replaceState({...h.state,idx:m},""));function y(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"==typeof e?e:s(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}let v={get action(){return p},get location(){return e(l,h)},listen(e){if(d)throw Error("A history only accepts one active listener");return l.addEventListener(a,g),d=e,()=>{l.removeEventListener(a,g),d=null}},createHref:e=>t(l,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p="PUSH";let r=u(v.location,e,t);n&&n(r,e);let a=i(r,m=f()+1),o=v.createHref(r);try{h.pushState(a,"",o)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;l.location.assign(o)}c&&d&&d({action:p,location:v.location,delta:1})},replace:function(e,t){p="REPLACE";let r=u(v.location,e,t);n&&n(r,e);let a=i(r,m=f()),o=v.createHref(r);h.replaceState(a,"",o),c&&d&&d({action:p,location:v.location,delta:0})},go:e=>h.go(e)};return v}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return u("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:s(t)},null,e)}({window:n,v5Compat:!0}));let c=l.current,[h,p]=r.useState({action:c.action,location:c.location}),d=r.useCallback(e=>{r.startTransition(()=>p(e))},[p]);return r.useLayoutEffect(()=>c.listen(d),[c,d]),r.createElement(q,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c})}var eR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eC=r.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:a,reloadDocument:i,replace:u,state:c,target:h,to:p,preventScrollReset:d,viewTransition:m,...g},E){let b,{basename:x}=r.useContext(L),R="string"==typeof p&&eR.test(p),S=!1;if("string"==typeof p&&R&&(b=p,eb))try{let e=new URL(window.location.href),t=new URL(p.startsWith("//")?e.protocol+p:p),n=f(t.pathname,x);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:S=!0}catch(e){l(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=function(e,{relative:t}={}){o(T(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(L),{hash:l,pathname:i,search:u}=W(e,{relative:t}),s=i;return"/"!==n&&(s="/"===i?n:w([n,i])),a.createHref({pathname:s,search:u,hash:l})}(p,{relative:a}),[k,P,O]=function(e,t){let n=r.useContext(em),[a,o]=r.useState(!1),[l,i]=r.useState(!1),{onFocus:u,onBlur:s,onMouseEnter:c,onMouseLeave:h,onTouchStart:p}=t,d=r.useRef(null);r.useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return d.current&&e.observe(d.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[a]);let m=()=>{o(!0)},f=()=>{o(!1),i(!1)};return n?"intent"!==e?[l,d,{}]:[l,d,{onFocus:eg(u,m),onBlur:eg(s,f),onMouseEnter:eg(c,m),onMouseLeave:eg(h,f),onTouchStart:eg(p,m)}]:[!1,d,{}]}(n,g),M=function(e,{target:t,replace:n,state:a,preventScrollReset:i,relative:u,viewTransition:c}={}){let h=function(){let{isDataRoute:e}=r.useContext(N);return e?function(){var e;let t;let{router:n}=(e="useNavigate",o(t=r.useContext(C),H(e)),t),a=J("useNavigate"),i=r.useRef(!1);return A(()=>{i.current=!0}),r.useCallback(async(e,t={})=>{l(i.current,_),i.current&&("number"==typeof e?n.navigate(e):await n.navigate(e,{fromRouteId:a,...t}))},[n,a])}():function(){o(T(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(C),{basename:t,navigator:n}=r.useContext(L),{matches:a}=r.useContext(N),{pathname:i}=F(),u=JSON.stringify(y(a)),s=r.useRef(!1);return A(()=>{s.current=!0}),r.useCallback((r,a={})=>{if(l(s.current,_),!s.current)return;if("number"==typeof r){n.go(r);return}let o=v(r,JSON.parse(u),i,"path"===a.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:w([t,o.pathname])),(a.replace?n.replace:n.push)(o,a.state,a)},[t,n,u,i,e])}()}(),p=F(),d=W(e,{relative:u});return r.useCallback(r=>{var o,l,m;if(o=r,l=t,0===o.button&&(!l||"_self"===l)&&!((m=o).metaKey||m.altKey||m.ctrlKey||m.shiftKey))r.preventDefault(),h(e,{replace:void 0!==n?n:s(p)===s(d),state:a,preventScrollReset:i,relative:u,viewTransition:c})},[p,h,d,n,a,t,e,i,u,c])}(p,{replace:u,state:c,target:h,preventScrollReset:d,relative:a,viewTransition:m}),B=r.createElement("a",{...g,...O,href:b||$,onClick:S||i?e:function(t){e&&e(t),!t.defaultPrevented&&M(t)},ref:function(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}(E,P),target:h,"data-discover":R||"render"!==t?void 0:"true"});return k&&!R?r.createElement(r.Fragment,null,B,r.createElement(ey,{page:$})):B});eC.displayName="Link",r.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:a=!1,style:l,to:i,viewTransition:u,children:s,...c},h){let p,d=W(i,{relative:c.relative}),g=F(),y=r.useContext(S),{navigator:v,basename:w}=r.useContext(L),E=null!=y&&function(e,t={}){let n=r.useContext($);o(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=e$("useViewTransitionState"),l=W(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=f(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=f(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=m(l.pathname,u)||null!=m(l.pathname,i)}(d)&&!0===u,b=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,x=g.pathname,R=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;!t&&(x=x.toLowerCase(),R=R?R.toLowerCase():null,b=b.toLowerCase()),R&&w&&(R=f(R,w)||R);let C="/"!==b&&b.endsWith("/")?b.length-1:b.length,k=x===b||!a&&x.startsWith(b)&&"/"===x.charAt(C),P=null!=R&&(R===b||!a&&R.startsWith(b)&&"/"===R.charAt(b.length)),N={isActive:k,isPending:P,isTransitioning:E},O=k?e:void 0;p="function"==typeof n?n(N):[n,k?"active":null,P?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof l?l(N):l;return r.createElement(eC,{...c,"aria-current":O,className:p,ref:h,style:T,to:i,viewTransition:u},"function"==typeof s?s(N):s)}).displayName="NavLink",r.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:l,state:i,method:u=G,action:c,onSubmit:h,relative:p,preventScrollReset:d,viewTransition:m,...g},y)=>{let v=function(){let{router:e}=e$("useSubmit"),{basename:t}=r.useContext(L),n=J("useRouteId");return r.useCallback(async(r,a={})=>{let{action:o,method:l,encType:i,formData:u,body:s}=function(e,t){var n,r,a;let o,l,i,u,s;if(ee(n=e)&&"form"===n.tagName.toLowerCase()){let n=e.getAttribute("action");l=n?f(n,t):null,o=e.getAttribute("method")||G,i=er(e.getAttribute("enctype"))||Q,u=new FormData(e)}else{;if(ee(r=e)&&"button"===r.tagName.toLowerCase()||ee(a=e)&&"input"===a.tagName.toLowerCase()&&("submit"===e.type||"image"===e.type)){let n=e.form;if(null==n)throw Error('Cannot submit a <button> or <input type="submit"> without a <form>');let r=e.getAttribute("formaction")||n.getAttribute("action");if(l=r?f(r,t):null,o=e.getAttribute("formmethod")||n.getAttribute("method")||G,i=er(e.getAttribute("formenctype"))||er(n.getAttribute("enctype"))||Q,u=new FormData(n,e),!function(){if(null===et)try{new FormData(document.createElement("form"),0),et=!1}catch(e){et=!0}return et}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";u.append(`${e}x`,"0"),u.append(`${e}y`,"0")}else t&&u.append(t,r)}}else if(ee(e))throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');else o=G,l=null,i=Q,s=e}return u&&"text/plain"===i&&(s=u,u=void 0),{action:l,method:o.toLowerCase(),encType:i,formData:u,body:s}}(r,t);if(!1===a.navigate){let t=a.fetcherKey||eL();await e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||l,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||l,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),E=function(e,{relative:t}={}){let{basename:n}=r.useContext(L),a=r.useContext(N);o(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),i={...W(e||".",{relative:t})},u=F();if(null==e){i.search=u.search;let e=new URLSearchParams(i.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();i.search=n?`?${n}`:""}}return(!e||"."===e)&&l.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(i.pathname="/"===i.pathname?n:w([n,i.pathname])),s(i)}(c,{relative:p}),b="get"===u.toLowerCase()?"get":"post",x="string"==typeof c&&eR.test(c);return r.createElement("form",{ref:y,method:b,action:E,onSubmit:a?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,a=r?.getAttribute("formmethod")||u;v(r||e.currentTarget,{fetcherKey:t,method:a,navigate:n,replace:l,state:i,relative:p,preventScrollReset:d,viewTransition:m})},...g,"data-discover":x||"render"!==e?void 0:"true"})}).displayName="Form";function eS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e$(e){let t=r.useContext(C);return o(t,eS(e)),t}var ek=0,eL=()=>`__${String(++ek)}__`,eP="react-router-scroll-positions",eN={};function eO(e,t,n,r){let a=null;return r&&(a="/"!==n?r({...e,pathname:f(e.pathname,n)||e.pathname},t):r(e,t)),null==a&&(a=e.key),a}new TextEncoder}}]);