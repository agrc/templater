//>>built
define("dojox/charting/plot2d/StackedBars",["dojo/_base/declare","dojo/_base/lang","./Bars","./commonStacked"],function(e,t,a,i){return e("dojox.charting.plot2d.StackedBars",a,{getSeriesStats:function(){var e,a=i.collectStats(this.series,t.hitch(this,"isNullValue"));return a.hmin-=.5,a.hmax+=.5,e=a.hmin,a.hmin=a.vmin,a.vmin=e,e=a.hmax,a.hmax=a.vmax,a.vmax=e,a},rearrangeValues:function(e,t,a){return i.rearrangeValues.call(this,e,t,a)}})});//# sourceMappingURL=StackedBars.js.map