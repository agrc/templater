//>>built
require({cache:{"url:dojox/grid/resources/Expando.html":'<div class="dojoxGridExpando"\n	><div class="dojoxGridExpandoNode" dojoAttachEvent="onclick:onToggle"\n		><div class="dojoxGridExpandoNodeInner" dojoAttachPoint="expandoInner"></div\n	></div\n></div>\n'}}),define("dojox/grid/LazyTreeGrid",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/array","dojo/query","dojo/parser","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom","dojo/keys","dojo/text!./resources/Expando.html","dijit/_Widget","dijit/_TemplatedMixin","./TreeGrid","./_Builder","./_View","./_Layout","./cells/tree","./_RowManager","./_FocusManager","./_EditManager","./DataSelection","./util"],function(e,t,i,a,r,n,o,s,d,l,h,u,c,m,f,g,p,y,v,b,_,M,k,x,w,j){var I=t("dojox.grid._LazyExpando",[f,g],{grid:null,view:null,rowIdx:-1,cellIdx:-1,level:0,itemId:"",templateString:m,onToggle:function(e){if(this.grid._treeCache.items[this.rowIdx]){this.grid.focus.setFocusIndex(this.rowIdx,this.cellIdx),this.setOpen(!this.grid._treeCache.items[this.rowIdx].opened);try{a.stop(e)}catch(t){}}},setOpen:function(e){var t=this.grid,i=t._by_idx[this.rowIdx].item;i&&t.treeModel.mayHaveChildren(i)&&!t._loading&&t._treeCache.items[this.rowIdx].opened!==e&&(t._treeCache.items[this.rowIdx].opened=e,t.expandoFetch(this.rowIdx,e),this._updateOpenState(i))},_updateOpenState:function(e){var t,i=this.grid;e&&i.treeModel.mayHaveChildren(e)?(t=i._treeCache.items[this.rowIdx].opened,this.expandoInner.innerHTML=t?"-":"+",d.toggle(this.domNode,"dojoxGridExpandoOpened",t),this.domNode.parentNode.setAttribute("aria-expanded",t)):d.remove(this.domNode,"dojoxGridExpandoOpened")},setRowNode:function(e,t,i){if(this.cellIdx<0||!this.itemId)return!1;this.view=i,this.grid=i.grid,this.rowIdx=e;var a=this.grid.isLeftToRight()?"marginLeft":"marginRight";return l.set(this.domNode.parentNode,a,1.125*this.level+"em"),this._updateOpenState(this.grid._by_idx[this.rowIdx].item),!0}}),C=t("dojox.grid._TreeGridContentBuilder",y._ContentBuilder,{generateHtml:function(e,t){var a=this.getTableArray(),n=this.grid,o=this.view,s=o.structure.cells,d=n.getItem(t),l=0,u="",c=n._treeCache.items[t]?n._treeCache.items[t].treePath:null;j.fire(this.view,"onBeforeRow",[t,s]),d&&i.isArray(c)&&(l=c.length,u=n.treeModel.mayHaveChildren(d)?"":"dojoxGridNoChildren");for(var m,f,g,p=0,y=0,v=0,b=[];m=s[y];y++)if(!m.hidden&&!m.header){a.push('<tr class="'+u+'">'),g=this._getColSpans(l),g&&r.forEach(g,function(e){for(p=0;f=m[p];p++)p>=e.start&&p<=e.end&&(v+=this._getCellWidth(m,p));b.push(v),v=0},this);var _,M,k,x,w=0;for(p=0;f=m[p];p++)if(_=f.markup,M=f.customClasses=[],k=f.customStyles=[],g&&g[w]&&p>=g[w].start&&p<=g[w].end){var I=g[w].primary||g[w].start;if(p!=I){if(p==g[w].end){w++;continue}continue}_[5]=f.formatAtLevel(d,l,t),_[1]=M.join(" "),x=h.getMarginBox(f.getHeaderNode()).w-h.getContentBox(f.getHeaderNode()).w,k=f.customStyles=["width:"+(b[w]-x)+"px"],_[3]=k.join(";"),a.push.apply(a,_)}else _[5]=f.formatAtLevel(d,l,t),_[1]=M.join(" "),_[3]=k.join(";"),a.push.apply(a,_);a.push("</tr>")}return a.push("</table>"),a.join("")},_getColSpans:function(e){var t=this.grid.colSpans;return t&&t[e]?t[e]:null},_getCellWidth:function(e,t){var i=e[t],a=i.getHeaderNode();if(i.hidden)return 0;if(t==e.length-1||r.every(e.slice(t+1),function(e){return e.hidden})){var n=h.position(e[t].view.headerContentNode.firstChild);return n.x+n.w-h.position(a).x}var o;do o=e[++t];while(o.hidden);return h.position(o.getHeaderNode()).x-h.position(a).x}});t("dojox.grid._TreeGridView",v,{_contentBuilderClass:C,postCreate:function(){this.inherited(arguments),this._expandos={},this.connect(this.grid,"_onCleanupExpandoCache","_cleanupExpandoCache")},destroy:function(){this._cleanupExpandoCache(),this.inherited(arguments)},_cleanupExpandoCache:function(e){if(e&&this._expandos[e])this._expandos[e].destroy(),delete this._expandos[e];else{var t;for(t in this._expandos)this._expandos[t].destroy();this._expandos={}}},onAfterRow:function(e,t,i){n("span.dojoxGridExpando",i).forEach(function(t){if(t&&t.parentNode){var a,r,n=this.grid._by_idx;n&&n[e]&&n[e].idty&&(a=n[e].idty,r=this._expandos[a]),r?(s.place(r.domNode,t,"replace"),r.itemId=t.getAttribute("itemId"),r.cellIdx=parseInt(t.getAttribute("cellIdx"),10),isNaN(r.cellIdx)&&(r.cellIdx=-1)):(r=o.parse(t.parentNode)[0],a&&(this._expandos[a]=r)),r.setRowNode(e,i,this)||r.domNode.parentNode.removeChild(r.domNode),s.destroy(t)}},this),this.inherited(arguments)},updateRow:function(e){var t,i=this.grid;i.keepSelection&&(t=i.getItem(e),t&&i.selection.preserver._reSelectById(t,e)),this.inherited(arguments)}});var T=i.mixin(i.clone(_),{formatAtLevel:function(t,i,a){if(!t)return this.formatIndexes(a,t,i);var r,n="",o="";return this.isCollapsable&&this.grid.store.isItem(t)&&(o="<span "+e._scopeName+'Type="dojox.grid._LazyExpando" level="'+i+'" class="dojoxGridExpando" itemId="'+this.grid.store.getIdentity(t)+'" cellIdx="'+this.index+'"></span>'),r=this.formatIndexes(a,t,i),n=""!==o?"<div>"+o+r+"</div>":r},formatIndexes:function(e,t,i){var a=this.grid.edit.info,r=this.get?this.get(e,t):this.value||this.defaultValue;if(this.editable&&(this.alwaysEditing||a.rowIndex===e&&a.cell===this))return this.formatEditing(r,e);var n=this.textDir||this.grid.textDir,o=this._defaultFormat(r,[r,e,i,this]);return n&&this._enforceTextDirWithUcc&&(o=this._enforceTextDirWithUcc(n,o)),o}}),F=t("dojox.grid._LazyTreeLayout",b,{setStructure:function(e){var t=this.grid,i=e;t&&!r.every(i,function(e){return!!e.cells})&&(i=arguments[0]=[{cells:[i]}]),1===i.length&&1===i[0].cells.length&&(i[0].type="dojox.grid._TreeGridView",this._isCollapsable=!0,i[0].cells[0][this.grid.expandoCell].isCollapsable=!0),this.inherited(arguments)},addCellDef:function(e,t,a){var r=this.inherited(arguments);return i.mixin(r,T)}}),S=t("dojox.grid._LazyTreeGridCache",null,{constructor:function(){this.items=[]},getSiblingIndex:function(e,t){for(var i,a=e-1,r=0;a>=0;a--)if(i=this.items[a]?this.items[a].treePath:[],i.join("/")===t.join("/"))r++;else if(i.length<t.length)break;return r},removeChildren:function(e){for(var t,i,a=e+1,r=this.items[e]?this.items[e].treePath:[];a<this.items.length&&(i=this.items[a]?this.items[a].treePath:[],!(i.join("/")===r.join("/")||i.length<=r.length));a++);return t=a-(e+1),this.items.splice(e+1,t),t}}),A=t("dojox.grid.LazyTreeGrid",p,{_layoutClass:F,_size:0,treeModel:null,defaultState:null,colSpans:null,postCreate:function(){if(this._setState(),this.inherited(arguments),this._treeCache||(this._treeCache=new S),!(this.treeModel&&this.treeModel instanceof dijit.tree.ForestStoreModel))throw new Error("dojox.grid.LazyTreeGrid: must be used with a treeModel which is an instance of dijit.tree.ForestStoreModel");d.add(this.domNode,"dojoxGridTreeModel"),u.setSelectable(this.domNode,this.selectable)},createManagers:function(){this.rows=new M(this),this.focus=new k(this),this.edit=new x(this)},createSelection:function(){this.selection=new w(this)},setModel:function(e){e&&(this._setModel(e),this._cleanup(),this._refresh(!0))},setStore:function(e,t,i){e&&(this._setQuery(t,i),this.treeModel.query=t,this.treeModel.store=e,this.treeModel.root.children=[],this.setModel(this.treeModel))},onSetState:function(){},_setState:function(){this.defaultState&&(this._treeCache=this.defaultState.cache,this.sortInfo=this.defaultState.sortInfo||0,this.query=this.defaultState.query||this.query,this._lastScrollTop=this.defaultState.scrollTop,this.keepSelection?this.selection.preserver._selectedById=this.defaultState.selection:this.selection.selected=this.defaultState.selection||[],this.onSetState())},getState:function(){var e=this,t=this.keepSelection?this.selection.preserver._selectedById:this.selection.selected;return{cache:i.clone(e._treeCache),query:i.clone(e.query),sortInfo:i.clone(e.sortInfo),scrollTop:i.clone(e.scrollTop),selection:i.clone(t)}},_setQuery:function(e,t){this.inherited(arguments),this.treeModel.query=e},filter:function(e,t){this._cleanup(),this.inherited(arguments)},destroy:function(){this._cleanup(),this.inherited(arguments)},expand:function(e){this._fold(e,!0)},collapse:function(e){this._fold(e,!1)},refresh:function(e){e||this._cleanup(),this._refresh(!0)},_cleanup:function(){this._treeCache.items=[],this._onCleanupExpandoCache()},setSortIndex:function(e,t){this.canSort(e+1)&&this._cleanup(),this.inherited(arguments)},_refresh:function(e){this._clearData(),this.updateRowCount(this._size),this._fetch(0,!0)},render:function(){this.inherited(arguments),this.setScrollTop(this.scrollTop)},_onNew:function(e,t){var i=t&&this.store.isItem(t.item)&&r.some(this.treeModel.childrenAttrs,function(e){return e===t.attribute}),a=this._treeCache.items,n=this._by_idx;if(i){for(var o=t.item,s=this.store.getIdentity(o),d=-1,l=0;l<n.length;l++)if(s===n[l].idty){d=l;break}if(d>=0)if(a[d]&&a[d].opened){for(var h=a[d].treePath,u=d+1;u<a.length&&!(a[u].treePath.length<=h.length);u++);var c=h.slice();c.push(s),this._treeCache.items.splice(u,0,{opened:!1,treePath:c});var m=this.store.getIdentity(e);this._by_idty[m]={idty:m,item:e},n.splice(u,0,this._by_idty[m]),this._size+=1,this.updateRowCount(this._size),this._updateRenderedRows(u)}else this.updateRow(d)}else a.push({opened:!1,treePath:[]}),this._size+=1,this.inherited(arguments)},_onDelete:function(e){for(var t=0,i=-1,a=this.store.getIdentity(e);t<this._by_idx.length;t++)if(a===this._by_idx[t].idty){i=t;break}if(i>=0){var r,n=this._treeCache.items,o=n[i]?n[i].treePath:[],s=1;for(t=i+1;t<this._size&&(r=n[t]?n[t].treePath:[],!(n[t].treePath.length<=o.length));t++,s++);n.splice(i,s),this._onCleanupExpandoCache(a),this._by_idx.splice(i,s),this._size-=s,this.updateRowCount(this._size),this._updateRenderedRows(i)}},_onCleanupExpandoCache:function(e){},_fetch:function(e,t){this._loading||(this._loading=!0),e=e||0;var i=this._size-e>0?Math.min(this.rowsPerPage,this._size-e):this.rowsPerPage,a=0,r=[];for(this._reqQueueLen=0;i>a&&this._by_idx[e+a];a++)r.push(this._by_idx[e+a].item);if(r.length===i)this._reqQueueLen=1,this._onFetchBegin(this._size,{startRowIdx:e,count:i}),this._onFetchComplete(r,{startRowIdx:e,count:i});else{var n,o,s=1,d=this._treeCache.items,l=d[e]?d[e].treePath:[];for(a=1;i>a;a++)n=d[e+s-1]?d[e+s-1].treePath.length:0,o=d[e+s]?d[e+s].treePath.length:0,n!==o?(this._reqQueueLen++,this._fetchItems({startRowIdx:e,count:s,treePath:l}),e+=s,s=1,l=d[e]?d[e].treePath:0):s++;this._reqQueueLen++,this._fetchItems({startRowIdx:e,count:s,treePath:l})}},_fetchItems:function(e){if(!this._pending_requests[e.startRowIdx]){this.showMessage(this.loadingMessage),this._pending_requests[e.startRowIdx]=!0;var t=i.hitch(this,"_onFetchError"),a=this._treeCache.getSiblingIndex(e.startRowIdx,e.treePath);if(0===e.treePath.length)this.store.fetch({start:a,startRowIdx:e.startRowIdx,treePath:e.treePath,count:e.count,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,onBegin:i.hitch(this,"_onFetchBegin"),onComplete:i.hitch(this,"_onFetchComplete"),onError:i.hitch(this,"_onFetchError")});else{var r,n=e.treePath[e.treePath.length-1],o={start:a,startRowIdx:e.startRowIdx,treePath:e.treePath,count:e.count,parentId:n,sort:this.getSortProps()},s=this,d=function(){var e=i.hitch(s,"_onFetchComplete");1==arguments.length?e.apply(s,[arguments[0],o]):e.apply(s,arguments)};this._by_idty[n]?(r=this._by_idty[n].item,this.treeModel.getChildren(r,d,t,o)):this.store.fetchItemByIdentity({identity:n,onItem:function(e){s.treeModel.getChildren(e,d,t,o)},onError:t})}}},_onFetchBegin:function(e,t){0===this._treeCache.items.length&&(this._size=parseInt(e,10)),e=this._size,this.inherited(arguments)},_onFetchComplete:function(e,t){var a=t.startRowIdx,r=t.count,n=e.length<=r?0:t.start,o=t.treePath||[];if(i.isArray(e)&&e.length>0){for(var s=0,d=Math.min(r,e.length);d>s;s++)this._treeCache.items[a+s]||(this._treeCache.items[a+s]={opened:!1,treePath:o}),this._by_idx[a+s]||this._addItem(e[n+s],a+s,!0);this.updateRows(a,d)}0==this._size?this.showMessage(this.noDataMessage):this.showMessage(),this._pending_requests[a]=!1,this._reqQueueLen--,this._loading&&0===this._reqQueueLen&&(this._loading=!1,this._lastScrollTop&&this.setScrollTop(this._lastScrollTop))},expandoFetch:function(e,t){if(!this._loading&&this._by_idx[e]){this._loading=!0,this._toggleLoadingClass(e,!0),this.expandoRowIndex=e;var a=this._by_idx[e].item;if(t){var r={start:0,count:this.rowsPerPage,parentId:this.store.getIdentity(this._by_idx[e].item),sort:this.getSortProps()};this.treeModel.getChildren(a,i.hitch(this,"_onExpandoComplete"),i.hitch(this,"_onFetchError"),r)}else{var n=this._treeCache.removeChildren(e);this._by_idx.splice(e+1,n),this._bop=this._eop=-1,this._size-=n,this.updateRowCount(this._size),this._updateRenderedRows(e+1),this._toggleLoadingClass(e,!1),this._loading&&(this._loading=!1),this.focus._delayedCellFocus()}}},_onExpandoComplete:function(e,t,i){i=isNaN(i)?e.length:parseInt(i,10);var a=this._treeCache.items[this.expandoRowIndex].treePath.slice(0);a.push(this.store.getIdentity(this._by_idx[this.expandoRowIndex].item));for(var r,n=1;i>=n;n++)this._treeCache.items.splice(this.expandoRowIndex+n,0,{treePath:a,opened:!1});for(this._size+=i,this.updateRowCount(this._size),n=0;i>n;n++)e[n]?(r=this.store.getIdentity(e[n]),this._by_idty[r]={idty:r,item:e[n]},this._by_idx.splice(this.expandoRowIndex+1+n,0,this._by_idty[r])):this._by_idx.splice(this.expandoRowIndex+1+n,0,null);this._updateRenderedRows(this.expandoRowIndex+1),this._toggleLoadingClass(this.expandoRowIndex,!1),this.stateChangeNode=null,this._loading&&(this._loading=!1),this.autoHeight===!0&&this._resize(),this.focus._delayedCellFocus()},styleRowNode:function(e,t){t&&this.rows.styleRowNode(e,t)},onStyleRow:function(e){return this.layout._isCollapsable?(e.customClasses+=(e.odd?" dojoxGridRowOdd":"")+(e.selected?" dojoxGridRowSelected":"")+(e.over?" dojoxGridRowOver":""),this.focus.styleRow(e),void this.edit.styleRow(e)):void this.inherited(arguments)},onKeyDown:function(e){if(!e.altKey&&!e.metaKey){var t=dijit.findWidgets(e.target)[0];e.keyCode===c.ENTER&&t instanceof I&&t.onToggle(),this.inherited(arguments)}},_toggleLoadingClass:function(e,t){var i,a=this.views.views,r=a[a.length-1].getRowNode(e);r&&(i=n(".dojoxGridExpando",r)[0],i&&d.toggle(i,"dojoxGridExpandoLoading",t))},_updateRenderedRows:function(e){r.forEach(this.scroller.stack,function(t){t*this.rowsPerPage>=e?this.updateRows(t*this.rowsPerPage,this.rowsPerPage):(t+1)*this.rowsPerPage>=e&&this.updateRows(e,(t+1)*this.rowsPerPage-e+1)},this)},_fold:function(e,t){var i=-1,a=0,r=this._by_idx,n=this._by_idty[e];if(n&&n.item&&this.treeModel.mayHaveChildren(n.item)){for(;a<r.length;a++)if(r[a]&&r[a].idty===e){i=a;break}if(i>=0){var o=this.views.views[this.views.views.length-1].getRowNode(i);if(o){var s=dijit.findWidgets(o)[0];s&&s.setOpen(t)}}}}});return A.markupFactory=function(e,t,i,a){return p.markupFactory(e,t,i,a)},A});//# sourceMappingURL=LazyTreeGrid.js.map