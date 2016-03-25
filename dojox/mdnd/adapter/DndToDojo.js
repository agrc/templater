//>>built
define("dojox/mdnd/adapter/DndToDojo",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/topic","dojo/_base/window","dojox/mdnd/PureSource","dojox/mdnd/LazyManager"],function(e,t,i,a,n,o,r,s,d){var l=t("dojox.mdnd.adapter.DndToDojo",null,{_dojoList:null,_currentDojoArea:null,_dojoxManager:null,_dragStartHandler:null,_dropHandler:null,_moveHandler:null,_moveUpHandler:null,_draggedNode:null,constructor:function(){this._dojoList=[],this._currentDojoArea=null,this._dojoxManager=dojox.mdnd.areaManager(),this._dragStartHandler=i.subscribe("/dojox/mdnd/drag/start",this,function(t,a,n){this._draggedNode=t,this._moveHandler=i.connect(e.doc,"onmousemove",this,"onMouseMove")}),this._dropHandler=i.subscribe("/dojox/mdnd/drop",this,function(e,t,a){this._currentDojoArea&&i.publish("/dojox/mdnd/adapter/dndToDojo/cancel",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept]),this._draggedNode=null,this._currentDojoArea=null,i.disconnect(this._moveHandler)})},_getIndexDojoArea:function(e){if(e)for(var t=0,i=this._dojoList.length;i>t;t++)if(this._dojoList[t].node===e)return t;return-1},_initCoordinates:function(e){if(e){var t=r.position(e,!0),i={};return i.x=t.x,i.y=t.y,i.x1=t.x+t.w,i.y1=t.y+t.h,i}return null},register:function(e,t,i){if(-1==this._getIndexDojoArea(e)){var a=this._initCoordinates(e),n={node:e,type:t,dojo:i?i:!1,coords:a};this._dojoList.push(n),i&&!this._lazyManager&&(this._lazyManager=new dojox.mdnd.LazyManager)}},unregisterByNode:function(e){var t=this._getIndexDojoArea(e);-1!=t&&this._dojoList.splice(t,1)},unregisterByType:function(e){if(e){var t=[];a.forEach(this._dojoList,function(i,a){i.type!=e&&t.push(i)}),this._dojoList=t}},unregister:function(){this._dojoList=[]},refresh:function(){var e=this._dojoList;this.unregister(),a.forEach(e,function(e){e.coords=this._initCoordinates(e.node)},this),this._dojoList=e},refreshByType:function(e){var t=this._dojoList;this.unregister(),a.forEach(t,function(t){t.type==e&&(t.coords=this._initCoordinates(t.node))},this),this._dojoList=t},_getHoverDojoArea:function(e){this._oldDojoArea=this._currentDojoArea,this._currentDojoArea=null;for(var t=e.x,i=e.y,a=this._dojoList.length,n=0;a>n;n++){var o=this._dojoList[n],r=o.coords;if(r.x<=t&&t<=r.x1&&r.y<=i&&i<=r.y1){this._currentDojoArea=o;break}}},onMouseMove:function(e){var t={x:e.pageX,y:e.pageY};this._getHoverDojoArea(t),this._currentDojoArea!=this._oldDojoArea&&(null==this._currentDojoArea?this.onDragExit(e):null==this._oldDojoArea?this.onDragEnter(e):(this.onDragExit(e),this.onDragEnter(e)))},isAccepted:function(e,t){return!0},onDragEnter:function(t){if(this._currentDojoArea.dojo){i.disconnect(this._dojoxManager._dragItem.handlers.pop()),i.disconnect(this._dojoxManager._dragItem.handlers.pop()),i.disconnect(this._dojoxManager._dragItem.item.events.pop()),d.body().removeChild(this._dojoxManager._cover),d.body().removeChild(this._dojoxManager._cover2);var a=this._dojoxManager._dragItem.item.node;dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.unsubscribeDnd(),o.set(a,{position:"relative",top:"0",left:"0"}),this._lazyManager.startDrag(t,a);var n=i.connect(this._lazyManager.manager,"overSource",this,function(){i.disconnect(n),this._lazyManager.manager.canDropFlag&&(this._dojoxManager._dropIndicator.node.style.display="none")});this.cancelHandler=i.subscribe("/dnd/cancel",this,function(){var e=this._dojoxManager._dragItem.item;e.events=[i.connect(e.handle,"onmousedown",e,"onMouseDown")],d.body().appendChild(this._dojoxManager._cover),d.body().appendChild(this._dojoxManager._cover2),this._dojoxManager._cover.appendChild(e.node);var t=this._dojoxManager._areaList[this._dojoxManager._sourceIndexArea],a=this._dojoxManager._sourceDropIndex,n=null;a!=t.items.length&&-1!=a&&(n=t.items[this._dojoxManager._sourceDropIndex].item.node),"none"==this._dojoxManager._dropIndicator.node.style.display&&""==this._dojoxManager._dropIndicator.node.style.display,this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),this._draggedNode.style.display="",this._dojoxManager.onDrop(this._draggedNode),i.unsubscribe(this.cancelHandler),i.unsubscribe(this.dropHandler),dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd()}),this.dropHandler=i.subscribe("/dnd/drop/before",this,function(e){i.unsubscribe(this.cancelHandler),i.unsubscribe(this.dropHandler),this.onDrop()})}else this.accept=this.isAccepted(this._dojoxManager._dragItem.item.node,this._currentDojoArea),this.accept&&(i.disconnect(this._dojoxManager._dragItem.handlers.pop()),i.disconnect(this._dojoxManager._dragItem.handlers.pop()),this._dojoxManager._dropIndicator.node.style.display="none",this._moveUpHandler||(this._moveUpHandler=i.connect(e.doc,"onmouseup",this,"onDrop")));i.publish("/dojox/mdnd/adapter/dndToDojo/over",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept])},onDragExit:function(e){if(this._oldDojoArea.dojo){i.unsubscribe(this.cancelHandler),i.unsubscribe(this.dropHandler);var t=this._dojoxManager._dragItem.item;this._dojoxManager._dragItem.item.events.push(i.connect(t.node.ownerDocument,"onmousemove",t,"onMove")),d.body().appendChild(this._dojoxManager._cover),d.body().appendChild(this._dojoxManager._cover2),this._dojoxManager._cover.appendChild(t.node);var a=t.node.style;a.position="absolute",a.left=t.offsetDrag.l+e.pageX+"px",a.top=t.offsetDrag.t+e.pageX+"px",a.display="",this._lazyManager.cancelDrag(),dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd(),"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),this._dojoxManager._dragItem.item.onMove(e)}else this.accept&&(this._moveUpHandler&&(i.disconnect(this._moveUpHandler),this._moveUpHandler=null),"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),this._dojoxManager._dragItem.handlers.push(i.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),this._dojoxManager._dragItem.item.onMove(e));i.publish("/dojox/mdnd/adapter/dndToDojo/out",[this._oldDojoArea.node,this._oldDojoArea.type,this._draggedNode,this.accept])},onDrop:function(e){this._currentDojoArea.dojo&&dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd(),"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),this._dojoxManager._cover.parentNode&&1==this._dojoxManager._cover.parentNode.nodeType&&(d.body().removeChild(this._dojoxManager._cover),d.body().removeChild(this._dojoxManager._cover2)),this._draggedNode.parentNode==this._dojoxManager._cover&&this._dojoxManager._cover.removeChild(this._draggedNode),i.disconnect(this._moveHandler),i.disconnect(this._moveUpHandler),this._moveHandler=this._moveUpHandler=null,i.publish("/dojox/mdnd/adapter/dndToDojo/drop",[this._draggedNode,this._currentDojoArea.node,this._currentDojoArea.type]),n.remove(this._draggedNode,"dragNode");var t=this._draggedNode.style;t.position="relative",t.left="0",t.top="0",t.width="auto",a.forEach(this._dojoxManager._dragItem.handlers,i.disconnect),this._dojoxManager._deleteMoveableItem(this._dojoxManager._dragItem),this._draggedNode=null,this._currentDojoArea=null,this._dojoxManager._resetAfterDrop()}});return dojox.mdnd.adapter._dndToDojo=null,dojox.mdnd.adapter.dndToDojo=function(){return dojox.mdnd.adapter._dndToDojo||(dojox.mdnd.adapter._dndToDojo=new dojox.mdnd.adapter.DndToDojo),dojox.mdnd.adapter._dndToDojo},l});//# sourceMappingURL=DndToDojo.js.map