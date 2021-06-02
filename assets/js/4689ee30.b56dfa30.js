(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[957],{9530:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(2735);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6574:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(5851),o=t(8518),a=(t(2735),t(9530)),i=["components"],c={sidebar_position:2},u={unversionedId:"basics/documentation",id:"basics/documentation",isDocsHomePage:!1,title:"OpenAPI",description:"Our API comes with a low level documentation (OpenAPI) and a swagger UI. Even if the low level documention should be",source:"@site/resources/partner-api/basics/documentation.md",sourceDirName:"basics",slug:"/basics/documentation",permalink:"/partner-api/basics/documentation",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Authentication",permalink:"/partner-api/basics/authentication"},next:{title:"Bundles",permalink:"/partner-api/basics/bundles"}},s=[{value:"Error handling",id:"error-handling",children:[]},{value:"Data Transfer Object (DTO)",id:"data-transfer-object-dto",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our API comes with a low level documentation (OpenAPI) and a swagger UI. Even if the low level documention should be\nenough to integrate with Koala's API, we highly recommend you to continue reading this documentation to understand the\nvocabulary and core concepts."),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Error returned by the API are normalized in order for you to easily understand errors. An exhaustive list of errors can\nbe found at XXX but basic format looks like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "reason": "You do not have access to the resource /v1/partners.",\n  "error": "#12"\n}\n')),(0,a.kt)("p",null,"We try to always provide you with an error a human can understand to easy development. In addition, some errors comes\nwith a unique technical error code you can find detailed reasons why it occurred in our\n",(0,a.kt)("a",{parentName:"p",href:"../todo"},"dedicated documentation on errors"),"."),(0,a.kt)("h2",{id:"data-transfer-object-dto"},"Data Transfer Object (DTO)"),(0,a.kt)("p",null,"Our OpenAPI shows the API contract of both input and output payloads for each route. Pay a close attention to each\nattribute definition to make sure your input payload matches the expected format. Otherwise, you will receive a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Bad Request")," response from the server. This error should carry enough information for you to understand why your\npayload was rejected, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 400,\n  "reason": "Field client.first_name cannot be empty.",\n  "error": "#312"\n}\n')))}d.isMDXComponent=!0}}]);