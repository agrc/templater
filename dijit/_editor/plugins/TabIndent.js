//>>built
define("dijit/_editor/plugins/TabIndent",["dojo/_base/declare","dojo/_base/kernel","../_Plugin","../../form/ToggleButton"],function(e,t,i,o){t.experimental("dijit._editor.plugins.TabIndent");var n=e("dijit._editor.plugins.TabIndent",i,{useDefaultCommand:!1,buttonClass:o,command:"tabIndent",_initButton:function(){this.inherited(arguments);var e=this.editor;this.own(this.button.on("change",function(t){e.set("isTabIndent",t)})),this.updateState()},updateState:function(){var e=this.get("disabled");this.button.set("disabled",e),e||this.button.set("checked",this.editor.isTabIndent,!1)}});return i.registry.tabIndent=function(){return new n({command:"tabIndent"})},n});//# sourceMappingURL=TabIndent.js.map