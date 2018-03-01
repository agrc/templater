//>>built
define("dojox/gfx/_gfxBidiSupport",["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/dom","dojo/_base/html","dojo/_base/array","./utils","./shape","./path","dojox/string/BidiEngine"],function(e,t,a,i,r,n,o,s,d,l){function u(t,a){var i=h(a);return i&&e.utils.forEach(t,function(t){(t instanceof e.Surface||t instanceof e.Group)&&(t.textDir=i),t instanceof e.Text&&t.setShape({textDir:i}),t instanceof e.TextPath&&t.setText({textDir:i})},t),t}function h(e){var t=["ltr","rtl","auto"];return e&&(e=e.toLowerCase(),n.indexOf(t,e)<0)?null:e}switch(t.getObject("dojox.gfx._gfxBidiSupport",!0),e.renderer){case"vml":e.isVml=!0;break;case"svg":e.isSvg=!0,e.svg.useSvgWeb&&(e.isSvgWeb=!0);break;case"silverlight":e.isSilverlight=!0;break;case"canvas":case"canvasWithEvents":e.isCanvas=!0}var m={LRM:"‎",LRE:"‪",PDF:"‬",RLM:"‏",RLE:"‫"},c=new l;t.extend(e.shape.Surface,{textDir:"",setTextDir:function(e){u(this,e)},getTextDir:function(){return this.textDir}}),t.extend(e.Group,{textDir:"",setTextDir:function(e){u(this,e)},getTextDir:function(){return this.textDir}}),t.extend(e.Text,{textDir:"",formatText:function(t,i){if(i&&t&&t.length>1){var r="ltr",n=i;if("auto"==n){if(e.isVml)return t;n=c.checkContextual(t)}if(e.isVml)return r=c.checkContextual(t),n!=r?"rtl"==n?c.hasBidiChar(t)?m.RLM+m.RLM+t:c.bidiTransform(t,"IRNNN","ILNNN"):m.LRM+t:t;if(e.isSvgWeb)return"rtl"==n?c.bidiTransform(t,"IRNNN","ILNNN"):t;if(e.isSilverlight)return"rtl"==n?c.bidiTransform(t,"IRNNN","VLYNN"):c.bidiTransform(t,"ILNNN","VLYNN");if(e.isCanvas)return"rtl"==n?m.RLE+t+m.PDF:m.LRE+t+m.PDF;if(e.isSvg)return a("ff")<4?"rtl"==n?c.bidiTransform(t,"IRYNN","VLNNN"):c.bidiTransform(t,"ILYNN","VLNNN"):m.LRM+("rtl"==n?m.RLE:m.LRE)+t+m.PDF}return t},bidiPreprocess:function(e){return e}}),t.extend(e.TextPath,{textDir:"",formatText:function(t,i){if(i&&t&&t.length>1){var r="ltr",n=i;if("auto"==n){if(e.isVml)return t;n=c.checkContextual(t)}if(e.isVml)return r=c.checkContextual(t),n!=r?"rtl"==n?c.hasBidiChar(t)?m.RLM+m.RLM+t:c.bidiTransform(t,"IRNNN","ILNNN"):m.LRM+t:t;if(e.isSvgWeb)return"rtl"==n?c.bidiTransform(t,"IRNNN","ILNNN"):t;e.isSvg&&(t=a("opera")||a("ff")>=4?m.LRM+("rtl"==n?m.RLE:m.LRE)+t+m.PDF:"rtl"==n?c.bidiTransform(t,"IRYNN","VLNNN"):c.bidiTransform(t,"ILYNN","VLNNN"))}return t},bidiPreprocess:function(e){return e&&"string"==typeof e&&(this.origText=e,e=this.formatText(e,this.textDir)),e}});var f=function(e,t,a,i){var r=e.prototype[t];e.prototype[t]=function(){var e;a&&(e=a.apply(this,arguments));var t=r.call(this,e);return i&&(t=i.call(this,t,arguments)),t}},y=function(e){return e&&(e.textDir&&(e.textDir=h(e.textDir)),e.text&&e.text instanceof Array&&(e.text=e.text.join(","))),!e||void 0==e.text&&!e.textDir||this.textDir==e.textDir&&e.text==this.origText||(this.origText=void 0!=e.text?e.text:this.origText,e.textDir&&(this.textDir=e.textDir),e.text=this.formatText(this.origText,this.textDir)),this.bidiPreprocess(e)};f(e.Text,"setShape",y,null),f(e.TextPath,"setText",y,null);var p=function(e){var a=t.clone(e);return a&&this.origText&&(a.text=this.origText),a};f(e.Text,"getShape",null,p),f(e.TextPath,"getText",null,p);var v=function(e,t){var a;return t&&t[0]&&(a=h(t[0])),e.setTextDir(a||this.textDir),e};f(e.Surface,"createGroup",null,v),f(e.Group,"createGroup",null,v);var g=function(e){if(e){var t=e.textDir?h(e.textDir):this.textDir;t&&(e.textDir=t)}return e};return f(e.Surface,"createText",g,null),f(e.Surface,"createTextPath",g,null),f(e.Group,"createText",g,null),f(e.Group,"createTextPath",g,null),e.createSurface=function(t,a,n,o){var s=e[e.renderer].createSurface(t,a,n),d=h(o);return e.isSvgWeb?(s.textDir=d||r.style(i.byId(t),"direction"),s):((e.isVml||e.isSvg||e.isCanvas)&&(s.textDir=d||r.style(s.rawNode,"direction")),e.isSilverlight&&(s.textDir=d||r.style(s._nodes[1],"direction")),s)},e});//# sourceMappingURL=_gfxBidiSupport.js.map