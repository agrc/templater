//>>built
define("dojox/gfx/decompose",["./_base","dojo/_base/lang","./matrix"],function(e,t,a){function i(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t))}function r(e,t,a,i){return isFinite(e)?isFinite(a)?(t=Math.abs(t),i=Math.abs(i),(t*e+i*a)/(t+i)):e:a}function n(e){var i=new a.Matrix2D(e);return t.mixin(i,{dx:0,dy:0,xy:i.yx,yx:i.xy})}function o(e){return e.xx*e.yy<0||e.xy*e.yx>0?-1:1}function s(e){var t=a.normalize(e),r=-t.xx-t.yy,n=t.xx*t.yy-t.xy*t.yx,o=Math.sqrt(r*r-4*n),s=-(r+(r<0?-o:o))/2,d=n/s,l=t.xy/(s-t.xx),u=1,h=t.xy/(d-t.xx),m=1;i(s,d)&&(l=1,u=0,h=0,m=1),isFinite(l)||(l=1,u=(s-t.xx)/t.xy,isFinite(u)||(l=(s-t.yy)/t.yx,u=1,isFinite(l)||(l=1,u=t.yx/(s-t.yy)))),isFinite(h)||(h=1,m=(d-t.xx)/t.xy,isFinite(m)||(h=(d-t.yy)/t.yx,m=1,isFinite(h)||(h=1,m=t.yx/(d-t.yy))));var c=Math.sqrt(l*l+u*u),f=Math.sqrt(h*h+m*m);return isFinite(l/=c)||(l=0),isFinite(u/=c)||(u=0),isFinite(h/=f)||(h=0),isFinite(m/=f)||(m=0),{value1:s,value2:d,vector1:{x:l,y:u},vector2:{x:h,y:m}}}function d(e,t){var a=o(e),i=t.angle1=(Math.atan2(e.yx,e.yy)+Math.atan2(-a*e.xy,a*e.xx))/2,n=Math.cos(i),s=Math.sin(i);return t.sx=r(e.xx/n,n,-e.xy/s,s),t.sy=r(e.yy/n,n,e.yx/s,s),t}function l(e,t){var a=o(e),i=t.angle2=(Math.atan2(a*e.yx,a*e.xx)+Math.atan2(-e.xy,e.yy))/2,n=Math.cos(i),s=Math.sin(i);return t.sx=r(e.xx/n,n,e.yx/s,s),t.sy=r(e.yy/n,n,-e.xy/s,s),t}return e.decompose=function(e){var r=a.normalize(e),o={dx:r.dx,dy:r.dy,sx:1,sy:1,angle1:0,angle2:0};if(i(r.xy,0)&&i(r.yx,0))return t.mixin(o,{sx:r.xx,sy:r.yy});if(i(r.xx*r.yx,-r.xy*r.yy))return d(r,o);if(i(r.xx*r.xy,-r.yx*r.yy))return l(r,o);var u=n(r),h=s([r,u]),m=s([u,r]),c=new a.Matrix2D({xx:h.vector1.x,xy:h.vector2.x,yx:h.vector1.y,yy:h.vector2.y}),f=new a.Matrix2D({xx:m.vector1.x,xy:m.vector1.y,yx:m.vector2.x,yy:m.vector2.y}),y=new a.Matrix2D([a.invert(c),r,a.invert(f)]);return d(f,o),y.xx*=o.sx,y.yy*=o.sy,l(c,o),y.xx*=o.sx,y.yy*=o.sy,t.mixin(o,{sx:y.xx,sy:y.yy})}});//# sourceMappingURL=decompose.js.map