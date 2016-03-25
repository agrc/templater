//>>built
define("dojox/mobile/bidi/ListItem",["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./common","dojo/_base/window"],function(e,t,i,a,o){return e(null,{_applyAttributes:function(){!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&(this.textDir=this.getParent().get("textDir")),this.inherited(arguments),this.textDir&&this._applyTextDirToTextElements()},_setRightTextAttr:function(e){this.templateString||this.rightTextNode||(this.rightTextNode=i.create("div",{className:"mblListItemRightText"},this.labelNode,"before")),this.rightTextNode&&(this.rightText=e,this.rightTextNode.innerHTML=this._cv?this._cv(e):e,this.textDir&&(this.rightTextNode.innerHTML=a.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir)))},_setLabelAttr:function(e){this.inherited("_setLabelAttr",arguments),this.labelNode.innerHTML=a.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir)},_applyTextDirToTextElements:function(){if(this.labelNode.innerHTML)return this.labelNode.innerHTML=a.removeUCCFromText(this.labelNode.innerHTML),this.labelNode.innerHTML=a.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir),void(this.labelNode.style.cssText="text-align: start");var e=0;t.forEach(this.domNode.childNodes,function(t){var r;if(0===e){if(3===t.nodeType&&(t.nodeValue===a.MARK.RLE||t.nodeValue===a.MARK.LRE))return t.nodeValue=t.nodeValue===a.MARK.RLE?a.MARK.LRE:a.MARK.RLE,void(e=2);var n=1===t.nodeType&&1===t.childNodes.length?t.firstChild:t;3===n.nodeType&&n.nodeValue&&-1!=n.nodeValue.search(/[.\S]/)&&(e=1,r=o.doc.createTextNode("rtl"===this.getTextDir(n.nodeValue).toLowerCase()?a.MARK.RLE:a.MARK.LRE),i.place(r,t,"before"))}else 1===e&&"div"===t.nodeName.toLowerCase()&&(e=2,r=o.doc.createTextNode(a.MARK.PDF),i.place(r,t,"before"))},this)},_setTextDirAttr:function(e){e&&this.textDir!==e&&(this.textDir=e,this._applyTextDirToTextElements(),this.rightTextNode&&(this.rightTextNode.innerHTML=a.removeUCCFromText(this.rightTextNode.innerHTML),this.rightTextNode.innerHTML=a.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir)))}})});//# sourceMappingURL=ListItem.js.map