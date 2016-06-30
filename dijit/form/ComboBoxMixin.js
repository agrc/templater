//>>built
require({cache:{"url:dijit/form/templates/DropDownBox.html":'<div class="dijit dijitReset dijitInline dijitLeft"\n	id="widget_${id}"\n	role="combobox"\n	aria-haspopup="true"\n	data-dojo-attach-point="_popupStateNode"\n	><div class=\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n		data-dojo-attach-point="_buttonNode" role="presentation"\n		><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="button presentation" aria-hidden="true"\n			${_buttonInputDisabled}\n	/></div\n	><div class=\'dijitReset dijitValidationContainer\'\n		><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n	/></div\n	><div class="dijitReset dijitInputField dijitInputContainer"\n		><input class=\'dijitReset dijitInputInner\' ${!nameAttrSetting} type="text" autocomplete="off"\n			data-dojo-attach-point="textbox,focusNode" role="textbox"\n	/></div\n></div>\n'}}),define("dijit/form/ComboBoxMixin",["dojo/_base/declare","dojo/Deferred","dojo/_base/kernel","dojo/_base/lang","dojo/store/util/QueryResults","./_AutoCompleterMixin","./_ComboBoxMenu","../_HasDropDown","dojo/text!./templates/DropDownBox.html"],function(e,t,i,n,o,r,a,s,d){return e("dijit.form.ComboBoxMixin",[s,r],{dropDownClass:a,hasDownArrow:!0,templateString:d,baseClass:"dijitTextBox dijitComboBox",cssStateNodes:{_buttonNode:"dijitDownArrowButton"},_setHasDownArrowAttr:function(e){this._set("hasDownArrow",e),this._buttonNode.style.display=e?"":"none"},_showResultList:function(){this.displayMessage(""),this.inherited(arguments)},_setStoreAttr:function(e){e.get||n.mixin(e,{_oldAPI:!0,get:function(e){var i=new t;return this.fetchItemByIdentity({identity:e,onItem:function(e){i.resolve(e)},onError:function(e){i.reject(e)}}),i.promise},query:function(e,i){var r=new t(function(){a.abort&&a.abort()});r.total=new t;var a=this.fetch(n.mixin({query:e,onBegin:function(e){r.total.resolve(e)},onComplete:function(e){r.resolve(e)},onError:function(e){r.reject(e)}},i));return o(r)}}),this._set("store",e)},postMixInProperties:function(){var e=this.params.store||this.store;if(e&&this._setStoreAttr(e),this.inherited(arguments),!this.params.store&&this.store&&!this.store._oldAPI){var t=this.declaredClass;n.mixin(this.store,{getValue:function(e,n){return i.deprecated(t+".store.getValue(item, attr) is deprecated for builtin store.  Use item.attr directly","","2.0"),e[n]},getLabel:function(e){return i.deprecated(t+".store.getLabel(item) is deprecated for builtin store.  Use item.label directly","","2.0"),e.name},fetch:function(e){i.deprecated(t+".store.fetch() is deprecated for builtin store.","Use store.query()","2.0");var o=["dojo/data/ObjectStore"];require(o,n.hitch(this,function(t){new t({objectStore:this}).fetch(e)}))}})}},buildRendering:function(){this.inherited(arguments),this.focusNode.setAttribute("aria-autocomplete",this.autoComplete?"both":"list")}})});//# sourceMappingURL=ComboBoxMixin.js.map