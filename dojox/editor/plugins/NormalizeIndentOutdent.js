//>>built
define("dojox/editor/plugins/NormalizeIndentOutdent",["dojo","dijit","dojox","dijit/_editor/_Plugin","dojo/_base/declare"],function(e,t,i,a){var r=e.declare("dojox.editor.plugins.NormalizeIndentOutdent",a,{indentBy:40,indentUnits:"px",setEditor:function(t){this.editor=t,t._indentImpl=e.hitch(this,this._indentImpl),t._outdentImpl=e.hitch(this,this._outdentImpl),t._indentoutdent_queryCommandEnabled||(t._indentoutdent_queryCommandEnabled=t.queryCommandEnabled),t.queryCommandEnabled=e.hitch(this,this._queryCommandEnabled),t.customUndo=!0},_queryCommandEnabled:function(e){var i,a,r,o,n,s,d=e.toLowerCase(),l="marginLeft";if(this._isLtr()||(l="marginRight"),"indent"===d){if(i=this.editor,(a=t.range.getSelection(i.window))&&a.rangeCount>0){for(r=a.getRangeAt(0),o=r.startContainer;o&&o!==i.document&&o!==i.editNode;){if("li"===(n=this._getTagName(o))){for(s=o.previousSibling;s&&1!==s.nodeType;)s=s.previousSibling;return!(!s||"li"!==this._getTagName(s))}if(this._isIndentableElement(n))return!0;o=o.parentNode}if(this._isRootInline(r.startContainer))return!0}}else{if("outdent"!==d)return this.editor._indentoutdent_queryCommandEnabled(e);if(i=this.editor,(a=t.range.getSelection(i.window))&&a.rangeCount>0){for(r=a.getRangeAt(0),o=r.startContainer;o&&o!==i.document&&o!==i.editNode;){if("li"===(n=this._getTagName(o)))return this.editor._indentoutdent_queryCommandEnabled(e);if(this._isIndentableElement(n)){var m=o.style?o.style[l]:"";return!!(m&&(m=this._convertIndent(m))/this.indentBy>=1)}o=o.parentNode}if(this._isRootInline(r.startContainer))return!1}}return!1},_indentImpl:function(i){var a=this.editor,r=t.range.getSelection(a.window);if(r&&r.rangeCount>0){var o,n,s,d,l=r.getRangeAt(0),m=l.startContainer;if(l.startContainer===l.endContainer)if(this._isRootInline(l.startContainer)){for(n=l.startContainer;n&&n.parentNode!==a.editNode;)n=n.parentNode;for(;n&&n.previousSibling&&(this._isTextElement(n)||1===n.nodeType&&this._isInlineFormat(this._getTagName(n)));)n=n.previousSibling;if(n&&1===n.nodeType&&!this._isInlineFormat(this._getTagName(n))&&(n=n.nextSibling),n){for(d=a.document.createElement("div"),e.place(d,n,"after"),d.appendChild(n),s=d.nextSibling;s&&(this._isTextElement(s)||1===s.nodeType&&this._isInlineFormat(this._getTagName(s)));)d.appendChild(s),s=d.nextSibling;this._indentElement(d),a._sCall("selectElementChildren",[d]),a._sCall("collapse",[!0])}}else for(;m&&m!==a.document&&m!==a.editNode;){if("li"===(o=this._getTagName(m)))return void this._indentList(m);if(this._isIndentableElement(o))return void this._indentElement(m);m=m.parentNode}else{var h;for(n=l.startContainer,s=l.endContainer;n&&this._isTextElement(n)&&n.parentNode!==a.editNode;)n=n.parentNode;for(;s&&this._isTextElement(s)&&s.parentNode!==a.editNode;)s=s.parentNode;if(s===a.editNode||s===a.document.body){for(h=n;h.nextSibling&&a._sCall("inSelection",[h]);)h=h.nextSibling;if((s=h)===a.editNode||s===a.document.body){if("li"===(o=this._getTagName(n)))this._indentList(n);else if(this._isIndentableElement(o))this._indentElement(n);else if(this._isTextElement(n)||this._isInlineFormat(o)){d=a.document.createElement("div"),e.place(d,n,"after");for(var u=n;u&&(this._isTextElement(u)||1===u.nodeType&&this._isInlineFormat(this._getTagName(u)));)d.appendChild(u),u=d.nextSibling;this._indentElement(d)}return}}for(s=s.nextSibling,h=n;h&&h!==s;){if(1===h.nodeType){if(o=this._getTagName(h),e.isIE&&"p"===o&&this._isEmpty(h)){h=h.nextSibling;continue}"li"===o?(d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null),this._indentList(h)):!this._isInlineFormat(o)&&this._isIndentableElement(o)?(d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null),h=this._indentElement(h)):this._isInlineFormat(o)&&(d?(d.appendChild(h),h=d):(d=a.document.createElement("div"),e.place(d,h,"after"),d.appendChild(h),h=d))}else this._isTextElement(h)&&(d?(d.appendChild(h),h=d):(d=a.document.createElement("div"),e.place(d,h,"after"),d.appendChild(h),h=d));h=h.nextSibling}d&&(this._isEmpty(d)?d.parentNode.removeChild(d):this._indentElement(d),d=null)}}},_indentElement:function(t){var i="marginLeft";this._isLtr()||(i="marginRight");var a=this._getTagName(t);if("ul"===a||"ol"===a){var r=this.editor.document.createElement("div");e.place(r,t,"after"),r.appendChild(t),t=r}var o=t.style?t.style[i]:"";return o?(o=this._convertIndent(o),o=parseInt(o,10)+this.indentBy+this.indentUnits):o=this.indentBy+this.indentUnits,e.style(t,i,o),t},_outdentElement:function(t){var i="marginLeft";this._isLtr()||(i="marginRight");var a=t.style?t.style[i]:"";a&&(a=this._convertIndent(a),a=a-this.indentBy>0?parseInt(a,10)-this.indentBy+this.indentUnits:"",e.style(t,i,a))},_outdentImpl:function(e){var i=this.editor,a=t.range.getSelection(i.window);if(a&&a.rangeCount>0){var r,o=a.getRangeAt(0),n=o.startContainer;if(o.startContainer===o.endContainer){for(;n&&n!==i.document&&n!==i.editNode;){if("li"===(r=this._getTagName(n)))return this._outdentList(n);if(this._isIndentableElement(r))return this._outdentElement(n);n=n.parentNode}i.document.execCommand("outdent",!1,e)}else{for(var s=o.startContainer,d=o.endContainer;s&&3===s.nodeType;)s=s.parentNode;for(;d&&3===d.nodeType;)d=d.parentNode;d=d.nextSibling;for(var l=s;l&&l!==d;)1===l.nodeType&&(r=this._getTagName(l),"li"===r?this._outdentList(l):this._isIndentableElement(r)&&this._outdentElement(l)),l=l.nextSibling}}return null},_indentList:function(t){for(var i,a,r=this.editor,o=t.parentNode,n=t.previousSibling;n&&1!==n.nodeType;)n=n.previousSibling;var s=null,d=this._getTagName(o);if("ol"===d?s="ol":"ul"===d&&(s="ul"),s&&n&&"li"==n.tagName.toLowerCase()){var l;if(n.childNodes){var m;for(m=0;m<n.childNodes.length;m++){var h=n.childNodes[m];if(3===h.nodeType){if(e.trim(h.nodeValue)&&l)break}else{if(1!==h.nodeType||l)break;s===h.tagName.toLowerCase()&&(l=h)}}}l?l.appendChild(t):(i=r.document.createElement(s),e.style(i,{paddingTop:"0px",paddingBottom:"0px"}),a=r.document.createElement("li"),e.style(a,{listStyleImage:"none",listStyleType:"none"}),n.appendChild(i),i.appendChild(t)),r._sCall("selectElementChildren",[t]),r._sCall("collapse",[!0])}},_outdentList:function(t){var i,a=this.editor,r=t.parentNode,o=null,n=r.tagName?r.tagName.toLowerCase():"";"ol"===n?o="ol":"ul"===n&&(o="ul");var s=r.parentNode,d=this._getTagName(s);if("li"===d||"ol"===d||"ul"===d){if("ol"===d||"ul"===d){for(var l=r.previousSibling;l&&(1!==l.nodeType||1===l.nodeType&&"li"!==this._getTagName(l));)l=l.previousSibling;if(l)l.appendChild(r),s=l;else{i=t;for(var m=t;i.previousSibling;)i=i.previousSibling,1===i.nodeType&&"li"===this._getTagName(i)&&(m=i);m!==t?(e.place(m,r,"before"),m.appendChild(r),s=m):(i=a.document.createElement("li"),e.place(i,r,"before"),i.appendChild(r),s=i),e.style(r,{paddingTop:"0px",paddingBottom:"0px"})}}for(var h=t.previousSibling;h&&1!==h.nodeType;)h=h.previousSibling;for(var u=t.nextSibling;u&&1!==u.nodeType;)u=u.nextSibling;if(h)if(u){var f=a.document.createElement(o);for(e.style(f,{paddingTop:"0px",paddingBottom:"0px"}),t.appendChild(f);t.nextSibling;)f.appendChild(t.nextSibling);e.place(t,s,"after")}else e.place(t,s,"after");else e.place(t,s,"after"),t.appendChild(r);r&&this._isEmpty(r)&&r.parentNode.removeChild(r),s&&this._isEmpty(s)&&s.parentNode.removeChild(s),a._sCall("selectElementChildren",[t]),a._sCall("collapse",[!0])}else a.document.execCommand("outdent",!1,null)},_isEmpty:function(t){if(t.childNodes){var i,a=!0;for(i=0;i<t.childNodes.length;i++){var r=t.childNodes[i];if(1===r.nodeType){if("p"===this._getTagName(r)&&!e.trim(r.innerHTML))continue;a=!1;break}if(!this._isTextElement(r)){a=!1;break}var o=e.trim(r.nodeValue);if(o&&"&nbsp;"!==o&&" "!==o){a=!1;break}}return a}return!0},_isIndentableElement:function(e){switch(e){case"p":case"div":case"h1":case"h2":case"h3":case"center":case"table":case"ul":case"ol":return!0;default:return!1}},_convertIndent:function(e){var t=12;e+="",e=e.toLowerCase();var i=e.indexOf("px")>0?"px":e.indexOf("em")>0?"em":"px";return e=e.replace(/(px;?|em;?)/gi,""),"px"===i?"em"===this.indentUnits&&(e=Math.ceil(e/t)):"px"===this.indentUnits&&(e*=t),e},_isLtr:function(){var t=this.editor.document.body,i=e.getComputedStyle(t);return!i||"ltr"==i.direction},_isInlineFormat:function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"img":case"small":return!0;default:return!1}},_getTagName:function(e){var t="";return e&&1===e.nodeType&&(t=e.tagName?e.tagName.toLowerCase():""),t},_isRootInline:function(e){var t=this.editor;if(this._isTextElement(e)&&e.parentNode===t.editNode)return!0;if(1===e.nodeType&&this._isInlineFormat(e)&&e.parentNode===t.editNode)return!0;if(this._isTextElement(e)&&this._isInlineFormat(this._getTagName(e.parentNode))){for(e=e.parentNode;e&&e!==t.editNode&&this._isInlineFormat(this._getTagName(e));)e=e.parentNode;if(e===t.editNode)return!0}return!1},_isTextElement:function(e){return!!(e&&3===e.nodeType||4===e.nodeType)}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){"normalizeindentoutdent"===e.args.name.toLowerCase()&&(e.plugin=new r({indentBy:"indentBy"in e.args&&e.args.indentBy>0?e.args.indentBy:40,indentUnits:"indentUnits"in e.args&&"em"==e.args.indentUnits.toLowerCase()?"em":"px"}))}}),r});//# sourceMappingURL=NormalizeIndentOutdent.js.map