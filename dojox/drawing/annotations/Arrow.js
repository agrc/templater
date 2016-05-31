//>>built
define("dojox/drawing/annotations/Arrow",["../util/oo","../stencil/Path"],function(e,t){return e.declare(t,function(e){this.stencil.connectMult([[this.stencil,"select",this,"select"],[this.stencil,"deselect",this,"deselect"],[this.stencil,"render",this,"render"],[this.stencil,"onDelete",this,"destroy"]]),this.connect("onBeforeRender",this,function(){var e=this.stencil.points[this.idx1],t=this.stencil.points[this.idx2];this.stencil.getRadius()>=this.minimumSize?this.points=this.arrowHead(t.x,t.y,e.x,e.y,this.style):this.points=[]})},{idx1:0,idx2:1,subShape:!0,minimumSize:30,arrowHead:function(e,t,a,i,r){var o={start:{x:e,y:t},x:a,y:i},n=this.util.angle(o),d=this.util.length(o),s=r.arrows.length,l=r.arrows.width/2;s>d&&(s=d/2);var m=this.util.pointOnCircle(a,i,-s,n-l),u=this.util.pointOnCircle(a,i,-s,n+l);return[{x:a,y:i},m,u]}})});//# sourceMappingURL=Arrow.js.map