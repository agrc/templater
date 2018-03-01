//>>built
define("dojox/grid/enhanced/plugins/IndirectSelection",["dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/_base/lang","dojo/_base/html","dojo/_base/window","dojo/_base/connect","dojo/_base/sniff","dojo/query","dojo/keys","dojo/string","../_Plugin","../../EnhancedGrid","../../cells/dijit"],function(e,t,i,a,r,n,o,s,d,l,u,h,c){var m=a.getObject("dojox.grid.cells"),f=e("dojox.grid.cells.RowSelector",m._Widget,{inputType:"",map:null,disabledMap:null,isRowSelector:!0,_connects:null,_subscribes:null,checkedText:"&#10003;",unCheckedText:"O",constructor:function(){this.map={},this.disabledMap={},this.disabledCount=0,this._connects=[],this._subscribes=[],this.inA11YMode=r.hasClass(n.body(),"dijit_a11y"),this.baseClass="dojoxGridRowSelector dijitReset dijitInline dijit"+this.inputType,this.checkedClass=" dijit"+this.inputType+"Checked",this.disabledClass=" dijit"+this.inputType+"Disabled",this.checkedDisabledClass=" dijit"+this.inputType+"CheckedDisabled",this.statusTextClass=" dojoxGridRowSelectorStatusText",this._connects.push(o.connect(this.grid,"dokeyup",this,"_dokeyup")),this._connects.push(o.connect(this.grid.selection,"onSelected",this,"_onSelected")),this._connects.push(o.connect(this.grid.selection,"onDeselected",this,"_onDeselected")),this._connects.push(o.connect(this.grid.scroller,"invalidatePageNode",this,"_pageDestroyed")),this._connects.push(o.connect(this.grid,"onCellClick",this,"_onClick")),this._connects.push(o.connect(this.grid,"updateRow",this,"_onUpdateRow"))},formatter:function(e,t,i){var a=i,r=a.baseClass,n=!!a.getValue(t),o=!!a.disabledMap[t];return n?(r+=a.checkedClass,o&&(r+=a.checkedDisabledClass)):o&&(r+=a.disabledClass),["<div tabindex = -1 ","id = '"+a.grid.id+"_rowSelector_"+t+"' ","name = '"+a.grid.id+"_rowSelector' class = '"+r+"' ","role = "+a.inputType.toLowerCase()+" aria-checked = '"+n+"' aria-disabled = '"+o+"' aria-label = '"+u.substitute(a.grid._nls["indirectSelection"+a.inputType],[t+1])+"'>","<span class = '"+a.statusTextClass+"'>"+(n?a.checkedText:a.unCheckedText)+"</span>","</div>"].join("")},setValue:function(e,t){},getValue:function(e){return this.grid.selection.isSelected(e)},toggleRow:function(e,t){this._nativeSelect(e,t)},setDisabled:function(e,t){e<0||this._toggleDisabledStyle(e,t)},disabled:function(e){return!!this.disabledMap[e]},_onClick:function(e){e.cell===this&&this._selectRow(e)},_dokeyup:function(e){e.cellIndex==this.index&&e.rowIndex>=0&&e.keyCode==l.SPACE&&this._selectRow(e)},focus:function(e){var t=this.map[e];t&&t.focus()},_focusEndingCell:function(e,t){var i=this.grid.getCell(t);this.grid.focus.setFocusCell(i,e)},_nativeSelect:function(e,t){this.grid.selection[t?"select":"deselect"](e)},_onSelected:function(e){this._toggleCheckedStyle(e,!0)},_onDeselected:function(e){this._toggleCheckedStyle(e,!1)},_onUpdateRow:function(e){delete this.map[e]},_toggleCheckedStyle:function(e,t){var i=this._getSelector(e);i&&(r.toggleClass(i,this.checkedClass,t),this.disabledMap[e]&&r.toggleClass(i,this.checkedDisabledClass,t),i.setAttribute("aria-checked",t),this.inA11YMode&&(i.firstChild.innerHTML=t?this.checkedText:this.unCheckedText))},_toggleDisabledStyle:function(e,t){var i=this._getSelector(e);i&&(r.toggleClass(i,this.disabledClass,t),this.getValue(e)&&r.toggleClass(i,this.checkedDisabledClass,t),i.setAttribute("aria-disabled",t)),this.disabledMap[e]=t,e>=0&&(this.disabledCount+=t?1:-1)},_getSelector:function(e){var t=this.map[e];if(!t){var i=this.view.rowNodes[e];i&&(t=d(".dojoxGridRowSelector",i)[0])&&(this.map[e]=t)}return t},_pageDestroyed:function(e){for(var t=this.grid.scroller.rowsPerPage,i=e*t,a=i+t-1,n=i;n<=a;n++)this.map[n]&&(r.destroy(this.map[n]),delete this.map[n])},destroy:function(){for(var e in this.map)r.destroy(this.map[e]),delete this.map[e];for(e in this.disabledMap)delete this.disabledMap[e];t.forEach(this._connects,o.disconnect),t.forEach(this._subscribes,o.unsubscribe),delete this._connects,delete this._subscribes}}),y=e("dojox.grid.cells.SingleRowSelector",f,{inputType:"Radio",_selectRow:function(e){var t=e.rowIndex;this.disabledMap[t]||(this._focusEndingCell(t,e.cellIndex),this._nativeSelect(t,!this.grid.selection.selected[t]))}}),p=e("dojox.grid.cells.MultipleRowSelector",f,{inputType:"CheckBox",swipeStartRowIndex:-1,swipeMinRowIndex:-1,swipeMaxRowIndex:-1,toSelect:!1,lastClickRowIdx:-1,unCheckedText:"&#9633;",constructor:function(){this._connects.push(o.connect(n.doc,"onmouseup",this,"_domouseup")),this._connects.push(o.connect(this.grid,"onRowMouseOver",this,"_onRowMouseOver")),this._connects.push(o.connect(this.grid.focus,"move",this,"_swipeByKey")),this._connects.push(o.connect(this.grid,"onCellMouseDown",this,"_onMouseDown")),this.headerSelector&&(this._connects.push(o.connect(this.grid.views,"render",this,"_addHeaderSelector")),this._connects.push(o.connect(this.grid,"_onFetchComplete",this,"_addHeaderSelector")),this._connects.push(o.connect(this.grid,"onSelectionChanged",this,"_onSelectionChanged")),this._connects.push(o.connect(this.grid,"onKeyDown",this,function(e){-1==e.rowIndex&&e.cellIndex==this.index&&e.keyCode==l.SPACE&&this._toggletHeader()})))},toggleAllSelection:function(e){var t=this.grid,i=t.selection;e?i.selectRange(0,t.rowCount-1):i.deselectAll()},_onMouseDown:function(e){e.cell==this&&(this._startSelection(e.rowIndex),i.stop(e))},_onRowMouseOver:function(e){this._updateSelection(e,0)},_domouseup:function(e){s("ie")&&this.view.content.decorateEvent(e),e.cellIndex>=0&&this.inSwipeSelection()&&!this.grid.edit.isEditRow(e.rowIndex)&&this._focusEndingCell(e.rowIndex,e.cellIndex),this._finishSelect()},_dokeyup:function(e){this.inherited(arguments),e.shiftKey||this._finishSelect()},_startSelection:function(e){this.swipeStartRowIndex=this.swipeMinRowIndex=this.swipeMaxRowIndex=e,this.toSelect=!this.getValue(e)},_updateSelection:function(e,t){if(this.inSwipeSelection()){var i=0!==t,a=e.rowIndex,r=a-this.swipeStartRowIndex+t;r>0&&this.swipeMaxRowIndex<a+t&&(this.swipeMaxRowIndex=a+t),r<0&&this.swipeMinRowIndex>a+t&&(this.swipeMinRowIndex=a+t);for(var n=r>0?this.swipeStartRowIndex:a+t,o=r>0?a+t:this.swipeStartRowIndex,s=this.swipeMinRowIndex;s<=this.swipeMaxRowIndex;s++)this.disabledMap[s]||s<0||(s>=n&&s<=o?this._nativeSelect(s,this.toSelect):i||this._nativeSelect(s,!this.toSelect))}},_swipeByKey:function(e,t,i){if(i&&0!==e&&i.shiftKey&&i.cellIndex==this.index&&!(this.grid.focus.rowIndex<0)){var a=i.rowIndex;this.swipeStartRowIndex<0&&(this.swipeStartRowIndex=a,e>0?(this.swipeMaxRowIndex=a+e,this.swipeMinRowIndex=a):(this.swipeMinRowIndex=a+e,this.swipeMaxRowIndex=a),this.toSelect=this.getValue(a)),this._updateSelection(i,e)}},_finishSelect:function(){this.swipeStartRowIndex=-1,this.swipeMinRowIndex=-1,this.swipeMaxRowIndex=-1,this.toSelect=!1},inSwipeSelection:function(){return this.swipeStartRowIndex>=0},_nativeSelect:function(e,t){this.grid.selection[t?"addToSelection":"deselect"](e)},_selectRow:function(e){var t=e.rowIndex;if(!this.disabledMap[t]){i.stop(e),this._focusEndingCell(t,e.cellIndex);var a=t-this.lastClickRowIdx,r=!this.grid.selection.selected[t];if(this.lastClickRowIdx>=0&&!e.ctrlKey&&!e.altKey&&e.shiftKey)for(var n=a>0?this.lastClickRowIdx:t,o=a>0?t:this.lastClickRowIdx,s=n;s>=0&&s<=o;s++)this._nativeSelect(s,r);else this._nativeSelect(t,r);this.lastClickRowIdx=t}},getValue:function(e){if(-1==e){var t=this.grid;return t.rowCount>0&&t.rowCount<=t.selection.getSelectedCount()}return this.inherited(arguments)},_addHeaderSelector:function(){var e=this.view.getHeaderCellNode(this.index);if(e){r.empty(e);var t=this.grid,i=e.appendChild(r.create("div",{"aria-label":t._nls.selectAll,tabindex:-1,id:t.id+"_rowSelector_-1",class:this.baseClass,role:"checkbox",innerHTML:"<span class = '"+this.statusTextClass+"'></span><span style='height: 0; width: 0; overflow: hidden; display: block;'>"+t._nls.selectAll+"</span>"}));this.map[-1]=i;var a=this._headerSelectorConnectIdx;void 0!==a&&(o.disconnect(this._connects[a]),this._connects.splice(a,1)),this._headerSelectorConnectIdx=this._connects.length,this._connects.push(o.connect(i,"onclick",this,"_toggletHeader")),this._onSelectionChanged()}},_toggletHeader:function(){this.disabledMap[-1]||(this.grid._selectingRange=!0,this.toggleAllSelection(!this.getValue(-1)),this._onSelectionChanged(),this.grid._selectingRange=!1)},_onSelectionChanged:function(){var e=this.grid;this.map[-1]&&!e._selectingRange&&(e.allItemsSelected=this.getValue(-1),this._toggleCheckedStyle(-1,e.allItemsSelected))},_toggleDisabledStyle:function(e,t){if(this.inherited(arguments),this.headerSelector){var i=this.grid.rowCount==this.disabledCount;i!=!!this.disabledMap[-1]&&(arguments[0]=-1,arguments[1]=i,this.inherited(arguments))}}}),g=e("dojox.grid.enhanced.plugins.IndirectSelection",h,{name:"indirectSelection",constructor:function(){var e=this.grid.layout;this.connect(e,"setStructure",a.hitch(e,this.addRowSelectCell,this.option))},addRowSelectCell:function(e){if(this.grid.indirectSelection&&"none"!=this.grid.selectionMode){var i=!1,r=["get","formatter","field","fields"],n={type:p,name:"",width:"30px",styles:"text-align: center;"};e.headerSelector&&(e.name=""),this.grid.rowSelectCell&&this.grid.rowSelectCell.destroy(),t.forEach(this.structure,function(o){var s=o.cells;if(s&&s.length>0&&!i){var d=s[0];if(d[0]&&d[0].isRowSelector)return void(i=!0);var l,u="single"==this.grid.selectionMode?y:p;l=a.mixin(n,e,{type:u,editable:!1,notselectable:!0,filterable:!1,navigatable:!0,nosort:!0}),t.forEach(r,function(e){e in l&&delete l[e]}),s.length>1&&(l.rowSpan=s.length),t.forEach(this.cells,function(e,t){e.index>=0&&(e.index+=1)});var h=this.addCellDef(0,0,l);h.index=0,d.unshift(h),this.cells.unshift(h),this.grid.rowSelectCell=h,i=!0}},this),this.cellCount=this.cells.length}},destroy:function(){this.grid.rowSelectCell.destroy(),delete this.grid.rowSelectCell,this.inherited(arguments)}});return c.registerPlugin(g,{preInit:!0}),g});//# sourceMappingURL=IndirectSelection.js.map