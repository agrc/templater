//>>built
define("dojo/_base/lang",["./kernel","../has","../sniff"],function(e,t){t.add("bug-for-in-skips-shadowed",function(){for(var e in{toString:1})return 0;return 1});var i=t("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],n=i.length,o=function(t,i,n){n||(n=t[0]&&e.scopeMap[t[0]]?e.scopeMap[t.shift()][1]:e.global);try{for(var o=0;o<t.length;o++){var r=t[o];if(!(r in n)){if(!i)return;n[r]={}}n=n[r]}return n}catch(s){}},r=Object.prototype.toString,s=function(e,t,i){return(i||[]).concat(Array.prototype.slice.call(e,t||0))},a=/\{([^\}]+)\}/g,d={_extraNames:i,_mixin:function(e,o,r){var s,a,d,l={};for(s in o)a=o[s],s in e&&(e[s]===a||s in l&&l[s]===a)||(e[s]=r?r(a):a);if(t("bug-for-in-skips-shadowed")&&o)for(d=0;n>d;++d)s=i[d],a=o[s],s in e&&(e[s]===a||s in l&&l[s]===a)||(e[s]=r?r(a):a);return e},mixin:function(e,t){e||(e={});for(var i=1,n=arguments.length;n>i;i++)d._mixin(e,arguments[i]);return e},setObject:function(e,t,i){var n=e.split("."),r=n.pop(),s=o(n,!0,i);return s&&r?s[r]=t:void 0},getObject:function(e,t,i){return e?o(e.split("."),t,i):i},exists:function(e,t){return void 0!==d.getObject(e,!1,t)},isString:function(e){return"string"==typeof e||e instanceof String},isArray:function(e){return e&&(e instanceof Array||"array"==typeof e)},isFunction:function(e){return"[object Function]"===r.call(e)},isObject:function(e){return void 0!==e&&(null===e||"object"==typeof e||d.isArray(e)||d.isFunction(e))},isArrayLike:function(e){return e&&void 0!==e&&!d.isString(e)&&!d.isFunction(e)&&!(e.tagName&&"form"==e.tagName.toLowerCase())&&(d.isArray(e)||isFinite(e.length))},isAlien:function(e){return e&&!d.isFunction(e)&&/\{\s*\[native code\]\s*\}/.test(String(e))},extend:function(e,t){for(var i=1,n=arguments.length;n>i;i++)d._mixin(e.prototype,arguments[i]);return e},_hitchArgs:function(t,i){var n=d._toArray(arguments,2),o=d.isString(i);return function(){var r=d._toArray(arguments),s=o?(t||e.global)[i]:i;return s&&s.apply(t||this,n.concat(r))}},hitch:function(t,i){if(arguments.length>2)return d._hitchArgs.apply(e,arguments);if(i||(i=t,t=null),d.isString(i)){if(t=t||e.global,!t[i])throw['lang.hitch: scope["',i,'"] is null (scope="',t,'")'].join("");return function(){return t[i].apply(t,arguments||[])}}return t?function(){return i.apply(t,arguments||[])}:i},delegate:function(){function e(){}return function(t,i){e.prototype=t;var n=new e;return e.prototype=null,i&&d._mixin(n,i),n}}(),_toArray:t("ie")?function(){function e(e,t,i){for(var n=i||[],o=t||0;o<e.length;o++)n.push(e[o]);return n}return function(t){return(t.item?e:s).apply(this,arguments)}}():s,partial:function(t){var i=[null];return d.hitch.apply(e,i.concat(d._toArray(arguments)))},clone:function(e){if(!e||"object"!=typeof e||d.isFunction(e))return e;if(e.nodeType&&"cloneNode"in e)return e.cloneNode(!0);if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e);var t,i,n;if(d.isArray(e))for(t=[],i=0,n=e.length;n>i;++i)i in e&&t.push(d.clone(e[i]));else t=e.constructor?new e.constructor:{};return d._mixin(t,e,d.clone)},trim:String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(e,t,i){return e.replace(i||a,d.isFunction(t)?t:function(e,i){return d.getObject(i,!1,t)})}};return d.mixin(e,d),d});//# sourceMappingURL=lang.js.map