//>>built
define("lodash/cond",["./_apply","./_arrayMap","./_baseIteratee","./rest"],function(e,t,i,a){function o(o){var n=o?o.length:0;return o=n?t(o,function(e){if("function"!=typeof e[1])throw new TypeError(r);return[i(e[0]),e[1]]}):[],a(function(t){for(var i=-1;++i<n;){var a=o[i];if(e(a[0],this,t))return e(a[1],this,t)}})}var r="Expected a function";return o});//# sourceMappingURL=cond.js.map