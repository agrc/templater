//>>built
define("dojox/gfx/fx",["dojo/_base/lang","./_base","./matrix","dojo/_base/Color","dojo/_base/array","dojo/_base/fx","dojo/_base/connect","dojo/sniff"],function(e,t,i,a,r,o,n,s){function l(e,t){this.start=e,this.end=t}function d(e,t,i){this.start=e,this.end=t,this.units=i}function u(e,t){this.start=e,this.end=t,this.temp=new a}function h(e){this.values=e,this.length=e.length}function m(e,t){this.values=e,this.def=t?t:{}}function c(e,t){this.stack=e,this.original=t}function f(e,i,a,r){if(e.values)return new h(e.values);var o,n,s;return n=e.start?t.normalizeColor(e.start):o=i?a?i[a]:i:r,e.end?s=t.normalizeColor(e.end):(o||(o=i?a?i[a]:i:r),s=o),new u(n,s)}function p(e,t,i,a){if(e.values)return new h(e.values);var r,o,n;return o=e.start?e.start:r=t?t[i]:a,e.end?n=e.end:("number"!=typeof r&&(r=t?t[i]:a),n=r),new l(o,n)}var y=t.fx={};l.prototype.getValue=function(e){return(this.end-this.start)*e+this.start},d.prototype.getValue=function(e){return(this.end-this.start)*e+this.start+this.units},u.prototype.getValue=function(e){return a.blendColors(this.start,this.end,e,this.temp)},h.prototype.getValue=function(e){return this.values[Math.min(Math.floor(e*this.length),this.length-1)]},m.prototype.getValue=function(t){var i=e.clone(this.def);for(var a in this.values)i[a]=this.values[a].getValue(t);return i},c.prototype.getValue=function(e){var t=[];return r.forEach(this.stack,function(a){if(a instanceof i.Matrix2D)return void t.push(a);if("original"==a.name&&this.original)return void t.push(this.original);if("matrix"!=a.name){if(a.name in i){var o=i[a.name];if("function"!=typeof o)return void t.push(o);var n=r.map(a.start,function(t,i){return(a.end[i]-t)*e+t}),s=o.apply(i,n);s instanceof i.Matrix2D&&t.push(s)}}else if(a.start instanceof i.Matrix2D&&a.end instanceof i.Matrix2D){var l=new i.Matrix2D;for(var d in a.start)l[d]=(a.end[d]-a.start[d])*e+a.start[d];t.push(l)}},this),t};var g=new a(0,0,0,0);return y.animateStroke=function(e){e.easing||(e.easing=o._defaultEasing);var t,i=new o.Animation(e),a=e.shape;return n.connect(i,"beforeBegin",i,function(){t=a.getStroke();var i,r,o=e.color,n={};o&&(n.color=f(o,t,"color",g)),o=e.style,o&&o.values&&(n.style=new h(o.values)),o=e.width,o&&(n.width=p(o,t,"width",1)),o=e.cap,o&&o.values&&(n.cap=new h(o.values)),o=e.join,o&&(o.values?n.join=new h(o.values):(i=o.start?o.start:t&&t.join||0,r=o.end?o.end:t&&t.join||0,"number"==typeof i&&"number"==typeof r&&(n.join=new l(i,r)))),this.curve=new m(n,t)}),n.connect(i,"onAnimate",a,"setStroke"),i},y.animateFill=function(e){e.easing||(e.easing=o._defaultEasing);var t,i=new o.Animation(e),a=e.shape;return n.connect(i,"beforeBegin",i,function(){t=a.getFill();var i=e.color;i&&(this.curve=f(i,t,"",g))}),n.connect(i,"onAnimate",a,"setFill"),i},y.animateFont=function(e){e.easing||(e.easing=o._defaultEasing);var t,i=new o.Animation(e),a=e.shape;return n.connect(i,"beforeBegin",i,function(){t=a.getFont();var i,r,o=e.style,n={};o&&o.values&&(n.style=new h(o.values)),o=e.variant,o&&o.values&&(n.variant=new h(o.values)),o=e.weight,o&&o.values&&(n.weight=new h(o.values)),o=e.family,o&&o.values&&(n.family=new h(o.values)),o=e.size,o&&o.units&&(i=parseFloat(o.start?o.start:a.font&&a.font.size||"0"),r=parseFloat(o.end?o.end:a.font&&a.font.size||"0"),n.size=new d(i,r,o.units)),this.curve=new m(n,t)}),n.connect(i,"onAnimate",a,"setFont"),i},y.animateTransform=function(e){e.easing||(e.easing=o._defaultEasing);var i,a=new o.Animation(e),l=e.shape;if(n.connect(a,"beforeBegin",a,function(){i=l.getTransform(),this.curve=new c(e.transform,i)}),n.connect(a,"onAnimate",l,"setTransform"),"svg"===t.renderer&&(s("ie")>=9||s("ff")))var d=[n.connect(a,"onBegin",a,function(){for(var e=l.getParent();e&&e.getParent;)e=e.getParent();e&&(l.__svgContainer=e.rawNode.parentNode,l.__svgRoot=e.rawNode,l.__svgRoot&&l.__svgRoot.getAttribute&&(l.__svgWidth=parseInt(l.__svgRoot.getAttribute("width"),10),isNaN(l.__svgWidth)&&delete l.__svgWidth))}),n.connect(a,"onAnimate",a,function(){try{if(l.__svgContainer){var e=l.__svgContainer.style.visibility;l.__svgContainer.style.visibility="visible";l.__svgContainer.offsetHeight;l.__svgContainer.style.visibility=e;var t=l.__svgWidth;if(!isNaN(t))try{l.__svgRoot.setAttribute("width",t-5e-6),l.__svgRoot.setAttribute("width",t)}catch(i){}}}catch(a){}}),n.connect(a,"onEnd",a,function(){if(r.forEach(d,n.disconnect),l.__svgContainer){var e=l.__svgContainer;if(null==e.getAttribute("__gotVis")){e.setAttribute("__gotVis",!0);var t=l.__svgContainer.style.visibility,i=l.__svgRoot,a=l.__svgWidth;e.style.visibility="visible",setTimeout(function(){try{e.style.visibility=t,e.removeAttribute("__gotVis"),e=null;try{isNaN(a)||(i.setAttribute("width",a-5e-6),i.setAttribute("width",a))}catch(r){}}catch(o){}},100)}}delete l.__svgContainer,delete l.__svgRoot,delete l.__svgWidth})];return a},y});//# sourceMappingURL=fx.js.map