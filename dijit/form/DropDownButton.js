//>>built
require({cache:{"url:dijit/form/templates/DropDownButton.html":'<span class="dijit dijitReset dijitInline"\n	><span class=\'dijitReset dijitInline dijitButtonNode\'\n		data-dojo-attach-event="ondijitclick:__onClick" data-dojo-attach-point="_buttonNode"\n		><span class="dijitReset dijitStretch dijitButtonContents"\n			data-dojo-attach-point="focusNode,titleNode,_arrowWrapperNode,_popupStateNode"\n			role="button" aria-haspopup="true" aria-labelledby="${id}_label"\n			><span class="dijitReset dijitInline dijitIcon"\n				data-dojo-attach-point="iconNode"\n			></span\n			><span class="dijitReset dijitInline dijitButtonText"\n				data-dojo-attach-point="containerNode"\n				id="${id}_label"\n			></span\n			><span class="dijitReset dijitInline dijitArrowButtonInner"></span\n			><span class="dijitReset dijitInline dijitArrowButtonChar">&#9660;</span\n		></span\n	></span\n	><input ${!nameAttrSetting} type="${type}" value="${value}" class="dijitOffScreen" tabIndex="-1"\n		data-dojo-attach-event="onclick:_onClick" data-dojo-attach-point="valueNode" aria-hidden="true"\n/></span>\n'}}),define("dijit/form/DropDownButton",["dojo/_base/declare","dojo/_base/lang","dojo/query","../registry","../popup","./Button","../_Container","../_HasDropDown","dojo/text!./templates/DropDownButton.html","../a11yclick"],function(t,e,i,o,n,a,s,r,d){return t("dijit.form.DropDownButton",[a,s,r],{baseClass:"dijitDropDownButton",templateString:d,_fillContent:function(){if(this.srcNodeRef){var t=i("*",this.srcNodeRef);this.inherited(arguments,[t[0]]),this.dropDownContainer=this.srcNodeRef}},startup:function(){if(!this._started){if(!this.dropDown&&this.dropDownContainer){var t=i("[widgetId]",this.dropDownContainer)[0];t&&(this.dropDown=o.byNode(t)),delete this.dropDownContainer}this.dropDown&&n.hide(this.dropDown),this.inherited(arguments)}},isLoaded:function(){var t=this.dropDown;return!!t&&(!t.href||t.isLoaded)},loadDropDown:function(t){var i=this.dropDown,o=i.on("load",e.hitch(this,function(){o.remove(),t()}));i.refresh()},isFocusable:function(){return this.inherited(arguments)&&!this._mouseDown}})});//# sourceMappingURL=DropDownButton.js.map