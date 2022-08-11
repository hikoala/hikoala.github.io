"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[268],{6567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(11),a=(n(2735),n(9530));const o={sidebar_position:2},i="Create a contract",s={unversionedId:"guides/subscriptions",id:"guides/subscriptions",title:"Create a contract",description:"What is a Subscription?",source:"@site/resources/partner-api/guides/subscriptions.md",sourceDirName:"guides",slug:"/guides/subscriptions",permalink:"/partner-api/guides/subscriptions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Get a price from the API",permalink:"/partner-api/guides/quotes"},next:{title:"Retrieve products' Terms & Conditions",permalink:"/partner-api/guides/retrieve-t&c"}},l={},u=[{value:"What is a Subscription?",id:"what-is-a-subscription",level:2},{value:"Example of Subscription input",id:"example-of-subscription-input",level:2},{value:"Possible Subscription outputs",id:"possible-subscription-outputs",level:2},{value:"More details about <code>409</code> error messsages",id:"more-details-about-409-error-messsages",level:3},{value:"Example of Successful Subscription",id:"example-of-successful-subscription",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-contract"},"Create a contract"),(0,a.kt)("h2",{id:"what-is-a-subscription"},"What is a Subscription?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," is the endpoint that you will use to create a contract for a booking. Travelers will benefit from Koala protection only once the contract is created."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," endpoint every time the travelers have added a Koala\nproduct to their basket and completed the payment on your website."),(0,a.kt)("p",null,"To post a ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription"),", you should first make a call to our ",(0,a.kt)("a",{parentName:"p",href:"./quotes"},"Quote")," API to obtain the precious ",(0,a.kt)("inlineCode",{parentName:"p"},"<QUOTE_REFERENCE>"),"."),(0,a.kt)("p",null,"In total, you will need to provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Quote reference"),(0,a.kt)("li",{parentName:"ul"},"The booking number (a unique reference number from your information system, usually the one you shared with your\ncustomers)"),(0,a.kt)("li",{parentName:"ul"},"The client details"),(0,a.kt)("li",{parentName:"ul"},"The travelers details")),(0,a.kt)("h2",{id:"example-of-subscription-input"},"Example of Subscription input"),(0,a.kt)("p",null,"This is an example of the payload you need to send us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "bookingNumber": "5K7SXD",\n    "quotes": [\n      {\n        "reference": "<QUOTE_REFERENCE>",\n        "travelers": [\n          {\n            "ageRange": "ADULT",\n            "birthdate": "1968-06-09",\n            "firstName": "Marty",\n            "lastName": "McFly"\n          },\n          {\n            "ageRange": "ADULT",\n            "birthdate": "1968-01-21",\n            "firstName": "Jennifer",\n            "lastName": "Parker"\n          }\n        ]\n      }\n    ],\n    "client": {\n      "email": "marty.mcfly@gmail.com",\n      "firstname": "Marty",\n      "lastname": "McFly"\n    }\n  }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"possible-subscription-outputs"},"Possible Subscription outputs"),(0,a.kt)("p",null,"Our Subscriptions API will give you different responses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"201"),": The Subscription is valid and the contract is successfully created. The travelers are now covered by Koala \ud83d\udc28"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"400"),": The Subscription is invalid. You may have forgotten one mandatory field or made a mistake with one format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"401"),": The Subscription cannot be created because you are experimenting an issue with your token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"409"),": The Subscription cannot be created because the booking number or the quote reference you used has already been\nsent to us.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"more-details-about-409-error-messsages"},"More details about ",(0,a.kt)("inlineCode",{parentName:"h3"},"409")," error messsages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A booking number and the quote reference can only be used once with our Subscriptions service.")),(0,a.kt)("p",null,"If you are experiencing this issue but do not know why, please send us an email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@hikoala.co"},"support@hikoala.co")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"example-of-successful-subscription"},"Example of Successful Subscription"),(0,a.kt)("p",null,"If the payload is valid you will receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"201")," response."),(0,a.kt)("p",null,"Here is an example of successful response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "bookingNumber": "5K7SXD",\n    "price": {\n      "amount": 59.97,\n      "currency": "EUR"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The travelers for that booking are now covered by Koala and can travel with peace of mind \ud83d\udc28"),(0,a.kt)("br",null))}c.isMDXComponent=!0},9530:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2735);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);