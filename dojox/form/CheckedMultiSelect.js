//>>built
require({cache:{"url:dojox/form/resources/_CheckedMultiSelectMenuItem.html":'<tr class="dijitReset dijitMenuItem" dojoAttachPoint="focusNode" role="menuitemcheckbox" tabIndex="-1"\n	dojoAttachEvent="ondijitclick:_onClick"\n	><td class="dijitReset dijitMenuItemIconCell" role="presentation"\n		><div src="${_blankGif}" alt="" class="dijitMenuItemIcon ${_iconClass}" dojoAttachPoint="iconNode"\n			><input class="dojoxCheckedMultiSelectCheckBoxInput" dojoAttachPoint="inputNode" type="${_type.type}"\n		/></div></td\n	><td class="dijitReset dijitMenuItemLabel" colspan="2" dojoAttachPoint="containerNode,labelNode"></td\n	><td class="dijitReset dijitMenuItemAccelKey" style="display: none" dojoAttachPoint="accelKeyNode"></td\n	><td class="dijitReset dijitMenuArrowCell" role="presentation">&nbsp;</td\n></tr>',"url:dojox/form/resources/_CheckedMultiSelectItem.html":'<div class="dijitReset ${baseClass}"\n	><input class="${baseClass}Box" data-dojo-type="dijit.form.CheckBox" data-dojo-attach-point="checkBox" \n		data-dojo-attach-event="_onClick:_changeBox" type="${_type.type}" data-dojo-props=\'disabled:${disabled}, readOnly:${readOnly}\' baseClass="${_type.baseClass}"\n	/><div class="dijitInline ${baseClass}Label" data-dojo-attach-point="labelNode" data-dojo-attach-event="onclick:_onClick"></div\n></div>\n',"url:dojox/form/resources/CheckedMultiSelect.html":'<div class="dijit dijitReset dijitInline dijitLeft" id="widget_${id}"\n	><div data-dojo-attach-point="comboButtonNode"\n	></div\n	><div data-dojo-attach-point="selectNode" class="dijit dijitReset dijitInline ${baseClass}Wrapper" data-dojo-attach-event="onmousedown:_onMouseDown,onclick:focus"\n		><select class="${baseClass}Select dojoxCheckedMultiSelectHidden" multiple="true" data-dojo-attach-point="containerNode,focusNode"></select\n		><div data-dojo-attach-point="wrapperDiv"></div\n	></div\n></div>'}}),define("dojox/form/CheckedMultiSelect",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/dom-geometry","dojo/dom-class","dojo/dom-construct","dojo/i18n","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/registry","dijit/Menu","dijit/MenuItem","dijit/Tooltip","dijit/form/_FormSelectWidget","dijit/form/ComboButton","dojo/text!dojox/form/resources/_CheckedMultiSelectMenuItem.html","dojo/text!dojox/form/resources/_CheckedMultiSelectItem.html","dojo/text!dojox/form/resources/CheckedMultiSelect.html","dojo/i18n!dojox/form/nls/CheckedMultiSelect","dijit/form/CheckBox"],function(e,t,a,i,r,o,n,s,d,l,u,m,h,c,f,p,g,y,v,b,M){var k=e("dojox.form._CheckedMultiSelectItem",[d,l,u],{templateString:v,baseClass:"dojoxMultiSelectItem",option:null,parent:null,disabled:!1,readOnly:!1,postMixInProperties:function(){this._type=this.parent.multiple?{type:"checkbox",baseClass:"dijitCheckBox"}:{type:"radio",baseClass:"dijitRadio"},this.disabled||(this.disabled=this.option.disabled=this.option.disabled||!1),this.readOnly||(this.readOnly=this.option.readOnly=this.option.readOnly||!1),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.labelNode.innerHTML=this.option.label},_changeBox:function(){this.get("disabled")||this.get("readOnly")||(this.parent.multiple?this.option.selected=this.checkBox.get("value")&&!0:this.parent.set("value",this.option.value),this.parent._updateSelection(),this.parent.focus())},_onClick:function(e){this.get("disabled")||this.get("readOnly")?i.stop(e):this.checkBox._onClick(e)},_updateBox:function(){this.checkBox.set("value",this.option.selected)},_setDisabledAttr:function(e){this.disabled=e||this.option.disabled,this.checkBox.set("disabled",this.disabled),o.toggle(this.domNode,"dojoxMultiSelectDisabled",this.disabled)},_setReadOnlyAttr:function(e){this.checkBox.set("readOnly",e),this.readOnly=e}}),_=e("dojox.form._CheckedMultiSelectMenu",h,{multiple:!1,buildRendering:function(){this.inherited(arguments);var e=this.menuTableNode=this.domNode,t=this.domNode=n.create("div",{style:{overflowX:"hidden",overflowY:"scroll"}});e.parentNode&&e.parentNode.replaceChild(t,e),o.remove(e,"dijitMenuTable"),t.className=e.className+" dojoxCheckedMultiSelectMenu",e.className="dijitReset dijitMenuTable",e.setAttribute("role","listbox"),t.setAttribute("role","presentation"),t.appendChild(e)},resize:function(e){e&&(r.setMarginBox(this.domNode,e),"w"in e&&(this.menuTableNode.style.width="100%"))},onClose:function(){this.inherited(arguments),this.menuTableNode&&(this.menuTableNode.style.width="")},onItemClick:function(e,t){return"undefined"==typeof this.isShowingNow&&this._markActive(),this.focusChild(e),e.disabled||e.readOnly?!1:(this.multiple||this.onExecute(),void e.onClick(t))}}),w=e("dojox.form._CheckedMultiSelectMenuItem",c,{templateString:y,option:null,parent:null,iconClass:"",postMixInProperties:function(){this.parent.multiple?(this._iconClass="dojoxCheckedMultiSelectMenuCheckBoxItemIcon",this._type={type:"checkbox"}):(this._iconClass="",this._type={type:"hidden"}),this.disabled=this.option.disabled,this.checked=this.option.selected,this.label=this.option.label,this.readOnly=this.option.readOnly,this.inherited(arguments)},onChange:function(e){},_updateBox:function(){o.toggle(this.domNode,"dojoxCheckedMultiSelectMenuItemChecked",!!this.option.selected),this.domNode.setAttribute("aria-checked",this.option.selected),this.inputNode.checked=this.option.selected,this.parent.multiple||o.toggle(this.domNode,"dijitSelectSelectedOption",!!this.option.selected)},_onClick:function(e){this.disabled||this.readOnly||(this.parent.multiple?(this.option.selected=!this.option.selected,this.parent.onChange(),this.onChange(this.option.selected)):this.option.selected||(a.forEach(this.parent.getChildren(),function(e){e.option.selected=!1}),this.option.selected=!0,this.parent.onChange(),this.onChange(this.option.selected))),this.inherited(arguments)}}),j=e("dojox.form.CheckedMultiSelect",p,{templateString:b,baseClass:"dojoxCheckedMultiSelect",required:!1,invalidMessage:"$_unset_$",_message:"",dropDown:!1,labelText:"",tooltipPosition:[],postMixInProperties:function(){this.inherited(arguments),this._nlsResources=s.getLocalization("dojox.form","CheckedMultiSelect",this.lang),"$_unset_$"==this.invalidMessage&&(this.invalidMessage=this._nlsResources.invalidMessage)},_fillContent:function(){if(this.inherited(arguments),this.options.length&&!this.value&&this.srcNodeRef){var e=this.srcNodeRef.selectedIndex||0;this.value=this.options[e>=0?e:0].value}this.dropDown&&(o.toggle(this.selectNode,"dojoxCheckedMultiSelectHidden"),this.dropDownMenu=new _({id:this.id+"_menu",style:"display: none;",multiple:this.multiple,onChange:t.hitch(this,"_updateSelection")}))},startup:function(){this.dropDown&&(this.dropDownButton=new g({label:this.labelText,dropDown:this.dropDownMenu,baseClass:"dojoxCheckedMultiSelectButton",maxHeight:this.maxHeight},this.comboButtonNode)),this.inherited(arguments)},_onMouseDown:function(e){e.preventDefault()},validator:function(){return this.required?a.some(this.getOptions(),function(e){return e.selected&&null!=e.value&&0!=e.value.toString().length}):!0},validate:function(e){f.hide(this.domNode);var t=this.isValid(e);return t||this.displayMessage(this.invalidMessage),t},isValid:function(e){return this.validator()},getErrorMessage:function(e){return this.invalidMessage},displayMessage:function(e){f.hide(this.domNode),e&&f.show(e,this.domNode,this.tooltipPosition)},onAfterAddOptionItem:function(e,t){},_addOptionItem:function(e){var t;this.dropDown?(t=new w({option:e,parent:this.dropDownMenu}),this.dropDownMenu.addChild(t)):(t=new k({option:e,parent:this,disabled:this.disabled,readOnly:this.readOnly}),this.wrapperDiv.appendChild(t.domNode)),this.onAfterAddOptionItem(t,e)},_refreshState:function(){this.validate(this.focused)},onChange:function(e){this._refreshState()},reset:function(){this.inherited(arguments),f.hide(this.domNode)},_updateSelection:function(){this.inherited(arguments),this._handleOnChange(this.value),a.forEach(this._getChildren(),function(e){e._updateBox()}),n.empty(this.containerNode);var e=this;if(a.forEach(this.value,function(t){var a=n.create("option",{value:t,label:t,selected:"selected"});n.place(a,e.containerNode)}),this.dropDown&&this.dropDownButton){var i=0,r="";a.forEach(this.options,function(e){e.selected&&(i++,r=e.label)}),this.dropDownButton.set("label",this.multiple?t.replace(this._nlsResources.multiSelectLabelText,{num:i}):r)}},_getChildren:function(){return this.dropDown?this.dropDownMenu.getChildren():a.map(this.wrapperDiv.childNodes,function(e){return m.byNode(e)})},invertSelection:function(e){this.multiple&&(a.forEach(this.options,function(e){e.selected=!e.selected}),this._updateSelection())},_setDisabledAttr:function(e){this.inherited(arguments),this.dropDown&&this.dropDownButton.set("disabled",e),a.forEach(this._getChildren(),function(t){t&&t.set&&t.set("disabled",e)})},_setReadOnlyAttr:function(e){this.inherited(arguments),"readOnly"in this.attributeMap&&this[this.attributeMap.readOnly].setAttribute("readonly",e),this.readOnly=e,a.forEach(this._getChildren(),function(t){t&&t.set&&t.set("readOnly",e)})},uninitialize:function(){f.hide(this.domNode),a.forEach(this._getChildren(),function(e){e.destroyRecursive()}),this.inherited(arguments)}});return j});//# sourceMappingURL=CheckedMultiSelect.js.map