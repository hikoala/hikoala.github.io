"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[161],{3709:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(11),a=(o(2735),o(9530));const r={sidebar_position:5},i="Go into production!",l={unversionedId:"go-into-production",id:"go-into-production",title:"Go into production!",description:"Now that you know everything about our Partner API, it is time for you to validate your integration to receive your production token.",source:"@site/resources/partner-api/go-into-production.md",sourceDirName:".",slug:"/go-into-production",permalink:"/partner-api/go-into-production",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Errors",permalink:"/partner-api/references/errors"}},s={},u=[{value:"Step 1: Check if your staging token is valid",id:"step-1-check-if-your-staging-token-is-valid",level:2},{value:"Step 2: Send us test Quotes",id:"step-2-send-us-test-quotes",level:2},{value:"Step 3: Send us test Subscriptions",id:"step-3-send-us-test-subscriptions",level:2},{value:"Step 4: Send us test Updates",id:"step-4-send-us-test-updates",level:2},{value:"Additional step 1: Send us test claims (only if you sell our Koala Flex)",id:"additional-step-1-send-us-test-claims-only-if-you-sell-our-koala-flex",level:2},{value:"Additional step 2: Report flight cancellations (only if you sell flights)",id:"additional-step-2-report-flight-cancellations-only-if-you-sell-flights",level:2},{value:"Additional step 3: Send us webhook URL and secret (only if you want to activate the webhook)",id:"additional-step-3-send-us-webhook-url-and-secret-only-if-you-want-to-activate-the-webhook",level:2},{value:"Step 6: Change the environment to prod environment",id:"step-6-change-the-environment-to-prod-environment",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-into-production"},"Go into production!"),(0,a.kt)("p",null,"Now that you know everything about our Partner API, it is time for you to validate your integration to receive your production token. ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"step-1-check-if-your-staging-token-is-valid"},"Step 1: Check if your staging token is valid"),(0,a.kt)("p",null,"Before doing anything, it is important to check that your staging token is valid or not.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"To check your token validity, you should do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X GET "https://staging-partner.api.hikoala.co/quotes" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>"\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you receive an API answer other than ",(0,a.kt)("inlineCode",{parentName:"p"},"401"),", you are good to go to Step 2 \ud83d\udc4d")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"step-2-send-us-test-quotes"},"Step 2: Send us test Quotes"),(0,a.kt)("p",null,"To check that you have implemented the right logic to obtain prices from us, you should post at least 5 valid Quotes."),(0,a.kt)("p",null,"Inside your payload, you should use the test data of your choice, provided that it respects the data format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Caution:")," Please only use dates in the future for your tests, otherwise the API will return you an error message."),(0,a.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"./guides/quotes"},"Quotes")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once you have 5 successful quotes, you can go to step 3 \ud83d\udc4c")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"step-3-send-us-test-subscriptions"},"Step 3: Send us test Subscriptions"),(0,a.kt)("p",null,"Now that you have obtained successful Quotes, you should turn those Quotes into Subscriptions."),(0,a.kt)("p",null,"Just as for the Quotes, you should use the test data of your choice inside the payload."),(0,a.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"./guides/subscriptions"},"Subscriptions")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once you have 5 successful subscriptions, you can move on to step 4 \ud83e\udd29 ")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"step-4-send-us-test-updates"},"Step 4: Send us test Updates"),(0,a.kt)("p",null,"Once you have created contracts, you should test the implementation of the Update."),(0,a.kt)("p",null,"If you need help to validate this step, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"./guides/update"},"Update")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once you have 5 successful updates, you can move on to Step 5 \ud83d\udc40")),(0,a.kt)("br",null),"## Step 5: Tracking the conversion rate",(0,a.kt)("p",null,"To allow us to track our conversion rate, you should do the mission described on this ",(0,a.kt)("a",{parentName:"p",href:"./guides/conversion-rate"},"page"),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once you have successfully deleted 5 quotes, you can move on to additional steps \ud83d\udcaa")),(0,a.kt)("h2",{id:"additional-step-1-send-us-test-claims-only-if-you-sell-our-koala-flex"},"Additional step 1: Send us test claims (only if you sell our Koala Flex)"),(0,a.kt)("p",null,"Now that you have contracts on your environment, you should simulate a booking cancellation made by the traveler. "),(0,a.kt)("p",null,"Inside your payload, we advice that you use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fake data for the beneficiaryName"),(0,a.kt)("li",{parentName:"ul"},"An IBAN generated by ",(0,a.kt)("a",{parentName:"li",href:"http://randomiban.com/?country=Netherlands"},"Random IBAN")),(0,a.kt)("li",{parentName:"ul"},"The following BIC: BNPAFRPP ")),(0,a.kt)("p",null,"If you have questions or doubt about this step, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"./guides/contracts"},"Contracts")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should do at least 5 successful claims to validate this step \u2705")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"additional-step-2-report-flight-cancellations-only-if-you-sell-flights"},"Additional step 2: Report flight cancellations (only if you sell flights)"),(0,a.kt)("p",null,"When you are selling flights, you should add the feature to report flight cancellations. "),(0,a.kt)("p",null,"To do so, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"./guides/report-flights"},"Report Flight Cancellation")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should do at least 3 successful flight cancellation reports to validate this step \ud83d\udc4c")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"additional-step-3-send-us-webhook-url-and-secret-only-if-you-want-to-activate-the-webhook"},"Additional step 3: Send us webhook URL and secret (only if you want to activate the webhook)"),(0,a.kt)("p",null,"The URL and the secret you want to use for the webhook should be sent at ",(0,a.kt)("a",{parentName:"p",href:"mailto:leo@hikoala.co"},"leo@hikoala.co")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once the webhook is configured internally, we will ping you by email to validate this step \ud83d\udc4d")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"step-6-change-the-environment-to-prod-environment"},"Step 6: Change the environment to prod environment"),(0,a.kt)("p",null,"Once you have completed all the tasks, please ping us so that we can take a look together."),(0,a.kt)("br",null),(0,a.kt)("p",null,"If everything is functioning correctly, we will send you your prod token and you will be good to go live! \ud83d\ude80"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before going live, please change your server URL from\n",(0,a.kt)("inlineCode",{parentName:"strong"},"https://staging-partner.api.hikoala.co")," into: ",(0,a.kt)("inlineCode",{parentName:"strong"},"https://partner.api.hikoala.co/"),".")),(0,a.kt)("br",null))}d.isMDXComponent=!0},9530:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(2735);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),h=a,y=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return o?n.createElement(y,i(i({ref:t},p),{},{components:o})):n.createElement(y,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"}}]);