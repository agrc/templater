//>>built
define("dojox/gauges/AnalogGauge",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojox/gfx","./_Gauge","./AnalogLineIndicator","dojo/dom-geometry"],function(e,t,i,r,a,n,o,s,l,d){return t("dojox.gauges.AnalogGauge",s,{startAngle:-90,endAngle:90,cx:0,cy:0,radius:0,orientation:"clockwise",_defaultIndicator:l,startup:function(){this.getChildren&&i.forEach(this.getChildren(),function(e){e.startup()}),this.startAngle=Number(this.startAngle),this.endAngle=Number(this.endAngle),this.cx=Number(this.cx),this.cx||(this.cx=this.width/2),this.cy=Number(this.cy),this.cy||(this.cy=this.height/2),this.radius=Number(this.radius),this.radius||(this.radius=Math.min(this.cx,this.cy)-25),this.inherited(arguments)},_getAngle:function(e){var t,i=Number(e);if(null==e||isNaN(i)||i<=this.min)t=this._mod360(this.startAngle);else if(i>=this.max)t=this._mod360(this.endAngle);else{var r=this._mod360(this.startAngle),a=i-this.min;"clockwise"!=this.orientation&&(a=-a),t=this._mod360(r+this._getAngleRange()*a/Math.abs(this.min-this.max))}return t},_getValueForAngle:function(e){var t=this._mod360(this.startAngle),i=this._mod360(this.endAngle);if(this._angleInRange(e)){var r=Math.abs(this.max-this.min),a=this._mod360("clockwise"==this.orientation?e-t:-e+t);return this.min+r*a/this._getAngleRange()}var n=this._mod360(t-e),o=360-n,s=this._mod360(i-e),l=360-s;return Math.min(n,o)<Math.min(s,l)?this.min:this.max},_getAngleRange:function(){var e=this._mod360(this.startAngle),t=this._mod360(this.endAngle);return e==t?360:"clockwise"==this.orientation?t<e?360-(e-t):t-e:t<e?e-t:360-(t-e)},_angleInRange:function(e){var t=this._mod360(this.startAngle),i=this._mod360(this.endAngle);return t==i||(e=this._mod360(e),"clockwise"==this.orientation?t<i?e>=t&&e<=i:!(e>i&&e<t):t<i?!(e>t&&e<i):e>=i&&e<=t)},_isScaleCircular:function(){return this._mod360(this.startAngle)==this._mod360(this.endAngle)},_mod360:function(e){for(;e>360;)e-=360;for(;e<0;)e+=360;return e},_getRadians:function(e){return e*Math.PI/180},_getDegrees:function(e){return 180*e/Math.PI},drawRange:function(e,t){var i;t.shape&&(t.shape.parent.remove(t.shape),t.shape=null);var a,n;if(t.low==this.min&&t.high==this.max&&this._mod360(this.endAngle)==this._mod360(this.startAngle))i=e.createCircle({cx:this.cx,cy:this.cy,r:this.radius});else{if(a=this._getRadians(this._getAngle(t.low)),n=this._getRadians(this._getAngle(t.high)),"cclockwise"==this.orientation){var s=n;n=a,a=s}var l,d=this.cx+this.radius*Math.sin(a),u=this.cy-this.radius*Math.cos(a),c=this.cx+this.radius*Math.sin(n),h=this.cy-this.radius*Math.cos(n),f=0;l=a<=n?n-a:2*Math.PI-a+n,l>Math.PI&&(f=1),i=e.createPath(),t.size?i.moveTo(this.cx+(this.radius-t.size)*Math.sin(a),this.cy-(this.radius-t.size)*Math.cos(a)):i.moveTo(this.cx,this.cy),i.lineTo(d,u),i.arcTo(this.radius,this.radius,0,f,1,c,h),t.size&&(i.lineTo(this.cx+(this.radius-t.size)*Math.sin(n),this.cy-(this.radius-t.size)*Math.cos(n)),i.arcTo(this.radius-t.size,this.radius-t.size,0,f,0,this.cx+(this.radius-t.size)*Math.sin(a),this.cy-(this.radius-t.size)*Math.cos(a))),i.closePath()}r.isArray(t.color)||r.isString(t.color)?(i.setStroke({color:t.color}),i.setFill(t.color)):t.color.type?(a=this._getRadians(this._getAngle(t.low)),n=this._getRadians(this._getAngle(t.high)),t.color.x1=this.cx+this.radius*Math.sin(a)/2,t.color.x2=this.cx+this.radius*Math.sin(n)/2,t.color.y1=this.cy-this.radius*Math.cos(a)/2,t.color.y2=this.cy-this.radius*Math.cos(n)/2,i.setFill(t.color),i.setStroke({color:t.color.colors[0].color})):o.svg&&(i.setStroke({color:"green"}),i.setFill("green"),i.getEventSource().setAttribute("class",t.color.style)),i.connect("onmouseover",r.hitch(this,this._handleMouseOverRange,t)),i.connect("onmouseout",r.hitch(this,this._handleMouseOutRange,t)),t.shape=i},getRangeUnderMouse:function(e){var t=null,i=d.getContentBox(this.gaugeContent),r=e.clientX-i.x,a=e.clientY-i.y;if(Math.sqrt((a-this.cy)*(a-this.cy)+(r-this.cx)*(r-this.cx))<this.radius){var n=this._getDegrees(Math.atan2(a-this.cy,r-this.cx)+Math.PI/2),o=this._getValueForAngle(n);if(this._rangeData)for(var s=0;s<this._rangeData.length&&!t;s++)Number(this._rangeData[s].low)<=o&&Number(this._rangeData[s].high)>=o&&(t=this._rangeData[s])}return t},_dragIndicator:function(e,t){this._dragIndicatorAt(e,t.pageX,t.pageY),n.stop(t)},_dragIndicatorAt:function(e,t,i){var r=d.position(e.gaugeContent,!0),a=t-r.x,n=i-r.y,o=e._getDegrees(Math.atan2(n-e.cy,a-e.cx)+Math.PI/2),s=e._getValueForAngle(o);s=Math.min(Math.max(s,e.min),e.max),e._drag.value=e._drag.currentValue=s,e._drag.onDragMove(e._drag),e._drag.draw(this._indicatorsGroup,!0),e._drag.valueChanged()}})});//# sourceMappingURL=AnalogGauge.js.map