"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[832],{1877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(11),r=(t(2735),t(9530));const i={sidebar_position:4},o="Journeys vs Stays",l={unversionedId:"overview/journeys-stays",id:"overview/journeys-stays",title:"Journeys vs Stays",description:"At Koala, we call Trips the booking details of the travellers.",source:"@site/resources/partner-api/overview/journeys-stays.md",sourceDirName:"overview",slug:"/overview/journeys-stays",permalink:"/partner-api/overview/journeys-stays",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Bundles",permalink:"/partner-api/overview/bundles"},next:{title:"Get a price from the API",permalink:"/partner-api/guides/quotes"}},s={},p=[{value:"Definition of a Journey",id:"definition-of-a-journey",level:2},{value:"Definition of Stays",id:"definition-of-stays",level:2},{value:"Trips containing both Journeys and Stays",id:"trips-containing-both-journeys-and-stays",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"journeys-vs-stays"},"Journeys vs Stays"),(0,r.kt)("p",null,"At Koala, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Trips")," the booking details of the travellers."),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"Trips")," can be of 2 different kinds: ",(0,r.kt)("inlineCode",{parentName:"p"},"Journeys")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Stays"),". Let see together what that means!"),(0,r.kt)("h2",{id:"definition-of-a-journey"},"Definition of a Journey"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Journey")," is the term we use to define the travellers' flights details. Inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Journey"),", you will find ",(0,r.kt)("inlineCode",{parentName:"p"},"Flights")," that are the combination of consecutive flights that the travellers will board. "),(0,r.kt)("p",null,"Usually, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Journey")," will be composed by 1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flight")," in case of a one-way trip and 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flights")," in case of a round trip. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In case of multi-city trip, you will need to add one ",(0,r.kt)("inlineCode",{parentName:"p"},"Flight")," by stage of the traveller's journey.")),(0,r.kt)("p",null,"Here is an example of a payload containing a round trip between Paris and Las Vegas with a connection in Seattle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "currency": "EUR",\n        "trips": [\n            {\n                "price": {\n                    "amount": 650,\n                    "currency": "EUR"\n                },\n                "journeys": [\n                    {\n                        "flights": [\n                            {\n                                "airlineIata": "VS",\n                                "number": "3987",\n                                "departureAirportIata": "CDG",\n                                "arrivalAirportIata": "SEA",\n                                "departureDate": "2022-04-23T10:25:00.928+02:00",\n                                "arrivalDate": "2022-04-23T12:05:00.928-07:00"\n                            },\n                            {\n                                "airlineIata": "VS",\n                                "number": "1915",\n                                "departureAirportIata": "SEA",\n                                "arrivalAirportIata": "LAS",\n                                "departureDate": "2022-04-23T15:27:00.928-07:00",\n                                "arrivalDate": "2022-04-23T17:55:00.928-07:00"\n                            }\n                        ],\n                        "flights": [\n                            {\n                                "airlineIata": "VS",\n                                "number": "1908",\n                                "departureAirportIata": "LAS",\n                                "arrivalAirportIata": "SEA",\n                                "departureDate": "2022-04-30T07:30:00.928-07:00",\n                                "arrivalDate": "2022-04-30T10:17:00.928-07:00"\n                            },\n                            {\n                                "airlineIata": "VS",\n                                "number": "3977",\n                                "departureAirportIata": "SEA",\n                                "arrivalAirportIata": "CDG",\n                                "departureDate": "2022-04-30T12:45:00.928-07:00",\n                                "arrivalDate": "2022-05-01T08:10:00.928+02:00"\n                            }\n                        ]\n                    }\n                ],\n                "travelers": [\n                    {\n                        "ageRange": "ADULT"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"definition-of-stays"},"Definition of Stays"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stay")," is the term we use to define the ground services of a booking. It can be hotel rooms, short-term rentals (campsites, etc.), experiences, etc..."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Stay")," is therefore a place where travellers will stay for several days. "),(0,r.kt)("p",null,'Here is an example of a payload if you are going to a Camping called "Camping Flots Bleus":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "currency": "EUR",\n        "trips": [\n            {\n                "price": {\n                    "amount": 250,\n                    "currency": "EUR"\n                },\n                 "stays": [\n                    {\n                        "address": {\n                            "line1": "C\xf4te Ouest, Chem. des Blanquettes",\n                            "postcode": "34450",\n                            "countryCode": "FR",\n                            "locality": "Vias",\n                            "region": "Languedoc Roussillon"\n                        },\n                        "name": "Camping Flots Bleus",\n                        "startDate": "2022-04-06T10:40:00.000Z",\n                        "endDate": "2022-04-12T12:05:00.000Z"\n                    }\n                ],\n                "travelers": [\n                    {\n                        "ageRange": "ADULT",\n                        "residenceCountryCode": "FR"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"trips-containing-both-journeys-and-stays"},"Trips containing both Journeys and Stays"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Trip")," can include both ",(0,r.kt)("inlineCode",{parentName:"p"},"Journeys")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Stays"),"."),(0,r.kt)("p",null,"For instance, if you are selling packages containing both hotel and flight, you will need to send us one entry ",(0,r.kt)("inlineCode",{parentName:"p"},"Journeys")," for the flights and one entry ",(0,r.kt)("inlineCode",{parentName:"p"},"Stays")," for the hotel."),(0,r.kt)("p",null,"Here is an example of a payload if you are selling a package hotel + flight from Paris to Vegas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "currency": "EUR",\n        "trips": [\n            {\n                "price": {\n                    "amount": 2500,\n                    "currency": "EUR"\n                },\n                "journeys": [\n                    {\n                        "flights": [\n                            {\n                                "airlineIata": "VS",\n                                "number": "3987",\n                                "departureAirportIata": "CDG",\n                                "arrivalAirportIata": "SEA",\n                                "departureDate": "2022-04-23T10:25:00.928+02:00",\n                                "arrivalDate": "2022-04-23T12:05:00.928-07:00"\n                            },\n                            {\n                                "airlineIata": "VS",\n                                "number": "1915",\n                                "departureAirportIata": "SEA",\n                                "arrivalAirportIata": "LAS",\n                                "departureDate": "2022-04-23T15:27:00.928-07:00",\n                                "arrivalDate": "2022-04-23T17:55:00.928-07:00"\n                            }\n                        ],\n                        "flights": [\n                            {\n                                "airlineIata": "VS",\n                                "number": "1908",\n                                "departureAirportIata": "LAS",\n                                "arrivalAirportIata": "SEA",\n                                "departureDate": "2022-04-30T07:30:00.928-07:00",\n                                "arrivalDate": "2022-04-30T10:17:00.928-07:00"\n                            },\n                            {\n                                "airlineIata": "VS",\n                                "number": "3977",\n                                "departureAirportIata": "SEA",\n                                "arrivalAirportIata": "CDG",\n                                "departureDate": "2022-04-30T12:45:00.928-07:00",\n                                "arrivalDate": "2022-05-01T08:10:00.928+02:00"\n                            }\n                        ]\n                    }\n                ],\n                "stays": [\n                    {\n                        "address": {\n                            "line1": "3600 S Las Vegas Blvd",\n                            "postcode": "NV 89109",\n                            "countryCode": "US",\n                            "locality": "Las Vegas",\n                            "region": "Nevada"\n                        },\n                        "name": "Bellagio Hotel",\n                        "startDate": "2022-04-23T18:00:00.000Z",\n                        "endDate": "2022-04-30T08:00:00.000Z"\n                    }\n                ],\n                "travelers": [\n                    {\n                        "ageRange": "ADULT"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')))}d.isMDXComponent=!0},9530:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var a=t(2735);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=r,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);