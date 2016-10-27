//>>built
define("dojox/charting/action2d/MouseZoomAndPan",["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/_base/event","dojo/_base/connect","dojo/mouse","./ChartAction","dojo/sniff","dojo/dom-prop","dojo/keys","dojo/has!dojo-bidi?../bidi/action2d/ZoomAndPan"],function(e,t,a,i,r,o,d,n,s,l,m){var u=n("mozilla")?3:120,f={none:function(e){return!e.ctrlKey&&!e.altKey&&!e.shiftKey},ctrl:function(e){return e.ctrlKey&&!e.altKey&&!e.shiftKey},alt:function(e){return!e.ctrlKey&&e.altKey&&!e.shiftKey},shift:function(e){return!e.ctrlKey&&!e.altKey&&e.shiftKey}},h=e(n("dojo-bidi")?"dojox.charting.action2d.NonBidiMouseZoomAndPan":"dojox.charting.action2d.MouseZoomAndPan",d,{defaultParams:{axis:"x",scaleFactor:1.2,maxScale:100,enableScroll:!0,enableDoubleClickZoom:!0,enableKeyZoom:!0,keyZoomModifier:"ctrl"},optionalParams:{},constructor:function(e,t,a){this._listeners=[{eventName:o.wheel,methodName:"onMouseWheel"}],a||(a={}),this.axis=a.axis?a.axis:"x",this.scaleFactor=a.scaleFactor?a.scaleFactor:1.2,this.maxScale=a.maxScale?a.maxScale:100,this.enableScroll=void 0!=a.enableScroll?a.enableScroll:!0,this.enableDoubleClickZoom=void 0!=a.enableDoubleClickZoom?a.enableDoubleClickZoom:!0,this.enableKeyZoom=void 0!=a.enableKeyZoom?a.enableKeyZoom:!0,this.keyZoomModifier=a.keyZoomModifier?a.keyZoomModifier:"ctrl",this.enableScroll&&this._listeners.push({eventName:"onmousedown",methodName:"onMouseDown"}),this.enableDoubleClickZoom&&this._listeners.push({eventName:"ondblclick",methodName:"onDoubleClick"}),this.enableKeyZoom&&this._listeners.push({eventName:"keypress",methodName:"onKeyPress"}),this._handles=[],this.connect()},_disconnectHandles:function(){n("ie")&&this.chart.node.releaseCapture(),a.forEach(this._handles,r.disconnect),this._handles=[]},connect:function(){this.inherited(arguments),this.enableKeyZoom&&s.set(this.chart.node,"tabindex","0")},disconnect:function(){this.inherited(arguments),this.enableKeyZoom&&s.set(this.chart.node,"tabindex","-1"),this._disconnectHandles()},onMouseDown:function(e){var a=this.chart,o=a.getAxis(this.axis);o.vertical?this._startCoord=e.pageY:this._startCoord=e.pageX,this._startOffset=o.getWindowOffset(),this._isPanning=!0,n("ie")?(this._handles.push(r.connect(this.chart.node,"onmousemove",this,"onMouseMove")),this._handles.push(r.connect(this.chart.node,"onmouseup",this,"onMouseUp")),this.chart.node.setCapture()):(this._handles.push(r.connect(t.doc,"onmousemove",this,"onMouseMove")),this._handles.push(r.connect(t.doc,"onmouseup",this,"onMouseUp"))),a.node.focus(),i.stop(e)},onMouseMove:function(e){if(this._isPanning){var t=this.chart,a=t.getAxis(this.axis),i=this._getDelta(e),r=a.getScaler().bounds,o=r.span/(r.upper-r.lower),d=a.getWindowScale();t.setAxisWindow(this.axis,d,this._startOffset-i/o/d),t.render()}},onMouseUp:function(e){this._isPanning=!1,this._disconnectHandles()},onMouseWheel:function(e){var t=e.wheelDelta/u;t>-1&&0>t?t=-1:t>0&&1>t&&(t=1),this._onZoom(t,e)},onKeyPress:function(e){f[this.keyZoomModifier](e)&&("+"==e.keyChar||e.keyCode==l.NUMPAD_PLUS?this._onZoom(1,e):"-"!=e.keyChar&&e.keyCode!=l.NUMPAD_MINUS||this._onZoom(-1,e))},onDoubleClick:function(e){var t=this.chart,a=t.getAxis(this.axis),r=1/this.scaleFactor;if(1==a.getWindowScale()){var o=a.getScaler(),d=o.bounds.from,n=o.bounds.to,s=(d+n)/2,l=this.plot.toData({x:e.pageX,y:e.pageY})[this.axis],m=r*(d-s)+l,u=r*(n-s)+l;t.zoomIn(this.axis,[m,u])}else t.setAxisWindow(this.axis,1,0),t.render();i.stop(e)},_onZoom:function(e,t){var a=0>e?Math.abs(e)*this.scaleFactor:1/(Math.abs(e)*this.scaleFactor),r=this.chart,o=r.getAxis(this.axis),d=o.getWindowScale();if(!(d/a>this.maxScale)){var n=o.getScaler(),s=n.bounds.from,l=n.bounds.to,m="keypress"==t.type?(s+l)/2:this.plot.toData({x:t.pageX,y:t.pageY})[this.axis],u=a*(s-m)+m,f=a*(l-m)+m;r.zoomIn(this.axis,[u,f]),i.stop(t)}},_getDelta:function(e){return this.chart.getAxis(this.axis).vertical?this._startCoord-e.pageY:e.pageX-this._startCoord}});return n("dojo-bidi")?e("dojox.charting.action2d.MouseZoomAndPan",[h,m]):h});//# sourceMappingURL=MouseZoomAndPan.js.map