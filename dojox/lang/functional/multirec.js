//>>built
define("dojox/lang/functional/multirec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.multirec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",o=["_y.r","_y.o"];e.multirec=function(i,r,n,s){var l,d,h,c,u,m,f,g,p={},y={},v=function(e){p[e]=1};"string"==typeof i?u=t(i,a,v):(l=e.lambda(i),u="_c.apply(this, _x)",y["_c=_t.c"]=1),"string"==typeof r?m=t(r,a,v):(d=e.lambda(r),m="_t.apply(this, _x)"),"string"==typeof n?f=t(n,a,v):(h=e.lambda(n),f="_b.apply(this, _x)",y["_b=_t.b"]=1),"string"==typeof s?g=t(s,o,v):(c=e.lambda(s),g="_a.call(this, _y.r, _y.o)",y["_a=_t.a"]=1);var b=e.keys(p),_=e.keys(y),M=new Function([],"var _y={a:arguments},_x,_r,_z,_i".concat(b.length?","+b.join(","):"",_.length?",_t=arguments.callee,"+_.join(","):"",d?_.length?",_t=_t.t":"_t=arguments.callee.t":"",";for(;;){for(;;){if(_y.o){_r=",g,";break}_x=_y.a;if(",u,"){_r=",m,";break}_y.o=_x;_x=",f,";_y.r=[];_z=_y;for(_i=_x.length-1;_i>=0;--_i){_y={p:_y,a:_x[_i],z:_z}}}if(!(_z=_y.z)){return _r}_z.r.push(_r);_y=_y.p}"));return l&&(M.c=l),d&&(M.t=d),h&&(M.b=h),c&&(M.a=c),M}}()});//# sourceMappingURL=multirec.js.map