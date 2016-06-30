//>>built
define("dojox/widget/rotator/PanFade",["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(e,t,i,a,o,r){function n(e,t){var n={node:t.current.node,duration:t.duration,easing:t.easing},s={node:t.next.node,duration:t.duration,easing:t.easing},d=t.rotatorBox,l=e%2,h=l?"left":"top",c=(l?d.w:d.h)*(2>e?-1:1),u={},m={};return o.set(s.node,{display:"",opacity:0}),u[h]={start:0,end:-c},m[h]={start:c,end:0},r.combine([a.animateProperty(i.mixin({properties:u},n)),a.fadeOut(n),a.animateProperty(i.mixin({properties:m},s)),a.fadeIn(s)])}function s(e,t){o.set(e,"zIndex",t)}var d=0,l=1,h=2,c=3,u={panFade:function(a){var d=a.wrap,h=a.rotator.panes,u=h.length,m=u,f=a.current.idx,p=a.next.idx,g=Math.abs(p-f),y=Math.abs(u-Math.max(f,p)+Math.min(f,p))%u,v=p>f,b=c,_=[],w=[],x=a.duration;if((!d&&!v||d&&(v&&g>y||!v&&y>g))&&(b=l),a.continuous){a.quick&&(x=Math.round(x/(d?Math.min(y,g):g))),s(h[f].node,m--);for(var j=b==c;;){var M=f;j?++f>=u&&(f=0):--f<0&&(f=u-1);var k=h[M],C=h[f];if(s(C.node,m--),_.push(n(b,i.mixin({easing:function(e){return e}},a,{current:k,next:C,duration:x}))),j&&f==p||!j&&f==p)break;w.push(C.node)}var T=r.chain(_),I=t.connect(T,"onEnd",function(){t.disconnect(I),e.forEach(w,function(e){o.set(e,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return T}return n(b,a)},panFadeDown:function(e){return n(d,e)},panFadeRight:function(e){return n(l,e)},panFadeUp:function(e){return n(h,e)},panFadeLeft:function(e){return n(c,e)}};return i.mixin(i.getObject("dojox.widget.rotator"),u),u});//# sourceMappingURL=PanFade.js.map