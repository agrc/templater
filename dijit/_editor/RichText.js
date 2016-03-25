//>>built
define("dijit/_editor/RichText",["dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/query","dojo/domReady","dojo/sniff","dojo/string","dojo/topic","dojo/_base/unload","dojo/_base/url","dojo/window","../_Widget","../_CssStateMixin","../selection","./range","./html","../focus","../main"],function(e,t,i,o,n,s,r,a,d,l,h,c,u,m,f,p,g,_,b,v,y,C,N,w,x,T,E,k,j){var A=i("dijit._editor.RichText",[N,w],{constructor:function(e){this.contentPreFilters=[],this.contentPostFilters=[],this.contentDomPreFilters=[],this.contentDomPostFilters=[],this.editingAreaStyleSheets=[],this.events=[].concat(this.events),this._keyHandlers={},e&&u.isString(e.value)&&(this.value=e.value),this.onLoadDeferred=new o},baseClass:"dijitEditor",inheritWidth:!1,focusOnLoad:!1,name:"",styleSheets:"",height:"300px",minHeight:"1em",isClosed:!0,isLoaded:!1,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",_NAME_CONTENT_SEP:"@@**%%:%%**@@",onLoadDeferred:null,isTabIndent:!1,disableSpellCheck:!1,postCreate:function(){"textarea"===this.domNode.tagName.toLowerCase(),this.contentPreFilters=[u.trim,u.hitch(this,"_preFixUrlAttributes")].concat(this.contentPreFilters),g("mozilla")&&(this.contentPreFilters=[this._normalizeFontStyle].concat(this.contentPreFilters),this.contentPostFilters=[this._removeMozBogus].concat(this.contentPostFilters)),g("webkit")&&(this.contentPreFilters=[this._removeWebkitBogus].concat(this.contentPreFilters),this.contentPostFilters=[this._removeWebkitBogus].concat(this.contentPostFilters)),(g("ie")||g("trident"))&&(this.contentPostFilters=[this._normalizeFontStyle].concat(this.contentPostFilters),this.contentDomPostFilters=[u.hitch(this,"_stripBreakerNodes")].concat(this.contentDomPostFilters)),this.contentDomPostFilters=[u.hitch(this,"_stripTrailingEmptyNodes")].concat(this.contentDomPostFilters),this.inherited(arguments),b.publish(j._scopeName+"._editor.RichText::init",this)},startup:function(){this.inherited(arguments),this.open(),this.setupDefaultShortcuts()},setupDefaultShortcuts:function(){var e=u.hitch(this,function(e,t){return function(){return!this.execCommand(e,t)}}),t={b:e("bold"),i:e("italic"),u:e("underline"),a:e("selectall"),s:function(){this.save(!0)},m:function(){this.isTabIndent=!this.isTabIndent},1:e("formatblock","h1"),2:e("formatblock","h2"),3:e("formatblock","h3"),4:e("formatblock","h4"),"\\":e("insertunorderedlist")};g("ie")||(t.Z=e("redo"));var i;for(i in t)this.addKeyHandler(i,!0,!1,t[i])},events:["onKeyDown","onKeyUp"],captureEvents:[],_editorCommandsLocalized:!1,_localizeEditorCommands:function(){if(A._editorCommandsLocalized)return this._local2NativeFormatNames=A._local2NativeFormatNames,void(this._native2LocalFormatNames=A._native2LocalFormatNames);A._editorCommandsLocalized=!0,A._local2NativeFormatNames={},A._native2LocalFormatNames={},this._local2NativeFormatNames=A._local2NativeFormatNames,this._native2LocalFormatNames=A._native2LocalFormatNames;for(var e,t=["div","p","pre","h1","h2","h3","h4","h5","h6","ol","ul","address"],i="",o=0;e=t[o++];)i+="l"!==e.charAt(1)?"<"+e+"><span>content</span></"+e+"><br/>":"<"+e+"><li>content</li></"+e+"><br/>";var n={position:"absolute",top:"0px",zIndex:10,opacity:.01},s=a.create("div",{style:n,innerHTML:i});this.ownerDocumentBody.appendChild(s);var r=u.hitch(this,function(){for(var e=s.firstChild;e;)try{this.selection.selectElement(e.firstChild);var t=e.tagName.toLowerCase();this._local2NativeFormatNames[t]=document.queryCommandValue("formatblock"),this._native2LocalFormatNames[this._local2NativeFormatNames[t]]=t,e=e.nextSibling.nextSibling}catch(i){}a.destroy(s)});this.defer(r)},open:function(e){(!this.onLoadDeferred||this.onLoadDeferred.fired>=0)&&(this.onLoadDeferred=new o),this.isClosed||this.close(),b.publish(j._scopeName+"._editor.RichText::open",this),1===arguments.length&&e.nodeName&&(this.domNode=e);var i,d=this.domNode;if(u.isString(this.value))i=this.value,d.innerHTML="";else if(d.nodeName&&"textarea"==d.nodeName.toLowerCase()){var h=this.textarea=d;this.name=h.name,i=h.value,d=this.domNode=this.ownerDocument.createElement("div"),d.setAttribute("widgetId",this.id),h.removeAttribute("widgetId"),d.cssText=h.cssText,d.className+=" "+h.className,a.place(d,h,"before");var c=u.hitch(this,function(){if(l.set(h,{display:"block",position:"absolute",top:"-1000px"}),g("ie")){var e=h.style;this.__overflow=e.overflow,e.overflow="hidden"}});if(g("ie")?this.defer(c,10):c(),h.form){var f=h.value;this.reset=function(){var e=this.getValue();e!==f&&this.replaceValue(f)},m(h.form,"submit",u.hitch(this,function(){s.set(h,"disabled",this.disabled),h.value=this.getValue()}))}}else i=E.getChildrenHtml(d),d.innerHTML="";if(this.value=i,d.nodeName&&"LI"===d.nodeName&&(d.innerHTML=" <br>"),this.header=d.ownerDocument.createElement("div"),d.appendChild(this.header),this.editingArea=d.ownerDocument.createElement("div"),d.appendChild(this.editingArea),this.footer=d.ownerDocument.createElement("div"),d.appendChild(this.footer),this.name||(this.name=this.id+"_AUTOGEN"),""!==this.name&&(!t.useXDomain||t.allowXdRichTextSave)){var p=n.byId(j._scopeName+"._editor.RichText.value");if(p&&""!==p.value)for(var _,y=p.value.split(this._SEPARATOR),C=0;_=y[C++];){var N=_.split(this._NAME_CONTENT_SEP);if(N[0]===this.name){this.value=N[1],y=y.splice(C,1),p.value=y.join(this._SEPARATOR);break}}A._globalSaveHandler||(A._globalSaveHandler={},v.addOnUnload(function(){var e;for(e in A._globalSaveHandler){var t=A._globalSaveHandler[e];u.isFunction(t)&&t()}})),A._globalSaveHandler[this.id]=u.hitch(this,"_saveContent")}this.isClosed=!1;var w=this.editorObject=this.iframe=this.ownerDocument.createElement("iframe");w.id=this.id+"_iframe",w.style.border="none",w.style.width="100%",this._layoutMode?w.style.height="100%":g("ie")>=7?(this.height&&(w.style.height=this.height),this.minHeight&&(w.style.minHeight=this.minHeight)):w.style.height=this.height?this.height:this.minHeight,w.frameBorder=0,w._loadFunc=u.hitch(this,function(e){this.window=e,this.document=e.document,this.selection=new x.SelectionManager(e),g("ie")&&this._localizeEditorCommands(),this.onLoad(this.get("value"))});var T,k=this._getIframeDocTxt().replace(/\\/g,"\\\\").replace(/'/g,"\\'");T=g("ie")<11?'javascript:document.open();try{parent.window;}catch(e){document.domain="'+document.domain+"\";}document.write('"+k+"');document.close()":"javascript: '"+k+"'",9==g("ie")?(this.editingArea.appendChild(w),w.src=T):(w.setAttribute("src",T),this.editingArea.appendChild(w)),"LI"===d.nodeName&&(d.lastChild.style.marginTop="-1.2em"),r.add(this.domNode,this.baseClass)},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_getIframeDocTxt:function(){var e,t=l.getComputedStyle(this.domNode);if(this["aria-label"])e=this["aria-label"];else{var i=f('label[for="'+this.id+'"]',this.ownerDocument)[0]||n.byId(this["aria-labelledby"],this.ownerDocument);i&&(e=i.textContent||i.innerHTML||"")}var o="<div id='dijitEditorBody' role='textbox' aria-multiline='true' "+(e?" aria-label='"+_.escape(e)+"'":"")+"></div>",s=[t.fontWeight,t.fontSize,t.fontFamily].join(" "),r=t.lineHeight;r=r.indexOf("px")>=0?parseFloat(r)/parseFloat(t.fontSize):r.indexOf("em")>=0?parseFloat(r):"normal";var a="",d=this;this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/gi,function(e){e=e.replace(/^;/gi,"")+";";var t=e.split(":")[0];if(t){t=u.trim(t),t=t.toLowerCase();var i,o="";for(i=0;i<t.length;i++){var n=t.charAt(i);switch(n){case"-":i++,n=t.charAt(i).toUpperCase();default:o+=n}}l.set(d.domNode,o,"")}a+=e+";"}),this.iframe.setAttribute("title",e);var c=this.lang||h.locale.replace(/-.*/,"");return["<!DOCTYPE html>","<html lang='"+c+"'"+(this.isLeftToRight()?"":" dir='rtl'")+">\n","<head>\n","<meta http-equiv='Content-Type' content='text/html'>\n",e?"<title>"+_.escape(e)+"</title>":"","<style>\n","	body,html {\n","		background:transparent;\n","		padding: 1px 0 0 0;\n","		margin: -1px 0 0 0;\n","	}\n","	body,html,#dijitEditorBody { outline: none; }","html { height: 100%; width: 100%; overflow: hidden; }\n",this.height?"	body,#dijitEditorBody { height: 100%; width: 100%; overflow: auto; }\n":"	body,#dijitEditorBody { min-height: "+this.minHeight+"; width: 100%; overflow-x: auto; overflow-y: hidden; }\n","	body{\n","		top:0px;\n","		left:0px;\n","		right:0px;\n","		font:",s,";\n",this.height||g("opera")?"":"		position: fixed;\n","		line-height:",r,";\n","	}\n","	p{ margin: 1em 0; }\n","	li > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; }\n",g("ie")||g("trident")||g("edge")?"":"	li{ min-height:1.2em; }\n","</style>\n",this._applyEditingAreaStyleSheets(),"\n","</head>\n<body role='application'",e?" aria-label='"+_.escape(e)+"'":"","onload='try{frameElement && frameElement._loadFunc(window,document)}catch(e){document.domain=\""+document.domain+"\";frameElement._loadFunc(window,document)}' ","style='"+a+"'>",o,"</body>\n</html>"].join("")},_applyEditingAreaStyleSheets:function(){var e=[];this.styleSheets&&(e=this.styleSheets.split(";"),this.styleSheets=""),e=e.concat(this.editingAreaStyleSheets),this.editingAreaStyleSheets=[];for(var t,i="",o=0,n=C.get(this.ownerDocument);t=e[o++];){var s=new y(n.location,t).toString();this.editingAreaStyleSheets.push(s),i+='<link rel="stylesheet" type="text/css" href="'+s+'"/>'}return i},addStyleSheet:function(t){var i=t.toString(),o=C.get(this.ownerDocument);("."===i.charAt(0)||"/"!==i.charAt(0)&&!t.host)&&(i=new y(o.location,i).toString()),e.indexOf(this.editingAreaStyleSheets,i)>-1||(this.editingAreaStyleSheets.push(i),this.onLoadDeferred.then(u.hitch(this,function(){if(this.document.createStyleSheet)this.document.createStyleSheet(i);else{var e=this.document.getElementsByTagName("head")[0],t=this.document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=i,e.appendChild(t)}})))},removeStyleSheet:function(t){var i=t.toString(),o=C.get(this.ownerDocument);("."===i.charAt(0)||"/"!==i.charAt(0)&&!t.host)&&(i=new y(o.location,i).toString());var n=e.indexOf(this.editingAreaStyleSheets,i);-1!==n&&(delete this.editingAreaStyleSheets[n],f('link[href="'+i+'"]',this.window.document).orphan())},disabled:!1,_mozSettingProps:{styleWithCSS:!1},_setDisabledAttr:function(e){if(e=!!e,this._set("disabled",e),this.isLoaded){var t=g("ie")&&(this.isLoaded||!this.focusOnLoad);if(t&&(this.editNode.unselectable="on"),this.editNode.contentEditable=!e,this.editNode.tabIndex=e?"-1":this.tabIndex,t&&this.defer(function(){this.editNode&&(this.editNode.unselectable="off")}),g("mozilla")&&!e&&this._mozSettingProps){var i,o=this._mozSettingProps;for(i in o)if(o.hasOwnProperty(i))try{this.document.execCommand(i,!1,o[i])}catch(n){}}this._disabledOK=!0}},onLoad:function(t){this.window.__registeredWindow||(this.window.__registeredWindow=!0,this._iframeRegHandle=k.registerIframe(this.iframe)),this.editNode=this.document.body.firstChild;var i=this;this.beforeIframeNode=a.place("<div tabIndex=-1></div>",this.iframe,"before"),this.afterIframeNode=a.place("<div tabIndex=-1></div>",this.iframe,"after"),this.iframe.onfocus=this.document.onfocus=function(){i.editNode.focus()},this.focusNode=this.editNode;var o=this.events.concat(this.captureEvents),n=this.iframe?this.document:this.editNode;if(this.own.apply(this,e.map(o,function(e){var t=e.toLowerCase().replace(/^on/,"");return m(n,t,u.hitch(this,e))},this)),this.own(m(n,"mouseup",u.hitch(this,"onClick"))),g("ie")&&(this.own(m(this.document,"mousedown",u.hitch(this,"_onIEMouseDown"))),this.editNode.style.zoom=1),g("webkit")&&(this._webkitListener=this.own(m(this.document,"mouseup",u.hitch(this,"onDisplayChanged")))[0],this.own(m(this.document,"mousedown",u.hitch(this,function(e){var t=e.target;!t||t!==this.document.body&&t!==this.document||this.defer("placeCursorAtEnd")})))),g("ie"))try{this.document.execCommand("RespectVisibilityInDesign",!0,null)}catch(s){}this.isLoaded=!0,this.set("disabled",this.disabled);var r=u.hitch(this,function(){this.setValue(t),this.onLoadDeferred&&!this.onLoadDeferred.isFulfilled()&&this.onLoadDeferred.resolve(!0),this.onDisplayChanged(),this.focusOnLoad&&p(u.hitch(this,"defer","focus",this.updateInterval)),this.value=this.getValue(!0)});this.setValueDeferred?this.setValueDeferred.then(r):r()},onKeyDown:function(t){if(t.keyCode===c.SHIFT||t.keyCode===c.ALT||t.keyCode===c.META||t.keyCode===c.CTRL)return!0;if(t.keyCode===c.TAB&&this.isTabIndent&&(t.stopPropagation(),t.preventDefault(),this.queryCommandEnabled(t.shiftKey?"outdent":"indent")&&this.execCommand(t.shiftKey?"outdent":"indent")),t.keyCode==c.TAB&&!this.isTabIndent&&!t.ctrlKey&&!t.altKey)return t.shiftKey?this.beforeIframeNode.focus():this.afterIframeNode.focus(),!0;g("ie")<9&&t.keyCode===c.BACKSPACE&&"Control"===this.document.selection.type&&(t.stopPropagation(),t.preventDefault(),this.execCommand("delete")),g("ff")&&(t.keyCode!==c.PAGE_UP&&t.keyCode!==c.PAGE_DOWN||this.editNode.clientHeight>=this.editNode.scrollHeight&&t.preventDefault());var i=this._keyHandlers[t.keyCode],o=arguments;return i&&!t.altKey&&e.some(i,function(e){return e.shift^t.shiftKey||e.ctrl^(t.ctrlKey||t.metaKey)?void 0:(e.handler.apply(this,o)||t.preventDefault(),!0)},this),this.defer("onKeyPressed",1),!0},onKeyUp:function(){},setDisabled:function(e){h.deprecated("dijit.Editor::setDisabled is deprecated",'use dijit.Editor::attr("disabled",boolean) instead',2),this.set("disabled",e)},_setValueAttr:function(e){this.setValue(e)},_setDisableSpellCheckAttr:function(e){this.document?s.set(this.document.body,"spellcheck",!e):this.onLoadDeferred.then(u.hitch(this,function(){s.set(this.document.body,"spellcheck",!e)})),this._set("disableSpellCheck",e)},addKeyHandler:function(e,t,i,o){"string"==typeof e&&(e=e.toUpperCase().charCodeAt(0)),u.isArray(this._keyHandlers[e])||(this._keyHandlers[e]=[]),this._keyHandlers[e].push({shift:i||!1,ctrl:t||!1,handler:o})},onKeyPressed:function(){this.onDisplayChanged()},onClick:function(e){this.onDisplayChanged(e)},_onIEMouseDown:function(){this.focused||this.disabled||this.focus()},_onBlur:function(e){(g("ie")||g("trident"))&&this.defer(function(){k.curNode||this.ownerDocumentBody.focus()}),this.inherited(arguments);var t=this.getValue(!0);t!==this.value&&this.onChange(t),this._set("value",t)},_onFocus:function(e){this.disabled||(this._disabledOK||this.set("disabled",!1),this.inherited(arguments))},blur:function(){!g("ie")&&this.window.document.documentElement&&this.window.document.documentElement.focus?this.window.document.documentElement.focus():this.ownerDocumentBody.focus&&this.ownerDocumentBody.focus()},focus:function(){return this.isLoaded?void(g("ie")<9?this.iframe.fireEvent("onfocus",document.createEventObject()):this.editNode.focus()):void(this.focusOnLoad=!0)},updateInterval:200,_updateTimer:null,onDisplayChanged:function(){this._updateTimer&&this._updateTimer.remove(),this._updateTimer=this.defer("onNormalizedDisplayChanged",this.updateInterval)},onNormalizedDisplayChanged:function(){delete this._updateTimer},onChange:function(){},_normalizeCommand:function(e,t){var i=e.toLowerCase();return"formatblock"===i?g("safari")&&void 0===t&&(i="heading"):"hilitecolor"!==i||g("mozilla")||(i="backcolor"),i},_qcaCache:{},queryCommandAvailable:function(e){var t=this._qcaCache[e];return void 0!==t?t:this._qcaCache[e]=this._queryCommandAvailable(e)},_queryCommandAvailable:function(e){switch(e.toLowerCase()){case"bold":case"italic":case"underline":case"subscript":case"superscript":case"fontname":case"fontsize":case"forecolor":case"hilitecolor":case"justifycenter":case"justifyfull":case"justifyleft":case"justifyright":case"delete":case"selectall":case"toggledir":case"createlink":case"unlink":case"removeformat":case"inserthorizontalrule":case"insertimage":case"insertorderedlist":case"insertunorderedlist":case"indent":case"outdent":case"formatblock":case"inserthtml":case"undo":case"redo":case"strikethrough":case"tabindent":case"cut":case"copy":case"paste":return!0;case"blockdirltr":case"blockdirrtl":case"dirltr":case"dirrtl":case"inlinedirltr":case"inlinedirrtl":return g("ie")||g("trident")||g("edge");case"inserttable":case"insertcell":case"insertcol":case"insertrow":case"deletecells":case"deletecols":case"deleterows":case"mergecells":case"splitcell":return!g("webkit");default:return!1}},execCommand:function(e,t){var i;if(this.focused&&this.focus(),e=this._normalizeCommand(e,t),void 0!==t){if("heading"===e)throw new Error("unimplemented");"formatblock"===e&&(g("ie")||g("trident"))&&(t="<"+t+">")}var o="_"+e+"Impl";return this[o]?i=this[o](t):(t=arguments.length>1?t:null,(t||"createlink"!==e)&&(i=this.document.execCommand(e,!1,t))),this.onDisplayChanged(),i},queryCommandEnabled:function(e){if(this.disabled||!this._disabledOK)return!1;e=this._normalizeCommand(e);var t="_"+e+"EnabledImpl";return this[t]?this[t](e):this._browserQueryCommandEnabled(e)},queryCommandState:function(e){if(this.disabled||!this._disabledOK)return!1;e=this._normalizeCommand(e);try{return this.document.queryCommandState(e)}catch(t){return!1}},queryCommandValue:function(e){if(this.disabled||!this._disabledOK)return!1;var t;if(e=this._normalizeCommand(e),g("ie")&&"formatblock"===e)t=this._native2LocalFormatNames[this.document.queryCommandValue(e)];else if(g("mozilla")&&"hilitecolor"===e){var i;try{i=this.document.queryCommandValue("styleWithCSS")}catch(o){i=!1}this.document.execCommand("styleWithCSS",!1,!0),t=this.document.queryCommandValue(e),this.document.execCommand("styleWithCSS",!1,i)}else t=this.document.queryCommandValue(e);return t},_sCall:function(e,t){return this.selection[e].apply(this.selection,t)},placeCursorAtStart:function(){this.focus();var e=!1;if(g("mozilla"))for(var t=this.editNode.firstChild;t;){if(3===t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){e=!0,this.selection.selectElement(t);break}}else if(1===t.nodeType){e=!0;var i=t.tagName?t.tagName.toLowerCase():"";/br|input|img|base|meta|area|basefont|hr|link/.test(i)?this.selection.selectElement(t):this.selection.selectElementChildren(t);break}t=t.nextSibling}else e=!0,this.selection.selectElementChildren(this.editNode);e&&this.selection.collapse(!0)},placeCursorAtEnd:function(){this.focus();var e=!1;if(g("mozilla"))for(var t=this.editNode.lastChild;t;){if(3===t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){e=!0,this.selection.selectElement(t);break}}else if(1===t.nodeType){e=!0,this.selection.selectElement(t.lastChild||t);break}t=t.previousSibling}else e=!0,this.selection.selectElementChildren(this.editNode);e&&this.selection.collapse(!1)},getValue:function(e){return!this.textarea||!this.isClosed&&this.isLoaded?this.isLoaded?this._postFilterContent(null,e):this.value:this.textarea.value},_getValueAttr:function(){return this.getValue(!0)},setValue:function(e){if(!this.isLoaded)return void this.onLoadDeferred.then(u.hitch(this,function(){this.setValue(e)}));if(!this.textarea||!this.isClosed&&this.isLoaded){e=this._preFilterContent(e);var t=this.isClosed?this.domNode:this.editNode;t.innerHTML=e,this._preDomFilterContent(t)}else this.textarea.value=e;this.onDisplayChanged(),this._set("value",this.getValue(!0))},replaceValue:function(e){this.isClosed?this.setValue(e):this.window&&this.window.getSelection&&!g("mozilla")?this.setValue(e):this.window&&this.window.getSelection?(e=this._preFilterContent(e),this.execCommand("selectall"),this.execCommand("inserthtml",e),this._preDomFilterContent(this.editNode)):this.document&&this.document.selection&&this.setValue(e),this._set("value",this.getValue(!0))},_preFilterContent:function(t){var i=t;return e.forEach(this.contentPreFilters,function(e){e&&(i=e(i))}),i},_preDomFilterContent:function(t){t=t||this.editNode,e.forEach(this.contentDomPreFilters,function(e){e&&u.isFunction(e)&&e(t)},this)},_postFilterContent:function(t,i){var o;return u.isString(t)?o=t:(t=t||this.editNode,this.contentDomPostFilters.length&&(i&&(t=u.clone(t)),e.forEach(this.contentDomPostFilters,function(e){t=e(t)})),o=E.getChildrenHtml(t)),u.trim(o.replace(/^\xA0\xA0*/,"").replace(/\xA0\xA0*$/,"")).length||(o=""),e.forEach(this.contentPostFilters,function(e){o=e(o)}),o},_saveContent:function(){var e=n.byId(j._scopeName+"._editor.RichText.value");e&&(e.value&&(e.value+=this._SEPARATOR),e.value+=this.name+this._NAME_CONTENT_SEP+this.getValue(!0))},escapeXml:function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),t||(e=e.replace(/'/gm,"&#39;")),e},getNodeHtml:function(e){return h.deprecated("dijit.Editor::getNodeHtml is deprecated","use dijit/_editor/html::getNodeHtml instead",2),E.getNodeHtml(e)},getNodeChildrenHtml:function(e){return h.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated","use dijit/_editor/html::getChildrenHtml instead",2),E.getChildrenHtml(e)},close:function(e){if(!this.isClosed){if(arguments.length||(e=!0),e&&this._set("value",this.getValue(!0)),this.interval&&clearInterval(this.interval),this._webkitListener&&(this._webkitListener.remove(),delete this._webkitListener),g("ie")&&(this.iframe.onfocus=null),this.iframe._loadFunc=null,this._iframeRegHandle&&(this._iframeRegHandle.remove(),delete this._iframeRegHandle),this.textarea){var t=this.textarea.style;t.position="",t.left=t.top="",g("ie")&&(t.overflow=this.__overflow,this.__overflow=null),this.textarea.value=this.value,a.destroy(this.domNode),this.domNode=this.textarea}else this.domNode.innerHTML=this.value;delete this.iframe,r.remove(this.domNode,this.baseClass),this.isClosed=!0,this.isLoaded=!1,delete this.editNode,delete this.focusNode,this.window&&this.window._frameElement&&(this.window._frameElement=null),this.window=null,this.document=null,this.editingArea=null,this.editorObject=null}},destroy:function(){this.isClosed||this.close(!1),this._updateTimer&&this._updateTimer.remove(),this.inherited(arguments),A._globalSaveHandler&&delete A._globalSaveHandler[this.id]},_removeMozBogus:function(e){return e.replace(/\stype="_moz"/gi,"").replace(/\s_moz_dirty=""/gi,"").replace(/_moz_resizing="(true|false)"/gi,"")},_removeWebkitBogus:function(e){return e=e.replace(/\sclass="webkit-block-placeholder"/gi,""),e=e.replace(/\sclass="apple-style-span"/gi,""),e=e.replace(/<meta charset=\"utf-8\" \/>/gi,"")},_normalizeFontStyle:function(e){return e.replace(/<(\/)?strong([ \>])/gi,"<$1b$2").replace(/<(\/)?em([ \>])/gi,"<$1i$2")},_preFixUrlAttributes:function(e){return e.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2")},_browserQueryCommandEnabled:function(e){if(!e)return!1;var t=g("ie")<9?this.document.selection.createRange():this.document;try{return t.queryCommandEnabled(e)}catch(i){return!1}},_createlinkEnabledImpl:function(){var e=!0;if(g("opera")){var t=this.window.getSelection();e=t.isCollapsed?!0:this.document.queryCommandEnabled("createlink")}else e=this._browserQueryCommandEnabled("createlink");return e},_unlinkEnabledImpl:function(){var e=!0;return e=g("mozilla")||g("webkit")?this.selection.hasAncestorElement("a"):this._browserQueryCommandEnabled("unlink")},_inserttableEnabledImpl:function(){var e=!0;return e=g("mozilla")||g("webkit")?!0:this._browserQueryCommandEnabled("inserttable")},_cutEnabledImpl:function(){var e=!0;if(g("webkit")){var t=this.window.getSelection();t&&(t=t.toString()),e=!!t}else e=this._browserQueryCommandEnabled("cut");return e},_copyEnabledImpl:function(){var e=!0;if(g("webkit")){var t=this.window.getSelection();t&&(t=t.toString()),e=!!t}else e=this._browserQueryCommandEnabled("copy");return e},_pasteEnabledImpl:function(){var e=!0;return g("webkit")?!0:e=this._browserQueryCommandEnabled("paste")},_inserthorizontalruleImpl:function(e){return g("ie")?this._inserthtmlImpl("<hr>"):this.document.execCommand("inserthorizontalrule",!1,e)},_unlinkImpl:function(e){if(this.queryCommandEnabled("unlink")&&(g("mozilla")||g("webkit"))){var t=this.selection.getAncestorElement("a");return this.selection.selectElement(t),this.document.execCommand("unlink",!1,null)}return this.document.execCommand("unlink",!1,e)},_hilitecolorImpl:function(e){var t,i=this._handleTextColorOrProperties("hilitecolor",e);return i||(g("mozilla")?(this.document.execCommand("styleWithCSS",!1,!0),t=this.document.execCommand("hilitecolor",!1,e),this.document.execCommand("styleWithCSS",!1,!1)):t=this.document.execCommand("hilitecolor",!1,e)),t},_backcolorImpl:function(e){g("ie")&&(e=e?e:null);var t=this._handleTextColorOrProperties("backcolor",e);return t||(t=this.document.execCommand("backcolor",!1,e)),t},_forecolorImpl:function(e){g("ie")&&(e=e?e:null);var t=!1;return t=this._handleTextColorOrProperties("forecolor",e),t||(t=this.document.execCommand("forecolor",!1,e)),t},_inserthtmlImpl:function(e){e=this._preFilterContent(e);var t=!0;if(g("ie")<9){var i=this.document.selection.createRange();if("CONTROL"===this.document.selection.type.toUpperCase()){for(var o=i.item(0);i.length;)i.remove(i.item(0));o.outerHTML=e}else i.pasteHTML(e);i.select()}else if(g("trident")<8){var i,n=T.getSelection(this.window);if(n&&n.rangeCount&&n.getRangeAt){i=n.getRangeAt(0),i.deleteContents();var s=a.create("div");s.innerHTML=e;for(var r,d,o=this.document.createDocumentFragment();r=s.firstChild;)d=o.appendChild(r);i.insertNode(o),d&&(i=i.cloneRange(),i.setStartAfter(d),i.collapse(!1),n.removeAllRanges(),n.addRange(i))}}else g("mozilla")&&!e.length?this.selection.remove():t=this.document.execCommand("inserthtml",!1,e);return t},_boldImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("bold")),t||(t=this.document.execCommand("bold",!1,e)),t},_italicImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("italic")),t||(t=this.document.execCommand("italic",!1,e)),t},_underlineImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("underline")),t||(t=this.document.execCommand("underline",!1,e)),t},_strikethroughImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("strikethrough")),t||(t=this.document.execCommand("strikethrough",!1,e)),t},_superscriptImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("superscript")),t||(t=this.document.execCommand("superscript",!1,e)),t},_subscriptImpl:function(e){var t=!1;return(g("ie")||g("trident"))&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("subscript")),t||(t=this.document.execCommand("subscript",!1,e)),t},_fontnameImpl:function(e){var t;return(g("ie")||g("trident"))&&(t=this._handleTextColorOrProperties("fontname",e)),t||(t=this.document.execCommand("fontname",!1,e)),t},_fontsizeImpl:function(e){var t;return(g("ie")||g("trident"))&&(t=this._handleTextColorOrProperties("fontsize",e)),t||(t=this.document.execCommand("fontsize",!1,e)),t},_insertorderedlistImpl:function(e){var t=!1;return(g("ie")||g("trident")||g("edge"))&&(t=this._adaptIEList("insertorderedlist",e)),t||(t=this.document.execCommand("insertorderedlist",!1,e)),t},_insertunorderedlistImpl:function(e){var t=!1;return(g("ie")||g("trident")||g("edge"))&&(t=this._adaptIEList("insertunorderedlist",e)),t||(t=this.document.execCommand("insertunorderedlist",!1,e)),t},getHeaderHeight:function(){return this._getNodeChildrenHeight(this.header)},getFooterHeight:function(){return this._getNodeChildrenHeight(this.footer)},_getNodeChildrenHeight:function(e){var t=0;if(e&&e.childNodes){var i;for(i=0;i<e.childNodes.length;i++){var o=d.position(e.childNodes[i]);t+=o.h}}return t},_isNodeEmpty:function(e,t){return 1===e.nodeType?e.childNodes.length>0?this._isNodeEmpty(e.childNodes[0],t):!0:3===e.nodeType?""===e.nodeValue.substring(t):!1},_removeStartingRangeFromRange:function(e,t){if(e.nextSibling)t.setStart(e.nextSibling,0);else{for(var i=e.parentNode;i&&null==i.nextSibling;)i=i.parentNode;i&&t.setStart(i.nextSibling,0)}return t},_adaptIESelection:function(){var e=T.getSelection(this.window);if(e&&e.rangeCount&&!e.isCollapsed){for(var t=e.getRangeAt(0),i=t.startContainer,o=t.startOffset;3===i.nodeType&&o>=i.length&&i.nextSibling;)o-=i.length,i=i.nextSibling;for(var n=null;this._isNodeEmpty(i,o)&&i!==n;)n=i,t=this._removeStartingRangeFromRange(i,t),i=t.startContainer,o=0;e.removeAllRanges(),e.addRange(t)}},_adaptIEFormatAreaAndExec:function(t){var i,o,n,s,r,d,l,h,c=T.getSelection(this.window),u=this.document;if(!(t&&c&&c.isCollapsed))return!1;var m=this.queryCommandValue(t);if(m){var f=this._tagNamesForCommand(t);n=c.getRangeAt(0);var p=n.startContainer;if(3===p.nodeType){var g=n.endOffset;p.length<g&&(o=this._adjustNodeAndOffset(i,g),p=o.node,g=o.offset)}for(var _;p&&p!==this.editNode;){var b=p.tagName?p.tagName.toLowerCase():"";if(e.indexOf(f,b)>-1){_=p;break}p=p.parentNode}if(_){i=n.startContainer;var v=u.createElement(_.tagName);if(a.place(v,_,"after"),i&&3===i.nodeType){var y,C,N=n.endOffset;i.length<N&&(o=this._adjustNodeAndOffset(i,N),i=o.node,N=o.offset),s=i.nodeValue,r=u.createTextNode(s.substring(0,N));var w=s.substring(N,s.length);w&&(d=u.createTextNode(w)),a.place(r,i,"before"),d&&(l=u.createElement("span"),l.className="ieFormatBreakerSpan",a.place(l,i,"after"),a.place(d,l,"after"),d=l),a.destroy(i);for(var x,E=r.parentNode,k=[];E!==_;){var j=E.tagName;x={tagName:j},k.push(x);var A=u.createElement(j);if(E.style&&A.style&&E.style.cssText&&(A.style.cssText=E.style.cssText,x.cssText=E.style.cssText),"FONT"===E.tagName&&(E.color&&(A.color=E.color,x.color=E.color),E.face&&(A.face=E.face,x.face=E.face),E.size&&(A.size=E.size,x.size=E.size)),E.className&&(A.className=E.className,x.className=E.className),d)for(y=d;y;)C=y.nextSibling,A.appendChild(y),y=C;A.tagName==E.tagName?(l=u.createElement("span"),l.className="ieFormatBreakerSpan",a.place(l,E,"after"),a.place(A,l,"after")):a.place(A,E,"after"),r=E,d=A,E=E.parentNode}if(d)for(y=d,(1===y.nodeType||3===y.nodeType&&y.nodeValue)&&(v.innerHTML="");y;)C=y.nextSibling,v.appendChild(y),y=C;var S;if(k.length){x=k.pop();var D=u.createElement(x.tagName);for(x.cssText&&D.style&&(D.style.cssText=x.cssText),x.className&&(D.className=x.className),"FONT"===x.tagName&&(x.color&&(D.color=x.color),x.face&&(D.face=x.face),x.size&&(D.size=x.size)),a.place(D,v,"before");k.length;){x=k.pop();var R=u.createElement(x.tagName);x.cssText&&R.style&&(R.style.cssText=x.cssText),x.className&&(R.className=x.className),"FONT"===x.tagName&&(x.color&&(R.color=x.color),x.face&&(R.face=x.face),x.size&&(R.size=x.size)),D.appendChild(R),D=R}h=u.createTextNode("."),l.appendChild(h),D.appendChild(h),S=T.create(this.window),S.setStart(h,0),S.setEnd(h,h.length),c.removeAllRanges(),c.addRange(S),this.selection.collapse(!1),h.parentNode.innerHTML=""}else l=u.createElement("span"),l.className="ieFormatBreakerSpan",h=u.createTextNode("."),l.appendChild(h),a.place(l,v,"before"),S=T.create(this.window),S.setStart(h,0),S.setEnd(h,h.length),c.removeAllRanges(),c.addRange(S),this.selection.collapse(!1),h.parentNode.innerHTML="";return v.firstChild||a.destroy(v),!0}}return!1}if(n=c.getRangeAt(0),i=n.startContainer,i&&3===i.nodeType){var g=n.startOffset;i.length<g&&(o=this._adjustNodeAndOffset(i,g),i=o.node,g=o.offset),s=i.nodeValue,r=u.createTextNode(s.substring(0,g));var w=s.substring(g);""!==w&&(d=u.createTextNode(s.substring(g))),l=u.createElement("span"),h=u.createTextNode("."),l.appendChild(h),r.length?a.place(r,i,"after"):r=i,a.place(l,r,"after"),d&&a.place(d,l,"after"),a.destroy(i);var S=T.create(this.window);return S.setStart(h,0),S.setEnd(h,h.length),c.removeAllRanges(),c.addRange(S),u.execCommand(t),a.place(l.firstChild,l,"before"),a.destroy(l),S.setStart(h,0),S.setEnd(h,h.length),c.removeAllRanges(),c.addRange(S),this.selection.collapse(!1),h.parentNode.innerHTML="",!0}},_adaptIEList:function(e){
var t=T.getSelection(this.window);if(t.isCollapsed&&t.rangeCount&&!this.queryCommandValue(e)){var i=t.getRangeAt(0),o=i.startContainer;if(o&&3==o.nodeType&&!i.startOffset){var n="ul";"insertorderedlist"===e&&(n="ol");var s=this.document.createElement(n),r=a.create("li",null,s);a.place(s,o,"before"),r.appendChild(o),a.create("br",null,s,"after");var d=T.create(this.window);return d.setStart(o,0),d.setEnd(o,o.length),t.removeAllRanges(),t.addRange(d),this.selection.collapse(!0),!0}}return!1},_handleTextColorOrProperties:function(e,t){var i,o,n,s,r,d,h,c,u=T.getSelection(this.window),m=this.document;if(t=t||null,e&&u&&u.isCollapsed&&u.rangeCount&&(n=u.getRangeAt(0),i=n.startContainer,i&&3===i.nodeType)){var f=n.startOffset;i.length<f&&(o=this._adjustNodeAndOffset(i,f),i=o.node,f=o.offset),s=i.nodeValue,r=m.createTextNode(s.substring(0,f));var p=s.substring(f);""!==p&&(d=m.createTextNode(s.substring(f))),h=m.createElement("span"),c=m.createTextNode("."),h.appendChild(c);var _=m.createElement("span");h.appendChild(_),r.length?a.place(r,i,"after"):r=i,a.place(h,r,"after"),d&&a.place(d,h,"after"),a.destroy(i);var b=T.create(this.window);if(b.setStart(c,0),b.setEnd(c,c.length),u.removeAllRanges(),u.addRange(b),g("webkit")){var v="color";"hilitecolor"!==e&&"backcolor"!==e||(v="backgroundColor"),l.set(h,v,t),this.selection.remove(),a.destroy(_),h.innerHTML="&#160;",this.selection.selectElement(h),this.focus()}else this.execCommand(e,t),a.place(h.firstChild,h,"before"),a.destroy(h),b.setStart(c,0),b.setEnd(c,c.length),u.removeAllRanges(),u.addRange(b),this.selection.collapse(!1),c.parentNode.removeChild(c);return!0}return!1},_adjustNodeAndOffset:function(e,t){for(;e.length<t&&e.nextSibling&&3===e.nextSibling.nodeType;)t-=e.length,e=e.nextSibling;return{node:e,offset:t}},_tagNamesForCommand:function(e){return"bold"===e?["b","strong"]:"italic"===e?["i","em"]:"strikethrough"===e?["s","strike"]:"superscript"===e?["sup"]:"subscript"===e?["sub"]:"underline"===e?["u"]:[]},_stripBreakerNodes:function(e){return this.isLoaded?(f(".ieFormatBreakerSpan",e).forEach(function(e){for(;e.firstChild;)a.place(e.firstChild,e,"before");a.destroy(e)}),e):void 0},_stripTrailingEmptyNodes:function(e){function t(e){return/^(p|div|br)$/i.test(e.nodeName)&&0==e.children.length&&/^[\s\xA0]*$/.test(e.textContent||e.innerText||"")||3===e.nodeType&&/^[\s\xA0]*$/.test(e.nodeValue)}for(;e.lastChild&&t(e.lastChild);)a.destroy(e.lastChild);return e},_setTextDirAttr:function(e){this._set("textDir",e),this.onLoadDeferred.then(u.hitch(this,function(){this.editNode.dir=e}))}});return A});//# sourceMappingURL=RichText.js.map