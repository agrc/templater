//>>built
define("lodash/_baseXor",["./_baseDifference","./_baseFlatten","./_baseUniq"],function(e,t,i){function r(r,o,n){var a=r.length;if(a<2)return a?i(r[0]):[];for(var s=-1,d=Array(a);++s<a;)for(var l=r[s],c=-1;++c<a;)c!=s&&(d[s]=e(d[s]||l,r[c],o,n));return i(t(d,1),o,n)}return r});//# sourceMappingURL=_baseXor.js.map