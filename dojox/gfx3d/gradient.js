//>>built
define("dojox/gfx3d/gradient",["dojo/_base/lang","./matrix","./vector"],function(e,t,a){var i=e.getObject("dojox.gfx3d",!0),r=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},n=32;return i.gradient=function(e,i,o,s,l,d,u){for(var m=t.normalize(u),c=t.multiplyPoint(m,s*Math.cos(l)+o.x,s*Math.sin(l)+o.y,o.z),h=t.multiplyPoint(m,s*Math.cos(d)+o.x,s*Math.sin(d)+o.y,o.z),f=t.multiplyPoint(m,o.x,o.y,o.z),g=(d-l)/n,p=r(c,h)/2,v=e[i.type],y=i.finish,k=i.color,b=[{offset:0,color:v.call(e,a.substract(c,f),y,k)}],M=l+g;d>M;M+=g){var x=t.multiplyPoint(m,s*Math.cos(M)+o.x,s*Math.sin(M)+o.y,o.z),w=r(c,x),j=r(h,x);b.push({offset:w/(w+j),color:v.call(e,a.substract(x,f),y,k)})}return b.push({offset:1,color:v.call(e,a.substract(h,f),y,k)}),{type:"linear",x1:0,y1:-p,x2:0,y2:p,colors:b}},i.gradient});//# sourceMappingURL=gradient.js.map