//>>built
define("dijit/form/_AutoCompleterMixin",["dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/query","dojo/regexp","dojo/sniff","./DataList","./_TextBoxMixin","./_SearchMixin"],function(e,t,i,o,n,r,s,a,d,l,c){var h=t("dijit.form._AutoCompleterMixin",c,{item:null,autoComplete:!0,highlightMatch:"first",labelAttr:"",labelType:"text",maxHeight:-1,_stopClickEvents:!1,_getCaretPos:function(e){var t=0;if("number"==typeof e.selectionStart)t=e.selectionStart;else if(a("ie")){var i=e.ownerDocument.selection.createRange().duplicate(),o=e.createTextRange();i.move("character",0),o.move("character",0);try{o.setEndPoint("EndToEnd",i),t=String(o.text).replace(/\r/g,"").length}catch(n){}}return t},_setCaretPos:function(e,t){t=parseInt(t),l.selectInputText(e,t,t)},_setDisabledAttr:function(e){this.inherited(arguments),this.domNode.setAttribute("aria-disabled",e?"true":"false")},_onKey:function(e){if(!(e.charCode>=32)){var t=e.charCode||e.keyCode;if(t!=o.ALT&&t!=o.CTRL&&t!=o.META&&t!=o.SHIFT){var i=this.dropDown,n=null;if(this._abortQuery(),this.inherited(arguments),!(e.altKey||e.ctrlKey||e.metaKey))switch(this._opened&&(n=i.getHighlightedOption()),t){case o.PAGE_DOWN:case o.DOWN_ARROW:case o.PAGE_UP:case o.UP_ARROW:this._opened&&this._announceOption(n),e.stopPropagation(),e.preventDefault();break;case o.ENTER:if(n){if(n==i.nextButton){this._nextSearch(1),e.stopPropagation(),e.preventDefault();break}if(n==i.previousButton){this._nextSearch(-1),e.stopPropagation(),e.preventDefault();break}e.stopPropagation(),e.preventDefault()}else this._setBlurValue(),this._setCaretPos(this.focusNode,this.focusNode.value.length);case o.TAB:var r=this.get("displayedValue");if(i&&(r==i._messages.previousMessage||r==i._messages.nextMessage))break;n&&this._selectOption(n);case o.ESCAPE:this._opened&&(this._lastQuery=null,this.closeDropDown())}}}},_autoCompleteText:function(e){var t=this.focusNode;l.selectInputText(t,t.value.length);var i=this.ignoreCase?"toLowerCase":"substr";if(0==e[i](0).indexOf(this.focusNode.value[i](0))){var o=this.autoComplete?this._getCaretPos(t):t.value.length;o+1>t.value.length&&(t.value=e,l.selectInputText(t,o))}else t.value=e,l.selectInputText(t)},_openResultList:function(e,t,i){var o=this.dropDown.getHighlightedOption();return this.dropDown.clearResultList(),e.length||0!=i.start?(this._nextSearch=this.dropDown.onPage=n.hitch(this,function(t){e.nextPage(-1!==t),this.focus()}),this.dropDown.createOptions(e,i,n.hitch(this,"_getMenuLabelFromItem")),this._showResultList(),void("direction"in i?(i.direction?this.dropDown.highlightFirstOption():i.direction||this.dropDown.highlightLastOption(),o&&this._announceOption(this.dropDown.getHighlightedOption())):!this.autoComplete||this._prev_key_backspace||/^[*]+$/.test(t[this.searchAttr].toString())||this._announceOption(this.dropDown.containerNode.firstChild.nextSibling))):void this.closeDropDown()},_showResultList:function(){this.closeDropDown(!0),this.openDropDown(),this.domNode.setAttribute("aria-expanded","true")},loadDropDown:function(){this._startSearchAll()},isLoaded:function(){return!1},closeDropDown:function(){this._abortQuery(),this._opened&&(this.inherited(arguments),this.domNode.setAttribute("aria-expanded","false"))},_setBlurValue:function(){var e=this.get("displayedValue"),t=this.dropDown;!t||e!=t._messages.previousMessage&&e!=t._messages.nextMessage?"undefined"==typeof this.item?(this.item=null,this.set("displayedValue",e)):(this.value!=this._lastValueReported&&this._handleOnChange(this.value,!0),this._refreshState()):this._setValueAttr(this._lastValueReported,!0),this.focusNode.removeAttribute("aria-activedescendant")},_setItemAttr:function(e,t,i){var o="";e&&(i||(i=this.store._oldAPI?this.store.getValue(e,this.searchAttr):e[this.searchAttr]),o=this._getValueField()!=this.searchAttr?this.store.getIdentity(e):i),this.set("value",o,t,i,e)},_announceOption:function(e){if(e){var t;if(e==this.dropDown.nextButton||e==this.dropDown.previousButton)t=e.innerHTML,this.item=void 0,this.value="";else{var o=this.dropDown.items[e.getAttribute("item")];t=(this.store._oldAPI?this.store.getValue(o,this.searchAttr):o[this.searchAttr]).toString(),this.set("item",o,!1,t)}this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length),this.focusNode.setAttribute("aria-activedescendant",i.get(e,"id")),this._autoCompleteText(t)}},_selectOption:function(e){this.closeDropDown(),e&&this._announceOption(e),this._setCaretPos(this.focusNode,this.focusNode.value.length),this._handleOnChange(this.value,!0),this.focusNode.removeAttribute("aria-activedescendant")},_startSearchAll:function(){this._startSearch("")},_startSearchFromInput:function(){this.item=void 0,this.inherited(arguments)},_startSearch:function(e){if(!this.dropDown){var t=this.id+"_popup",i=n.isString(this.dropDownClass)?n.getObject(this.dropDownClass,!1):this.dropDownClass;this.dropDown=new i({onChange:n.hitch(this,this._selectOption),id:t,dir:this.dir,textDir:this.textDir})}this._lastInput=e,this.inherited(arguments)},_getValueField:function(){return this.searchAttr},postMixInProperties:function(){if(this.inherited(arguments),!this.store&&this.srcNodeRef){var e=this.srcNodeRef;if(this.store=new d({},e),!("value"in this.params)){var t=this.item=this.store.fetchSelectedItem();if(t){var i=this._getValueField();this.value=this.store._oldAPI?this.store.getValue(t,i):t[i]}}}},postCreate:function(){var t=r('label[for="'+this.id+'"]');t.length&&(t[0].id||(t[0].id=this.id+"_label"),this.domNode.setAttribute("aria-labelledby",t[0].id)),this.inherited(arguments),e.after(this,"onSearch",n.hitch(this,"_openResultList"),!0)},_getMenuLabelFromItem:function(e){var t=this.labelFunc(e,this.store),i=this.labelType;return"none"!=this.highlightMatch&&"text"==this.labelType&&this._lastInput&&(t=this.doHighlight(t,this._lastInput),i="html"),{html:"html"==i,label:t}},doHighlight:function(e,t){var i=(this.ignoreCase?"i":"")+("all"==this.highlightMatch?"g":""),o=this.queryExpr.indexOf("${0}");return t=s.escapeString(t),this._escapeHtml(e.replace(new RegExp((0==o?"^":"")+"("+t+")"+(o==this.queryExpr.length-4?"$":""),i),"￿$1￿")).replace(/\uFFFF([^\uFFFF]+)\uFFFF/g,'<span class="dijitComboBoxHighlightMatch">$1</span>')},_escapeHtml:function(e){return e=String(e).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")},reset:function(){this.item=null,this.inherited(arguments)},labelFunc:function(e,t){return(t._oldAPI?t.getValue(e,this.labelAttr||this.searchAttr):e[this.labelAttr||this.searchAttr]).toString()},_setValueAttr:function(e,t,i,o){this._set("item",o||null),null==e&&(e=""),this.inherited(arguments)}});return a("dojo-bidi")&&h.extend({_setTextDirAttr:function(e){this.inherited(arguments),this.dropDown&&this.dropDown._set("textDir",e)}}),h});//# sourceMappingURL=_AutoCompleterMixin.js.map