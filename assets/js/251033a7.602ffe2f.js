"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[308],{2074:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(11),o=a(6017),r=(a(2735),a(9530)),i=["components"],l={sidebar_position:4},p="Update trip details",u={unversionedId:"guides/update",id:"guides/update",title:"Update trip details",description:"Changes in trip details happen, even more often than we would like, but what should you do if it happens? We are here to talk about it!",source:"@site/resources/partner-api/guides/update.md",sourceDirName:"guides",slug:"/guides/update",permalink:"/partner-api/guides/update",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Declare a booking cancellation",permalink:"/partner-api/guides/contracts"},next:{title:"Be informed of claims status",permalink:"/partner-api/guides/webhooks"}},c=[{value:"When should you update a contract?",id:"when-should-you-update-a-contract",children:[],level:2},{value:"What data can you update?",id:"what-data-can-you-update",children:[],level:2},{value:"How can you update a trip?",id:"how-can-you-update-a-trip",children:[],level:2},{value:"Possible outputs",id:"possible-outputs",children:[],level:2}],s={toc:c};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-trip-details"},"Update trip details"),(0,r.kt)("p",null,"Changes in trip details happen, even more often than we would like, but what should you do if it happens? We are here to talk about it!"),(0,r.kt)("h2",{id:"when-should-you-update-a-contract"},"When should you update a contract?"),(0,r.kt)("p",null,"Usually, you will need to update a contract in case of: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changes made by the customers on their booking (change in departure date, the addition of a service or traveler after the booking, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Unavailability of the tickets that you have sold to the customers"),(0,r.kt)("li",{parentName:"ul"},"Changes made by the carrier before departure (change in flight date, flight number, etc.)")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("strong",null,"We will only accept updates if the contract is still valid")," (= the customers can still make a claim for the contract). If you update an invalid contract, you will receive a `401` error and the update will not be considered.")),(0,r.kt)("h2",{id:"what-data-can-you-update"},"What data can you update?"),(0,r.kt)("strong",null," Except the booking number"),", you can update all the elements of a contract.",(0,r.kt)("p",null,"Among other things, you can update for a contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number of travelers and the travelers info"),(0,r.kt)("li",{parentName:"ul"},"trip price"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Journeys")," and its flight details"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stays"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the change suffered has also caused the modification of the booking number used for the contract, please contact us by email at ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@hikoala.co"},"contact@hikoala.co")," with all the details."))),(0,r.kt)("h2",{id:"how-can-you-update-a-trip"},"How can you update a trip?"),(0,r.kt)("p",null,"Updating trip details is a 2-steps process: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")),(0,r.kt)("p",null,"You need first to use our ",(0,r.kt)("a",{parentName:"p",href:"./quotes"},"Quotes")," endpoint with the new contract details. Even if only one field has been changed, you must return the entire ",(0,r.kt)("a",{parentName:"p",href:"./quotes"},"Quote"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST "https://staging-partner.api.hikoala.co/quotes" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" \n')),(0,r.kt)("p",null,"Please store the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," you received in the response, you will need it for Step 2."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")),(0,r.kt)("p",null,"Once you have completed Step 1, you will need to add the customer and traveler information (",(0,r.kt)("strong",null,"even if it has not changed"),") and ",(0,r.kt)("strong",{parentName:"p"},"Patch")," the ",(0,r.kt)("a",{parentName:"p",href:"./quotes"},"Quote")," you have just made on (please replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookingNumber")," with the booking number of the contract that is being changed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X PATCH "https://staging-partner.api.hikoala.co/subscriptions/{bookingNumber}" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" --data-raw \'{"data": {}}\'\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"If you followed the two steps, you will receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"201")," response, meaning that the trip's details are now up to date and that we have adapted accordingly our operations \ud83d\udcaa"),(0,r.kt)("h2",{id:"possible-outputs"},"Possible outputs"),(0,r.kt)("p",null,"Our API can send you back the following responses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"200"),": The Subscription has successfully been updated \ud83e\udd29"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"400"),": Something went wrong with the update. You may have forgotten one mandatory field or made a mistake with one format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"401"),": The Update cannot be made because you are experimenting with an issue with your token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"404"),": There is no contract associated with the ",(0,r.kt)("inlineCode",{parentName:"li"},"bookingNumber")," that you have provided.")))}d.isMDXComponent=!0},9530:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(2735);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);