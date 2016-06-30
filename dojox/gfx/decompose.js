//>>built
define("dojox/gfx/decompose",["./_base","dojo/_base/lang","./matrix"],function(e,t,i){function r(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t))}function a(e,t,i,r){return isFinite(e)?isFinite(i)?(t=Math.abs(t),r=Math.abs(r),(t*e+r*i)/(t+r)):e:i}function n(e){var r=new i.Matrix2D(e);return t.mixin(r,{dx:0,dy:0,xy:r.yx,yx:r.xy})}function o(e){return e.xx*e.yy<0||e.xy*e.yx>0?-1:1}function s(e){var t=i.normalize(e),a=-t.xx-t.yy,n=t.xx*t.yy-t.xy*t.yx,o=Math.sqrt(a*a-4*n),s=-(a+(0>a?-o:o))/2,d=n/s,l=t.xy/(s-t.xx),u=1,c=t.xy/(d-t.xx),h=1;r(s,d)&&(l=1,u=0,c=0,h=1),isFinite(l)||(l=1,u=(s-t.xx)/t.xy,isFinite(u)||(l=(s-t.yy)/t.yx,u=1,isFinite(l)||(l=1,u=t.yx/(s-t.yy)))),isFinite(c)||(c=1,h=(d-t.xx)/t.xy,isFinite(h)||(c=(d-t.yy)/t.yx,h=1,isFinite(c)||(c=1,h=t.yx/(d-t.yy))));var f=Math.sqrt(l*l+u*u),m=Math.sqrt(c*c+h*h);return isFinite(l/=f)||(l=0),isFinite(u/=f)||(u=0),isFinite(c/=m)||(c=0),isFinite(h/=m)||(h=0),{value1:s,value2:d,vector1:{x:l,y:u},vector2:{x:c,y:h}}}function d(e,t){var i=o(e),r=t.angle1=(Math.atan2(e.yx,e.yy)+Math.atan2(-i*e.xy,i*e.xx))/2,n=Math.cos(r),s=Math.sin(r);return t.sx=a(e.xx/n,n,-e.xy/s,s),t.sy=a(e.yy/n,n,e.yx/s,s),t}function l(e,t){var i=o(e),r=t.angle2=(Math.atan2(i*e.yx,i*e.xx)+Math.atan2(-e.xy,e.yy))/2,n=Math.cos(r),s=Math.sin(r);return t.sx=a(e.xx/n,n,e.yx/s,s),t.sy=a(e.yy/n,n,-e.xy/s,s),t}return e.decompose=function(e){var a=i.normalize(e),o={dx:a.dx,dy:a.dy,sx:1,sy:1,angle1:0,angle2:0};if(r(a.xy,0)&&r(a.yx,0))return t.mixin(o,{sx:a.xx,sy:a.yy});if(r(a.xx*a.yx,-a.xy*a.yy))return d(a,o);if(r(a.xx*a.xy,-a.yx*a.yy))return l(a,o);var u=n(a),c=s([a,u]),h=s([u,a]),f=new i.Matrix2D({xx:c.vector1.x,xy:c.vector2.x,yx:c.vector1.y,yy:c.vector2.y}),m=new i.Matrix2D({xx:h.vector1.x,xy:h.vector1.y,yx:h.vector2.x,yy:h.vector2.y}),p=new i.Matrix2D([i.invert(f),a,i.invert(m)]);return d(m,o),p.xx*=o.sx,p.yy*=o.sy,l(f,o),p.xx*=o.sx,p.yy*=o.sy,t.mixin(o,{sx:p.xx,sy:p.yy})}});//# sourceMappingURL=decompose.js.map