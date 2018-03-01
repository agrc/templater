//>>built
require({cache:{"url:dojox/grid/resources/_Grid.html":'<div hidefocus="hidefocus" role="grid" dojoAttachEvent="onmouseout:_mouseOut">\n\t<div class="dojoxGridMasterHeader" dojoAttachPoint="viewsHeaderNode" role="presentation"></div>\n\t<div class="dojoxGridMasterView" dojoAttachPoint="viewsNode" role="presentation"></div>\n\t<div class="dojoxGridMasterMessages" style="display: none;" dojoAttachPoint="messagesNode"></div>\n\t<span dojoAttachPoint="lastFocusNode" tabindex="0"></span>\n</div>\n'}}),define("dojox/grid/_Grid",["dojo/_base/kernel","../main","dojo/_base/declare","./_Events","./_Scroller","./_Layout","./_View","./_ViewManager","./_RowManager","./_FocusManager","./_EditManager","./Selection","./_RowSelector","./util","dijit/_Widget","dijit/_TemplatedMixin","dijit/CheckedMenuItem","dojo/text!./resources/_Grid.html","dojo/string","dojo/_base/array","dojo/_base/lang","dojo/_base/sniff","dojox/html/metrics","dojo/_base/html","dojo/query","dojo/dnd/common","dojo/i18n!dijit/nls/loading"],function(e,t,i,a,r,o,n,s,l,d,u,c,h,m,f,p,y,g,v,b,M,k,w,j,x){e.isCopyKey||(e.isCopyKey=e.dnd.getCopyKeyState);var _=i("dojox.grid._Grid",[f,p,a],{templateString:g,classTag:"dojoxGrid",rowCount:5,keepRows:75,rowsPerPage:25,autoWidth:!1,initialWidth:"",autoHeight:"",rowHeight:0,autoRender:!0,defaultHeight:"15em",height:"",structure:null,elasticView:-1,singleClickEdit:!1,selectionMode:"extended",rowSelector:"",columnReordering:!1,headerMenu:null,placeholderLabel:"GridColumns",selectable:!1,_click:null,loadingMessage:"<span class='dojoxGridLoading'>${loadingState}</span>",errorMessage:"<span class='dojoxGridError'>${errorState}</span>",noDataMessage:"",escapeHTMLInData:!0,formatterScope:null,editable:!1,summary:"",_setSummaryAttr:"domNode",sortInfo:0,_placeholders:null,_layoutClass:o,buildRendering:function(){this.inherited(arguments),this.domNode.getAttribute("tabIndex")||(this.domNode.tabIndex="0"),this.createScroller(),this.createLayout(),this.createViews(),this.createManagers(),this.createSelection(),this.connect(this.selection,"onSelected","onSelected"),this.connect(this.selection,"onDeselected","onDeselected"),this.connect(this.selection,"onChanged","onSelectionChanged"),w.initOnFontResize(),this.connect(w,"onFontResize","textSizeChanged"),m.funnelEvents(this.domNode,this,"doKeyEvent",m.keyEvents),"none"!=this.selectionMode&&this.domNode.setAttribute("aria-multiselectable","single"==this.selectionMode?"false":"true"),j.addClass(this.domNode,this.classTag),this.isLeftToRight()||j.addClass(this.domNode,this.classTag+"Rtl"),this.rowHeight>0&&j.addClass(this.viewsNode,this.classTag+"FixedRowHeight")},postMixInProperties:function(){this.inherited(arguments);var t=e.i18n.getLocalization("dijit","loading",this.lang);this.loadingMessage=v.substitute(this.loadingMessage,t),this.errorMessage=v.substitute(this.errorMessage,t),this.srcNodeRef&&this.srcNodeRef.style.height&&(this.height=this.srcNodeRef.style.height),this._setAutoHeightAttr(this.autoHeight,!0),this.lastScrollTop=this.scrollTop=0},postCreate:function(){this._placeholders=[],this._setHeaderMenuAttr(this.headerMenu),this._setStructureAttr(this.structure),this._click=[],this.inherited(arguments),this.domNode&&this.autoWidth&&this.initialWidth&&(this.domNode.style.width=this.initialWidth),this.domNode&&!this.editable&&j.attr(this.domNode,"aria-readonly","true")},destroy:function(){this.domNode.onReveal=null,this.domNode.onSizeChange=null,delete this._click,this.scroller&&(this.scroller.destroy(),delete this.scroller),this.edit.destroy(),delete this.edit,this.views.destroyViews(),this.focus&&(this.focus.destroy(),delete this.focus),this.headerMenu&&this._placeholders.length&&(b.forEach(this._placeholders,function(e){e.unReplace(!0)}),this.headerMenu.unBindDomNode(this.viewsHeaderNode)),this.inherited(arguments)},_setAutoHeightAttr:function(e,t){"string"==typeof e&&(e=!(!e||"false"==e)&&("true"==e||window.parseInt(e,10))),"number"==typeof e&&(isNaN(e)&&(e=!1),e<0?e=!0:0===e&&(e=!1)),this.autoHeight=e,this._autoHeight="boolean"==typeof e?e:"number"==typeof e&&e>=this.get("rowCount"),this._started&&!t&&this.render()},_getRowCountAttr:function(){return this.updating&&this.invalidated&&void 0!=this.invalidated.rowCount?this.invalidated.rowCount:this.rowCount},textSizeChanged:function(){this.render()},sizeChange:function(){this.update()},createManagers:function(){this.rows=new l(this),this.focus=new d(this),this.edit=new u(this)},createSelection:function(){this.selection=new c(this)},createScroller:function(){this.scroller=new r,this.scroller.grid=this,this.scroller.renderRow=M.hitch(this,"renderRow"),this.scroller.removeRow=M.hitch(this,"rowRemoved")},createLayout:function(){this.layout=new this._layoutClass(this),this.connect(this.layout,"moveColumn","onMoveColumn")},onMoveColumn:function(){this.update()},onResizeColumn:function(e){},createViews:function(){this.views=new s(this),this.views.createView=M.hitch(this,"createView")},createView:function(e,t){var i=M.getObject(e),a=new i({grid:this,index:t});return this.viewsNode.appendChild(a.domNode),this.viewsHeaderNode.appendChild(a.headerNode),this.views.addView(a),j.attr(this.domNode,"align",this.isLeftToRight()?"left":"right"),a},buildViews:function(){for(var e,i=0;e=this.layout.structure[i];i++)this.createView(e.type||t._scopeName+".grid._View",i).setStructure(e);this.scroller.setContentNodes(this.views.getContentNodes())},_setStructureAttr:function(t){var i=t;if(i&&M.isString(i)&&(e.deprecated("dojox.grid._Grid.set('structure', 'objVar')","use dojox.grid._Grid.set('structure', objVar) instead","2.0"),i=M.getObject(i)),this.structure=i,!i){if(!this.layout.structure)return;i=this.layout.structure}this.views.destroyViews(),this.focus.focusView=null,i!==this.layout.structure&&this.layout.setStructure(i),this._structureChanged()},setStructure:function(t){e.deprecated("dojox.grid._Grid.setStructure(obj)","use dojox.grid._Grid.set('structure', obj) instead.","2.0"),this._setStructureAttr(t)},getColumnTogglingItems:function(){var e,t=[];return e=b.map(this.layout.cells,function(e){e.menuItems||(e.menuItems=[]);var i=this,a=new y({label:e.name,checked:!e.hidden,_gridCell:e,onChange:function(e){if(i.layout.setColumnVisibility(this._gridCell.index,e)){var t=this._gridCell.menuItems;t.length>1&&b.forEach(t,function(t){t!==this&&t.setAttribute("checked",e)},this),e=b.filter(i.layout.cells,function(e){return e.menuItems.length>1?b.forEach(e.menuItems,"item.set('disabled', false);"):e.menuItems[0].set("disabled",!1),!e.hidden}),1==e.length&&b.forEach(e[0].menuItems,"item.set('disabled', true);")}},destroy:function(){var e=b.indexOf(this._gridCell.menuItems,this);this._gridCell.menuItems.splice(e,1),delete this._gridCell,y.prototype.destroy.apply(this,arguments)}});return e.menuItems.push(a),e.hidden||t.push(a),a},this),1==t.length&&t[0].set("disabled",!0),e},_setHeaderMenuAttr:function(e){this._placeholders&&this._placeholders.length&&(b.forEach(this._placeholders,function(e){e.unReplace(!0)}),this._placeholders=[]),this.headerMenu&&this.headerMenu.unBindDomNode(this.viewsHeaderNode),this.headerMenu=e,e&&(this.headerMenu.bindDomNode(this.viewsHeaderNode),this.headerMenu.getPlaceholders&&(this._placeholders=this.headerMenu.getPlaceholders(this.placeholderLabel)))},setHeaderMenu:function(t){e.deprecated("dojox.grid._Grid.setHeaderMenu(obj)","use dojox.grid._Grid.set('headerMenu', obj) instead.","2.0"),this._setHeaderMenuAttr(t)},setupHeaderMenu:function(){this._placeholders&&this._placeholders.length&&b.forEach(this._placeholders,function(e){e._replaced&&e.unReplace(!0),e.replace(this.getColumnTogglingItems())},this)},_fetch:function(e){this.setScrollTop(0)},getItem:function(e){return null},showMessage:function(e){e?(this.messagesNode.innerHTML=e,this.messagesNode.style.display=""):(this.messagesNode.innerHTML="",this.messagesNode.style.display="none")},_structureChanged:function(){this.buildViews(),this.autoRender&&this._started&&this.render()},hasLayout:function(){return this.layout.cells.length},resize:function(e,t){this._pendingChangeSize=e,this._pendingResultSize=t,this.sizeChange()},_getPadBorder:function(){return this._padBorder=this._padBorder||j._getPadBorderExtents(this.domNode),this._padBorder},_getHeaderHeight:function(){var e=this.viewsHeaderNode.style,t="none"==e.display?0:this.views.measureHeader();return e.height=t+"px",this.views.normalizeHeaderNodeHeight(),t},_resize:function(e,t){if(e=e||this._pendingChangeSize,t=t||this._pendingResultSize,delete this._pendingChangeSize,delete this._pendingResultSize,this.domNode){var i=this.domNode.parentNode;if(i&&1==i.nodeType&&this.hasLayout()&&"hidden"!=i.style.visibility&&"none"!=i.style.display){var a,r=this._getPadBorder(),o=void 0;this._autoHeight?this.domNode.style.height="auto":"number"==typeof this.autoHeight?(a=o=this._getHeaderHeight(),a+=this.scroller.averageRowHeight*this.autoHeight,this.domNode.style.height=a+"px"):this.domNode.clientHeight<=r.h&&(i==document.body?this.domNode.style.height=this.defaultHeight:this.height?this.domNode.style.height=this.height:this.fitTo="parent"),t&&(e=t),!this._autoHeight&&e?(j.marginBox(this.domNode,e),this.height=this.domNode.style.height,delete this.fitTo):"parent"==this.fitTo&&(a=this._parentContentBoxHeight=this._parentContentBoxHeight>0?this._parentContentBoxHeight:j._getContentBox(i).h,this.domNode.style.height=Math.max(0,a)+"px");var n=b.some(this.views.views,function(e){return e.flexCells});this._autoHeight||0!==(a||j._getContentBox(this.domNode).h)?(this.viewsHeaderNode.style.display="block",n||void 0!==o||(o=this._getHeaderHeight())):this.viewsHeaderNode.style.display="none",n&&(o=void 0),this.adaptWidth(),this.adaptHeight(o),this.postresize()}}},adaptWidth:function(){var e=!this.initialWidth&&this.autoWidth,t=e?0:this.domNode.clientWidth||this.domNode.offsetWidth-this._getPadBorder().w,i=this.views.arrange(1,t);this.views.onEach("adaptWidth"),e&&(this.domNode.style.width=i+"px")},adaptHeight:function(e){var t=void 0===e?this._getHeaderHeight():e,i=this._autoHeight?-1:Math.max(this.domNode.clientHeight-t,0)||0;if(this.views.onEach("setSize",[0,i]),this.views.onEach("adaptHeight"),!this._autoHeight){var a=0,r=0,o=b.filter(this.views.views,function(e){var t=e.hasHScrollbar();return t?a++:r++,!t});a>0&&r>0&&b.forEach(o,function(e){e.adaptHeight(!0)})}!0===this.autoHeight||-1!=i||"number"==typeof this.autoHeight&&this.autoHeight>=this.get("rowCount")?this.scroller.windowHeight=i:this.scroller.windowHeight=Math.max(this.domNode.clientHeight-t,0)},startup:function(){this._started||(this.inherited(arguments),this.autoRender&&this.render())},render:function(){if(this.domNode&&this._started){if(!this.hasLayout())return void this.scroller.init(0,this.keepRows,this.rowsPerPage);this.update=this.defaultUpdate,this._render()}},_render:function(){this.scroller.init(this.get("rowCount"),this.keepRows,this.rowsPerPage),this.prerender(),this.setScrollTop(0),this.postrender()},prerender:function(){this.keepRows=this._autoHeight?0:this.keepRows,this.scroller.setKeepInfo(this.keepRows),this.views.render(),this._resize()},postrender:function(){this.postresize(),this.focus.initFocusView(),j.setSelectable(this.domNode,this.selectable)},postresize:function(){if(this._autoHeight){var e=Math.max(this.views.measureContent())+"px";this.viewsNode.style.height=e}},renderRow:function(e,t){this.views.renderRow(e,t,this._skipRowRenormalize)},rowRemoved:function(e){this.views.rowRemoved(e)},invalidated:null,updating:!1,beginUpdate:function(){this.invalidated=[],this.updating=!0},endUpdate:function(){this.updating=!1;var e,t=this.invalidated;if(t.all)this.update();else if(void 0!=t.rowCount)this.updateRowCount(t.rowCount);else for(e in t)this.updateRow(Number(e));this.invalidated=[]},defaultUpdate:function(){if(this.domNode){if(this.updating)return void(this.invalidated.all=!0);this.lastScrollTop=this.scrollTop,this.prerender(),this.scroller.invalidateNodes(),this.setScrollTop(this.lastScrollTop),this.postrender()}},update:function(){this.render()},updateRow:function(e){e=Number(e),this.updating?this.invalidated[e]=!0:(this.views.updateRow(e),this.scroller.rowHeightChanged(e))},updateRows:function(e,t){e=Number(e),t=Number(t);var i;if(this.updating)for(i=0;i<t;i++)this.invalidated[i+e]=!0;else{for(i=0;i<t;i++)this.views.updateRow(i+e,this._skipRowRenormalize);this.scroller.rowHeightChanged(e)}},updateRowCount:function(e){this.updating?this.invalidated.rowCount=e:(this.rowCount=e,this._setAutoHeightAttr(this.autoHeight,!0),this.layout.cells.length&&this.scroller.updateRowCount(e),this._resize(),this.layout.cells.length&&this.setScrollTop(this.scrollTop))},updateRowStyles:function(e){this.views.updateRowStyles(e)},getRowNode:function(e){if(this.focus.focusView&&!(this.focus.focusView instanceof h))return this.focus.focusView.rowNodes[e];for(var t,i=0;t=this.views.views[i];i++)if(!(t instanceof h))return t.rowNodes[e];return null},rowHeightChanged:function(e){this.views.renormalizeRow(e),this.scroller.rowHeightChanged(e)},fastScroll:!0,delayScroll:!1,scrollRedrawThreshold:k("ie")?100:50,scrollTo:function(e){if(!this.fastScroll)return void this.setScrollTop(e);var t=Math.abs(this.lastScrollTop-e);if(this.lastScrollTop=e,t>this.scrollRedrawThreshold||this.delayScroll){this.delayScroll=!0,this.scrollTop=e,this.views.setScrollTop(e),this._pendingScroll&&window.clearTimeout(this._pendingScroll);var i=this;this._pendingScroll=window.setTimeout(function(){delete i._pendingScroll,i.finishScrollJob()},200)}else this.setScrollTop(e)},finishScrollJob:function(){this.delayScroll=!1,this.setScrollTop(this.scrollTop)},setScrollTop:function(e){this.scroller.scroll(this.views.setScrollTop(e))},scrollToRow:function(e){this.setScrollTop(this.scroller.findScrollTop(e)+1)},styleRowNode:function(e,t){t&&this.rows.styleRowNode(e,t)},_mouseOut:function(e){this.rows.setOverRow(-2)},getCell:function(e){return this.layout.cells[e]},setCellWidth:function(e,t){this.getCell(e).unitWidth=t},getCellName:function(e){return"Cell "+e.index},canSort:function(e){},sort:function(){},getSortAsc:function(e){return e=void 0==e?this.sortInfo:e,Boolean(e>0)},getSortIndex:function(e){return e=void 0==e?this.sortInfo:e,Math.abs(e)-1},setSortIndex:function(e,t){var i=e+1;void 0!=t?i*=t?1:-1:this.getSortIndex()==e&&(i=-this.sortInfo),this.setSortInfo(i)},setSortInfo:function(e){this.canSort(e)&&(this.sortInfo=e,this.sort(),this.update())},doKeyEvent:function(e){e.dispatch="do"+e.type,this.onKeyEvent(e)},_dispatch:function(e,t){return e in this&&this[e](t)},dispatchKeyEvent:function(e){this._dispatch(e.dispatch,e)},dispatchContentEvent:function(e){this.edit.dispatchEvent(e)||e.sourceView.dispatchContentEvent(e)||this._dispatch(e.dispatch,e)},dispatchHeaderEvent:function(e){e.sourceView.dispatchHeaderEvent(e)||this._dispatch("doheader"+e.type,e)},dokeydown:function(e){this.onKeyDown(e)},doclick:function(e){e.cellNode?this.onCellClick(e):this.onRowClick(e)},dodblclick:function(e){e.cellNode?this.onCellDblClick(e):this.onRowDblClick(e)},docontextmenu:function(e){e.cellNode?this.onCellContextMenu(e):this.onRowContextMenu(e)},doheaderclick:function(e){e.cellNode?this.onHeaderCellClick(e):this.onHeaderClick(e)},doheaderdblclick:function(e){e.cellNode?this.onHeaderCellDblClick(e):this.onHeaderDblClick(e)},doheadercontextmenu:function(e){e.cellNode?this.onHeaderCellContextMenu(e):this.onHeaderContextMenu(e)},doStartEdit:function(e,t){this.onStartEdit(e,t)},doApplyCellEdit:function(e,t,i){this.onApplyCellEdit(e,t,i)},doCancelEdit:function(e){this.onCancelEdit(e)},doApplyEdit:function(e){this.onApplyEdit(e)},addRow:function(){this.updateRowCount(this.get("rowCount")+1)},removeSelectedRows:function(){this.allItemsSelected?this.updateRowCount(0):this.updateRowCount(Math.max(0,this.get("rowCount")-this.selection.getSelected().length)),this.selection.clear()}});return _.markupFactory=function(e,i,a,r){var o=function(e){var t=j.attr(e,"width")||"auto";return"auto"!=t&&"em"!=t.slice(-2)&&"%"!=t.slice(-1)&&(t=parseInt(t,10)+"px"),t};return e.structure||"table"!=i.nodeName.toLowerCase()||(e.structure=x("> colgroup",i).map(function(e){var t=j.attr(e,"span"),i={noscroll:"true"==j.attr(e,"noscroll"),__span:t?parseInt(t,10):1,cells:[]};return j.hasAttr(e,"width")&&(i.width=o(e)),i}),e.structure.length||e.structure.push({__span:1/0,cells:[]}),x("thead > tr",i).forEach(function(i,a){var n,s=0,l=0,d=null;x("> th",i).map(function(i){if(d){if(s>=n+d.__span){l++,n+=d.__span;d=e.structure[l]}}else n=0,d=e.structure[0];var u={name:M.trim(j.attr(i,"name")||i.innerHTML),colSpan:parseInt(j.attr(i,"colspan")||1,10),type:M.trim(j.attr(i,"cellType")||""),id:M.trim(j.attr(i,"id")||"")};s+=u.colSpan;var c=j.attr(i,"rowspan");c&&(u.rowSpan=c),j.hasAttr(i,"width")&&(u.width=o(i)),j.hasAttr(i,"relWidth")&&(u.relWidth=window.parseInt(j.attr(i,"relWidth"),10)),j.hasAttr(i,"hidden")&&(u.hidden="true"==j.attr(i,"hidden")||!0===j.attr(i,"hidden")),r&&r(i,u),u.type=u.type?M.getObject(u.type):t.grid.cells.Cell,u.type&&u.type.markupFactory&&u.type.markupFactory(i,u),d.cells[a]||(d.cells[a]=[]),d.cells[a].push(u)})})),new a(e,i)},_});//# sourceMappingURL=_Grid.js.map