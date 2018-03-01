//>>built
define("dojox/layout/DragPane",["dojo/_base/declare","dijit/_Widget","dojo/_base/html","dojo/dom-style"],function(e,t,i,a){return e("dojox.layout.DragPane",t,{invert:!0,postCreate:function(){this.connect(this.domNode,"onmousedown","_down"),this.connect(this.domNode,"onmouseleave","_up"),this.connect(this.domNode,"onmouseup","_up")},_down:function(e){var t=this.domNode;e.preventDefault(),a.set(t,"cursor","move"),this._x=e.pageX,this._y=e.pageY,this._x<t.offsetLeft+t.clientWidth&&this._y<t.offsetTop+t.clientHeight&&(i.setSelectable(t,!1),this._mover=this.connect(t,"onmousemove","_move"))},_up:function(e){i.setSelectable(this.domNode,!0),a.set(this.domNode,"cursor","pointer"),this._mover&&this.disconnect(this._mover),delete this._mover},_move:function(e){var t=this.invert?1:-1;this.domNode.scrollTop+=(this._y-e.pageY)*t,this.domNode.scrollLeft+=(this._x-e.pageX)*t,this._x=e.pageX,this._y=e.pageY}})});//# sourceMappingURL=DragPane.js.map