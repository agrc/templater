//>>built
define("dojox/gfx/fx",["dojo/_base/lang","./_base","./matrix","dojo/_base/Color","dojo/_base/array","dojo/_base/fx","dojo/_base/connect","dojo/sniff"],function(e,t,a,i,r,o,n,s){function l(e,t){this.start=e,this.end=t}function d(e,t,a){this.start=e,this.end=t,this.units=a}function u(e,t){this.start=e,this.end=t,this.temp=new i}function m(e){this.values=e,this.length=e.length}function h(e,t){this.values=e,this.def=t?t:{}}function c(e,t){this.stack=e,this.original=t}function f(e,a,i,r){if(e.values)return new m(e.values);var o,n,s;return n=e.start?t.normalizeColor(e.start):o=a?i?a[i]:a:r,e.end?s=t.normalizeColor(e.end):(o||(o=a?i?a[i]:a:r),s=o),new u(n,s)}function p(e,t,a,i){if(e.values)return new m(e.values);var r,o,n;return o=e.start?e.start:r=t?t[a]:i,e.end?n=e.end:("number"!=typeof r&&(r=t?t[a]:i),n=r),new l(o,n)}var g=t.fx={};l.prototype.getValue=function(e){return(this.end-this.start)*e+this.start},d.prototype.getValue=function(e){return(this.end-this.start)*e+this.start+this.units},u.prototype.getValue=function(e){return i.blendColors(this.start,this.end,e,this.temp)},m.prototype.getValue=function(e){return this.values[Math.min(Math.floor(e*this.length),this.length-1)]},h.prototype.getValue=function(t){var a=e.clone(this.def);for(var i in this.values)a[i]=this.values[i].getValue(t);return a},c.prototype.getValue=function(e){var t=[];return r.forEach(this.stack,function(i){if(i instanceof a.Matrix2D)return void t.push(i);if("original"==i.name&&this.original)return void t.push(this.original);if("matrix"!=i.name){if(i.name in a){var o=a[i.name];if("function"!=typeof o)return void t.push(o);var n=r.map(i.start,function(t,a){return(i.end[a]-t)*e+t}),s=o.apply(a,n);s instanceof a.Matrix2D&&t.push(s)}}else if(i.start instanceof a.Matrix2D&&i.end instanceof a.Matrix2D){var l=new a.Matrix2D;for(var d in i.start)l[d]=(i.end[d]-i.start[d])*e+i.start[d];t.push(l)}},this),t};var y=new i(0,0,0,0);return g.animateStroke=function(e){e.easing||(e.easing=o._defaultEasing);var t,a=new o.Animation(e),i=e.shape;return n.connect(a,"beforeBegin",a,function(){t=i.getStroke();var a,r,o=e.color,n={};o&&(n.color=f(o,t,"color",y)),o=e.style,o&&o.values&&(n.style=new m(o.values)),o=e.width,o&&(n.width=p(o,t,"width",1)),o=e.cap,o&&o.values&&(n.cap=new m(o.values)),o=e.join,o&&(o.values?n.join=new m(o.values):(a=o.start?o.start:t&&t.join||0,r=o.end?o.end:t&&t.join||0,"number"==typeof a&&"number"==typeof r&&(n.join=new l(a,r)))),this.curve=new h(n,t)}),n.connect(a,"onAnimate",i,"setStroke"),a},g.animateFill=function(e){e.easing||(e.easing=o._defaultEasing);var t,a=new o.Animation(e),i=e.shape;return n.connect(a,"beforeBegin",a,function(){t=i.getFill();var a=e.color;a&&(this.curve=f(a,t,"",y))}),n.connect(a,"onAnimate",i,"setFill"),a},g.animateFont=function(e){e.easing||(e.easing=o._defaultEasing);var t,a=new o.Animation(e),i=e.shape;return n.connect(a,"beforeBegin",a,function(){t=i.getFont();var a,r,o=e.style,n={};o&&o.values&&(n.style=new m(o.values)),o=e.variant,o&&o.values&&(n.variant=new m(o.values)),o=e.weight,o&&o.values&&(n.weight=new m(o.values)),o=e.family,o&&o.values&&(n.family=new m(o.values)),o=e.size,o&&o.units&&(a=parseFloat(o.start?o.start:i.font&&i.font.size||"0"),r=parseFloat(o.end?o.end:i.font&&i.font.size||"0"),n.size=new d(a,r,o.units)),this.curve=new h(n,t)}),n.connect(a,"onAnimate",i,"setFont"),a},g.animateTransform=function(e){e.easing||(e.easing=o._defaultEasing);var a,i=new o.Animation(e),l=e.shape;if(n.connect(i,"beforeBegin",i,function(){a=l.getTransform(),this.curve=new c(e.transform,a)}),n.connect(i,"onAnimate",l,"setTransform"),"svg"===t.renderer&&(s("ie")>=9||s("ff")))var d=[n.connect(i,"onBegin",i,function(){for(var e=l.getParent();e&&e.getParent;)e=e.getParent();e&&(l.__svgContainer=e.rawNode.parentNode,l.__svgRoot=e.rawNode,l.__svgRoot&&l.__svgRoot.getAttribute&&(l.__svgWidth=parseInt(l.__svgRoot.getAttribute("width"),10),isNaN(l.__svgWidth)&&delete l.__svgWidth))}),n.connect(i,"onAnimate",i,function(){try{if(l.__svgContainer){var e=l.__svgContainer.style.visibility;l.__svgContainer.style.visibility="visible";l.__svgContainer.offsetHeight;l.__svgContainer.style.visibility=e;var t=l.__svgWidth;if(!isNaN(t))try{l.__svgRoot.setAttribute("width",t-5e-6),l.__svgRoot.setAttribute("width",t)}catch(a){}}}catch(i){}}),n.connect(i,"onEnd",i,function(){if(r.forEach(d,n.disconnect),l.__svgContainer){var e=l.__svgContainer;if(null==e.getAttribute("__gotVis")){e.setAttribute("__gotVis",!0);var t=l.__svgContainer.style.visibility,a=l.__svgRoot,i=l.__svgWidth;e.style.visibility="visible",setTimeout(function(){try{e.style.visibility=t,e.removeAttribute("__gotVis"),e=null;try{isNaN(i)||(a.setAttribute("width",i-5e-6),a.setAttribute("width",i))}catch(r){}}catch(o){}},100)}}delete l.__svgContainer,delete l.__svgRoot,delete l.__svgWidth})];return i},g});//# sourceMappingURL=fx.js.map