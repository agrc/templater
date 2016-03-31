//>>built
define("dojox/gfx/decompose",["./_base","dojo/_base/lang","./matrix"],function(e,t,i){function a(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t))}function r(e,t,i,a){return isFinite(e)?isFinite(i)?(t=Math.abs(t),a=Math.abs(a),(t*e+a*i)/(t+a)):e:i}function o(e){var a=new i.Matrix2D(e);return t.mixin(a,{dx:0,dy:0,xy:a.yx,yx:a.xy})}function s(e){return e.xx*e.yy<0||e.xy*e.yx>0?-1:1}function n(e){var t=i.normalize(e),r=-t.xx-t.yy,o=t.xx*t.yy-t.xy*t.yx,s=Math.sqrt(r*r-4*o),n=-(r+(0>r?-s:s))/2,d=o/n,l=t.xy/(n-t.xx),h=1,u=t.xy/(d-t.xx),m=1;a(n,d)&&(l=1,h=0,u=0,m=1),isFinite(l)||(l=1,h=(n-t.xx)/t.xy,isFinite(h)||(l=(n-t.yy)/t.yx,h=1,isFinite(l)||(l=1,h=t.yx/(n-t.yy)))),isFinite(u)||(u=1,m=(d-t.xx)/t.xy,isFinite(m)||(u=(d-t.yy)/t.yx,m=1,isFinite(u)||(u=1,m=t.yx/(d-t.yy))));var c=Math.sqrt(l*l+h*h),f=Math.sqrt(u*u+m*m);return isFinite(l/=c)||(l=0),isFinite(h/=c)||(h=0),isFinite(u/=f)||(u=0),isFinite(m/=f)||(m=0),{value1:n,value2:d,vector1:{x:l,y:h},vector2:{x:u,y:m}}}function d(e,t){var i=s(e),a=t.angle1=(Math.atan2(e.yx,e.yy)+Math.atan2(-i*e.xy,i*e.xx))/2,o=Math.cos(a),n=Math.sin(a);return t.sx=r(e.xx/o,o,-e.xy/n,n),t.sy=r(e.yy/o,o,e.yx/n,n),t}function l(e,t){var i=s(e),a=t.angle2=(Math.atan2(i*e.yx,i*e.xx)+Math.atan2(-e.xy,e.yy))/2,o=Math.cos(a),n=Math.sin(a);return t.sx=r(e.xx/o,o,e.yx/n,n),t.sy=r(e.yy/o,o,-e.xy/n,n),t}return e.decompose=function(e){var r=i.normalize(e),s={dx:r.dx,dy:r.dy,sx:1,sy:1,angle1:0,angle2:0};if(a(r.xy,0)&&a(r.yx,0))return t.mixin(s,{sx:r.xx,sy:r.yy});if(a(r.xx*r.yx,-r.xy*r.yy))return d(r,s);if(a(r.xx*r.xy,-r.yx*r.yy))return l(r,s);var h=o(r),u=n([r,h]),m=n([h,r]),c=new i.Matrix2D({xx:u.vector1.x,xy:u.vector2.x,yx:u.vector1.y,yy:u.vector2.y}),f=new i.Matrix2D({xx:m.vector1.x,xy:m.vector1.y,yx:m.vector2.x,yy:m.vector2.y}),p=new i.Matrix2D([i.invert(c),r,i.invert(f)]);return d(f,s),p.xx*=s.sx,p.yy*=s.sy,l(c,s),p.xx*=s.sx,p.yy*=s.sy,t.mixin(s,{sx:p.xx,sy:p.yy})}});//# sourceMappingURL=decompose.js.map