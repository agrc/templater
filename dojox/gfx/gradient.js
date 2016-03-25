//>>built
define("dojox/gfx/gradient",["dojo/_base/lang","./matrix","dojo/_base/Color"],function(e,t,i){function a(e,i,a,r,o,n){var s=t.multiplyPoint(a,e,i),d=t.multiplyPoint(r,s);return{r:s,p:d,o:t.multiplyPoint(o,d).x/n}}function r(e,t){return e.o-t.o}var o=e.getObject("dojox.gfx.gradient",!0),n=i;return o.rescale=function(e,t,a){var r,o=e.length,s=t>a;if(s){var d=t;t=a,a=d}if(!o)return[];if(a<=e[0].offset)r=[{offset:0,color:e[0].color},{offset:1,color:e[0].color}];else if(t>=e[o-1].offset)r=[{offset:0,color:e[o-1].color},{offset:1,color:e[o-1].color}];else{var l,h,u,c=a-t;for(r=[],0>t&&r.push({offset:0,color:new n(e[0].color)}),u=0;o>u&&(l=e[u],!(l.offset>=t));++u);for(u?(h=e[u-1],r.push({offset:0,color:i.blendColors(new n(h.color),new n(l.color),(t-h.offset)/(l.offset-h.offset))})):r.push({offset:0,color:new n(l.color)});o>u&&(l=e[u],!(l.offset>=a));++u)r.push({offset:(l.offset-t)/c,color:new n(l.color)});o>u?(h=e[u-1],r.push({offset:1,color:i.blendColors(new n(h.color),new n(l.color),(a-h.offset)/(l.offset-h.offset))})):r.push({offset:1,color:new n(e[o-1].color)})}if(s)for(r.reverse(),u=0,o=r.length;o>u;++u)l=r[u],l.offset=1-l.offset;return r},o.project=function(e,i,n,s,d,l){e=e||t.identity;var h=t.multiplyPoint(e,i.x1,i.y1),u=t.multiplyPoint(e,i.x2,i.y2),c=Math.atan2(u.y-h.y,u.x-h.x),m=t.project(u.x-h.x,u.y-h.y),f=t.multiplyPoint(m,h),p=t.multiplyPoint(m,u),y=new t.Matrix2D([t.rotate(-c),{dx:-f.x,dy:-f.y}]),g=t.multiplyPoint(y,p).x,v=[a(n.x,n.y,e,m,y,g),a(s.x,s.y,e,m,y,g),a(n.x,s.y,e,m,y,g),a(s.x,n.y,e,m,y,g)].sort(r),b=v[0].o,M=v[3].o,k=o.rescale(i.colors,b,M);Math.atan2(v[3].r.y-v[0].r.y,v[3].r.x-v[0].r.x);return{type:"linear",x1:v[0].p.x,y1:v[0].p.y,x2:v[3].p.x,y2:v[3].p.y,colors:k,angle:c}},o});//# sourceMappingURL=gradient.js.map