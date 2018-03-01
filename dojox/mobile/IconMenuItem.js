//>>built
define("dojox/mobile/IconMenuItem",["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","./iconUtils","./_ItemBase"],function(e,t,i,a,o,n,r){return e("dojox.mobile.IconMenuItem",r,{closeOnAction:!1,tag:"li",baseClass:"mblIconMenuItem",selColor:"mblIconMenuItemSel",_selStartMethod:"touch",_selEndMethod:"touch",buildRendering:function(){this.domNode=this.srcNodeRef||a.create(this.tag),o.set(this.domNode,"role","menuitemcheckbox"),o.set(this.domNode,"aria-checked","false"),this.inherited(arguments),this.selected&&i.add(this.domNode,this.selColor),this.srcNodeRef&&(this.label||(this.label=t.trim(this.srcNodeRef.innerHTML)),this.srcNodeRef.innerHTML="");var e=this.anchorNode=this.containerNode=a.create("a",{className:"mblIconMenuItemAnchor",role:"presentation"}),n=a.create("table",{className:"mblIconMenuItemTable",role:"presentation"},e),r=this.iconParentNode=n.insertRow(-1).insertCell(-1);this.iconNode=a.create("div",{className:"mblIconMenuItemIcon"},r),this.labelNode=this.refNode=a.create("div",{className:"mblIconMenuItemLabel"},r),this.position="before",this.domNode.appendChild(e)},startup:function(){this._started||(this.connect(this.domNode,"onkeydown","_onClick"),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),delete this._pendingIcon))},_onClick:function(e){if((!e||"keydown"!==e.type||13===e.keyCode)&&!1!==this.onClick(e)){if(this.closeOnAction){var t=this.getParent();t&&t.hide&&t.hide()}this.defaultClickAction(e)}},onClick:function(){},_setSelectedAttr:function(e){this.inherited(arguments),i.toggle(this.domNode,this.selColor,e),o.set(this.domNode,"aria-checked",e?"true":"false")}})});//# sourceMappingURL=IconMenuItem.js.map