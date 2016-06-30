//>>built
define("dojox/grid/enhanced/plugins/exporter/CSVWriter",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","./_ExportWriter","../Exporter"],function(e,t,i,a,n){return n.registerWriter("csv","dojox.grid.enhanced.plugins.exporter.CSVWriter"),e("dojox.grid.enhanced.plugins.exporter.CSVWriter",a,{_separator:",",_newline:"\r\n",constructor:function(e){e&&(this._separator=e.separator?e.separator:this._separator,this._newline=e.newline?e.newline:this._newline),this._headers=[],this._dataRows=[]},_formatCSVCell:function(e){if(null===e||void 0===e)return"";var t=String(e).replace(/"/g,'""');return(t.indexOf(this._separator)>=0||t.search(/[" \t\r\n]/)>=0)&&(t='"'+t+'"'),t},beforeContentRow:function(e){var a=[],n=t.hitch(this,this._formatCSVCell);return i.forEach(e.grid.layout.cells,function(t){!t.hidden&&i.indexOf(e.spCols,t.index)<0&&a.push(n(this._getExportDataForCell(e.rowIndex,e.row,t,e.grid)))},this),this._dataRows.push(a),!1},handleCell:function(e){var t=e.cell;e.isHeader&&!t.hidden&&i.indexOf(e.spCols,t.index)<0&&this._headers.push(t.name||t.field)},toString:function(){for(var e=this._headers.join(this._separator),t=this._dataRows.length-1;t>=0;--t)this._dataRows[t]=this._dataRows[t].join(this._separator);return e+this._newline+this._dataRows.join(this._newline)}})});//# sourceMappingURL=CSVWriter.js.map