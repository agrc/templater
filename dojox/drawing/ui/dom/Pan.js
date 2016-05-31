//>>built
define("dojox/drawing/ui/dom/Pan",["dojo","../../util/oo","../../plugins/_Plugin","../../manager/_registry"],function(e,t,a,i){e.deprecated("dojox.drawing.ui.dom.Pan","It may not even make it to the 1.4 release.",1.4);var r=t.declare(a,function(t){this.domNode=t.node;var a;e.connect(this.domNode,"click",this,"onSetPan"),e.connect(this.keys,"onKeyUp",this,"onKeyUp"),e.connect(this.keys,"onKeyDown",this,"onKeyDown"),e.connect(this.anchors,"onAnchorUp",this,"checkBounds"),e.connect(this.stencils,"register",this,"checkBounds"),e.connect(this.canvas,"resize",this,"checkBounds"),e.connect(this.canvas,"setZoom",this,"checkBounds"),e.connect(this.canvas,"onScroll",this,function(){return this._blockScroll?void(this._blockScroll=!1):(a&&clearTimeout(a),void(a=setTimeout(e.hitch(this,"checkBounds"),200)))}),this._mouseHandle=this.mouse.register(this)},{selected:!1,type:"dojox.drawing.ui.dom.Pan",onKeyUp:function(e){32==e.keyCode&&this.onSetPan(!1)},onKeyDown:function(e){32==e.keyCode&&this.onSetPan(!0)},onSetPan:function(t){t!==!0&&t!==!1||(this.selected=!t),this.selected?(this.selected=!1,e.removeClass(this.domNode,"selected")):(this.selected=!0,e.addClass(this.domNode,"selected")),this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(e){e.x-e.last.x,e.y-e.last.y;this.canvas.domNode.parentNode.scrollTop-=e.move.y,this.canvas.domNode.parentNode.scrollLeft-=e.move.x,this.canvas.onScroll()},onStencilUp:function(e){this.checkBounds()},onStencilDrag:function(e){},checkBounds:function(){var e=function(){},t=function(){},a=1/0,i=-(1/0),r=-(1/0),o=1/0,n=0,d=0,s=0,l=0,m=this.stencils.group?this.stencils.group.getTransform():{dx:0,dy:0},h=this.mouse.scrollOffset(),u=(h.left?10:0,h.top?10:0,this.canvas.height),f=this.canvas.width,c=this.canvas.zoom,y=this.canvas.parentHeight,p=this.canvas.parentWidth;this.stencils.withSelected(function(e){var n=e.getBounds();t("SEL BOUNDS:",n),a=Math.min(n.y1+m.dy,a),i=Math.max(n.x2+m.dx,i),r=Math.max(n.y2+m.dy,r),o=Math.min(n.x1+m.dx,o)}),this.stencils.withUnselected(function(e){var n=e.getBounds();t("UN BOUNDS:",n),a=Math.min(n.y1,a),i=Math.max(n.x2,i),r=Math.max(n.y2,r),o=Math.min(n.x1,o)}),r*=c;var v=0,g=0;e("Bottom test","b:",r,"z:",c,"ch:",u,"pch:",y,"top:",h.top,"sy:",d),r>y||h.top?(e("*bottom scroll*"),u=Math.max(r,y+h.top),d=h.top,v+=this.canvas.getScrollWidth()):!d&&u>y&&(e("*bottom remove*"),u=y),i*=c,i>p||h.left?(f=Math.max(i,p+h.left),n=h.left,g+=this.canvas.getScrollWidth()):!n&&f>p&&(f=p),f+=2*v,u+=2*g,this._blockScroll=!0,this.stencils.group&&this.stencils.group.applyTransform({dx:l,dy:s}),this.stencils.withUnselected(function(e){e.transformPoints({dx:l,dy:s})}),this.canvas.setDimensions(f,u,n,d)}});return e.setObject("dojox.drawing.ui.dom.Pan",r),r.setup={name:"dojox.drawing.ui.dom.Pan",tooltip:"Pan Tool",iconClass:"iconPan"},i.register(r.setup,"plugin"),r});//# sourceMappingURL=Pan.js.map