//>>built
define("dojox/charting/action2d/TouchIndicator",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/has","dojo/touch","dojo/_base/connect","./ChartAction","./_IndicatorElement","dojox/lang/utils"],function(e,t,a,i,r,o,d,n,l){return t("dojox.charting.action2d.TouchIndicator",d,{defaultParams:{series:"",dualIndicator:!1,vertical:!0,autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1},constructor:function(t,a,o){i("touch-events")?this._listeners=[{eventName:"touchstart",methodName:"onTouchStart"},{eventName:"touchmove",methodName:"onTouchMove"},{eventName:"touchend",methodName:"onTouchEnd"},{eventName:"touchcancel",methodName:"onTouchEnd"}]:this._listeners=[{eventName:r.press,methodName:"onTouchStart"},{eventName:r.move,methodName:"onTouchMove"},{eventName:r.cancel,methodName:"onTouchEnd"}],this.opt=e.clone(this.defaultParams),l.updateWithObject(this.opt,o),l.updateWithPattern(this.opt,o,this.optionalParams),this._uName="touchIndicator"+this.opt.series,this.connect()},connect:function(){this.inherited(arguments),this.chart.addPlot(this._uName,{type:n,inter:this})},disconnect:function(){this.chart.getPlot(this._uName).pageCoord&&this.onTouchEnd(),this.chart.removePlot(this._uName),this.inherited(arguments)},onChange:function(e){},onTouchStart:function(e){e.touches&&1!=e.touches.length?this.opt.dualIndicator&&2==e.touches.length&&this._onTouchDual(e):this._onTouchSingle(e,!0)},onTouchMove:function(e){e.touches&&1!=e.touches.length?this.opt.dualIndicator&&2==e.touches.length&&this._onTouchDual(e):this._onTouchSingle(e)},_onTouchSingle:function(e,t){i("touch-events")||this._onTouchEndHandler||(this._onTouchEndHandler=o.connect(this.chart.node.ownerDocument,r.release,this,"onTouchEnd")),this.chart._delayedRenderHandle&&!t&&this.chart.render();var d=this.chart.getPlot(this._uName);d.pageCoord={x:e.touches?e.touches[0].pageX:e.pageX,y:e.touches?e.touches[0].pageY:e.pageY},d.dirty=!0,t?this.chart.delayedRender():this.chart.render(),a.stop(e)},_onTouchDual:function(e){i("touch-events")||this._onTouchEndHandler||(this._onTouchEndHandler=o.connect(this.chart.node.ownerDocument,r.release,this,"onTouchEnd")),this.chart._delayedRenderHandle&&this.chart.render();var t=this.chart.getPlot(this._uName);t.pageCoord={x:e.touches[0].pageX,y:e.touches[0].pageY},t.secondCoord={x:e.touches[1].pageX,y:e.touches[1].pageY},t.dirty=!0,this.chart.render(),a.stop(e)},onTouchEnd:function(e){!i("touch-events")&&this._onTouchEndHandler&&(o.disconnect(this._onTouchEndHandler),this._onTouchEndHandler=null);var t=this.chart.getPlot(this._uName);t.stopTrack(),t.pageCoord=null,t.secondCoord=null,t.dirty=!0,this.chart.delayedRender()}})});//# sourceMappingURL=TouchIndicator.js.map