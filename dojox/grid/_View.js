//>>built
require({cache:{"url:dojox/grid/resources/View.html":'<div class="dojoxGridView" role="presentation">\n	<div class="dojoxGridHeader" dojoAttachPoint="headerNode" role="presentation">\n		<div dojoAttachPoint="headerNodeContainer" style="width:9000em" role="presentation">\n			<div dojoAttachPoint="headerContentNode" role="row"></div>\n		</div>\n	</div>\n	<input type="checkbox" class="dojoxGridHiddenFocus" dojoAttachPoint="hiddenFocusNode" aria-hidden="true" />\n	<input type="checkbox" class="dojoxGridHiddenFocus" aria-hidden="true" />\n	<div class="dojoxGridScrollbox" dojoAttachPoint="scrollboxNode" role="presentation">\n		<div class="dojoxGridContent" dojoAttachPoint="contentNode" hidefocus="hidefocus" role="presentation"></div>\n	</div>\n</div>\n'}}),define("dojox/grid/_View",["dojo","dijit/registry","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/connect","dojo/_base/sniff","dojo/query","dojo/_base/window","dojo/text!./resources/View.html","dojo/dnd/Source","dijit/_Widget","dijit/_TemplatedMixin","dojox/html/metrics","./util","dojo/_base/html","./_Builder","dojo/dnd/Avatar","dojo/dnd/Manager"],function(e,t,i,a,r,o,n,s,l,d,u,h,c,m,f,p,g,y,v,b){var M=function(e,t){return void 0==e.style.cssText?e.getAttribute("style"):e.style.cssText},k=a("dojox.grid._View",[c,m],{defaultWidth:"18em",viewWidth:"",templateString:u,classTag:"dojoxGrid",marginBottom:0,rowPad:2,_togglingColumn:-1,_headerBuilderClass:y._HeaderBuilder,_contentBuilderClass:y._ContentBuilder,postMixInProperties:function(){this.rowNodes={}},postCreate:function(){this.connect(this.scrollboxNode,"onscroll","doscroll"),p.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]),p.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]),this.content=new this._contentBuilderClass(this),this.header=new this._headerBuilderClass(this),this.grid.isLeftToRight()||(this.headerNodeContainer.style.width="")},destroy:function(){g.destroy(this.headerNode),delete this.headerNode;for(var e in this.rowNodes)this._cleanupRowWidgets(this.rowNodes[e]),g.destroy(this.rowNodes[e]);this.rowNodes={},this.source&&this.source.destroy(),this.inherited(arguments)},focus:function(){s("ie")||s("webkit")||s("opera")?this.hiddenFocusNode.focus():this.scrollboxNode.focus()},setStructure:function(e){var t=this.structure=e;t.width&&!isNaN(t.width)?this.viewWidth=t.width+"em":this.viewWidth=t.width||(t.noscroll?"auto":this.viewWidth),this._onBeforeRow=t.onBeforeRow||function(){},this._onAfterRow=t.onAfterRow||function(){},this.noscroll=t.noscroll,this.noscroll&&(this.scrollboxNode.style.overflow="hidden"),this.simpleStructure=Boolean(1==t.cells.length),this.testFlexCells(),this.updateStructure()},_cleanupRowWidgets:function(e){e&&r.forEach(l("[widgetId]",e).map(t.byNode),function(e){e._destroyOnRemove?(e.destroy(),delete e):e.domNode&&e.domNode.parentNode&&e.domNode.parentNode.removeChild(e.domNode)})},onBeforeRow:function(e,t){this._onBeforeRow(e,t),e>=0&&this._cleanupRowWidgets(this.getRowNode(e))},onAfterRow:function(i,a,o){this._onAfterRow(i,a,o);var n=this.grid;r.forEach(l(".dojoxGridStubNode",o),function(i){if(i&&i.parentNode){var a=i.getAttribute("linkWidget"),r=window.parseInt(g.attr(i,"cellIdx"),10),o=(n.getCell(r),t.byId(a));o?(i.parentNode.replaceChild(o.domNode,i),o._started||o.startup(),e.destroy(i)):i.innerHTML=""}},this)},testFlexCells:function(){this.flexCells=!1;for(var e,t=0;e=this.structure.cells[t];t++)for(var i,a=0;i=e[a];a++)i.view=this,this.flexCells=this.flexCells||i.isFlex();return this.flexCells},updateStructure:function(){this.header.update(),this.content.update()},getScrollbarWidth:function(){var e=this.hasVScrollbar(),t=g.style(this.scrollboxNode,"overflow");return this.noscroll||!t||"hidden"==t?e=!1:"scroll"==t&&(e=!0),e?f.getScrollbar().w:0},getColumnsWidth:function(){var e=this.headerContentNode;return e&&e.firstChild?e.firstChild.offsetWidth||g.style(e.firstChild,"width"):0},setColumnsWidth:function(e){this.headerContentNode.firstChild.style.width=e+"px",this.viewWidth&&(this.viewWidth=e+"px")},getWidth:function(){return this.viewWidth||this.getColumnsWidth()+this.getScrollbarWidth()+"px"},getContentWidth:function(){return Math.max(0,g._getContentBox(this.domNode).w-this.getScrollbarWidth())+"px"},render:function(){this.scrollboxNode.style.height="",this.renderHeader(),this._togglingColumn>=0&&(this.setColumnsWidth(this.getColumnsWidth()-this._togglingColumn),this._togglingColumn=-1);var e=this.grid.layout.cells,t=o.hitch(this,function(t,i){!this.grid.isLeftToRight()&&(i=!i);for(var a=i?-1:1,r=this.header.getCellNodeIndex(t)+a,o=e[r];o&&o.getHeaderNode()&&"none"==o.getHeaderNode().style.display;)r+=a,o=e[r];return o?o.getHeaderNode():null});if(this.grid.columnReordering&&this.simpleStructure){this.source&&this.source.destroy();var i="dojoxGrid_bottomMarker",a="dojoxGrid_topMarker";this.bottomMarker&&g.destroy(this.bottomMarker),this.bottomMarker=g.byId(i),this.topMarker&&g.destroy(this.topMarker),this.topMarker=g.byId(a),this.bottomMarker||(this.bottomMarker=g.create("div",{id:i,"class":"dojoxGridColPlaceBottom"},d.body()),this._hide(this.bottomMarker),this.topMarker=g.create("div",{id:a,"class":"dojoxGridColPlaceTop"},d.body()),this._hide(this.topMarker)),this.arrowDim=g.contentBox(this.bottomMarker);var r=g.contentBox(this.headerContentNode.firstChild.rows[0]).h;this.source=new h(this.headerContentNode.firstChild.rows[0],{horizontal:!0,accept:["gridColumn_"+this.grid.id],viewIndex:this.index,generateText:!1,onMouseDown:o.hitch(this,function(e){this.header.decorateEvent(e),(this.header.overRightResizeArea(e)||this.header.overLeftResizeArea(e))&&this.header.canResize(e)&&!this.header.moveable?this.header.beginColumnResize(e):(this.grid.headerMenu&&this.grid.headerMenu.onCancel(!0),e.button===(s("ie")<9?1:0)&&h.prototype.onMouseDown.call(this.source,e))}),onMouseOver:o.hitch(this,function(e){var t=this.source;t._getChildByEvent(e)&&h.prototype.onMouseOver.apply(t,arguments)}),_markTargetAnchor:o.hitch(this,function(e){var i=this.source;if(i.current!=i.targetAnchor||i.before!=e){i.targetAnchor&&t(i.targetAnchor,i.before)&&i._removeItemClass(t(i.targetAnchor,i.before),i.before?"After":"Before"),h.prototype._markTargetAnchor.call(i,e);var a=e?i.targetAnchor:t(i.targetAnchor,i.before),o=0;a||(a=i.targetAnchor,o=g.contentBox(a).w+this.arrowDim.w/2+2);var n=g.position(a,!0),s=Math.floor(n.x-this.arrowDim.w/2+o);g.style(this.bottomMarker,"visibility","visible"),g.style(this.topMarker,"visibility","visible"),g.style(this.bottomMarker,{left:s+"px",top:r+n.y+"px"}),g.style(this.topMarker,{left:s+"px",top:n.y-this.arrowDim.h+"px"}),i.targetAnchor&&t(i.targetAnchor,i.before)&&i._addItemClass(t(i.targetAnchor,i.before),i.before?"After":"Before")}}),_unmarkTargetAnchor:o.hitch(this,function(){var e=this.source;e.targetAnchor&&(e.targetAnchor&&t(e.targetAnchor,e.before)&&e._removeItemClass(t(e.targetAnchor,e.before),e.before?"After":"Before"),this._hide(this.bottomMarker),this._hide(this.topMarker),h.prototype._unmarkTargetAnchor.call(e))}),destroy:o.hitch(this,function(){n.disconnect(this._source_conn),n.unsubscribe(this._source_sub),h.prototype.destroy.call(this.source),this.bottomMarker&&(g.destroy(this.bottomMarker),delete this.bottomMarker),this.topMarker&&(g.destroy(this.topMarker),delete this.topMarker)}),onDndCancel:o.hitch(this,function(){h.prototype.onDndCancel.call(this.source),this._hide(this.bottomMarker),this._hide(this.topMarker)})}),this._source_conn=n.connect(this.source,"onDndDrop",this,"_onDndDrop"),this._source_sub=n.subscribe("/dnd/drop/before",this,"_onDndDropBefore"),this.source.startup()}},_hide:function(e){g.style(e,{top:"-10000px",visibility:"hidden"})},_onDndDropBefore:function(e,t,i){if(b.manager().target===this.source){this.source._targetNode=this.source.targetAnchor,this.source._beforeTarget=this.source.before;var a=this.grid.views.views,r=a[e.viewIndex],o=a[this.index];o!=r&&(r.convertColPctToFixed(),o.convertColPctToFixed())}},_onDndDrop:function(e,t,i){if(b.manager().target!==this.source)return void(b.manager().source===this.source&&(this._removingColumn=!0));this._hide(this.bottomMarker),this._hide(this.topMarker);var a=function(e){return e?g.attr(e,"idx"):null},r=g.marginBox(t[0]).w;if(e.viewIndex!==this.index){var o=this.grid.views.views,n=o[e.viewIndex],s=o[this.index];n.viewWidth&&"auto"!=n.viewWidth&&n.setColumnsWidth(n.getColumnsWidth()-r),s.viewWidth&&"auto"!=s.viewWidth&&s.setColumnsWidth(s.getColumnsWidth())}var l=this.source._targetNode,d=this.source._beforeTarget;!this.grid.isLeftToRight()&&(d=!d);var u=this.grid.layout,h=this.index;delete this.source._targetNode,delete this.source._beforeTarget,u.moveColumn(e.viewIndex,h,a(t[0]),a(l),d)},renderHeader:function(){this.headerContentNode.innerHTML=this.header.generateHtml(this._getHeaderContent),this.flexCells&&(this.contentWidth=this.getContentWidth(),this.headerContentNode.firstChild.style.width=this.contentWidth),p.fire(this,"onAfterRow",[-1,this.structure.cells,this.headerContentNode])},_getHeaderContent:function(e){var t=e.name||e.grid.getCellName(e);/^\s+$/.test(t)&&(t="&nbsp;");var i=['<div class="dojoxGridSortNode'];return e.index!=e.grid.getSortIndex()?i.push('">'):i=i.concat([" ",e.grid.sortInfo>0?"dojoxGridSortUp":"dojoxGridSortDown",'"><div class="dojoxGridArrowButtonChar">',e.grid.sortInfo>0?"&#9650;":"&#9660;",'</div><div class="dojoxGridArrowButtonNode" role="presentation"></div>','<div class="dojoxGridColCaption">']),i=i.concat([t,"</div></div>"]),i.join("")},resize:function(){this.adaptHeight(),this.adaptWidth()},hasHScrollbar:function(e){var t=this._hasHScroll||!1;if(void 0==this._hasHScroll||e)if(this.noscroll)this._hasHScroll=!1;else{var i=g.style(this.scrollboxNode,"overflow");"hidden"==i?this._hasHScroll=!1:"scroll"==i?this._hasHScroll=!0:this._hasHScroll=this.scrollboxNode.offsetWidth-this.getScrollbarWidth()<this.contentNode.offsetWidth}return t!==this._hasHScroll&&this.grid.update(),this._hasHScroll},hasVScrollbar:function(e){var t=this._hasVScroll||!1;if(void 0==this._hasVScroll||e)if(this.noscroll)this._hasVScroll=!1;else{var i=g.style(this.scrollboxNode,"overflow");"hidden"==i?this._hasVScroll=!1:"scroll"==i?this._hasVScroll=!0:this._hasVScroll=this.scrollboxNode.scrollHeight>this.scrollboxNode.clientHeight}return t!==this._hasVScroll&&this.grid.update(),this._hasVScroll},convertColPctToFixed:function(){var e=!1;this.grid.initialWidth="";var t=l("th",this.headerContentNode),i=r.map(t,function(t,i){var a=t.style.width;if(g.attr(t,"vIdx",i),a&&"%"==a.slice(-1))e=!0;else if(a&&"px"==a.slice(-2))return window.parseInt(a,10);return g.contentBox(t).w});return e?(r.forEach(this.grid.layout.cells,function(e,t){if(e.view==this){var a=e.view.getHeaderCellNode(e.index);if(a&&g.hasAttr(a,"vIdx")){var r=window.parseInt(g.attr(a,"vIdx"));this.setColWidth(t,i[r]),g.removeAttr(a,"vIdx")}}},this),!0):!1},adaptHeight:function(e){if(!this.grid._autoHeight){var t=this.domNode.style.height&&parseInt(this.domNode.style.height.replace(/px/,""),10)||this.domNode.clientHeight,i=this,a=function(){for(var e,t=0;t<i.grid.views.views.length;++t)if(e=i.grid.views.views[t],e!==i&&e.hasHScrollbar())return!0;return!1};(e||this.noscroll&&a())&&(t-=f.getScrollbar().h),p.setStyleHeightPx(this.scrollboxNode,t)}this.hasVScrollbar(!0)},adaptWidth:function(){this.flexCells&&(this.contentWidth=this.getContentWidth(),this.headerContentNode.firstChild.style.width=this.contentWidth);var e=this.scrollboxNode.offsetWidth-this.getScrollbarWidth();this._removingColumn?(e=Math.min(e,this.getColumnsWidth())+"px",this._removingColumn=!1):e=Math.max(e,this.getColumnsWidth())+"px";var t=this.contentNode;t.style.width=e,this.hasHScrollbar(!0)},setSize:function(e,t){var i=this.domNode.style,a=this.headerNode.style;e&&(i.width=e,a.width=e),i.height=t>=0?t+"px":""},renderRow:function(e){var t=this.createRowNode(e);return this.buildRow(e,t),t},createRowNode:function(e){var t=document.createElement("div");return t.className=this.classTag+"Row",this instanceof i.grid._RowSelector?g.attr(t,"role","presentation"):(g.attr(t,"role","row"),"none"!=this.grid.selectionMode&&t.setAttribute("aria-selected","false")),t[p.gridViewTag]=this.id,t[p.rowIndexTag]=e,this.rowNodes[e]=t,t},buildRow:function(e,t){this.buildRowContent(e,t),this.styleRow(e,t)},buildRowContent:function(e,t){t.innerHTML=this.content.generateHtml(e,e),this.flexCells&&this.contentWidth&&(t.firstChild.style.width=this.contentWidth),p.fire(this,"onAfterRow",[e,this.structure.cells,t])},rowRemoved:function(e){e>=0&&this._cleanupRowWidgets(this.getRowNode(e)),this.grid.edit.save(this,e),delete this.rowNodes[e]},getRowNode:function(e){return this.rowNodes[e]},getCellNode:function(e,t){var i=this.getRowNode(e);return i?this.content.getCellNode(i,t):void 0},getHeaderCellNode:function(e){return this.headerContentNode?this.header.getCellNode(this.headerContentNode,e):void 0},styleRow:function(e,t){t._style=M(t),this.styleRowNode(e,t)},styleRowNode:function(e,t){t&&this.doStyleRowNode(e,t)},doStyleRowNode:function(e,t){this.grid.styleRowNode(e,t)},updateRow:function(e){var t=this.getRowNode(e);return t&&(t.style.height="",this.buildRow(e,t)),t},updateRowStyles:function(e){this.styleRowNode(e,this.getRowNode(e))},lastTop:0,firstScroll:0,_nativeScroll:!1,doscroll:function(e){(s("ff")>=13||s("chrome"))&&(this._nativeScroll=!0);var t=this.grid.isLeftToRight();if(this.firstScroll<2){if(!t&&1==this.firstScroll||t&&0===this.firstScroll){var i=g.marginBox(this.headerNodeContainer);s("ie")?this.headerNodeContainer.style.width=i.w+this.getScrollbarWidth()+"px":s("mozilla")&&(this.headerNodeContainer.style.width=i.w-this.getScrollbarWidth()+"px",this.scrollboxNode.scrollLeft=t?this.scrollboxNode.clientWidth-this.scrollboxNode.scrollWidth:this.scrollboxNode.scrollWidth-this.scrollboxNode.clientWidth)}this.firstScroll++}this.headerNode.scrollLeft=this.scrollboxNode.scrollLeft;var a=this.scrollboxNode.scrollTop;a!==this.lastTop&&this.grid.scrollTo(a),this._nativeScroll=!1},setScrollTop:function(e){return this.lastTop=e,this._nativeScroll||(this.scrollboxNode.scrollTop=e),this.scrollboxNode.scrollTop},doContentEvent:function(e){this.content.decorateEvent(e)&&this.grid.onContentEvent(e)},doHeaderEvent:function(e){this.header.decorateEvent(e)&&this.grid.onHeaderEvent(e)},dispatchContentEvent:function(e){return this.content.dispatchEvent(e)},dispatchHeaderEvent:function(e){return this.header.dispatchEvent(e)},setColWidth:function(e,t){this.grid.setCellWidth(e,t+"px")},update:function(){if(this.domNode){this.content.update(),this.grid.update();var e=this.scrollboxNode.scrollLeft;this.scrollboxNode.scrollLeft=e,this.headerNode.scrollLeft=e}}}),w=a("dojox.grid._GridAvatar",v,{construct:function(){var e=d.doc,t=e.createElement("table");t.cellPadding=t.cellSpacing="0",t.className="dojoxGridDndAvatar",t.style.position="absolute",t.style.zIndex=1999,t.style.margin="0px";var i=e.createElement("tbody"),a=e.createElement("tr"),r=e.createElement("td"),o=e.createElement("td");a.className="dojoxGridDndAvatarItem",o.className="dojoxGridDndAvatarItemImage",o.style.width="16px";var n,s=this.manager.source;if(s.creator)n=s._normalizedCreator(s.getItem(this.manager.nodes[0].id).data,"avatar").node;else{n=this.manager.nodes[0].cloneNode(!0);var l,u;if("tr"==n.tagName.toLowerCase())l=e.createElement("table"),u=e.createElement("tbody"),u.appendChild(n),l.appendChild(u),n=l;else if("th"==n.tagName.toLowerCase()){l=e.createElement("table"),u=e.createElement("tbody");var h=e.createElement("tr");l.cellPadding=l.cellSpacing="0",h.appendChild(n),u.appendChild(h),l.appendChild(u),n=l}}n.id="",r.appendChild(n),a.appendChild(o),a.appendChild(r),g.style(a,"opacity",.9),i.appendChild(a),t.appendChild(i),this.node=t;var c=b.manager();this.oldOffsetY=c.OFFSET_Y,c.OFFSET_Y=1},destroy:function(){b.manager().OFFSET_Y=this.oldOffsetY,this.inherited(arguments)}}),_=b.manager().makeAvatar;return b.manager().makeAvatar=function(){var e=this.source;return void 0===e.viewIndex||g.hasClass(d.body(),"dijit_a11y")?_.call(b.manager()):new w(this)},k});//# sourceMappingURL=_View.js.map