/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}const t=function t(n,i){function r(t,r,o){if("undefined"!=typeof document){"number"==typeof(o=e({},i,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],i={},r=0;r<t.length;r++){var o=t[r].split("="),s=o.slice(1).join("=");try{var a=decodeURIComponent(o[0]);if(i[a]=n.read(s,a),e===a)break}catch(e){}}return e?i[e]:i}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var n=t.get("gamePadreFernando"),i=document.querySelector(".true");n?i.remove("div"):document.querySelector(".button-cookies").addEventListener("click",(function(){t.set("gamePadreFernando","accept",{expires:365}),i.remove("div")}));const r=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},o=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(r);if(r(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||r(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var o=t.querySelectorAll(e);return Array.prototype.slice.call(o)}catch(e){return[]}return[]};function s(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=a();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function a(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function c(e,t){for(var n=s(e),i=s(t),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],c=0;c<4;c++){var l=4*c,d=[i[l],i[l+1],i[l+2],i[l+3]],u=a[0]*d[0]+a[1]*d[1]+a[2]*d[2]+a[3]*d[3];r[o+l]=u}return r}function l(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return s(t[2].split(", ").map(parseFloat))}return a()}function d(e,t){var n=a();return n[0]=e,n[5]="number"==typeof t?t:e,n}var u,f=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){return f(e)}),0)});const h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f;var p={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},v=function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},m=function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function y(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function g(e,t){if(y(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function b(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function w(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},i={active:[],stale:[]};try{g(o("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(e){throw e}g(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),g(t.stale,(function(t){return delete e.store.elements[t]})),g(this.store.elements,(function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),g(this.store.containers,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),g(i.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),g(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),g(n.stale,(function(t){return delete e.store.sequences[t]}))}var x=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function E(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",r.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?r.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var s,u,f,h=parseFloat(t.opacity),p=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),v={computed:h!==p?"opacity: "+h+";":"",generated:h!==p?"opacity: "+p+";":""},m=[];if(parseFloat(i.distance)){var y="top"===i.origin||"bottom"===i.origin?"Y":"X",g=i.distance;"top"!==i.origin&&"left"!==i.origin||(g=/^-/.test(g)?g.substr(1):"-"+g);var b=g.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),w=b[0];switch(b[1]){case"em":g=parseInt(t.fontSize)*w;break;case"px":g=w;break;case"%":g="Y"===y?e.node.getBoundingClientRect().height*w/100:e.node.getBoundingClientRect().width*w/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===y?m.push(function(e){var t=a();return t[13]=e,t}(g)):m.push(function(e){var t=a();return t[12]=e,t}(g))}i.rotate.x&&m.push((s=i.rotate.x,u=Math.PI/180*s,(f=a())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&m.push(function(e){var t=Math.PI/180*e,n=a();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&m.push(function(e){var t=Math.PI/180*e,n=a();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(i.rotate.z)),1!==i.scale&&(0===i.scale?m.push(d(2e-4)):m.push(d(i.scale)));var E={};if(m.length){E.property=x("transform"),E.computed={raw:t[E.property],matrix:l(t[E.property])},m.unshift(E.computed.matrix);var k=m.reduce(c);E.generated={initial:E.property+": matrix3d("+k.join(", ")+");",final:E.property+": matrix3d("+E.computed.matrix.join(", ")+");"}}else E.generated={initial:"",final:""};var j={};if(v.generated||E.generated.initial){j.property=x("transition"),j.computed=t[j.property],j.fragments=[];var O=i.delay,S=i.duration,T=i.easing;v.generated&&j.fragments.push({delayed:"opacity "+S/1e3+"s "+T+" "+O/1e3+"s",instant:"opacity "+S/1e3+"s "+T+" 0s"}),E.generated.initial&&j.fragments.push({delayed:E.property+" "+S/1e3+"s "+T+" "+O/1e3+"s",instant:E.property+" "+S/1e3+"s "+T+" 0s"}),j.computed&&!j.computed.match(/all 0s|none 0s/)&&j.fragments.unshift({delayed:j.computed,instant:j.computed});var I=j.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});j.generated={delayed:j.property+": "+I.delayed+";",instant:j.property+": "+I.instant+";"}}else j.generated={delayed:"",instant:""};return{inline:r,opacity:v,position:n,transform:E,transition:j}}function k(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function j(e){var t,n=this;try{g(o(e),(function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),k(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}}))}catch(e){return b.call(this,"Clean failed.",e.message)}if(t)try{w.call(this)}catch(e){return b.call(this,"Clean failed.",e.message)}}function O(){var e=this;g(this.store.elements,(function(e){k(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),g(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function S(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(y(e))return g(t,(function(t){g(t,(function(t,n){y(t)?(e[n]&&y(e[n])||(e[n]={}),S(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function T(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var I,R=(I=0,function(){return I++});function L(){var e=this;w.call(this),g(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),k(e.node,t.filter((function(e){return""!==e})).join(" "))})),g(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function q(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?A.call(this,e,i):t.reset||o?C.call(this,e):void 0}function A(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,k(e.node,n.filter((function(e){return""!==e})).join(" ")),P.call(this,e,t)}function C(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,k(e.node,t.filter((function(e){return""!==e})).join(" ")),P.call(this,e)}function P(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&j.call(n,e.node)}),i-s)}}function M(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return q.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new F(n,"visible",this.store),o=new F(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return B.call(this,n,r.body[0],-1,t),B.call(this,n,r.body[0],1,t),q.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return B.call(this,n,i,-1,t),q.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return B.call(this,n,i,1,t),q.call(this,e,{reveal:!0,pristine:t})}}function z(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=R(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function F(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],g(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&g(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function B(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,a&&M.call(r,a,i)}),e.interval)}function N(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=!1);var r,s=[],a=t.interval||p.interval;try{a&&(r=new z(a));var c=o(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce((function(e,n){var a={},c=n.getAttribute("data-sr-id");c?(S(a,i.store.elements[c]),k(a.node,a.styles.inline.computed)):(a.id=R(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var l=S({},a.config||i.defaults,t);if(!l.mobile&&T()||!l.desktop&&!T())return c&&j.call(i,a),e;var d,u=o(l.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(n)?(d=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var i=null;return g(t,(function(t){g(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(u,s,i.store.containers),null===d&&(d=R(),s.push({id:d,node:u})),a.config=l,a.containerId=d,a.styles=E(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e}),[]);g(l,(function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return b.call(this,"Reveal failed.",e.message)}g(s,(function(e){i.store.containers[e.id]={id:e.id,node:e.node}})),r&&(this.store.sequences[r.id]=r),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(L.bind(this),0))}function D(){var e=this;g(this.store.history,(function(t){N.call(e,t.target,t.options,!0)})),L.call(this)}var _,U,H,W,Y,$,V,X,G=Math.sign||function(e){return(e>0)-(e<0)||+e};function J(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function K(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function Q(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&o>u&&s>c&&a<l||"fixed"===e.styles.position}}function Z(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),h((function(){var i="init"===e.type||"resize"===e.type;g(n.store.containers,(function(e){i&&(e.geometry=J.call(n,e,!0));var t=K.call(n,e);e.scroll&&(e.direction={x:G(t.left-e.scroll.left),y:G(t.top-e.scroll.top)}),e.scroll=t})),g(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=J.call(n,e)),e.visible=Q.call(n,e)})),g(t,(function(e){e.sequence?M.call(n,e):q.call(n,e)})),n.pristine=!1}))}function ee(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==ee.prototype)return new ee(e);if(!ee.isSupported())return b.call(this,"Instantiation failed.","This browser is not supported."),m();try{t=S({},$||p,e)}catch(e){return b.call(this,"Invalid configuration.",e.message),m()}try{if(!o(t.container)[0])throw new Error("Invalid container.")}catch(e){return b.call(this,e.message),m()}return!($=t).mobile&&T()||!$.desktop&&!T()?(b.call(this,"This device is disabled.","desktop: "+$.desktop,"mobile: "+$.mobile),m()):(v(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,_=_||Z.bind(this),U=U||O.bind(this),H=H||N.bind(this),W=W||j.bind(this),Y=Y||D.bind(this),Object.defineProperty(this,"delegate",{get:function(){return _}}),Object.defineProperty(this,"destroy",{get:function(){return U}}),Object.defineProperty(this,"reveal",{get:function(){return H}}),Object.defineProperty(this,"clean",{get:function(){return W}}),Object.defineProperty(this,"sync",{get:function(){return Y}}),Object.defineProperty(this,"defaults",{get:function(){return $}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),X||(X=this))}ee.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(ee,"debug",{get:function(){return V||!1},set:function(e){return V="boolean"==typeof e?e:V}}),ee();const te=ee;function ne(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ie=document.querySelector(".smooth-to-top");window.addEventListener("scroll",(function(){ie.style.opacity=1,ie.style.animation="fadeVisibilityRight 0.7s"})),ie.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})})),te().reveal(".paragraph",{delay:80,reset:!0,origin:"bottom",distance:"50px",interval:100,scale:.9}),te().reveal(".span-animated",{reset:!0,distance:"150px",origin:"bottom",duration:1e3,easing:"cubic-bezier(0.73, 0.12, 0.35, 0.96)",delay:30}),te().reveal(".span-animated-school",{reset:!0,distance:"150px",origin:"bottom",duration:1400,easing:"cubic-bezier(0.73, 0.12, 0.35, 0.96)",delay:30}),te().reveal(".accept-cookies",{delay:2e3,distance:"150px",origin:"bottom"}),te().reveal(".smooth-animation",{distance:"170px",origin:"bottom",duration:1500,easing:"cubic-bezier(0.73, 0.12, 0.35, 0.96)",delay:30}),te().reveal(".item a button",{scale:.4,duration:600,reset:!0}),te().reveal(".content-child-3",{reset:!0,scale:.8,delay:50,duration:700});var re=function(){function e(t,n,i,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slides=document.querySelectorAll(t),this.lastSlideIndex=this.slides.length-1,this.currentSlideIndex=0,this.classAdd_Remove=r,this.nextButton=document.querySelector(n),this.previousButton=document.querySelector(i),this.classLengthSlide=document.querySelector(".txt-length"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){this.nextButtonEvent(),this.previousButtonEvent()}},{key:"nextButtonEvent",value:function(){var e=this;this.nextButton.addEventListener("click",(function(){var t=e.currentSlideIndex===e.lastSlideIndex?e.currentSlideIndex=0:++e.currentSlideIndex;e.lastSlideIndex,e.classLengthSlide.innerHTML="".concat(e.currentSlideIndex+1,"/").concat(e.slides.length," "),e.switchingClassOfSlides(t),document.querySelector(".".concat(e.classAdd_Remove)).style.animation="fadeVisibilityRight 0.5s"}))}},{key:"previousButtonEvent",value:function(){var e=this;this.previousButton.addEventListener("click",(function(){var t=0===e.currentSlideIndex?e.currentSlideIndex=e.lastSlideIndex:--e.currentSlideIndex;e.switchingClassOfSlides(t),document.querySelector(".".concat(e.classAdd_Remove)).style.animation="fadeVisibilityLeft 0.5s"}))}},{key:"switchingClassOfSlides",value:function(e){var t=this;this.slides.forEach((function(e){return e.classList.remove(t.classAdd_Remove)})),this.slides[e].classList.add(this.classAdd_Remove)}}])&&ne(t.prototype,n),e}();new re('[data-js="carousel__item"]','[data-js="carousel__button--next"]','[data-js="carousel__button--prev"]',"carousel__item--visible").events()})();
//# sourceMappingURL=bundle.js.map