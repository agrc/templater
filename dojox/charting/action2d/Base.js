//>>built
define("dojox/charting/action2d/Base",["dojo/_base/lang","dojo/_base/declare","dojo/Evented"],function(e,t,a){return t("dojox.charting.action2d.Base",a,{constructor:function(t,a){this.chart=t,this.plot=a?e.isString(a)?this.chart.getPlot(a):a:this.chart.getPlot("default")},connect:function(){},disconnect:function(){},destroy:function(){this.disconnect()}})});//# sourceMappingURL=Base.js.map