(self.webpackChunkfront_api_doc=self.webpackChunkfront_api_doc||[]).push([[637],{4227:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(5851),o=n(8518),i=(n(2735),n(9530)),r=["components"],s={sidebar_position:4},l={unversionedId:"basics/quotes",id:"basics/quotes",isDocsHomePage:!1,title:"Quotes",description:"Now that we have covered the basics and what a pack is, it is time for you to understand how to display a price on your",source:"@site/docs/basics/quotes.md",sourceDirName:"basics",slug:"/basics/quotes",permalink:"/docs/basics/quotes",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Packs",permalink:"/docs/basics/packs"},next:{title:"TODO",permalink:"/docs/todo"}},u=[{value:"How Koala works",id:"how-koala-works",children:[]},{value:"Quote output",id:"quote-output",children:[{value:"Invalid payload",id:"invalid-payload",children:[]},{value:"Valid payload but not fulling some criteria",id:"valid-payload-but-not-fulling-some-criteria",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we have covered the basics and what a pack is, it is time for you to understand how to display a price on your\npurchase funnel."),(0,i.kt)("h2",{id:"how-koala-works"},"How Koala works"),(0,i.kt)("p",null,"As mentioned before, you were assigned packs. Each time you send us a trip, our quote engine will match every products\nwithin a pack with the underlying trip elements, aggregate those individual results in a quote. You will then receive a\nquote per pack."),(0,i.kt)("p",null,"If we take the previous example, if you have packs ",(0,i.kt)("inlineCode",{parentName:"p"},"bozk")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flux"),", you will receive:"),(0,i.kt)("p",null,"TODO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "pack_id": "bozk",\n    "valid": true,\n    "id": "<uuid>",\n    "quote": "<base64>",\n    "price": {\n      "amount": 13.24,\n      "currency": "EUR"\n    },\n    // ...\n  },\n  {\n    "pack_id": "flux",\n    "valid": true,\n    "id": "<uuid>",\n    "quote": "<base64>",\n    "price": {\n      "amount": 20.19,\n      "currency": "EUR"\n    },\n    // ...\n  }\n]\n')),(0,i.kt)("h2",{id:"quote-output"},"Quote output"),(0,i.kt)("h3",{id:"invalid-payload"},"Invalid payload"),(0,i.kt)("p",null,"If you do not provide the quote API with a valid payload, you will receive an error 400 (",(0,i.kt)("inlineCode",{parentName:"p"},"Bad Request"),"), stating the\nill-formed field. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"../todo"},"the documentation")," for the expected input payload format."),(0,i.kt)("h3",{id:"valid-payload-but-not-fulling-some-criteria"},"Valid payload but not fulling some criteria"),(0,i.kt)("p",null,"Each product, and, by extension, each pack will come with the set of criteria to ensure we can generate a contract based\non the provided trip. For example, in order to prevent fraud, we may not want to sell Koala's products less than 48\nhours before departure, or chose not to cover journeys containing more than 3 flights."),(0,i.kt)("p",null,"In those cases, you will receive a 200 (",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),") answer from a the server but an invalid quote, meaning we can not apply a\npack to the given trip."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your partnership with Koala involves more than one pack, one could generate a valid quote and another one an invalid\nquote. You must only display valid quotes in your purchase funnel."))),(0,i.kt)("p",null,"Invalid quotes come with a field ",(0,i.kt)("inlineCode",{parentName:"p"},"reasons")," that will help you understand why we could not cover the given trip."),(0,i.kt)("p",null,"If you take the previous example, you can receive:"),(0,i.kt)("p",null,"TODO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "pack_id": "bozk",\n    "valid": false,\n    "id": "<uuid>",\n    "reasons": [\n      "One of the flight is to close in the future (cannot cover flights departing before \'2021-03-15T11:37:00.000+03:00\' and journeys.0.flights.0.departure_date is \'2020-03-12T14:43:00.000+03:00\')"\n    ]\n  },\n  {\n    "pack_id": "flux",\n    "valid": true,\n    "price": {\n      "amount": 20.19,\n      "currency": "EUR"\n    },\n    "id": "<uuid>",\n    "quote": "<base64>"\n    // ...\n  }\n]\n')))}p.isMDXComponent=!0}}]);