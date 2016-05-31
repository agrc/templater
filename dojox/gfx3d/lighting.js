//>>built
define("dojox/gfx3d/lighting",["dojo/_base/lang","dojo/_base/Color","dojo/_base/declare","dojox/gfx/_base","./_base"],function(e,t,i,a,r){var o=r.lighting={black:function(){return{r:0,g:0,b:0,a:1}},white:function(){return{r:1,g:1,b:1,a:1}},toStdColor:function(e){return e=a.normalizeColor(e),{r:e.r/255,g:e.g/255,b:e.b/255,a:e.a}},fromStdColor:function(e){return new t([Math.round(255*e.r),Math.round(255*e.g),Math.round(255*e.b),e.a])},scaleColor:function(e,t){return{r:e*t.r,g:e*t.g,b:e*t.b,a:e*t.a}},addColor:function(e,t){return{r:e.r+t.r,g:e.g+t.g,b:e.b+t.b,a:e.a+t.a}},multiplyColor:function(e,t){return{r:e.r*t.r,g:e.g*t.g,b:e.b*t.b,a:e.a*t.a}},saturateColor:function(e){return{r:e.r<0?0:e.r>1?1:e.r,g:e.g<0?0:e.g>1?1:e.g,b:e.b<0?0:e.b>1?1:e.b,a:e.a<0?0:e.a>1?1:e.a}},mixColor:function(e,t,i){return o.addColor(o.scaleColor(i,e),o.scaleColor(1-i,t))},diff2Color:function(e,t){var i=e.r-t.r,a=e.g-t.g,r=e.b-t.b,o=e.a-t.a;return i*i+a*a+r*r+o*o},length2Color:function(e){return e.r*e.r+e.g*e.g+e.b*e.b+e.a*e.a},dot:function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},scale:function(e,t){return{x:e*t.x,y:e*t.y,z:e*t.z}},add:function(e,t){return{x:e.x+t.x,y:e.y+t.y,z:e.z+t.z}},saturate:function(e){return Math.min(Math.max(e,0),1)},length:function(e){return Math.sqrt(r.lighting.dot(e,e))},normalize:function(e){return o.scale(1/o.length(e),e)},faceforward:function(e,t){var i=r.lighting,a=i.dot(t,e)<0?1:-1;return i.scale(a,e)},reflect:function(e,t){var i=r.lighting;return i.add(e,i.scale(-2*i.dot(e,t),t))},diffuse:function(e,t){for(var i=o.black(),a=0;a<t.length;++a){var r=t[a],n=o.dot(o.normalize(r.direction),e);i=o.addColor(i,o.scaleColor(n,r.color))}return o.saturateColor(i)},specular:function(e,t,i,a){for(var r=o.black(),n=0;n<a.length;++n){var s=a[n],d=o.normalize(o.add(o.normalize(s.direction),t)),l=Math.pow(Math.max(0,o.dot(e,d)),1/i);r=o.addColor(r,o.scaleColor(l,s.color))}return o.saturateColor(r)},phong:function(e,t,i,a){e=o.normalize(e);for(var r=o.black(),n=0;n<a.length;++n){var s=a[n],d=o.reflect(o.scale(-1,o.normalize(t)),e),l=Math.pow(Math.max(0,o.dot(d,o.normalize(s.direction))),i);r=o.addColor(r,o.scaleColor(l,s.color))}return o.saturateColor(r)}};return i("dojox.gfx3d.lighting.Model",null,{constructor:function(e,t,i,a){this.incident=o.normalize(e),this.lights=[];for(var r=0;r<t.length;++r){var n=t[r];this.lights.push({direction:o.normalize(n.direction),color:o.toStdColor(n.color)})}this.ambient=o.toStdColor(i.color?i.color:"white"),this.ambient=o.scaleColor(i.intensity,this.ambient),this.ambient=o.scaleColor(this.ambient.a,this.ambient),this.ambient.a=1,this.specular=o.toStdColor(a?a:"white"),this.specular=o.scaleColor(this.specular.a,this.specular),this.specular.a=1,this.npr_cool={r:0,g:0,b:.4,a:1},this.npr_warm={r:.4,g:.4,b:.2,a:1},this.npr_alpha=.2,this.npr_beta=.6,this.npr_scale=.6},constant:function(e,t,i){i=o.toStdColor(i);var a=i.a,r=o.scaleColor(a,i);return r.a=a,o.fromStdColor(o.saturateColor(r))},matte:function(e,t,i){"string"==typeof t&&(t=o.finish[t]),i=o.toStdColor(i),e=o.faceforward(o.normalize(e),this.incident);var a=o.scaleColor(t.Ka,this.ambient),r=o.saturate(-4*o.dot(e,this.incident)),n=o.scaleColor(r*t.Kd,o.diffuse(e,this.lights)),s=o.scaleColor(i.a,o.multiplyColor(i,o.addColor(a,n)));return s.a=i.a,o.fromStdColor(o.saturateColor(s))},metal:function(e,t,i){"string"==typeof t&&(t=o.finish[t]),i=o.toStdColor(i),e=o.faceforward(o.normalize(e),this.incident);var a,r,n=o.scale(-1,this.incident),s=o.scaleColor(t.Ka,this.ambient),d=o.saturate(-4*o.dot(e,this.incident));return a="phong"in t?o.scaleColor(d*t.Ks*t.phong,o.phong(e,n,t.phong_size,this.lights)):o.scaleColor(d*t.Ks,o.specular(e,n,t.roughness,this.lights)),r=o.scaleColor(i.a,o.addColor(o.multiplyColor(i,s),o.multiplyColor(this.specular,a))),r.a=i.a,o.fromStdColor(o.saturateColor(r))},plastic:function(e,t,i){"string"==typeof t&&(t=o.finish[t]),i=o.toStdColor(i),e=o.faceforward(o.normalize(e),this.incident);var a,r,n=o.scale(-1,this.incident),s=o.scaleColor(t.Ka,this.ambient),d=o.saturate(-4*o.dot(e,this.incident)),l=o.scaleColor(d*t.Kd,o.diffuse(e,this.lights));return a="phong"in t?o.scaleColor(d*t.Ks*t.phong,o.phong(e,n,t.phong_size,this.lights)):o.scaleColor(d*t.Ks,o.specular(e,n,t.roughness,this.lights)),r=o.scaleColor(i.a,o.addColor(o.multiplyColor(i,o.addColor(s,l)),o.multiplyColor(this.specular,a))),r.a=i.a,o.fromStdColor(o.saturateColor(r))},npr:function(e,t,i){"string"==typeof t&&(t=o.finish[t]),i=o.toStdColor(i),e=o.faceforward(o.normalize(e),this.incident);var a=o.scaleColor(t.Ka,this.ambient),r=o.saturate(-4*o.dot(e,this.incident)),n=o.scaleColor(r*t.Kd,o.diffuse(e,this.lights)),s=o.scaleColor(i.a,o.multiplyColor(i,o.addColor(a,n))),d=o.addColor(this.npr_cool,o.scaleColor(this.npr_alpha,s)),l=o.addColor(this.npr_warm,o.scaleColor(this.npr_beta,s)),h=(1+o.dot(this.incident,e))/2,s=o.scaleColor(this.npr_scale,o.addColor(s,o.mixColor(d,l,h)));return s.a=i.a,o.fromStdColor(o.saturateColor(s))}}),r.lighting.finish={defaults:{Ka:.1,Kd:.6,Ks:0,roughness:.05},dull:{Ka:.1,Kd:.6,Ks:.5,roughness:.15},shiny:{Ka:.1,Kd:.6,Ks:1,roughness:.001},glossy:{Ka:.1,Kd:.6,Ks:1,roughness:1e-4},phong_dull:{Ka:.1,Kd:.6,Ks:.5,phong:.5,phong_size:1},phong_shiny:{Ka:.1,Kd:.6,Ks:1,phong:1,phong_size:200},phong_glossy:{Ka:.1,Kd:.6,Ks:1,phong:1,phong_size:300},luminous:{Ka:1,Kd:0,Ks:0,roughness:.05},metalA:{Ka:.35,Kd:.3,Ks:.8,roughness:.05},metalB:{Ka:.3,Kd:.4,Ks:.7,roughness:1/60},metalC:{Ka:.25,Kd:.5,Ks:.8,roughness:1/80},metalD:{Ka:.15,Kd:.6,Ks:.8,roughness:.01},metalE:{Ka:.1,Kd:.7,Ks:.8,roughness:1/120}},o});//# sourceMappingURL=lighting.js.map