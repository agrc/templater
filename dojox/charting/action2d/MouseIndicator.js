//>>built
define("dojox/charting/action2d/MouseIndicator",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/sniff","./ChartAction","./_IndicatorElement","dojox/lang/utils","dojo/_base/event","dojo/_base/array"],function(e,t,a,i,r,d,o,n,l,s){return t("dojox.charting.action2d.MouseIndicator",d,{defaultParams:{series:"",vertical:!0,autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1,mouseOver:!1},constructor:function(t,a,i){this.opt=e.clone(this.defaultParams),n.updateWithObject(this.opt,i),n.updateWithPattern(this.opt,i,this.optionalParams),this._listeners=this.opt.mouseOver?[{eventName:"onmousemove",methodName:"onMouseMove"}]:[{eventName:"onmousedown",methodName:"onMouseDown"}],this._uName="mouseIndicator"+this.opt.series,this._handles=[],this.connect()},_disconnectHandles:function(){r("ie")&&this.chart.node.releaseCapture(),s.forEach(this._handles,a.disconnect),this._handles=[]},connect:function(){this.inherited(arguments),this.chart.addPlot(this._uName,{type:o,inter:this})},disconnect:function(){this._isMouseDown&&this.onMouseUp(),this.chart.removePlot(this._uName),this.inherited(arguments),this._disconnectHandles()},onChange:function(e){},onMouseDown:function(e){this._isMouseDown=!0,r("ie")?(this._handles.push(a.connect(this.chart.node,"onmousemove",this,"onMouseMove")),this._handles.push(a.connect(this.chart.node,"onmouseup",this,"onMouseUp")),this.chart.node.setCapture()):(this._handles.push(a.connect(i.doc,"onmousemove",this,"onMouseMove")),this._handles.push(a.connect(i.doc,"onmouseup",this,"onMouseUp"))),this._onMouseSingle(e)},onMouseMove:function(e){(this._isMouseDown||this.opt.mouseOver)&&this._onMouseSingle(e)},_onMouseSingle:function(e){var t=this.chart.getPlot(this._uName);t.pageCoord={x:e.pageX,y:e.pageY},t.dirty=!0,this.chart.render(),l.stop(e)},onMouseUp:function(e){var t=this.chart.getPlot(this._uName);t.stopTrack(),this._isMouseDown=!1,this._disconnectHandles(),t.pageCoord=null,t.dirty=!0,this.chart.render()}})});//# sourceMappingURL=MouseIndicator.js.map