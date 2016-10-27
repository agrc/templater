//>>built
define("dojo/_base/fx",["./kernel","./config","./lang","../Evented","./Color","../aspect","../sniff","../dom","../dom-style"],function(e,t,i,n,o,r,s,a,d){var l=i.mixin,c={},h=c._Line=function(e,t){this.start=e,this.end=t};h.prototype.getValue=function(e){return(this.end-this.start)*e+this.start};var u=c.Animation=function(e){l(this,e),i.isArray(this.curve)&&(this.curve=new h(this.curve[0],this.curve[1]))};u.prototype=new n,i.extend(u,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var e=this._percent,t=this.easing;return t?t(e):e},_fire:function(e,i){var n=i||[];if(this[e])if(t.debugAtAllCosts)this[e].apply(this,n);else try{this[e].apply(this,n)}catch(o){}return this},play:function(e,t){var n=this;if(n._delayTimer&&n._clearTimer(),t)n._stopTimer(),n._active=n._paused=!1,n._percent=0;else if(n._active&&!n._paused)return n;n._fire("beforeBegin",[n.node]);var o=e||n.delay,r=i.hitch(n,"_play",t);return o>0?(n._delayTimer=setTimeout(r,o),n):(r(),n)},_play:function(e){var t=this;t._delayTimer&&t._clearTimer(),t._startTime=(new Date).valueOf(),t._paused&&(t._startTime-=t.duration*t._percent),t._active=!0,t._paused=!1;var i=t.curve.getValue(t._getStep());return t._percent||(t._startRepeatCount||(t._startRepeatCount=t.repeat),t._fire("onBegin",[i])),t._fire("onPlay",[i]),t._cycle(),t},pause:function(){var e=this;return e._delayTimer&&e._clearTimer(),e._stopTimer(),e._active?(e._paused=!0,e._fire("onPause",[e.curve.getValue(e._getStep())]),e):e},gotoPercent:function(e,t){var i=this;return i._stopTimer(),i._active=i._paused=!0,i._percent=e,t&&i.play(),i},stop:function(e){var t=this;return t._delayTimer&&t._clearTimer(),t._timer?(t._stopTimer(),e&&(t._percent=1),t._fire("onStop",[t.curve.getValue(t._getStep())]),t._active=t._paused=!1,t):t},destroy:function(){this.stop()},status:function(){return this._active?this._paused?"paused":"playing":"stopped"},_cycle:function(){var e=this;if(e._active){var t=(new Date).valueOf(),i=0===e.duration?1:(t-e._startTime)/e.duration;i>=1&&(i=1),e._percent=i,e.easing&&(i=e.easing(i)),e._fire("onAnimate",[e.curve.getValue(i)]),e._percent<1?e._startTimer():(e._active=!1,e.repeat>0?(e.repeat--,e.play(null,!0)):-1==e.repeat?e.play(null,!0):e._startRepeatCount&&(e.repeat=e._startRepeatCount,e._startRepeatCount=0),e._percent=0,e._fire("onEnd",[e.node]),!e.repeat&&e._stopTimer())}return e},_clearTimer:function(){clearTimeout(this._delayTimer),delete this._delayTimer}});var f=0,p=null,g={run:function(){}};i.extend(u,{_startTimer:function(){this._timer||(this._timer=r.after(g,"run",i.hitch(this,"_cycle"),!0),f++),p||(p=setInterval(i.hitch(g,"run"),this.rate))},_stopTimer:function(){this._timer&&(this._timer.remove(),this._timer=null,f--),0>=f&&(clearInterval(p),p=null,f=0)}});var m=s("ie")?function(e){var t=e.style;t.width.length||"auto"!=d.get(e,"width")||(t.width="auto")}:function(){};c._fade=function(e){e.node=a.byId(e.node);var t=l({properties:{}},e),n=t.properties.opacity={};n.start="start"in t?t.start:function(){return+d.get(t.node,"opacity")||0},n.end=t.end;var o=c.animateProperty(t);return r.after(o,"beforeBegin",i.partial(m,t.node),!0),o},c.fadeIn=function(e){return c._fade(l({end:1},e))},c.fadeOut=function(e){return c._fade(l({end:0},e))},c._defaultEasing=function(e){return.5+Math.sin((e+1.5)*Math.PI)/2};var _=function(e){this._properties=e;for(var t in e){var i=e[t];i.start instanceof o&&(i.tempColor=new o)}};return _.prototype.getValue=function(e){var t={};for(var n in this._properties){var r=this._properties[n],s=r.start;s instanceof o?t[n]=o.blendColors(s,r.end,e,r.tempColor).toCss():i.isArray(s)||(t[n]=(r.end-s)*e+s+("opacity"!=n?r.units||"px":0))}return t},c.animateProperty=function(t){var n=t.node=a.byId(t.node);t.easing||(t.easing=e._defaultEasing);var s=new u(t);return r.after(s,"beforeBegin",i.hitch(s,function(){function e(e,t){var i={height:e.offsetHeight,width:e.offsetWidth}[t];return void 0!==i?i:(i=d.get(e,t),"opacity"==t?+i:a?i:parseFloat(i))}var t={};for(var r in this.properties){"width"!=r&&"height"!=r||(this.node.display="block");var s=this.properties[r];i.isFunction(s)&&(s=s(n)),s=t[r]=l({},i.isObject(s)?s:{end:s}),i.isFunction(s.start)&&(s.start=s.start(n)),i.isFunction(s.end)&&(s.end=s.end(n));var a=r.toLowerCase().indexOf("color")>=0;"end"in s?"start"in s||(s.start=e(n,r)):s.end=e(n,r),a?(s.start=new o(s.start),s.end=new o(s.end)):s.start="opacity"==r?+s.start:parseFloat(s.start)}this.curve=new _(t)}),!0),r.after(s,"onAnimate",i.hitch(d,"set",s.node),!0),s},c.anim=function(e,t,i,n,o,r){return c.animateProperty({node:e,duration:i||u.prototype.duration,properties:t,easing:n,onEnd:o}).play(r||0)},l(e,c),e._Animation=u,c});//# sourceMappingURL=fx.js.map