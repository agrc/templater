//>>built
define("dojox/drawing/plugins/drawing/Silverlight",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.drawing.plugins.drawing.Silverlight"),i.drawing.plugins.drawing.Silverlight=i.drawing.util.oo.declare(function(t){"silverlight"==i.gfx.renderer&&(this.mouse=t.mouse,this.stencils=t.stencils,this.anchors=t.anchors,this.canvas=t.canvas,this.util=t.util,e.connect(this.stencils,"register",this,function(t){var i,a,r,o,n,s=this;(function(){i=t.container.connect("onmousedown",function(e){e.superTarget=t,s.mouse.down(e)})})(),a=e.connect(t,"setTransform",this,function(){}),r=e.connect(t,"onBeforeRender",function(){}),o=e.connect(t,"onRender",this,function(){}),n=e.connect(t,"destroy",this,function(){e.forEach([i,a,r,o,n],e.disconnect,e)})}),e.connect(this.anchors,"onAddAnchor",this,function(t){var i=t.shape.connect("onmousedown",this.mouse,function(e){e.superTarget=t,this.down(e)}),a=e.connect(t,"disconnectMouse",this,function(){e.disconnect(i),e.disconnect(a)})}),this.mouse._down=function(e){var t=this._getXY(e),i=t.x-this.origin.x,a=t.y-this.origin.y;i*=this.zoom,a*=this.zoom,this.origin.startx=i,this.origin.starty=a,this._lastx=i,this._lasty=a,this.drawingType=this.util.attr(e,"drawingType")||"";var r=this._getId(e),o={x:i,y:a,id:r};if(this.onDown(o),this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed){var n=this.eventName("doubleClick");this._broadcastEvent(n,o)}this._lastClickTime=this._clickTime},this.mouse.down=function(t){if(clearTimeout(this.__downInv),"surface"==this.util.attr(t,"drawingType"))return void(this.__downInv=setTimeout(e.hitch(this,function(){this._down(t)}),500));this._down(t)},this.mouse._getXY=function(e){if(e.pageX)return{x:e.pageX,y:e.pageY,cancelBubble:!0};for(var t in e);return void 0!==e.x?{x:e.x+this.origin.x,y:e.y+this.origin.y}:{x:e.pageX,y:e.pageY}},this.mouse._getId=function(e){return this.util.attr(e,"id")},this.util.attr=function(t,i,a,r){if(!t)return!1;try{var o;if(o=t.superTarget?t.superTarget:t.superClass?t.superClass:t.target?t.target:t,void 0!==a)return t[i]=a,a;if(o.tagName){if("drawingType"==i&&"object"==o.tagName.toLowerCase())return"surface";e.attr(o,i)}return o[i]}catch(e){return!1}})},{})});//# sourceMappingURL=Silverlight.js.map