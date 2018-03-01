//>>built
define("dojox/gfx/svg_attach",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","./_base","./svg","./matrix"],function(e,t,i,r,a,n,o){function s(e){var o=e.rawNode.getAttribute("fill");if("none"==o)return void(e.fillStyle=null);var s=null,d=n.getRef(o);if(d)switch(d.tagName.toLowerCase()){case"lineargradient":s=l(a.defaultLinearGradient,d),i.forEach(["x1","y1","x2","y2"],function(e){s[e]=d.getAttribute(e)});break;case"radialgradient":s=l(a.defaultRadialGradient,d),i.forEach(["cx","cy","r"],function(e){s[e]=d.getAttribute(e)}),s.cx=d.getAttribute("cx"),s.cy=d.getAttribute("cy"),s.r=d.getAttribute("r");break;case"pattern":s=t.clone(a.defaultPattern),i.forEach(["x","y","width","height"],function(e){s[e]=d.getAttribute(e)}),s.src=d.firstChild.getAttributeNS(n.xmlns.xlink,"href")}else{s=new r(o);var u=e.rawNode.getAttribute("fill-opacity");null!=u&&(s.a=u)}e.fillStyle=s}function l(e,i){var a=t.clone(e);a.colors=[];for(var n=0;n<i.childNodes.length;++n)a.colors.push({offset:i.childNodes[n].getAttribute("offset"),color:new r(i.childNodes[n].getAttribute("stop-color"))});return a}function d(e){var i=e.rawNode,n=i.getAttribute("stroke");if(null==n||"none"==n)return void(e.strokeStyle=null);var o=e.strokeStyle=t.clone(a.defaultStroke),s=new r(n);s&&(o.color=s,o.color.a=i.getAttribute("stroke-opacity"),o.width=i.getAttribute("stroke-width"),o.cap=i.getAttribute("stroke-linecap"),o.join=i.getAttribute("stroke-linejoin"),"miter"==o.join&&(o.join=i.getAttribute("stroke-miterlimit")),o.style=i.getAttribute("dojoGfxStrokeStyle"))}function u(e){var t=e.rawNode.getAttribute("transform");if(t.match(/^matrix\(.+\)$/)){var i=t.slice(7,-1).split(",");e.matrix=o.normalize({xx:parseFloat(i[0]),xy:parseFloat(i[2]),yx:parseFloat(i[1]),yy:parseFloat(i[3]),dx:parseFloat(i[4]),dy:parseFloat(i[5])})}else e.matrix=null}function c(e){var i=e.fontStyle=t.clone(a.defaultFont),r=e.rawNode;i.style=r.getAttribute("font-style"),i.variant=r.getAttribute("font-variant"),i.weight=r.getAttribute("font-weight"),i.size=r.getAttribute("font-size"),i.family=r.getAttribute("font-family")}function h(e,i){var r=e.shape=t.clone(i),a=e.rawNode;for(var n in r)r[n]=a.getAttribute(n)}function f(e){h(e,a.defaultRect),e.shape.r=Math.min(e.rawNode.getAttribute("rx"),e.rawNode.getAttribute("ry"))}function m(e){var i=e.shape=t.clone(a.defaultText),r=e.rawNode;i.x=r.getAttribute("x"),i.y=r.getAttribute("y"),i.align=r.getAttribute("text-anchor"),i.decoration=r.getAttribute("text-decoration"),i.rotated=0!=parseFloat(r.getAttribute("rotate")),i.kerning="auto"==r.getAttribute("kerning"),i.text=r.firstChild.nodeValue}function p(e){var i=e.shape=t.clone(a.defaultTextPath),r=e.rawNode;i.align=r.getAttribute("text-anchor"),i.decoration=r.getAttribute("text-decoration"),i.rotated=0!=parseFloat(r.getAttribute("rotate")),i.kerning="auto"==r.getAttribute("kerning"),i.text=r.firstChild.nodeValue}return e.experimental("dojox.gfx.svg_attach"),n.attachNode=function(e){if(!e)return null;var t=null;switch(e.tagName.toLowerCase()){case n.Rect.nodeType:t=new n.Rect(e),f(t);break;case n.Ellipse.nodeType:t=new n.Ellipse(e),h(t,a.defaultEllipse);break;case n.Polyline.nodeType:t=new n.Polyline(e),h(t,a.defaultPolyline);break;case n.Path.nodeType:t=new n.Path(e),h(t,a.defaultPath);break;case n.Circle.nodeType:t=new n.Circle(e),h(t,a.defaultCircle);break;case n.Line.nodeType:t=new n.Line(e),h(t,a.defaultLine);break;case n.Image.nodeType:t=new n.Image(e),h(t,a.defaultImage);break;case n.Text.nodeType:var i=e.getElementsByTagName("textPath");i&&i.length?(t=new n.TextPath(e),h(t,a.defaultPath),p(t)):(t=new n.Text(e),m(t)),c(t);break;default:return null}return t instanceof n.Image||(s(t),d(t)),u(t),t},n.attachSurface=function(e){var t=new n.Surface;t.rawNode=e;var i=e.getElementsByTagName("defs");return 0==i.length?null:(t.defNode=i[0],t)},n});//# sourceMappingURL=svg_attach.js.map