//>>built
define("dojox/mobile/bidi/Heading",["dojo/_base/declare","./common"],function(e,t){return e(null,{_setLabelAttr:function(e){this.inherited(arguments),"rtl"===this.getTextDir(e)&&(this.domNode.style.direction="rtl"),this.labelDivNode.innerHTML=t.enforceTextDirWithUcc(this.labelDivNode.innerHTML,this.textDir)},_setBackAttr:function(e){this.inherited(arguments),this.backButton.labelNode.innerHTML=t.enforceTextDirWithUcc(this.backButton.labelNode.innerHTML,this.textDir),this.labelNode.innerHTML=this.labelDivNode.innerHTML},_setTextDirAttr:function(e){this._created&&this.textDir==e||(this._set("textDir",e),"rtl"===this.getTextDir(this.labelDivNode.innerHTML)&&(this.domNode.style.direction="rtl"),this.labelDivNode.innerHTML=t.enforceTextDirWithUcc(t.removeUCCFromText(this.labelDivNode.innerHTML),this.textDir),t.setTextDirForButtons(this))}})});//# sourceMappingURL=Heading.js.map