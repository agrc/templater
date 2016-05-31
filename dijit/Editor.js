//>>built
define("dijit/Editor",["require","dojo/_base/array","dojo/_base/declare","dojo/Deferred","dojo/i18n","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/string","dojo/topic","./_Container","./Toolbar","./ToolbarSeparator","./layout/_LayoutWidget","./form/ToggleButton","./_editor/_Plugin","./_editor/plugins/EnterKeyHandling","./_editor/html","./_editor/range","./_editor/RichText","./main","dojo/i18n!./_editor/nls/commands"],function(t,e,i,n,s,o,r,a,d,l,h,c,u,g,m,p,f,_,y,b,k,v,C,E,j){function w(t){return new b({command:t.name})}function x(t){return new b({buttonClass:y,command:t.name})}var S=i("dijit.Editor",E,{plugins:null,extraPlugins:null,constructor:function(){h.isArray(this.plugins)||(this.plugins=["undo","redo","|","cut","copy","paste","|","bold","italic","underline","strikethrough","|","insertOrderedList","insertUnorderedList","indent","outdent","|","justifyLeft","justifyRight","justifyCenter","justifyFull",k]),this._plugins=[],this._editInterval=1e3*this.editActionInterval,(c("ie")||c("trident")||c("edge"))&&(this.events.push("onBeforeDeactivate"),this.events.push("onBeforeActivate"))},postMixInProperties:function(){this.setValueDeferred=new n,this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._steps=this._steps.slice(0),this._undoedSteps=this._undoedSteps.slice(0),h.isArray(this.extraPlugins)&&(this.plugins=this.plugins.concat(this.extraPlugins)),this.commands=s.getLocalization("dijit._editor","commands",this.lang),c("webkit")&&d.set(this.domNode,"KhtmlUserSelect","none")},startup:function(){this.inherited(arguments),this.toolbar||(this.toolbar=new p({ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,"aria-label":this.id}),this.header.appendChild(this.toolbar.domNode)),e.forEach(this.plugins,this.addPlugin,this),this.setValueDeferred.resolve(!0),r.add(this.iframe.parentNode,"dijitEditorIFrameContainer"),r.add(this.iframe,"dijitEditorIFrame"),o.set(this.iframe,"allowTransparency",!0),this.toolbar.startup(),this.onNormalizedDisplayChanged()},destroy:function(){e.forEach(this._plugins,function(t){t&&t.destroy&&t.destroy()}),this._plugins=[],this.toolbar.destroyRecursive(),delete this.toolbar,this.inherited(arguments)},addPlugin:function(e,i){var n=h.isString(e)?{name:e}:h.isFunction(e)?{ctor:e}:e;if(!n.setEditor){var s={args:n,plugin:null,editor:this};if(n.name&&(b.registry[n.name]?s.plugin=b.registry[n.name](n):g.publish(j._scopeName+".Editor.getPlugin",s)),!s.plugin)try{var o=n.ctor||h.getObject(n.name)||t(n.name);o&&(s.plugin=new o(n))}catch(r){throw new Error(this.id+": cannot find plugin ["+n.name+"]")}if(!s.plugin)throw new Error(this.id+": cannot find plugin ["+n.name+"]");e=s.plugin}arguments.length>1?this._plugins[i]=e:this._plugins.push(e),e.setEditor(this),h.isFunction(e.setToolbar)&&e.setToolbar(this.toolbar)},resize:function(t){t&&_.prototype.resize.apply(this,arguments)},layout:function(){var t=this._contentBox.h-(this.getHeaderHeight()+this.getFooterHeight()+a.getPadBorderExtents(this.iframe.parentNode).h+a.getMarginExtents(this.iframe.parentNode).h);this.editingArea.style.height=t+"px",this.iframe&&(this.iframe.style.height="100%"),this._layoutMode=!0},_onIEMouseDown:function(t){var e,i=this.document.body,n=i.clientWidth,s=i.clientHeight,o=i.clientLeft,r=i.offsetWidth,a=i.offsetHeight,d=i.offsetLeft;/^rtl$/i.test(i.dir||"")?r>n&&t.x>n&&t.x<r&&(e=!0):t.x<o&&t.x>d&&(e=!0),e||a>s&&t.y>s&&t.y<a&&(e=!0),e||(delete this._cursorToStart,delete this._savedSelection,"BODY"==t.target.tagName&&this.defer("placeCursorAtEnd"),this.inherited(arguments))},onBeforeActivate:function(){this._restoreSelection()},onBeforeDeactivate:function(t){this.customUndo&&this.endEditing(!0),"BODY"!=t.target.tagName&&this._saveSelection()},customUndo:!0,editActionInterval:3,beginEditing:function(t){this._inEditing||(this._inEditing=!0,this._beginEditing(t)),this.editActionInterval>0&&(this._editTimer&&this._editTimer.remove(),this._editTimer=this.defer("endEditing",this._editInterval))},_steps:[],_undoedSteps:[],execCommand:function(t){if(!this.customUndo||"undo"!=t&&"redo"!=t){this.customUndo&&(this.endEditing(),this._beginEditing());var e=this.inherited(arguments);return this.customUndo&&this._endEditing(),e}return this[t]()},_pasteImpl:function(){return this._clipboardCommand("paste")},_cutImpl:function(){return this._clipboardCommand("cut")},_copyImpl:function(){return this._clipboardCommand("copy")},_clipboardCommand:function(t){var e;try{if(e=this.document.execCommand(t,!1,null),c("webkit")&&!e)throw{}}catch(i){var n=u.substitute,s={cut:"X",copy:"C",paste:"V"};alert(n(this.commands.systemShortcut,[this.commands[t],n(this.commands[c("mac")?"appleKey":"ctrlKey"],[s[t]])])),e=!1}return e},queryCommandEnabled:function(t){return!this.customUndo||"undo"!=t&&"redo"!=t?this.inherited(arguments):"undo"==t?this._steps.length>1:this._undoedSteps.length>0},_moveToBookmark:function(t){var i,n,s,o,r=t.mark,a=t.mark,d=t.isCollapsed;a&&(c("ie")<9||9===c("ie")&&c("quirks")?h.isArray(a)?(r=[],e.forEach(a,function(t){r.push(C.getNode(t,this.editNode))},this),this.selection.moveToBookmark({mark:r,isCollapsed:d})):a.startContainer&&a.endContainer&&(o=C.getSelection(this.window),o&&o.removeAllRanges&&(o.removeAllRanges(),i=C.create(this.window),n=C.getNode(a.startContainer,this.editNode),s=C.getNode(a.endContainer,this.editNode),n&&s&&(i.setStart(n,a.startOffset),i.setEnd(s,a.endOffset),o.addRange(i)))):(o=C.getSelection(this.window),o&&o.removeAllRanges&&(o.removeAllRanges(),i=C.create(this.window),n=C.getNode(a.startContainer,this.editNode),s=C.getNode(a.endContainer,this.editNode),n&&s&&(i.setStart(n,a.startOffset),i.setEnd(s,a.endOffset),o.addRange(i)))))},_changeToStep:function(t,e){this.setValue(e.text);var i=e.bookmark;i&&this._moveToBookmark(i)},undo:function(){var t=!1;if(!this._undoRedoActive){this._undoRedoActive=!0,this.endEditing(!0);var e=this._steps.pop();e&&this._steps.length>0&&(this.focus(),this._changeToStep(e,this._steps[this._steps.length-1]),this._undoedSteps.push(e),this.onDisplayChanged(),delete this._undoRedoActive,t=!0),delete this._undoRedoActive}return t},redo:function(){var t=!1;if(!this._undoRedoActive){this._undoRedoActive=!0,this.endEditing(!0);var e=this._undoedSteps.pop();e&&this._steps.length>0&&(this.focus(),this._changeToStep(this._steps[this._steps.length-1],e),this._steps.push(e),this.onDisplayChanged(),t=!0),delete this._undoRedoActive}return t},endEditing:function(t){this._editTimer&&(this._editTimer=this._editTimer.remove()),this._inEditing&&(this._endEditing(t),this._inEditing=!1)},_getBookmark:function(){var t=this.selection.getBookmark(),i=[];if(t&&t.mark){var n=t.mark;if(c("ie")<9||9===c("ie")&&c("quirks")){var s=C.getSelection(this.window);if(h.isArray(n))e.forEach(t.mark,function(t){i.push(C.getIndex(t,this.editNode).o)},this),t.mark=i;else if(s){var o;s.rangeCount&&(o=s.getRangeAt(0)),o?t.mark=o.cloneRange():t.mark=this.selection.getBookmark()}}try{t.mark&&t.mark.startContainer&&(i=C.getIndex(t.mark.startContainer,this.editNode).o,t.mark={startContainer:i,startOffset:t.mark.startOffset,endContainer:t.mark.endContainer===t.mark.startContainer?i:C.getIndex(t.mark.endContainer,this.editNode).o,endOffset:t.mark.endOffset})}catch(r){t.mark=null}}return t},_beginEditing:function(){0===this._steps.length&&this._steps.push({text:v.getChildrenHtml(this.editNode),bookmark:this._getBookmark()})},_endEditing:function(){var t=v.getChildrenHtml(this.editNode);this._undoedSteps=[],this._steps.push({text:t,bookmark:this._getBookmark()})},onKeyDown:function(t){if(c("ie")||this.iframe||t.keyCode!=l.TAB||this.tabIndent||this._saveSelection(),!this.customUndo)return void this.inherited(arguments);var e=t.keyCode;if(t.ctrlKey&&!t.shiftKey&&!t.altKey){if(90==e||122==e)return t.stopPropagation(),t.preventDefault(),void this.undo();if(89==e||121==e)return t.stopPropagation(),t.preventDefault(),void this.redo()}switch(this.inherited(arguments),e){case l.ENTER:case l.BACKSPACE:case l.DELETE:this.beginEditing();break;case 88:case 86:if(t.ctrlKey&&!t.altKey&&!t.metaKey){this.endEditing(),88==t.keyCode?this.beginEditing("cut"):this.beginEditing("paste"),this.defer("endEditing",1);break}default:if(!t.ctrlKey&&!t.altKey&&!t.metaKey&&(t.keyCode<l.F1||t.keyCode>l.F15)){this.beginEditing();break}case l.ALT:this.endEditing();break;case l.UP_ARROW:case l.DOWN_ARROW:case l.LEFT_ARROW:case l.RIGHT_ARROW:case l.HOME:case l.END:case l.PAGE_UP:case l.PAGE_DOWN:this.endEditing(!0);break;case l.CTRL:case l.SHIFT:case l.TAB:}},_onBlur:function(){this.inherited(arguments),this.endEditing(!0)},_saveSelection:function(){try{this._savedSelection=this._getBookmark()}catch(t){}},_restoreSelection:function(){this._savedSelection&&(delete this._cursorToStart,this.selection.isCollapsed()&&this._moveToBookmark(this._savedSelection),delete this._savedSelection)},onClick:function(){this.endEditing(!0),this.inherited(arguments)},replaceValue:function(t){this.customUndo?this.isClosed?this.setValue(t):(this.beginEditing(),t||(t="&#160;"),this.setValue(t),this.endEditing()):this.inherited(arguments)},_setDisabledAttr:function(t){this.setValueDeferred.then(h.hitch(this,function(){!this.disabled&&t||!this._buttonEnabledPlugins&&t?e.forEach(this._plugins,function(t){t.set("disabled",!0)}):this.disabled&&!t&&e.forEach(this._plugins,function(t){t.set("disabled",!1)})})),this.inherited(arguments)},_setStateClass:function(){try{this.inherited(arguments),this.document&&this.document.body&&d.set(this.document.body,"color",d.get(this.iframe,"color"))}catch(t){}}});return h.mixin(b.registry,{undo:w,redo:w,cut:w,copy:w,paste:w,insertOrderedList:w,insertUnorderedList:w,indent:w,outdent:w,justifyCenter:w,justifyFull:w,justifyLeft:w,justifyRight:w,"delete":w,selectAll:w,removeFormat:w,unlink:w,insertHorizontalRule:w,bold:x,italic:x,underline:x,strikethrough:x,subscript:x,superscript:x,"|":function(){return new b({setEditor:function(t){this.editor=t,this.button=new f({ownerDocument:t.ownerDocument})}})}}),S});//# sourceMappingURL=Editor.js.map