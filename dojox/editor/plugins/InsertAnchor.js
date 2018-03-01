//>>built
define("dojox/editor/plugins/InsertAnchor",["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_base/manager","dijit/_editor/range","dijit/_Templated","dijit/TooltipDialog","dijit/form/ValidationTextBox","dijit/form/Select","dijit/form/Button","dijit/form/DropDownButton","dojo/_base/declare","dojo/i18n","dojo/string","dojo/NodeList-dom","dojox/editor/plugins/ToolbarLineBreak","dojo/i18n!dojox/editor/plugins/nls/InsertAnchor","dojo/i18n!dijit/nls/common"],function(e,t,a,i){var r=e.declare("dojox.editor.plugins.InsertAnchor",i,{htmlTemplate:'<a name="${anchorInput}" class="dijitEditorPluginInsertAnchorStyle">${textInput}</a>',iconClassPrefix:"dijitAdditionalEditorIcon",_template:["<table role='presentation'><tr><td>","<label for='${id}_anchorInput'>${anchor}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' required='true' id='${id}_anchorInput' name='anchorInput' intermediateChanges='true'>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' name='textInput' intermediateChanges='true'>","</td></tr>","<tr><td colspan='2'>","<button dojoType='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button dojoType='dijit.form.Button' type='button' id='${id}_cancelButton'>${cancel}</button>","</td></tr></table>"].join(""),_initButton:function(){var a=this,i=e.i18n.getLocalization("dojox.editor.plugins","InsertAnchor",this.lang),r=this.dropDown=new t.TooltipDialog({title:i.title,execute:e.hitch(this,"setValue"),onOpen:function(){a._onOpenDialog(),t.TooltipDialog.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(e.hitch(a,"_onCloseDialog"),0)}});this.button=new t.form.DropDownButton({label:i.insertAnchor,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"InsertAnchor",tabIndex:"-1",dropDown:this.dropDown}),i.id=t.getUniqueId(this.editor.id),this._uniqueId=i.id,this.dropDown.set("content",r.title+"<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>"+e.string.substitute(this._template,i)),r.startup(),this._anchorInput=t.byId(this._uniqueId+"_anchorInput"),this._textInput=t.byId(this._uniqueId+"_textInput"),this._setButton=t.byId(this._uniqueId+"_setButton"),this.connect(t.byId(this._uniqueId+"_cancelButton"),"onClick",function(){this.dropDown.onCancel()}),this._anchorInput&&this.connect(this._anchorInput,"onChange","_checkInput"),this._textInput&&this.connect(this._anchorInput,"onChange","_checkInput"),this.editor.contentDomPreFilters.push(e.hitch(this,this._preDomFilter)),this.editor.contentDomPostFilters.push(e.hitch(this,this._postDomFilter)),this._setup()},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(e){this.editor=e,this._initButton()},_checkInput:function(){var e=!0;this._anchorInput.isValid()&&(e=!1),this._setButton.set("disabled",e)},_setup:function(){this.editor.onLoadDeferred.addCallback(e.hitch(this,function(){this.connect(this.editor.editNode,"ondblclick",this._onDblClick),setTimeout(e.hitch(this,function(){this._applyStyles()}),100)}))},getAnchorStyle:function(){var t="@media screen {\n\t.dijitEditorPluginInsertAnchorStyle {\n\t\tbackground-image: url({MODURL}/images/anchor.gif);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: top left;\n\t\tborder-width: 1px;\n\t\tborder-style: dashed;\n\t\tborder-color: #D0D0D0;\n\t\tpadding-left: 20px;\n\t}\n}\n",i=e.moduleUrl(a._scopeName,"editor/plugins/resources").toString();if(!i.match(/^https?:\/\//i)&&!i.match(/^file:\/\//i)){var r;if("/"===i.charAt(0)){r=e.doc.location.protocol+"//"+e.doc.location.host}else r=this._calcBaseUrl(e.global.location.href);"/"!==r[r.length-1]&&"/"!==i.charAt(0)&&(r+="/"),i=r+i}return t.replace(/\{MODURL\}/gi,i)},_applyStyles:function(){if(!this._styled)try{this._styled=!0;var t=this.editor.document,a=this.getAnchorStyle();if(e.isIE){t.createStyleSheet("").cssText=a}else{var i=t.createElement("style");i.appendChild(t.createTextNode(a)),t.getElementsByTagName("head")[0].appendChild(i)}}catch(e){}},_calcBaseUrl:function(e){var t=null;if(null!==e){var a=e.indexOf("?");-1!=a&&(e=e.substring(0,a)),a=e.lastIndexOf("/"),t=a>0&&a<e.length?e.substring(0,a):e}return t},_checkValues:function(e){return e&&(e.anchorInput&&(e.anchorInput=e.anchorInput.replace(/"/g,"&quot;")),e.textInput||(e.textInput="&nbsp;")),e},setValue:function(a){if(this._onCloseDialog(),!this.editor.window.getSelection){var i=t.range.getSelection(this.editor.window),r=i.getRangeAt(0),n=r.endContainer;3===n.nodeType&&(n=n.parentNode),n&&n.nodeName&&"a"!==n.nodeName.toLowerCase()&&(n=this.editor._sCall("getSelectedElement",["a"])),n&&n.nodeName&&"a"===n.nodeName.toLowerCase()&&this.editor.queryCommandEnabled("unlink")&&(this.editor._sCall("selectElementChildren",[n]),this.editor.execCommand("unlink"))}a=this._checkValues(a),this.editor.execCommand("inserthtml",e.string.substitute(this.htmlTemplate,a))},_onCloseDialog:function(){this.editor.focus()},_getCurrentValues:function(t){var a,i;return t&&"a"===t.tagName.toLowerCase()&&e.attr(t,"name")?(a=e.attr(t,"name"),i=t.textContent||t.innerText,this.editor._sCall("selectElement",[t,!0])):i=this.editor._sCall("getSelectedText"),{anchorInput:a||"",textInput:i||""}},_onOpenDialog:function(){var e;if(this.editor.window.getSelection)e=this.editor._sCall("getAncestorElement",["a"]);else{e=t.range.getSelection(this.editor.window).getRangeAt(0).endContainer,3===e.nodeType&&(e=e.parentNode),e&&e.nodeName&&"a"!==e.nodeName.toLowerCase()&&(e=this.editor._sCall("getSelectedElement",["a"]))}this.dropDown.reset(),this._setButton.set("disabled",!0),this.dropDown.set("value",this._getCurrentValues(e))},_onDblClick:function(t){if(t&&t.target){var a=t.target;"a"===(a.tagName?a.tagName.toLowerCase():"")&&e.attr(a,"name")&&(this.editor.onDisplayChanged(),this.editor._sCall("selectElement",[a]),setTimeout(e.hitch(this,function(){this.button.set("disabled",!1),this.button.openDropDown(),this.button.dropDown.focus&&this.button.dropDown.focus()}),10))}},_preDomFilter:function(t){e.query("a[name]:not([href])",this.editor.editNode).addClass("dijitEditorPluginInsertAnchorStyle")},_postDomFilter:function(t){return t&&e.query("a[name]:not([href])",t).removeClass("dijitEditorPluginInsertAnchorStyle"),t}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name;t&&(t=t.toLowerCase()),"insertanchor"===t&&(e.plugin=new r)}}),r});//# sourceMappingURL=InsertAnchor.js.map