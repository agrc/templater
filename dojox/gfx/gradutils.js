//>>built
define("dojox/gfx/gradutils",["./_base","dojo/_base/lang","./matrix","dojo/_base/Color"],function(e,t,i,a){function r(e,t){if(0>=e)return t[0].color;var i=t.length;if(e>=1)return t[i-1].color;for(var r=0;i>r;++r){var o=t[r];if(o.offset>=e){if(r){var n=t[r-1];return a.blendColors(new a(n.color),new a(o.color),(e-n.offset)/(o.offset-n.offset))}return o.color}}return t[i-1].color}var o=e.gradutils={};return o.getColor=function(e,t){var o;if(e){switch(e.type){case"linear":var n=Math.atan2(e.y2-e.y1,e.x2-e.x1),s=i.rotate(-n),d=i.project(e.x2-e.x1,e.y2-e.y1),l=i.multiplyPoint(d,t),h=i.multiplyPoint(d,e.x1,e.y1),u=i.multiplyPoint(d,e.x2,e.y2),c=i.multiplyPoint(s,u.x-h.x,u.y-h.y).x;o=i.multiplyPoint(s,l.x-h.x,l.y-h.y).x/c;break;case"radial":var m=t.x-e.cx,f=t.y-e.cy;o=Math.sqrt(m*m+f*f)/e.r}return r(o,e.colors)}return new a(e||[0,0,0,0])},o.reverse=function(e){if(e)switch(e.type){case"linear":case"radial":if(e=t.delegate(e),e.colors){for(var i,a=e.colors,r=a.length,o=0,n=e.colors=new Array(a.length);r>o;++o)i=a[o],n[o]={offset:1-i.offset,color:i.color};n.sort(function(e,t){return e.offset-t.offset})}}return e},o});//# sourceMappingURL=gradutils.js.map