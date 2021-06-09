(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[268],{9530:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(2735);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4077:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(5851),o=t(8518),a=(t(2735),t(9530)),i=["components"],s={sidebar_position:2},u={unversionedId:"guides/subscriptions",id:"guides/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"How Koala works",source:"@site/resources/partner-api/guides/subscriptions.md",sourceDirName:"guides",slug:"/guides/subscriptions",permalink:"/partner-api/guides/subscriptions",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Quotes",permalink:"/partner-api/guides/quotes"},next:{title:"Errors",permalink:"/partner-api/references/errors"}},l=[{value:"How Koala works",id:"how-koala-works",children:[]},{value:"Subscription output",id:"subscription-output",children:[{value:"Invalid payload",id:"invalid-payload",children:[]},{value:"Subscription already created",id:"subscription-already-created",children:[]},{value:"Subscription successfully created",id:"subscription-successfully-created",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-koala-works"},"How Koala works"),(0,a.kt)("p",null,"Once the quote is done, it is now possible to proceed to a subscription. You will need to provide these informations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The quote reference token"),(0,a.kt)("li",{parentName:"ul"},"The booking number (from your information system)"),(0,a.kt)("li",{parentName:"ul"},"The client information"),(0,a.kt)("li",{parentName:"ul"},"The travalers informations")),(0,a.kt)("p",null,"For example with the ",(0,a.kt)("inlineCode",{parentName:"p"},"5K7SXD")," booking number and the ",(0,a.kt)("inlineCode",{parentName:"p"},"reference_token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "bookingNumber": "5K7SXD",\n    "quotes": [\n      {\n        "reference": "<REFERENCE_TOKEN>",\n        "travelers": [\n          {\n            "ageRange": "ADULT",\n            "birthdate": "1964-06-27",\n            "firstName": "John",\n            "lastName": "Doe"\n          },\n          {\n            "ageRange": "ADULT",\n            "birthdate": "1964-01-21",\n            "firstName": "Jane",\n            "lastName": "Doe"\n          }\n        ],\n      }\n    ],\n    "client": {\n         "email": "john.doe@gmail.com",\n         "firstname": "John",\n         "lastname": "DOE"\n      }\n  }\n}\n')),(0,a.kt)("h2",{id:"subscription-output"},"Subscription output"),(0,a.kt)("h3",{id:"invalid-payload"},"Invalid payload"),(0,a.kt)("p",null,"A booking number can only be used once per subscription. If you do not provide the subscription API with a valid\npayload, you will receive an error 400 (",(0,a.kt)("inlineCode",{parentName:"p"},"Bad Request"),"), stating the ill-formed field. Please refer to\n",(0,a.kt)("a",{parentName:"p",href:"../references/errors"},"the documentation")," for the expected input payload format."),(0,a.kt)("h3",{id:"subscription-already-created"},"Subscription already created"),(0,a.kt)("p",null,"A subscription corresponds to a unique match between the ",(0,a.kt)("inlineCode",{parentName:"p"},"booking number")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"reference_token"),". To avoid\nduplicates you will receive an error 409 (",(0,a.kt)("inlineCode",{parentName:"p"},"Conflict"),") indicating that the subscription has already been created"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "code": 409,\n        "message": "Conflict",\n        "reasons": [\n            "Subscription has already been created"\n        ],\n        "type": ""\n    }\n}\n')),(0,a.kt)("h3",{id:"subscription-successfully-created"},"Subscription successfully created"),(0,a.kt)("p",null,"If the payload is valid you will receive a response 201 (",(0,a.kt)("inlineCode",{parentName:"p"},"Created"),"). This is an example payload that you can receive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "bookingNumber": "5K7SXD",\n        "price": {\n            "amount": 59.97,\n            "currency": "EUR"\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);