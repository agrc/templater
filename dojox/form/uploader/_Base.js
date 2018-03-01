//>>built
define("dojox/form/uploader/_Base",["dojo/dom-form","dojo/dom-style","dojo/dom-construct","dojo/dom-attr","dojo/has","dojo/_base/declare","dojo/_base/event","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin"],function(e,t,a,i,r,o,n,l,d,s){return r.add("FormData",function(){return!!window.FormData}),r.add("xhr-sendAsBinary",function(){var e=window.XMLHttpRequest&&new window.XMLHttpRequest;return e&&!!e.sendAsBinary}),r.add("file-multiple",function(){return!!{true:1,false:1}[i.get(document.createElement("input",{type:"file"}),"multiple")]}),o("dojox.form.uploader._Base",[l,d,s],{getForm:function(){if(!this.form)for(var e=this.domNode;e&&e.tagName&&e!==document.body;){if("form"==e.tagName.toLowerCase()){this.form=e;break}e=e.parentNode}return this.form},getUrl:function(){return this.uploadUrl&&(this.url=this.uploadUrl),this.url?this.url:(this.getForm()&&(this.url=this.form.action),this.url)},connectForm:function(){this.url=this.getUrl(),!this._fcon&&this.getForm()&&(this._fcon=!0,this.connect(this.form,"onsubmit",function(e){n.stop(e),this.submit(this.form)}))},supports:function(e){switch(e){case"multiple":return"flash"!=this.force&&"iframe"!=this.force&&r("file-multiple");case"FormData":return r(e);case"sendAsBinary":return r("xhr-sendAsBinary")}return!1},getMimeType:function(){return"application/octet-stream"},getFileType:function(e){return e.substring(e.lastIndexOf(".")+1).toUpperCase()},convertBytes:function(e){var t=Math.round(e/1024*1e5)/1e5,a=Math.round(e/1048576*1e5)/1e5,i=Math.round(e/1073741824*1e5)/1e5,r=e;return t>1&&(r=t.toFixed(1)+" kb"),a>1&&(r=a.toFixed(1)+" mb"),i>1&&(r=i.toFixed(1)+" gb"),{kb:t,mb:a,gb:i,bytes:e,value:r}}})});//# sourceMappingURL=_Base.js.map