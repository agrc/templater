//>>built
define("lodash/cond",["./_apply","./_arrayMap","./_baseIteratee","./_baseRest"],function(e,t,i,a){function o(o){var r=null==o?0:o.length,s=i;return o=r?t(o,function(e){if("function"!=typeof e[1])throw new TypeError(n);return[s(e[0]),e[1]]}):[],a(function(t){for(var i=-1;++i<r;){var a=o[i];if(e(a[0],this,t))return e(a[1],this,t)}})}var n="Expected a function";return o});//# sourceMappingURL=cond.js.map