//>>built
define("dojox/gfx/silverlight",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/on","dojo/_base/array","dojo/dom-geometry","dojo/dom","dojo/_base/sniff","./_base","./shape","./path","./registry"],function(e,t,a,i,r,n,o,s,l,d,u,h){function m(e){var t=d.normalizeColor(e),a=t.toHex(),i=Math.round(255*t.a);return i=(i<0?0:i>255?255:i).toString(16),"#"+(i.length<2?"0"+i:i)+a.slice(1)}function c(e,t){var a={target:e,currentTarget:e,preventDefault:function(){},stopPropagation:function(){}};try{if(t.source){a.target=t.source;var i=a.target.tag;a.gfxTarget=u.byId(i)}}catch(e){}if(t)try{a.ctrlKey=t.ctrl,a.shiftKey=t.shift;var r=t.getPosition(null);a.x=a.offsetX=a.layerX=r.x,a.y=a.offsetY=a.layerY=r.y;var n=M[e.getHost().content.root.name],s=o.position(n);a.clientX=s.x+r.x,a.clientY=s.y+r.y}catch(e){}return a}function f(e,t){var a={keyCode:t.platformKeyCode,ctrlKey:t.ctrl,shiftKey:t.shift};try{t.source&&(a.target=t.source,a.gfxTarget=u.byId(a.target.tag))}catch(e){}return a}var p=d.silverlight={};e.experimental("dojox.gfx.silverlight");var g={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},v={normal:400,bold:700},y={butt:"Flat",round:"Round",square:"Square"},k={bevel:"Bevel",round:"Round"},b={serif:"Times New Roman",times:"Times New Roman","sans-serif":"Arial",helvetica:"Arial",monotone:"Courier New",courier:"Courier New"};p.Shape=a("dojox.gfx.silverlight.Shape",u.Shape,{destroy:function(){l("gfxRegistry")&&u.dispose(this),this.rawNode=null},setFill:function(e){var t,a=this.rawNode.getHost().content;this.rawNode;if(!e)return this.fillStyle=null,this._setFillAttr(null),this;if("object"==typeof e&&"type"in e){switch(e.type){case"linear":this.fillStyle=t=d.makeParameters(d.defaultLinearGradient,e);var i=a.createFromXaml("<LinearGradientBrush/>");i.mappingMode="Absolute",i.startPoint=t.x1+","+t.y1,i.endPoint=t.x2+","+t.y2,n.forEach(t.colors,function(e){var t=a.createFromXaml("<GradientStop/>");t.offset=e.offset,t.color=m(e.color),i.gradientStops.add(t)}),this._setFillAttr(i);break;case"radial":this.fillStyle=t=d.makeParameters(d.defaultRadialGradient,e);var r=a.createFromXaml("<RadialGradientBrush/>"),o=d.matrix.multiplyPoint(d.matrix.invert(this._getAdjustedMatrix()),t.cx,t.cy),s=o.x+","+o.y;r.mappingMode="Absolute",r.gradientOrigin=s,r.center=s,r.radiusX=r.radiusY=t.r,n.forEach(t.colors,function(e){var t=a.createFromXaml("<GradientStop/>");t.offset=e.offset,t.color=m(e.color),r.gradientStops.add(t)}),this._setFillAttr(r);break;case"pattern":this.fillStyle=null,this._setFillAttr(null)}return this}this.fillStyle=t=d.normalizeColor(e);var l=a.createFromXaml("<SolidColorBrush/>");return l.color=t.toHex(),l.opacity=t.a,this._setFillAttr(l),this},_setFillAttr:function(e){this.rawNode.fill=e},setStroke:function(e){var a=this.rawNode.getHost().content,r=this.rawNode;if(!e)return this.strokeStyle=null,r.stroke=null,this;("string"==typeof e||t.isArray(e)||e instanceof i)&&(e={color:e});var n=this.strokeStyle=d.makeParameters(d.defaultStroke,e);if(n.color=d.normalizeColor(n.color),n){var o=a.createFromXaml("<SolidColorBrush/>");o.color=n.color.toHex(),o.opacity=n.color.a,r.stroke=o,r.strokeThickness=n.width,r.strokeStartLineCap=r.strokeEndLineCap=r.strokeDashCap=y[n.cap],"number"==typeof n.join?(r.strokeLineJoin="Miter",r.strokeMiterLimit=n.join):r.strokeLineJoin=k[n.join];var s=n.style.toLowerCase();if(s in g&&(s=g[s]),s instanceof Array){s=t.clone(s);var l;if("butt"!=n.cap){for(l=0;l<s.length;l+=2)--s[l]<1&&(s[l]=1);for(l=1;l<s.length;l+=2)++s[l]}r.strokeDashArray=s.join(",")}else r.strokeDashArray=null}return this},_getParentSurface:function(){for(var e=this.parent;e&&!(e instanceof d.Surface);e=e.parent);return e},_applyTransform:function(){var e=this._getAdjustedMatrix(),t=this.rawNode;if(e){var a=this.rawNode.getHost().content,i=a.createFromXaml("<MatrixTransform/>"),r=a.createFromXaml("<Matrix/>");r.m11=e.xx,r.m21=e.xy,r.m12=e.yx,r.m22=e.yy,r.offsetX=e.dx,r.offsetY=e.dy,i.matrix=r,t.renderTransform=i}else t.renderTransform=null;return this},setRawNode:function(e){e.fill=null,e.stroke=null,this.rawNode=e,this.rawNode.tag=this.getUID()},_moveToFront:function(){var e=this.parent.rawNode.children,t=this.rawNode;return e.remove(t),e.add(t),this},_moveToBack:function(){var e=this.parent.rawNode.children,t=this.rawNode;return e.remove(t),e.insert(0,t),this},_getAdjustedMatrix:function(){return this.matrix},setClip:function(e){this.inherited(arguments);var t=this.rawNode;if(e){var a=e?"width"in e?"rect":"cx"in e?"ellipse":"points"in e?"polyline":"d"in e?"path":null:null;if(e&&!a)return this;var i=this.getBoundingBox()||{x:0,y:0,width:0,height:0},r="1,0,0,1,"+-i.x+","+-i.y;switch(a){case"rect":t.clip=t.getHost().content.createFromXaml("<RectangleGeometry/>"),t.clip.rect=e.x+","+e.y+","+e.width+","+e.height,t.clip.transform=r;break;case"ellipse":t.clip=t.getHost().content.createFromXaml("<EllipseGeometry/>"),t.clip.center=e.cx+","+e.cy,t.clip.radiusX=e.rx,t.clip.radiusY=e.ry,t.clip.transform="1,0,0,1,"+-i.x+","+-i.y;break;case"polyline":if(e.points.length>2){var n,o=t.getHost().content.createFromXaml("<PathGeometry/>"),s=t.getHost().content.createFromXaml("<PathFigure/>");s.StartPoint=e.points[0]+","+e.points[1];for(var l=2;l<=e.points.length-2;l+=2)n=t.getHost().content.createFromXaml("<LineSegment/>"),n.Point=e.points[l]+","+e.points[l+1],s.segments.add(n);o.figures.add(s),o.transform="1,0,0,1,"+-i.x+","+-i.y,t.clip=o}}}else t.clip=null;return this}}),p.Group=a("dojox.gfx.silverlight.Group",p.Shape,{constructor:function(){u.Container._init.call(this)},setRawNode:function(e){this.rawNode=e,this.rawNode.tag=this.getUID()},destroy:function(){this.clear(!0),p.Shape.prototype.destroy.apply(this,arguments)}}),p.Group.nodeType="Canvas",p.Rect=a("dojox.gfx.silverlight.Rect",[p.Shape,u.Rect],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,a=this.shape;return t.width=a.width,t.height=a.height,t.radiusX=t.radiusY=a.r,this._applyTransform()},_getAdjustedMatrix:function(){var e=this.matrix,t=this.shape,a={dx:t.x,dy:t.y};return new d.Matrix2D(e?[e,a]:a)}}),p.Rect.nodeType="Rectangle",p.Ellipse=a("dojox.gfx.silverlight.Ellipse",[p.Shape,u.Ellipse],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,a=this.shape;return t.width=2*a.rx,t.height=2*a.ry,this._applyTransform()},_getAdjustedMatrix:function(){var e=this.matrix,t=this.shape,a={dx:t.cx-t.rx,dy:t.cy-t.ry};return new d.Matrix2D(e?[e,a]:a)}}),p.Ellipse.nodeType="Ellipse",p.Circle=a("dojox.gfx.silverlight.Circle",[p.Shape,u.Circle],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,a=this.shape;return t.width=t.height=2*a.r,this._applyTransform()},_getAdjustedMatrix:function(){var e=this.matrix,t=this.shape,a={dx:t.cx-t.r,dy:t.cy-t.r};return new d.Matrix2D(e?[e,a]:a)}}),p.Circle.nodeType="Ellipse",p.Line=a("dojox.gfx.silverlight.Line",[p.Shape,u.Line],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,a=this.shape;return t.x1=a.x1,t.y1=a.y1,t.x2=a.x2,t.y2=a.y2,this}}),p.Line.nodeType="Line",p.Polyline=a("dojox.gfx.silverlight.Polyline",[p.Shape,u.Polyline],{setShape:function(e,t){e&&e instanceof Array?(this.shape=d.makeParameters(this.shape,{points:e}),t&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=d.makeParameters(this.shape,e),this.bbox=null,this._normalizePoints();for(var a=this.shape.points,i=[],r=0;r<a.length;++r)i.push(a[r].x,a[r].y);return this.rawNode.points=i.join(","),this}}),p.Polyline.nodeType="Polyline",p.Image=a("dojox.gfx.silverlight.Image",[p.Shape,u.Image],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,a=this.shape;return t.width=a.width,t.height=a.height,t.source=a.src,this._applyTransform()},_getAdjustedMatrix:function(){var e=this.matrix,t=this.shape,a={dx:t.x,dy:t.y};return new d.Matrix2D(e?[e,a]:a)},setRawNode:function(e){this.rawNode=e,this.rawNode.tag=this.getUID()}}),p.Image.nodeType="Image",p.Text=a("dojox.gfx.silverlight.Text",[p.Shape,u.Text],{setShape:function(e){this.shape=d.makeParameters(this.shape,e),this.bbox=null;var a=this.rawNode,i=this.shape;return a.text=""+i.text,a.textDecorations="underline"===i.decoration?"Underline":"None",a["Canvas.Left"]=-1e4,a["Canvas.Top"]=-1e4,this._delay||(this._delay=window.setTimeout(t.hitch(this,"_delayAlignment"),10)),this},_delayAlignment:function(){var e,t,a=this.rawNode,i=this.shape;try{e=a.actualWidth,t=a.actualHeight}catch(e){return}var r=i.x,n=i.y-.75*t;switch(i.align){case"middle":r-=e/2;break;case"end":r-=e}this._delta={dx:r,dy:n},a["Canvas.Left"]=0,a["Canvas.Top"]=0,this._applyTransform(),delete this._delay},_getAdjustedMatrix:function(){var e,t=this.matrix,a=this._delta;return e=t?a?[t,a]:t:a||{},new d.Matrix2D(e)},setStroke:function(){return this},_setFillAttr:function(e){this.rawNode.foreground=e},setRawNode:function(e){this.rawNode=e,this.rawNode.tag=this.getUID()},getTextWidth:function(){return this.rawNode.actualWidth},getBoundingBox:function(){var e=null,t=this.getShape().text,a=this.rawNode,i=0,r=0;if(!d._base._isRendered(this))return{x:0,y:0,width:0,height:0};if(t){try{i=a.actualWidth,r=a.actualHeight}catch(e){return null}var n=d._base._computeTextLocation(this.getShape(),i,r,!0);e={x:n.x,y:n.y,width:i,height:r}}return e}}),p.Text.nodeType="TextBlock",p.Path=a("dojox.gfx.silverlight.Path",[p.Shape,h.Path],{_updateWithSegment:function(e){this.inherited(arguments);var t=this.shape.path;"string"==typeof t&&(this.rawNode.data=t||null)},setShape:function(e){this.inherited(arguments);var t=this.shape.path;return this.rawNode.data=t||null,this}}),p.Path.nodeType="Path",p.TextPath=a("dojox.gfx.silverlight.TextPath",[p.Shape,h.TextPath],{_updateWithSegment:function(e){},setShape:function(e){},_setText:function(){}}),p.TextPath.nodeType="text";var M={},w=new Function;p.Surface=a("dojox.gfx.silverlight.Surface",u.Surface,{constructor:function(){u.Container._init.call(this)},destroy:function(){this.clear(!0),window[this._onLoadName]=w,delete M[this._nodeName],this.inherited(arguments)},setDimensions:function(e,t){this.width=d.normalizedLength(e),this.height=d.normalizedLength(t);var a=this.rawNode&&this.rawNode.getHost();return a&&(a.width=e,a.height=t),this},getDimensions:function(){var e=this.rawNode&&this.rawNode.getHost(),t=e?{width:e.content.actualWidth,height:e.content.actualHeight}:null;return t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),t}}),p.createSurface=function(e,t,a){if(!t&&!a){var i=o.position(e);t=t||i.w,a=a||i.h}"number"==typeof t&&(t+="px"),"number"==typeof a&&(a+="px");var r=new p.Surface;e=s.byId(e),r._parent=e,r._nodeName=d._base._getUniqueId();var n=e.ownerDocument.createElement("script");n.type="text/xaml",n.id=d._base._getUniqueId(),n.text="<?xml version='1.0'?><Canvas xmlns='http://schemas.microsoft.com/client/2007' Name='"+r._nodeName+"'/>",e.parentNode.insertBefore(n,e),r._nodes.push(n);var u,h=d._base._getUniqueId(),m="__"+d._base._getUniqueId()+"_onLoad";r._onLoadName=m,window[m]=function(t){r.rawNode||(r.rawNode=s.byId(h,e.ownerDocument).content.root,M[r._nodeName]=e,r.onLoad(r))},u=l("safari")?"<embed type='application/x-silverlight' id='"+h+"' width='"+t+"' height='"+a+" background='transparent' source='#"+n.id+"' windowless='true' maxFramerate='60' onLoad='"+m+"' onError='__dojoSilverlightError' /><iframe style='visibility:hidden;height:0;width:0'/>":"<object type='application/x-silverlight' data='data:application/x-silverlight,' id='"+h+"' width='"+t+"' height='"+a+"'><param name='background' value='transparent' /><param name='source' value='#"+n.id+"' /><param name='windowless' value='true' /><param name='maxFramerate' value='60' /><param name='onLoad' value='"+m+"' /><param name='onError' value='__dojoSilverlightError' /></object>",e.innerHTML=u;var c=s.byId(h,e.ownerDocument);return c.content&&c.content.root?(r.rawNode=c.content.root,M[r._nodeName]=e):(r.rawNode=null,r.isLoaded=!1),r._nodes.push(c),r.width=d.normalizedLength(t),r.height=d.normalizedLength(a),r},__dojoSilverlightError=function(e,t){var a="Silverlight Error:\nCode: "+t.ErrorCode+"\nType: "+t.ErrorType+"\nMessage: "+t.ErrorMessage+"\n";switch(t.ErrorType){case"ParserError":a+="XamlFile: "+t.xamlFile+"\nLine: "+t.lineNumber+"\nPosition: "+t.charPosition+"\n";break;case"RuntimeError":a+="MethodName: "+t.methodName+"\n",0!=t.lineNumber&&(a+="Line: "+t.lineNumber+"\nPosition: "+t.charPosition+"\n")}};var j={_setFont:function(){var e=this.fontStyle,a=this.rawNode,i=e.family.toLowerCase();a.fontStyle="italic"==e.style?"Italic":"Normal",a.fontWeight=e.weight in v?v[e.weight]:e.weight,a.fontSize=d.normalizedLength(e.size),a.fontFamily=i in b?b[i]:e.family,this._delay||(this._delay=window.setTimeout(t.hitch(this,"_delayAlignment"),10))}},_=u.Container,x={add:function(e){return this!=e.getParent()&&(_.add.apply(this,arguments),this.rawNode.children.add(e.rawNode)),this},remove:function(e,t){if(this==e.getParent()){var a=e.rawNode.getParent();a&&a.children.remove(e.rawNode),_.remove.apply(this,arguments)}return this},clear:function(){return this.rawNode.children.clear(),_.clear.apply(this,arguments)},getBoundingBox:_.getBoundingBox,_moveChildToFront:_._moveChildToFront,_moveChildToBack:_._moveChildToBack},I={createObject:function(e,t){if(!this.rawNode)return null;var a=new e,i=this.rawNode.getHost().content.createFromXaml("<"+e.nodeType+"/>");return a.setRawNode(i),a.setShape(t),this.add(a),a}};t.extend(p.Text,j),t.extend(p.Group,x),t.extend(p.Group,u.Creator),t.extend(p.Group,I),t.extend(p.Surface,x),t.extend(p.Surface,u.Creator),t.extend(p.Surface,I);var T={onclick:{name:"MouseLeftButtonUp",fix:c},onmouseenter:{name:"MouseEnter",fix:c},onmouseleave:{name:"MouseLeave",fix:c},onmouseover:{name:"MouseEnter",fix:c},onmouseout:{name:"MouseLeave",fix:c},onmousedown:{name:"MouseLeftButtonDown",fix:c},onmouseup:{name:"MouseLeftButtonUp",fix:c},onmousemove:{name:"MouseMove",fix:c},onkeydown:{name:"KeyDown",fix:f},onkeyup:{name:"KeyUp",fix:f}},F={connect:function(e,a,i){return this.on(e,i?t.hitch(a,i):a)},on:function(e,a){if("string"==typeof e){0===e.indexOf("mouse")&&(e="on"+e);var i,n=e in T?T[e]:{name:e,fix:function(){return{}}};return i=this.getEventSource().addEventListener(n.name,function(e,t){a(n.fix(e,t))}),{name:n.name,token:i,remove:t.hitch(this,function(){this.getEventSource().removeEventListener(n.name,i)})}}return r(this,e,a)},disconnect:function(e){return e.remove()}};return t.extend(p.Shape,F),t.extend(p.Surface,F),d.equalSources=function(e,t){return e&&t&&e.equals(t)},p});//# sourceMappingURL=silverlight.js.map