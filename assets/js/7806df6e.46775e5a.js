"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[161],{3709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(6033),a=n(7839),r=(n(2735),n(9530)),i=["components"],s={sidebar_position:5},l="Go into production!",u={unversionedId:"go-into-production",id:"go-into-production",title:"Go into production!",description:"Now that you know everything about our Partner API, it is time for you to validate your integration to",source:"@site/resources/partner-api/go-into-production.md",sourceDirName:".",slug:"/go-into-production",permalink:"/partner-api/go-into-production",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Errors",permalink:"/partner-api/references/errors"}},p={},c=[{value:"Step 1: Check if your staging token is valid",id:"step-1-check-if-your-staging-token-is-valid",level:2},{value:"Step 2: Send us test Quotes",id:"step-2-send-us-test-quotes",level:2},{value:"Step 3: Send us test Subscriptions",id:"step-3-send-us-test-subscriptions",level:2},{value:"Step 4: Send us test claims (only if you sell our Koala Flex)",id:"step-4-send-us-test-claims-only-if-you-sell-our-koala-flex",level:2},{value:"Step 5: Change the environment to prod environment",id:"step-5-change-the-environment-to-prod-environment",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go-into-production"},"Go into production!"),(0,r.kt)("p",null,"Now that you know everything about our Partner API, it is time for you to validate your integration to\nreceive your production token. ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"step-1-check-if-your-staging-token-is-valid"},"Step 1: Check if your staging token is valid"),(0,r.kt)("p",null,"Before doing anything, it is important to check that your staging token is valid or not.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"To check your token validity, you should do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X GET "https://staging-partner.api.hikoala.co/quotes" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>"\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you receive an API answer other than ",(0,r.kt)("inlineCode",{parentName:"p"},"401"),", you are good to go to Step 2 \ud83d\udc4d"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"step-2-send-us-test-quotes"},"Step 2: Send us test Quotes"),(0,r.kt)("p",null,"To check that you have implemented the right logic to obtain prices from us, you should post at least 5 valid Quotes."),(0,r.kt)("p",null,"Inside your payload, you should use the test data of your choice, provided that it respects the data format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Caution:")," Please only use dates in the future for your tests, otherwise the API will return you an error message."),(0,r.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"./guides/quotes"},"Quotes")," page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once you have 5 successful quotes, you can go to step 3 \ud83d\udc4c"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"step-3-send-us-test-subscriptions"},"Step 3: Send us test Subscriptions"),(0,r.kt)("p",null,"Now that you have obtained successful Quotes, we should turn those Quotes into Subscriptions."),(0,r.kt)("p",null,"Just as for the Quotes, you should use the test data of your choice inside the payload."),(0,r.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"./guides/subscriptions"},"Subscriptions")," page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once you have 5 successful subscriptions, you can either: "),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Go to step 4 if you are selling Koala Flex \ud83d\udc28"),(0,r.kt)("li",{parentName:"ul"},"Go to step 5 if you are selling any other Koala product \ud83e\udd29 ")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"step-4-send-us-test-claims-only-if-you-sell-our-koala-flex"},"Step 4: Send us test claims (only if you sell our Koala Flex)"),(0,r.kt)("p",null,"Now that you have created contracts, you should simulate a booking cancellation by the traveler. "),(0,r.kt)("p",null,"Inside your payload, we advice that you use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fake data for the beneficiaryName"),(0,r.kt)("li",{parentName:"ul"},"An IBAN generated by ",(0,r.kt)("a",{parentName:"li",href:"http://randomiban.com/?country=Netherlands"},"Random IBAN")),(0,r.kt)("li",{parentName:"ul"},"The following BIC: BNPAFRPP ")),(0,r.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"./guides/contracts"},"Contracts")," page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once you have 3 successful claims, you can go to step 5 \ud83e\udd29"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"step-5-change-the-environment-to-prod-environment"},"Step 5: Change the environment to prod environment"),(0,r.kt)("p",null,"Once you have completed all the tasks, please ping us so that we can take a look together."),(0,r.kt)("br",null),(0,r.kt)("p",null,"If everything is functioning correctly, we will send you your prod token and you will be good to go live! \ud83d\ude80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before going live, please change your server URL from\n",(0,r.kt)("inlineCode",{parentName:"strong"},"https://staging-partner.api.hikoala.co")," into: ",(0,r.kt)("inlineCode",{parentName:"strong"},"https://partner.api.hikoala.co/"),".")),(0,r.kt)("br",null))}m.isMDXComponent=!0},9530:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(2735);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);