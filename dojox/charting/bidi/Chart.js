//>>built
define("dojox/charting/bidi/Chart",["dojox/main","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/_base/array","dojo/sniff","dojo/dom","dojo/dom-construct","dojox/gfx","dojox/gfx/_gfxBidiSupport","../axis2d/common","dojox/string/BidiEngine","dojox/lang/functional","dojo/dom-attr","./_bidiutils"],function(e,t,a,i,r,o,n,d,l,s,m,u,h,f,c){function y(e){return/^(ltr|rtl|auto)$/.test(e)?e:null}var v=new u;a.getObject("charting",!0,e);return t(null,{textDir:"",dir:"",isMirrored:!1,getTextDir:function(e){var t="auto"==this.textDir?v.checkContextual(e):this.textDir;return t||(t=i.get(this.node,"direction")),t},postscript:function(e,t){var a=t&&t.textDir?y(t.textDir):"";a=a?a:i.get(this.node,"direction"),this.textDir=a,this.surface.textDir=a,this.htmlElementsRegistry=[],this.truncatedLabelsRegistry=[];var r="ltr";f.has(e,"direction")&&(r=f.get(e,"direction")),this.setDir(t&&t.dir?t.dir:r)},setTextDir:function(e,t){if(e==this.textDir)return this;if(null!=y(e)){this.textDir=e,this.surface.setTextDir(e),this.truncatedLabelsRegistry&&"auto"==e&&r.forEach(this.truncatedLabelsRegistry,function(e){var t=this.getTextDir(e.label);e.element.textDir!=t&&e.element.setShape({textDir:t})},this);var a=h.keys(this.axes);if(a.length>0){if(r.forEach(a,function(e,t,a){var i=this.axes[e];i.htmlElements[0]&&(i.dirty=!0,i.render(this.dim,this.offsets))},this),this.title){var i="canvas"==l.renderer,n=i||!o("ie")&&!o("opera")?"html":"gfx",s=l.normalizedLength(l.splitFontString(this.titleFont).size);d.destroy(this.chartTitle),this.chartTitle=null,this.chartTitle=m.createText[n](this,this.surface,this.dim.width/2,"top"==this.titlePos?s+this.margins.t:this.dim.height-this.margins.b,"middle",this.title,this.titleFont,this.titleFontColor)}}else r.forEach(this.htmlElementsRegistry,function(t,a,i){var r="auto"==e?this.getTextDir(t[4]):e;t[0].children[0]&&t[0].children[0].dir!=r&&(d.destroy(t[0].children[0]),t[0].children[0]=m.createText.html(this,this.surface,t[1],t[2],t[3],t[4],t[5],t[6]).children[0])},this)}return this},setDir:function(e){return"rtl"!=e&&"ltr"!=e||(this.dir!=e&&(this.isMirrored=!0,this.dirty=!0),this.dir=e),this},isRightToLeft:function(){return"rtl"==this.dir},applyMirroring:function(e,t,a){return c.reverseMatrix(e,t,a,"rtl"==this.dir),i.set(this.node,"direction","ltr"),this},formatTruncatedLabel:function(e,t,a){this.truncateBidi(e,t,a)},truncateBidi:function(e,t,a){"gfx"==a&&(this.truncatedLabelsRegistry.push({element:e,label:t}),"auto"==this.textDir&&e.setShape({textDir:this.getTextDir(t)})),"html"==a&&"auto"==this.textDir&&(e.children[0].dir=this.getTextDir(t))},render:function(){return this.inherited(arguments),this.isMirrored=!1,this},_resetLeftBottom:function(e){e.vertical&&this.isMirrored&&(e.opt.leftBottom=!e.opt.leftBottom)}})});//# sourceMappingURL=Chart.js.map