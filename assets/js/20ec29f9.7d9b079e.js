"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[221],{7810:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(11),a=r(6017),o=(r(2735),r(9530)),i=["components"],l={sidebar_position:1},u="API basics",s={unversionedId:"overview/api",id:"overview/api",title:"API basics",description:"Our Partner API is a RESTful API that uses JSON for representation. All requests must be",source:"@site/resources/partner-api/overview/api.md",sourceDirName:"overview",slug:"/overview/api",permalink:"/partner-api/overview/api",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/partner-api/introduction"},next:{title:"Authentication",permalink:"/partner-api/overview/authentication"}},c=[{value:"Interface contract",id:"interface-contract",children:[],level:2},{value:"Status codes",id:"status-codes",children:[],level:2},{value:"Error format",id:"error-format",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-basics"},"API basics"),(0,o.kt)("p",null,"Our Partner API is a RESTful API that uses JSON for representation. All requests must be\n",(0,o.kt)("a",{parentName:"p",href:"./authentication"},"authenticated")," using an access token."),(0,o.kt)("h2",{id:"interface-contract"},"Interface contract"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"https://partner.api.hikoala.co/doc/"},"OpenAPI documentation")," shows the input and output payloads for each\nroute."),(0,o.kt)("p",null,"To fill correctly the input payload, please pay close attention to each attribute definition (whether the field is\nrequired or not) to make sure your input payload matches the expected format.",(0,o.kt)("br",null)," Otherwise, you will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"400"),"\n(Bad Request) response from the server and your payload will not be taken into account."),(0,o.kt)("h2",{id:"status-codes"},"Status codes"),(0,o.kt)("p",null,"We use conventional HTTP response codes to indicate the success or failure of an API request."),(0,o.kt)("p",null,"In general:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2xx")," status codes indicate a successful payload"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4xx")," status codes indicate an error in the payload that failed, given the information provided (e.g. an invalid\nauthentication token or missing a required field)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"5xx")," status codes indicate an error with our servers")),(0,o.kt)("h2",{id:"error-format"},"Error format"),(0,o.kt)("p",null,"Errors returned by the API are normalized in order for you to easily understand the error made. Here is an example of\nthe basic error format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": {\n    "code": 401,\n    "message": "Invalid token",\n    "reasons": ["Token expired"],\n    "type": "authentication/token-expired"\n  }\n}\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"As you can see, our error messages always come with a unique technical error code (see ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," In our example above, the type informs us that the token used has expired."),(0,o.kt)("br",null),(0,o.kt)("p",null,"We will always try to provide you with an error message a human can understand to ease development."),(0,o.kt)("br",null),(0,o.kt)("p",null,"To have a look of all our error messages, click ",(0,o.kt)("a",{parentName:"p",href:"../references/errors"},"here"),"."),(0,o.kt)("br",null))}d.isMDXComponent=!0},9530:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(2735);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);