//>>built
define("dojox/editor/plugins/AutoSave",["dojo","dijit","dojox","dijit/_base/manager","dijit/_base/popup","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","dijit/MenuItem","dijit/Menu","dijit/form/Button","dijit/form/ComboButton","dijit/form/ComboBox","dijit/form/_TextBoxMixin","dijit/form/TextBox","dijit/TooltipDialog","dijit/_editor/_Plugin","dojo/_base/connect","dojo/_base/declare","dojo/date/locale","dojo/i18n","dojo/string","dojox/editor/plugins/Save","dojo/i18n!dojox/editor/plugins/nls/AutoSave"],function(e,t,a,i,r,n,o,d,s,l,m,h,u,c,f,y,v,p,g,M,b,k,w,x){e.experimental("dojox.editor.plugins.AutoSave");var j=e.declare("dojox.editor.plugins._AutoSaveSettingDialog",[n,o,d],{dialogTitle:"",dialogDescription:"",paramName:"",paramLabel:"",btnOk:"",btnCancel:"",widgetsInTemplate:!0,templateString:"<span id='${dialogId}' class='dijit dijitReset dijitInline' tabindex='-1'><div dojoType='dijit.Dialog' title='${dialogTitle}' dojoAttachPoint='dialog' class='dijitEditorAutoSaveSettingDialog'><div tabindex='-1'>${dialogDescription}</div><div tabindex='-1' class='dijitEditorAutoSaveSettingInputArea'>${paramName}</div><div class='dijitEditorAutoSaveSettingInputArea' tabindex='-1'><input class='textBox' dojoType='dijit.form.TextBox' id='${textBoxId}' required='false' intermediateChanges='true' selectOnClick='true' required='true' dojoAttachPoint='intBox' dojoAttachEvent='onKeyDown: _onKeyDown, onChange: _onChange'/><label class='dijitLeft dijitInline boxLabel' for='${textBoxId}' tabindex='-1'>${paramLabel}</label></div><div class='dijitEditorAutoSaveSettingButtonArea' tabindex='-1'><button dojoType='dijit.form.Button' dojoAttachEvent='onClick: onOk'>${btnOk}</button><button dojoType='dijit.form.Button' dojoAttachEvent='onClick: onCancel'>${btnCancel}</button></div></div></span>",postMixInProperties:function(){this.id=t.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.dialogId=this.id+"_dialog",this.textBoxId=this.id+"_textBox"},show:function(){""==this._value?(this._value=0,this.intBox.set("value",0)):this.intBox.set("value",this._value),this.dialog.show(),t.selectInputText(this.intBox.focusNode)},hide:function(){this.dialog.hide()},onOk:function(){this.dialog.hide()},onCancel:function(){this.dialog.hide()},_onKeyDown:function(t){t.keyCode==e.keys.ENTER&&this.onOk()},_onChange:function(e){this._isValidValue(e)?this._value=e:this.intBox.set("value",this._value)},_setValueAttr:function(e){this._isValidValue(e)&&(this._value=e)},_getValueAttr:function(){return this._value},_isValidValue:function(e){var t=/^\d{0,3}$/,a=String(e);return Boolean(a.match?a.match(t):"")}}),F=e.declare("dojox.editor.plugins.AutoSave",x,{url:"",logResults:!0,interval:0,_iconClassPrefix:"dijitEditorIconAutoSave",_MIN:6e4,_setIntervalAttr:function(e){this.interval=e},_getIntervalAttr:function(){return this._interval},setEditor:function(a){this.editor=a,this._strings=e.i18n.getLocalization("dojox.editor.plugins","AutoSave"),this._initButton(),this._saveSettingDialog=new j({dialogTitle:this._strings.saveSettingdialogTitle,dialogDescription:this._strings.saveSettingdialogDescription,paramName:this._strings.saveSettingdialogParamName,paramLabel:this._strings.saveSettingdialogParamLabel,btnOk:this._strings.saveSettingdialogButtonOk,btnCancel:this._strings.saveSettingdialogButtonCancel}),this.connect(this._saveSettingDialog,"onOk","_onDialogOk");var i=this._promDialog=new t.TooltipDialog;i.startup(),i.set("content","")},_initButton:function(){var a=new t.Menu({style:"display: none"}),i=new t.MenuItem({iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,label:this._strings.saveLabel}),r=this._menuItemAutoSave=new t.MenuItem({iconClass:this._iconClassPrefix+"Setting "+this._iconClassPrefix,label:this._strings.saveSettingLabelOn});a.addChild(i),a.addChild(r),this.button=new t.form.ComboButton({label:this._strings.saveLabel,iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,showLabel:!1,dropDown:a}),this.connect(this.button,"onClick","_save"),this.connect(i,"onClick","_save"),this._menuItemAutoSaveClickHandler=e.connect(r,"onClick",this,"_showAutSaveSettingDialog")},_showAutSaveSettingDialog:function(){var e=this._saveSettingDialog;e.set("value",this.interval),e.show()},_onDialogOk:function(){var t=this.interval=this._saveSettingDialog.get("value")*this._MIN;t>0&&(this._setSaveInterval(t),e.disconnect(this._menuItemAutoSaveClickHandler),this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOff),this._menuItemAutoSaveClickHandler=e.connect(this._menuItemAutoSave,"onClick",this,"_onStopClick"),this.button.set("iconClass",this._iconClassPrefix+"Setting "+this._iconClassPrefix))},_onStopClick:function(){this._clearSaveInterval(),e.disconnect(this._menuItemAutoSaveClickHandler),this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOn),this._menuItemAutoSaveClickHandler=e.connect(this._menuItemAutoSave,"onClick",this,"_showAutSaveSettingDialog"),this.button.set("iconClass",this._iconClassPrefix+"Default "+this._iconClassPrefix)},_setSaveInterval:function(t){t<=0||(this._clearSaveInterval(),this._intervalHandler=setInterval(e.hitch(this,function(){this._isWorking||this.get("disabled")||(this._isWorking=!0,this._save())}),t))},_clearSaveInterval:function(){this._intervalHandler&&(clearInterval(this._intervalHandler),this._intervalHandler=null)},onSuccess:function(a,i){this.button.set("disabled",!1),this._promDialog.set("content",e.string.substitute(this._strings.saveMessageSuccess,{0:e.date.locale.format(new Date,{selector:"time"})})),t.popup.open({popup:this._promDialog,around:this.button.domNode}),this._promDialogTimeout=setTimeout(e.hitch(this,function(){clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,t.popup.close(this._promDialog)}),3e3),this._isWorking=!1,this.logResults},onError:function(a,i){this.button.set("disabled",!1),this._promDialog.set("content",e.string.substitute(this._strings.saveMessageFail,{0:e.date.locale.format(new Date,{selector:"time"})})),t.popup.open({popup:this._promDialog,around:this.button.domNode}),this._promDialogTimeout=setTimeout(e.hitch(this,function(){clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,t.popup.close(this._promDialog)}),3e3),this._isWorking=!1,this.logResults},destroy:function(){this.inherited(arguments),this._menuItemAutoSave=null,this._promDialogTimeout&&(clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,t.popup.close(this._promDialog)),this._clearSaveInterval(),this._saveSettingDialog&&(this._saveSettingDialog.destroyRecursive(),this._destroyRecursive=null),this._menuItemAutoSaveClickHandler&&(e.disconnect(this._menuItemAutoSaveClickHandler),this._menuItemAutoSaveClickHandler=null)}});return F._AutoSaveSettingDialog=j,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){"autosave"==e.args.name.toLowerCase()&&(e.plugin=new F({url:"url"in e.args?e.args.url:"",logResults:!("logResults"in e.args)||e.args.logResults,interval:"interval"in e.args?e.args.interval:5}))}}),F});//# sourceMappingURL=AutoSave.js.map