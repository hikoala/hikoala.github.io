(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[221],{9530:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(2735);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6548:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=t(5851),o=t(8518),a=(t(2735),t(9530)),i=["components"],c={sidebar_position:1},u={unversionedId:"overview/api",id:"overview/api",isDocsHomePage:!1,title:"API basics",description:"Our API comes with a low level documentation (OpenAPI) and a swagger UI. Even if the low level documention should be",source:"@site/resources/partner-api/overview/api.md",sourceDirName:"overview",slug:"/overview/api",permalink:"/partner-api/overview/api",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/partner-api/introduction"},next:{title:"Authentication",permalink:"/partner-api/overview/authentication"}},s=[{value:"Error handling",id:"error-handling",children:[]},{value:"Data Transfer Object (DTO)",id:"data-transfer-object-dto",children:[]}],l={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our API comes with a low level documentation (OpenAPI) and a swagger UI. Even if the low level documention should be\nenough to integrate with Koala's API, we highly recommend you to continue reading this documentation to understand the\nvocabulary and core concepts."),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Error returned by the API are normalized in order for you to easily understand errors. An exhaustive list of errors can\nbe found at XXX but basic format looks like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "reason": "You do not have access to the resource /v1/partners.",\n  "error": "#12"\n}\n')),(0,a.kt)("p",null,"We try to always provide you with an error a human can understand to easy development. In addition, some errors comes\nwith a unique technical error code you can find detailed reasons why it occurred in our\n",(0,a.kt)("a",{parentName:"p",href:"../references/errors"},"dedicated documentation on errors"),"."),(0,a.kt)("h2",{id:"data-transfer-object-dto"},"Data Transfer Object (DTO)"),(0,a.kt)("p",null,"Our OpenAPI shows the API contract of both input and output payloads for each route. Pay a close attention to each\nattribute definition to make sure your input payload matches the expected format. Otherwise, you will receive a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Bad Request")," response from the server. This error should carry enough information for you to understand why your\npayload was rejected, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 400,\n  "reason": "Field client.first_name cannot be empty.",\n  "error": "#312"\n}\n')))}p.isMDXComponent=!0}}]);