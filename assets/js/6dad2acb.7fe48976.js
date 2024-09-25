"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[1848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,b=f["".concat(c,".").concat(d)]||f[d]||u[d]||n;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:1,description:"Preserves a signed, accessible, and traceable list of packaged components."},o="Artifact Registries",s={unversionedId:"intro/capabilities/artifact-registry",id:"intro/capabilities/artifact-registry",title:"Artifact Registries",description:"Preserves a signed, accessible, and traceable list of packaged components.",source:"@site/docs/intro/capabilities/artifact-registry.mdx",sourceDirName:"intro/capabilities",slug:"/intro/capabilities/artifact-registry",permalink:"/docs/intro/capabilities/artifact-registry",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/capabilities/artifact-registry.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Preserves a signed, accessible, and traceable list of packaged components."},sidebar:"tutorialSidebar",previous:{title:"Technology Capabilities",permalink:"/docs/category/technology-capabilities"},next:{title:"Packaging and Templating",permalink:"/docs/intro/capabilities/packaging-and-templating"}},c={},l=[],p={toc:l};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"artifact-registries"},"Artifact Registries"),(0,i.kt)("p",null,"The artifact registry allows for the packaged components endorsed by the CNOE community to be signed, accessible, and traceable for its users.\nBy storing the list of components in an OCI registry or Git repository, the CNOE packaging framework will be able to deal with versioned and compatible artifacts that have already been tested and verified in working together.\nThis also allows the combination of the registry and the packaging mechanism to undergo secure software supply chain (SSSC) best practices to further increase the level of confidence in leveraging these tools by the CNOE users."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Canonical location for durable long term artifact storage."),(0,i.kt)("li",{parentName:"ul"},"Catalog + metadata about artifacts. Used for discovery of artifacts."),(0,i.kt)("li",{parentName:"ul"},"Can be used in conjunction with Role Based Access Control (RBAC) to limit access to artifacts."),(0,i.kt)("li",{parentName:"ul"},"Should be versioned and is often immutable"),(0,i.kt)("li",{parentName:"ul"},"Often used with static analysis tools to verify artifacts are free from known vulnerabilities.")))}f.isMDXComponent=!0}}]);