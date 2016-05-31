//>>built
define("dojox/grid/enhanced/_Events",["dojo/_base/kernel","dojo/_base/declare","dojo/keys","dojo/_base/html","dojo/_base/event","dojox/grid/_Events"],function(e,t,a,i,r,o){return t("dojox.grid.enhanced._Events",null,{_events:null,headerCellActiveClass:"dojoxGridHeaderActive",cellActiveClass:"dojoxGridCellActive",rowActiveClass:"dojoxGridRowActive",constructor:function(e){this._events=new o,e.mixin(e,this)},dokeyup:function(e){this.focus.currentArea().keyup(e)},onKeyDown:function(e){if(!e.altKey&&!e.metaKey){var t=this.focus,r=this.edit.isEditing();switch(e.keyCode){case a.TAB:if(e.ctrlKey)return;t.tab(e.shiftKey?-1:1,e);break;case a.UP_ARROW:case a.DOWN_ARROW:if(r)return;t.currentArea().move(e.keyCode==a.UP_ARROW?-1:1,0,e);break;case a.LEFT_ARROW:case a.RIGHT_ARROW:if(r)return;var o=e.keyCode==a.LEFT_ARROW?1:-1;i._isBodyLtr()&&(o*=-1),t.currentArea().move(0,o,e);break;case a.F10:this.menus&&e.shiftKey&&this.onRowContextMenu(e);break;default:t.currentArea().keydown(e)}}},domouseup:function(e){e.cellNode?this.onMouseUp(e):this.onRowSelectorMouseUp(e)},domousedown:function(e){e.cellNode||this.onRowSelectorMouseDown(e)},onMouseUp:function(e){this[-1==e.rowIndex?"onHeaderCellMouseUp":"onCellMouseUp"](e)},onCellMouseDown:function(e){i.addClass(e.cellNode,this.cellActiveClass),i.addClass(e.rowNode,this.rowActiveClass)},onCellMouseUp:function(e){i.removeClass(e.cellNode,this.cellActiveClass),i.removeClass(e.rowNode,this.rowActiveClass)},onCellClick:function(e){this._events.onCellClick.call(this,e),this.focus.contentMouseEvent(e)},onCellDblClick:function(e){this.pluginMgr.isFixedCell(e.cell)||(!(this._click.length>1)||this._click[0]&&this._click[1]||(this._click[0]=this._click[1]=e),this._events.onCellDblClick.call(this,e))},onRowClick:function(e){this.edit.rowClick(e),e.cell&&this.plugin("indirectSelection")||this.selection.clickSelectEvent(e)},onRowContextMenu:function(e){!this.edit.isEditing()&&this.menus&&this.showMenu(e)},onSelectedRegionContextMenu:function(e){this.selectedRegionMenu&&(this.selectedRegionMenu._openMyself({target:e.target,coords:e.keyCode!==a.F10&&"pageX"in e?{x:e.pageX,y:e.pageY}:null}),r.stop(e))},onHeaderCellMouseOut:function(e){e.cellNode&&(i.removeClass(e.cellNode,this.cellOverClass),i.removeClass(e.cellNode,this.headerCellActiveClass))},onHeaderCellMouseDown:function(e){e.cellNode&&i.addClass(e.cellNode,this.headerCellActiveClass)},onHeaderCellMouseUp:function(e){e.cellNode&&i.removeClass(e.cellNode,this.headerCellActiveClass)},onHeaderCellClick:function(e){this.focus.currentArea("header"),e.cell.isRowSelector||this._events.onHeaderCellClick.call(this,e),this.focus.headerMouseEvent(e)},onRowSelectorMouseDown:function(e){this.focus.focusArea("rowHeader",e)},onRowSelectorMouseUp:function(e){},onMouseUpRow:function(e){-1!=e.rowIndex&&this.onRowMouseUp(e)},onRowMouseUp:function(e){}})});//# sourceMappingURL=_Events.js.map