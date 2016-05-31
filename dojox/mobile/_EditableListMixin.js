//>>built
define("dojox/mobile/_EditableListMixin",["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/touch","dojo/dom-attr","dijit/registry","./ListItem","./common"],function(e,t,i,a,o,n,r,s,d,l,h,c,u){return i("dojox.mobile._EditableListMixin",null,{rightIconForEdit:"mblDomButtonGrayKnob",deleteIconForEdit:"mblDomButtonRedCircleMinus",isEditing:!1,destroy:function(){this._blankItem&&this._blankItem.destroy(),this.inherited(arguments)},_setupMoveItem:function(e){s.set(e,{width:r.getContentBox(e).w+"px",top:e.offsetTop+"px"}),n.add(e,"mblListItemFloat")},_resetMoveItem:function(e){this.defer(function(){n.remove(e,"mblListItemFloat"),s.set(e,{width:"",top:""})})},_onClick:function(e){if((!e||"keydown"!==e.type||13===e.keyCode)&&this.onClick(e)!==!1)for(var i=h.getEnclosingWidget(e.target),a=e.target;a!==i.domNode;a=a.parentNode)if(a===i.deleteIconNode){t.publish("/dojox/mobile/deleteListItem",[i]),this.onDeleteItem(i);break}},onClick:function(){},_onTouchStart:function(t){if(!(this.getChildren().length<=1)){this._blankItem||(this._blankItem=new c);var i=this._movingItem=h.getEnclosingWidget(t.target);this._startIndex=this.getIndexOfChild(i);for(var n=!1,s=t.target;s!==i.domNode;s=s.parentNode)if(s===i.rightIconNode){n=!0,l.set(i.rightIconNode,"aria-grabbed","true"),l.set(this.domNode,"aria-dropeffect","move");break}if(n){var u=i.getNextSibling();u=u?u.domNode:null,this.containerNode.insertBefore(this._blankItem.domNode,u),this._setupMoveItem(i.domNode),this.containerNode.appendChild(i.domNode),this._conn||(this._conn=[this.connect(this.domNode,d.move,"_onTouchMove"),this.connect(o.doc,d.release,"_onTouchEnd")]),this._pos=[],e.forEach(this.getChildren(),function(e,t){this._pos.push(r.position(e.domNode,!0).y)},this),this.touchStartY=t.touches?t.touches[0].pageY:t.pageY,this._startTop=r.getMarginBox(i.domNode).t,a.stop(t)}}},_onTouchMove:function(e){for(var t=e.touches?e.touches[0].pageY:e.pageY,i=this._pos.length-1,a=1;a<this._pos.length;a++)if(t<this._pos[a]){i=a-1;break}var o=this.getChildren()[i],n=this._blankItem;if(o!==n){var r=o.domNode.parentNode;o.getIndexInParent()<n.getIndexInParent()?r.insertBefore(n.domNode,o.domNode):r.insertBefore(o.domNode,n.domNode)}this._movingItem.domNode.style.top=this._startTop+(t-this.touchStartY)+"px"},_onTouchEnd:function(i){var a=this._startIndex,o=this.getIndexOfChild(this._blankItem),n=this._blankItem.getNextSibling();n=n?n.domNode:null,null===n&&o--,this.containerNode.insertBefore(this._movingItem.domNode,n),this.containerNode.removeChild(this._blankItem.domNode),this._resetMoveItem(this._movingItem.domNode),e.forEach(this._conn,t.disconnect),this._conn=null,this.onMoveItem(this._movingItem,a,o),l.set(this._movingItem.rightIconNode,"aria-grabbed","false"),l.remove(this.domNode,"aria-dropeffect")},startEdit:function(){this.isEditing=!0,n.add(this.domNode,"mblEditableRoundRectList"),e.forEach(this.getChildren(),function(e){e.deleteIconNode||(e.set("rightIcon",this.rightIconForEdit),e.rightIconNode&&(l.set(e.rightIconNode,"role","button"),l.set(e.rightIconNode,"aria-grabbed","false")),e.set("deleteIcon",this.deleteIconForEdit),e.deleteIconNode.tabIndex=e.tabIndex,e.deleteIconNode&&l.set(e.deleteIconNode,"role","button")),e.rightIconNode.style.display="",e.deleteIconNode.style.display="",u._setTouchAction(e.rightIconNode,"none")},this),this._handles||(this._handles=[this.connect(this.domNode,d.press,"_onTouchStart"),this.connect(this.domNode,"onclick","_onClick"),this.connect(this.domNode,"onkeydown","_onClick")]),this.onStartEdit()},endEdit:function(){n.remove(this.domNode,"mblEditableRoundRectList"),e.forEach(this.getChildren(),function(e){e.rightIconNode.style.display="none",e.deleteIconNode.style.display="none",u._setTouchAction(e.rightIconNode,"auto")}),this._handles&&(e.forEach(this._handles,this.disconnect,this),this._handles=null),this.isEditing=!1,this.onEndEdit()},onDeleteItem:function(e){},onMoveItem:function(e,t,i){},onStartEdit:function(){},onEndEdit:function(){}})});//# sourceMappingURL=_EditableListMixin.js.map