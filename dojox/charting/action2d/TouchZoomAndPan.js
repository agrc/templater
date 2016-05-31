//>>built
define("dojox/charting/action2d/TouchZoomAndPan",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/sniff","./ChartAction","../Element","dojo/touch","../plot2d/common","dojo/has!dojo-bidi?../bidi/action2d/ZoomAndPan"],function(e,t,i,a,r,n,o,d,s){var l=t(n,{constructor:function(e){},render:function(){this.isDirty()&&(this.cleanGroup(),this.group.createRect({width:this.chart.dim.width,height:this.chart.dim.height}).setFill("rgba(0,0,0,0)"))},clear:function(){return this.dirty=!0,this.chart.stack[0]!=this&&this.chart.movePlotToFront(this.name),this},getSeriesStats:function(){return e.delegate(d.defaultStats)},initializeScalers:function(){return this},isDirty:function(){return this.dirty}}),u=t(a("dojo-bidi")?"dojox.charting.action2d.NonBidiTouchZoomAndPan":"dojox.charting.action2d.TouchZoomAndPan",r,{defaultParams:{axis:"x",scaleFactor:1.2,maxScale:100,enableScroll:!0,enableZoom:!0},optionalParams:{},constructor:function(e,t,i){this._listeners=[{eventName:o.press,methodName:"onTouchStart"},{eventName:o.move,methodName:"onTouchMove"},{eventName:o.release,methodName:"onTouchEnd"}],i||(i={}),this.axis=i.axis?i.axis:"x",this.scaleFactor=i.scaleFactor?i.scaleFactor:1.2,this.maxScale=i.maxScale?i.maxScale:100,this.enableScroll=void 0!=i.enableScroll?i.enableScroll:!0,this.enableZoom=void 0!=i.enableScroll?i.enableZoom:!0,this._uName="touchZoomPan"+this.axis,this.connect()},connect:function(){this.inherited(arguments),-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.addPlot(this._uName,{type:l})},disconnect:function(){-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.removePlot(this._uName),this.inherited(arguments)},onTouchStart:function(e){var t=this.chart,a=t.getAxis(this.axis),r=e.touches?e.touches.length:1,n=e.touches?e.touches[0]:e,o=this._startPageCoord;if(this._startPageCoord={x:n.pageX,y:n.pageY},(this.enableZoom||this.enableScroll)&&t._delayedRenderHandle&&t.render(),this.enableZoom&&r>=2){this._startTime=0,this._endPageCoord={x:e.touches[1].pageX,y:e.touches[1].pageY};var d={x:(this._startPageCoord.x+this._endPageCoord.x)/2,y:(this._startPageCoord.y+this._endPageCoord.y)/2},s=a.getScaler();this._initScale=a.getWindowScale();var l=this._initData=this.plot.toData();this._middleCoord=l(d)[this.axis],this._startCoord=s.bounds.from,this._endCoord=s.bounds.to}else e.touches&&1!=e.touches.length?this._startTime=0:this._startTime?(new Date).getTime()-this._startTime<250&&Math.abs(this._startPageCoord.x-o.x)<30&&Math.abs(this._startPageCoord.y-o.y)<30?(this._startTime=0,this.onDoubleTap(e)):this._startTime=0:this._startTime=(new Date).getTime(),this.enableScroll&&(this._startScroll(a),i.stop(e))},onTouchMove:function(e){var t=this.chart,a=t.getAxis(this.axis),r=e.touches?e.touches.length:1,n=a.vertical?"pageY":"pageX",o=a.vertical?"y":"x";if(this._startTime=0,this.enableZoom&&r>=2){var d={x:(e.touches[1].pageX+e.touches[0].pageX)/2,y:(e.touches[1].pageY+e.touches[0].pageY)/2},s=(this._endPageCoord[o]-this._startPageCoord[o])/(e.touches[1][n]-e.touches[0][n]);if(this._initScale/s>this.maxScale)return;var l=this._initData(d)[this.axis],u=s*(this._startCoord-l)+this._middleCoord,c=s*(this._endCoord-l)+this._middleCoord;t.zoomIn(this.axis,[u,c]),i.stop(e)}else if(this.enableScroll){var f=this._getDelta(e);t.setAxisWindow(this.axis,this._lastScale,this._initOffset-f/this._lastFactor/this._lastScale),t.delayedRender(),i.stop(e)}},onTouchEnd:function(e){var t=this.chart,i=t.getAxis(this.axis);if((!e.touches||1==e.touches.length)&&this.enableScroll){var a=e.touches?e.touches[0]:e;this._startPageCoord={x:a.pageX,y:a.pageY},this._startScroll(i)}},_startScroll:function(e){var t=e.getScaler().bounds;this._initOffset=e.getWindowOffset(),this._lastScale=e.getWindowScale(),this._lastFactor=t.span/(t.upper-t.lower)},onDoubleTap:function(e){var t=this.chart,a=t.getAxis(this.axis),r=1/this.scaleFactor;if(1==a.getWindowScale()){var n=a.getScaler(),o=n.bounds.from,d=n.bounds.to,s=(o+d)/2,l=this.plot.toData(this._startPageCoord)[this.axis],u=r*(o-s)+l,c=r*(d-s)+l;t.zoomIn(this.axis,[u,c])}else t.setAxisWindow(this.axis,1,0),t.render();i.stop(e)},_getDelta:function(e){var t=this.chart.getAxis(this.axis),i=t.vertical?"pageY":"pageX",a=t.vertical?"y":"x",r=e.touches?e.touches[0]:e;return t.vertical?this._startPageCoord[a]-r[i]:r[i]-this._startPageCoord[a]}});return a("dojo-bidi")?t("dojox.charting.action2d.TouchZoomAndPan",[u,s]):u});//# sourceMappingURL=TouchZoomAndPan.js.map