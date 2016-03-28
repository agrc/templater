//>>built
define("dojox/editor/plugins/BidiSupport",["dojo/_base/declare","dojo/_base/array","dojo/aspect","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/i18n","dojo/NodeList-dom","dojo/NodeList-traverse","dojo/dom-style","dojo/sniff","dojo/query","dijit","dojox","dijit/_editor/_Plugin","dijit/_editor/range","dijit/_editor/plugins/EnterKeyHandling","dijit/_editor/plugins/FontChoice","./NormalizeIndentOutdent","dijit/form/ToggleButton","dojo/i18n!./nls/BidiSupport"],function(e,t,i,a,r,n,o,s,d,l,h,u,c,m,f,y,g,p,v,M,b){var _=e("dojox.editor.plugins.BidiSupport",y,{useDefaultCommand:!1,buttonClass:null,iconClassPrefix:"dijitAdditionalEditorIcon",command:"bidiSupport",blockMode:"DIV",shortcutonly:!1,bogusHtmlContent:"&nbsp;",buttonLtr:null,buttonRtl:null,_indentBy:40,_lineTextArray:["DIV","P","LI","H1","H2","H3","H4","H5","H6","ADDRESS","PRE","DT","DE","TD"],_lineStyledTextArray:["H1","H2","H3","H4","H5","H6","ADDRESS","PRE","P"],_tableContainers:["TABLE","THEAD","TBODY","TR"],_blockContainers:["TABLE","OL","UL","BLOCKQUOTE"],_initButton:function(){this.shortcutonly||(this.buttonLtr||(this.buttonLtr=this._createButton("ltr")),this.buttonRtl||(this.buttonRtl=this._createButton("rtl")))},_createButton:function(e){return b(a.mixin({label:s.getLocalization("dojox.editor.plugins","BidiSupport")[e],dir:this.editor.dir,lang:this.editor.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+("ltr"==e?"ParaLeftToRight":"ParaRightToLeft"),onClick:a.hitch(this,"_changeState",[e])},this.params||{}))},setToolbar:function(e){this.shortcutonly||(this.editor.isLeftToRight()?(e.addChild(this.buttonLtr),e.addChild(this.buttonRtl)):(e.addChild(this.buttonRtl),e.addChild(this.buttonLtr)))},updateState:function(){if(this.editor&&this.editor.isLoaded&&!this.shortcutonly&&(this.buttonLtr.set("disabled",!!this.disabled),this.buttonRtl.set("disabled",!!this.disabled),!this.disabled)){var e=g.getSelection(this.editor.window);if(e&&0!=e.rangeCount){var t,i=e.getRangeAt(0);if(i.startContainer!==this.editor.editNode||i.startContainer.hasChildNodes()){var a=i.startContainer,r=i.startOffset;if(this._isBlockElement(a))for(;a.hasChildNodes();)r==a.childNodes.length&&r--,a=a.childNodes[r],r=0;t=this._getBlockAncestor(a)}else t=i.startContainer;var n=h.get(t,"direction");this.buttonLtr.set("checked","ltr"==n),this.buttonRtl.set("checked","rtl"==n)}}},setEditor:function(e){this.editor=e,"P"!=this.blockMode&&"DIV"!=this.blockMode&&(this.blockMode="DIV"),this._initButton();"ltr"==this.editor.dir;this.editor.contentPreFilters.push(this._preFilterNewLines);var t=a.hitch(this,function(e){return this.disabled||!e.hasChildNodes()?e:(this._changeStateOfBlocks(this.editor.editNode,this.editor.editNode,this.editor.editNode,"explicitdir",null),this.editor.editNode)});this.editor.contentDomPostFilters.push(t),this.editor._justifyleftImpl=a.hitch(this,function(){return this._changeState("left"),!0}),this.editor._justifyrightImpl=a.hitch(this,function(){return this._changeState("right"),!0}),this.editor._justifycenterImpl=a.hitch(this,function(){return this._changeState("center"),!0}),this.editor._insertorderedlistImpl=a.hitch(this,"_insertLists","insertorderedlist"),this.editor._insertunorderedlistImpl=a.hitch(this,"_insertLists","insertunorderedlist"),this.editor._indentImpl=a.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=a.hitch(this,"_indentAndOutdent","outdent"),this.editor._formatblockImpl=a.hitch(this,"_formatBlocks"),this.editor.onLoadDeferred.addCallback(a.hitch(this,function(){var e,t,r=this.editor._plugins,n=r.length,o=a.hitch(this,"_changeState","mirror"),s=a.hitch(this,"_changeState","ltr"),d=a.hitch(this,"_changeState","rtl");for(this.editor.addKeyHandler("9",1,0,o),this.editor.addKeyHandler("8",1,0,s),this.editor.addKeyHandler("0",1,0,d),e=0;e<r.length;e++)t=r[e],t&&(t.constructor===p?(t.destroy(),t=null,n=e):t.constructor===M?(this.editor._normalizeIndentOutdent=!0,this.editor._indentImpl=a.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=a.hitch(this,"_indentAndOutdent","outdent")):t.constructor===v&&"formatBlock"===t.command&&this.own(i.before(t.button,"_execCommand",a.hitch(this,"_handleNoFormat"))));this.editor.addPlugin({ctor:p,blockNodeForEnter:this.blockMode,blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI|DIV)$/},n),t=this.editor._plugins[n],this.own(i.after(t,"handleEnterKey",a.hitch(this,"_checkNewLine"),!0))})),this.own(i.after(this.editor,"onNormalizedDisplayChanged",a.hitch(this,"updateState"),!0))},_checkNewLine:function(){var e=g.getSelection(this.editor.window).getRangeAt(0),t=g.getBlockAncestor(e.startContainer,null,this.editor.editNode).blockNode;t.innerHTML===this.bogusHtmlContent&&t.previousSibling?t.style.cssText=t.previousSibling.style.cssText:t.innerHTML!==this.bogusHtmlContent&&t.previousSibling&&t.previousSibling.innerHTML===this.bogusHtmlContent&&(t.previousSibling.style.cssText=t.style.cssText)},_handleNoFormat:function(e,t,i){return"noFormat"===i?[e,t,"DIV"]:arguments},_execNativeCmd:function(e,t,i){if(this._isSimpleInfo(i)){var a=this.editor.document.execCommand(e,!1,t);return u("webkit")&&c("table",this.editor.editNode).prev().forEach(function(e,t,i){this._hasTag(e,"BR")&&e.parentNode.removeChild(e)},this),a}var r=g.getSelection(this.editor.window);if(!r||0==r.rangeCount)return!1;for(var n=r.getRangeAt(0),o=n.cloneRange(),s=n.startContainer,d=n.startOffset,l=n.endContainer,h=n.endOffset,m=0;m<i.groups.length;m++){var f=i.groups[m],y=f[f.length-1].childNodes.length;o.setStart(f[0],0),o.setEnd(f[f.length-1],y),r.removeAllRanges(),r.addRange(o);var p=this.editor.selection.getParentOfType(f[0],["TABLE"]),v=this.editor.document.execCommand(e,!1,t);if(u("webkit")){p&&this._hasTag(p.previousSibling,"BR")&&p.parentNode.removeChild(p.previousSibling),this.editor.focus(),r=g.getSelection(this.editor.window);var M=r.getRangeAt(0);0==m?(s=M.endContainer,d=M.endOffset):m==i.groups.length-1&&(l=M.endContainer,h=M.endOffset)}if(!v)break;u("webkit")&&this._changeState(e)}r.removeAllRanges();try{o.setStart(s,d),o.setEnd(l,h),r.addRange(o)}catch(b){}return!0},_insertLists:function(e){var t=this._changeState("preparelists",e),i=this._execNativeCmd(e,null,t);return i?(u("webkit")&&!this._isSimpleInfo(t)||this._changeState(e),this._cleanLists(),this._mergeLists(),!0):!1},_indentAndOutdent:function(e){if(this.editor._normalizeIndentOutdent)return this._changeState("normalize"+e),!0;var t=this._changeState("prepare"+e);if(u("mozilla")){var i;try{i=this.editor.document.queryCommandValue("styleWithCSS")}catch(a){i=!1}this.editor.document.execCommand("styleWithCSS",!1,!0)}var r=this._execNativeCmd(e,null,t);return u("mozilla")&&this.editor.document.execCommand("styleWithCSS",!1,i),r?(this._changeState(e),this._mergeLists(),!0):!1},_formatBlocks:function(e){var t;(u("mozilla")||u("webkit"))&&(t=this._changeState("prepareformat",e)),u("ie")&&e&&"<"!=e.charAt(0)&&(e="<"+e+">");var i=this._execNativeCmd("formatblock",e,t);return i?(u("webkit")&&!this._isSimpleInfo(t)||this._changeState("formatblock",e),this._mergeLists(),!0):!1},_changeState:function(e,t){if(this.editor.window){this.editor.focus();var i=g.getSelection(this.editor.window);if(i&&0!=i.rangeCount){var a,r,n,o,s=i.getRangeAt(0),d=s.cloneRange();a=s.startContainer,n=s.startOffset,r=s.endContainer,o=s.endOffset;var l=a===r&&n==o;if(this._isBlockElement(a)||this._hasTagFrom(a,this._tableContainers))for(;a.hasChildNodes();)n==a.childNodes.length&&n--,a=a.childNodes[n],n=0;d.setStart(a,n),a=this._getClosestBlock(a,"start",d);var h=g.getBlockAncestor(a,/li/i,this.editor.editNode).blockNode;if(h&&h!==a&&(a=h),r=d.endContainer,o=d.endOffset,this._isBlockElement(r)||this._hasTagFrom(r,this._tableContainers))for(;r.hasChildNodes();)o==r.childNodes.length&&o--,r=r.childNodes[o],o=r.hasChildNodes()?r.childNodes.length:3==r.nodeType&&r.nodeValue?r.nodeValue.length:0;d.setEnd(r,o),r=this._getClosestBlock(r,"end",d),h=g.getBlockAncestor(r,/li/i,this.editor.editNode).blockNode,h&&h!==r&&(r=h),i=g.getSelection(this.editor.window,!0),i.removeAllRanges(),i.addRange(d);var u=g.getCommonAncestor(a,r),c=this._changeStateOfBlocks(a,r,u,e,t,d);return l&&(r=d.startContainer,o=d.startOffset,d.setEnd(r,o),i=g.getSelection(this.editor.window,!0),i.removeAllRanges(),i.addRange(d)),c}}},_isBlockElement:function(e){if(!e||1!=e.nodeType)return!1;var t=h.get(e,"display");return"block"==t||"list-item"==t||"table-cell"==t},_isInlineOrTextElement:function(e){return!this._isBlockElement(e)&&(1==e.nodeType||3==e.nodeType||8==e.nodeType)},_isElement:function(e){return e&&(1==e.nodeType||3==e.nodeType)},_isBlockWithText:function(e){return e!==this.editor.editNode&&this._hasTagFrom(e,this._lineTextArray)},_getBlockAncestor:function(e){for(;e.parentNode&&!this._isBlockElement(e);)e=e.parentNode;return e},_getClosestBlock:function(e,t,i){if(this._isBlockElement(e))return e;var a,r,n=e.parentNode,o=!1,s=!1;for(removeOffset=!1;;){var d=e;for(o=!1;;){if(this._isInlineOrTextElement(d)&&(a=d,r||(r=d)),d=d.previousSibling,!d)break;if(this._isBlockElement(d)||this._hasTagFrom(d,this._blockContainers)||this._hasTag(d,"BR")){o=!0;break}if(3==d.nodeType&&3==d.nextSibling.nodeType&&(d.nextSibling.nodeValue=d.nodeValue+d.nextSibling.nodeValue,s=!0,"start"==t&&d===i.startContainer?i.setStart(d.nextSibling,0):"end"!=t||d!==i.endContainer&&d.nextSibling!==i.endContainer||i.setEnd(d.nextSibling,d.nextSibling.nodeValue.length),d=d.nextSibling,d.parentNode.removeChild(d.previousSibling),!d.previousSibling))break}for(d=e;;){if(this._isInlineOrTextElement(d)&&(a||(a=d),r=d),d=d.nextSibling,!d)break;if(this._isBlockElement(d)||this._hasTagFrom(d,this._blockContainers)){o=!0;break}if(this._hasTag(d,"BR")&&d.nextSibling&&!this._isBlockElement(d.nextSibling)&&!this._hasTagFrom(d.nextSibling,this._blockContainers)){r=d,o=!0;break}if(3==d.nodeType&&3==d.previousSibling.nodeType&&(d.previousSibling.nodeValue+=d.nodeValue,s=!0,"start"==t&&d===i.startContainer?i.setStart(d.previousSibling,0):"end"!=t||d!==i.endContainer&&d.previousSibling!==i.endContainer||i.setEnd(d.previousSibling,d.previousSibling.nodeValue.length),d=d.previousSibling,d.parentNode.removeChild(d.nextSibling),!d.nextSibling))break}if(o||this._isBlockElement(n)&&!this._isBlockWithText(n)&&a){var l=i?i.startOffset:0,h=i?i.endOffset:0,u=i?i.startContainer:null,c=i?i.endContainer:null,m=this._repackInlineElements(a,r,n),f=m["start"==t?0:m.length-1];return i&&f&&a===u&&this._hasTag(a,"BR")&&(u=f,l=0,r===a&&(c=u,h=0)),i&&(i.setStart(u,l),i.setEnd(c,h)),f}if(this._isBlockElement(n))return n;e=n,removeOffset=!0,n=n.parentNode,a=r=null}},_changeStateOfBlocks:function(e,t,i,a,r,n){var o=[];if(e===this.editor.editNode){if(!e.hasChildNodes())return;this._isInlineOrTextElement(e.firstChild)&&this._rebuildBlock(e),e=this._getClosestBlock(e.firstChild,"start",null)}if(t===this.editor.editNode){if(!t.hasChildNodes())return;this._isInlineOrTextElement(t.lastChild)&&this._rebuildBlock(t),t=this._getClosestBlock(t.lastChild,"end",null)}var s=n?n.startOffset:0,d=n?n.endOffset:0,l=n?n.startContainer:null,h=n?n.endContainer:null,u=this._collectNodes(e,t,i,n,o,l,s,h,d,a),c={nodes:o,groups:u.groups,cells:u.cells};switch(a=a.toString()){case"mirror":case"ltr":case"rtl":case"left":case"right":case"center":case"explicitdir":this._execDirAndAlignment(c,a,r);break;case"preparelists":this._prepareLists(c,r);break;case"insertorderedlist":case"insertunorderedlist":this._execInsertLists(c);break;case"prepareoutdent":this._prepareOutdent(c);break;case"prepareindent":this._prepareIndent(c);break;case"indent":this._execIndent(c);break;case"outdent":this._execOutdent(c);break;case"normalizeindent":this._execNormalizedIndent(c);break;case"normalizeoutdent":this._execNormalizedOutdent(c);break;case"prepareformat":this._prepareFormat(c,r);break;case"formatblock":this._execFormatBlocks(c,r)}return n&&(n.setStart(l,s),n.setEnd(h,d),sel=g.getSelection(this.editor.window,!0),sel.removeAllRanges(),sel.addRange(n),this.editor.onDisplayChanged()),c},_collectNodes:function(e,t,i,r,n,o,s,d,l,h){var c,m,f=e,y=f.parentNode,p=[],v=[],M=[],b=[],_=this.editor.editNode,w=a.hitch(this,function(e){n.push(e);var t=this.editor.selection.getParentOfType(e,["TD"]);(_!==t||u("webkit")&&("prepareformat"===h||"preparelists"===h))&&(M.length&&v.push(M),M=[],_!=t&&(_=t,_&&b.push(_))),M.push(e)});for(this._rebuildBlock(y);;){if(this._hasTagFrom(f,this._tableContainers)){if(f.firstChild){y=f,f=f.firstChild;continue}}else if(this._isBlockElement(f)){var x=g.getBlockAncestor(f,/li/i,this.editor.editNode).blockNode;if(x&&x!==f){f=x,y=f.parentNode;continue}if(!this._hasTag(f,"LI")&&f.firstChild&&(this._rebuildBlock(f),this._isBlockElement(f.firstChild)||this._hasTagFrom(f.firstChild,this._tableContainers))){y=f,f=f.firstChild;continue}this._hasTagFrom(f,this._lineTextArray)&&w(f)}else if(this._isInlineOrTextElement(f)&&!this._hasTagFrom(f.parentNode,this._tableContainers)){for(c=f;f;){var k=f.nextSibling;if(this._isInlineOrTextElement(f)){if(m=f,this._hasTag(f,"BR")&&(!this._isBlockElement(y)||f!==y.lastChild)){p=this._repackInlineElements(c,m,y),f=p[p.length-1];for(var I=0;I<p.length;I++)w(p[I]);c=m=null,k&&this._isInlineOrTextElement(k)&&(c=k)}}else if(this._isBlockElement(f))break;f=k}if(!c)continue;p=this._repackInlineElements(c,m,y),f=p[p.length-1];for(var I=0;I<p.length;I++)w(p[I])}if(f===t)break;if(f.nextSibling)f=f.nextSibling;else{if(y===i)break;for(;!y.nextSibling&&(f=y,y=f.parentNode,y!==i););if(y===i||!y.nextSibling)break;f=y.nextSibling,y=y.parentNode}}return M.length&&(u("webkit")||_?v.push(M):v.unshift(M)),{groups:v,cells:b}},_execDirAndAlignment:function(e,i,a){switch(i){case"mirror":case"ltr":case"rtl":t.forEach(e.nodes,function(e){var t=h.getComputedStyle(e),a=t.direction,n="ltr"==a?"rtl":"ltr",o="mirror"!=i?i:n,s=t.textAlign,d=isNaN(parseInt(t.marginLeft))?0:parseInt(t.marginLeft),l=isNaN(parseInt(t.marginRight))?0:parseInt(t.marginRight);if(r.remove(e,"dir"),r.remove(e,"align"),h.set(e,{direction:o,textAlign:""}),!this._hasTag(e,"CENTER"))if(s.indexOf("center")>=0&&h.set(e,"textAlign","center"),this._hasTag(e,"LI")){this._refineLIMargins(e);var c="rtl"===a?l:d,m=0,f=e.parentNode;if(a!=h.get(f,"direction")){for(;f!==this.editor.editNode;)this._hasTagFrom(f,["OL","UL"])&&m++,f=f.parentNode;c-=this._getMargins(m)}var y="rtl"==o?"marginRight":"marginLeft",g=h.get(e,y),p=isNaN(g)?0:parseInt(g);if(h.set(e,y,""+(p+c)+"px"),u("webkit"))s.indexOf("center")<0&&h.set(e,"textAlign","rtl"==o?"right":"left");else if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var t=h.getComputedStyle(e),v=this._refineAlignment(t.direction,t.textAlign);u("mozilla")?h.set(e.firstChild,{textAlign:v}):h.set(e.firstChild,{direction:o,textAlign:v})}}else"rtl"==o&&0!=d?h.set(e,{marginLeft:"",marginRight:""+d+"px"}):"ltr"==o&&0!=l&&h.set(e,{marginRight:"",marginLeft:""+l+"px"})},this),c("table",this.editor.editNode).forEach(function(t,a,r){var n=i;"mirror"===i&&(n="ltr"===h.get(t,"direction")?"rtl":"ltr");for(var o=c("td",t),s=!1,d=!1,l=0;l<e.cells.length;l++)if(s||o[0]!==e.cells[l]){if(o[o.length-1]===e.cells[l]){d=!0;break}}else s=!0;if(s&&d)for(h.set(t,"direction",n),l=0;l<o.length;l++)h.set(o[l],"direction",n)},this);break;case"left":case"right":case"center":t.forEach(e.nodes,function(e){if(!this._hasTag(e,"CENTER")&&(r.remove(e,"align"),h.set(e,"textAlign",i),this._hasTag(e,"LI")&&e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray))){var t=h.getComputedStyle(e),a=this._refineAlignment(t.direction,t.textAlign);h.set(e.firstChild,"textAlign",a)}},this);break;case"explicitdir":t.forEach(e.nodes,function(e){var t=h.getComputedStyle(e),i=t.direction;r.remove(e,"dir"),h.set(e,{direction:i})},this)}},_prepareLists:function(e,i){t.forEach(e.nodes,function(e,t,a){if(u("mozilla")||u("webkit")){if(u("mozilla")){var n=this._getParentFrom(e,["TD"]);n&&0==c("div[tempRole]",n).length&&o.create("div",{innerHTML:"<span tempRole='true'>"+this.bogusHtmlContent+"</span",tempRole:"true"},n)}var s,d=this._tag(e);if(u("webkit")&&this._hasTagFrom(e,this._lineStyledTextArray)||this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){var l=this._hasTag(e,"LI")?this._tag(e.firstChild):d;if(this._hasTag(e,"LI")){for(;e.firstChild.lastChild;)o.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild)}s=o.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:l},e,"first")}if(!u("webkit")&&"DIV"!=d&&"P"!=d&&"LI"!=d)return;if(u("webkit")&&this._isListTypeChanged(e,i)&&e===e.parentNode.lastChild&&o.create("li",{tempRole:"true"},e,"after"),"LI"==d&&e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray))return;var m=h.getComputedStyle(e),f=m.direction,y=m.textAlign;y=this._refineAlignment(f,y);var g=this._getLIIndent(e),p=0==g?"":""+g+"px";u("webkit")&&"LI"==d&&h.set(e,"textAlign","");var v=s?e.firstChild:o.create("span",{innerHTML:this.bogusHtmlContent},e,"first");r.set(v,"bogusDir",f),""!=y&&r.set(v,"bogusAlign",y),p&&r.set(v,"bogusMargin",p)}else if(u("ie")&&this._hasTag(e,"LI")){h.getComputedStyle(e).direction;if(h.set(e,"marginRight",""),h.set(e,"marginLeft",""),1==this._getLILevel(e)&&!this._isListTypeChanged(e,cmd)&&(e.firstChild&&this._hasTagFrom(e.firstChild,["P","PRE"])&&o.create("span",{bogusIEFormat:this._tag(e.firstChild)},e.firstChild,"first"),this._hasTag(e.firstChild,"PRE"))){for(var M=o.create("p",null,e.firstChild,"after");e.firstChild.firstChild;)o.place(e.firstChild.firstChild,M,"last");M.style.cssText=e.style.cssText,e.removeChild(e.firstChild)}}},this),u("webkit")&&c("table",this.editor.editNode).forEach(function(e,t,i){var a=e.nextSibling;a&&this._hasTagFrom(a,["UL","OL"])&&o.create("UL",{tempRole:"true"},e,"after")},this)},_execInsertLists:function(e){t.forEach(e.nodes,function(e,t){if(this._hasTag(e,"LI")){if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var i=h.getComputedStyle(e.firstChild),s=this._refineAlignment(i.direction,i.textAlign);h.set(e,{direction:i.direction,textAlign:s});var d=this._getIntStyleValue(e,"marginLeft")+this._getIntStyleValue(e.firstChild,"marginLeft"),l=this._getIntStyleValue(e,"marginRight")+this._getIntStyleValue(e.firstChild,"marginRight"),c=d?""+d+"px":"",m=l?""+l+"px":"";h.set(e,{marginLeft:c,marginRight:m}),h.set(e.firstChild,{direction:"",textAlign:""}),u("mozilla")||h.set(e.firstChild,{marginLeft:"",marginRight:""})}for(;e.childNodes.length>1&&3==e.lastChild.nodeType&&e.lastChild.previousSibling&&3==e.lastChild.previousSibling.nodeType&&""==a.trim(e.lastChild.nodeValue);)e.removeChild(e.lastChild);if(u("safari")&&this._hasTag(e.firstChild,"SPAN")&&n.contains(e.firstChild,"Apple-style-span")){var f=e.firstChild;if(this._hasTag(f.firstChild,"SPAN")&&r.has(f.firstChild,"bogusFormat")){for(;f.lastChild;)o.place(f.lastChild,f,"after");e.removeChild(f)}}}else if(this._hasTag(e,"DIV")&&0==e.childNodes.length)return void e.parentNode.removeChild(e);if(u("ie")){if(this._hasTag(e,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(e.firstChild,"SPAN")&&r.has(e.firstChild,"bogusIEFormat")){if("PRE"===r.get(e.firstChild,"bogusIEFormat").toUpperCase()){var y=o.create("pre",{innerHTML:e.innerHTML},e,"before");y.style.cssText=e.style.cssText,y.removeChild(y.firstChild),e.parentNode.removeChild(e)}else e.removeChild(e.firstChild);return}var g=o.create("div");for(g.style.cssText=e.style.cssText,e.parentNode.insertBefore(g,e);e.firstChild;)g.appendChild(e.firstChild);e.parentNode.removeChild(e)}if(!this._hasTag(e,"LI"))return;this._refineLIMargins(e);var p=e.firstChild;if(!this._hasTag(p,"DIV"))return;if(p!==e.lastChild)return;var i=h.getComputedStyle(p),v=i.direction,s=i.textAlign;h.getComputedStyle(e).textAlign;for(h.set(e,"direction",v),s=this._refineAlignment(v,s),h.set(e,"textAlign",s);p.firstChild;)e.insertBefore(p.firstChild,p);e.removeChild(p)}else if(!this._hasTag(e.firstChild,"SPAN"))return void(this._hasTag(e,"LI")&&(this._refineLIMargins(e),u("mozilla")&&this._hasStyledTextLineTag(e.firstChild)&&this._recountLIMargins(e)));var M=!1,b=!1,_=!1,w=0;if(r.has(e.firstChild,"bogusDir")){M=!0;var v=r.get(e.firstChild,"bogusDir");h.set(e,"direction",v)}if(r.has(e.firstChild,"bogusAlign")){M=!0,_=!0;var s=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",s);var x=e.firstChild.nextSibling;if(this._hasTag(x,"SPAN")&&h.get(x,"textAlign")===s&&(h.set(x,"textAlign",""),""==x.style.cssText)){for(;x.lastChild;)o.place(x.lastChild,x,"after");e.removeChild(x)}}if(r.has(e.firstChild,"bogusMargin")&&(M=!0,b=!0,w=parseInt(r.get(e.firstChild,"bogusMargin")),!this._hasTag(e,"LI"))){var k="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",I=this._getIntStyleValue(e,k)+w;h.set(e,k,0==I?"":""+I+"px")}if(r.has(e.firstChild,"bogusFormat")){if(M=!1,r.remove(e.firstChild,"bogusDir"),e.firstChild.nextSibling&&this._hasTag(e.firstChild.nextSibling,"SPAN")){for(var C=e.firstChild.style.cssText.trim().split(";"),F=e.firstChild.nextSibling.style.cssText.trim().split(";"),j=0;j<C.length;j++)if(C[j])for(var E=0;E<F.length;E++)if(C[j].trim()==F[E].trim()){var i=C[j].trim().split(":")[0];h.set(e.firstChild.nextSibling,i,"");break}if(""===e.firstChild.nextSibling.style.cssText){for(;e.firstChild.nextSibling.firstChild;)o.place(e.firstChild.nextSibling.firstChild,e.firstChild.nextSibling,"after");e.removeChild(e.firstChild.nextSibling)}}for(var S=r.get(e.firstChild,"bogusFormat"),T=o.create(S,null,e.firstChild,"after");T.nextSibling;)o.place(T.nextSibling,T,"last");if(e.removeChild(e.firstChild),u("webkit")&&this._hasTag(e,"LI")){var A=e.parentNode.parentNode;this._hasTag(A,S)&&r.set(A,"tempRole","true")}1!=e.childNodes.length||this._hasTag(e,"TD")||(u("mozilla")||this._hasTag(e,"LI")?this._hasTag(e,"LI")||(T.style.cssText=e.style.cssText,o.place(T,e,"after"),r.set(e,"tempRole","true")):(T.style.cssText=e.style.cssText,r.set(e,"tempRole","true")))}if(M&&e.removeChild(e.firstChild),this._hasTag(e,"LI")){u("webkit")&&!_&&"center"!=h.get(e,"textAlign")&&h.set(e,"textAlign","rtl"==h.get(e,"direction")?"right":"left"),u("safari")&&this._hasTag(e,"DIV")&&(e.innerHTML=e.nextSibling.innerHTML,e.parentNode.removeChild(e.nextSibling));var N=e.parentNode.parentNode;N!==this.editor.editNode&&this._hasTag(N,"DIV")&&1==N.childNodes.length&&(N.parentNode.insertBefore(e.parentNode,N),N.parentNode.removeChild(N)),this._refineLIMargins(e),b&&this._recountLIMargins(e,w)}},this),u("mozilla")?c("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){if(this._hasTag(e,"SPAN")){if(r.get(e.parentNode,"tempRole"))return;if(this._hasTag(e.parentNode,"LI"))return void e.parentNode.parentNode.removeChild(e.parentNode)}e.parentNode.removeChild(e)},this):u("webkit")&&c("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){if(!this._hasTag(e,"LI")&&!this._hasTag(e,"UL")){for(;e.lastChild;)o.place(e.lastChild,e,"after");e.parentNode.removeChild(e)}},this)},_execNormalizedIndent:function(e){t.forEach(e.nodes,function(e){var t="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",i=h.get(e,t),a=isNaN(i)?0:parseInt(i);h.set(e,t,""+(a+this._indentBy)+"px")},this)},_execNormalizedOutdent:function(e){t.forEach(e.nodes,function(e){var t="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",i=h.get(e,t),a=isNaN(i)?0:parseInt(i),r=0;if("LI"===e.tagName.toUpperCase()){var n=0,o=e.parentNode;if(h.get(e,"direction")!=h.get(o,"direction")){for(;o!==this.editor.editNode;)this._hasTagFrom(o,["OL","UL"])&&n++,o=o.parentNode;r=this._getMargins(n)}}a>=this._indentBy+r&&h.set(e,t,a==this._indentBy?"":""+(a-this._indentBy)+"px")},this)},_prepareIndent:function(e){t.forEach(e.nodes,function(e){if(u("mozilla")){var t=this._getParentFrom(e,["TD"]);if(t&&0==c("div[tempRole]",t).length&&o.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},t),this._hasTag(e,"LI")){var i=this._getLIIndent(e);r.set(e,"tempIndent",i)}}if(u("webkit")&&this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){for(var a=this._tag(e.firstChild);e.firstChild.lastChild;)o.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild),o.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:a},e,"first")}},this)},_prepareOutdent:function(e){t.forEach(e.nodes,function(e){if(u("mozilla")||u("webkit")){if(u("mozilla")){var t=this._getParentFrom(e,["TD"]);t&&0==c("div[tempRole]",t).length&&o.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},t)}var i=this._tag(e);if(u("mozilla")&&"LI"!==i)return;var a=null;if(u("webkit")&&this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){i=this._tag(e.firstChild);for(var n=e.firstChild;n.lastChild;)o.place(n.lastChild,n,"after");e.removeChild(e.firstChild),a=o.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:i},e,"first")}if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){if(u("mozilla")){e.firstChild.style.cssText=e.style.cssText;var s="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",d=this._getLIIndent(e);d>0&&h.set(e.firstChild,s,""+d+"px")}return}var l=h.getComputedStyle(e),m=l.direction,f=l.textAlign;f=this._refineAlignment(m,f),u("webkit")&&"LI"==i&&h.set(e,"textAlign","");var y=a?e.firstChild:o.create("span",{innerHTML:this.bogusHtmlContent},e,"first");if(r.set(y,"bogusDir",m),""!=f&&r.set(y,"bogusAlign",f),u("mozilla")){var d=this._getLIIndent(e);r.set(y,"bogusIndent",d)}}if(u("ie")&&"LI"==e.tagName.toUpperCase()&&(h.set(e,"marginLeft",""),h.set(e,"marginRight",""),1==this._getLILevel(e)&&(e.firstChild&&this._hasTagFrom(e.firstChild,["P","PRE"])&&o.create("span",{bogusIEFormat:this._tag(e.firstChild)},e.firstChild,"first"),this._hasTag(e.firstChild,"PRE")))){for(var g=o.create("p",null,e.firstChild,"after");e.firstChild.firstChild;)o.place(e.firstChild.firstChild,g,"last");g.style.cssText=e.style.cssText,e.removeChild(e.firstChild)}},this)},_execIndent:function(e){t.forEach(e.nodes,function(e){if(u("mozilla")||h.set(e,"margin",""),this._hasTag(e,"LI")){var t=0;u("mozilla")&&r.has(e,"tempIndent")&&(t=parseInt(r.get(e,"tempIndent")),r.remove(e,"tempIndent")),this._refineLIMargins(e),u("mozilla")&&this._recountLIMargins(e,t)}if(r.has(e.firstChild,"bogusFormat")){for(var i=r.get(e.firstChild,"bogusFormat"),a=o.create(i,null,e.firstChild,"after");a.nextSibling;)o.place(a.nextSibling,a,"last");e.removeChild(e.firstChild)}if(u("ie")||u("webkit"))for(var n=e.parentNode;n!==this.editor.editNode&&(n=g.getBlockAncestor(n,/blockquote/i,this.editor.editNode).blockNode);)r.has(n,"dir")&&r.remove(n,"dir"),h.set(n,"marginLeft",""),h.set(n,"marginRight",""),h.set(n,"margin",""),n=n.parentNode},this),u("mozilla")&&(c("div[tempRole]",this.editor.editNode).forEach(function(e,t,i){e.parentNode.removeChild(e)}),c("ul,ol",this.editor.editNode).forEach(function(e,t,i){h.set(e,"marginLeft",""),h.set(e,"marginRight","")}))},_execOutdent:function(e){t.forEach(e.nodes,function(e){if(u("mozilla")||u("webkit")){if(!this._hasTag(e.firstChild,"SPAN"))return void(this._hasTag(e,"LI")&&(this._refineLIMargins(e),u("mozilla")&&this._hasStyledTextLineTag(e.firstChild)&&(this._recountLIMargins(e),e.firstChild.style.cssText="")));var t=!1,i=!1,a=0;if(r.has(e.firstChild,"bogusDir")){t=!0;var n=r.get(e.firstChild,"bogusDir");h.set(e,"direction",n)}if(r.has(e.firstChild,"bogusAlign")){t=!0;var s=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",s)}if(r.has(e.firstChild,"bogusIndent")&&(t=!0,a=parseInt(r.get(e.firstChild,"bogusIndent")),!this._hasTag(e,"LI"))){var d="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",l=""+(this._getIntStyleValue(e,d)+a)+"px";h.set(e,d,l)}if(r.has(e.firstChild,"bogusFormat")){t=!0;for(var c=r.get(e.firstChild,"bogusFormat"),m=o.create(c,null,e.firstChild,"after");m.nextSibling;)o.place(m.nextSibling,m,"last");this._hasTag(e,"LI")||(m.style.cssText=e.style.cssText,i=!0)}if(t&&(e.removeChild(e.firstChild),i)){for(;e.lastChild;)o.place(e.lastChild,e,"after");r.set(e,"tempRole","true")}if(u("webkit")&&this._hasTag(e,"LI")&&"center"!=h.get(e,"textAlign")&&h.set(e,"textAlign","rtl"==h.get(e,"direction")?"right":"left"),u("mozilla")&&this._hasTag(e,"LI")){var f=e.parentNode.parentNode;f!==this.editor.editNode&&this._hasTag(f,"DIV")&&1==f.childNodes.length&&(f.parentNode.insertBefore(e.parentNode,f),f.parentNode.removeChild(f))}}if(u("ie")&&this._hasTag(e,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(e.firstChild,"SPAN")&&r.has(e.firstChild,"bogusIEFormat")){if("PRE"===r.get(e.firstChild,"bogusIEFormat").toUpperCase()){var y=o.create("pre",{innerHTML:e.innerHTML},e,"before");y.style.cssText=e.style.cssText,y.removeChild(y.firstChild),e.parentNode.removeChild(e)}else e.removeChild(e.firstChild);return}var g=o.create("div");for(g.style.cssText=e.style.cssText,e.parentNode.insertBefore(g,e);e.firstChild;)g.appendChild(e.firstChild);e.parentNode.removeChild(e)}this._hasTag(e,"LI")&&(this._refineLIMargins(e),u("mozilla")&&this._recountLIMargins(e,a))},this),(u("mozilla")||u("webkit"))&&c("div[tempRole]",this.editor.editNode).forEach(function(e,t,i){e.parentNode.removeChild(e)})},_prepareFormat:function(e,i){t.forEach(e.nodes,function(e){if(u("mozilla")&&this._hasTag(e,"LI")){if(e.firstChild&&!this._isBlockElement(e.firstChild)){var t=e.ownerDocument.createElement(i),a=e.firstChild;for(e.insertBefore(t,e.firstChild);a;)t.appendChild(a),a=a.nextSibling}var n=this._getLIIndent(e);r.set(e,"tempIndent",n)}if(u("webkit")){var s;if(this._hasTag(e,"LI")){var d=i;if(this._hasStyledTextLineTag(e.firstChild)){for(;e.firstChild.lastChild;)o.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild)}s=o.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:d},e,"first")}var l=h.getComputedStyle(e),c=l.direction,m=l.textAlign;m=this._refineAlignment(c,m);var f=s?e.firstChild:o.create("span",{innerHTML:this.bogusHtmlContent},e,"first");r.set(f,"bogusDir",c),""!=m&&r.set(f,"bogusAlign",m)}},this)},_execFormatBlocks:function(e,i){t.forEach(e.nodes,function(e){if(this._hasTagFrom(e,this._lineTextArray)){if(this._hasTag(e.parentNode,"DIV")&&e.parentNode!==this.editor.editNode)for(;e.parentNode.lastChild&&(3==e.parentNode.lastChild.nodeType&&""==a.trim(e.parentNode.lastChild.nodeValue)||this._hasTag(e.parentNode.lastChild,"BR"));)e.parentNode.removeChild(e.parentNode.lastChild);if(this._hasTag(e.parentNode,"DIV")&&e.parentNode!==this.editor.editNode&&1==e.parentNode.childNodes.length){var t=e.parentNode,n=h.getComputedStyle(t),s=this._refineAlignment(n.direction,n.textAlign);h.set(e,{direction:n.direction,textAlign:s});var d="rtl"===n.direction?"marginRight":"marginLeft",l=parseInt(h.get(t,d));0==l||isNan(l)||h.set(e,d,l),t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t)}}if(this._hasTag(e,"LI")){var c=0;for(r.has(e,"tempIndent")&&(c=parseInt(r.get(e,"tempIndent")),r.remove(e,"tempIndent")),this._refineLIMargins(e),c&&this._recountLIMargins(e,c);e.childNodes.length>1&&3==e.lastChild.nodeType&&""==a.trim(e.lastChild.nodeValue);)e.removeChild(e.lastChild);if(this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var n=h.getComputedStyle(e),s=this._refineAlignment(n.direction,n.textAlign);u("mozilla")||u("ie")&&this._hasTag(e,"LI")||h.set(e.firstChild,{direction:n.direction,textAlign:s})}else if(this._hasTag(e.firstChild,"DIV")){for(var t=e.firstChild;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}if(u("ie")&&!this._hasTag(e.firstChild,"P")&&"<p>"===i){for(var m=o.create("p"),f=this._hasTagFrom(m.nextSibling,this._lineStyledTextArray)?m.nextSibling:e;f.firstChild;)o.place(f.firstChild,m,"last");o.place(m,e,"first"),f!==e&&e.removeChild(f)}}if(u("webkit")){if(this._hasTag(e,"DIV")){if(r.has(e,"tempRole"))return;if(this._hasTag(e.previousSibling,"LI")){for(;e.firstChild;)o.place(e.firstChild,e.previousSibling,"last");r.set(e,"tempRole",!0),e=e.previousSibling}}var y=!1;if(r.has(e.firstChild,"bogusDir")){y=!0;var g=r.get(e.firstChild,"bogusDir");h.set(e,"direction",g);
}if(r.has(e.firstChild,"bogusAlign")){y=!0;var s=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",s)}if(r.has(e.firstChild,"bogusFormat")){y=!0;var f,p=r.get(e.firstChild,"bogusFormat");if("DIV"!==p.toUpperCase())for(f=o.create(p,null,e.firstChild,"after");f.nextSibling;)o.place(f.nextSibling,f,"last");else f=e;if(u("safari")&&this._hasTag(e.nextSibling,"DIV")){for(;e.nextSibling.firstChild;)o.place(e.nextSibling.firstChild,f,"last");r.set(e.nextSibling,"tempRole","true")}}if(y&&e.removeChild(e.firstChild),p&&this._hasTag(e,"LI")){var v=e.parentNode.parentNode;this._hasTag(v,p)&&r.set(v,"tempRole","true")}}},this),u("webkit")&&c("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){for(;e.lastChild;)o.place(e.lastChild,e,"after");e.parentNode.removeChild(e)},this)},_rebuildBlock:function(e){for(var t,i,a=e.firstChild,r=!1;a;)this._isInlineOrTextElement(a)&&!this._hasTagFrom(a,this._tableContainers)?(r=!this._hasTagFrom(e,this._lineTextArray),t||(t=a),i=a):(this._isBlockElement(a)||this._hasTagFrom(a,this._tableContainers))&&(t&&(this._repackInlineElements(t,i,e),t=null),r=!0),a=a.nextSibling;r&&t&&this._repackInlineElements(t,i,e)},_repackInlineElements:function(e,t,i){var a,r=[],n=i.ownerDocument.createElement(this.blockMode),s=e.previousSibling&&1==e.previousSibling.nodeType?e.previousSibling.style.cssText:i.style.cssText,d=i===this.editor.editNode;r.push(n),e=i.replaceChild(n,e),o.place(e,n,"after"),d?h.set(n,"direction",h.get(this.editor.editNode,"direction")):n.style.cssText=s;for(var l=e;l;){var c=l.nextSibling;if(this._isInlineOrTextElement(l)&&(this._hasTag(l,"BR")&&l!==t&&(a=i.ownerDocument.createElement(this.blockMode),r.push(a),l=i.replaceChild(a,l),o.place(l,a,"after"),d?h.set(a,"direction",h.get(this.editor.editNode,"direction")):a.style.cssText=s),!this._hasTag(l,"BR")&&8!=l.nodeType||n.hasChildNodes()||(n.innerHTML=this.bogusHtmlContent),this._hasTag(l,"BR")&&u("ie")?l.parentNode.removeChild(l):8!=l.nodeType?n.appendChild(l):l.parentNode.removeChild(l),3==l.nodeType&&l.previousSibling&&3==l.previousSibling.nodeType&&(l.previousSibling.nodeValue+=l.nodeValue,l.parentNode.removeChild(l)),a&&(n=a,a=null)),l===t)break;l=c}return r},_preFilterNewLines:function(e){for(var t=e.split(/(<\/?pre.*>)/i),i=!1,a=0;a<t.length;a++)t[a].search(/<\/?pre/i)<0&&!i?t[a]=t[a].replace(/\n/g,"").replace(/\t+/g," ").replace(/^\s+/," ").replace(/\xA0\xA0+$/,""):t[a].search(/<\/?pre/i)>=0&&(i=!i);return t.join("")},_refineAlignment:function(e,t){return t=t.indexOf("left")>=0&&"rtl"==e?"left":t.indexOf("right")>=0&&"ltr"==e?"right":t.indexOf("center")>=0?"center":""},_refineLIMargins:function(e){var t,i,a,r=h.get(e,"direction"),n=h.get(e.parentNode,"direction"),o=0,s=e.parentNode;for(u("webkit")&&(n=h.get(this.editor.editNode,"direction"));s!==this.editor.editNode;)this._hasTagFrom(s,["OL","UL"])&&o++,s=s.parentNode;h.set(e,"marginRight",""),h.set(e,"marginLeft",""),t="rtl"==r?"marginRight":"marginLeft",i=this._getMargins(o),a=""+i+"px",r!=n&&h.set(e,t,a)},_getMargins:function(e){if(0==e)return 0;var t=35;return u("mozilla")?t=45:u("ie")&&(t=25),t+40*(e-1)},_recountLIMargins:function(e,t){var i=h.get(e,"direction"),a=h.get(e.parentNode,"direction"),r="rtl"==i?"marginRight":"marginLeft",n=h.get(e,r),s=(isNaN(parseInt(n))?0:parseInt(n))+(t?t:0);e.firstChild&&1==e.firstChild.nodeType&&(n=h.get(e.firstChild,r),s+=isNaN(parseInt(n))?0:parseInt(n),h.set(e.firstChild,{marginLeft:"",marginRight:""})),i!=a&&(s-=this._getMargins(this._getLILevel(e)));var d=this._getListMargins(e);if(d)for(var l=0;d/40>l;l++){var u=o.create(this._tag(e.parentNode),null,e,"before");o.place(e,u,"last")}i!=a&&(s+=this._getMargins(this._getLILevel(e))),s&&h.set(e,r,""+s+"px")},_getLILevel:function(e){for(var t=e.parentNode,i=0;this._hasTagFrom(t,["UL","OL"]);)i++,t=t.parentNode;return i},_getLIIndent:function(e){var t=e.parentNode,i=h.get(e,"direction"),a=h.get(t,"direction"),r="rtl"===i?"marginRight":"marginLeft",n=this._getIntStyleValue(e,r),o=i===a?0:this._getMargins(this._getLILevel(e));return n-o},_getListMargins:function(e){for(var t,i,a=e.parentNode,r=0;this._hasTagFrom(a,["UL","OL"]);){var n=h.get(a,"direction");t="rtl"==n?"marginRight":"marginLeft",i=h.get(a,t),r+=isNaN(parseInt(i))?0:parseInt(i),a=a.parentNode}return r},_tag:function(e){return e&&e.tagName&&e.tagName.toUpperCase()},_hasTag:function(e,t){return e&&t&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},_hasStyledTextLineTag:function(e){return this._hasTagFrom(e,this._lineStyledTextArray)},_hasTagFrom:function(e,i){return e&&i&&e.tagName&&t.indexOf(i,e.tagName.toUpperCase())>=0},_getParentFrom:function(e,t){if(!e||!t||!t.length)return null;for(var i=e;i!==this.editor.editNode;){if(this._hasTagFrom(i,t))return i;i=i.parentNode}return null},_isSimpleInfo:function(e){return!e||e.groups.length<2},_isListTypeChanged:function(e,t){if(!this._hasTag(e,"LI"))return!1;var i=e.parentNode;return this._hasTag(i,"UL")&&"insertorderedlist"===t||this._hasTag(i,"OL")&&"insertunorderedlist"===t},_getIntStyleValue:function(e,t){var i=parseInt(h.get(e,t));return isNaN(i)?0:i},_mergeLists:function(){var e=g.getSelection(this.editor.window),t=e&&e.rangeCount>0;if(t)var i=e.getRangeAt(0).cloneRange(),a=i.startContainer,n=i.startOffset,s=i.endContainer,d=i.endOffset;var l=!1;if(c("ul,ol",this.editor.editNode).forEach(function(e,t,i){if(r.has(e,"tempRole"))return void e.parentNode.removeChild(e);for(var a=e.nextSibling;this._hasTag(a,this._tag(e));){for(;a.firstChild;)o.place(a.firstChild,e,"last"),l=!0;r.set(a,"tempRole","true"),a=a.nextSibling}},this),t&&l){e.removeAllRanges();try{i.setStart(a,n),i.setEnd(s,d),e.addRange(i)}catch(h){}}},_cleanLists:function(){u("webkit")&&(c("table",this.editor.editNode).forEach(function(e,t,i){var a=e.nextSibling;this._hasTag(a,"UL")&&"true"===r.get(a,"tempRole")&&a.parentNode.removeChild(a)},this),c("li[tempRole]",this.editor.editNode).forEach(function(e,t,i){1==e.parentNode.childNodes.length?e.parentNode.parentNode.removeChild(e.parentNode):e.parentNode.removeChild(e)}));var e=g.getSelection(this.editor.window),t=e&&e.rangeCount>0;if(t)var i=e.getRangeAt(0).cloneRange(),a=i.startContainer,n=i.startOffset,s=i.endContainer,d=i.endOffset;var l=!1;if(c("span[bogusDir]",this.editor.editNode).forEach(function(e,t,i){var a=e.firstChild,r=a;if(1==a.nodeType)for(;a;)r=a.nextSibling,o.place(a,e,"after"),l=!0,a=r;e.parentNode.removeChild(e)},this),t&&l){e.removeAllRanges();try{i.setStart(a,n),i.setEnd(s,d),e.addRange(i)}catch(h){}}}});return y.registry.bidiSupport=y.registry.bidisupport=function(e){return new _({})},_});//# sourceMappingURL=BidiSupport.js.map