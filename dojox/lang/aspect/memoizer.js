//>>built
define("dojox/lang/aspect/memoizer",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.memoizer"),function(){var e=i.lang.aspect,t={around:function(t){var i,r,a,o=e.getContext(),n=o.joinPoint,s=o.instance;if((i=s.__memoizerCache)&&(i=i[n.targetName])&&t in i)return i[t];var a=e.proceed.apply(null,arguments);return(i=s.__memoizerCache)||(i=s.__memoizerCache={}),(r=i[n.targetName])||(r=i[n.targetName]={}),r[t]=a}},r=function(t){return{around:function(){var i,r,a,o=e.getContext(),n=o.joinPoint,s=o.instance,d=t.apply(s,arguments);if((i=s.__memoizerCache)&&(i=i[n.targetName])&&d in i)return i[d];var a=e.proceed.apply(null,arguments);return(i=s.__memoizerCache)||(i=s.__memoizerCache={}),(r=i[n.targetName])||(r=i[n.targetName]={}),r[d]=a}}};e.memoizer=function(e){return 0==arguments.length?t:r(e)}}()});//# sourceMappingURL=memoizer.js.map