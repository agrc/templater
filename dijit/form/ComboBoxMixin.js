//>>built
require({cache:{"url:dijit/form/templates/DropDownBox.html":'<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}"\n\trole="combobox"\n\taria-haspopup="true"\n\tdata-dojo-attach-point="_popupStateNode"\n\t><div class=\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n\t\tdata-dojo-attach-point="_buttonNode" role="presentation"\n\t\t><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="button presentation" aria-hidden="true"\n\t\t\t${_buttonInputDisabled}\n\t/></div\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class=\'dijitReset dijitInputInner\' ${!nameAttrSetting} type="${type}" autocomplete="off"\n\t\t\tdata-dojo-attach-point="textbox,focusNode" role="textbox"\n\t/></div\n></div>\n'}}),define("dijit/form/ComboBoxMixin",["dojo/_base/declare","dojo/Deferred","dojo/_base/kernel","dojo/_base/lang","dojo/store/util/QueryResults","./_AutoCompleterMixin","./_ComboBoxMenu","../_HasDropDown","dojo/text!./templates/DropDownBox.html"],function(e,t,i,o,n,s,r,a,d){return e("dijit.form.ComboBoxMixin",[a,s],{dropDownClass:r,hasDownArrow:!0,templateString:d,baseClass:"dijitTextBox dijitComboBox",cssStateNodes:{_buttonNode:"dijitDownArrowButton"},_setHasDownArrowAttr:function(e){this._set("hasDownArrow",e),this._buttonNode.style.display=e?"":"none"},_showResultList:function(){this.displayMessage(""),this.inherited(arguments)},_setStoreAttr:function(e){e.get||o.mixin(e,{_oldAPI:!0,get:function(e){var i=new t;return this.fetchItemByIdentity({identity:e,onItem:function(e){i.resolve(e)},onError:function(e){i.reject(e)}}),i.promise},query:function(e,i){var s=new t(function(){r.abort&&r.abort()});s.total=new t;var r=this.fetch(o.mixin({query:e,onBegin:function(e){s.total.resolve(e)},onComplete:function(e){s.resolve(e)},onError:function(e){s.reject(e)}},i));return n(s)}}),this._set("store",e)},postMixInProperties:function(){var e=this.params.store||this.store;if(e&&this._setStoreAttr(e),this.inherited(arguments),!this.params.store&&this.store&&!this.store._oldAPI){var t=this.declaredClass;o.mixin(this.store,{getValue:function(e,o){return i.deprecated(t+".store.getValue(item, attr) is deprecated for builtin store.  Use item.attr directly","","2.0"),e[o]},getLabel:function(e){return i.deprecated(t+".store.getLabel(item) is deprecated for builtin store.  Use item.label directly","","2.0"),e.name},fetch:function(e){i.deprecated(t+".store.fetch() is deprecated for builtin store.","Use store.query()","2.0");var n=["dojo/data/ObjectStore"];require(n,o.hitch(this,function(t){new t({objectStore:this}).fetch(e)}))}})}},buildRendering:function(){this.inherited(arguments),this.focusNode.setAttribute("aria-autocomplete",this.autoComplete?"both":"list")}})});//# sourceMappingURL=ComboBoxMixin.js.map