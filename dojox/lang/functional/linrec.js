//>>built
define("dojox/lang/functional/linrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.linrec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",r=["_r","_y.a"];e.linrec=function(i,o,n,s){var d,l,h,u,c,m,f,g,p={},y={},v=function(e){p[e]=1};"string"==typeof i?c=t(i,a,v):(d=e.lambda(i),c="_c.apply(this, _x)",y["_c=_t.c"]=1),"string"==typeof o?m=t(o,a,v):(l=e.lambda(o),m="_t.t.apply(this, _x)"),"string"==typeof n?f=t(n,a,v):(h=e.lambda(n),f="_b.apply(this, _x)",y["_b=_t.b"]=1),"string"==typeof s?g=t(s,r,v):(u=e.lambda(s),g="_a.call(this, _r, _y.a)",y["_a=_t.a"]=1);var b=e.keys(p),_=e.keys(y),M=new Function([],"var _x=arguments,_y,_r".concat(b.length?","+b.join(","):"",_.length?",_t=_x.callee,"+_.join(","):l?",_t=_x.callee":"",";for(;!",c,";_x=",f,"){_y={p:_y,a:_x}}_r=",m,";for(;_y;_y=_y.p){_r=",g,"}return _r"));return d&&(M.c=d),l&&(M.t=l),h&&(M.b=h),u&&(M.a=u),M}}()});//# sourceMappingURL=linrec.js.map