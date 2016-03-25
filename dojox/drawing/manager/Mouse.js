//>>built
define("dojox/drawing/manager/Mouse",["dojo","../util/oo","../defaults"],function(e,t,a){return t.declare(function(e){this.util=e.util,this.keys=e.keys,this.id=e.id||this.util.uid("mouse"),this.currentNodeId="",this.registered={}},{doublClickSpeed:400,_lastx:0,_lasty:0,__reg:0,_downOnCanvas:!1,init:function(t){this.container=t,this.setCanvas();var a,i=!1;e.connect(this.container,"rightclick",this,function(e){}),e.connect(document.body,"mousedown",this,function(e){}),e.connect(this.container,"mousedown",this,function(t){this.down(t),t.button!=e.mouseButtons.RIGHT&&(i=!0,a=e.connect(document,"mousemove",this,"drag"))}),e.connect(document,"mouseup",this,function(t){e.disconnect(a),i=!1,this.up(t)}),e.connect(document,"mousemove",this,function(e){i||this.move(e)}),e.connect(this.keys,"onEsc",this,function(e){this._dragged=!1})},setCanvas:function(){var t=e.position(this.container.parentNode);this.origin=e.clone(t)},scrollOffset:function(){return{top:this.container.parentNode.scrollTop,left:this.container.parentNode.scrollLeft}},resize:function(e,t){this.origin&&(this.origin.w=e,this.origin.h=t)},register:function(e){var t=e.id||"reg_"+this.__reg++;return this.registered[t]||(this.registered[t]=e),t},unregister:function(e){this.registered[e]&&delete this.registered[e]},_broadcastEvent:function(e,t){for(var a in this.registered)this.registered[a][e]&&this.registered[a][e](t)},onDown:function(e){this._broadcastEvent(this.eventName("down"),e)},onDrag:function(e){var t=this.eventName("drag");this._selected&&"onDrag"==t&&(t="onStencilDrag"),this._broadcastEvent(t,e)},onMove:function(e){this._broadcastEvent("onMove",e)},overName:function(e,t){var i=e.id.split(".");return t=t.charAt(0).toUpperCase()+t.substring(1),"dojox"!=i[0]||!a.clickable&&a.clickMode?"on"+t:"onStencil"+t},onOver:function(e){this._broadcastEvent(this.overName(e,"over"),e)},onOut:function(e){this._broadcastEvent(this.overName(e,"out"),e)},onUp:function(e){var t=this.eventName("up");if("onStencilUp"==t?this._selected=!0:this._selected&&"onUp"==t&&(t="onStencilUp",this._selected=!1),this._broadcastEvent(t,e),"silverlight"!=dojox.gfx.renderer){if(this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed){var a=this.eventName("doubleClick");this._broadcastEvent(a,e)}this._lastClickTime=this._clickTime}},zoom:1,setZoom:function(e){this.zoom=1/e},setEventMode:function(e){this.mode=e?"on"+e.charAt(0).toUpperCase()+e.substring(1):""},eventName:function(e){if(e=e.charAt(0).toUpperCase()+e.substring(1),this.mode)return"onPathEdit"==this.mode?"on"+e:("onUI"==this.mode,this.mode+e);if(!a.clickable&&a.clickMode)return"on"+e;var t=this.drawingType&&"surface"!=this.drawingType&&"canvas"!=this.drawingType?this.drawingType:"",i=t?t.charAt(0).toUpperCase()+t.substring(1):"";return"on"+i+e},up:function(e){this.onUp(this.create(e))},down:function(t){this._downOnCanvas=!0;var a=this.scrollOffset(),i=this._getXY(t);this._lastpagex=i.x,this._lastpagey=i.y;var r=this.origin,o=i.x-r.x+a.left,n=i.y-r.y+a.top,d=o>=0&&n>=0&&o<=r.w&&n<=r.h;o*=this.zoom,n*=this.zoom,r.startx=o,r.starty=n,this._lastx=o,this._lasty=n,this.drawingType=this.util.attr(t,"drawingType")||"";var l=this._getId(t);t.button==e.mouseButtons.RIGHT&&"mse"==this.id||(t.preventDefault(),e.stopEvent(t)),this.onDown({mid:this.id,x:o,y:n,pageX:i.x,pageY:i.y,withinCanvas:d,id:l})},over:function(e){this.onOver(e)},out:function(e){this.onOut(e)},move:function(e){var t=this.create(e);if("MUI"==this.id,t.id!=this.currentNodeId){var a={};for(var i in t)a[i]=t[i];a.id=this.currentNodeId,this.currentNodeId&&this.out(a),t.id&&this.over(t),this.currentNodeId=t.id}this.onMove(t)},drag:function(e){this.onDrag(this.create(e,!0))},create:function(t,a){var i=this.scrollOffset(),r=this._getXY(t),o=r.x,n=r.y,d=this.origin,l=r.x-d.x+i.left,s=r.y-d.y+i.top,m=l>=0&&s>=0&&l<=d.w&&s<=d.h;l*=this.zoom,s*=this.zoom;var u=m?this._getId(t,a):"",c={mid:this.id,x:l,y:s,pageX:r.x,pageY:r.y,page:{x:r.x,y:r.y},orgX:d.x,orgY:d.y,last:{x:this._lastx,y:this._lasty},start:{x:this.origin.startx,y:this.origin.starty},move:{x:o-this._lastpagex,y:n-this._lastpagey},scroll:i,id:u,withinCanvas:m};return this._lastx=l,this._lasty=s,this._lastpagex=o,this._lastpagey=n,e.stopEvent(t),c},_getId:function(e,t){return this.util.attr(e,"id",null,t)},_getXY:function(e){return{x:e.pageX,y:e.pageY}},setCursor:function(t,a){a?e.style(a,"cursor",t):e.style(this.container,"cursor",t)}})});//# sourceMappingURL=Mouse.js.map