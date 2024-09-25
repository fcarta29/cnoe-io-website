"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[7238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5,description:"Secrets repositories are secure long term storage locations for sensitive data."},a="Secret Repositories",s={unversionedId:"intro/capabilities/secret-repository",id:"intro/capabilities/secret-repository",title:"Secret Repositories",description:"Secrets repositories are secure long term storage locations for sensitive data.",source:"@site/docs/intro/capabilities/secret-repository.mdx",sourceDirName:"intro/capabilities",slug:"/intro/capabilities/secret-repository",permalink:"/docs/intro/capabilities/secret-repository",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/capabilities/secret-repository.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Secrets repositories are secure long term storage locations for sensitive data."},sidebar:"tutorialSidebar",previous:{title:"Config Repositories",permalink:"/docs/intro/capabilities/config-repository"},next:{title:"Signing",permalink:"/docs/intro/capabilities/signing"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"secret-repositories"},"Secret Repositories"),(0,n.kt)("p",null,"Secrets repositories are secure long term storage locations for sensitive data.\nThey parallel the centralized storage, versioning and meta-data capabilities offered by configuration repositories, but usually with stricter access controls and auditing.\nThe storage of secrets should be encrypted. They may be encrypted with Hardware Security Modules or HSMs.\nThey may be used in conjunction with other encryption and cryptographic solutions like Public Key Infrastructure or PKI.\nSecrets repositories may also offer the ability to generate, lease, rotate and revoke certain types of secrets like certificates."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Secure and durable"),(0,n.kt)("li",{parentName:"ul"},"Usually key value pairs or similar structured data"),(0,n.kt)("li",{parentName:"ul"},"Values must be encrypted"),(0,n.kt)("li",{parentName:"ul"},"Keys and meta-data may not be encrypted"),(0,n.kt)("li",{parentName:"ul"},"Must have canonical source of truth for a fully qualified key"),(0,n.kt)("li",{parentName:"ul"},"May offer ability to generate/lease/rotate/revoke secret values such as certificates"),(0,n.kt)("li",{parentName:"ul"},"Common tooling includes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hashicorp Vault"),(0,n.kt)("li",{parentName:"ul"},"Cyberark Conjur"),(0,n.kt)("li",{parentName:"ul"},"AWS Secrets Manager"),(0,n.kt)("li",{parentName:"ul"},"Azure Key Vault"),(0,n.kt)("li",{parentName:"ul"},"Google Secret Manager")))))}u.isMDXComponent=!0}}]);