//>>built
define("dojo/_base/html",["./kernel","../dom","../dom-style","../dom-attr","../dom-prop","../dom-class","../dom-construct","../dom-geometry"],function(e,t,i,n,o,r,s,a){return e.byId=t.byId,e.isDescendant=t.isDescendant,e.setSelectable=t.setSelectable,e.getAttr=n.get,e.setAttr=n.set,e.hasAttr=n.has,e.removeAttr=n.remove,e.getNodeProp=n.getNodeProp,e.attr=function(e,t,i){return 2==arguments.length?n["string"==typeof t?"get":"set"](e,t):n.set(e,t,i)},e.hasClass=r.contains,e.addClass=r.add,e.removeClass=r.remove,e.toggleClass=r.toggle,e.replaceClass=r.replace,e._toDom=e.toDom=s.toDom,e.place=s.place,e.create=s.create,e.empty=function(e){s.empty(e)},e._destroyElement=e.destroy=function(e){s.destroy(e)},e._getPadExtents=e.getPadExtents=a.getPadExtents,e._getBorderExtents=e.getBorderExtents=a.getBorderExtents,e._getPadBorderExtents=e.getPadBorderExtents=a.getPadBorderExtents,e._getMarginExtents=e.getMarginExtents=a.getMarginExtents,e._getMarginSize=e.getMarginSize=a.getMarginSize,e._getMarginBox=e.getMarginBox=a.getMarginBox,e.setMarginBox=a.setMarginBox,e._getContentBox=e.getContentBox=a.getContentBox,e.setContentSize=a.setContentSize,e._isBodyLtr=e.isBodyLtr=a.isBodyLtr,e._docScroll=e.docScroll=a.docScroll,e._getIeDocumentElementOffset=e.getIeDocumentElementOffset=a.getIeDocumentElementOffset,e._fixIeBiDiScrollLeft=e.fixIeBiDiScrollLeft=a.fixIeBiDiScrollLeft,e.position=a.position,e.marginBox=function(e,t){return t?a.setMarginBox(e,t):a.getMarginBox(e)},e.contentBox=function(e,t){return t?a.setContentSize(e,t):a.getContentBox(e)},e.coords=function(n,o){e.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox()."),n=t.byId(n);var r=i.getComputedStyle(n),s=a.getMarginBox(n,r),d=a.position(n,o);return s.x=d.x,s.y=d.y,s},e.getProp=o.get,e.setProp=o.set,e.prop=function(e,t,i){return 2==arguments.length?o["string"==typeof t?"get":"set"](e,t):o.set(e,t,i)},e.getStyle=i.get,e.setStyle=i.set,e.getComputedStyle=i.getComputedStyle,e.__toPixelValue=e.toPixelValue=i.toPixelValue,e.style=function(e,t,n){switch(arguments.length){case 1:return i.get(e);case 2:return i["string"==typeof t?"get":"set"](e,t)}return i.set(e,t,n)},e});//# sourceMappingURL=html.js.map