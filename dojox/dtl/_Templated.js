//>>built
define("dojox/dtl/_Templated",["dojo/aspect","dojo/_base/declare","./_base","dijit/_TemplatedMixin","dojo/dom-construct","dojo/cache","dojo/_base/array","dojo/string","dojo/parser"],function(e,t,a,i,r,o,n,d,s){return t("dojox.dtl._Templated",i,{_dijitTemplateCompat:!1,buildRendering:function(){var t;if(!this.domNode||this._template){if(!this._template){var i=this.getCachedTemplate(this.templatePath,this.templateString,this._skipNodeCache);i instanceof a.Template?this._template=i:t=i.cloneNode(!0)}if(!t){var o=new a._Context(this);this._created||delete o._getter;var n=r.toDom(this._template.render(o));if(1!==n.nodeType&&3!==n.nodeType)for(var d=0,l=n.childNodes.length;l>d&&(t=n.childNodes[d],1!=t.nodeType);++d);else t=n}if(this._attachTemplateNodes(t),this.widgetsInTemplate){var m,u,c=s;"[dojoType]"!=c._query&&(m=c._query,u=c._attrName,c._query="[dojoType]",c._attrName="dojoType");var h=this._startupWidgets=s.parse(t,{noStart:!this._earlyTemplatedStartup,inherited:{dir:this.dir,lang:this.lang}});m&&(c._query=m,c._attrName=u);for(var d=0;d<h.length;d++)this._processTemplateNode(h[d],function(e,t){return e[t]},function(t,a,i){return a in t?e.after(t,a,i,!0):t.on(a,i,!0)})}this.domNode&&(r.place(t,this.domNode,"before"),this.destroyDescendants(),r.destroy(this.domNode)),this.domNode=t,this._fillContent(this.srcNodeRef)}},_processTemplateNode:function(e,t,a){return this.widgetsInTemplate&&(t(e,"dojoType")||t(e,"data-dojo-type"))?!0:void this.inherited(arguments)},_templateCache:{},getCachedTemplate:function(e,t,i){var n=this._templateCache,s=t||e;return n[s]?n[s]:(t=d.trim(t||o(e,{sanitize:!0})),this._dijitTemplateCompat&&(i||t.match(/\$\{([^\}]+)\}/g))&&(t=this._stringRepl(t)),i||!t.match(/\{[{%]([^\}]+)[%}]\}/g)?n[s]=r.toDom(t):n[s]=new a.Template(t))},render:function(){this.buildRendering()},startup:function(){n.forEach(this._startupWidgets,function(e){e&&!e._started&&e.startup&&e.startup()}),this.inherited(arguments)}})});//# sourceMappingURL=_Templated.js.map