//>>built
define("dijit/PopupMenuItem",["dojo/_base/declare","dojo/dom-style","dojo/_base/lang","dojo/query","./popup","./registry","./MenuItem","./hccss"],function(t,e,i,o,n,a,d){return t("dijit.PopupMenuItem",d,{baseClass:"dijitMenuItem dijitPopupMenuItem",_fillContent:function(){if(this.srcNodeRef){var t=o("*",this.srcNodeRef);this.inherited(arguments,[t[0]]),this.dropDownContainer=this.srcNodeRef}},_openPopup:function(t,e){var o=this.popup;n.open(i.delegate(t,{popup:this.popup,around:this.domNode})),e&&o.focus&&o.focus()},_closePopup:function(){n.close(this.popup),this.popup.parentMenu=null},startup:function(){if(!this._started){if(this.inherited(arguments),!this.popup){var t=o("[widgetId]",this.dropDownContainer)[0];this.popup=a.byNode(t)}this.ownerDocumentBody.appendChild(this.popup.domNode),this.popup.domNode.setAttribute("aria-labelledby",this.containerNode.id),this.popup.startup(),this.popup.domNode.style.display="none",this.arrowWrapper&&e.set(this.arrowWrapper,"visibility",""),this.focusNode.setAttribute("aria-haspopup","true")}},destroyDescendants:function(t){this.popup&&(this.popup._destroyed||this.popup.destroyRecursive(t),delete this.popup),this.inherited(arguments)}})});//# sourceMappingURL=PopupMenuItem.js.map