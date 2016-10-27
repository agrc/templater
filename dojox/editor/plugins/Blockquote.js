//>>built
define("dojox/editor/plugins/Blockquote",["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/ToggleButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Blockquote"],function(e,t,a,i){var r=e.declare("dojox.editor.plugins.Blockquote",i,{iconClassPrefix:"dijitAdditionalEditorIcon",_initButton:function(){this._nlsResources=e.i18n.getLocalization("dojox.editor.plugins","Blockquote"),this.button=new t.form.ToggleButton({label:this._nlsResources.blockquote,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Blockquote",tabIndex:"-1",onClick:e.hitch(this,"_toggleQuote")})},setEditor:function(e){this.editor=e,this._initButton(),this.connect(this.editor,"onNormalizedDisplayChanged","updateState"),e.customUndo=!0},_toggleQuote:function(a){try{var i=this.editor;i.focus();var r,o,n,d,s=this.button.get("checked"),l=t.range.getSelection(i.window);if(l&&l.rangeCount>0&&(r=l.getRangeAt(0)),r){if(i.beginEditing(),s){var m,u;if(r.startContainer===r.endContainer){if(this._isRootInline(r.startContainer)){for(n=r.startContainer;n&&n.parentNode!==i.editNode;)n=n.parentNode;for(;n&&n.previousSibling&&(this._isTextElement(n)||1===n.nodeType&&this._isInlineFormat(this._getTagName(n)));)n=n.previousSibling;if(n&&1===n.nodeType&&!this._isInlineFormat(this._getTagName(n))&&(n=n.nextSibling),n)for(m=i.document.createElement("blockquote"),e.place(m,n,"after"),m.appendChild(n),d=m.nextSibling;d&&(this._isTextElement(d)||1===d.nodeType&&this._isInlineFormat(this._getTagName(d)));)m.appendChild(d),d=m.nextSibling}else{for(var h=r.startContainer;(this._isTextElement(h)||this._isInlineFormat(this._getTagName(h))||"li"===this._getTagName(h))&&h!==i.editNode&&h!==i.document.body;)h=h.parentNode;h!==i.editNode&&h!==h.ownerDocument.documentElement&&(m=i.document.createElement("blockquote"),e.place(m,h,"after"),m.appendChild(h))}m&&(i._sCall("selectElementChildren",[m]),i._sCall("collapse",[!0]))}else{var c;for(n=r.startContainer,d=r.endContainer;n&&this._isTextElement(n)&&n.parentNode!==i.editNode;)n=n.parentNode;for(c=n;c.nextSibling&&i._sCall("inSelection",[c]);)c=c.nextSibling;if(d=c,d===i.editNode||d===i.document.body){if(m=i.document.createElement("blockquote"),e.place(m,n,"after"),u=this._getTagName(n),this._isTextElement(n)||this._isInlineFormat(u))for(var f=n;f&&(this._isTextElement(f)||1===f.nodeType&&this._isInlineFormat(this._getTagName(f)));)m.appendChild(f),f=m.nextSibling;else m.appendChild(n);return}for(d=d.nextSibling,c=n;c&&c!==d;){if(1===c.nodeType){if(u=this._getTagName(c),"br"!==u){if(!window.getSelection&&"p"===u&&this._isEmpty(c)){c=c.nextSibling;continue}this._isInlineFormat(u)?(m?m.appendChild(c):(m=i.document.createElement("blockquote"),e.place(m,c,"after"),m.appendChild(c)),c=m):(m&&this._isEmpty(m)&&m.parentNode.removeChild(m),m=i.document.createElement("blockquote"),e.place(m,c,"after"),m.appendChild(c),c=m)}}else this._isTextElement(c)&&(m?m.appendChild(c):(m=i.document.createElement("blockquote"),e.place(m,c,"after"),m.appendChild(c)),c=m);c=c.nextSibling}m&&(this._isEmpty(m)?m.parentNode.removeChild(m):(i._sCall("selectElementChildren",[m]),i._sCall("collapse",[!0])),m=null)}}else{var y=!1;if(r.startContainer===r.endContainer){for(o=r.endContainer;o&&o!==i.editNode&&o!==i.document.body;){var p=o.tagName?o.tagName.toLowerCase():"";if("blockquote"===p){y=!0;break}o=o.parentNode}if(y){for(var v;o.firstChild;)v=o.firstChild,e.place(v,o,"before");o.parentNode.removeChild(o),v&&(i._sCall("selectElementChildren",[v]),i._sCall("collapse",[!0]))}}else{for(n=r.startContainer,d=r.endContainer;n&&this._isTextElement(n)&&n.parentNode!==i.editNode;)n=n.parentNode;for(var g=[],M=n;M&&M.nextSibling&&i._sCall("inSelection",[M]);)M.parentNode&&"blockquote"===this._getTagName(M.parentNode)&&(M=M.parentNode),g.push(M),M=M.nextSibling;for(var b=this._findBlockQuotes(g);b.length;){var w=b.pop();if(w.parentNode){for(;w.firstChild;)e.place(w.firstChild,w,"before");w.parentNode.removeChild(w)}}}}i.endEditing()}i.onNormalizedDisplayChanged()}catch(_){}},updateState:function(){var e=this.editor,a=this.get("disabled");if(e&&e.isLoaded&&this.button){if(this.button.set("disabled",a),a)return;var i,r=!1,o=t.range.getSelection(e.window);if(o&&o.rangeCount>0){var n=o.getRangeAt(0);n&&(i=n.endContainer)}for(;i&&i!==e.editNode&&i!==e.document;){var d=i.tagName?i.tagName.toLowerCase():"";if("blockquote"===d){r=!0;break}i=i.parentNode}this.button.set("checked",r)}},_findBlockQuotes:function(e){var t=[];if(e){var a;for(a=0;a<e.length;a++){var i=e[a];1===i.nodeType&&("blockquote"===this._getTagName(i)&&t.push(i),i.childNodes&&i.childNodes.length>0&&(t=t.concat(this._findBlockQuotes(i.childNodes))))}}return t},_getTagName:function(e){var t="";return e&&1===e.nodeType&&(t=e.tagName?e.tagName.toLowerCase():""),t},_isRootInline:function(e){var t=this.editor;if(this._isTextElement(e)&&e.parentNode===t.editNode)return!0;if(1===e.nodeType&&this._isInlineFormat(e)&&e.parentNode===t.editNode)return!0;if(this._isTextElement(e)&&this._isInlineFormat(this._getTagName(e.parentNode))){for(e=e.parentNode;e&&e!==t.editNode&&this._isInlineFormat(this._getTagName(e));)e=e.parentNode;if(e===t.editNode)return!0}return!1},_isTextElement:function(e){return!!(e&&3===e.nodeType||4===e.nodeType)},_isEmpty:function(t){if(t.childNodes){var a,i=!0;for(a=0;a<t.childNodes.length;a++){var r=t.childNodes[a];if(1===r.nodeType){if("p"===this._getTagName(r)&&!e.trim(r.innerHTML))continue;i=!1;break}if(!this._isTextElement(r)){i=!1;break}var o=e.trim(r.nodeValue);if(o&&"&nbsp;"!==o&&" "!==o){i=!1;break}}return i}return!0},_isInlineFormat:function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"img":case"small":return!0;default:return!1}}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"blockquote"===t&&(e.plugin=new r({}))}}),r});//# sourceMappingURL=Blockquote.js.map