//>>built
define("dijit/selection",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","dijit/focus"],function(e,t,o,i,n,a){var r=function(r){var s=r.document;this.getType=function(){if(s.getSelection){var e,t="text";try{e=r.getSelection()}catch(e){}if(e&&1==e.rangeCount){var o=e.getRangeAt(0);o.startContainer==o.endContainer&&o.endOffset-o.startOffset==1&&3!=o.startContainer.nodeType&&(t="control")}return t}return s.selection.type.toLowerCase()},this.getSelectedText=function(){if(s.getSelection){var e=r.getSelection();return e?e.toString():""}return"control"==this.getType()?null:s.selection.createRange().text},this.getSelectedHtml=function(){if(s.getSelection){var e=r.getSelection();if(e&&e.rangeCount){var t,o="";for(t=0;t<e.rangeCount;t++){var i=e.getRangeAt(t).cloneContents(),n=s.createElement("div");n.appendChild(i),o+=n.innerHTML}return o}return null}return"control"==this.getType()?null:s.selection.createRange().htmlText},this.getSelectedElement=function(){if("control"==this.getType()){if(s.getSelection){var e=r.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=s.selection.createRange();if(t&&t.item)return s.selection.createRange().item(0)}return null},this.getParentElement=function(){if("control"==this.getType()){var e=this.getSelectedElement();if(e)return e.parentNode}else{if(!s.getSelection){var t=s.selection.createRange();return t.collapse(!0),t.parentElement()}var o=s.getSelection();if(o){for(var i=o.anchorNode;i&&1!=i.nodeType;)i=i.parentNode;return i}}return null},this.hasAncestorElement=function(e){return null!=this.getAncestorElement.apply(this,arguments)},this.getAncestorElement=function(e){var t=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(t,arguments)},this.isTag=function(e,t){if(e&&e.tagName)for(var o=e.tagName.toLowerCase(),i=0;i<t.length;i++){var n=String(t[i]).toLowerCase();if(o==n)return n}return""},this.getParentOfType=function(e,t){for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},this.collapse=function(e){if(s.getSelection){var t=r.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e)}else{var o=s.selection.createRange();o.collapse(e),o.select()}},this.remove=function(){var e=s.selection;return s.getSelection?(e=r.getSelection(),e.deleteFromDocument(),e):("none"!=e.type.toLowerCase()&&e.clear(),e)},this.selectElementChildren=function(e,o){var n;if(e=t.byId(e),s.getSelection){var a=r.getSelection();i("opera")?(n=a.rangeCount?a.getRangeAt(0):s.createRange(),n.setStart(e,0),n.setEnd(e,3==e.nodeType?e.length:e.childNodes.length),a.addRange(n)):a.selectAllChildren(e)}else if(n=e.ownerDocument.body.createTextRange(),n.moveToElementText(e),!o)try{n.select()}catch(e){}},this.selectElement=function(e,o){var a;if(e=t.byId(e),s.getSelection){var r=s.getSelection();a=s.createRange(),r.removeAllRanges&&(i("opera")&&r.getRangeAt(0)&&(a=r.getRangeAt(0)),a.selectNode(e),r.removeAllRanges(),r.addRange(a))}else try{var d=e.tagName?e.tagName.toLowerCase():"";a="img"===d||"table"===d?n.body(s).createControlRange():n.body(s).createRange(),a.addElement(e),o||a.select()}catch(t){this.selectElementChildren(e,o)}},this.inSelection=function(e){if(e){var t,o;if(s.getSelection){var i=r.getSelection();if(i&&i.rangeCount>0&&(o=i.getRangeAt(0)),o&&o.compareBoundaryPoints&&s.createRange)try{if(t=s.createRange(),t.setStart(e,0),1===o.compareBoundaryPoints(o.START_TO_END,t))return!0}catch(e){}}else{o=s.selection.createRange();try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(e){}if(o&&t&&1===o.compareEndPoints("EndToStart",t))return!0}}return!1},this.getBookmark=function(){var e,t,o,i=s.selection,n=a.curNode;if(s.getSelection){if(i=r.getSelection())if(i.isCollapsed){if((o=n?n.tagName:"")&&("textarea"==(o=o.toLowerCase())||"input"==o&&(!n.type||"text"==n.type.toLowerCase())))return i={start:n.selectionStart,end:n.selectionEnd,node:n,pRange:!0},{isCollapsed:i.end<=i.start,mark:i};e={isCollapsed:!0},i.rangeCount&&(e.mark=i.getRangeAt(0).cloneRange())}else t=i.getRangeAt(0),e={isCollapsed:!1,mark:t.cloneRange()}}else if(i){if(o=n?n.tagName:"",o=o.toLowerCase(),n&&o&&("button"==o||"textarea"==o||"input"==o))return i.type&&"none"==i.type.toLowerCase()?{isCollapsed:!0,mark:null}:(t=i.createRange(),{isCollapsed:!t.text||!t.text.length,mark:{range:t,pRange:!0}});e={};try{t=i.createRange(),e.isCollapsed=!("Text"==i.type?t.htmlText.length:t.length)}catch(t){return e.isCollapsed=!0,e}if("CONTROL"==i.type.toUpperCase())if(t.length){e.mark=[];for(var d=0,l=t.length;d<l;)e.mark.push(t.item(d++))}else e.isCollapsed=!0,e.mark=null;else e.mark=t.getBookmark()}return e},this.moveToBookmark=function(t){var i=t.mark;if(i)if(s.getSelection){var n=r.getSelection();if(n&&n.removeAllRanges)if(i.pRange){var a=i.node;a.selectionStart=i.start,a.selectionEnd=i.end}else n.removeAllRanges(),n.addRange(i)}else if(s.selection&&i){var d;i.pRange?d=i.range:o.isArray(i)?(d=s.body.createControlRange(),e.forEach(i,function(e){d.addElement(e)})):(d=s.body.createTextRange(),d.moveToBookmark(i)),d.select()}},this.isCollapsed=function(){return this.getBookmark().isCollapsed}},s=new r(window);return s.SelectionManager=r,s});//# sourceMappingURL=selection.js.map