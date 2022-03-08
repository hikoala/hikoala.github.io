"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[422],{9530:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(2735);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(11),o=n(6017),a=(n(2735),n(9530)),i=["components"],u={sidebar_position:2},l="Authentication",c={unversionedId:"overview/authentication",id:"overview/authentication",title:"Authentication",description:"At Koala, we decided to use a Bearer token in order to authenticate our partners. Therefore, you will need to provide",source:"@site/resources/partner-api/overview/authentication.md",sourceDirName:"overview",slug:"/overview/authentication",permalink:"/partner-api/overview/authentication",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"API basics",permalink:"/partner-api/overview/api"},next:{title:"Bundles",permalink:"/partner-api/overview/bundles"}},s={},p=[{value:"HTTP header",id:"http-header",level:2},{value:"Token scope",id:"token-scope",level:2},{value:"Security concerns",id:"security-concerns",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"At Koala, we decided to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," token in order to authenticate our partners. Therefore, you will need to provide\na specific header to all your requests on our Partner API."),(0,a.kt)("p",null,"If you have access to this documentation, it means that you should have been provided with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a token for our staging environment,"),(0,a.kt)("li",{parentName:"ul"},"the URL of our staging server"),(0,a.kt)("li",{parentName:"ul"},"the link to our Open API documentation.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"If you did not receive one of the above elements, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@hikoala.co."},"support@hikoala.co.")," We will get back to you as soon as possible (usually within 48 hours)."),(0,a.kt)("h2",{id:"http-header"},"HTTP header"),(0,a.kt)("p",null,"In order to prove that you are authorized to interact with our Partner API, each request should have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader, with the format ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer <your token>"),". Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'> curl -X GET "https://xxx" -H "Authorization: Bearer <your token>"\n{}\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"In case of unauthenticated request, you will receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"401")," error from us."),(0,a.kt)("h2",{id:"token-scope"},"Token scope"),(0,a.kt)("p",null,"As mentioned above, you received a staging token that only gives you access to our staging environment. This environment\nis your playground for testing, all operations performed on that server have no consequences."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Your staging token cannot be used on our production environment.")," You will receive your production token when your tests are validated by us. Please be careful not to mix your tokens and environment. Any operation made on the production server will create contracts and you will be charged accordingly. "))),(0,a.kt)("h2",{id:"security-concerns"},"Security concerns"),(0,a.kt)("p",null,"Please be extra careful with your tokens. It is your responsibility to secure your token. Anyone who has access to your\ntoken can act as yourself and we will have no way to differentiate yourself from the impostor."),(0,a.kt)("p",null,"As a reminder, we will invoice you for all operations made on the production server by your token."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Do not store your token in your versioning system"),(0,a.kt)("li",{parentName:"ul"},"Use a secret manager"),(0,a.kt)("li",{parentName:"ul"},"Do not share your token publicly ")))),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);