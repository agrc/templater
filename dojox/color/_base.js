//>>built
define("dojox/color/_base",["../main","dojo/_base/lang","dojo/_base/Color","dojo/colors"],function(e,t,a,i){var r=t.getObject("color",!0,e);return r.Color=a,r.blend=a.blendColors,r.fromRgb=a.fromRgb,r.fromHex=a.fromHex,r.fromArray=a.fromArray,r.fromString=a.fromString,r.greyscale=i.makeGrey,t.mixin(r,{fromCmy:function(e,i,r){t.isArray(e)?(i=e[1],r=e[2],e=e[0]):t.isObject(e)&&(i=e.m,r=e.y,e=e.c),e/=100,i/=100,r/=100;var o=1-e,d=1-i,n=1-r;return new a({r:Math.round(255*o),g:Math.round(255*d),b:Math.round(255*n)})},fromCmyk:function(e,i,r,o){t.isArray(e)?(i=e[1],r=e[2],o=e[3],e=e[0]):t.isObject(e)&&(i=e.m,r=e.y,o=e.b,e=e.c),e/=100,i/=100,r/=100,o/=100;var d,n,l;return d=1-Math.min(1,e*(1-o)+o),n=1-Math.min(1,i*(1-o)+o),l=1-Math.min(1,r*(1-o)+o),new a({r:Math.round(255*d),g:Math.round(255*n),b:Math.round(255*l)})},fromHsl:function(e,i,r){for(t.isArray(e)?(i=e[1],r=e[2],e=e[0]):t.isObject(e)&&(i=e.s,r=e.l,e=e.h),i/=100,r/=100;e<0;)e+=360;for(;e>=360;)e-=360;var o,d,n;return e<120?(o=(120-e)/60,d=e/60,n=0):e<240?(o=0,d=(240-e)/60,n=(e-120)/60):(o=(e-240)/60,d=0,n=(360-e)/60),o=2*i*Math.min(o,1)+(1-i),d=2*i*Math.min(d,1)+(1-i),n=2*i*Math.min(n,1)+(1-i),r<.5?(o*=r,d*=r,n*=r):(o=(1-r)*o+2*r-1,d=(1-r)*d+2*r-1,n=(1-r)*n+2*r-1),new a({r:Math.round(255*o),g:Math.round(255*d),b:Math.round(255*n)})}}),r.fromHsv=function(e,i,r){t.isArray(e)?(i=e[1],r=e[2],e=e[0]):t.isObject(e)&&(i=e.s,r=e.v,e=e.h),360==e&&(e=0),i/=100,r/=100;var o,d,n;if(0==i)o=r,n=r,d=r;else{var l=e/60,s=Math.floor(l),m=l-s,f=r*(1-i),u=r*(1-i*m),h=r*(1-i*(1-m));switch(s){case 0:o=r,d=h,n=f;break;case 1:o=u,d=r,n=f;break;case 2:o=f,d=r,n=h;break;case 3:o=f,d=u,n=r;break;case 4:o=h,d=f,n=r;break;case 5:o=r,d=f,n=u}}return new a({r:Math.round(255*o),g:Math.round(255*d),b:Math.round(255*n)})},t.extend(a,{toCmy:function(){var e=1-this.r/255,t=1-this.g/255,a=1-this.b/255;return{c:Math.round(100*e),m:Math.round(100*t),y:Math.round(100*a)}},toCmyk:function(){var e,t,a,i,r=this.r/255,o=this.g/255,d=this.b/255;return i=Math.min(1-r,1-o,1-d),e=(1-r-i)/(1-i),t=(1-o-i)/(1-i),a=(1-d-i)/(1-i),{c:Math.round(100*e),m:Math.round(100*t),y:Math.round(100*a),b:Math.round(100*i)}},toHsl:function(){var e=this.r/255,t=this.g/255,a=this.b/255,i=Math.min(e,a,t),r=Math.max(e,t,a),o=r-i,d=0,n=0,l=(i+r)/2;return l>0&&l<1&&(n=o/(l<.5?2*l:2-2*l)),o>0&&(r==e&&r!=t&&(d+=(t-a)/o),r==t&&r!=a&&(d+=2+(a-e)/o),r==a&&r!=e&&(d+=4+(e-t)/o),d*=60),{h:d,s:Math.round(100*n),l:Math.round(100*l)}},toHsv:function(){var e=this.r/255,t=this.g/255,a=this.b/255,i=Math.min(e,a,t),r=Math.max(e,t,a),o=r-i,d=null,n=0==r?0:o/r;return 0==n?d=0:(d=e==r?60*(t-a)/o:t==r?120+60*(a-e)/o:240+60*(e-t)/o)<0&&(d+=360),{h:d,s:Math.round(100*n),v:Math.round(100*r)}}}),r});//# sourceMappingURL=_base.js.map