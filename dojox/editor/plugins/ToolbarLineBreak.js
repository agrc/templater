//>>built
define("dojox/editor/plugins/ToolbarLineBreak",["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dojo/_base/declare"],function(e,t,i,a,r,n,o){var s=o("dojox.editor.plugins.ToolbarLineBreak",[a,r],{templateString:"<span class='dijit dijitReset'><br></span>",postCreate:function(){e.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"||"!==t&&"toolbarlinebreak"!==t||(e.plugin=new n({button:new s,setEditor:function(e){this.editor=e}}))}}),s});//# sourceMappingURL=ToolbarLineBreak.js.map