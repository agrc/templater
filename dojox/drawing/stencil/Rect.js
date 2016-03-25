//>>built
define("dojox/drawing/stencil/Rect",["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(e,t,a,i){var r=t.declare(a,function(e){this.points.length},{type:"dojox.drawing.stencil.Rect",anchorType:"group",baseRender:!0,dataToPoints:function(e){return e=e||this.data,this.points=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],this.points},pointsToData:function(e){e=e||this.points;var t=e[0],a=e[2];return this.data={x:t.x,y:t.y,width:a.x-t.x,height:a.y-t.y,r:this.data.r||0},this.data},_create:function(e,t,a){this.remove(this[e]),this[e]=this.container.createRect(t).setStroke(a).setFill(a.fill),this._setNodeAtts(this[e])},render:function(){this.onBeforeRender(this),this.renderHit&&this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)}});return e.setObject("dojox.drawing.stencil.Rect",r),i.register({name:"dojox.drawing.stencil.Rect"},"stencil"),r});//# sourceMappingURL=Rect.js.map