//>>built
define("dojox/widget/rotator/PanFade",["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(e,t,i,a,o,n){function r(e,t){var r={node:t.current.node,duration:t.duration,easing:t.easing},s={node:t.next.node,duration:t.duration,easing:t.easing},d=t.rotatorBox,l=e%2,h=l?"left":"top",c=(l?d.w:d.h)*(2>e?-1:1),u={},m={};return o.set(s.node,{display:"",opacity:0}),u[h]={start:0,end:-c},m[h]={start:c,end:0},n.combine([a.animateProperty(i.mixin({properties:u},r)),a.fadeOut(r),a.animateProperty(i.mixin({properties:m},s)),a.fadeIn(s)])}function s(e,t){o.set(e,"zIndex",t)}var d=0,l=1,h=2,c=3,u={panFade:function(a){var d=a.wrap,h=a.rotator.panes,u=h.length,m=u,f=a.current.idx,p=a.next.idx,g=Math.abs(p-f),y=Math.abs(u-Math.max(f,p)+Math.min(f,p))%u,v=p>f,b=c,_=[],M=[],x=a.duration;if((!d&&!v||d&&(v&&g>y||!v&&y>g))&&(b=l),a.continuous){a.quick&&(x=Math.round(x/(d?Math.min(y,g):g))),s(h[f].node,m--);for(var w=b==c;;){var j=f;w?++f>=u&&(f=0):--f<0&&(f=u-1);var k=h[j],T=h[f];if(s(T.node,m--),_.push(r(b,i.mixin({easing:function(e){return e}},a,{current:k,next:T,duration:x}))),w&&f==p||!w&&f==p)break;M.push(T.node)}var C=n.chain(_),I=t.connect(C,"onEnd",function(){t.disconnect(I),e.forEach(M,function(e){o.set(e,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return C}return r(b,a)},panFadeDown:function(e){return r(d,e)},panFadeRight:function(e){return r(l,e)},panFadeUp:function(e){return r(h,e)},panFadeLeft:function(e){return r(c,e)}};return i.mixin(i.getObject("dojox.widget.rotator"),u),u});//# sourceMappingURL=PanFade.js.map