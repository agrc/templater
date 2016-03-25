//>>built
define("dojox/editor/plugins/Save",["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Save"],function(e,t,i,a){var r=e.declare("dojox.editor.plugins.Save",a,{iconClassPrefix:"dijitAdditionalEditorIcon",url:"",logResults:!0,_initButton:function(){var i=e.i18n.getLocalization("dojox.editor.plugins","Save");this.button=new t.form.Button({label:i.save,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Save",tabIndex:"-1",onClick:e.hitch(this,"_save")})},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(e){this.editor=e,this._initButton()},_save:function(){var e=this.editor.get("value");this.save(e)},save:function(t){var i={"Content-Type":"text/html"};if(this.url){var a={url:this.url,postData:t,headers:i,handleAs:"text"};this.button.set("disabled",!0);var r=e.xhrPost(a);r.addCallback(e.hitch(this,this.onSuccess)),r.addErrback(e.hitch(this,this.onError))}},onSuccess:function(e,t){this.button.set("disabled",!1),this.logResults},onError:function(e,t){this.button.set("disabled",!1),this.logResults}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"save"===t&&(e.plugin=new r({url:"url"in e.args?e.args.url:"",logResults:"logResults"in e.args?e.args.logResults:!0}))}}),r});//# sourceMappingURL=Save.js.map