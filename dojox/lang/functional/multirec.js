//>>built
define("dojox/lang/functional/multirec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.multirec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",o=["_y.r","_y.o"];e.multirec=function(i,n,r,s){var l,d,u,h,c,m,f,p,g={},v={},y=function(e){g[e]=1};"string"==typeof i?c=t(i,a,y):(l=e.lambda(i),c="_c.apply(this, _x)",v["_c=_t.c"]=1),"string"==typeof n?m=t(n,a,y):(d=e.lambda(n),m="_t.apply(this, _x)"),"string"==typeof r?f=t(r,a,y):(u=e.lambda(r),f="_b.apply(this, _x)",v["_b=_t.b"]=1),"string"==typeof s?p=t(s,o,y):(h=e.lambda(s),p="_a.call(this, _y.r, _y.o)",v["_a=_t.a"]=1);var k=e.keys(g),b=e.keys(v),_=new Function([],"var _y={a:arguments},_x,_r,_z,_i".concat(k.length?","+k.join(","):"",b.length?",_t=arguments.callee,"+b.join(","):"",d?b.length?",_t=_t.t":"_t=arguments.callee.t":"",";for(;;){for(;;){if(_y.o){_r=",p,";break}_x=_y.a;if(",c,"){_r=",m,";break}_y.o=_x;_x=",f,";_y.r=[];_z=_y;for(_i=_x.length-1;_i>=0;--_i){_y={p:_y,a:_x[_i],z:_z}}}if(!(_z=_y.z)){return _r}_z.r.push(_r);_y=_y.p}"));return l&&(_.c=l),d&&(_.t=d),u&&(_.b=u),h&&(_.a=h),_}}()});//# sourceMappingURL=multirec.js.map