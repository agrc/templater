//>>built
define("dojox/editor/plugins/SpellCheck",["dojo","dijit","dojo/io/script","dijit/popup","dijit/_Widget","dijit/_Templated","dijit/_editor/_Plugin","dijit/form/TextBox","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/MultiSelect","dijit/Menu","dojo/i18n!dojox/editor/plugins/nls/SpellCheck"],function(e,t,i,a,r,n,o){e.experimental("dojox.editor.plugins.SpellCheck");var d=e.declare("dojox.editor.plugins._spellCheckControl",[r,n],{widgetsInTemplate:!0,templateString:"<table role='presentation' class='dijitEditorSpellCheckTable'><tr><td colspan='3' class='alignBottom'><label for='${textId}' id='${textId}_label'>${unfound}</label><div class='dijitEditorSpellCheckBusyIcon' id='${id}_progressIcon'></div></td></tr><tr><td class='dijitEditorSpellCheckBox'><input dojoType='dijit.form.TextBox' required='false' intermediateChanges='true' class='dijitEditorSpellCheckBox' dojoAttachPoint='unfoundTextBox' id='${textId}'/></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipButton'>${skip}</button></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipAllButton'>${skipAll}</button></td></tr><tr><td class='alignBottom'><label for='${selectId}'>${suggestions}</td></label><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='toDicButton'>${toDic}</button></td></tr><tr><td><select dojoType='dijit.form.MultiSelect' id='${selectId}' class='dijitEditorSpellCheckBox listHeight' dojoAttachPoint='suggestionSelect'></select></td><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceButton'>${replace}</button><div class='topMargin'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceAllButton'>${replaceAll}</button><div></td></tr><tr><td><div class='topMargin'><button dojoType='dijit.form.Button' dojoAttachPoint='cancelButton'>${cancel}</button></div></td><td></td><td></td></tr></table>",constructor:function(){this.ignoreChange=!1,this.isChanged=!1,this.isOpen=!1,this.closable=!0},postMixInProperties:function(){this.id=t.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.textId=this.id+"_textBox",this.selectId=this.id+"_select"},postCreate:function(){var t=this.suggestionSelect;e.removeAttr(t.domNode,"multiple"),t.addItems=function(t){var i=this,a=null;t&&t.length>0&&e.forEach(t,function(t,r){a=e.create("option",{innerHTML:t,value:t},i.domNode),0==r&&(a.selected=!0)})},t.removeItems=function(){e.empty(this.domNode)},t.deselectAll=function(){this.containerNode.selectedIndex=-1},this.connect(this,"onKeyPress","_cancel"),this.connect(this.unfoundTextBox,"onKeyPress","_enter"),this.connect(this.unfoundTextBox,"onChange","_unfoundTextBoxChange"),this.connect(this.suggestionSelect,"onKeyPress","_enter"),this.connect(this.skipButton,"onClick","onSkip"),this.connect(this.skipAllButton,"onClick","onSkipAll"),this.connect(this.toDicButton,"onClick","onAddToDic"),this.connect(this.replaceButton,"onClick","onReplace"),this.connect(this.replaceAllButton,"onClick","onReplaceAll"),this.connect(this.cancelButton,"onClick","onCancel")},onSkip:function(){},onSkipAll:function(){},onAddToDic:function(){},onReplace:function(){},onReplaceAll:function(){},onCancel:function(){},onEnter:function(){},focus:function(){this.unfoundTextBox.focus()},_cancel:function(t){t.keyCode==e.keys.ESCAPE&&(this.onCancel(),e.stopEvent(t))},_enter:function(t){t.keyCode==e.keys.ENTER&&(this.onEnter(),e.stopEvent(t))},_unfoundTextBoxChange:function(){var t=this.textId+"_label";this.ignoreChange?e.byId(t).innerHTML=this.unfound:(e.byId(t).innerHTML=this.replaceWith,this.isChanged=!0,this.suggestionSelect.deselectAll())},_setUnfoundWordAttr:function(e){e=e||"",this.unfoundTextBox.set("value",e)},_getUnfoundWordAttr:function(){return this.unfoundTextBox.get("value")},_setSuggestionListAttr:function(e){var t=this.suggestionSelect;e=e||[],t.removeItems(),t.addItems(e)},_getSelectedWordAttr:function(){var e=this.suggestionSelect.getSelected();return e&&e.length>0?e[0].value:this.unfoundTextBox.get("value")},_setDisabledAttr:function(e){this.skipButton.set("disabled",e),this.skipAllButton.set("disabled",e),this.toDicButton.set("disabled",e),this.replaceButton.set("disabled",e),this.replaceAllButton.set("disabled",e)},_setInProgressAttr:function(t){var i=this.id+"_progressIcon";e.toggleClass(i,"hidden",!t)}}),s=e.declare("dojox.editor.plugins._SpellCheckScriptMultiPart",null,{ACTION_QUERY:"query",ACTION_UPDATE:"update",callbackHandle:"callback",maxBufferLength:100,delimiter:" ",label:"response",_timeout:3e4,SEC:1e3,constructor:function(){this.serviceEndPoint="",this._queue=[],this.isWorking=!1,this.exArgs=null,this._counter=0},send:function(t,i){var a=this,r=this.delimiter,n=this.maxBufferLength,o=this.label,d=this.serviceEndPoint,s=this.callbackHandle,l=this.exArgs,h=this._timeout,u=0,m=0;this._result||(this._result=[]),i=i||this.ACTION_QUERY;var c=function(){var c=[],f=0;if(t&&t.length>0){a.isWorking=!0;var y=t.length;do{if(u=m+1,(m+=n)>y)m=y;else for(;r&&t.charAt(m)!=r&&y>=m;)m++;c.push({l:u,r:m}),f++}while(y>m);e.forEach(c,function(r,n){var u={url:d,action:i,timeout:h,callbackParamName:s,handle:function(t,i){if(++a._counter<=this.size&&!(t instanceof Error)&&t[o]&&e.isArray(t[o])){var r=this.offset;e.forEach(t[o],function(e){e.offset+=r}),a._result[this.number]=t[o]}a._counter==this.size&&(a._finalizeCollection(this.action),a.isWorking=!1,a._queue.length>0&&a._queue.shift()())}};u.content=l?e.mixin(l,{action:i,content:t.substring(r.l-1,r.r)}):{action:i,content:t.substring(r.l-1,r.r)},u.size=f,u.number=n,u.offset=r.l-1,e.io.script.get(u)})}};a.isWorking?a._queue.push(c):c()},_finalizeCollection:function(e){for(var t=this._result,i=t.length,a=0;i>a;a++){var r=t.shift();t=t.concat(r)}e==this.ACTION_QUERY&&this.onLoad(t),this._counter=0,this._result=[]},onLoad:function(e){},setWaitingTime:function(e){this._timeout=e*this.SEC}}),l=e.declare("dojox.editor.plugins.SpellCheck",[o],{url:"",bufferLength:100,interactive:!1,timeout:30,button:null,_editor:null,exArgs:null,_cursorSpan:'<span class="cursorPlaceHolder"></span>',_cursorSelector:"cursorPlaceHolder",_incorrectWordsSpan:"<span class='incorrectWordPlaceHolder'>${text}</span>",_ignoredIncorrectStyle:{cursor:"inherit",borderBottom:"none",backgroundColor:"transparent"},_normalIncorrectStyle:{cursor:"pointer",borderBottom:"1px dotted red",backgroundColor:"yellow"},_highlightedIncorrectStyle:{borderBottom:"1px dotted red",backgroundColor:"#b3b3ff"},_selector:"incorrectWordPlaceHolder",_maxItemNumber:3,constructor:function(){this._spanList=[],this._cache={},this._enabled=!0,this._iterator=0},setEditor:function(e){this._editor=e,this._initButton(),this._setNetwork(),this._connectUp()},_initButton:function(){var i=this,r=this._strings=e.i18n.getLocalization("dojox.editor.plugins","SpellCheck"),n=this._dialog=new t.TooltipDialog;n.set("content",this._dialogContent=new d({unfound:r.unfound,skip:r.skip,skipAll:r.skipAll,toDic:r.toDic,suggestions:r.suggestions,replaceWith:r.replaceWith,replace:r.replace,replaceAll:r.replaceAll,cancel:r.cancel})),this.button=new t.form.DropDownButton({label:r.widgetLabel,showLabel:!1,iconClass:"dijitEditorSpellCheckIcon",dropDown:n,id:t.getUniqueId(this.declaredClass.replace(/\./g,"_"))+"_dialogPane",closeDropDown:function(t){if(i._dialogContent.closable){if(i._dialogContent.isOpen=!1,e.isIE){var r=i._iterator,n=i._spanList;r<n.length&&r>=0&&e.style(n[r],i._normalIncorrectStyle)}this._opened&&(a.close(this.dropDown),t&&this.focus(),this._opened=!1,this.state="")}}}),i._dialogContent.isOpen=!1,n.domNode.setAttribute("aria-label",this._strings.widgetLabel)},_setNetwork:function(){var e=this.exArgs;if(!this._service){var t=this._service=new s;t.serviceEndPoint=this.url,t.maxBufferLength=this.bufferLength,t.setWaitingTime(this.timeout),e&&(delete e.name,delete e.url,delete e.interactive,delete e.timeout,t.exArgs=e)}},_connectUp:function(){var i=this._editor,a=this._dialogContent;this.connect(this.button,"set","_disabled"),this.connect(this._service,"onLoad","_loadData"),this.connect(this._dialog,"onOpen","_openDialog"),this.connect(i,"onKeyPress","_keyPress"),this.connect(i,"onLoad","_submitContent"),this.connect(a,"onSkip","_skip"),this.connect(a,"onSkipAll","_skipAll"),this.connect(a,"onAddToDic","_add"),this.connect(a,"onReplace","_replace"),this.connect(a,"onReplaceAll","_replaceAll"),this.connect(a,"onCancel","_cancel"),this.connect(a,"onEnter","_enter"),i.contentPostFilters.push(this._spellCheckFilter),e.publish(t._scopeName+".Editor.plugin.SpellCheck.getParser",[this]),!this.parser},_disabled:function(e,t){"disabled"==e&&(t?(this._iterator=0,this._spanList=[]):this.interactive&&!t&&this._service&&this._submitContent(!0),this._enabled=!t)},_keyPress:function(t){if(this.interactive){var i=118,a=86,r=t.charCode;t.altKey||r!=e.keys.SPACE?(t.ctrlKey&&(r==i||r==a)||!t.ctrlKey&&t.charCode)&&this._submitContent(!0):this._submitContent()}},_loadData:function(t){var i=this._cache,a=this._editor.get("value"),r=this._dialogContent;this._iterator=0,e.forEach(t,function(e){i[e.text]=e.suggestion,i[e.text].correct=!1}),this._enabled&&(r.closable=!1,this._markIncorrectWords(a,i),r.closable=!0,this._dialogContent.isOpen&&(this._iterator=-1,this._skip()))},_openDialog:function(){var e=this._dialogContent;e.ignoreChange=!0,e.set("unfoundWord",""),e.set("suggestionList",null),e.set("disabled",!0),e.set("inProgress",!0),e.isOpen=!0,e.closable=!1,this._submitContent(),e.closable=!0},_skip:function(t,i){var a=this._dialogContent,r=this._spanList||[],n=r.length,o=this._iterator;for(a.closable=!1,a.isChanged=!1,a.ignoreChange=!0,!i&&o>=0&&n>o&&this._skipWord(o);++o<n&&1==r[o].edited;);n>o?(this._iterator=o,this._populateDialog(o),this._selectWord(o)):(this._iterator=-1,a.set("unfoundWord",this._strings.msg),a.set("suggestionList",null),a.set("disabled",!0),a.set("inProgress",!1)),setTimeout(function(){e.isWebKit&&a.skipButton.focus(),a.focus(),a.ignoreChange=!1,a.closable=!0},0)},_skipAll:function(){this._dialogContent.closable=!1,this._skipWordAll(this._iterator),this._skip()},_add:function(){var e=this._dialogContent;e.closable=!1,e.isOpen=!0,this._addWord(this._iterator,e.get("unfoundWord")),this._skip()},_replace:function(){var e=this._dialogContent,t=this._iterator,i=e.get("selectedWord");e.closable=!1,this._replaceWord(t,i),this._skip(null,!0)},_replaceAll:function(){var e=this._dialogContent,t=this._spanList,i=t.length,a=t[this._iterator].innerHTML.toLowerCase(),r=e.get("selectedWord");e.closable=!1;for(var n=0;i>n;n++)t[n].innerHTML.toLowerCase()==a&&this._replaceWord(n,r);this._skip(null,!0)},_cancel:function(){this._dialogContent.closable=!0,this._editor.focus()},_enter:function(){this._dialogContent.isChanged?this._replace():this._skip()},_query:function(t){var i=this._service,a=this._cache,r=this.parser.parseIntoWords(this._html2Text(t))||[],n=[];e.forEach(r,function(e){e=e.toLowerCase(),a[e]||(a[e]=[],a[e].correct=!0,n.push(e))}),n.length>0?i.send(n.join(" ")):i.isWorking||this._loadData([])},_html2Text:function(e){for(var t=[],i=!1,a=e?e.length:0,r=0;a>r;r++)"<"==e.charAt(r)&&(i=!0),1==i?t.push(" "):t.push(e.charAt(r)),">"==e.charAt(r)&&(i=!1);return t.join("")},_getBookmark:function(e){var t=this._editor,i=this._cursorSpan;t.execCommand("inserthtml",i);for(var a=t.get("value"),r=a.indexOf(i),n=-1;++n<r&&e.charAt(n)==a.charAt(n););return n},_moveToBookmark:function(){var t=this._editor,i=e.query("."+this._cursorSelector,t.document),a=i&&i[0];if(a){t._sCall("selectElement",[a]),t._sCall("collapse",[!0]);var r=a.parentNode;r&&r.removeChild(a)}},_submitContent:function(e){if(e){var t=this,i=3e3;this._delayHandler&&(clearTimeout(this._delayHandler),this._delayHandler=null),setTimeout(function(){t._query(t._editor.get("value"))},i)}else this._query(this._editor.get("value"))},_populateDialog:function(e){var t=this._spanList,i=this._cache,a=this._dialogContent;if(a.set("disabled",!1),e<t.length&&t.length>0){var r=t[e].innerHTML;a.set("unfoundWord",r),a.set("suggestionList",i[r.toLowerCase()]),a.set("inProgress",!1)}},_markIncorrectWords:function(i,a){for(var r=this,n=this.parser,o=this._editor,d=this._incorrectWordsSpan,s=this._normalIncorrectStyle,l=this._selector,h=n.parseIntoWords(this._html2Text(i).toLowerCase()),u=n.getIndices(),m=this._cursorSpan,c=this._getBookmark(i),f="<span class='incorrectWordPlaceHolder'>".length,y=!1,g=i.split(""),p=null,v=h.length-1;v>=0;v--){var b=h[v];if(a[b]&&!a[b].correct){var M=u[v],_=h[v].length,w=M+_;if(c>=w&&!y&&(g.splice(c,0,m),y=!0),g.splice(M,_,e.string.substitute(d,{text:i.substring(M,w)})),c>M&&w>c&&!y){var x=g[M].split("");x.splice(f+c-M,0,m),g[M]=x.join(""),y=!0}}}y||(g.splice(c,0,m),y=!0),o.set("value",g.join("")),o._cursorToStart=!1,this._moveToBookmark(),p=this._spanList=e.query("."+this._selector,o.document),p.forEach(function(e,t){e.id=l+t}),this.interactive||delete s.cursor,p.style(s),this.interactive&&(r._contextMenu&&(r._contextMenu.uninitialize(),r._contextMenu=null),r._contextMenu=new t.Menu({targetNodeIds:[o.iframe],bindDomNode:function(i){i=e.byId(i);var n,d,s;"iframe"==i.tagName.toLowerCase()?(d=i,s=this._iframeContentWindow(d),n=e.body(o.document)):n=i==e.body()?e.doc.documentElement:i;var h={node:i,iframe:d};e.attr(i,"_dijitMenu"+this.id,this._bindings.push(h));var u=e.hitch(this,function(i){return[e.connect(i,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(i){var n=i.target,s=r._strings;if(e.hasClass(n,l)&&!n.edited){e.stopEvent(i);var h=r._maxItemNumber,u=n.id,m=u.substring(l.length),c=a[n.innerHTML.toLowerCase()],f=c.length;if(this.destroyDescendants(),0==f)this.addChild(new t.MenuItem({label:s.iMsg,disabled:!0}));else for(var y=0;h>y&&f>y;y++)this.addChild(new t.MenuItem({label:c[y],onClick:function(){var e=m,t=c[y];return function(){r._replaceWord(e,t),o.focus()}}()}));this.addChild(new t.MenuSeparator),this.addChild(new t.MenuItem({label:s.iSkip,onClick:function(){r._skipWord(m),o.focus()}})),this.addChild(new t.MenuItem({label:s.iSkipAll,onClick:function(){r._skipWordAll(m),o.focus()}})),this.addChild(new t.MenuSeparator),this.addChild(new t.MenuItem({label:s.toDic,onClick:function(){r._addWord(m),o.focus()}})),this._scheduleOpen(n,d,{x:i.pageX,y:i.pageY})}}),e.connect(i,"onkeydown",this,function(t){t.shiftKey&&t.keyCode==e.keys.F10&&(e.stopEvent(t),this._scheduleOpen(t.target,d))})]});h.connects=n?u(n):[],d&&(h.onloadHandler=e.hitch(this,function(){var t=(this._iframeContentWindow(d),e.body(o.document));h.connects=u(t)}),d.addEventListener?d.addEventListener("load",h.onloadHandler,!1):d.attachEvent("onload",h.onloadHandler))}}))},_selectWord:function(t){var i=this._editor,a=this._spanList;t<a.length&&a.length>0&&(i._sCall("selectElement",[a[t]]),i._sCall("collapse",[!0]),this._findText(a[t].innerHTML,!1,!1),e.isIE&&e.style(a[t],this._highlightedIncorrectStyle))},_replaceWord:function(t,i){var a=this._spanList;a[t].innerHTML=i,e.style(a[t],this._ignoredIncorrectStyle),a[t].edited=!0},_skipWord:function(t){var i=this._spanList;e.style(i[t],this._ignoredIncorrectStyle),this._cache[i[t].innerHTML.toLowerCase()].correct=!0,i[t].edited=!0},_skipWordAll:function(e,t){var i=this._spanList,a=i.length;t=t||i[e].innerHTML.toLowerCase();for(var r=0;a>r;r++)i[r].edited||i[r].innerHTML.toLowerCase()!=t||this._skipWord(r)},_addWord:function(e,t){var i=this._service;i.send(t||this._spanList[e].innerHTML.toLowerCase(),i.ACTION_UPDATE),this._skipWordAll(e,t)},_findText:function(e,t,i){var a=this._editor,r=a.window,n=!1;if(e)if(r.find)n=r.find(e,t,i,!1,!1,!1,!1);else{var o=a.document;if(o.selection){this._editor.focus();var d=o.body.createTextRange(),s=o.selection?o.selection.createRange():null;s&&(i?d.setEndPoint("EndToStart",s):d.setEndPoint("StartToEnd",s));var l=t?4:0;i&&(l=1|l),n=d.findText(e,d.text.length,l),n&&d.select()}}return n},_spellCheckFilter:function(e){var t=/<span class=["']incorrectWordPlaceHolder["'].*?>(.*?)<\/span>/g;return e.replace(t,"$1")}});return l._SpellCheckControl=d,l._SpellCheckScriptMultiPart=s,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"spellcheck"===t&&(e.plugin=new l({url:"url"in e.args?e.args.url:"",interactive:"interactive"in e.args?e.args.interactive:!1,bufferLength:"bufferLength"in e.args?e.args.bufferLength:100,timeout:"timeout"in e.args?e.args.timeout:30,exArgs:e.args}))}}),l});//# sourceMappingURL=SpellCheck.js.map