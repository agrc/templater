//>>built
define("dojox/gfx/canvas",["./_base","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-geometry","dojo/dom","./shape","./path","./arc","./matrix","./decompose","./bezierutils"],function(e,t,a,r,o,n,s,l,d,h,u,m,c){function f(e,t,a,i,r,o,n,s,l,d){var h,u,m=t.length,c=0;for(d?(u=d.l/r,c=d.i):u=t[0]/r;o<n;)o+u>n&&(h={l:(o+u-n)*r,i:c},u=n-o),c%2||(e.beginPath(),e.arc(a,i,r,o,o+u,s),l&&e.stroke()),o+=u,++c,u=t[c%m]/r;return h}function y(e,t,a,i){var r,o=0,n=0,s=0;for(i?(r=i.l,s=i.i):r=t[0];n<1;){if(1==(n=c.tAtLength(e,r))){o={l:r-c.computeLength(e),i:s}}var l=c.splitBezierAtT(e,n);s%2||a.push(l[0]),e=l[1],++s,r=t[s%t.length]}return o}function g(e,t,a,i){for(var r=[t.last.x,t.last.y].concat(a),o=4===a.length,n=!(e instanceof Array),s=o?"quadraticCurveTo":"bezierCurveTo",l=[],d=y(r,t.canvasDash,l,i),h=0;h<l.length;++h){var u=l[h];n?(e.moveTo(u[0],u[1]),e[s].apply(e,u.slice(2))):(e.push("moveTo",[u[0],u[1]]),e.push(s,u.slice(2)))}return d}function v(e,t,a,i,r,o,n){var s,l,d=0,h=0,u=0,m=c.distance(a,i,r,o),f=0,p=t.canvasDash,y=a,g=i,v=!(e instanceof Array);for(n?(u=n.l,f=n.i):u+=p[0];Math.abs(1-h)>.01;)u>m&&(d={l:u-m,i:f},u=m),h=u/m,s=a+(r-a)*h,l=i+(o-i)*h,f++%2||(v?(e.moveTo(y,g),e.lineTo(s,l)):(e.push("moveTo",[y,g]),e.push("lineTo",[s,l]))),y=s,g=l,u+=p[f%p.length];return d}var b=e.canvas={},k=null,M=u.multiplyPoint,w=Math.PI,x=2*w,_=w/2,T=t.extend;if(o.global.CanvasRenderingContext2D)var j=o.doc.createElement("canvas").getContext("2d"),I="function"==typeof j.setLineDash,F="function"==typeof j.fillText;var C={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]};b.Shape=r("dojox.gfx.canvas.Shape",l.Shape,{_render:function(e){e.save(),this._renderTransform(e),this._renderClip(e),this._renderShape(e),this._renderFill(e,!0),this._renderStroke(e,!0),e.restore()},_renderClip:function(e){this.canvasClip&&(this.canvasClip.render(e),e.clip())},_renderTransform:function(e){if("canvasTransform"in this){var t=this.canvasTransform;e.translate(t.dx,t.dy),e.rotate(t.angle2),e.scale(t.sx,t.sy),e.rotate(t.angle1)}},_renderShape:function(e){},_renderFill:function(e,t){if("canvasFill"in this){var a=this.fillStyle;if("canvasFillImage"in this){var i=a.width,r=a.height,o=this.canvasFillImage.width,n=this.canvasFillImage.height,s=i==o?1:i/o,l=r==n?1:r/n,d=Math.min(s,l),h=(i-d*o)/2,u=(r-d*n)/2;k.width=i,k.height=r;var m=k.getContext("2d");m.clearRect(0,0,i,r),m.drawImage(this.canvasFillImage,0,0,o,n,h,u,d*o,d*n),this.canvasFill=e.createPattern(k,"repeat"),delete this.canvasFillImage}e.fillStyle=this.canvasFill,t&&("pattern"!==a.type||0===a.x&&0===a.y||e.translate(a.x,a.y),e.fill())}else e.fillStyle="rgba(0,0,0,0.0)"},_renderStroke:function(e,t){var a=this.strokeStyle;a?(e.strokeStyle=a.color.toString(),e.lineWidth=a.width,e.lineCap=a.cap,"number"==typeof a.join?(e.lineJoin="miter",e.miterLimit=a.join):e.lineJoin=a.join,this.canvasDash?I?(e.setLineDash(this.canvasDash),t&&e.stroke()):this._renderDashedStroke(e,t):t&&e.stroke()):t||(e.strokeStyle="rgba(0,0,0,0.0)")},_renderDashedStroke:function(e,t){},getEventSource:function(){return null},on:function(){},connect:function(){},disconnect:function(){},canvasClip:null,setClip:function(e){this.inherited(arguments);var t=e?"width"in e?"rect":"cx"in e?"ellipse":"points"in e?"polyline":"d"in e?"path":null:null;return e&&!t?this:(this.canvasClip=e?S(t,e):null,this.parent&&this.parent._makeDirty(),this)}});var S=function(e,a){switch(e){case"ellipse":return{canvasEllipse:P({shape:a}),render:function(e){return b.Ellipse.prototype._renderShape.call(this,e)}};case"rect":return{shape:t.delegate(a,{r:0}),render:function(e){return b.Rect.prototype._renderShape.call(this,e)}};case"path":return{canvasPath:E(a),render:function(e){this.canvasPath._renderShape(e)}};case"polyline":return{canvasPolyline:a.points,render:function(e){return b.Polyline.prototype._renderShape.call(this,e)}}}return null},E=function(e){var t=new dojox.gfx.canvas.Path;return t.canvasPath=[],t._setPath(e.d),t},A=function(e,t,a){var i=e.prototype[t];e.prototype[t]=a?function(){return this.parent&&this.parent._makeDirty(),i.apply(this,arguments),a.call(this),this}:function(){return this.parent&&this.parent._makeDirty(),i.apply(this,arguments)}};A(b.Shape,"setTransform",function(){this.matrix?this.canvasTransform=e.decompose(this.matrix):delete this.canvasTransform}),A(b.Shape,"setFill",function(){var t,i=this.fillStyle;if(i){if("object"==typeof i&&"type"in i){var r=this.surface.rawNode.getContext("2d");switch(i.type){case"linear":case"radial":t="linear"==i.type?r.createLinearGradient(i.x1,i.y1,i.x2,i.y2):r.createRadialGradient(i.cx,i.cy,0,i.cx,i.cy,i.r),a.forEach(i.colors,function(a){t.addColorStop(a.offset,e.normalizeColor(a.color).toString())});break;case"pattern":k||(k=document.createElement("canvas"));var o=new Image;this.surface.downloadImage(o,i.src),this.canvasFillImage=o}}else t=i.toString();this.canvasFill=t}else delete this.canvasFill}),A(b.Shape,"setStroke",function(){var e=this.strokeStyle;if(e){var t=this.strokeStyle.style.toLowerCase();if(t in C&&(t=C[t]),t instanceof Array){t=t.slice(),this.canvasDash=t;var a;for(a=0;a<t.length;++a)t[a]*=e.width;if("butt"!=e.cap){for(a=0;a<t.length;a+=2)t[a]-=e.width,t[a]<1&&(t[a]=1);for(a=1;a<t.length;a+=2)t[a]+=e.width}}else delete this.canvasDash}else delete this.canvasDash;this._needsDash=!I&&!!this.canvasDash}),A(b.Shape,"setShape"),b.Group=r("dojox.gfx.canvas.Group",b.Shape,{constructor:function(){l.Container._init.call(this)},_render:function(e){e.save(),this._renderTransform(e),this._renderClip(e);for(var t=0;t<this.children.length;++t)this.children[t]._render(e);e.restore()},destroy:function(){l.Container.clear.call(this,!0),b.Shape.prototype.destroy.apply(this,arguments)}}),b.Rect=r("dojox.gfx.canvas.Rect",[b.Shape,l.Rect],{_renderShape:function(e){var t=this.shape,a=Math.min(t.r,t.height/2,t.width/2),i=t.x,r=i+t.width,o=t.y,n=o+t.height,s=i+a,l=r-a,d=o+a,h=n-a;e.beginPath(),e.moveTo(s,o),a?(e.arc(l,d,a,-_,0,!1),e.arc(l,h,a,0,_,!1),e.arc(s,h,a,_,w,!1),e.arc(s,d,a,w,w+_,!1)):(e.lineTo(l,o),e.lineTo(r,h),e.lineTo(s,n),e.lineTo(i,d)),e.closePath()},_renderDashedStroke:function(e,t){var a,i=this.shape,r=Math.min(i.r,i.height/2,i.width/2),o=i.x,n=o+i.width,s=i.y,l=s+i.height,d=o+r,h=n-r,u=s+r,m=l-r;r?(e.beginPath(),a=v(e,this,d,s,h,s),t&&e.stroke(),a=f(e,this.canvasDash,h,u,r,-_,0,!1,t,a),e.beginPath(),a=v(e,this,n,u,n,m,a),t&&e.stroke(),a=f(e,this.canvasDash,h,m,r,0,_,!1,t,a),e.beginPath(),a=v(e,this,h,l,d,l,a),t&&e.stroke(),a=f(e,this.canvasDash,d,m,r,_,w,!1,t,a),e.beginPath(),a=v(e,this,o,m,o,u,a),t&&e.stroke(),f(e,this.canvasDash,d,u,r,w,w+_,!1,t,a)):(e.beginPath(),a=v(e,this,d,s,h,s),a=v(e,this,h,s,n,m,a),a=v(e,this,n,m,d,l,a),v(e,this,d,l,o,u,a),t&&e.stroke())}});var z=[];!function(){var e=h.curvePI4;z.push(e.s,e.c1,e.c2,e.e);for(var t=45;t<360;t+=45){var a=u.rotateg(t);z.push(M(a,e.c1),M(a,e.c2),M(a,e.e))}}();var P=function(e){var t,a,i,r=[],o=e.shape,n=u.normalize([u.translate(o.cx,o.cy),u.scale(o.rx,o.ry)]);t=M(n,z[0]),r.push([t.x,t.y]);for(var s=1;s<z.length;s+=3)a=M(n,z[s]),i=M(n,z[s+1]),t=M(n,z[s+2]),r.push([a.x,a.y,i.x,i.y,t.x,t.y]);if(e._needsDash){var l=[],d=r[0];for(s=1;s<r.length;++s){var h=[];y(d.concat(r[s]),e.canvasDash,h),d=[r[s][4],r[s][5]],l.push(h)}e._dashedPoints=l}return r};b.Ellipse=r("dojox.gfx.canvas.Ellipse",[b.Shape,l.Ellipse],{setShape:function(){return this.inherited(arguments),this.canvasEllipse=P(this),this},setStroke:function(){return this.inherited(arguments),I||(this.canvasEllipse=P(this)),this},_renderShape:function(e){var t,a=this.canvasEllipse;for(e.beginPath(),e.moveTo.apply(e,a[0]),t=1;t<a.length;++t)e.bezierCurveTo.apply(e,a[t]);e.closePath()},_renderDashedStroke:function(e,t){var a=this._dashedPoints;e.beginPath();for(var i=0;i<a.length;++i)for(var r=a[i],o=0;o<r.length;++o){var n=r[o];e.moveTo(n[0],n[1]),e.bezierCurveTo(n[2],n[3],n[4],n[5],n[6],n[7])}t&&e.stroke()}}),b.Circle=r("dojox.gfx.canvas.Circle",[b.Shape,l.Circle],{_renderShape:function(e){var t=this.shape;e.beginPath(),e.arc(t.cx,t.cy,t.r,0,x,1)},_renderDashedStroke:function(e,t){var a,r=this.shape,o=0,n=this.canvasDash.length;for(i=0;o<x;)a=this.canvasDash[i%n]/r.r,i%2||(e.beginPath(),e.arc(r.cx,r.cy,r.r,o,o+a,0),t&&e.stroke()),o+=a,++i}}),b.Line=r("dojox.gfx.canvas.Line",[b.Shape,l.Line],{_renderShape:function(e){var t=this.shape;e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2)},_renderDashedStroke:function(e,t){var a=this.shape;e.beginPath(),v(e,this,a.x1,a.y1,a.x2,a.y2),t&&e.stroke()}}),b.Polyline=r("dojox.gfx.canvas.Polyline",[b.Shape,l.Polyline],{setShape:function(){this.inherited(arguments);var e,t,a,i=this.shape.points,r=i[0];if(this.bbox=null,this._normalizePoints(),i.length)if("number"==typeof r)e=i;else for(e=[],a=0;a<i.length;++a)t=i[a],e.push(t.x,t.y);else e=[];return this.canvasPolyline=e,this},_renderShape:function(e){var t=this.canvasPolyline;if(t.length){e.beginPath(),e.moveTo(t[0],t[1]);for(var a=2;a<t.length;a+=2)e.lineTo(t[a],t[a+1])}},_renderDashedStroke:function(e,t){var a=this.canvasPolyline,i=0;e.beginPath();for(var r=0;r<a.length;r+=2)i=v(e,this,a[r],a[r+1],a[r+2],a[r+3],i);t&&e.stroke()}}),b.Image=r("dojox.gfx.canvas.Image",[b.Shape,l.Image],{setShape:function(){this.inherited(arguments);var e=new Image;return this.surface.downloadImage(e,this.shape.src),this.canvasImage=e,this},_renderShape:function(e){var t=this.shape;e.drawImage(this.canvasImage,t.x,t.y,t.width,t.height)}}),b.Text=r("dojox.gfx.canvas.Text",[b.Shape,l.Text],{_setFont:function(){this.fontStyle?this.canvasFont=e.makeFontString(this.fontStyle):delete this.canvasFont},getTextWidth:function(){var e,t=this.shape,a=0;return t.text&&(e=this.surface.rawNode.getContext("2d"),e.save(),this._renderTransform(e),this._renderFill(e,!1),this._renderStroke(e,!1),this.canvasFont&&(e.font=this.canvasFont),a=e.measureText(t.text).width,e.restore()),a},_render:function(e){e.save(),this._renderTransform(e),this._renderFill(e,!1),this._renderStroke(e,!1),this._renderShape(e),e.restore()},_renderShape:function(e){var t,a=this.shape;a.text&&(t="middle"===a.align?"center":a.align,e.textAlign=t,this.canvasFont&&(e.font=this.canvasFont),this.canvasFill&&e.fillText(a.text,a.x,a.y),this.strokeStyle&&(e.beginPath(),e.strokeText(a.text,a.x,a.y),e.closePath()))}}),A(b.Text,"setFont"),F||b.Text.extend({getTextWidth:function(){return 0},getBoundingBox:function(){return null},_renderShape:function(){}});var G={M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"};b.Path=r("dojox.gfx.canvas.Path",[b.Shape,d.Path],{constructor:function(){this.lastControl={}},setShape:function(){return this.canvasPath=[],this._dashedPath=[],this.inherited(arguments)},setStroke:function(){return this.inherited(arguments),I||(this.segmented=!1,this._confirmSegmented()),this},_setPath:function(){this._dashResidue=null,this.inherited(arguments)},_updateWithSegment:function(e){var a=t.clone(this.last);this[G[e.action]](this.canvasPath,e.action,e.args,this._needsDash?this._dashedPath:null),this.last=a,this.inherited(arguments)},_renderShape:function(e){var t=this.canvasPath;e.beginPath();for(var a=0;a<t.length;a+=2)e[t[a]].apply(e,t[a+1])},_renderDashedStroke:I?function(){}:function(e,t){var a=this._dashedPath;e.beginPath();for(var i=0;i<a.length;i+=2)e[a[i]].apply(e,a[i+1]);t&&e.stroke()},_moveToA:function(e,t,a,i){e.push("moveTo",[a[0],a[1]]),i&&i.push("moveTo",[a[0],a[1]]);for(var r=2;r<a.length;r+=2)e.push("lineTo",[a[r],a[r+1]]),i&&(this._dashResidue=v(i,this,a[r-2],a[r-1],a[r],a[r+1],this._dashResidue));this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl={}},_moveToR:function(e,t,a,i){var r;"x"in this.last?(r=[this.last.x+=a[0],this.last.y+=a[1]],e.push("moveTo",r),i&&i.push("moveTo",r)):(r=[this.last.x=a[0],this.last.y=a[1]],e.push("moveTo",r),i&&i.push("moveTo",r));for(var o=2;o<a.length;o+=2)e.push("lineTo",[this.last.x+=a[o],this.last.y+=a[o+1]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_lineToA:function(e,t,a,i){for(var r=0;r<a.length;r+=2)i&&(this._dashResidue=v(i,this,this.last.x,this.last.y,a[r],a[r+1],this._dashResidue)),e.push("lineTo",[a[r],a[r+1]]);this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl={}},_lineToR:function(e,t,a,i){for(var r=0;r<a.length;r+=2)e.push("lineTo",[this.last.x+=a[r],this.last.y+=a[r+1]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_hLineToA:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[a[r],this.last.y]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],a[r],this.last.y,this._dashResidue));this.last.x=a[a.length-1],this.lastControl={}},_hLineToR:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x+=a[r],this.last.y]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_vLineToA:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x,a[r]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,a[r],this._dashResidue));this.last.y=a[a.length-1],this.lastControl={}},_vLineToR:function(e,t,a,i){for(var r=0;r<a.length;++r)e.push("lineTo",[this.last.x,this.last.y+=a[r]]),i&&(this._dashResidue=v(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));this.lastControl={}},_curveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=6)e.push("bezierCurveTo",a.slice(r,r+6)),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue));this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl.x=a[a.length-4],this.lastControl.y=a[a.length-3],this.lastControl.type="C"},_curveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=6)e.push("bezierCurveTo",[this.last.x+a[r],this.last.y+a[r+1],this.lastControl.x=this.last.x+a[r+2],this.lastControl.y=this.last.y+a[r+3],this.last.x+a[r+4],this.last.y+a[r+5]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.last.x+=a[r+4],this.last.y+=a[r+5];this.lastControl.type="C"},_smoothCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=4){var o="C"==this.lastControl.type;e.push("bezierCurveTo",[o?2*this.last.x-this.lastControl.x:this.last.x,o?2*this.last.y-this.lastControl.y:this.last.y,a[r],a[r+1],a[r+2],a[r+3]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.lastControl.x=a[r],this.lastControl.y=a[r+1],this.lastControl.type="C"}this.last.x=a[a.length-2],this.last.y=a[a.length-1]},_smoothCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=4){var o="C"==this.lastControl.type;e.push("bezierCurveTo",[o?2*this.last.x-this.lastControl.x:this.last.x,o?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+a[r],this.last.y+a[r+1],this.last.x+a[r+2],this.last.y+a[r+3]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.lastControl.x=this.last.x+a[r],this.lastControl.y=this.last.y+a[r+1],this.lastControl.type="C",this.last.x+=a[r+2],this.last.y+=a[r+3]}},_qCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=4)e.push("quadraticCurveTo",a.slice(r,r+4));i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.last.x=a[a.length-2],this.last.y=a[a.length-1],this.lastControl.x=a[a.length-4],this.lastControl.y=a[a.length-3],this.lastControl.type="Q"},_qCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=4)e.push("quadraticCurveTo",[this.lastControl.x=this.last.x+a[r],this.lastControl.y=this.last.y+a[r+1],this.last.x+a[r+2],this.last.y+a[r+3]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.last.x+=a[r+2],this.last.y+=a[r+3];this.lastControl.type="Q"},_qSmoothCurveToA:function(e,t,a,i){for(var r=0;r<a.length;r+=2){var o="Q"==this.lastControl.type;e.push("quadraticCurveTo",[this.lastControl.x=o?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=o?2*this.last.y-this.lastControl.y:this.last.y,a[r],a[r+1]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.lastControl.type="Q"}this.last.x=a[a.length-2],this.last.y=a[a.length-1]},_qSmoothCurveToR:function(e,t,a,i){for(var r=0;r<a.length;r+=2){var o="Q"==this.lastControl.type;e.push("quadraticCurveTo",[this.lastControl.x=o?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=o?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+a[r],this.last.y+a[r+1]]),i&&(this._dashResidue=g(i,this,e[e.length-1],this._dashResidue)),this.lastControl.type="Q",this.last.x+=a[r],this.last.y+=a[r+1]}},_arcTo:function(e,t,i,r){for(var o="a"==t,n=0;n<i.length;n+=7){var s=i[n+5],l=i[n+6];o&&(s+=this.last.x,l+=this.last.y);var d=h.arcAsBezier(this.last,i[n],i[n+1],i[n+2],i[n+3]?1:0,i[n+4]?1:0,s,l);a.forEach(d,function(t){e.push("bezierCurveTo",t)}),r&&(this._dashResidue=g(r,this,p,this._dashResidue)),this.last.x=s,this.last.y=l}this.lastControl={}},_closePath:function(e,t,a,i){e.push("closePath",[]),i&&(this._dashResidue=v(i,this,this.last.x,this.last.y,i[1][0],i[1][1],this._dashResidue)),this.lastControl={}}}),a.forEach(["moveTo","lineTo","hLineTo","vLineTo","curveTo","smoothCurveTo","qCurveTo","qSmoothCurveTo","arcTo","closePath"],function(e){A(b.Path,e)}),b.TextPath=r("dojox.gfx.canvas.TextPath",[b.Shape,d.TextPath],{_renderShape:function(e){this.shape},_setText:function(){},_setFont:function(){}}),b.Surface=r("dojox.gfx.canvas.Surface",l.Surface,{constructor:function(){l.Container._init.call(this),this.pendingImageCount=0,this.makeDirty()},destroy:function(){l.Container.clear.call(this,!0),this.inherited(arguments)},setDimensions:function(t,a){if(this.width=e.normalizedLength(t),this.height=e.normalizedLength(a),!this.rawNode)return this;var i=!1;return this.rawNode.width!=this.width&&(this.rawNode.width=this.width,i=!0),this.rawNode.height!=this.height&&(this.rawNode.height=this.height,i=!0),i&&this.makeDirty(),this},getDimensions:function(){return this.rawNode?{width:this.rawNode.width,height:this.rawNode.height}:null},_render:function(e){if(this.rawNode&&(e||!this.pendingImageCount)){var t=this.rawNode.getContext("2d");t.clearRect(0,0,this.rawNode.width,this.rawNode.height),this.render(t),"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender)}},render:function(e){e.save();for(var t=0;t<this.children.length;++t)this.children[t]._render(e);e.restore()},makeDirty:function(){this.pendingImagesCount||"pendingRender"in this||this._batch||(this.pendingRender=setTimeout(t.hitch(this,this._render),0))},downloadImage:function(e,a){var i=t.hitch(this,this.onImageLoad);!this.pendingImageCount++&&"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender),e.onload=i,e.onerror=i,e.onabort=i,e.src=a},onImageLoad:function(){--this.pendingImageCount||(this.onImagesLoaded(),this._render())},onImagesLoaded:function(){},getEventSource:function(){return null},connect:function(){},disconnect:function(){},on:function(){}}),b.createSurface=function(t,a,i){if(!a&&!i){var r=n.position(t);a=a||r.w,i=i||r.h}"number"==typeof a&&(a+="px"),"number"==typeof i&&(i+="px");var o=new b.Surface,l=s.byId(t),d=l.ownerDocument.createElement("canvas");return d.width=e.normalizedLength(a),d.height=e.normalizedLength(i),l.appendChild(d),o.rawNode=d,o._parent=l,o.surface=o,o};var D=l.Container,N={openBatch:function(){return++this._batch,this},closeBatch:function(){return this._batch=this._batch>0?--this._batch:0,this._makeDirty(),this},_makeDirty:function(){this._batch||this.surface.makeDirty()},add:function(e){return this._makeDirty(),D.add.apply(this,arguments)},remove:function(e,t){return this._makeDirty(),D.remove.apply(this,arguments)},clear:function(){return this._makeDirty(),D.clear.apply(this,arguments)},getBoundingBox:D.getBoundingBox,_moveChildToFront:function(e){return this._makeDirty(),D._moveChildToFront.apply(this,arguments)},_moveChildToBack:function(e){return this._makeDirty(),D._moveChildToBack.apply(this,arguments)}},L={createObject:function(e,t){var a=new e;return a.surface=this.surface,a.setShape(t),this.add(a),a}};return T(b.Group,N),T(b.Group,l.Creator),T(b.Group,L),T(b.Surface,N),T(b.Surface,l.Creator),T(b.Surface,L),b.fixTarget=function(e,t){return!0},b});//# sourceMappingURL=canvas.js.map