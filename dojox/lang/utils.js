//>>built
define("dojox/lang/utils",["..","dojo/_base/lang"],function(dojox,lang){var du=lang.getObject("lang.utils",!0,dojox),empty={},opts=Object.prototype.toString,clone=function(e){if(e)switch(opts.call(e)){case"[object Array]":return e.slice(0);case"[object Object]":return lang.delegate(e)}return e};return lang.mixin(du,{coerceType:function(target,source){switch(typeof target){case"number":return Number(eval("("+source+")"));case"string":return String(source);case"boolean":return Boolean(eval("("+source+")"))}return eval("("+source+")")},updateWithObject:function(e,t,a){if(!t)return e;for(var i in e)if(i in t&&!(i in empty)){var r=e[i];r&&"object"==typeof r?du.updateWithObject(r,t[i],a):e[i]=a?du.coerceType(r,t[i]):clone(t[i])}return e},updateWithPattern:function(e,t,a,i){if(!t||!a)return e;for(var r in a)r in t&&!(r in empty)&&(e[r]=i?du.coerceType(a[r],t[r]):clone(t[r]));return e},merge:function(e,t){if(t){var a,i,r,n,o=opts.call(e),s=opts.call(t);switch(s){case"[object Array]":if(s==o){for(a=new Array(Math.max(e.length,t.length)),i=0,r=a.length;r>i;++i)a[i]=du.merge(e[i],t[i]);return a}return t.slice(0);case"[object Object]":if(s==o&&e){a=lang.delegate(e);for(i in t)i in e?(r=e[i],n=t[i],n!==r&&(a[i]=du.merge(r,n))):a[i]=lang.clone(t[i]);return a}return lang.clone(t)}}return t}}),du});//# sourceMappingURL=utils.js.map