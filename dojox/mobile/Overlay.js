//>>built
define("dojox/mobile/Overlay",["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","dijit/_WidgetBase","dojo/_base/array","dijit/registry","dojo/touch","./viewRegistry","./_css3"],function(e,t,i,a,r,o,n,s,l,d,u,h,c,m){return e("dojox.mobile.Overlay",l,{baseClass:"mblOverlay mblOverlayHidden",buildRendering:function(){this.inherited(arguments),this.containerNode||(this.containerNode=this.domNode)},_reposition:function(){var e=o.position(this.domNode),t=s.getBox(),a=c.getEnclosingScrollable(this.domNode);return a&&(t.t-=a.getPos().y),(e.y+e.h!=t.h||"absolute"!=n.get(this.domNode,"position")&&i("android")<3)&&(e.y=t.t+t.h-e.h,n.set(this.domNode,{position:"absolute",top:e.y+"px",bottom:"auto"})),e},show:function(e){d.forEach(u.findWidgets(this.domNode),function(e){e&&"auto"==e.height&&"function"==typeof e.resize&&e.resize()});var i=this._reposition();if(e){var n=o.position(e);i.y<n.y&&(a.global.scrollBy(0,n.y+n.h-i.y),this._reposition())}var s=this.domNode;r.replace(s,["mblCoverv","mblIn"],["mblOverlayHidden","mblRevealv","mblOut","mblReverse","mblTransition"]),this.defer(function(){var e=this.connect(s,m.name("transitionEnd"),function(){this.disconnect(e),r.remove(s,["mblCoverv","mblIn","mblTransition"]),this._reposition()});r.add(s,"mblTransition")},100);var l=!1;return this._moveHandle=this.connect(a.doc.documentElement,h.move,function(){l=!0}),this._repositionTimer=setInterval(t.hitch(this,function(){return l?void(l=!1):void this._reposition()}),50),i},hide:function(){var e=this.domNode;this._moveHandle&&(this.disconnect(this._moveHandle),this._moveHandle=null,clearInterval(this._repositionTimer),this._repositionTimer=null),i("css3-animations")?(r.replace(e,["mblRevealv","mblOut","mblReverse"],["mblCoverv","mblIn","mblOverlayHidden","mblTransition"]),this.defer(function(){var t=this.connect(e,m.name("transitionEnd"),function(){this.disconnect(t),r.replace(e,["mblOverlayHidden"],["mblRevealv","mblOut","mblReverse","mblTransition"])});r.add(e,"mblTransition")},100)):r.replace(e,["mblOverlayHidden"],["mblCoverv","mblIn","mblRevealv","mblOut","mblReverse"])},onBlur:function(e){return!1}})});//# sourceMappingURL=Overlay.js.map