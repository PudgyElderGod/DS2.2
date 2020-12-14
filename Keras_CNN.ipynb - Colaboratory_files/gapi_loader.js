/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,g){if(a==Array.prototype||a==Object.prototype)return a;a[c]=g.value;return a},r=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var g=a[c];if(g&&g.Math==Math)return g}throw Error("Cannot find global object");},t=r(this),u=function(a,c){if(c)a:{var g=t;a=a.split(".");for(var h=0;h<a.length-
1;h++){var e=a[h];if(!(e in g))break a;g=g[e]}a=a[a.length-1];h=g[a];c=c(h);c!=h&&null!=c&&p(g,a,{configurable:!0,writable:!0,value:c})}},v=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}},w=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:v(a)}};
u("Promise",function(a){function c(){this.g=null}function g(b){return b instanceof e?b:new e(function(d){d(b)})}if(a)return a;c.prototype.h=function(b){if(null==this.g){this.g=[];var d=this;this.i(function(){d.l()})}this.g.push(b)};var h=t.setTimeout;c.prototype.i=function(b){h(b,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var b=this.g;this.g=[];for(var d=0;d<b.length;++d){var f=b[d];b[d]=null;try{f()}catch(k){this.j(k)}}}this.g=null};c.prototype.j=function(b){this.i(function(){throw b;
})};var e=function(b){this.h=0;this.i=void 0;this.g=[];this.s=!1;var d=this.j();try{b(d.resolve,d.reject)}catch(f){d.reject(f)}};e.prototype.j=function(){function b(k){return function(l){f||(f=!0,k.call(d,l))}}var d=this,f=!1;return{resolve:b(this.A),reject:b(this.l)}};e.prototype.A=function(b){if(b===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof e)this.C(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;break a;default:d=!1}d?
this.v(b):this.o(b)}};e.prototype.v=function(b){var d=void 0;try{d=b.then}catch(f){this.l(f);return}"function"==typeof d?this.D(d,b):this.o(b)};e.prototype.l=function(b){this.u(2,b)};e.prototype.o=function(b){this.u(1,b)};e.prototype.u=function(b,d){if(0!=this.h)throw Error("Cannot settle("+b+", "+d+"): Promise already settled in state"+this.h);this.h=b;this.i=d;2===this.h&&this.B();this.F()};e.prototype.B=function(){var b=this;h(function(){if(b.G()){var d=t.console;"undefined"!==typeof d&&d.error(b.i)}},
1)};e.prototype.G=function(){if(this.s)return!1;var b=t.CustomEvent,d=t.Event,f=t.dispatchEvent;if("undefined"===typeof f)return!0;"function"===typeof b?b=new b("unhandledrejection",{cancelable:!0}):"function"===typeof d?b=new d("unhandledrejection",{cancelable:!0}):(b=t.document.createEvent("CustomEvent"),b.initCustomEvent("unhandledrejection",!1,!0,b));b.promise=this;b.reason=this.i;return f(b)};e.prototype.F=function(){if(null!=this.g){for(var b=0;b<this.g.length;++b)m.h(this.g[b]);this.g=null}};
var m=new c;e.prototype.C=function(b){var d=this.j();b.m(d.resolve,d.reject)};e.prototype.D=function(b,d){var f=this.j();try{b.call(d,f.resolve,f.reject)}catch(k){f.reject(k)}};e.prototype.then=function(b,d){function f(n,q){return"function"==typeof n?function(x){try{k(n(x))}catch(y){l(y)}}:q}var k,l,z=new e(function(n,q){k=n;l=q});this.m(f(b,k),f(d,l));return z};e.prototype.catch=function(b){return this.then(void 0,b)};e.prototype.m=function(b,d){function f(){switch(k.h){case 1:b(k.i);break;case 2:d(k.i);
break;default:throw Error("Unexpected state: "+k.h);}}var k=this;null==this.g?m.h(f):this.g.push(f);this.s=!0};e.resolve=g;e.reject=function(b){return new e(function(d,f){f(b)})};e.race=function(b){return new e(function(d,f){for(var k=w(b),l=k.next();!l.done;l=k.next())g(l.value).m(d,f)})};e.all=function(b){var d=w(b),f=d.next();return f.done?g([]):new e(function(k,l){function z(x){return function(y){n[x]=y;q--;0==q&&k(n)}}var n=[],q=0;do n.push(void 0),q++,g(f.value).m(z(n.length-1),l),f=d.next();
while(!f.done)})};return e});
var A=this||self,D=function(a){if(a&&a!=A)return B(a.document);null===C&&(C=B(A.document));return C},E=/^[\w+/_-]+[=]{0,2}$/,C=null,B=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&E.test(a)?a:""},F=function(a,c){function g(){}g.prototype=c.prototype;a.I=c.prototype;a.prototype=new g;a.prototype.constructor=a;a.H=function(h,e,m){for(var b=Array(arguments.length-2),d=2;d<arguments.length;d++)b[d-2]=arguments[d];return c.prototype[e].apply(h,
b)}},G=function(a){return a};function H(a){if(Error.captureStackTrace)Error.captureStackTrace(this,H);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))}F(H,Error);H.prototype.name="CustomError";var I=function(a,c){a=a.split("%s");for(var g="",h=a.length-1,e=0;e<h;e++)g+=a[e]+(e<c.length?c[e]:"%s");H.call(this,g+a[h])};F(I,H);I.prototype.name="AssertionError";var J=function(a,c){throw new I("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var K;var N=function(a,c){this.g=a===L&&c||"";this.h=M};N.prototype.toString=function(){return"Const{"+this.g+"}"};var M={},L={};var P=function(a,c){this.g=c===O?a:""};P.prototype.toString=function(){return"TrustedResourceUrl{"+this.g+"}"};var O={};var Q=function(a){var c=new N(L,"https://apis.google.com/js/client.js");c instanceof N&&c.constructor===N&&c.h===M?c=c.g:(J("expected object of type Const, got '"+c+"'"),c="type_error:Const");if(void 0===K){var g=null;var h=A.trustedTypes;if(h&&h.createPolicy){try{g=h.createPolicy("goog#html",{createHTML:G,createScript:G,createScriptURL:G})}catch(f){A.console&&A.console.error(f.message)}K=g}else K=g}c=(g=K)?g.createScriptURL(c):c;c=new P(c,O);a:{try{var e=a&&a.ownerDocument,m=e&&(e.defaultView||e.parentWindow);
m=m||A;if(m.Element&&m.Location){var b=m;break a}}catch(f){}b=null}if(b&&"undefined"!=typeof b.HTMLScriptElement&&(!a||!(a instanceof b.HTMLScriptElement)&&(a instanceof b.Location||a instanceof b.Element))){b=typeof a;if("object"==b&&null!=a||"function"==b)try{var d=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(f){d="<object could not be stringified>"}else d=void 0===a?"undefined":null===a?"null":typeof a;J("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",d)}c instanceof P&&c.constructor===P?d=c.g:(d=typeof c,J("expected object of type TrustedResourceUrl, got '"+c+"' of type "+("object"!=d?d:c?Array.isArray(c)?"array":d:"null")),d="type_error:TrustedResourceUrl");a.src=d;(d=D(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",d)};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};var R=function(){var a=document;var c="SCRIPT";"application/xhtml+xml"===a.contentType&&(c=c.toLowerCase());return a.createElement(c)};function S(){window.performance.mark("gapi_load_end");window.performance.measure("gapi_load","gapi_load_start","gapi_load_end");T()}var T,U=null;
function V(){if(U)return U;window.performance.mark("gapi_load_start");var a=window.colabExperiments&&window.colabExperiments.first_party_auth;return U=new Promise(function(c,g){T=c;window.gapi_onload=function(){a?T():gapi.load("auth:client",S)};var h=R();Q(h);h.async=!0;(c=D())&&h.setAttribute("nonce",c);h.onerror=function(){g(Error("Error loading "+h.src))};c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(h,c)})}window.colab_gapi_loader={};window.colab_gapi_loader.load=V;
V().then(function(){},function(){});
