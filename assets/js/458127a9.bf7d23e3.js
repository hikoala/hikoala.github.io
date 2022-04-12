"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[502],{5333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(6033),o=n(7839),r=(n(2735),n(9530)),i=["components"],l={sidebar_position:1},s="Get a price from the API",u={unversionedId:"guides/quotes",id:"guides/quotes",title:"Get a price from the API",description:"Now that you know what a bundle is, it is time for you to understand how to display a price in your purchase funnel.",source:"@site/resources/partner-api/guides/quotes.md",sourceDirName:"guides",slug:"/guides/quotes",permalink:"/partner-api/guides/quotes",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Reporting a flight cancellation",permalink:"/partner-api/overview/flight-cancellation"},next:{title:"Create a contract",permalink:"/partner-api/guides/subscriptions"}},p={},d=[{value:"What is a Quote?",id:"what-is-a-quote",level:2},{value:"Journeys? Stays? What are those?",id:"journeys-stays-what-are-those",level:2},{value:"Example of Quote input",id:"example-of-quote-input",level:2},{value:"Possible Quote outputs",id:"possible-quote-outputs",level:2},{value:"Valid payload but inability to sell the bundle",id:"valid-payload-but-inability-to-sell-the-bundle",level:3}],c={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-a-price-from-the-api"},"Get a price from the API"),(0,r.kt)("p",null,"Now that you know what a bundle is, it is time for you to understand how to display a price in your purchase funnel."),(0,r.kt)("h2",{id:"what-is-a-quote"},"What is a Quote?"),(0,r.kt)("p",null,"The Quote is the endpoint that you will use to obtain the price of Koala products (in the form of bundles now that you\nare an expert!)."),(0,r.kt)("p",null,"Every time that you need to know how much a Koala product costs, you will call the Quote API and send us the traveler's\ntrip details. Our Quote engine will then compute the price of all the possible bundles for the given trip details. You\nwill receive one price per bundle."),(0,r.kt)("p",null,"By default, a Quote will be valid for ",(0,r.kt)("strong",{parentName:"p"},"24 hours")," (if you need us to extend this validity period, please let us know at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@hikoala.co"},"support@hikoala.co"),")."),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For one customer session in your purchase funnel, the Quote API can be called several times if the traveler decides to make changes to their\nbooking details (choose a new flight, add or remove a traveler, change dates, etc...). "))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If all travelers are on the same trips and can only purchase the products on a booking level (= all travelers is covered when they add products), you should provide only one trip."),(0,r.kt)("br",null),"If you offer the possibility for multi-travelers bookings to individually purchase products (or allow them to book different trips), multiple trips needs to be used.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u26a0\ufe0f By default, your partnership does not support multiple trips and all travelers can subscribe to the same products. Therefore, the size of the array is limited to 1. "),(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"journeys-stays-what-are-those"},"Journeys? Stays? What are those?"),(0,r.kt)("p",null,"Inside your Quote, you will need to mention the traveler trip details. There are 2 different kinds of trip: ",(0,r.kt)("inlineCode",{parentName:"p"},"Journeys")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Stays"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Journeys")," is used to inform us about the travelers' flight details. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stays")," is used to inform us about the location where the travelers are going. Usually, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"Stays")," when you are selling hotel rooms, short-term rentals (campsites, etc.) or experiences."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("strong",null,"Your Quote can include both journey(s) and stay(s)."),(0,r.kt)("br",null),"For instance, if you are selling a package to a traveller containing a hotel and the flight to go there, you will have one entry `Journeys` for the flights and one entry `Stays` for the hotel.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"example-of-quote-input"},"Example of Quote input"),(0,r.kt)("p",null,"This is an example of a payload to provide to the Quotes service for a trip containing only a ",(0,r.kt)("inlineCode",{parentName:"p"},"Journeys"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "trips": [\n      {\n        "price": { "amount": 590.97, "currency": "EUR" },\n        "journeys": [\n          {\n            "flights": [\n              {\n                "airlineIata": "AF",\n                "number": "65",\n                "departureAirportIata": "LAX",\n                "arrivalAirportIata": "CDG",\n                "departureDate": "2021-08-03T09:50:00Z",\n                "arrivalDate": "2021-08-04T11:50:00Z"\n              }\n            ]\n          }\n        ],\n        "travelers": [\n          {\n            "ageRange": "ADULT"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"possible-quote-outputs"},"Possible Quote outputs"),(0,r.kt)("p",null,"Our Quote API will give you different responses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"201"),": The Quote is valid and respects the expected format. Inside this response, you will find a reference that will be required for the ",(0,r.kt)("a",{parentName:"li",href:"./subscriptions"},"Subscriptions")," (",(0,r.kt)("strong",{parentName:"li"},"pay close attention to the quote validity"),"). Keep this reference warm \ud83d\udc4c \xbb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"400"),": The Quote is invalid. You may have forgotten one mandatory field or made a mistake with one format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"401"),": The Quote cannot be send because you are experimenting an issue with your token.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Only Quotes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"201")," response and a valid body can be displayed in your purchase funnel."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"valid-payload-but-inability-to-sell-the-bundle"},"Valid payload but inability to sell the bundle"),(0,r.kt)("p",null,"Each product and, by extension, each bundle can come with a set of limitations of sales."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("em",{parentName:"p"},"A product can sometimes be sold only up to a certain time before departure in order to prevent fraud.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"If you send a payload in the right format but is in breach with one of the sales limitation, you will receive a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"201")," response from the server ",(0,r.kt)("strong",{parentName:"p"},"but with the\nbody containing an invalid Quote, meaning we can not sell the bundle to the given trip.")),(0,r.kt)("p",null,"Invalid Quotes come with ",(0,r.kt)("inlineCode",{parentName:"p"},"reasons")," to help you understand why we cannot cover the given trip."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you are selling more than 1 Koala product, you can receive both valid and invalid Quotes. In your purchase funnel, you ",(0,r.kt)("strong",{parentName:"p"},"must only display valid Quotes.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Example: If you are selling 2 products, you may receive the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "quotes": [\n        {\n          "valid": true,\n          "bundle": "silver",\n          "price": {\n            "amount": 590.97,\n            "currency": "EUR"\n          },\n          "reference": "<QUOTE_REFERENCE>",\n          "date": "2021-06-03T14:49:07.790+02:00",\n          "expirationDate": "2021-06-04T14:49:07.790+02:00"\n        },\n        {\n          "valid": false,\n          "bundle": "gold",\n          "reasons": [\n            "One of the flights is too close in the future (cannot cover flights departing before \'2021-08-02T12:50:00Z+03:00\' and journeys.0.flights.0.departure_date is \'2021-08-03T12:50:00.000+03:00\')"\n          ],\n          "date": "2021-06-03T14:49:07.790+02:00"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Here, you will be able to sell the ",(0,r.kt)("inlineCode",{parentName:"p"},"silver")," bundle but not the ",(0,r.kt)("inlineCode",{parentName:"p"},"gold")," one."),(0,r.kt)("br",null))}h.isMDXComponent=!0},9530:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(2735);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);