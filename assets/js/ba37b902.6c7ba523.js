"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[5698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:13,description:"Secrets Management aims to shift this important responsibility to the platform where it can be implemented and audited in one place rather than many."},o="Secret Management",c={unversionedId:"intro/capabilities/secret-management",id:"intro/capabilities/secret-management",title:"Secret Management",description:"Secrets Management aims to shift this important responsibility to the platform where it can be implemented and audited in one place rather than many.",source:"@site/docs/intro/capabilities/secret-management.mdx",sourceDirName:"intro/capabilities",slug:"/intro/capabilities/secret-management",permalink:"/docs/intro/capabilities/secret-management",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/capabilities/secret-management.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"Secrets Management aims to shift this important responsibility to the platform where it can be implemented and audited in one place rather than many."},sidebar:"tutorialSidebar",previous:{title:"Service Discovery",permalink:"/docs/intro/capabilities/service-discovery"},next:{title:"Validation",permalink:"/docs/intro/capabilities/validation"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secret-management"},"Secret Management"),(0,i.kt)("p",null,"The life cycle and distribution of secrets must be managed safely and securely. Secrets Management aims to shift this important responsibility to the platform where it can be implemented and audited in one place rather than many."),(0,i.kt)("p",null,"Secrets Management works in conjunction with secrets repositories to securely source and deliver secrets on demand and just-in-time to applications and services."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be built with workflow-orchestration but must be treated with great care"),(0,i.kt)("li",{parentName:"ul"},"Should have additional security scrutiny applied beyond other non-secret artifact delivery tooling"),(0,i.kt)("li",{parentName:"ul"},"Often provides the ability to promote secrets between environments, distribute, roll and revoke secrets")))}m.isMDXComponent=!0}}]);