//>>built
define("dojox/mobile/bidi/Badge",["dojo/_base/declare","./common"],function(e,t){return e(null,{textDir:"",setValue:function(e){this.domNode.firstChild.innerHTML=t.enforceTextDirWithUcc(e,this.textDir)},setTextDir:function(e){this.textDir!==e&&(this.textDir=e,this.domNode.firstChild.innerHTML=t.enforceTextDirWithUcc(t.removeUCCFromText(this.domNode.firstChild.innerHTML),this.textDir))}})});//# sourceMappingURL=Badge.js.map