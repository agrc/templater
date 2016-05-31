//>>built
define("dijit/tree/dndSource",["dojo/_base/array","dojo/_base/declare","dojo/dnd/common","dojo/dom-class","dojo/dom-geometry","dojo/_base/lang","dojo/on","dojo/touch","dojo/topic","dojo/dnd/Manager","./_dndSelector"],function(t,e,i,o,n,s,r,a,d,h,l){var c=e("dijit.tree.dndSource",l,{isSource:!0,accept:["text","treeNode"],copyOnly:!1,dragThreshold:5,betweenThreshold:0,generateText:!0,constructor:function(t,e){e||(e={}),s.mixin(this,e);var i=e.accept instanceof Array?e.accept:["text","treeNode"];if(this.accept=null,i.length){this.accept={};for(var n=0;n<i.length;++n)this.accept[i[n]]=1}this.isDragging=!1,this.mouseDown=!1,this.targetAnchor=null,this.targetBox=null,this.dropPosition="",this._lastX=0,this._lastY=0,this.sourceState="",this.isSource&&o.add(this.node,"dojoDndSource"),this.targetState="",this.accept&&o.add(this.node,"dojoDndTarget"),this.topics=[d.subscribe("/dnd/source/over",s.hitch(this,"onDndSourceOver")),d.subscribe("/dnd/start",s.hitch(this,"onDndStart")),d.subscribe("/dnd/drop",s.hitch(this,"onDndDrop")),d.subscribe("/dnd/cancel",s.hitch(this,"onDndCancel"))]},checkAcceptance:function(){return!0},copyState:function(t){return this.copyOnly||t},destroy:function(){this.inherited(arguments);for(var t;t=this.topics.pop();)t.remove();this.targetAnchor=null},_onDragMouse:function(t,e){var i=h.manager(),o=this.targetAnchor,s=this.current,r=this.dropPosition,a="Over";if(s&&this.betweenThreshold>0&&(this.targetBox&&o==s||(this.targetBox=n.position(s.rowNode,!0)),t.pageY-this.targetBox.y<=this.betweenThreshold?a="Before":t.pageY-this.targetBox.y>=this.targetBox.h-this.betweenThreshold&&(a="After")),e||s!=o||a!=r){if(o&&this._removeItemClass(o.rowNode,r),s&&this._addItemClass(s.rowNode,a),s)if(s==this.tree.rootNode&&"Over"!=a)i.canDrop(!1);else{var d=!1,l=!1;if(i.source==this){l="Over"===a;for(var c in this.selection){var u=this.selection[c];if(u.item===s.item){d=!0;break}u.getParent().id!==s.id&&(l=!1)}}i.canDrop(!d&&!l&&!this._isParentChildDrop(i.source,s.rowNode)&&this.checkItemAcceptance(s.rowNode,i.source,a.toLowerCase()))}else i.canDrop(!1);this.targetAnchor=s,this.dropPosition=a}},onMouseMove:function(e){if(!this.isDragging||"Disabled"!=this.targetState){this.inherited(arguments);var o=h.manager();if(this.isDragging)this._onDragMouse(e);else if(this.mouseDown&&this.isSource&&(Math.abs(e.pageX-this._lastX)>=this.dragThreshold||Math.abs(e.pageY-this._lastY)>=this.dragThreshold)){var n=this.getSelectedTreeNodes();if(n.length){if(n.length>1){var s,r,a=this.selection,d=0,l=[];t:for(;s=n[d++];){for(r=s.getParent();r&&r!==this.tree;r=r.getParent())if(a[r.id])continue t;l.push(s)}n=l}n=t.map(n,function(t){return t.domNode}),o.startDrag(this,n,this.copyState(i.getCopyKeyState(e))),this._onDragMouse(e,!0)}}}},onMouseDown:function(t){this.mouseDown=!0,this.mouseButton=t.button,this._lastX=t.pageX,this._lastY=t.pageY,this.inherited(arguments)},onMouseUp:function(t){this.mouseDown&&(this.mouseDown=!1,this.inherited(arguments))},onMouseOut:function(){this.inherited(arguments),this._unmarkTargetAnchor()},checkItemAcceptance:function(){return!0},onDndSourceOver:function(t){if(this!=t)this.mouseDown=!1,this._unmarkTargetAnchor();else if(this.isDragging){var e=h.manager();e.canDrop(!1)}},onDndStart:function(t,e,i){this.isSource&&this._changeState("Source",this==t?i?"Copied":"Moved":"");var o=this.checkAcceptance(t,e);this._changeState("Target",o?"":"Disabled"),this==t&&h.manager().overSource(this),this.isDragging=!0},itemCreator:function(e){return t.map(e,function(t){return{id:t.id,name:t.textContent||t.innerText||""}})},onDndDrop:function(e,i,o){if("Over"==this.containerState){var n=this.tree,s=n.model,r=this.targetAnchor;this.isDragging=!1;var a,d,h;a=r&&r.item||n.item,"Before"==this.dropPosition||"After"==this.dropPosition?(a=r.getParent()&&r.getParent().item||n.item,d=r.getIndexInParent(),"After"==this.dropPosition?(d=r.getIndexInParent()+1,h=r.getNextSibling()&&r.getNextSibling().item):h=r.item):a=r&&r.item||n.item;var l;t.forEach(i,function(n,c){var u=e.getItem(n.id);if(-1!=t.indexOf(u.type,"treeNode"))var p=u.data,f=p.item,m=p.getParent().item;e==this?("number"==typeof d&&a==m&&p.getIndexInParent()<d&&(d-=1),s.pasteItem(f,m,a,o,d,h)):s.isItem(f)?s.pasteItem(f,m,a,o,d,h):(l||(l=this.itemCreator(i,r.rowNode,e)),s.newItem(l[c],a,d,h))},this),this.tree._expandNode(r)}this.onDndCancel()},onDndCancel:function(){this._unmarkTargetAnchor(),this.isDragging=!1,this.mouseDown=!1,delete this.mouseButton,this._changeState("Source",""),this._changeState("Target","")},onOverEvent:function(){this.inherited(arguments),h.manager().overSource(this)},onOutEvent:function(){this._unmarkTargetAnchor();var t=h.manager();this.isDragging&&t.canDrop(!1),t.outSource(this),this.inherited(arguments)},_isParentChildDrop:function(t,e){if(!t.tree||t.tree!=this.tree)return!1;for(var i=t.tree.domNode,o=t.selection,n=e.parentNode;n!=i&&!o[n.id];)n=n.parentNode;return n.id&&o[n.id]},_unmarkTargetAnchor:function(){this.targetAnchor&&(this._removeItemClass(this.targetAnchor.rowNode,this.dropPosition),this.targetAnchor=null,this.targetBox=null,this.dropPosition=null)},_markDndStatus:function(t){this._changeState("Source",t?"Copied":"Moved")}});return c});//# sourceMappingURL=dndSource.js.map