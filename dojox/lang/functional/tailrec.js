//>>built
define("dojox/lang/functional/tailrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.tailrec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x";e.tailrec=function(i,r,n){var o,s,l,d,u,c,m={},h={},f=function(e){m[e]=1};"string"==typeof i?d=t(i,a,f):(o=e.lambda(i),d="_c.apply(this, _x)",h["_c=_t.c"]=1),"string"==typeof r?u=t(r,a,f):(s=e.lambda(r),u="_t.t.apply(this, _x)"),"string"==typeof n?c=t(n,a,f):(l=e.lambda(n),c="_b.apply(this, _x)",h["_b=_t.b"]=1);var p=e.keys(m),g=e.keys(h),y=new Function([],"var _x=arguments,_t=_x.callee,_c=_t.c,_b=_t.b".concat(p.length?","+p.join(","):"",g.length?",_t=_x.callee,"+g.join(","):s?",_t=_x.callee":"",";for(;!",d,";_x=",c,");return ",u));return o&&(y.c=o),s&&(y.t=s),l&&(y.b=l),y}}()});//# sourceMappingURL=tailrec.js.map