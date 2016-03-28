//>>built
define("dojox/grid/enhanced/plugins/DnD",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/json","dojo/_base/window","dojo/query","dojo/keys","dojo/dnd/Source","dojo/dnd/Avatar","../_Plugin","../../EnhancedGrid","dojo/dnd/Manager","./Selector","./Rearrange"],function(e,t,i,a,r,o,n,s,d,l,h,u,c,m,f){var p=function(e){e.sort(function(e,t){return e-t});for(var t=[[e[0]]],i=1,a=0;i<e.length;++i)e[i]==e[i-1]+1?t[a].push(e[i]):t[++a]=[e[i]];return t},y=function(e){for(var t=e[0],i=1;i<e.length;++i)t=t.concat(e[i]);return t},g=t("dojox.grid.enhanced.plugins.GridDnDElement",null,{constructor:function(e){this.plugin=e,this.node=o.create("div"),this._items={}},destroy:function(){this.plugin=null,o.destroy(this.node),this.node=null,this._items=null},createDnDNodes:function(e){this.destroyDnDNodes();var t=["grid/"+e.type+"s"],i=this.plugin.grid.id+"_dndItem";a.forEach(e.selected,function(e,a){var r=i+a;this._items[r]={type:t,data:e,dndPlugin:this.plugin},this.node.appendChild(o.create("div",{id:r}))},this)},getDnDNodes:function(){return a.map(this.node.childNodes,function(e){return e})},destroyDnDNodes:function(){o.empty(this.node),this._items={}},getItem:function(e){return this._items[e]}}),v=t("dojox.grid.enhanced.plugins.GridDnDSource",h,{accept:["grid/cells","grid/rows","grid/cols"],constructor:function(e,t){this.grid=t.grid,this.dndElem=t.dndElem,this.dndPlugin=t.dnd,this.sourcePlugin=null},destroy:function(){this.inherited(arguments),this.grid=null,this.dndElem=null,this.dndPlugin=null,this.sourcePlugin=null},getItem:function(e){return this.dndElem.getItem(e)},checkAcceptance:function(e,t){if(this!=e&&t[0]){var i=e.getItem(t[0].id);if(i.dndPlugin){for(var r=i.type,o=0;o<r.length;++o)if(r[o]in this.accept){if(!this.dndPlugin._canAccept(i.dndPlugin))return!1;this.sourcePlugin=i.dndPlugin;break}}else if("grid/rows"in this.accept){var s=[];if(a.forEach(t,function(t){var i=e.getItem(t.id);if(i.data&&a.indexOf(i.type,"grid/rows")>=0){var r=i.data;"string"==typeof i.data&&(r=n.fromJson(i.data)),r&&s.push(r)}}),!s.length)return!1;this.sourcePlugin={_dndRegion:{type:"row",selected:[s]}}}}return this.inherited(arguments)},onDraggingOver:function(){this.dndPlugin.onDraggingOver(this.sourcePlugin)},onDraggingOut:function(){this.dndPlugin.onDraggingOut(this.sourcePlugin)},onDndDrop:function(e,t,i,a){this.onDndCancel(),this!=e&&this==a&&this.dndPlugin.onDragIn(this.sourcePlugin,i)}}),b=t("dojox.grid.enhanced.plugins.GridDnDAvatar",u,{construct:function(){this._itemType=this.manager._dndPlugin._dndRegion.type,this._itemCount=this._getItemCount(),this.isA11y=o.hasClass(s.body(),"dijit_a11y");var e=o.create("table",{border:"0",cellspacing:"0","class":"dojoxGridDndAvatar",style:{position:"absolute",zIndex:"1999",margin:"0px"}}),t=this.manager.source,i=o.create("tbody",null,e),a=o.create("tr",null,i),r=o.create("td",{"class":"dojoxGridDnDIcon"},a);this.isA11y&&o.create("span",{id:"a11yIcon",innerHTML:this.manager.copy?"+":"<"},r),r=o.create("td",{"class":"dojoxGridDnDItemIcon "+this._getGridDnDIconClass()},a),r=o.create("td",null,a),o.create("span",{"class":"dojoxGridDnDItemCount",innerHTML:t.generateText?this._generateText():""},r),o.style(a,{opacity:.9}),this.node=e},_getItemCount:function(){var e=this.manager._dndPlugin._dndRegion.selected,t=0;switch(this._itemType){case"cell":e=e[0];var i=this.manager._dndPlugin.grid.layout.cells,a=e.max.col-e.min.col+1,r=e.max.row-e.min.row+1;if(a>1)for(var o=e.min.col;o<=e.max.col;++o)i[o].hidden&&--a;t=a*r;break;case"row":case"col":t=y(e).length}return t},_getGridDnDIconClass:function(){return{row:["dojoxGridDnDIconRowSingle","dojoxGridDnDIconRowMulti"],col:["dojoxGridDnDIconColSingle","dojoxGridDnDIconColMulti"],cell:["dojoxGridDnDIconCellSingle","dojoxGridDnDIconCellMulti"]}[this._itemType][1==this._itemCount?0:1]},_generateText:function(){return"("+this._itemCount+")"}}),M=t("dojox.grid.enhanced.plugins.DnD",c,{name:"dnd",_targetAnchorBorderWidth:2,_copyOnly:!1,_config:{row:{within:!0,"in":!0,out:!0},col:{within:!0,"in":!0,out:!0},cell:{within:!0,"in":!0,out:!0}},constructor:function(e,t){this.grid=e,this._config=r.clone(this._config),t=r.isObject(t)?t:{},this.setupConfig(t.dndConfig),this._copyOnly=!!t.copyOnly,this._mixinGrid(),this.selector=e.pluginMgr.getPlugin("selector"),this.rearranger=e.pluginMgr.getPlugin("rearrange"),this.rearranger.setArgs(t),this._clear(),this._elem=new g(this),this._source=new v(this._elem.node,{grid:e,dndElem:this._elem,dnd:this}),this._container=d(".dojoxGridMasterView",this.grid.domNode)[0],this._initEvents()},destroy:function(){this.inherited(arguments),this._clear(),this._source.destroy(),this._elem.destroy(),this._container=null,this.grid=null,this.selector=null,this.rearranger=null,this._config=null},_mixinGrid:function(){this.grid.setupDnDConfig=r.hitch(this,"setupConfig"),this.grid.dndCopyOnly=r.hitch(this,"copyOnly")},setupConfig:function(e){if(e&&r.isObject(e)){var t=["row","col","cell"],i=["within","in","out"],o=this._config;a.forEach(t,function(t){if(t in e){var n=e[t];n&&r.isObject(n)?a.forEach(i,function(e){e in n&&(o[t][e]=!!n[e])}):a.forEach(i,function(e){o[t][e]=!!n})}}),a.forEach(i,function(i){if(i in e){var n=e[i];n&&r.isObject(n)?a.forEach(t,function(e){e in n&&(o[e][i]=!!n[e])}):a.forEach(t,function(e){o[e][i]=!!n})}})}},copyOnly:function(e){return"undefined"!=typeof e&&(this._copyOnly=!!e),this._copyOnly},_isOutOfGrid:function(e){var t=o.position(this.grid.domNode),i=e.clientX,a=e.clientY;return a<t.y||a>t.y+t.h||i<t.x||i>t.x+t.w},_onMouseMove:function(e){if(!this._dndRegion||this._dnding||this._externalDnd){this._isMouseDown&&!this._dndRegion&&(delete this._isMouseDown,this._oldCursor=o.style(s.body(),"cursor"),o.style(s.body(),"cursor","not-allowed"));var t=this._isOutOfGrid(e);!this._alreadyOut&&t?(this._alreadyOut=!0,this._dnding&&this._destroyDnDUI(!0,!1),this._moveEvent=e,this._source.onOutEvent()):this._alreadyOut&&!t&&(this._alreadyOut=!1,this._dnding&&this._createDnDUI(e,!0),this._moveEvent=e,this._source.onOverEvent())}else this._dnding=!0,this._startDnd(e)},_onMouseUp:function(){if(!this._extDnding&&!this._isSource){var e=this._dnding&&!this._alreadyOut;e&&this._config[this._dndRegion.type].within&&this._rearrange(),this._endDnd(e)}o.style(s.body(),"cursor",this._oldCursor||""),delete this._isMouseDown},_initEvents:function(){var e=this.grid,t=this.selector;this.connect(s.doc,"onmousemove","_onMouseMove"),this.connect(s.doc,"onmouseup","_onMouseUp"),this.connect(e,"onCellMouseOver",function(e){this._dnding||t.isSelecting()||e.ctrlKey||(this._dndReady=t.isSelected("cell",e.rowIndex,e.cell.index),t.selectEnabled(!this._dndReady))}),this.connect(e,"onHeaderCellMouseOver",function(e){this._dndReady&&t.selectEnabled(!0)}),this.connect(e,"onRowMouseOver",function(e){this._dndReady&&!e.cell&&t.selectEnabled(!0)}),this.connect(e,"onCellMouseDown",function(e){!e.ctrlKey&&this._dndReady&&(this._dndRegion=this._getDnDRegion(e.rowIndex,e.cell.index),this._isMouseDown=!0)}),this.connect(e,"onCellMouseUp",function(e){this._dndReady||t.isSelecting()||!e.cell||(this._dndReady=t.isSelected("cell",e.rowIndex,e.cell.index),t.selectEnabled(!this._dndReady))}),this.connect(e,"onCellClick",function(e){!this._dndReady||e.ctrlKey||e.shiftKey||t.select("cell",e.rowIndex,e.cell.index)}),this.connect(e,"onEndAutoScroll",function(e,t,i,a,r){this._dnding&&this._markTargetAnchor(r)}),this.connect(s.doc,"onkeydown",function(e){e.keyCode==l.ESCAPE?this._endDnd(!1):e.keyCode==l.CTRL&&(t.selectEnabled(!0),this._isCopy=!0)}),this.connect(s.doc,"onkeyup",function(e){e.keyCode==l.CTRL&&(t.selectEnabled(!this._dndReady),this._isCopy=!1)})},_clear:function(){this._dndRegion=null,this._target=null,this._moveEvent=null,this._targetAnchor={},this._dnding=!1,this._externalDnd=!1,this._isSource=!1,this._alreadyOut=!1,this._extDnding=!1},_getDnDRegion:function(e,t){var i,r=this.selector,o=r._selected,n=!!o.cell.length|!!o.row.length<<1|!!o.col.length<<2;switch(n){case 1:if(i="cell",!this._config[i].within&&!this._config[i].out)return null;var s=this.grid.layout.cells,d=function(e){for(var t=0,i=e.min.col;i<=e.max.col;++i)s[i].hidden&&++t;return(e.max.row-e.min.row+1)*(e.max.col-e.min.col+1-t)},l=function(e,t){return e.row>=t.min.row&&e.row<=t.max.row&&e.col>=t.min.col&&e.col<=t.max.col},h={max:{row:-1,col:-1},min:{row:1/0,col:1/0}};return a.forEach(o[i],function(e){e.row<h.min.row&&(h.min.row=e.row),e.row>h.max.row&&(h.max.row=e.row),e.col<h.min.col&&(h.min.col=e.col),e.col>h.max.col&&(h.max.col=e.col)}),a.some(o[i],function(i){return i.row==e&&i.col==t})&&d(h)==o[i].length&&a.every(o[i],function(e){return l(e,h)})?{type:i,selected:[h],handle:{row:e,col:t}}:null;case 2:case 4:if(i=2==n?"row":"col",!this._config[i].within&&!this._config[i].out)return null;var u=r.getSelected(i);return u.length?{type:i,selected:p(u),handle:2==n?e:t}:null}return null},_startDnd:function(e){this._createDnDUI(e)},_endDnd:function(e){this._destroyDnDUI(!1,e),this._clear()},_createDnDUI:function(e,t){var i=o.position(this.grid.views.views[0].domNode);o.style(this._container,"height",i.h+"px");try{t||this._createSource(e),this._createMoveable(e),this._oldCursor=o.style(s.body(),"cursor"),o.style(s.body(),"cursor","default")}catch(a){}},_destroyDnDUI:function(e,t){try{t&&this._destroySource(),this._unmarkTargetAnchor(),e||this._destroyMoveable(),o.style(s.body(),"cursor",this._oldCursor)}catch(i){}},_createSource:function(e){this._elem.createDnDNodes(this._dndRegion);var t=f.manager(),i=t.makeAvatar;t._dndPlugin=this,t.makeAvatar=function(){var e=new b(t);return delete t._dndPlugin,e},t.startDrag(this._source,this._elem.getDnDNodes(),e.ctrlKey),t.makeAvatar=i,t.onMouseMove(e)},_destroySource:function(){i.publish("/dnd/cancel")},_createMoveable:function(e){this._markTagetAnchorHandler||(this._markTagetAnchorHandler=this.connect(s.doc,"onmousemove","_markTargetAnchor"))},_destroyMoveable:function(){this.disconnect(this._markTagetAnchorHandler),delete this._markTagetAnchorHandler},_calcColTargetAnchorPos:function(e,t){var i,r,n,s,d=e.clientX,l=this.grid.layout.cells,h=o._isBodyLtr(),u=this._getVisibleHeaders();for(i=0;i<u.length;++i){if(r=o.position(u[i].node),h?(0===i||d>=r.x)&&d<r.x+r.w:(0===i||d<r.x+r.w)&&d>=r.x){n=r.x+(h?0:r.w);break}if(h?i===u.length-1&&d>=r.x+r.w:i===u.length-1&&d<r.x){++i,n=r.x+(h?r.w:0);break}}if(i<u.length){if(s=u[i].cell.index,this.selector.isSelected("col",s)&&this.selector.isSelected("col",s-1)){var c=this._dndRegion.selected;for(i=0;i<c.length;++i)if(a.indexOf(c[i],s)>=0){s=c[i][0],r=o.position(l[s].getHeaderNode()),n=r.x+(h?0:r.w);break}}}else s=l.length;return this._target=s,n-t.x},_calcRowTargetAnchorPos:function(e,t){for(var i,r=this.grid,n=0,s=r.layout.cells;s[n].hidden;)++n;var d=r.layout.cells[n],l=r.scroller.firstVisibleRow,h=d.getNode(l);if(!h)return this._target=-1,0;for(var u=o.position(h);u.y+u.h<e.clientY&&!(++l>=r.rowCount);)u=o.position(d.getNode(l));if(l<r.rowCount){if(this.selector.isSelected("row",l)&&this.selector.isSelected("row",l-1)){var c=this._dndRegion.selected;for(n=0;n<c.length;++n)if(a.indexOf(c[n],l)>=0){l=c[n][0],u=o.position(d.getNode(l));break}}i=u.y}else i=u.y+u.h;return this._target=l,i-t.y},_calcCellTargetAnchorPos:function(e,t,i){var a,r,n,s,l,h,u,c,m,f,p,y,g,v=this._dndRegion.selected[0],b=this._dndRegion.handle,M=this.grid,w=o._isBodyLtr(),k=M.layout.cells,x=b.col-v.min.col,_=v.max.col-b.col;for(i.childNodes.length?(y=d(".dojoxGridCellBorderLeftTopDIV",i)[0],g=d(".dojoxGridCellBorderRightBottomDIV",i)[0]):(y=o.create("div",{"class":"dojoxGridCellBorderLeftTopDIV"},i),g=o.create("div",{"class":"dojoxGridCellBorderRightBottomDIV"},i)),p=v.min.col+1;p<b.col;++p)k[p].hidden&&--x;for(p=b.col+1;p<v.max.col;++p)k[p].hidden&&--_;for(s=this._getVisibleHeaders(),p=x;p<s.length-_;++p)if(a=o.position(s[p].node),e.clientX>=a.x&&e.clientX<a.x+a.w||p==x&&(w?e.clientX<a.x:e.clientX>=a.x+a.w)||p==s.length-_-1&&(w?e.clientX>=a.x+a.w:e<a.x)){m=s[p-x],f=s[p+_],r=o.position(m.node),n=o.position(f.node),m=m.cell.index,f=f.cell.index,u=w?r.x:n.x,h=w?n.x+n.w-r.x:r.x+r.w-n.x;break}for(p=0;k[p].hidden;)++p;for(var j=k[p],T=M.scroller.firstVisibleRow,C=o.position(j.getNode(T));C.y+C.h<e.clientY&&++T<M.rowCount;)C=o.position(j.getNode(T));var I=T>=b.row-v.min.row?T-b.row+v.min.row:0,F=I+v.max.row-v.min.row;F>=M.rowCount&&(F=M.rowCount-1,I=F-v.max.row+v.min.row),r=o.position(j.getNode(I)),n=o.position(j.getNode(F)),c=r.y,l=n.y+n.h-r.y,this._target={min:{row:I,col:m},max:{row:F,col:f}};var S=(o.marginBox(y).w-o.contentBox(y).w)/2,E=o.position(k[m].getNode(I));o.style(y,{width:E.w-S+"px",height:E.h-S+"px"});var A=o.position(k[f].getNode(F));return o.style(g,{width:A.w-S+"px",height:A.h-S+"px"}),{h:l,w:h,l:u-t.x,t:c-t.y}},_markTargetAnchor:function(e){try{var t=this._dndRegion.type;if(this._alreadyOut||this._dnding&&!this._config[t].within||this._extDnding&&!this._config[t]["in"])return;var i,a,r,n,s=this._targetAnchor[t],d=o.position(this._container);switch(s||(s=this._targetAnchor[t]=o.create("div",{"class":"cell"==t?"dojoxGridCellBorderDIV":"dojoxGridBorderDIV"}),o.style(s,"display","none"),this._container.appendChild(s)),t){case"col":i=d.h,a=this._targetAnchorBorderWidth,r=this._calcColTargetAnchorPos(e,d),n=0;break;case"row":i=this._targetAnchorBorderWidth,a=d.w,r=0,n=this._calcRowTargetAnchorPos(e,d);break;case"cell":var l=this._calcCellTargetAnchorPos(e,d,s);i=l.h,a=l.w,r=l.l,n=l.t}"number"==typeof i&&"number"==typeof a&&"number"==typeof r&&"number"==typeof n?(o.style(s,{height:i+"px",width:a+"px",left:r+"px",top:n+"px"}),o.style(s,"display","")):this._target=null}catch(h){}},_unmarkTargetAnchor:function(){if(this._dndRegion){var e=this._targetAnchor[this._dndRegion.type];e&&o.style(this._targetAnchor[this._dndRegion.type],"display","none")}},_getVisibleHeaders:function(){return a.map(a.filter(this.grid.layout.cells,function(e){return!e.hidden}),function(e){return{node:e.getHeaderNode(),cell:e}})},_rearrange:function(){if(null!==this._target){var e=this._dndRegion.type,t=this._dndRegion.selected;"cell"===e?this.rearranger[this._isCopy||this._copyOnly?"copyCells":"moveCells"](t[0],-1===this._target?null:this._target):this.rearranger["col"==e?"moveColumns":"moveRows"](y(t),-1===this._target?null:this._target),this._target=null}},onDraggingOver:function(e){!this._dnding&&e&&(e._isSource=!0,this._extDnding=!0,this._externalDnd||(this._externalDnd=!0,this._dndRegion=this._mapRegion(e.grid,e._dndRegion)),this._createDnDUI(this._moveEvent,!0),this.grid.pluginMgr.getPlugin("autoScroll").readyForAutoScroll=!0)},_mapRegion:function(e,t){if("cell"===t.type){var i,a=t.selected[0],o=this.grid.layout.cells,n=e.layout.cells,s=0;for(i=a.min.col;i<=a.max.col;++i)n[i].hidden||++s;for(i=0;s>0;++i)o[i].hidden||--s;var d=r.clone(t);for(d.selected[0].min.col=0,d.selected[0].max.col=i-1,i=a.min.col;i<=t.handle.col;++i)n[i].hidden||++s;for(i=0;s>0;++i)o[i].hidden||--s;d.handle.col=i}return t},onDraggingOut:function(e){this._externalDnd&&(this._extDnding=!1,this._destroyDnDUI(!0,!1),e&&(e._isSource=!1))},onDragIn:function(e,t){var i=!1;if(null!==this._target){var a=e._dndRegion.type,r=e._dndRegion.selected;switch(a){case"cell":this.rearranger.changeCells(e.grid,r[0],this._target);break;case"row":var o=y(r);this.rearranger.insertRows(e.grid,o,this._target)}i=!0}this._endDnd(!0),e.onDragOut&&e.onDragOut(i&&!t)},onDragOut:function(e){if(e&&!this._copyOnly){var t=this._dndRegion.type,i=this._dndRegion.selected;switch(t){case"cell":this.rearranger.clearCells(i[0]);break;case"row":this.rearranger.removeRows(y(i))}}this._endDnd(!0)},_canAccept:function(e){if(!e)return!1;var t=e._dndRegion,i=t.type;if(!this._config[i]["in"]||!e._config[i].out)return!1;var r=this.grid,o=t.selected,n=a.filter(r.layout.cells,function(e){return!e.hidden}).length,s=r.rowCount,d=!0;switch(i){case"cell":o=o[0],d=r.store.getFeatures()["dojo.data.api.Write"]&&o.max.row-o.min.row<=s&&a.filter(e.grid.layout.cells,function(e){return e.index>=o.min.col&&e.index<=o.max.col&&!e.hidden}).length<=n;case"row":if(e._allDnDItemsLoaded())return d}return!1},_allDnDItemsLoaded:function(){if(this._dndRegion){var e=this._dndRegion.type,t=this._dndRegion.selected,i=[];switch(e){case"cell":for(var r=t[0].min.row,o=t[0].max.row;o>=r;++r)i.push(r);break;case"row":i=y(t);break;default:return!1}var n=this.grid._by_idx;return a.every(i,function(e){return!!n[e]})}return!1}});return m.registerPlugin(M,{dependency:["selector","rearrange"]}),M});//# sourceMappingURL=DnD.js.map