//>>built
define("dojox/drawing/ui/dom/Pan",["dojo","../../util/oo","../../plugins/_Plugin","../../manager/_registry"],function(e,t,i,a){e.deprecated("dojox.drawing.ui.dom.Pan","It may not even make it to the 1.4 release.",1.4);var r=t.declare(i,function(t){this.domNode=t.node;var i;e.connect(this.domNode,"click",this,"onSetPan"),e.connect(this.keys,"onKeyUp",this,"onKeyUp"),e.connect(this.keys,"onKeyDown",this,"onKeyDown"),e.connect(this.anchors,"onAnchorUp",this,"checkBounds"),e.connect(this.stencils,"register",this,"checkBounds"),e.connect(this.canvas,"resize",this,"checkBounds"),e.connect(this.canvas,"setZoom",this,"checkBounds"),e.connect(this.canvas,"onScroll",this,function(){if(this._blockScroll)return void(this._blockScroll=!1);i&&clearTimeout(i),i=setTimeout(e.hitch(this,"checkBounds"),200)}),this._mouseHandle=this.mouse.register(this)},{selected:!1,type:"dojox.drawing.ui.dom.Pan",onKeyUp:function(e){32==e.keyCode&&this.onSetPan(!1)},onKeyDown:function(e){32==e.keyCode&&this.onSetPan(!0)},onSetPan:function(t){!0!==t&&!1!==t||(this.selected=!t),this.selected?(this.selected=!1,e.removeClass(this.domNode,"selected")):(this.selected=!0,e.addClass(this.domNode,"selected")),this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(e){e.x,e.last.x,e.y,e.last.y;this.canvas.domNode.parentNode.scrollTop-=e.move.y,this.canvas.domNode.parentNode.scrollLeft-=e.move.x,this.canvas.onScroll()},onStencilUp:function(e){this.checkBounds()},onStencilDrag:function(e){},checkBounds:function(){var e=function(){},t=function(){},i=1/0,a=-1/0,r=-1/0,o=1/0,n=0,s=0,d=0,l=0,h=this.stencils.group?this.stencils.group.getTransform():{dx:0,dy:0},u=this.mouse.scrollOffset(),m=(u.left,u.top,this.canvas.height),c=this.canvas.width,f=this.canvas.zoom,y=this.canvas.parentHeight,p=this.canvas.parentWidth;this.stencils.withSelected(function(e){var n=e.getBounds();t("SEL BOUNDS:",n),i=Math.min(n.y1+h.dy,i),a=Math.max(n.x2+h.dx,a),r=Math.max(n.y2+h.dy,r),o=Math.min(n.x1+h.dx,o)}),this.stencils.withUnselected(function(e){var n=e.getBounds();t("UN BOUNDS:",n),i=Math.min(n.y1,i),a=Math.max(n.x2,a),r=Math.max(n.y2,r),o=Math.min(n.x1,o)}),r*=f;var g=0,v=0;e("Bottom test","b:",r,"z:",f,"ch:",m,"pch:",y,"top:",u.top,"sy:",s),r>y||u.top?(e("*bottom scroll*"),m=Math.max(r,y+u.top),s=u.top,g+=this.canvas.getScrollWidth()):!s&&m>y&&(e("*bottom remove*"),m=y),a*=f,a>p||u.left?(c=Math.max(a,p+u.left),n=u.left,v+=this.canvas.getScrollWidth()):!n&&c>p&&(c=p),c+=2*g,m+=2*v,this._blockScroll=!0,this.stencils.group&&this.stencils.group.applyTransform({dx:l,dy:d}),this.stencils.withUnselected(function(e){e.transformPoints({dx:l,dy:d})}),this.canvas.setDimensions(c,m,n,s)}});return e.setObject("dojox.drawing.ui.dom.Pan",r),r.setup={name:"dojox.drawing.ui.dom.Pan",tooltip:"Pan Tool",iconClass:"iconPan"},a.register(r.setup,"plugin"),r});//# sourceMappingURL=Pan.js.map