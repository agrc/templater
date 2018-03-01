//>>built
define("dojo/_base/lang",["./kernel","../has","../sniff"],function(e,t){t.add("bug-for-in-skips-shadowed",function(){for(var e in{toString:1})return 0;return 1});var n=t("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],i=n.length,r=function(t,n,i){i||(i=t[0]&&e.scopeMap[t[0]]?e.scopeMap[t.shift()][1]:e.global);try{for(var r=0;r<t.length;r++){var o=t[r];if(!(o in i)){if(!n)return;i[o]={}}i=i[o]}return i}catch(e){}},o=Object.prototype.toString,a=function(e,t,n){return(n||[]).concat(Array.prototype.slice.call(e,t||0))},s=/\{([^\}]+)\}/g,c={_extraNames:n,_mixin:function(e,r,o){var a,s,c,u={};for(a in r)s=r[a],a in e&&(e[a]===s||a in u&&u[a]===s)||(e[a]=o?o(s):s);if(t("bug-for-in-skips-shadowed")&&r)for(c=0;c<i;++c)a=n[c],s=r[a],a in e&&(e[a]===s||a in u&&u[a]===s)||(e[a]=o?o(s):s);return e},mixin:function(e,t){e||(e={});for(var n=1,i=arguments.length;n<i;n++)c._mixin(e,arguments[n]);return e},setObject:function(e,t,n){var i=e.split("."),o=i.pop(),a=r(i,!0,n);return a&&o?a[o]=t:void 0},getObject:function(e,t,n){return e?r(e.split("."),t,n):n},exists:function(e,t){return void 0!==c.getObject(e,!1,t)},isString:function(e){return"string"==typeof e||e instanceof String},isArray:Array.isArray||function(e){return"[object Array]"==o.call(e)},isFunction:function(e){return"[object Function]"===o.call(e)},isObject:function(e){return void 0!==e&&(null===e||"object"==typeof e||c.isArray(e)||c.isFunction(e))},isArrayLike:function(e){return!!e&&!c.isString(e)&&!c.isFunction(e)&&!(e.tagName&&"form"==e.tagName.toLowerCase())&&(c.isArray(e)||isFinite(e.length))},isAlien:function(e){return e&&!c.isFunction(e)&&/\{\s*\[native code\]\s*\}/.test(String(e))},extend:function(e,t){for(var n=1,i=arguments.length;n<i;n++)c._mixin(e.prototype,arguments[n]);return e},_hitchArgs:function(t,n){var i=c._toArray(arguments,2),r=c.isString(n);return function(){var o=c._toArray(arguments),a=r?(t||e.global)[n]:n;return a&&a.apply(t||this,i.concat(o))}},hitch:function(t,n){if(arguments.length>2)return c._hitchArgs.apply(e,arguments);if(n||(n=t,t=null),c.isString(n)){if(t=t||e.global,!t[n])throw['lang.hitch: scope["',n,'"] is null (scope="',t,'")'].join("");return function(){return t[n].apply(t,arguments||[])}}return t?function(){return n.apply(t,arguments||[])}:n},delegate:function(){function e(){}return function(t,n){e.prototype=t;var i=new e;return e.prototype=null,n&&c._mixin(i,n),i}}(),_toArray:t("ie")?function(){function e(e,t,n){for(var i=n||[],r=t||0;r<e.length;r++)i.push(e[r]);return i}return function(t){return(t.item?e:a).apply(this,arguments)}}():a,partial:function(t){var n=[null];return c.hitch.apply(e,n.concat(c._toArray(arguments)))},clone:function(e){if(!e||"object"!=typeof e||c.isFunction(e))return e;if(e.nodeType&&"cloneNode"in e)return e.cloneNode(!0);if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e);var t,n,i;if(c.isArray(e))for(t=[],n=0,i=e.length;n<i;++n)n in e&&(t[n]=c.clone(e[n]));else t=e.constructor?new e.constructor:{};return c._mixin(t,e,c.clone)},trim:String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(e,t,n){return e.replace(n||s,c.isFunction(t)?t:function(e,n){return c.getObject(n,!1,t)})}};return c.mixin(e,c),c});//# sourceMappingURL=lang.js.map