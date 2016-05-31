//>>built
require({cache:{"url:dojox/grid/resources/Expando.html":'<div class="dojoxGridExpando"\n	><div class="dojoxGridExpandoNode" dojoAttachEvent="onclick:onToggle"\n		><div class="dojoxGridExpandoNodeInner" dojoAttachPoint="expandoInner"></div\n	></div\n></div>\n'}}),define("dojox/grid/LazyTreeGrid",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/array","dojo/query","dojo/parser","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom","dojo/keys","dojo/text!./resources/Expando.html","dijit/_Widget","dijit/_TemplatedMixin","./TreeGrid","./_Builder","./_View","./_Layout","./cells/tree","./_RowManager","./_FocusManager","./_EditManager","./DataSelection","./util"],function(e,t,i,a,r,o,n,s,d,l,h,u,c,m,f,g,p,y,v,b,M,_,w,x,k,j){var I=t("dojox.grid._LazyExpando",[f,g],{grid:null,view:null,rowIdx:-1,cellIdx:-1,level:0,itemId:"",templateString:m,onToggle:function(e){if(this.grid._treeCache.items[this.rowIdx]){this.grid.focus.setFocusIndex(this.rowIdx,this.cellIdx),this.setOpen(!this.grid._treeCache.items[this.rowIdx].opened);try{a.stop(e)}catch(t){}}},setOpen:function(e){var t=this.grid,i=t._by_idx[this.rowIdx].item;i&&t.treeModel.mayHaveChildren(i)&&!t._loading&&t._treeCache.items[this.rowIdx].opened!==e&&(t._treeCache.items[this.rowIdx].opened=e,t.expandoFetch(this.rowIdx,e),this._updateOpenState(i))},_updateOpenState:function(e){var t,i=this.grid;e&&i.treeModel.mayHaveChildren(e)?(t=i._treeCache.items[this.rowIdx].opened,this.expandoInner.innerHTML=t?"-":"+",d.toggle(this.domNode,"dojoxGridExpandoOpened",t),this.domNode.parentNode.setAttribute("aria-expanded",t)):d.remove(this.domNode,"dojoxGridExpandoOpened")},setRowNode:function(e,t,i){if(this.cellIdx<0||!this.itemId)return!1;this.view=i,this.grid=i.grid,this.rowIdx=e;var a=this.grid.isLeftToRight()?"marginLeft":"marginRight";return l.set(this.domNode.parentNode,a,1.125*this.level+"em"),this._updateOpenState(this.grid._by_idx[this.rowIdx].item),!0}}),F=t("dojox.grid._TreeGridContentBuilder",y._ContentBuilder,{generateHtml:function(e,t){var a=this.getTableArray(),o=this.grid,n=this.view,s=n.structure.cells,d=o.getItem(t),l=0,u="",c=o._treeCache.items[t]?o._treeCache.items[t].treePath:null;j.fire(this.view,"onBeforeRow",[t,s]),d&&i.isArray(c)&&(l=c.length,u=o.treeModel.mayHaveChildren(d)?"":"dojoxGridNoChildren");for(var m,f,g,p=0,y=0,v=0,b=[];m=s[y];y++)if(!m.hidden&&!m.header){a.push('<tr class="'+u+'">'),g=this._getColSpans(l),g&&r.forEach(g,function(e){for(p=0;f=m[p];p++)p>=e.start&&p<=e.end&&(v+=this._getCellWidth(m,p));b.push(v),v=0},this);var M,_,w,x,k=0;for(p=0;f=m[p];p++)if(M=f.markup,_=f.customClasses=[],w=f.customStyles=[],g&&g[k]&&p>=g[k].start&&p<=g[k].end){var I=g[k].primary||g[k].start;if(p!=I){if(p==g[k].end){k++;continue}continue}M[5]=f.formatAtLevel(d,l,t),M[1]=_.join(" "),x=h.getMarginBox(f.getHeaderNode()).w-h.getContentBox(f.getHeaderNode()).w,w=f.customStyles=["width:"+(b[k]-x)+"px"],M[3]=w.join(";"),a.push.apply(a,M)}else M[5]=f.formatAtLevel(d,l,t),M[1]=_.join(" "),M[3]=w.join(";"),a.push.apply(a,M);a.push("</tr>")}return a.push("</table>"),a.join("")},_getColSpans:function(e){var t=this.grid.colSpans;return t&&t[e]?t[e]:null},_getCellWidth:function(e,t){var i=e[t],a=i.getHeaderNode();if(i.hidden)return 0;if(t==e.length-1||r.every(e.slice(t+1),function(e){return e.hidden})){var o=h.position(e[t].view.headerContentNode.firstChild);return o.x+o.w-h.position(a).x}var n;do n=e[++t];while(n.hidden);return h.position(n.getHeaderNode()).x-h.position(a).x}});t("dojox.grid._TreeGridView",v,{_contentBuilderClass:F,postCreate:function(){this.inherited(arguments),this._expandos={},this.connect(this.grid,"_onCleanupExpandoCache","_cleanupExpandoCache")},destroy:function(){this._cleanupExpandoCache(),this.inherited(arguments)},_cleanupExpandoCache:function(e){if(e&&this._expandos[e])this._expandos[e].destroy(),delete this._expandos[e];else{var t;for(t in this._expandos)this._expandos[t].destroy();this._expandos={}}},onAfterRow:function(e,t,i){o("span.dojoxGridExpando",i).forEach(function(t){if(t&&t.parentNode){var a,r,o=this.grid._by_idx;o&&o[e]&&o[e].idty&&(a=o[e].idty,r=this._expandos[a]),r?(s.place(r.domNode,t,"replace"),r.itemId=t.getAttribute("itemId"),r.cellIdx=parseInt(t.getAttribute("cellIdx"),10),isNaN(r.cellIdx)&&(r.cellIdx=-1)):(r=n.parse(t.parentNode)[0],a&&(this._expandos[a]=r)),r.setRowNode(e,i,this)||r.domNode.parentNode.removeChild(r.domNode),s.destroy(t)}},this),this.inherited(arguments)},updateRow:function(e){var t,i=this.grid;i.keepSelection&&(t=i.getItem(e),t&&i.selection.preserver._reSelectById(t,e)),this.inherited(arguments)}});var T=i.mixin(i.clone(M),{formatAtLevel:function(t,i,a){if(!t)return this.formatIndexes(a,t,i);var r,o="",n="";return this.isCollapsable&&this.grid.store.isItem(t)&&(n="<span "+e._scopeName+'Type="dojox.grid._LazyExpando" level="'+i+'" class="dojoxGridExpando" itemId="'+this.grid.store.getIdentity(t)+'" cellIdx="'+this.index+'"></span>'),r=this.formatIndexes(a,t,i),o=""!==n?"<div>"+n+r+"</div>":r},formatIndexes:function(e,t,i){var a=this.grid.edit.info,r=this.get?this.get(e,t):this.value||this.defaultValue;if(this.editable&&(this.alwaysEditing||a.rowIndex===e&&a.cell===this))return this.formatEditing(r,e);var o=this.textDir||this.grid.textDir,n=this._defaultFormat(r,[r,e,i,this]);return o&&this._enforceTextDirWithUcc&&(n=this._enforceTextDirWithUcc(o,n)),n}}),C=t("dojox.grid._LazyTreeLayout",b,{setStructure:function(e){var t=this.grid,i=e;t&&!r.every(i,function(e){return!!e.cells})&&(i=arguments[0]=[{cells:[i]}]),1===i.length&&1===i[0].cells.length&&(i[0].type="dojox.grid._TreeGridView",this._isCollapsable=!0,i[0].cells[0][this.grid.expandoCell].isCollapsable=!0),this.inherited(arguments)},addCellDef:function(e,t,a){var r=this.inherited(arguments);return i.mixin(r,T)}}),A=t("dojox.grid._LazyTreeGridCache",null,{constructor:function(){this.items=[]},getSiblingIndex:function(e,t){for(var i,a=e-1,r=0;a>=0;a--)if(i=this.items[a]?this.items[a].treePath:[],i.join("/")===t.join("/"))r++;else if(i.length<t.length)break;return r},removeChildren:function(e){for(var t,i,a=e+1,r=this.items[e]?this.items[e].treePath:[];a<this.items.length&&(i=this.items[a]?this.items[a].treePath:[],!(i.join("/")===r.join("/")||i.length<=r.length));a++);return t=a-(e+1),this.items.splice(e+1,t),t}}),S=t("dojox.grid.LazyTreeGrid",p,{_layoutClass:C,_size:0,treeModel:null,defaultState:null,colSpans:null,postCreate:function(){if(this._setState(),this.inherited(arguments),this._treeCache||(this._treeCache=new A),!(this.treeModel&&this.treeModel instanceof dijit.tree.ForestStoreModel))throw new Error("dojox.grid.LazyTreeGrid: must be used with a treeModel which is an instance of dijit.tree.ForestStoreModel");d.add(this.domNode,"dojoxGridTreeModel"),u.setSelectable(this.domNode,this.selectable)},createManagers:function(){this.rows=new _(this),this.focus=new w(this),this.edit=new x(this)},createSelection:function(){this.selection=new k(this)},setModel:function(e){e&&(this._setModel(e),this._cleanup(),this._refresh(!0))},setStore:function(e,t,i){e&&(this._setQuery(t,i),this.treeModel.query=t,this.treeModel.store=e,this.treeModel.root.children=[],this.setModel(this.treeModel))},onSetState:function(){},_setState:function(){this.defaultState&&(this._treeCache=this.defaultState.cache,this.sortInfo=this.defaultState.sortInfo||0,this.query=this.defaultState.query||this.query,this._lastScrollTop=this.defaultState.scrollTop,this.keepSelection?this.selection.preserver._selectedById=this.defaultState.selection:this.selection.selected=this.defaultState.selection||[],this.onSetState())},getState:function(){var e=this,t=this.keepSelection?this.selection.preserver._selectedById:this.selection.selected;return{cache:i.clone(e._treeCache),query:i.clone(e.query),sortInfo:i.clone(e.sortInfo),scrollTop:i.clone(e.scrollTop),selection:i.clone(t)}},_setQuery:function(e,t){this.inherited(arguments),this.treeModel.query=e},filter:function(e,t){this._cleanup(),this.inherited(arguments)},destroy:function(){this._cleanup(),this.inherited(arguments)},expand:function(e){this._fold(e,!0)},collapse:function(e){this._fold(e,!1)},refresh:function(e){e||this._cleanup(),this._refresh(!0)},_cleanup:function(){this._treeCache.items=[],this._onCleanupExpandoCache()},setSortIndex:function(e,t){this.canSort(e+1)&&this._cleanup(),this.inherited(arguments)},_refresh:function(e){this._clearData(),this.updateRowCount(this._size),this._fetch(0,!0)},render:function(){this.inherited(arguments),this.setScrollTop(this.scrollTop)},_onNew:function(e,t){var i=t&&this.store.isItem(t.item)&&r.some(this.treeModel.childrenAttrs,function(e){return e===t.attribute}),a=this._treeCache.items,o=this._by_idx;if(i){for(var n=t.item,s=this.store.getIdentity(n),d=-1,l=0;l<o.length;l++)if(s===o[l].idty){d=l;break}if(d>=0)if(a[d]&&a[d].opened){for(var h=a[d].treePath,u=d+1;u<a.length&&!(a[u].treePath.length<=h.length);u++);var c=h.slice();c.push(s),this._treeCache.items.splice(u,0,{opened:!1,treePath:c});var m=this.store.getIdentity(e);this._by_idty[m]={idty:m,item:e},o.splice(u,0,this._by_idty[m]),this._size+=1,this.updateRowCount(this._size),this._updateRenderedRows(u)}else this.updateRow(d)}else a.push({opened:!1,treePath:[]}),this._size+=1,this.inherited(arguments)},_onDelete:function(e){for(var t=0,i=-1,a=this.store.getIdentity(e);t<this._by_idx.length;t++)if(a===this._by_idx[t].idty){i=t;break}if(i>=0){var r,o=this._treeCache.items,n=o[i]?o[i].treePath:[],s=1;for(t=i+1;t<this._size&&(r=o[t]?o[t].treePath:[],!(o[t].treePath.length<=n.length));t++,s++);o.splice(i,s),this._onCleanupExpandoCache(a),this._by_idx.splice(i,s),this._size-=s,this.updateRowCount(this._size),this._updateRenderedRows(i)}},_onCleanupExpandoCache:function(e){},_fetch:function(e,t){this._loading||(this._loading=!0),e=e||0;var i=this._size-e>0?Math.min(this.rowsPerPage,this._size-e):this.rowsPerPage,a=0,r=[];for(this._reqQueueLen=0;i>a&&this._by_idx[e+a];a++)r.push(this._by_idx[e+a].item);if(r.length===i)this._reqQueueLen=1,this._onFetchBegin(this._size,{startRowIdx:e,count:i}),this._onFetchComplete(r,{startRowIdx:e,count:i});else{var o,n,s=1,d=this._treeCache.items,l=d[e]?d[e].treePath:[];for(a=1;i>a;a++)o=d[e+s-1]?d[e+s-1].treePath.length:0,n=d[e+s]?d[e+s].treePath.length:0,o!==n?(this._reqQueueLen++,this._fetchItems({startRowIdx:e,count:s,treePath:l}),e+=s,s=1,l=d[e]?d[e].treePath:0):s++;this._reqQueueLen++,this._fetchItems({startRowIdx:e,count:s,treePath:l})}},_fetchItems:function(e){if(!this._pending_requests[e.startRowIdx]){this.showMessage(this.loadingMessage),this._pending_requests[e.startRowIdx]=!0;var t=i.hitch(this,"_onFetchError"),a=this._treeCache.getSiblingIndex(e.startRowIdx,e.treePath);if(0===e.treePath.length)this.store.fetch({start:a,startRowIdx:e.startRowIdx,treePath:e.treePath,count:e.count,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,onBegin:i.hitch(this,"_onFetchBegin"),onComplete:i.hitch(this,"_onFetchComplete"),onError:i.hitch(this,"_onFetchError")});else{var r,o=e.treePath[e.treePath.length-1],n={start:a,startRowIdx:e.startRowIdx,treePath:e.treePath,count:e.count,parentId:o,sort:this.getSortProps()},s=this,d=function(){var e=i.hitch(s,"_onFetchComplete");1==arguments.length?e.apply(s,[arguments[0],n]):e.apply(s,arguments)};this._by_idty[o]?(r=this._by_idty[o].item,this.treeModel.getChildren(r,d,t,n)):this.store.fetchItemByIdentity({identity:o,onItem:function(e){s.treeModel.getChildren(e,d,t,n)},onError:t})}}},_onFetchBegin:function(e,t){0===this._treeCache.items.length&&(this._size=parseInt(e,10)),e=this._size,this.inherited(arguments)},_onFetchComplete:function(e,t){var a=t.startRowIdx,r=t.count,o=e.length<=r?0:t.start,n=t.treePath||[];if(i.isArray(e)&&e.length>0){for(var s=0,d=Math.min(r,e.length);d>s;s++)this._treeCache.items[a+s]||(this._treeCache.items[a+s]={opened:!1,treePath:n}),this._by_idx[a+s]||this._addItem(e[o+s],a+s,!0);this.updateRows(a,d)}0==this._size?this.showMessage(this.noDataMessage):this.showMessage(),this._pending_requests[a]=!1,this._reqQueueLen--,this._loading&&0===this._reqQueueLen&&(this._loading=!1,this._lastScrollTop&&this.setScrollTop(this._lastScrollTop))},expandoFetch:function(e,t){if(!this._loading&&this._by_idx[e]){this._loading=!0,this._toggleLoadingClass(e,!0),this.expandoRowIndex=e;var a=this._by_idx[e].item;if(t){var r={start:0,count:this.rowsPerPage,parentId:this.store.getIdentity(this._by_idx[e].item),sort:this.getSortProps()};this.treeModel.getChildren(a,i.hitch(this,"_onExpandoComplete"),i.hitch(this,"_onFetchError"),r)}else{var o=this._treeCache.removeChildren(e);this._by_idx.splice(e+1,o),this._bop=this._eop=-1,this._size-=o,this.updateRowCount(this._size),this._updateRenderedRows(e+1),this._toggleLoadingClass(e,!1),this._loading&&(this._loading=!1),this.focus._delayedCellFocus()}}},_onExpandoComplete:function(e,t,i){i=isNaN(i)?e.length:parseInt(i,10);var a=this._treeCache.items[this.expandoRowIndex].treePath.slice(0);a.push(this.store.getIdentity(this._by_idx[this.expandoRowIndex].item));for(var r,o=1;i>=o;o++)this._treeCache.items.splice(this.expandoRowIndex+o,0,{treePath:a,opened:!1});for(this._size+=i,this.updateRowCount(this._size),o=0;i>o;o++)e[o]?(r=this.store.getIdentity(e[o]),this._by_idty[r]={idty:r,item:e[o]},this._by_idx.splice(this.expandoRowIndex+1+o,0,this._by_idty[r])):this._by_idx.splice(this.expandoRowIndex+1+o,0,null);this._updateRenderedRows(this.expandoRowIndex+1),this._toggleLoadingClass(this.expandoRowIndex,!1),this.stateChangeNode=null,this._loading&&(this._loading=!1),this.autoHeight===!0&&this._resize(),this.focus._delayedCellFocus()},styleRowNode:function(e,t){t&&this.rows.styleRowNode(e,t)},onStyleRow:function(e){return this.layout._isCollapsable?(e.customClasses+=(e.odd?" dojoxGridRowOdd":"")+(e.selected?" dojoxGridRowSelected":"")+(e.over?" dojoxGridRowOver":""),this.focus.styleRow(e),void this.edit.styleRow(e)):void this.inherited(arguments)},onKeyDown:function(e){if(!e.altKey&&!e.metaKey){var t=dijit.findWidgets(e.target)[0];e.keyCode===c.ENTER&&t instanceof I&&t.onToggle(),this.inherited(arguments)}},_toggleLoadingClass:function(e,t){var i,a=this.views.views,r=a[a.length-1].getRowNode(e);r&&(i=o(".dojoxGridExpando",r)[0],i&&d.toggle(i,"dojoxGridExpandoLoading",t))},_updateRenderedRows:function(e){r.forEach(this.scroller.stack,function(t){t*this.rowsPerPage>=e?this.updateRows(t*this.rowsPerPage,this.rowsPerPage):(t+1)*this.rowsPerPage>=e&&this.updateRows(e,(t+1)*this.rowsPerPage-e+1)},this)},_fold:function(e,t){var i=-1,a=0,r=this._by_idx,o=this._by_idty[e];if(o&&o.item&&this.treeModel.mayHaveChildren(o.item)){for(;a<r.length;a++)if(r[a]&&r[a].idty===e){i=a;break}if(i>=0){var n=this.views.views[this.views.views.length-1].getRowNode(i);if(n){var s=dijit.findWidgets(n)[0];s&&s.setOpen(t)}}}}});return S.markupFactory=function(e,t,i,a){return p.markupFactory(e,t,i,a)},S});//# sourceMappingURL=LazyTreeGrid.js.map