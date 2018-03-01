//>>built
require({cache:{"url:dojox/form/resources/FilePickerTextBox.html":'<div class="dijit dijitReset dijitInlineTable dijitLeft"\n\tid="widget_${id}"\n\trole="combobox" tabIndex="-1"\n\t><div style="overflow:hidden;"\n\t\t><div class=\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton\'\n\t\t\tdojoAttachPoint="downArrowNode,_buttonNode,_popupStateNode" role="presentation"\n\t\t\t><div class="dijitArrowButtonInner">&thinsp;</div\n\t\t\t><div class="dijitArrowButtonChar">&#9660;</div\n\t\t></div\n\t\t><div class="dijitReset dijitValidationIcon"><br></div\n\t\t><div class="dijitReset dijitValidationIconText">&Chi;</div\n\t\t><div class="dijitReset dijitInputField"\n\t\t\t><input type="text" autocomplete="off" ${!nameAttrSetting} class=\'dijitReset\'\n\t\t\t\tdojoAttachEvent=\'onkeypress:_onKey\' \n\t\t\t\tdojoAttachPoint=\'textbox,focusNode\' role="textbox" aria-haspopup="true" aria-autocomplete="list"\n\t\t/></div\n\t></div\n></div>\n'}}),define("dojox/form/FilePickerTextBox",["dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/window","dijit/focus","dijit/registry","dijit/form/_TextBoxMixin","dijit/form/ValidationTextBox","dijit/_HasDropDown","dojox/widget/FilePicker","dojo/text!./resources/FilePickerTextBox.html","dojo/_base/declare","dojo/keys"],function(e,t,i,r,a,n,o,s,d,l,u,c,h){return c("dojox.form.FilePickerTextBox",[s,d],{baseClass:"dojoxFilePickerTextBox",templateString:u,searchDelay:500,valueItem:null,numPanes:2.25,postMixInProperties:function(){this.inherited(arguments),this.dropDown=new l(this.constraints)},postCreate:function(){this.inherited(arguments),this.connect(this.dropDown,"onChange",this._onWidgetChange),this.connect(this.focusNode,"onblur","_focusBlur"),this.connect(this.focusNode,"onfocus","_focusFocus"),this.connect(this.focusNode,"ondblclick",function(){o.selectInputText(this.focusNode)})},_setValueAttr:function(t,i,r){if(!this._searchInProgress){this.inherited(arguments),t=t||"";if(t!==(this.dropDown.get("pathValue")||"")){this._skip=!0;var a=e.hitch(this,"_setBlurValue");this.dropDown._setPathValueAttr(t,!r,this._settingBlurValue?a:null)}}},_onWidgetChange:function(e){if(!e&&this.focusNode.value)this._hasValidPath=!1,this.focusNode.value="";else{this.valueItem=e;var t=this.dropDown._getPathValueAttr(e);t&&(this._hasValidPath=!0),this._skip||this._setValueAttr(t,void 0,!0),delete this._skip}this.validate()},startup:function(){this.dropDown._started||this.dropDown.startup(),this.inherited(arguments)},openDropDown:function(){this.dropDown.domNode.style.width="0px","minPaneWidth"in(this.constraints||{})||this.dropDown.set("minPaneWidth",this.domNode.offsetWidth/this.numPanes),this.inherited(arguments)},toggleDropDown:function(){this.inherited(arguments),this._opened&&this.dropDown.set("pathValue",this.get("value"))},_focusBlur:function(t){t.explicitOriginalTarget!=this.focusNode||this._allowBlur?this._menuFocus&&(this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1}),delete this._menuFocus):window.setTimeout(e.hitch(this,function(){this._allowBlur||this.focus()}),1)},_focusFocus:function(e){this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1}),delete this._menuFocus;var t=a.curNode;t&&(t=n.byNode(t))&&(this._menuFocus=t.domNode),this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!0}),delete this._allowBlur},_onBlur:function(){this._allowBlur=!0,delete this.dropDown._savedFocus,this.inherited(arguments)},_setBlurValue:function(){this.dropDown&&!this._settingBlurValue?(this._settingBlurValue=!0,this.set("value",this.focusNode.value)):(delete this._settingBlurValue,this.inherited(arguments))},parse:function(e,t){if(this._hasValidPath||this._hasSelection)return e;var i=this.dropDown,r=i.topDir,a=i.pathSeparator,n=i.get("pathValue"),o=function(e){return r.length&&0===e.indexOf(r)&&(e=e.substring(r.length)),a&&e[e.length-1]==a&&(e=e.substring(0,e.length-1)),e};return n=o(n),o(e)==n?e:void 0},_startSearchFromInput:function(){var i=this.dropDown,a=this.focusNode,n=a.value,s=n,d=i.topDir;this._hasSelection&&o.selectInputText(a,s.length),this._hasSelection=!1,d.length&&0===n.indexOf(d)&&(n=n.substring(d.length));var l=n.split(i.pathSeparator),u=e.hitch(this,function(n){var d,c=l[n],h=i.getChildren()[n];this._searchInProgress=!0;var f=e.hitch(this,function(){delete this._searchInProgress});if(!c&&!h||this._opened||this.toggleDropDown(),c&&h){var m=e.hitch(this,function(){d&&this.disconnect(d),delete d;var e=h._menu.getChildren(),m=t.filter(e,function(e){return e.label==c})[0],p=t.filter(e,function(e){return 0===e.label.indexOf(c)})[0];if(m&&(l.length>n+1&&m.children||!m.children))n++,h._menu.onItemClick(m,{type:"internal",stopPropagation:function(){},preventDefault:function(){}}),l[n]?u(n):f();else{if(h._setSelected(null),p&&l.length===n+1){i._setInProgress=!0,i._removeAfter(h),delete i._setInProgress;var y=p.label;p.children&&(y+=i.pathSeparator),y=y.substring(c.length),window.setTimeout(function(){r.scrollIntoView(p.domNode)},1),a.value=s+y,o.selectInputText(a,s.length),this._hasSelection=!0;try{p.focusNode.focus()}catch(e){}}else this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1,Focus:!1}),delete this._menuFocus;f()}});h.isLoaded?m():d=this.connect(h,"onLoad",m)}else h&&(h._setSelected(null),i._setInProgress=!0,i._removeAfter(h),delete i._setInProgress),f()});u(0)},_onKey:function(t){if(!this.disabled&&!this.readOnly){var r=t.charOrCode;if(r==h.DOWN_ARROW&&(this._allowBlur=!0),r==h.ENTER&&this._opened)return this.dropDown.onExecute(),o.selectInputText(this.focusNode,this.focusNode.value.length),this._hasSelection=!1,void i.stop(t);if((r==h.RIGHT_ARROW||r==h.LEFT_ARROW||r==h.TAB)&&this._hasSelection)return this._startSearchFromInput(),void i.stop(t);this.inherited(arguments);var a=!1;r!=h.BACKSPACE&&r!=h.DELETE||!this._hasSelection?a=r==h.BACKSPACE||r==h.DELETE||" "==r||""!==t.keyChar:this._hasSelection=!1,this._searchTimer&&window.clearTimeout(this._searchTimer),delete this._searchTimer,a&&(this._hasValidPath=!1,this._hasSelection=!1,this._searchTimer=window.setTimeout(e.hitch(this,"_startSearchFromInput"),this.searchDelay+1))}}})});//# sourceMappingURL=FilePickerTextBox.js.map