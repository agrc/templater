//>>built
define("dojox/mvc/equals",["dojo/_base/array","dojo/_base/lang","dojo/Stateful","./StatefulArray"],function(e,t,i,a){var o={getType:function(e){return t.isArray(e)?"array":t.isFunction((e||{}).getTime)?"date":null!=e&&("[object Object]"=={}.toString.call(e)||t.isFunction((e||{}).set)&&t.isFunction((e||{}).watch))?"object":"value"},equalsArray:function(e,t){for(var i=0,a=Math.max(e.length,t.length);i<a;i++)if(!n(e[i],t[i]))return!1;return!0},equalsDate:function(e,t){return e.getTime()==t.getTime()},equalsObject:function(e,a){var o=t.mixin({},e,a);for(var r in o)if(!(r in i.prototype||"_watchCallbacks"==r||n(e[r],a[r])))return!1;return!0},equalsValue:function(e,t){return e===t}},n=function(e,t,i){var a=i||n,o=[a.getType(e),a.getType(t)];return o[0]==o[1]&&a["equals"+o[0].replace(/^[a-z]/,function(e){return e.toUpperCase()})](e,t)};return t.setObject("dojox.mvc.equals",t.mixin(n,o))});//# sourceMappingURL=equals.js.map