//>>built
define("dojox/editor/plugins/SpellCheck",["dojo","dijit","dojo/io/script","dijit/popup","dijit/_Widget","dijit/_Templated","dijit/_editor/_Plugin","dijit/form/TextBox","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/MultiSelect","dijit/Menu","dojo/i18n!dojox/editor/plugins/nls/SpellCheck"],function(e,t,i,a,r,o,n){e.experimental("dojox.editor.plugins.SpellCheck");var s=e.declare("dojox.editor.plugins._spellCheckControl",[r,o],{widgetsInTemplate:!0,templateString:"<table role='presentation' class='dijitEditorSpellCheckTable'><tr><td colspan='3' class='alignBottom'><label for='${textId}' id='${textId}_label'>${unfound}</label><div class='dijitEditorSpellCheckBusyIcon' id='${id}_progressIcon'></div></td></tr><tr><td class='dijitEditorSpellCheckBox'><input dojoType='dijit.form.TextBox' required='false' intermediateChanges='true' class='dijitEditorSpellCheckBox' dojoAttachPoint='unfoundTextBox' id='${textId}'/></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipButton'>${skip}</button></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipAllButton'>${skipAll}</button></td></tr><tr><td class='alignBottom'><label for='${selectId}'>${suggestions}</td></label><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='toDicButton'>${toDic}</button></td></tr><tr><td><select dojoType='dijit.form.MultiSelect' id='${selectId}' class='dijitEditorSpellCheckBox listHeight' dojoAttachPoint='suggestionSelect'></select></td><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceButton'>${replace}</button><div class='topMargin'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceAllButton'>${replaceAll}</button><div></td></tr><tr><td><div class='topMargin'><button dojoType='dijit.form.Button' dojoAttachPoint='cancelButton'>${cancel}</button></div></td><td></td><td></td></tr></table>",constructor:function(){this.ignoreChange=!1,this.isChanged=!1,this.isOpen=!1,this.closable=!0},postMixInProperties:function(){this.id=t.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.textId=this.id+"_textBox",this.selectId=this.id+"_select"},postCreate:function(){var t=this.suggestionSelect;e.removeAttr(t.domNode,"multiple"),t.addItems=function(t){var i=this,a=null;t&&t.length>0&&e.forEach(t,function(t,r){a=e.create("option",{innerHTML:t,value:t},i.domNode),0==r&&(a.selected=!0)})},t.removeItems=function(){e.empty(this.domNode)},t.deselectAll=function(){this.containerNode.selectedIndex=-1},this.connect(this,"onKeyPress","_cancel"),this.connect(this.unfoundTextBox,"onKeyPress","_enter"),this.connect(this.unfoundTextBox,"onChange","_unfoundTextBoxChange"),this.connect(this.suggestionSelect,"onKeyPress","_enter"),this.connect(this.skipButton,"onClick","onSkip"),this.connect(this.skipAllButton,"onClick","onSkipAll"),this.connect(this.toDicButton,"onClick","onAddToDic"),this.connect(this.replaceButton,"onClick","onReplace"),this.connect(this.replaceAllButton,"onClick","onReplaceAll"),this.connect(this.cancelButton,"onClick","onCancel")},onSkip:function(){},onSkipAll:function(){},onAddToDic:function(){},onReplace:function(){},onReplaceAll:function(){},onCancel:function(){},onEnter:function(){},focus:function(){this.unfoundTextBox.focus()},_cancel:function(t){t.keyCode==e.keys.ESCAPE&&(this.onCancel(),e.stopEvent(t))},_enter:function(t){t.keyCode==e.keys.ENTER&&(this.onEnter(),e.stopEvent(t))},_unfoundTextBoxChange:function(){var t=this.textId+"_label";this.ignoreChange?e.byId(t).innerHTML=this.unfound:(e.byId(t).innerHTML=this.replaceWith,this.isChanged=!0,this.suggestionSelect.deselectAll())},_setUnfoundWordAttr:function(e){e=e||"",this.unfoundTextBox.set("value",e)},_getUnfoundWordAttr:function(){return this.unfoundTextBox.get("value")},_setSuggestionListAttr:function(e){var t=this.suggestionSelect;e=e||[],t.removeItems(),t.addItems(e)},_getSelectedWordAttr:function(){var e=this.suggestionSelect.getSelected();return e&&e.length>0?e[0].value:this.unfoundTextBox.get("value")},_setDisabledAttr:function(e){this.skipButton.set("disabled",e),this.skipAllButton.set("disabled",e),this.toDicButton.set("disabled",e),this.replaceButton.set("disabled",e),this.replaceAllButton.set("disabled",e)},_setInProgressAttr:function(t){var i=this.id+"_progressIcon";e.toggleClass(i,"hidden",!t)}}),d=e.declare("dojox.editor.plugins._SpellCheckScriptMultiPart",null,{ACTION_QUERY:"query",ACTION_UPDATE:"update",callbackHandle:"callback",maxBufferLength:100,delimiter:" ",label:"response",_timeout:3e4,SEC:1e3,constructor:function(){this.serviceEndPoint="",this._queue=[],this.isWorking=!1,this.exArgs=null,this._counter=0},send:function(t,i){var a=this,r=this.delimiter,o=this.maxBufferLength,n=this.label,s=this.serviceEndPoint,d=this.callbackHandle,l=this.exArgs,h=this._timeout,u=0,m=0;this._result||(this._result=[]),i=i||this.ACTION_QUERY;var c=function(){var c=[],f=0;if(t&&t.length>0){a.isWorking=!0;var y=t.length;do{if(u=m+1,(m+=o)>y)m=y;else for(;r&&t.charAt(m)!=r&&y>=m;)m++;c.push({l:u,r:m}),f++}while(y>m);e.forEach(c,function(r,o){var u={url:s,action:i,timeout:h,callbackParamName:d,handle:function(t,i){if(++a._counter<=this.size&&!(t instanceof Error)&&t[n]&&e.isArray(t[n])){var r=this.offset;e.forEach(t[n],function(e){e.offset+=r}),a._result[this.number]=t[n]}a._counter==this.size&&(a._finalizeCollection(this.action),a.isWorking=!1,a._queue.length>0&&a._queue.shift()())}};u.content=l?e.mixin(l,{action:i,content:t.substring(r.l-1,r.r)}):{action:i,content:t.substring(r.l-1,r.r)},u.size=f,u.number=o,u.offset=r.l-1,e.io.script.get(u)})}};a.isWorking?a._queue.push(c):c()},_finalizeCollection:function(e){for(var t=this._result,i=t.length,a=0;i>a;a++){var r=t.shift();t=t.concat(r)}e==this.ACTION_QUERY&&this.onLoad(t),this._counter=0,this._result=[]},onLoad:function(e){},setWaitingTime:function(e){this._timeout=e*this.SEC}}),l=e.declare("dojox.editor.plugins.SpellCheck",[n],{url:"",bufferLength:100,interactive:!1,timeout:30,button:null,_editor:null,exArgs:null,_cursorSpan:'<span class="cursorPlaceHolder"></span>',_cursorSelector:"cursorPlaceHolder",_incorrectWordsSpan:"<span class='incorrectWordPlaceHolder'>${text}</span>",_ignoredIncorrectStyle:{cursor:"inherit",borderBottom:"none",backgroundColor:"transparent"},_normalIncorrectStyle:{cursor:"pointer",borderBottom:"1px dotted red",backgroundColor:"yellow"},_highlightedIncorrectStyle:{borderBottom:"1px dotted red",backgroundColor:"#b3b3ff"},_selector:"incorrectWordPlaceHolder",_maxItemNumber:3,constructor:function(){this._spanList=[],this._cache={},this._enabled=!0,this._iterator=0},setEditor:function(e){this._editor=e,this._initButton(),this._setNetwork(),this._connectUp()},_initButton:function(){var i=this,r=this._strings=e.i18n.getLocalization("dojox.editor.plugins","SpellCheck"),o=this._dialog=new t.TooltipDialog;o.set("content",this._dialogContent=new s({unfound:r.unfound,skip:r.skip,skipAll:r.skipAll,toDic:r.toDic,suggestions:r.suggestions,replaceWith:r.replaceWith,replace:r.replace,replaceAll:r.replaceAll,cancel:r.cancel})),this.button=new t.form.DropDownButton({label:r.widgetLabel,showLabel:!1,iconClass:"dijitEditorSpellCheckIcon",dropDown:o,id:t.getUniqueId(this.declaredClass.replace(/\./g,"_"))+"_dialogPane",closeDropDown:function(t){if(i._dialogContent.closable){if(i._dialogContent.isOpen=!1,e.isIE){var r=i._iterator,o=i._spanList;r<o.length&&r>=0&&e.style(o[r],i._normalIncorrectStyle)}this._opened&&(a.close(this.dropDown),t&&this.focus(),this._opened=!1,this.state="")}}}),i._dialogContent.isOpen=!1,o.domNode.setAttribute("aria-label",this._strings.widgetLabel)},_setNetwork:function(){var e=this.exArgs;if(!this._service){var t=this._service=new d;t.serviceEndPoint=this.url,t.maxBufferLength=this.bufferLength,t.setWaitingTime(this.timeout),e&&(delete e.name,delete e.url,delete e.interactive,delete e.timeout,t.exArgs=e)}},_connectUp:function(){var i=this._editor,a=this._dialogContent;this.connect(this.button,"set","_disabled"),this.connect(this._service,"onLoad","_loadData"),this.connect(this._dialog,"onOpen","_openDialog"),this.connect(i,"onKeyPress","_keyPress"),this.connect(i,"onLoad","_submitContent"),this.connect(a,"onSkip","_skip"),this.connect(a,"onSkipAll","_skipAll"),this.connect(a,"onAddToDic","_add"),this.connect(a,"onReplace","_replace"),this.connect(a,"onReplaceAll","_replaceAll"),this.connect(a,"onCancel","_cancel"),this.connect(a,"onEnter","_enter"),i.contentPostFilters.push(this._spellCheckFilter),e.publish(t._scopeName+".Editor.plugin.SpellCheck.getParser",[this]),!this.parser},_disabled:function(e,t){"disabled"==e&&(t?(this._iterator=0,this._spanList=[]):this.interactive&&!t&&this._service&&this._submitContent(!0),this._enabled=!t)},_keyPress:function(t){if(this.interactive){var i=118,a=86,r=t.charCode;t.altKey||r!=e.keys.SPACE?(t.ctrlKey&&(r==i||r==a)||!t.ctrlKey&&t.charCode)&&this._submitContent(!0):this._submitContent()}},_loadData:function(t){var i=this._cache,a=this._editor.get("value"),r=this._dialogContent;this._iterator=0,e.forEach(t,function(e){i[e.text]=e.suggestion,i[e.text].correct=!1}),this._enabled&&(r.closable=!1,this._markIncorrectWords(a,i),r.closable=!0,this._dialogContent.isOpen&&(this._iterator=-1,this._skip()))},_openDialog:function(){var e=this._dialogContent;e.ignoreChange=!0,e.set("unfoundWord",""),e.set("suggestionList",null),e.set("disabled",!0),e.set("inProgress",!0),e.isOpen=!0,e.closable=!1,this._submitContent(),e.closable=!0},_skip:function(t,i){var a=this._dialogContent,r=this._spanList||[],o=r.length,n=this._iterator;for(a.closable=!1,a.isChanged=!1,a.ignoreChange=!0,!i&&n>=0&&o>n&&this._skipWord(n);++n<o&&1==r[n].edited;);o>n?(this._iterator=n,this._populateDialog(n),this._selectWord(n)):(this._iterator=-1,a.set("unfoundWord",this._strings.msg),a.set("suggestionList",null),a.set("disabled",!0),a.set("inProgress",!1)),setTimeout(function(){e.isWebKit&&a.skipButton.focus(),a.focus(),a.ignoreChange=!1,a.closable=!0},0)},_skipAll:function(){this._dialogContent.closable=!1,this._skipWordAll(this._iterator),this._skip()},_add:function(){var e=this._dialogContent;e.closable=!1,e.isOpen=!0,this._addWord(this._iterator,e.get("unfoundWord")),this._skip()},_replace:function(){var e=this._dialogContent,t=this._iterator,i=e.get("selectedWord");e.closable=!1,this._replaceWord(t,i),this._skip(null,!0)},_replaceAll:function(){var e=this._dialogContent,t=this._spanList,i=t.length,a=t[this._iterator].innerHTML.toLowerCase(),r=e.get("selectedWord");e.closable=!1;for(var o=0;i>o;o++)t[o].innerHTML.toLowerCase()==a&&this._replaceWord(o,r);this._skip(null,!0)},_cancel:function(){this._dialogContent.closable=!0,this._editor.focus()},_enter:function(){this._dialogContent.isChanged?this._replace():this._skip()},_query:function(t){var i=this._service,a=this._cache,r=this.parser.parseIntoWords(this._html2Text(t))||[],o=[];e.forEach(r,function(e){e=e.toLowerCase(),a[e]||(a[e]=[],a[e].correct=!0,o.push(e))}),o.length>0?i.send(o.join(" ")):i.isWorking||this._loadData([])},_html2Text:function(e){for(var t=[],i=!1,a=e?e.length:0,r=0;a>r;r++)"<"==e.charAt(r)&&(i=!0),1==i?t.push(" "):t.push(e.charAt(r)),">"==e.charAt(r)&&(i=!1);return t.join("")},_getBookmark:function(e){var t=this._editor,i=this._cursorSpan;t.execCommand("inserthtml",i);for(var a=t.get("value"),r=a.indexOf(i),o=-1;++o<r&&e.charAt(o)==a.charAt(o););return o},_moveToBookmark:function(){var t=this._editor,i=e.query("."+this._cursorSelector,t.document),a=i&&i[0];if(a){t._sCall("selectElement",[a]),t._sCall("collapse",[!0]);var r=a.parentNode;r&&r.removeChild(a)}},_submitContent:function(e){if(e){var t=this,i=3e3;this._delayHandler&&(clearTimeout(this._delayHandler),this._delayHandler=null),setTimeout(function(){t._query(t._editor.get("value"))},i)}else this._query(this._editor.get("value"))},_populateDialog:function(e){var t=this._spanList,i=this._cache,a=this._dialogContent;if(a.set("disabled",!1),e<t.length&&t.length>0){var r=t[e].innerHTML;a.set("unfoundWord",r),a.set("suggestionList",i[r.toLowerCase()]),a.set("inProgress",!1)}},_markIncorrectWords:function(i,a){for(var r=this,o=this.parser,n=this._editor,s=this._incorrectWordsSpan,d=this._normalIncorrectStyle,l=this._selector,h=o.parseIntoWords(this._html2Text(i).toLowerCase()),u=o.getIndices(),m=this._cursorSpan,c=this._getBookmark(i),f="<span class='incorrectWordPlaceHolder'>".length,y=!1,p=i.split(""),v=null,g=h.length-1;g>=0;g--){var b=h[g];if(a[b]&&!a[b].correct){var M=u[g],_=h[g].length,w=M+_;if(c>=w&&!y&&(p.splice(c,0,m),y=!0),p.splice(M,_,e.string.substitute(s,{text:i.substring(M,w)})),c>M&&w>c&&!y){var k=p[M].split("");k.splice(f+c-M,0,m),p[M]=k.join(""),y=!0}}}y||(p.splice(c,0,m),y=!0),n.set("value",p.join("")),n._cursorToStart=!1,this._moveToBookmark(),v=this._spanList=e.query("."+this._selector,n.document),v.forEach(function(e,t){e.id=l+t}),this.interactive||delete d.cursor,v.style(d),this.interactive&&(r._contextMenu&&(r._contextMenu.uninitialize(),r._contextMenu=null),r._contextMenu=new t.Menu({targetNodeIds:[n.iframe],bindDomNode:function(i){i=e.byId(i);var o,s,d;"iframe"==i.tagName.toLowerCase()?(s=i,d=this._iframeContentWindow(s),o=e.body(n.document)):o=i==e.body()?e.doc.documentElement:i;var h={node:i,iframe:s};e.attr(i,"_dijitMenu"+this.id,this._bindings.push(h));var u=e.hitch(this,function(i){return[e.connect(i,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(i){var o=i.target,d=r._strings;if(e.hasClass(o,l)&&!o.edited){e.stopEvent(i);var h=r._maxItemNumber,u=o.id,m=u.substring(l.length),c=a[o.innerHTML.toLowerCase()],f=c.length;if(this.destroyDescendants(),0==f)this.addChild(new t.MenuItem({label:d.iMsg,disabled:!0}));else for(var y=0;h>y&&f>y;y++)this.addChild(new t.MenuItem({label:c[y],onClick:function(){var e=m,t=c[y];return function(){r._replaceWord(e,t),n.focus()}}()}));this.addChild(new t.MenuSeparator),this.addChild(new t.MenuItem({label:d.iSkip,onClick:function(){r._skipWord(m),n.focus()}})),this.addChild(new t.MenuItem({label:d.iSkipAll,onClick:function(){r._skipWordAll(m),n.focus()}})),this.addChild(new t.MenuSeparator),this.addChild(new t.MenuItem({label:d.toDic,onClick:function(){r._addWord(m),n.focus()}})),this._scheduleOpen(o,s,{x:i.pageX,y:i.pageY})}}),e.connect(i,"onkeydown",this,function(t){t.shiftKey&&t.keyCode==e.keys.F10&&(e.stopEvent(t),this._scheduleOpen(t.target,s))})]});h.connects=o?u(o):[],s&&(h.onloadHandler=e.hitch(this,function(){var t=(this._iframeContentWindow(s),e.body(n.document));h.connects=u(t)}),s.addEventListener?s.addEventListener("load",h.onloadHandler,!1):s.attachEvent("onload",h.onloadHandler))}}))},_selectWord:function(t){var i=this._editor,a=this._spanList;t<a.length&&a.length>0&&(i._sCall("selectElement",[a[t]]),i._sCall("collapse",[!0]),this._findText(a[t].innerHTML,!1,!1),e.isIE&&e.style(a[t],this._highlightedIncorrectStyle))},_replaceWord:function(t,i){var a=this._spanList;a[t].innerHTML=i,e.style(a[t],this._ignoredIncorrectStyle),a[t].edited=!0},_skipWord:function(t){var i=this._spanList;e.style(i[t],this._ignoredIncorrectStyle),this._cache[i[t].innerHTML.toLowerCase()].correct=!0,i[t].edited=!0},_skipWordAll:function(e,t){var i=this._spanList,a=i.length;t=t||i[e].innerHTML.toLowerCase();for(var r=0;a>r;r++)i[r].edited||i[r].innerHTML.toLowerCase()!=t||this._skipWord(r)},_addWord:function(e,t){var i=this._service;i.send(t||this._spanList[e].innerHTML.toLowerCase(),i.ACTION_UPDATE),this._skipWordAll(e,t)},_findText:function(e,t,i){var a=this._editor,r=a.window,o=!1;if(e)if(r.find)o=r.find(e,t,i,!1,!1,!1,!1);else{var n=a.document;if(n.selection){this._editor.focus();var s=n.body.createTextRange(),d=n.selection?n.selection.createRange():null;d&&(i?s.setEndPoint("EndToStart",d):s.setEndPoint("StartToEnd",d));var l=t?4:0;i&&(l=1|l),o=s.findText(e,s.text.length,l),o&&s.select()}}return o},_spellCheckFilter:function(e){var t=/<span class=["']incorrectWordPlaceHolder["'].*?>(.*?)<\/span>/g;return e.replace(t,"$1")}});return l._SpellCheckControl=s,l._SpellCheckScriptMultiPart=d,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"spellcheck"===t&&(e.plugin=new l({url:"url"in e.args?e.args.url:"",interactive:"interactive"in e.args?e.args.interactive:!1,bufferLength:"bufferLength"in e.args?e.args.bufferLength:100,timeout:"timeout"in e.args?e.args.timeout:30,exArgs:e.args}))}}),l});//# sourceMappingURL=SpellCheck.js.map