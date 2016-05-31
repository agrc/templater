//>>built
define("dojox/grid/enhanced/plugins/Selector",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/keys","dojo/query","dojo/_base/html","dojo/_base/window","dijit/focus","../../_RowSelector","../_Plugin","../../EnhancedGrid","../../cells/_base","./AutoScroll"],function(e,t,i,a,o,r,n,s,l,d,u,c,h){var m=0,f=1,p=2,y={col:"row",row:"col"},g=function(e,t,i,a,o){return"cell"!==e?(t=t[e],i=i[e],a=a[e],"number"!=typeof t||"number"!=typeof i||"number"!=typeof a?!1:o?t>=i&&a>t||t>a&&i>=t:t>=i&&a>=t||t>=a&&i>=t):g("col",t,i,a,o)&&g("row",t,i,a,o)},v=function(e,t,i){try{if(t&&i)switch(e){case"col":case"row":return!(t[e]!=i[e]||"number"!=typeof t[e]||y[e]in t||y[e]in i);case"cell":return t.col==i.col&&t.row==i.row&&"number"==typeof t.col&&"number"==typeof t.row}}catch(a){}return!1},b=function(e){try{e&&e.preventDefault&&o.stop(e)}catch(t){}},M=function(e,t,i){switch(e){case"col":return{col:"undefined"==typeof i?t:i,except:[]};case"row":return{row:t,except:[]};case"cell":return{row:t,col:i}}return null},w=i("dojox.grid.enhanced.plugins.Selector",c,{name:"selector",constructor:function(e,t){this.grid=e,this._config={row:p,col:p,cell:p},this.noClear=t&&t.noClear,this.setupConfig(t),"single"===e.selectionMode&&(this._config.row=f),this._enabled=!0,this._selecting={},this._selected={col:[],row:[],cell:[]},this._startPoint={},this._currentPoint={},this._lastAnchorPoint={},this._lastEndPoint={},this._lastSelectedAnchorPoint={},this._lastSelectedEndPoint={},this._keyboardSelect={},this._lastType=null,this._selectedRowModified={},this._hacks(),this._initEvents(),this._initAreas(),this._mixinGrid()},destroy:function(){this.inherited(arguments)},setupConfig:function(e){if(e&&t.isObject(e)){var i=["row","col","cell"];for(var o in e)a.indexOf(i,o)>=0&&(e[o]&&"disabled"!=e[o]?"single"==e[o]?this._config[o]=f:this._config[o]=p:this._config[o]=m);var r=["none","single","extended"][this._config.row];this.grid.selection.setMode(r)}},isSelected:function(e,t,i){return this._isSelected(e,M(e,t,i))},toggleSelect:function(e,t,i){this._startSelect(e,M(e,t,i),this._config[e]===p,!1,!1,!this.isSelected(e,t,i)),this._endSelect(e)},select:function(e,t,i){this.isSelected(e,t,i)||this.toggleSelect(e,t,i)},deselect:function(e,t,i){this.isSelected(e,t,i)&&this.toggleSelect(e,t,i)},selectRange:function(e,t,i,a){this.grid._selectingRange=!0;var o="cell"==e?M(e,t.row,t.col):M(e,t),r="cell"==e?M(e,i.row,i.col):M(e,i);this._startSelect(e,o,!1,!1,!1,a),this._highlight(e,r,void 0===a?!0:a),this._endSelect(e),this.grid._selectingRange=!1},clear:function(e){this._clearSelection(e||"all")},isSelecting:function(e){return"undefined"==typeof e?this._selecting.col||this._selecting.row||this._selecting.cell:this._selecting[e]},selectEnabled:function(e){return"undefined"==typeof e||this.isSelecting()||(this._enabled=!!e),this._enabled},getSelected:function(e,t){switch(e){case"cell":return a.map(this._selected[e],function(e){return e});case"col":case"row":return a.map(t?this._selected[e]:a.filter(this._selected[e],function(e){return 0===e.except.length}),function(i){return t?i:i[e]})}return[]},getSelectedCount:function(e,t){switch(e){case"cell":return this._selected[e].length;case"col":case"row":return(t?this._selected[e]:a.filter(this._selected[e],function(e){return 0===e.except.length})).length}return 0},getSelectedType:function(){var e=this._selected;return["","cell","row","row|cell","col","col|cell","col|row","col|row|cell"][!!e.cell.length|!!e.row.length<<1|!!e.col.length<<2]},getLastSelectedRange:function(e){return this._lastAnchorPoint[e]?{start:this._lastAnchorPoint[e],end:this._lastEndPoint[e]}:null},_hacks:function(){var e=this.grid,i=function(t){t.cellNode&&e.onMouseUp(t),e.onMouseUpRow(t)},o=t.hitch(e,"onMouseUp"),r=t.hitch(e,"onMouseDown"),n=function(e){e.cellNode.style.border="solid 1px"};a.forEach(e.views.views,function(e){e.content.domouseup=i,e.header.domouseup=o,"dojox.grid._RowSelector"==e.declaredClass&&(e.domousedown=r,e.domouseup=o,e.dofocus=n)}),e.selection.clickSelect=function(){},this._oldDeselectAll=e.selection.deselectAll;var l=this;e.selection.selectRange=function(t,i){l.selectRange("row",t,i,!0),e.selection.preserver&&e.selection.preserver._updateMapping(!0,!0,!1,t,i),e.selection.onChanged()},e.selection.deselectRange=function(t,i){l.selectRange("row",t,i,!1),e.selection.preserver&&e.selection.preserver._updateMapping(!0,!1,!1,t,i),e.selection.onChanged()},e.selection.deselectAll=function(){e._selectingRange=!0,l._oldDeselectAll.apply(e.selection,arguments),l._clearSelection("all"),e._selectingRange=!1,e.selection.preserver&&e.selection.preserver._updateMapping(!0,!1,!0),e.selection.onChanged()};var d=e.views.views[0];d instanceof u&&(d.doStyleRowNode=function(t,i){s.removeClass(i,"dojoxGridRow"),s.addClass(i,"dojoxGridRowbar"),s.addClass(i,"dojoxGridNonNormalizedCell"),s.toggleClass(i,"dojoxGridRowbarOver",e.rows.isOver(t)),s.toggleClass(i,"dojoxGridRowbarSelected",!!e.selection.isSelected(t))}),this.connect(e,"updateRow",function(t){a.forEach(e.layout.cells,function(e){this.isSelected("cell",t,e.index)&&this._highlightNode(e.getNode(t),!0)},this)})},_mixinGrid:function(){var e=this.grid;e.setupSelectorConfig=t.hitch(this,this.setupConfig),e.onStartSelect=function(){},e.onEndSelect=function(){},e.onStartDeselect=function(){},e.onEndDeselect=function(){},e.onSelectCleared=function(){}},_initEvents:function(){var e=this.grid,i=this,a=t.partial,o=function(e,t){if("row"===e&&(i._isUsingRowSelector=!0),i.selectEnabled()&&i._config[e]&&2!=t.button){(i._keyboardSelect.col||i._keyboardSelect.row||i._keyboardSelect.cell)&&(i._endSelect("all"),i._keyboardSelect.col=i._keyboardSelect.row=i._keyboardSelect.cell=0),i._usingKeyboard&&(i._usingKeyboard=!1);var a=M(e,t.rowIndex,t.cell&&t.cell.index);i._startSelect(e,a,t.ctrlKey,t.shiftKey)}},r=t.hitch(this,"_endSelect");this.connect(e,"onHeaderCellMouseDown",a(o,"col")),this.connect(e,"onHeaderCellMouseUp",a(r,"col")),this.connect(e,"onRowSelectorMouseDown",a(o,"row")),this.connect(e,"onRowSelectorMouseUp",a(r,"row")),this.connect(e,"onCellMouseDown",function(t){t.cell&&t.cell.isRowSelector||(e.singleClickEdit&&(i._singleClickEdit=!0,e.singleClickEdit=!1),o(i._config.cell==m?"row":"cell",t))}),this.connect(e,"onCellMouseUp",function(t){i._singleClickEdit&&(delete i._singleClickEdit,e.singleClickEdit=!0),r("all",t)}),this.connect(e,"onCellMouseOver",function(e){"row"!=i._curType&&i._selecting[i._curType]&&i._config[i._curType]==p&&(i._highlight("col",M("col",e.cell.index),i._toSelect),i._keyboardSelect.cell||i._highlight("cell",M("cell",e.rowIndex,e.cell.index),i._toSelect))}),this.connect(e,"onHeaderCellMouseOver",function(e){i._selecting.col&&i._config.col==p&&i._highlight("col",M("col",e.cell.index),i._toSelect)}),this.connect(e,"onRowMouseOver",function(e){i._selecting.row&&i._config.row==p&&i._highlight("row",M("row",e.rowIndex),i._toSelect)}),this.connect(e,"onSelectedById","_onSelectedById"),this.connect(e,"_onFetchComplete",function(){e._notRefreshSelection||this._refreshSelected(!0)}),this.connect(e.scroller,"buildPage",function(){e._notRefreshSelection||this._refreshSelected(!0)}),this.connect(l.doc,"onmouseup",a(r,"all")),this.connect(e,"onEndAutoScroll",function(e,t,a,o){var r,n,s=i._selecting.cell,l=t?1:-1;e&&(s||i._selecting.row)?(r=s?"cell":"row",n=i._currentPoint[r],i._highlight(r,M(r,n.row+l,n.col),i._toSelect)):e||!s&&!i._selecting.col||(r=s?"cell":"col",n=i._currentPoint[r],i._highlight(r,M(r,n.row,o),i._toSelect))}),this.subscribe("dojox/grid/rearrange/move/"+e.id,"_onInternalRearrange"),this.subscribe("dojox/grid/rearrange/copy/"+e.id,"_onInternalRearrange"),this.subscribe("dojox/grid/rearrange/change/"+e.id,"_onExternalChange"),this.subscribe("dojox/grid/rearrange/insert/"+e.id,"_onExternalChange"),this.subscribe("dojox/grid/rearrange/remove/"+e.id,"clear"),this.connect(e,"onSelected",function(e){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.select("row",e)}),this.connect(e,"onDeselected",function(e){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.deselect("row",e)})},_onSelectedById:function(e,t,i){if(!this.grid._noInternalMapping){var o=[this._lastAnchorPoint.row,this._lastEndPoint.row,this._lastSelectedAnchorPoint.row,this._lastSelectedEndPoint.row];o=o.concat(this._selected.row);var r=!1;a.forEach(o,function(i){i&&(i.id===e?(r=!0,i.row=t):i.row===t&&i.id&&(i.row=-1))}),!r&&i&&a.some(this._selected.row,function(i){return!i||i.id||i.except.length?!1:(i.id=e,i.row=t,!0)}),r=!1,o=[this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell],o=o.concat(this._selected.cell),a.forEach(o,function(i){i&&(i.id===e?(r=!0,i.row=t):i.row===t&&i.id&&(i.row=-1))})}},onSetStore:function(){this._clearSelection("all")},_onInternalRearrange:function(e,t){try{this._refresh("col",!1),a.forEach(this._selected.row,function(e){a.forEach(this.grid.layout.cells,function(t){this._highlightNode(t.getNode(e.row),!1)},this)},this),n(".dojoxGridRowSelectorSelected").forEach(function(e){s.removeClass(e,"dojoxGridRowSelectorSelected"),s.removeClass(e,"dojoxGridRowSelectorSelectedUp"),s.removeClass(e,"dojoxGridRowSelectorSelectedDown")});var i=function(e){e&&delete e.converted},o=[this._lastAnchorPoint[e],this._lastEndPoint[e],this._lastSelectedAnchorPoint[e],this._lastSelectedEndPoint[e]];if("cell"===e){this.selectRange("cell",t.to.min,t.to.max);var r=this.grid.layout.cells;a.forEach(o,function(e){if(!e.converted)for(var i=t.from.min.row,a=t.to.min.row;i<=t.from.max.row;++i,++a)for(var o=t.from.min.col,n=t.to.min.col;o<=t.from.max.col;++o,++n){for(;r[o].hidden;)++o;for(;r[n].hidden;)++n;if(e.row==i&&e.col==o)return e.row=a,e.col=n,void(e.converted=!0)}})}else o=this._selected.cell.concat(this._selected[e]).concat(o).concat([this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell]),a.forEach(o,function(i){if(i&&!i.converted){var a=i[e];a in t&&(i[e]=t[a]),i.converted=!0}}),a.forEach(this._selected[y[e]],function(e){for(var i=0,a=e.except.length;a>i;++i){var o=e.except[i];o in t&&(e.except[i]=t[o])}});a.forEach(o,i),this._refreshSelected(!0),this._focusPoint(e,this._lastEndPoint)}catch(l){}},_onExternalChange:function(e,t){var i="cell"==e?t.min:t[0],a="cell"==e?t.max:t[t.length-1];this.selectRange(e,i,a)},_refresh:function(e,t){this._keyboardSelect[e]||a.forEach(this._selected[e],function(i){this._highlightSingle(e,t,i,void 0,!0)},this)},_refreshSelected:function(){this._refresh("col",!0),this._refresh("row",!0),this._refresh("cell",!0)},_initAreas:function(){var e=this.grid,i=e.focus,a=this,o=1,n=2,l=function(t,r,s,l,d){var u=a._keyboardSelect;if(d.shiftKey&&u[t]){if(u[t]===o){if("cell"===t){var c=a._lastEndPoint[t];if(i.cell!=e.layout.cells[c.col+l]||i.rowIndex!=c.row+s)return void(u[t]=0)}a._startSelect(t,a._lastAnchorPoint[t],!0,!1,!0),a._highlight(t,a._lastEndPoint[t],a._toSelect),u[t]=n}var h=r(t,s,l,d);a._isValid(t,h,e)&&a._highlight(t,h,a._toSelect),b(d)}},c=function(t,i,n,s){if(s&&a.selectEnabled()&&a._config[t]!=m)switch(n.keyCode){case r.SPACE:a._startSelect(t,i(),n.ctrlKey,n.shiftKey),a._endSelect(t);break;case r.SHIFT:a._config[t]==p&&a._isValid(t,a._lastAnchorPoint[t],e)&&(a._endSelect(t),a._keyboardSelect[t]=o,a._usingKeyboard=!0)}},h=function(e,t,i){i&&t.keyCode==r.SHIFT&&a._keyboardSelect[e]&&(a._endSelect(e),a._keyboardSelect[e]=0)};e.views.views[0]instanceof u&&(this._lastFocusedRowBarIdx=0,i.addArea({name:"rowHeader",onFocus:function(t,o){var r=e.views.views[0];if(r instanceof u){var n=r.getCellNode(a._lastFocusedRowBarIdx,0);return n&&s.toggleClass(n,i.focusClass,!1),t&&"rowIndex"in t&&(t.rowIndex>=0?a._lastFocusedRowBarIdx=t.rowIndex:a._lastFocusedRowBarIdx||(a._lastFocusedRowBarIdx=0)),n=r.getCellNode(a._lastFocusedRowBarIdx,0),n&&(d.focus(n),s.toggleClass(n,i.focusClass,!0)),i.rowIndex=a._lastFocusedRowBarIdx,b(t),!0}return!1},onBlur:function(t,o){var r=e.views.views[0];if(r instanceof u){var n=r.getCellNode(a._lastFocusedRowBarIdx,0);n&&s.toggleClass(n,i.focusClass,!1),b(t)}return!0},onMove:function(t,o,r){var n=e.views.views[0];if(t&&n instanceof u){var l=a._lastFocusedRowBarIdx+t;if(l>=0&&l<e.rowCount){b(r);var c=n.getCellNode(a._lastFocusedRowBarIdx,0);s.toggleClass(c,i.focusClass,!1);var h=e.scroller,m=h.getLastPageRow(h.page),f=e.rowCount-1,p=Math.min(f,l);l>m&&e.setScrollTop(e.scrollTop+h.findScrollTop(p)-h.findScrollTop(a._lastFocusedRowBarIdx)),c=n.getCellNode(l,0),d.focus(c),s.toggleClass(c,i.focusClass,!0),a._lastFocusedRowBarIdx=l,i.cell=c,i.cell.view=n,i.cell.getNode=function(e){return i.cell},i.rowIndex=a._lastFocusedRowBarIdx,i.scrollIntoView(),i.cell=null}}}}),i.placeArea("rowHeader","before","content")),i.addArea({name:"cellselect",onMove:t.partial(l,"cell",function(e,t,i,o){var r=a._currentPoint[e];return M("cell",r.row+t,r.col+i)}),onKeyDown:t.partial(c,"cell",function(){return M("cell",i.rowIndex,i.cell.index)}),onKeyUp:t.partial(h,"cell")}),i.placeArea("cellselect","below","content"),i.addArea({name:"colselect",onMove:t.partial(l,"col",function(e,t,i,o){var r=a._currentPoint[e];return M("col",r.col+i)}),onKeyDown:t.partial(c,"col",function(){return M("col",i.getHeaderIndex())}),onKeyUp:t.partial(h,"col")}),i.placeArea("colselect","below","header"),i.addArea({name:"rowselect",onMove:t.partial(l,"row",function(e,t,a,o){return M("row",i.rowIndex)}),onKeyDown:t.partial(c,"row",function(){return M("row",i.rowIndex)}),onKeyUp:t.partial(h,"row")}),i.placeArea("rowselect","below","rowHeader")},_clearSelection:function(e,t){return"all"==e?(this._clearSelection("cell",t),this._clearSelection("col",t),void this._clearSelection("row",t)):(this._isUsingRowSelector=!0,a.forEach(this._selected[e],function(i){v(e,t,i)||this._highlightSingle(e,!1,i)},this),this._blurPoint(e,this._currentPoint),this._selecting[e]=!1,this._startPoint[e]=this._currentPoint[e]=null,this._selected[e]=[],"row"!=e||this.grid._selectingRange||(this._oldDeselectAll.call(this.grid.selection),this.grid.selection._selectedById={}),this.grid.onEndDeselect(e,null,null,this._selected),void this.grid.onSelectCleared(e))},_startSelect:function(e,t,i,a,o,r){if(this._isValid(e,t)){var n=this._isSelected(e,this._lastEndPoint[e]),s=this._isSelected(e,t);this.noClear&&!i?this._toSelect=void 0===r?!0:r:this._toSelect=o?s:!s,i&&(s||this._config[e]!=f)||(this._clearSelection("col",t),this._clearSelection("cell",t),(!this.noClear||"row"===e&&this._config[e]==f)&&this._clearSelection("row",t),this._toSelect=void 0===r?!0:r),this._selecting[e]=!0,this._currentPoint[e]=null,a&&this._lastType==e&&n==this._toSelect&&this._config[e]==p?("row"===e&&(this._isUsingRowSelector=!0),this._startPoint[e]=this._lastAnchorPoint[e],this._highlight(e,this._startPoint[e]),this._isUsingRowSelector=!1):this._startPoint[e]=t,this._curType=e,this._fireEvent("start",e),this._isStartFocus=!0,this._isUsingRowSelector=!0,this._highlight(e,t,this._toSelect),this._isStartFocus=!1}},_endSelect:function(e){"row"===e&&delete this._isUsingRowSelector,"all"==e?(this._endSelect("col"),this._endSelect("row"),this._endSelect("cell")):this._selecting[e]&&(this._addToSelected(e),this._lastAnchorPoint[e]=this._startPoint[e],this._lastEndPoint[e]=this._currentPoint[e],this._toSelect&&(this._lastSelectedAnchorPoint[e]=this._lastAnchorPoint[e],this._lastSelectedEndPoint[e]=this._lastEndPoint[e]),this._startPoint[e]=this._currentPoint[e]=null,this._selecting[e]=!1,this._lastType=e,this._fireEvent("end",e))},_fireEvent:function(e,t){switch(e){case"start":this.grid[this._toSelect?"onStartSelect":"onStartDeselect"](t,this._startPoint[t],this._selected);break;case"end":this.grid[this._toSelect?"onEndSelect":"onEndDeselect"](t,this._lastAnchorPoint[t],this._lastEndPoint[t],this._selected)}},_calcToHighlight:function(e,t,i,a){if(void 0!==a){var o;if(this._usingKeyboard&&!i){var r=this._isInLastRange(this._lastType,t);if(r){if(o=this._isSelected(e,t),a&&o)return!1;if(!a&&!o&&this._isInLastRange(this._lastType,t,!0))return!0}}return i?a:o||this._isSelected(e,t)}return i},_highlightNode:function(e,t){if(e){var i="dojoxGridRowSelected",a="dojoxGridCellSelected";s.toggleClass(e,i,t),s.toggleClass(e,a,t)}},_highlightHeader:function(e,t){var i=this.grid.layout.cells,a=i[e].getHeaderNode(),o="dojoxGridHeaderSelected";s.toggleClass(a,o,t)},_highlightRowSelector:function(e,t){var i=this.grid.views.views[0];if(i instanceof u){var a=i.getRowNode(e);if(a){var o="dojoxGridRowSelectorSelected";s.toggleClass(a,o,t)}}},_highlightSingle:function(e,t,i,o,r){var s,l=this,d=l.grid,u=d.layout.cells;switch(e){case"cell":s=this._calcToHighlight(e,i,t,o);var c=u[i.col];c.hidden||c.notselectable||this._highlightNode(i.node||c.getNode(i.row),s);break;case"col":s=this._calcToHighlight(e,i,t,o),this._highlightHeader(i.col,s),n("td[idx='"+i.col+"']",d.domNode).forEach(function(e){var t=u[i.col].view.content.findRowTarget(e);if(t){var a=t[dojox.grid.util.rowIndexTag];l._highlightSingle("cell",s,{row:a,col:i.col,node:e})}});break;case"row":s=this._calcToHighlight(e,i,t,o),this._highlightRowSelector(i.row,s),this._config.cell&&a.forEach(u,function(e){l._highlightSingle("cell",s,{row:i.row,col:e.index,node:e.getNode(i.row)})}),this._selectedRowModified=!0,r||d.selection.setSelected(i.row,s)}},_highlight:function(e,t,i){if(this._selecting[e]&&null!==t){var a=this._startPoint[e],o=this._currentPoint[e],r=this,n=function(t,a,o){r._forEach(e,t,a,function(t){r._highlightSingle(e,o,t,i)},!0)};switch(e){case"col":case"row":null!==o?g(e,t,a,o,!0)?n(o,t,!1):(g(e,a,t,o,!0)&&(n(o,a,!1),o=a),n(t,o,!0)):this._highlightSingle(e,!0,t,i);break;case"cell":null!==o&&(g("row",t,a,o,!0)||g("col",t,a,o,!0)||g("row",a,t,o,!0)||g("col",a,t,o,!0))&&n(a,o,!1),n(a,t,!0)}this._currentPoint[e]=t,this._focusPoint(e,this._currentPoint)}},_focusPoint:function(e,t){if(!this._isStartFocus){var i=t[e],a=this.grid.focus;"col"==e?(a._colHeadFocusIdx=i.col,a.focusArea("header")):"row"==e?a.focusArea("rowHeader",{rowIndex:i.row}):"cell"==e&&a.setFocusIndex(i.row,i.col)}},_blurPoint:function(e,t){var i=this.grid.focus;"cell"==e&&i._blurContent()},_addToSelected:function(e){var t=this._toSelect,i=this,o=[],r=[],n=this._startPoint[e],s=this._currentPoint[e];this._usingKeyboard&&this._forEach(e,this._lastAnchorPoint[e],this._lastEndPoint[e],function(i){g(e,i,n,s)||(t?r:o).push(i)}),this._forEach(e,n,s,function(a){var n=i._isSelected(e,a);t&&!n?o.push(a):t||r.push(a)}),this._add(e,o),this._remove(e,r),a.forEach(this._selected.row,function(e){e.except.length>0&&(this._selectedRowModified=!0,this.grid.selection.setSelected(e.row,!1))},this)},_forEach:function(e,t,i,a,o){if(this._isValid(e,t,!0)&&this._isValid(e,i,!0))switch(e){case"col":case"row":t=t[e],i=i[e];var r=i>t?1:-1;for(o||(i+=r);t!=i;t+=r)a(M(e,t));break;case"cell":for(var n=i.col>t.col?1:-1,s=i.row>t.row?1:-1,l=t.row,d=i.row+s;l!=d;l+=s)for(var u=t.col,c=i.col+n;u!=c;u+=n)a(M(e,l,u))}},_makeupForExceptions:function(e,t){var i=[];return a.forEach(this._selected[e],function(o){a.forEach(t,function(t){if(o[e]==t[e]){var r=a.indexOf(o.except,t[y[e]]);r>=0&&o.except.splice(r,1),i.push(t)}})}),i},_makeupForCells:function(e,t){var i=[];a.forEach(this._selected.cell,function(o){a.some(t,function(t){return o[e]==t[e]?(i.push(o),!0):!1})}),this._remove("cell",i),a.forEach(this._selected[y[e]],function(i){a.forEach(t,function(t){var o=a.indexOf(i.except,t[e]);o>=0&&i.except.splice(o,1)})})},_addException:function(e,t){a.forEach(this._selected[e],function(i){a.forEach(t,function(t){i.except.push(t[y[e]])})})},_addCellException:function(e,t){a.forEach(this._selected[e],function(i){a.forEach(t,function(t){i[e]==t[e]&&i.except.push(t[y[e]])})})},_add:function(e,t){var i=this.grid.layout.cells;if("cell"==e){var o=this._makeupForExceptions("col",t),r=this._makeupForExceptions("row",t);t=a.filter(t,function(e){return a.indexOf(o,e)<0&&a.indexOf(r,e)<0&&!i[e.col].hidden&&!i[e.col].notselectable})}else"col"==e&&(t=a.filter(t,function(e){return!i[e.col].hidden&&!i[e.col].notselectable})),this._makeupForCells(e,t),this._selected[e]=a.filter(this._selected[e],function(i){return a.every(t,function(t){return i[e]!==t[e]})});"col"!=e&&this.grid._hasIdentity&&a.forEach(t,function(e){var t=this.grid._by_idx[e.row];t&&(e.id=t.idty)},this),this._selected[e]=this._selected[e].concat(t)},_remove:function(e,i){var o=t.partial(v,e);this._selected[e]=a.filter(this._selected[e],function(e){return!a.some(i,function(t){return o(e,t)})}),"cell"==e?(this._addCellException("col",i),this._addCellException("row",i)):this._config.cell&&this._addException(y[e],i)},_isCellNotInExcept:function(e,t){var i=t[e],o=t[y[e]];return a.some(this._selected[e],function(t){return t[e]==i&&a.indexOf(t.except,o)<0})},_isSelected:function(e,t){if(!t)return!1;var i=a.some(this._selected[e],function(i){var a=v(e,t,i);return a&&"cell"!==e?0===i.except.length:a});return i||"cell"!==e||(i=this._isCellNotInExcept("col",t)||this._isCellNotInExcept("row",t),"cell"===e&&(i=i&&!this.grid.layout.cells[t.col].notselectable)),i},_isInLastRange:function(e,t,i){var a=this[i?"_lastSelectedAnchorPoint":"_lastAnchorPoint"][e],o=this[i?"_lastSelectedEndPoint":"_lastEndPoint"][e];return t&&a&&o?g(e,t,a,o):!1},_isValid:function(e,i,a){if(!i)return!1;try{var o=this.grid,r=i[e];switch(e){case"col":return r>=0&&r<o.layout.cells.length&&t.isArray(i.except)&&(a||!o.layout.cells[r].notselectable);case"row":return r>=0&&r<o.rowCount&&t.isArray(i.except);case"cell":return i.col>=0&&i.col<o.layout.cells.length&&i.row>=0&&i.row<o.rowCount&&(a||!o.layout.cells[i.col].notselectable)}}catch(n){}return!1}});return h.registerPlugin(w,{dependency:["autoScroll"]}),w});//# sourceMappingURL=Selector.js.map