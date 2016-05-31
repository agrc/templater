//>>built
define("dojox/gfx/vml_attach",["dojo/_base/kernel","dojo/_base/lang","./_base","./matrix","./path","dojo/_base/Color","./vml"],function(e,t,i,a,r,o,n){e.experimental("dojox.gfx.vml_attach"),n.attachNode=function(e){if(!e)return null;var t=null;switch(e.tagName.toLowerCase()){case n.Rect.nodeType:t=new n.Rect(e),u(t);break;case n.Ellipse.nodeType:e.style.width==e.style.height?(t=new n.Circle(e),m(t)):(t=new n.Ellipse(e),c(t));break;case n.Path.nodeType:switch(e.getAttribute("dojoGfxType")){case"line":t=new n.Line(e),f(t);break;case"polyline":t=new n.Polyline(e),p(t);break;case"path":t=new n.Path(e),k(t);break;case"text":t=new n.Text(e),v(t),b(t),M(t);break;case"textpath":t=new n.TextPath(e),k(t),v(t),b(t)}break;case n.Image.nodeType:switch(e.getAttribute("dojoGfxType")){case"image":t=new n.Image(e),g(t),y(t)}break;default:return null}return t instanceof n.Image||(s(t),l(t),t instanceof n.Text||d(t)),t},n.attachSurface=function(e){var t=new n.Surface;t.clipNode=e;var i=t.rawNode=e.firstChild,a=i.firstChild;return a&&"rect"==a.tagName?(t.bgNode=i,t):null};var s=function(e){var r,s,l,d=null,u=e.rawNode,c=u.fill;if(c.on&&"gradient"==c.type)for(d=t.clone(i.defaultLinearGradient),rad=a._degToRad(c.angle),d.x2=Math.cos(rad),d.y2=Math.sin(rad),d.colors=[],r=c.colors.value.split(";"),s=0;s<r.length;++s)l=r[s].match(/\S+/g),l&&2==l.length&&d.colors.push({offset:n._parseFloat(l[0]),color:new o(l[1])});else if(c.on&&"gradientradial"==c.type)for(d=t.clone(i.defaultRadialGradient),w=parseFloat(u.style.width),h=parseFloat(u.style.height),d.cx=isNaN(w)?0:c.focusposition.x*w,d.cy=isNaN(h)?0:c.focusposition.y*h,d.r=isNaN(w)?1:w/2,d.colors=[],r=c.colors.value.split(";"),s=r.length-1;s>=0;--s)l=r[s].match(/\S+/g),l&&2==l.length&&d.colors.push({offset:n._parseFloat(l[0]),color:new o(l[1])});else c.on&&"tile"==c.type?(d=t.clone(i.defaultPattern),d.width=i.pt2px(c.size.x),d.height=i.pt2px(c.size.y),d.x=c.origin.x*d.width,d.y=c.origin.y*d.height,d.src=c.src):c.on&&u.fillcolor&&(d=new o(u.fillcolor+""),d.a=c.opacity);e.fillStyle=d},l=function(e){var a=e.rawNode;if(!a.stroked)return void(e.strokeStyle=null);var r=e.strokeStyle=t.clone(i.defaultStroke),n=a.stroke;r.color=new o(a.strokecolor.value),r.width=i.normalizedLength(a.strokeweight+""),r.color.a=n.opacity,r.cap=this._translate(this._capMapReversed,n.endcap),r.join="miter"==n.joinstyle?n.miterlimit:n.joinstyle,r.style=n.dashstyle},d=function(e){var t=e.rawNode.skew,r=t.matrix,o=t.offset;e.matrix=a.normalize({xx:r.xtox,xy:r.ytox,yx:r.xtoy,yy:r.ytoy,dx:i.pt2px(o.x),dy:i.pt2px(o.y)})},u=function(e){var t=e.rawNode,a=t.outerHTML.match(/arcsize = \"(\d*\.?\d+[%f]?)\"/)[1],r=t.style,o=parseFloat(r.width),s=parseFloat(r.height);a=a.indexOf("%")>=0?parseFloat(a)/100:n._parseFloat(a),e.shape=i.makeParameters(i.defaultRect,{x:parseInt(r.left),y:parseInt(r.top),width:o,height:s,r:Math.min(o,s)*a})},c=function(e){var t=e.rawNode.style,a=parseInt(t.width)/2,r=parseInt(t.height)/2;e.shape=i.makeParameters(i.defaultEllipse,{cx:parseInt(t.left)+a,cy:parseInt(t.top)+r,rx:a,ry:r})},m=function(e){var t=e.rawNode.style,a=parseInt(t.width)/2;e.shape=i.makeParameters(i.defaultCircle,{cx:parseInt(t.left)+a,cy:parseInt(t.top)+a,r:a})},f=function(e){var a=e.shape=t.clone(i.defaultLine),r=e.rawNode.path.v.match(i.pathVmlRegExp);do{if(r.length<7||"m"!=r[0]||"l"!=r[3]||"e"!=r[6])break;a.x1=parseInt(r[1]),a.y1=parseInt(r[2]),a.x2=parseInt(r[4]),a.y2=parseInt(r[5])}while(!1)},p=function(e){var a=e.shape=t.clone(i.defaultPolyline),r=e.rawNode.path.v.match(i.pathVmlRegExp);do{if(r.length<3||"m"!=r[0])break;var o=parseInt(r[0]),n=parseInt(r[1]);if(isNaN(o)||isNaN(n))break;if(a.points.push({x:o,y:n}),r.length<6||"l"!=r[3])break;for(var s=4;s<r.length&&(o=parseInt(r[s]),n=parseInt(r[s+1]),!isNaN(o)&&!isNaN(n));s+=2)a.points.push({x:o,y:n})}while(!1)},g=function(e){e.shape=t.clone(i.defaultImage),e.shape.src=e.rawNode.firstChild.src},y=function(e){var t=e.rawNode.filters["DXImageTransform.Microsoft.Matrix"];e.matrix=a.normalize({xx:t.M11,xy:t.M12,yx:t.M21,yy:t.M22,dx:t.Dx,dy:t.Dy})},v=function(e){var a=e.shape=t.clone(i.defaultText),r=e.rawNode,o=r.path.v.match(i.pathVmlRegExp);do{if(!o||7!=o.length)break;for(var s=r.childNodes,l=0;l<s.length&&"textpath"!=s[l].tagName;++l);if(l>=s.length)break;var d=s[l].style;switch(a.text=s[l].string,d["v-text-align"]){case"left":a.x=parseInt(o[1]),a.align="start";break;case"center":a.x=(parseInt(o[1])+parseInt(o[4]))/2,a.align="middle";break;case"right":a.x=parseInt(o[4]),a.align="end"}return a.y=parseInt(o[2]),a.decoration=d["text-decoration"],a.rotated=d["v-rotate-letters"].toLowerCase()in n._bool,void(a.kerning=d["v-text-kern"].toLowerCase()in n._bool)}while(!1);e.shape=null},b=function(e){for(var a=e.fontStyle=t.clone(i.defaultFont),r=e.rawNode.childNodes,o=0;o<r.length&&"textpath"==r[o].tagName;++o);if(o>=r.length)return void(e.fontStyle=null);var n=r[o].style;a.style=n.fontstyle,a.variant=n.fontvariant,a.weight=n.fontweight,a.size=n.fontsize,a.family=n.fontfamily},M=function(e){d(e);var t=e.matrix,r=e.fontStyle;t&&r&&(e.matrix=a.multiply(t,{dy:.35*i.normalizedLength(r.size)}))},k=function(e){for(var a=e.shape=t.clone(i.defaultPath),o=e.rawNode.path.v.match(i.pathVmlRegExp),n=[],s=!1,l=r._pathVmlToSvgMap,d=0;d<o.length;++o){var h=o[d];if(h in l)s=!1,n.push(l[h]);else if(!s){var u=parseInt(h);isNaN(u)?s=!0:n.push(u)}}var c=n.length;c>=4&&""==n[c-1]&&0==n[c-2]&&0==n[c-3]&&"l"==n[c-4]&&n.splice(c-4,4),c&&(a.path=n.join(" "))};return n});//# sourceMappingURL=vml_attach.js.map