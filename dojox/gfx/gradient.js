//>>built
define("dojox/gfx/gradient",["dojo/_base/lang","./matrix","dojo/_base/Color"],function(e,t,a){function i(e,a,i,r,n,o){var s=t.multiplyPoint(i,e,a),l=t.multiplyPoint(r,s);return{r:s,p:l,o:t.multiplyPoint(n,l).x/o}}function r(e,t){return e.o-t.o}var n=e.getObject("dojox.gfx.gradient",!0),o=a;return n.rescale=function(e,t,i){var r,n=e.length,s=i<t;if(s){var l=t;t=i,i=l}if(!n)return[];if(i<=e[0].offset)r=[{offset:0,color:e[0].color},{offset:1,color:e[0].color}];else if(t>=e[n-1].offset)r=[{offset:0,color:e[n-1].color},{offset:1,color:e[n-1].color}];else{var d,u,h,m=i-t;for(r=[],t<0&&r.push({offset:0,color:new o(e[0].color)}),h=0;h<n&&(d=e[h],!(d.offset>=t));++h);for(h?(u=e[h-1],r.push({offset:0,color:a.blendColors(new o(u.color),new o(d.color),(t-u.offset)/(d.offset-u.offset))})):r.push({offset:0,color:new o(d.color)});h<n&&(d=e[h],!(d.offset>=i));++h)r.push({offset:(d.offset-t)/m,color:new o(d.color)});h<n?(u=e[h-1],r.push({offset:1,color:a.blendColors(new o(u.color),new o(d.color),(i-u.offset)/(d.offset-u.offset))})):r.push({offset:1,color:new o(e[n-1].color)})}if(s)for(r.reverse(),h=0,n=r.length;h<n;++h)d=r[h],d.offset=1-d.offset;return r},n.project=function(e,a,o,s,l,d){e=e||t.identity;var u=t.multiplyPoint(e,a.x1,a.y1),h=t.multiplyPoint(e,a.x2,a.y2),m=Math.atan2(h.y-u.y,h.x-u.x),c=t.project(h.x-u.x,h.y-u.y),f=t.multiplyPoint(c,u),p=t.multiplyPoint(c,h),g=new t.Matrix2D([t.rotate(-m),{dx:-f.x,dy:-f.y}]),v=t.multiplyPoint(g,p).x,y=[i(o.x,o.y,e,c,g,v),i(s.x,s.y,e,c,g,v),i(o.x,s.y,e,c,g,v),i(s.x,o.y,e,c,g,v)].sort(r),k=y[0].o,b=y[3].o,M=n.rescale(a.colors,k,b);Math.atan2(y[3].r.y-y[0].r.y,y[3].r.x-y[0].r.x);return{type:"linear",x1:y[0].p.x,y1:y[0].p.y,x2:y[3].p.x,y2:y[3].p.y,colors:M,angle:m}},n});//# sourceMappingURL=gradient.js.map