//>>built
define("dojox/gauges/AnalogLineIndicator",["dojo/_base/declare","./AnalogIndicatorBase"],function(e,t){return e("dojox.gauges.AnalogLineIndicator",[t],{_getShapes:function(e){var t=this.direction,a=this.length;return"inside"==t&&(a=-a),[e.createLine({x1:0,y1:-this.offset,x2:0,y2:-a-this.offset}).setStroke({color:this.color,width:this.width})]}})});//# sourceMappingURL=AnalogLineIndicator.js.map