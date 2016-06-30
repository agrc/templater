//>>built
define("dojox/mobile/app/_FormWidget",["dojo","dijit","dojox","dojo/require!dojo/window,dijit/_WidgetBase,dijit/focus"],function(e,t,i){e.provide("dojox.mobile.app._FormWidget"),e.experimental("dojox.mobile.app._FormWidget"),e.require("dojo.window"),e.require("dijit._WidgetBase"),e.require("dijit.focus"),e.declare("dojox.mobile.app._FormWidget",t._WidgetBase,{name:"",alt:"",value:"",type:"text",disabled:!1,intermediateChanges:!1,scrollOnFocus:!1,attributeMap:e.delegate(t._WidgetBase.prototype.attributeMap,{value:"focusNode",id:"focusNode",alt:"focusNode",title:"focusNode"}),postMixInProperties:function(){this.nameAttrSetting=this.name?'name="'+this.name.replace(/'/g,"&quot;")+'"':"",this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onmousedown","_onMouseDown")},_setDisabledAttr:function(t){this.disabled=t,e.attr(this.focusNode,"disabled",t),this.valueNode&&e.attr(this.valueNode,"disabled",t)},_onFocus:function(t){this.scrollOnFocus&&e.window.scrollIntoView(this.domNode),this.inherited(arguments)},isFocusable:function(){return!this.disabled&&!this.readOnly&&this.focusNode&&"none"!=e.style(this.domNode,"display")},focus:function(){this.focusNode.focus()},compare:function(e,t){return"number"==typeof e&&"number"==typeof t?isNaN(e)&&isNaN(t)?0:e-t:e>t?1:t>e?-1:0},onChange:function(e){},_onChangeActive:!1,_handleOnChange:function(t,i){this._lastValue=t,void 0!=this._lastValueReported||null!==i&&this._onChangeActive||(this._resetValue=this._lastValueReported=t),!this.intermediateChanges&&!i&&void 0!==i||typeof t==typeof this._lastValueReported&&0==this.compare(t,this._lastValueReported)||(this._lastValueReported=t,this._onChangeActive&&(this._onChangeHandle&&clearTimeout(this._onChangeHandle),this._onChangeHandle=setTimeout(e.hitch(this,function(){this._onChangeHandle=null,this.onChange(t)}),0)))},create:function(){this.inherited(arguments),this._onChangeActive=!0},destroy:function(){this._onChangeHandle&&(clearTimeout(this._onChangeHandle),this.onChange(this._lastValueReported)),this.inherited(arguments)},_onMouseDown:function(t){if(this.isFocusable())var i=this.connect(e.body(),"onmouseup",function(){this.isFocusable()&&this.focus(),this.disconnect(i)})},selectInputText:function(i,a,o){var r=e.global;e.doc;i=e.byId(i),isNaN(a)&&(a=0),isNaN(o)&&(o=i.value?i.value.length:0),t.focus(i),r.getSelection&&i.setSelectionRange&&i.setSelectionRange(a,o)}}),e.declare("dojox.mobile.app._FormValueWidget",i.mobile.app._FormWidget,{readOnly:!1,attributeMap:e.delegate(i.mobile.app._FormWidget.prototype.attributeMap,{value:"",readOnly:"focusNode"}),_setReadOnlyAttr:function(t){this.readOnly=t,e.attr(this.focusNode,"readOnly",t)},postCreate:function(){this.inherited(arguments),void 0===this._resetValue&&(this._resetValue=this.value)},_setValueAttr:function(e,t){this.value=e,this._handleOnChange(e,t)},_getValueAttr:function(){return this._lastValue},undo:function(){this._setValueAttr(this._lastValueReported,!1)},reset:function(){this._hasBeenBlurred=!1,this._setValueAttr(this._resetValue,!0)}})});//# sourceMappingURL=_FormWidget.js.map