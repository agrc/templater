//>>built
define("dojox/widget/FisheyeListItem",["dojo/_base/declare","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/_base/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained"],function(e,t,i,o,r,n,a,s,l,d,u){return e("dojox.widget.FisheyeListItem",[l,d,u],{iconSrc:"",label:"",id:"",templateString:'<div class="dojoxFisheyeListItem">  <img class="dojoxFisheyeListItemImage" data-dojo-attach-point="imgNode" data-dojo-attach-event="onmouseover:onMouseOver,onmouseout:onMouseOut,onclick:onClick">  <div class="dojoxFisheyeListItemLabel" data-dojo-attach-point="lblNode"></div></div>',_isNode:function(e){if("function"!=typeof Element)return e&&!isNaN(e.nodeType);try{return e instanceof Element}catch(t){}return!1},_hasParent:function(e){return Boolean(e&&e.parentNode&&this._isNode(e.parentNode))},postCreate:function(){var e;".png"==this.iconSrc.toLowerCase().substring(this.iconSrc.length-4)&&t("ie")<7?(this._hasParent(this.imgNode)&&""!=this.id&&(e=this.imgNode.parentNode,o.set(e,"id",this.id)),n.set(this.imgNode,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this.iconSrc+"', sizingMethod='scale')"),this.imgNode.src=this._blankGif.toString()):(this._hasParent(this.imgNode)&&""!=this.id&&(e=this.imgNode.parentNode,o.set(e,"id",this.id)),this.imgNode.src=this.iconSrc),this.lblNode&&a.place(s.doc.createTextNode(this.label),this.lblNode),i.setSelectable(this.domNode,!1),this.startup()},startup:function(){this.parent=this.getParent()},onMouseOver:function(e){this.parent.isOver||this.parent._setActive(e),""!=this.label&&(r.add(this.lblNode,"dojoxFishSelected"),this.parent._positionLabel(this))},onMouseOut:function(e){r.remove(this.lblNode,"dojoxFishSelected")},onClick:function(e){}})});//# sourceMappingURL=FisheyeListItem.js.map