//>>built
define("dojox/widget/Selection",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Stateful"],function(e,t,i,o){return e("dojox.widget.Selection",o,{constructor:function(){this.selectedItems=[]},selectionMode:"single",_setSelectionModeAttr:function(e){"none"!=e&&"single"!=e&&"multiple"!=e&&(e="single"),e!=this.selectionMode&&(this.selectionMode=e,"none"==e?this.set("selectedItems",null):"single"==e&&this.set("selectedItem",this.selectedItem))},selectedItem:null,_setSelectedItemAttr:function(e){this.selectedItem!=e&&(this._set("selectedItem",e),this.set("selectedItems",e?[e]:null))},selectedItems:null,_setSelectedItemsAttr:function(e){var t=this.selectedItems;this.selectedItems=e,this.selectedItem=null,null!=t&&t.length>0&&this.updateRenderers(t,!0),this.selectedItems&&this.selectedItems.length>0&&(this.selectedItem=this.selectedItems[0],this.updateRenderers(this.selectedItems,!0))},_getSelectedItemsAttr:function(){return null==this.selectedItems?[]:this.selectedItems.concat()},isItemSelected:function(e){return null==this.selectedItems||0==this.selectedItems.length?!1:t.some(this.selectedItems,i.hitch(this,function(t){return this.getIdentity(t)==this.getIdentity(e)}))},getIdentity:function(e){},setItemSelected:function(e,i){if("none"!=this.selectionMode&&null!=e){var o=this.get("selectedItems");this.get("selectedItems");if("single"==this.selectionMode)i?this.set("selectedItem",e):this.isItemSelected(e)&&this.set("selectedItems",null);else if(i){if(this.isItemSelected(e))return;null==o?o=[e]:o.unshift(e),this.set("selectedItems",o)}else{var r=t.filter(o,function(t){return t.id!=e.id});if(null==r||r.length==o.length)return;this.set("selectedItems",r)}}},selectFromEvent:function(e,t,i,o){if("none"==this.selectionMode)return!1;var r,n=this.get("selectedItem"),a=t?this.isItemSelected(t):!1;return null==t?e.ctrlKey||null==this.selectedItem||(this.set("selectedItem",null),r=!0):"multiple"==this.selectionMode?e.ctrlKey?(this.setItemSelected(t,!a),r=!0):(this.set("selectedItem",t),r=!0):e.ctrlKey?(this.set("selectedItem",a?null:t),r=!0):a||(this.set("selectedItem",t),r=!0),o&&r&&this.dispatchChange(n,this.get("selectedItem"),i,e),r},dispatchChange:function(e,t,i,o){this.onChange({oldValue:e,newValue:t,renderer:i,triggerEvent:o})},onChange:function(){}})});//# sourceMappingURL=Selection.js.map