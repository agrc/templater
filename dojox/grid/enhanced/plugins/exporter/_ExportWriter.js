//>>built
define("dojox/grid/enhanced/plugins/exporter/_ExportWriter",["dojo/_base/declare"],function(e){return e("dojox.grid.enhanced.plugins.exporter._ExportWriter",null,{constructor:function(e){},_getExportDataForCell:function(e,t,a,i){var r=(a.get||i.get).call(a,e,t);return this.formatter?this.formatter(r,a,e,t):r},beforeHeader:function(e){return!0},afterHeader:function(){},beforeContent:function(e){return!0},afterContent:function(){},beforeContentRow:function(e){return!0},afterContentRow:function(e){},beforeView:function(e){return!0},afterView:function(e){},beforeSubrow:function(e){return!0},afterSubrow:function(e){},handleCell:function(e){},toString:function(){return""}})});//# sourceMappingURL=_ExportWriter.js.map