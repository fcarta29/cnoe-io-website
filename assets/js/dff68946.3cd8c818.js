"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[7091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,description:"Monitors, reports, and alerts on the overall well-being of the system."},o="Packaging and Templating",c={unversionedId:"intro/capabilities/packaging-and-templating",id:"intro/capabilities/packaging-and-templating",title:"Packaging and Templating",description:"Monitors, reports, and alerts on the overall well-being of the system.",source:"@site/docs/intro/capabilities/packaging-and-templating.mdx",sourceDirName:"intro/capabilities",slug:"/intro/capabilities/packaging-and-templating",permalink:"/docs/intro/capabilities/packaging-and-templating",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/capabilities/packaging-and-templating.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Monitors, reports, and alerts on the overall well-being of the system."},sidebar:"tutorialSidebar",previous:{title:"Artifact Registries",permalink:"/docs/intro/capabilities/artifact-registry"},next:{title:"Code Repositories",permalink:"/docs/intro/capabilities/code-repository"}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packaging-and-templating"},"Packaging and Templating"),(0,i.kt)("p",null,"Packaging and templating languages and frameworks are required to ensure the delivery of complete and functional sets of tools to target specific capabilities endorsed and usable by the CNOE community.\nWhile opinionated, extensibility and configuration must meet the needs of users, but guide towards best practices when combining the tooling in the package.\nSome candidates for templating and packaging languages include the open component model, the Kubernetes packaging tool (KPT), and the OCI distribution specifications."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packaged sets of tools and configuration endorsed and usable by the CNOE community"),(0,i.kt)("li",{parentName:"ul"},"Opinionated and oriented toward producing best practices for the majority of use cases"),(0,i.kt)("li",{parentName:"ul"},"Open and extensible, allowing for configurability of the targeted capabilities.")))}d.isMDXComponent=!0}}]);