//>>built
define("dojox/gfx/_gfxBidiSupport",["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/dom","dojo/_base/html","dojo/_base/array","./utils","./shape","./path","dojox/string/BidiEngine"],function(e,t,i,a,r,o,s,n,d,l){function h(t,i){var a=u(i);return a&&e.utils.forEach(t,function(t){(t instanceof e.Surface||t instanceof e.Group)&&(t.textDir=a),t instanceof e.Text&&t.setShape({textDir:a}),t instanceof e.TextPath&&t.setText({textDir:a})},t),t}function u(e){var t=["ltr","rtl","auto"];return e&&(e=e.toLowerCase(),o.indexOf(t,e)<0)?null:e}switch(t.getObject("dojox.gfx._gfxBidiSupport",!0),e.renderer){case"vml":e.isVml=!0;break;case"svg":e.isSvg=!0,e.svg.useSvgWeb&&(e.isSvgWeb=!0);break;case"silverlight":e.isSilverlight=!0;break;case"canvas":case"canvasWithEvents":e.isCanvas=!0}var m={LRM:"‎",LRE:"‪",PDF:"‬",RLM:"‏",RLE:"‫"},c=new l;t.extend(e.shape.Surface,{textDir:"",setTextDir:function(e){h(this,e)},getTextDir:function(){return this.textDir}}),t.extend(e.Group,{textDir:"",setTextDir:function(e){h(this,e)},getTextDir:function(){return this.textDir}}),t.extend(e.Text,{textDir:"",formatText:function(t,a){if(a&&t&&t.length>1){var r="ltr",o=a;if("auto"==o){if(e.isVml)return t;o=c.checkContextual(t)}if(e.isVml)return r=c.checkContextual(t),o!=r?"rtl"==o?c.hasBidiChar(t)?m.RLM+m.RLM+t:c.bidiTransform(t,"IRNNN","ILNNN"):m.LRM+t:t;if(e.isSvgWeb)return"rtl"==o?c.bidiTransform(t,"IRNNN","ILNNN"):t;if(e.isSilverlight)return"rtl"==o?c.bidiTransform(t,"IRNNN","VLYNN"):c.bidiTransform(t,"ILNNN","VLYNN");if(e.isCanvas)return"rtl"==o?m.RLE+t+m.PDF:m.LRE+t+m.PDF;if(e.isSvg)return i("ff")<4?"rtl"==o?c.bidiTransform(t,"IRYNN","VLNNN"):c.bidiTransform(t,"ILYNN","VLNNN"):m.LRM+("rtl"==o?m.RLE:m.LRE)+t+m.PDF}return t},bidiPreprocess:function(e){return e}}),t.extend(e.TextPath,{textDir:"",formatText:function(t,a){if(a&&t&&t.length>1){var r="ltr",o=a;if("auto"==o){if(e.isVml)return t;o=c.checkContextual(t)}if(e.isVml)return r=c.checkContextual(t),o!=r?"rtl"==o?c.hasBidiChar(t)?m.RLM+m.RLM+t:c.bidiTransform(t,"IRNNN","ILNNN"):m.LRM+t:t;if(e.isSvgWeb)return"rtl"==o?c.bidiTransform(t,"IRNNN","ILNNN"):t;e.isSvg&&(t=i("opera")||i("ff")>=4?m.LRM+("rtl"==o?m.RLE:m.LRE)+t+m.PDF:"rtl"==o?c.bidiTransform(t,"IRYNN","VLNNN"):c.bidiTransform(t,"ILYNN","VLNNN"))}return t},bidiPreprocess:function(e){return e&&"string"==typeof e&&(this.origText=e,e=this.formatText(e,this.textDir)),e}});var f=function(e,t,i,a){var r=e.prototype[t];e.prototype[t]=function(){var e;i&&(e=i.apply(this,arguments));var t=r.call(this,e);return a&&(t=a.call(this,t,arguments)),t}},p=function(e){return e&&(e.textDir&&(e.textDir=u(e.textDir)),e.text&&e.text instanceof Array&&(e.text=e.text.join(","))),!e||void 0==e.text&&!e.textDir||this.textDir==e.textDir&&e.text==this.origText||(this.origText=void 0!=e.text?e.text:this.origText,e.textDir&&(this.textDir=e.textDir),e.text=this.formatText(this.origText,this.textDir)),this.bidiPreprocess(e)};f(e.Text,"setShape",p,null),f(e.TextPath,"setText",p,null);var g=function(e){var i=t.clone(e);return i&&this.origText&&(i.text=this.origText),i};f(e.Text,"getShape",null,g),f(e.TextPath,"getText",null,g);var y=function(e,t){var i;return t&&t[0]&&(i=u(t[0])),e.setTextDir(i?i:this.textDir),e};f(e.Surface,"createGroup",null,y),f(e.Group,"createGroup",null,y);var v=function(e){if(e){var t=e.textDir?u(e.textDir):this.textDir;t&&(e.textDir=t)}return e};return f(e.Surface,"createText",v,null),f(e.Surface,"createTextPath",v,null),f(e.Group,"createText",v,null),f(e.Group,"createTextPath",v,null),e.createSurface=function(t,i,o,s){var n=e[e.renderer].createSurface(t,i,o),d=u(s);return e.isSvgWeb?(n.textDir=d?d:r.style(a.byId(t),"direction"),n):((e.isVml||e.isSvg||e.isCanvas)&&(n.textDir=d?d:r.style(n.rawNode,"direction")),e.isSilverlight&&(n.textDir=d?d:r.style(n._nodes[1],"direction")),n)},e});//# sourceMappingURL=_gfxBidiSupport.js.map