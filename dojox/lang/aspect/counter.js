//>>built
define("dojox/lang/aspect/counter",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.counter"),function(){var t=i.lang.aspect,a=function(){this.reset()};e.extend(a,{before:function(){++this.calls},afterThrowing:function(){++this.errors},reset:function(){this.calls=this.errors=0}}),t.counter=function(){return new a}}()});//# sourceMappingURL=counter.js.map