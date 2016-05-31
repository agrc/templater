//>>built
define("dojox/editor/plugins/CollapsibleToolbar",["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dijit/form/Button","dijit/focus","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/CollapsibleToolbar"],function(e,t,i,r,a,n){var o=e.declare("dojox.editor.plugins._CollapsibleToolbarButton",[r,a],{templateString:"<div tabindex='0' role='button' title='${title}' class='${buttonClass}' dojoAttachEvent='ondijitclick: onClick'><span class='${textClass}'>${text}</span></div>",title:"",buttonClass:"",text:"",textClass:"",onClick:function(e){}}),s=e.declare("dojox.editor.plugins.CollapsibleToolbar",n,{_myWidgets:null,setEditor:function(e){this.editor=e,this._constructContainer()},_constructContainer:function(){var t=e.i18n.getLocalization("dojox.editor.plugins","CollapsibleToolbar");this._myWidgets=[];var i=e.create("table",{style:{width:"100%"},tabindex:-1,"class":"dojoxCollapsibleToolbarContainer"}),r=e.create("tbody",{tabindex:-1},i),a=e.create("tr",{tabindex:-1},r),n=e.create("td",{"class":"dojoxCollapsibleToolbarControl",tabindex:-1},a),s=e.create("td",{"class":"dojoxCollapsibleToolbarControl",tabindex:-1},a),d=e.create("td",{style:{width:"100%"},tabindex:-1},a),l=e.create("span",{style:{width:"100%"},tabindex:-1},d),u=new o({buttonClass:"dojoxCollapsibleToolbarCollapse",title:t.collapse,text:"-",textClass:"dojoxCollapsibleToolbarCollapseText"});e.place(u.domNode,n);var c=new o({buttonClass:"dojoxCollapsibleToolbarExpand",title:t.expand,text:"+",textClass:"dojoxCollapsibleToolbarExpandText"});e.place(c.domNode,s),this._myWidgets.push(u),this._myWidgets.push(c),e.style(s,"display","none"),e.place(i,this.editor.toolbar.domNode,"after"),e.place(this.editor.toolbar.domNode,l),this.openTd=n,this.closeTd=s,this.menu=l,this.connect(u,"onClick","_onClose"),this.connect(c,"onClick","_onOpen")},_onClose:function(i){i&&e.stopEvent(i);var r=e.marginBox(this.editor.domNode);e.style(this.openTd,"display","none"),e.style(this.closeTd,"display",""),e.style(this.menu,"display","none"),this.editor.resize({h:r.h}),e.isIE&&(this.editor.header.className=this.editor.header.className,this.editor.footer.className=this.editor.footer.className),t.focus(this.closeTd.firstChild)},_onOpen:function(i){i&&e.stopEvent(i);var r=e.marginBox(this.editor.domNode);e.style(this.closeTd,"display","none"),e.style(this.openTd,"display",""),e.style(this.menu,"display",""),this.editor.resize({h:r.h}),e.isIE&&(this.editor.header.className=this.editor.header.className,this.editor.footer.className=this.editor.footer.className),t.focus(this.openTd.firstChild)},destroy:function(){if(this.inherited(arguments),this._myWidgets){for(;this._myWidgets.length;)this._myWidgets.pop().destroy();delete this._myWidgets}}});return s._CollapsibleToolbarButton=o,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"collapsibletoolbar"===t&&(e.plugin=new s({}))}}),s});//# sourceMappingURL=CollapsibleToolbar.js.map