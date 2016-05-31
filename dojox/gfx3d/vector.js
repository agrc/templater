//>>built
define("dojox/gfx3d/vector",["dojo/_base/lang","dojo/_base/array","./_base"],function(e,t,i){return i.vector={sum:function(){var e={x:0,y:0,z:0};return t.forEach(arguments,function(t){e.x+=t.x,e.y+=t.y,e.z+=t.z}),e},center:function(){var e=arguments.length;if(0==e)return{x:0,y:0,z:0};var t=i.vector.sum(arguments);return{x:t.x/e,y:t.y/e,z:t.z/e}},substract:function(e,t){return{x:e.x-t.x,y:e.y-t.y,z:e.z-t.z}},_crossProduct:function(e,t,i,a,r,o){return{x:t*o-i*r,y:i*a-e*o,z:e*r-t*a}},crossProduct:function(e,a,r,o,n,s){return 6==arguments.length&&t.every(arguments,function(e){return"number"==typeof e})?i.vector._crossProduct(e,a,r,o,n,s):i.vector._crossProduct(e.x,e.y,e.z,a.x,a.y,a.z)},_dotProduct:function(e,t,i,a,r,o){return e*a+t*r+i*o},dotProduct:function(e,a,r,o,n,s){return 6==arguments.length&&t.every(arguments,function(e){return"number"==typeof e})?i.vector._dotProduct(e,a,r,o,n,s):i.vector._dotProduct(e.x,e.y,e.z,a.x,a.y,a.z)},normalize:function(e,t,a){var r,o,n;e instanceof Array?(r=e[0],o=e[1],n=e[2]):(r=e,o=t,n=a);var s=i.vector.substract(o,r),l=i.vector.substract(n,r);return i.vector.crossProduct(s,l)}},i.vector});//# sourceMappingURL=vector.js.map