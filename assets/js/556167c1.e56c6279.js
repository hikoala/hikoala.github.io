"use strict";(self.webpackChunkfront_documentation=self.webpackChunkfront_documentation||[]).push([[567],{7146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(6033),r=n(7839),o=(n(2735),n(9530)),i=["components"],l={sidebar_position:3},c="Declare a booking cancellation",s={unversionedId:"guides/contracts",id:"guides/contracts",title:"Declare a booking cancellation",description:"You should only look at this section when you are selling a Flex product.",source:"@site/resources/partner-api/guides/contracts.md",sourceDirName:"guides",slug:"/guides/contracts",permalink:"/partner-api/guides/contracts",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Create a contract",permalink:"/partner-api/guides/subscriptions"},next:{title:"Update trip details",permalink:"/partner-api/guides/update"}},p={},u=[{value:"Why using Contracts?",id:"why-using-contracts",level:2},{value:"How to correctly declare a booking cancellation",id:"how-to-correctly-declare-a-booking-cancellation",level:2},{value:"Possible Contracts outputs",id:"possible-contracts-outputs",level:2},{value:"How to know a claim status",id:"how-to-know-a-claim-status",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declare-a-booking-cancellation"},"Declare a booking cancellation"),(0,o.kt)("p",null,"You should only look at this section when you are selling a ",(0,o.kt)("inlineCode",{parentName:"p"},"Flex")," product."),(0,o.kt)("h2",{id:"why-using-contracts"},"Why using Contracts?"),(0,o.kt)("p",null,"The Contracts will be used to declare booking cancellations from travelers and to create a claim."),(0,o.kt)("p",null,"Once a claim is created, it will initiate the travelers refund process."),(0,o.kt)("h2",{id:"how-to-correctly-declare-a-booking-cancellation"},"How to correctly declare a booking cancellation"),(0,o.kt)("p",null,"The process to declare a booking cancellation is a 2-steps process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make a GET")," on (please replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookingNumber")," with the booking number wanting to cancel their booking):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X GET "https://staging-partner.api.hikoala.co/subscriptions/<bookingNumber>/contracts" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" \n')),(0,o.kt)("p",null,"Inside this payload, go inside the array containing the product type ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdrawal")," and store the id relating to this\ncontract."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make a POST")," on (please replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractId")," with the one that you find in step 1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST "https://staging-partner.api.hikoala.co/contracts/<contractId>/claims" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" --data-raw \'{"data": {}}\'\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you did correctly those 2 steps, you should have received a ",(0,o.kt)("inlineCode",{parentName:"p"},"201")," response. Koala is now aware of the traveler\u2019s\nbooking cancellation and we have initiated the refund process."),(0,o.kt)("h2",{id:"possible-contracts-outputs"},"Possible Contracts outputs"),(0,o.kt)("p",null,"Our Contracts API can send you back the following responses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"201"),": The Claim is successfully created and the refund process is now initiated \ud83e\udd29"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"400"),": The Claim is invalid. You may have forgotten one mandatory field or made a mistake with one format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"401"),": The Claim cannot be created because you are experimenting an issue with your token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"404"),": There is no contract associated with the contractId that you have provided.")),(0,o.kt)("h2",{id:"how-to-know-a-claim-status"},"How to know a claim status"),(0,o.kt)("p",null,"If you want to know the status of a claim, you can ",(0,o.kt)("strong",{parentName:"p"},"Make a GET")," on (please replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookingNumber")," with the\nbooking number you want to know the claim status):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X GET "https://staging-partner.api.hikoala.co/subscriptions/<bookingNumber>/contracts" -H "Content-Type: application/JSON" -H "accept: application/JSON" -H "Authorization: Bearer <token>" \n')),(0,o.kt)("p",null,"Inside this payload, go inside the array containing the product type ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdrawal"),", go to ",(0,o.kt)("inlineCode",{parentName:"p"},"claim")," and then refer\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"status"),"."),(0,o.kt)("p",null,"The claim status are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MORE_INFO_NEEDED")," -> Information is missing to determine the eligibility of the travelers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACCEPTED")," -> Travelers eligible for compensation, we are waiting for receiving their bank details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REFUNDABLE")," -> Bank details received, the bank transfer has not been processed yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REFUNDED")," -> Bank transfer has been processed, the travelers have either received their compensation or will receive\nit shortly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REJECTED")," -> Based on the information given, the traveler is not entitled to compensation.")))}k.isMDXComponent=!0},9530:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(2735);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);