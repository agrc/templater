//>>built
define("dojox/mdnd/DropIndicator",["dojo/_base/kernel","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","./AreaManager"],function(e,t,i,a){var o=t("dojox.mdnd.DropIndicator",null,{node:null,constructor:function(){var e=document.createElement("div"),t=document.createElement("div");e.appendChild(t),i.add(e,"dropIndicator"),this.node=e},place:function(e,t,i){i&&(this.node.style.height=i.h+"px");try{return t?e.insertBefore(this.node,t):e.appendChild(this.node),this.node}catch(a){return null}},remove:function(){this.node&&(this.node.style.height="",this.node.parentNode&&this.node.parentNode.removeChild(this.node))},destroy:function(){this.node&&(this.node.parentNode&&this.node.parentNode.removeChild(this.node),a.destroy(this.node),delete this.node)}});return dojox.mdnd.areaManager()._dropIndicator=new dojox.mdnd.DropIndicator,o});//# sourceMappingURL=DropIndicator.js.map