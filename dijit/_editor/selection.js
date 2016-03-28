//>>built
define("dijit/_editor/selection",["dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","../main"],function(e,t,i,o,n){var a={getType:function(){if(o.doc.getSelection){var e,t="text";try{e=o.global.getSelection()}catch(i){}if(e&&1==e.rangeCount){var n=e.getRangeAt(0);n.startContainer==n.endContainer&&n.endOffset-n.startOffset==1&&3!=n.startContainer.nodeType&&(t="control")}return t}return o.doc.selection.type.toLowerCase()},getSelectedText:function(){if(o.doc.getSelection){var e=o.global.getSelection();return e?e.toString():""}return"control"==n._editor.selection.getType()?null:o.doc.selection.createRange().text},getSelectedHtml:function(){if(o.doc.getSelection){var e=o.global.getSelection();if(e&&e.rangeCount){var t,i="";for(t=0;t<e.rangeCount;t++){var a=e.getRangeAt(t).cloneContents(),r=o.doc.createElement("div");r.appendChild(a),i+=r.innerHTML}return i}return null}return"control"==n._editor.selection.getType()?null:o.doc.selection.createRange().htmlText},getSelectedElement:function(){if("control"==n._editor.selection.getType()){if(o.doc.getSelection){var e=o.global.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=o.doc.selection.createRange();if(t&&t.item)return o.doc.selection.createRange().item(0)}return null},getParentElement:function(){if("control"==n._editor.selection.getType()){var e=this.getSelectedElement();if(e)return e.parentNode}else{if(!o.doc.getSelection){var t=o.doc.selection.createRange();return t.collapse(!0),t.parentElement()}var i=o.global.getSelection();if(i){for(var a=i.anchorNode;a&&1!=a.nodeType;)a=a.parentNode;return a}}return null},hasAncestorElement:function(e){return null!=this.getAncestorElement.apply(this,arguments)},getAncestorElement:function(e){var t=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(t,arguments)},isTag:function(e,t){if(e&&e.tagName)for(var i=e.tagName.toLowerCase(),o=0;o<t.length;o++){var n=String(t[o]).toLowerCase();if(i==n)return n}return""},getParentOfType:function(e,t){for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},collapse:function(e){if(o.doc.getSelection){var t=o.global.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e)}else{var i=o.doc.selection.createRange();i.collapse(e),i.select()}},remove:function(){var e=o.doc.selection;return o.doc.getSelection?(e=o.global.getSelection(),e.deleteFromDocument(),e):("none"!=e.type.toLowerCase()&&e.clear(),e)},selectElementChildren:function(t,n){var a,r=o.doc;if(t=e.byId(t),o.doc.getSelection){var s=o.global.getSelection();i("opera")?(a=s.rangeCount?s.getRangeAt(0):r.createRange(),a.setStart(t,0),a.setEnd(t,3==t.nodeType?t.length:t.childNodes.length),s.addRange(a)):s.selectAllChildren(t)}else if(a=t.ownerDocument.body.createTextRange(),a.moveToElementText(t),!n)try{a.select()}catch(d){}},selectElement:function(t,n){var a;t=e.byId(t);var r=t.ownerDocument,s=o.global;if(r.getSelection){var d=s.getSelection();a=r.createRange(),d.removeAllRanges&&(i("opera")&&d.getRangeAt(0)&&(a=d.getRangeAt(0)),a.selectNode(t),d.removeAllRanges(),d.addRange(a))}else try{var l=t.tagName?t.tagName.toLowerCase():"";a="img"===l||"table"===l?o.body(r).createControlRange():o.body(r).createRange(),a.addElement(t),n||a.select()}catch(c){this.selectElementChildren(t,n)}},inSelection:function(e){if(e){var t,i,n=o.doc;if(o.doc.getSelection){var a=o.global.getSelection();if(a&&a.rangeCount>0&&(i=a.getRangeAt(0)),i&&i.compareBoundaryPoints&&n.createRange)try{if(t=n.createRange(),t.setStart(e,0),1===i.compareBoundaryPoints(i.START_TO_END,t))return!0}catch(r){}}else{i=n.selection.createRange();try{t=e.ownerDocument.body.createControlRange(),t&&t.addElement(e)}catch(s){try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(d){}}if(i&&t&&1===i.compareEndPoints("EndToStart",t))return!0}}return!1}};return t.setObject("dijit._editor.selection",a),a});//# sourceMappingURL=selection.js.map