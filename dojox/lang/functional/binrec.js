//>>built
define("dojox/lang/functional/binrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.binrec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",r=["_z.r","_r","_z.a"];e.binrec=function(i,o,n,s){var d,l,u,c,h,m,f,g,p={},y={},v=function(e){p[e]=1};"string"==typeof i?h=t(i,a,v):(d=e.lambda(i),h="_c.apply(this, _x)",y["_c=_t.c"]=1),"string"==typeof o?m=t(o,a,v):(l=e.lambda(o),m="_t.apply(this, _x)"),"string"==typeof n?f=t(n,a,v):(u=e.lambda(n),f="_b.apply(this, _x)",y["_b=_t.b"]=1),"string"==typeof s?g=t(s,r,v):(c=e.lambda(s),g="_a.call(this, _z.r, _r, _z.a)",y["_a=_t.a"]=1);var b=e.keys(p),M=e.keys(y),_=new Function([],"var _x=arguments,_y,_z,_r".concat(b.length?","+b.join(","):"",M.length?",_t=_x.callee,"+M.join(","):"",l?M.length?",_t=_t.t":"_t=_x.callee.t":"",";while(!",h,"){_r=",f,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}for(;;){do{_r=",m,';if(!_z)return _r;while("r" in _z){_r=',g,";if(!(_z=_z.p))return _r}_z.r=_r;_x=_y.a;_y=_y.p}while(",h,");do{_r=",f,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}while(!",h,")}"));return d&&(_.c=d),l&&(_.t=l),u&&(_.b=u),c&&(_.a=c),_}}()});//# sourceMappingURL=binrec.js.map