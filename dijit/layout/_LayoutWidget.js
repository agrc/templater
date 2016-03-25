//>>built
define("dijit/layout/_LayoutWidget",["dojo/_base/lang","../_Widget","../_Container","../_Contained","../Viewport","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style"],function(e,t,i,n,o,s,r,a,d){return s("dijit.layout._LayoutWidget",[t,i,n],{baseClass:"dijitLayoutContainer",isLayoutContainer:!0,_setTitleAttr:null,buildRendering:function(){this.inherited(arguments),r.add(this.domNode,"dijitContainer")},startup:function(){if(!this._started){this.inherited(arguments);var t=this.getParent&&this.getParent();t&&t.isLayoutContainer||(this.resize(),this.own(o.on("resize",e.hitch(this,"resize"))))}},resize:function(t,i){var n=this.domNode;t&&a.setMarginBox(n,t);var o=i||{};e.mixin(o,t||{}),"h"in o&&"w"in o||(o=e.mixin(a.getMarginBox(n),o));var s=d.getComputedStyle(n),r=a.getMarginExtents(n,s),l=a.getBorderExtents(n,s),c=this._borderBox={w:o.w-(r.w+l.w),h:o.h-(r.h+l.h)},u=a.getPadExtents(n,s);this._contentBox={l:d.toPixelValue(n,s.paddingLeft),t:d.toPixelValue(n,s.paddingTop),w:c.w-u.w,h:c.h-u.h},this.layout()},layout:function(){},_setupChild:function(e){var t=this.baseClass+"-child "+(e.baseClass?this.baseClass+"-"+e.baseClass:"");r.add(e.domNode,t)},addChild:function(e,t){this.inherited(arguments),this._started&&this._setupChild(e)},removeChild:function(e){var t=this.baseClass+"-child"+(e.baseClass?" "+this.baseClass+"-"+e.baseClass:"");r.remove(e.domNode,t),this.inherited(arguments)}})});//# sourceMappingURL=_LayoutWidget.js.map