//>>built
define("dojox/gfx/canvas",["./_base","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-geometry","dojo/dom","./shape","./path","./arc","./matrix","./decompose","./bezierutils"],function(e,t,a,r,o,n,s,l,d,u,h,c,m){function f(e,t,a,i,r,o,n,s,l,d){var u,h,c=t.length,m=0;for(d?(h=d.l/r,m=d.i):h=t[0]/r;o<n;)o+h>n&&(u={l:(o+h-n)*r,i:m},h=n-o),m%2||(e.beginPath(),e.arc(a,i,r,o,o+h,s),l&&e.stroke()),o+=h,++m,h=t[m%c]/r;return u}function g(e,t,a,i){var r,o=0,n=0,s=0;for(i?(r=i.l,s=i.i):r=t[0];n<1;){if(1==(n=m.tAtLength(e,r))){o={l:r-m.computeLength(e),i:s}}var l=m.splitBezierAtT(e,n);s%2||a.push(l[0]),e=l[1],++s,r=t[s%t.length]}return o}function y(e,t,a,i){for(var r=[t.last.x,t.last.y].concat(a),o=4===a.length,n=!(e instanceof Array),s=o?"quadraticCurveTo":"bezierCurveTo",l=[],d=g(r,t.canvasDash,l,i),u=0;u<l.length;++u){var h=l[u];n?(e.moveTo(h[0],h[1]),e[s].apply(e,h.slice(2))):(e.push("moveTo",[h[0],h[1]]),e.push(s,h.slice(2)))}return d}function v(e,t,a,i,r,o,n){var s,l,d=0,u=0,h=0,c=m.distance(a,i,r,o),f=0,p=t.canvasDash,g=a,y=i,v=!(e instanceof Array);for(n?(h=n.l,f=n.i):h+=p[0];Math.abs(1-u)>.01;)h>c&&(d={l:h-c,i:f},h=c),u=h/c,s=a+(r-a)*u,l=i+(o-i)*u,f++%2||(v?(e.moveTo(g,y),e.lineTo(s,l)):(e.push("moveTo",[g,y]),e.push("lineTo",[s,l]))),g=s,y=l,h+=p[f%p.length];return d}var b=e.canvas={},M=null,k=h.multiplyPoint,w=Math.PI,_=2*w,x=w/2,j=t.extend;if(o.global.CanvasRenderingContext2D)var T=o.doc.createElement("canvas").getContext("2d"),I="function"==typeof T.setLineDash,C="function"==typeof T.fillText;var F={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]};b.Shape=r("dojox.gfx.canvas.Shape",l.Shape,{_render:function(e){e.save(),this._renderTransform(e),this._renderClip(e),this._renderShape(e),this._renderFill(e,!0),this._renderStroke(e,!0),e.restore()},_renderClip:function(e){this.canvasClip&&(this.canvasClip.render(e),e.clip())},_renderTransform:function(e){if("canvasTransform"in this){var t=this.canvasTransform;e.translate(t.dx,t.dy),e.rotate(t.angle2),e.scale(t.sx,t.sy),e.rotate(t.angle1)}},_renderShape:function(e){},_renderFill:function(e,t){if("canvasFill"in this){var a=this.fillStyle;if("canvasFillImage"in this){var i=a.width,r=a.height,o=this.canvasFillImage.width,n=this.canvasFillImage.height,s=i==o?1:i/o,l=r==n?1:r/n,d=Math.min(s,l),u=(i-d*o)/2,h=(r-d*n)/2;M.width=i,M.height=r;var c=M.getContext("2d");c.clearRect(0,0,i,r),c.drawImage(this.canvasFillImage,0,0,o,n,u,h,d*o,d*n),this.canvasFill=e.createPattern(M,"repeat"),delete this.canvasFillImage}e.fillStyle=this.canvasFill,t&&("pattern"!==a.type||0===a.x&&0===a.y||e.translate(a.x,a.y),e.fill())}else e.fillStyle="rgba(0,0,0,0.0)"},_renderStroke:function(e,t){var a=this.strokeStyle;a?(e.strokeStyle=a.color.toString(),e.lineWidth=a.width,e.lineCap=a.cap,"number"==typeof a.join?(e.lineJoin="miter",e.miterLimit=a.join):e.lineJoin=a.join,this.canvasDash?I?(e.setLineDash(this.canvasDash),t&&e.stroke()):this._renderDashedStroke(e,t):t&&e.stroke()):t||(e.strokeStyle="rgba(0,0,0,0.0)")},_renderDashedStroke:function(e,t){},getEventSource:function(){return null},on:function(){},connect:function(){},disconnect:function(){},canvasClip:null,setClip:function(e){this.inherited(arguments);var t=e?"width"in e?"rect":"cx"in e?"ellipse":"points"in e?"polyline":"d"in e?"path":null:null;return e&&!t?this:(this.canvasClip=e?S(t,e):null,this.parent&&this.parent._makeDirty(),this)}});var S=function(e,a){switch(e){case"ellipse":return{canvasEllipse:P({shape:a}),render:function(e){return b.Ellipse.prototype._renderShape.call(this,e)}};case"rect":return{shape:t.delegate(a,{r:0}),render:function(e){return b.Rect.prototype._renderShape.call(this,e)}};case"path":return{canvasPath:A(a),render:function(e){this.canvasPath._renderShape(e)}};case"polyline":return{canvasPolyline:a.points,render:function(e){return b.Polyline.prototype._renderShape.call(this,e)}}}return null},A=function(e){var t=new dojox.gfx.canvas.Path;return t.canvasPath=[],t._setPath(e.d),t},E=function(e,t,a){var i=e.prototype[t];e.prototype[t]=a?function(){return this.parent&&this.parent._makeDirty(),i.apply(this,arguments),a.call(this),this}:function(){return this.parent&&this.parent._makeDirty(),i.apply(this,arguments)}};E(b.Shape,"setTransform",function(){this.matrix?this.canvasTransform=e.decompose(this.matrix):delete this.canvasTransform}),E(b.Shape,"setFill",function(){var t,i=this.fillStyle;if(i){if("object"==typeof i&&"type"in i){var r=this.surface.rawNode.getContext("2d");switch(i.type){case"linear":case"radial":t="linear"==i.type?r.createLinearGradient(i.x1,i.y1,i.x2,i.y2):r.createRadialGradient(i.cx,i.cy,0,i.cx,i.cy,i.r),a.forEach(i.colors,function(a){t.addColorStop(a.offset,e.normalizeColor(a.color).toString())});break;case"pattern":M||(M=document.createElement("canvas"));var o=new Image;this.surface.downloadImage(o,i.src),this.canvasFillImage=o}}else t=i.toString();this.canvasFill=t}else delete this.canvasFill}),E(b.Shape,"setStroke",function(){var e=this.strokeStyle;if(e){var t=this.strokeStyle.style.toLowerCase();if(t in F&&(t=F[t]),t instanceof Array){t=t.slice(),this.canvasDash=t;var a;for(a=0;a<t.length;++a)t[a]*=e.width;if("butt"!=e.cap){for(a=0;a<t.length;a+=2)t[a]-=e.width,t[a]<1&&(t[a]=1);for(a=1;a<t.length;a+=2)t[a]+=e.width}}else delete this.canvasDash}else delete this.canvasDash;this._needsDash=!I&&!!this.canvasDash}),E(b.Shape,"setShape"),b.Group=r("dojox.gfx.canvas.Group",b.Shape,{constructor:function(){l.Container._init.call(this)},_render:function(e){e.save(),this._renderTransform(e),this._renderClip(e);for(var t=0;t<this.children.length;++t)this.children[t]._render(e);e.restore()},destroy:function(){l.Container.clear.call(this,!0),b.Shape.prototype.destroy.apply(this,arguments)}}),b.Rect=r("dojox.gfx.canvas.Rect",[b.Shape,l.Rect],{_renderShape:function(e){var t=this.shape,a=Math.min(t.r,t.height/2,t.width/2),i=t.x,r=i+t.width,o=t.y,n=o+t.height,s=i+a,l=r-a,d=o+a,u=n-a;e.beginPath(),e.moveTo(s,o),a?(e.arc(l,d,a,-x,0,!1),e.arc(l,u,a,0,x,!1),e.arc(s,u,a,x,w,!1),e.arc(s,d,a,w,w+x,!1)):(e.lineTo(l,o),e.lineTo(r,u),e.lineTo(s,n),e.lineTo(i,d)),e.closePath()},_renderDashedStroke:function(e,t){var a,i=this.shape,r=Math.min(i.r,i.height/2,i.width/2),o=i.x,n=o+i.width,s=i.y,l=s+i.height,d=o+r,u=n-r,h=s+r,c=l-r;r?(e.beginPath(),a=v(e,this,d,s,u,s),t&&e.stroke(),a=f(e,this.canvasDash,u,h,r,-x,0,!1,t,a),e.beginPath(),a=v(e,this,n,h,n,c,a),t&&e.stroke(),a=f(e,this.canvasDash,u,c,r,0,x,!1,t,a),e.beginPath(),a=v(e,this,u,l,d,l,a),t&&e.stroke(),a=f(e,this.canvasDash,d,c,r,x,w,!1,t,a),e.beginPath(),a=v(e,this,o,c,o,h,a),t&&e.stroke(),f(e,this.canvasDash,d,h,r,w,w+x,!1,t,a)):(e.beginPath(),a=v(e,this,d,s,u,s),a=v(e,this,u,s,n,c,a),a=v(e,this,n,c,d,l,a),v(e,this,d,l,o,h,a),t&&e.stroke())}});var z=[];!function(){var e=u.curvePI4;z.push(e.s,e.c1,e.c2,e.e);for(var t=45;t<360;t+=45){var a=h.rotateg(t);z.push(k(a,e.c1),k(a,e.c2),k(a,e.e))}}();var P=function(e){var t,a,i,r=[],o=e.shape,n=h.normalize([h.translate(o.cx,o.cy),h.scale(o.rx,o.ry)]);t=k(n,z[0]),r.push([t.x,t.y]);for(var s=1;s<z.length;s+=3)a=k(n,z[s]),i=k(n,z[s+1]),t=k(n,z[s+2]),r.push([a.x,a.y,i.x,i.y,t.x,t.y]);if(e._needsDash){var l=[],d=r[0];for(s=1;s<r.length;++s){var u=[];g(d.concat(r[s]),e.canvasDash,u),d=[r[s][4],r[s][5]],l.push(u)}e._dashedPoints=l}return r};b.Ellipse=r("dojox.gfx.canvas.Ellipse",[b.Shape,l.Ellipse],{setShape:function(){return this.inherited(arguments),this.canvasEllipse=P(this),this},setStroke:function(){return this.inherited(arguments),I||(this.canvasEllipse=P(this)),this},_renderShape:function(e){var t,a=this.canvasEllipse;for(e.beginPath(),e.moveTo.apply(e,a[0]),t=1;t<a.length;++t)e.bezierCurveTo.apply(e,a[t]);e.closePath()},_renderDashedStroke:function(e,t){var a=this._dashedPoints;e.beginPath();for(var i=0;i<a.length;++i)for(var r=a[i],o=0;o<r.length;++o){var n=r[o];e.moveTo(n[0],n[1]),e.bezierCurveTo(n[2],n[3],n[4],n[5],n[6],n[7])}t&&e.stroke()}}),b.Circle=r("dojox.gfx.canvas.Circle",[b.Shape,l.Circle],{_renderShape:function(e){var t=this.shape;e.beginPath(),e.arc(t.cx,t.cy,t.r,0,_,1)},_renderDashedStroke:function(e,t){var a,r=this.shape,o=0,n=this.canvasDash.length;for(i=0;o<_;)a=this.canvasDash[i%n]/r.r,i%2||(e.beginPath(),e.arc(r.cx,r.cy,r.r,o,o+a,0),t&&e.stroke()),o+=a,++i}}),b.Line=r("dojox.gfx.canvas.Line",[b.Shape,l.Line],{_renderShape:function(e){var t=this.shape;e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2)},_renderDashedStroke:function(e,t){var a=this.shape;e.beginPath(),v(e,this,a.x1,a.y1,a.x2,a.y2),t&&e.stroke()}}),b.Polyline=r("dojox.gfx.canvas.Polyline",[b.Shape,l.Polyline],{setShape:function(){this.inherited(arguments);var e,t,a,i=this.shape.points,r=i[0];if(this.bbox=null,this._normalizePoints(),i.length)if("number"==typeof r)e=i;else for(e=[],a=0;a<i.length;++a)t=i[a],e.push(t.x,t.y);else e=[];return this.canvasPolyline=e,this},_renderShape:function(e){var t=this.canvasPolyline;if(t.length){e.beginPath(),e.moveTo(t[0],t[1]);for(var a=2;a<t.length;a+=2)e.lineTo(t[a],t[a+1])}},_renderDashedStroke:function(e,t){var a=this.canvasPolyline,i=0;e.beginPath();for(var r=0;r<a.length;r+=2)i=v(e,this,a[r],a[r+1],a[r+2],a[r+3],i);t&&e.stroke()}}),b.Image=r("dojox.gfx.canvas.Image",[b.Shape,l.Image],{setShape:function(){this.inherited(arguments);var e=new Image;return this.surface.downloadImage(e,this.shape.src),this.canvasImage=e,this},_renderShape:function(e){var t=this.shape;e.drawImage(this.canvasImage,t.x,t.y,t.width,t.height)}}),b.Text=r("dojox.gfx.canvas.Text",[b.Shape,l.Text],{_setFont:function(){this.fontStyle?this.canvasFont=e.makeFontString(this.fontStyle):delete this.canvasFont},getTextWidth:function(){var e,t=this.shape,a=0;return t.text&&(e=this.surface.rawNode.getContext("2d"),e.save(),this._renderTransform(e),this._renderFill(e,!1),this._renderStroke(e,!1),this.canvasFont&&(e.font=this.canvasFont),a=e.measureText(t.text).width,e.restore()),a},_render:function(e){e.save(),this._renderTransform(e),this._renderFill(e,!1),this._renderStroke(e,!1),this._renderShape(e),e.restore()},_renderShape:function(e){var t,a=this.shape;a.text&&(t="middle"===a.align?"center":a.align,e.textAlign=t,this.canvasFont&&(e.font=this.canvasFont),this.canvasFill&&e.fillText(a.text,a.x,a.y),this.strokeStyle&&(e.beginPath(),e.strokeText(a.text,a.x,a.y),e.closePath()))}}),E(b.Text,"setFont"),C||b.Text.extend({getTextWidth:function(){return 0},getBoundingBox:function(){return null},_renderShape:function(){}});var L={M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"};b.Path=r("dojox.gfx.canvas.Path",[b.Shape,d.Path],{constructor:function(){this.lastControl={}},setShape:function(){return this.canvasPath=[],this._dashedPath=[],this.inherited(arguments)},setStroke:function(){return this.inherited(arguments),I||(this.segmented=!1,this._confirmSegmented()),this},_setPath:function(){this._dashResidue=null,this.inherited(arguments)},_updateWithSegment:function(e){var a=t.clone(this.last);this[L[e.action]](this.canvasPath,e.action,e.args,this._needsDash?this._dashedPath:null),this.last=a,this.inherited(arguments)},_renderShape:function(e){var t=this.canvasPath;e.beginPath();for(var a=0;a<t.length;a+=2)e[t[a]].apply(e,t[a+1])},_renderDashedStroke:I?function(){}:function(e,t){var a=this._dashedPath;e.beginPath();for(var i=0;i<a.length;i+=2)e[a[i]].apply(e,a[i+1]);t&&e.stroke()},_moveToA:function(e,t,a,i){e.push("moveTo",[a[0],a[1]]),i&&i.push("moveTo",[a[0],a[1]]);for(var r=2;r<a.length;r+=2)e.push("lineTo",[a[r],a[r+1]]),i&&(this._dashResidue=v(i,this,a[r-2],a[r-1],a[r],a[r+1],this._dashResidue));this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl={}},_moveToR:function(e,t,a,i){var r;"x"in this.last?(r=[this.last.x+=a[0],this.last.y+=a[1]],e.push("moveTo",r),i&&i.push("moveTo",r)):(r=[this.last.x=a[0],this.last.y=a[1]],e.push("moveTo",r),i&&i.push("moveTo",r));for(var o=2;o<a.length;o+=2)e.push("lineTo",[this.last.x+=a[o],this.last.y+=a[o+1]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_lineToA:function(e,t,a,i){for(var r=0;r<a.length;r+=2)i&&(this._dashResidue=v(i,this,this.last.x,this.last.y,a[r],a[r+1],this._dashResidue)),e.push("lineTo",[a[r],a[r+1]]);this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl={}},_lineToR:function(e,t,a,i){for(var r=0;r<a.length;r+=2)e.push("lineTo",[this.last.x+=a[r],this.last.y+=a[r+1]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_hLineToA:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[a[r],this.last.y]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],a[r],this.last.y,this._dashResidue));this.last.x=a[a.length-1],this.lastControl={}},_hLineToR:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x+=a[r],this.last.y]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_vLineToA:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x,a[r]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,a[r],this._dashResidue));this.last.y=a[a.length-1],this.lastControl={}},_vLineToR:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x,this.last.y+=a[r]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_curveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=6)e.push("bezierCurveTo",a.slice(r,r+6)),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue));this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl.x=a[a.length-4],this.lastControl.y=a[a.length-3],this.lastControl.type="C"},_curveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=6)e.push("bezierCurveTo",[this.last.x+a[r],this.last.y+a[r+1],this.lastControl.x=this.last.x+a[r+2],this.lastControl.y=this.last.y+a[r+3],this.last.x+a[r+4],this.last.y+a[r+5]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.last.x+=a[r+4],this.last.y+=a[r+5];this.lastControl.type="C"},_smoothCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=4){var o="C"==this.lastControl.type;e.push("bezierCurveTo",[o?2*this.last.x-this.lastControl.x:this.last.x,o?2*this.last.y-this.lastControl.y:this.last.y,a[r],a[r+1],a[r+2],a[r+3]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.lastControl.x=a[r],this.lastControl.y=a[r+1],this.lastControl.type="C"}this.last.x=a[a.length-2],this.last.y=a[a.length-1]},_smoothCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=4){var o="C"==this.lastControl.type;e.push("bezierCurveTo",[o?2*this.last.x-this.lastControl.x:this.last.x,o?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+a[r],this.last.y+a[r+1],this.last.x+a[r+2],this.last.y+a[r+3]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.lastControl.x=this.last.x+a[r],this.lastControl.y=this.last.y+a[r+1],this.lastControl.type="C",this.last.x+=a[r+2],this.last.y+=a[r+3]}},_qCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=4)e.push("quadraticCurveTo",a.slice(r,r+4));i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl.x=a[a.length-4],this.lastControl.y=a[a.length-3],this.lastControl.type="Q"},_qCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=4)e.push("quadraticCurveTo",[this.lastControl.x=this.last.x+a[r],this.lastControl.y=this.last.y+a[r+1],this.last.x+a[r+2],this.last.y+a[r+3]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.last.x+=a[r+2],this.last.y+=a[r+3];this.lastControl.type="Q"},_qSmoothCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=2){var o="Q"==this.lastControl.type;e.push("quadraticCurveTo",[this.lastControl.x=o?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=o?2*this.last.y-this.lastControl.y:this.last.y,a[r],a[r+1]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.lastControl.type="Q"}this.last.x=a[a.length-2],this.last.y=a[a.length-1]},_qSmoothCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=2){var o="Q"==this.lastControl.type;e.push("quadraticCurveTo",[this.lastControl.x=o?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=o?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+a[r],this.last.y+a[r+1]]),i&&(this._dashResidue=y(i,this,e[e.length-1],this._dashResidue)),this.lastControl.type="Q",this.last.x+=a[r],this.last.y+=a[r+1]}},_arcTo:function(e,t,i,r){for(var o="a"==t,n=0;n<i.length;n+=7){var s=i[n+5],l=i[n+6];o&&(s+=this.last.x,l+=this.last.y);var d=u.arcAsBezier(this.last,i[n],i[n+1],i[n+2],i[n+3]?1:0,i[n+4]?1:0,s,l);a.forEach(d,function(t){e.push("bezierCurveTo",t)}),r&&(this._dashResidue=y(r,this,p,this._dashResidue)),this.last.x=s,this.last.y=l}this.lastControl={}},_closePath:function(e,t,a,i){e.push("closePath",[]),i&&(this._dashResidue=v(i,this,this.last.x,this.last.y,i[1][0],i[1][1],this._dashResidue)),this.lastControl={}}}),a.forEach(["moveTo","lineTo","hLineTo","vLineTo","curveTo","smoothCurveTo","qCurveTo","qSmoothCurveTo","arcTo","closePath"],function(e){E(b.Path,e)}),b.TextPath=r("dojox.gfx.canvas.TextPath",[b.Shape,d.TextPath],{_renderShape:function(e){this.shape},_setText:function(){},_setFont:function(){}}),b.Surface=r("dojox.gfx.canvas.Surface",l.Surface,{constructor:function(){l.Container._init.call(this),this.pendingImageCount=0,this.makeDirty()},destroy:function(){l.Container.clear.call(this,!0),this.inherited(arguments)},setDimensions:function(t,a){if(this.width=e.normalizedLength(t),this.height=e.normalizedLength(a),!this.rawNode)return this;var i=!1;return this.rawNode.width!=this.width&&(this.rawNode.width=this.width,i=!0),this.rawNode.height!=this.height&&(this.rawNode.height=this.height,i=!0),i&&this.makeDirty(),this},getDimensions:function(){return this.rawNode?{width:this.rawNode.width,height:this.rawNode.height}:null},_render:function(e){if(this.rawNode&&(e||!this.pendingImageCount)){var t=this.rawNode.getContext("2d");t.clearRect(0,0,this.rawNode.width,this.rawNode.height),this.render(t),"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender)}},render:function(e){e.save();for(var t=0;t<this.children.length;++t)this.children[t]._render(e);e.restore()},makeDirty:function(){this.pendingImagesCount||"pendingRender"in this||this._batch||(this.pendingRender=setTimeout(t.hitch(this,this._render),0))},downloadImage:function(e,a){var i=t.hitch(this,this.onImageLoad);!this.pendingImageCount++&&"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender),e.onload=i,e.onerror=i,e.onabort=i,e.src=a},onImageLoad:function(){--this.pendingImageCount||(this.onImagesLoaded(),this._render())},onImagesLoaded:function(){},getEventSource:function(){return null},connect:function(){},disconnect:function(){},on:function(){}}),b.createSurface=function(t,a,i){if(!a&&!i){var r=n.position(t);a=a||r.w,i=i||r.h}"number"==typeof a&&(a+="px"),"number"==typeof i&&(i+="px");var o=new b.Surface,l=s.byId(t),d=l.ownerDocument.createElement("canvas");return d.width=e.normalizedLength(a),d.height=e.normalizedLength(i),l.appendChild(d),o.rawNode=d,o._parent=l,o.surface=o,o};var N=l.Container,D={openBatch:function(){return++this._batch,this},closeBatch:function(){return this._batch=this._batch>0?--this._batch:0,this._makeDirty(),this},_makeDirty:function(){this._batch||this.surface.makeDirty()},add:function(e){return this._makeDirty(),N.add.apply(this,arguments)},remove:function(e,t){return this._makeDirty(),N.remove.apply(this,arguments)},clear:function(){return this._makeDirty(),N.clear.apply(this,arguments)},getBoundingBox:N.getBoundingBox,_moveChildToFront:function(e){return this._makeDirty(),N._moveChildToFront.apply(this,arguments)},_moveChildToBack:function(e){return this._makeDirty(),N._moveChildToBack.apply(this,arguments)}},G={createObject:function(e,t){var a=new e;return a.surface=this.surface,a.setShape(t),this.add(a),a}};return j(b.Group,D),j(b.Group,l.Creator),j(b.Group,G),j(b.Surface,D),j(b.Surface,l.Creator),j(b.Surface,G),b.fixTarget=function(e,t){return!0},b});//# sourceMappingURL=canvas.js.map