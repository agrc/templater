//>>built
define("dojox/mobile/bidi/CarouselItem",["dojo/_base/declare","./common"],function(e,t){return e(null,{_setHeaderTextAttr:function(e){this._set("headerText",e),this.headerTextNode.innerHTML=this._cv?this._cv(e):e;var i=this.getParent()?this.getParent().getParent():null;this.textDir=this.textDir?this.textDir:i?i.get("textDir"):"",this.textDir&&(this.headerTextNode.innerHTML=t.enforceTextDirWithUcc(this.headerTextNode.innerHTML,this.textDir))},_setFooterTextAttr:function(e){this._set("footerText",e),this.footerTextNode.innerHTML=this._cv?this._cv(e):e;var t=this.getParent()?this.getParent().getParent():null;this.textDir=this.textDir?this.textDir:t?t.get("textDir"):"",this.textDir&&(this.footerTextNode.innerHTML=_BidiSupport.enforceTextDirWithUcc(this.footerTextNode.innerHTML,this.textDir))}})});//# sourceMappingURL=CarouselItem.js.map