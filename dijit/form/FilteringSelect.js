//>>built
define("dijit/form/FilteringSelect",["dojo/_base/declare","dojo/_base/lang","dojo/when","./MappedTextBox","./ComboBoxMixin"],function(e,t,i,n,o){return e("dijit.form.FilteringSelect",[n,o],{required:!0,_lastDisplayedValue:"",_isValidSubset:function(){return this._opened},isValid:function(){return!!this.item||!this.required&&""==this.get("displayedValue")},_refreshState:function(){this.searchTimer||this.inherited(arguments)},_callbackSetLabel:function(e,t,i,n){t&&t[this.searchAttr]!==this._lastQuery||!t&&e.length&&this.store.getIdentity(e[0])!=this._lastQuery||(e.length?this.set("item",e[0],n):this.set("value","",n||void 0===n&&!this.focused,this.textbox.value,null))},_openResultList:function(e,t,i){t[this.searchAttr]===this._lastQuery&&(this.inherited(arguments),void 0===this.item&&this.validate(!0))},_getValueAttr:function(){return this.valueNode.value},_getValueField:function(){return"value"},_setValueAttr:function(e,n,o,s){if(this._onChangeActive||(n=null),void 0===s){if((null===e||""===e)&&(e="",!t.isString(o)))return void this._setDisplayedValueAttr(o||"",n);var r=this;this._lastQuery=e,i(this.store.get(e),function(e){r._callbackSetLabel(e?[e]:[],void 0,void 0,n)})}else this.valueNode.value=e,this.inherited(arguments,[e,n,o,s])},_setItemAttr:function(e,t,i){this.inherited(arguments),this._lastDisplayedValue=this.textbox.value},_getDisplayQueryString:function(e){return e.replace(/([\\\*\?])/g,"\\$1")},_setDisplayedValueAttr:function(e,n){if(null==e&&(e=""),!this._created){if(!("displayedValue"in this.params))return;n=!1}if(this.store){this.closeDropDown();var o,s=t.clone(this.query),r=this._getDisplayQueryString(e);this.store._oldAPI?o=r:(o=this._patternToRegExp(r),o.toString=function(){return r}),this._lastQuery=s[this.searchAttr]=o,this.textbox.value=e,this._lastDisplayedValue=e,this._set("displayedValue",e);var a=this,l={queryOptions:{ignoreCase:this.ignoreCase,deep:!0}};t.mixin(l,this.fetchProperties),this._fetchHandle=this.store.query(s,l),i(this._fetchHandle,function(e){a._fetchHandle=null,a._callbackSetLabel(e||[],s,l,n)},function(e){a._fetchHandle=null,!a._cancelingQuery})}},undo:function(){this.set("displayedValue",this._lastDisplayedValue)}})});//# sourceMappingURL=FilteringSelect.js.map