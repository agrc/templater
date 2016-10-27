//>>built
define("dojox/drawing/tools/custom/Axes",["dojo/_base/lang","../../util/oo","../../manager/_registry","../../stencil/Path","../../annotations/Arrow","../../annotations/Label","../../tools/custom/Vector"],function(e,t,i,a,r,o,n){var s=t.declare(a,function(t){if(this.closePath=!1,this.xArrow=new r({stencil:this,idx1:0,idx2:1}),this.yArrow=new r({stencil:this,idx1:2,idx2:1}),t.data&&(this.style.zAxisEnabled=1==t.data.cosphi,this.setData(t.data)),this.style.zAxisEnabled){this.data.cosphi=1;var i={};e.mixin(i,t),e.mixin(i,{container:this.container.createGroup(),style:this.style,showAngle:!1,label:null}),!t.data||i.data.radius&&i.data.angle||(i.data.x2=i.data.x4,i.data.y2=i.data.y4),i.style.zAxis=!0,this.zAxis=new n(i),this.zAxis.minimumSize=5,this.connectMult([[this,"onChangeStyle",this.zAxis,"onChangeStyle"],[this,"select",this.zAxis,"select"],[this,"deselect",this.zAxis,"deselect"],[this,"onDelete",this.zAxis,"destroy"],[this,"onDrag",this,"zSet"],[this,"onTransform",this,"zSet"],[this.zAxis,"onBeforeRender",this,"zSet"],[this,"_onPostRender",this.zAxis,"render"]])}this.points&&this.points.length&&(this.setPoints=this._postSetPoints,this.render(),t.label&&this.setLabel(t.label),t.shadow&&this.addShadow(t.shadow))},{draws:!0,type:"dojox.drawing.tools.custom.Axes",minimumSize:30,showAngle:!0,closePath:!1,baseRender:!1,zScale:.5,zPoint:function(e){e.radius=this.util.length(e);var t=this.util.pointOnCircle(e.start.x,e.start.y,e.radius*this.zScale,this.style.zAngle);return{x:t.x,y:t.y,skip:!0,noAnchor:!0}},zSet:function(){if(this.zAxis){var e=this.points[1],t=this.points[3],i=[{x:e.x,y:e.y},{x:t.x,y:t.y}],a=this.util.length({start:{x:e.x,y:e.y},x:t.x,y:t.y});a>this.zAxis.minimumSize?this.zAxis.setPoints(i):!1,this.zAxis.cosphi=1}},createLabels:function(){var t={align:"middle",valign:"middle",util:this.util,annotation:!0,container:this.container,mouse:this.mouse,stencil:this};this.labelX=new o(e.mixin(t,{labelPosition:this.setLabelX})),this.labelY=new o(e.mixin(t,{labelPosition:this.setLabelY})),this.style.zAxisEnabled&&(this.labelZ=new o(e.mixin(t,{labelPosition:this.setLabelZ})))},setLabelX:function(){var e,t,i,a,r=this.points[0],o=this.points[1],n=40,s=20;return e=this.util.lineSub(o.x,o.y,r.x,r.y,n),t=e.x+(e.y-r.y),i=e.y+(r.x-e.x),a=this.util.lineSub(e.x,e.y,t,i,n-s),{x:a.x,y:a.y,width:20}},setLabelY:function(){var e,t,i,a,r=this.points[1],o=this.points[2],n=40,s=20;return e=this.util.lineSub(r.x,r.y,o.x,o.y,n),t=e.x+(o.y-e.y),i=e.y+(e.x-o.x),a=this.util.lineSub(e.x,e.y,t,i,n-s),{x:a.x,y:a.y,width:20}},setLabelZ:function(){var e,t,i,a,r=this.points[1],o=this.points[3],n=40,s=20;return e=this.util.lineSub(r.x,r.y,o.x,o.y,n),t=e.x+(e.y-o.y),i=e.y+(o.x-e.x),a=this.util.lineSub(e.x,e.y,t,i,n-s),{x:a.x,y:a.y,width:20}},setLabel:function(e){if(!this._labelsCreated){!this.labelX&&this.createLabels();var t="x",i="y",a="z";if(e)if(this.labelZ){var r=e.match(/(.*?)(and|&)(.*?)(and|&)(.*)/i);r.length>4&&(t=r[1].replace(/^\s+/,"").replace(/\s+$/,""),i=r[3].replace(/^\s+/,"").replace(/\s+$/,""),a=r[5].replace(/^\s+/,"").replace(/\s+$/,""))}else{var r=e.match(/(.*?)(and|&)(.*)/i);r.length>2&&(t=r[1].replace(/^\s+/,"").replace(/\s+$/,""),i=r[3].replace(/^\s+/,"").replace(/\s+$/,""))}this.labelX.setLabel(t),this.labelY.setLabel(i),this.labelZ&&this.labelZ.setLabel(a),this._labelsCreated=!0}},getLabel:function(){return this.labelX?{x:this.labelX.getText(),y:this.labelY.getText(),z:this.labelZ?this.labelZ.getText():null}:null},anchorPositionCheck:function(e,t,i){var a=this.container.getParent().getTransform(),r=i.shape.getTransform(),o=this.points,n={x:r.dx+i.org.x+a.dx,y:r.dy+i.org.y+a.dy},s={x:o[1].x+a.dx,y:o[1].y+a.dy},d=s.x-(s.y-n.y),l=s.y-(n.x-s.x);return{x:d,y:l}},onTransformBegin:function(e){this._isBeingModified=!0},onTransformEnd:function(e){if(e){this._isBeingModified=!1,this._toggleSelected();var t=this.points[0],i=this.points[1],a={start:{x:i.x,y:i.y},x:t.x,y:t.y},r=this.util.constrainAngle(a,0,89),o=this.style.zAxisEnabled?this.zPoint(a):null;if(r.x==t.x&&r.y==t.y){r=this.util.snapAngle(a,this.angleSnap/180),a.x=r.x,a.y=r.y;var n=a.start.x-(a.start.y-a.y),s=a.start.y-(a.x-a.start.x);if(0>n||0>s)return;return this.points=[{x:a.x,y:a.y},{x:a.start.x,y:a.start.y,noAnchor:!0}],this.points.push({x:n,y:s,noAnchor:!0}),o&&this.points.push(o),this.setPoints(this.points),void this.onModify(this)}this.points[0].x=r.x,this.points[0].y=r.y,t=this.points[0];var n=i.x-(i.y-t.y),s=i.y-(t.x-i.x);this.points[2]={x:n,y:s,noAnchor:!0},o&&this.points.push(o),this.setPoints(this.points),this.labelX.setLabel(),this.labelY.setLabel(),this.labelZ&&this.labelZ.setLabel(),this.onModify(this)}},getBounds:function(e){var t=this.points[0],i=this.points[1],a=this.points[2];if(this.style.zAxisEnabled)var r=this.points[3];if(e){var o={x:i.x,y:i.y,x1:i.x,y1:i.y,x2:t.x,y2:t.y,x3:a.x,y3:a.y};return this.style.zAxisEnabled&&(o.x4=r.x,o.y4=r.y),o}var n=this.style.zAxisEnabled?a.x<r.x?a.x:r.x:a.x;return y1=a.y<t.y?a.y:t.y,x2=t.x,y2=this.style.zAxisEnabled?r.y:i.y,{x1:n,y1:y1,x2:x2,y2:y2,x:n,y:y1,w:x2-n,h:y2-y1}},_postSetPoints:function(e){this.points[0]=e[0],this.pointsToData&&(this.data=this.pointsToData())},onTransform:function(e){var t=this.points[0],i=this.points[1],a=i.x-(i.y-t.y),r=i.y-(t.x-i.x);this.points[2]={x:a,y:r,noAnchor:!0},this.style.zAxisEnabled&&(this.points[3]=this.zPoint({start:{x:i.x,y:i.y},x:t.x,y:t.y})),this.setPoints(this.points),this._isBeingModified||this.onTransformBegin(),this.render()},pointsToData:function(){var e=this.points,t={x1:e[1].x,y1:e[1].y,x2:e[0].x,y2:e[0].y,x3:e[2].x,y3:e[2].y};return this.style.zAxisEnabled&&(t.x4=e[3].x,t.y4=e[3].y,t.cosphi=1),t},getRadius:function(){var e=this.points,t={start:{x:e[1].x,y:e[1].y},x:e[0].x,y:e[0].y};return this.util.length(t)},dataToPoints:function(e){if(e=e||this.data,e.radius||e.angle){var t,i=this.util.pointOnCircle(e.x,e.y,e.radius,e.angle),a=e.x-(e.y-i.y),r=e.y-(i.x-e.x);(e.cosphi&&1==e.cosphi||this.style.zAxisEnabled)&&(this.style.zAxisEnabled=!0,t=this.util.pointOnCircle(e.x,e.y,e.radius*this.zScale,this.style.zAngle)),this.data=e={x1:e.x,y1:e.y,x2:i.x,y2:i.y,x3:a,y3:r},this.style.zAxisEnabled&&(this.data.x4=e.x4=t.x,this.data.y4=e.y4=t.y,this.data.cosphi=1)}return this.points=[{x:e.x2,y:e.y2},{x:e.x1,y:e.y1,noAnchor:!0},{x:e.x3,y:e.y3,noAnchor:!0}],this.style.zAxisEnabled&&this.points.push({x:e.x4,y:e.y4,skip:!0,noAnchor:!0}),this.points},onDrag:function(e){var t=this.util.constrainAngle(e,0,89);e.x=t.x,e.y=t.y;var i=e.start.x-(e.start.y-e.y),a=e.start.y-(e.x-e.start.x);if(!(0>i||0>a)){if(this.points=[{x:e.x,y:e.y},{x:e.start.x,y:e.start.y,noAnchor:!0}],this.points.push({x:i,y:a,noAnchor:!0}),this.style.zAxisEnabled){var r=this.zPoint(e);this.points.push(r)}this.render()}},onUp:function(e){if(this._downOnCanvas){this._downOnCanvas=!1;var t=this.points;if(!t.length){var i=e.start,a=100;if(this.points=[{x:i.x+a,y:i.y+a},{x:i.x,y:i.y+a,noAnchor:!0},{x:i.x,y:i.y,noAnchor:!0}],this.style.zAxisEnabled){var r=this.zPoint({start:{x:i.x,y:i.y+a},x:i.x+a,y:i.y+a});this.points.push(r)}return this.setPoints=this._postSetPoints,this.pointsToData(),this.render(),void this.onRender(this)}var o=this.util.distance(t[1].x,t[1].y,t[0].x,t[0].y);if(t&&t.length){if(o<this.minimumSize)return this.remove(this.shape,this.hit),this.xArrow.remove(this.xArrow.shape,this.xArrow.hit),this.yArrow.remove(this.yArrow.shape,this.yArrow.hit),void(this.zArrow&&this.zArrow.remove(this.zArrow.shape,this.zArrow.hit));var n=t[0],s=t[1];e={start:{x:s.x,y:s.y},x:n.x,y:n.y};var d=this.util.snapAngle(e,this.angleSnap/180);e.x=d.x,e.y=d.y;var l=e.start.x-(e.start.y-e.y),h=e.start.y-(e.x-e.start.x);0>l||0>h||(this.points=[{x:e.x,y:e.y},{x:e.start.x,y:e.start.y,noAnchor:!0}],this.points.push({x:l,y:h,noAnchor:!0}),this.style.zAxisEnabled&&this.points.push(this.zPoint(e)),this.onRender(this),this.setPoints=this._postSetPoints)}}}});return e.setObject("dojox.drawing.tools.custom.Axes",s),s.setup={name:"dojox.drawing.tools.custom.Axes",tooltip:"Axes Tool",iconClass:"iconAxes"},i.register(s.setup,"tool"),s});//# sourceMappingURL=Axes.js.map