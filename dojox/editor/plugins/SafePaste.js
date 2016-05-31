//>>built
define("dojox/editor/plugins/SafePaste",["dojo","dijit","dojox","dojox/editor/plugins/PasteFromWord","dijit/Dialog","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/SafePaste","dojo/i18n!dijit/nls/common","dojo/i18n!dijit/_editor/nls/commands"],function(e,t,a,i){var r=e.declare("dojox.editor.plugins.SafePaste",[i],{_initButton:function(){this._filters=this._filters.slice(0);var a=e.i18n.getLocalization("dojox.editor.plugins","SafePaste");e.mixin(a,e.i18n.getLocalization("dijit","common")),e.mixin(a,e.i18n.getLocalization("dijit._editor","commands")),this._uId=t.getUniqueId(this.editor.id),a.uId=this._uId,a.width=this.width||"400px",a.height=this.height||"300px",this._dialog=new t.Dialog({title:a.paste}).placeAt(e.body()),this._dialog.set("content",e.string.substitute(this._template,a)),e.style(e.byId(this._uId+"_rte"),"opacity",.001),this.connect(t.byId(this._uId+"_paste"),"onClick","_paste"),this.connect(t.byId(this._uId+"_cancel"),"onClick","_cancel"),this.connect(this._dialog,"onHide","_clearDialog"),e.forEach(this.stripTags,function(e){var t=e+"",a=new RegExp("<\\s*"+t+"[^>]*>","igm"),i=new RegExp("<\\\\?\\/\\s*"+t+"\\s*>","igm");this._filters.push({regexp:a,handler:""}),this._filters.push({regexp:i,handler:""})},this)},updateState:function(){},setEditor:function(t){this.editor=t,this._initButton(),this.editor.onLoadDeferred.addCallback(e.hitch(this,function(){var t=e.hitch(this,function(t){return t&&e.stopEvent(t),this._openDialog(),!0});this.connect(this.editor.editNode,"onpaste",t),this.editor._pasteImpl=t}))}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"safepaste"===t&&(e.plugin=new r({width:e.args.hasOwnProperty("width")?e.args.width:"400px",height:e.args.hasOwnProperty("height")?e.args.width:"300px",stripTags:e.args.hasOwnProperty("stripTags")?e.args.stripTags:null}))}}),r});//# sourceMappingURL=SafePaste.js.map