//>>built
define("dojox/drawing/tools/Arrow",["dojo/_base/lang","../util/oo","../manager/_registry","./Line","../annotations/Arrow","../util/positioning"],function(e,t,a,i,r,n){var o=t.declare(i,function(e){this.arrowStart&&(this.begArrow=new r({stencil:this,idx1:0,idx2:1})),this.arrowEnd&&(this.endArrow=new r({stencil:this,idx1:1,idx2:0})),this.points.length&&(this.render(),e.label&&this.setLabel(e.label))},{draws:!0,type:"dojox.drawing.tools.Arrow",baseRender:!1,arrowStart:!1,arrowEnd:!0,labelPosition:function(){var e=this.data,t=n.label({x:e.x1,y:e.y1},{x:e.x2,y:e.y2});return{x:t.x,y:t.y}},onUp:function(e){if(!this.created&&this.shape){var t=this.points;if(this.util.distance(t[0].x,t[0].y,t[1].x,t[1].y)<this.minimumSize)return void this.remove(this.shape,this.hit);var a=this.util.snapAngle(e,this.angleSnap/180);this.setPoints([{x:t[0].x,y:t[0].y},{x:a.x,y:a.y}]),this.renderedOnce=!0,this.onRender(this)}}});return e.setObject("dojox.drawing.tools.Arrow",o),o.setup={name:"dojox.drawing.tools.Arrow",tooltip:"Arrow Tool",iconClass:"iconArrow"},a.register(o.setup,"tool"),o});//# sourceMappingURL=Arrow.js.map