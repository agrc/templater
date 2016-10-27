//>>built
define("dojox/grid/TreeGrid",["dojo/_base/kernel","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/keys","dijit/tree/ForestStoreModel","./DataGrid","./_Layout","./_FocusManager","./_RowManager","./_EditManager","./TreeSelection","./cells/tree","./_TreeView"],function(e,t,a,i,r,o,n,s,l,d,u,h,m,c,f,g,p,y){e.experimental("dojox.grid.TreeGrid");var v=a("dojox.grid._TreeAggregator",null,{cells:[],grid:null,childFields:[],constructor:function(e){this.cells=e.cells||[],this.childFields=e.childFields||[],this.grid=e.grid,this.store=this.grid.store},_cacheValue:function(e,t,a){return e[t]=a,a},clearSubtotalCache:function(){this.store&&delete this.store._cachedAggregates},cnt:function(e,t,a){var r=0,o=this.store,n=this.childFields;if(n[t]){var s=o.getValues(a,n[t]);e.index<=t+1?r=s.length:i.forEach(s,function(a){r+=this.getForCell(e,t+1,a,"cnt")},this)}else r=1;return r},sum:function(e,t,a){var r=0,o=this.store,n=this.childFields;return n[t]?i.forEach(o.getValues(a,n[t]),function(a){r+=this.getForCell(e,t+1,a,"sum")},this):r+=o.getValue(a,e.field),r},value:function(e,t,a){},getForCell:function(e,t,a,i){var r=this.store;if(!r||!a||!r.isItem(a))return"";var o=r._cachedAggregates=r._cachedAggregates||{},n=r.getIdentity(a),s=o[n]=o[n]||[];e.getOpenState||(e=this.grid.getCell(e.layoutIndex+t+1));var l=e.index,d=s[l]=s[l]||{};i=i||(e.parentCell?e.parentCell.aggregate:"sum")||"sum";var u=e.field;u==r.getLabelAttributes()[0]&&(i="cnt");var h=d[i]=d[i]||[];if(void 0!=h[t])return h[t];var m=(e.parentCell&&e.parentCell.itemAggregates?e.parentCell.itemAggregates[e.idxInParent]:"")||"";return m&&r.hasAttribute(a,m)?this._cacheValue(h,t,r.getValue(a,m)):m?this._cacheValue(h,t,0):this._cacheValue(h,t,this[i](e,t,a))}}),b=a("dojox.grid._TreeLayout",m,{_isCollapsable:!1,_getInternalStructure:function(e){var t=this.grid,a=e,o=a[0].cells[0],n={type:"dojox.grid._TreeView",cells:[[]]},s=[],l=0,d=function(e,t){var a=e.children,o=function(a,i){var o,n={};for(o in a)n[o]=a[o];return n=r.mixin(n,{level:t,idxInParent:t>0?i:-1,parentCell:t>0?e:null})},n=[];return i.forEach(a,function(e,a){if("children"in e){s.push(e.field);var i=n[n.length-1];i.isCollapsable=!0,e.level=t,n=n.concat(d(e,t+1))}else n.push(o(e,a))}),l=Math.max(l,t),n},u={children:o,itemAggregates:[]};return n.cells[0]=d(u,0),t.aggregator=new v({cells:n.cells[0],grid:t,childFields:s}),t.scroller&&t.defaultOpen&&(t.scroller.defaultRowHeight=t.scroller._origDefaultRowHeight*(2*l+1)),[n]},setStructure:function(e){var t=e,a=this.grid;if(a&&a.treeModel&&!i.every(t,function(e){return"cells"in e})&&(t=arguments[0]=[{cells:[t]}]),1==t.length&&1==t[0].cells.length)if(a&&a.treeModel)t[0].type="dojox.grid._TreeView",this._isCollapsable=!0,t[0].cells[0][this.grid.treeModel?this.grid.expandoCell:0].isCollapsable=!0;else{var r=i.filter(t[0].cells[0],function(e){return"children"in e});1===r.length&&(this._isCollapsable=!0)}!this._isCollapsable||a&&a.treeModel||(arguments[0]=this._getInternalStructure(t)),this.inherited(arguments)},addCellDef:function(e,t,a){var i=this.inherited(arguments);return r.mixin(i,y)}}),k=a("dojox.grid.TreePath",null,{level:0,_str:"",_arr:null,grid:null,store:null,cell:null,item:null,constructor:function(e,t){r.isString(e)?(this._str=e,this._arr=i.map(e.split("/"),function(e){return parseInt(e,10)})):r.isArray(e)?(this._str=e.join("/"),this._arr=e.slice(0)):"number"==typeof e?(this._str=String(e),this._arr=[e]):(this._str=e._str,this._arr=e._arr.slice(0)),this.level=this._arr.length-1,this.grid=t,this.store=this.grid.store,t.treeModel?this.cell=t.layout.cells[t.expandoCell]:this.cell=t.layout.cells[this.level]},item:function(){return this._item||(this._item=this.grid.getItem(this._arr)),this._item},compare:function(e){if(r.isString(e)||r.isArray(e)){if(this._str==e)return 0;if(e.join&&this._str==e.join("/"))return 0;e=new k(e,this.grid)}else if(e instanceof k&&this._str==e._str)return 0;for(var t=0,a=this._arr.length<e._arr.length?this._arr.length:e._arr.length;a>t;t++){if(this._arr[t]<e._arr[t])return-1;if(this._arr[t]>e._arr[t])return 1}return this._arr.length<e._arr.length?-1:this._arr.length>e._arr.length?1:0},isOpen:function(){return this.cell.openStates&&this.cell.getOpenState(this.item())},previous:function(){var e=this._arr.slice(0);if("0"==this._str)return null;var t=e.length-1;if(0===e[t])return e.pop(),new k(e,this.grid);e[t]--;var a=new k(e,this.grid);return a.lastChild(!0)},next:function(){var e=this._arr.slice(0);if(this.isOpen())e.push(0);else{e[e.length-1]++;for(var t=this.level;t>=0;t--){var a=this.grid.getItem(e.slice(0,t+1));if(t>0)a||(e.pop(),e[t-1]++);else if(!a)return null}}return new k(e,this.grid)},children:function(e){if(!this.isOpen()&&!e)return null;var t=[],a=this.grid.treeModel;if(a){var r=this.item(),o=a.store;if(!a.mayHaveChildren(r))return null;i.forEach(a.childrenAttrs,function(e){t=t.concat(o.getValues(r,e))})}else if(t=this.store.getValues(this.item(),this.grid.layout.cells[this.cell.level+1].parentCell.field),t.length>1&&this.grid.sortChildItems){var n=this.grid.getSortProps();if(n&&n.length){var s=n[0].attribute,l=this.grid;if(s&&t[0][s]){var d=!!n[0].descending;t=t.slice(0),t.sort(function(e,t){return l._childItemSorter(e,t,s,d)})}}}return t},childPaths:function(){var e=this.children();return e?i.map(e,function(e,t){return new k(this._str+"/"+t,this.grid)},this):[]},parent:function(){return 0===this.level?null:new k(this._arr.slice(0,this.level),this.grid)},lastChild:function(e){var t=this.children();if(!t||!t.length)return this;var a=new k(this._str+"/"+String(t.length-1),this.grid);return e?a.lastChild(!0):a},toString:function(){return this._str}}),M=a("dojox.grid._TreeFocusManager",c,{setFocusCell:function(e,t){e&&e.getNode(t)&&this.inherited(arguments)},isLastFocusCell:function(){if(this.cell&&this.cell.index==this.grid.layout.cellCount-1){var e=new k(this.grid.rowCount-1,this.grid);return e=e.lastChild(!0),this.rowIndex==e._str}return!1},next:function(){if(this.cell){var e=(this.rowIndex,this.cell.index+1),t=this.grid.layout.cellCount-1,a=new k(this.rowIndex,this.grid);if(e>t){var i=a.next();i?(e=0,a=i):e--}if(this.grid.edit.isEditing()){var r=this.grid.getCell(e);if(!this.isLastFocusCell()&&!r.editable)return this._focusifyCellNode(!1),this.cell=r,this.rowIndex=a._str,void this.next()}this.setFocusIndex(a._str,e)}},previous:function(){if(this.cell){var e=this.rowIndex||0,t=(this.cell.index||0)-1,a=new k(e,this.grid);if(0>t){var i=a.previous();i?(t=this.grid.layout.cellCount-1,a=i):t=0}if(this.grid.edit.isEditing()){var r=this.grid.getCell(t);if(!this.isFirstFocusCell()&&!r.editable)return this._focusifyCellNode(!1),this.cell=r,this.rowIndex=a._str,void this.previous()}this.setFocusIndex(a._str,t)}},move:function(e,t){if(this.isNavHeader())return void this.inherited(arguments);if(this.cell){var a=this.grid.scroller,i=this.rowIndex,r=(this.grid.rowCount-1,new k(this.rowIndex,this.grid));if(e){var o;e>0?(r=r.next(),o=r._arr[0],o>a.getLastPageRow(a.page)&&this.grid.setScrollTop(this.grid.scrollTop+a.findScrollTop(o)-a.findScrollTop(i))):0>e&&(r=r.previous(),o=r._arr[0],o<=a.getPageRow(a.page)&&this.grid.setScrollTop(this.grid.scrollTop-a.findScrollTop(i)-a.findScrollTop(o)))}for(var n=this.grid.layout.cellCount-1,s=this.cell.index,l=Math.min(n,Math.max(0,s+t)),d=this.grid.getCell(l),u=0>t?-1:1;l>=0&&n>l&&d&&d.hidden===!0;)l+=u,d=this.grid.getCell(l);d&&d.hidden!==!0||(l=s),e&&this.grid.updateRow(i),this.setFocusIndex(r._str,l)}}}),w=a("dojox.grid.TreeGrid",h,{defaultOpen:!0,sortChildItems:!1,openAtLevels:[],treeModel:null,expandoCell:0,aggregator:null,_layoutClass:b,createSelection:function(){this.selection=new p(this)},_childItemSorter:function(e,t,a,i){var r=this.store.getValue(e,a),o=this.store.getValue(t,a);return r!=o?o>r==i?1:-1:0},_onNew:function(e,t){if(t&&t.item){var a=this.getItemIndex(t.item);"string"==typeof a?this.updateRow(a.split("/")[0]):a>-1&&this.updateRow(a)}else this.inherited(arguments)},_onSet:function(e,t,a,i){this._checkUpdateStatus(),this.aggregator&&this.aggregator.clearSubtotalCache();var r=this.getItemIndex(e);"string"==typeof r?this.updateRow(r.split("/")[0]):r>-1&&this.updateRow(r)},_onDelete:function(e){this._cleanupExpandoCache(this._getItemIndex(e,!0),this.store.getIdentity(e),e),this.inherited(arguments)},_clearData:function(){this.inherited(arguments),this._by_idty_paths={}},_cleanupExpandoCache:function(e,t,a){},_addItem:function(e,t,a,r){!r&&this.model&&-1==i.indexOf(this.model.root.children,e)&&(this.model.root.children[t]=e),this.inherited(arguments)},getItem:function(e){var t=r.isArray(e);if(r.isString(e)&&e.indexOf("/")&&(e=e.split("/"),t=!0),t&&1==e.length&&(e=e[0],t=!1),!t)return h.prototype.getItem.call(this,e);var a,i,o,n=this.store,s=h.prototype.getItem.call(this,e[0]);if(this.aggregator){if(a=this.aggregator.childFields||[])for(i=0;i<e.length-1&&s;i++)s=a[i]?(n.getValues(s,a[i])||[])[e[i+1]]:null}else if(this.treeModel&&(a=this.treeModel.childrenAttrs||[],a&&s))for(i=1,il=e.length;i<il&&s;i++)for(o=0,jl=a.length;o<jl&&!(s=a[o]?(n.getValues(s,a[o])||[])[e[i]]:null);o++);return s||null},_getItemIndex:function(e,t){if(!t&&!this.store.isItem(e))return-1;var a=this.inherited(arguments);if(-1==a){var i=this.store.getIdentity(e);return this._by_idty_paths[i]||-1}return a},postMixInProperties:function(){!this.treeModel||"defaultOpen"in this.params||(this.defaultOpen=!1);var e=this.defaultOpen;this.openAtLevels=i.map(this.openAtLevels,function(t){if("string"==typeof t)switch(t.toLowerCase()){case"true":return!0;case"false":return!1;default:var a=parseInt(t,10);return isNaN(a)?e:a}return t}),this._by_idty_paths={},this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.treeModel&&this._setModel(this.treeModel)},setModel:function(e){this._setModel(e),this._refresh(!0)},_setModel:function(e){if(e&&(!u||!(e instanceof u)))throw new Error("dojox.grid.TreeGrid: treeModel must be an instance of dijit.tree.ForestStoreModel");this.treeModel=e,s.toggle(this.domNode,"dojoxGridTreeModel",!!this.treeModel),this._setQuery(e?e.query:null),this._setStore(e?e.store:null)},createScroller:function(){this.inherited(arguments),this.scroller._origDefaultRowHeight=this.scroller.defaultRowHeight},createManagers:function(){this.rows=new f(this),this.focus=new M(this),this.edit=new g(this)},_setStore:function(e){this.inherited(arguments),this.treeModel&&!this.treeModel.root.children&&(this.treeModel.root.children=[]),this.aggregator&&(this.aggregator.store=e)},getDefaultOpenState:function(e,t){var a,i=this.store;if(this.treeModel)return this.defaultOpen;if(!(e&&i&&i.isItem(t)&&(a=this.aggregator.childFields[e.level])))return this.defaultOpen;if(this.openAtLevels.length>e.level){var r=this.openAtLevels[e.level];if("boolean"==typeof r)return r;if("number"==typeof r)return i.getValues(t,a).length<=r}return this.defaultOpen},onStyleRow:function(e){if(!this.layout._isCollapsable)return void this.inherited(arguments);var t=n.get(e.node,"dojoxTreeGridBaseClasses");t&&(e.customClasses=t);var a=e,i=a.node.tagName.toLowerCase();a.customClasses+=(a.odd?" dojoxGridRowOdd":"")+(a.selected&&"tr"==i?" dojoxGridRowSelected":"")+(a.over&&"tr"==i?" dojoxGridRowOver":""),this.focus.styleRow(a),this.edit.styleRow(a)},styleRowNode:function(e,t){t&&("div"==t.tagName.toLowerCase()&&this.aggregator&&l("tr[dojoxTreeGridPath]",t).forEach(function(e){this.rows.styleRowNode(n.get(e,"dojoxTreeGridPath"),e)},this),this.rows.styleRowNode(e,t))},onCanSelect:function(e){var t=l("tr[dojoxTreeGridPath='"+e+"']",this.domNode);return t.length&&s.contains(t[0],"dojoxGridSummaryRow")?!1:this.inherited(arguments)},onKeyDown:function(e){if(!e.altKey&&!e.metaKey)switch(e.keyCode){case d.UP_ARROW:this.edit.isEditing()||"0"==this.focus.rowIndex||(o.stop(e),this.focus.move(-1,0));break;case d.DOWN_ARROW:var t=new k(this.focus.rowIndex,this),a=new k(this.rowCount-1,this);a=a.lastChild(!0),this.edit.isEditing()||t.toString()==a.toString()||(o.stop(e),this.focus.move(1,0));break;default:this.inherited(arguments)}},canEdit:function(e,t){var a=e.getNode(t);return a&&this._canEdit},doApplyCellEdit:function(e,t,a){var i=this.getItem(t),r=this.store.getValue(i,a);if("number"==typeof r)e=isNaN(e)?e:parseFloat(e);else if("boolean"==typeof r)e="true"==e?!0:"false"==e?!1:e;else if(r instanceof Date){var o=new Date(e);e=isNaN(o.getTime())?e:o}this.store.setValue(i,a,e),this.onApplyCellEdit(e,t,a)}});return w.markupFactory=function(e,a,o,s){var d=function(e){var t=n.get(e,"width")||"auto";return"auto"!=t&&"em"!=t.slice(-2)&&"%"!=t.slice(-1)&&(t=parseInt(t,10)+"px"),t},u=function(e){var a;if("table"==e.nodeName.toLowerCase()&&0===l("> colgroup",e).length&&1==(a=l("> thead > tr",e)).length){a[0];return l("> th",a[0]).map(function(e){var a={type:r.trim(n.get(e,"cellType")||""),field:r.trim(n.get(e,"field")||"")};a.type&&(a.type=r.getObject(a.type));var o=l("> table",e)[0];return o?(a.name="",a.children=u(o),n.has(e,"itemAggregates")?a.itemAggregates=i.map(n.get(e,"itemAggregates").split(","),function(e){return r.trim(e)}):a.itemAggregates=[],n.has(e,"aggregate")&&(a.aggregate=n.get(e,"aggregate")),a.type=a.type||t.grid.cells.SubtableCell):(a.name=r.trim(n.get(e,"name")||e.innerHTML),n.has(e,"width")&&(a.width=d(e)),n.has(e,"relWidth")&&(a.relWidth=window.parseInt(n.get(e,"relWidth"),10)),n.has(e,"hidden")&&(a.hidden="true"==n.get(e,"hidden")),a.field=a.field||a.name,h.cell_markupFactory(s,e,a),a.type=a.type||t.grid.cells.Cell),a.type&&a.type.markupFactory&&a.type.markupFactory(e,a),a})}return[]};if(!e.structure){var m=u(a);m.length&&(e.structure=[{__span:1/0,cells:[m]}])}return h.markupFactory(e,a,o,s)},w});//# sourceMappingURL=TreeGrid.js.map