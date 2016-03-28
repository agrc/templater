//>>built
define("dijit/selection",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","dijit/focus"],function(e,t,i,o,n,a){var r=function(r){var s=r.document;this.getType=function(){if(s.getSelection){var e,t="text";try{e=r.getSelection()}catch(i){}if(e&&1==e.rangeCount){var o=e.getRangeAt(0);o.startContainer==o.endContainer&&o.endOffset-o.startOffset==1&&3!=o.startContainer.nodeType&&(t="control")}return t}return s.selection.type.toLowerCase()},this.getSelectedText=function(){if(s.getSelection){var e=r.getSelection();return e?e.toString():""}return"control"==this.getType()?null:s.selection.createRange().text},this.getSelectedHtml=function(){if(s.getSelection){var e=r.getSelection();if(e&&e.rangeCount){var t,i="";for(t=0;t<e.rangeCount;t++){var o=e.getRangeAt(t).cloneContents(),n=s.createElement("div");n.appendChild(o),i+=n.innerHTML}return i}return null}return"control"==this.getType()?null:s.selection.createRange().htmlText},this.getSelectedElement=function(){if("control"==this.getType()){if(s.getSelection){var e=r.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=s.selection.createRange();if(t&&t.item)return s.selection.createRange().item(0)}return null},this.getParentElement=function(){if("control"==this.getType()){var e=this.getSelectedElement();if(e)return e.parentNode}else{if(!s.getSelection){var t=s.selection.createRange();return t.collapse(!0),t.parentElement()}var i=s.getSelection();if(i){for(var o=i.anchorNode;o&&1!=o.nodeType;)o=o.parentNode;return o}}return null},this.hasAncestorElement=function(e){return null!=this.getAncestorElement.apply(this,arguments)},this.getAncestorElement=function(e){var t=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(t,arguments)},this.isTag=function(e,t){if(e&&e.tagName)for(var i=e.tagName.toLowerCase(),o=0;o<t.length;o++){var n=String(t[o]).toLowerCase();if(i==n)return n}return""},this.getParentOfType=function(e,t){for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},this.collapse=function(e){if(s.getSelection){var t=r.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e)}else{var i=s.selection.createRange();i.collapse(e),i.select()}},this.remove=function(){var e=s.selection;return s.getSelection?(e=r.getSelection(),e.deleteFromDocument(),e):("none"!=e.type.toLowerCase()&&e.clear(),e)},this.selectElementChildren=function(e,i){var n;if(e=t.byId(e),s.getSelection){var a=r.getSelection();o("opera")?(n=a.rangeCount?a.getRangeAt(0):s.createRange(),n.setStart(e,0),n.setEnd(e,3==e.nodeType?e.length:e.childNodes.length),a.addRange(n)):a.selectAllChildren(e)}else if(n=e.ownerDocument.body.createTextRange(),n.moveToElementText(e),!i)try{n.select()}catch(d){}},this.selectElement=function(e,i){var a;if(e=t.byId(e),s.getSelection){var r=s.getSelection();a=s.createRange(),r.removeAllRanges&&(o("opera")&&r.getRangeAt(0)&&(a=r.getRangeAt(0)),a.selectNode(e),r.removeAllRanges(),r.addRange(a))}else try{var d=e.tagName?e.tagName.toLowerCase():"";a="img"===d||"table"===d?n.body(s).createControlRange():n.body(s).createRange(),a.addElement(e),i||a.select()}catch(l){this.selectElementChildren(e,i)}},this.inSelection=function(e){if(e){var t,i;if(s.getSelection){var o=r.getSelection();if(o&&o.rangeCount>0&&(i=o.getRangeAt(0)),i&&i.compareBoundaryPoints&&s.createRange)try{if(t=s.createRange(),t.setStart(e,0),1===i.compareBoundaryPoints(i.START_TO_END,t))return!0}catch(n){}}else{i=s.selection.createRange();try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(a){}if(i&&t&&1===i.compareEndPoints("EndToStart",t))return!0}}return!1},this.getBookmark=function(){var e,t,i,o=s.selection,n=a.curNode;if(s.getSelection){if(o=r.getSelection())if(o.isCollapsed){if(i=n?n.tagName:"",i&&(i=i.toLowerCase(),"textarea"==i||"input"==i&&(!n.type||"text"==n.type.toLowerCase())))return o={start:n.selectionStart,end:n.selectionEnd,node:n,pRange:!0},{isCollapsed:o.end<=o.start,mark:o};e={isCollapsed:!0},o.rangeCount&&(e.mark=o.getRangeAt(0).cloneRange())}else t=o.getRangeAt(0),e={isCollapsed:!1,mark:t.cloneRange()}}else if(o){if(i=n?n.tagName:"",i=i.toLowerCase(),n&&i&&("button"==i||"textarea"==i||"input"==i))return o.type&&"none"==o.type.toLowerCase()?{isCollapsed:!0,mark:null}:(t=o.createRange(),{isCollapsed:!t.text||!t.text.length,mark:{range:t,pRange:!0}});e={};try{t=o.createRange(),e.isCollapsed=!("Text"==o.type?t.htmlText.length:t.length)}catch(d){return e.isCollapsed=!0,e}if("CONTROL"==o.type.toUpperCase())if(t.length){e.mark=[];for(var l=0,c=t.length;c>l;)e.mark.push(t.item(l++))}else e.isCollapsed=!0,e.mark=null;else e.mark=t.getBookmark()}return e},this.moveToBookmark=function(t){var o=t.mark;if(o)if(s.getSelection){var n=r.getSelection();if(n&&n.removeAllRanges)if(o.pRange){var a=o.node;a.selectionStart=o.start,a.selectionEnd=o.end}else n.removeAllRanges(),n.addRange(o)}else if(s.selection&&o){var d;o.pRange?d=o.range:i.isArray(o)?(d=s.body.createControlRange(),e.forEach(o,function(e){d.addElement(e)})):(d=s.body.createTextRange(),d.moveToBookmark(o)),d.select()}},this.isCollapsed=function(){return this.getBookmark().isCollapsed}},s=new r(window);return s.SelectionManager=r,s});//# sourceMappingURL=selection.js.map