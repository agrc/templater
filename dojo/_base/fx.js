//>>built
define("dojo/_base/fx",["./kernel","./config","./lang","../Evented","./Color","../aspect","../sniff","../dom","../dom-style"],function(e,t,i,n,o,r,a,s,d){var l=i.mixin,c={},u=c._Line=function(e,t){this.start=e,this.end=t};u.prototype.getValue=function(e){return(this.end-this.start)*e+this.start};var h=c.Animation=function(e){l(this,e),i.isArray(this.curve)&&(this.curve=new u(this.curve[0],this.curve[1]))};h.prototype=new n,i.extend(h,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var e=this._percent,t=this.easing;return t?t(e):e},_fire:function(e,i){var n=i||[];if(this[e])if(t.debugAtAllCosts)this[e].apply(this,n);else try{this[e].apply(this,n)}catch(e){}return this},play:function(e,t){var n=this;if(n._delayTimer&&n._clearTimer(),t)n._stopTimer(),n._active=n._paused=!1,n._percent=0;else if(n._active&&!n._paused)return n;n._fire("beforeBegin",[n.node]);var o=e||n.delay,r=i.hitch(n,"_play",t);return o>0?(n._delayTimer=setTimeout(r,o),n):(r(),n)},_play:function(e){var t=this;t._delayTimer&&t._clearTimer(),t._startTime=(new Date).valueOf(),t._paused&&(t._startTime-=t.duration*t._percent),t._active=!0,t._paused=!1;var i=t.curve.getValue(t._getStep());return t._percent||(t._startRepeatCount||(t._startRepeatCount=t.repeat),t._fire("onBegin",[i])),t._fire("onPlay",[i]),t._cycle(),t},pause:function(){var e=this;return e._delayTimer&&e._clearTimer(),e._stopTimer(),e._active?(e._paused=!0,e._fire("onPause",[e.curve.getValue(e._getStep())]),e):e},gotoPercent:function(e,t){var i=this;return i._stopTimer(),i._active=i._paused=!0,i._percent=e,t&&i.play(),i},stop:function(e){var t=this;return t._delayTimer&&t._clearTimer(),t._timer?(t._stopTimer(),e&&(t._percent=1),t._fire("onStop",[t.curve.getValue(t._getStep())]),t._active=t._paused=!1,t):t},destroy:function(){this.stop()},status:function(){return this._active?this._paused?"paused":"playing":"stopped"},_cycle:function(){var e=this;if(e._active){var t=(new Date).valueOf(),i=0===e.duration?1:(t-e._startTime)/e.duration;i>=1&&(i=1),e._percent=i,e.easing&&(i=e.easing(i)),e._fire("onAnimate",[e.curve.getValue(i)]),e._percent<1?e._startTimer():(e._active=!1,e.repeat>0?(e.repeat--,e.play(null,!0)):-1==e.repeat?e.play(null,!0):e._startRepeatCount&&(e.repeat=e._startRepeatCount,e._startRepeatCount=0),e._percent=0,e._fire("onEnd",[e.node]),!e.repeat&&e._stopTimer())}return e},_clearTimer:function(){clearTimeout(this._delayTimer),delete this._delayTimer}});var f=0,p=null,m={run:function(){}};i.extend(h,{_startTimer:function(){this._timer||(this._timer=r.after(m,"run",i.hitch(this,"_cycle"),!0),f++),p||(p=setInterval(i.hitch(m,"run"),this.rate))},_stopTimer:function(){this._timer&&(this._timer.remove(),this._timer=null,f--),f<=0&&(clearInterval(p),p=null,f=0)}});var g=a("ie")?function(e){var t=e.style;t.width.length||"auto"!=d.get(e,"width")||(t.width="auto")}:function(){};c._fade=function(e){e.node=s.byId(e.node);var t=l({properties:{}},e),n=t.properties.opacity={};n.start="start"in t?t.start:function(){return+d.get(t.node,"opacity")||0},n.end=t.end;var o=c.animateProperty(t);return r.after(o,"beforeBegin",i.partial(g,t.node),!0),o},c.fadeIn=function(e){return c._fade(l({end:1},e))},c.fadeOut=function(e){return c._fade(l({end:0},e))},c._defaultEasing=function(e){return.5+Math.sin((e+1.5)*Math.PI)/2};var v=function(e){this._properties=e;for(var t in e){var i=e[t];i.start instanceof o&&(i.tempColor=new o)}};return v.prototype.getValue=function(e){var t={};for(var n in this._properties){var r=this._properties[n],a=r.start;a instanceof o?t[n]=o.blendColors(a,r.end,e,r.tempColor).toCss():i.isArray(a)||(t[n]=(r.end-a)*e+a+("opacity"!=n?r.units||"px":0))}return t},c.animateProperty=function(t){var n=t.node=s.byId(t.node);t.easing||(t.easing=e._defaultEasing);var a=new h(t);return r.after(a,"beforeBegin",i.hitch(a,function(){function e(e,t){var i={height:e.offsetHeight,width:e.offsetWidth}[t];return void 0!==i?i:(i=d.get(e,t),"opacity"==t?+i:s?i:parseFloat(i))}var t={};for(var r in this.properties){"width"!=r&&"height"!=r||(this.node.display="block");var a=this.properties[r];i.isFunction(a)&&(a=a(n)),a=t[r]=l({},i.isObject(a)?a:{end:a}),i.isFunction(a.start)&&(a.start=a.start(n)),i.isFunction(a.end)&&(a.end=a.end(n));var s=r.toLowerCase().indexOf("color")>=0;"end"in a?"start"in a||(a.start=e(n,r)):a.end=e(n,r),s?(a.start=new o(a.start),a.end=new o(a.end)):a.start="opacity"==r?+a.start:parseFloat(a.start)}this.curve=new v(t)}),!0),r.after(a,"onAnimate",i.hitch(d,"set",a.node),!0),a},c.anim=function(e,t,i,n,o,r){return c.animateProperty({node:e,duration:i||h.prototype.duration,properties:t,easing:n,onEnd:o}).play(r||0)},l(e,c),e._Animation=h,c});//# sourceMappingURL=fx.js.map