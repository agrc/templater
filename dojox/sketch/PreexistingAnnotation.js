//>>built
define("dojox/sketch/PreexistingAnnotation",["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(e){e.getObject("sketch",!0,dojox);var t=dojox.sketch;t.PreexistingAnnotation=function(e,i){t.Annotation.call(this,e,i),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.end={x:200,y:200},this.radius=8,this.textPosition={x:196,y:196},this.textOffset=4,this.textAlign="end",this.rectShape=null,this.labelShape=null,this.anchors.start=new t.Anchor(this,"start"),this.anchors.end=new t.Anchor(this,"end")},t.PreexistingAnnotation.prototype=new t.Annotation;var i=t.PreexistingAnnotation.prototype;return i.constructor=t.PreexistingAnnotation,i.type=function(){return"Preexisting"},i.getType=function(){return t.PreexistingAnnotation},i._pos=function(){var e=Math.min(this.start.x,this.end.x),t=Math.min(this.start.y,this.end.y),i=Math.max(this.start.x,this.end.x),a=Math.max(this.start.y,this.end.y);this.start={x:e,y:t},this.end={x:i,y:a},this.textPosition={x:this.end.x-this.textOffset,y:this.end.y-this.textOffset}},i.apply=function(e){if(e){e.documentElement&&(e=e.documentElement),this.readCommonAttrs(e);for(var t=0;t<e.childNodes.length;t++){var i=e.childNodes[t];if("text"==i.localName)this.property("label",i.childNodes.length?i.childNodes[0].nodeValue:"");else if("rect"==i.localName){null!==i.getAttribute("x")&&(this.start.x=parseFloat(i.getAttribute("x"),10)),null!==i.getAttribute("width")&&(this.end.x=parseFloat(i.getAttribute("width"),10)+parseFloat(i.getAttribute("x"),10)),null!==i.getAttribute("y")&&(this.start.y=parseFloat(i.getAttribute("y"),10)),null!==i.getAttribute("height")&&(this.end.y=parseFloat(i.getAttribute("height"),10)+parseFloat(i.getAttribute("y"),10)),null!==i.getAttribute("r")&&(this.radius=parseFloat(i.getAttribute("r"),10));var a=this.property("stroke"),o=i.getAttribute("style"),r=o.match(/stroke:([^;]+);/);r&&(a.color=r[1],this.property("fill",r[1])),r=o.match(/stroke-width:([^;]+);/),r&&(a.width=r[1]),this.property("stroke",a)}}}},i.initialize=function(e){this.apply(e),this._pos(),this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),this.rectShape=this.shape.createRect({x:this.start.x,y:this.start.y,width:this.end.x-this.start.x,height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]),this.rectShape.getEventSource().setAttribute("shape-rendering","crispEdges"),this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign}).setFill(this.property("fill")),this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),this.draw()},i.destroy=function(){this.shape&&(this.shape.remove(this.rectShape),this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.rectShape=this.labelShape=null)},i.getBBox=function(){var e=Math.min(this.start.x,this.end.x),t=Math.min(this.start.y,this.end.y),i=Math.max(this.start.x,this.end.x)-e,a=Math.max(this.start.y,this.end.y)-t;return{x:e-2,y:t-2,width:i+4,height:a+4}},i.draw=function(e){this.apply(e),this._pos(),this.shape.setTransform(this.transform),this.rectShape.setShape({x:this.start.x,y:this.start.y,width:this.end.x-this.start.x,height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]),this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label")}).setFill(this.property("fill")),this.zoom()},i.zoom=function(e){this.rectShape&&(e=e||this.figure.zoomFactor,t.Annotation.prototype.zoom.call(this,e),e="vml"==dojox.gfx.renderer?1:e,this.rectShape.setStroke({color:this.property("fill"),width:1/e}))},i.serialize=function(){var e=this.property("stroke");return"<g "+this.writeCommonAttrs()+'><rect style="stroke:'+e.color+';stroke-width:1;fill:none;" x="'+this.start.x+'" width="'+(this.end.x-this.start.x)+'" y="'+this.start.y+'" height="'+(this.end.y-this.start.y)+'" rx="'+this.radius+'" ry="'+this.radius+'"  /><text style="fill:'+e.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>"},t.Annotation.register("Preexisting"),dojox.sketch.PreexistingAnnotation});//# sourceMappingURL=PreexistingAnnotation.js.map