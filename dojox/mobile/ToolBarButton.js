//>>built
define("dojox/mobile/ToolBarButton",["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./sniff","./_ItemBase","dojo/has!dojo-bidi?dojox/mobile/bidi/ToolBarButton"],function(e,t,i,a,r,o,n,s,l,d){var h=e(s("dojo-bidi")?"dojox.mobile.NonBidiToolBarButton":"dojox.mobile.ToolBarButton",l,{selected:!1,arrow:"",light:!0,defaultColor:"mblColorDefault",selColor:"mblColorDefaultSel",baseClass:"mblToolBarButton",_selStartMethod:"touch",_selEndMethod:"touch",buildRendering:function(){if(!this.label&&this.srcNodeRef&&(this.label=this.srcNodeRef.innerHTML),this.label=t.trim(this.label),this.domNode=this.srcNodeRef&&"SPAN"===this.srcNodeRef.tagName?this.srcNodeRef:r.create("span"),n.set(this.domNode,"role","button"),this.inherited(arguments),this.light&&!this.arrow&&(!this.icon||!this.label))return this.labelNode=this.tableNode=this.bodyNode=this.iconParentNode=this.domNode,void a.add(this.domNode,this.defaultColor+" mblToolBarButtonBody"+(this.icon?" mblToolBarButtonLightIcon":" mblToolBarButtonLightText"));this.domNode.innerHTML="","left"!==this.arrow&&"right"!==this.arrow||(this.arrowNode=r.create("span",{className:"mblToolBarButtonArrow mblToolBarButton"+("left"===this.arrow?"Left":"Right")+"Arrow "+(s("ie")<10?"":this.defaultColor+" "+this.defaultColor+"45")},this.domNode),a.add(this.domNode,"mblToolBarButtonHas"+("left"===this.arrow?"Left":"Right")+"Arrow")),this.bodyNode=r.create("span",{className:"mblToolBarButtonBody"},this.domNode),this.tableNode=r.create("table",{cellPadding:"0",cellSpacing:"0",border:"0",role:"presentation"},this.bodyNode),!this.label&&this.arrow&&(this.tableNode.className="mblToolBarButtonText");var e=this.tableNode.insertRow(-1);this.iconParentNode=e.insertCell(-1),this.labelNode=e.insertCell(-1),this.iconParentNode.className="mblToolBarButtonIcon",this.labelNode.className="mblToolBarButtonLabel",this.icon&&"none"!==this.icon&&this.label&&(a.add(this.domNode,"mblToolBarButtonHasIcon"),a.add(this.bodyNode,"mblToolBarButtonLabeledIcon")),a.add(this.bodyNode,this.defaultColor)},startup:function(){this._started||(this.connect(this.domNode,"onkeydown","_onClick"),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),delete this._pendingIcon))},_onClick:function(e){e&&"keydown"===e.type&&13!==e.keyCode||this.onClick(e)!==!1&&this.defaultClickAction(e)},onClick:function(){},_setLabelAttr:function(e){this.inherited(arguments),a.toggle(this.tableNode,"mblToolBarButtonText",e||this.arrow)},_setSelectedAttr:function(e){var t=function(e,t,i){a.replace(e,t+" "+t+"45",i+" "+i+"45")};this.inherited(arguments),e?(a.replace(this.bodyNode,this.selColor,this.defaultColor),s("ie")<10||!this.arrowNode||t(this.arrowNode,this.selColor,this.defaultColor)):(a.replace(this.bodyNode,this.defaultColor,this.selColor),s("ie")<10||!this.arrowNode||t(this.arrowNode,this.defaultColor,this.selColor)),a.toggle(this.domNode,"mblToolBarButtonSelected",e),a.toggle(this.bodyNode,"mblToolBarButtonBodySelected",e)}});return s("dojo-bidi")?e("dojox.mobile.ToolBarButton",[h,d]):h});//# sourceMappingURL=ToolBarButton.js.map