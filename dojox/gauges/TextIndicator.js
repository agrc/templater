//>>built
define("dojox/gauges/TextIndicator",["dojo/_base/declare","./_Indicator"],function(e,t){return e("dojox.gauges.TextIndicator",[t],{x:0,y:0,align:"middle",fixedPrecision:!0,precision:0,draw:function(e,t){var i=this.value;i<this._gauge.min&&(i=this._gauge.min),i>this._gauge.max&&(i=this._gauge.max);var a,r=this._gauge?this._gauge._getNumberModule():null;a=r?this.fixedPrecision?r.format(i,{places:this.precision}):r.format(i):this.fixedPrecision?i.toFixed(this.precision):i.toString();var n=this.x?this.x:0,o=this.y?this.y:0,s=this.align?this.align:"middle";this.shape?this.shape.setShape({x:n,y:o,text:a,align:s}):this.shape=e.createText({x:n,y:o,text:a,align:s}),this.shape.setFill(this.color),this.font&&this.shape.setFont(this.font)}})});//# sourceMappingURL=TextIndicator.js.map