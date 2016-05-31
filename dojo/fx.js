//>>built
define("dojo/fx",["./_base/lang","./Evented","./_base/kernel","./_base/array","./aspect","./_base/fx","./dom","./dom-style","./dom-geometry","./ready","require"],function(e,t,i,n,o,r,s,a,d,l,h){i.isAsync||l(0,function(){var e=["./fx/Toggler"];h(e)});var u=i.fx={},c={_fire:function(e,t){return this[e]&&this[e].apply(this,t||[]),this}},f=function(e){this._index=-1,this._animations=e||[],this._current=this._onAnimateCtx=this._onEndCtx=null,this.duration=0,n.forEach(this._animations,function(e){e&&("undefined"!=typeof e.duration&&(this.duration+=e.duration),e.delay&&(this.duration+=e.delay))},this)};f.prototype=new t,e.extend(f,{_onAnimate:function(){this._fire("onAnimate",arguments)},_onEnd:function(){this._onAnimateCtx.remove(),this._onEndCtx.remove(),this._onAnimateCtx=this._onEndCtx=null,this._index+1==this._animations.length?this._fire("onEnd"):(this._current=this._animations[++this._index],this._onAnimateCtx=o.after(this._current,"onAnimate",e.hitch(this,"_onAnimate"),!0),this._onEndCtx=o.after(this._current,"onEnd",e.hitch(this,"_onEnd"),!0),this._current.play(0,!0))},play:function(t,i){if(this._current||(this._current=this._animations[this._index=0]),!i&&"playing"==this._current.status())return this;var n=o.after(this._current,"beforeBegin",e.hitch(this,function(){this._fire("beforeBegin")}),!0),r=o.after(this._current,"onBegin",e.hitch(this,function(e){this._fire("onBegin",arguments)}),!0),s=o.after(this._current,"onPlay",e.hitch(this,function(e){this._fire("onPlay",arguments),n.remove(),r.remove(),s.remove()}));return this._onAnimateCtx&&this._onAnimateCtx.remove(),this._onAnimateCtx=o.after(this._current,"onAnimate",e.hitch(this,"_onAnimate"),!0),this._onEndCtx&&this._onEndCtx.remove(),this._onEndCtx=o.after(this._current,"onEnd",e.hitch(this,"_onEnd"),!0),this._current.play.apply(this._current,arguments),this},pause:function(){if(this._current){var t=o.after(this._current,"onPause",e.hitch(this,function(e){this._fire("onPause",arguments),t.remove()}),!0);this._current.pause()}return this},gotoPercent:function(e,t){this.pause();var i=this.duration*e;return this._current=null,n.some(this._animations,function(e,t){return i<=e.duration?(this._current=e,this._index=t,!0):(i-=e.duration,!1)},this),this._current&&this._current.gotoPercent(i/this._current.duration),t&&this.play(),this},stop:function(t){if(this._current){if(t){for(;this._index+1<this._animations.length;++this._index)this._animations[this._index].stop(!0);this._current=this._animations[this._index]}var i=o.after(this._current,"onStop",e.hitch(this,function(e){this._fire("onStop",arguments),i.remove()}),!0);this._current.stop()}return this},status:function(){return this._current?this._current.status():"stopped"},destroy:function(){this.stop(),this._onAnimateCtx&&this._onAnimateCtx.remove(),this._onEndCtx&&this._onEndCtx.remove()}}),e.extend(f,c),u.chain=function(e){return new f(e)};var p=function(t){this._animations=t||[],this._connects=[],this._finished=0,this.duration=0,n.forEach(t,function(t){var i=t.duration;t.delay&&(i+=t.delay),this.duration<i&&(this.duration=i),this._connects.push(o.after(t,"onEnd",e.hitch(this,"_onEnd"),!0))},this),this._pseudoAnimation=new r.Animation({curve:[0,1],duration:this.duration});var i=this;n.forEach(["beforeBegin","onBegin","onPlay","onAnimate","onPause","onStop","onEnd"],function(e){i._connects.push(o.after(i._pseudoAnimation,e,function(){i._fire(e,arguments)},!0))})};return e.extend(p,{_doAction:function(e,t){return n.forEach(this._animations,function(i){i[e].apply(i,t)}),this},_onEnd:function(){++this._finished>this._animations.length&&this._fire("onEnd")},_call:function(e,t){var i=this._pseudoAnimation;i[e].apply(i,t)},play:function(e,t){return this._finished=0,this._doAction("play",arguments),this._call("play",arguments),this},pause:function(){return this._doAction("pause",arguments),this._call("pause",arguments),this},gotoPercent:function(e,t){var i=this.duration*e;return n.forEach(this._animations,function(e){e.gotoPercent(e.duration<i?1:i/e.duration,t)}),this._call("gotoPercent",arguments),this},stop:function(e){return this._doAction("stop",arguments),this._call("stop",arguments),this},status:function(){return this._pseudoAnimation.status()},destroy:function(){this.stop(),n.forEach(this._connects,function(e){e.remove()})}}),e.extend(p,c),u.combine=function(e){return new p(e)},u.wipeIn=function(t){var i,n=t.node=s.byId(t.node),d=n.style,l=r.animateProperty(e.mixin({properties:{height:{start:function(){if(i=d.overflow,d.overflow="hidden","hidden"==d.visibility||"none"==d.display)return d.height="1px",d.display="",d.visibility="",1;var e=a.get(n,"height");return Math.max(e,1)},end:function(){return n.scrollHeight}}}},t)),h=function(){d.height="auto",d.overflow=i};return o.after(l,"onStop",h,!0),o.after(l,"onEnd",h,!0),l},u.wipeOut=function(t){var i,n=t.node=s.byId(t.node),a=n.style,d=r.animateProperty(e.mixin({properties:{height:{end:1}}},t));o.after(d,"beforeBegin",function(){i=a.overflow,a.overflow="hidden",a.display=""},!0);var l=function(){a.overflow=i,a.height="auto",a.display="none"};return o.after(d,"onStop",l,!0),o.after(d,"onEnd",l,!0),d},u.slideTo=function(t){var i=t.node=s.byId(t.node),n=null,l=null,h=function(e){return function(){var t=a.getComputedStyle(e),i=t.position;if(n="absolute"==i?e.offsetTop:parseInt(t.top)||0,l="absolute"==i?e.offsetLeft:parseInt(t.left)||0,"absolute"!=i&&"relative"!=i){var o=d.position(e,!0);n=o.y,l=o.x,e.style.position="absolute",e.style.top=n+"px",e.style.left=l+"px"}}}(i);h();var u=r.animateProperty(e.mixin({properties:{top:t.top||0,left:t.left||0}},t));return o.after(u,"beforeBegin",h,!0),u},u});//# sourceMappingURL=fx.js.map