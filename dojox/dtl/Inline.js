//>>built
define("dojox/dtl/Inline",["dojo/_base/lang","./_base","dijit/_WidgetBase","dojo/query"],function(e,t,a,i){return t.Inline=e.extend(function(e,t){this.create(e,t)},a.prototype,{context:null,render:function(e){this.context=e||this.context,this.postMixInProperties(),i("*",this.domNode).orphan(),this.domNode.innerHTML=this.template.render(this.context)},declaredClass:"dojox.dtl.Inline",buildRendering:function(){var a=this.domNode=document.createElement("div"),i=this.srcNodeRef;i.parentNode&&i.parentNode.replaceChild(a,i),this.template=new t.Template(e.trim(i.text),!0),this.render()},postMixInProperties:function(){this.context=this.context.get===t._Context.prototype.get?this.context:new t._Context(this.context)}})});//# sourceMappingURL=Inline.js.map