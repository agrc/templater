//>>built
define("dojox/lang/functional/linrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.linrec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",r=["_r","_y.a"];e.linrec=function(i,n,o,s){var l,d,u,c,m,h,f,g,p={},y={},v=function(e){p[e]=1};"string"==typeof i?m=t(i,a,v):(l=e.lambda(i),m="_c.apply(this, _x)",y["_c=_t.c"]=1),"string"==typeof n?h=t(n,a,v):(d=e.lambda(n),h="_t.t.apply(this, _x)"),"string"==typeof o?f=t(o,a,v):(u=e.lambda(o),f="_b.apply(this, _x)",y["_b=_t.b"]=1),"string"==typeof s?g=t(s,r,v):(c=e.lambda(s),g="_a.call(this, _r, _y.a)",y["_a=_t.a"]=1);var k=e.keys(p),b=e.keys(y),_=new Function([],"var _x=arguments,_y,_r".concat(k.length?","+k.join(","):"",b.length?",_t=_x.callee,"+b.join(","):d?",_t=_x.callee":"",";for(;!",m,";_x=",f,"){_y={p:_y,a:_x}}_r=",h,";for(;_y;_y=_y.p){_r=",g,"}return _r"));return l&&(_.c=l),d&&(_.t=d),u&&(_.b=u),c&&(_.a=c),_}}()});//# sourceMappingURL=linrec.js.map