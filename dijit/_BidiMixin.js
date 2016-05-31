//>>built
define("dijit/_BidiMixin",[],function(){var t={LRM:"‎",LRE:"‪",PDF:"‬",RLM:"‏",RLE:"‫"};return{textDir:"",getTextDir:function(t){return"auto"==this.textDir?this._checkContextual(t):this.textDir},_checkContextual:function(t){var e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return e?e[0]<="z"?"ltr":"rtl":this.dir?this.dir:this.isLeftToRight()?"ltr":"rtl"},applyTextDir:function(t,e){if(this.textDir){var i=this.textDir;if("auto"==i){if("undefined"==typeof e){var o=t.tagName.toLowerCase();e="input"==o||"textarea"==o?t.value:t.innerText||t.textContent||""}i=this._checkContextual(e)}t.dir!=i&&(t.dir=i)}},enforceTextDirWithUcc:function(e,i){if(this.textDir){e&&(e.originalText=i);var o="auto"==this.textDir?this._checkContextual(i):this.textDir;return("ltr"==o?t.LRE:t.RLE)+i+t.PDF}return i},restoreOriginalText:function(t){return t.originalText&&(t.text=t.originalText,delete t.originalText),t},_setTextDirAttr:function(t){if(!this._created||this.textDir!=t){this._set("textDir",t);var e=null;this.displayNode?(e=this.displayNode,this.displayNode.align="rtl"==this.dir?"right":"left"):e=this.textDirNode||this.focusNode||this.textbox,e&&this.applyTextDir(e)}}}});//# sourceMappingURL=_BidiMixin.js.map