//>>built
define("dojox/grid/enhanced/plugins/exporter/TableWriter",["dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","./_ExportWriter","../Exporter"],function(e,t,i,a,o){return o.registerWriter("table","dojox.grid.enhanced.plugins.exporter.TableWriter"),e("dojox.grid.enhanced.plugins.exporter.TableWriter",a,{constructor:function(e){this._viewTables=[],this._tableAttrs=e||{}},_getTableAttrs:function(e){var t=this._tableAttrs[e]||"";return t&&" "!=t[0]&&(t=" "+t),t},_getRowClass:function(e){return e.isHeader?" grid_header":[" grid_row grid_row_",e.rowIdx+1,e.rowIdx%2?" grid_even_row":" grid_odd_row"].join("")},_getColumnClass:function(e){var t=e.cell.index+e.colOffset+1;return[" grid_column grid_column_",t,t%2?" grid_odd_column":" grid_even_column"].join("")},beforeView:function(e){var t,a=e.viewIdx,o=this._viewTables[a],n=i.getMarginBox(e.view.contentNode).w;if(!o){for(var r=0,s=0;a>s;++s)r+=this._viewTables[s]._width;o=this._viewTables[a]=['<div class="grid_view" style="position: absolute; top: 0; ',i.isBodyLtr()?"left":"right",":",r,'px;">']}if(o._width=n,e.isHeader)t=i.getContentBox(e.view.headerContentNode).h;else{var l=e.grid.getRowNode(e.rowIdx);t=l?i.getContentBox(l).h:e.grid.scroller.averageRowHeight}return o.push('<table class="',this._getRowClass(e),'" style="table-layout:fixed; height:',t,"px; width:",n,'px;" ','border="0" cellspacing="0" cellpadding="0" ',this._getTableAttrs("table"),"><tbody ",this._getTableAttrs("tbody"),">"),!0},afterView:function(e){this._viewTables[e.viewIdx].push("</tbody></table>")},beforeSubrow:function(e){return this._viewTables[e.viewIdx].push("<tr",this._getTableAttrs("tr"),">"),!0},afterSubrow:function(e){this._viewTables[e.viewIdx].push("</tr>")},handleCell:function(e){var a=e.cell;if(!(a.hidden||t.indexOf(e.spCols,a.index)>=0)){var o=e.isHeader?"th":"td",n=[a.colSpan?' colspan="'+a.colSpan+'"':"",a.rowSpan?' rowspan="'+a.rowSpan+'"':"",' style="width: ',i.getContentBox(a.getHeaderNode()).w,'px;"',this._getTableAttrs(o),' class="',this._getColumnClass(e),'"'].join(""),r=this._viewTables[e.viewIdx];r.push("<",o,n,">"),e.isHeader?r.push(a.name||a.field):r.push(this._getExportDataForCell(e.rowIdx,e.row,a,e.grid)),r.push("</",o,">")}},afterContent:function(){t.forEach(this._viewTables,function(e){e.push("</div>")})},toString:function(){var e=t.map(this._viewTables,function(e){return e.join("")}).join("");return['<div style="position: relative;">',e,"</div>"].join("")}})});//# sourceMappingURL=TableWriter.js.map