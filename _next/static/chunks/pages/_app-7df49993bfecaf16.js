(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1058:function(e,t,r){"use strict";t.Z=void 0;var n,i=(n=r(5152))&&n.__esModule?n:{default:n},o=l(r(7294));function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=i.default((function(){return Promise.resolve().then((function(){return l(r(5675))}))}),{ssr:!1}),d=function(e){var t=e.src,r=e.width,n=function(e){var t,r=e.filePath,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop();return{path:i,filename:n.substring(0,n.lastIndexOf("."))||n,extension:o||""}}({filePath:t}),i=n.filename,o=n.path,a=n.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(a.toUpperCase()))return t;var u=a;["JPG","JPEG","PNG"].includes(a.toUpperCase())&&(u="WEBP");var l=o;return"/"!=(null===l||void 0===l?void 0:l.substr(-1))&&(l+="/"),"".concat(l,"nextImageExportOptimizer/").concat(i,"-opt-").concat(r,".").concat(u.toUpperCase())},p=function(e){return e.src};var g=function(e){var t=e.src,r=e.priority,n=void 0!==r&&r,i=e.loading,a=e.lazyRoot,l=void 0===a?null:a,g=e.lazyBoundary,b=void 0===g?"200px":g,y=e.className,h=e.quality,m=e.width,v=e.height,w=e.objectFit,j=e.objectPosition,_=e.onLoadingComplete,O=e.placeholder,x=void 0===O?"empty":O,S=e.blurDataURL,A=c(e,["src","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),P=s(o.useState(!1),2),k=P[0],E=P[1];return o.default.createElement(f,u({},A,m&&{width:m},v&&{height:v},n&&{priority:n},i&&{loading:i},l&&{lazyRoot:l},b&&{lazyBoundary:b},y&&{className:y},h&&{quality:h},w&&{objectFit:w},j&&{objectPosition:j},_&&{onLoadingComplete:_},x&&{placeholder:x},S&&{blurDataURL:S},{loader:k?p:d,src:t,onError:function(){E(!0)}}))};t.Z=g},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8484)}])},292:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(3695),o=r.n(i),a=r(7294),u=r(1058);function l(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,n.jsx)("div",{className:o().navBarWrapper,children:(0,n.jsxs)("div",{className:o().navBar,children:[(0,n.jsx)("div",{className:o().left,children:(0,n.jsxs)("a",{href:"https://futureblur.com",style:{display:"flex"},children:[(0,n.jsx)("div",{className:o().logo,children:(0,n.jsx)(f,{})}),(0,n.jsx)("div",{className:o().logoIcon,children:(0,n.jsx)(d,{})})]})}),(0,n.jsx)(c,{navBarActive:t,toggleNavBar:function(){r(!t)}})]})})}function c(e){var t=e.navBarActive,r=e.toggleNavBar;return(0,n.jsxs)(n.Fragment,{children:[t?(0,n.jsx)("div",{className:o().burgerActive,onClick:r}):(0,n.jsx)("div",{className:o().burger,onClick:r}),t?(0,n.jsx)("div",{className:o().rightActive,children:(0,n.jsx)(s,{})}):(0,n.jsx)("div",{className:o().right,children:(0,n.jsx)(s,{})})]})}function s(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:o().navLink,href:"https://instagram.com/itsfutureblur",children:"Virtual Gallery"}),(0,n.jsx)("a",{className:o().navLink,href:"https://futureblur.com/github",children:"Open Source"}),(0,n.jsx)("a",{className:o().navLink,href:"https://futureblur.com/contact",children:"Contact"})]})}function f(){return(0,n.jsx)(u.Z,{src:"../images/Futureblur_Logo_White.svg",alt:"Futureblur Logo",layout:"fixed",width:188,height:30})}function d(){return(0,n.jsx)(u.Z,{src:"../images/Futureblur_Icon_White.svg",alt:"Futureblur Logo",layout:"fixed",width:64,height:30})}},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,u=void 0!==n&&n,l=e.priority,c=void 0!==l&&l,b=e.loading,y=e.lazyRoot,_=void 0===y?null:y,P=e.lazyBoundary,E=void 0===P?"200px":P,z=e.className,I=e.quality,C=e.width,N=e.height,L=e.style,R=e.objectFit,M=e.objectPosition,D=e.onLoadingComplete,B=(e.onError,e.placeholder),q=void 0===B?"empty":B,T=e.blurDataURL,F=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),H=s.useContext(g.ImageConfigContext),W=s.useMemo((function(){var e=v||H||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:r})}),[H]),V=F,G=r?"responsive":"intrinsic";"layout"in V&&(V.layout&&(G=V.layout),delete V.layout);var U=A;if("loader"in V){if(V.loader){var J=V.loader;U=function(e){e.config;var t=m(e,["config"]);return J(t)}}delete V.loader}var Z="";if(function(e){return"object"===typeof e&&(O(e)||function(e){return void 0!==e.src}(e))}(t)){var X=O(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(T=T||X.blurDataURL,Z=X.src,(!G||"fill"!==G)&&(N=N||X.height,C=C||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:Z;var $=S(C),Y=S(N),K=S(I),Q=!c&&("lazy"===b||"undefined"===typeof b);(t.startsWith("data:")||t.startsWith("blob:"))&&(u=!0,Q=!1);w.has(t)&&(Q=!1);var ee,te=o(s.useState(!1),2),re=te[0],ne=te[1],ie=o(p.useIntersection({rootRef:_,rootMargin:E,disabled:!Q}),3),oe=ie[0],ae=ie[1],ue=ie[2],le=!Q||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:M};0;0;var pe=Object.assign({},L,"raw"===G?{aspectRatio:"".concat($," / ").concat(Y)}:de),ge="blur"!==q||re?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:M||"0% 0%"};if("fill"===G)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof Y){var be=Y/$,ye=isNaN(be)?"100%":"".concat(100*be,"%");"responsive"===G?(ce.display="block",ce.position="relative",fe=!0,se.paddingTop=ye):"intrinsic"===G?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===G&&(ce.display="inline-block",ce.position="relative",ce.width=$,ce.height=Y)}else 0;var he={src:j,srcSet:void 0,sizes:void 0};le&&(he=x({config:W,src:t,unoptimized:u,layout:G,width:$,quality:K,sizes:r,loader:U}));var me=t;0;var ve;0;var we=(i(ve={},"imagesrcset",he.srcSet),i(ve,"imagesizes",he.sizes),ve),je=s.default.useLayoutEffect,_e=s.useRef(D),Oe=s.useRef(t);s.useEffect((function(){_e.current=D}),[D]),je((function(){Oe.current!==t&&(ue(),Oe.current=t)}),[ue,t]);var xe=h({isLazy:Q,imgAttributes:he,heightInt:Y,widthInt:$,qualityInt:K,layout:G,className:z,imgStyle:pe,blurStyle:ge,loading:b,config:W,unoptimized:u,placeholder:q,loader:U,srcString:me,onLoadingCompleteRef:_e,setBlurComplete:ne,setIntersection:oe,isVisible:le},V);return s.default.createElement(s.default.Fragment,null,"raw"===G?s.default.createElement(k,Object.assign({},xe)):s.default.createElement("span",{style:ce},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(k,Object.assign({},xe))),c?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},we))):null)};var l,c,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),f=(l=r(3121))&&l.__esModule?l:{default:l},d=r(139),p=r(9246),g=r(8730),b=(r(670),r(2700));function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){y(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var _=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(b.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(E(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(E(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(e){return void 0!==e.default}function x(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,u=e.quality,l=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var u,l=/(^|\s)(1?\d?\d)vw/g,c=[];u=l.exec(n);u)c.push(parseInt(u[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,a(c));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),f=s.widths,d=s.kind,p=f.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:f.map((function(e,n){return"".concat(c({config:t,src:r,quality:u,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({config:t,src:r,quality:u,width:f[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=_.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(r))}function P(e,t,r,n,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===n&&o(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,u=e.imgStyle,l=e.blurStyle,c=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,b=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,_=e.onError,O=(e.isVisible,m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},O,t,"raw"!==o||t.sizes?{}:{height:r,width:n},{decoding:"async","data-nimg":o,className:a,style:h({},u,l),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&P(e,p,0,f,v,w)}),[j,p,o,f,v,w]),onLoad:function(e){P(e.currentTarget,p,0,f,v,w)},onError:function(e){"blur"===f&&w(!0),_&&_(e)}})),(c||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},O,x({config:g,src:p,unoptimized:b,layout:o,width:n,quality:i,sizes:t.sizes,loader:y}),"raw"!==o||t.sizes?{}:{height:r,width:n},{decoding:"async","data-nimg":o,style:u,className:a,loading:d||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],p=f[1],g=i(o.useState(t?t.current:null),2),b=g[0],y=g[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:r}))}),[n,b,r,d]),m=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&y(t.current)}),[t]),[h,d,m]};var o=r(7294),a=r(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i({},n,e));var a,l;var c=n=i({},n,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return r(c);n.loadableGenerated&&delete(n=i({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)},t.noSSR=u;a(r(7294));var o=a(r(4588));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=i},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},l=r(2021),c=r(3644);var s=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,i;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),i&&n(t,i),e}();function b(e){return function(e,t){var r=function(){if(!i){var t=new g(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var i=null;if(!d&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&f.push((function(e){var t=!0,n=!1,i=void 0;try{for(var o,u=a[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return r()}}catch(c){n=!0,i=c}finally{try{t||null==u.return||u.return()}finally{if(n)throw i}}}))}var s=n.suspense?function(e,t){return u.default.createElement(n.lazy,o({},e,{ref:t}))}:function(e,t){r();var o=u.default.useContext(c.LoadableContext),a=l.useSubscription(i);return u.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return s.preload=function(){return!n.suspense&&r()},s.displayName="LoadableComponent",u.default.forwardRef(s)}(p,e)}function y(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};y(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var h=b;t.default=h},8484:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=(r(6774),r(5152)),o=(r(292),r(4298)),a=r.n(o);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var c=(0,i.default)((function(){return Promise.resolve().then(r.bind(r,292))}),{loadableGenerated:{webpack:function(){return[292]}},ssr:!1});t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),(0,n.jsx)(a(),{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),(0,n.jsx)(c,{}),(0,n.jsx)(t,l({},r))]})}},3695:function(e){e.exports={navBarWrapper:"Header_navBarWrapper__CSrJA",navBar:"Header_navBar__ijbgy",left:"Header_left__9aIGe",logo:"Header_logo__6vBZG",logoIcon:"Header_logoIcon__u5pMY",burger:"Header_burger__ISCur",burgerActive:"Header_burgerActive__N08Dh",right:"Header_right__K2Msm",rightActive:"Header_rightActive__3FXtg","nav-bar-slide":"Header_nav-bar-slide__eS_6j",navLink:"Header_navLink__1cl8b"}},6774:function(){},2021:function(e,t,r){(()=>{"use strict";var t={800:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,u,l=i(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))r.call(a,s)&&(l[s]=a[s]);if(t){u=t(a);for(var f=0;f<u.length;f++)n.call(a,u[f])&&(l[u[f]]=a[u[f]])}}return l}},569:(e,t,r)=>{0},403:(e,t,r)=>{var n=r(800),i=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,o=i.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=o[0];var a=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===r||(o=t(),a({getCurrentValue:t,subscribe:r,value:o})),i.useDebugValue(o),i.useEffect((function(){function e(){if(!i){var e=t();a((function(i){return i.getCurrentValue!==t||i.subscribe!==r||i.value===e?i:n({},i,{value:e})}))}}var i=!1,o=r(e);return e(),function(){i=!0,o()}}),[t,r]),o}},138:(e,t,r)=>{e.exports=r(403)},522:e=>{e.exports=r(7294)}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete n[e]}return o.exports}i.ab="//";var o=i(138);e.exports=o})()},5152:function(e,t,r){e.exports=r(7645)},5675:function(e,t,r){e.exports=r(9749)},4298:function(e,t,r){e.exports=r(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var r=e.O();_N_E=r}]);