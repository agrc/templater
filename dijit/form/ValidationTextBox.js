//>>built
require({cache:{"url:dijit/form/templates/ValidationTextBox.html":'<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}" role="presentation"\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n'}}),define("dijit/form/ValidationTextBox",["dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/i18n","./TextBox","../Tooltip","dojo/text!./templates/ValidationTextBox.html","dojo/i18n!./nls/validate"],function(e,t,i,o,n,s,r){var a=e("dijit.form.ValidationTextBox",n,{templateString:r,required:!1,promptMessage:"",invalidMessage:"$_unset_$",missingMessage:"$_unset_$",message:"",constraints:{},pattern:".*",regExp:"",regExpGen:function(){},state:"",tooltipPosition:[],_deprecateRegExp:function(e,i){i!=a.prototype[e]&&(t.deprecated("ValidationTextBox id="+this.id+", set('"+e+"', ...) is deprecated.  Use set('pattern', ...) instead.","","2.0"),this.set("pattern",i))},_setRegExpGenAttr:function(e){this._deprecateRegExp("regExpGen",e),this._set("regExpGen",this._computeRegexp)},_setRegExpAttr:function(e){this._deprecateRegExp("regExp",e)},_setValueAttr:function(){this.inherited(arguments),this._refreshState()},validator:function(e,t){return new RegExp("^(?:"+this._computeRegexp(t)+")"+(this.required?"":"?")+"$").test(e)&&(!this.required||!this._isEmpty(e))&&(this._isEmpty(e)||void 0!==this.parse(e,t))},_isValidSubset:function(){return 0==this.textbox.value.search(this._partialre)},isValid:function(){return this.validator(this.textbox.value,this.get("constraints"))},_isEmpty:function(e){return(this.trim?/^\s*$/:/^$/).test(e)},getErrorMessage:function(){var e="$_unset_$"==this.invalidMessage?this.messages.invalidMessage:this.invalidMessage?this.invalidMessage:this.promptMessage,t="$_unset_$"==this.missingMessage?this.messages.missingMessage:this.missingMessage?this.missingMessage:e;return this.required&&this._isEmpty(this.textbox.value)?t:e},getPromptMessage:function(){return this.promptMessage},_maskValidSubsetError:!0,validate:function(e){var t="",i=this.disabled||this.isValid(e);i&&(this._maskValidSubsetError=!0);var o=this._isEmpty(this.textbox.value),n=!i&&e&&this._isValidSubset();return this._set("state",i?"":((!this._hasBeenBlurred||e)&&o||n)&&(this._maskValidSubsetError||n&&!this._hasBeenBlurred&&e)?"Incomplete":"Error"),this.focusNode.setAttribute("aria-invalid","Error"==this.state?"true":"false"),"Error"==this.state?(this._maskValidSubsetError=e&&n,t=this.getErrorMessage(e)):"Incomplete"==this.state?(t=this.getPromptMessage(e),this._maskValidSubsetError=!this._hasBeenBlurred||e):o&&(t=this.getPromptMessage(e)),this.set("message",t),i},displayMessage:function(e){e&&this.focused?s.show(e,this.domNode,this.tooltipPosition,!this.isLeftToRight()):s.hide(this.domNode)},_refreshState:function(){this._created&&this.validate(this.focused),this.inherited(arguments)},constructor:function(e){this.constraints=i.clone(this.constraints),this.baseClass+=" dijitValidationTextBox"},startup:function(){this.inherited(arguments),this._refreshState()},_setConstraintsAttr:function(e){!e.locale&&this.lang&&(e.locale=this.lang),this._set("constraints",e),this._refreshState()},_setPatternAttr:function(e){this._set("pattern",e),this._refreshState()},_computeRegexp:function(e){var t=this.pattern;if("function"==typeof t&&(t=t.call(this,e)),t!=this._lastRegExp){var i="";this._lastRegExp=t,".*"!=t&&t.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g,function(e){switch(e.charAt(0)){case"{":case"+":case"?":case"*":case"^":case"$":case"|":case"(":i+=e;break;case")":i+="|$)";break;default:i+="(?:"+e+"|$)"}});try{"".search(i)}catch(e){i=this.pattern}this._partialre="^(?:"+i+")$"}return t},postMixInProperties:function(){this.inherited(arguments),this.messages=o.getLocalization("dijit.form","validate",this.lang),this._setConstraintsAttr(this.constraints)},_setDisabledAttr:function(e){this.inherited(arguments),this._refreshState()},_setRequiredAttr:function(e){this._set("required",e),this.focusNode.setAttribute("aria-required",e),this._refreshState()},_setMessageAttr:function(e){this._set("message",e),this.displayMessage(e)},reset:function(){this._maskValidSubsetError=!0,this.inherited(arguments)},_onBlur:function(){this.displayMessage(""),this.inherited(arguments)},destroy:function(){s.hide(this.domNode),this.inherited(arguments)}});return a});//# sourceMappingURL=ValidationTextBox.js.map