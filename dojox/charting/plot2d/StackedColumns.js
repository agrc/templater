//>>built
define("dojox/charting/plot2d/StackedColumns",["dojo/_base/declare","dojo/_base/lang","./Columns","./commonStacked"],function(e,t,a,i){return e("dojox.charting.plot2d.StackedColumns",a,{getSeriesStats:function(){var e=i.collectStats(this.series,t.hitch(this,"isNullValue"));return e.hmin-=.5,e.hmax+=.5,e},rearrangeValues:function(e,t,a){return i.rearrangeValues.call(this,e,t,a)}})});//# sourceMappingURL=StackedColumns.js.map