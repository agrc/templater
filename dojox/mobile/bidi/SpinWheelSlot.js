//>>built
define("dojox/mobile/bidi/SpinWheelSlot",["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/dom-construct","./common"],function(e,t,i,a,r){return e(null,{postCreate:function(){this.inherited(arguments),!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},_setTextDirAttr:function(e){!e||this._created&&this.textDir===e||(this.textDir=e,this._setTextDirToNodes(this.textDir))},_setTextDirToNodes:function(e){i.forEach(this.panelNodes,function(e){i.forEach(e.childNodes,function(e,t){e.innerHTML=r.removeUCCFromText(e.innerHTML),e.innerHTML=r.enforceTextDirWithUcc(e.innerHTML,this.textDir),e.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left"},this)},this)}})});//# sourceMappingURL=SpinWheelSlot.js.map