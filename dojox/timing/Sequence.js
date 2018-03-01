//>>built
define("dojox/timing/Sequence",["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","./_base"],function(e){return e.experimental("dojox.timing.Sequence"),e.declare("dojox.timing.Sequence",null,{_goOnPause:0,_running:!1,constructor:function(){this._defsResolved=[]},go:function(t,i){this._running=!0,e.forEach(t,function(e){if(e.repeat>1)for(var t=e.repeat,i=0;i<t;i++)e.repeat=1,this._defsResolved.push(e);else this._defsResolved.push(e)},this);t[t.length-1];i&&this._defsResolved.push({func:i}),this._defsResolved.push({func:[this.stop,this]}),this._curId=0,this._go()},_go:function(){function t(t){return e.isArray(t)?t.length>2?t[0].apply(t[1],t.slice(2)):t[0].apply(t[1]):t()}if(this._running){var i=this._defsResolved[this._curId];if(this._curId+=1,this._curId>=this._defsResolved.length)return void t(i.func);if(i.pauseAfter)!1!==t(i.func)?setTimeout(e.hitch(this,"_go"),i.pauseAfter):this._goOnPause=i.pauseAfter;else if(i.pauseBefore){var a=e.hitch(this,function(){!1!==t(i.func)&&this._go()});setTimeout(a,i.pauseBefore)}else!1!==t(i.func)&&this._go()}},goOn:function(){this._goOnPause?(setTimeout(e.hitch(this,"_go"),this._goOnPause),this._goOnPause=0):this._go()},stop:function(){this._running=!1}})});//# sourceMappingURL=Sequence.js.map