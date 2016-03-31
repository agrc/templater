//>>built
define("dojox/grid/enhanced/plugins/Exporter",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","../_Plugin","../../_RowSelector","../../EnhancedGrid","../../cells/_base"],function(e,t,i,a,r,o){var n=i.getObject("dojox.grid.cells"),s=e("dojox.grid.enhanced.plugins.Exporter",a,{name:"exporter",constructor:function(e,t){this.grid=e,this.formatter=t&&i.isObject(t)&&t.exportFormatter,this._mixinGrid()},_mixinGrid:function(){var e=this.grid;e.exportTo=i.hitch(this,this.exportTo),e.exportGrid=i.hitch(this,this.exportGrid),e.exportSelected=i.hitch(this,this.exportSelected),e.setExportFormatter=i.hitch(this,this.setExportFormatter)},setExportFormatter:function(e){this.formatter=e},exportGrid:function(e,t,a){if(i.isFunction(t)&&(a=t,t={}),i.isString(e)&&i.isFunction(a)){t=t||{};var r=this.grid,o=this,n=this._getExportWriter(e,t.writerArgs),s=t.fetchArgs&&i.isObject(t.fetchArgs)?t.fetchArgs:{},d=s.onComplete;if(r.store)s.onComplete=function(e,t){d&&d(e,t),a(o._goThroughGridData(e,n))},s.sort=s.sort||r.getSortProps(),r._storeLayerFetch(s);else{for(var l=s.start||0,h=s.count||-1,u=[],c=l;c!=l+h&&c<r.rowCount;++c)u.push(r.getItem(c));a(this._goThroughGridData(u,n))}}},exportSelected:function(e,t,a){if(!i.isString(e))return"";var r=this._getExportWriter(e,t);return a(this._goThroughGridData(this.grid.selection.getSelected(),r))},_buildRow:function(e,i){var a=this;t.forEach(e._views,function(r,o){e.view=r,e.viewIdx=o,i.beforeView(e)&&(t.forEach(r.structure.cells,function(r,o){e.subrow=r,e.subrowIdx=o,i.beforeSubrow(e)&&(t.forEach(r,function(t,r){e.isHeader&&a._isSpecialCol(t)&&e.spCols.push(t.index),e.cell=t,e.cellIdx=r,i.handleCell(e)}),i.afterSubrow(e))}),i.afterView(e))})},_goThroughGridData:function(e,i){var a=this.grid,o=t.filter(a.views.views,function(e){return!(e instanceof r)}),n={grid:a,isHeader:!0,spCols:[],_views:o,colOffset:o.length<a.views.views.length?-1:0};return i.beforeHeader(a)&&(this._buildRow(n,i),i.afterHeader()),n.isHeader=!1,i.beforeContent(e)&&(t.forEach(e,function(e,t){n.row=e,n.rowIdx=t,i.beforeContentRow(n)&&(this._buildRow(n,i),i.afterContentRow(n))},this),i.afterContent()),i.toString()},_isSpecialCol:function(e){return e.isRowSelector||e instanceof n.RowIndex},_getExportWriter:function(e,t){var a,r,o=s;if(o.writerNames){if(a=o.writerNames[e.toLowerCase()],r=i.getObject(a)){var n=new r(t);return n.formatter=this.formatter,n}throw new Error('Please make sure class "'+a+'" is required.')}throw new Error('The writer for "'+e+'" has not been registered.')}});return s.registerWriter=function(e,t){s.writerNames=s.writerNames||{},s.writerNames[e]=t},o.registerPlugin(s),s});//# sourceMappingURL=Exporter.js.map