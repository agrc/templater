//>>built
define("dojo/dom-geometry",["./sniff","./_base/window","./dom","./dom-style"],function(e,t,i,o){function n(e,t,i,o,n,r){r=r||"px";var a=e.style;isNaN(t)||(a.left=t+r),isNaN(i)||(a.top=i+r),o>=0&&(a.width=o+r),n>=0&&(a.height=n+r)}function r(e){return"button"==e.tagName.toLowerCase()||"input"==e.tagName.toLowerCase()&&"button"==(e.getAttribute("type")||"").toLowerCase()}function a(e){return"border-box"==s.boxModel||"table"==e.tagName.toLowerCase()||r(e)}var s={};s.boxModel="content-box",e("ie")&&(s.boxModel="BackCompat"==document.compatMode?"border-box":"content-box"),s.getPadExtents=function(e,t){e=i.byId(e);var n=t||o.getComputedStyle(e),r=o.toPixelValue,a=r(e,n.paddingLeft),s=r(e,n.paddingTop),l=r(e,n.paddingRight),d=r(e,n.paddingBottom);return{l:a,t:s,r:l,b:d,w:a+l,h:s+d}};var l="none";s.getBorderExtents=function(e,t){e=i.byId(e);var n=o.toPixelValue,r=t||o.getComputedStyle(e),a=r.borderLeftStyle!=l?n(e,r.borderLeftWidth):0,s=r.borderTopStyle!=l?n(e,r.borderTopWidth):0,d=r.borderRightStyle!=l?n(e,r.borderRightWidth):0,h=r.borderBottomStyle!=l?n(e,r.borderBottomWidth):0;return{l:a,t:s,r:d,b:h,w:a+d,h:s+h}},s.getPadBorderExtents=function(e,t){e=i.byId(e);var n=t||o.getComputedStyle(e),r=s.getPadExtents(e,n),a=s.getBorderExtents(e,n);return{l:r.l+a.l,t:r.t+a.t,r:r.r+a.r,b:r.b+a.b,w:r.w+a.w,h:r.h+a.h}},s.getMarginExtents=function(e,t){e=i.byId(e);var n=t||o.getComputedStyle(e),r=o.toPixelValue,a=r(e,n.marginLeft),s=r(e,n.marginTop),l=r(e,n.marginRight),d=r(e,n.marginBottom);return{l:a,t:s,r:l,b:d,w:a+l,h:s+d}},s.getMarginBox=function(t,n){t=i.byId(t);var r,a=n||o.getComputedStyle(t),d=s.getMarginExtents(t,a),h=t.offsetLeft-d.l,u=t.offsetTop-d.t,c=t.parentNode,f=o.toPixelValue;if(e("mozilla")){var p=parseFloat(a.left),g=parseFloat(a.top);isNaN(p)||isNaN(g)?c&&c.style&&(r=o.getComputedStyle(c),"visible"!=r.overflow&&(h+=r.borderLeftStyle!=l?f(t,r.borderLeftWidth):0,u+=r.borderTopStyle!=l?f(t,r.borderTopWidth):0)):(h=p,u=g)}else(e("opera")||8==e("ie")&&!e("quirks"))&&c&&(r=o.getComputedStyle(c),h-=r.borderLeftStyle!=l?f(t,r.borderLeftWidth):0,u-=r.borderTopStyle!=l?f(t,r.borderTopWidth):0);return{l:h,t:u,w:t.offsetWidth+d.w,h:t.offsetHeight+d.h}},s.getContentBox=function(t,n){t=i.byId(t);var r,a=n||o.getComputedStyle(t),l=t.clientWidth,d=s.getPadExtents(t,a),h=s.getBorderExtents(t,a);return l?(r=t.clientHeight,h.w=h.h=0):(l=t.offsetWidth,r=t.offsetHeight),e("opera")&&(d.l+=h.l,d.t+=h.t),{l:d.l,t:d.t,w:l-d.w-h.w,h:r-d.h-h.h}},s.setContentSize=function(e,t,o){e=i.byId(e);var r=t.w,l=t.h;if(a(e)){var d=s.getPadBorderExtents(e,o);r>=0&&(r+=d.w),l>=0&&(l+=d.h)}n(e,NaN,NaN,r,l)};var d={l:0,t:0,w:0,h:0};return s.setMarginBox=function(t,l,h){t=i.byId(t);var u=h||o.getComputedStyle(t),c=l.w,f=l.h,p=a(t)?d:s.getPadBorderExtents(t,u),g=s.getMarginExtents(t,u);if(e("webkit")&&r(t)){var m=t.style;c>=0&&!m.width&&(m.width="4px"),f>=0&&!m.height&&(m.height="4px")}c>=0&&(c=Math.max(c-p.w-g.w,0)),f>=0&&(f=Math.max(f-p.h-g.h,0)),n(t,l.l,l.t,c,f)},s.isBodyLtr=function(e){return e=e||t.doc,"ltr"==(t.body(e).dir||e.documentElement.dir||"ltr").toLowerCase()},s.docScroll=function(i){i=i||t.doc;var o=t.doc.parentWindow||t.doc.defaultView;return"pageXOffset"in o?{x:o.pageXOffset,y:o.pageYOffset}:(o=e("quirks")?t.body(i):i.documentElement)&&{x:s.fixIeBiDiScrollLeft(o.scrollLeft||0,i),y:o.scrollTop||0}},s.getIeDocumentElementOffset=function(i){i=i||t.doc;var o=i.documentElement;if(e("ie")<8){var n=o.getBoundingClientRect(),r=n.left,a=n.top;return e("ie")<7&&(r+=o.clientLeft,a+=o.clientTop),{x:0>r?0:r,y:0>a?0:a}}return{x:0,y:0}},s.fixIeBiDiScrollLeft=function(i,o){o=o||t.doc;var n=e("ie");if(n&&!s.isBodyLtr(o)){var r=e("quirks"),a=r?t.body(o):o.documentElement,l=t.global;return 6==n&&!r&&l.frameElement&&a.scrollHeight>a.clientHeight&&(i+=a.clientLeft),8>n||r?i+a.clientWidth-a.scrollWidth:-i}return i},s.position=function(o,n){o=i.byId(o);var r=t.body(o.ownerDocument),a=o.getBoundingClientRect();if(a={x:a.left,y:a.top,w:a.right-a.left,h:a.bottom-a.top},e("ie")<9){var l=s.getIeDocumentElementOffset(o.ownerDocument);a.x-=l.x+(e("quirks")?r.clientLeft+r.offsetLeft:0),a.y-=l.y+(e("quirks")?r.clientTop+r.offsetTop:0)}if(n){var d=s.docScroll(o.ownerDocument);a.x+=d.x,a.y+=d.y}return a},s.getMarginSize=function(e,t){e=i.byId(e);var n=s.getMarginExtents(e,t||o.getComputedStyle(e)),r=e.getBoundingClientRect();return{w:r.right-r.left+n.w,h:r.bottom-r.top+n.h}},s.normalizeEvent=function(t){if("layerX"in t||(t.layerX=t.offsetX,t.layerY=t.offsetY),!e("dom-addeventlistener")){var i=t.target,o=i&&i.ownerDocument||document,n=e("quirks")?o.body:o.documentElement,r=s.getIeDocumentElementOffset(o);t.pageX=t.clientX+s.fixIeBiDiScrollLeft(n.scrollLeft||0,o)-r.x,t.pageY=t.clientY+(n.scrollTop||0)-r.y}},s});//# sourceMappingURL=dom-geometry.js.map