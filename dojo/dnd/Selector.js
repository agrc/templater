//>>built
define("dojo/dnd/Selector",["../_base/array","../_base/declare","../_base/kernel","../_base/lang","../dom","../dom-construct","../mouse","../_base/NodeList","../on","../touch","./common","./Container"],function(e,t,i,a,r,n,o,s,d,l,u,c){var f=t("dojo.dnd.Selector",c,{constructor:function(e,t){t||(t={}),this.singular=t.singular,this.autoSync=t.autoSync,this.selection={},this.anchor=null,this.simpleSelection=!1,this.events.push(d(this.node,l.press,a.hitch(this,"onMouseDown")),d(this.node,l.release,a.hitch(this,"onMouseUp")))},singular:!1,getSelectedNodes:function(){var e=new s,t=u._empty;for(var i in this.selection)i in t||e.push(r.byId(i));return e},selectNone:function(){return this._removeSelection()._removeAnchor()},selectAll:function(){return this.forInItems(function(e,t){this._addItemClass(r.byId(t),"Selected"),this.selection[t]=1},this),this._removeAnchor()},deleteSelectedNodes:function(){var e=u._empty;for(var t in this.selection)if(!(t in e)){var i=r.byId(t);this.delItem(t),n.destroy(i)}return this.anchor=null,this.selection={},this},forInSelectedItems:function(e,t){t=t||i.global;var a=this.selection,r=u._empty;for(var n in a)n in r||e.call(t,this.getItem(n),n,this)},sync:function(){f.superclass.sync.call(this),this.anchor&&(this.getItem(this.anchor.id)||(this.anchor=null));var t=[],i=u._empty;for(var a in this.selection)a in i||this.getItem(a)||t.push(a);return e.forEach(t,function(e){delete this.selection[e]},this),this},insertNodes:function(e,t,i,a){var r=this._normalizedCreator;return this._normalizedCreator=function(t,i){var a=r.call(this,t,i);return e?(this.anchor?this.anchor!=a.node&&(this._removeItemClass(a.node,"Anchor"),this._addItemClass(a.node,"Selected")):(this.anchor=a.node,this._removeItemClass(a.node,"Selected"),this._addItemClass(this.anchor,"Anchor")),this.selection[a.node.id]=1):(this._removeItemClass(a.node,"Selected"),this._removeItemClass(a.node,"Anchor")),a},f.superclass.insertNodes.call(this,t,i,a),this._normalizedCreator=r,this},destroy:function(){f.superclass.destroy.call(this),this.selection=this.anchor=null},onMouseDown:function(e){if(this.autoSync&&this.sync(),this.current){if(!this.singular&&!u.getCopyKeyState(e)&&!e.shiftKey&&this.current.id in this.selection)return this.simpleSelection=!0,void(o.isLeft(e)&&(e.stopPropagation(),e.preventDefault()));if(!this.singular&&e.shiftKey){u.getCopyKeyState(e)||this._removeSelection();var t=this.getAllNodes();if(t.length&&(this.anchor||(this.anchor=t[0],this._addItemClass(this.anchor,"Anchor")),this.selection[this.anchor.id]=1,this.anchor!=this.current)){for(var i,a=0;a<t.length&&((i=t[a])!=this.anchor&&i!=this.current);++a);for(++a;a<t.length&&((i=t[a])!=this.anchor&&i!=this.current);++a)this._addItemClass(i,"Selected"),this.selection[i.id]=1;this._addItemClass(this.current,"Selected"),this.selection[this.current.id]=1}}else this.singular?this.anchor==this.current?u.getCopyKeyState(e)&&this.selectNone():(this.selectNone(),this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1):u.getCopyKeyState(e)?this.anchor==this.current?(delete this.selection[this.anchor.id],this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1):this.current.id in this.selection||(this.selectNone(),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1);e.stopPropagation(),e.preventDefault()}},onMouseUp:function(){this.simpleSelection&&(this.simpleSelection=!1,this.selectNone(),this.current&&(this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1))},onMouseMove:function(){this.simpleSelection=!1},onOverEvent:function(){this.onmousemoveEvent=d(this.node,l.move,a.hitch(this,"onMouseMove"))},onOutEvent:function(){this.onmousemoveEvent&&(this.onmousemoveEvent.remove(),delete this.onmousemoveEvent)},_removeSelection:function(){var e=u._empty;for(var t in this.selection)if(!(t in e)){var i=r.byId(t);i&&this._removeItemClass(i,"Selected")}return this.selection={},this},_removeAnchor:function(){return this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this.anchor=null),this}});return f});//# sourceMappingURL=Selector.js.map