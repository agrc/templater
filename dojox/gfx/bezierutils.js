//>>built
define("dojox/gfx/bezierutils",["./_base"],function(e){var t=e.bezierutils={},i=.1,a=(t.tAtLength=function(e,t){var i=0,a=6==e.length,n=0,d=0,l=a?o:s,h=function(o,s){for(var u=0,m=0;m<o.length-2;m+=2)u+=r(o[m],o[m+1],o[m+2],o[m+3]);var c=a?r(e[0],e[1],e[4],e[5]):r(e[0],e[1],e[6],e[7]);if(u-c>s||n+u>t+s){++d;var f=l(o,.5);if(h(f[0],s),Math.abs(n-t)<=s)return;return void h(f[1],s)}n+=u,i+=1/(1<<d)};return t&&h(e,.5),i},t.computeLength=function(e){for(var t=6==e.length,s=0,d=0;d<e.length-2;d+=2)s+=r(e[d],e[d+1],e[d+2],e[d+3]);var l=t?r(e[0],e[1],e[4],e[5]):r(e[0],e[1],e[6],e[7]);if(s-l>i){var h=t?o(e,.5):n(e,.5),u=a(h[0],t);return u+=a(h[1],t)}return s}),r=t.distance=function(e,t,i,a){return Math.sqrt((i-e)*(i-e)+(a-t)*(a-t))},o=function(e,t){var i=1-t,a=i*i,r=t*t,o=e[0],n=e[1],s=e[2],d=e[3],l=e[4],h=e[5],u=i*o+t*s,m=i*n+t*d,c=i*s+t*l,f=i*d+t*h,p=a*o+2*i*t*s+r*l,g=a*n+2*i*t*d+r*h;return[[o,n,u,m,p,g],[p,g,c,f,l,h]]},n=function(e,t){var i=1-t,a=i*i,r=a*i,o=t*t,n=o*t,s=e[0],d=e[1],l=e[2],h=e[3],u=e[4],m=e[5],c=e[6],f=e[7],p=i*s+t*l,g=i*d+t*h,y=i*u+t*c,v=i*m+t*f,b=a*s+2*i*t*l+o*u,M=a*d+2*i*t*h+o*m,k=a*l+2*i*t*u+o*c,w=a*h+2*i*t*m+o*f,_=r*s+3*a*t*l+3*i*o*u+n*c,x=r*d+3*a*t*h+3*i*o*m+n*f;return[[s,d,p,g,b,M,_,x],[_,x,k,w,y,v,c,f]]},s=t.splitBezierAtT=function(e,t){return 6==e.length?o(e,t):n(e,t)};return t});//# sourceMappingURL=bezierutils.js.map