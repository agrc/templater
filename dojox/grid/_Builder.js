//>>built
define("dojox/grid/_Builder",["../main","dojo/_base/array","dojo/_base/lang","dojo/_base/window","dojo/_base/event","dojo/_base/sniff","dojo/_base/connect","dojo/dnd/Moveable","dojox/html/metrics","./util","dojo/_base/html","dojo/dom-geometry"],function(e,t,i,a,r,o,n,s,d,l,h,u){var c=e.grid,m=function(e){return e.cellIndex>=0?e.cellIndex:t.indexOf(e.parentNode.cells,e)},f=function(e){return e.rowIndex>=0?e.rowIndex:t.indexOf(e.parentNode.childNodes,e)},p=function(e,t){return e&&((e.rows||0)[t]||e.childNodes[t])},y=function(e){for(var t=e;t&&"TABLE"!=t.tagName;t=t.parentNode);return t},v=function(e,t){for(var i=e;i&&t(i);i=i.parentNode);return i},g=function(e){var t=e.toUpperCase();return function(e){return e.tagName!=t}},b=l.rowIndexTag,k=l.gridViewTag,M=c._Builder=i.extend(function(e){e&&(this.view=e,this.grid=e.grid)},{view:null,_table:'<table class="dojoxGridRowTable" border="0" cellspacing="0" cellpadding="0" role="presentation"',getTableArray:function(){var e=[this._table];return this.view.viewWidth&&e.push([' style="width:',this.view.viewWidth,';"'].join("")),e.push(">"),e},generateCellMarkup:function(e,t,i,a){var r,o=[];if(a){var n=e.index!=e.grid.getSortIndex()?"":e.grid.sortInfo>0?'aria-sort="ascending"':'aria-sort="descending"';e.id||(e.id=this.grid.id+"Hdr"+e.index),r=['<th tabIndex="-1" aria-readonly="true" role="columnheader"',n,' id="',e.id,'"']}else{var s=this.grid.editable&&!e.editable?'aria-readonly="true"':"";r=['<td tabIndex="-1" role="gridcell"',s]}return e.colSpan&&r.push(' colspan="',e.colSpan,'"'),e.rowSpan&&r.push(' rowspan="',e.rowSpan,'"'),r.push(' class="dojoxGridCell '),e.classes&&r.push(e.classes," "),i&&r.push(i," "),o.push(r.join("")),o.push(""),r=['" idx="',e.index,'" style="'],t&&";"!=t[t.length-1]&&(t+=";"),r.push(e.styles,t||"",e.hidden?"display:none;":""),e.unitWidth&&r.push("width:",e.unitWidth,";"),o.push(r.join("")),o.push(""),r=['"'],e.attrs&&r.push(" ",e.attrs),r.push(">"),o.push(r.join("")),o.push(""),o.push(a?"</th>":"</td>"),o},isCellNode:function(e){return Boolean(e&&e!=a.doc&&h.attr(e,"idx"))},getCellNodeIndex:function(e){return e?Number(h.attr(e,"idx")):-1},getCellNode:function(e,t){for(var i,a=0;(i=p(e.firstChild,a))&&i.cells;a++)for(var r,o=0;r=i.cells[o];o++)if(this.getCellNodeIndex(r)==t)return r;return null},findCellTarget:function(e,t){for(var i=e;i&&(!this.isCellNode(i)||i.offsetParent&&k in i.offsetParent.parentNode&&i.offsetParent.parentNode[k]!=this.view.id)&&i!=t;)i=i.parentNode;return i!=t?i:null},baseDecorateEvent:function(e){e.dispatch="do"+e.type,e.grid=this.grid,e.sourceView=this.view,e.cellNode=this.findCellTarget(e.target,e.rowNode),e.cellIndex=this.getCellNodeIndex(e.cellNode),e.cell=e.cellIndex>=0?this.grid.getCell(e.cellIndex):null},findTarget:function(e,t){for(var i=e;i&&i!=this.domNode&&(!(t in i)||k in i&&i[k]!=this.view.id);)i=i.parentNode;return i!=this.domNode?i:null},findRowTarget:function(e){return this.findTarget(e,b)},isIntraNodeEvent:function(e){try{return e.cellNode&&e.relatedTarget&&h.isDescendant(e.relatedTarget,e.cellNode)}catch(t){return!1}},isIntraRowEvent:function(e){try{var t=e.relatedTarget&&this.findRowTarget(e.relatedTarget);return!t&&-1==e.rowIndex||t&&e.rowIndex==t.gridRowIndex}catch(i){return!1}},dispatchEvent:function(e){return e.dispatch in this?this[e.dispatch](e):!1},domouseover:function(e){e.cellNode&&e.cellNode!=this.lastOverCellNode&&(this.lastOverCellNode=e.cellNode,this.grid.onMouseOver(e)),this.grid.onMouseOverRow(e)},domouseout:function(e){e.cellNode&&e.cellNode==this.lastOverCellNode&&!this.isIntraNodeEvent(e,this.lastOverCellNode)&&(this.lastOverCellNode=null,this.grid.onMouseOut(e),this.isIntraRowEvent(e)||this.grid.onMouseOutRow(e))},domousedown:function(e){e.cellNode&&this.grid.onMouseDown(e),this.grid.onMouseDownRow(e)},_getTextDirStyle:function(e,t,i){return""}}),w=c._ContentBuilder=i.extend(function(e){M.call(this,e)},M.prototype,{update:function(){this.prepareHtml()},prepareHtml:function(){for(var e,t=this.grid.get,i=this.view.structure.cells,a=0;e=i[a];a++)for(var r,o=0;r=e[o];o++)r.get=r.get||void 0==r.value&&t,r.markup=this.generateCellMarkup(r,r.cellStyles,r.cellClasses,!1),!this.grid.editable&&r.editable&&(this.grid.editable=!0)},generateHtml:function(e,t){var i,a=this.getTableArray(),r=this.view,o=r.structure.cells,n=this.grid.getItem(t);l.fire(this.view,"onBeforeRow",[t,o]);for(var s,d=0;s=o[d];d++)if(!s.hidden&&!s.header){a.push(s.invisible?'<tr class="dojoxGridInvisible">':"<tr>");for(var h,u,c,m,f=0;h=s[f];f++)u=h.markup,c=h.customClasses=[],m=h.customStyles=[],u[5]=h.format(t,n),u[1]=c.join(" "),u[3]=m.join(";"),i=h.textDir||this.grid.textDir,i&&(u[3]+=this._getTextDirStyle(i,h,t)),a.push.apply(a,u);a.push("</tr>")}return a.push("</table>"),a.join("")},decorateEvent:function(e){return e.rowNode=this.findRowTarget(e.target),e.rowNode?(e.rowIndex=e.rowNode[b],this.baseDecorateEvent(e),e.cell=this.grid.getCell(e.cellIndex),!0):!1}}),j=c._HeaderBuilder=i.extend(function(e){this.moveable=null,M.call(this,e)},M.prototype,{_skipBogusClicks:!1,overResizeWidth:4,minColWidth:1,update:function(){this.tableMap?this.tableMap.mapRows(this.view.structure.cells):this.tableMap=new c._TableMap(this.view.structure.cells)},generateHtml:function(e,t){var i,a=this.getTableArray(),r=this.view.structure.cells;l.fire(this.view,"onBeforeRow",[-1,r]);for(var o,n=0;o=r[n];n++)if(!o.hidden){a.push(o.invisible?'<tr class="dojoxGridInvisible">':"<tr>");for(var s,d,h=0;s=o[h];h++)s.customClasses=[],s.customStyles=[],this.view.simpleStructure&&(s.draggable&&(s.headerClasses?-1==s.headerClasses.indexOf("dojoDndItem")&&(s.headerClasses+=" dojoDndItem"):s.headerClasses="dojoDndItem"),s.attrs?-1==s.attrs.indexOf("dndType='gridColumn_")&&(s.attrs+=" dndType='gridColumn_"+this.grid.id+"'"):s.attrs="dndType='gridColumn_"+this.grid.id+"'"),d=this.generateCellMarkup(s,s.headerStyles,s.headerClasses,!0),d[5]=void 0!=t?t:e(s),d[3]=s.customStyles.join(";"),i=s.textDir||this.grid.textDir,i&&(d[3]+=this._getTextDirStyle(i,s,t)),d[1]=s.customClasses.join(" "),a.push(d.join(""));a.push("</tr>")}return a.push("</table>"),a.join("")},getCellX:function(e){var t,i,a;return t=v(e.target,g("th")),t?(a=u.position(t),i=e.clientX-a.x):i=e.layerX,i},decorateEvent:function(e){return this.baseDecorateEvent(e),e.rowIndex=-1,e.cellX=this.getCellX(e),!0},prepareResize:function(e,t){do{var i=e.cellIndex;e.cellNode=i?e.cellNode.parentNode.cells[i+t]:null,e.cellIndex=e.cellNode?this.getCellNodeIndex(e.cellNode):-1}while(e.cellNode&&"none"==e.cellNode.style.display);return Boolean(e.cellNode)},canResize:function(e){if(!e.cellNode||e.cellNode.colSpan>1)return!1;var t=this.grid.getCell(e.cellIndex);return!t.noresize&&t.canResize()},overLeftResizeArea:function(e){if(h.hasClass(a.body(),"dojoDndMove"))return!1;if(o("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1}if(this.grid.isLeftToRight())return e.cellIndex>0&&e.cellX>0&&e.cellX<this.overResizeWidth&&this.prepareResize(e,-1);var i=e.cellNode&&e.cellX>0&&e.cellX<this.overResizeWidth;return i},overRightResizeArea:function(e){if(h.hasClass(a.body(),"dojoDndMove"))return!1;if(o("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1}return this.grid.isLeftToRight()?e.cellNode&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth:e.cellIndex>0&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth&&this.prepareResize(e,-1)},domousemove:function(e){if(!this.moveable){var t=this.overRightResizeArea(e)?"dojoxGridColResize":this.overLeftResizeArea(e)?"dojoxGridColResize":"";t&&!this.canResize(e)&&(t="dojoxGridColNoResize"),h.toggleClass(e.sourceView.headerNode,"dojoxGridColNoResize","dojoxGridColNoResize"==t),h.toggleClass(e.sourceView.headerNode,"dojoxGridColResize","dojoxGridColResize"==t),t&&r.stop(e)}},domousedown:function(e){this.moveable||((this.overRightResizeArea(e)||this.overLeftResizeArea(e))&&this.canResize(e)?this.beginColumnResize(e):(this.grid.onMouseDown(e),this.grid.onMouseOverRow(e)))},doclick:function(e){return this._skipBogusClicks?(r.stop(e),!0):!1},colResizeSetup:function(e,t){var i=h.contentBox(e.sourceView.headerNode);if(t){this.lineDiv=document.createElement("div");var r=h.position(e.sourceView.headerNode,!0),n=h.contentBox(e.sourceView.domNode),s=e.pageX;!this.grid.isLeftToRight()&&o("ie")<8&&(s-=d.getScrollbar().w),h.style(this.lineDiv,{top:r.y+"px",left:s+"px",height:n.h+i.h+"px"}),h.addClass(this.lineDiv,"dojoxGridResizeColLine"),this.lineDiv._origLeft=s,a.body().appendChild(this.lineDiv)}for(var l,u=[],c=this.tableMap.findOverlappingNodes(e.cellNode),m=0;l=c[m];m++)u.push({node:l,index:this.getCellNodeIndex(l),width:l.offsetWidth});for(var f,p=e.sourceView,y=this.grid.isLeftToRight()?1:-1,v=e.grid.views.views,g=[],b=p.idx+y;f=v[b];b+=y)g.push({node:f.headerNode,left:window.parseInt(f.headerNode.style.left)});var k=p.headerContentNode.firstChild,M={scrollLeft:e.sourceView.headerNode.scrollLeft,view:p,node:e.cellNode,index:e.cellIndex,w:h.contentBox(e.cellNode).w,vw:i.w,table:k,tw:h.contentBox(k).w,spanners:u,followers:g};return M},beginColumnResize:function(e){this.moverDiv=document.createElement("div"),h.style(this.moverDiv,{position:"absolute",left:0}),a.body().appendChild(this.moverDiv),h.addClass(this.grid.domNode,"dojoxGridColumnResizing");var t=this.moveable=new s(this.moverDiv),r=this.colResizeSetup(e,!0);t.onMove=i.hitch(this,"doResizeColumn",r),n.connect(t,"onMoveStop",i.hitch(this,function(){this.endResizeColumn(r),r.node.releaseCapture&&r.node.releaseCapture(),this.moveable.destroy(),delete this.moveable,this.moveable=null,h.removeClass(this.grid.domNode,"dojoxGridColumnResizing")})),e.cellNode.setCapture&&e.cellNode.setCapture(),t.onMouseDown(e)},doResizeColumn:function(e,t,i){var a=i.l,r={deltaX:a,w:e.w+(this.grid.isLeftToRight()?a:-a),vw:e.vw+a,tw:e.tw+a};this.dragRecord={inDrag:e,mover:t,leftTop:i},r.w>=this.minColWidth&&(t?h.style(this.lineDiv,"left",this.lineDiv._origLeft+r.deltaX+"px"):this.doResizeNow(e,r))},endResizeColumn:function(e){if(this.dragRecord){var t=this.dragRecord.leftTop,i=this.grid.isLeftToRight()?t.l:-t.l;i+=Math.max(e.w+i,this.minColWidth)-(e.w+i),o("webkit")&&e.spanners.length&&(i+=h._getPadBorderExtents(e.spanners[0].node).w);var a={deltaX:i,w:e.w+i,vw:e.vw+i,tw:e.tw+i};this.doResizeNow(e,a),delete this.dragRecord}h.destroy(this.lineDiv),h.destroy(this.moverDiv),h.destroy(this.moverDiv),delete this.moverDiv,this._skipBogusClicks=!0,e.view.update(),this._skipBogusClicks=!1,this.grid.onResizeColumn(e.index)},doResizeNow:function(e,t){if(e.view.convertColPctToFixed(),e.view.flexCells&&!e.view.testFlexCells()){var i=y(e.node);i&&(i.style.width="")}var a,r,n,s,d;for(a=0;r=e.spanners[a];a++)n=r.width+t.deltaX,n>0&&(r.node.style.width=n+"px",e.view.setColWidth(r.index,n));if(this.grid.isLeftToRight()||!o("ie"))for(a=0;s=e.followers[a];a++)d=s.left+t.deltaX,s.node.style.left=d+"px";e.node.style.width=t.w+"px",e.view.setColWidth(e.index,t.w),e.view.headerNode.style.width=t.vw+"px",e.view.setColumnsWidth(t.tw),this.grid.isLeftToRight()||(e.view.headerNode.scrollLeft=e.scrollLeft+t.deltaX)}});return c._TableMap=i.extend(function(e){this.mapRows(e)},{map:null,mapRows:function(e){var t=e.length;if(t){this.map=[];for(var i,a=0;i=e[a];a++)this.map[a]=[];for(var r=0;i=e[r];r++)for(var o,n,s,d=0,l=0;o=i[d];d++){for(;this.map[r][l];)l++;this.map[r][l]={c:d,r:r},s=o.rowSpan||1,n=o.colSpan||1;for(var h=0;s>h;h++)for(var u=0;n>u;u++)this.map[r+h][l+u]=this.map[r][l];l+=n}}},dumpMap:function(){for(var e,t=0,i="";e=this.map[t];t++,i="")for(var a,r=0;a=e[r];r++)i+=a.r+","+a.c+"   "},getMapCoords:function(e,t){for(var i,a=0;i=this.map[a];a++)for(var r,o=0;r=i[o];o++)if(r.c==t&&r.r==e)return{j:a,i:o};return{j:-1,i:-1}},getNode:function(e,t,i){var a=e&&e.rows[t];return a&&a.cells[i]},_findOverlappingNodes:function(e,t,i){for(var a,r=[],o=this.getMapCoords(t,i),n=0;a=this.map[n];n++)if(n!=o.j){var s=a[o.i],d=s?this.getNode(e,s.r,s.c):null;d&&r.push(d)}return r},findOverlappingNodes:function(e){return this._findOverlappingNodes(y(e),f(e.parentNode),m(e))}}),{_Builder:M,_HeaderBuilder:j,_ContentBuilder:w}});//# sourceMappingURL=_Builder.js.map