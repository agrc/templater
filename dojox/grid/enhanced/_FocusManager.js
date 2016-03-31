//>>built
define("dojox/grid/enhanced/_FocusManager",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/sniff","dojo/_base/html","dojo/keys","dijit/a11y","dijit/focus","../_FocusManager"],function(e,t,i,a,r,o,n,s,l,d,h,u){var c=i("dojox.grid.enhanced._FocusArea",null,{constructor:function(e,i){this._fm=i,this._evtStack=[e.name];var a=function(){return!0};e.onFocus=e.onFocus||a,e.onBlur=e.onBlur||a,e.onMove=e.onMove||a,e.onKeyUp=e.onKeyUp||a,e.onKeyDown=e.onKeyDown||a,t.mixin(this,e)},move:function(e,t,i){if(this.name){var a,r=this._evtStack.length;for(a=r-1;a>=0;--a)if(this._fm._areas[this._evtStack[a]].onMove(e,t,i)===!1)return!1}return!0},_onKeyEvent:function(e,t){if(this.name){var i,a=this._evtStack.length;for(i=a-1;i>=0;--i)if(this._fm._areas[this._evtStack[i]][t](e,!1)===!1)return!1;for(i=0;a>i;++i)if(this._fm._areas[this._evtStack[i]][t](e,!0)===!1)return!1}return!0},keydown:function(e){return this._onKeyEvent(e,"onKeyDown")},keyup:function(e){return this._onKeyEvent(e,"onKeyUp")},contentMouseEventPlanner:function(){return 0},headerMouseEventPlanner:function(){return 0}});return i("dojox.grid.enhanced._FocusManager",u,{_stopEvent:function(e){try{e&&e.preventDefault&&o.stop(e)}catch(t){}},constructor:function(e){this.grid=e,this._areas={},this._areaQueue=[],this._contentMouseEventHandlers=[],this._headerMouseEventHandlers=[],this._currentAreaIdx=-1,this._gridBlured=!0,this._connects.push(r.connect(e,"onBlur",this,"_doBlur")),this._connects.push(r.connect(e.scroller,"renderPage",this,"_delayedCellFocus")),this.addArea({name:"header",onFocus:t.hitch(this,this.focusHeader),onBlur:t.hitch(this,this._blurHeader),onMove:t.hitch(this,this._navHeader),getRegions:t.hitch(this,this._findHeaderCells),onRegionFocus:t.hitch(this,this.doColHeaderFocus),onRegionBlur:t.hitch(this,this.doColHeaderBlur),onKeyDown:t.hitch(this,this._onHeaderKeyDown)}),this.addArea({name:"content",onFocus:t.hitch(this,this._focusContent),onBlur:t.hitch(this,this._blurContent),onMove:t.hitch(this,this._navContent),onKeyDown:t.hitch(this,this._onContentKeyDown)}),this.addArea({name:"editableCell",onFocus:t.hitch(this,this._focusEditableCell),onBlur:t.hitch(this,this._blurEditableCell),onKeyDown:t.hitch(this,this._onEditableCellKeyDown),onContentMouseEvent:t.hitch(this,this._onEditableCellMouseEvent),contentMouseEventPlanner:function(e,t){return-1}}),this.placeArea("header"),this.placeArea("content"),this.placeArea("editableCell"),this.placeArea("editableCell","above","content")},destroy:function(){for(var e in this._areas){var t=this._areas[e];a.forEach(t._connects,r.disconnect),t._connects=null,t.uninitialize&&t.uninitialize()}this.inherited(arguments)},addArea:function(e){e.name&&t.isString(e.name)&&(this._areas[e.name]&&a.forEach(e._connects,r.disconnect),this._areas[e.name]=new c(e,this),e.onHeaderMouseEvent&&this._headerMouseEventHandlers.push(e.name),e.onContentMouseEvent&&this._contentMouseEventHandlers.push(e.name))},getArea:function(e){return this._areas[e]},_bindAreaEvents:function(){var e,i,o=this._areas;a.forEach(this._areaQueue,function(n){e=o[n],!e._initialized&&t.isFunction(e.initialize)&&(e.initialize(),e._initialized=!0),e.getRegions&&(e._regions=e.getRegions()||[],a.forEach(e._connects||[],r.disconnect),e._connects=[],a.forEach(e._regions,function(t){e.onRegionFocus&&(i=r.connect(t,"onfocus",e.onRegionFocus),e._connects.push(i)),e.onRegionBlur&&(i=r.connect(t,"onblur",e.onRegionBlur),e._connects.push(i))}))})},removeArea:function(e){var t=this._areas[e];if(t){this.ignoreArea(e);var i=a.indexOf(this._contentMouseEventHandlers,e);i>=0&&this._contentMouseEventHandlers.splice(i,1),i=a.indexOf(this._headerMouseEventHandlers,e),i>=0&&this._headerMouseEventHandlers.splice(i,1),a.forEach(t._connects,r.disconnect),t.uninitialize&&t.uninitialize(),delete this._areas[e]}},currentArea:function(e,i){var r,o=this._currentAreaIdx;return t.isString(e)&&(r=a.indexOf(this._areaQueue,e))>=0?(o!=r&&(this.tabbingOut=!1,i&&o>=0&&o<this._areaQueue.length&&this._areas[this._areaQueue[o]].onBlur(),this._currentAreaIdx=r),null):0>o||o>=this._areaQueue.length?new c({},this):this._areas[this._areaQueue[this._currentAreaIdx]]},placeArea:function(e,t,i){if(this._areas[e]){var r=a.indexOf(this._areaQueue,i);switch(t){case"after":r>=0&&++r;case"before":if(r>=0){this._areaQueue.splice(r,0,e);break}default:this._areaQueue.push(e);break;case"above":var o=!0;case"below":var n=this._areas[i];n&&(o?n._evtStack.push(e):n._evtStack.splice(0,0,e))}}},ignoreArea:function(e){this._areaQueue=a.filter(this._areaQueue,function(t){return t!=e})},focusArea:function(e,i){var r;r="number"==typeof e?0>e?this._areaQueue.length+e:e:a.indexOf(this._areaQueue,t.isString(e)?e:e&&e.name),0>r&&(r=0);var o=r-this._currentAreaIdx;this._gridBlured=!1,o?this.tab(o,i):this.currentArea().onFocus(i,o)},tab:function(e,i){if(this._gridBlured=!1,this.tabbingOut=!1,0!==e){var r=this._currentAreaIdx,o=e>0?1:-1;if(0>r||r>=this._areaQueue.length)r=this._currentAreaIdx+=e;else{var n=this._areas[this._areaQueue[r]].onBlur(i,e);n===!0?r=this._currentAreaIdx+=e:t.isString(n)&&this._areas[n]&&(r=this._currentAreaIdx=a.indexOf(this._areaQueue,n))}for(;r>=0&&r<this._areaQueue.length;r+=o)if(this._currentAreaIdx=r,this._areaQueue[r]&&this._areas[this._areaQueue[r]].onFocus(i,e))return;this.tabbingOut=!0,0>e?(this._currentAreaIdx=-1,h.focus(this.grid.domNode)):(this._currentAreaIdx=this._areaQueue.length,h.focus(this.grid.lastFocusNode))}},_onMouseEvent:function(e,t){for(var i=e.toLowerCase(),r=this["_"+i+"MouseEventHandlers"],o=a.map(r,function(e){return{area:e,idx:this._areas[e][i+"MouseEventPlanner"](t,r)}},this).sort(function(e,t){return t.idx-e.idx}),n=a.map(o,function(e){return o.area}),s=o.length;--s>=0;)if(this._areas[o[s].area]["on"+e+"MouseEvent"](t,n)===!1)return},contentMouseEvent:function(e){this._onMouseEvent("Content",e)},headerMouseEvent:function(e){this._onMouseEvent("Header",e)},initFocusView:function(){this.focusView=this.grid.views.getFirstScrollingView()||this.focusView||this.grid.views.views[0],this._bindAreaEvents()},isNavHeader:function(){return"header"==this._areaQueue[this._currentAreaIdx]},previousKey:function(e){this.tab(-1,e)},nextKey:function(e){this.tab(1,e)},setFocusCell:function(e,t){e&&(this.currentArea(this.grid.edit.isEditing()?"editableCell":"content",!0),this._focusifyCellNode(!1),this.cell=e,this.rowIndex=t,this._focusifyCellNode(!0)),this.grid.onCellFocus(this.cell,this.rowIndex)},doFocus:function(e){e&&e.target==e.currentTarget&&!this.tabbingOut?this._gridBlured&&(this._gridBlured=!1,this._currentAreaIdx<0||this._currentAreaIdx>=this._areaQueue.length?this.focusArea(0,e):this.focusArea(this._currentAreaIdx,e)):this.tabbingOut=!1,o.stop(e)},_doBlur:function(){this._gridBlured=!0},doLastNodeFocus:function(e){this.tabbingOut?this.tabbingOut=!1:this.focusArea(-1,e)},_delayedHeaderFocus:function(){this.isNavHeader()&&!n("ie")&&this.focusHeader()},_delayedCellFocus:function(){},_changeMenuBindNode:function(e,t){var i=this.grid.headerMenu;i&&this._contextMenuBindNode==e&&(i.unBindDomNode(e),i.bindDomNode(t),this._contextMenuBindNode=t)},focusHeader:function(e,t){var i=!1;return this.inherited(arguments),this._colHeadNode&&"none"!=s.style(this._colHeadNode,"display")&&(h.focus(this._colHeadNode),this._stopEvent(e),i=!0),i},_blurHeader:function(e,t){return this._colHeadNode&&s.removeClass(this._colHeadNode,this.focusClass),s.removeAttr(this.grid.domNode,"aria-activedescendant"),this._changeMenuBindNode(this.grid.domNode,this.grid.viewsHeaderNode),this._colHeadNode=this._colHeadFocusIdx=null,!0},_navHeader:function(e,t,i){var r=0>t?-1:1,o=a.indexOf(this._findHeaderCells(),this._colHeadNode);return o>=0&&i.shiftKey&&i.ctrlKey?void this.colSizeAdjust(i,o,5*r):void this.move(e,t)},_onHeaderKeyDown:function(e,t){if(t){var i=l;switch(e.keyCode){case i.ENTER:case i.SPACE:var a=this.getHeaderIndex();a>=0&&!this.grid.pluginMgr.isFixedCell(e.cell)&&(this.grid.setSortIndex(a,null,e),o.stop(e))}}return!0},_setActiveColHeader:function(){this.inherited(arguments),h.focus(this._colHeadNode)},findAndFocusGridCell:function(){this._focusContent()},_focusContent:function(e,t){var i=!0,a=0===this.grid.rowCount;if(this.isNoFocusCell()&&!a){for(var r=0,o=this.grid.getCell(0);o&&o.hidden;o=this.grid.getCell(++r));this.setFocusIndex(0,o?r:0)}else this.cell&&!a?this.focusView&&!this.focusView.rowNodes[this.rowIndex]?(this.grid.scrollToRow(this.rowIndex),this.focusGrid()):this.setFocusIndex(this.rowIndex,this.cell.index):i=!1;return i&&this._stopEvent(e),i},_blurContent:function(e,t){return this._focusifyCellNode(!1),!0},_navContent:function(e,t,i){0===this.rowIndex&&0>e||this.rowIndex===this.grid.rowCount-1&&e>0||(this._colHeadNode=null,this.move(e,t,i),i&&o.stop(i))},_onContentKeyDown:function(e,t){if(t){var i=l,a=this.grid.scroller;switch(e.keyCode){case i.ENTER:case i.SPACE:var n=this.grid;if(n.indirectSelection)break;n.selection.clickSelect(this.rowIndex,r.isCopyKey(e),e.shiftKey),n.onRowClick(e),o.stop(e);break;case i.PAGE_UP:0!==this.rowIndex&&(this.rowIndex!=a.firstVisibleRow+1?this._navContent(a.firstVisibleRow-this.rowIndex,0):(this.grid.setScrollTop(a.findScrollTop(this.rowIndex-1)),this._navContent(a.firstVisibleRow-a.lastVisibleRow+1,0)),o.stop(e));break;case i.PAGE_DOWN:this.rowIndex+1!=this.grid.rowCount&&(o.stop(e),this.rowIndex!=a.lastVisibleRow-1?this._navContent(a.lastVisibleRow-this.rowIndex-1,0):(this.grid.setScrollTop(a.findScrollTop(this.rowIndex+1)),this._navContent(a.lastVisibleRow-a.firstVisibleRow-1,0)),o.stop(e))}}return!0},_blurFromEditableCell:!1,_isNavigating:!1,_navElems:null,_focusEditableCell:function(e,t){var i=!1;return this._isNavigating?i=!0:this.grid.edit.isEditing()&&this.cell&&(!this._blurFromEditableCell&&this._blurEditableCell(e,t)||(this.setFocusIndex(this.rowIndex,this.cell.index),i=!0),this._stopEvent(e)),i},_applyEditableCell:function(){try{this.grid.edit.apply()}catch(e){}},_blurEditableCell:function(e,t){if(this._blurFromEditableCell=!1,this._isNavigating){var i=!0;if(e){var a=this._navElems,r=a.lowest||a.first,o=a.last||a.highest||r,l=n("ie")?e.srcElement:e.target;i=l==(t>0?o:r)}return i?(this._isNavigating=!1,s.setSelectable(this.cell.getNode(this.rowIndex),!1),"content"):!1}if(this.grid.edit.isEditing()&&this.cell){if(!t||"number"!=typeof t)return!1;for(var d,h=t>0?1:-1,u=this.grid.layout.cellCount,c=this.cell.index+h;c>=0&&u>c;c+=h)if(d=this.grid.getCell(c),d.editable)return this.cell=d,this._blurFromEditableCell=!0,!1;if((this.rowIndex>0||1==h)&&(this.rowIndex<this.grid.rowCount||-1==h)){for(this.rowIndex+=h,c=h>0?0:u-1;c>=0&&u>c;c+=h)if(d=this.grid.getCell(c),d.editable){this.cell=d;break}return this._applyEditableCell(),"content"}}return!0},_initNavigatableElems:function(){this._navElems=d._getTabNavigable(this.cell.getNode(this.rowIndex))},_onEditableCellKeyDown:function(e,t){var i=l,a=this.grid,r=a.edit,n=!1,d=!0;switch(e.keyCode){case i.ENTER:t&&r.isEditing()&&(this._applyEditableCell(),n=!0,o.stop(e));case i.SPACE:if(!t&&this._isNavigating){d=!1;break}if(t){if(!this.cell.editable&&this.cell.navigatable){this._initNavigatableElems();var u=this._navElems.lowest||this._navElems.first;if(u){this._isNavigating=!0,s.setSelectable(this.cell.getNode(this.rowIndex),!0),h.focus(u),o.stop(e),this.currentArea("editableCell",!0);break}}n||r.isEditing()||a.pluginMgr.isFixedCell(this.cell)||r.setEditCell(this.cell,this.rowIndex),n?this.currentArea("content",!0):this.cell.editable&&a.canEdit()&&this.currentArea("editableCell",!0)}break;case i.PAGE_UP:case i.PAGE_DOWN:!t&&r.isEditing()&&(d=!1);break;case i.ESCAPE:t||(r.cancel(),this.currentArea("content",!0))}return d},_onEditableCellMouseEvent:function(e){if("click"==e.type){var t=this.cell||e.cell;if(t&&!t.editable&&t.navigatable){if(this._initNavigatableElems(),this._navElems.lowest||this._navElems.first){var i=n("ie")?e.srcElement:e.target;if(i!=t.getNode(e.rowIndex))return this._isNavigating=!0,this.focusArea("editableCell",e),s.setSelectable(t.getNode(e.rowIndex),!0),h.focus(i),!1}}else if(this.grid.singleClickEdit)return this.currentArea("editableCell"),!1}return!0}})});//# sourceMappingURL=_FocusManager.js.map