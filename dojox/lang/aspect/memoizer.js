//>>built
define("dojox/lang/aspect/memoizer",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.memoizer"),function(){var e=i.lang.aspect,t={around:function(t){var i,a,r,n=e.getContext(),o=n.joinPoint,s=n.instance;if((i=s.__memoizerCache)&&(i=i[o.targetName])&&t in i)return i[t];var r=e.proceed.apply(null,arguments);return(i=s.__memoizerCache)||(i=s.__memoizerCache={}),(a=i[o.targetName])||(a=i[o.targetName]={}),a[t]=r}},a=function(t){return{around:function(){var i,a,r,n=e.getContext(),o=n.joinPoint,s=n.instance,d=t.apply(s,arguments);if((i=s.__memoizerCache)&&(i=i[o.targetName])&&d in i)return i[d];var r=e.proceed.apply(null,arguments);return(i=s.__memoizerCache)||(i=s.__memoizerCache={}),(a=i[o.targetName])||(a=i[o.targetName]={}),a[d]=r}}};e.memoizer=function(e){return 0==arguments.length?t:a(e)}}()});//# sourceMappingURL=memoizer.js.map