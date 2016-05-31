//>>built
define("dijit/_editor/plugins/FontChoice",["require","dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/i18n","dojo/_base/lang","dojo/store/Memory","../../registry","../../_Widget","../../_TemplatedMixin","../../_WidgetsInTemplateMixin","../../form/FilteringSelect","../_Plugin","../range","dojo/i18n!../nls/FontChoice"],function(e,t,i,n,o,r,a,s,l,d,c,u,f,h){var p=i("dijit._editor.plugins._FontDropDown",[l,d,c],{label:"",plainText:!1,templateString:"<span style='white-space: nowrap' class='dijit dijitReset dijitInline'><label class='dijitLeft dijitInline' for='${selectId}'>${label}</label><input data-dojo-type='../../form/FilteringSelect' required='false' data-dojo-props='labelType:\"html\", labelAttr:\"label\", searchAttr:\"name\"' class='${comboClass}' tabIndex='-1' id='${selectId}' data-dojo-attach-point='select' value=''/></span>",contextRequire:e,postMixInProperties:function(){this.inherited(arguments),this.strings=o.getLocalization("dijit._editor","FontChoice"),this.label=this.strings[this.command],this.id=s.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.selectId=this.id+"_select",this.inherited(arguments)},postCreate:function(){this.select.set("store",new a({idProperty:"value",data:t.map(this.values,function(e){var t=this.strings[e]||e;return{label:this.getLabel(e,t),name:t,value:e}},this)})),this.select.set("value","",!1),this.disabled=this.select.get("disabled")},_setValueAttr:function(e,i){i=i!==!1,this.select.set("value",t.indexOf(this.values,e)<0?"":e,i),i||(this.select._lastValueReported=null)},_getValueAttr:function(){return this.select.get("value")},focus:function(){this.select.focus()},_setDisabledAttr:function(e){this._set("disabled",e),this.select.set("disabled",e)}}),m=i("dijit._editor.plugins._FontNameDropDown",p,{generic:!1,command:"fontName",comboClass:"dijitFontNameCombo",postMixInProperties:function(){this.values||(this.values=this.generic?["serif","sans-serif","monospace","cursive","fantasy"]:["Arial","Times New Roman","Comic Sans MS","Courier New"]),this.inherited(arguments)},getLabel:function(e,t){return this.plainText?t:"<div style='font-family: "+e+"'>"+t+"</div>"},_setValueAttr:function(e,t){if(t=t!==!1,this.generic){var i={Arial:"sans-serif",Helvetica:"sans-serif",Myriad:"sans-serif",Times:"serif","Times New Roman":"serif","Comic Sans MS":"cursive","Apple Chancery":"cursive",Courier:"monospace","Courier New":"monospace",Papyrus:"fantasy","Estrangelo Edessa":"cursive",Gabriola:"fantasy"};e=i[e]||e}this.inherited(arguments,[e,t])}}),g=i("dijit._editor.plugins._FontSizeDropDown",p,{command:"fontSize",comboClass:"dijitFontSizeCombo",values:[1,2,3,4,5,6,7],getLabel:function(e,t){return this.plainText?t:"<font size="+e+"'>"+t+"</font>"},_setValueAttr:function(e,t){if(t=t!==!1,e.indexOf&&-1!=e.indexOf("px")){var i=parseInt(e,10);e={10:1,13:2,16:3,18:4,24:5,32:6,48:7}[i]||e}this.inherited(arguments,[e,t])}}),v=i("dijit._editor.plugins._FormatBlockDropDown",p,{command:"formatBlock",comboClass:"dijitFormatBlockCombo",values:["noFormat","p","h1","h2","h3","pre"],postCreate:function(){this.inherited(arguments),this.set("value","noFormat",!1)},getLabel:function(e,t){return this.plainText||"noFormat"==e?t:"<"+e+">"+t+"</"+e+">"},_execCommand:function(e,i,n){if("noFormat"===n){var o,a,s=h.getSelection(e.window);if(s&&s.rangeCount>0){var l,d,c=s.getRangeAt(0);if(c){for(o=c.startContainer,a=c.endContainer;o&&o!==e.editNode&&o!==e.document.body&&1!==o.nodeType;)o=o.parentNode;for(;a&&a!==e.editNode&&a!==e.document.body&&1!==a.nodeType;)a=a.parentNode;var u=r.hitch(this,function(i,n){if(i.childNodes&&i.childNodes.length){var o;for(o=0;o<i.childNodes.length;o++){var r=i.childNodes[o];if(1==r.nodeType&&e.selection.inSelection(r)){var a=r.tagName?r.tagName.toLowerCase():"";-1!==t.indexOf(this.values,a)&&n.push(r),u(r,n)}}}}),f=r.hitch(this,function(t){if(t&&t.length){for(e.beginEditing();t.length;)this._removeFormat(e,t.pop());e.endEditing()}}),p=[];if(o==a){var m;for(l=o;l&&l!==e.editNode&&l!==e.document.body;){if(1==l.nodeType&&(d=l.tagName?l.tagName.toLowerCase():"",-1!==t.indexOf(this.values,d))){m=l;break}l=l.parentNode}u(o,p),m&&(p=[m].concat(p)),f(p)}else{for(l=o;e.selection.inSelection(l);)1==l.nodeType&&(d=l.tagName?l.tagName.toLowerCase():"",-1!==t.indexOf(this.values,d)&&p.push(l),u(l,p)),l=l.nextSibling;f(p)}e.onDisplayChanged()}}}else e.execCommand(i,n)},_removeFormat:function(e,t){if(e.customUndo){for(;t.firstChild;)n.place(t.firstChild,t,"before");t.parentNode.removeChild(t)}else{e.selection.selectElementChildren(t);var i=e.selection.getSelectedHtml();e.selection.selectElement(t),e.execCommand("inserthtml",i||"")}}}),b=i("dijit._editor.plugins.FontChoice",f,{useDefaultCommand:!1,_initButton:function(){var e={fontName:m,fontSize:g,formatBlock:v}[this.command],t=this.params;this.params.custom&&(t.values=this.params.custom);var i=this.editor;this.button=new e(r.delegate({dir:i.dir,lang:i.lang},t)),this.own(this.button.select.on("change",r.hitch(this,function(e){this.editor.focused&&this.editor.focus(),"fontName"==this.command&&-1!=e.indexOf(" ")&&(e="'"+e+"'"),this.button._execCommand?this.button._execCommand(this.editor,this.command,e):this.editor.execCommand(this.command,e)})))},updateState:function(){var e=this.editor,i=this.command;if(e&&e.isLoaded&&i.length&&this.button){var n=this.get("disabled");if(this.button.set("disabled",n),n)return;var o;try{o=e.queryCommandValue(i)||""}catch(a){o=""}var s=r.isString(o)&&(o.match(/'([^']*)'/)||o.match(/"([^"]*)"/));if(s&&(o=s[1]),"formatBlock"===i)if(o&&"p"!=o)t.indexOf(this.button.values,o)<0&&(o="noFormat");else{o=null;var l,d=h.getSelection(this.editor.window);if(d&&d.rangeCount>0){var c=d.getRangeAt(0);c&&(l=c.endContainer)}for(;l&&l!==e.editNode&&l!==e.document;){var u=l.tagName?l.tagName.toLowerCase():"";if(u&&t.indexOf(this.button.values,u)>-1){o=u;break}l=l.parentNode}o||(o="noFormat")}o!==this.button.get("value")&&this.button.set("value",o,!1)}}});return t.forEach(["fontName","fontSize","formatBlock"],function(e){f.registry[e]=function(t){return new b({command:e,plainText:t.plainText})}}),b._FontDropDown=p,b._FontNameDropDown=m,b._FontSizeDropDown=g,b._FormatBlockDropDown=v,b});//# sourceMappingURL=FontChoice.js.map