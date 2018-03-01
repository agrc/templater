//>>built
define("dojox/gfx/gradient",["dojo/_base/lang","./matrix","dojo/_base/Color"],function(e,t,a){function i(e,a,i,r,o,n){var s=t.multiplyPoint(i,e,a),d=t.multiplyPoint(r,s);return{r:s,p:d,o:t.multiplyPoint(o,d).x/n}}function r(e,t){return e.o-t.o}var o=e.getObject("dojox.gfx.gradient",!0),n=a;return o.rescale=function(e,t,i){var r,o=e.length,s=i<t;if(s){var d=t;t=i,i=d}if(!o)return[];if(i<=e[0].offset)r=[{offset:0,color:e[0].color},{offset:1,color:e[0].color}];else if(t>=e[o-1].offset)r=[{offset:0,color:e[o-1].color},{offset:1,color:e[o-1].color}];else{var l,u,h,m=i-t;for(r=[],t<0&&r.push({offset:0,color:new n(e[0].color)}),h=0;h<o&&(l=e[h],!(l.offset>=t));++h);for(h?(u=e[h-1],r.push({offset:0,color:a.blendColors(new n(u.color),new n(l.color),(t-u.offset)/(l.offset-u.offset))})):r.push({offset:0,color:new n(l.color)});h<o&&(l=e[h],!(l.offset>=i));++h)r.push({offset:(l.offset-t)/m,color:new n(l.color)});h<o?(u=e[h-1],r.push({offset:1,color:a.blendColors(new n(u.color),new n(l.color),(i-u.offset)/(l.offset-u.offset))})):r.push({offset:1,color:new n(e[o-1].color)})}if(s)for(r.reverse(),h=0,o=r.length;h<o;++h)l=r[h],l.offset=1-l.offset;return r},o.project=function(e,a,n,s,d,l){e=e||t.identity;var u=t.multiplyPoint(e,a.x1,a.y1),h=t.multiplyPoint(e,a.x2,a.y2),m=Math.atan2(h.y-u.y,h.x-u.x),c=t.project(h.x-u.x,h.y-u.y),f=t.multiplyPoint(c,u),p=t.multiplyPoint(c,h),g=new t.Matrix2D([t.rotate(-m),{dx:-f.x,dy:-f.y}]),y=t.multiplyPoint(g,p).x,v=[i(n.x,n.y,e,c,g,y),i(s.x,s.y,e,c,g,y),i(n.x,s.y,e,c,g,y),i(s.x,n.y,e,c,g,y)].sort(r),b=v[0].o,M=v[3].o,k=o.rescale(a.colors,b,M);Math.atan2(v[3].r.y-v[0].r.y,v[3].r.x-v[0].r.x);return{type:"linear",x1:v[0].p.x,y1:v[0].p.y,x2:v[3].p.x,y2:v[3].p.y,colors:k,angle:m}},o});//# sourceMappingURL=gradient.js.map