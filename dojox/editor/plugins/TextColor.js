//>>built
define("dojox/editor/plugins/TextColor",["dojo","dijit","dojox","dijit/_base/popup","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_editor/_Plugin","dijit/TooltipDialog","dijit/form/Button","dijit/form/DropDownButton","dojox/widget/ColorPicker","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/TextColor"],function(e,t,a,i,r,o,n,d){e.experimental("dojox.editor.plugins.TextColor");var s=e.declare("dojox.editor.plugins._TextColorDropDown",[r,o,n],{templateString:"<div style='display: none; position: absolute; top: -10000; z-index: -10000'><div dojoType='dijit.TooltipDialog' dojoAttachPoint='dialog' class='dojoxEditorColorPicker'><div dojoType='dojox.widget.ColorPicker' dojoAttachPoint='_colorPicker'></div><br><center><button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_setButton'>${setButtonText}</button>&nbsp;<button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_cancelButton'>${cancelButtonText}</button></center></div></div>",widgetsInTemplate:!0,constructor:function(){var t=e.i18n.getLocalization("dojox.editor.plugins","TextColor");e.mixin(this,t)},startup:function(){this._started||(this.inherited(arguments),this.connect(this._setButton,"onClick",e.hitch(this,function(){this.onChange(this.get("value"))})),this.connect(this._cancelButton,"onClick",e.hitch(this,function(){t.popup.close(this.dialog),this.onCancel()})),e.style(this.domNode,"display","block"))},_setValueAttr:function(e,t){this._colorPicker.set("value",e,t)},_getValueAttr:function(){return this._colorPicker.get("value")},onChange:function(e){},onCancel:function(){}}),l=e.declare("dojox.editor.plugins.TextColor",d,{buttonClass:t.form.DropDownButton,useDefaultCommand:!1,constructor:function(){this._picker=new s,e.body().appendChild(this._picker.domNode),this._picker.startup(),this.dropDown=this._picker.dialog,this.connect(this._picker,"onChange",function(e){this.editor.execCommand(this.command,e)}),this.connect(this._picker,"onCancel",function(){this.editor.focus()})},updateState:function(){var t=this.editor,a=this.command;if(t&&t.isLoaded&&a.length){var i,r=this.get("disabled");if(this.button){if(this.button.set("disabled",r),r)return;try{i=t.queryCommandValue(a)||""}catch(o){i=""}}""==i&&(i="#000000"),"transparent"==i&&(i="#ffffff"),"string"==typeof i?i.indexOf("rgb")>-1&&(i=e.colorFromRgb(i).toHex()):(i=(255&i)<<16|65280&i|(16711680&i)>>>16,i=i.toString(16),i="#000000".slice(0,7-i.length)+i),i!==this._picker.get("value")&&this._picker.set("value",i,!1)}},destroy:function(){this.inherited(arguments),this._picker.destroyRecursive(),delete this._picker}});return l._TextColorDropDown=s,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin)switch(e.args.name){case"foreColor":case"hiliteColor":e.plugin=new l({command:e.args.name})}}),l});//# sourceMappingURL=TextColor.js.map