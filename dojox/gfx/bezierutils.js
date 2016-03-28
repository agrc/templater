//>>built
define("dojox/gfx/bezierutils",["./_base"],function(e){var t=e.bezierutils={},i=.1,a=(t.tAtLength=function(e,t){var i=0,a=6==e.length,n=0,l=0,d=a?r:s,h=function(r,s){for(var u=0,c=0;c<r.length-2;c+=2)u+=o(r[c],r[c+1],r[c+2],r[c+3]);var m=a?o(e[0],e[1],e[4],e[5]):o(e[0],e[1],e[6],e[7]);if(u-m>s||n+u>t+s){++l;var f=d(r,.5);if(h(f[0],s),Math.abs(n-t)<=s)return;return void h(f[1],s)}n+=u,i+=1/(1<<l)};return t&&h(e,.5),i},t.computeLength=function(e){for(var t=6==e.length,s=0,l=0;l<e.length-2;l+=2)s+=o(e[l],e[l+1],e[l+2],e[l+3]);var d=t?o(e[0],e[1],e[4],e[5]):o(e[0],e[1],e[6],e[7]);if(s-d>i){var h=t?r(e,.5):n(e,.5),u=a(h[0],t);return u+=a(h[1],t)}return s}),o=t.distance=function(e,t,i,a){return Math.sqrt((i-e)*(i-e)+(a-t)*(a-t))},r=function(e,t){var i=1-t,a=i*i,o=t*t,r=e[0],n=e[1],s=e[2],l=e[3],d=e[4],h=e[5],u=i*r+t*s,c=i*n+t*l,m=i*s+t*d,f=i*l+t*h,p=a*r+2*i*t*s+o*d,g=a*n+2*i*t*l+o*h;return[[r,n,u,c,p,g],[p,g,m,f,d,h]]},n=function(e,t){var i=1-t,a=i*i,o=a*i,r=t*t,n=r*t,s=e[0],l=e[1],d=e[2],h=e[3],u=e[4],c=e[5],m=e[6],f=e[7],p=i*s+t*d,g=i*l+t*h,y=i*u+t*m,v=i*c+t*f,b=a*s+2*i*t*d+r*u,M=a*l+2*i*t*h+r*c,k=a*d+2*i*t*u+r*m,w=a*h+2*i*t*c+r*f,x=o*s+3*a*t*d+3*i*r*u+n*m,j=o*l+3*a*t*h+3*i*r*c+n*f;return[[s,l,p,g,b,M,x,j],[x,j,k,w,y,v,m,f]]},s=t.splitBezierAtT=function(e,t){return 6==e.length?r(e,t):n(e,t)};return t});//# sourceMappingURL=bezierutils.js.map