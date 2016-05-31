//>>built
define("dojox/drawing/annotations/Angle",["dojo","../util/oo","../util/positioning"],function(e,t,i){return t.declare(function(e){this.stencil=e.stencil,this.util=e.stencil.util,this.mouse=e.stencil.mouse,this.stencil.connectMult([["onDrag",this,"showAngle"],["onUp",this,"hideAngle"],["onTransformBegin",this,"showAngle"],["onTransform",this,"showAngle"],["onTransformEnd",this,"hideAngle"]])},{type:"dojox.drawing.tools.custom",angle:0,showAngle:function(){if(this.stencil.selected||!this.stencil.created){if(this.stencil.getRadius()<this.stencil.minimumSize)return void this.hideAngle();var t=this.getAngleNode(),r=this.stencil.pointsToData(),a=i.angle({x:r.x1,y:r.y1},{x:r.x2,y:r.y2}),n=this.mouse.scrollOffset(),o=this.stencil.getTransform(),d=o.dx/this.mouse.zoom,s=o.dy/this.mouse.zoom;a.x/=this.mouse.zoom,a.y/=this.mouse.zoom;var l=this.stencil._offX+a.x-n.left+d,u=this.stencil._offY+a.y-n.top+s;e.style(t,{left:l+"px",top:u+"px",align:a.align});var c=this.stencil.getAngle();this.stencil.style.zAxis&&"vector"==this.stencil.shortType?t.innerHTML=this.stencil.data.cosphi>0?"out of":"into":"line"==this.stencil.shortType?t.innerHTML=this.stencil.style.zAxis?"out of":Math.ceil(c%180):t.innerHTML=Math.ceil(c)}},getAngleNode:function(){return this._angleNode||(this._angleNode=e.create("span",null,e.body()),e.addClass(this._angleNode,"textAnnotation"),e.style(this._angleNode,"opacity",1)),this._angleNode},hideAngle:function(){this._angleNode&&e.style(this._angleNode,"opacity")>.9&&(e.fadeOut({node:this._angleNode,duration:500,onEnd:function(t){e.destroy(t)}}).play(),this._angleNode=null)}})});//# sourceMappingURL=Angle.js.map