//>>built
define("dojox/gauges/TextIndicator",["dojo/_base/declare","./_Indicator"],function(e,t){return e("dojox.gauges.TextIndicator",[t],{x:0,y:0,align:"middle",fixedPrecision:!0,precision:0,draw:function(e,t){var a=this.value;a<this._gauge.min&&(a=this._gauge.min),a>this._gauge.max&&(a=this._gauge.max);var i,r=this._gauge?this._gauge._getNumberModule():null;i=r?this.fixedPrecision?r.format(a,{places:this.precision}):r.format(a):this.fixedPrecision?a.toFixed(this.precision):a.toString();var n=this.x?this.x:0,o=this.y?this.y:0,s=this.align?this.align:"middle";this.shape?this.shape.setShape({x:n,y:o,text:i,align:s}):this.shape=e.createText({x:n,y:o,text:i,align:s}),this.shape.setFill(this.color),this.font&&this.shape.setFont(this.font)}})});//# sourceMappingURL=TextIndicator.js.map