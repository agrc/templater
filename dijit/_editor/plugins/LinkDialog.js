//>>built
define("dijit/_editor/plugins/LinkDialog",["require","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/query","dojo/string","../_Plugin","../../form/DropDownButton","../range"],function(t,e,i,o,n,a,s,r,d,l,u,h){var c=e("dijit._editor.plugins.LinkDialog",l,{buttonClass:u,useDefaultCommand:!1,urlRegExp:"((https?|ftps?|file)\\://|./|../|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?",emailRegExp:"<?(mailto\\:)([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+@((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*>?",htmlTemplate:'<a href="${urlInput}" _djrealurl="${urlInput}" target="${targetSelect}">${textInput}</a>',tag:"a",_hostRxp:/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,_userAtRxp:/^([!#-'*+\-\/-9=?A-Z^-~]+[.])*[!#-'*+\-\/-9=?A-Z^-~]+@/i,linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_targetSelect'>${target}</label>","</td><td>","<select id='${id}_targetSelect' name='targetSelect' data-dojo-type='dijit.form.Select'>","<option selected='selected' value='_self'>${currentWindow}</option>","<option value='_blank'>${newWindow}</option>","<option value='_top'>${topWindow}</option>","<option value='_parent'>${parentWindow}</option>","</select>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),_initButton:function(){this.inherited(arguments),this.button.loadDropDown=n.hitch(this,"_loadDropDown"),this._connectTagEvents()},_loadDropDown:function(e){t(["dojo/i18n","../../TooltipDialog","../../registry","../../form/Button","../../form/Select","../../form/ValidationTextBox","dojo/i18n!../../nls/common","dojo/i18n!../nls/LinkDialog"],n.hitch(this,function(t,i,s){var r=this;this.tag="insertImage"==this.command?"img":"a";var l=n.delegate(t.getLocalization("dijit","common",this.lang),t.getLocalization("dijit._editor","LinkDialog",this.lang)),u=this.dropDown=this.button.dropDown=new i({title:l[this.command+"Title"],ownerDocument:this.editor.ownerDocument,dir:this.editor.dir,execute:n.hitch(this,"setValue"),onOpen:function(){r._onOpenDialog(),i.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(n.hitch(r,"_onCloseDialog"),0)}});l.urlRegExp=this.urlRegExp,l.id=s.getUniqueId(this.editor.id),this._uniqueId=l.id,this._setContent(u.title+"<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>"+d.substitute(this.linkDialogTemplate,l)),u.startup(),this._urlInput=s.byId(this._uniqueId+"_urlInput"),this._textInput=s.byId(this._uniqueId+"_textInput"),this._setButton=s.byId(this._uniqueId+"_setButton"),this.own(s.byId(this._uniqueId+"_cancelButton").on("click",n.hitch(this.dropDown,"onCancel"))),this._urlInput&&this.own(this._urlInput.on("change",n.hitch(this,"_checkAndFixInput"))),this._textInput&&this.own(this._textInput.on("change",n.hitch(this,"_checkAndFixInput"))),this._urlRegExp=new RegExp("^"+this.urlRegExp+"$","i"),this._emailRegExp=new RegExp("^"+this.emailRegExp+"$","i"),this._urlInput.isValid=n.hitch(this,function(){var t=this._urlInput.get("value");return this._urlRegExp.test(t)||this._emailRegExp.test(t)}),this.own(a(u.domNode,"keydown",n.hitch(this,n.hitch(this,function(t){!t||t.keyCode!=o.ENTER||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey||this._setButton.get("disabled")||(u.onExecute(),u.execute(u.get("value")))})))),e()}))},_checkAndFixInput:function(){var t=this,e=this._urlInput.get("value"),i=function(e){var i=!1,o=!1;e&&e.length>1&&(e=n.trim(e),0!==e.indexOf("mailto:")&&(e.indexOf("/")>0?-1===e.indexOf("://")&&"/"!==e.charAt(0)&&e.indexOf("./")&&0!==e.indexOf("../")&&t._hostRxp.test(e)&&(i=!0):t._userAtRxp.test(e)&&(o=!0))),i&&t._urlInput.set("value","http://"+e),o&&t._urlInput.set("value","mailto:"+e),t._setButton.set("disabled",!t._isValid())};this._delayedCheck&&(clearTimeout(this._delayedCheck),this._delayedCheck=null),this._delayedCheck=setTimeout(function(){i(e)},250)},_connectTagEvents:function(){this.editor.onLoadDeferred.then(n.hitch(this,function(){this.own(a(this.editor.editNode,"dblclick",n.hitch(this,"_onDblClick")))}))},_isValid:function(){return this._urlInput.isValid()&&this._textInput.isValid()},_setContent:function(t){this.dropDown.set({parserScope:"dojo",content:t})},_checkValues:function(t){return t&&t.urlInput&&(t.urlInput=t.urlInput.replace(/"/g,"&quot;")),t},setValue:function(t){if(this._onCloseDialog(),s("ie")<9){var e=h.getSelection(this.editor.window),o=e.getRangeAt(0),n=o.endContainer;3===n.nodeType&&(n=n.parentNode),n&&n.nodeName&&n.nodeName.toLowerCase()!==this.tag&&(n=this.editor.selection.getSelectedElement(this.tag)),n&&n.nodeName&&n.nodeName.toLowerCase()===this.tag&&this.editor.queryCommandEnabled("unlink")&&(this.editor.selection.selectElementChildren(n),this.editor.execCommand("unlink"))}t=this._checkValues(t),this.editor.execCommand("inserthtml",d.substitute(this.htmlTemplate,t)),r("a",this.editor.document).forEach(function(t){t.innerHTML||i.has(t,"name")||t.parentNode.removeChild(t)},this)},_onCloseDialog:function(){this.editor.focused&&this.editor.focus()},_getCurrentValues:function(t){var e,i,o;return t&&t.tagName.toLowerCase()===this.tag?(e=t.getAttribute("_djrealurl")||t.getAttribute("href"),o=t.getAttribute("target")||"_self",i=t.textContent||t.innerText,this.editor.selection.selectElement(t,!0)):i=this.editor.selection.getSelectedText(),{urlInput:e||"",textInput:i||"",targetSelect:o||""}},_onOpenDialog:function(){var t,e,i;if(s("ie")){var o=h.getSelection(this.editor.window);if(o.rangeCount){var n=o.getRangeAt(0);t=n.endContainer,3===t.nodeType&&(t=t.parentNode),t&&t.nodeName&&t.nodeName.toLowerCase()!==this.tag&&(t=this.editor.selection.getSelectedElement(this.tag)),(!t||t.nodeName&&t.nodeName.toLowerCase()!==this.tag)&&(e=this.editor.selection.getAncestorElement(this.tag),e&&e.nodeName&&e.nodeName.toLowerCase()==this.tag?(t=e,this.editor.selection.selectElement(t)):n.startContainer===n.endContainer&&(i=n.startContainer.firstChild)&&i.nodeName&&i.nodeName.toLowerCase()==this.tag&&(t=i,this.editor.selection.selectElement(t)))}}else t=this.editor.selection.getAncestorElement(this.tag);this.dropDown.reset(),this._setButton.set("disabled",!0),this.dropDown.set("value",this._getCurrentValues(t))},_onDblClick:function(t){if(t&&t.target){var e=t.target;if((e.tagName?e.tagName.toLowerCase():"")===this.tag&&i.get(e,"href")){var o=this.editor;this.editor.selection.selectElement(e),o.onDisplayChanged(),o._updateTimer&&(o._updateTimer.remove(),delete o._updateTimer),o.onNormalizedDisplayChanged();var n=this.button;setTimeout(function(){n.set("disabled",!1),n.loadAndOpenDropDown().then(function(){n.dropDown.focus&&n.dropDown.focus()})},10)}}}}),p=e("dijit._editor.plugins.ImgLinkDialog",[c],{linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' regExp='${urlRegExp}' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='false' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","</td><td>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),htmlTemplate:'<img src="${urlInput}" _djrealurl="${urlInput}" alt="${textInput}" />',tag:"img",_getCurrentValues:function(t){var e,i;return t&&t.tagName.toLowerCase()===this.tag?(e=t.getAttribute("_djrealurl")||t.getAttribute("src"),i=t.getAttribute("alt"),this.editor.selection.selectElement(t,!0)):i=this.editor.selection.getSelectedText(),{urlInput:e||"",textInput:i||""}},_isValid:function(){return this._urlInput.isValid()},_connectTagEvents:function(){this.inherited(arguments),this.editor.onLoadDeferred.then(n.hitch(this,function(){this.own(a(this.editor.editNode,"mousedown",n.hitch(this,"_selectTag")))}))},_selectTag:function(t){if(t&&t.target){var e=t.target;(e.tagName?e.tagName.toLowerCase():"")===this.tag&&this.editor.selection.selectElement(e)}},_checkValues:function(t){return t&&t.urlInput&&(t.urlInput=t.urlInput.replace(/"/g,"&quot;")),t&&t.textInput&&(t.textInput=t.textInput.replace(/"/g,"&quot;")),t},_onDblClick:function(t){if(t&&t.target){var e=t.target;if((e.tagName?e.tagName.toLowerCase():"")===this.tag&&i.get(e,"src")){var o=this.editor;this.editor.selection.selectElement(e),o.onDisplayChanged(),o._updateTimer&&(o._updateTimer.remove(),delete o._updateTimer),o.onNormalizedDisplayChanged();var n=this.button;setTimeout(function(){n.set("disabled",!1),n.loadAndOpenDropDown().then(function(){n.dropDown.focus&&n.dropDown.focus()})},10)}}}});return l.registry.createLink=function(){return new c({command:"createLink"})},l.registry.insertImage=function(){return new p({command:"insertImage"})},c.ImgLinkDialog=p,c});//# sourceMappingURL=LinkDialog.js.map