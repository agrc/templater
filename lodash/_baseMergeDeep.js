//>>built
define("lodash/_baseMergeDeep",["./_assignMergeValue","./_baseClone","./_copyArray","./isArguments","./isArray","./isArrayLikeObject","./isFunction","./isObject","./isPlainObject","./isTypedArray","./toPlainObject"],function(e,t,i,a,n,o,r,s,l,d,c){function u(u,m,f,p,g,v,y){var b=u[f],_=m[f],k=y.get(_);if(k)return void e(u,f,k);var x=v?v(b,_,f+"",u,m,y):h,w=x===h;w&&(x=_,n(_)||d(_)?n(b)?x=b:o(b)?x=i(b):(w=!1,x=t(_,!v)):l(_)||a(_)?a(b)?x=c(b):!s(b)||p&&r(b)?(w=!1,x=t(_,!v)):x=b:w=!1),y.set(_,x),w&&g(x,_,p,v,y),y["delete"](_),e(u,f,x)}var h;return u});//# sourceMappingURL=_baseMergeDeep.js.map