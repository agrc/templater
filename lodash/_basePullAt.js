//>>built
define("lodash/_basePullAt",["./_baseCastPath","./_isIndex","./_isKey","./last","./_parent"],function(e,t,i,o,r){function n(n,a){for(var d=n?a.length:0,l=d-1;d--;){var c=a[d];if(l==d||c!=h){var h=c;if(t(c))s.call(n,c,1);else if(i(c,n))delete n[c];else{var u=e(c),f=r(n,u);null!=f&&delete f[o(u)]}}}return n}var a=Array.prototype,s=a.splice;return n});//# sourceMappingURL=_basePullAt.js.map