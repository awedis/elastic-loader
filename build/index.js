module.exports=(()=>{var e={381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});const n=require("react");var o=r.n(n),a=r(379),i=r.n(a),s=r(64);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const c=function(e){var t=e.custom;return console.log(t),o().createElement("svg",{height:"100",width:"100"},o().createElement("circle",{cx:"45",cy:"45",r:"45",stroke:t.color,strokeWidth:10}))},l=function(e){var t=e.custom;return o().createElement("svg",{width:t.width,height:t.height,viewBox:"0 0 38 38",stroke:t.color},o().createElement("g",{fill:"none","fill-rule":"evenodd"},o().createElement("g",{transform:"translate(1 1)","stroke-width":"2"},o().createElement("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),o().createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},o().createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))};var u=r(697),f=function(e){var t=e.type,r=e.custom;return o().createElement(o().Fragment,null,function(e,t){return{Circle:o().createElement(c,{custom:t}),Oval:o().createElement(l,{custom:t})}[e]}(t,r))};const d=f;f.propTypes={type:r.n(u)().oneOf(["Circle","Oval"])},f.defaultProps={type:"Circle"}},64:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"/* svg {\r\n    animation: rotate 2s linear infinite;\r\n    background-color: red;\r\n} */\r\n/* @keyframes rotate {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n} */\r\n/* svg circle {\r\n    fill: none;\r\n    stroke-linecap: round;\r\n    transform: translate(5px, 5px);\r\n    stroke-dasharray: 440;\r\n    stroke-dashoffset: 440;\r\n    animation: animate 4s linear infinite;\r\n}\r\n@keyframes animate {\r\n    0%, 100% { stroke-dashoffset: 440; }\r\n    50% { stroke-dashoffset: 0; }\r\n    50.1% { stroke-dashoffset: 880; }\r\n} */",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var f=i(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:h(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function h(e,t){var r,n,o;if(t.singleton){var a=m++;r=p||(p=c(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=c(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var c=s(e,t),l=0;l<r.length;l++){var u=i(r[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=c}}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(381)})();