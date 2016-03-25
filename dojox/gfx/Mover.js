//>>built
define("dojox/gfx/Mover",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/on","dojo/touch","dojo/_base/event"],function(e,t,a,i,r,n){return a("dojox.gfx.Mover",null,{constructor:function(t,a,o){this.shape=t,this.lastX=a.clientX,this.lastY=a.clientY;var s=this.host=o,l=document,d=i(l,r.move,e.hitch(this,"onFirstMove"));this.events=[i(l,r.move,e.hitch(this,"onMouseMove")),i(l,r.release,e.hitch(this,"destroy")),i(l,"dragstart",e.hitch(n,"stop")),i(l,"selectstart",e.hitch(n,"stop")),d],s&&s.onMoveStart&&s.onMoveStart(this)},onMouseMove:function(e){var t=e.clientX,a=e.clientY;this.host.onMove(this,{dx:t-this.lastX,dy:a-this.lastY}),this.lastX=t,this.lastY=a,n.stop(e)},onFirstMove:function(){this.host.onFirstMove(this),this.events.pop().remove()},destroy:function(){t.forEach(this.events,function(e){e.remove()});var e=this.host;e&&e.onMoveStop&&e.onMoveStop(this),this.events=this.shape=null}})});//# sourceMappingURL=Mover.js.map