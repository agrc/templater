//>>built
define("dojox/grid/_Builder",["../main","dojo/_base/array","dojo/_base/lang","dojo/_base/window","dojo/_base/event","dojo/_base/sniff","dojo/_base/connect","dojo/dnd/Moveable","dojox/html/metrics","./util","dojo/_base/html","dojo/dom-geometry"],function(e,t,a,i,r,o,n,s,l,d,h,u){var c=e.grid,m=function(e){return e.cellIndex>=0?e.cellIndex:t.indexOf(e.parentNode.cells,e)},f=function(e){return e.rowIndex>=0?e.rowIndex:t.indexOf(e.parentNode.childNodes,e)},p=function(e,t){return e&&((e.rows||0)[t]||e.childNodes[t])},y=function(e){for(var t=e;t&&"TABLE"!=t.tagName;t=t.parentNode);return t},g=function(e,t){for(var a=e;a&&t(a);a=a.parentNode);return a},v=function(e){var t=e.toUpperCase();return function(e){return e.tagName!=t}},b=d.rowIndexTag,k=d.gridViewTag,M=c._Builder=a.extend(function(e){e&&(this.view=e,this.grid=e.grid)},{view:null,_table:'<table class="dojoxGridRowTable" border="0" cellspacing="0" cellpadding="0" role="presentation"',getTableArray:function(){var e=[this._table];return this.view.viewWidth&&e.push([' style="width:',this.view.viewWidth,';"'].join("")),e.push(">"),e},generateCellMarkup:function(e,t,a,i){var r,o=[];if(i){var n=e.index!=e.grid.getSortIndex()?"":e.grid.sortInfo>0?'aria-sort="ascending"':'aria-sort="descending"';e.id||(e.id=this.grid.id+"Hdr"+e.index),r=['<th tabIndex="-1" aria-readonly="true" role="columnheader"',n,' id="',e.id,'"']}else{r=['<td tabIndex="-1" role="gridcell"',this.grid.editable&&!e.editable?'aria-readonly="true"':""]}return e.colSpan&&r.push(' colspan="',e.colSpan,'"'),e.rowSpan&&r.push(' rowspan="',e.rowSpan,'"'),r.push(' class="dojoxGridCell '),e.classes&&r.push(e.classes," "),a&&r.push(a," "),o.push(r.join("")),o.push(""),r=['" idx="',e.index,'" style="'],t&&";"!=t[t.length-1]&&(t+=";"),r.push(e.styles,t||"",e.hidden?"display:none;":""),e.unitWidth&&r.push("width:",e.unitWidth,";"),o.push(r.join("")),o.push(""),r=['"'],e.attrs&&r.push(" ",e.attrs),r.push(">"),o.push(r.join("")),o.push(""),o.push(i?"</th>":"</td>"),o},isCellNode:function(e){return Boolean(e&&e!=i.doc&&h.attr(e,"idx"))},getCellNodeIndex:function(e){return e?Number(h.attr(e,"idx")):-1},getCellNode:function(e,t){for(var a,i=0;(a=p(e.firstChild,i))&&a.cells;i++)for(var r,o=0;r=a.cells[o];o++)if(this.getCellNodeIndex(r)==t)return r;return null},findCellTarget:function(e,t){for(var a=e;a&&(!this.isCellNode(a)||a.offsetParent&&k in a.offsetParent.parentNode&&a.offsetParent.parentNode[k]!=this.view.id)&&a!=t;)a=a.parentNode;return a!=t?a:null},baseDecorateEvent:function(e){e.dispatch="do"+e.type,e.grid=this.grid,e.sourceView=this.view,e.cellNode=this.findCellTarget(e.target,e.rowNode),e.cellIndex=this.getCellNodeIndex(e.cellNode),e.cell=e.cellIndex>=0?this.grid.getCell(e.cellIndex):null},findTarget:function(e,t){for(var a=e;a&&a!=this.domNode&&(!(t in a)||k in a&&a[k]!=this.view.id);)a=a.parentNode;return a!=this.domNode?a:null},findRowTarget:function(e){return this.findTarget(e,b)},isIntraNodeEvent:function(e){try{return e.cellNode&&e.relatedTarget&&h.isDescendant(e.relatedTarget,e.cellNode)}catch(e){return!1}},isIntraRowEvent:function(e){try{var t=e.relatedTarget&&this.findRowTarget(e.relatedTarget);return!t&&-1==e.rowIndex||t&&e.rowIndex==t.gridRowIndex}catch(e){return!1}},dispatchEvent:function(e){return e.dispatch in this&&this[e.dispatch](e)},domouseover:function(e){e.cellNode&&e.cellNode!=this.lastOverCellNode&&(this.lastOverCellNode=e.cellNode,this.grid.onMouseOver(e)),this.grid.onMouseOverRow(e)},domouseout:function(e){e.cellNode&&e.cellNode==this.lastOverCellNode&&!this.isIntraNodeEvent(e,this.lastOverCellNode)&&(this.lastOverCellNode=null,this.grid.onMouseOut(e),this.isIntraRowEvent(e)||this.grid.onMouseOutRow(e))},domousedown:function(e){e.cellNode&&this.grid.onMouseDown(e),this.grid.onMouseDownRow(e)},_getTextDirStyle:function(e,t,a){return""}}),w=c._ContentBuilder=a.extend(function(e){M.call(this,e)},M.prototype,{update:function(){this.prepareHtml()},prepareHtml:function(){for(var e,t=this.grid.get,a=this.view.structure.cells,i=0;e=a[i];i++)for(var r,o=0;r=e[o];o++)r.get=r.get||void 0==r.value&&t,r.markup=this.generateCellMarkup(r,r.cellStyles,r.cellClasses,!1),!this.grid.editable&&r.editable&&(this.grid.editable=!0)},generateHtml:function(e,t){var a,i=this.getTableArray(),r=this.view,o=r.structure.cells,n=this.grid.getItem(t);d.fire(this.view,"onBeforeRow",[t,o]);for(var s,l=0;s=o[l];l++)if(!s.hidden&&!s.header){i.push(s.invisible?'<tr class="dojoxGridInvisible">':"<tr>");for(var h,u,c,m,f=0;h=s[f];f++)u=h.markup,c=h.customClasses=[],m=h.customStyles=[],u[5]=h.format(t,n),u[1]=c.join(" "),u[3]=m.join(";"),a=h.textDir||this.grid.textDir,a&&(u[3]+=this._getTextDirStyle(a,h,t)),i.push.apply(i,u);i.push("</tr>")}return i.push("</table>"),i.join("")},decorateEvent:function(e){return e.rowNode=this.findRowTarget(e.target),!!e.rowNode&&(e.rowIndex=e.rowNode[b],this.baseDecorateEvent(e),e.cell=this.grid.getCell(e.cellIndex),!0)}}),_=c._HeaderBuilder=a.extend(function(e){this.moveable=null,M.call(this,e)},M.prototype,{_skipBogusClicks:!1,overResizeWidth:4,minColWidth:1,update:function(){this.tableMap?this.tableMap.mapRows(this.view.structure.cells):this.tableMap=new c._TableMap(this.view.structure.cells)},generateHtml:function(e,t){var a,i=this.getTableArray(),r=this.view.structure.cells;d.fire(this.view,"onBeforeRow",[-1,r]);for(var o,n=0;o=r[n];n++)if(!o.hidden){i.push(o.invisible?'<tr class="dojoxGridInvisible">':"<tr>");for(var s,l,h=0;s=o[h];h++)s.customClasses=[],s.customStyles=[],this.view.simpleStructure&&(s.draggable&&(s.headerClasses?-1==s.headerClasses.indexOf("dojoDndItem")&&(s.headerClasses+=" dojoDndItem"):s.headerClasses="dojoDndItem"),s.attrs?-1==s.attrs.indexOf("dndType='gridColumn_")&&(s.attrs+=" dndType='gridColumn_"+this.grid.id+"'"):s.attrs="dndType='gridColumn_"+this.grid.id+"'"),l=this.generateCellMarkup(s,s.headerStyles,s.headerClasses,!0),l[5]=void 0!=t?t:e(s),l[3]=s.customStyles.join(";"),a=s.textDir||this.grid.textDir,a&&(l[3]+=this._getTextDirStyle(a,s,t)),l[1]=s.customClasses.join(" "),i.push(l.join(""));i.push("</tr>")}return i.push("</table>"),i.join("")},getCellX:function(e){var t,a,i;return t=g(e.target,v("th")),t?(i=u.position(t),a=e.clientX-i.x):a=e.layerX,a},decorateEvent:function(e){return this.baseDecorateEvent(e),e.rowIndex=-1,e.cellX=this.getCellX(e),!0},prepareResize:function(e,t){do{var a=e.cellIndex;e.cellNode=a?e.cellNode.parentNode.cells[a+t]:null,e.cellIndex=e.cellNode?this.getCellNodeIndex(e.cellNode):-1}while(e.cellNode&&"none"==e.cellNode.style.display);return Boolean(e.cellNode)},canResize:function(e){if(!e.cellNode||e.cellNode.colSpan>1)return!1;var t=this.grid.getCell(e.cellIndex);return!t.noresize&&t.canResize()},overLeftResizeArea:function(e){if(h.hasClass(i.body(),"dojoDndMove"))return!1;if(o("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1}return this.grid.isLeftToRight()?e.cellIndex>0&&e.cellX>0&&e.cellX<this.overResizeWidth&&this.prepareResize(e,-1):e.cellNode&&e.cellX>0&&e.cellX<this.overResizeWidth},overRightResizeArea:function(e){if(h.hasClass(i.body(),"dojoDndMove"))return!1;if(o("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1}return this.grid.isLeftToRight()?e.cellNode&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth:e.cellIndex>0&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth&&this.prepareResize(e,-1)},domousemove:function(e){if(!this.moveable){var t=this.overRightResizeArea(e)?"dojoxGridColResize":this.overLeftResizeArea(e)?"dojoxGridColResize":"";t&&!this.canResize(e)&&(t="dojoxGridColNoResize"),h.toggleClass(e.sourceView.headerNode,"dojoxGridColNoResize","dojoxGridColNoResize"==t),h.toggleClass(e.sourceView.headerNode,"dojoxGridColResize","dojoxGridColResize"==t),t&&r.stop(e)}},domousedown:function(e){this.moveable||((this.overRightResizeArea(e)||this.overLeftResizeArea(e))&&this.canResize(e)?this.beginColumnResize(e):(this.grid.onMouseDown(e),this.grid.onMouseOverRow(e)))},doclick:function(e){return!!this._skipBogusClicks&&(r.stop(e),!0)},colResizeSetup:function(e,t){var a=h.contentBox(e.sourceView.headerNode);if(t){this.lineDiv=document.createElement("div");var r=h.position(e.sourceView.headerNode,!0),n=h.contentBox(e.sourceView.domNode),s=e.pageX;!this.grid.isLeftToRight()&&o("ie")<8&&(s-=l.getScrollbar().w),h.style(this.lineDiv,{top:r.y+"px",left:s+"px",height:n.h+a.h+"px"}),h.addClass(this.lineDiv,"dojoxGridResizeColLine"),this.lineDiv._origLeft=s,i.body().appendChild(this.lineDiv)}for(var d,u=[],c=this.tableMap.findOverlappingNodes(e.cellNode),m=0;d=c[m];m++)u.push({node:d,index:this.getCellNodeIndex(d),width:d.offsetWidth});for(var f,p=e.sourceView,y=this.grid.isLeftToRight()?1:-1,g=e.grid.views.views,v=[],b=p.idx+y;f=g[b];b+=y)v.push({node:f.headerNode,left:window.parseInt(f.headerNode.style.left)});var k=p.headerContentNode.firstChild;return{scrollLeft:e.sourceView.headerNode.scrollLeft,view:p,node:e.cellNode,index:e.cellIndex,w:h.contentBox(e.cellNode).w,vw:a.w,table:k,tw:h.contentBox(k).w,spanners:u,followers:v}},beginColumnResize:function(e){this.moverDiv=document.createElement("div"),h.style(this.moverDiv,{position:"absolute",left:0}),i.body().appendChild(this.moverDiv),h.addClass(this.grid.domNode,"dojoxGridColumnResizing");var t=this.moveable=new s(this.moverDiv),r=this.colResizeSetup(e,!0);t.onMove=a.hitch(this,"doResizeColumn",r),n.connect(t,"onMoveStop",a.hitch(this,function(){this.endResizeColumn(r),r.node.releaseCapture&&r.node.releaseCapture(),this.moveable.destroy(),delete this.moveable,this.moveable=null,h.removeClass(this.grid.domNode,"dojoxGridColumnResizing")})),e.cellNode.setCapture&&e.cellNode.setCapture(),t.onMouseDown(e)},doResizeColumn:function(e,t,a){var i=a.l,r={deltaX:i,w:e.w+(this.grid.isLeftToRight()?i:-i),vw:e.vw+i,tw:e.tw+i};this.dragRecord={inDrag:e,mover:t,leftTop:a},r.w>=this.minColWidth&&(t?h.style(this.lineDiv,"left",this.lineDiv._origLeft+r.deltaX+"px"):this.doResizeNow(e,r))},endResizeColumn:function(e){if(this.dragRecord){var t=this.dragRecord.leftTop,a=this.grid.isLeftToRight()?t.l:-t.l;a+=Math.max(e.w+a,this.minColWidth)-(e.w+a),o("webkit")&&e.spanners.length&&(a+=h._getPadBorderExtents(e.spanners[0].node).w);var i={deltaX:a,w:e.w+a,vw:e.vw+a,tw:e.tw+a};this.doResizeNow(e,i),delete this.dragRecord}h.destroy(this.lineDiv),h.destroy(this.moverDiv),h.destroy(this.moverDiv),delete this.moverDiv,this._skipBogusClicks=!0,e.view.update(),this._skipBogusClicks=!1,this.grid.onResizeColumn(e.index)},doResizeNow:function(e,t){if(e.view.convertColPctToFixed(),e.view.flexCells&&!e.view.testFlexCells()){var a=y(e.node);a&&(a.style.width="")}var i,r,n,s,l;for(i=0;r=e.spanners[i];i++)(n=r.width+t.deltaX)>0&&(r.node.style.width=n+"px",e.view.setColWidth(r.index,n));if(this.grid.isLeftToRight()||!o("ie"))for(i=0;s=e.followers[i];i++)l=s.left+t.deltaX,s.node.style.left=l+"px";e.node.style.width=t.w+"px",e.view.setColWidth(e.index,t.w),e.view.headerNode.style.width=t.vw+"px",e.view.setColumnsWidth(t.tw),this.grid.isLeftToRight()||(e.view.headerNode.scrollLeft=e.scrollLeft+t.deltaX)}});return c._TableMap=a.extend(function(e){this.mapRows(e)},{map:null,mapRows:function(e){if(e.length){this.map=[];for(var t,a=0;t=e[a];a++)this.map[a]=[];for(var i=0;t=e[i];i++)for(var r,o,n,s=0,l=0;r=t[s];s++){for(;this.map[i][l];)l++;this.map[i][l]={c:s,r:i},n=r.rowSpan||1,o=r.colSpan||1;for(var d=0;d<n;d++)for(var h=0;h<o;h++)this.map[i+d][l+h]=this.map[i][l];l+=o}}},dumpMap:function(){for(var e,t=0,a="";e=this.map[t];t++,a="")for(var i,r=0;i=e[r];r++)a+=i.r+","+i.c+"   "},getMapCoords:function(e,t){for(var a,i=0;a=this.map[i];i++)for(var r,o=0;r=a[o];o++)if(r.c==t&&r.r==e)return{j:i,i:o};return{j:-1,i:-1}},getNode:function(e,t,a){var i=e&&e.rows[t];return i&&i.cells[a]},_findOverlappingNodes:function(e,t,a){for(var i,r=[],o=this.getMapCoords(t,a),n=0;i=this.map[n];n++)if(n!=o.j){var s=i[o.i],l=s?this.getNode(e,s.r,s.c):null;l&&r.push(l)}return r},findOverlappingNodes:function(e){return this._findOverlappingNodes(y(e),f(e.parentNode),m(e))}}),{_Builder:M,_HeaderBuilder:_,_ContentBuilder:w}});//# sourceMappingURL=_Builder.js.map