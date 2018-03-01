//>>built
require({cache:{"url:dijit/form/templates/Select.html":'<table class="dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point="_buttonNode,tableNode,focusNode,_popupStateNode" cellspacing=\'0\' cellpadding=\'0\'\n\trole="listbox" aria-haspopup="true"\n\t><tbody role="presentation"><tr role="presentation"\n\t\t><td class="dijitReset dijitStretch dijitButtonContents" role="presentation"\n\t\t\t><div class="dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point="containerNode,textDirNode" role="presentation"></div\n\t\t\t><div class="dijitReset dijitValidationContainer"\n\t\t\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t/></div\n\t\t\t><input type="hidden" ${!nameAttrSetting} data-dojo-attach-point="valueNode" value="${value}" aria-hidden="true"\n\t\t/></td\n\t\t><td class="dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point="titleNode" role="presentation"\n\t\t\t><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/></td\n\t></tr></tbody\n></table>\n'}}),define("dijit/form/Select",["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","./_FormSelectWidget","../_HasDropDown","../DropDownMenu","../MenuItem","../MenuSeparator","../Tooltip","../_KeyNavMixin","../registry","dojo/text!./templates/Select.html","dojo/i18n!./nls/validate"],function(t,e,i,o,n,r,s,a,d,l,u,h,c,p,f,g,m,b,j){function v(t){return function(e){this._isLoaded?this.inherited(t,arguments):this.loadDropDown(a.hitch(this,t,e))}}var _=e("dijit.form._SelectMenu",c,{autoFocus:!0,buildRendering:function(){this.inherited(arguments),this.domNode.setAttribute("role","listbox")},postCreate:function(){this.inherited(arguments),this.own(d(this.domNode,"selectstart",function(t){t.preventDefault(),t.stopPropagation()}))},focus:function(){var e=!1,i=this.parentWidget.value;a.isArray(i)&&(i=i[i.length-1]),i&&t.forEach(this.parentWidget._getChildren(),function(t){t.option&&i===t.option.value&&(e=!0,this.focusChild(t,!1))},this),e||this.inherited(arguments)}}),y=e("dijit.form.Select"+(l("dojo-bidi")?"_NoBidi":""),[u,h,m],{baseClass:"dijitSelect dijitValidationTextBox",templateString:j,_buttonInputDisabled:l("ie")?"disabled":"",required:!1,state:"",message:"",tooltipPosition:[],emptyLabel:"&#160;",_isLoaded:!1,_childrenLoaded:!1,labelType:"html",_fillContent:function(){if(this.inherited(arguments),this.options.length&&!this.value&&this.srcNodeRef){var t=this.srcNodeRef.selectedIndex||0;this._set("value",this.options[t>=0?t:0].value)}this.dropDown=new _({id:this.id+"_menu",parentWidget:this}),o.add(this.dropDown.domNode,this.baseClass.replace(/\s+|$/g,"Menu "))},_getMenuItemForOption:function(t){if(t.value||t.label){var e=a.hitch(this,"_setValueAttr",t),i=new p({option:t,label:("text"===this.labelType?(t.label||"").toString().replace(/&/g,"&amp;").replace(/</g,"&lt;"):t.label)||this.emptyLabel,onClick:e,ownerDocument:this.ownerDocument,dir:this.dir,textDir:this.textDir,disabled:t.disabled||!1});return i.focusNode.setAttribute("role","option"),i}return new f({ownerDocument:this.ownerDocument})},_addOptionItem:function(t){this.dropDown&&this.dropDown.addChild(this._getMenuItemForOption(t))},_getChildren:function(){return this.dropDown?this.dropDown.getChildren():[]},focus:function(){if(!this.disabled&&this.focusNode.focus)try{this.focusNode.focus()}catch(t){}},focusChild:function(t){t&&this.set("value",t.option)},_getFirst:function(){var t=this._getChildren();return t.length?t[0]:null},_getLast:function(){var t=this._getChildren();return t.length?t[t.length-1]:null},childSelector:function(t){var t=b.byNode(t);return t&&t.getParent()==this.dropDown},onKeyboardSearch:function(t,e,i,o){t&&this.focusChild(t)},_loadChildren:function(e){if(!0===e)if(this.dropDown&&(delete this.dropDown.focusedChild,this.focusedChild=null),this.options.length)this.inherited(arguments);else{t.forEach(this._getChildren(),function(t){t.destroyRecursive()});var i=new p({ownerDocument:this.ownerDocument,label:this.emptyLabel});this.dropDown.addChild(i)}else this._updateSelection();this._isLoaded=!1,this._childrenLoaded=!0,this._loadingStore||this._setValueAttr(this.value,!1)},_refreshState:function(){this._started&&this.validate(this.focused)},startup:function(){this.inherited(arguments),this._refreshState()},_setValueAttr:function(t){this.inherited(arguments),i.set(this.valueNode,"value",this.get("value")),this._refreshState()},_setNameAttr:"valueNode",_setDisabledAttr:function(t){this.inherited(arguments),this._refreshState()},_setRequiredAttr:function(t){this._set("required",t),this.focusNode.setAttribute("aria-required",t),this._refreshState()},_setOptionsAttr:function(t){this._isLoaded=!1,this._set("options",t)},_setDisplay:function(t){var e=("text"===this.labelType?(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"):t)||this.emptyLabel;this.containerNode.innerHTML='<span role="option" aria-selected="true" class="dijitReset dijitInline '+this.baseClass.replace(/\s+|$/g,"Label ")+'">'+e+"</span>"},validate:function(t){var e=this.disabled||this.isValid(t);this._set("state",e?"":this._hasBeenBlurred?"Error":"Incomplete"),this.focusNode.setAttribute("aria-invalid",e?"false":"true");var i=e?"":this._missingMsg;return i&&this.focused&&this._hasBeenBlurred?g.show(i,this.domNode,this.tooltipPosition,!this.isLeftToRight()):g.hide(this.domNode),this._set("message",i),e},isValid:function(){return!this.required||0===this.value||!/^\s*$/.test(this.value||"")},reset:function(){this.inherited(arguments),g.hide(this.domNode),this._refreshState()},postMixInProperties:function(){this.inherited(arguments),this._missingMsg=r.getLocalization("dijit.form","validate",this.lang).missingMessage},postCreate:function(){this.inherited(arguments),this.own(d(this.domNode,"selectstart",function(t){t.preventDefault(),t.stopPropagation()})),this.domNode.setAttribute("aria-expanded","false");var t=this._keyNavCodes;delete t[s.LEFT_ARROW],delete t[s.RIGHT_ARROW]},_setStyleAttr:function(t){this.inherited(arguments),o.toggle(this.domNode,this.baseClass.replace(/\s+|$/g,"FixedWidth "),!!this.domNode.style.width)},isLoaded:function(){return this._isLoaded},loadDropDown:function(t){this._loadChildren(!0),this._isLoaded=!0,t()},destroy:function(t){this.dropDown&&!this.dropDown._destroyed&&(this.dropDown.destroyRecursive(t),delete this.dropDown),g.hide(this.domNode),this.inherited(arguments)},_onFocus:function(){this.validate(!0)},_onBlur:function(){g.hide(this.domNode),this.inherited(arguments),this.validate(!1)}});return l("dojo-bidi")&&(y=e("dijit.form.Select",y,{_setDisplay:function(t){this.inherited(arguments),this.applyTextDir(this.containerNode)}})),y._Menu=_,y.prototype._onContainerKeydown=v("_onContainerKeydown"),y.prototype._onContainerKeypress=v("_onContainerKeypress"),y});//# sourceMappingURL=Select.js.map