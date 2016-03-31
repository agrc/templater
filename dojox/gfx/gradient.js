//>>built
define("dojox/gfx/gradient",["dojo/_base/lang","./matrix","dojo/_base/Color"],function(e,t,i){function a(e,i,a,r,o,n){var s=t.multiplyPoint(a,e,i),l=t.multiplyPoint(r,s);return{r:s,p:l,o:t.multiplyPoint(o,l).x/n}}function r(e,t){return e.o-t.o}var o=e.getObject("dojox.gfx.gradient",!0),n=i;return o.rescale=function(e,t,a){var r,o=e.length,s=t>a;if(s){var l=t;t=a,a=l}if(!o)return[];if(a<=e[0].offset)r=[{offset:0,color:e[0].color},{offset:1,color:e[0].color}];else if(t>=e[o-1].offset)r=[{offset:0,color:e[o-1].color},{offset:1,color:e[o-1].color}];else{var d,h,u,c=a-t;for(r=[],0>t&&r.push({offset:0,color:new n(e[0].color)}),u=0;o>u&&(d=e[u],!(d.offset>=t));++u);for(u?(h=e[u-1],r.push({offset:0,color:i.blendColors(new n(h.color),new n(d.color),(t-h.offset)/(d.offset-h.offset))})):r.push({offset:0,color:new n(d.color)});o>u&&(d=e[u],!(d.offset>=a));++u)r.push({offset:(d.offset-t)/c,color:new n(d.color)});o>u?(h=e[u-1],r.push({offset:1,color:i.blendColors(new n(h.color),new n(d.color),(a-h.offset)/(d.offset-h.offset))})):r.push({offset:1,color:new n(e[o-1].color)})}if(s)for(r.reverse(),u=0,o=r.length;o>u;++u)d=r[u],d.offset=1-d.offset;return r},o.project=function(e,i,n,s,l,d){e=e||t.identity;var h=t.multiplyPoint(e,i.x1,i.y1),u=t.multiplyPoint(e,i.x2,i.y2),c=Math.atan2(u.y-h.y,u.x-h.x),m=t.project(u.x-h.x,u.y-h.y),f=t.multiplyPoint(m,h),p=t.multiplyPoint(m,u),g=new t.Matrix2D([t.rotate(-c),{dx:-f.x,dy:-f.y}]),y=t.multiplyPoint(g,p).x,v=[a(n.x,n.y,e,m,g,y),a(s.x,s.y,e,m,g,y),a(n.x,s.y,e,m,g,y),a(s.x,n.y,e,m,g,y)].sort(r),b=v[0].o,M=v[3].o,x=o.rescale(i.colors,b,M);Math.atan2(v[3].r.y-v[0].r.y,v[3].r.x-v[0].r.x);return{type:"linear",x1:v[0].p.x,y1:v[0].p.y,x2:v[3].p.x,y2:v[3].p.y,colors:x,angle:c}},o});//# sourceMappingURL=gradient.js.map