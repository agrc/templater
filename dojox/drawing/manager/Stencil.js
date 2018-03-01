//>>built
define("dojox/drawing/manager/Stencil",["dojo","../util/oo","../defaults"],function(e,t,i){var a;return t.declare(function(t){a=t.surface,this.canvas=t.canvas,this.undo=t.undo,this.mouse=t.mouse,this.keys=t.keys,this.anchors=t.anchors,this.stencils={},this.selectedStencils={},this._mouseHandle=this.mouse.register(this),e.connect(this.keys,"onArrow",this,"onArrow"),e.connect(this.keys,"onEsc",this,"deselect"),e.connect(this.keys,"onDelete",this,"onDelete")},{_dragBegun:!1,_wasDragged:!1,_secondClick:!1,_isBusy:!1,setRecentStencil:function(e){this.recent=e},getRecentStencil:function(){return this.recent},register:function(e){return e.isText&&!e.editMode&&e.deleteEmptyCreate&&!e.getText()?(e.destroy(),!1):(this.stencils[e.id]=e,this.setRecentStencil(e),e.execText&&(e._text&&!e.editMode&&this.selectItem(e),e.connect("execText",this,function(){e.isText&&e.deleteEmptyModify&&!e.getText()?this.deleteItem(e):e.selectOnExec&&this.selectItem(e)})),e.connect("deselect",this,function(){!this._isBusy&&this.isSelected(e)&&this.deselectItem(e)}),e.connect("select",this,function(){this._isBusy||this.isSelected(e)||this.selectItem(e)}),e)},unregister:function(e){e&&(e.selected&&this.onDeselect(e),delete this.stencils[e.id])},onArrow:function(e){this.hasSelected()&&(this.saveThrottledState(),this.group.applyTransform({dx:e.x,dy:e.y}))},_throttleVrl:null,_throttle:!1,throttleTime:400,_lastmxx:-1,_lastmxy:-1,saveMoveState:function(){var t=this.group.getTransform();t.dx==this._lastmxx&&t.dy==this._lastmxy||(this._lastmxx=t.dx,this._lastmxy=t.dy,this.undo.add({before:e.hitch(this.group,"setTransform",t)}))},saveThrottledState:function(){clearTimeout(this._throttleVrl),clearInterval(this._throttleVrl),this._throttleVrl=setTimeout(e.hitch(this,function(){this._throttle=!1,this.saveMoveState()}),this.throttleTime),this._throttle||(this._throttle=!0,this.saveMoveState())},unDelete:function(e){for(var t in e)e[t].render(),this.onSelect(e[t])},onDelete:function(t){!0!==t&&this.undo.add({before:e.hitch(this,"unDelete",this.selectedStencils),after:e.hitch(this,"onDelete",!0)}),this.withSelected(function(e){this.anchors.remove(e);var t=e.id;e.destroy(),delete this.stencils[t]}),this.selectedStencils={}},deleteItem:function(t){if(this.hasSelected()){var i=[];for(var a in this.selectedStencils)if(this.selectedStencils.id==t.id){if(1==this.hasSelected())return void this.onDelete()}else i.push(this.selectedStencils.id);this.deselect(),this.selectItem(t),this.onDelete(),e.forEach(i,function(e){this.selectItem(e)},this)}else this.selectItem(t),this.onDelete()},removeAll:function(){this.selectAll(),this._isBusy=!0,this.onDelete(),this.stencils={},this._isBusy=!1},setSelectionGroup:function(){this.withSelected(function(e){this.onDeselect(e,!0)}),this.group&&(a.remove(this.group),this.group.removeShape()),this.group=a.createGroup(),this.group.setTransform({dx:0,dy:0}),this.withSelected(function(e){this.group.add(e.container),e.select()})},setConstraint:function(){var e=1/0,t=1/0;this.withSelected(function(i){var a=i.getBounds();e=Math.min(a.y1,e),t=Math.min(a.x1,t)}),this.constrain={l:-t,t:-e}},onDeselect:function(e,t){t||delete this.selectedStencils[e.id],this.anchors.remove(e),a.add(e.container),e.selected&&e.deselect(),e.applyTransform(this.group.getTransform())},deselectItem:function(e){this.onDeselect(e)},deselect:function(){this.withSelected(function(e){this.onDeselect(e)}),this._dragBegun=!1,this._wasDragged=!1},onSelect:function(e){this.selectedStencils[e.id]||(this.selectedStencils[e.id]=e,this.group.add(e.container),e.select(),1==this.hasSelected()&&this.anchors.add(e,this.group))},selectAll:function(){this._isBusy=!0;for(var e in this.stencils)this.selectItem(e);this._isBusy=!1},selectItem:function(e){var t="string"==typeof e?e:e.id,i=this.stencils[t];this.setSelectionGroup(),this.onSelect(i),this.group.moveToFront(),this.setConstraint()},onLabelDoubleClick:function(e){this.selectedStencils[e.id]&&this.deselect()},onStencilDoubleClick:function(e){if(this.selectedStencils[e.id]&&this.selectedStencils[e.id].edit){var t=this.selectedStencils[e.id];t.editMode=!0,this.deselect(),t.edit()}},onAnchorUp:function(){this.setConstraint()},onStencilDown:function(t,i){if(this.stencils[t.id]){if(this.setRecentStencil(this.stencils[t.id]),this._isBusy=!0,this.selectedStencils[t.id]&&this.keys.meta)return e.isMac&&this.keys.cmmd,this.onDeselect(this.selectedStencils[t.id]),1==this.hasSelected()&&this.withSelected(function(e){this.anchors.add(e,this.group)}),this.group.moveToFront(),void this.setConstraint();if(this.selectedStencils[t.id]){var a=this.group.getTransform();return this._offx=t.x-a.dx,void(this._offy=t.y-a.dy)}this.keys.meta||this.deselect(),this.selectItem(t.id),a=this.group.getTransform(),this._offx=t.x-a.dx,this._offy=t.y-a.dx,this.orgx=t.x,this.orgy=t.y,this._isBusy=!1,this.undo.add({before:function(){},after:function(){}})}},onLabelDown:function(e,t){this.onStencilDown(e,t)},onStencilUp:function(e){},onLabelUp:function(e){this.onStencilUp(e)},onStencilDrag:function(e){if(this._dragBegun){this.saveThrottledState();var t=e.x-e.last.x,a=e.y-e.last.y,r=this.constrain,o=i.anchors.marginZero;t=e.x-this._offx,a=e.y-this._offy,t<r.l+o&&(t=r.l+o),a<r.t+o&&(a=r.t+o),this.group.setTransform({dx:t,dy:a})}else this.onBeginDrag(e),this._dragBegun=!0},onLabelDrag:function(e){this.onStencilDrag(e)},onDragEnd:function(e){this._dragBegun=!1},onBeginDrag:function(e){this._wasDragged=!0},onDown:function(e){this.deselect()},onStencilOver:function(t){e.style(t.id,"cursor","move")},onStencilOut:function(t){e.style(t.id,"cursor","crosshair")},exporter:function(){var e=[];for(var t in this.stencils)this.stencils[t].enabled&&e.push(this.stencils[t].exporter());return e},listStencils:function(){return this.stencils},toSelected:function(e){var t=Array.prototype.slice.call(arguments).splice(1);for(var i in this.selectedStencils){var a=this.selectedStencils[i];a[e].apply(a,t)}},withSelected:function(t){var i=e.hitch(this,t);for(var a in this.selectedStencils)i(this.selectedStencils[a])},withUnselected:function(t){var i=e.hitch(this,t);for(var a in this.stencils)!this.stencils[a].selected&&i(this.stencils[a])},withStencils:function(t){var i=e.hitch(this,t);for(var a in this.stencils)i(this.stencils[a])},hasSelected:function(){var e=0;for(var t in this.selectedStencils)e++;return e},isSelected:function(e){return!!this.selectedStencils[e.id]}})});//# sourceMappingURL=Stencil.js.map