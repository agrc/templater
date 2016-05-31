//>>built
define("dojox/css3/transition",["dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/when","dojo/promise/all","dojo/on","dojo/sniff"],function(e,t,i,r,a,n,o){var d="transitionend",s="t",l="translate3d(",u=",0,0)";o("webkit")?(s="WebkitT",d="webkitTransitionEnd"):o("mozilla")&&(s="MozT",l="translateX(",u=")");var c=function(t){var r={startState:{},endState:{},node:null,duration:250,"in":!0,direction:1,autoClear:!0};e.mixin(this,r),e.mixin(this,t),this.deferred||(this.deferred=new i)};e.extend(c,{play:function(){c.groupedPlay([this])},_applyState:function(e){var t=this.node.style;for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},initState:function(){this.node.style[s+"ransitionProperty"]="none",this.node.style[s+"ransitionDuration"]="0ms",this._applyState(this.startState)},_beforeStart:function(){"none"===this.node.style.display&&(this.node.style.display=""),this.beforeStart()},_beforeClear:function(){this.node.style[s+"ransitionProperty"]="",this.node.style[s+"ransitionDuration"]="",this["in"]!==!0&&(this.node.style.display="none"),this.beforeClear()},_onAfterEnd:function(){this.deferred.resolve(this.node),this.node.id&&c.playing[this.node.id]===this.deferred&&delete c.playing[this.node.id],this.onAfterEnd()},beforeStart:function(){},beforeClear:function(){},onAfterEnd:function(){},start:function(){this._beforeStart(),this._startTime=(new Date).getTime(),this._cleared=!1;var e=this;e.node.style[s+"ransitionProperty"]="all",e.node.style[s+"ransitionDuration"]=e.duration+"ms",n.once(e.node,d,function(){e.clear()}),this._applyState(this.endState)},clear:function(){this._cleared||(this._cleared=!0,this._beforeClear(),this._removeState(this.endState),this._onAfterEnd())},_removeState:function(e){var t=this.node.style;for(var i in e)e.hasOwnProperty(i)&&(t[i]="")}}),c.slide=function(e,t){var i=new c(t);i.node=e;var r="0",a="0";return i["in"]?r=1===i.direction?"100%":"-100%":a=1===i.direction?"-100%":"100%",i.startState[s+"ransform"]=l+r+u,i.endState[s+"ransform"]=l+a+u,i},c.fade=function(t,i){var r=new c(i);r.node=t;var a="0",n="0";return r["in"]?n="1":a="1",e.mixin(r,{startState:{opacity:a},endState:{opacity:n}}),r},c.flip=function(t,i){var r=new c(i);return r.node=t,r["in"]?(e.mixin(r,{startState:{opacity:"0"},endState:{opacity:"1"}}),r.startState[s+"ransform"]="scale(0,0.8) skew(0,-30deg)",r.endState[s+"ransform"]="scale(1,1) skew(0,0)"):(e.mixin(r,{startState:{opacity:"1"},endState:{opacity:"0"}}),r.startState[s+"ransform"]="scale(1,1) skew(0,0)",r.endState[s+"ransform"]="scale(0,0.8) skew(0,30deg)"),r};var f=function(e){var i=[];return t.forEach(e,function(e){e.id&&c.playing[e.id]&&i.push(c.playing[e.id])}),a(i)};return c.getWaitingList=f,c.groupedPlay=function(e){var i=t.filter(e,function(e){return e.node}),a=f(i);t.forEach(e,function(e){e.node.id&&(c.playing[e.node.id]=e.deferred)}),r(a,function(){t.forEach(e,function(e){e.initState()}),setTimeout(function(){t.forEach(e,function(e){e.start()}),n.once(e[e.length-1].node,d,function(){for(var t,i=0;i<e.length-1;i++)0===e[i].deferred.fired||e[i]._cleared||(t=(new Date).getTime()-e[i]._startTime,t>=e[i].duration&&e[i].clear())}),setTimeout(function(){for(var t,i=0;i<e.length;i++)0===e[i].deferred.fired||e[i]._cleared||(t=(new Date).getTime()-e[i]._startTime,t>=e[i].duration&&e[i].clear())},e[0].duration+50)},33)})},c.chainedPlay=function(i){var a=t.filter(i,function(e){return e.node}),n=f(a);t.forEach(i,function(e){e.node.id&&(c.playing[e.node.id]=e.deferred)}),r(n,function(){t.forEach(i,function(e){e.initState()});for(var r=1,a=i.length;a>r;r++)i[r-1].deferred.then(e.hitch(i[r],function(){this.start()}));setTimeout(function(){i[0].start()},33)})},c.playing={},c});//# sourceMappingURL=transition.js.map