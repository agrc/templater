//>>built
define("dojox/grid/TreeSelection",["../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/query","./DataSelection"],function(e,t,a,i,r,n,o){return t("dojox.grid.TreeSelection",o,{setMode:function(e){this.selected={},this.sorted_sel=[],this.sorted_ltos={},this.sorted_stol={},o.prototype.setMode.call(this,e)},addToSelection:function(e){if("none"!=this.mode){var t=null;if(t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),this.selected[t])this.selectedIndex=t;else if(!1!==this.onCanSelect(t)){this.selectedIndex=t;var a=n("tr[dojoxTreeGridPath='"+t+"']",this.grid.domNode);a.length&&r.set(a[0],"aria-selected","true"),this._beginUpdate(),this.selected[t]=!0,this._insertSortedSelection(t),this.onSelected(t),this._endUpdate()}}},deselect:function(e){if("none"!=this.mode){var t=null;if(t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),this.selectedIndex==t&&(this.selectedIndex=-1),this.selected[t]){if(!1===this.onCanDeselect(t))return;var a=n("tr[dojoxTreeGridPath='"+t+"']",this.grid.domNode);a.length&&r.set(a[0],"aria-selected","false"),this._beginUpdate(),delete this.selected[t],this._removeSortedSelection(t),this.onDeselected(t),this._endUpdate()}}},getSelected:function(){var e=[];for(var t in this.selected)this.selected[t]&&e.push(this.grid.getItem(t));return e},getSelectedCount:function(){var e=0;for(var t in this.selected)this.selected[t]&&e++;return e},_bsearch:function(e){for(var t,a=this.sorted_sel,i=a.length-1,r=0;r<=i;){var n=this._comparePaths(a[t=r+i>>1],e);if(n<0)r=t+1;else{if(!(n>0))return t;i=t-1}}return n<0?t-n:t},_comparePaths:function(e,t){for(var a=0,i=e.length<t.length?e.length:t.length;a<i;a++){if(e[a]<t[a])return-1;if(e[a]>t[a])return 1}return e.length<t.length?-1:e.length>t.length?1:0},_insertSortedSelection:function(e){e=String(e);var t=this.sorted_sel,i=this.sorted_ltos,r=this.sorted_stol,n=e.split("/");if(n=a.map(n,function(e){return parseInt(e,10)}),i[n]=e,r[e]=n,0===t.length)return void t.push(n);if(1==t.length){return void(1==this._comparePaths(t[0],n)?t.unshift(n):t.push(n))}var o=this._bsearch(n);this.sorted_sel.splice(o,0,n)},_removeSortedSelection:function(e){e=String(e);var t=this.sorted_sel,a=this.sorted_ltos,i=this.sorted_stol;if(0!==t.length){var r=i[e];if(r){var n=this._bsearch(r);n>-1&&(delete a[r],delete i[e],t.splice(n,1))}}},getFirstSelected:function(){if(!this.sorted_sel.length||"none"==this.mode)return-1;var e=this.sorted_sel[0];return e?(e=this.sorted_ltos[e])||-1:-1},getNextSelected:function(e){if(!this.sorted_sel.length||"none"==this.mode)return-1;e=String(e);var t=this.sorted_stol[e];if(!t)return-1;var a=this._bsearch(t),i=this.sorted_sel[a+1];return i?this.sorted_ltos[i]:-1},_range:function(t,a,r){!i.isString(t)&&t<0&&(t=a);var n=(this.grid.layout.cells,this.grid.store,this.grid);if(t=new e.grid.TreePath(String(t),n),a=new e.grid.TreePath(String(a),n),t.compare(a)>0){var o=t;t=a,a=o}var s=t._str,l=a._str;r(s);for(var d=t;(d=d.next())&&d._str!=l;)r(d._str);r(l)}})});//# sourceMappingURL=TreeSelection.js.map