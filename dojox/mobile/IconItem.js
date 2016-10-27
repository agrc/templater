//>>built
define("dojox/mobile/IconItem",["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./_ItemBase","./Badge","./TransitionEvent","./iconUtils","./lazyLoadUtils","./viewRegistry","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/IconItem"],function(e,t,i,a,n,r,o,s,d,l,h,u,c,m,f,g,p){var y=e(a("dojo-bidi")?"dojox.mobile.NonBidiIconItem":"dojox.mobile.IconItem",l,{lazy:!1,requires:"",timeout:10,content:"",badge:"",badgeClass:"mblDomButtonRedBadge",deletable:!0,deleteIcon:"",tag:"li",paramsToInherit:"transition,icon,deleteIcon,badgeClass,deleteIconTitle,deleteIconRole",baseClass:"mblIconItem",_selStartMethod:"touch",_selEndMethod:"none",destroy:function(){this.badgeObj&&delete this.badgeObj,this.inherited(arguments)},buildRendering:function(){if(this.domNode=this.srcNodeRef||o.create(this.tag),this.srcNodeRef){this._tmpNode=o.create("div");for(var e=0,t=this.srcNodeRef.childNodes.length;t>e;e++)this._tmpNode.appendChild(this.srcNodeRef.firstChild)}this.iconDivNode=o.create("div",{className:"mblIconArea"},this.domNode),this.iconParentNode=o.create("div",{className:"mblIconAreaInner"},this.iconDivNode),this.labelNode=o.create("span",{className:"mblIconAreaTitle"},this.iconDivNode),this.inherited(arguments)},startup:function(){if(!this._started){var e=this.getParent();require([e.iconItemPaneClass],i.hitch(this,function(t){var i=this.paneWidget=new t(e.iconItemPaneProps);if(this.containerNode=i.containerNode,this._tmpNode){for(var a=0,n=this._tmpNode.childNodes.length;n>a;a++)i.containerNode.appendChild(this._tmpNode.firstChild);this._tmpNode=null}e.paneContainerWidget.addChild(i,this.getIndexInParent()),i.set("label",this.label),this._clickCloseHandle=this.connect(i.closeIconNode,"onclick","_closeIconClicked"),this._keydownCloseHandle=this.connect(i.closeIconNode,"onkeydown","_closeIconClicked")})),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),delete this._pendingIcon),!this.icon&&e.defaultIcon&&this.set("icon",e.defaultIcon),this._dragstartHandle=this.connect(this.domNode,"ondragstart",t.stop),this.connect(this.domNode,"onkeydown","_onClick")}},highlight:function(e){if(r.add(this.iconDivNode,"mblVibrate"),e=void 0!==e?e:this.timeout,e>0){var t=this;t.defer(function(){t.unhighlight()},1e3*e)}},unhighlight:function(){a("ie")||7!==a("trident")||d.set(this.iconDivNode,"animation-name",""),r.remove(this.iconDivNode,"mblVibrate")},isOpen:function(e){return this.paneWidget.isOpen()},_onClick:function(e){this.getParent().isEditing||e&&"keydown"===e.type&&13!==e.keyCode||this.onClick(e)!==!1&&this.defaultClickAction(e)},onClick:function(){},_onNewWindowOpened:function(e){this.set("selected",!1)},_prepareForTransition:function(e,t){return t?(this.defer(function(e){this.set("selected",!1)},1500),!0):("below"===this.getParent().transition&&this.isOpen()?this.close():this.open(e),!1)},_closeIconClicked:function(e){if(e){if("keydown"===e.type&&13!==e.keyCode)return;if(this.closeIconClicked(e)===!1)return;return void this.defer(function(e){this._closeIconClicked()})}this.close()},closeIconClicked:function(){},open:function(e){var t=this.getParent();"below"===this.transition?(t.single&&t.closeAll(),this._open_1()):(t._opening=this,t.single&&(this.paneWidget.closeHeaderNode.style.display="none",this.isOpen()||t.closeAll(),t.appView._heading.set("label",this.label)),this.moveTo=t.id+"_mblApplView",new u(this.domNode,this.getTransOpts(),e).dispatch())},_open_1:function(){this.paneWidget.show(),this.unhighlight(),this.lazy&&(m.instantiateLazyWidgets(this.containerNode,this.requires),this.lazy=!1),this.scrollIntoView(this.paneWidget.domNode),this.onOpen()},scrollIntoView:function(e){var t=f.getEnclosingScrollable(e);if(t){var i=t.getDim();i.c.h>=i.d.h&&t.scrollIntoView(e,!0)}else n.global.scrollBy(0,s.position(e,!1).y)},close:function(e){if(this.isOpen()){if(this.set("selected",!1),a("css3-animations")&&!e){var t=this.paneWidget.domNode;if("below"==this.getParent().transition){r.add(t,"mblCloseContent mblShrink");var i=s.position(t,!0),n=s.position(this.domNode,!0),o=n.x+n.w/2-i.x+"px "+(n.y+n.h/2-i.y)+"px";d.set(t,g.add({},{transformOrigin:o}))}else r.add(t,"mblCloseContent mblShrink0")}else this.paneWidget.hide();this.onClose()}},onOpen:function(){},onClose:function(){},_setLabelAttr:function(e){this.label=e;var t=this._cv?this._cv(e):e;this.labelNode.innerHTML=t,this.paneWidget&&this.paneWidget.set("label",e)},_getBadgeAttr:function(){return this.badgeObj?this.badgeObj.getValue():null},_setBadgeAttr:function(e){this.badgeObj||(this.badgeObj=new h({fontSize:14,className:this.badgeClass}),d.set(this.badgeObj.domNode,{position:"absolute",top:"-2px",right:"2px"})),this.badgeObj.setValue(e),e?this.iconDivNode.appendChild(this.badgeObj.domNode):this.iconDivNode.removeChild(this.badgeObj.domNode)},_setDeleteIconAttr:function(e){this.getParent()&&(this._set("deleteIcon",e),e=this.deletable?e:"",this.deleteIconNode=c.setIcon(e,this.deleteIconPos,this.deleteIconNode,this.deleteIconTitle||this.alt,this.iconDivNode),this.deleteIconNode&&(r.add(this.deleteIconNode,"mblIconItemDeleteIcon"),this.deleteIconRole&&this.deleteIconNode.setAttribute("role",this.deleteIconRole)))},_setContentAttr:function(e){var t;this.paneWidget?t=this.paneWidget.containerNode:(this._tmpNode||(this._tmpNode=o.create("div")),t=this._tmpNode),"object"==typeof e?(o.empty(t),t.appendChild(e)):t.innerHTML=e},_setSelectedAttr:function(e){this.inherited(arguments),this.iconNode&&d.set(this.iconNode,"opacity",e?this.getParent().pressedIconOpacity:1)}});return a("dojo-bidi")?e("dojox.mobile.IconItem",[y,p]):y});//# sourceMappingURL=IconItem.js.map