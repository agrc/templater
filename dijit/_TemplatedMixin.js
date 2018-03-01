//>>built
define("dijit/_TemplatedMixin",["dojo/cache","dojo/_base/declare","dojo/dom-construct","dojo/_base/lang","dojo/on","dojo/sniff","dojo/string","./_AttachMixin"],function(t,e,i,o,n,a,s,d){var r=e("dijit._TemplatedMixin",d,{templateString:null,templatePath:null,_skipNodeCache:!1,searchContainerNode:!0,_stringRepl:function(t){var e=this.declaredClass,i=this;return s.substitute(t,this,function(t,n){if("!"==n.charAt(0)&&(t=o.getObject(n.substr(1),!1,i)),void 0===t)throw new Error(e+" template:"+n);return null==t?"":"!"==n.charAt(0)?t:this._escapeValue(""+t)},this)},_escapeValue:function(t){return t.replace(/["'<>&]/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}[t]})},buildRendering:function(){if(!this._rendered){this.templateString||(this.templateString=t(this.templatePath,{sanitize:!0}));var e,n=r.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument);if(o.isString(n)){if(e=i.toDom(this._stringRepl(n),this.ownerDocument),1!=e.nodeType)throw new Error("Invalid template: "+n)}else e=n.cloneNode(!0);this.domNode=e}this.inherited(arguments),this._rendered||this._fillContent(this.srcNodeRef),this._rendered=!0},_fillContent:function(t){var e=this.containerNode;if(t&&e)for(;t.hasChildNodes();)e.appendChild(t.firstChild)}});return r._templateCache={},r.getCachedTemplate=function(t,e,o){var n=r._templateCache,a=t,d=n[a];if(d){try{if(!d.ownerDocument||d.ownerDocument==(o||document))return d}catch(t){}i.destroy(d)}if(t=s.trim(t),e||t.match(/\$\{([^\}]+)\}/g))return n[a]=t;var h=i.toDom(t,o);if(1!=h.nodeType)throw new Error("Invalid template: "+t);return n[a]=h},a("ie")&&n(window,"unload",function(){var t=r._templateCache;for(var e in t){var o=t[e];"object"==typeof o&&i.destroy(o),delete t[e]}}),r});//# sourceMappingURL=_TemplatedMixin.js.map