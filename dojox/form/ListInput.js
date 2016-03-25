//>>built
define("dojox/form/ListInput",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/fx","dojo/_base/window","dojo/_base/connect","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/keys","dijit/_Widget","dijit/_TemplatedMixin","dijit/form/_FormValueWidget","dijit/form/ValidationTextBox","dijit/InlineEditBox","dojo/i18n!dijit/nls/common","dojo/_base/declare"],function(e,t,a,i,o,n,r,s,l,d,m,u,c,h,f,p,g,v,y){e.experimental("dojox.form.ListInput");var k=y("dojox.form.ListInput",[f],{constructor:function(){this._items=[],t.isArray(this.delimiter)||(this.delimiter=[this.delimiter]);var e="("+this.delimiter.join("|")+")?";this.regExp="^"+this.regExp+e+"$"},inputClass:"dojox.form._ListInputInputBox",inputHandler:"onChange",inputProperties:{minWidth:50},submitOnlyValidValue:!0,useOnBlur:!0,readOnlyInput:!1,maxItems:null,showCloseButtonWhenValid:!0,showCloseButtonWhenInvalid:!0,regExp:".*",delimiter:",",constraints:{},baseClass:"dojoxListInput",type:"select",value:"",templateString:'<div dojoAttachPoint="focusNode" class="dijit dijitReset dijitLeft dojoxListInput"><select dojoAttachpoint="_selectNode" multiple="multiple" class="dijitHidden" ${!nameAttrSetting}></select><ul dojoAttachPoint="_listInput"><li dojoAttachEvent="onclick: _onClick" class="dijitInputField dojoxListInputNode dijitHidden" dojoAttachPoint="_inputNode"></li></ul></div>',_setNameAttr:"_selectNode",useAnim:!0,duration:500,easingIn:null,easingOut:null,readOnlyItem:!1,useArrowForEdit:!0,_items:null,_lastAddedItem:null,_currentItem:null,_input:null,_count:0,postCreate:function(){this.inherited(arguments),this._createInputBox()},_setReadOnlyInputAttr:function(e){return this._started?(this.readOnlyInput=e,void this._createInputBox()):this._createInputBox()},_setReadOnlyItemAttr:function(e){if(this._started)for(var t in this._items)this._items[t].set("readOnlyItem",e)},_createInputBox:function(){if(s.toggle(this._inputNode,"dijitHidden",this.readOnlyInput),!this.readOnlyInput&&!this._input){if(null===this.inputHandler)return!1;t.isString(this.inputHandler)&&(this.inputHandler=this.inputHandler.split(",")),t.isString(this.inputProperties)&&(this.inputProperties=i.fromJson(this.inputProperties));var e=t.getObject(this.inputClass,!1);this.inputProperties.regExp=this.regExpGen(this.constraints),this._input=new e(this.inputProperties),this._input.startup(),this._inputNode.appendChild(this._input.domNode),a.forEach(this.inputHandler,function(e){this.connect(this._input,t.trim(e),"_onHandler")},this),this.connect(this._input,"onKeyDown","_inputOnKeyDown"),this.connect(this._input,"onBlur","_inputOnBlur")}},compare:function(e,t){return e=e.join(","),t=t.join(","),e>t?1:t>e?-1:0},add:function(e){if(!(this._count>=this.maxItems&&null!==this.maxItems)){this._lastValueReported=this._getValues(),t.isArray(e)||(e=[e]);for(var a in e){var i=e[a];if(""!==i&&"string"==typeof i){this._count++;new RegExp(this.regExpGen(this.constraints));if(this._lastAddedItem=new b({index:this._items.length,readOnlyItem:this.readOnlyItem,value:i,regExp:this.regExpGen(this.constraints)}),this._lastAddedItem.startup(),this._testItem(this._lastAddedItem,i),this._lastAddedItem.onClose=t.hitch(this,"_onItemClose",this._lastAddedItem),this._lastAddedItem.onChange=t.hitch(this,"_onItemChange",this._lastAddedItem),this._lastAddedItem.onEdit=t.hitch(this,"_onItemEdit",this._lastAddedItem),this._lastAddedItem.onKeyDown=t.hitch(this,"_onItemKeyDown",this._lastAddedItem),this.useAnim&&l.set(this._lastAddedItem.domNode,{opacity:0,display:""}),this._placeItem(this._lastAddedItem.domNode),this.useAnim){o.fadeIn({node:this._lastAddedItem.domNode,duration:this.duration,easing:this.easingIn}).play()}if(this._items[this._lastAddedItem.index]=this._lastAddedItem,this._onChangeActive&&this.intermediateChanges&&this.onChange(i),this._count>=this.maxItems&&null!==this.maxItems)break}}this._updateValues(),0==this._lastValueReported.length&&(this._lastValueReported=this.value),this.readOnlyInput||this._input.set("value",""),this._onChangeActive&&this.onChange(this.value),this._setReadOnlyWhenMaxItemsReached()}},_setReadOnlyWhenMaxItemsReached:function(){this.set("readOnlyInput",this._count>=this.maxItems&&null!==this.maxItems)},_setSelectNode:function(){this._selectNode.options.length=0;var e=this.submitOnlyValidValue?this.get("MatchedValue"):this.value;t.isArray(e)&&a.forEach(e,function(e){this._selectNode.options[this._selectNode.options.length]=new Option(e,e,!0,!0)},this)},_placeItem:function(e){d.place(e,this._inputNode,"before")},_getCursorPos:function(e){if("undefined"!=typeof e.selectionStart)return e.selectionStart;try{e.focus()}catch(t){}var a=e.createTextRange();a.moveToBookmark(n.doc.selection.createRange().getBookmark()),a.moveEnd("character",e.value.length);try{return e.value.length-a.text.length}finally{a=null}},_onItemClose:function(e){if(!this.disabled)if(this.useAnim){o.fadeOut({node:e.domNode,duration:this.duration,easing:this.easingOut,onEnd:t.hitch(this,"_destroyItem",e)}).play()}else this._destroyItem(e)},_onItemKeyDown:function(e,t){!this.readOnlyItem&&this.useArrowForEdit&&(t.keyCode==u.LEFT_ARROW&&0==this._getCursorPos(t.target)?this._editBefore(e):t.keyCode==u.RIGHT_ARROW&&this._getCursorPos(t.target)==t.target.value.length&&this._editAfter(e))},_editBefore:function(e){this._currentItem=this._getPreviousItem(e),null!==this._currentItem&&this._currentItem.edit()},_editAfter:function(e){this._currentItem=this._getNextItem(e),null!==this._currentItem&&this._currentItem.edit(),this.readOnlyInput||null===this._currentItem&&this._focusInput()},_onItemChange:function(e,t){t=t||e.get("value"),this._testItem(e,t),this._updateValues()},_onItemEdit:function(e){s.remove(e.domNode,["dijitError",this.baseClass+"Match",this.baseClass+"Mismatch"])},_testItem:function(e,t){var a=new RegExp(this.regExpGen(this.constraints)),i=(""+t).match(a);s.remove(e.domNode,this.baseClass+(i?"Mismatch":"Match")),s.add(e.domNode,this.baseClass+(i?"Match":"Mismatch")),s.toggle(e.domNode,"dijitError",!i),this.showCloseButtonWhenValid&&i||this.showCloseButtonWhenInvalid&&!i?s.add(e.domNode,this.baseClass+"Closable"):s.remove(e.domNode,this.baseClass+"Closable")},_getValueAttr:function(){return this.value},_setValueAttr:function(e){this._destroyAllItems(),this.add(this._parseValue(e))},_parseValue:function(e){if("string"==typeof e){t.isString(this.delimiter)&&(this.delimiter=[this.delimiter]);var a=new RegExp("^.*("+this.delimiter.join("|")+").*");if(e.match(a))return a=new RegExp(this.delimiter.join("|")),e.split(a)}return e},regExpGen:function(e){return this.regExp},_setDisabledAttr:function(e){if(!this.readOnlyItem)for(var t in this._items)this._items[t].set("disabled",e);this.readOnlyInput||this._input.set("disabled",e),this.inherited(arguments)},_onHandler:function(e){var a=this._parseValue(e);t.isArray(a)&&this.add(a)},_onClick:function(e){this._focusInput()},_focusInput:function(){!this.readOnlyInput&&this._input.focus&&this._input.focus()},_inputOnKeyDown:function(e){this._currentItem=null;var t=this._input.get("value");e.keyCode==u.BACKSPACE&&""==t&&this.get("lastItem")?this._destroyItem(this.get("lastItem")):e.keyCode==u.ENTER&&""!=t?this.add(t):e.keyCode==u.LEFT_ARROW&&0==this._getCursorPos(this._input.focusNode)&&!this.readOnlyItem&&this.useArrowForEdit&&this._editBefore()},_inputOnBlur:function(){var e=this._input.get("value");this.useOnBlur&&""!=e&&this.add(e)},_getMatchedValueAttr:function(){return this._getValues(t.hitch(this,this._matchValidator))},_getMismatchedValueAttr:function(){return this._getValues(t.hitch(this,this._mismatchValidator))},_getValues:function(e){var t=[];e=e||this._nullValidator;for(var a in this._items){var i=this._items[a];if(null!==i){var o=i.get("value");e(o)&&t.push(o)}}return t},_nullValidator:function(e){return!0},_matchValidator:function(e){var t=new RegExp(this.regExpGen(this.constraints));return e.match(t)},_mismatchValidator:function(e){var t=new RegExp(this.regExpGen(this.constraints));return!e.match(t)},_getLastItemAttr:function(){return this._getSomeItem()},_getSomeItem:function(e,t){e=e||!1,t=t||"last";var a=null,i=-1;for(var o in this._items)if(null!==this._items[o]){if("before"==t&&this._items[o]===e)break;if(a=this._items[o],"first"==t||0==i){i=1;break}"after"==t&&this._items[o]===e&&(i=0)}return"after"==t&&0==i&&(a=null),a},_getPreviousItem:function(e){return this._getSomeItem(e,"before")},_getNextItem:function(e){return this._getSomeItem(e,"after")},_destroyItem:function(e,t){this._items[e.index]=null,e.destroy(),this._count--,t!==!1&&(this._updateValues(),this._setReadOnlyWhenMaxItemsReached())},_updateValues:function(){this.value=this._getValues(),this._setSelectNode()},_destroyAllItems:function(){for(var e in this._items)null!=this._items[e]&&this._destroyItem(this._items[e],!1);this._items=[],this._count=0,this.value=null,this._setSelectNode(),this._setReadOnlyWhenMaxItemsReached()},destroy:function(){this._destroyAllItems(),this._lastAddedItem=null,this._input||this._input.destroy(),this.inherited(arguments)}}),b=y("dojox.form._ListInputInputItem",[c,h],{templateString:'<li class="dijit dijitReset dijitLeft dojoxListInputItem" dojoAttachEvent="onclick: onClick" ><span dojoAttachPoint="labelNode"></span></li>',closeButtonNode:null,readOnlyItem:!0,baseClass:"dojoxListInputItem",value:"",regExp:".*",_editBox:null,_handleKeyDown:null,attributeMap:{value:{node:"labelNode",type:"innerHTML"}},postMixInProperties:function(){var e=v;t.mixin(this,e),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.closeButtonNode=d.create("span",{"class":"dijitButtonNode dijitDialogCloseIcon",title:this.itemClose,onclick:t.hitch(this,"onClose"),onmouseenter:t.hitch(this,"_onCloseEnter"),onmouseleave:t.hitch(this,"_onCloseLeave")},this.domNode),d.create("span",{"class":"closeText",title:this.itemClose,innerHTML:"x"},this.closeButtonNode)},startup:function(){this.inherited(arguments),this._createInlineEditBox()},_setReadOnlyItemAttr:function(e){this.readOnlyItem=e,e?this._editBox&&this._editBox.set("disabled",!0):this._createInlineEditBox()},_createInlineEditBox:function(){if(!this.readOnlyItem&&this._started){if(this._editBox)return void this._editBox.set("disabled",!1);this._editBox=new g({value:this.value,editor:"dijit.form.ValidationTextBox",editorParams:{regExp:this.regExp}},this.labelNode),this.connect(this._editBox,"edit","_onEdit"),this.connect(this._editBox,"onChange","_onCloseEdit"),this.connect(this._editBox,"onCancel","_onCloseEdit")}},edit:function(){this.readOnlyItem||this._editBox.edit()},_onCloseEdit:function(e){s.remove(this.closeButtonNode,this.baseClass+"Edited"),r.disconnect(this._handleKeyDown),this.onChange(e)},_onEdit:function(){s.add(this.closeButtonNode,this.baseClass+"Edited"),this._handleKeyDown=r.connect(this._editBox.editWidget,"_onKeyPress",this,"onKeyDown"),this.onEdit()},_setDisabledAttr:function(e){this.readOnlyItem||this._editBox.set("disabled",e)},_getValueAttr:function(){return!this.readOnlyItem&&this._started?this._editBox.get("value"):this.value},destroy:function(){this._editBox&&this._editBox.destroy(),this.inherited(arguments)},_onCloseEnter:function(){s.add(this.closeButtonNode,"dijitDialogCloseIcon-hover")},_onCloseLeave:function(){s.remove(this.closeButtonNode,"dijitDialogCloseIcon-hover")},onClose:function(){},onEdit:function(){},onClick:function(){},onChange:function(e){},onKeyDown:function(e){}});y("dojox.form._ListInputInputBox",[p],{minWidth:50,intermediateChanges:!0,regExp:".*",_sizer:null,onChange:function(e){this.inherited(arguments),null===this._sizer&&(this._sizer=d.create("div",{style:{position:"absolute",left:"-10000px",top:"-10000px"}},n.body())),this._sizer.innerHTML=e;var t=m.getContentBox(this._sizer).w+this.minWidth;m.setContentSize(this.domNode,{w:t})},destroy:function(){d.destroy(this._sizer),this.inherited(arguments)}});return k});//# sourceMappingURL=ListInput.js.map