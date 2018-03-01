//>>built
define("dojox/editor/plugins/CollapsibleToolbar",["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dijit/form/Button","dijit/focus","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/CollapsibleToolbar"],function(e,t,a,i,r,o){var n=e.declare("dojox.editor.plugins._CollapsibleToolbarButton",[i,r],{templateString:"<div tabindex='0' role='button' title='${title}' class='${buttonClass}' dojoAttachEvent='ondijitclick: onClick'><span class='${textClass}'>${text}</span></div>",title:"",buttonClass:"",text:"",textClass:"",onClick:function(e){}}),d=e.declare("dojox.editor.plugins.CollapsibleToolbar",o,{_myWidgets:null,setEditor:function(e){this.editor=e,this._constructContainer()},_constructContainer:function(){var t=e.i18n.getLocalization("dojox.editor.plugins","CollapsibleToolbar");this._myWidgets=[];var a=e.create("table",{style:{width:"100%"},tabindex:-1,class:"dojoxCollapsibleToolbarContainer"}),i=e.create("tbody",{tabindex:-1},a),r=e.create("tr",{tabindex:-1},i),o=e.create("td",{class:"dojoxCollapsibleToolbarControl",tabindex:-1},r),d=e.create("td",{class:"dojoxCollapsibleToolbarControl",tabindex:-1},r),s=e.create("td",{style:{width:"100%"},tabindex:-1},r),l=e.create("span",{style:{width:"100%"},tabindex:-1},s),m=new n({buttonClass:"dojoxCollapsibleToolbarCollapse",title:t.collapse,text:"-",textClass:"dojoxCollapsibleToolbarCollapseText"});e.place(m.domNode,o);var u=new n({buttonClass:"dojoxCollapsibleToolbarExpand",title:t.expand,text:"+",textClass:"dojoxCollapsibleToolbarExpandText"});e.place(u.domNode,d),this._myWidgets.push(m),this._myWidgets.push(u),e.style(d,"display","none"),e.place(a,this.editor.toolbar.domNode,"after"),e.place(this.editor.toolbar.domNode,l),this.openTd=o,this.closeTd=d,this.menu=l,this.connect(m,"onClick","_onClose"),this.connect(u,"onClick","_onOpen")},_onClose:function(a){a&&e.stopEvent(a);var i=e.marginBox(this.editor.domNode);e.style(this.openTd,"display","none"),e.style(this.closeTd,"display",""),e.style(this.menu,"display","none"),this.editor.resize({h:i.h}),e.isIE&&(this.editor.header.className=this.editor.header.className,this.editor.footer.className=this.editor.footer.className),t.focus(this.closeTd.firstChild)},_onOpen:function(a){a&&e.stopEvent(a);var i=e.marginBox(this.editor.domNode);e.style(this.closeTd,"display","none"),e.style(this.openTd,"display",""),e.style(this.menu,"display",""),this.editor.resize({h:i.h}),e.isIE&&(this.editor.header.className=this.editor.header.className,this.editor.footer.className=this.editor.footer.className),t.focus(this.openTd.firstChild)},destroy:function(){if(this.inherited(arguments),this._myWidgets){for(;this._myWidgets.length;)this._myWidgets.pop().destroy();delete this._myWidgets}}});return d._CollapsibleToolbarButton=n,e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){"collapsibletoolbar"===e.args.name.toLowerCase()&&(e.plugin=new d({}))}}),d});//# sourceMappingURL=CollapsibleToolbar.js.map