(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{265:function(t,e,n){"use strict";n.r(e);var r,o,i,u=n(0),c=n.n(u),a=(n(272),n(69),n(279)),s=n.n(a);class f extends c.a.PureComponent{render(){const{image:t,webp:e,alt:n,styleBlock:r,modifier:o,span:i,noFill:u,shift:a}=this.props;return c.a.createElement("figure",{className:s()("revealer__figure revealer--no-animation",{[`${r}__figure`]:r,[`${r}__figure--${o}`]:r&&o,[`revealer--span-${i}`]:i,[`revealer--shift-${a}`]:a,"revealer--no-fill":u})},!u&&c.a.createElement("div",{className:`\n                                ${r}__figure-fill\n                                ${r}__figure-fill--${o}\n                                revealer__figure-fill\n                            `}),c.a.createElement("picture",null,e&&c.a.createElement("source",{srcSet:e,type:"image/webp"}),c.a.createElement("source",{srcSet:t}),c.a.createElement("img",{src:t,alt:n,className:`\n                            ${r}__image\n                            ${r}__image--${o}\n                            revealer__image`})))}}i={span:3},(o="defaultProps")in(r=f)?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i;c.a.PureComponent;c.a.PureComponent;var l=n(257),p=n(254),m=n(258);class d extends c.a.PureComponent{constructor(...t){super(...t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"sealConfig",{from:"top-bottom",to:"bottom-top",timing:"expoIn",direct:!0,props:{"--pat-ty":{from:"20%",to:"-20%"}}})}render(){return c.a.createElement("main",{className:"transcend"},c.a.createElement(l.a,null),c.a.createElement("section",{className:"section section--hero"},c.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),c.a.createElement(p.a,{heading:"Transcend",pill:"Design • Branding"})),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"02"),c.a.createElement("div",{className:"case-study__row"},c.a.createElement(m.a,{svg:"/images/transcend/seal.svg",alt:"Logo",className:"transcend__logo"})),c.a.createElement("div",{className:"case-study__row"},c.a.createElement(m.a,{svg:"/images/transcend/alt-mark.svg",alt:"Alternate Mark",className:"transcend__logo"}))))}}e.default=d},272:function(t,e,n){var r;n(164),n(276),n(93),n(41),n(17),n(53),n(34),n(24),n(15),n(10),n(6),n(16),n(68),n(74),n(42),n(54),n(75),n(55),n(67),t.exports=(r=n(0),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){t.exports=n(3)()},function(t,e){t.exports=r},function(t,e,n){var r;t.exports=function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){if(!a&&"function"==typeof r&&r)return r(c,!0);if(u)return u(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[c]={exports:{}};e[c][0].call(f.exports,(function(t){return i(e[c][1][t]||t)}),f,f.exports,t,e,n,o)}return n[c].exports}for(var u="function"==typeof r&&r,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){e.exports=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},{}],2:[function(t,e,n){e.exports=function(t){var e=1.70158;return t*t*((e+1)*t-e)}},{}],3:[function(t,e,n){e.exports=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1}},{}],4:[function(t,e,n){var r=t("./bounce-out");e.exports=function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,e,n){var r=t("./bounce-out");e.exports=function(t){return 1-r(1-t)}},{"./bounce-out":6}],6:[function(t,e,n){e.exports=function(t){var e=t*t;return t<4/11?7.5625*e:t<8/11?9.075*e-9.9*t+3.4:t<.9?4356/361*e-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,e,n){e.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,e,n){e.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,e,n){e.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,e,n){e.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,e,n){e.exports=function(t){return t*t*t}},{}],12:[function(t,e,n){e.exports=function(t){var e=t-1;return e*e*e+1}},{}],13:[function(t,e,n){e.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,e,n){e.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,e,n){e.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,e,n){e.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,e,n){e.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,e,n){e.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,e,n){e.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,e,n){e.exports=function(t){return t}},{}],21:[function(t,e,n){e.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,e,n){e.exports=function(t){return t*t}},{}],23:[function(t,e,n){e.exports=function(t){return-t*(t-2)}},{}],24:[function(t,e,n){e.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,e,n){e.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,e,n){e.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,e,n){e.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,e,n){e.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,e,n){e.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,e,n){e.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,e,n){e.exports=function(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}},{}],32:[function(t,e,n){e.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,e,n){e.exports=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e}},{}],34:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=void 0;var r=i(t("parse-unit")),o=i(t("eases"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,a,s=[],f="undefined"!=typeof window,l=function(){return(document.scrollingElement||document.documentElement).scrollTop},p=function(t){return!1===isNaN((0,r.default)(t)[0])},m=function(t){var e=(0,r.default)(t);return{value:e[0],unit:e[1]}},d=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},b=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:l(),r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,o=e.getBoundingClientRect(),i=t.match(/^[a-z]+/)[0],u=t.match(/[a-z]+$/)[0],c=0;return"top"===u&&(c-=0),"middle"===u&&(c-=r/2),"bottom"===u&&(c-=r),"top"===i&&(c+=o.top+n),"middle"===i&&(c+=o.top+n+o.height/2),"bottom"===i&&(c+=o.top+n+o.height),"".concat(c,"px")},y=function(t){var e,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:l(),o=t.getData(),i=o.to.value-o.from.value,u=(r-o.from.value)/(i/100),c=Math.min(Math.max(u,0),100),a=(e=o.direct,n={global:document.documentElement,elem:o.elem,direct:o.direct},!0===e?n.elem:e instanceof HTMLElement==1?n.direct:n.global),s=Object.keys(o.props).reduce((function(t,e){var n=o.props[e],r=n.from.unit||n.to.unit,i=n.from.value-n.to.value,u=n.timing(c/100),a=n.from.value-i*u,s=Math.round(1e4*a)/1e4;return t[e]=s+r,t}),{}),f=u<0||100<u;return 1==(0<=u&&u<=100)&&o.inside(t,u,s),!0===f&&o.outside(t,u,s),{elem:a,props:s}},h=function(t,e){Object.keys(e).forEach((function(n){return r=t,o={key:n,value:e[n]},void r.style.setProperty(o.key,o.value);var r,o}))};n.create=function(t){var e=null,n=!1,r={isActive:function(){return n},getData:function(){return e},calculate:function(){e=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).inside&&(t.inside=function(){}),null==t.outside&&(t.outside=function(){}),null==t.direct&&(t.direct=!1),null==t.track&&(t.track=!0),null==t.props&&(t.props={}),null==t.from)throw new Error("Missing property `from`");if(null==t.to)throw new Error("Missing property `to`");if("function"!=typeof t.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof t.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof t.direct&&t.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===t.direct&&null==t.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof t.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==u(t.props))throw new Error("Property `props` must be undefined or an object");if(null==t.elem){if(!1===p(t.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(t.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===d(t.from)&&(t.from=b(t.from,t.elem)),!0===d(t.to)&&(t.to=b(t.to,t.elem));return t.from=m(t.from),t.to=m(t.to),t.props=Object.keys(t.props).reduce((function(e,n){var r=Object.assign({},t.props[n]);if(!1===p(r.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(r.to))throw new Error("Property `from` of prop must be a absolute value");if(r.from=m(r.from),r.to=m(r.to),null==r.timing&&(r.timing=o.default.linear),"string"!=typeof r.timing&&"function"!=typeof r.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof r.timing&&null==o.default[r.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof r.timing&&(r.timing=o.default[r.timing]),e[n]=r,e}),{}),t}(t)},update:function(){var t=y(r),e=t.elem,n=t.props;return h(e,n),n},start:function(){n=!0},stop:function(){n=!1},destroy:function(){s[i]=void 0}},i=s.push(r)-1;return r.calculate(),r},!0===f?(function t(e,n){var r=function(){requestAnimationFrame((function(){return t(e,n)}))},o=s.filter((function(t){return null!=t&&t.isActive()}));if(0===o.length)return r();var i=l();if(n===i)return r();n=i,o.map((function(t){return y(t,i)})).forEach((function(t){var e=t.elem,n=t.props;return h(e,n)})),r()}(),window.addEventListener("resize",(c=function(){s.filter((function(t){return null!=t&&t.getData().track})).forEach((function(t){t.calculate(),t.update()}))},a=null,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];clearTimeout(a),a=setTimeout((function(){return c.apply(void 0,e)}),50)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)},function(t,e,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2),i=n(0),u=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={from:u.a.oneOfType([u.a.string,u.a.number]).isRequired,to:u.a.oneOfType([u.a.string,u.a.number]).isRequired,direct:u.a.any,track:u.a.bool,inside:u.a.func,outside:u.a.func,props:u.a.object.isRequired},b=function(t){function e(t){var n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=f(e).call(this,t),n=!o||"object"!==c(o)&&"function"!=typeof o?l(this):o,m(l(n),"elementRef",r.createRef()),m(l(n),"start",(function(){n.basicScrollInstanceFn("start")})),m(l(n),"stop",(function(){n.basicScrollInstanceFn("stop")})),m(l(n),"destroy",(function(){n.basicScrollInstanceFn("destroy")})),m(l(n),"update",(function(){return n.basicScrollInstanceFn("update")})),m(l(n),"calculate",(function(){n.basicScrollInstanceFn("calculate")})),m(l(n),"isActive",(function(){return n.basicScrollInstanceFn("isActive")})),m(l(n),"getData",(function(){return n.basicScrollInstanceFn("getData")})),n}var n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r.Component),n=e,(i=[{key:"componentDidMount",value:function(){var t=this.props.config;this.basicScrollInstance=o.create(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({elem:this.elementRef.current},t)),this.basicScrollInstanceFn("start")}},{key:"render",value:function(){var t=this.props.children;return r.cloneElement(t,{ref:this.elementRef})}},{key:"componentWillUnmount",value:function(){this.basicScrollInstanceFn("destroy")}},{key:"basicScrollInstanceFn",value:function(t){if(this.basicScrollInstance&&"function"==typeof this.basicScrollInstance[t])return this.basicScrollInstance[t].call(null)}}])&&s(n.prototype,i),e}();m(b,"propTypes",{config:u.a.shape(d).isRequired}),m(b,"defaultProps",{config:{from:null,to:null,direct:!1,track:!0,inside:function(t,e,n){return null},outside:function(t,e,n){return null},props:{}}}),n.d(e,"ReactBasicScroll",(function(){return b}))}]))},276:function(t,e,n){var r=n(1),o=n(277),i=n(33),u=n(76),c=n(163);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),a=u.f,s=o(r),f={},l=0;s.length>l;)void 0!==(n=a(r,e=s[l++]))&&c(f,e,n);return f}})},277:function(t,e,n){var r=n(56),o=n(92),i=n(11),u=n(3).Reflect;t.exports=u&&u.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},279:function(t,e,n){var r;n(28),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-transcend-js-08d9bdcc98ce95eca8da.js.map