//>>built
define("dojox/mobile/TabBarButton",["dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./common","./View","./iconUtils","./_ItemBase","./Badge","./sniff","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBarButton"],function(e,t,i,a,n,r,o,s,l,d,u,c,h,m,f,p){var g=t(f("dojo-bidi")?"dojox.mobile.NonBidiTabBarButton":"dojox.mobile.TabBarButton",h,{icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,transition:"none",tag:"li",badge:"",badgeClass:"mblDomButtonRedBadge",baseClass:"mblTabBarButton",closeIcon:"mblDomButtonWhiteCross",_selStartMethod:"touch",_selEndMethod:"touch",_moveTo:"",destroy:function(){this.badgeObj&&delete this.badgeObj,this.inherited(arguments)},inheritParams:function(){this.icon&&!this.icon1&&(this.icon1=this.icon);var e=this.getParent();e&&(this.transition||(this.transition=e.transition),this.icon1&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon1=e.iconBase+this.icon1),this.icon1||(this.icon1=e.iconBase),this.iconPos1||(this.iconPos1=e.iconPos),this.icon2&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon2=e.iconBase+this.icon2),this.icon2||(this.icon2=e.iconBase||this.icon1),this.iconPos2||(this.iconPos2=e.iconPos||this.iconPos1),e.closable&&(this.icon1||(this.icon1=this.closeIcon),this.icon2||(this.icon2=this.closeIcon),r.add(this.domNode,"mblTabBarButtonClosable")))},buildRendering:function(){if(this.domNode=this.srcNodeRef||o.create(this.tag),this.srcNodeRef&&(this.label||(this.label=a.trim(this.srcNodeRef.innerHTML)),this.srcNodeRef.innerHTML=""),this.labelNode=this.box=o.create("div",{className:"mblTabBarButtonLabel"},this.domNode),l.set(this.domNode,"role","tab"),l.set(this.domNode,"aria-selected","false"),this._moveTo=this._getMoveToId(),this._moveTo){var e=n.byId(this._moveTo);e&&(l.set(this.domNode,"aria-controls",this._moveTo),l.set(e,"role","tabpanel"),l.set(e,"aria-labelledby",this.id))}this.inherited(arguments)},startup:function(){if(!this._started){this._dragstartHandle=this.connect(this.domNode,"ondragstart",i.stop),this.connect(this.domNode,"onkeydown","_onClick");var e=this.getParent();e&&e.closable&&(this._clickCloseHandler=this.connect(this.iconDivNode,"onclick","_onCloseButtonClick"),this._keydownCloseHandler=this.connect(this.iconDivNode,"onkeydown","_onCloseButtonClick"),this.iconDivNode.tabIndex="0"),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set({icon:void 0!==this._pendingIcon?this._pendingIcon:this.icon,icon1:this.icon1,icon2:this.icon2}),delete this._pendingIcon),d.setSelectable(this.domNode,!1)}},onClose:function(t){return e.publish("/dojox/mobile/tabClose",[this]),this.getParent().onCloseButtonClick(this)},_onCloseButtonClick:function(e){e&&"keydown"===e.type&&13!==e.keyCode||this.onCloseButtonClick(e)!==!1&&this.onClose()&&this.destroy()},onCloseButtonClick:function(){},_onClick:function(e){e&&"keydown"===e.type&&13!==e.keyCode||this.onClick(e)!==!1&&this.defaultClickAction(e)},onClick:function(){},_setIcon:function(e,t){this.getParent()&&(this._set("icon"+t,e),this.iconDivNode||(this.iconDivNode=o.create("div",{className:"mblTabBarButtonIconArea"},this.domNode,"first")),this["iconParentNode"+t]||(this["iconParentNode"+t]=o.create("div",{className:"mblTabBarButtonIconParent mblTabBarButtonIconParent"+t},this.iconDivNode)),this["iconNode"+t]=c.setIcon(e,this["iconPos"+t],this["iconNode"+t],this.alt,this["iconParentNode"+t]),this["icon"+t]=e,r.toggle(this.domNode,"mblTabBarButtonHasIcon",e&&"none"!==e))},_getMoveToId:function(){if(this.moveTo){if("#"===this.moveTo)return"";var e="";return e="object"==typeof this.moveTo&&this.moveTo.moveTo?this.moveTo.moveTo:this.moveTo,e&&(e=u.prototype.convertToId(e)),e}},_setIcon1Attr:function(e){this._setIcon(e,1)},_setIcon2Attr:function(e){this._setIcon(e,2)},_getBadgeAttr:function(){return this.badgeObj&&this.badgeObj.domNode.parentNode&&1==this.badgeObj.domNode.parentNode.nodeType?this.badgeObj.getValue():null},_setBadgeAttr:function(e){this.badgeObj||(this.badgeObj=new m({fontSize:11,className:this.badgeClass}),s.set(this.badgeObj.domNode,{position:"absolute",top:"0px",right:"0px"})),this.badgeObj.setValue(e),e?this.domNode.appendChild(this.badgeObj.domNode):this.domNode===this.badgeObj.domNode.parentNode&&this.domNode.removeChild(this.badgeObj.domNode)},_setSelectedAttr:function(e){if(this.inherited(arguments),r.toggle(this.domNode,"mblTabBarButtonSelected",e),l.set(this.domNode,"aria-selected",e?"true":"false"),this._moveTo){var t=n.byId(this._moveTo);t&&l.set(t,"aria-hidden",e?"false":"true")}}});return f("dojo-bidi")?t("dojox.mobile.TabBarButton",[g,p]):g});//# sourceMappingURL=TabBarButton.js.map