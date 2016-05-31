//>>built
define("dojo/dnd/Manager",["../_base/array","../_base/declare","../_base/lang","../_base/window","../dom-class","../Evented","../has","../keys","../on","../topic","../touch","./common","./autoscroll","./Avatar"],function(e,t,a,i,r,d,o,n,l,s,m,f,u,h){var y=t("dojo.dnd.Manager",[d],{constructor:function(){this.avatar=null,this.source=null,this.nodes=[],this.copy=!0,this.target=null,this.canDropFlag=!1,this.events=[]},OFFSET_X:o("touch")?0:16,OFFSET_Y:o("touch")?-64:16,overSource:function(e){this.avatar&&(this.target=e&&"Disabled"!=e.targetState?e:null,this.canDropFlag=Boolean(this.target),this.avatar.update()),s.publish("/dnd/source/over",e)},outSource:function(e){this.avatar?this.target==e&&(this.target=null,this.canDropFlag=!1,this.avatar.update(),s.publish("/dnd/source/over",null)):s.publish("/dnd/source/over",null)},startDrag:function(e,t,d){function o(e){e.preventDefault(),e.stopPropagation()}u.autoScrollStart(i.doc),this.source=e,this.nodes=t,this.copy=Boolean(d),this.avatar=this.makeAvatar(),i.body().appendChild(this.avatar.node),s.publish("/dnd/start",e,t,this.copy),this.events=[l(i.doc,m.move,a.hitch(this,"onMouseMove")),l(i.doc,m.release,a.hitch(this,"onMouseUp")),l(i.doc,"keydown",a.hitch(this,"onKeyDown")),l(i.doc,"keyup",a.hitch(this,"onKeyUp")),l(i.doc,"dragstart",o),l(i.body(),"selectstart",o)];var n="dojoDnd"+(d?"Copy":"Move");r.add(i.body(),n)},canDrop:function(e){var t=Boolean(this.target&&e);this.canDropFlag!=t&&(this.canDropFlag=t,this.avatar.update())},stopDrag:function(){r.remove(i.body(),["dojoDndCopy","dojoDndMove"]),e.forEach(this.events,function(e){e.remove()}),this.events=[],this.avatar.destroy(),this.avatar=null,this.source=this.target=null,this.nodes=[]},makeAvatar:function(){return new h(this)},updateAvatar:function(){this.avatar.update()},onMouseMove:function(e){var t=this.avatar;if(t){u.autoScrollNodes(e);var a=t.node.style;a.left=e.pageX+this.OFFSET_X+"px",a.top=e.pageY+this.OFFSET_Y+"px";var i=Boolean(this.source.copyState(f.getCopyKeyState(e)));this.copy!=i&&this._setCopyStatus(i)}o("touch")&&e.preventDefault()},onMouseUp:function(e){if(this.avatar){if(this.target&&this.canDropFlag){var t=Boolean(this.source.copyState(f.getCopyKeyState(e)));s.publish("/dnd/drop/before",this.source,this.nodes,t,this.target,e),s.publish("/dnd/drop",this.source,this.nodes,t,this.target,e)}else s.publish("/dnd/cancel");this.stopDrag()}},onKeyDown:function(e){if(this.avatar)switch(e.keyCode){case n.CTRL:var t=Boolean(this.source.copyState(!0));this.copy!=t&&this._setCopyStatus(t);break;case n.ESCAPE:s.publish("/dnd/cancel"),this.stopDrag()}},onKeyUp:function(e){if(this.avatar&&e.keyCode==n.CTRL){var t=Boolean(this.source.copyState(!1));this.copy!=t&&this._setCopyStatus(t)}},_setCopyStatus:function(e){this.copy=e,this.source._markDndStatus(this.copy),this.updateAvatar(),r.replace(i.body(),"dojoDnd"+(this.copy?"Copy":"Move"),"dojoDnd"+(this.copy?"Move":"Copy"))}});return f._manager=null,y.manager=f.manager=function(){return f._manager||(f._manager=new y),f._manager},y});//# sourceMappingURL=Manager.js.map