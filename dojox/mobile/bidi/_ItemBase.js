//>>built
define("dojox/mobile/bidi/_ItemBase",["dojo/_base/declare","./common"],function(e,t){return e(null,{_setLabelAttr:function(e){if(this._set("label",e),this.labelNode.innerHTML=this._cv?this._cv(e):e,!this.textDir){var i=this.getParent();this.textDir=i&&i.get("textDir")?i.get("textDir"):""}this.labelNode.innerHTML=t.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir)},_setTextDirAttr:function(e){this._created&&this.textDir===e||(this._set("textDir",e),this.labelNode.innerHTML=t.enforceTextDirWithUcc(t.removeUCCFromText(this.labelNode.innerHTML),this.textDir),this.badgeObj&&this.badgeObj.setTextDir&&this.badgeObj.setTextDir(e))},getTransOpts:function(){var e=this.inherited(arguments);return this.isLeftToRight()||(e.transitionDir=-1*e.transitionDir),e}})});//# sourceMappingURL=_ItemBase.js.map