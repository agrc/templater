//>>built
define("lodash/_basePullAt",["./_baseCastPath","./_isIndex","./_isKey","./last","./_parent"],function(e,t,i,o,n){function r(r,a){for(var d=r?a.length:0,l=d-1;d--;){var c=a[d];if(l==d||c!=u){var u=c;if(t(c))s.call(r,c,1);else if(i(c,r))delete r[c];else{var h=e(c),f=n(r,h);null!=f&&delete f[o(h)]}}}return r}var a=Array.prototype,s=a.splice;return r});//# sourceMappingURL=_basePullAt.js.map