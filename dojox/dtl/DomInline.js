//>>built
define("dojox/dtl/DomInline",["dojo/_base/lang","./dom","./_base","dijit/_WidgetBase"],function(e,t,i,r){return i.DomInline=e.extend(function(e,t){this.create(e,t)},r.prototype,{context:null,render:function(e){this.context=e||this.context,this.postMixInProperties();var t=this.template.render(this.context).getRootNode();t!=this.containerNode&&(this.containerNode.parentNode.replaceChild(t,this.containerNode),this.containerNode=t)},declaredClass:"dojox.dtl.Inline",buildRendering:function(){var t=this.domNode=document.createElement("div");this.containerNode=t.appendChild(document.createElement("div"));var i=this.srcNodeRef;i.parentNode&&i.parentNode.replaceChild(t,i),this.template=new dojox.dtl.DomTemplate(e.trim(i.text),!0),this.render()},postMixInProperties:function(){this.context=this.context.get===dojox.dtl._Context.prototype.get?this.context:new dojox.dtl.Context(this.context)}})});//# sourceMappingURL=DomInline.js.map