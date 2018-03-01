//>>built
define("dojox/mdnd/Moveable",["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/sniff","dojo/touch","dojo/dom","dojo/dom-geometry","dojo/dom-style","./AutoScroll"],function(e,t,i,r,n,a,o,s,l,d){return e("dojox.mdnd.Moveable",null,{handle:null,skip:!0,dragDistance:3,constructor:function(e,t){this.node=o.byId(t),this.d=this.node.ownerDocument,e||(e={}),this.handle=e.handle?o.byId(e.handle):null,this.handle||(this.handle=this.node),this.skip=e.skip,this.events=[i.connect(this.handle,a.press,this,"onMouseDown")],d.autoScroll&&(this.autoScroll=d.autoScroll)},isFormElement:function(e){var t=e.target;return 3==t.nodeType&&(t=t.parentNode)," a button textarea input select option ".indexOf(" "+t.tagName.toLowerCase()+" ")>=0},onMouseDown:function(e){if(!this._isDragging){1==(e.which||e.button)&&(this.skip&&this.isFormElement(e)||(this.autoScroll&&(this.autoScroll.setAutoScrollNode(this.node),this.autoScroll.setAutoScrollMaxPage()),this.events.push(i.connect(this.d,a.release,this,"onMouseUp")),this.events.push(i.connect(this.d,a.move,this,"onFirstMove")),this._selectStart=i.connect(dojo.body(),"onselectstart",r.stop),this._firstX=e.clientX,this._firstY=e.clientY,r.stop(e)))}},onFirstMove:function(e){r.stop(e),(this._firstX-e.clientX)*(this._firstX-e.clientX)+(this._firstY-e.clientY)*(this._firstY-e.clientY)>this.dragDistance*this.dragDistance&&(this._isDragging=!0,i.disconnect(this.events.pop()),l.set(this.node,"width",s.getContentBox(this.node).w+"px"),this.initOffsetDrag(e),this.events.push(i.connect(this.d,a.move,this,"onMove")))},initOffsetDrag:function(e){this.offsetDrag={l:e.pageX,t:e.pageY};var t=(this.node.style,s.position(this.node,!0));this.offsetDrag.l=t.x-this.offsetDrag.l,this.offsetDrag.t=t.y-this.offsetDrag.t;var i={x:t.x,y:t.y};this.size={w:t.w,h:t.h},this.onDragStart(this.node,i,this.size)},onMove:function(e){if(r.stop(e),!(8==n("ie")&&new Date-this.date<20)){this.autoScroll&&this.autoScroll.checkAutoScroll(e);var t={x:this.offsetDrag.l+e.pageX,y:this.offsetDrag.t+e.pageY},i=this.node.style;i.left=t.x+"px",i.top=t.y+"px",this.onDrag(this.node,t,this.size,{x:e.pageX,y:e.pageY}),8==n("ie")&&(this.date=new Date)}},onMouseUp:function(e){this._isDragging&&(r.stop(e),this._isDragging=!1,this.autoScroll&&this.autoScroll.stopAutoScroll(),delete this.onMove,this.onDragEnd(this.node),this.node.focus()),i.disconnect(this.events.pop()),i.disconnect(this.events.pop()),i.disconnect(this._selectStart),this._selectStart=null},onDragStart:function(e,t,i){},onDragEnd:function(e){},onDrag:function(e,t,i,r){},destroy:function(){t.forEach(this.events,i.disconnect),this.events=this.node=null}})});//# sourceMappingURL=Moveable.js.map