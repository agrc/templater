//>>built
define("dojox/grid/Selection",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-attr"],function(e,t,i,a){return e("dojox.grid.Selection",null,{constructor:function(e){this.grid=e,this.selected=[],this.setMode(e.selectionMode)},mode:"extended",selected:null,updating:0,selectedIndex:-1,rangeStartIndex:-1,setMode:function(e){this.selected.length&&this.deselectAll(),"extended"!=e&&"multiple"!=e&&"single"!=e&&"none"!=e?this.mode="extended":this.mode=e},onCanSelect:function(e){return this.grid.onCanSelect(e)},onCanDeselect:function(e){return this.grid.onCanDeselect(e)},onSelected:function(e){},onDeselected:function(e){},onChanging:function(){},onChanged:function(){},isSelected:function(e){return"none"==this.mode?!1:this.selected[e]},getFirstSelected:function(){if(!this.selected.length||"none"==this.mode)return-1;for(var e=0,t=this.selected.length;t>e;e++)if(this.selected[e])return e;return-1},getNextSelected:function(e){if("none"==this.mode)return-1;for(var t=e+1,i=this.selected.length;i>t;t++)if(this.selected[t])return t;return-1},getSelected:function(){for(var e=[],t=0,i=this.selected.length;i>t;t++)this.selected[t]&&e.push(t);return e},getSelectedCount:function(){for(var e=0,t=0;t<this.selected.length;t++)this.selected[t]&&e++;return e},_beginUpdate:function(){0===this.updating&&this.onChanging(),this.updating++},_endUpdate:function(){this.updating--,0===this.updating&&this.onChanged()},select:function(e){"none"!=this.mode&&("multiple"!=this.mode?(this.deselectAll(e),this.addToSelection(e)):this.toggleSelect(e))},addToSelection:function(e){if("none"!=this.mode){if(i.isArray(e))return void t.forEach(e,this.addToSelection,this);if(e=Number(e),this.selected[e])this.selectedIndex=e;else if(this.onCanSelect(e)!==!1){this.selectedIndex=e;var r=this.grid.getRowNode(e);r&&a.set(r,"aria-selected","true"),this._beginUpdate(),this.selected[e]=!0,this.onSelected(e),this._endUpdate()}}},deselect:function(e){if("none"!=this.mode){if(i.isArray(e))return void t.forEach(e,this.deselect,this);if(e=Number(e),this.selectedIndex==e&&(this.selectedIndex=-1),this.selected[e]){if(this.onCanDeselect(e)===!1)return;var r=this.grid.getRowNode(e);r&&a.set(r,"aria-selected","false"),this._beginUpdate(),delete this.selected[e],this.onDeselected(e),this._endUpdate()}}},setSelected:function(e,t){this[t?"addToSelection":"deselect"](e)},toggleSelect:function(e){return i.isArray(e)?void t.forEach(e,this.toggleSelect,this):void this.setSelected(e,!this.selected[e])},_range:function(e,t,i){var a=e>=0?e:t,r=t;a>r&&(r=a,a=t);for(var n=a;r>=n;n++)i(n)},selectRange:function(e,t){this._range(e,t,i.hitch(this,"addToSelection"))},deselectRange:function(e,t){this._range(e,t,i.hitch(this,"deselect"))},insert:function(e){this.selected.splice(e,0,!1),this.selectedIndex>=e&&this.selectedIndex++},remove:function(e){this.selected.splice(e,1),this.selectedIndex>=e&&this.selectedIndex--},deselectAll:function(e){for(var t in this.selected)t!=e&&this.selected[t]===!0&&this.deselect(t)},clickSelect:function(e,t,i){"none"!=this.mode&&(this._beginUpdate(),"extended"!=this.mode?this.select(e):((!i||this.rangeStartIndex<0)&&(this.rangeStartIndex=e),t||this.deselectAll(e),i?this.selectRange(this.rangeStartIndex,e):t?this.toggleSelect(e):this.addToSelection(e)),this._endUpdate())},clickSelectEvent:function(e){this.clickSelect(e.rowIndex,dojo.isCopyKey(e),e.shiftKey)},clear:function(){this._beginUpdate(),this.deselectAll(),this._endUpdate()}})});//# sourceMappingURL=Selection.js.map