//>>built
define("dojox/geo/charting/_base",["dojo/_base/lang","dojo/_base/array","../../main","dojo/_base/html","dojo/dom-geometry","dojox/gfx/matrix","dijit/Tooltip","dojo/_base/NodeList","dojo/NodeList-traverse"],function(e,t,i,a,r,n,o,s,d){var l=e.getObject("geo.charting",!0,i);return l.showTooltip=function(e,t,i){var a=l._normalizeArround(t);return o.show(e,a,i)},l.hideTooltip=function(e){return o.hide(e)},l._normalizeArround=function(e){var t=l._getRealBBox(e),i=e._getRealMatrix()||{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0},a=n.multiplyPoint(i,t.x,t.y),o=l._getGfxContainer(e);return e.x=r.position(o,!0).x+a.x,e.y=r.position(o,!0).y+a.y,e.w=t.width*i.xx,e.h=t.height*i.yy,e},l._getGfxContainer=function(e){return e.surface?new s(e.surface.rawNode).parents("div")[0]:new s(e.rawNode).parents("div")[0]},l._getRealBBox=function(i){var a=i.getBoundingBox();if(!a){var r=i.children;a=e.clone(l._getRealBBox(r[0])),t.forEach(r,function(e){var t=l._getRealBBox(e);a.x=Math.min(a.x,t.x),a.y=Math.min(a.y,t.y),a.endX=Math.max(a.x+a.width,t.x+t.width),a.endY=Math.max(a.y+a.height,t.y+t.height)}),a.width=a.endX-a.x,a.height=a.endY-a.y}return a},l});//# sourceMappingURL=_base.js.map