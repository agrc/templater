//>>built
define("dojox/css3/fx",["dojo/_base/lang","dojo/_base/connect","dojo/dom-style","dojo/_base/fx","dojo/fx","dojo/_base/html","dojox/html/ext-dojo/style","dojox/fx/ext-dojo/complex"],function(e,t,a,i,r,o,d,n){var l=e.getObject("dojox.css3.fx",!0),s={puff:function(e){return r.combine([i.fadeOut(e),this.expand({node:e.node,endScale:e.endScale||2})])},expand:function(e){return i.animateProperty({node:e.node,properties:{transform:{start:"scale(1)",end:"scale("+[e.endScale||3]+")"}}})},shrink:function(e){return this.expand({node:e.node,endScale:.01})},rotate:function(e){return i.animateProperty({node:e.node,duration:e.duration||1e3,properties:{transform:{start:"rotate("+(e.startAngle||"0deg")+")",end:"rotate("+(e.endAngle||"360deg")+")"}}})},flip:function(t){for(var a=[],o=t.whichAnims||[0,1,2,3],d=t.direction||1,n=[{start:"scale(1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0,"+30*d+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*d+"deg)",end:"scale(-1, 1) skew(0deg,0deg)"},{start:"scale(-1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0deg,"+30*-d+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*-d+"deg)",end:"scale(1, 1) skew(0deg,0deg)"}],l=0;l<o.length;l++)a.push(i.animateProperty(e.mixin({node:t.node,duration:t.duration||600,properties:{transform:n[o[l]]}},t)));return r.chain(a)},bounce:function(a){var d=[],n=a.node,l=a.duration||1e3,s=a.scaleX||1.2,m=a.scaleY||.6,u=o.style,f=u(n,"position"),h="absolute",c=u(n,"top"),y=[],v=0,p=Math.round,M=a.jumpHeight||70;"absolute"!==f&&(h="relative");var g=i.animateProperty({node:n,duration:l/6,properties:{transform:{start:"scale(1, 1)",end:"scale("+s+", "+m+")"}}});t.connect(g,"onBegin",function(){u(n,{transformOrigin:"50% 100%",position:h})}),d.push(g);var b=i.animateProperty({node:n,duration:l/6,properties:{transform:{end:"scale(1, 1)",start:"scale("+s+", "+m+")"}}});return y.push(b),y.push(new i.Animation(e.mixin({curve:[],duration:l/3,delay:l/12,onBegin:function(){v=(new Date).getTime()},onAnimate:function(){var e=(new Date).getTime();u(n,{top:parseInt(u(n,"top"))-p(M*((e-v)/this.duration))+"px"}),v=e}},a))),d.push(r.combine(y)),d.push(i.animateProperty(e.mixin({duration:l/3,onEnd:function(){u(n,{position:f})},properties:{top:c}},a))),d.push(g),d.push(b),r.chain(d)}};return e.mixin(l,s)});//# sourceMappingURL=fx.js.map