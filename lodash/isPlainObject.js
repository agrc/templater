//>>built
define("lodash/isPlainObject",["./_isHostObject","./isObjectLike"],function(e,t){function i(i){if(!t(i)||s.call(i)!=o||e(i))return!1;var n=d(i);if(null===n)return!0;var l=n.constructor;return"function"==typeof l&&l instanceof l&&a.call(l)==r}var o="[object Object]",n=Object.prototype,a=Function.prototype.toString,r=a.call(Object),s=n.toString,d=Object.getPrototypeOf;return i});//# sourceMappingURL=isPlainObject.js.map