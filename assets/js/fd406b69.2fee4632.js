"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[608],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=n,u=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return t?o.createElement(u,c(c({ref:r},m),{},{components:t})):o.createElement(u,c({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7904:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const a={},c="Serverless Microservice",s={unversionedId:"reference-implementation/integrations/terraform/serverless-microservice-pattern",id:"reference-implementation/integrations/terraform/serverless-microservice-pattern",title:"Serverless Microservice",description:"This pattern demonstrates a Serverless Microservice built using Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. You can download the respective Backstage templates from the serverless microservice folder under cnoe-io/backstage-terraform-integrations.",source:"@site/docs/reference-implementation/integrations/terraform/02-serverless-microservice-pattern.md",sourceDirName:"reference-implementation/integrations/terraform",slug:"/reference-implementation/integrations/terraform/serverless-microservice-pattern",permalink:"/docs/reference-implementation/integrations/terraform/serverless-microservice-pattern",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/reference-implementation/integrations/terraform/02-serverless-microservice-pattern.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon S3 Bucket",permalink:"/docs/reference-implementation/integrations/terraform/s3-bucket"},next:{title:"Generate Templates",permalink:"/docs/category/generate-templates"}},i={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Validation",id:"validation",level:2},{value:"Testing",id:"testing",level:2},{value:"Clean up",id:"clean-up",level:2}],m={toc:l};function d(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serverless-microservice"},"Serverless Microservice"),(0,n.kt)("p",null,"This pattern demonstrates a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/appmod-partners-serverless/tree/main/serverless-microservice"},"Serverless Microservice")," built using Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. You can download the respective Backstage templates from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations/tree/main/backstage-templates-for-eks/serverless-microservice"},"serverless microservice")," folder under ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations/"},"cnoe-io/backstage-terraform-integrations"),"."),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,"You need to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tgpadua/backstage-terraform-integrations/tree/main?tab=readme-ov-file#deploy-idpbuilder-with-terraform-integration-templates"},"add AWS credentials")," before deployed this pattern. "),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"https://cnoe.localtest.me:8443/"},"Backstage"),", click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Create")," in the left pane to view the list of available platform templates, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Choose")," on the ",(0,n.kt)("strong",{parentName:"p"},"Serverless Microservice")," pattern."),(0,n.kt)("p",null,"Next, populate the Terraform variables for the pattern deployment as shown below and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Review"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(2994).Z,width:"1077",height:"887"})),(0,n.kt)("p",null,"Next, validate the entered variables in the below confirmation screen and click Create :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(6782).Z,width:"1078",height:"578"})),(0,n.kt)("p",null,"Next, check on the steps of backstage template run as show below and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Open In Catalog"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(6585).Z,width:"1077",height:"457"})),(0,n.kt)("p",null,"Next, check on the below screen showing the created Backstage component and click ",(0,n.kt)("inlineCode",{parentName:"p"},"View Source")," to navigate to the Gitea repository:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(2540).Z,width:"1063",height:"750"})),(0,n.kt)("p",null,"Next, check on the Gitea repo of the created component as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(1061).Z,width:"1077",height:"404"})),(0,n.kt)("p",null,"Next, Navigate to ",(0,n.kt)("a",{parentName:"p",href:"https://cnoe.localtest.me:8443/argocd"},"ArgoCD")," console and navigate to Argo App by name ",(0,n.kt)("inlineCode",{parentName:"p"},"todo")," view the below screen:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage",src:t(5971).Z,width:"1313",height:"630"})),(0,n.kt)("h2",{id:"validation"},"Validation"),(0,n.kt)("p",null,"Next, lets validate the execution of the pattern by tofu controller. Run the below command on your terminal to check on ",(0,n.kt)("inlineCode",{parentName:"p"},"terraforms.infra.contrib.fluxcd.io ")," resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get terraforms.infra.contrib.fluxcd.io -A\n\nNAMESPACE     NAME                           READY   STATUS                                                         AGE\nflux-system   serverless-microservice-todo   True    No drift: main@sha1:549d0d82efea3b6a46807578cf0a8583f35a799c   156m\n")),(0,n.kt)("p",null,"Next, lets check on the Kubernetes pod in the ",(0,n.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace which executes the terraform controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get pods -n flux-system\n\nNAME                                       READY   STATUS    RESTARTS   AGE\nnotification-controller-5487f8c847-95p4m   1/1     Running   0          168m\nsource-controller-69bcb7cd85-st7ph         1/1     Running   0          168m\ntf-controller-7f8c8bbdfc-c5xw7             1/1     Running   0          167m\n")),(0,n.kt)("p",null,"Next, lets check on the logs of this ",(0,n.kt)("inlineCode",{parentName:"p"},"tf-controller-7f8c8bbdfc-c5xw7"),"as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'> kubectl logs -n flux-system tf-controller-7f8c8bbdfc-c5xw7 |grep serverless-microservice-\n\n{"level":"info","ts":"2024-08-06T21:22:22.008Z","msg":">> Started Generation: 1","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:22.050Z","msg":"getting source","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:22.050Z","msg":"before lookup runner: checking ready condition","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z","ready":"nil"}\n{"level":"info","ts":"2024-08-06T21:22:22.051Z","msg":"before lookup runner: updating status","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z","ready":"nil"}\n{"level":"info","ts":"2024-08-06T21:22:22.067Z","msg":"before lookup runner: updated status","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z","ready":"nil"}\n{"level":"info","ts":"2024-08-06T21:22:22.068Z","msg":"trigger namespace tls secret generation","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:22.810Z","msg":"show runner pod state: ","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z","name":"serverless-microservice-todo","state":"not-found"}\n{"level":"info","ts":"2024-08-06T21:22:37.895Z","msg":"runner is running","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.895Z","msg":"setting up terraform","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.949Z","msg":"write backend config: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.951Z","msg":"new terraform","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z","workingDir":"/tmp/flux-system-serverless-microservice-todo/serverless-microservice"}\n{"level":"info","ts":"2024-08-06T21:22:37.961Z","msg":"generate vars from tf: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.961Z","msg":"generated var files from spec","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.961Z","msg":"generate template: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:37.961Z","msg":"generated template","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:44.907Z","msg":"init reply: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:44.907Z","msg":"tfexec initialized terraform","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:44.911Z","msg":"workspace select reply: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:44.911Z","msg":"calling plan ...","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:51.706Z","msg":"plan: ok, found drift: true","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318bd07","reconciliation-loop-id":"39c5d3d1-0551-468b-ad5b-4cc20fec86ca","start-time":"2024-08-06T21:22:22.007Z"}\n{"level":"info","ts":"2024-08-06T21:22:51.725Z","msg":"save tfplan: ok","controller":"terraform","controllerGroup":"infra.contrib.fluxcd.io","controllerKind":"Terraform","Terraform":{"name":"serverless-microservice-todo","namespace":"flux-system"},"namespace":"flux-system","name":"serverless-microservice-todo","reconcileID":"d440d7f5-9f77-475b-8f84-c509e318\n')),(0,n.kt)("p",null,"Let's wait for 3 minutes for tofu controller to complete the ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," and navigate to API Gateway console and search for the API:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Console",src:t(4883).Z,width:"1376",height:"362"})),(0,n.kt)("p",null,"Then, copy the microservice endpoint from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Invoke URL")," property for testing:  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Console",src:t(1196).Z,width:"1380",height:"513"})),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/appmod-partners-serverless/tree/main/serverless-microservice#example-requests"},"example requests")," to test the microservice."),(0,n.kt)("h2",{id:"clean-up"},"Clean up"),(0,n.kt)("p",null,"To clean up all the resources created please follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In your ",(0,n.kt)("a",{parentName:"li",href:"https://cnoe.localtest.me:8443/argocd"},"Argo CD")," console, navigate to the application created for your component and click on delete."),(0,n.kt)("li",{parentName:"ol"},"In your ",(0,n.kt)("a",{parentName:"li",href:"https://cnoe.localtest.me:8443/gitea/"},"Gitea")," console, navigate to the repository for your component and delete it manually under settings. "),(0,n.kt)("li",{parentName:"ol"},"Finally, in your ",(0,n.kt)("a",{parentName:"li",href:"https://cnoe.localtest.me:8443/"},"Backstage")," console, navigate to component created and click on ",(0,n.kt)("inlineCode",{parentName:"li"},"unregister component"),".")))}d.isMDXComponent=!0},4883:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/apigateway1-665454bd5a17e22eb9d94b8f507acd7a.png"},1196:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/apigateway2-c240512bd0d9a1ce1a174eecc585cc90.png"},5971:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/argocd1-b55e02423532447ad24b38501cecfd57.png"},2994:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/backstage1-97479a0248e72c8e3573a582a1365642.png"},6782:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/backstage2-0ce1b8062047d6a6dfbe5aab29557346.png"},6585:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/backstage3-ee26e89646862179471abde3a92a500b.png"},2540:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/backstage4-1d72b81e97b1c16b11fb4095083a8ec8.png"},1061:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/gitea1-23e5e54f33471a409edb4a74e0261fa7.png"}}]);