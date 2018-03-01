//>>built
define("dojox/gfx/matrix",["./_base","dojo/_base/lang"],function(e,t){var i=e.matrix={},r={};return i._degToRad=function(e){return r[e]||(r[e]=Math.PI*e/180)},i._radToDeg=function(e){return e/Math.PI*180},i.Matrix2D=function(e){if(e)if("number"==typeof e)this.xx=this.yy=e;else if(e instanceof Array){if(e.length>0){for(var r=i.normalize(e[0]),a=1;a<e.length;++a){var n=r,o=i.normalize(e[a]);r=new i.Matrix2D,r.xx=n.xx*o.xx+n.xy*o.yx,r.xy=n.xx*o.xy+n.xy*o.yy,r.yx=n.yx*o.xx+n.yy*o.yx,r.yy=n.yx*o.xy+n.yy*o.yy,r.dx=n.xx*o.dx+n.xy*o.dy+n.dx,r.dy=n.yx*o.dx+n.yy*o.dy+n.dy}t.mixin(this,r)}}else t.mixin(this,e)},t.extend(i.Matrix2D,{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0}),t.mixin(i,{identity:new i.Matrix2D,flipX:new i.Matrix2D({xx:-1}),flipY:new i.Matrix2D({yy:-1}),flipXY:new i.Matrix2D({xx:-1,yy:-1}),translate:function(e,t){return arguments.length>1?new i.Matrix2D({dx:e,dy:t}):new i.Matrix2D({dx:e.x,dy:e.y})},scale:function(e,t){return arguments.length>1?new i.Matrix2D({xx:e,yy:t}):"number"==typeof e?new i.Matrix2D({xx:e,yy:e}):new i.Matrix2D({xx:e.x,yy:e.y})},rotate:function(e){var t=Math.cos(e),r=Math.sin(e);return new i.Matrix2D({xx:t,xy:-r,yx:r,yy:t})},rotateg:function(e){return i.rotate(i._degToRad(e))},skewX:function(e){return new i.Matrix2D({xy:Math.tan(e)})},skewXg:function(e){return i.skewX(i._degToRad(e))},skewY:function(e){return new i.Matrix2D({yx:Math.tan(e)})},skewYg:function(e){return i.skewY(i._degToRad(e))},reflect:function(e,t){1==arguments.length&&(t=e.y,e=e.x);var r=e*e,a=t*t,n=r+a,o=2*e*t/n;return new i.Matrix2D({xx:2*r/n-1,xy:o,yx:o,yy:2*a/n-1})},project:function(e,t){1==arguments.length&&(t=e.y,e=e.x);var r=e*e,a=t*t,n=r+a,o=e*t/n;return new i.Matrix2D({xx:r/n,xy:o,yx:o,yy:a/n})},normalize:function(e){return e instanceof i.Matrix2D?e:new i.Matrix2D(e)},isIdentity:function(e){return 1==e.xx&&0==e.xy&&0==e.yx&&1==e.yy&&0==e.dx&&0==e.dy},clone:function(e){var t=new i.Matrix2D;for(var r in e)"number"==typeof e[r]&&"number"==typeof t[r]&&t[r]!=e[r]&&(t[r]=e[r]);return t},invert:function(e){var t=i.normalize(e),r=t.xx*t.yy-t.xy*t.yx;return t=new i.Matrix2D({xx:t.yy/r,xy:-t.xy/r,yx:-t.yx/r,yy:t.xx/r,dx:(t.xy*t.dy-t.yy*t.dx)/r,dy:(t.yx*t.dx-t.xx*t.dy)/r})},_multiplyPoint:function(e,t,i){return{x:e.xx*t+e.xy*i+e.dx,y:e.yx*t+e.yy*i+e.dy}},multiplyPoint:function(e,t,r){var a=i.normalize(e);return"number"==typeof t&&"number"==typeof r?i._multiplyPoint(a,t,r):i._multiplyPoint(a,t.x,t.y)},multiplyRectangle:function(e,t){var r=i.normalize(e);if(t=t||{x:0,y:0,width:0,height:0},i.isIdentity(r))return{x:t.x,y:t.y,width:t.width,height:t.height};var a=i.multiplyPoint(r,t.x,t.y),n=i.multiplyPoint(r,t.x,t.y+t.height),o=i.multiplyPoint(r,t.x+t.width,t.y),s=i.multiplyPoint(r,t.x+t.width,t.y+t.height),d=Math.min(a.x,n.x,o.x,s.x),l=Math.min(a.y,n.y,o.y,s.y);return{x:d,y:l,width:Math.max(a.x,n.x,o.x,s.x)-d,height:Math.max(a.y,n.y,o.y,s.y)-l}},multiply:function(e){for(var t=i.normalize(e),r=1;r<arguments.length;++r){var a=t,n=i.normalize(arguments[r]);t=new i.Matrix2D,t.xx=a.xx*n.xx+a.xy*n.yx,t.xy=a.xx*n.xy+a.xy*n.yy,t.yx=a.yx*n.xx+a.yy*n.yx,t.yy=a.yx*n.xy+a.yy*n.yy,t.dx=a.xx*n.dx+a.xy*n.dy+a.dx,t.dy=a.yx*n.dx+a.yy*n.dy+a.dy}return t},_sandwich:function(e,t,r){return i.multiply(i.translate(t,r),e,i.translate(-t,-r))},scaleAt:function(e,t,r,a){switch(arguments.length){case 4:return i._sandwich(i.scale(e,t),r,a);case 3:return"number"==typeof r?i._sandwich(i.scale(e),t,r):i._sandwich(i.scale(e,t),r.x,r.y)}return i._sandwich(i.scale(e),t.x,t.y)},rotateAt:function(e,t,r){return arguments.length>2?i._sandwich(i.rotate(e),t,r):i._sandwich(i.rotate(e),t.x,t.y)},rotategAt:function(e,t,r){return arguments.length>2?i._sandwich(i.rotateg(e),t,r):i._sandwich(i.rotateg(e),t.x,t.y)},skewXAt:function(e,t,r){return arguments.length>2?i._sandwich(i.skewX(e),t,r):i._sandwich(i.skewX(e),t.x,t.y)},skewXgAt:function(e,t,r){return arguments.length>2?i._sandwich(i.skewXg(e),t,r):i._sandwich(i.skewXg(e),t.x,t.y)},skewYAt:function(e,t,r){return arguments.length>2?i._sandwich(i.skewY(e),t,r):i._sandwich(i.skewY(e),t.x,t.y)},skewYgAt:function(e,t,r){return arguments.length>2?i._sandwich(i.skewYg(e),t,r):i._sandwich(i.skewYg(e),t.x,t.y)}}),e.Matrix2D=i.Matrix2D,i});//# sourceMappingURL=matrix.js.map