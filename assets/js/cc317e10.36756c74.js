"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[477],{5098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(6033),a=n(7839),i=(n(2735),n(9530)),o=["components"],l={sidebar_position:7},c="Reporting a flight cancellation",u={unversionedId:"guides/report-flights",id:"guides/report-flights",title:"Reporting a flight cancellation",description:"For any subscriptions including at least a flight, we will always control the flight status.",source:"@site/resources/partner-api/guides/report-flights.md",sourceDirName:"guides",slug:"/guides/report-flights",permalink:"/partner-api/guides/report-flights",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"Tracking conversion rate",permalink:"/partner-api/guides/conversion-rate"},next:{title:"Multi-planning booking",permalink:"/partner-api/references/multi-planning_booking"}},p={},s=[{value:"When should you report a flight cancellation?",id:"when-should-you-report-a-flight-cancellation",level:2},{value:"How can you report a flight cancellation?",id:"how-can-you-report-a-flight-cancellation",level:2},{value:"Possible outputs",id:"possible-outputs",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reporting-a-flight-cancellation"},"Reporting a flight cancellation"),(0,i.kt)("p",null,"For any subscriptions including at least a flight, we will always control the flight status. "),(0,i.kt)("p",null,"However, you may have access to this information before Koala. To ensure an optimal customer experience, we need you! \ud83d\ude4c"),(0,i.kt)("h2",{id:"when-should-you-report-a-flight-cancellation"},"When should you report a flight cancellation?"),(0,i.kt)("p",null,"You will need to report a flight cancellation if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You received information from the carrier that your flight has been cancelled"),(0,i.kt)("li",{parentName:"ul"},"You received a written confirmation with proof (e.g. cancellation email) from your customer informing you of a flight cancelled")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We consider as ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelled flights"),", any flight that will not be carried out by the carrier. "),(0,i.kt)("strong",null,"If a flight is rescheduled on the same day with the same flight number, you should not report it."))),(0,i.kt)("h2",{id:"how-can-you-report-a-flight-cancellation"},"How can you report a flight cancellation?"),(0,i.kt)("p",null,"When you become aware of a cancelled flight, you should ",(0,i.kt)("strong",{parentName:"p"},"POST")," the flights' details through:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -X POST "https://staging-partner.api.hikoala.co/flights/{airlineIata}/{number}/{localDepartureDate}/{departureAirportIata}/statuses" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" \n')),(0,i.kt)("p",null,"You will have to replace the following fields inside your call: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{airlineIata}"),": IATA of the carrier (e.g. AF for Air France)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{number}"),": Flight Number (e.g. 1380)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{localDepartureDate}"),": Date of the flight under the format YYYY-MM-DD (e.g. 2022-10-29 for a flight on October 29th, 2022)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{departureAirportIata}"),": IATA of the departure Airport (e.g. CDG for Charles de Gaulle International Airport)")),(0,i.kt)("p",null,"Inside the payload, you will need to add: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"providedAt"),": DateTime when you received the information (ISO 8601 format)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": Status of the flight (",(0,i.kt)("strong",{parentName:"li"},"you should mention ",(0,i.kt)("inlineCode",{parentName:"strong"},"Canceled")),")")),(0,i.kt)("h2",{id:"possible-outputs"},"Possible outputs"),(0,i.kt)("p",null,"Our API can send you back the following responses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"201"),": We have accepted your flight status, thanks a lot for that \ud83d\ude4c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"400"),": Something went wrong with your call. You may have forgotten one mandatory field or made a mistake with one format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"401"),": The cancellation reporting cannot be made because you are experiencing an issue with your token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"404"),": We do not have any subscriptions containing this flight. We cannot take this flight cancellation into account.")))}d.isMDXComponent=!0},9530:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(2735);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,h=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);