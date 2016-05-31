//>>built
define("dojox/sketch/Anchor",["dojo/_base/kernel","dojo/_base/lang","../gfx"],function(e){return e.getObject("sketch",!0,dojox),dojox.sketch.Anchor=function(e,t,i){var a=this,n=4,o=null;this.type=function(){return"Anchor"},this.annotation=e,this.id=t,this._key="anchor-"+dojox.sketch.Anchor.count++,this.shape=null,this.isControl=null!=i?i:!0,this.beginEdit=function(){this.annotation.beginEdit(dojox.sketch.CommandTypes.Modify)},this.endEdit=function(){this.annotation.endEdit()},this.zoom=function(i){if(this.shape){var a=Math.floor(n/i),o="vml"==dojox.gfx.renderer?1:1/i;this.shape.setShape({x:e[t].x-a,y:e[t].y-a,width:2*a,height:2*a}).setStroke({color:"black",width:o})}},this.setBinding=function(i){e[t]={x:e[t].x+i.dx,y:e[t].y+i.dy},e.draw(),e.drawBBox()},this.setUndo=function(){e.setUndo()},this.enable=function(){e.shape&&(e.figure._add(this),o={x:e[t].x-n,y:e[t].y-n,width:2*n,height:2*n},this.shape=e.shape.createRect(o).setFill([255,255,255,.35]),this.shape.getEventSource().setAttribute("id",a._key),this.shape.getEventSource().setAttribute("shape-rendering","crispEdges"),this.zoom(e.figure.zoomFactor))},this.disable=function(){e.figure._remove(this),e.shape&&e.shape.remove(this.shape),this.shape=null,o=null}},dojox.sketch.Anchor.count=0,dojox.sketch.Anchor});//# sourceMappingURL=Anchor.js.map