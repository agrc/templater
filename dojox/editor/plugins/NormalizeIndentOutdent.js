//>>built
define("dojox/editor/plugins/NormalizeIndentOutdent",["dojo","dijit","dojox","dijit/_editor/_Plugin","dojo/_base/declare"],function(e,t,i,a){var r=e.declare("dojox.editor.plugins.NormalizeIndentOutdent",a,{indentBy:40,indentUnits:"px",setEditor:function(t){this.editor=t,t._indentImpl=e.hitch(this,this._indentImpl),t._outdentImpl=e.hitch(this,this._outdentImpl),t._indentoutdent_queryCommandEnabled||(t._indentoutdent_queryCommandEnabled=t.queryCommandEnabled),t.queryCommandEnabled=e.hitch(this,this._queryCommandEnabled),t.customUndo=!0},_queryCommandEnabled:function(e){var i,a,r,n,o,s,d=e.toLowerCase(),l="marginLeft";if(this._isLtr()||(l="marginRight"),"indent"===d){if(i=this.editor,a=t.range.getSelection(i.window),a&&a.rangeCount>0){for(r=a.getRangeAt(0),n=r.startContainer;n&&n!==i.document&&n!==i.editNode;){if(o=this._getTagName(n),"li"===o){for(s=n.previousSibling;s&&1!==s.nodeType;)s=s.previousSibling;return!(!s||"li"!==this._getTagName(s))}if(this._isIndentableElement(o))return!0;n=n.parentNode}if(this._isRootInline(r.startContainer))return!0}}else{if("outdent"!==d)return this.editor._indentoutdent_queryCommandEnabled(e);if(i=this.editor,a=t.range.getSelection(i.window),a&&a.rangeCount>0){for(r=a.getRangeAt(0),n=r.startContainer;n&&n!==i.document&&n!==i.editNode;){if(o=this._getTagName(n),"li"===o)return this.editor._indentoutdent_queryCommandEnabled(e);if(this._isIndentableElement(o)){var h=n.style?n.style[l]:"";return!!(h&&(h=this._convertIndent(h),h/this.indentBy>=1))}n=n.parentNode}if(this._isRootInline(r.startContainer))return!1}}return!1},_indentImpl:function(i){var a=this.editor,r=t.range.getSelection(a.window);if(r&&r.rangeCount>0){var n,o,s,d,l=r.getRangeAt(0),h=l.startContainer;if(l.startContainer===l.endContainer)if(this._isRootInline(l.startContainer)){for(o=l.startContainer;o&&o.parentNode!==a.editNode;)o=o.parentNode;for(;o&&o.previousSibling&&(this._isTextElement(o)||1===o.nodeType&&this._isInlineFormat(this._getTagName(o)));)o=o.previousSibling;if(o&&1===o.nodeType&&!this._isInlineFormat(this._getTagName(o))&&(o=o.nextSibling),o){for(d=a.document.createElement("div"),e.place(d,o,"after"),d.appendChild(o),s=d.nextSibling;s&&(this._isTextElement(s)||1===s.nodeType&&this._isInlineFormat(this._getTagName(s)));)d.appendChild(s),s=d.nextSibling;this._indentElement(d),a._sCall("selectElementChildren",[d]),a._sCall("collapse",[!0])}}else for(;h&&h!==a.document&&h!==a.editNode;){if(n=this._getTagName(h),"li"===n)return void this._indentList(h);if(this._isIndentableElement(n))return void this._indentElement(h);h=h.parentNode}else{var u;for(o=l.startContainer,s=l.endContainer;o&&this._isTextElement(o)&&o.parentNode!==a.editNode;)o=o.parentNode;for(;s&&this._isTextElement(s)&&s.parentNode!==a.editNode;)s=s.parentNode;if(s===a.editNode||s===a.document.body){for(u=o;u.nextSibling&&a._sCall("inSelection",[u]);)u=u.nextSibling;if(s=u,s===a.editNode||s===a.document.body){if(n=this._getTagName(o),"li"===n)this._indentList(o);else if(this._isIndentableElement(n))this._indentElement(o);else if(this._isTextElement(o)||this._isInlineFormat(n)){d=a.document.createElement("div"),e.place(d,o,"after");for(var c=o;c&&(this._isTextElement(c)||1===c.nodeType&&this._isInlineFormat(this._getTagName(c)));)d.appendChild(c),c=d.nextSibling;this._indentElement(d)}return}}for(s=s.nextSibling,u=o;u&&u!==s;){if(1===u.nodeType){if(n=this._getTagName(u),e.isIE&&"p"===n&&this._isEmpty(u)){u=u.nextSibling;continue}"li"===n?(d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null),this._indentList(u)):!this._isInlineFormat(n)&&this._isIndentableElement(n)?(d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null),u=this._indentElement(u)):this._isInlineFormat(n)&&(d?(d.appendChild(u),u=d):(d=a.document.createElement("div"),e.place(d,u,"after"),d.appendChild(u),u=d))}else this._isTextElement(u)&&(d?(d.appendChild(u),u=d):(d=a.document.createElement("div"),e.place(d,u,"after"),d.appendChild(u),u=d));u=u.nextSibling}d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null)}}},_indentElement:function(t){var i="marginLeft";this._isLtr()||(i="marginRight");var a=this._getTagName(t);if("ul"===a||"ol"===a){var r=this.editor.document.createElement("div");e.place(r,t,"after"),r.appendChild(t),t=r}var n=t.style?t.style[i]:"";return n?(n=this._convertIndent(n),n=parseInt(n,10)+this.indentBy+this.indentUnits):n=this.indentBy+this.indentUnits,e.style(t,i,n),t},_outdentElement:function(t){var i="marginLeft";this._isLtr()||(i="marginRight");var a=t.style?t.style[i]:"";a&&(a=this._convertIndent(a),a=a-this.indentBy>0?parseInt(a,10)-this.indentBy+this.indentUnits:"",e.style(t,i,a))},_outdentImpl:function(e){var i=this.editor,a=t.range.getSelection(i.window);if(a&&a.rangeCount>0){var r,n=a.getRangeAt(0),o=n.startContainer;if(n.startContainer===n.endContainer){for(;o&&o!==i.document&&o!==i.editNode;){if(r=this._getTagName(o),"li"===r)return this._outdentList(o);if(this._isIndentableElement(r))return this._outdentElement(o);o=o.parentNode}i.document.execCommand("outdent",!1,e)}else{for(var s=n.startContainer,d=n.endContainer;s&&3===s.nodeType;)s=s.parentNode;for(;d&&3===d.nodeType;)d=d.parentNode;d=d.nextSibling;for(var l=s;l&&l!==d;)1===l.nodeType&&(r=this._getTagName(l),"li"===r?this._outdentList(l):this._isIndentableElement(r)&&this._outdentElement(l)),l=l.nextSibling}}return null},_indentList:function(t){for(var i,a,r=this.editor,n=t.parentNode,o=t.previousSibling;o&&1!==o.nodeType;)o=o.previousSibling;var s=null,d=this._getTagName(n);if("ol"===d?s="ol":"ul"===d&&(s="ul"),s&&o&&"li"==o.tagName.toLowerCase()){var l;if(o.childNodes){var h;for(h=0;h<o.childNodes.length;h++){var u=o.childNodes[h];if(3===u.nodeType){if(e.trim(u.nodeValue)&&l)break}else{if(1!==u.nodeType||l)break;s===u.tagName.toLowerCase()&&(l=u)}}}l?l.appendChild(t):(i=r.document.createElement(s),e.style(i,{paddingTop:"0px",paddingBottom:"0px"}),a=r.document.createElement("li"),e.style(a,{listStyleImage:"none",listStyleType:"none"}),o.appendChild(i),i.appendChild(t)),r._sCall("selectElementChildren",[t]),r._sCall("collapse",[!0])}},_outdentList:function(t){var i,a=this.editor,r=t.parentNode,n=null,o=r.tagName?r.tagName.toLowerCase():"";"ol"===o?n="ol":"ul"===o&&(n="ul");var s=r.parentNode,d=this._getTagName(s);if("li"===d||"ol"===d||"ul"===d){if("ol"===d||"ul"===d){for(var l=r.previousSibling;l&&(1!==l.nodeType||1===l.nodeType&&"li"!==this._getTagName(l));)l=l.previousSibling;if(l)l.appendChild(r),s=l;else{i=t;for(var h=t;i.previousSibling;)i=i.previousSibling,1===i.nodeType&&"li"===this._getTagName(i)&&(h=i);h!==t?(e.place(h,r,"before"),h.appendChild(r),s=h):(i=a.document.createElement("li"),e.place(i,r,"before"),i.appendChild(r),s=i),e.style(r,{paddingTop:"0px",paddingBottom:"0px"})}}for(var u=t.previousSibling;u&&1!==u.nodeType;)u=u.previousSibling;for(var c=t.nextSibling;c&&1!==c.nodeType;)c=c.nextSibling;if(u)if(c){var m=a.document.createElement(n);for(e.style(m,{paddingTop:"0px",paddingBottom:"0px"}),t.appendChild(m);t.nextSibling;)m.appendChild(t.nextSibling);e.place(t,s,"after")}else e.place(t,s,"after");else e.place(t,s,"after"),t.appendChild(r);r&&this._isEmpty(r)&&r.parentNode.removeChild(r),s&&this._isEmpty(s)&&s.parentNode.removeChild(s),a._sCall("selectElementChildren",[t]),a._sCall("collapse",[!0])}else a.document.execCommand("outdent",!1,null)},_isEmpty:function(t){if(t.childNodes){var i,a=!0;for(i=0;i<t.childNodes.length;i++){var r=t.childNodes[i];if(1===r.nodeType){if("p"===this._getTagName(r)&&!e.trim(r.innerHTML))continue;a=!1;break}if(!this._isTextElement(r)){a=!1;break}var n=e.trim(r.nodeValue);if(n&&"&nbsp;"!==n&&" "!==n){a=!1;break}}return a}return!0},_isIndentableElement:function(e){switch(e){case"p":case"div":case"h1":case"h2":case"h3":case"center":case"table":case"ul":case"ol":return!0;default:return!1}},_convertIndent:function(e){var t=12;e+="",e=e.toLowerCase();var i=e.indexOf("px")>0?"px":e.indexOf("em")>0?"em":"px";return e=e.replace(/(px;?|em;?)/gi,""),"px"===i?"em"===this.indentUnits&&(e=Math.ceil(e/t)):"px"===this.indentUnits&&(e*=t),e},_isLtr:function(){var t=this.editor.document.body,i=e.getComputedStyle(t);return i?"ltr"==i.direction:!0},_isInlineFormat:function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"img":case"small":return!0;default:return!1}},_getTagName:function(e){var t="";return e&&1===e.nodeType&&(t=e.tagName?e.tagName.toLowerCase():""),t},_isRootInline:function(e){var t=this.editor;if(this._isTextElement(e)&&e.parentNode===t.editNode)return!0;if(1===e.nodeType&&this._isInlineFormat(e)&&e.parentNode===t.editNode)return!0;if(this._isTextElement(e)&&this._isInlineFormat(this._getTagName(e.parentNode))){for(e=e.parentNode;e&&e!==t.editNode&&this._isInlineFormat(this._getTagName(e));)e=e.parentNode;if(e===t.editNode)return!0}return!1},_isTextElement:function(e){return!!(e&&3===e.nodeType||4===e.nodeType)}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"normalizeindentoutdent"===t&&(e.plugin=new r({indentBy:"indentBy"in e.args&&e.args.indentBy>0?e.args.indentBy:40,indentUnits:"indentUnits"in e.args&&"em"==e.args.indentUnits.toLowerCase()?"em":"px"}))}}),r});//# sourceMappingURL=NormalizeIndentOutdent.js.map