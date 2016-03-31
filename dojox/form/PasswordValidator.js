//>>built
require({cache:{"url:dojox/form/resources/PasswordValidator.html":'<div dojoAttachPoint="containerNode">\n	<input type="hidden" name="${name}" value="" dojoAttachPoint="focusNode" />\n</div>'}}),define("dojox/form/PasswordValidator",["dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/i18n","dojo/query","dojo/keys","dijit/form/_FormValueWidget","dijit/form/ValidationTextBox","dojo/text!./resources/PasswordValidator.html","dojo/i18n!./nls/PasswordValidator","dojo/_base/declare"],function(e,t,a,i,r,n,o,l,s,d,u){var m=u("dojox.form._ChildTextBox",l,{containerWidget:null,type:"password",reset:function(){l.prototype._setValueAttr.call(this,"",!0),this._hasBeenBlurred=!1},postCreate:function(){this.inherited(arguments),this.name||a.remove(this.focusNode,"name"),this.connect(this.focusNode,"onkeypress","_onChildKeyPress")},_onChildKeyPress:function(e){e&&e.keyCode==n.ENTER&&this._setBlurValue()}}),c=u("dojox.form._OldPWBox",m,{_isPWValid:!1,_setValueAttr:function(e,t){""===e&&(e=c.superclass.attr.call(this,"value")),null!==t&&(this._isPWValid=this.containerWidget.pwCheck(e)),this.inherited(arguments),this.containerWidget._childValueAttr(this.containerWidget._inputWidgets[1].get("value"))},isValid:function(e){return this.inherited("isValid",arguments)&&this._isPWValid},_update:function(e){this._hasBeenBlurred&&this.validate(!0),this._onMouse(e)},_getValueAttr:function(){return this.containerWidget._started&&this.containerWidget.isValid()?this.inherited(arguments):""},_setBlurValue:function(){var e=l.prototype._getValueAttr.call(this);this._setValueAttr(e,this.isValid?this.isValid():!0)}}),h=u("dojox.form._NewPWBox",m,{required:!0,onChange:function(){this.containerWidget._inputWidgets[2].validate(!1),this.inherited(arguments)}}),f=u("dojox.form._VerifyPWBox",m,{isValid:function(e){return this.inherited("isValid",arguments)&&this.get("value")==this.containerWidget._inputWidgets[1].get("value")}});return u("dojox.form.PasswordValidator",o,{required:!0,_inputWidgets:null,oldName:"",templateString:s,_hasBeenBlurred:!1,isValid:function(t){return e.every(this._inputWidgets,function(e){return e&&e._setStateClass&&e._setStateClass(),!e||e.isValid()})},validate:function(t){return e.every(e.map(this._inputWidgets,function(e){return e&&e.validate?(e._hasBeenBlurred=e._hasBeenBlurred||this._hasBeenBlurred,e.validate()):!0},this),function(e){return e})},reset:function(){this._hasBeenBlurred=!1,e.forEach(this._inputWidgets,function(e){e&&e.reset&&e.reset()},this)},_createSubWidgets:function(){var t=this._inputWidgets,a=i.getLocalization("dojox.form","PasswordValidator",this.lang);e.forEach(t,function(e,i){if(e){var r,n={containerWidget:this};0===i?(n.name=this.oldName,n.invalidMessage=a.badPasswordMessage,r=c):1===i?(n.required=this.required,r=h):2===i&&(n.invalidMessage=a.nomatchMessage,r=f),t[i]=new r(n,e)}},this)},pwCheck:function(e){return!1},postCreate:function(){this.inherited(arguments);var t=this._inputWidgets=[];if(e.forEach(["old","new","verify"],function(e){t.push(r("input[pwType="+e+"]",this.containerNode)[0])},this),!t[1]||!t[2])throw new Error('Need at least pwType="new" and pwType="verify"');if(this.oldName&&!t[0])throw new Error('Need to specify pwType="old" if using oldName');this.containerNode=this.domNode,this._createSubWidgets(),this.connect(this._inputWidgets[1],"_setValueAttr","_childValueAttr"),this.connect(this._inputWidgets[2],"_setValueAttr","_childValueAttr")},_childValueAttr:function(e){this.set("value",this.isValid()?e:"")},_setDisabledAttr:function(t){this.inherited(arguments),e.forEach(this._inputWidgets,function(e){e&&e.set&&e.set("disabled",t)})},_setRequiredAttr:function(t){this.required=t,a.set(this.focusNode,"required",t),this.focusNode.setAttribute("aria-required",t),e.forEach(this._inputWidgets,function(e){e&&e.set&&e.set("required",t)})},_setValueAttr:function(e){this.inherited(arguments),a.set(this.focusNode,"value",e)},_getValueAttr:function(){return this.value||""},focus:function(){var t=!1;e.forEach(this._inputWidgets,function(e){!e||e.isValid()||t||(e.focus(),t=!0)}),t||this._inputWidgets[1].focus()}})});//# sourceMappingURL=PasswordValidator.js.map