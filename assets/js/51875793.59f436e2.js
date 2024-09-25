"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[6262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2,description:"How it works",title:"How it works",index:3},o=void 0,s={unversionedId:"reference-implementation/installations/idpbuilder/how-it-works",id:"reference-implementation/installations/idpbuilder/how-it-works",title:"How it works",description:"How it works",source:"@site/docs/reference-implementation/installations/idpbuilder/how-it-works.md",sourceDirName:"reference-implementation/installations/idpbuilder",slug:"/reference-implementation/installations/idpbuilder/how-it-works",permalink:"/docs/reference-implementation/installations/idpbuilder/how-it-works",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/reference-implementation/installations/idpbuilder/how-it-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How it works",title:"How it works",index:3},sidebar:"tutorialSidebar",previous:{title:"Using the idpBuilder",permalink:"/docs/reference-implementation/installations/idpbuilder/usage"},next:{title:"Override built-in services",permalink:"/docs/reference-implementation/installations/idpbuilder/override"}},l={},c=[{value:"Bootstrapping",id:"bootstrapping",level:2},{value:"Self Signed Certificate",id:"self-signed-certificate",level:2},{value:"Networking",id:"networking",level:2},{value:"Overview",id:"overview",level:3},{value:"DNS",id:"dns",level:3},{value:"In-cluster DNS Configuration",id:"in-cluster-dns-configuration",level:3},{value:"Core Packages",id:"core-packages",level:2},{value:"Getting Relevant Secrets",id:"getting-relevant-secrets",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bootstrapping"},"Bootstrapping"),(0,r.kt)("p",null,"When idpbuilder creates an environment for you, it performs the following tasks."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a local cluster if one does not exist yet."),(0,r.kt)("li",{parentName:"ol"},"Create a self-signed certificate, then set it as the default TLS certificate for ingress-nginx."),(0,r.kt)("li",{parentName:"ol"},"Configure CoreDNS to ensure names are resolved correctly."),(0,r.kt)("li",{parentName:"ol"},"Install Core Packages, then hands control over to ArgoCD.")),(0,r.kt)("h2",{id:"self-signed-certificate"},"Self Signed Certificate"),(0,r.kt)("p",null,"To ensure applications inside the cluster can talk to other services, idpbuilder creates a self-signed TLS certificate. The certificate is a wild card certificate\nfor the domain name and any subdomains given by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--host")," flag.\nFor example, if you use the default domain name ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe.localtest.me")," the certificate is issued for ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe.localtest.me")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.cnoe.localtest.me")),(0,r.kt)("p",null,"This certificate is then used by ingress-nginx as ","[the default TLS certificate]","(",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/tls/#default-ssl-certificate"},"https://kubernetes.github.io/ingress-nginx/user-guide/tls/#default-ssl-certificate"),"_. This means you can override TLS certificate used at ingress level if desired."),(0,r.kt)("p",null,"The certificate is also ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#repositories-using-self-signed-tls-certificates-or-are-signed-by-custom-ca"},"imported to ArgoCD")," as one of trusted CAs. This is necessary to make sure ArgoCD can talk to Gitea services without disabling TLS."),(0,r.kt)("p",null,"Finally, the certificate is exposed as a secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"idpbuilder-cert")," in the default namespace. To retrieve it, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n default idpbuilder-cert\n")),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"With the default configuration on Docker on Linux, kind cluster is set up as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Docker container runs as the Kubernetes node and the container port 443 is exposed on host port 8443. You can confirm this by running ",(0,r.kt)("inlineCode",{parentName:"li"},"docker container ls")),(0,r.kt)("li",{parentName:"ol"},"Ingress-nginx service is configured as ",(0,r.kt)("inlineCode",{parentName:"li"},"NodePort")," and listens on port 443. You can confirm with ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get service -n ingress-nginx  ingress-nginx-controller"),".")),(0,r.kt)("p",null,"With this setup, HTTP traffic for ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gitea.cnoe.localtest.me:8443")," roughly looks like this."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Domain name resolves to the local loopback address."),(0,r.kt)("li",{parentName:"ol"},"A request is made to ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:8443")," with host set as ",(0,r.kt)("inlineCode",{parentName:"li"},"gitea.cnoe.localtest.me:8443"),"."),(0,r.kt)("li",{parentName:"ol"},"The request is sent to the container port 443."),(0,r.kt)("li",{parentName:"ol"},"Ingress-nginx looks at SNI and the host header, then routes the traffic to the Gitea service."),(0,r.kt)("li",{parentName:"ol"},"Gitea receives the request then sends back a response.")),(0,r.kt)("h3",{id:"dns"},"DNS"),(0,r.kt)("p",null,"By default, idpbuilder uses the domain name ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe.localtest.me")," as the base domain name to expose services such as ArgoCD and Gitea.\nMost subdomains under ",(0,r.kt)("inlineCode",{parentName:"p"},"localtest.me")," resolves to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Localhost"},"local loopback address"),".\nThis allows us to have a consistent name that resolves to a known IP address without using the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," name.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://readme.localtest.me/"},"the localtest.me documentation site")," for more information."),(0,r.kt)("h3",{id:"in-cluster-dns-configuration"},"In-cluster DNS Configuration"),(0,r.kt)("p",null,"idpbuilder configures in-cluster DNS service (CoreDNS) to ensure domain names are resolved correctly.\nThe name given by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--host")," flag resolves to the ingress-nginx controller service address.\nThis allows us to resolve the domain name inside and outside cluster to the same endpoint. "),(0,r.kt)("p",null,"As described above, the default domain name, ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe.localtest.me"),", resolves to a local loopback address such as ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),".\nThis works for accessing the ingress-nginx service from outside the cluster because the service port is exposed as NodePort on the local machine. "),(0,r.kt)("p",null,"This approach does not work for in-cluster traffic because the address resolves to local loopback interface.\nFor example, if ArgoCD pod wants to access Gitea at ",(0,r.kt)("inlineCode",{parentName:"p"},"gitea.cnoe.localtest.me"),", the address resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," which is the local loopback address within the node.\nTo ensure ArgoCD can talk to Gitea services, in-cluster DNS must be configured like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rewrite name gitea.cnoe.localtest.me ingress-nginx-controller.ingress-nginx.svc.cluster.local\n")),(0,r.kt)("p",null,"This CoreDNS rewrite rule instructs CoreDNS to resolve requests made for ",(0,r.kt)("inlineCode",{parentName:"p"},"gitea.cnoe.localtest.me")," using the address given by ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-nginx-controller.ingress-nginx.svc.cluster.local")),(0,r.kt)("h2",{id:"core-packages"},"Core Packages"),(0,r.kt)("p",null,"idpbuilder installs the following packages to the cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ArgoCD")," is the GitOps solution to deploy manifests to Kubernetes clusters. In this project, a package is an ArgoCD application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gitea")," server is the in-cluster Git server that ArgoCD can be configured to sync resources from. You can sync from local file systems to this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ingress-nginx")," is used as a method to access in-cluster resources such as ArgoCD UI and Gitea UI.")),(0,r.kt)("p",null,"Once installed, idpbuilder passes control over these packages to ArgoCD by storing manifests in Gitea repositories then creating ArgoCD applications. From here on, ArgoCD manages them based on manifests checked into Git repositories."),(0,r.kt)("h2",{id:"getting-relevant-secrets"},"Getting Relevant Secrets"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"idpbuilder get secrets")," command retrieves the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ArgoCD initial admin password."),(0,r.kt)("li",{parentName:"ul"},"Gitea admin user credentials."),(0,r.kt)("li",{parentName:"ul"},"Any secrets labeled with ",(0,r.kt)("inlineCode",{parentName:"li"},"cnoe.io/cli-secret=true"),".")),(0,r.kt)("p",null,"You can think of the command as executing the following kubectl commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n argocd get secret argocd-initial-admin-secret\nkubectl get secrets -n gitea gitea-admin-secret\nkubectl get secrets -A -l cnoe.io/cli-secret=true\n")),(0,r.kt)("p",null,"If you want to retrieve secrets for a package, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag. To get secrets for a package named ",(0,r.kt)("inlineCode",{parentName:"p"},"gitea"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder get secrets -p gitea\n")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag to work, you must label the secret with ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe.io/package-name"),".\nFor example, to make secret values available in a secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-secret")," for a package named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl label secret my-secret "cnoe.io/package-name=foo" "cnoe.io/cli-secret=true"\n')),(0,r.kt)("p",null,"The secret will then be listed when issuing the ",(0,r.kt)("inlineCode",{parentName:"p"},"idpbuilder get secrets")," command.\nAlternatively, you can use the following command to retrieve the individual secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder get secrets -p foo\n")))}d.isMDXComponent=!0}}]);