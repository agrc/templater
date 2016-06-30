//>>built
define("dojox/drawing/plugins/tools/Pan",["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(e,t,i,a){var r=t.declare(i,function(t){this.domNode=t.node;var i;this.toolbar=t.scope,this.connect(this.toolbar,"onToolClick",this,function(){this.onSetPan(!1)}),this.connect(this.keys,"onKeyUp",this,"onKeyUp"),this.connect(this.keys,"onKeyDown",this,"onKeyDown"),this.connect(this.keys,"onArrow",this,"onArrow"),this.connect(this.anchors,"onAnchorUp",this,"checkBounds"),this.connect(this.stencils,"register",this,"checkBounds"),this.connect(this.canvas,"resize",this,"checkBounds"),this.connect(this.canvas,"setZoom",this,"checkBounds"),this.connect(this.canvas,"onScroll",this,function(){return this._blockScroll?void(this._blockScroll=!1):(i&&clearTimeout(i),void(i=setTimeout(e.hitch(this,"checkBounds"),200)))}),this._mouseHandle=this.mouse.register(this)},{selected:!1,keyScroll:!1,type:"dojox.drawing.plugins.tools.Pan",onPanUp:function(e){e.id==this.button.id&&this.onSetPan(!1)},onKeyUp:function(e){switch(e.keyCode){case 32:this.onSetPan(!1);break;case 39:case 37:case 38:case 40:clearInterval(this._timer)}},onKeyDown:function(e){32==e.keyCode&&this.onSetPan(!0)},interval:20,onArrow:function(t){this._timer&&clearInterval(this._timer),this._timer=setInterval(e.hitch(this,function(e){this.canvas.domNode.parentNode.scrollLeft+=10*e.x,this.canvas.domNode.parentNode.scrollTop+=10*e.y},t),this.interval)},onSetPan:function(e){e!==!0&&e!==!1||(this.selected=!e),this.selected?(this.selected=!1,this.button.deselect()):(this.selected=!0,this.button.select()),this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(e){e.x-e.last.x,e.y-e.last.y;this.canvas.domNode.parentNode.scrollTop-=e.move.y,this.canvas.domNode.parentNode.scrollLeft-=e.move.x,this.canvas.onScroll()},onUp:function(e){e.withinCanvas?this.keyScroll=!0:this.keyScroll=!1},onStencilUp:function(e){this.checkBounds()},onStencilDrag:function(e){},checkBounds:function(){var e=function(){},t=function(){},i=1/0,a=-(1/0),r=-1e4,n=1e4,o=0,s=0,d=0,l=0,h=this.stencils.group?this.stencils.group.getTransform():{dx:0,dy:0},u=this.mouse.scrollOffset(),m=(u.left?10:0,u.top?10:0,this.canvas.height),f=this.canvas.width,c=this.canvas.zoom,y=this.canvas.parentHeight,v=this.canvas.parentWidth;this.stencils.withSelected(function(e){var o=e.getBounds();t("SEL BOUNDS:",o),i=Math.min(o.y1+h.dy,i),a=Math.max(o.x2+h.dx,a),r=Math.max(o.y2+h.dy,r),n=Math.min(o.x1+h.dx,n)}),this.stencils.withUnselected(function(o){var s=o.getBounds();t("UN BOUNDS:",s),i=Math.min(s.y1,i),a=Math.max(s.x2,a),r=Math.max(s.y2,r),n=Math.min(s.x1,n),e("----------- B:",r,s.y2)}),r*=c;var p=0,g=0;e("Bottom test","b:",r,"z:",c,"ch:",m,"pch:",y,"top:",u.top,"sy:",s,"mx.dy:",h.dy),r>y||u.top?(e("*bottom scroll*"),m=Math.max(r,y+u.top),s=u.top,p+=this.canvas.getScrollWidth()):!s&&m>y&&(e("*bottom remove*"),m=y),a*=c,a>v||u.left?(f=Math.max(a,v+u.left),o=u.left,g+=this.canvas.getScrollWidth()):!o&&f>v&&(f=v),f+=2*p,m+=2*g,this._blockScroll=!0,this.stencils.group&&this.stencils.group.applyTransform({dx:l,dy:d}),this.stencils.withUnselected(function(e){e.transformPoints({dx:l,dy:d})}),this.canvas.setDimensions(f,m,o,s)}});return r.setup={name:"dojox.drawing.plugins.tools.Pan",tooltip:"Pan Tool",iconClass:"iconPan",button:!1},e.setObject("dojox.drawing.plugins.tools.Pan",r),a.register(r.setup,"plugin"),r});//# sourceMappingURL=Pan.js.map