//>>built
define("dojox/charting/action2d/PlotAction",["dojo/_base/connect","dojo/_base/declare","./Base","dojo/fx/easing","dojox/lang/functional"],function(e,t,a,i,r){var o=400,n=i.backOut;return t("dojox.charting.action2d.PlotAction",a,{overOutEvents:{onmouseover:1,onmouseout:1},constructor:function(e,t,a){this.anim={},a||(a={}),this.duration=a.duration?a.duration:o,this.easing=a.easing?a.easing:n},connect:function(){this.handle=this.chart.connectToPlot(this.plot.name,this,"process")},disconnect:function(){this.handle&&(e.disconnect(this.handle),this.handle=null)},reset:function(){},destroy:function(){this.inherited(arguments),r.forIn(this.anim,function(e){r.forIn(e,function(e){e.action.stop(!0)})}),this.anim={}}})});//# sourceMappingURL=PlotAction.js.map