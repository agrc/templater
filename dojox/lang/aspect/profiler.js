//>>built
define("dojox/lang/aspect/profiler",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.profiler"),function(){var t=i.lang.aspect,a=function(e){this.args=e?[e]:[],this.inCall=0};e.extend(a,{before:function(){this.inCall++||console.profile.apply(console,this.args)},after:function(){--this.inCall}}),t.profiler=function(e){return new a(e)}}()});//# sourceMappingURL=profiler.js.map