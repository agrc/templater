//>>built
define("dojox/lang/functional/multirec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(e,t,i){e.provide("dojox.lang.functional.multirec"),e.require("dojox.lang.functional.lambda"),e.require("dojox.lang.functional.util"),function(){var e=i.lang.functional,t=e.inlineLambda,a="_x",n=["_y.r","_y.o"];e.multirec=function(i,o,r,s){var l,d,c,u,m,h,f,p,g={},v={},y=function(e){g[e]=1};"string"==typeof i?m=t(i,a,y):(l=e.lambda(i),m="_c.apply(this, _x)",v["_c=_t.c"]=1),"string"==typeof o?h=t(o,a,y):(d=e.lambda(o),h="_t.apply(this, _x)"),"string"==typeof r?f=t(r,a,y):(c=e.lambda(r),f="_b.apply(this, _x)",v["_b=_t.b"]=1),"string"==typeof s?p=t(s,n,y):(u=e.lambda(s),p="_a.call(this, _y.r, _y.o)",v["_a=_t.a"]=1);var b=e.keys(g),k=e.keys(v),_=new Function([],"var _y={a:arguments},_x,_r,_z,_i".concat(b.length?","+b.join(","):"",k.length?",_t=arguments.callee,"+k.join(","):"",d?k.length?",_t=_t.t":"_t=arguments.callee.t":"",";for(;;){for(;;){if(_y.o){_r=",p,";break}_x=_y.a;if(",m,"){_r=",h,";break}_y.o=_x;_x=",f,";_y.r=[];_z=_y;for(_i=_x.length-1;_i>=0;--_i){_y={p:_y,a:_x[_i],z:_z}}}if(!(_z=_y.z)){return _r}_z.r.push(_r);_y=_y.p}"));return l&&(_.c=l),d&&(_.t=d),c&&(_.b=c),u&&(_.a=u),_}}()});//# sourceMappingURL=multirec.js.map