//>>built
define("lodash/_createCtorWrapper",["./_baseCreate","./isObject"],function(e,t){function i(i){return function(){var a=arguments;switch(a.length){case 0:return new i;case 1:return new i(a[0]);case 2:return new i(a[0],a[1]);case 3:return new i(a[0],a[1],a[2]);case 4:return new i(a[0],a[1],a[2],a[3]);case 5:return new i(a[0],a[1],a[2],a[3],a[4]);case 6:return new i(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new i(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var n=e(i.prototype),r=i.apply(n,a);return t(r)?r:n}}return i});//# sourceMappingURL=_createCtorWrapper.js.map