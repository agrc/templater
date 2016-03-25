//>>built
define("dojox/gauges/BarGauge",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/_base/event","dojox/gfx","./_Gauge","./BarLineIndicator","dojo/dom-geometry"],function(e,t,a,i,r,o,n,s,l){return e("dojox.gauges.BarGauge",n,{dataX:5,dataY:5,dataWidth:0,dataHeight:0,_defaultIndicator:s,startup:function(){this.getChildren&&a.forEach(this.getChildren(),function(e){e.startup()}),this.dataWidth||(this.dataWidth=this.gaugeWidth-10),this.dataHeight||(this.dataHeight=this.gaugeHeight-10),this.inherited(arguments)},_getPosition:function(e){return this.dataX+Math.floor((e-this.min)/(this.max-this.min)*this.dataWidth)},_getValueForPosition:function(e){return(e-this.dataX)*(this.max-this.min)/this.dataWidth+this.min},drawRange:function(e,a){a.shape&&(a.shape.parent.remove(a.shape),a.shape=null);var i=this._getPosition(a.low),r=this._getPosition(a.high),n=e.createRect({x:i,y:this.dataY,width:r-i,height:this.dataHeight});if(t.isArray(a.color)||t.isString(a.color))n.setStroke({color:a.color}),n.setFill(a.color);else if(a.color.type){var s=this.dataY+this.dataHeight/2;a.color.x1=i,a.color.x2=r,a.color.y1=s,a.color.y2=s,n.setFill(a.color),n.setStroke({color:a.color.colors[0].color})}else o.svg&&(n.setStroke({color:"green"}),n.setFill("green"),n.getEventSource().setAttribute("class",a.color.style));n.connect("onmouseover",t.hitch(this,this._handleMouseOverRange,a)),n.connect("onmouseout",t.hitch(this,this._handleMouseOutRange,a)),a.shape=n},getRangeUnderMouse:function(e){var t=null,a=l.getContentBox(this.gaugeContent),i=e.clientX-a.x,r=this._getValueForPosition(i);if(this._rangeData)for(var o=0;o<this._rangeData.length&&!t;o++)Number(this._rangeData[o].low)<=r&&Number(this._rangeData[o].high)>=r&&(t=this._rangeData[o]);return t},_dragIndicator:function(e,t){this._dragIndicatorAt(e,t.pageX,t.pageY),r.stop(t)},_dragIndicatorAt:function(e,t,a){var i=l.position(e.gaugeContent,!0),r=t-i.x,o=e._getValueForPosition(r);o<e.min&&(o=e.min),o>e.max&&(o=e.max),e._drag.value=o,e._drag.onDragMove(e._drag),e._drag.draw(this._indicatorsGroup,!0),e._drag.valueChanged()}})});//# sourceMappingURL=BarGauge.js.map