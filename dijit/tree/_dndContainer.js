//>>built
define("dijit/tree/_dndContainer",["dojo/aspect","dojo/_base/declare","dojo/dom-class","dojo/_base/lang","dojo/on","dojo/touch"],function(e,t,i,n,o,s){return t("dijit.tree._dndContainer",null,{constructor:function(t,r){this.tree=t,this.node=t.domNode,n.mixin(this,r),this.containerState="",i.add(this.node,"dojoDndContainer"),this.events=[o(this.node,s.enter,n.hitch(this,"onOverEvent")),o(this.node,s.leave,n.hitch(this,"onOutEvent")),e.after(this.tree,"_onNodeMouseEnter",n.hitch(this,"onMouseOver"),!0),e.after(this.tree,"_onNodeMouseLeave",n.hitch(this,"onMouseOut"),!0),o(this.node,"dragstart, selectstart",function(e){e.preventDefault()})]},destroy:function(){for(var e;e=this.events.pop();)e.remove();this.node=this.parent=null},onMouseOver:function(e){this.current=e},onMouseOut:function(){this.current=null},_changeState:function(e,t){var n="dojoDnd"+e,o=e.toLowerCase()+"State";i.replace(this.node,n+t,n+this[o]),this[o]=t},_addItemClass:function(e,t){i.add(e,"dojoDndItem"+t)},_removeItemClass:function(e,t){i.remove(e,"dojoDndItem"+t)},onOverEvent:function(){this._changeState("Container","Over")},onOutEvent:function(){this._changeState("Container","")}})});//# sourceMappingURL=_dndContainer.js.map