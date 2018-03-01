//>>built
define("dojox/charting/plot2d/Base",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojox/gfx","../Element","./common","../axis2d/common","dojo/has"],function(e,t,a,i,r,d,o,n){var l=e("dojox.charting.plot2d.Base",r,{constructor:function(e,t){t&&t.tooltipFunc&&(this.tooltipFunc=t.tooltipFunc)},clear:function(){return this.series=[],this.dirty=!0,this},setAxis:function(e){return this},assignAxes:function(e){t.forEach(this.axes,function(t){this[t]&&this.setAxis(e[this[t]])},this)},addSeries:function(e){return this.series.push(e),this},getSeriesStats:function(){return d.collectSimpleStats(this.series,a.hitch(this,"isNullValue"))},calculateAxes:function(e){return this.initializeScalers(e,this.getSeriesStats()),this},initializeScalers:function(){return this},isDataDirty:function(){return t.some(this.series,function(e){return e.dirty})},render:function(e,t){return this},renderLabel:function(e,t,a,r,d,n,l){var s=o.createText[this.opt.htmlLabels&&"vml"!=i.renderer?"html":"gfx"](this.chart,e,t,a,l||"middle",r,d.series.font,d.series.fontColor);return n&&(this.opt.htmlLabels&&"vml"!=i.renderer?s.style.pointerEvents="none":s.rawNode&&(s.rawNode.style.pointerEvents="none")),this.opt.htmlLabels&&"vml"!=i.renderer&&this.htmlElements.push(s),s},getRequiredColors:function(){return this.series.length},_getLabel:function(e){return d.getLabel(e,this.opt.fixed,this.opt.precision)}});return n("dojo-bidi")&&l.extend({_checkOrientation:function(e,t,a){this.chart.applyMirroring(this.group,t,a)}}),l});//# sourceMappingURL=Base.js.map