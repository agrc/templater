//>>built
define("dijit/layout/_LayoutWidget",["dojo/_base/lang","../_Widget","../_Container","../_Contained","../Viewport","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style"],function(e,t,i,o,n,s,r,a,d){return s("dijit.layout._LayoutWidget",[t,i,o],{baseClass:"dijitLayoutContainer",isLayoutContainer:!0,_setTitleAttr:null,buildRendering:function(){this.inherited(arguments),r.add(this.domNode,"dijitContainer")},startup:function(){if(!this._started){this.inherited(arguments);var t=this.getParent&&this.getParent();t&&t.isLayoutContainer||(this.resize(),this.own(n.on("resize",e.hitch(this,"resize"))))}},resize:function(t,i){var o=this.domNode;t&&a.setMarginBox(o,t);var n=i||{};e.mixin(n,t||{}),"h"in n&&"w"in n||(n=e.mixin(a.getMarginBox(o),n));var s=d.getComputedStyle(o),r=a.getMarginExtents(o,s),l=a.getBorderExtents(o,s),c=this._borderBox={w:n.w-(r.w+l.w),h:n.h-(r.h+l.h)},h=a.getPadExtents(o,s);this._contentBox={l:d.toPixelValue(o,s.paddingLeft),t:d.toPixelValue(o,s.paddingTop),w:c.w-h.w,h:c.h-h.h},this.layout()},layout:function(){},_setupChild:function(e){var t=this.baseClass+"-child "+(e.baseClass?this.baseClass+"-"+e.baseClass:"");r.add(e.domNode,t)},addChild:function(e,t){this.inherited(arguments),this._started&&this._setupChild(e)},removeChild:function(e){var t=this.baseClass+"-child"+(e.baseClass?" "+this.baseClass+"-"+e.baseClass:"");r.remove(e.domNode,t),this.inherited(arguments)}})});//# sourceMappingURL=_LayoutWidget.js.map