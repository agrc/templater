//>>built
define("dojox/lang/aspect/memoizerGuard",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.memoizerGuard"),function(){var t=i.lang.aspect,a=function(i){var a,r=t.getContext().instance;(a=r.__memoizerCache)&&(0==arguments.length?delete r.__memoizerCache:e.isArray(i)?e.forEach(i,function(e){delete a[e]}):delete a[i])};t.memoizerGuard=function(e){return{after:function(){a(e)}}}}()});//# sourceMappingURL=memoizerGuard.js.map