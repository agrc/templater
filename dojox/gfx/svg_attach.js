//>>built
define("dojox/gfx/svg_attach",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","./_base","./svg","./matrix"],function(e,t,a,i,o,n,r){function s(e){var r=e.rawNode.getAttribute("fill");if("none"==r)return void(e.fillStyle=null);var s=null,l=n.getRef(r);if(l)switch(l.tagName.toLowerCase()){case"lineargradient":s=d(o.defaultLinearGradient,l),a.forEach(["x1","y1","x2","y2"],function(e){s[e]=l.getAttribute(e)});break;case"radialgradient":s=d(o.defaultRadialGradient,l),a.forEach(["cx","cy","r"],function(e){s[e]=l.getAttribute(e)}),s.cx=l.getAttribute("cx"),s.cy=l.getAttribute("cy"),s.r=l.getAttribute("r");break;case"pattern":s=t.clone(o.defaultPattern),a.forEach(["x","y","width","height"],function(e){s[e]=l.getAttribute(e)}),s.src=l.firstChild.getAttributeNS(n.xmlns.xlink,"href")}else{s=new i(r);var u=e.rawNode.getAttribute("fill-opacity");null!=u&&(s.a=u)}e.fillStyle=s}function d(e,a){var o=t.clone(e);o.colors=[];for(var n=0;n<a.childNodes.length;++n)o.colors.push({offset:a.childNodes[n].getAttribute("offset"),color:new i(a.childNodes[n].getAttribute("stop-color"))});return o}function l(e){var a=e.rawNode,n=a.getAttribute("stroke");if(null==n||"none"==n)return void(e.strokeStyle=null);var r=e.strokeStyle=t.clone(o.defaultStroke),s=new i(n);s&&(r.color=s,r.color.a=a.getAttribute("stroke-opacity"),r.width=a.getAttribute("stroke-width"),r.cap=a.getAttribute("stroke-linecap"),r.join=a.getAttribute("stroke-linejoin"),"miter"==r.join&&(r.join=a.getAttribute("stroke-miterlimit")),r.style=a.getAttribute("dojoGfxStrokeStyle"))}function u(e){var t=e.rawNode.getAttribute("transform");if(t.match(/^matrix\(.+\)$/)){var a=t.slice(7,-1).split(",");e.matrix=r.normalize({xx:parseFloat(a[0]),xy:parseFloat(a[2]),yx:parseFloat(a[1]),yy:parseFloat(a[3]),dx:parseFloat(a[4]),dy:parseFloat(a[5])})}else e.matrix=null}function h(e){var a=e.fontStyle=t.clone(o.defaultFont),i=e.rawNode;a.style=i.getAttribute("font-style"),a.variant=i.getAttribute("font-variant"),a.weight=i.getAttribute("font-weight"),a.size=i.getAttribute("font-size"),a.family=i.getAttribute("font-family")}function m(e,a){var i=e.shape=t.clone(a),o=e.rawNode;for(var n in i)i[n]=o.getAttribute(n)}function c(e){m(e,o.defaultRect),e.shape.r=Math.min(e.rawNode.getAttribute("rx"),e.rawNode.getAttribute("ry"))}function f(e){var a=e.shape=t.clone(o.defaultText),i=e.rawNode;a.x=i.getAttribute("x"),a.y=i.getAttribute("y"),a.align=i.getAttribute("text-anchor"),a.decoration=i.getAttribute("text-decoration"),a.rotated=0!=parseFloat(i.getAttribute("rotate")),a.kerning="auto"==i.getAttribute("kerning"),a.text=i.firstChild.nodeValue}function p(e){var a=e.shape=t.clone(o.defaultTextPath),i=e.rawNode;a.align=i.getAttribute("text-anchor"),a.decoration=i.getAttribute("text-decoration"),a.rotated=0!=parseFloat(i.getAttribute("rotate")),a.kerning="auto"==i.getAttribute("kerning"),a.text=i.firstChild.nodeValue}return e.experimental("dojox.gfx.svg_attach"),n.attachNode=function(e){if(!e)return null;var t=null;switch(e.tagName.toLowerCase()){case n.Rect.nodeType:t=new n.Rect(e),c(t);break;case n.Ellipse.nodeType:t=new n.Ellipse(e),m(t,o.defaultEllipse);break;case n.Polyline.nodeType:t=new n.Polyline(e),m(t,o.defaultPolyline);break;case n.Path.nodeType:t=new n.Path(e),m(t,o.defaultPath);break;case n.Circle.nodeType:t=new n.Circle(e),m(t,o.defaultCircle);break;case n.Line.nodeType:t=new n.Line(e),m(t,o.defaultLine);break;case n.Image.nodeType:t=new n.Image(e),m(t,o.defaultImage);break;case n.Text.nodeType:var a=e.getElementsByTagName("textPath");a&&a.length?(t=new n.TextPath(e),m(t,o.defaultPath),p(t)):(t=new n.Text(e),f(t)),h(t);break;default:return null}return t instanceof n.Image||(s(t),l(t)),u(t),t},n.attachSurface=function(e){var t=new n.Surface;t.rawNode=e;var a=e.getElementsByTagName("defs");return 0==a.length?null:(t.defNode=a[0],t)},n});//# sourceMappingURL=svg_attach.js.map