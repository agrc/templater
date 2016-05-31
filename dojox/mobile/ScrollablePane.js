//>>built
define("dojox/mobile/ScrollablePane",["dojo/_base/array","dojo/_base/declare","dojo/sniff","dojo/_base/window","dojo/dom-construct","dojo/dom-style","./common","./_ScrollableMixin","./Pane","./_maskUtils"],function(e,t,i,r,a,o,n,s,l,d){return t("dojox.mobile.ScrollablePane",[l,s],{roundCornerMask:!1,radius:0,baseClass:"mblScrollablePane",buildRendering:function(){var e=this.containerNode=a.create("div",{className:"mblScrollableViewContainer",style:{width:"v"===this.scrollDir?"100%":""}});if(this.inherited(arguments),this.srcNodeRef)for(var t=0,r=this.srcNodeRef.childNodes.length;r>t;t++)this.containerNode.appendChild(this.srcNodeRef.firstChild);if(this.roundCornerMask&&i("mask-image")){var o=this.containerNode,s=this.maskNode=a.create("div",{className:"mblScrollablePaneMask"});s.appendChild(o),e=s}this.domNode.appendChild(e),n.setSelectable(this.containerNode,!1)},resize:function(){this.inherited(arguments),this.roundCornerMask&&this.createRoundMask(),e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},isTopLevel:function(e){var t=this.getParent&&this.getParent();return!t||!t.resize},createRoundMask:function(){if(i("mask-image")){if(0==this.domNode.offsetHeight)return;this.maskNode.style.height=this.domNode.offsetHeight+"px";var e=this.getChildren()[0],t=this.containerNode,r=e?e.domNode:t.childNodes.length>0&&(1===t.childNodes[0].nodeType?t.childNodes[0]:t.childNodes[1]),a=this.radius;if(!a){var n=function(e){return parseInt(o.get(e,"borderTopLeftRadius"))};if(e){if(a=n(e.domNode),!a){var s=e.getChildren()[0];a=s?n(s.domNode):0}}else a=n(r)}var l=(this.domNode.offsetWidth,r.offsetWidth),u=this.domNode.offsetHeight,c=o.get(r,"marginTop"),h=o.get(r,"marginBottom"),m=o.get(r,"marginLeft");d.createRoundMask(this.maskNode,m,c,0,h,l,u-h-c,a,a)}}})});//# sourceMappingURL=ScrollablePane.js.map