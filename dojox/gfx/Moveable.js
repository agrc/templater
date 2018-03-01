//>>built
define("dojox/gfx/Moveable",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/topic","dojo/touch","dojo/dom-class","dojo/_base/window","./Mover"],function(e,t,a,i,r,o,n,s,l){return t("dojox.gfx.Moveable",null,{constructor:function(t,a){this.shape=t,this.delay=a&&a.delay>0?a.delay:0,this.mover=a&&a.mover?a.mover:l,this.events=[this.shape.on(o.press,e.hitch(this,"onMouseDown"))]},destroy:function(){a.forEach(this.events,function(e){e.remove()}),this.events=this.shape=null},onMouseDown:function(t){this.delay?(this.events.push(this.shape.on(o.move,e.hitch(this,"onMouseMove")),this.shape.on(o.release,e.hitch(this,"onMouseUp"))),this._lastX=t.clientX,this._lastY=t.clientY):new this.mover(this.shape,t,this),i.stop(t)},onMouseMove:function(e){var t=e.clientX,a=e.clientY;(Math.abs(t-this._lastX)>this.delay||Math.abs(a-this._lastY)>this.delay)&&(this.onMouseUp(e),new this.mover(this.shape,e,this)),i.stop(e)},onMouseUp:function(e){this.events.pop().remove()},onMoveStart:function(e){r.publish("/gfx/move/start",e),n.add(s.body(),"dojoMove")},onMoveStop:function(e){r.publish("/gfx/move/stop",e),n.remove(s.body(),"dojoMove")},onFirstMove:function(e){},onMove:function(e,t){this.onMoving(e,t),this.shape.applyLeftTransform(t),this.onMoved(e,t)},onMoving:function(e,t){},onMoved:function(e,t){}})});//# sourceMappingURL=Moveable.js.map