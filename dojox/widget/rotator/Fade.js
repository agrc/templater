//>>built
define("dojox/widget/rotator/Fade",["dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(e,t,i,o){function n(n,r){var a=n.next.node;return i.set(a,{display:"",opacity:0}),n.node=n.current.node,o[r]([t.fadeOut(n),t.fadeIn(e.mixin(n,{node:a}))])}var r={fade:function(e){return n(e,"chain")},crossFade:function(e){return n(e,"combine")}};return e.mixin(e.getObject("dojox.widget.rotator"),r),r});//# sourceMappingURL=Fade.js.map