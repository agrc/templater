//>>built
define("dojox/gauges/AnalogArrowIndicator",["dojo/_base/declare","./AnalogIndicatorBase"],function(e,t){return e("dojox.gauges.AnalogArrowIndicator",[t],{_getShapes:function(e){if(!this._gauge)return null;var t=this.color?this.color:"black",a=this.strokeColor?this.strokeColor:t,i={color:a,width:1};this.color.type&&!this.strokeColor&&(i.color=this.color.colors[0].color);var r=Math.floor(this.width/2),o=5*this.width,n=1&this.width,d=[],s=[{x:-r,y:0},{x:-r,y:-this.length+o},{x:-2*r,y:-this.length+o},{x:0,y:-this.length},{x:2*r+n,y:-this.length+o},{x:r+n,y:-this.length+o},{x:r+n,y:0},{x:-r,y:0}];return d[0]=e.createPolyline(s).setStroke(i).setFill(t),d[1]=e.createLine({x1:-r,y1:0,x2:-r,y2:-this.length+o}).setStroke({color:this.highlight}),d[2]=e.createLine({x1:-r-3,y1:-this.length+o,x2:0,y2:-this.length}).setStroke({color:this.highlight}),d[3]=e.createCircle({cx:0,cy:0,r:this.width}).setStroke(i).setFill(t),d}})});//# sourceMappingURL=AnalogArrowIndicator.js.map