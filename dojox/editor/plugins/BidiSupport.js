//>>built
define("dojox/editor/plugins/BidiSupport",["dojo/_base/declare","dojo/_base/array","dojo/aspect","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/i18n","dojo/NodeList-dom","dojo/NodeList-traverse","dojo/dom-style","dojo/sniff","dojo/query","dijit","dojox","dijit/_editor/_Plugin","dijit/_editor/range","dijit/_editor/plugins/EnterKeyHandling","dijit/_editor/plugins/FontChoice","./NormalizeIndentOutdent","dijit/form/ToggleButton","dojo/i18n!./nls/BidiSupport"],function(e,t,i,a,r,o,n,d,s,l,h,m,u,c,f,y,g,v,p,b,M){var _=e("dojox.editor.plugins.BidiSupport",y,{useDefaultCommand:!1,buttonClass:null,iconClassPrefix:"dijitAdditionalEditorIcon",command:"bidiSupport",blockMode:"DIV",shortcutonly:!1,bogusHtmlContent:"&nbsp;",buttonLtr:null,buttonRtl:null,_indentBy:40,_lineTextArray:["DIV","P","LI","H1","H2","H3","H4","H5","H6","ADDRESS","PRE","DT","DE","TD"],_lineStyledTextArray:["H1","H2","H3","H4","H5","H6","ADDRESS","PRE","P"],_tableContainers:["TABLE","THEAD","TBODY","TR"],_blockContainers:["TABLE","OL","UL","BLOCKQUOTE"],_initButton:function(){this.shortcutonly||(this.buttonLtr||(this.buttonLtr=this._createButton("ltr")),this.buttonRtl||(this.buttonRtl=this._createButton("rtl")))},_createButton:function(e){return M(a.mixin({label:d.getLocalization("dojox.editor.plugins","BidiSupport")[e],dir:this.editor.dir,lang:this.editor.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+("ltr"==e?"ParaLeftToRight":"ParaRightToLeft"),onClick:a.hitch(this,"_changeState",[e])},this.params||{}))},setToolbar:function(e){this.shortcutonly||(this.editor.isLeftToRight()?(e.addChild(this.buttonLtr),e.addChild(this.buttonRtl)):(e.addChild(this.buttonRtl),e.addChild(this.buttonLtr)))},updateState:function(){if(this.editor&&this.editor.isLoaded&&!this.shortcutonly&&(this.buttonLtr.set("disabled",!!this.disabled),this.buttonRtl.set("disabled",!!this.disabled),!this.disabled)){var e=g.getSelection(this.editor.window);if(e&&0!=e.rangeCount){var t,i=e.getRangeAt(0);if(i.startContainer!==this.editor.editNode||i.startContainer.hasChildNodes()){var a=i.startContainer,r=i.startOffset;if(this._isBlockElement(a))for(;a.hasChildNodes();)r==a.childNodes.length&&r--,a=a.childNodes[r],r=0;t=this._getBlockAncestor(a)}else t=i.startContainer;var o=h.get(t,"direction");this.buttonLtr.set("checked","ltr"==o),this.buttonRtl.set("checked","rtl"==o)}}},setEditor:function(e){this.editor=e,"P"!=this.blockMode&&"DIV"!=this.blockMode&&(this.blockMode="DIV"),this._initButton();"ltr"==this.editor.dir;this.editor.contentPreFilters.push(this._preFilterNewLines);var t=a.hitch(this,function(e){return this.disabled||!e.hasChildNodes()?e:(this._changeStateOfBlocks(this.editor.editNode,this.editor.editNode,this.editor.editNode,"explicitdir",null),this.editor.editNode)});this.editor.contentDomPostFilters.push(t),this.editor._justifyleftImpl=a.hitch(this,function(){return this._changeState("left"),!0}),this.editor._justifyrightImpl=a.hitch(this,function(){return this._changeState("right"),!0}),this.editor._justifycenterImpl=a.hitch(this,function(){return this._changeState("center"),!0}),this.editor._insertorderedlistImpl=a.hitch(this,"_insertLists","insertorderedlist"),this.editor._insertunorderedlistImpl=a.hitch(this,"_insertLists","insertunorderedlist"),this.editor._indentImpl=a.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=a.hitch(this,"_indentAndOutdent","outdent"),this.editor._formatblockImpl=a.hitch(this,"_formatBlocks"),this.editor.onLoadDeferred.addCallback(a.hitch(this,function(){var e,t,r=this.editor._plugins,o=r.length,n=a.hitch(this,"_changeState","mirror"),d=a.hitch(this,"_changeState","ltr"),s=a.hitch(this,"_changeState","rtl");for(this.editor.addKeyHandler("9",1,0,n),this.editor.addKeyHandler("8",1,0,d),this.editor.addKeyHandler("0",1,0,s),e=0;e<r.length;e++)t=r[e],t&&(t.constructor===v?(t.destroy(),t=null,o=e):t.constructor===b?(this.editor._normalizeIndentOutdent=!0,this.editor._indentImpl=a.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=a.hitch(this,"_indentAndOutdent","outdent")):t.constructor===p&&"formatBlock"===t.command&&this.own(i.before(t.button,"_execCommand",a.hitch(this,"_handleNoFormat"))));this.editor.addPlugin({ctor:v,blockNodeForEnter:this.blockMode,blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI|DIV)$/},o),t=this.editor._plugins[o],this.own(i.after(t,"handleEnterKey",a.hitch(this,"_checkNewLine"),!0))})),this.own(i.after(this.editor,"onNormalizedDisplayChanged",a.hitch(this,"updateState"),!0))},_checkNewLine:function(){var e=g.getSelection(this.editor.window).getRangeAt(0),t=g.getBlockAncestor(e.startContainer,null,this.editor.editNode).blockNode;t.innerHTML===this.bogusHtmlContent&&t.previousSibling?t.style.cssText=t.previousSibling.style.cssText:t.innerHTML!==this.bogusHtmlContent&&t.previousSibling&&t.previousSibling.innerHTML===this.bogusHtmlContent&&(t.previousSibling.style.cssText=t.style.cssText)},_handleNoFormat:function(e,t,i){return"noFormat"===i?[e,t,"DIV"]:arguments},_execNativeCmd:function(e,t,i){if(this._isSimpleInfo(i)){var a=this.editor.document.execCommand(e,!1,t);return m("webkit")&&u("table",this.editor.editNode).prev().forEach(function(e,t,i){this._hasTag(e,"BR")&&e.parentNode.removeChild(e)},this),a}var r=g.getSelection(this.editor.window);if(!r||0==r.rangeCount)return!1;for(var o=r.getRangeAt(0),n=o.cloneRange(),d=o.startContainer,s=o.startOffset,l=o.endContainer,h=o.endOffset,c=0;c<i.groups.length;c++){var f=i.groups[c],y=f[f.length-1].childNodes.length;n.setStart(f[0],0),n.setEnd(f[f.length-1],y),r.removeAllRanges(),r.addRange(n);var v=this.editor.selection.getParentOfType(f[0],["TABLE"]),p=this.editor.document.execCommand(e,!1,t);if(m("webkit")){v&&this._hasTag(v.previousSibling,"BR")&&v.parentNode.removeChild(v.previousSibling),this.editor.focus(),r=g.getSelection(this.editor.window);var b=r.getRangeAt(0);0==c?(d=b.endContainer,s=b.endOffset):c==i.groups.length-1&&(l=b.endContainer,h=b.endOffset)}if(!p)break;m("webkit")&&this._changeState(e)}r.removeAllRanges();try{n.setStart(d,s),n.setEnd(l,h),r.addRange(n)}catch(M){}return!0},_insertLists:function(e){var t=this._changeState("preparelists",e),i=this._execNativeCmd(e,null,t);return i?(m("webkit")&&!this._isSimpleInfo(t)||this._changeState(e),this._cleanLists(),this._mergeLists(),!0):!1},_indentAndOutdent:function(e){if(this.editor._normalizeIndentOutdent)return this._changeState("normalize"+e),!0;var t=this._changeState("prepare"+e);if(m("mozilla")){var i;try{i=this.editor.document.queryCommandValue("styleWithCSS")}catch(a){i=!1}this.editor.document.execCommand("styleWithCSS",!1,!0)}var r=this._execNativeCmd(e,null,t);return m("mozilla")&&this.editor.document.execCommand("styleWithCSS",!1,i),r?(this._changeState(e),this._mergeLists(),!0):!1},_formatBlocks:function(e){var t;(m("mozilla")||m("webkit"))&&(t=this._changeState("prepareformat",e)),m("ie")&&e&&"<"!=e.charAt(0)&&(e="<"+e+">");var i=this._execNativeCmd("formatblock",e,t);return i?(m("webkit")&&!this._isSimpleInfo(t)||this._changeState("formatblock",e),this._mergeLists(),!0):!1},_changeState:function(e,t){if(this.editor.window){this.editor.focus();var i=g.getSelection(this.editor.window);if(i&&0!=i.rangeCount){var a,r,o,n,d=i.getRangeAt(0),s=d.cloneRange();a=d.startContainer,o=d.startOffset,r=d.endContainer,n=d.endOffset;var l=a===r&&o==n;if(this._isBlockElement(a)||this._hasTagFrom(a,this._tableContainers))for(;a.hasChildNodes();)o==a.childNodes.length&&o--,a=a.childNodes[o],o=0;s.setStart(a,o),a=this._getClosestBlock(a,"start",s);var h=g.getBlockAncestor(a,/li/i,this.editor.editNode).blockNode;if(h&&h!==a&&(a=h),r=s.endContainer,n=s.endOffset,this._isBlockElement(r)||this._hasTagFrom(r,this._tableContainers))for(;r.hasChildNodes();)n==r.childNodes.length&&n--,r=r.childNodes[n],n=r.hasChildNodes()?r.childNodes.length:3==r.nodeType&&r.nodeValue?r.nodeValue.length:0;s.setEnd(r,n),r=this._getClosestBlock(r,"end",s),h=g.getBlockAncestor(r,/li/i,this.editor.editNode).blockNode,h&&h!==r&&(r=h),i=g.getSelection(this.editor.window,!0),i.removeAllRanges(),i.addRange(s);var m=g.getCommonAncestor(a,r),u=this._changeStateOfBlocks(a,r,m,e,t,s);return l&&(r=s.startContainer,n=s.startOffset,s.setEnd(r,n),i=g.getSelection(this.editor.window,!0),i.removeAllRanges(),i.addRange(s)),u}}},_isBlockElement:function(e){if(!e||1!=e.nodeType)return!1;var t=h.get(e,"display");return"block"==t||"list-item"==t||"table-cell"==t},_isInlineOrTextElement:function(e){return!this._isBlockElement(e)&&(1==e.nodeType||3==e.nodeType||8==e.nodeType)},_isElement:function(e){return e&&(1==e.nodeType||3==e.nodeType)},_isBlockWithText:function(e){return e!==this.editor.editNode&&this._hasTagFrom(e,this._lineTextArray)},_getBlockAncestor:function(e){for(;e.parentNode&&!this._isBlockElement(e);)e=e.parentNode;return e},_getClosestBlock:function(e,t,i){if(this._isBlockElement(e))return e;var a,r,o=e.parentNode,n=!1,d=!1;for(removeOffset=!1;;){var s=e;for(n=!1;;){if(this._isInlineOrTextElement(s)&&(a=s,r||(r=s)),s=s.previousSibling,!s)break;if(this._isBlockElement(s)||this._hasTagFrom(s,this._blockContainers)||this._hasTag(s,"BR")){n=!0;break}if(3==s.nodeType&&3==s.nextSibling.nodeType&&(s.nextSibling.nodeValue=s.nodeValue+s.nextSibling.nodeValue,d=!0,"start"==t&&s===i.startContainer?i.setStart(s.nextSibling,0):"end"!=t||s!==i.endContainer&&s.nextSibling!==i.endContainer||i.setEnd(s.nextSibling,s.nextSibling.nodeValue.length),s=s.nextSibling,s.parentNode.removeChild(s.previousSibling),!s.previousSibling))break}for(s=e;;){if(this._isInlineOrTextElement(s)&&(a||(a=s),r=s),s=s.nextSibling,!s)break;if(this._isBlockElement(s)||this._hasTagFrom(s,this._blockContainers)){n=!0;break}if(this._hasTag(s,"BR")&&s.nextSibling&&!this._isBlockElement(s.nextSibling)&&!this._hasTagFrom(s.nextSibling,this._blockContainers)){r=s,n=!0;break}if(3==s.nodeType&&3==s.previousSibling.nodeType&&(s.previousSibling.nodeValue+=s.nodeValue,d=!0,"start"==t&&s===i.startContainer?i.setStart(s.previousSibling,0):"end"!=t||s!==i.endContainer&&s.previousSibling!==i.endContainer||i.setEnd(s.previousSibling,s.previousSibling.nodeValue.length),s=s.previousSibling,s.parentNode.removeChild(s.nextSibling),!s.nextSibling))break}if(n||this._isBlockElement(o)&&!this._isBlockWithText(o)&&a){var l=i?i.startOffset:0,h=i?i.endOffset:0,m=i?i.startContainer:null,u=i?i.endContainer:null,c=this._repackInlineElements(a,r,o),f=c["start"==t?0:c.length-1];return i&&f&&a===m&&this._hasTag(a,"BR")&&(m=f,l=0,r===a&&(u=m,h=0)),i&&(i.setStart(m,l),i.setEnd(u,h)),f}if(this._isBlockElement(o))return o;e=o,removeOffset=!0,o=o.parentNode,a=r=null}},_changeStateOfBlocks:function(e,t,i,a,r,o){var n=[];if(e===this.editor.editNode){if(!e.hasChildNodes())return;this._isInlineOrTextElement(e.firstChild)&&this._rebuildBlock(e),e=this._getClosestBlock(e.firstChild,"start",null)}if(t===this.editor.editNode){if(!t.hasChildNodes())return;this._isInlineOrTextElement(t.lastChild)&&this._rebuildBlock(t),t=this._getClosestBlock(t.lastChild,"end",null)}var d=o?o.startOffset:0,s=o?o.endOffset:0,l=o?o.startContainer:null,h=o?o.endContainer:null,m=this._collectNodes(e,t,i,o,n,l,d,h,s,a),u={nodes:n,groups:m.groups,cells:m.cells};switch(a=a.toString()){case"mirror":case"ltr":case"rtl":case"left":case"right":case"center":case"explicitdir":this._execDirAndAlignment(u,a,r);break;case"preparelists":this._prepareLists(u,r);break;case"insertorderedlist":case"insertunorderedlist":this._execInsertLists(u);break;case"prepareoutdent":this._prepareOutdent(u);break;case"prepareindent":this._prepareIndent(u);break;case"indent":this._execIndent(u);break;case"outdent":this._execOutdent(u);break;case"normalizeindent":this._execNormalizedIndent(u);break;case"normalizeoutdent":this._execNormalizedOutdent(u);break;case"prepareformat":this._prepareFormat(u,r);break;case"formatblock":this._execFormatBlocks(u,r)}return o&&(o.setStart(l,d),o.setEnd(h,s),sel=g.getSelection(this.editor.window,!0),sel.removeAllRanges(),sel.addRange(o),this.editor.onDisplayChanged()),u},_collectNodes:function(e,t,i,r,o,n,d,s,l,h){var u,c,f=e,y=f.parentNode,v=[],p=[],b=[],M=[],_=this.editor.editNode,w=a.hitch(this,function(e){o.push(e);var t=this.editor.selection.getParentOfType(e,["TD"]);(_!==t||m("webkit")&&("prepareformat"===h||"preparelists"===h))&&(b.length&&p.push(b),b=[],_!=t&&(_=t,_&&M.push(_))),b.push(e)});for(this._rebuildBlock(y);;){if(this._hasTagFrom(f,this._tableContainers)){if(f.firstChild){y=f,f=f.firstChild;continue}}else if(this._isBlockElement(f)){var k=g.getBlockAncestor(f,/li/i,this.editor.editNode).blockNode;if(k&&k!==f){f=k,y=f.parentNode;continue}if(!this._hasTag(f,"LI")&&f.firstChild&&(this._rebuildBlock(f),this._isBlockElement(f.firstChild)||this._hasTagFrom(f.firstChild,this._tableContainers))){y=f,f=f.firstChild;continue}this._hasTagFrom(f,this._lineTextArray)&&w(f)}else if(this._isInlineOrTextElement(f)&&!this._hasTagFrom(f.parentNode,this._tableContainers)){for(u=f;f;){var x=f.nextSibling;if(this._isInlineOrTextElement(f)){if(c=f,this._hasTag(f,"BR")&&(!this._isBlockElement(y)||f!==y.lastChild)){v=this._repackInlineElements(u,c,y),f=v[v.length-1];for(var j=0;j<v.length;j++)w(v[j]);u=c=null,x&&this._isInlineOrTextElement(x)&&(u=x)}}else if(this._isBlockElement(f))break;f=x}if(!u)continue;v=this._repackInlineElements(u,c,y),f=v[v.length-1];for(var j=0;j<v.length;j++)w(v[j])}if(f===t)break;if(f.nextSibling)f=f.nextSibling;else{if(y===i)break;for(;!y.nextSibling&&(f=y,y=f.parentNode,y!==i););if(y===i||!y.nextSibling)break;f=y.nextSibling,y=y.parentNode}}return b.length&&(m("webkit")||_?p.push(b):p.unshift(b)),{groups:p,cells:M}},_execDirAndAlignment:function(e,i,a){switch(i){case"mirror":case"ltr":case"rtl":t.forEach(e.nodes,function(e){var t=h.getComputedStyle(e),a=t.direction,o="ltr"==a?"rtl":"ltr",n="mirror"!=i?i:o,d=t.textAlign,s=isNaN(parseInt(t.marginLeft))?0:parseInt(t.marginLeft),l=isNaN(parseInt(t.marginRight))?0:parseInt(t.marginRight);if(r.remove(e,"dir"),r.remove(e,"align"),h.set(e,{direction:n,textAlign:""}),!this._hasTag(e,"CENTER"))if(d.indexOf("center")>=0&&h.set(e,"textAlign","center"),this._hasTag(e,"LI")){this._refineLIMargins(e);var u="rtl"===a?l:s,c=0,f=e.parentNode;if(a!=h.get(f,"direction")){for(;f!==this.editor.editNode;)this._hasTagFrom(f,["OL","UL"])&&c++,f=f.parentNode;u-=this._getMargins(c)}var y="rtl"==n?"marginRight":"marginLeft",g=h.get(e,y),v=isNaN(g)?0:parseInt(g);if(h.set(e,y,""+(v+u)+"px"),m("webkit"))d.indexOf("center")<0&&h.set(e,"textAlign","rtl"==n?"right":"left");else if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var t=h.getComputedStyle(e),p=this._refineAlignment(t.direction,t.textAlign);m("mozilla")?h.set(e.firstChild,{textAlign:p}):h.set(e.firstChild,{direction:n,textAlign:p})}}else"rtl"==n&&0!=s?h.set(e,{marginLeft:"",marginRight:""+s+"px"}):"ltr"==n&&0!=l&&h.set(e,{marginRight:"",marginLeft:""+l+"px"})},this),u("table",this.editor.editNode).forEach(function(t,a,r){var o=i;"mirror"===i&&(o="ltr"===h.get(t,"direction")?"rtl":"ltr");for(var n=u("td",t),d=!1,s=!1,l=0;l<e.cells.length;l++)if(d||n[0]!==e.cells[l]){if(n[n.length-1]===e.cells[l]){s=!0;break}}else d=!0;if(d&&s)for(h.set(t,"direction",o),l=0;l<n.length;l++)h.set(n[l],"direction",o)},this);break;case"left":case"right":case"center":t.forEach(e.nodes,function(e){if(!this._hasTag(e,"CENTER")&&(r.remove(e,"align"),h.set(e,"textAlign",i),this._hasTag(e,"LI")&&e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray))){var t=h.getComputedStyle(e),a=this._refineAlignment(t.direction,t.textAlign);h.set(e.firstChild,"textAlign",a)}},this);break;case"explicitdir":t.forEach(e.nodes,function(e){var t=h.getComputedStyle(e),i=t.direction;r.remove(e,"dir"),h.set(e,{direction:i})},this)}},_prepareLists:function(e,i){t.forEach(e.nodes,function(e,t,a){if(m("mozilla")||m("webkit")){if(m("mozilla")){var o=this._getParentFrom(e,["TD"]);o&&0==u("div[tempRole]",o).length&&n.create("div",{innerHTML:"<span tempRole='true'>"+this.bogusHtmlContent+"</span",tempRole:"true"},o)}var d,s=this._tag(e);if(m("webkit")&&this._hasTagFrom(e,this._lineStyledTextArray)||this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){var l=this._hasTag(e,"LI")?this._tag(e.firstChild):s;if(this._hasTag(e,"LI")){for(;e.firstChild.lastChild;)n.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild)}d=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:l},e,"first")}if(!m("webkit")&&"DIV"!=s&&"P"!=s&&"LI"!=s)return;if(m("webkit")&&this._isListTypeChanged(e,i)&&e===e.parentNode.lastChild&&n.create("li",{tempRole:"true"},e,"after"),"LI"==s&&e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray))return;var c=h.getComputedStyle(e),f=c.direction,y=c.textAlign;y=this._refineAlignment(f,y);var g=this._getLIIndent(e),v=0==g?"":""+g+"px";m("webkit")&&"LI"==s&&h.set(e,"textAlign","");var p=d?e.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},e,"first");r.set(p,"bogusDir",f),""!=y&&r.set(p,"bogusAlign",y),v&&r.set(p,"bogusMargin",v)}else if(m("ie")&&this._hasTag(e,"LI")){h.getComputedStyle(e).direction;if(h.set(e,"marginRight",""),h.set(e,"marginLeft",""),1==this._getLILevel(e)&&!this._isListTypeChanged(e,cmd)&&(e.firstChild&&this._hasTagFrom(e.firstChild,["P","PRE"])&&n.create("span",{bogusIEFormat:this._tag(e.firstChild)},e.firstChild,"first"),this._hasTag(e.firstChild,"PRE"))){for(var b=n.create("p",null,e.firstChild,"after");e.firstChild.firstChild;)n.place(e.firstChild.firstChild,b,"last");b.style.cssText=e.style.cssText,e.removeChild(e.firstChild)}}},this),m("webkit")&&u("table",this.editor.editNode).forEach(function(e,t,i){var a=e.nextSibling;a&&this._hasTagFrom(a,["UL","OL"])&&n.create("UL",{tempRole:"true"},e,"after")},this)},_execInsertLists:function(e){t.forEach(e.nodes,function(e,t){if(this._hasTag(e,"LI")){if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var i=h.getComputedStyle(e.firstChild),d=this._refineAlignment(i.direction,i.textAlign);h.set(e,{direction:i.direction,textAlign:d});var s=this._getIntStyleValue(e,"marginLeft")+this._getIntStyleValue(e.firstChild,"marginLeft"),l=this._getIntStyleValue(e,"marginRight")+this._getIntStyleValue(e.firstChild,"marginRight"),u=s?""+s+"px":"",c=l?""+l+"px":"";h.set(e,{marginLeft:u,marginRight:c}),h.set(e.firstChild,{direction:"",textAlign:""}),m("mozilla")||h.set(e.firstChild,{marginLeft:"",marginRight:""})}for(;e.childNodes.length>1&&3==e.lastChild.nodeType&&e.lastChild.previousSibling&&3==e.lastChild.previousSibling.nodeType&&""==a.trim(e.lastChild.nodeValue);)e.removeChild(e.lastChild);if(m("safari")&&this._hasTag(e.firstChild,"SPAN")&&o.contains(e.firstChild,"Apple-style-span")){var f=e.firstChild;if(this._hasTag(f.firstChild,"SPAN")&&r.has(f.firstChild,"bogusFormat")){for(;f.lastChild;)n.place(f.lastChild,f,"after");e.removeChild(f)}}}else if(this._hasTag(e,"DIV")&&0==e.childNodes.length)return void e.parentNode.removeChild(e);if(m("ie")){if(this._hasTag(e,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(e.firstChild,"SPAN")&&r.has(e.firstChild,"bogusIEFormat")){if("PRE"===r.get(e.firstChild,"bogusIEFormat").toUpperCase()){var y=n.create("pre",{innerHTML:e.innerHTML},e,"before");y.style.cssText=e.style.cssText,y.removeChild(y.firstChild),e.parentNode.removeChild(e)}else e.removeChild(e.firstChild);return}var g=n.create("div");for(g.style.cssText=e.style.cssText,e.parentNode.insertBefore(g,e);e.firstChild;)g.appendChild(e.firstChild);e.parentNode.removeChild(e)}if(!this._hasTag(e,"LI"))return;this._refineLIMargins(e);var v=e.firstChild;if(!this._hasTag(v,"DIV"))return;if(v!==e.lastChild)return;var i=h.getComputedStyle(v),p=i.direction,d=i.textAlign;h.getComputedStyle(e).textAlign;for(h.set(e,"direction",p),d=this._refineAlignment(p,d),h.set(e,"textAlign",d);v.firstChild;)e.insertBefore(v.firstChild,v);e.removeChild(v)}else if(!this._hasTag(e.firstChild,"SPAN"))return void(this._hasTag(e,"LI")&&(this._refineLIMargins(e),m("mozilla")&&this._hasStyledTextLineTag(e.firstChild)&&this._recountLIMargins(e)));var b=!1,M=!1,_=!1,w=0;if(r.has(e.firstChild,"bogusDir")){b=!0;var p=r.get(e.firstChild,"bogusDir");h.set(e,"direction",p)}if(r.has(e.firstChild,"bogusAlign")){b=!0,_=!0;var d=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",d);var k=e.firstChild.nextSibling;if(this._hasTag(k,"SPAN")&&h.get(k,"textAlign")===d&&(h.set(k,"textAlign",""),""==k.style.cssText)){for(;k.lastChild;)n.place(k.lastChild,k,"after");e.removeChild(k)}}if(r.has(e.firstChild,"bogusMargin")&&(b=!0,M=!0,w=parseInt(r.get(e.firstChild,"bogusMargin")),!this._hasTag(e,"LI"))){var x="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",j=this._getIntStyleValue(e,x)+w;h.set(e,x,0==j?"":""+j+"px")}if(r.has(e.firstChild,"bogusFormat")){if(b=!1,r.remove(e.firstChild,"bogusDir"),e.firstChild.nextSibling&&this._hasTag(e.firstChild.nextSibling,"SPAN")){for(var I=e.firstChild.style.cssText.trim().split(";"),F=e.firstChild.nextSibling.style.cssText.trim().split(";"),C=0;C<I.length;C++)if(I[C])for(var T=0;T<F.length;T++)if(I[C].trim()==F[T].trim()){var i=I[C].trim().split(":")[0];h.set(e.firstChild.nextSibling,i,"");break}if(""===e.firstChild.nextSibling.style.cssText){for(;e.firstChild.nextSibling.firstChild;)n.place(e.firstChild.nextSibling.firstChild,e.firstChild.nextSibling,"after");e.removeChild(e.firstChild.nextSibling)}}for(var E=r.get(e.firstChild,"bogusFormat"),A=n.create(E,null,e.firstChild,"after");A.nextSibling;)n.place(A.nextSibling,A,"last");if(e.removeChild(e.firstChild),m("webkit")&&this._hasTag(e,"LI")){var S=e.parentNode.parentNode;this._hasTag(S,E)&&r.set(S,"tempRole","true")}1!=e.childNodes.length||this._hasTag(e,"TD")||(m("mozilla")||this._hasTag(e,"LI")?this._hasTag(e,"LI")||(A.style.cssText=e.style.cssText,n.place(A,e,"after"),r.set(e,"tempRole","true")):(A.style.cssText=e.style.cssText,r.set(e,"tempRole","true")))}if(b&&e.removeChild(e.firstChild),this._hasTag(e,"LI")){m("webkit")&&!_&&"center"!=h.get(e,"textAlign")&&h.set(e,"textAlign","rtl"==h.get(e,"direction")?"right":"left"),m("safari")&&this._hasTag(e,"DIV")&&(e.innerHTML=e.nextSibling.innerHTML,e.parentNode.removeChild(e.nextSibling));var N=e.parentNode.parentNode;N!==this.editor.editNode&&this._hasTag(N,"DIV")&&1==N.childNodes.length&&(N.parentNode.insertBefore(e.parentNode,N),N.parentNode.removeChild(N)),this._refineLIMargins(e),M&&this._recountLIMargins(e,w)}},this),m("mozilla")?u("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){if(this._hasTag(e,"SPAN")){if(r.get(e.parentNode,"tempRole"))return;if(this._hasTag(e.parentNode,"LI"))return void e.parentNode.parentNode.removeChild(e.parentNode)}e.parentNode.removeChild(e)},this):m("webkit")&&u("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){if(!this._hasTag(e,"LI")&&!this._hasTag(e,"UL")){for(;e.lastChild;)n.place(e.lastChild,e,"after");e.parentNode.removeChild(e)}},this)},_execNormalizedIndent:function(e){t.forEach(e.nodes,function(e){var t="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",i=h.get(e,t),a=isNaN(i)?0:parseInt(i);h.set(e,t,""+(a+this._indentBy)+"px")},this)},_execNormalizedOutdent:function(e){t.forEach(e.nodes,function(e){var t="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",i=h.get(e,t),a=isNaN(i)?0:parseInt(i),r=0;if("LI"===e.tagName.toUpperCase()){var o=0,n=e.parentNode;if(h.get(e,"direction")!=h.get(n,"direction")){for(;n!==this.editor.editNode;)this._hasTagFrom(n,["OL","UL"])&&o++,n=n.parentNode;r=this._getMargins(o)}}a>=this._indentBy+r&&h.set(e,t,a==this._indentBy?"":""+(a-this._indentBy)+"px")},this)},_prepareIndent:function(e){t.forEach(e.nodes,function(e){if(m("mozilla")){var t=this._getParentFrom(e,["TD"]);if(t&&0==u("div[tempRole]",t).length&&n.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},t),this._hasTag(e,"LI")){var i=this._getLIIndent(e);r.set(e,"tempIndent",i)}}if(m("webkit")&&this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){for(var a=this._tag(e.firstChild);e.firstChild.lastChild;)n.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild),n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:a},e,"first")}},this)},_prepareOutdent:function(e){t.forEach(e.nodes,function(e){if(m("mozilla")||m("webkit")){if(m("mozilla")){var t=this._getParentFrom(e,["TD"]);t&&0==u("div[tempRole]",t).length&&n.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},t)}var i=this._tag(e);if(m("mozilla")&&"LI"!==i)return;var a=null;if(m("webkit")&&this._hasTag(e,"LI")&&this._hasStyledTextLineTag(e.firstChild)){i=this._tag(e.firstChild);for(var o=e.firstChild;o.lastChild;)n.place(o.lastChild,o,"after");e.removeChild(e.firstChild),a=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:i},e,"first")}if(e.firstChild&&e.firstChild.tagName&&this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){if(m("mozilla")){e.firstChild.style.cssText=e.style.cssText;var d="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",s=this._getLIIndent(e);s>0&&h.set(e.firstChild,d,""+s+"px")}return}var l=h.getComputedStyle(e),c=l.direction,f=l.textAlign;f=this._refineAlignment(c,f),m("webkit")&&"LI"==i&&h.set(e,"textAlign","");var y=a?e.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},e,"first");if(r.set(y,"bogusDir",c),""!=f&&r.set(y,"bogusAlign",f),m("mozilla")){var s=this._getLIIndent(e);r.set(y,"bogusIndent",s)}}if(m("ie")&&"LI"==e.tagName.toUpperCase()&&(h.set(e,"marginLeft",""),h.set(e,"marginRight",""),1==this._getLILevel(e)&&(e.firstChild&&this._hasTagFrom(e.firstChild,["P","PRE"])&&n.create("span",{bogusIEFormat:this._tag(e.firstChild)},e.firstChild,"first"),this._hasTag(e.firstChild,"PRE")))){for(var g=n.create("p",null,e.firstChild,"after");e.firstChild.firstChild;)n.place(e.firstChild.firstChild,g,"last");g.style.cssText=e.style.cssText,e.removeChild(e.firstChild)}},this)},_execIndent:function(e){t.forEach(e.nodes,function(e){if(m("mozilla")||h.set(e,"margin",""),this._hasTag(e,"LI")){var t=0;m("mozilla")&&r.has(e,"tempIndent")&&(t=parseInt(r.get(e,"tempIndent")),r.remove(e,"tempIndent")),this._refineLIMargins(e),m("mozilla")&&this._recountLIMargins(e,t)}if(r.has(e.firstChild,"bogusFormat")){for(var i=r.get(e.firstChild,"bogusFormat"),a=n.create(i,null,e.firstChild,"after");a.nextSibling;)n.place(a.nextSibling,a,"last");e.removeChild(e.firstChild)}if(m("ie")||m("webkit"))for(var o=e.parentNode;o!==this.editor.editNode&&(o=g.getBlockAncestor(o,/blockquote/i,this.editor.editNode).blockNode);)r.has(o,"dir")&&r.remove(o,"dir"),h.set(o,"marginLeft",""),h.set(o,"marginRight",""),h.set(o,"margin",""),o=o.parentNode},this),m("mozilla")&&(u("div[tempRole]",this.editor.editNode).forEach(function(e,t,i){e.parentNode.removeChild(e)}),u("ul,ol",this.editor.editNode).forEach(function(e,t,i){h.set(e,"marginLeft",""),h.set(e,"marginRight","")}))},_execOutdent:function(e){t.forEach(e.nodes,function(e){if(m("mozilla")||m("webkit")){if(!this._hasTag(e.firstChild,"SPAN"))return void(this._hasTag(e,"LI")&&(this._refineLIMargins(e),m("mozilla")&&this._hasStyledTextLineTag(e.firstChild)&&(this._recountLIMargins(e),e.firstChild.style.cssText="")));var t=!1,i=!1,a=0;if(r.has(e.firstChild,"bogusDir")){t=!0;var o=r.get(e.firstChild,"bogusDir");h.set(e,"direction",o)}if(r.has(e.firstChild,"bogusAlign")){t=!0;var d=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",d)}if(r.has(e.firstChild,"bogusIndent")&&(t=!0,a=parseInt(r.get(e.firstChild,"bogusIndent")),!this._hasTag(e,"LI"))){var s="rtl"===h.get(e,"direction")?"marginRight":"marginLeft",l=""+(this._getIntStyleValue(e,s)+a)+"px";h.set(e,s,l)}if(r.has(e.firstChild,"bogusFormat")){t=!0;for(var u=r.get(e.firstChild,"bogusFormat"),c=n.create(u,null,e.firstChild,"after");c.nextSibling;)n.place(c.nextSibling,c,"last");this._hasTag(e,"LI")||(c.style.cssText=e.style.cssText,i=!0)}if(t&&(e.removeChild(e.firstChild),i)){for(;e.lastChild;)n.place(e.lastChild,e,"after");r.set(e,"tempRole","true")}if(m("webkit")&&this._hasTag(e,"LI")&&"center"!=h.get(e,"textAlign")&&h.set(e,"textAlign","rtl"==h.get(e,"direction")?"right":"left"),m("mozilla")&&this._hasTag(e,"LI")){var f=e.parentNode.parentNode;f!==this.editor.editNode&&this._hasTag(f,"DIV")&&1==f.childNodes.length&&(f.parentNode.insertBefore(e.parentNode,f),f.parentNode.removeChild(f))}}if(m("ie")&&this._hasTag(e,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(e.firstChild,"SPAN")&&r.has(e.firstChild,"bogusIEFormat")){if("PRE"===r.get(e.firstChild,"bogusIEFormat").toUpperCase()){var y=n.create("pre",{innerHTML:e.innerHTML},e,"before");y.style.cssText=e.style.cssText,y.removeChild(y.firstChild),e.parentNode.removeChild(e)}else e.removeChild(e.firstChild);return}var g=n.create("div");for(g.style.cssText=e.style.cssText,e.parentNode.insertBefore(g,e);e.firstChild;)g.appendChild(e.firstChild);e.parentNode.removeChild(e)}this._hasTag(e,"LI")&&(this._refineLIMargins(e),m("mozilla")&&this._recountLIMargins(e,a))},this),(m("mozilla")||m("webkit"))&&u("div[tempRole]",this.editor.editNode).forEach(function(e,t,i){e.parentNode.removeChild(e)})},_prepareFormat:function(e,i){t.forEach(e.nodes,function(e){if(m("mozilla")&&this._hasTag(e,"LI")){if(e.firstChild&&!this._isBlockElement(e.firstChild)){var t=e.ownerDocument.createElement(i),a=e.firstChild;for(e.insertBefore(t,e.firstChild);a;)t.appendChild(a),a=a.nextSibling}var o=this._getLIIndent(e);r.set(e,"tempIndent",o)}if(m("webkit")){var d;if(this._hasTag(e,"LI")){var s=i;if(this._hasStyledTextLineTag(e.firstChild)){for(;e.firstChild.lastChild;)n.place(e.firstChild.lastChild,e.firstChild,"after");e.removeChild(e.firstChild)}d=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:s},e,"first")}var l=h.getComputedStyle(e),u=l.direction,c=l.textAlign;c=this._refineAlignment(u,c);var f=d?e.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},e,"first");r.set(f,"bogusDir",u),""!=c&&r.set(f,"bogusAlign",c)}},this)},_execFormatBlocks:function(e,i){t.forEach(e.nodes,function(e){if(this._hasTagFrom(e,this._lineTextArray)){if(this._hasTag(e.parentNode,"DIV")&&e.parentNode!==this.editor.editNode)for(;e.parentNode.lastChild&&(3==e.parentNode.lastChild.nodeType&&""==a.trim(e.parentNode.lastChild.nodeValue)||this._hasTag(e.parentNode.lastChild,"BR"));)e.parentNode.removeChild(e.parentNode.lastChild);if(this._hasTag(e.parentNode,"DIV")&&e.parentNode!==this.editor.editNode&&1==e.parentNode.childNodes.length){var t=e.parentNode,o=h.getComputedStyle(t),d=this._refineAlignment(o.direction,o.textAlign);h.set(e,{direction:o.direction,textAlign:d});var s="rtl"===o.direction?"marginRight":"marginLeft",l=parseInt(h.get(t,s));0==l||isNan(l)||h.set(e,s,l),t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t)}}if(this._hasTag(e,"LI")){var u=0;for(r.has(e,"tempIndent")&&(u=parseInt(r.get(e,"tempIndent")),r.remove(e,"tempIndent")),this._refineLIMargins(e),u&&this._recountLIMargins(e,u);e.childNodes.length>1&&3==e.lastChild.nodeType&&""==a.trim(e.lastChild.nodeValue);)e.removeChild(e.lastChild);if(this._hasTagFrom(e.firstChild,this._lineStyledTextArray)){var o=h.getComputedStyle(e),d=this._refineAlignment(o.direction,o.textAlign);m("mozilla")||m("ie")&&this._hasTag(e,"LI")||h.set(e.firstChild,{direction:o.direction,textAlign:d})}else if(this._hasTag(e.firstChild,"DIV")){for(var t=e.firstChild;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}if(m("ie")&&!this._hasTag(e.firstChild,"P")&&"<p>"===i){for(var c=n.create("p"),f=this._hasTagFrom(c.nextSibling,this._lineStyledTextArray)?c.nextSibling:e;f.firstChild;)n.place(f.firstChild,c,"last");n.place(c,e,"first"),f!==e&&e.removeChild(f)}}if(m("webkit")){if(this._hasTag(e,"DIV")){if(r.has(e,"tempRole"))return;if(this._hasTag(e.previousSibling,"LI")){for(;e.firstChild;)n.place(e.firstChild,e.previousSibling,"last");r.set(e,"tempRole",!0),e=e.previousSibling}}var y=!1;if(r.has(e.firstChild,"bogusDir")){y=!0;var g=r.get(e.firstChild,"bogusDir");h.set(e,"direction",g);
}if(r.has(e.firstChild,"bogusAlign")){y=!0;var d=r.get(e.firstChild,"bogusAlign");h.set(e,"textAlign",d)}if(r.has(e.firstChild,"bogusFormat")){y=!0;var f,v=r.get(e.firstChild,"bogusFormat");if("DIV"!==v.toUpperCase())for(f=n.create(v,null,e.firstChild,"after");f.nextSibling;)n.place(f.nextSibling,f,"last");else f=e;if(m("safari")&&this._hasTag(e.nextSibling,"DIV")){for(;e.nextSibling.firstChild;)n.place(e.nextSibling.firstChild,f,"last");r.set(e.nextSibling,"tempRole","true")}}if(y&&e.removeChild(e.firstChild),v&&this._hasTag(e,"LI")){var p=e.parentNode.parentNode;this._hasTag(p,v)&&r.set(p,"tempRole","true")}}},this),m("webkit")&&u("*[tempRole]",this.editor.editNode).forEach(function(e,t,i){for(;e.lastChild;)n.place(e.lastChild,e,"after");e.parentNode.removeChild(e)},this)},_rebuildBlock:function(e){for(var t,i,a=e.firstChild,r=!1;a;)this._isInlineOrTextElement(a)&&!this._hasTagFrom(a,this._tableContainers)?(r=!this._hasTagFrom(e,this._lineTextArray),t||(t=a),i=a):(this._isBlockElement(a)||this._hasTagFrom(a,this._tableContainers))&&(t&&(this._repackInlineElements(t,i,e),t=null),r=!0),a=a.nextSibling;r&&t&&this._repackInlineElements(t,i,e)},_repackInlineElements:function(e,t,i){var a,r=[],o=i.ownerDocument.createElement(this.blockMode),d=e.previousSibling&&1==e.previousSibling.nodeType?e.previousSibling.style.cssText:i.style.cssText,s=i===this.editor.editNode;r.push(o),e=i.replaceChild(o,e),n.place(e,o,"after"),s?h.set(o,"direction",h.get(this.editor.editNode,"direction")):o.style.cssText=d;for(var l=e;l;){var u=l.nextSibling;if(this._isInlineOrTextElement(l)&&(this._hasTag(l,"BR")&&l!==t&&(a=i.ownerDocument.createElement(this.blockMode),r.push(a),l=i.replaceChild(a,l),n.place(l,a,"after"),s?h.set(a,"direction",h.get(this.editor.editNode,"direction")):a.style.cssText=d),!this._hasTag(l,"BR")&&8!=l.nodeType||o.hasChildNodes()||(o.innerHTML=this.bogusHtmlContent),this._hasTag(l,"BR")&&m("ie")?l.parentNode.removeChild(l):8!=l.nodeType?o.appendChild(l):l.parentNode.removeChild(l),3==l.nodeType&&l.previousSibling&&3==l.previousSibling.nodeType&&(l.previousSibling.nodeValue+=l.nodeValue,l.parentNode.removeChild(l)),a&&(o=a,a=null)),l===t)break;l=u}return r},_preFilterNewLines:function(e){for(var t=e.split(/(<\/?pre.*>)/i),i=!1,a=0;a<t.length;a++)t[a].search(/<\/?pre/i)<0&&!i?t[a]=t[a].replace(/\n/g,"").replace(/\t+/g," ").replace(/^\s+/," ").replace(/\xA0\xA0+$/,""):t[a].search(/<\/?pre/i)>=0&&(i=!i);return t.join("")},_refineAlignment:function(e,t){return t=t.indexOf("left")>=0&&"rtl"==e?"left":t.indexOf("right")>=0&&"ltr"==e?"right":t.indexOf("center")>=0?"center":""},_refineLIMargins:function(e){var t,i,a,r=h.get(e,"direction"),o=h.get(e.parentNode,"direction"),n=0,d=e.parentNode;for(m("webkit")&&(o=h.get(this.editor.editNode,"direction"));d!==this.editor.editNode;)this._hasTagFrom(d,["OL","UL"])&&n++,d=d.parentNode;h.set(e,"marginRight",""),h.set(e,"marginLeft",""),t="rtl"==r?"marginRight":"marginLeft",i=this._getMargins(n),a=""+i+"px",r!=o&&h.set(e,t,a)},_getMargins:function(e){if(0==e)return 0;var t=35;return m("mozilla")?t=45:m("ie")&&(t=25),t+40*(e-1)},_recountLIMargins:function(e,t){var i=h.get(e,"direction"),a=h.get(e.parentNode,"direction"),r="rtl"==i?"marginRight":"marginLeft",o=h.get(e,r),d=(isNaN(parseInt(o))?0:parseInt(o))+(t?t:0);e.firstChild&&1==e.firstChild.nodeType&&(o=h.get(e.firstChild,r),d+=isNaN(parseInt(o))?0:parseInt(o),h.set(e.firstChild,{marginLeft:"",marginRight:""})),i!=a&&(d-=this._getMargins(this._getLILevel(e)));var s=this._getListMargins(e);if(s)for(var l=0;s/40>l;l++){var m=n.create(this._tag(e.parentNode),null,e,"before");n.place(e,m,"last")}i!=a&&(d+=this._getMargins(this._getLILevel(e))),d&&h.set(e,r,""+d+"px")},_getLILevel:function(e){for(var t=e.parentNode,i=0;this._hasTagFrom(t,["UL","OL"]);)i++,t=t.parentNode;return i},_getLIIndent:function(e){var t=e.parentNode,i=h.get(e,"direction"),a=h.get(t,"direction"),r="rtl"===i?"marginRight":"marginLeft",o=this._getIntStyleValue(e,r),n=i===a?0:this._getMargins(this._getLILevel(e));return o-n},_getListMargins:function(e){for(var t,i,a=e.parentNode,r=0;this._hasTagFrom(a,["UL","OL"]);){var o=h.get(a,"direction");t="rtl"==o?"marginRight":"marginLeft",i=h.get(a,t),r+=isNaN(parseInt(i))?0:parseInt(i),a=a.parentNode}return r},_tag:function(e){return e&&e.tagName&&e.tagName.toUpperCase()},_hasTag:function(e,t){return e&&t&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},_hasStyledTextLineTag:function(e){return this._hasTagFrom(e,this._lineStyledTextArray)},_hasTagFrom:function(e,i){return e&&i&&e.tagName&&t.indexOf(i,e.tagName.toUpperCase())>=0},_getParentFrom:function(e,t){if(!e||!t||!t.length)return null;for(var i=e;i!==this.editor.editNode;){if(this._hasTagFrom(i,t))return i;i=i.parentNode}return null},_isSimpleInfo:function(e){return!e||e.groups.length<2},_isListTypeChanged:function(e,t){if(!this._hasTag(e,"LI"))return!1;var i=e.parentNode;return this._hasTag(i,"UL")&&"insertorderedlist"===t||this._hasTag(i,"OL")&&"insertunorderedlist"===t},_getIntStyleValue:function(e,t){var i=parseInt(h.get(e,t));return isNaN(i)?0:i},_mergeLists:function(){var e=g.getSelection(this.editor.window),t=e&&e.rangeCount>0;if(t)var i=e.getRangeAt(0).cloneRange(),a=i.startContainer,o=i.startOffset,d=i.endContainer,s=i.endOffset;var l=!1;if(u("ul,ol",this.editor.editNode).forEach(function(e,t,i){if(r.has(e,"tempRole"))return void e.parentNode.removeChild(e);for(var a=e.nextSibling;this._hasTag(a,this._tag(e));){for(;a.firstChild;)n.place(a.firstChild,e,"last"),l=!0;r.set(a,"tempRole","true"),a=a.nextSibling}},this),t&&l){e.removeAllRanges();try{i.setStart(a,o),i.setEnd(d,s),e.addRange(i)}catch(h){}}},_cleanLists:function(){m("webkit")&&(u("table",this.editor.editNode).forEach(function(e,t,i){var a=e.nextSibling;this._hasTag(a,"UL")&&"true"===r.get(a,"tempRole")&&a.parentNode.removeChild(a)},this),u("li[tempRole]",this.editor.editNode).forEach(function(e,t,i){1==e.parentNode.childNodes.length?e.parentNode.parentNode.removeChild(e.parentNode):e.parentNode.removeChild(e)}));var e=g.getSelection(this.editor.window),t=e&&e.rangeCount>0;if(t)var i=e.getRangeAt(0).cloneRange(),a=i.startContainer,o=i.startOffset,d=i.endContainer,s=i.endOffset;var l=!1;if(u("span[bogusDir]",this.editor.editNode).forEach(function(e,t,i){var a=e.firstChild,r=a;if(1==a.nodeType)for(;a;)r=a.nextSibling,n.place(a,e,"after"),l=!0,a=r;e.parentNode.removeChild(e)},this),t&&l){e.removeAllRanges();try{i.setStart(a,o),i.setEnd(d,s),e.addRange(i)}catch(h){}}}});return y.registry.bidiSupport=y.registry.bidisupport=function(e){return new _({})},_});//# sourceMappingURL=BidiSupport.js.map