//>>built
define("lodash/isPlainObject",["./_isHostObject","./isObjectLike"],function(e,t){function i(i){if(!t(i)||s.call(i)!=r||e(i))return!1;var o=d(i);if(null===o)return!0;var l=o.constructor;return"function"==typeof l&&l instanceof l&&n.call(l)==a}var r="[object Object]",o=Object.prototype,n=Function.prototype.toString,a=n.call(Object),s=o.toString,d=Object.getPrototypeOf;return i});//# sourceMappingURL=isPlainObject.js.map