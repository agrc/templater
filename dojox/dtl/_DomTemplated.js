//>>built
define("dojox/dtl/_DomTemplated",["dojo/dom-construct",".","./contrib/dijit","./render/dom","dojo/cache","dijit/_TemplatedMixin"],function(e,t,a,i,r,o){return t._DomTemplated=function(){},t._DomTemplated.prototype={_dijitTemplateCompat:!1,buildRendering:function(){if(this.domNode=this.srcNodeRef||dojo.create("div"),!this._render){var t=a.widgetsInTemplate;a.widgetsInTemplate=this.widgetsInTemplate,this.template=this.template&&this.template!==!0?this.template:this._getCachedTemplate(this.templatePath,this.templateString),this._render=new i.Render(this.domNode,this.template),a.widgetsInTemplate=t}var r=this._getContext();this._created||delete r._getter,this.render(r),this.domNode=this.template.getRootNode(),this.srcNodeRef&&this.srcNodeRef.parentNode&&(e.destroy(this.srcNodeRef),delete this.srcNodeRef)},setTemplate:function(e,t){dojox.dtl.text._isTemplate(e)?this.template=this._getCachedTemplate(null,e):this.template=this._getCachedTemplate(e),this.render(t)},render:function(e,t){t&&(this.template=t),this._render.render(this._getContext(e),this.template)},_getContext:function(e){return e instanceof dojox.dtl.Context||(e=!1),e=e||new dojox.dtl.Context(this),e.setThis(this),e},_getCachedTemplate:function(e,t){this._templates||(this._templates={}),t||(t=r(e,{sanitize:!0}));var a=t,i=this._templates;return i[a]?i[a]:i[a]=new dojox.dtl.DomTemplate(o.getCachedTemplate(t,!0))}},t._DomTemplated});//# sourceMappingURL=_DomTemplated.js.map