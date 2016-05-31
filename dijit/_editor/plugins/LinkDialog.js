//>>built
define("dijit/_editor/plugins/LinkDialog",["require","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/query","dojo/string","../_Plugin","../../form/DropDownButton","../range"],function(e,t,i,o,n,a,s,r,d,l,u,h){var c=t("dijit._editor.plugins.LinkDialog",l,{buttonClass:u,useDefaultCommand:!1,urlRegExp:"((https?|ftps?|file)\\://|./|../|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?",emailRegExp:"<?(mailto\\:)([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+@((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*>?",htmlTemplate:'<a href="${urlInput}" _djrealurl="${urlInput}" target="${targetSelect}">${textInput}</a>',tag:"a",_hostRxp:/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,_userAtRxp:/^([!#-'*+\-\/-9=?A-Z^-~]+[.])*[!#-'*+\-\/-9=?A-Z^-~]+@/i,linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_targetSelect'>${target}</label>","</td><td>","<select id='${id}_targetSelect' name='targetSelect' data-dojo-type='dijit.form.Select'>","<option selected='selected' value='_self'>${currentWindow}</option>","<option value='_blank'>${newWindow}</option>","<option value='_top'>${topWindow}</option>","<option value='_parent'>${parentWindow}</option>","</select>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),_initButton:function(){this.inherited(arguments),this.button.loadDropDown=n.hitch(this,"_loadDropDown"),this._connectTagEvents()},_loadDropDown:function(t){e(["dojo/i18n","../../TooltipDialog","../../registry","../../form/Button","../../form/Select","../../form/ValidationTextBox","dojo/i18n!../../nls/common","dojo/i18n!../nls/LinkDialog"],n.hitch(this,function(e,i,s){var r=this;this.tag="insertImage"==this.command?"img":"a";var l=n.delegate(e.getLocalization("dijit","common",this.lang),e.getLocalization("dijit._editor","LinkDialog",this.lang)),u=this.dropDown=this.button.dropDown=new i({title:l[this.command+"Title"],ownerDocument:this.editor.ownerDocument,dir:this.editor.dir,execute:n.hitch(this,"setValue"),onOpen:function(){r._onOpenDialog(),i.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(n.hitch(r,"_onCloseDialog"),0)}});l.urlRegExp=this.urlRegExp,l.id=s.getUniqueId(this.editor.id),this._uniqueId=l.id,this._setContent(u.title+"<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>"+d.substitute(this.linkDialogTemplate,l)),u.startup(),this._urlInput=s.byId(this._uniqueId+"_urlInput"),this._textInput=s.byId(this._uniqueId+"_textInput"),this._setButton=s.byId(this._uniqueId+"_setButton"),this.own(s.byId(this._uniqueId+"_cancelButton").on("click",n.hitch(this.dropDown,"onCancel"))),this._urlInput&&this.own(this._urlInput.on("change",n.hitch(this,"_checkAndFixInput"))),this._textInput&&this.own(this._textInput.on("change",n.hitch(this,"_checkAndFixInput"))),this._urlRegExp=new RegExp("^"+this.urlRegExp+"$","i"),this._emailRegExp=new RegExp("^"+this.emailRegExp+"$","i"),this._urlInput.isValid=n.hitch(this,function(){var e=this._urlInput.get("value");return this._urlRegExp.test(e)||this._emailRegExp.test(e)}),this.own(a(u.domNode,"keydown",n.hitch(this,n.hitch(this,function(e){!e||e.keyCode!=o.ENTER||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey||this._setButton.get("disabled")||(u.onExecute(),u.execute(u.get("value")))})))),t()}))},_checkAndFixInput:function(){var e=this,t=this._urlInput.get("value"),i=function(t){var i=!1,o=!1;t&&t.length>1&&(t=n.trim(t),0!==t.indexOf("mailto:")&&(t.indexOf("/")>0?-1===t.indexOf("://")&&"/"!==t.charAt(0)&&t.indexOf("./")&&0!==t.indexOf("../")&&e._hostRxp.test(t)&&(i=!0):e._userAtRxp.test(t)&&(o=!0))),i&&e._urlInput.set("value","http://"+t),o&&e._urlInput.set("value","mailto:"+t),e._setButton.set("disabled",!e._isValid())};this._delayedCheck&&(clearTimeout(this._delayedCheck),this._delayedCheck=null),this._delayedCheck=setTimeout(function(){i(t)},250)},_connectTagEvents:function(){this.editor.onLoadDeferred.then(n.hitch(this,function(){this.own(a(this.editor.editNode,"dblclick",n.hitch(this,"_onDblClick")))}))},_isValid:function(){return this._urlInput.isValid()&&this._textInput.isValid()},_setContent:function(e){this.dropDown.set({parserScope:"dojo",content:e})},_checkValues:function(e){return e&&e.urlInput&&(e.urlInput=e.urlInput.replace(/"/g,"&quot;")),e},setValue:function(e){if(this._onCloseDialog(),s("ie")<9){var t=h.getSelection(this.editor.window),o=t.getRangeAt(0),n=o.endContainer;3===n.nodeType&&(n=n.parentNode),n&&n.nodeName&&n.nodeName.toLowerCase()!==this.tag&&(n=this.editor.selection.getSelectedElement(this.tag)),n&&n.nodeName&&n.nodeName.toLowerCase()===this.tag&&this.editor.queryCommandEnabled("unlink")&&(this.editor.selection.selectElementChildren(n),this.editor.execCommand("unlink"))}e=this._checkValues(e),this.editor.execCommand("inserthtml",d.substitute(this.htmlTemplate,e)),r("a",this.editor.document).forEach(function(e){e.innerHTML||i.has(e,"name")||e.parentNode.removeChild(e)},this)},_onCloseDialog:function(){this.editor.focused&&this.editor.focus()},_getCurrentValues:function(e){var t,i,o;return e&&e.tagName.toLowerCase()===this.tag?(t=e.getAttribute("_djrealurl")||e.getAttribute("href"),o=e.getAttribute("target")||"_self",i=e.textContent||e.innerText,this.editor.selection.selectElement(e,!0)):i=this.editor.selection.getSelectedText(),{urlInput:t||"",textInput:i||"",targetSelect:o||""}},_onOpenDialog:function(){var e,t,i;if(s("ie")){var o=h.getSelection(this.editor.window);if(o.rangeCount){var n=o.getRangeAt(0);e=n.endContainer,3===e.nodeType&&(e=e.parentNode),e&&e.nodeName&&e.nodeName.toLowerCase()!==this.tag&&(e=this.editor.selection.getSelectedElement(this.tag)),(!e||e.nodeName&&e.nodeName.toLowerCase()!==this.tag)&&(t=this.editor.selection.getAncestorElement(this.tag),t&&t.nodeName&&t.nodeName.toLowerCase()==this.tag?(e=t,this.editor.selection.selectElement(e)):n.startContainer===n.endContainer&&(i=n.startContainer.firstChild,i&&i.nodeName&&i.nodeName.toLowerCase()==this.tag&&(e=i,this.editor.selection.selectElement(e))))}}else e=this.editor.selection.getAncestorElement(this.tag);this.dropDown.reset(),this._setButton.set("disabled",!0),this.dropDown.set("value",this._getCurrentValues(e))},_onDblClick:function(e){if(e&&e.target){var t=e.target,o=t.tagName?t.tagName.toLowerCase():"";if(o===this.tag&&i.get(t,"href")){var n=this.editor;this.editor.selection.selectElement(t),n.onDisplayChanged(),n._updateTimer&&(n._updateTimer.remove(),delete n._updateTimer),n.onNormalizedDisplayChanged();var a=this.button;setTimeout(function(){a.set("disabled",!1),a.loadAndOpenDropDown().then(function(){a.dropDown.focus&&a.dropDown.focus()})},10)}}}}),p=t("dijit._editor.plugins.ImgLinkDialog",[c],{linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' regExp='${urlRegExp}' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='false' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","</td><td>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),htmlTemplate:'<img src="${urlInput}" _djrealurl="${urlInput}" alt="${textInput}" />',tag:"img",_getCurrentValues:function(e){var t,i;return e&&e.tagName.toLowerCase()===this.tag?(t=e.getAttribute("_djrealurl")||e.getAttribute("src"),i=e.getAttribute("alt"),this.editor.selection.selectElement(e,!0)):i=this.editor.selection.getSelectedText(),{urlInput:t||"",textInput:i||""}},_isValid:function(){return this._urlInput.isValid()},_connectTagEvents:function(){this.inherited(arguments),this.editor.onLoadDeferred.then(n.hitch(this,function(){this.own(a(this.editor.editNode,"mousedown",n.hitch(this,"_selectTag")))}))},_selectTag:function(e){if(e&&e.target){var t=e.target,i=t.tagName?t.tagName.toLowerCase():"";i===this.tag&&this.editor.selection.selectElement(t)}},_checkValues:function(e){return e&&e.urlInput&&(e.urlInput=e.urlInput.replace(/"/g,"&quot;")),e&&e.textInput&&(e.textInput=e.textInput.replace(/"/g,"&quot;")),e},_onDblClick:function(e){if(e&&e.target){var t=e.target,o=t.tagName?t.tagName.toLowerCase():"";if(o===this.tag&&i.get(t,"src")){var n=this.editor;this.editor.selection.selectElement(t),n.onDisplayChanged(),n._updateTimer&&(n._updateTimer.remove(),delete n._updateTimer),n.onNormalizedDisplayChanged();var a=this.button;setTimeout(function(){a.set("disabled",!1),a.loadAndOpenDropDown().then(function(){a.dropDown.focus&&a.dropDown.focus()})},10)}}}});return l.registry.createLink=function(){return new c({command:"createLink"})},l.registry.insertImage=function(){return new p({command:"insertImage"})},c.ImgLinkDialog=p,c});//# sourceMappingURL=LinkDialog.js.map