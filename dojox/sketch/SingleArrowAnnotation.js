//>>built
define("dojox/sketch/SingleArrowAnnotation",["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(e){e.getObject("sketch",!0,dojox);var t=dojox.sketch;t.SingleArrowAnnotation=function(e,i){t.Annotation.call(this,e,i),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.control={x:100,y:-50},this.end={x:200,y:0},this.textPosition={x:0,y:0},this.textOffset=4,this.textYOffset=10,this.rotation=0,this.pathShape=null,this.arrowhead=null,this.arrowheadGroup=null,this.labelShape=null,this.anchors.start=new t.Anchor(this,"start"),this.anchors.control=new t.Anchor(this,"control"),this.anchors.end=new t.Anchor(this,"end")},t.SingleArrowAnnotation.prototype=new t.Annotation;var i=t.SingleArrowAnnotation.prototype;return i.constructor=t.SingleArrowAnnotation,i.type=function(){return"SingleArrow"},i.getType=function(){return t.SingleArrowAnnotation},i._rot=function(){var e=this.control.y-this.start.y,t=this.control.x-this.start.x;this.rotation=Math.atan2(e,t)},i._pos=function(){var e=this.textOffset,t=0,i=0,o=this.calculate.slope(this.control,this.end);this.textAlign="middle",Math.abs(o)>=1?(t=this.end.x+this.calculate.dx(this.control,this.end,e),i=this.control.y>this.end.y?this.end.y-e:this.end.y+e+this.textYOffset):0==o?(t=this.end.x+e,i=this.end.y+this.textYOffset):(this.start.x>this.end.x?(t=this.end.x-e,this.textAlign="end"):(t=this.end.x+e,this.textAlign="start"),i=this.start.y<this.end.y?this.end.y+this.calculate.dy(this.control,this.end,e)+this.textYOffset:this.end.y+this.calculate.dy(this.control,this.end,-e)),this.textPosition={x:t,y:i}},i.apply=function(e){if(e){e.documentElement&&(e=e.documentElement),this.readCommonAttrs(e);for(var t=0;t<e.childNodes.length;t++){var i=e.childNodes[t];if("text"==i.localName)this.property("label",i.childNodes.length?i.childNodes[0].nodeValue:"");else if("path"==i.localName){var o=i.getAttribute("d").split(" "),a=o[0].split(",");this.start.x=parseFloat(a[0].substr(1),10),this.start.y=parseFloat(a[1],10),a=o[1].split(","),this.control.x=parseFloat(a[0].substr(1),10),this.control.y=parseFloat(a[1],10),a=o[2].split(","),this.end.x=parseFloat(a[0],10),this.end.y=parseFloat(a[1],10);var n=this.property("stroke"),r=i.getAttribute("style"),s=r.match(/stroke:([^;]+);/);s&&(n.color=s[1],this.property("fill",s[1])),s=r.match(/stroke-width:([^;]+);/),s&&(n.width=s[1]),this.property("stroke",n)}}}},i.initialize=function(e){t.Annotation.labelFont?t.Annotation.labelFont:{family:"Times",size:"16px"};this.apply(e),this._rot(),this._pos();var i=this.rotation;dojox.gfx.matrix.rotate(i);this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),this.pathShape=this.shape.createPath("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),this.arrowheadGroup=this.shape.createGroup(),this.arrowhead=this.arrowheadGroup.createPath(),this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign}),this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),this.draw()},i.destroy=function(){this.shape&&(this.arrowheadGroup.remove(this.arrowhead),this.shape.remove(this.arrowheadGroup),this.shape.remove(this.pathShape),this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=this.arrowheadGroup=this.arrowhead=null)},i.draw=function(e){this.apply(e),this._rot(),this._pos();var t=this.rotation,i=dojox.gfx.matrix.rotate(t);this.shape.setTransform(this.transform),this.pathShape.setShape("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),this.arrowheadGroup.setTransform({dx:this.start.x,dy:this.start.y}).applyTransform(i),this.arrowhead.setFill(this.property("fill")),this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign}).setFill(this.property("fill")),this.zoom()},i.zoom=function(e){if(this.arrowhead&&(e=e||this.figure.zoomFactor,t.Annotation.prototype.zoom.call(this,e),this._curPct!==e)){this._curPct=e;var i=e>1?20:Math.floor(20/e),o=e>1?5:Math.floor(5/e),a=e>1?3:Math.floor(3/e);this.arrowhead.setShape("M0,0 l"+i+",-"+o+" -"+a+","+o+" "+a+","+o+" Z")}},i.getBBox=function(){var e=Math.min(this.start.x,this.control.x,this.end.x),t=Math.min(this.start.y,this.control.y,this.end.y),i=Math.max(this.start.x,this.control.x,this.end.x)-e,o=Math.max(this.start.y,this.control.y,this.end.y)-t;return{x:e,y:t,width:i,height:o}},i.serialize=function(){var e=this.property("stroke"),t=this.rotation*(180/Math.PI);return t=Math.round(t*Math.pow(10,4))/Math.pow(10,4),"<g "+this.writeCommonAttrs()+'><path style="stroke:'+e.color+";stroke-width:"+e.width+';fill:none;" d="M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /><g transform="translate('+this.start.x+","+this.start.y+") rotate("+t+')"><path style="fill:'+e.color+';" d="M0,0 l20,-5, -3,5, 3,5 Z" /></g><text style="fill:'+e.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>"},t.Annotation.register("SingleArrow"),dojox.sketch.SingleArrowAnnotation});//# sourceMappingURL=SingleArrowAnnotation.js.map