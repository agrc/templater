//>>built
define("dojox/editor/plugins/PasteFromWord",["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_base/manager","dijit/_editor/RichText","dijit/form/Button","dijit/Dialog","dojox/html/format","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/PasteFromWord","dojo/i18n!dijit/nls/common","dojo/i18n!dijit/_editor/nls/commands"],function(e,t,i,a){var r=e.declare("dojox.editor.plugins.PasteFromWord",a,{iconClassPrefix:"dijitAdditionalEditorIcon",width:"400px",height:"300px",_template:["<div class='dijitPasteFromWordEmbeddedRTE'>","<div style='width: ${width}; padding-top: 5px; padding-bottom: 5px;'>${instructions}</div>","<div id='${uId}_rte' style='width: ${width}; height: ${height}'></div>","<table style='width: ${width}' tabindex='-1'>","<tbody>","<tr>","<td align='center'>","<button type='button' dojoType='dijit.form.Button' id='${uId}_paste'>${paste}</button>","&nbsp;","<button type='button' dojoType='dijit.form.Button' id='${uId}_cancel'>${buttonCancel}</button>","</td>","</tr>","</tbody>","</table>","</div>"].join(""),_filters:[{regexp:/(<meta\s*[^>]*\s*>)|(<\s*link\s* href="file:[^>]*\s*>)|(<\/?\s*\w+:[^>]*\s*>)/gi,handler:""},{regexp:/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,handler:""},{regexp:/(class="Mso[^"]*")|(<!--(.|\s){1,}?-->)/gi,handler:""},{regexp:/(<p[^>]*>\s*(\&nbsp;|\u00A0)*\s*<\/p[^>]*>)|(<p[^>]*>\s*<font[^>]*>\s*(\&nbsp;|\u00A0)*\s*<\/\s*font\s*>\s<\/p[^>]*>)/gi,handler:""},{regexp:/(style="[^"]*mso-[^;][^"]*")|(style="margin:\s*[^;"]*;")/gi,handler:""},{regexp:/(<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>)|(<\s*script\b([^<>]|\s)*>?)|(<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>)/gi,handler:""},{regexp:/<(\/?)o\:p[^>]*>/gi,handler:""}],_initButton:function(){this._filters=this._filters.slice(0);var i=e.i18n.getLocalization("dojox.editor.plugins","PasteFromWord");e.mixin(i,e.i18n.getLocalization("dijit","common")),e.mixin(i,e.i18n.getLocalization("dijit._editor","commands")),this.button=new t.form.Button({label:i.pasteFromWord,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"PasteFromWord",tabIndex:"-1",onClick:e.hitch(this,"_openDialog")}),this._uId=t.getUniqueId(this.editor.id),i.uId=this._uId,i.width=this.width||"400px",i.height=this.height||"300px",this._dialog=new t.Dialog({title:i.pasteFromWord}).placeAt(e.body()),this._dialog.set("content",e.string.substitute(this._template,i)),e.style(e.byId(this._uId+"_rte"),"opacity",.001),this.connect(t.byId(this._uId+"_paste"),"onClick","_paste"),this.connect(t.byId(this._uId+"_cancel"),"onClick","_cancel"),this.connect(this._dialog,"onHide","_clearDialog")},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(e){this.editor=e,this._initButton()},_openDialog:function(){this._dialog.show(),this._rte||setTimeout(e.hitch(this,function(){this._rte=new t._editor.RichText({height:this.height||"300px"},this._uId+"_rte"),this._rte.startup(),this._rte.onLoadDeferred.addCallback(e.hitch(this,function(){e.animateProperty({node:this._rte.domNode,properties:{opacity:{start:.001,end:1}}}).play()}))}),100)},_paste:function(){var e=i.html.format.prettyPrint(this._rte.get("value"));this._dialog.hide();var t;for(t=0;t<this._filters.length;t++){var a=this._filters[t];e=e.replace(a.regexp,a.handler)}e=i.html.format.prettyPrint(e),this.editor.focus(),this.editor.execCommand("inserthtml",e)},_cancel:function(){this._dialog.hide()},_clearDialog:function(){this._rte.set("value","")},destroy:function(){this._rte&&this._rte.destroy(),this._dialog&&this._dialog.destroyRecursive(),delete this._dialog,delete this._rte,this.inherited(arguments)}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){"pastefromword"===e.args.name.toLowerCase()&&(e.plugin=new r({width:"width"in e.args?e.args.width:"400px",height:"height"in e.args?e.args.width:"300px"}))}}),r});//# sourceMappingURL=PasteFromWord.js.map