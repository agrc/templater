//>>built
define("dojox/charting/scaler/common",["dojo/_base/lang"],function(e){var t=function(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t))},a=e.getObject("dojox.charting.scaler.common",!0),i={};return e.mixin(a,{doIfLoaded:function(e,t,a){if(void 0===i[e])try{i[e]=require(e)}catch(t){i[e]=null}return i[e]?t(i[e]):a()},getNumericLabel:function(e,i,r){var n="";if(a.doIfLoaded("dojo/number",function(t){n=(r.fixed?t.format(e,{places:i<0?-i:0}):t.format(e))||""},function(){n=r.fixed?e.toFixed(i<0?-i:0):e.toString()}),r.labelFunc){var o=r.labelFunc(n,e,i);if(o)return o}if(r.labels){for(var d=r.labels,l=0,s=d.length;l<s;){var m=Math.floor((l+s)/2);d[m].value<e?l=m+1:s=m}if(l<d.length&&t(d[l].value,e))return d[l].text;if(--l>=0&&l<d.length&&t(d[l].value,e))return d[l].text;if((l+=2)<d.length&&t(d[l].value,e))return d[l].text}return n}})});//# sourceMappingURL=common.js.map