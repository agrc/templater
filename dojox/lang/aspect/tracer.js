//>>built
define("dojox/lang/aspect/tracer",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.tracer"),function(){var t=i.lang.aspect,a=function(e){this.method=e?"group":"log",e&&(this.after=this._after)};e.extend(a,{before:function(){var e=t.getContext(),i=e.joinPoint,a=Array.prototype.join.call(arguments,", ");console[this.method](e.instance,"=>",i.targetName+"("+a+")")},afterReturning:function(e){t.getContext().joinPoint},afterThrowing:function(e){},_after:function(e){}}),t.tracer=function(e){return new a(e)}}()});//# sourceMappingURL=tracer.js.map