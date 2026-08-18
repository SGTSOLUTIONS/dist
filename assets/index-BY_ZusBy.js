var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+D(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+D(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+D(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&D(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&D(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,E=T.port2;T.port1.onmessage=ne,re=function(){E.postMessage(null)}}else re=function(){_(ne,0)};function D(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,D(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),D=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=D&&e[D]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),j=m({},On,{view:0,detail:0}),An=Dn(j),jn,Mn,Nn,Pn=m({},j,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=Dn(Pn),In=Dn(m({},Pn,{dataTransfer:0})),Ln=Dn(m({},j,{relatedTarget:0})),Rn=Dn(m({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=Dn(m({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=Dn(m({},On,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=Dn(m({},j,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=Dn(m({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=Dn(m({},j,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=Dn(m({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=Dn(m({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=Dn(m({},On,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=_n&&`CompositionEvent`in window,er=null;_n&&`documentMode`in document&&(er=document.documentMode);var tr=_n&&`TextEvent`in window&&!er,nr=_n&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Cn(),Sn=xn=bn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ut(Tt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(_n){var yr;if(_n){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function M(){pr&&(pr.detachEvent(`onpropertychange`,Sr),mr=pr=null)}function Sr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,un(e)),hn(hr,t)}}function Cr(e,t,n){e===`focusin`?(M(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&M()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Tr(e,t){if(e===`click`)return gr(t)}function Er(e,t){if(e===`input`||e===`change`)return gr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function N(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=_n&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Wt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&kr(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};_n&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),At(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=pi(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=pi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ge(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,I=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Ri=Ri.return}}function Wi(e){if(e!==Ri)return!1;if(!F)return Ui(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Gi(){P=Ri=null,F=!1}function Ki(){var e=I;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),I=null),e}function qi(e){I===null?I=[e]:I.push(e)}var Ji=de(null),Yi=null,Xi=null;function L(e,t,n){A(Ji,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=Ji.current,fe(Ji)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Yi,e)}function ia(e,t){return Yi===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=O.S;O.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=de(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?A(ba,ba.current):A(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case re:return t=Aa(t),f(e,t,n)}if(se(t)||ie(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Aa(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Aa(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Aa(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=de(null),to=de(0);function no(e,t){e=Ul,A(to,e),A(eo,t),Ul=e|t.baseLanes}function ro(){A(to,Ul),A(eo,eo.current)}function io(){Ul=to.current,fe(eo),fe(to)}var ao=de(null),oo=null;function so(e){var t=e.alternate;A(po,po.current&1),A(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){A(po,po.current),A(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(A(po,po.current),A(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){A(po,po.current),A(ao,ao.current)}function fo(e){fe(ao),oo===e&&(oo=null),fe(po)}var po=de(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,go=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Us:Ws,yo=!1,a=n(r,i),yo=!1,vo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){O.H=Hs;var t=z!==null&&z.next!==null;if(ho=0,go=z=R=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||sc||(e=e.dependencies,e!==null&&ta(e)&&(sc=!0))}function Oo(e,t,n,r){R=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,go=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Gs,o=t(n,r)}while(vo);return o}function ko(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Ao(){var e=bo!==0;return bo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}ho=0,go=z=R=null,vo=!1,xo=bo=0,So=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return go===null?R.memoizedState=go=e:go=go.next=e,go}function Po(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=go===null?R.memoizedState:go.next;if(t!==null)go=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},go===null?R.memoizedState=go=e:go=go.next=e}return go}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ka(So,e,t),t=R,(go===null?t.memoizedState:go.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(Po(),z,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((ho&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(sc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(sc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=R,a=Po(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((z||a).memoizedState,n);if(s&&(a.memoizedState=n,sc=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||go!==null&&go.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||ho&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Fo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Jo(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),yo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,z,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(F){var n=q.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,R,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,R,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(Po(),z,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===wa?Ea:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=Po(),n=z;if(n!==null)return os(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Fo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return Po().memoizedState}function ds(e,t,n,r){var i=No();R.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&To(r,z.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(R.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Fo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=Po().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ts(e,t,n,r){return Or(n,t)?n:eo.current===null?!(ho&42)||ho&1073741824&&!(Y&261930)?(sc=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=ws(e,n,r),Or(e,t)||(sc=!0),e)}function Es(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Rs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,va(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,ce,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ra(Qf)}function Ms(){return Po().memoizedState}function Ns(){return Po().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return oi(e,t,i,0),q===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===R||t!==null&&t===R}function Bs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ra,use:Lo,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useInsertionEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useSyncExternalStore:wo,useId:wo,useHostTransitionStatus:wo,useFormState:wo,useActionState:wo,useOptimistic:wo,useMemoCache:wo,useCacheRefresh:wo};Hs.useEffectEvent=wo;var Us={readContext:ra,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(yo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(No(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,R,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=No();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=q.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=Ps.bind(null,R)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ra,use:Lo,useCallback:Ss,useContext:ra,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(Po(),z.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(Po(),z,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ra,use:Lo,useCallback:Ss,useContext:ra,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=Po();return z===null?ws(n,e,t):Ts(n,z.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=Po();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,z,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ti(e)}function Qs(e){console.error(e)}function $s(e){ti(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ga(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=ao.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=nc(e.stateNode,r,a),Ja(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),sc=!1;function cc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!sc?(jo(e,t,i),Mc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(sc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(sc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ba(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(co(t),(e=P)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a){if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(sc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,sc||a){if(r=q,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),oc;Du(),t=gc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,I=null,zi=!1,e!==null&&Li(t,e),t=hc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return na(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!sc?(jo(e,t,i),Mc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!sc?(jo(e,t,a),Mc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ha||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ha||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function Sc(e,t,n,r){return Gi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Ca()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(po.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?so(t):uo(t),(e=P)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(so(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=B(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=B(e,t,n)}else if(sc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,sc||s){if(s=q,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),oc;af(c)||Du(),t=B(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,I=null,zi=!1,e!==null&&Li(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function B(e,t,n){return Ba(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=po.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(po,o),cc(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Pc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),L(t,la,e.memoizedState.cache),Gi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:L(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Mc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(po,po.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:L(t,la,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)sc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return sc=!1,Pc(e,t,n);sc=!!(e.flags&131072)}}else sc=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Xs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=lc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,L(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}if(r!==a){a=Ci(Error(i(424)),t),qi(a),t=Sc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,I=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Mc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ri=t,zi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Vi(t)),null;case 13:return Ec(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,L(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=q,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),L(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,L(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),L(t,la,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function Bc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=pe.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=pe.current,Wi(t))Hi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return Zi(t.type),V(t),null;case 19:if(fe(po),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Bc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return A(po,po.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return V(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=po.current,A(po,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(po),null;case 4:return ve(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&fe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Uc(e,t){switch(Ii(t),t.tag){case 3:Zi(la),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:fe(po);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&fe(ba);break;case 24:Zi(la)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function H(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function U(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(U(e,t,n),e=e.sibling;e!==null;)U(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Wc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:bl(e,n),t===null&&r&4&&Yc(n),r&512&&Jc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&fl(e,n);break;case 13:bl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),tl=i,nl=a}break;case 30:break;default:bl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:nl||H(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||H(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||H(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),nl||Gc(4,n,t),ul(e,t,n);break;case 1:nl||(H(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),G(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:gl(t,e),G(e),r&512&&(nl||n===null||H(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),G(e),r&512&&(nl||n===null||H(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),G(e),r&512&&(nl||n===null||H(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),G(e),r&512&&(nl||n===null||H(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),G(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,G(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,yl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),G(e),_l=r;break;case 12:gl(t,e),G(e);break;case 31:gl(t,e),G(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),G(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,G(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),G(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),G(e)}}function G(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;U(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),U(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),xl(t);break;case 1:H(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:H(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Wc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:el(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Yc(a),Jc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Jc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),Al(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?dt():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||F){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),it(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Bl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},jl(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Xi=Yi=null,Mo(e),Pa=null,Fa=0,e=J;for(;e!==null;)Uc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=et(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ai(),n}function Cu(e,t){R=null,O.H=Hs,t===wa||t===Ea?(t=Ma(),X=3):t===Ta?(t=Ma(),X=4):X=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,ec(e,Ci(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(Y&4194048)===Y?oo===null:(Y&62914560)===Y||Y&536870912?e===oo:!1}function Tu(){var e=O.H;return O.H=Hs,e===null?Hs:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&ao.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,ai()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ne()+500,Su(e,t)):Vl=et(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Oa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,ai(),Wl):0}function ju(){for(;J!==null&&!je();)Mu(J)}function Mu(e){var t=Fc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Mo(t);default:Uc(n,t),t=J=gi(t,Ul),t=Fc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Xi=Yi=null,Mo(t),Pa=null,Fa=0;var i=t.return;try{if(ac(e,i,t,n,Y)){Wl=1,ec(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,ec(e,Ci(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Vc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,at(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{ol(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&N(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{sl(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=nc(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=rc(2),r=Ka(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ne()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=ci(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=$e(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=$e(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Gr:case Kr:case qr:l=Rn;break;case Zr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c)){if(vr)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=_r):v=Tr;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=y(t,n),t=s(t),t in b)return;b[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:v,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function ee(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ae(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:oe(t)}return O(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ae(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?se(t):t,state:n,key:t&&t.key||r||D(),mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function se(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function O(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:ae(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:ae(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return k(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function k(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:oe(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function ce(e,t,n=`/`){return le(e,t,n,!1)}function le(e,t,n,r,i){let a=De((typeof t==`string`?se(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ue(e),s=null,c=Ee(a);for(let e=0;s==null&&e<o.length;++e)s=Se(o[e],c,r);return s}function ue(e){let t=de(e);return A(t),t}function de(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),de(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Te(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fe(e.path))a(e,t,!0,n)}),t}function fe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function A(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,me=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(pe.test(t)?me:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?we(u,l,s.matcher,s.compiledParams):Ce(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fe([a,d.pathname]),pathnameBase:Le(Fe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Fe([a,d.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Te(e.path,e.caseSensitive,e.end);return we(e,t,n,r)}function we(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Te(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ee(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function De(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?se(e):e,a;return n?(n=Pe(n),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function ke(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=se(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.replace(/[\\/]{2,}/g,`/`),Fe=e=>Pe(e.join(`/`)),Ie=e=>e.replace(/\/+$/,``),Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return Fe(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=w.test(n)?new URL(ee(n,e.protocol)):new URL(n),a=De(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ge);var Ke=[`GET`,...Ge];new Set(Ke);var qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Je(e){try{return qe.includes(new URL(e).protocol)}catch{return!1}}var Ye=S.createContext(null);Ye.displayName=`DataRouter`;var Xe=S.createContext(null);Xe.displayName=`DataRouterState`;var Ze=S.createContext(!1);function Qe(){return S.useContext(Ze)}var $e=S.createContext({isTransitioning:!1});$e.displayName=`ViewTransition`;var et=S.createContext(new Map);et.displayName=`Fetchers`;var tt=S.createContext(null);tt.displayName=`Await`;var nt=S.createContext(null);nt.displayName=`Navigation`;var rt=S.createContext(null);rt.displayName=`Location`;var it=S.createContext({outlet:null,matches:[],isDataRoute:!1});it.displayName=`Route`;var at=S.createContext(null);at.displayName=`RouteError`;var ot=`REACT_ROUTER_ERROR`,st=`REDIRECT`,ct=`ROUTE_ERROR_RESPONSE`;function lt(e){if(e.startsWith(`${ot}:${st}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ut(e){if(e.startsWith(`${ot}:${ct}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function dt(e,{relative:t}={}){T(ft(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(nt),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ft(){return S.useContext(rt)!=null}function pt(){return T(ft(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(rt).location}var mt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ht(e){S.useContext(nt).static||S.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=S.useContext(it);return e?Lt():_t()}function _t(){T(ft(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Ye),{basename:t,navigator:n}=S.useContext(nt),{matches:r}=S.useContext(it),{pathname:i}=pt(),a=JSON.stringify(Me(r)),o=S.useRef(!1);return ht(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(E(o.current,mt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var vt=S.createContext(null);function yt(e){let t=S.useContext(it).outlet;return S.useMemo(()=>t&&S.createElement(vt.Provider,{value:e},t),[t,e])}function bt(e,{relative:t}={}){let{matches:n}=S.useContext(it),{pathname:r}=pt(),i=JSON.stringify(Me(n));return S.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){T(ft(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(nt),{matches:i}=S.useContext(it),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=pt(),d;if(t){let e=typeof t==`string`?se(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ce(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Fe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(rt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=It(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var wt=S.createElement(Ct,null),Tt=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ut(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(it.Provider,{value:this.props.routeContext},S.createElement(at.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(Dt,{error:e},t):t}};Tt.contextType=Ze;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=S.useContext(nt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=lt(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=We(e.location,n),a=i.absoluteURL||i.to;if(Je(a))throw Error(`Invalid redirect location`);if(Ue&&!Et.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=S.useContext(Ye);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(it.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=S.useContext(Ye);return T(t,At(e)),t}function Mt(e){let t=S.useContext(Xe);return T(t,At(e)),t}function Nt(e){let t=S.useContext(it);return T(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=S.useContext(at),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=S.useRef(!1);return ht(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{E(n.current,mt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,E(!1,n))}S.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt(e){return yt(e.context)}function Ht(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!ft(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=se(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=De(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(nt.Provider,{value:c},S.createElement(rt.Provider,{children:t,value:h}))}function Wt({children:e,location:t}){return xt(Gt(e),t)}S.Component;function Gt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Gt(e.props.children,i));return}T(e.type===Ht,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Gt(e.props.children,i)),n.push(a)}),n}var Kt=`get`,qt=`application/x-www-form-urlencoded`;function Jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Yt(e){return Jt(e)&&e.tagName.toLowerCase()===`button`}function Xt(e){return Jt(e)&&e.tagName.toLowerCase()===`form`}function Zt(e){return Jt(e)&&e.tagName.toLowerCase()===`input`}function Qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $t(e,t){return e.button===0&&(!t||t===`_self`)&&!Qt(e)}var en=null;function tn(){if(en===null)try{new FormData(document.createElement(`form`),0),en=!1}catch{en=!0}return en}var nn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function rn(e){return e!=null&&!nn.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`),null):e}function an(e,t){let n,r,i,a,o;if(Xt(e)){let o=e.getAttribute(`action`);r=o?De(o,t):null,n=e.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`enctype`))||qt,a=new FormData(e)}else if(Yt(e)||Zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?De(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`formenctype`))||rn(o.getAttribute(`enctype`))||qt,a=new FormData(o,e),!tn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Kt,r=null,i=qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function on(e,t){if(e===!1||e==null)throw Error(t)}function sn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&De(i.pathname,t)===`/`?`${Ie(t)}/_root.${r}`:`${Ie(i.pathname)}.${r}`,i}async function cn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ln(e){return e!=null&&typeof e.page==`string`}function un(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function dn(e,t,n){return gn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await cn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(un).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function fn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function pn(e,t,{includeHydrateFallback:n}={}){return mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function mn(e){return[...new Set(e)]}function hn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function gn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ln(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(hn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function _n(){let e=S.useContext(Ye);return on(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function vn(){let e=S.useContext(Xe);return on(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var yn=S.createContext(void 0);yn.displayName=`FrameworkContext`;function bn(){let e=S.useContext(yn);return on(e,`You must render this element inside a <HydratedRouter> element`),e}function xn(e,t){let n=S.useContext(yn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Sn(s,p),onBlur:Sn(c,m),onMouseEnter:Sn(l,p),onMouseLeave:Sn(u,m),onTouchStart:Sn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Sn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cn({page:e,...t}){let n=Qe(),{nonce:r}=bn(),{router:i}=_n(),a=S.useMemo(()=>ce(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?S.createElement(Tn,{page:e,matches:a,...t}):S.createElement(En,{page:e,matches:a,...t})):null}function wn(e){let{manifest:t,routeModules:n}=bn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return dn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Tn({page:e,matches:t,...n}){let r=pt(),{future:i}=bn(),{basename:a}=_n(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=sn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function En({page:e,matches:t,...n}){let r=pt(),{future:i,manifest:a,routeModules:o}=bn(),{basename:s}=_n(),{loaderData:c,matches:l}=vn(),u=S.useMemo(()=>fn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>fn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=sn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>pn(d,a),[d,a]),m=wn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{On&&(window.__reactRouterVersion=`7.18.2`)}catch{}function kn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var j=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(nt),v=typeof l==`string`&&C.test(l),y=We(l,h);l=y.to;let b=dt(l,{relative:r}),x=pt(),w=null;if(o){let e=Ne(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),w=g.createHref(e)}let[ee,te,ne]=xn(n,p),re=Pn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||re(t)}let E=!(y.isExternal||i),D=S.createElement(`a`,{...p,...ne,href:(E?w:void 0)||y.absoluteURL||b,onClick:E?T:e,ref:Dn(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?S.createElement(S.Fragment,null,D,S.createElement(Cn,{page:b})):D});j.displayName=`Link`;var An=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=pt(),f=S.useContext(Xe),{navigator:p,basename:m}=S.useContext(nt),h=f!=null&&zn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=De(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return S.createElement(j,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});An.displayName=`NavLink`;var jn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(nt),g=Ln(),_=Rn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&C.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});jn.displayName=`Form`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=S.useContext(Ye);return T(t,Mn(e)),t}function Pn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=gt(),d=pt(),f=bt(e,{relative:o});return S.useCallback(p=>{if($t(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Fn=0,In=()=>`__${String(++Fn)}__`;function Ln(){let{router:e}=Nn(`useSubmit`),{basename:t}=S.useContext(nt),n=Ft(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=an(e,t);if(a.navigate===!1){let e=a.fetcherKey||In();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Rn(e,{relative:t}={}){let{basename:n}=S.useContext(nt),r=S.useContext(it);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=pt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),oe(a)}function zn(e,{relative:t}={}){let n=S.useContext($e);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=De(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=De(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var Bn=o((e=>{var t=d();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),Vn=o(((e,t)=>{t.exports=Bn()})),Hn=l(_(),1),Un=Vn();function Wn(e){e()}function Gn(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Wn(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Kn={notify(){},get:()=>[]};function qn(e,t){let n,r=Kn,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=Gn())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Kn)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var Jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Yn=typeof navigator<`u`&&navigator.product===`ReactNative`,Xn=Jn||Yn?S.useLayoutEffect:S.useEffect,Zn=Symbol.for(`react-redux-context`),Qn=typeof globalThis<`u`?globalThis:{};function $n(){if(!S.createContext)return{};let e=Qn[Zn]??=new Map,t=e.get(S.createContext);return t||(t=S.createContext(null),e.set(S.createContext,t)),t}var er=$n();function tr(e){let{children:t,context:n,serverState:r,store:i}=e,a=S.useMemo(()=>{let e=qn(i);return{store:i,subscription:e,getServerState:r?()=>r:void 0}},[i,r]),o=S.useMemo(()=>i.getState(),[i]);Xn(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||er;return S.createElement(s.Provider,{value:a},t)}var nr=tr;function rr(e=er){return function(){return S.useContext(e)}}var ir=rr();function ar(e=er){let t=e===er?ir:rr(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var or=ar();function sr(e=er){let t=e===er?or:ar(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var cr=sr(),lr=(e,t)=>e===t;function ur(e=er){let t=e===er?ir:rr(e),n=(e,n={})=>{let{equalityFn:r=lr}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();S.useRef(!0);let s=S.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,Un.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return S.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var dr=ur(),fr=`/assets/logo-D8rRDZVI.png`,pr=`/assets/h1-BNkBUtaW.png`,mr=`/assets/h2-DV4BphkF.png`,hr=`/assets/h3-Bxpzch3l.png`,gr=`/assets/h4-i7rgBQOe.png`,_r=`/assets/h5-DXKqnTit.png`,vr=`/assets/h6-BqNm4WCU.png`,yr=`/assets/h7-Bmjs_YcC.png`,br=`/assets/h8-ChD36l_h.png`,xr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=xr()}))(),Sr=[{id:1,title:`Web GIS`,link:`/services/web-gis`,image:pr},{id:2,title:`Mobile GIS`,link:`/services/mobile-gis`,image:mr},{id:3,title:`Spatial Revenue Intelligence`,link:`/services/geo-property`,image:hr},{id:4,title:`LiDAR`,link:`/services/lidar`,image:gr},{id:5,title:`Photogrammetry`,link:`/services/photogrammetry`,image:_r},{id:6,title:`Drone & DGPS Survey`,link:`/services/drone-survey`,image:vr},{id:7,title:`2D Mapping`,link:`/services/2d-mapping`,image:yr},{id:8,title:`Consultancy Services`,link:`/services/consultancy`,image:br},{id:9,title:`Website Development`,link:`/services/web-development`,image:pr}];function Cr(){let[e,t]=(0,S.useState)(!1),[n,r]=(0,S.useState)(!1),i=()=>{t(e=>!e),r(!1)},a=e=>{e&&(e.preventDefault(),e.stopPropagation()),r(e=>!e)},o=()=>{t(!1),r(!1)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`header`,{className:`header01 isSticky`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12`,children:(0,M.jsxs)(`div`,{className:`navbar01`,children:[(0,M.jsx)(`div`,{className:`logo`,children:(0,M.jsx)(j,{to:`/`,onClick:o,children:(0,M.jsx)(`img`,{src:fr,alt:`SGT Solutions`})})}),(0,M.jsx)(`button`,{type:`button`,className:`menu_btn ${e?`active`:``}`,onClick:i,"aria-label":`Toggle navigation menu`,"aria-expanded":e,children:(0,M.jsx)(`i`,{className:e?`twi-times`:`twi-bars2`})}),(0,M.jsx)(`nav`,{className:`mainMenu ${e?`mobileMenuOpen`:``}`,children:(0,M.jsxs)(`ul`,{children:[(0,M.jsx)(`li`,{className:`menu-item`,children:(0,M.jsx)(j,{to:`/`,onClick:o,children:`Home`})}),(0,M.jsxs)(`li`,{className:`menu-item menu-item-has-children ${n?`servicesOpen`:``}`,children:[(0,M.jsxs)(`div`,{className:`serviceMenuLink`,children:[(0,M.jsx)(`span`,{className:`serviceLabel`,onClick:a,onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),r(e=>!e)},children:`Service`}),(0,M.jsx)(`span`,{className:`serviceArrow ${n?`open`:``}`,onClick:a,onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),r(e=>!e)},children:`▾`})]}),(0,M.jsx)(`ul`,{className:`sub-menu`,children:Sr.map(e=>(0,M.jsx)(`li`,{className:`menu-item`,children:(0,M.jsx)(j,{to:e.link,onClick:o,children:e.title})},e.id))})]}),(0,M.jsx)(`li`,{className:`menu-item`,children:(0,M.jsx)(j,{to:`/about`,onClick:o,children:`About`})}),(0,M.jsx)(`li`,{className:`menu-item`,children:(0,M.jsx)(j,{to:`/contact`,onClick:o,children:`Contact`})})]})}),(0,M.jsx)(`div`,{className:`accessNav`,children:(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,onClick:o,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`Contact`})]})})]})})})})}),(0,M.jsxs)(`section`,{className:`popup_search_sec`,children:[(0,M.jsx)(`div`,{className:`popup_search_overlay`}),(0,M.jsx)(`div`,{className:`pop_search_background`,children:(0,M.jsx)(`div`,{className:`middle_search`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,M.jsx)(`div`,{className:`popup_search_form`,children:(0,M.jsxs)(`form`,{method:`get`,action:`#`,autoComplete:`off`,children:[(0,M.jsx)(`input`,{autoComplete:`off`,type:`search`,name:`s`,id:`s`,placeholder:`Type Words and Hit Enter`}),(0,M.jsx)(`button`,{type:`submit`,children:(0,M.jsx)(`i`,{className:`twi-search1`})})]})})})})})})})]})]})}function wr(){return(0,M.jsx)(`section`,{className:`topbar01 d-none`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsxs)(`div`,{className:`col-md-9`,children:[(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`i`,{className:`bpro-mail-2`}),(0,M.jsx)(`a`,{href:`#`,children:`sgtsolutionsinfo@gmail.com`})]}),(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`i`,{className:`bpro-phone-ringing`}),(0,M.jsx)(`a`,{href:`tel:+1245698909`,children:`Phone: +91 89031 38792`})]})]}),(0,M.jsx)(`div`,{className:`col-md-3`,children:(0,M.jsxs)(`div`,{className:`topsocial`,children:[(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`i`,{className:`twi-facebook-square`})}),(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`i`,{className:`twi-pinterest`})}),(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`i`,{className:`twi-twitter-square`})})]})})]})})})}var Tr=()=>(0,M.jsx)(`footer`,{className:`footer_01`,children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsx)(`div`,{className:`col-md-6 col-xl-6`,children:(0,M.jsxs)(`div`,{className:`aboutWidget`,children:[(0,M.jsx)(`a`,{href:`/`,children:(0,M.jsx)(`img`,{src:fr,alt:`sgt solutions`})}),(0,M.jsx)(`p`,{children:`SGT Solutions is a Chennai-based geospatial & digital transformation company. We bridge advanced spatial technologies with real-world governance challenges.`}),(0,M.jsxs)(`div`,{className:`abIcon`,children:[(0,M.jsx)(`i`,{className:`twi-map-marker`}),`Alandur 124, MKN Rd, Ramapuram, Alandur, Chennai.`]}),(0,M.jsxs)(`div`,{className:`abIcon`,children:[(0,M.jsx)(`i`,{className:`twi-envelope`}),(0,M.jsx)(`a`,{href:`mailto:info@email.com`,children:`sgtsolutionsinfo@gmail.com`})]}),(0,M.jsxs)(`div`,{className:`abIcon`,children:[(0,M.jsx)(`i`,{className:`twi-phone`}),`+91 89031 38792`]})]})}),(0,M.jsx)(`div`,{className:`col-md-6 col-xl-6 footer-two`,children:(0,M.jsxs)(`div`,{className:`widget`,children:[(0,M.jsx)(`div`,{className:`wsubtitle`,children:`Clean & Flexible`}),(0,M.jsx)(`h3`,{className:`widget_title`,children:`Quick Links`}),(0,M.jsxs)(`ul`,{className:`menu`,children:[(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`/`,children:`Home`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`/about`,children:`About Company`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`/services`,children:`Services`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`/contact`,children:`Contact`})})]})]})})]}),(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12`,children:(0,M.jsx)(`div`,{className:`ctaMail`,children:(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsxs)(`div`,{className:`col-lg-4 col-md-5`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Updated about our Products`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Sign Up Newsletter`})]}),(0,M.jsx)(`div`,{className:`col-lg-8 col-md-7`,children:(0,M.jsx)(`div`,{className:`SubsrcribeForm`,children:(0,M.jsxs)(`form`,{className:`yikes-easy-mc-form`,action:`#`,method:`post`,children:[(0,M.jsx)(`input`,{type:`email`,name:`EMAIL`,placeholder:`Enter Your Email Address`}),(0,M.jsx)(`button`,{className:`yikes-easy-mc-submit-button`,type:`submit`,children:`Subscribe Now`})]})})})]})})})}),(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,M.jsxs)(`div`,{className:`Copyright`,children:[(0,M.jsx)(`span`,{children:`Bepro`}),` - Copyright 2021. Developed by`,` `,(0,M.jsx)(`a`,{href:`https://themewar.com/`,target:`_blank`,rel:`noopener noreferrer`,children:`Themewar`})]})})})]})});function Er(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(wr,{}),(0,M.jsx)(Cr,{}),(0,M.jsx)(`main`,{children:(0,M.jsx)(Vt,{})}),(0,M.jsx)(Tr,{})]})}var Dr=`/assets/1_4-B8krbJAQ.jpg`,Or=`/assets/1_5-DGEelCZh.jpeg`,kr=`/assets/1-Nxahco2j.jpg`,Ar=`/assets/2-BlhTApSF.jpg`,jr=`/assets/3-Cc4_DlhX.jpg`,N=`/assets/logo-D8rRDZVI.png`,Mr=`/assets/1-DsijzTnX.png`,Nr=`/assets/1-sxnOvBAG.png`,Pr=`/assets/2-UYEjm-uT.png`,Fr=`/assets/3-BVzeGT6r.png`,Ir=`/assets/4-DaAPiMIB.png`,Lr=`/assets/2-B_musS9f.png`,Rr=`/assets/2-UYEjm-uT.png`,zr=`/assets/t2-B85m91nT.jpeg`,Br=`/assets/t3-vqjSQ5_T.jpeg`,Vr=`/assets/1-CoRcO6Xe.jpg`,Hr=`/assets/2-CZoyrZxv.jpg`,Ur=`/assets/3-E5_52ZCX.jpg`,Wr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQ2RUY1NTRCQTExMUVDQjA5QUI1RUREOTAyNDg0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQ2RUY1NjRCQTExMUVDQjA5QUI1RUREOTAyNDg0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwRDZFRjUzNEJBMTExRUNCMDlBQjVFREQ5MDI0ODQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwRDZFRjU0NEJBMTExRUNCMDlBQjVFREQ5MDI0ODQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAHkAAAIDAQAAAAAAAAAAAAAAAAYHAwUIAAEAAwEBAQAAAAAAAAAAAAAAAAMEBQECEAACAQMDAwEHBAMAAAAAAAABAgMAEQQSBQYhMRNRQWFxgTIVB7EiQjNyFDURAAIDAAICAwAAAAAAAAAAAAABEQIDQRJxBDFhMv/aAAwDAQACEQMRAD8A1FlZawCw6uew9PeaAFdv+Jv/ACCCaWfMfHjn1CKBXcKig2U6FOkkjveor2bZdnmkhZZkPOOEzDL2bfJXjgOp8d2fxOB3DRksjD5UuujTGXxTRoXhXLIOS7BgboiGL/ciEgQ+oJVh8mBq+rlSZ1lDgIK9HCmyH8krsezEgfDsKDgAwx8gmh28SuuJjQ6vuSXGs6dQADC9gOh71ntGpSBfxbVjTwZeTLlvOySyxzhiH8jXsNTG/wBI9KXJQ6wy8/AWa+NjbjtId9GO6z4yOxawLEMy37KT7PdVfr2mUZ/t5pQ0PD7lBVJIV8yaJGT0NqDgI8gyVwsieLImjhTOv4JCL2PZgVv16VFuofk0PXvKX0KflWVh7D5ljyZJ2yCfHGdIDMv8hpF+vtvUngtdp4JPw1lZ23cpysR8aaQ7t454TGgK302kVmP06O/zqvC0EHs15NG/aU9atIYJc3DMv70/sHcetB0DOUcIffJceQSeFoJFaRJBdWAIPt+FqRtl2HY7dAEn/H3G890ydvgkMpkZDDIWZo2RrNGFa+kqQRUjouC9aPkZfCuFQ7NCkkiWlW7AHq2th1Y/AdAKtyz6oz9tOzC6mijqAI8j+s1xgV+2f9LO/wAl/QV4r8sZb8otKYLOoA//2Q==`,Gr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTc3QzI1MDRCQTExMUVDQjZGMUQyRjdEOUIwQ0Q1RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MTc3QzI1MTRCQTExMUVDQjZGMUQyRjdEOUIwQ0Q1RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNzdDMjRFNEJBMTExRUNCNkYxRDJGN0Q5QjBDRDVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNzdDMjRGNEJBMTExRUNCNkYxRDJGN0Q5QjBDRDVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAH0AAAMBAQEAAAAAAAAAAAAAAAYHCAAFAQEAAwEBAQAAAAAAAAAAAAAAAgQFAAMBEAABAwIEBAIJBQAAAAAAAAACAQMEEQUAIRIGMSITB0EyUXGRsWJyFDUIUjNUFxgRAAICAQQDAQAAAAAAAAAAAAABAgMRITESBEEyEyL/2gAMAwEAAhEDEQA/AG/3k70W3t9CbjstDNv8oFcjw1WgttVUes7TPTqSgonmouaYGUsBxjkCdhyLvuazuXDdl0cuF1fcU5EJwibaiiX7bQx00thy+KDn6VxMutk5b6FWmmMY7anO3XY7jYIZ3Pa1xlWaVFXqoEZ8xZNBzobKqrZp8JCqY503yi8Z0Dv68ZRylqGPZfvkG7Hg29fiZDcQgpMyGOVqSgJUk0L5HRHNUTJc1SnDFaE8kecMDgwYBD24pLG/e7tzO5Slbt8yQQE6ic6RGS0iILmmrpCKJhO63iuQ9RVylxG6G1rFGtjlgs0xHJMrnfF5zUYIg0FnQq8qU4p6cIOzMk2UlXhNHDes25Ye37hBuzYRWkFwYvTc1iYUVRIhqug08dOS41tkeSaNCt8XkQm1pU6JeI90hyBjzoL4So5JSvUbPUNEXjmmaYqt4IqWS0/702l+ovYuD+iB+bJotO2JUHvHI2m8BNKxIlpHNVUDIWhIgNPRrChCuFL1iI71JftDVvUW5/Wm7EjLCWqdV2QusqD4iXM5VE+NUwrY4FOKkvKYM7p3HGh25x25zuUVQCPivMungnrwrCtylhHSy1RjqKB8rPcNwRrdt5onWkeRtkwBdbzrpaQQa81M6JXjixVCSX63Id1kG8R2Kk/zpG/lD7MdvmcPoe9/ey143O7G3dst36XeNsTIBJGvqgFKCiGtBR0U5U1ZEOSrkmClBPcGM3HYWsmJvt11Yl1nvsSRAOpFfRWzRVFFVKUTEiyKT2LVdjktwP7m2lpLZHsNuZObfZRg8TLSK46qIvKGlKkpGvlFPXg+onz5eDdmpyqeBqfjl+Ptzsclrde8IyMTQRDtdqOhONFTJ56lUEkTyBxRc1oSYq4IeSkMenhsYwLdwftjfzL7sL9n1Ger7Ap2e+8Xv5k9+POr6I797wNTDJPNjGP/2Q==`,Kr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MUE5RkNERDRCQTExMUVDODNBN0VGNDVEOTM3ODZCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MUE5RkNERTRCQTExMUVDODNBN0VGNDVEOTM3ODZCNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxQTlGQ0RCNEJBMTExRUM4M0E3RUY0NUQ5Mzc4NkI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxQTlGQ0RDNEJBMTExRUM4M0E3RUY0NUQ5Mzc4NkI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAIgAAAIDAQAAAAAAAAAAAAAAAAUHAwYIAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwABEAACAQMDAAUGDQUAAAAAAAABAgMRBAUAEgYhMUEiB1FxchMUCGGBkbHRMkJigpKyUxU0VHQ1FxEAAgIBBAICAwAAAAAAAAAAAAERAgMhMRIEQVFhMoGxE//aAAwDAQACEQMRAD8A0ZzDlllxvEXF/PQmCMybSaDyLX0m6BoMl1VSHSnJwZ4sctzXxIu5r+9y81jg3crDbxgkSBeiqJUIijqBpuPadIWyOdd/0UKYVGmwXv7XlvBPYcrh8xcTYmB447+ynclQjNtDqB3esioI0X9Gjz+SsO/i3KIMzZwyGgklWop1Ej6w8407S/JSIXpxcB7RgGdPeKzTTY2PGrLtmylwEhHlG8RivmDaUyy7JeNxvAoTf4BuI49y/DW0MONlU2MCLsf1iCPo6GWRWQtXzHSLcy/JSSiF4D3MhyK5tbvFi3M+PurVgkixhqPtrVm3grRvunRJ6agwpIfB7mKx8bdpmLvbTipUBirECoP4lOnOu39Sf21qrDg/6Bx/90/IdOQxOUI/3kcA/wDGQXsZAuMbKzoD1sikN0fEK6Tu+N186DuFTV/GpFgp7rP4VUxt16z2glruIkiTY9GVoiHjowPw6mxq0WU1pOxYs/lb/j3F7u8vZFV4IWESlmZ5XptiDBi3fLECgJ1tSrbSMMlqw2iL3buNpBxiTIzIHuL24JkVgDVDVaGvX31J1SqtZJOZ+B3fwmN/tYfyL9GtRaEL7x08M8tzHAb8JNsyVuGrakgLOh6wCSoDjsqaHqJGsr4lZp+jfFl4pr2ILjWHz2Pu4LCe2uLC/SiSQSq0UiEDtBpqN2KPk/ZdwXTqn4C3iXYSNa46ykurm+zEkyPj7ZNzmRgQrKEWv2W6O3TfVrEi3ZtMejQHhRxnJYbi9kmUg9lvBFte1BB299nqadFe9qhRQiTltNi76MzO1xxWOff6yP0z82luz9Rrq/YH8B/qW/xx+rXdbYLt7l30yJna44//2Q==`,qr=`/assets/3-BnL8qGnT.png`,Jr=`/assets/4-G2NQaIrd.png`,Yr=`/assets/video-CGJeGWiC.mp4`,Xr=`
  /* Responsive Styles */
  @media (max-width: 1199.98px) {
    .hero-content h1 {
      font-size: 50px !important;
      line-height: 60px !important;
    }
    .hero-content {
      padding: 0 5% !important;
    }
  }
  .testiItem01 .quotation {
    font-size: 16px !important;
  }
  .carousel-testimonial {
    height: 400px;
    overflow: hidden;
  }
  .carousel-testimonial img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 991.98px) {
    .hero-content h1 {
      font-size: 42px !important;
      line-height: 52px !important;
    }
    .hero-content p {
      font-size: 16px !important;
      line-height: 26px !important;
    }
    .hero-slide {
      min-height: 600px !important;
      padding: 0 8% !important;
    }
    .achievement-img {
      margin-top: 30px;
    }
    .cta-thumb {
      margin-top: 30px;
    }
    .pricing-item-01 {
      margin-bottom: 30px;
    }
    .blogItem01 {
      margin-bottom: 30px;
    }
    .team_01 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-content h1 {
      font-size: 32px !important;
      line-height: 42px !important;
    }
    .hero-content .sub-title {
      font-size: 12px !important;
    }
    .hero-content p {
      font-size: 14px !important;
      line-height: 24px !important;
    }
    .hero-slide {
      min-height: 500px !important;
      padding: 0 5% !important;
      text-align: center !important;
    }
    .hero-content {
      max-width: 100% !important;
      text-align: center !important;
    }
    .hero-content .btn-wrapper {
      text-align: center !important;
    }
    .secTitle {
      font-size: 28px !important;
    }
    .subTitle {
      font-size: 13px !important;
    }
    .service_item_01 {
      margin-bottom: 25px;
    }
    .client-logo-item {
      margin-bottom: 20px;
    }
    .testimonialSection01 .row {
      flex-direction: column-reverse;
    }
    .testimonialSection01 .col-md-6:first-child {
      margin-top: 30px;
    }
    .ctaCon {
      text-align: center;
    }
    .ctaCon h2 {
      font-size: 36px !important;
    }
    .ctaCon h3 {
      font-size: 28px !important;
    }
    .ctaCon h4 {
      font-size: 20px !important;
    }
    .pricingTab a {
      padding: 8px 20px !important;
      font-size: 14px !important;
    }
    .beproTab li a {
      padding: 10px 15px !important;
      font-size: 14px !important;
    }
    .beproTabCon .secTitle {
      font-size: 24px !important;
    }
    .beproTabCon .col-md-6:last-child {
      margin-top: 20px;
    }
    .beproTabCon img {
      width: 100%;
    }
  }

  @media (max-width: 575.98px) {
    .hero-slide {
      min-height: 450px !important;
      padding: 0 15px !important;
    }
    .hero-content h1 {
      font-size: 26px !important;
      line-height: 36px !important;
    }
    .hero-content p {
      font-size: 13px !important;
      line-height: 22px !important;
      margin-bottom: 20px !important;
    }
    .hero-content .sub-title {
      font-size: 11px !important;
      letter-spacing: 1.5px !important;
    }
    .secTitle {
      font-size: 24px !important;
    }
    .subTitle {
      font-size: 12px !important;
    }
    .berpo_btn {
      padding: 12px 25px !important;
      font-size: 13px !important;
    }
    .carousel-control-prev,
    .carousel-control-next {
      display: none !important;
    }
    .carousel-indicators {
      bottom: 10px !important;
    }
    .carousel-indicators li {
      width: 8px !important;
      height: 8px !important;
    }
    .testiItem01 {
      padding: 20px !important;
    }
    .testiItem01 h5 {
      font-size: 18px !important;
    }
    .testiItem01 .quotation {
      font-size: 14px !important;
    }
    .ts_author img {
      width: 60px !important;
      height: 60px !important;
    }
    .ts_author h5 {
      font-size: 16px !important;
    }
    .price-thumb img {
      width: 100%;
    }
    .pricing-item-01 {
      padding: 20px !important;
    }
    .pricing-item-01 .p-title {
      font-size: 20px !important;
    }
    .pricing-item-01 .p-price {
      font-size: 28px !important;
    }
    .blogContent h3 {
      font-size: 18px !important;
    }
    .blogContent .bmeta {
      font-size: 13px !important;
    }
    .bpcon .author {
      font-size: 13px !important;
    }
    .accordion .card-header button {
      font-size: 14px !important;
      padding: 12px 15px !important;
    }
    .accordion .card-body {
      font-size: 14px !important;
      padding: 15px !important;
    }
    .ctaThumb img {
      width: 100%;
    }
    .ctaThumb .ctaborder {
      margin-bottom: 15px;
    }
    .clinetWorlwide {
      margin-top: 20px;
    }
    .ClientNumber {
      position: relative !important;
      margin-top: 15px !important;
      transform: none !important;
    }
    .ClientNumber h2 {
      font-size: 36px !important;
    }
    .listItem li {
      font-size: 14px !important;
    }
  }

  /* Additional responsive fixes */
  .container.largeContainer {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 1200px) {
    .container.largeContainer {
      max-width: 1200px;
    }
  }

  @media (min-width: 1400px) {
    .container.largeContainer {
      max-width: 1320px;
    }
  }

  /* Carousel indicator styling */
  .carousel-indicators li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.5);
    border: none;
    margin: 0 5px;
  }

  .carousel-indicators .active {
    background-color: #bb0b0b;
  }

  /* Pricing tab active state */
  .pricingTab .active {
    background: #bb0b0b !important;
    color: #fff !important;
  }

  .pricingTab a {
    display: inline-block;
    padding: 10px 30px;
    background: #f5f5f5;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    margin: 0 5px;
    border-radius: 5px;
  }

  .pricingTab a:hover {
    background: #bb0b0b;
    color: #fff;
  }

  /* Accordion styling */
  .accordion .card {
    border: none;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .accordion .card-header {
    background: #f8f9fa;
    padding: 0;
    border: none;
  }

  .accordion .card-header button {
    width: 100%;
    text-align: left;
    padding: 15px 20px;
    background: transparent;
    border: none;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .accordion .card-header button:hover {
    color: #bb0b0b;
  }

  .accordion .card-body {
    padding: 20px;
    background: #fff;
    color: #666;
  }

  /* Team social icons */
  .tm_social a {
    display: inline-block;
    margin: 0 5px;
    color: #333;
    transition: all 0.3s ease;
  }

  .tm_social a:hover {
    color: #bb0b0b;
  }

  /* Blog styling */
  .blogContent {
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 0 0 5px 5px;
  }

  .blogContent .bmeta {
    color: #999;
    text-decoration: none;
    font-size: 14px;
  }

  .blogContent h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  .blogContent h3 a {
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .blogContent h3 a:hover {
    color: #bb0b0b;
  }

  .bpcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .bpcon .author {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #666;
  }

  .bpcon .author img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .bpcon a:last-child {
    color: #999;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .bpcon a:last-child:hover {
    color: #bb0b0b;
  }

  /* Button styling */
  .berpo_btn {
    display: inline-block;
    position: relative;
    padding: 14px 35px;
    background: #bb0b0b;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .berpo_btn:hover {
    background: #a00a0a;
    color: #fff;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(187, 11, 11, 0.3);
  }

  .berpo_btn .bp-text {
    position: relative;
    z-index: 1;
  }

  /* Testimonial styling */
  .testiItem01 {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  }

  .testiItem01 .quotation {
    font-style: italic;
    color: #666;
    line-height: 1.8;
  }

  .ts_author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .ts_author img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  .ts_author h5 {
    margin: 0;
    font-weight: 600;
    color: #333;
  }

  .ts_author span {
    color: #999;
    font-size: 14px;
  }

  /* Video Section Styles */
  .video-wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    background: #000;
    cursor: pointer;
  }

  .video-wrapper video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  .video-wrapper .play-button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 10;
    pointer-events: none;
  }

  .video-wrapper .play-button-overlay .play-icon {
    width: 80px;
    height: 80px;
    background: #bb0b0b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: auto;
    box-shadow: 0 0 0 15px rgba(187, 11, 11, 0.3);
  }

  .video-wrapper .play-button-overlay .play-icon:hover {
    transform: scale(1.1);
    background: #a00a0a;
    box-shadow: 0 0 0 20px rgba(187, 11, 11, 0.4);
  }

  .video-wrapper .play-button-overlay .play-icon i {
    color: #fff;
    font-size: 35px;
    margin-left: 5px;
  }

  .video-wrapper .play-button-overlay.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .video-wrapper:hover .play-button-overlay:not(.hidden) {
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 60px;
      height: 60px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 25px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 10px rgba(187, 11, 11, 0.3);
    }
  }

  @media (max-width: 576px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 50px;
      height: 50px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 20px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 8px rgba(187, 11, 11, 0.3);
    }
  }
`,Zr=()=>{let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(!1);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`style`,{children:Xr}),(0,M.jsx)(`section`,{className:`slider_01`,children:(0,M.jsxs)(`div`,{id:`heroCarousel`,className:`carousel slide`,"data-ride":`carousel`,"data-interval":`5000`,"data-pause":`false`,children:[(0,M.jsxs)(`ol`,{className:`carousel-indicators`,children:[(0,M.jsx)(`li`,{"data-target":`#heroCarousel`,"data-slide-to":`0`,className:`active`}),(0,M.jsx)(`li`,{"data-target":`#heroCarousel`,"data-slide-to":`1`})]}),(0,M.jsxs)(`div`,{className:`carousel-inner`,children:[(0,M.jsx)(`div`,{className:`carousel-item active hero-slide`,children:(0,M.jsx)(`div`,{style:{backgroundImage:`url(${Dr})`,backgroundSize:`cover`,backgroundPosition:`center center`,backgroundRepeat:`no-repeat`,minHeight:`750px`,display:`flex`,alignItems:`center`,padding:`0 15%`,position:`relative`},className:`hero-slide`,children:(0,M.jsxs)(`div`,{className:`hero-content`,style:{maxWidth:`670px`,width:`100%`},children:[(0,M.jsxs)(`div`,{className:`sub-title text-uppercase`,style:{color:`#bb0b0b`,fontSize:`14px`,fontWeight:700,lineHeight:`28px`,letterSpacing:`2.8px`,marginBottom:`10px`},children:[(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),` `,(0,M.jsx)(`span`,{className:`bg`,children:`GEOSPATIAL & DIGITAL SOLUTIONS`})]}),(0,M.jsxs)(`h1`,{className:`headFont`,style:{color:`#ffffff`,fontSize:`50px`,fontWeight:700,lineHeight:`80px`,marginBottom:`20px`},children:[`Mapping the World.Building Smarter`,(0,M.jsx)(`span`,{style:{color:`#bb0b0b`},children:` Solutions.`})]}),(0,M.jsx)(`p`,{style:{color:`#d9d9d9`,fontSize:`18px`,fontWeight:400,lineHeight:`28px`,marginBottom:`30px`},children:`We deliver innovative geospatial solutions that transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial intelligence, we help organizations make better decisions.`}),(0,M.jsx)(`div`,{className:`btn-wrapper`,children:(0,M.jsxs)(j,{className:`berpo_btn`,to:`/services`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})})]})})}),(0,M.jsx)(`div`,{className:`carousel-item hero-slide`,children:(0,M.jsx)(`div`,{style:{backgroundImage:`url(${Or})`,backgroundSize:`cover`,backgroundPosition:`center center`,backgroundRepeat:`no-repeat`,minHeight:`750px`,display:`flex`,alignItems:`center`,padding:`0 15%`,position:`relative`},className:`hero-slide`,children:(0,M.jsxs)(`div`,{className:`hero-content`,style:{maxWidth:`670px`,width:`100%`},children:[(0,M.jsxs)(`div`,{className:`sub-title text-uppercase`,style:{color:`#bb0b0b`,fontSize:`14px`,fontWeight:700,lineHeight:`28px`,letterSpacing:`2.8px`,marginBottom:`10px`},children:[(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),` `,(0,M.jsx)(`span`,{className:`bg`,children:`SGT SOLUTIONS`})]}),(0,M.jsxs)(`h1`,{className:`headFont`,style:{color:`#ffffff`,fontSize:`50px`,fontWeight:700,lineHeight:`80px`,marginBottom:`20px`},children:[`See More. Map Better.`,(0,M.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Decide Smarter.`})]}),(0,M.jsx)(`p`,{style:{color:`#d9d9d9`,fontSize:`18px`,fontWeight:400,lineHeight:`26px`,marginBottom:`30px`},children:`Advanced GIS, surveying, mapping, and spatial intelligence solutions designed for a connected world.`}),(0,M.jsx)(`div`,{className:`btn-wrapper`,children:(0,M.jsxs)(j,{className:`berpo_btn`,to:`/services`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`DISCOVER MORE`})]})})]})})})]}),(0,M.jsxs)(`a`,{className:`carousel-control-prev`,href:`#heroCarousel`,role:`button`,"data-slide":`prev`,children:[(0,M.jsx)(`span`,{className:`carousel-control-prev-icon`,"aria-hidden":`true`}),(0,M.jsx)(`span`,{className:`sr-only`,children:`Previous`})]}),(0,M.jsxs)(`a`,{className:`carousel-control-next`,href:`#heroCarousel`,role:`button`,"data-slide":`next`,children:[(0,M.jsx)(`span`,{className:`carousel-control-next-icon`,"aria-hidden":`true`}),(0,M.jsx)(`span`,{className:`sr-only`,children:`Next`})]})]})}),(0,M.jsx)(`section`,{className:`serviceSectionTitle py-5`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-xl-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`What We Do `,(0,M.jsx)(`br`,{}),` Our Geospatial & Digital Services`]})]})})})}),(0,M.jsx)(`section`,{className:`service_section_01 pb-5`,children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsxs)(`div`,{className:`row p-3`,children:[(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:kr,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas fa-globe`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/services/web-gis`,children:`Web GIS`})}),(0,M.jsx)(`p`,{children:`Web-based mapping portals for land records and asset tracking.`})]})]})}),(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:Ar,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas fa-map-marked-alt`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/services/geo-property`,children:`Spatial Revenue Intelligence`})}),(0,M.jsx)(`p`,{children:`Digitize buildings and parcels from aerial imagery.`})]})]})}),(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:jr,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas fa-handshake`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/services/drone-survey`,children:`Drone & DGPS Survey`})}),(0,M.jsx)(`p`,{children:`Centimeter-level accuracy for property mapping.`})]})]})})]}),(0,M.jsx)(`div`,{className:`row mt-4`,children:(0,M.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,M.jsxs)(`div`,{className:`qu_link`,children:[`From Web GIS and drone surveys to spatial analytics, we help organizations turn location data into actionable insights. `,(0,M.jsx)(j,{to:`/about`,children:`Explore Company`})]})})})]})}),(0,M.jsx)(`section`,{className:`achivementSection01 py-5`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsxs)(`div`,{className:`col-xl-5 col-lg-6`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL EXPERTISE`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Turning Location Data Into Real-World Solutions`}),(0,M.jsx)(`p`,{children:`We combine GIS, remote sensing, surveying, drone technology, and spatial analytics to deliver accurate information for better planning and decision-making.`}),(0,M.jsxs)(`ul`,{className:`listItem withbg`,children:[(0,M.jsx)(`li`,{children:(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Accurate GIS & Mapping Solutions`]})}),(0,M.jsx)(`li`,{children:(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Drone & DGPS Surveying`]})}),(0,M.jsx)(`li`,{children:(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Spatial Data & Remote Sensing`]})})]}),(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`Explore Our Services`})]})]}),(0,M.jsx)(`div`,{className:`col-xl-7 col-lg-6`,children:(0,M.jsxs)(`div`,{className:`clinetWorlwide position-relative`,children:[(0,M.jsx)(`img`,{src:Mr,alt:``,className:`img-fluid achievement-img`}),(0,M.jsxs)(`div`,{className:`ClientNumber countfact`,"data-count":`80`,style:{position:`absolute`,bottom:`20px`,right:`20px`,background:`#fff`,padding:`20px 30px`,borderRadius:`10px`,boxShadow:`0 5px 20px rgba(0,0,0,0.1)`,textAlign:`center`},children:[(0,M.jsxs)(`h2`,{children:[(0,M.jsx)(`span`,{className:`counter`,children:`10`}),(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`GEOSPATIAL SERVICES`})]})]})})]})})}),(0,M.jsx)(`section`,{className:`clientSection01 py-5`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsx)(`div`,{className:`col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item`,children:(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`img`,{src:Nr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,M.jsx)(`div`,{className:`col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item`,children:(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`img`,{src:Pr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,M.jsx)(`div`,{className:`col-6 col-md-3 text-center client-logo-item`,children:(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`img`,{src:Fr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,M.jsx)(`div`,{className:`col-6 col-md-3 text-center client-logo-item`,children:(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`img`,{src:Ir,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})})]})})}),(0,M.jsx)(`section`,{className:`videoSection01 py-5`,style:{background:`#bdcfe0`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL TECHNOLOGY`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Turning Location Data Into Smarter Decisions`}),(0,M.jsxs)(`div`,{className:`video-wrapper`,onClick:()=>{let t=e.current;t&&(t.paused?(t.play(),n(!0)):(t.pause(),n(!1)))},children:[(0,M.jsxs)(`video`,{ref:e,playsInline:!0,style:{width:`100%`,height:`auto`,borderRadius:`10px`},poster:Dr,onEnded:()=>{n(!1)},onPause:()=>n(!1),onPlay:()=>n(!0),children:[(0,M.jsx)(`source`,{src:Yr,type:`video/mp4`}),`Your browser does not support the video tag.`]}),(0,M.jsx)(`div`,{className:`play-button-overlay ${t?`hidden`:``}`,children:(0,M.jsx)(`div`,{className:`play-icon`,children:(0,M.jsx)(`i`,{className:`fas fa-play`})})})]})]})})})}),(0,M.jsx)(`section`,{className:`tabSection01 py-5`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12`,children:[(0,M.jsxs)(`ul`,{className:`nav beproTab justify-content-center flex-wrap`,id:`beproTab`,role:`tablist`,children:[(0,M.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,M.jsx)(`a`,{id:`business-tab`,"data-toggle":`tab`,href:`#business`,role:`tab`,"aria-controls":`business`,"aria-selected":`false`,className:`nav-link`,children:`GIS & MAPPING`})}),(0,M.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,M.jsx)(`a`,{className:`nav-link active`,id:`financial-tab`,"data-toggle":`tab`,href:`#financial`,role:`tab`,"aria-controls":`financial`,"aria-selected":`true`,children:`SURVEYING & DATA`})}),(0,M.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,M.jsx)(`a`,{id:`global-tab`,"data-toggle":`tab`,href:`#global`,role:`tab`,"aria-controls":`global`,"aria-selected":`false`,className:`nav-link`,children:`SPATIAL INTELLIGENCE`})})]}),(0,M.jsxs)(`div`,{className:`tab-content mt-4`,children:[(0,M.jsx)(`div`,{className:`tab-pane fade animated slideInUp2`,id:`business`,role:`tabpanel`,"aria-labelledby":`business-tab`,children:(0,M.jsx)(`div`,{className:`beproTabCon`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsxs)(`div`,{className:`col-md-6`,children:[(0,M.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,M.jsx)(`p`,{children:`We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.`}),(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,M.jsx)(`div`,{className:`col-md-6`,children:(0,M.jsx)(`img`,{src:Lr,alt:``,className:`img-fluid`})})]})})}),(0,M.jsx)(`div`,{className:`tab-pane fade show active animated slideInUp2`,id:`financial`,role:`tabpanel`,"aria-labelledby":`financial-tab`,children:(0,M.jsx)(`div`,{className:`beproTabCon`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsxs)(`div`,{className:`col-md-6`,children:[(0,M.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,M.jsx)(`p`,{children:`We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.`}),(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,M.jsx)(`div`,{className:`col-md-6`,children:(0,M.jsx)(`img`,{src:Lr,alt:``,className:`img-fluid`})})]})})}),(0,M.jsx)(`div`,{className:`tab-pane fade animated slideInUp2`,id:`global`,role:`tabpanel`,"aria-labelledby":`global-tab`,children:(0,M.jsx)(`div`,{className:`beproTabCon`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsxs)(`div`,{className:`col-md-6`,children:[(0,M.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,M.jsx)(`p`,{children:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers with exceptional service.`}),(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,M.jsx)(`div`,{className:`col-md-6`,children:(0,M.jsx)(`img`,{src:Lr,alt:``,className:`img-fluid`})})]})})})]})]})})})}),(0,M.jsx)(`section`,{className:`dividSection`,children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,M.jsx)(`div`,{className:`diviborder`})})})})}),(0,M.jsx)(`section`,{className:`testimonialSection01 py-5`,style:{background:`#f8f9fa`},children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`testimonial`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`What Our Clients Say`})]})}),(0,M.jsxs)(`div`,{className:`row mt-4`,children:[(0,M.jsx)(`div`,{className:`col-md-6`,children:(0,M.jsxs)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:[(0,M.jsxs)(`div`,{className:`card`,children:[(0,M.jsx)(`div`,{className:`card-header`,id:`ma_ac_01`,children:(0,M.jsx)(`h2`,{className:`mb-0`,children:(0,M.jsxs)(`button`,{className:`collapsed`,type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_01`,"data-aria-expanded":`false`,"data-aria-controls":`ma_collapes_01`,children:[(0,M.jsx)(`i`,{children:`1.`}),` Why Choose Our Sgt Solutions?`,(0,M.jsx)(`span`,{})]})})}),(0,M.jsx)(`div`,{id:`ma_collapes_01`,className:`collapse`,"aria-labelledby":`ma_ac_01`,"data-parent":`#befAccordion01`,children:(0,M.jsx)(`div`,{className:`card-body`,children:`We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.`})})]}),(0,M.jsxs)(`div`,{className:`card`,children:[(0,M.jsx)(`div`,{className:`card-header`,id:`ma_ac_02`,children:(0,M.jsx)(`h2`,{className:`mb-0`,children:(0,M.jsxs)(`button`,{type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_02`,"data-aria-expanded":`true`,"data-aria-controls":`ma_collapes_02`,children:[(0,M.jsx)(`i`,{children:`2.`}),` How Do We Ensure Accuracy`,(0,M.jsx)(`span`,{})]})})}),(0,M.jsx)(`div`,{id:`ma_collapes_02`,className:`collapse show`,"aria-labelledby":`ma_ac_02`,"data-parent":`#befAccordion01`,children:(0,M.jsx)(`div`,{className:`card-body`,children:`We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.`})})]}),(0,M.jsxs)(`div`,{className:`card`,children:[(0,M.jsx)(`div`,{className:`card-header`,id:`ma_ac_03`,children:(0,M.jsx)(`h2`,{className:`mb-0`,children:(0,M.jsxs)(`button`,{className:`collapsed`,type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_03`,"data-aria-expanded":`false`,"data-aria-controls":`ma_collapes_03`,children:[(0,M.jsx)(`i`,{children:`3.`}),` What Industries Do We Serve?`,(0,M.jsx)(`span`,{})]})})}),(0,M.jsx)(`div`,{id:`ma_collapes_03`,className:`collapse`,"aria-labelledby":`ma_ac_03`,"data-parent":`#befAccordion01`,children:(0,M.jsx)(`div`,{className:`card-body`,children:`Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.`})})]})]})}),(0,M.jsx)(`div`,{className:`col-md-6`,children:(0,M.jsxs)(`div`,{id:`testimonialCarousel`,className:`carousel slide`,"data-ride":`carousel`,"data-interval":`4000`,"data-pause":`false`,children:[(0,M.jsxs)(`div`,{className:`carousel-inner`,children:[(0,M.jsx)(`div`,{className:`carousel-item carousel-testimonial active`,children:(0,M.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,M.jsx)(`h5`,{children:`Exceptional Service`}),(0,M.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation. By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries and integrated spatial data seamlessly. Their technology has been highly effective in identifying previously unassessed commercial structures and verifying built-up area variations."`}),(0,M.jsxs)(`div`,{className:`ts_author`,children:[(0,M.jsx)(`img`,{src:Rr,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:`Coimbatore City Municipal Corporation`}),(0,M.jsx)(`span`,{children:`Government Partner`})]})]})]})}),(0,M.jsx)(`div`,{className:`carousel-item carousel-testimonial`,children:(0,M.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,M.jsx)(`h5`,{children:`Environmental Excellence`}),(0,M.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped track ecological degradation, siltation levels, and natural inlet channels across project zones. Dr. Saravani and her team successfully bridged cutting-edge technology with grassroots environmental restoration, optimizing rainwater harvesting catchments for water body renovation initiatives."`}),(0,M.jsxs)(`div`,{className:`ts_author`,children:[(0,M.jsx)(`img`,{src:zr,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:`Marutham Foundation`}),(0,M.jsx)(`span`,{children:`Environmental Partner`})]})]})]})}),(0,M.jsx)(`div`,{className:`carousel-item carousel-testimonial`,children:(0,M.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,M.jsx)(`h5`,{children:`Exceptional Service`}),(0,M.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions completed extensive spatial mapping and water quality analysis for the Institute for Water Studies, Chennai. Using geospatial technology, they tracked water bodies and aquifer profiles, while lab-based analysis measured critical chemical parameters and contamination trends. Their work provided reliable datasets, significantly aiding research and water resource management initiatives."`}),(0,M.jsxs)(`div`,{className:`ts_author`,children:[(0,M.jsx)(`img`,{src:Br,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:`Institute for Water Studies`}),(0,M.jsx)(`span`,{children:`Government Agency`})]})]})]})})]}),(0,M.jsxs)(`ol`,{className:`carousel-indicators`,style:{position:`relative`,marginTop:`20px`},children:[(0,M.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`0`,className:`active`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#bb0b0b`,border:`none`}}),(0,M.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`1`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#ccc`,border:`none`}}),(0,M.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`2`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#ccc`,border:`none`}})]})]})})]})]})}),(0,M.jsx)(`section`,{className:`blogSectiont01 py-5`,children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL INSIGHTS`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Latest Geospatial Insights`})]})}),(0,M.jsxs)(`div`,{className:`row mt-4`,children:[(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:Vr,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,M.jsx)(`i`,{className:`twi-calendar-alt1`}),`12 August, 2026`]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(`a`,{href:`single-blog.html`,children:`How GIS Is Transforming Modern Property Mapping`})})]})]})}),(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:Hr,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,M.jsx)(`i`,{className:`twi-calendar-alt1`}),`5 August, 2026`]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(`a`,{href:`single-blog.html`,children:`The Role of Drones in Modern Land Surveying`})})]})]})}),(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:Ur,alt:``,className:`img-fluid`})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,M.jsx)(`i`,{className:`twi-calendar-alt1`}),`28 July, 2026`]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(`a`,{href:`single-blog.html`,children:`Turning Aerial Imagery Into Actionable Insights`})})]})]})})]})]})}),(0,M.jsx)(`section`,{className:`ctaSectiont01 py-5`,style:{background:`#1a1a1a`,color:`#fff`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row align-items-center`,children:[(0,M.jsx)(`div`,{className:`col-md-5`,children:(0,M.jsxs)(`div`,{className:`ctaCon`,children:[(0,M.jsxs)(`h4`,{children:[(0,M.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Mapping`}),`Data.`]}),(0,M.jsx)(`h2`,{style:{fontSize:`48px`,fontWeight:700},children:`Creating`}),(0,M.jsxs)(`h3`,{style:{fontSize:`36px`,fontWeight:700},children:[(0,M.jsx)(`span`,{style:{color:`#bb0b0b`}}),` Impact`]}),(0,M.jsxs)(j,{className:`berpo_btn`,to:`/contact`,style:{marginTop:`20px`},children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-text`,children:`Contact Us`})]})]})}),(0,M.jsx)(`div`,{className:`col-md-7`,children:(0,M.jsxs)(`div`,{className:`ctaThumb text-center cta-thumb`,children:[(0,M.jsx)(`img`,{className:`ctaborder`,src:qr,alt:``,style:{maxWidth:`100%`}}),(0,M.jsx)(`img`,{src:Jr,alt:``,style:{maxWidth:`100%`,marginTop:`20px`}})]})})]})})})]})},Qr=`/assets/services-bg--umohj6C.jpg`,$r=[{id:1,icon:`fa-globe`,title:`Web GIS`,description:`Web-based mapping portals for land records and asset tracking.`,image:kr,link:`/services/web-gis`},{id:2,icon:`fa-mobile-alt`,title:`Mobile GIS`,description:`Offline field applications for property surveys and data collection.`,image:Ar,link:`/services/mobile-gis`},{id:3,icon:`fa-map-marked-alt`,title:`Spatial Revenue Intelligence`,description:`Digitize buildings and parcels from aerial imagery for property tax management.`,image:jr,link:`/services/geo-property`},{id:4,icon:`fa-satellite`,title:`LiDAR`,description:`High-precision 3D scanning for urban and infrastructure models.`,image:kr,link:`/services/lidar`},{id:5,icon:`fa-camera`,title:`Photogrammetry`,description:`Accurate maps and 3D models generated from drone and aerial imagery.`,image:Ar,link:`/services/photogrammetry`},{id:6,icon:`fa-drone`,title:`Drone & DGPS Survey`,description:`Centimeter-level accuracy for property and infrastructure mapping.`,image:jr,link:`/services/drone-survey`},{id:7,icon:`fa-map`,title:`2D Mapping`,description:`Clear and accurate maps showing land use, boundaries and assets.`,image:kr,link:`/services/2d-mapping`},{id:8,icon:`fa-clipboard-list`,title:`Consultancy Services`,description:`GIS strategy, workflow automation, implementation and professional training.`,image:Ar,link:`/services/consultancy`},{id:9,icon:`fa-laptop-code`,title:`Website Development`,description:`Modern responsive websites, GIS portals and enterprise web applications.`,image:jr,link:`/services/web-development`}],ei=[{id:1,name:`Coimbatore City Municipal Corporation`,role:`ThemeForest Exclusive`,text:`SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation. By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries andintegrated spatial data seamlessly. Their technology has been highly effective inidentifying previously unassessed commercial structures and verifying built-up areavariations.`,img:Rr},{id:2,name:`Marutham Foundation`,role:`Envato Author`,text:`SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped trackecological degradation, siltation levels, and natural inlet channels across projectzones. Dr. Saravani and her team successfully bridged cutting-edge technology withgrassroots environmental restoration, optimizing rainwater harvesting catchments forwater body renovation initiatives.`,img:zr},{id:3,name:`Institute for Water Studies`,role:`Envato Author`,text:`SGT Solutions completed extensive spatial mapping and waterquality analysis for the Institute for Water Studies, Chennai. Using geospatiallogy, they tracked water bodies and aquifer profiles, while lab-based indexin measured critical chemical parameters and contamination trends. Their work providedreliable datasets, significantly aiding research and water resource managementinitiatives.`,img:Br}],ti=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`financial`),[i,a]=(0,S.useState)(1),o=e=>{a(i===e?null:e)};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

     

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          text-align: center;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 0 0 15px 15px;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -40px auto 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          position: sticky;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #189144;
          background-color: rgb(84, 32, 49) !important;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 12.5pxS;
          font-size: 16.5px;
          color: #d6d6e3;
         
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
          padding:10px;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 200%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
        .subTitle h1 {
    color: red;
}
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 22px 35px 23px 105px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
        }
      `}),(0,M.jsxs)(`section`,{className:`section-padding background_img`,style:{backgroundImage:`url(${Qr})`,backgroundSize:`cover`,backgroundPosition:`center`,position:`absolute`,position:`relative`,overflow:`hidden`,backgroundColor:`#dededf`},children:[(0,M.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0, 0, 0, 0.6)`,zIndex:1}}),(0,M.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),` `,(0,M.jsx)(`br`,{}),(0,M.jsx)(`div`,{className:`subTitle`,style:{color:`#ff6b6b`},children:`Our Expertise`}),(0,M.jsxs)(`h2`,{className:`secTitle`,style:{color:`#ffffff`},children:[`Core Geospatial `,(0,M.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Services`})]}),(0,M.jsx)(`p`,{style:{color:`#d0d0dd`},children:`Delivering precise, data-driven solutions for modern mapping and asset management.`})]}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(j,{to:`/services`,className:`berpo_btn`,children:[`Our Services `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})]}),(0,M.jsxs)(`section`,{className:`section-padding`,style:{position:`relative`,overflow:`hidden`,backgroundColor:`#fff`},children:[(0,M.jsx)(`div`,{style:{top:0,left:0,right:0,bottom:0,zIndex:0}}),(0,M.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0, 0, 0, 0.6)`,zIndex:1}}),(0,M.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),` `,(0,M.jsx)(`br`,{}),(0,M.jsx)(`div`,{className:`subTitle`,style:{color:`#ff6b6b`},children:`Our Expertise`}),(0,M.jsxs)(`h2`,{className:`secTitle`,style:{color:`#ffffff`},children:[`Core Geospatial `,(0,M.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Services`})]}),(0,M.jsx)(`p`,{style:{color:`#d0d0dd`},children:`Delivering precise, data-driven solutions for modern mapping and asset management.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:$r.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(j,{to:`/services`,className:`berpo_btn`,children:[`Explore All Services `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})]}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsxs)(`div`,{className:`subTitle`,children:[(0,M.jsx)(`h1`,{children:`Our Impact`}),` `]}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Delivering Geospatial Excellence`}),(0,M.jsx)(`p`,{style:{color:`#f4f4fc`,marginBottom:`16px`},children:`With over 7 years of expertise, we provide innovative GIS solutions that empower organizations to make data-driven decisions.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` End-to-end GIS implementation`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom web & mobile mapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` LiDAR & photogrammetry processing`]})]}),(0,M.jsx)(j,{to:`/contact`,className:`berpo_btn`,children:`Get a Consultation`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`10`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Years Experience`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Tailored `,(0,M.jsx)(`span`,{children:`GIS`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`business`?`active`:``}`,onClick:()=>r(`business`),children:`Business Growth`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`financial`?`active`:``}`,onClick:()=>r(`financial`),children:`Financial Intelligence`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`global`?`active`:``}`,onClick:()=>r(`global`),children:`Global Solutions`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`business`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Scalable `,(0,M.jsx)(`span`,{children:`GIS`}),` for Business`]}),(0,M.jsx)(`p`,{children:`Our spatial intelligence solutions help businesses optimize operations, track assets, and visualize data in real-time.`}),(0,M.jsx)(j,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Learn More`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`GIS Business`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`financial`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Revenue `,(0,M.jsx)(`span`,{children:`Intelligence`})]}),(0,M.jsx)(`p`,{children:`Leverage spatial data for property tax assessment, revenue forecasting, and asset valuation with centimeter-level accuracy.`}),(0,M.jsx)(j,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Financial GIS`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`global`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Global `,(0,M.jsx)(`span`,{children:`GIS`}),` Solutions`]}),(0,M.jsx)(`p`,{children:`From multinational infrastructure projects to cross-border asset mapping — our solutions scale across regions and industries.`}),(0,M.jsx)(j,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Contact Us`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Global GIS`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Testimonials`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`What Our `,(0,M.jsx)(`span`,{children:`Clients`}),` Say`]})]}),(0,M.jsxs)(`div`,{className:`testimonial-grid`,children:[(0,M.jsx)(`div`,{children:(0,M.jsx)(`div`,{className:`accordion`,children:[{id:1,q:`Why choose our SGT solutions?`,a:`We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.`},{id:2,q:`How do we ensure data accuracy?`,a:`We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.`},{id:3,q:`What industries do we serve?`,a:`Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.`}].map(e=>(0,M.jsxs)(`div`,{className:`accordion-item`,children:[(0,M.jsxs)(`button`,{className:`accordion-header ${i===e.id?`active`:``}`,onClick:()=>o(e.id),children:[(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`i`,{className:`fas fa-question-circle`}),` `,e.q]}),(0,M.jsx)(`span`,{className:`arrow`,children:(0,M.jsx)(`i`,{className:`fas fa-chevron-down`})})]}),(0,M.jsx)(`div`,{className:`accordion-body ${i===e.id?`open`:``}`,children:e.a})]},e.id))})}),(0,M.jsxs)(`div`,{children:[ei.map((t,n)=>(0,M.jsx)(`div`,{style:{display:e===n?`block`:`none`},children:(0,M.jsxs)(`div`,{className:`testiItem01`,children:[(0,M.jsx)(`h5`,{children:`Exceptional Service`}),(0,M.jsxs)(`p`,{className:`quotation`,children:[`"`,t.text,`"`]}),(0,M.jsxs)(`div`,{className:`ts_author`,children:[(0,M.jsx)(`img`,{src:t.img,alt:t.name}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:t.name}),(0,M.jsx)(`span`,{children:t.role})]})]})]})},t.id)),(0,M.jsx)(`div`,{className:`testimonial-controls`,children:ei.map((n,r)=>(0,M.jsx)(`button`,{className:e===r?`active`:``,onClick:()=>t(r)},r))})]})]})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Business`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your spatial data into strategic advantage?`}),(0,M.jsx)(j,{to:`/contact`,className:`berpo_btn`,children:`Start a Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})})]})},ni=`/assets/2_4-rhY7tKi1.jpg`,ri=()=>{let e=(0,S.useRef)(null),t=(0,S.useRef)(null),[n,r]=(0,S.useState)(`ma_collapes_02`);(0,S.useEffect)(()=>(window.$&&e.current&&window.$(`.testimonialslider02`).owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:1e3,dots:!0,nav:!1}),window.$&&t.current&&window.$(`.client-slider`).owlCarousel({items:4,loop:!0,autoplay:!0,smartSpeed:1e3,dots:!1,nav:!1,responsive:{0:{items:2},768:{items:3},992:{items:4}}}),window.$&&(window.$(`.collapse`).on(`show.bs.collapse`,function(){window.$(this).closest(`.card`).addClass(`activeBg`)}),window.$(`.collapse`).on(`hide.bs.collapse`,function(){window.$(this).closest(`.card`).removeClass(`activeBg`)})),window.$&&window.lightcase&&window.$(`.popup_video`).lightcase(),()=>{window.$&&e.current&&window.$(`.testimonialslider02`).trigger(`destroy.owl.carousel`),window.$&&t.current&&window.$(`.client-slider`).trigger(`destroy.owl.carousel`)}),[]);let i=e=>{r(n===e?``:e)},a=[{id:1,icon:``,title:`Flexible Solutions`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`},{id:2,icon:``,title:`Premium Contact`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`},{id:3,icon:``,title:`Creative Idea`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`}],o=[{id:1,name:`Arnika Sorkar`,role:`Web Designer`,image:``},{id:2,name:`Georgie Haynes`,role:`Web Developer`,image:``},{id:3,name:`Jizz Merkel`,role:`Business Expert`,image:``}],s=[{id:1,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Akshit Singh Dutt`,role:`Digital Marketing Manager`},{id:2,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Matt Sanchzi`,role:`ThemeForest Exclusive`},{id:3,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Billi Stanlake`,role:`ThemeForest Reviewer`}],c=[{id:`ma_collapes_01`,question:`Wte Have added a new exciting feature in v2.0`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`},{id:`ma_collapes_02`,question:`how Consultancy Experts Work?`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`},{id:`ma_collapes_03`,question:`Wte Have added a new exciting feature in v2.0`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`}];return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`style`,{children:`
                /* About Page Responsive Styles */
                .aboutPageSection01 .row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .aboutPageSection01 .col-lg-5,
                .aboutPageSection01 .col-lg-7 {
                    flex: 0 0 100%;
                    max-width: 100%;
                }

                @media (min-width: 992px) {
                    .aboutPageSection01 .col-lg-5 {
                        flex: 0 0 41.666667%;
                        max-width: 41.666667%;
                    }
                    .aboutPageSection01 .col-lg-7 {
                        flex: 0 0 58.333333%;
                        max-width: 58.333333%;
                    }
                }

                .abpageThumb img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }

                .service_section_09 .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .service_section_09 .col-lg-4 {
                    flex: 0 0 100%;
                    max-width: 100%;
                }

                @media (min-width: 768px) {
                    .service_section_09 .col-md-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }

                @media (min-width: 992px) {
                    .service_section_09 .col-lg-4 {
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                    }
                }

                .service_item_10 {
                    padding: 20px;
                    margin-bottom: 30px;
                    border-radius: 10px;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    background: #fff;
                }

                .service_item_10:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                }

                .service_item_10 .ibMeta img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                @media (max-width: 576px) {
                    .service_item_10 .ibMeta img {
                        height: 160px;
                    }
                }

                .service_item_10 h3 {
                    font-size: 20px;
                    margin: 15px 0 10px;
                }

                .service_item_10 h3 a {
                    color: #0a1922;
                    text-decoration: none;
                }

                .service_item_10 h3 a:hover {
                    color: #bb0b0b;
                }

                .service_item_10 p {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.7;
                }

                .service_item_10 .srm {
                    display: inline-block;
                    margin-top: 10px;
                    color: #bb0b0b;
                    font-size: 20px;
                    transition: all 0.3s ease;
                }

                .service_item_10 .srm:hover {
                    transform: translateX(5px);
                }

                .abvideoSection {
                    padding: 60px 0;
                    background: #f8f9fa;
                }

                @media (max-width: 768px) {
                    .abvideoSection {
                        padding: 40px 0;
                    }
                    .abvideoSection .secTitle {
                        font-size: 22px !important;
                        line-height: 1.3 !important;
                    }
                }

                .vbtn02 {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: #bb0b0b;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 30px;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                }

                .vbtn02:hover {
                    transform: scale(1.1);
                    background: #9e0909;
                    color: #fff;
                }

                @media (max-width: 576px) {
                    .vbtn02 {
                        width: 60px;
                        height: 60px;
                        font-size: 22px;
                    }
                }

                .abFa1Section {
                    padding: 60px 0;
                }

                .abFa1Section .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .abFa1Section .col-lg-6 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 30px;
                }

                @media (min-width: 992px) {
                    .abFa1Section .col-lg-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                        margin-bottom: 0;
                    }
                }

                .fqArea {
                    padding: 0 15px;
                }

                @media (max-width: 768px) {
                    .fqArea {
                        padding: 0;
                    }
                }

                .bepAccordion .card {
                    border: none;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                .bepAccordion .card.activeBg {
                    box-shadow: 0 2px 15px rgba(187, 11, 11, 0.1);
                }

                .bepAccordion .faqInner {
                    background: #fff;
                }

                .bepAccordion .card-header {
                    padding: 0;
                    background: #f8f9fa;
                    border: none;
                }

                .bepAccordion .card-header button {
                    width: 100%;
                    text-align: left;
                    padding: 15px 20px;
                    background: transparent;
                    border: none;
                    font-weight: 600;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                @media (max-width: 576px) {
                    .bepAccordion .card-header button {
                        font-size: 14px;
                        padding: 12px 15px;
                    }
                }

                .bepAccordion .card-header button i {
                    color: #bb0b0b;
                    font-weight: 700;
                    font-style: normal;
                }

                .bepAccordion .card-header button span {
                    margin-left: auto;
                    transition: all 0.3s ease;
                }

                .bepAccordion .card-header button span::after {
                    content: '+';
                    font-size: 20px;
                    color: #bb0b0b;
                }

                .bepAccordion .card-header button:not(.collapsed) span::after {
                    content: '−';
                }

                .bepAccordion .card-body {
                    padding: 20px;
                    color: #666;
                    line-height: 1.8;
                }

                @media (max-width: 576px) {
                    .bepAccordion .card-body {
                        padding: 15px;
                        font-size: 14px;
                    }
                }

                .teamSection01.abtmPad {
                    padding: 60px 0;
                }

                .teamSection01 .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .teamSection01 .col-lg-4 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 30px;
                }

                @media (min-width: 768px) {
                    .teamSection01 .col-md-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }

                @media (min-width: 992px) {
                    .teamSection01 .col-lg-4 {
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                    }
                }

                .team_01 {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }

                .team_01:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                }

                .team_01 .tm_thumb {
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                }

                .team_01 .tm_thumb img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                @media (max-width: 576px) {
                    .team_01 .tm_thumb img {
                        height: 220px;
                    }
                }

                .team_01 .tm_social {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.7);
                    padding: 12px;
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    transform: translateY(100%);
                    transition: all 0.3s ease;
                }

                .team_01:hover .tm_social {
                    transform: translateY(0);
                }

                .team_01 .tm_social a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .team_01 .tm_social a:hover {
                    color: #bb0b0b;
                }

                @media (max-width: 576px) {
                    .team_01 .tm_social a {
                        font-size: 12px;
                    }
                    .team_01 .tm_social a i {
                        font-size: 14px;
                    }
                }

                .team_01 h3 {
                    font-size: 18px;
                    margin: 15px 0 5px;
                }

                .team_01 h3 a {
                    color: #0a1922;
                    text-decoration: none;
                }

                .team_01 h3 a:hover {
                    color: #bb0b0b;
                }

                .team_01 p {
                    color: #999;
                    font-size: 14px;
                }

                .testimonialSection02.abTest01 {
                    padding: 60px 0;
                    background: #f8f9fa;
                }

                .testiItem02 {
                    background: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
                }

                @media (max-width: 576px) {
                    .testiItem02 {
                        padding: 20px;
                    }
                }

                .testiItem02 .quote img {
                    width: 60px;
                    height: auto;
                    margin: 0 auto 15px;
                }

                .testiItem02 .quotation {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.8;
                    font-style: italic;
                    max-width: 800px;
                    margin: 0 auto 20px;
                }

                @media (max-width: 576px) {
                    .testiItem02 .quotation {
                        font-size: 14px;
                    }
                }

                .testiItem02 .ts_author h5 {
                    font-size: 18px;
                    color: #0a1922;
                    margin: 0;
                }

                .testiItem02 .ts_author h5 span {
                    color: #999;
                    font-weight: 400;
                }

                @media (max-width: 576px) {
                    .testiItem02 .ts_author h5 {
                        font-size: 16px;
                    }
                }

                .clientSection03 {
                    padding: 50px 0;
                }

                .client-slider .owl-stage {
                    display: flex;
                    align-items: center;
                }

                .client-slider a {
                    display: block;
                    text-align: center;
                }

                .client-slider img {
                    max-height: 80px;
                    width: auto;
                    margin: 0 auto;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                    filter: grayscale(0.5);
                }

                .client-slider img:hover {
                    opacity: 1;
                    filter: grayscale(0);
                }

                @media (max-width: 576px) {
                    .client-slider img {
                        max-height: 50px;
                    }
                }

                /* Page Banner Responsive */
                .page_banner {
                    min-height: 350px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-position: center top !important;
                    background-size: cover !important;
                }

                @media (max-width: 768px) {
                    .page_banner {
                        min-height: 280px !important;
                        background-size: cover !important;
                    }
                }

                @media (max-width: 576px) {
                    .page_banner {
                        min-height: 220px !important;
                    }
                }

                .page_banner .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.4);
                    z-index: 1;
                }

                .page_banner .container {
                    position: relative;
                    z-index: 2;
                }

                .page_banner .banner-title {
                    color: #fff;
                    font-size: 48px;
                    font-weight: 700;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }

                @media (max-width: 768px) {
                    .page_banner .banner-title {
                        font-size: 34px;
                    }
                }

                @media (max-width: 576px) {
                    .page_banner .banner-title {
                        font-size: 26px;
                    }
                }

                /* General responsive fixes */
                .container.largeContainer {
                    padding-left: 15px;
                    padding-right: 15px;
                }

                @media (min-width: 1200px) {
                    .container.largeContainer {
                        max-width: 1200px;
                    }
                }

                @media (min-width: 1400px) {
                    .container.largeContainer {
                        max-width: 1320px;
                    }
                }

                .secTitle {
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #0a1922;
                    margin-bottom: 12px;
                }

                @media (max-width: 768px) {
                    .secTitle {
                        font-size: 28px;
                    }
                }

                @media (max-width: 576px) {
                    .secTitle {
                        font-size: 22px;
                    }
                }

                .subTitle {
                    font-size: 16px;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    color: #bb0b0b;
                    font-weight: 600;
                    margin-bottom: 6px;
                }

                @media (max-width: 576px) {
                    .subTitle {
                        font-size: 12px;
                        letter-spacing: 1.5px;
                    }
                }

                .berpo_btn {
                    display: inline-block;
                    background: #bb0b0b;
                    color: #ffffff;
                    font-weight: 600;
                    padding: 12px 35px;
                    border-radius: 50px;
                    font-size: 15px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    text-decoration: none;
                }

                .berpo_btn:hover {
                    background: #9e0909;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
                    color: #fff;
                    text-decoration: none;
                }

                @media (max-width: 576px) {
                    .berpo_btn {
                        padding: 10px 25px;
                        font-size: 13px;
                    }
                }

                .listItem {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 28px;
                }

                .listItem li {
                    padding: 8px 0;
                    font-size: 16px;
                    color: #4a4a62;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .listItem li i {
                    color: #bb0b0b;
                    font-size: 18px;
                }

                @media (max-width: 576px) {
                    .listItem li {
                        font-size: 14px;
                        padding: 6px 0;
                    }
                }

                .berpo_btn .bp-shape {
                    display: none;
                }

                .berpo_btn .bp-text {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .berpo_btn .bp-text i {
                    transition: all 0.3s ease;
                }

                .berpo_btn:hover .bp-text i {
                    transform: translateX(5px);
                }
            `}),(0,M.jsx)(`div`,{className:`overlay`}),(0,M.jsx)(`section`,{className:`page_banner`,style:{backgroundImage:`url(${ni})`,backgroundSize:`cover`,backgroundPosition:`center top`,backgroundRepeat:`no-repeat`,width:`100%`,minHeight:`250px`,margin:`top`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-md-12 text-center`,children:(0,M.jsx)(`h2`,{className:`banner-title`,children:`About Us`})})})})}),(0,M.jsx)(`section`,{className:`aboutPageSection01`,style:{padding:`60px 0`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsxs)(`div`,{className:`col-lg-5`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Who We Are`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`SGT Solutions for You Business`}),(0,M.jsx)(`p`,{style:{color:`#666`,lineHeight:`1.8`},children:`Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Innovative Approach Consultancy`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Flexibile Involvement Consultancy`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`twi-check-circle`}),`Personal Manager Consultancy`]})]}),(0,M.jsxs)(j,{className:`berpo_btn with_icon04`,to:`/service1`,children:[(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsx)(`span`,{className:`bp-shape`}),(0,M.jsxs)(`span`,{className:`bp-text`,children:[`Read More `,(0,M.jsx)(`i`,{className:`twi-arrow-right`})]})]})]}),(0,M.jsx)(`div`,{className:`col-lg-7`,children:(0,M.jsx)(`div`,{className:`abpageThumb`,style:{marginTop:`30px`},children:(0,M.jsx)(`img`,{src:`/assets/images/about/1.jpg`,alt:``,style:{width:`100%`,height:`auto`,borderRadius:`10px`}})})})]})})}),(0,M.jsx)(`section`,{className:`service_section_09`,style:{padding:`60px 0`,background:`#f8f9fa`},children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-xl-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Services`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Focus on Your Business`})]})}),(0,M.jsx)(`div`,{className:`row`,style:{marginTop:`30px`},children:a.map(e=>(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`service_item_10`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`img`,{src:`/assets/images/service/4.jpg`,alt:``})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description}),(0,M.jsx)(j,{className:`srm`,to:e.link,children:(0,M.jsx)(`i`,{className:`twi-arrow-right1`})})]})},e.id))})]})}),(0,M.jsx)(`section`,{className:`abvideoSection videoSection01`,style:{padding:`60px 0`,background:`#f0f1f5`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`We Have added a new exciting feature in v2.0`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Organizations Realize the Benefits `,(0,M.jsx)(`br`,{}),` Forming Work Teams.`]}),(0,M.jsx)(`a`,{href:`https://player.vimeo.com/video/213907368?h=3685456d6c`,className:`popup_video vbtn02`,children:(0,M.jsx)(`i`,{className:`bpro-play`})})]})})})}),(0,M.jsx)(`section`,{className:`abFa1Section`,style:{padding:`60px 0`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsx)(`div`,{className:`col-lg-6`,children:(0,M.jsxs)(`div`,{className:`fqArea`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Just a Consultancy`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Bepro FAQ`}),(0,M.jsx)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:c.map((e,t)=>(0,M.jsx)(`div`,{className:`card ${n===e.id?`activeBg`:``}`,children:(0,M.jsxs)(`div`,{className:`faqInner`,children:[(0,M.jsx)(`div`,{className:`card-header`,id:`ma_ac_${t+1}`,children:(0,M.jsx)(`h2`,{className:`mb-0`,children:(0,M.jsxs)(`button`,{type:`button`,onClick:()=>i(e.id),className:n===e.id?``:`collapsed`,"aria-expanded":n===e.id,children:[(0,M.jsxs)(`i`,{children:[t+1,`.`]}),` `,e.question,(0,M.jsx)(`span`,{})]})})}),(0,M.jsx)(`div`,{id:e.id,className:`collapse ${n===e.id?`show`:``}`,"aria-labelledby":`ma_ac_${t+1}`,"data-parent":`#befAccordion01`,children:(0,M.jsx)(`div`,{className:`card-body`,children:e.answer})})]})},e.id))})]})}),(0,M.jsx)(`div`,{className:`col-lg-6`,children:(0,M.jsxs)(`div`,{className:`fqArea`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Just a Consultancy`}),(0,M.jsx)(`h2`,{className:`secTitle`,children:`Bepro FAQ`}),(0,M.jsx)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:c.map((e,t)=>(0,M.jsx)(`div`,{className:`card ${n===e.id?`activeBg`:``}`,children:(0,M.jsxs)(`div`,{className:`faqInner`,children:[(0,M.jsx)(`div`,{className:`card-header`,id:`ma_ac_${t+1}`,children:(0,M.jsx)(`h2`,{className:`mb-0`,children:(0,M.jsxs)(`button`,{type:`button`,onClick:()=>i(e.id),className:n===e.id?``:`collapsed`,"aria-expanded":n===e.id,children:[(0,M.jsxs)(`i`,{children:[t+1,`.`]}),` `,e.question,(0,M.jsx)(`span`,{})]})})}),(0,M.jsx)(`div`,{id:e.id,className:`collapse ${n===e.id?`show`:``}`,"aria-labelledby":`ma_ac_${t+1}`,"data-parent":`#befAccordion01`,children:(0,M.jsx)(`div`,{className:`card-body`,children:e.answer})})]})},e.id))})]})})]})})}),(0,M.jsx)(`section`,{className:`teamSection01 abtmPad`,style:{padding:`60px 0`},children:(0,M.jsxs)(`div`,{className:`container largeContainer`,children:[(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Members`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Meet Our Latest `,(0,M.jsx)(`br`,{}),` Team Member`]})]})}),(0,M.jsx)(`div`,{className:`row`,style:{marginTop:`30px`},children:o.map(e=>(0,M.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,M.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,M.jsxs)(`div`,{className:`tm_thumb`,children:[(0,M.jsx)(`img`,{src:`/assets/images/team/1.jpg`,alt:e.name}),(0,M.jsxs)(`div`,{className:`tm_social`,children:[(0,M.jsxs)(`a`,{href:`https://www.facebook.com/`,children:[(0,M.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,M.jsxs)(`a`,{href:`https://twitter.com/`,children:[(0,M.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,M.jsxs)(`a`,{href:`https://linkedin.com/`,children:[(0,M.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/single-team`,children:e.name})}),(0,M.jsx)(`p`,{children:e.role})]})},e.id))})]})}),(0,M.jsx)(`section`,{className:`testimonialSection02 abTest01`,style:{padding:`60px 0`,background:`#f8f9fa`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-md-12`,children:(0,M.jsx)(`div`,{className:`testimonialslider02 owl-carousel`,ref:e,children:s.map(e=>(0,M.jsxs)(`div`,{className:`testiItem02`,children:[(0,M.jsx)(`div`,{className:`quote`,children:(0,M.jsx)(`img`,{src:`/assets/images/home2/quote.jpg`,alt:``})}),(0,M.jsx)(`img`,{src:`/assets/images/home2/t1.jpg`,alt:``,style:{width:`80px`,height:`80px`,borderRadius:`50%`,margin:`0 auto 15px`,objectFit:`cover`}}),(0,M.jsx)(`p`,{className:`quotation`,children:e.text}),(0,M.jsx)(`div`,{className:`ts_author`,children:(0,M.jsxs)(`h5`,{children:[e.author,`, `,(0,M.jsx)(`span`,{children:e.role})]})})]},e.id))})})})})}),(0,M.jsx)(`section`,{className:`clientSection03`,style:{padding:`50px 0`},children:(0,M.jsx)(`div`,{className:`container largeContainer`,children:(0,M.jsx)(`div`,{className:`row`,children:(0,M.jsx)(`div`,{className:`col-lg-12`,children:(0,M.jsx)(`div`,{className:`client-slider owl-carousel`,ref:t,children:[1,2,3,4].map((e,t)=>(0,M.jsx)(`a`,{href:`javascript:void(0);`,children:(0,M.jsx)(`img`,{src:`/assets/images/client-logo/${9+t}.png`,alt:``})},t))})})})})})]})},ii=`/assets/hero-DgRPCpe5.jpg`,ai=[{id:1,icon:`fa-layer-group`,title:`Interactive Map Portals`,description:`Custom web maps with pan, zoom, layer toggles, pop-up attributes, and search functionality — intuitive for non-GIS users.`,image:`/assets/feature1-Bl4SD_ju.jpg`,link:`/services/web-gis/map-portals`},{id:2,icon:`fa-database`,title:`Spatial Data Publishing`,description:`Publish shapefiles, GeoJSON, rasters, and tile layers as OGC compliant WMS, WMTS, WFS, or vector tiles. Seamless integration.`,image:`/assets/feature2-DPfWt-B_.jpg`,link:`/services/web-gis/data-publishing`},{id:3,icon:`fa-draw-polygon`,title:`Feature Editing & Data Collection`,description:`Web-based digitizing, form-based attribute entry, and geometry editing — perfect for collaborative mapping projects.`,image:`/assets/feature3-CeMU6MKg.jpg`,link:`/services/web-gis/feature-editing`},{id:4,icon:`fa-chart-simple`,title:`Location Analytics Dashboards`,description:`Combine maps with charts, filters, and summary statistics. Identify hotspots, clusters, and spatial patterns at a glance.`,image:`/assets/feature4-SxWOx2Ne.jpg`,link:`/services/web-gis/analytics`},{id:5,icon:`fa-route`,title:`Routing & Geocoding`,description:`Address search, reverse geocoding, point-to-point routing, and isochrone analysis — turn locations into insights.`,image:`/assets/feature5-CTLZyLTK.jpg`,link:`/services/web-gis/routing`},{id:6,icon:`fa-users`,title:`Multi-User & Role-Based Access`,description:`Secure login, user roles, and data-level permissions. Share sensitive layers only with authorized teams.`,image:`/assets/feature6-DIdTjqpR.png`,link:`/services/web-gis/access-control`}],oi=[{id:1,title:`Italic Mountains, she had a last view back`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Styles come and go. Design language not a style.`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Dharma Home Suites at Novia offers fully`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],si=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`portals`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${ii}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

      .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

    .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
      
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,M.jsx)(`br`,{}),`Web GIS Spatial Data Platforms`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Interactive mapping portals, location intelligence dashboards, and geospatial data publishing — put your maps and analysis in the hands of every stakeholder, anywhere.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Start Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Web GIS Features`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Maps That Work `,(0,M.jsx)(`span`,{children:`Across`}),` Your Organization`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Web GIS transforms static spatial data into dynamic, interactive experiences. We build custom web mapping platforms that enable data visualization, querying, editing, and collaboration — accessible on desktop, tablet, and mobile without any GIS software required.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:ai.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Web GIS `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With over 7 years of expertise, we deliver innovative Web GIS solutions that empower organizations to make data-driven decisions through interactive mapping.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom interactive map portals`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Real-time spatial data publishing`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Location intelligence dashboards`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Multi-user collaboration tools`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Consultation`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`50`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Web GIS Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Tailored `,(0,M.jsx)(`span`,{children:`Web GIS`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`portals`?`active`:``}`,onClick:()=>r(`portals`),children:`Map Portals`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`analytics`?`active`:``}`,onClick:()=>r(`analytics`),children:`Analytics`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`collaboration`?`active`:``}`,onClick:()=>r(`collaboration`),children:`Collaboration`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`portals`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Interactive `,(0,M.jsx)(`span`,{children:`Map Portals`})]}),(0,M.jsx)(`p`,{children:`Custom web maps with intuitive navigation, layer management, and powerful search capabilities — making GIS accessible to everyone in your organization.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your Portal`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Map Portals`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`analytics`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Location `,(0,M.jsx)(`span`,{children:`Analytics`})]}),(0,M.jsx)(`p`,{children:`Combine maps with interactive charts, filters, and summary statistics. Identify spatial patterns, clusters, and trends with dynamic location intelligence dashboards.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore Analytics`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Analytics`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`collaboration`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Collaborative `,(0,M.jsx)(`span`,{children:`Mapping`})]}),(0,M.jsx)(`p`,{children:`Enable teams to work together with role-based access, shared data layers, and real-time editing capabilities — secure and scalable for enterprise needs.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Collaborating`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Collaboration`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`GIS News`})]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:oi.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Web GIS`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your spatial data into interactive web platforms?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start a Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Web GIS Project`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Start Your `,(0,M.jsx)(`span`,{children:`Project`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your spatial data, target users, required functionality, and timeline.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A Web GIS specialist will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your Web GIS requirements...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},ci=[{id:1,icon:`fa-draw-polygon`,title:`Offline-first Data Capture`,description:`Collect points, lines, and polygons without cellular signal. Vector editing, custom forms, and rich media attachments sync automatically when back online.`,image:kr,link:`/services/mobile-gis/data-capture`},{id:2,icon:`fa-satellite-dish`,title:`High-Accuracy GNSS Integration`,description:`Connect to external Bluetooth GNSS receivers (Trimble, Eos, Bad Elf) for sub-meter to centimeter accuracy. Real-time SBAS/RTK corrections.`,image:Ar,link:`/services/mobile-gis/gnss`},{id:3,icon:`fa-cloud-upload-alt`,title:`Live Dashboards & Sync`,description:`Field edits appear on HQ maps in near real-time. ArcGIS Online, QGIS Cloud, or custom PostGIS – we set up seamless data pipelines.`,image:jr,link:`/services/mobile-gis/sync`},{id:4,icon:`fa-clipboard-list`,title:`Smart Forms & Inspection`,description:`Dynamic dropdowns, conditional logic, photo geotagging, and barcode scanning. Replace paper forms with structured GIS-ready records.`,image:kr,link:`/services/mobile-gis/forms`},{id:5,icon:`fa-route`,title:`Asset Management & Maintenance`,description:`Utility poles, signs, hydrants, manholes – schedule field inspections, track condition, and generate work orders directly from the map.`,image:Ar,link:`/services/mobile-gis/asset-management`},{id:6,icon:`fa-charging-station`,title:`Electric & Fiber Corridor Mapping`,description:`Mobile GIS for pole attachment surveys, vegetation risk, and as-built verification. Export reports in CSV, GeoJSON, or DXF.`,image:jr,link:`/services/mobile-gis/corridor-mapping`}],li=[{id:1,title:`Offline GIS: Data Collection in Remote Areas`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`High-Accuracy GNSS for Mobile GIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Asset Management with Mobile GIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],ui=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`capture`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .secTitle span {
          color: #bb0b0b;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Qr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          padding: px 20px 28px;
          text-align: center;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
      
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -55px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`hero-icon`}),(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,M.jsx)(`br`,{}),`Mobile GIS Field Intelligence`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Enterprise-grade mobile mapping, real-time data collection, and offline GIS intelligence — empower crews with rugged apps, high-accuracy GNSS, and cloud-sync dashboards.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Get Mobile GIS Solution `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Mobile GIS Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`GIS that `,(0,M.jsx)(`span`,{children:`Moves`}),` with You`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`From asset inspection to environmental compliance, our Mobile GIS solutions combine professional field apps, high-precision receivers, and centralised geodatabases. Capture, edit, analyze and sync – all from a tablet or smartphone, even in remote areas.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:ci.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Mobile GIS `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Empowering field teams with cutting-edge mobile GIS technology for efficient data collection, asset management, and real-time decision making.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Offline-first data capture`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` High-accuracy GNSS integration`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Live dashboards & sync`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Smart forms & inspections`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Mobile GIS Solution`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`75`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Mobile GIS Deployments`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Mobile `,(0,M.jsx)(`span`,{children:`GIS`}),` Capabilities`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`capture`?`active`:``}`,onClick:()=>r(`capture`),children:`Data Capture`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`gnss`?`active`:``}`,onClick:()=>r(`gnss`),children:`GNSS Integration`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`sync`?`active`:``}`,onClick:()=>r(`sync`),children:`Sync & Dashboards`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`capture`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Offline `,(0,M.jsx)(`span`,{children:`Data Capture`})]}),(0,M.jsx)(`p`,{children:`Collect points, lines, and polygons without cellular signal. Vector editing, custom forms, and rich media attachments sync automatically when back online.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Data Capture`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Data Capture`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`gnss`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`GNSS `,(0,M.jsx)(`span`,{children:`Integration`})]}),(0,M.jsx)(`p`,{children:`Connect to external Bluetooth GNSS receivers (Trimble, Eos, Bad Elf) for sub-meter to centimeter accuracy. Real-time SBAS/RTK corrections.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Integrate GNSS`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`GNSS`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`sync`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Sync `,(0,M.jsx)(`span`,{children:`& Dashboards`})]}),(0,M.jsx)(`p`,{children:`Field edits appear on HQ maps in near real-time. ArcGIS Online, QGIS Cloud, or custom PostGIS – we set up seamless data pipelines.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Set Up Sync`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Sync`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Mobile GIS`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:li.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Mobile GIS`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your field operations with cutting-edge mobile GIS technology?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Mobile GIS Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Mobile GIS Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Mobile GIS Solution`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your field data needs, team size, and existing GIS environment.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A mobile GIS specialist will reach out to ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Describe field project / number of users / required features...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},di=`/assets/bg-DDGF64Mj.jpeg`,fi=[{id:1,icon:`fa-building`,title:`GIS-based Property & Asset Mapping`,description:`Geo-referenced spatial data for buildings, roads, water connections, and tax properties with centimeter-level accuracy.`,image:`/assets/1-BQPgkcq3.jpg`,link:`/services/sris/mapping`},{id:2,icon:`fa-sync-alt`,title:`Real-time Data Synchronization`,description:`Seamless sync between field surveys and central database — live updates for administrators.`,image:`/assets/2-BpURO98-.jpg`,link:`/services/sris/sync`},{id:3,icon:`fa-mobile-alt`,title:`Mobile Field Collection & Verification`,description:`Field teams collect, validate, and update asset data using offline-capable mobile GIS apps.`,image:`/assets/3-C9GTnL62.jpg`,link:`/services/sris/mobile`},{id:4,icon:`fa-chart-simple`,title:`Property Tax Assessment & Monitoring`,description:`Spatial intelligence for accurate tax calculation, revenue leakage detection, and trend analysis.`,image:`/assets/4-DY9bmiID.jpeg`,link:`/services/sris/tax`},{id:5,icon:`fa-search-location`,title:`Detection of Unassessed Properties`,description:`AI-assisted detection of unassessed, under-assessed, and unauthorized properties using imagery & algorithms.`,image:`/assets/5-Cf3UAv2a.jpg`,link:`/services/sris/detection`},{id:6,icon:`fa-tint`,title:`Water Connection & Revenue Tracking`,description:`Map every water connection, track billing status, and identify defaulters via spatial dashboards.`,image:`/assets/6-BIowGroB.jpg`,link:`/services/sris/water`}],pi=[{id:1,title:`GIS for Municipal Revenue Management`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Smart City Asset Mapping with SRIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Property Tax Optimization Using Spatial Data`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],mi=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`mapping`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* Same CSS as WebGis.jsx - Copy the entire style block from WebGis.jsx */
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${di}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

     .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        .section-padding {
          padding: 70px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: 1fr; }
          .achievement-wrap { flex-direction: column; }
          .cta-wrap { flex-direction: column; }
          .tab-content-inner { flex-direction: column; }
          .secTitle { font-size: 32px; }
          .hero-title { font-size: 36px; }
          .service_item_01 .siThumb { height: 180px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section-padding { padding: 50px 0; }
          .secTitle { font-size: 26px; }
          .subTitle { font-size: 11px; letter-spacing: 1.8px; }
          .hero-title { font-size: 28px; }
          .hero-description { font-size: 16px; }
          .hero-section { padding: 80px 0 60px; }
          .service-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 150px; }
          .service_item_01 .sitem_con { padding: 16px 14px 20px; }
          .service_item_01 h3 { font-size: 16px; }
          .service_item_01 p { font-size: 13px; }
          .service_item_01 .ibMeta { width: 50px; height: 50px; font-size: 20px; margin: -30px auto 12px; }
          .client-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .blog-grid { grid-template-columns: 1fr; }
          .beproTab .nav-link { padding: 8px 18px; font-size: 13px; }
          .client-badge { position: relative; bottom: auto; right: auto; margin-top: -20px; padding: 16px 20px; }
          .client-badge h2 { font-size: 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content h3 { font-size: 26px; }
          .cta-content h4 { font-size: 18px; }
          .berpo_btn { padding: 12px 28px; font-size: 14px; }
          .testiItem01 { padding: 20px 18px; }
          .accordion-header { font-size: 14px; padding: 14px 16px; }
          .accordion-body { font-size: 14px; padding: 0 16px 16px; }
          .ts_author img { width: 50px; height: 50px; }
          .team_01 { padding: 14px 10px; }
          .team_01 h3 { font-size: 15px; }
          .tm_social a { width: 32px; height: 32px; font-size: 12px; }
          .blogContent h3 { font-size: 16px; }
          .modal-content { padding: 24px; }
        }

        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 200px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .client-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .secTitle { font-size: 22px; }
          .hero-title { font-size: 24px; }
          .beproTab .nav-link { padding: 6px 14px; font-size: 12px; }
          .berpo_btn { padding: 10px 22px; font-size: 13px; }
          .testimonial-grid { gap: 20px; }
          .cta-content h2 { font-size: 28px; }
          .cta-content h3 { font-size: 22px; }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,M.jsx)(`br`,{}),`Spatial Revenue Intelligence System`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`The Spatial Revenue Intelligent System (SRIS) is a smart digital Web GIS platform developed for efficient mapping and management of municipal properties. It enables real-time visualization, monitoring, and spatial analysis of assets such as buildings, roads, water connections, tax properties, Professional Tax and UGD through an interactive map-based system.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request SRIS Demo `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`SRIS Features`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Intelligent GIS for `,(0,M.jsx)(`span`,{children:`Urban Governance`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`SRIS empowers local bodies with a unified geospatial framework for asset inventory, revenue monitoring, and smart decision-making. From property tax to underground drainage, every asset is mapped, tracked, and analyzed.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:fi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`SRIS `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Deploying SRIS across municipalities to transform revenue management, asset tracking, and citizen services through spatial intelligence.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` GIS-based property & asset mapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Real-time data synchronization`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Mobile field collection & verification`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Property tax assessment & monitoring`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Demo`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`150`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Municipal Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`SRIS `,(0,M.jsx)(`span`,{children:`Capabilities`})]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`mapping`?`active`:``}`,onClick:()=>r(`mapping`),children:`Asset Mapping`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`tax`?`active`:``}`,onClick:()=>r(`tax`),children:`Tax Assessment`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`analytics`?`active`:``}`,onClick:()=>r(`analytics`),children:`Analytics`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`mapping`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Asset `,(0,M.jsx)(`span`,{children:`Mapping`})]}),(0,M.jsx)(`p`,{children:`Comprehensive GIS-based mapping of all municipal assets including buildings, roads, water connections, and tax properties with centimeter-level accuracy.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Asset Mapping`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Asset Mapping`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`tax`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Tax `,(0,M.jsx)(`span`,{children:`Assessment`})]}),(0,M.jsx)(`p`,{children:`Accurate property tax calculation, revenue leakage detection, and trend analysis using spatial intelligence and AI-assisted property detection.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Optimize Tax Assessment`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Tax Assessment`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`analytics`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Analytics `,(0,M.jsx)(`span`,{children:`Dashboards`})]}),(0,M.jsx)(`p`,{children:`Interactive dashboards for ward-wise and zone-wise revenue analysis, collection efficiency, and trend insights with automated MIS reporting.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore Analytics`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Analytics`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`SRIS`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:pi.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`SRIS Platform`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your municipality's revenue management with spatial intelligence?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your SRIS Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`SRIS Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Demo`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your municipality, number of properties, and revenue management goals.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A SRIS specialist will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your municipality, number of properties, and revenue management goals...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},hi=`/assets/bg-tfFuNz7g.png`,gi=[{id:1,icon:`fa-cubes`,title:`LiDAR Point Cloud Acquisition`,description:`High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimeter accuracy.`,image:`/assets/1-CpdhnZ08.jpg`,link:`/services/lidar/acquisition`},{id:2,icon:`fa-layer-group`,title:`DEM / DTM Generation`,description:`High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modeling, and engineering design.`,image:`/assets/2-0-zKrHED.jpg`,link:`/services/lidar/dem`},{id:3,icon:`fa-tree`,title:`Vegetation & Canopy Analysis`,description:`Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.`,image:`/assets/3-CXwU9Bui.png`,link:`/services/lidar/vegetation`},{id:4,icon:`fa-building`,title:`3D Building & Infrastructure Modeling`,description:`Detailed 3D building models, infrastructure extraction, and city-scale digital twins from LiDAR point clouds.`,image:`/assets/4-BVea3rfk.jpg`,link:`/services/lidar/building`},{id:5,icon:`fa-chart-line`,title:`Change Detection & Monitoring`,description:`Multi-temporal LiDAR analysis for terrain change detection, erosion monitoring, and infrastructure deformation tracking.`,image:`/assets/5-K-Mi1vd2.jpg`,link:`/services/lidar/change-detection`},{id:6,icon:`fa-water`,title:`Bathymetric & Hydrographic LiDAR`,description:`Near-shore bathymetric surveys and hydrographic mapping using green-wavelength LiDAR systems for coastal and inland water bodies.`,image:`/assets/6-BHhk9L4f.png`,link:`/services/lidar/bathymetric`}],_i=[{id:1,title:`LiDAR Technology: A Comprehensive Guide`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`From Point Clouds to 3D Models`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`LiDAR Applications in Forestry`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],vi=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`acquisition`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${hi}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

   .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,M.jsx)(`br`,{}),`LiDAR Point Cloud Solutions`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`High-density point clouds, DEM/DTM generation, vegetation analysis, and 3D infrastructure modeling — precision LiDAR solutions for engineering, forestry, and environmental monitoring.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request LiDAR Quote `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`LiDAR Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Precision Point Cloud `,(0,M.jsx)(`span`,{children:`Intelligence`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`LiDAR technology captures millions of precise 3D points per second, creating detailed digital representations of terrain, vegetation, buildings, and infrastructure. Our end-to-end LiDAR solutions deliver actionable geospatial intelligence for any project scale.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:gi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`LiDAR `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision LiDAR solutions for topographic mapping, forestry management, urban planning, and environmental monitoring projects of any scale.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Point cloud acquisition`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` DEM / DTM generation`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Vegetation & canopy analysis`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` 3D building & infrastructure modeling`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a LiDAR Quote`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`90`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`LiDAR Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`LiDAR`}),` Capabilities`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`acquisition`?`active`:``}`,onClick:()=>r(`acquisition`),children:`Point Cloud`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`dem`?`active`:``}`,onClick:()=>r(`dem`),children:`DEM / DTM`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`vegetation`?`active`:``}`,onClick:()=>r(`vegetation`),children:`Vegetation`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`acquisition`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Point Cloud `,(0,M.jsx)(`span`,{children:`Acquisition`})]}),(0,M.jsx)(`p`,{children:`High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimeter accuracy.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Point Cloud`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Point Cloud`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`dem`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`DEM / DTM `,(0,M.jsx)(`span`,{children:`Generation`})]}),(0,M.jsx)(`p`,{children:`High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modeling, and engineering design.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request DEM / DTM`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`DEM`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`vegetation`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Vegetation `,(0,M.jsx)(`span`,{children:`Analysis`})]}),(0,M.jsx)(`p`,{children:`Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Vegetation Analysis`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Vegetation`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`LiDAR`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:_i.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`LiDAR Solutions`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Point Cloud`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your projects with precision LiDAR point cloud intelligence?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your LiDAR Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`LiDAR Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`LiDAR Quote`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A LiDAR specialist will contact ${n} within 24h with portfolio examples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},yi=`/assets/bg-BAtan9OV.png`,bi=[{id:1,icon:`fa-drone`,title:`UAV / Drone Photogrammetry`,description:`High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights. Capture large areas with centimeter-level accuracy.`,image:`/assets/1-0gHS_8a0.jpg`,link:`/services/photogrammetry/uav`},{id:2,icon:`fa-plane`,title:`Manned Aerial Mapping`,description:`Large-area coverage with fixed-wing aircraft and metric cameras. Ideal for regional mapping and extensive corridor surveys.`,image:`/assets/2-CtS7WA57.jpg`,link:`/services/photogrammetry/aerial`},{id:3,icon:`fa-mobile-alt`,title:`Close-Range & Terrestrial`,description:`Facade mapping, heritage documentation, and crime scene reconstruction using ground-based photogrammetry techniques.`,image:`/assets/3-CYDRzOei.jpg`,link:`/services/photogrammetry/terrestrial`},{id:4,icon:`fa-map`,title:`Orthomosaics & Orthophotos`,description:`Geometrically corrected, seamless image mosaics with true orthorectification. Georeferenced and ready for GIS integration.`,image:`/assets/4-CV5mTFlq.jpg`,link:`/services/photogrammetry/orthomosaics`},{id:5,icon:`fa-cubes`,title:`3D Mesh & Textured Models`,description:`Photo-realistic 3D models for digital twins, volume visualization, and immersive stakeholder presentations.`,image:`/assets/5-BePij3Xd.jpg`,link:`/services/photogrammetry/3d-models`},{id:6,icon:`fa-chart-line`,title:`Contour & Volumetric Analysis`,description:`Generate contours from photogrammetric DSMs and compute cut/fill volumes for earthworks and mining applications.`,image:`/assets/6-BS7QdmDL.jpg`,link:`/services/photogrammetry/analysis`}],xi=[{id:1,title:`Drone Photogrammetry: A Complete Guide`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`From Images to 3D Models: The Workflow`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Orthomosaic Generation Best Practices`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],Si=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`uav`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${yi}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

     .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

  .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,M.jsx)(`br`,{}),`Photogrammetry 3D from Images`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Turn millions of overlapping images into geospatially-accurate 3D models, orthomosaics, and digital surface models — drone, aerial, and terrestrial photogrammetry for any project scale.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request Photogrammetry Quote `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Photogrammetry Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`From Pixels to `,(0,M.jsx)(`span`,{children:`Precision`}),` Geospatial Data`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Photogrammetry extracts 3D measurements and realistic textures from standard digital imagery. Our end-to-end pipeline delivers survey-grade outputs at a fraction of traditional surveying costs.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:bi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Photogrammetry `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision photogrammetry products for infrastructure, mining, heritage documentation, and environmental monitoring projects of any scale.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` UAV / Drone photogrammetry`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Manned aerial mapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Close-range & terrestrial`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` 3D mesh & textured models`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Photogrammetry Quote`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`120`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Photogrammetry Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Photogrammetry`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`uav`?`active`:``}`,onClick:()=>r(`uav`),children:`UAV / Drone`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`ortho`?`active`:``}`,onClick:()=>r(`ortho`),children:`Orthomosaics`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`3d`?`active`:``}`,onClick:()=>r(`3d`),children:`3D Models`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`uav`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`UAV / Drone `,(0,M.jsx)(`span`,{children:`Photogrammetry`})]}),(0,M.jsx)(`p`,{children:`High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights. Capture large areas with centimeter-level accuracy.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request UAV Survey`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`UAV`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`ortho`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Orthomosaics `,(0,M.jsx)(`span`,{children:`& Orthophotos`})]}),(0,M.jsx)(`p`,{children:`Geometrically corrected, seamless image mosaics with true orthorectification. Georeferenced and ready for GIS integration.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Orthomosaic`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Orthomosaic`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`3d`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`3D Mesh `,(0,M.jsx)(`span`,{children:`& Textured Models`})]}),(0,M.jsx)(`p`,{children:`Photo-realistic 3D models for digital twins, volume visualization, and immersive stakeholder presentations.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request 3D Modeling`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`3D Models`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Photogrammetry`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:xi.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Photogrammetry`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your imagery into actionable 3D geospatial data?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Photogrammetry Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Photogrammetry Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Photogrammetry Quote`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A photogrammetry specialist will contact ${n} within 24h with portfolio examples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},Ci=`/assets/bg-Ce-cBZuz.png`,wi=[{id:1,icon:`fa-chart-line`,title:`RTK/PPK Drone Surveys`,description:`Real-time kinematic and post-processed kinematic drones eliminate ground control points. Achieve 2 cm horizontal & 3 cm vertical accuracy for large-scale mapping.`,image:`/assets/1-XdgkSC04.png`,link:`/services/drone-survey/rtk`},{id:2,icon:`fa-cubes`,title:`LiDAR & Photogrammetry`,description:`High-density point clouds, 3D mesh models, and orthomosaics. Penetrate vegetation with drone LiDAR for topographic surveys under canopy.`,image:`/assets/2-AKLG0xV8.jpg`,link:`/services/drone-survey/lidar`},{id:3,icon:`fa-satellite-dish`,title:`DGPS Ground Control`,description:`Network RTK, static GNSS, and real-time corrections using Trimble, Leica, or Eos receivers. Establish survey monuments with millimeter precision.`,image:`/assets/3-mHMN5b26.jpg`,link:`/services/drone-survey/dgps`},{id:4,icon:`fa-mountain`,title:`Volume & Cut-Fill Analysis`,description:`Stockpile volumetrics, mine pit surveys, and construction earthwork calculations delivered as interactive 3D reports and GIS-ready surfaces.`,image:`/assets/4-C-_KpRyY.jpg`,link:`/services/drone-survey/volume`},{id:5,icon:`fa-border-all`,title:`Cadastral & Boundary`,description:`Legal boundary retracement, easement mapping, and ALTA/NSPS surveys using hybrid drone + rover methods for complex terrains.`,image:`/assets/5-BBdE6Ciz.jpg`,link:`/services/drone-survey/cadastral`},{id:6,icon:`fa-chart-pie`,title:`Inspection & Asset Mapping`,description:`Powerline sag, pipeline corridors, solar farm inspections, and infrastructure deformation monitoring with automated change detection.`,image:`/assets/6-UDWvs0Kz.png`,link:`/services/drone-survey/inspection`}],Ti=[{id:1,title:`RTK vs PPK: Which Drone Survey is Right for You?`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Drone LiDAR Applications in Forestry`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Volume Calculations from Drone Surveys`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],Ei=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`rtk`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Ci}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Drone & `,(0,M.jsx)(`span`,{children:`DGPS`}),` Survey`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Ultra-precise aerial & ground survey solutions — from UAV lidar to centimeter-level DGPS, delivering actionable geospatial data for engineering, mining, and land management.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request Drone Survey Quote `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Drone Survey Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Survey-grade Accuracy, `,(0,M.jsx)(`span`,{children:`Aerial`}),` Efficiency`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Combine the power of unmanned aerial systems with differential GPS to capture terrain models, stockpile volumes, cadastral boundaries, and infrastructure as-builts. Our drone + DGPS workflows reduce field time by 70% while achieving 1–3 cm absolute accuracy.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:wi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Drone Survey `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With advanced drone and DGPS capabilities, we deliver precision survey data for infrastructure, mining, and land management projects of any scale.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` RTK/PPK drone surveys`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` LiDAR & photogrammetry`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Volume & cut-fill analysis`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Cadastral boundary surveys`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Survey Quote`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`200`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Survey Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Survey`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`rtk`?`active`:``}`,onClick:()=>r(`rtk`),children:`RTK/PPK`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`lidar`?`active`:``}`,onClick:()=>r(`lidar`),children:`LiDAR`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`volume`?`active`:``}`,onClick:()=>r(`volume`),children:`Volume Analysis`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`rtk`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`RTK/PPK `,(0,M.jsx)(`span`,{children:`Drone Surveys`})]}),(0,M.jsx)(`p`,{children:`Real-time kinematic and post-processed kinematic drones eliminate ground control points. Achieve 2 cm horizontal & 3 cm vertical accuracy for large-scale mapping projects.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request RTK Survey`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`RTK Survey`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`lidar`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Drone `,(0,M.jsx)(`span`,{children:`LiDAR`})]}),(0,M.jsx)(`p`,{children:`High-density point clouds, 3D mesh models, and orthomosaics. Penetrate vegetation with drone LiDAR for topographic surveys under canopy and complex terrain mapping.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request LiDAR Survey`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`LiDAR`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`volume`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Volume `,(0,M.jsx)(`span`,{children:`Analysis`})]}),(0,M.jsx)(`p`,{children:`Stockpile volumetrics, mine pit surveys, and construction earthwork calculations delivered as interactive 3D reports and GIS-ready surfaces for accurate planning.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Volume Analysis`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Volume Analysis`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Survey`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:Ti.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Drone Survey`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your survey projects with cutting-edge drone technology?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Survey`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Drone Survey Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Survey Quote`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A survey specialist will reply to ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your survey requirements, area size, and accuracy needs...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},Di=`/assets/bg-DdktAqtA.png`,Oi=[{id:1,icon:`fa-draw-polygon`,title:`Planimetric Mapping`,description:`Roads, buildings, water bodies, vegetation, and utility networks extracted from high-res imagery. Clean, editable vector layers for CAD and GIS.`,image:`/assets/1-C6y4QQ4L.png`,link:`/services/2d-mapping/planimetric`},{id:2,icon:`fa-chart-line`,title:`Topographic Contour Mapping`,description:`1m, 2m, or 5m contours derived from photogrammetry or LiDAR. Ideal for civil design, flood modeling, and site grading analysis.`,image:`/assets/2-DSsuTPGQ.jpg`,link:`/services/2d-mapping/topographic`},{id:3,icon:`fa-satellite-dish`,title:`Satellite & Aerial Orthomosaics`,description:`High-resolution seamless orthophotos (5cm to 50cm GSD) from drones, aircraft, or satellites. Georeferenced and ready for overlay.`,image:`/assets/3-2UF0ghBH.jpg`,link:`/services/2d-mapping/orthomosaics`},{id:4,icon:`fa-layer-group`,title:`Thematic & Land Use Mapping`,description:`Land cover classification, zoning maps, agricultural field boundaries, and environmental sensitivity layers — customized to your schema.`,image:`/assets/4-CY6BGpGR.jpg`,link:`/services/2d-mapping/thematic`},{id:5,icon:`fa-building`,title:`Infrastructure & Utility Mapping`,description:`Gas, water, electric, and telecom networks mapped as accurate 2D features with attribution (diameter, material, ownership).`,image:`/assets/5-B6w0wybs.png`,link:`/services/2d-mapping/infrastructure`},{id:6,icon:`fa-water`,title:`Hydrographic & Flood Mapping`,description:`River centerlines, floodplain extents, drainage networks, and wetland boundaries from imagery and field-verified data.`,image:`/assets/6-BOtm-IUS.jpg`,link:`/services/2d-mapping/hydrographic`}],ki=[{id:1,title:`The Art of Planimetric Mapping`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Topographic Mapping for Civil Design`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Land Use Classification Techniques`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],Ai=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`planimetric`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* Same CSS as WebGis.jsx - Copy the entire style block */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Di}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

   .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        .section-padding {
          padding: 70px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: 1fr; }
          .achievement-wrap { flex-direction: column; }
          .cta-wrap { flex-direction: column; }
          .tab-content-inner { flex-direction: column; }
          .secTitle { font-size: 32px; }
          .hero-title { font-size: 36px; }
          .service_item_01 .siThumb { height: 180px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section-padding { padding: 50px 0; }
          .secTitle { font-size: 26px; }
          .subTitle { font-size: 11px; letter-spacing: 1.8px; }
          .hero-title { font-size: 28px; }
          .hero-description { font-size: 16px; }
          .hero-section { padding: 80px 0 60px; }
          .service-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 150px; }
          .service_item_01 .sitem_con { padding: 16px 14px 20px; }
          .service_item_01 h3 { font-size: 16px; }
          .service_item_01 p { font-size: 13px; }
          .service_item_01 .ibMeta { width: 50px; height: 50px; font-size: 20px; margin: -30px auto 12px; }
          .client-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .blog-grid { grid-template-columns: 1fr; }
          .beproTab .nav-link { padding: 8px 18px; font-size: 13px; }
          .client-badge { position: relative; bottom: auto; right: auto; margin-top: -20px; padding: 16px 20px; }
          .client-badge h2 { font-size: 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content h3 { font-size: 26px; }
          .cta-content h4 { font-size: 18px; }
          .berpo_btn { padding: 12px 28px; font-size: 14px; }
          .testiItem01 { padding: 20px 18px; }
          .accordion-header { font-size: 14px; padding: 14px 16px; }
          .accordion-body { font-size: 14px; padding: 0 16px 16px; }
          .ts_author img { width: 50px; height: 50px; }
          .team_01 { padding: 14px 10px; }
          .team_01 h3 { font-size: 15px; }
          .tm_social a { width: 32px; height: 32px; font-size: 12px; }
          .blogContent h3 { font-size: 16px; }
          .modal-content { padding: 24px; }
        }

        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 200px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .client-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .secTitle { font-size: 22px; }
          .hero-title { font-size: 24px; }
          .beproTab .nav-link { padding: 6px 14px; font-size: 12px; }
          .berpo_btn { padding: 10px 22px; font-size: 13px; }
          .testimonial-grid { gap: 20px; }
          .cta-content h2 { font-size: 28px; }
          .cta-content h3 { font-size: 22px; }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`hero-icon`}),(0,M.jsx)(`h1`,{className:`hero-title mt-5`,children:`2D Mapping  Planimetric & Thematic`}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Precision orthomosaics, topographic base maps, land cover classification, and infrastructure plans — accurate 2D geospatial data from aerial imagery, satellite, and field surveys.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request 2D Mapping Quote `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`2D Mapping Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Cartographic Excellence, `,(0,M.jsx)(`span`,{children:`Geospatial`}),` Precision`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`2D mapping remains the backbone of planning, engineering, and environmental management. We produce high-fidelity planimetric maps, topographic sheets, thematic layers, and orthorectified imagery — all with survey-grade accuracy and rich attribution.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:Oi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Mapping `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision 2D mapping products for urban planning, infrastructure development, environmental management, and engineering design.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Planimetric mapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Topographic contour mapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Satellite & aerial orthomosaics`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Thematic & land use mapping`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Mapping Quote`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`300`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Mapping Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Mapping`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`planimetric`?`active`:``}`,onClick:()=>r(`planimetric`),children:`Planimetric`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`topographic`?`active`:``}`,onClick:()=>r(`topographic`),children:`Topographic`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`thematic`?`active`:``}`,onClick:()=>r(`thematic`),children:`Thematic`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`planimetric`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Planimetric `,(0,M.jsx)(`span`,{children:`Mapping`})]}),(0,M.jsx)(`p`,{children:`Roads, buildings, water bodies, vegetation, and utility networks extracted from high-res imagery. Clean, editable vector layers for CAD and GIS applications.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Planimetric Mapping`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Planimetric`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`topographic`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Topographic `,(0,M.jsx)(`span`,{children:`Mapping`})]}),(0,M.jsx)(`p`,{children:`1m, 2m, or 5m contours derived from photogrammetry or LiDAR. Ideal for civil design, flood modeling, and site grading analysis.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Topographic Mapping`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Topographic`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`thematic`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Thematic `,(0,M.jsx)(`span`,{children:`Mapping`})]}),(0,M.jsx)(`p`,{children:`Land cover classification, zoning maps, agricultural field boundaries, and environmental sensitivity layers — customized to your schema.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Thematic Mapping`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Thematic`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Mapping`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:ki.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`2D Mapping`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your mapping projects with precision geospatial data?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Mapping Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`2D Mapping Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Mapping Quote`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A mapping specialist will contact ${n} within 24h with sample map products and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},ji=`/assets/bg-DcZsy2Pj.png`,Mi=[{id:1,icon:`fa-clipboard-list`,title:`GIS Strategy & Planning`,description:`Develop a tailored GIS roadmap aligned with your organizational goals, data maturity, and budget. We help you prioritize investments and build a sustainable geospatial capability.`,image:`/assets/1-CrOOiUR9.png`,link:`/services/consultancy/strategy`},{id:2,icon:`fa-sync-alt`,title:`Workflow Automation`,description:`Streamline repetitive GIS tasks, data processing pipelines, and quality control using Python, ModelBuilder, and FME. Reduce manual effort and eliminate errors.`,image:`/assets/2-BGfkq_Qm.png`,link:`/services/consultancy/automation`},{id:3,icon:`fa-database`,title:`Data Migration & Integration`,description:`Consolidate legacy spatial data, CAD, and tabular records into a unified GIS database. Seamlessly integrate with your existing ERP, CRM, or asset management systems.`,image:`/assets/3-0-lN5Yv7.jpg`,link:`/services/consultancy/integration`},{id:4,icon:`fa-chart-line`,title:`Spatial Analysis & Modeling`,description:`Advanced geospatial analysis — suitability modeling, network analysis, predictive analytics, and machine learning on spatial data to uncover insights.`,image:`/assets/4-5BE8xiLY.jpg`,link:`/services/consultancy/analysis`},{id:5,icon:`fa-users`,title:`Capacity Building & Training`,description:`Empower your team with custom GIS training programs. From basic map creation to advanced geoprocessing and automation.`,image:`/assets/5-C5LdwZMR.jpg`,link:`/services/consultancy/training`},{id:6,icon:`fa-building`,title:`Implementation Support`,description:`End-to-end support for GIS software deployment, enterprise geodatabase setup, and custom application development.`,image:`/assets/6-ChJC4dtC.jpeg`,link:`/services/consultancy/implementation`}],Ni=[{id:1,title:`GIS Strategy for Modern Enterprises`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Automating GIS Workflows`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`Building GIS Capacity in Organizations`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],Pi=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`strategy`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${ji}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

       .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`GIS Consultancy `,(0,M.jsx)(`span`,{children:`•`}),` Strategic Advisory`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Strategic GIS advisory, workflow automation, data integration, and capacity building — transform your geospatial capabilities with expert guidance.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request a Consultation `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Consultancy Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Your Trusted `,(0,M.jsx)(`span`,{children:`GIS Advisory`}),` Partner`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Whether you're starting your GIS journey or optimizing an enterprise system, our consultants provide independent, vendor-neutral advice. We help you design, implement, and scale geospatial solutions that deliver measurable business value.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:Mi.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Needs `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Consultancy `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With deep expertise in GIS strategy and implementation, we help organizations maximize their geospatial investments and build sustainable capabilities.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Strategic GIS roadmapping`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Workflow automation & optimization`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Data migration & integration`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Capacity building & training`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Consultation`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`100`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Consulting Projects`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Consulting`}),` Approaches`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`strategy`?`active`:``}`,onClick:()=>r(`strategy`),children:`Strategy`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`automation`?`active`:``}`,onClick:()=>r(`automation`),children:`Automation`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`training`?`active`:``}`,onClick:()=>r(`training`),children:`Training`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`strategy`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Strategic `,(0,M.jsx)(`span`,{children:`GIS Planning`})]}),(0,M.jsx)(`p`,{children:`Develop a tailored GIS roadmap aligned with your organizational goals, data maturity, and budget. We help you prioritize investments and build a sustainable geospatial capability.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Plan Your Strategy`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Strategy`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`automation`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Workflow `,(0,M.jsx)(`span`,{children:`Automation`})]}),(0,M.jsx)(`p`,{children:`Streamline repetitive GIS tasks, data processing pipelines, and quality control using Python, ModelBuilder, and FME. Reduce manual effort and eliminate errors.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Automate Workflows`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Automation`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`training`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Capacity `,(0,M.jsx)(`span`,{children:`Building`})]}),(0,M.jsx)(`p`,{children:`Empower your team with custom GIS training programs. From basic map creation to advanced geoprocessing and automation — build lasting expertise.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Training`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Training`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Consulting`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:Ni.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`GIS Consultancy`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your geospatial capabilities with expert guidance?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start a Consultation`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Consultancy Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,M.jsx)(`span`,{children:`Consultation`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your GIS challenges, goals, and timeline.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A GIS consultant will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your GIS challenges and requirements...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},Fi=`/assets/bg-C7mxAq6j.png`,Ii=[{id:1,icon:`fa-laptop-code`,title:`Custom Website Design`,description:`Fully responsive, mobile-first websites that reflect your brand identity. Clean UI/UX, intuitive navigation, and conversion-focused layouts.`,image:`/assets/1-DcwbZwej.jpg`,link:`/services/web-development/design`},{id:2,icon:`fa-cart-shopping`,title:`E-Commerce Solutions`,description:`Secure online stores with product catalogs, payment gateways, inventory management, and order tracking — built on WooCommerce or custom solutions.`,image:`/assets/2-DPZoflz-.jpg`,link:`/services/web-development/ecommerce`},{id:3,icon:`fa-database`,title:`Web GIS & Mapping Portals`,description:`Interactive map dashboards, spatial data visualization, and location-based services using Leaflet, Mapbox GL, OpenLayers, or Esri JS API.`,image:`/assets/3-05NRfrNs.jpg`,link:`/services/web-development/webgis`},{id:4,icon:`fa-tachometer-alt`,title:`CMS Development`,description:`WordPress, custom admin panels, or headless CMS — you control your content. Easy updates without touching code.`,image:`/assets/4-CukMg599.jpg`,link:`/services/web-development/cms`},{id:5,icon:`fa-chart-line`,title:`Web Applications & Dashboards`,description:`Custom business tools, data dashboards, client portals, and internal systems with real-time updates and role-based access.`,image:`/assets/5-QqeegXU8.png`,link:`/services/web-development/applications`},{id:6,icon:`fa-search`,title:`SEO & Performance Optimization`,description:`Fast load times, Core Web Vitals compliance, meta tagging, and structured data — get discovered and keep users engaged.`,image:`/assets/6-CT108pzq.jpg`,link:`/services/web-development/seo`}],Li=[{id:1,title:`Building Modern Web Applications`,date:`20 March, 2021`,author:`Keesler Smith`,img:Vr,authorImg:Wr},{id:2,title:`Web GIS: Bringing Maps to the Browser`,date:`20 March, 2021`,author:`Keesler Smith`,img:Hr,authorImg:Gr},{id:3,title:`SEO Strategies for 2024`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ur,authorImg:Kr}],Ri=()=>{let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)(`design`),[i,a]=(0,S.useState)(1),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)({name:``,email:``,message:``}),[u,d]=(0,S.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,M.jsxs)(`div`,{className:`service-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Fi}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

      .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Website `,(0,M.jsx)(`span`,{children:`Development`})]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Custom websites, web applications, and digital platforms — modern, responsive, and built for performance. From corporate sites to complex geospatial web portals.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Start Your Web Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,M.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Web Development Services`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Digital Experiences `,(0,M.jsx)(`span`,{children:`Engineered`}),` for Impact`]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Your website is your digital headquarters. We build fast, secure, and scalable web solutions tailored to your brand and business goals. Whether you need a showcase site, an e-commerce platform, or a data-driven web GIS portal — we deliver code that works.`})]}),(0,M.jsx)(`div`,{className:`service-grid`,children:Ii.map(e=>(0,M.jsxs)(`div`,{className:`service_item_01`,children:[(0,M.jsx)(`div`,{className:`siThumb`,children:(0,M.jsx)(`img`,{src:e.image,alt:e.title})}),(0,M.jsxs)(`div`,{className:`sitem_con`,children:[(0,M.jsx)(`div`,{className:`ibMeta`,children:(0,M.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:e.link,children:e.title})}),(0,M.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,M.jsx)(`div`,{className:`text-center mt-5`,children:(0,M.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,M.jsxs)(`div`,{className:`achievement-content`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Web Development `,(0,M.jsx)(`span`,{children:`Excellence`})]}),(0,M.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering cutting-edge web solutions that combine stunning design, robust functionality, and seamless user experiences for clients across industries.`}),(0,M.jsxs)(`ul`,{className:`listItem`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom website design`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` E-Commerce solutions`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Web GIS & mapping portals`]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(`i`,{className:`fas fa-check-circle`}),` Web applications & dashboards`]})]}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Web Project`})]}),(0,M.jsxs)(`div`,{className:`achievement-image`,children:[(0,M.jsx)(`img`,{src:Mr,alt:`Achievement`}),(0,M.jsxs)(`div`,{className:`client-badge`,children:[(0,M.jsxs)(`h2`,{children:[`85`,(0,M.jsx)(`sup`,{children:`+`})]}),(0,M.jsx)(`h5`,{children:`Web Projects Delivered`})]})]})]})})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Web`}),` Capabilities`]})]}),(0,M.jsxs)(`div`,{className:`beproTab`,children:[(0,M.jsx)(`button`,{className:`nav-link ${n===`design`?`active`:``}`,onClick:()=>r(`design`),children:`Web Design`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`webgis`?`active`:``}`,onClick:()=>r(`webgis`),children:`Web GIS`}),(0,M.jsx)(`button`,{className:`nav-link ${n===`apps`?`active`:``}`,onClick:()=>r(`apps`),children:`Web Apps`})]}),(0,M.jsxs)(`div`,{className:`tab-content`,children:[(0,M.jsx)(`div`,{className:`tab-pane ${n===`design`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Custom `,(0,M.jsx)(`span`,{children:`Web Design`})]}),(0,M.jsx)(`p`,{children:`Fully responsive, mobile-first websites that reflect your brand identity. Clean UI/UX, intuitive navigation, and conversion-focused layouts.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Your Design`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Web Design`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`webgis`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Web GIS `,(0,M.jsx)(`span`,{children:`& Mapping`})]}),(0,M.jsx)(`p`,{children:`Interactive map dashboards, spatial data visualization, and location-based services using Leaflet, Mapbox GL, OpenLayers, or Esri JS API.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your Web GIS`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Web GIS`})})]})}),(0,M.jsx)(`div`,{className:`tab-pane ${n===`apps`?`active`:``}`,children:(0,M.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,M.jsxs)(`div`,{className:`text-col`,children:[(0,M.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Web Apps `,(0,M.jsx)(`span`,{children:`& Dashboards`})]}),(0,M.jsx)(`p`,{children:`Custom business tools, data dashboards, client portals, and internal systems with real-time updates and role-based access.`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your App`})]}),(0,M.jsx)(`div`,{className:`img-col`,children:(0,M.jsx)(`img`,{src:N,alt:`Web Apps`})})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,M.jsx)(`span`,{children:`Web`}),` Articles`]})]}),(0,M.jsx)(`div`,{className:`blog-grid`,children:Li.map(e=>(0,M.jsxs)(`div`,{className:`blogItem01`,children:[(0,M.jsx)(`div`,{className:`blogThumb`,children:(0,M.jsx)(`img`,{src:e.img,alt:e.title})}),(0,M.jsxs)(`div`,{className:`blogContent`,children:[(0,M.jsxs)(`span`,{className:`bmeta`,children:[(0,M.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,M.jsx)(`h3`,{children:(0,M.jsx)(j,{to:`/blog`,children:e.title})}),(0,M.jsxs)(`div`,{className:`bpcon`,children:[(0,M.jsxs)(`div`,{className:`author`,children:[(0,M.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,M.jsx)(j,{to:`/blog`,children:(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Web Development`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your digital presence with a custom web solution?`}),(0,M.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Web Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})}),o&&(0,M.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,M.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,M.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Web Development Inquiry`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Start Your `,(0,M.jsx)(`span`,{children:`Web Project`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your website needs — type of site, features, timeline, and budget range.`})]}),u&&(0,M.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A web development specialist will contact ${n} within 24h with portfolio samples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,M.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your website needs, features, and timeline...`})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},P=()=>{let[e,t]=(0,S.useState)({name:``,email:``,phone:``,service:``,message:``}),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(!1),o=n=>{t({...e,[n.target.id]:n.target.value})};return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,M.jsxs)(`div`,{className:`contact-page`,children:[(0,M.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .contact-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .contact-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .secTitle span {
          color: #bb0b0b;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Qr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== CONTACT GRID ===== */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }

        .contact-info-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-info-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-info-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          padding: 8px 0;
          transition: transform 0.2s ease;
        }

        .contact-detail-item:hover {
          transform: translateX(6px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #bb0b0b10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #bb0b0b;
          font-size: 18px;
          flex-shrink: 0;
          transition: 0.3s;
        }

        .contact-detail-item:hover .contact-icon {
          background: #bb0b0b;
          color: #ffffff;
        }

        .contact-detail-item .contact-text {
          font-size: 15px;
          color: #4a4a62;
          line-height: 1.6;
        }

        .contact-detail-item .contact-text strong {
          color: #0a1922;
          font-weight: 600;
        }

        .contact-detail-item a {
          color: #4a4a62;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-detail-item a:hover {
          color: #bb0b0b;
        }

        .business-hours {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #f0f0f5;
        }

        .business-hours h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .business-hours p {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #4a4a62;
          padding: 4px 0;
        }

        .business-hours p span:last-child {
          font-weight: 600;
          color: #0a1922;
        }

        .social-links-contact {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-links-contact a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 16px;
          transition: 0.3s;
        }

        .social-links-contact a:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* ===== MAP CARD ===== */
        .map-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .map-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .map-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .map-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .map-preview {
          background: #f8f9fc;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 2px solid #f0f0f5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-preview:hover {
          border-color: #bb0b0b;
          transform: scale(1.01);
        }

        .map-placeholder {
          background: linear-gradient(135deg, #f0f0f5, #e8e8f0);
          padding: 60px 20px;
          text-align: center;
        }

        .map-placeholder i {
          font-size: 48px;
          color: #bb0b0b;
          margin-bottom: 12px;
        }

        .map-placeholder p {
          font-weight: 600;
          color: #0a1922;
          margin-top: 8px;
        }

        .map-placeholder .address-text {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 400;
          margin-top: 4px;
        }

        .google-map-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #bb0b0b;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .google-map-btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        .map-directions-note {
          font-size: 13px;
          color: #7a7a92;
          margin-top: 12px;
          text-align: center;
        }

        .map-directions-note i {
          color: #bb0b0b;
          margin-right: 6px;
        }

        /* ===== CONTACT FORM ===== */
        .contact-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          margin-top: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-form-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-form-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          color: #0a1922;
          margin-bottom: 6px;
        }

        .form-group label .required {
          color: #bb0b0b;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 18px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: #fafafc;
          color: #1a1a2e;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.08);
          background: #ffffff;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%235a5a72'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
          cursor: pointer;
        }

        .form-group textarea::placeholder,
        .form-group input::placeholder {
          color: #9a9aae;
        }

        .btn-submit {
          background: #bb0b0b;
          color: #ffffff;
          padding: 14px 38px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-submit:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
          
        
        }

        .client-logo-item {
          opacity: 1;
          transition: 0.3s;
          filter: grayscale(0.3);
          text-align:center;
          margin-left:65px;
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
          margin-left:110px;
          
          
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TOAST ===== */
        .toast-message {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #0a1922;
          color: #ffffff;
          padding: 16px 28px;
          border-radius: 12px;
          z-index: 9999;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          font-weight: 500;
          border-left: 4px solid #bb0b0b;
        }

        .toast-message.show {
          opacity: 1;
          transform: translateY(0);
        }

        .toast-message.success {
          border-left-color: #28a745;
        }

        .toast-message.error {
          border-left-color: #dc3545;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .contact-info-card,
          .map-card,
          .contact-form-card {
            padding: 24px 20px;
          }
          .contact-info-card h3,
          .map-card h3,
          .contact-form-card h3 {
            font-size: 20px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .business-hours p {
            flex-direction: column;
            gap: 2px;
          }
          .toast-message {
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: 100%;
            padding: 14px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .contact-detail-item {
            gap: 12px;
          }
          .contact-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 15px;
          }
          .contact-detail-item .contact-text {
            font-size: 14px;
          }
          .map-placeholder {
            padding: 40px 16px;
          }
          .map-placeholder i {
            font-size: 36px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .btn-submit {
            padding: 12px 24px;
            font-size: 14px;
          }
          .google-map-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}),(0,M.jsx)(`div`,{className:`toast-message ${i?`show`:``} ${n.includes(`✅`)?`success`:n.includes(`⚠️`)||n.includes(`📧`)?`error`:``}`,children:n}),(0,M.jsx)(`section`,{className:`hero-section`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`hero-icon`,children:(0,M.jsx)(`br`,{})}),(0,M.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Get In `,(0,M.jsx)(`span`,{children:`Touch`})]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`We're here to bring your geospatial vision to life — reach out anytime. Whether you have a project in mind or just want to learn more, we'd love to hear from you.`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,M.jsxs)(`a`,{href:`#contact-form`,className:`berpo_btn`,children:[`Send a Message `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,M.jsx)(`a`,{href:`#location`,className:`berpo_btn-outline`,children:`Find Us`})]})]})})}),(0,M.jsx)(`section`,{id:`contact`,className:`section-padding`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Contact Us`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Let's `,(0,M.jsx)(`span`,{children:`Connect`})]}),(0,M.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Have a question, project idea, or partnership opportunity? Reach out to us using the form below or through our contact details. We respond within 24 hours.`})]}),(0,M.jsxs)(`div`,{className:`contact-grid`,children:[(0,M.jsxs)(`div`,{className:`contact-info-card`,id:`location`,children:[(0,M.jsx)(`h3`,{children:`Contact Information`}),(0,M.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,M.jsx)(`div`,{className:`contact-icon`,children:(0,M.jsx)(`i`,{className:`fas fa-map-marker-alt`})}),(0,M.jsxs)(`div`,{className:`contact-text`,children:[(0,M.jsx)(`strong`,{children:`Office Address`}),(0,M.jsx)(`br`,{}),`New 533, Old 124, MKN Rd, First floor,`,(0,M.jsx)(`br`,{}),`Alandur, Chennai, Tamil Nadu 600016`]})]}),(0,M.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,M.jsx)(`div`,{className:`contact-icon`,children:(0,M.jsx)(`i`,{className:`fas fa-phone-alt`})}),(0,M.jsxs)(`div`,{className:`contact-text`,children:[(0,M.jsx)(`strong`,{children:`Phone`}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`a`,{href:`tel:+918903138792`,children:`+91 89031 38792`})]})]}),(0,M.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,M.jsx)(`div`,{className:`contact-icon`,children:(0,M.jsx)(`i`,{className:`fas fa-envelope`})}),(0,M.jsxs)(`div`,{className:`contact-text`,children:[(0,M.jsx)(`strong`,{children:`Email`}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`a`,{href:`mailto:sgtsolutionsinfo@gmail.com`,children:`sgtsolutionsinfo@gmail.com`})]})]}),(0,M.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,M.jsx)(`div`,{className:`contact-icon`,children:(0,M.jsx)(`i`,{className:`fas fa-globe`})}),(0,M.jsxs)(`div`,{className:`contact-text`,children:[(0,M.jsx)(`strong`,{children:`Website`}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`a`,{href:`#`,children:`www.sgtsolutions.in`})]})]}),(0,M.jsxs)(`div`,{className:`business-hours`,children:[(0,M.jsxs)(`h4`,{children:[(0,M.jsx)(`i`,{className:`fas fa-clock`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Business Hours`]}),(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`span`,{children:`Monday - Saturday`}),(0,M.jsx)(`span`,{children:`9:00 AM – 5:00 PM`})]}),(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`span`,{children:`Sunday`}),(0,M.jsx)(`span`,{children:`Closed`})]})]}),(0,M.jsxs)(`div`,{className:`social-links-contact`,children:[(0,M.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,M.jsx)(`i`,{className:`fab fa-linkedin-in`})}),(0,M.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Facebook`,children:(0,M.jsx)(`i`,{className:`fab fa-facebook-f`})}),(0,M.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,children:(0,M.jsx)(`i`,{className:`fab fa-instagram`})}),(0,M.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,M.jsx)(`i`,{className:`fab fa-twitter`})})]})]}),(0,M.jsxs)(`div`,{className:`map-card`,children:[(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`i`,{className:`fas fa-map-pin`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Our Location`]}),(0,M.jsx)(`div`,{className:`map-preview`,onClick:()=>window.open(`https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai`,`_blank`),children:(0,M.jsxs)(`div`,{className:`map-placeholder`,children:[(0,M.jsx)(`i`,{className:`fas fa-map-marked-alt`}),(0,M.jsx)(`p`,{children:`SGT Solutions, Alandur`}),(0,M.jsxs)(`div`,{className:`address-text`,children:[(0,M.jsx)(`i`,{className:`fas fa-location-dot`,style:{color:`#bb0b0b`,marginRight:`6px`}}),`124, MKN Rd, Ramapuram, Alandur, Chennai`]})]})}),(0,M.jsxs)(`button`,{className:`google-map-btn`,onClick:()=>window.open(`https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai`,`_blank`),children:[(0,M.jsx)(`i`,{className:`fab fa-google`}),` Open in Google Maps`]}),(0,M.jsxs)(`p`,{className:`map-directions-note`,children:[(0,M.jsx)(`i`,{className:`fas fa-directions`}),` Click on the map or button for directions`]})]})]}),(0,M.jsxs)(`div`,{className:`contact-form-card`,id:`contact-form`,children:[(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`i`,{className:`fas fa-paper-plane`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Send us a Message`]}),(0,M.jsxs)(`form`,{onSubmit:n=>{n.preventDefault();let{name:i,email:o,message:s}=e;if(!i||!o||!s){r(`⚠️ Please fill all required fields.`),a(!0),setTimeout(()=>a(!1),3500);return}if(!o.includes(`@`)){r(`📧 Please enter a valid email address.`),a(!0),setTimeout(()=>a(!1),3500);return}r(`✅ Thanks ${i}! Your message has been sent. Our team will respond within 24 hours.`),a(!0),t({name:``,email:``,phone:``,service:``,message:``}),setTimeout(()=>{a(!1),r(``)},4e3)},children:[(0,M.jsxs)(`div`,{className:`form-row`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsxs)(`label`,{htmlFor:`name`,children:[`Full Name `,(0,M.jsx)(`span`,{className:`required`,children:`*`})]}),(0,M.jsx)(`input`,{type:`text`,id:`name`,value:e.name,onChange:o,placeholder:`John Doe`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsxs)(`label`,{htmlFor:`email`,children:[`Email Address `,(0,M.jsx)(`span`,{className:`required`,children:`*`})]}),(0,M.jsx)(`input`,{type:`email`,id:`email`,value:e.email,onChange:o,placeholder:`john@example.com`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-row`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`phone`,children:`Phone Number`}),(0,M.jsx)(`input`,{type:`tel`,id:`phone`,value:e.phone,onChange:o,placeholder:`+91 98765 43210`})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`service`,children:`Service Interest`}),(0,M.jsxs)(`select`,{id:`service`,value:e.service,onChange:o,children:[(0,M.jsx)(`option`,{value:``,children:`Select a Service`}),(0,M.jsx)(`option`,{value:`web-gis`,children:`Web GIS Development`}),(0,M.jsx)(`option`,{value:`mobile-gis`,children:`Mobile GIS App`}),(0,M.jsx)(`option`,{value:`geo-property`,children:`Spatial Revenue Intelligence System`}),(0,M.jsx)(`option`,{value:`lidar`,children:`LiDAR / Drone Survey`}),(0,M.jsx)(`option`,{value:`photogrammetry`,children:`Photogrammetry`}),(0,M.jsx)(`option`,{value:`2d-mapping`,children:`2D Mapping`}),(0,M.jsx)(`option`,{value:`consultancy`,children:`Consultancy Services`}),(0,M.jsx)(`option`,{value:`web-dev`,children:`Website Development`}),(0,M.jsx)(`option`,{value:`other`,children:`Other`})]})]})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsxs)(`label`,{htmlFor:`message`,children:[`Your Message `,(0,M.jsx)(`span`,{className:`required`,children:`*`})]}),(0,M.jsx)(`textarea`,{id:`message`,value:e.message,onChange:o,placeholder:`Tell us about your project or query...`,required:!0})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn-submit`,children:[`Send Inquiry `,(0,M.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-light`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`text-center`,children:[(0,M.jsx)(`div`,{className:`subTitle`,children:`Trusted Partners`}),(0,M.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,M.jsx)(`span`,{children:`Clients`})]})]}),(0,M.jsx)(`br`,{}),(0,M.jsxs)(`div`,{className:`row`,children:[(0,M.jsx)(`div`,{className:`col-md-4`,children:(0,M.jsxs)(`div`,{className:`client-logo-item`,children:[(0,M.jsx)(`img`,{src:Pr,alt:`Client`}),(0,M.jsx)(`p`,{children:`Coimbatore Municipal Corporation`})]})}),(0,M.jsx)(`div`,{className:`col-md-4`,children:(0,M.jsxs)(`div`,{className:`client-logo-item`,children:[(0,M.jsx)(`img`,{src:Fr,alt:`Client`}),(0,M.jsx)(`p`,{children:`Marutham Foundation`})]})}),(0,M.jsx)(`div`,{className:`col-md-4`,children:(0,M.jsxs)(`div`,{className:`client-logo-item`,children:[(0,M.jsx)(`img`,{src:Ir,alt:`Client`}),(0,M.jsx)(`p`,{children:`Chennai Metro Water Supply`})]})})]})]})}),(0,M.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`cta-wrap`,children:[(0,M.jsxs)(`div`,{className:`cta-content`,children:[(0,M.jsxs)(`h4`,{children:[`We're `,(0,M.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,M.jsx)(`h2`,{children:`Geospatial`}),(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,M.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your ideas into reality? Let's start a conversation today.`}),(0,M.jsx)(`a`,{href:`#contact-form`,className:`berpo_btn`,children:`Start a Project`})]}),(0,M.jsxs)(`div`,{className:`cta-images`,children:[(0,M.jsx)(`img`,{src:qr,alt:`CTA`}),(0,M.jsx)(`img`,{src:Jr,alt:`CTA`})]})]})})})]})},F=()=>(0,M.jsx)(`div`,{className:`auth-wrapper`,children:(0,M.jsxs)(`div`,{className:`auth-container`,children:[(0,M.jsxs)(`div`,{className:`auth-card`,children:[(0,M.jsxs)(`div`,{className:`auth-logo`,children:[(0,M.jsx)(`div`,{className:`logo-icon`,children:`🌍`}),(0,M.jsx)(`h2`,{children:`GeoGIS`}),(0,M.jsx)(`p`,{children:`Enterprise Geospatial Solutions`})]}),(0,M.jsx)(Vt,{})]}),(0,M.jsx)(`div`,{className:`auth-footer`,children:(0,M.jsx)(`p`,{children:`© 2026 GeoGIS. All rights reserved.`})})]})});function I(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var zi=typeof Symbol==`function`&&Symbol.observable||`@@observable`,Bi=()=>Math.random().toString(36).substring(7).split(``).join(`.`),Vi={INIT:`@@redux/INIT${Bi()}`,REPLACE:`@@redux/REPLACE${Bi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Bi()}`};function Hi(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Ui(e,t,n){if(typeof e!=`function`)throw Error(I(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(I(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(I(1));return n(Ui)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(I(3));return i}function d(e){if(typeof e!=`function`)throw Error(I(4));if(c)throw Error(I(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(I(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!Hi(e))throw Error(I(7));if(e.type===void 0)throw Error(I(8));if(typeof e.type!=`string`)throw Error(I(17));if(c)throw Error(I(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(I(10));r=e,f({type:Vi.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(I(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[zi](){return this}}}return f({type:Vi.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[zi]:m}}function Wi(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:Vi.INIT})===void 0)throw Error(I(12));if(n(void 0,{type:Vi.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(I(13))})}function Gi(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{Wi(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(I(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function Ki(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function qi(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(I(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=Ki(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function Ji(e){return Hi(e)&&`type`in e&&typeof e.type==`string`}var Yi=Symbol.for(`immer-nothing`),Xi=Symbol.for(`immer-draftable`),L=Symbol.for(`immer-state`);function Zi(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Qi=Object,$i=Qi.getPrototypeOf,ea=`constructor`,ta=`prototype`,na=`configurable`,ra=`enumerable`,ia=`writable`,aa=`value`,oa=e=>!!e&&!!e[L];function sa(e){return e?ua(e)||_a(e)||!!e[Xi]||!!e[ea]?.[Xi]||va(e)||ya(e):!1}var ca=Qi[ta][ea].toString(),la=new WeakMap;function ua(e){if(!e||!ba(e))return!1;let t=$i(e);if(t===null||t===Qi[ta])return!0;let n=Qi.hasOwnProperty.call(t,ea)&&t[ea];if(n===Object)return!0;if(!xa(n))return!1;let r=la.get(n);return r===void 0&&(r=Function.toString.call(n),la.set(n,r)),r===ca}function da(e,t,n=!0){fa(e)===0?(n?Reflect.ownKeys(e):Qi.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function fa(e){let t=e[L];return t?t.type_:_a(e)?1:va(e)?2:ya(e)?3:0}var pa=(e,t,n=fa(e))=>n===2?e.has(t):Qi[ta].hasOwnProperty.call(e,t),ma=(e,t,n=fa(e))=>n===2?e.get(t):e[t],ha=(e,t,n,r=fa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function ga(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var _a=Array.isArray,va=e=>e instanceof Map,ya=e=>e instanceof Set,ba=e=>typeof e==`object`,xa=e=>typeof e==`function`,Sa=e=>typeof e==`boolean`;function Ca(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var wa=e=>e.copy_||e.base_,Ta=e=>e.modified_?e.copy_:e.base_;function Ea(e,t){if(va(e))return new Map(e);if(ya(e))return new Set(e);if(_a(e))return Array[ta].slice.call(e);let n=ua(e);if(t===!0||t===`class_only`&&!n){let t=Qi.getOwnPropertyDescriptors(e);delete t[L];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[ia]===!1&&(a[ia]=!0,a[na]=!0),(a.get||a.set)&&(t[i]={[na]:!0,[ia]:!0,[ra]:a[ra],[aa]:e[i]})}return Qi.create($i(e),t)}{let t=$i(e);if(t!==null&&n)return{...e};let r=Qi.create(t);return Qi.assign(r,e)}}function Da(e,t=!1){return Aa(e)||oa(e)||!sa(e)?e:(fa(e)>1&&Qi.defineProperties(e,{set:ka,add:ka,clear:ka,delete:ka}),Qi.freeze(e),t&&da(e,(e,t)=>{Da(t,!0)},!1),e)}function Oa(){Zi(2)}var ka={[aa]:Oa};function Aa(e){return e===null||!ba(e)||Qi.isFrozen(e)}var ja=`MapSet`,Ma=`Patches`,Na=`ArrayMethods`,Pa={};function Fa(e){let t=Pa[e];return t||Zi(0,e),t}var Ia=e=>!!Pa[e],La,Ra=()=>La,za=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Ia(ja)?Fa(ja):void 0,arrayMethodsPlugin_:Ia(Na)?Fa(Na):void 0});function Ba(e,t){t&&(e.patchPlugin_=Fa(Ma),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Va(e){Ha(e),e.drafts_.forEach(Wa),e.drafts_=null}function Ha(e){e===La&&(La=e.parent_)}var Ua=e=>La=za(La,e);function Wa(e){let t=e[L];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ga(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[L].modified_&&(Va(t),Zi(4)),sa(e)&&(e=Ka(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[L].base_,e,t)}else e=Ka(t,n);return qa(t,e,!0),Va(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Yi?void 0:e}function Ka(e,t){if(Aa(t))return t;let n=t[L];if(!n)return to(t,e.handledSet_,e);if(!Ya(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);$a(n,e)}return n.copy_}function qa(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Da(t,n)}function Ja(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Ya=(e,t)=>e.scope_===t,Xa=[];function Za(e,t,n,r){let i=wa(e),a=e.type_;if(r!==void 0&&ma(i,r,a)===t){ha(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;da(i,(e,n)=>{if(oa(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Xa;for(let e of o)ha(i,e,n,a)}function Qa(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Ya(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=Ta(i);Za(e,i.draft_??i,a,n),$a(i,r)})}function $a(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}Ja(e)}}function eo(e,t,n){let{scope_:r}=e;if(oa(n)){let i=n[L];Ya(i,r)&&i.callbacks_.push(function(){uo(e),Za(e,n,Ta(i),t)})}else sa(n)&&e.callbacks_.push(function(){let i=wa(e);e.type_===3?i.has(n)&&to(n,r.handledSet_,r):ma(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&to(ma(e.copy_,t,e.type_),r.handledSet_,r)})}function to(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||oa(e)||t.has(e)||!sa(e)||Aa(e)?e:(t.add(e),da(e,(r,i)=>{if(oa(i)){let t=i[L];Ya(t,n)&&(ha(e,r,Ta(t),e.type_),Ja(t))}else sa(i)&&to(i,t,n)}),e)}function no(e,t){let n=_a(e),r={type_:+!!n,scope_:t?t.scope_:Ra(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=ro;n&&(i=[r],a=io);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var ro={get(e,t){if(t===L)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=wa(e);if(!pa(i,t,e.type_))return so(e,i,t);let a=i[t];if(e.finalized_||!sa(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Ca(t))return a;if(a===ao(e.base_,t)||oo(e,t,a)){uo(e);let n=e.type_===1?+t:t,r=po(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in wa(e)},ownKeys(e){return Reflect.ownKeys(wa(e))},set(e,t,n){let r=co(wa(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=ao(wa(e),t),i=r?.[L];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(ga(n,r)&&(n!==void 0||pa(e.base_,t,e.type_)))return!0;uo(e),lo(e)}return e.copy_[t]===n&&(n!==void 0||pa(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),eo(e,t,n),!0)},deleteProperty(e,t){return uo(e),ao(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),lo(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=wa(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[ia]:!0,[na]:e.type_!==1||t!==`length`,[ra]:r[ra],[aa]:n[t]}},defineProperty(){Zi(11)},getPrototypeOf(e){return $i(e.base_)},setPrototypeOf(){Zi(12)}},io={};for(let e in ro){let t=ro[e];io[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}io.deleteProperty=function(e,t){return io.set.call(this,e,t,void 0)},io.set=function(e,t,n){return ro.set.call(this,e[0],t,n,e[0])};function ao(e,t){let n=e[L];return(n?wa(n):e)[t]}function oo(e,t,n){return e.type_!==1||!e.allIndicesReassigned_||e.assigned_?.get(t)||!sa(n)||n[L]?!1:e.baseRefs_.has(n)}function so(e,t,n){let r=co(t,n);return r?aa in r?r[aa]:r.get?.call(e.draft_):void 0}function co(e,t){if(!(t in e))return;let n=$i(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=$i(n)}}function lo(e){e.modified_||(e.modified_=!0,e.parent_&&lo(e.parent_))}function uo(e){e.copy_||=(e.assigned_=new Map,Ea(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var fo=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(xa(e)&&!xa(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}xa(t)||Zi(6),n!==void 0&&!xa(n)&&Zi(7);let r;if(sa(e)){let i=Ua(this),a=po(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?Va(i):Ha(i)}return Ba(i,n),Ga(r,i)}if(!e||!ba(e)){if(r=t(e),r===void 0&&(r=e),r===Yi&&(r=void 0),this.autoFreeze_&&Da(r,!0),n){let t=[],i=[];Fa(Ma).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}Zi(1,e)},this.produceWithPatches=(e,t)=>{if(xa(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Sa(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Sa(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Sa(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){sa(e)||Zi(8),oa(e)&&(e=mo(e));let t=Ua(this),n=po(t,e,void 0);return n[L].isManual_=!0,Ha(t),n}finishDraft(e,t){let n=e&&e[L];(!n||!n.isManual_)&&Zi(9);let{scope_:r}=n;return Ba(r,t),Ga(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=Fa(Ma).applyPatches_;return oa(e)?r(e,t):this.produce(e,e=>r(e,t))}};function po(e,t,n,r){let[i,a]=va(t)?Fa(ja).proxyMap_(t,n):ya(t)?Fa(ja).proxySet_(t,n):no(t,n);return(n?.scope_??Ra()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Qa(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function mo(e){return oa(e)||Zi(10,e),ho(e)}function ho(e){if(!sa(e)||Aa(e))return e;let t=e[L],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ea(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Ea(e,!0);return da(n,(e,t)=>{ha(n,e,ho(t))},r),t&&(t.finalized_=!1),n}var R=new fo().produce;function z(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var go=z(),_o=z,vo=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?Ki:Ki.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var yo=e=>e&&typeof e.match==`function`;function bo(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(ds(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Ji(t)&&t.type===e,n}var xo=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function So(e){return sa(e)?R(e,()=>{}):e}function Co(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function wo(e){return typeof e==`boolean`}var To=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new xo;return t&&(wo(t)?a.push(go):a.push(_o(t.extraArgument))),a},Eo=`RTK_autoBatch`,Do=e=>t=>{setTimeout(t,e)},Oo=(e,t)=>n=>{let r=!1,i=()=>{r||(r=!0,cancelAnimationFrame(a),clearTimeout(o),n())},a=e(i),o=setTimeout(i,t)},ko=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?Oo(window.requestAnimationFrame,100):Do(10):e.type===`callback`?e.queueNotification:Do(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[Eo],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},Ao=e=>function(t){let{autoBatch:n=!0}=t??{},r=new xo(e);return n&&r.push(ko(typeof n==`object`?n:void 0)),r};function jo(e){let t=To(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(Hi(n))c=Gi(n);else throw Error(ds(1));let l;l=typeof r==`function`?r(t):t();let u=Ki;i&&(u=vo({trace:!1,...typeof i==`object`&&i}));let d=Ao(qi(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return Ui(c,o,p)}function Mo(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(ds(28));if(r in t)throw Error(ds(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function No(e){return typeof e==`function`}function Po(e,t){let[n,r,i]=Mo(t),a;if(No(e))a=()=>So(e());else{let t=So(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n){if(oa(e)){let r=n(e,t);return r===void 0?e:r}if(sa(e))return R(e,e=>n(e,t));{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}}return e},e)}return o.getInitialState=a,o}var Fo=(e,t)=>yo(e)?e.match(t):e(t);function Io(...e){return t=>e.some(e=>Fo(e,t))}var Lo=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,Ro=(e=21)=>{let t=``,n=e;for(;n--;)t+=Lo[Math.random()*64|0];return t},zo=[`name`,`message`,`stack`,`code`],Bo=class{constructor(e,t){this.payload=e,this.meta=t}payload;meta;_type},Vo=class{constructor(e,t){this.payload=e,this.meta=t}payload;meta;_type},Ho=e=>{if(typeof e==`object`&&e){let t={};for(let n of zo)typeof e[n]==`string`&&(t[n]=e[n]);return t}return{message:String(e)}},Uo=`External signal was aborted`,Wo=(()=>{function e(e,t,n){let r=bo(e+`/fulfilled`,(e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:`fulfilled`}})),i=bo(e+`/pending`,(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:`pending`}})),a=bo(e+`/rejected`,(e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||Ho)(e||`Rejected`),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:`rejected`,aborted:e?.name===`AbortError`,condition:e?.name===`ConditionError`}}));function o(e,{signal:o}={}){return(s,c,l)=>{let u=n?.idGenerator?n.idGenerator(e):Ro(),d=new AbortController,f,p;function m(e){p=e,d.abort()}o&&(o.aborted?m(Uo):o.addEventListener(`abort`,()=>m(Uo),{once:!0}));let h=(async function(){let o;try{let a=n?.condition?.(e,{getState:c,extra:l});if(Ko(a)&&(a=await a),a===!1||d.signal.aborted)throw{name:`ConditionError`,message:`Aborted due to condition callback returning false.`};let h=new Promise((e,t)=>{f=()=>{t({name:`AbortError`,message:p||`Aborted`})},d.signal.addEventListener(`abort`,f,{once:!0})});s(i(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),o=await Promise.race([h,Promise.resolve(t(e,{dispatch:s,getState:c,extra:l,requestId:u,signal:d.signal,abort:m,rejectWithValue:((e,t)=>new Bo(e,t)),fulfillWithValue:((e,t)=>new Vo(e,t))})).then(t=>{if(t instanceof Bo)throw t;return t instanceof Vo?r(t.payload,u,e,t.meta):r(t,u,e)})])}catch(t){o=t instanceof Bo?a(null,u,e,t.payload,t.meta):a(t,u,e)}finally{f&&d.signal.removeEventListener(`abort`,f)}return n&&!n.dispatchConditionRejection&&a.match(o)&&o.meta.condition||s(o),o})();return Object.assign(h,{abort:m,requestId:u,arg:e,unwrap(){return h.then(Go)}})}}return Object.assign(o,{pending:i,rejected:a,fulfilled:r,settled:Io(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function Go(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Ko(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var qo=Symbol.for(`rtk-slice-createasyncthunk`);function Jo(e,t){return`${e}/${t}`}function Yo({creators:e}={}){let t=e?.asyncThunk?.[qo];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(ds(11));let i=(typeof e.reducers==`function`?e.reducers(Qo()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(ds(12));if(n in o.sliceCaseReducersByType)throw Error(ds(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:Jo(n,r),createNotation:typeof e.reducers==`function`};es(a)?ns(o,a,s,t):$o(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?Mo(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return Po(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=Co(d,r,m)),i}function i(t=l){return Co(Co(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=Xo(a,t,()=>Co(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function Xo(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var Zo=Yo();function Qo(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function $o({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!ts(r))throw Error(ds(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?bo(e,o):bo(e))}function es(e){return e._reducerDefinitionType===`asyncThunk`}function ts(e){return e._reducerDefinitionType===`reducerWithPrepare`}function ns({type:e,reducerName:t},n,r,i){if(!i)throw Error(ds(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||rs,pending:s||rs,rejected:c||rs,settled:l||rs})}function rs(){}var is=`listener`,as=`completed`,os=`cancelled`;`${os}`,`${as}`,`${is}${os}`,`${is}${as}`;var{assign:ss}=Object,cs=`listenerMiddleware`,ls=ss(bo(`${cs}/add`),{withTypes:()=>ls});`${cs}`;var us=ss(bo(`${cs}/remove`),{withTypes:()=>us});function ds(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function fs(e,t){return function(){return e.apply(t,arguments)}}var{toString:ps}=Object.prototype,{getPrototypeOf:ms}=Object,{iterator:hs,toStringTag:gs}=Symbol,_s=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vs=(e,t)=>{let n=e,r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),_s(n,t))return!0;n=ms(n)}return!1},ys=(e,t)=>e!=null&&vs(e,t)?e[t]:void 0,bs=(e=>t=>{let n=ps.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),xs=e=>(e=e.toLowerCase(),t=>bs(t)===e),Ss=e=>t=>typeof t===e,{isArray:Cs}=Array,ws=Ss(`undefined`);function Ts(e){return e!==null&&!ws(e)&&e.constructor!==null&&!ws(e.constructor)&&ks(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Es=xs(`ArrayBuffer`);function Ds(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Es(e.buffer),t}var Os=Ss(`string`),ks=Ss(`function`),As=Ss(`number`),js=e=>typeof e==`object`&&!!e,Ms=e=>e===!0||e===!1,Ns=e=>{if(!js(e))return!1;let t=ms(e);return(t===null||t===Object.prototype||ms(t)===null)&&!vs(e,gs)&&!vs(e,hs)},Ps=e=>{if(!js(e)||Ts(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Fs=xs(`Date`),Is=xs(`File`),Ls=e=>!!(e&&e.uri!==void 0),Rs=e=>e&&e.getParts!==void 0,zs=xs(`Blob`),Bs=xs(`FileList`),Vs=xs(`Set`),Hs=e=>js(e)&&ks(e.pipe);function Us(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Ws=Us(),Gs=Ws.FormData===void 0?void 0:Ws.FormData,Ks=e=>{if(!e)return!1;if(Gs&&e instanceof Gs)return!0;let t=ms(e);if(!t||t===Object.prototype||!ks(e.append))return!1;let n=bs(e);return n===`formdata`||n===`object`&&ks(e.toString)&&e.toString()===`[object FormData]`},qs=xs(`URLSearchParams`),[Js,Ys,Xs,Zs]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(xs),Qs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function $s(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Cs(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Ts(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ec(e,t){if(Ts(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var tc=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,nc=e=>!ws(e)&&e!==tc;function rc(...e){let{caseless:t,skipUndefined:n}=nc(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&ec(r,i)||i,o=_s(r,a)?r[a]:void 0;Ns(o)&&Ns(e)?r[a]=rc(o,e):Ns(e)?r[a]=rc({},e):Cs(e)?r[a]=e.slice():(!n||!ws(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||Ts(n)||($s(n,i),typeof n!=`object`||Cs(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];hc.call(n,t)&&i(n[t],t)}}return r}var ic=(e,t,n,{allOwnKeys:r}={})=>($s(t,(t,r)=>{n&&ks(t)?Object.defineProperty(e,r,{__proto__:null,value:fs(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ac=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),oc=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},sc=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&ms(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},cc=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},lc=e=>{if(!e)return null;if(Cs(e))return e;let t=e.length;if(!As(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},uc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&ms(Uint8Array)),dc=(e,t)=>{let n=(e&&e[hs]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},fc=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pc=xs(`HTMLFormElement`),mc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:hc}=Object.prototype,gc=xs(`RegExp`),_c=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};$s(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},vc=e=>{_c(e,(t,n)=>{if(ks(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(ks(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},yc=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Cs(e)?r(e):r(String(e).split(t)),n},bc=()=>{},xc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Sc(e){return!!(e&&ks(e.append)&&e[gs]===`FormData`&&e[hs])}var Cc=e=>{let t=new WeakSet,n=e=>{if(js(e)){if(t.has(e))return;if(Ts(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(Vs(e)){r=[];for(let t of e){let e=n(t);!ws(e)&&r.push(e)}}else r=Cs(e)?[]:{},$s(e,(e,t)=>{let i=n(e);!ws(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},wc=xs(`AsyncFunction`),Tc=e=>e&&(js(e)||ks(e))&&ks(e.then)&&ks(e.catch),Ec=((e,t)=>e?setImmediate:t?((e,t)=>(tc.addEventListener(`message`,({source:n,data:r})=>{n===tc&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),tc.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,ks(tc.postMessage)),Dc=typeof queueMicrotask<`u`?queueMicrotask.bind(tc):typeof process<`u`&&process.nextTick||Ec,Oc=e=>e!=null&&ks(e[hs]),B={isArray:Cs,isArrayBuffer:Es,isBuffer:Ts,isFormData:Ks,isArrayBufferView:Ds,isString:Os,isNumber:As,isBoolean:Ms,isObject:js,isPlainObject:Ns,isEmptyObject:Ps,isReadableStream:Js,isRequest:Ys,isResponse:Xs,isHeaders:Zs,isUndefined:ws,isDate:Fs,isFile:Is,isReactNativeBlob:Ls,isReactNative:Rs,isBlob:zs,isRegExp:gc,isFunction:ks,isStream:Hs,isURLSearchParams:qs,isTypedArray:uc,isFileList:Bs,forEach:$s,merge:rc,extend:ic,trim:Qs,stripBOM:ac,inherits:oc,toFlatObject:sc,kindOf:bs,kindOfTest:xs,endsWith:cc,toArray:lc,forEachEntry:dc,matchAll:fc,isHTMLForm:pc,hasOwnProperty:_s,hasOwnProp:_s,hasOwnInPrototypeChain:vs,getSafeProp:ys,reduceDescriptors:_c,freezeMethods:vc,toObjectSet:yc,toCamelCase:mc,noop:bc,toFiniteNumber:xc,findKey:ec,global:tc,isContextDefined:nc,isSpecCompliantForm:Sc,toJSONObject:Cc,isAsyncFn:wc,isThenable:Tc,setImmediate:Ec,asap:Dc,isIterable:Oc,isSafeIterable:e=>e!=null&&vs(e,hs)&&Oc(e)},kc=B.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Ac=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=B.hasOwnProp(t,n);!n||a&&B.hasOwnProp(kc,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function jc(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var Mc=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),Nc=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function Pc(e,t){return B.isArray(e)?e.map(e=>Pc(e,t)):jc(String(e).replace(t,``))}var Fc=e=>Pc(e,Mc),Ic=e=>Pc(e,Nc);function Lc(e){let t=Object.create(null);return B.forEach(e.toJSON(),(e,n)=>{t[n]=Ic(e)}),t}var Rc=Symbol(`internals`);function zc(e){return e&&String(e).trim().toLowerCase()}function Bc(e){return e===!1||e==null?e:B.isArray(e)?e.map(Bc):Fc(String(e))}function V(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Vc=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Hc(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function Uc(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function Wc(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=Hc(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=Hc(i.slice(0,a));if(!Vc.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=Hc(i.slice(a+1));t[s]=Uc(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var Gc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Kc(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function qc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Jc(e,t){let n=B.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var H=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=zc(t);if(!i)return;let a=B.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Bc(e))}let a=(e,t)=>B.forEach(e,(e,n)=>i(e,n,t));if(B.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(B.isString(e)&&(e=e.trim())&&!Gc(e))a(Ac(e),t);else if(B.isObject(e)&&B.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!B.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],B.hasOwnProp(n,i)?(r=n[i],n[i]=B.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=zc(e),e){let n=B.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return V(e);if(B.isFunction(t))return t.call(this,e,n);if(B.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=zc(e),e){let n=B.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Kc(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=zc(e),e){let i=B.findKey(n,e);i&&(!t||Kc(n,n[i],i,t))&&(delete n[i],r=!0)}}return B.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Kc(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return B.forEach(this,(r,i)=>{let a=B.findKey(n,i);if(a){t[a]=Bc(r),delete t[i];return}let o=e?qc(i):String(i).trim();o!==i&&delete t[i],t[o]=Bc(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return B.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&B.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return B.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Wc(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Rc]=this[Rc]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=zc(e);t[r]||(Jc(n,e),t[r]=!0)}return B.isArray(e)?e.forEach(r):r(e),this}};H.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),B.reduceDescriptors(H.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),B.freezeMethods(H);var Yc=`[REDACTED ****]`;function Xc(e){if(B.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(B.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Zc(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||B.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof H&&(e=e.toJSON()),r.push(e);let t;if(B.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);B.isUndefined(r)||(t[n]=r)});else{if(!B.isPlainObject(e)&&Xc(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Yc:i(a);B.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function Qc(e){try{return String(e)}catch{return``}}function $c(e){return e.errors.map(e=>{try{return e&&e.message?Qc(e.message):Qc(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var U=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&B.isArray(t.errors)&&t.errors.length&&(s=$c(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&B.hasOwnProp(e,`redact`)?e.redact:void 0,n=B.isArray(t)&&t.length>0?Zc(e,t):B.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};U.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,U.ERR_BAD_OPTION=`ERR_BAD_OPTION`,U.ECONNABORTED=`ECONNABORTED`,U.ETIMEDOUT=`ETIMEDOUT`,U.ECONNREFUSED=`ECONNREFUSED`,U.ERR_NETWORK=`ERR_NETWORK`,U.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,U.ERR_DEPRECATED=`ERR_DEPRECATED`,U.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,U.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,U.ERR_CANCELED=`ERR_CANCELED`,U.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,U.ERR_INVALID_URL=`ERR_INVALID_URL`,U.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function el(e){return B.isPlainObject(e)||B.isArray(e)}function tl(e){return B.endsWith(e,`[]`)?e.slice(0,-2):e}function nl(e,t,n){return e?e.concat(t).map(function(e,t){return e=tl(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function rl(e){return B.isArray(e)&&!e.some(el)}var il=B.toFlatObject(B,{},null,function(e){return/^is[A-Z]/.test(e)});function al(e,t,n){if(!B.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!B.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||m,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&B.isSpecCompliantForm(t),u=[];if(!B.isFunction(i))throw TypeError(`visitor must be a function`);function d(e){if(e===null)return``;if(B.isDate(e))return e.toISOString();if(B.isBoolean(e))return e.toString();if(!l&&B.isBlob(e))throw new U(`Blob is not supported. Use a Buffer instead.`);if(B.isArrayBuffer(e)||B.isTypedArray(e)){if(l&&typeof s==`function`)return new s([e]);throw new U(`Blob is not supported. Use a Buffer instead.`,U.ERR_NOT_SUPPORT)}return e}function f(e){if(e>c)throw new U(`Object is too deeply nested (`+e+` levels). Max depth: `+c,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(c===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!B.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),f(t+n.length-1),r})}function m(e,n,i){let s=e;if(B.isReactNative(t)&&B.isReactNativeBlob(e))return t.append(nl(i,n,a),d(e)),!1;if(e&&!i&&typeof e==`object`){if(B.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=p(e,1);else if(B.isArray(e)&&rl(e)||(B.isFileList(e)||B.endsWith(n,`[]`))&&(s=B.toArray(e)))return n=tl(n),s.forEach(function(e,r){!(B.isUndefined(e)||e===null)&&t.append(o===!0?nl([n],r,a):o===null?n:n+`[]`,d(e))}),!1}return el(e)?!0:(t.append(nl(i,n,a),d(e)),!1)}let h=Object.assign(il,{defaultVisitor:m,convertValue:d,isVisitable:el});function g(e,n,r=0){if(!B.isUndefined(e)){if(f(r),u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),B.forEach(e,function(e,a){(!(B.isUndefined(e)||e===null)&&i.call(t,e,B.isString(a)?a.trim():a,n,h))===!0&&g(e,n?n.concat(a):[a],r+1)}),u.pop()}}if(!B.isObject(e))throw TypeError(`data must be an object`);return g(e),t}function ol(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function sl(e,t){this._pairs=[],e&&al(e,this,t)}var cl=sl.prototype;cl.append=function(e,t){this._pairs.push([e,t])},cl.toString=function(e){let t=e?t=>e.call(this,t,ol):ol;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function W(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ll(e,t,n){if(!t)return e;e||=``;let r=B.isFunction(n)?{serialize:n}:n,i=B.getSafeProp(r,`encode`)||W,a=B.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):B.isURLSearchParams(t)?t.toString():new sl(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var ul=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){B.forEach(this.handlers,function(t){t!==null&&e(t)})}},dl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},fl={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:sl,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},pl=s({hasBrowserEnv:()=>ml,hasStandardBrowserEnv:()=>gl,hasStandardBrowserWebWorkerEnv:()=>_l,navigator:()=>hl,origin:()=>vl}),ml=typeof window<`u`&&typeof document<`u`,hl=typeof navigator==`object`&&navigator||void 0,gl=ml&&(!hl||[`ReactNative`,`NativeScript`,`NS`].indexOf(hl.product)<0),_l=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,vl=ml&&window.location.href||`http://localhost`,G={...pl,...fl};function yl(e,t){return al(e,new G.classes.URLSearchParams,{visitor:function(e,t,n,r){return G.isNode&&B.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var bl=100;function xl(e){if(e>bl)throw new U(`FormData field is too deeply nested (`+e+` levels). Max depth: `+bl,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Sl(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)xl(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function Cl(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function wl(e){function t(e,n,r,i){xl(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&B.isArray(r)?r.length:a,s?(B.hasOwnProp(r,a)?r[a]=B.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!B.hasOwnProp(r,a)||!B.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&B.isArray(r[a])&&(r[a]=Cl(r[a])),!o)}if(B.isFormData(e)&&B.isFunction(e.entries)){let n={};return B.forEachEntry(e,(e,r)=>{t(Sl(e),r,n,0)}),n}return null}var Tl=(e,t)=>e!=null&&B.hasOwnProp(e,t)?e[t]:void 0;function El(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Dl={transitional:dl,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=B.isObject(e);if(i&&B.isHTMLForm(e)&&(e=new FormData(e)),B.isFormData(e))return r?JSON.stringify(wl(e)):e;if(B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e)||B.isReadableStream(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Tl(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return yl(e,t).toString();if((a=B.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Tl(this,`env`),r=n&&n.FormData;return al(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),El(e)):e}],transformResponse:[function(e){let t=Tl(this,`transitional`)||Dl.transitional,n=t&&t.forcedJSONParsing,r=Tl(this,`responseType`),i=r===`json`;if(B.isResponse(e)||B.isReadableStream(e))return e;if(e&&B.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Tl(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?U.from(e,U.ERR_BAD_RESPONSE,this,null,Tl(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:G.classes.FormData,Blob:G.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};B.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{Dl.headers[e]={}});function Ol(e,t){let n=this||Dl,r=t||n,i=H.from(r.headers),a=r.data;return B.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function kl(e){return!!(e&&e.__CANCEL__)}var Al=class extends U{constructor(e,t,n){super(e??`canceled`,U.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function jl(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new U(`Request failed with status code `+n.status,n.status>=400&&n.status<500?U.ERR_BAD_REQUEST:U.ERR_BAD_RESPONSE,n.config,n.request,n))}function Ml(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function Nl(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Pl(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Fl=(e,t,n=3)=>{let r=0,i=Nl(50,250);return Pl(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Il=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ll=(e,t=B.asap)=>(...n)=>t(()=>e(...n)),Rl=G.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,G.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(G.origin),G.navigator&&/(msie|trident)/i.test(G.navigator.userAgent)):()=>!0,K=G.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];B.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),B.isString(r)&&s.push(`path=${r}`),B.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),B.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function q(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function J(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var Y=/^https?:(?!\/\/)/i,X=/[\t\n\r]/g;function zl(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Bl(e){return zl(e).replace(X,``)}function Vl(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${Yc}`)}function Hl(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Yc}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Yc}`);return n===-1?r:`${r}#${Vl(t.slice(n+1))}`}function Ul(e,t){if(typeof e==`string`){let n=Bl(e);if(Y.test(n))throw new U(`Invalid URL ${JSON.stringify(Hl(n))}: missing "//" after protocol`,U.ERR_INVALID_URL,t)}}function Wl(e,t,n,r){Ul(t,r);let i=!q(t);return e&&(i||n===!1)?(Ul(e,r),J(e,t)):t}var Gl=e=>e instanceof H?{...e}:e,Kl=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function ql(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return B.isPlainObject(e)&&B.isPlainObject(t)?B.merge.call({caseless:r},e,t):B.isPlainObject(t)?B.merge({},t):B.isArray(t)?t.slice():t}function i(e,t,n,i){if(!B.isUndefined(t))return r(e,t,n,i);if(!B.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!B.isUndefined(t))return r(void 0,t)}function o(e,t){if(!B.isUndefined(t))return r(void 0,t);if(!B.isUndefined(e))return r(void 0,e)}function s(n){let r=B.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!B.isUndefined(r)){if(B.isPlainObject(r)){if(B.hasOwnProp(r,n))return r[n]}else return}let i=B.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(B.isPlainObject(i)&&B.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(B.hasOwnProp(t,a))return r(n,i);if(B.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(Gl(e),Gl(t),n,!0)};return B.forEach(Kl({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=B.hasOwnProp(l,r)?l[r]:i,o=a(B.hasOwnProp(e,r)?e[r]:void 0,B.hasOwnProp(t,r)?t[r]:void 0,r);B.isUndefined(o)&&a!==c||(n[r]=o)}),B.hasOwnProp(t,`validateStatus`)&&B.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(B.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var Jl=[`content-type`,`content-length`];function Yl(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{Jl.includes(t.toLowerCase())&&e.set(t,n)})}var Xl=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Zl(e){let t=ql({},e),n=e=>B.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=H.from(s),t.url=ll(Wl(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=B.getSafeProp(c,`username`)||``,n=B.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?Xl(n):``)))}catch(t){throw U.from(t,U.ERR_BAD_OPTION_VALUE,e)}}if(B.isFormData(r)&&(G.hasStandardBrowserEnv||G.hasStandardBrowserWebWorkerEnv||B.isReactNative(r)?s.setContentType(void 0):B.isFunction(r.getHeaders)&&Yl(s,r.getHeaders(),n(`formDataHeaderPolicy`))),G.hasStandardBrowserEnv&&(B.isFunction(i)&&(i=i(t)),i===!0||i==null&&Rl(t.url))){let e=a&&o&&K.read(o);e&&s.set(a,e)}return t}var Ql=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Zl(e),i=r.data,a=H.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=H.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());jl(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new U(`Request aborted`,U.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new U(t&&t.message?t.message:`Network Error`,U.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||dl;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new U(t,i.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&B.forEach(Lc(a),function(e,t){h.setRequestHeader(t,e)}),B.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Fl(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Fl(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Al(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Ml(r.url);if(_&&!G.protocols.includes(_)){n(new U(`Unsupported protocol `+_+`:`,U.ERR_BAD_REQUEST,e)),m();return}h.send(i||null)})},$l=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof U?t:new Al(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new U(`timeout of ${t}ms exceeded`,U.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{if(!r){if(e.aborted){i.call(e);return}e.addEventListener(`abort`,i,{once:!0})}});let{signal:s}=n;return s.unsubscribe=()=>B.asap(o),s},eu=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},tu=async function*(e,t){for await(let n of nu(e))yield*eu(n,t)},nu=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},ru=(e,t,n,r)=>{let i=tu(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},iu=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,au=(e,t,n)=>t+2<n&&iu(e.charCodeAt(t+1))&&iu(e.charCodeAt(t+2)),ou=e=>e<=57?e-48:(e&223)-55,su=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,cu=e=>e===9||e===10||e===12||e===13||e===32,lu=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},uu=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},du=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&au(e,a,t)&&(o=ou(e.charCodeAt(a+1))*16+ou(e.charCodeAt(a+2)),a+=2),!cu(o)){if(o===61){r++;continue}if(!su(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?uu(e):lu(n)},fu=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&au(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function pu(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return fu(t===-1?e:e.slice(0,t),du)}var mu=`1.19.0`,hu=65536,{isFunction:gu}=B,_u=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),vu=e=>{if(!B.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},yu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},bu=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},xu=e=>{let t=B.global!==void 0&&B.global!==null?B.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=B.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?gu(i):typeof fetch==`function`,c=gu(a),l=gu(o);if(!s)return!1;let u=s&&gu(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&yu(()=>{let e=!1,t=new a(G.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&yu(()=>B.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new U(`Response type '${e}' is not supported`,U.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(B.isBlob(e))return e.size;if(B.isSpecCompliantForm(e))return(await new a(G.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(B.isArrayBufferView(e)||B.isArrayBuffer(e))return e.byteLength;if(B.isURLSearchParams(e)&&(e+=``),B.isString(e))return(await d(e)).byteLength},g=async(e,t)=>B.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:S=`same-origin`,fetchOptions:C,maxContentLength:w,maxBodyLength:ee}=Zl(e),te=B.isNumber(w)&&w>-1,ne=B.isNumber(ee)&&ee>-1,re=t=>B.hasOwnProp(e,t)?e[t]:void 0,T=i||fetch;b=b?(b+``).toLowerCase():`text`;let E=$l([l,d&&d.toAbortSignal()],_),D=null,ie=E&&E.unsubscribe&&(()=>{E.unsubscribe()}),ae,oe=null,se=()=>new U(`Request body larger than maxBodyLength limit`,U.ERR_BAD_REQUEST,e,D);try{let i,l=re(`auth`);if(l&&(i={username:B.getSafeProp(l,`username`)||``,password:B.getSafeProp(l,`password`)||``}),bu(t)){let e=new URL(t,G.origin);!i&&(e.username||e.password)&&(i={username:vu(e.username),password:vu(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(_u((i.username||``)+`:`+(i.password||``))))),te&&typeof t==`string`&&t.startsWith(`data:`)&&pu(t)>w)throw new U(`maxContentLength size of `+w+` exceeded`,U.ERR_BAD_RESPONSE,e,D);if(ne&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(ae=e,e>ee))throw se()}let d=ne&&(B.isReadableStream(s)||B.isStream(s)),_=(e,t,n)=>ru(e,hu,e=>{if(ne&&e>ee)throw oe=se();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(ae??=await g(x,s),ae!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(B.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&Il(ae,Fl(Ll(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new U(`Stream request bodies are not supported by the current fetch implementation`,U.ERR_NOT_SUPPORT,e,D);B.isString(S)||(S=S?`include`:`omit`);let O=c&&`credentials`in a.prototype;if(B.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+mu,!1);let k={...C,signal:E,method:n.toUpperCase(),headers:Lc(x.normalize()),body:s,duplex:`half`,credentials:O?S:void 0};D=c&&new a(t,k);let ce=await(c?T(D,C):T(t,k)),le=H.from(ce.headers);if(te){let t=B.toFiniteNumber(le.getContentLength());if(t!=null&&t>w)throw new U(`maxContentLength size of `+w+` exceeded`,U.ERR_BAD_RESPONSE,e,D)}let ue=p&&(b===`stream`||b===`response`);if(p&&ce.body&&(v||te||ue&&ie)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=ce[e]});let n=B.toFiniteNumber(le.getContentLength()),[r,i]=v&&Il(n,Fl(Ll(v),!0))||[],a=0;ce=new o(ru(ce.body,hu,t=>{if(te&&(a=t,a>w))throw new U(`maxContentLength size of `+w+` exceeded`,U.ERR_BAD_RESPONSE,e,D);r&&r(t)},()=>{i&&i(),ie&&ie()}),t)}b||=`text`;let de=await m[B.findKey(m,b)||`text`](ce,e);if(te&&!p&&!ue){let t;if(de!=null&&(typeof de.byteLength==`number`?t=de.byteLength:typeof de.size==`number`?t=de.size:typeof de==`string`&&(t=typeof r==`function`?new r().encode(de).byteLength:de.length)),typeof t==`number`&&t>w)throw new U(`maxContentLength size of `+w+` exceeded`,U.ERR_BAD_RESPONSE,e,D)}return!ue&&ie&&ie(),await new Promise((t,n)=>{jl(t,n,{data:de,headers:H.from(ce.headers),status:ce.status,statusText:ce.statusText,config:e,request:D})})}catch(t){if(ie&&ie(),E&&E.aborted&&E.reason instanceof U){let n=E.reason;throw n.config=e,D&&(n.request=D),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(oe)throw D&&!oe.request&&(oe.request=D),oe;if(t instanceof U)throw D&&!t.request&&(t.request=D),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new U(`Network Error`,U.ERR_NETWORK,e,D,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw U.from(t,t&&t.code,e,D,t&&t.response)}}},Su=new Map,Cu=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Su;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:xu(t)),l=c;return c};Cu();var wu={http:null,xhr:Ql,fetch:{get:Cu}};B.forEach(wu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var Tu=e=>`- ${e}`,Eu=e=>B.isFunction(e)||e===null||e===!1;function Du(e,t){e=B.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Eu(r)&&(i=wu[(n=String(r)).toLowerCase()],i===void 0))throw new U(`Unknown adapter '${n}'`);if(i&&(B.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new U(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Tu).join(`
`):` `+Tu(e[0]):`as no adapter specified`),U.ERR_NOT_SUPPORT)}return i}var Ou={getAdapter:Du,adapters:wu};function ku(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Al(null,e)}function Au(e){return ku(e),e.headers=H.from(e.headers),e.data=Ol.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Ou.getAdapter(e.adapter||Dl.adapter,e)(e).then(function(t){ku(e),e.response=t;try{t.data=Ol.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=H.from(t.headers),t},function(t){if(!kl(t)&&(ku(e),t&&t.response)){e.response=t.response;try{t.response.data=Ol.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=H.from(t.response.headers)}return Promise.reject(t)})}var ju={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{ju[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Mu={};ju.transitional=function(e,t,n){function r(e,t){return`[Axios v`+mu+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new U(r(i,` has been removed`+(t?` in `+t:``)),U.ERR_DEPRECATED);return t&&!Mu[i]&&(Mu[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},ju.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Nu(e,t,n){if(typeof e!=`object`||!e)throw new U(`options must be an object`,U.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new U(`option `+a+` must be `+n,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U(`Unknown option `+a,U.ERR_BAD_OPTION)}}var Pu={assertOptions:Nu,validators:ju},Fu=Pu.validators,Iu=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ul,response:new ul}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=ql(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Pu.assertOptions(n,{silentJSONParsing:Fu.transitional(Fu.boolean),forcedJSONParsing:Fu.transitional(Fu.boolean),clarifyTimeoutError:Fu.transitional(Fu.boolean),legacyInterceptorReqResOrdering:Fu.transitional(Fu.boolean),advertiseZstdAcceptEncoding:Fu.transitional(Fu.boolean),validateStatusUndefinedResolves:Fu.transitional(Fu.boolean)},!1),r!=null&&(B.isFunction(r)?t.paramsSerializer={serialize:r}:Pu.assertOptions(r,{encode:Fu.function,serialize:Fu.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Pu.assertOptions(t,{baseUrl:Fu.spelling(`baseURL`),withXsrfToken:Fu.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&B.merge(i.common,i[t.method]);i&&B.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=H.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||dl;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Au.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);B.isThenable(n)&&(l=Promise.resolve(n).then(()=>Au.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=Au.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=ql(this.defaults,e),ll(Wl(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};B.forEach([`delete`,`get`,`head`,`options`],function(e){Iu.prototype[e]=function(t,n){return this.request(ql(n||{},{method:e,url:t,data:n&&B.hasOwnProp(n,`data`)?n.data:void 0}))}}),B.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(ql(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Iu.prototype[e]=t(),e!==`query`&&(Iu.prototype[e+`Form`]=t(!0))});var Lu=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Al(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Ru(e){return function(t){return e.apply(null,t)}}function zu(e){return B.isObject(e)&&e.isAxiosError===!0}var Bu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Bu).forEach(([e,t])=>{Bu[t]=e});function Vu(e){let t=new Iu(e),n=fs(Iu.prototype.request,t);return B.extend(n,Iu.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Vu(ql(e,t))},n}var Hu=Vu(Dl);Hu.Axios=Iu,Hu.CanceledError=Al,Hu.CancelToken=Lu,Hu.isCancel=kl,Hu.VERSION=mu,Hu.toFormData=al,Hu.AxiosError=U,Hu.Cancel=Hu.CanceledError,Hu.all=function(e){return Promise.all(e)},Hu.spread=Ru,Hu.isAxiosError=zu,Hu.mergeConfig=ql,Hu.AxiosHeaders=H,Hu.formToJSON=e=>wl(B.isHTMLForm(e)?new FormData(e):e),Hu.getAdapter=Ou.getAdapter,Hu.HttpStatusCode=Bu,Hu.default=Hu;var Uu=Hu.create({baseURL:`http://127.0.0.1:8000/api`,headers:{"Content-Type":`application/json`,Accept:`application/json`}}),Wu=Wo(`auth/loginUser`,async({email:e,password:t},{rejectWithValue:n})=>{try{return(await Uu.post(`/login`,{email:e,password:t})).data}catch(e){let t=e.response?.data;return t?.errors&&typeof t.errors==`object`?n(t.errors):t?.message?n({general:t.message}):n({general:`Login failed. Please try again.`})}}),Z=Wo(`auth/registerUser`,async({name:e,email:t,password:n,role:r},{rejectWithValue:i})=>{try{return(await Uu.post(`/register`,{name:e,email:t,password:n,role:r})).data}catch(e){let t=e.response?.data;return t?.errors&&typeof t.errors==`object`?i(t.errors):t?.message?i({general:t.message}):i({general:`Registration failed. Please try again.`})}}),Gu=Wo(`auth/forgetPassword`,async({email:e},{rejectWithValue:t})=>{try{return await Uu.post(`/forgot-password`,{email:e}),{success:!0}}catch(e){let n=e.response?.data;return n?.errors&&typeof n.errors==`object`?t(n.errors):n?.message?t({general:n.message}):t({general:`Failed to send reset email`})}}),Ku=Wo(`auth/submitOtp`,async({email:e,otp:t},{rejectWithValue:n})=>{try{return await Uu.post(`/submit-otp`,{email:e,otp:t}),{success:!0}}catch(e){let t=e.response?.data;return t?.errors&&typeof t.errors==`object`?n(t.errors):t?.message?n({general:t.message}):n({general:`Failed to verify OTP`})}}),qu=Wo(`auth/resetPassword`,async({email:e,password:t},{rejectWithValue:n})=>{try{return(await Uu.post(`/reset-password`,{email:e,password:t})).data}catch(e){let t=e.response?.data;return t?.errors&&typeof t.errors==`object`?n(t.errors):t?.message?n({general:t.message}):n({general:`Password reset failed`})}}),Ju=Zo({name:`auth`,initialState:{user:JSON.parse(sessionStorage.getItem(`user`))||null,token:sessionStorage.getItem(`token`)||null,isAuthenticated:!!sessionStorage.getItem(`token`),loading:!1,error:{}},reducers:{logoutSuccess:e=>{e.user=null,e.token=null,e.isAuthenticated=!1,sessionStorage.removeItem(`user`),sessionStorage.removeItem(`token`)},clearErrors:e=>{e.error={}}},extraReducers:e=>{e.addCase(Wu.pending,e=>{e.loading=!0,e.error={}}).addCase(Wu.fulfilled,(e,t)=>{e.loading=!1,e.user=t.payload.user,e.token=t.payload.token,e.isAuthenticated=!0,sessionStorage.setItem(`user`,JSON.stringify(t.payload.user)),sessionStorage.setItem(`token`,t.payload.token)}).addCase(Wu.rejected,(e,t)=>{e.loading=!1,e.error=t.payload||{general:`Login failed`}}).addCase(Z.pending,e=>{e.loading=!0,e.error={}}).addCase(Z.fulfilled,(e,t)=>{e.loading=!1,e.user=t.payload.user,e.token=t.payload.token,e.isAuthenticated=!0,sessionStorage.setItem(`user`,JSON.stringify(t.payload.user)),sessionStorage.setItem(`token`,t.payload.token)}).addCase(Z.rejected,(e,t)=>{e.loading=!1,e.error=t.payload||{general:`Registration failed`}}).addCase(Gu.pending,e=>{e.loading=!0,e.error={}}).addCase(Gu.fulfilled,e=>{e.loading=!1}).addCase(Gu.rejected,(e,t)=>{e.loading=!1,e.error=t.payload||{general:`Failed to send reset email`}}).addCase(Ku.pending,e=>{e.loading=!0,e.error={}}).addCase(Ku.fulfilled,e=>{e.loading=!1}).addCase(Ku.rejected,(e,t)=>{e.loading=!1,e.error=t.payload||{general:`Failed to verify OTP`}}).addCase(qu.pending,e=>{e.loading=!0,e.error={}}).addCase(qu.fulfilled,e=>{e.loading=!1}).addCase(qu.rejected,(e,t)=>{e.loading=!1,e.error=t.payload||{general:`Password reset failed`}})}}),{logoutSuccess:Yu,clearErrors:Xu}=Ju.actions,Zu=Ju.reducer,Qu=()=>{let e=gt(),t=cr(),{isLoading:n,error:r,isAuthenticated:i}=dr(e=>e.auth),[a,o]=(0,S.useState)({email:``,password:``,remember:!1});(0,S.useEffect)(()=>{i&&e(`/dashboard`,{replace:!0})},[]);let[s,c]=(0,S.useState)({}),[l,u]=(0,S.useState)(!1),d=()=>{let e={};return a.email.trim()?/\S+@\S+\.\S+/.test(a.email)||(e.email=`Please enter a valid email address`):e.email=`Email is required`,a.password?a.password.length<6&&(e.password=`Password must be at least 6 characters`):e.password=`Password is required`,e},f=e=>{let{name:n,value:i,type:a,checked:l}=e.target;o(e=>({...e,[n]:a===`checkbox`?l:i})),s[n]&&c(e=>({...e,[n]:``})),r&&Object.keys(r).length>0&&t(Xu())},p=async n=>{n.preventDefault(),t(Xu()),c({});let r=d();if(Object.keys(r).length>0){c(r);return}let i=await t(Wu({email:a.email,password:a.password,remember:a.remember}));Wu.fulfilled.match(i)&&e(`/dashboard`)},m=e=>s[e]?s[e]:typeof r==`string`?e===`general`?r:null:r&&typeof r==`object`&&r[e]?r[e]:null,h=m(`general`)||(typeof r==`string`?r:null);return(0,M.jsx)(`div`,{className:`login-container`,children:(0,M.jsxs)(`form`,{className:`login-form`,onSubmit:p,noValidate:!0,children:[(0,M.jsx)(`h3`,{children:`Welcome Back`}),(0,M.jsx)(`p`,{className:`login-subtitle`,children:`Sign in to access your account`}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsxs)(`label`,{htmlFor:`email`,children:[`Email Address `,(0,M.jsx)(`span`,{className:`required`,children:`*`})]}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(`span`,{className:`input-icon`,children:(0,M.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,M.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4\r
                  c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,M.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}),(0,M.jsx)(`input`,{type:`email`,id:`email`,name:`email`,placeholder:`Enter your email`,value:a.email,onChange:f,className:m(`email`)?`error`:``,autoComplete:`email`,"aria-invalid":!!m(`email`),"aria-describedby":`email-error`})]}),m(`email`)&&(0,M.jsx)(`span`,{id:`email-error`,className:`error-message`,children:m(`email`)})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsxs)(`label`,{htmlFor:`password`,children:[`Password `,(0,M.jsx)(`span`,{className:`required`,children:`*`})]}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(`span`,{className:`input-icon`,children:(0,M.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,M.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,M.jsx)(`path`,{d:`M7 11V7a5 5 0 0110 0v4`})]})}),(0,M.jsx)(`input`,{type:l?`text`:`password`,id:`password`,name:`password`,placeholder:`Enter your password`,value:a.password,onChange:f,className:m(`password`)?`error`:``,autoComplete:`current-password`,"aria-invalid":!!m(`password`),"aria-describedby":`password-error`}),(0,M.jsx)(`button`,{type:`button`,className:`toggle-password`,onClick:()=>u(e=>!e),tabIndex:`-1`,"aria-label":l?`Hide password`:`Show password`,children:l?(0,M.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,M.jsx)(`path`,{d:`M17.94 17.94A10.07 10.07 0 0112 20\r
                    c-7 0-11-8-11-8\r
                    a18.45 18.45 0 015.06-5.94\r
                    M9.9 4.24A9.12 9.12 0 0112 4\r
                    c7 0 11 8 11 8\r
                    a18.5 18.5 0 01-2.16 3.19\r
                    m-6.72-1.07a3 3 0 11-4.24-4.24`}),(0,M.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`})]}):(0,M.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,M.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})})]}),m(`password`)&&(0,M.jsx)(`span`,{id:`password-error`,className:`error-message`,children:m(`password`)})]}),h&&(0,M.jsx)(`div`,{className:`login-error`,role:`alert`,children:h}),(0,M.jsxs)(`div`,{className:`form-options`,children:[(0,M.jsxs)(`label`,{className:`checkbox-label`,children:[(0,M.jsx)(`input`,{type:`checkbox`,name:`remember`,checked:a.remember,onChange:f}),(0,M.jsx)(`span`,{children:`Remember me`})]}),(0,M.jsx)(j,{to:`/forgot-password`,className:`forgot-link`,children:`Forgot Password?`})]}),(0,M.jsx)(`button`,{type:`submit`,className:`login-btn`,disabled:n,children:n?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{className:`spinner`,"aria-hidden":`true`}),`Signing in...`]}):`Sign In`}),(0,M.jsx)(`div`,{className:`divider`,children:(0,M.jsx)(`span`,{children:`or`})}),(0,M.jsxs)(`p`,{className:`signup-text`,children:[`Don't have an account?`,` `,(0,M.jsx)(j,{to:`/register`,children:`Sign Up`})]})]})})};function $u(){return(0,M.jsxs)(Wt,{children:[(0,M.jsxs)(Ht,{path:`/`,element:(0,M.jsx)(Er,{}),children:[(0,M.jsx)(Ht,{index:!0,element:(0,M.jsx)(Zr,{})}),(0,M.jsx)(Ht,{path:`about`,element:(0,M.jsx)(ri,{})}),(0,M.jsx)(Ht,{path:`contact`,element:(0,M.jsx)(P,{})}),(0,M.jsxs)(Ht,{path:`services`,children:[(0,M.jsx)(Ht,{index:!0,element:(0,M.jsx)(ti,{})}),(0,M.jsx)(Ht,{path:`web-gis`,element:(0,M.jsx)(si,{})}),(0,M.jsx)(Ht,{path:`mobile-gis`,element:(0,M.jsx)(ui,{})}),(0,M.jsx)(Ht,{path:`geo-property`,element:(0,M.jsx)(mi,{})}),(0,M.jsx)(Ht,{path:`lidar`,element:(0,M.jsx)(vi,{})}),(0,M.jsx)(Ht,{path:`photogrammetry`,element:(0,M.jsx)(Si,{})}),(0,M.jsx)(Ht,{path:`drone-survey`,element:(0,M.jsx)(Ei,{})}),(0,M.jsx)(Ht,{path:`2d-mapping`,element:(0,M.jsx)(Ai,{})}),(0,M.jsx)(Ht,{path:`consultancy`,element:(0,M.jsx)(Pi,{})}),(0,M.jsx)(Ht,{path:`web-development`,element:(0,M.jsx)(Ri,{})})]})]}),(0,M.jsx)(Ht,{path:`/`,element:(0,M.jsx)(F,{}),children:(0,M.jsx)(Ht,{path:`login`,element:(0,M.jsx)(Qu,{})})})]})}var ed=jo({reducer:{auth:Zu}});Hn.createRoot(document.getElementById(`root`)).render((0,M.jsx)(S.StrictMode,{children:(0,M.jsx)(nr,{store:ed,children:(0,M.jsx)(kn,{children:(0,M.jsx)($u,{})})})}));