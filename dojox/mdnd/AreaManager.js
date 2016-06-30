//>>built
define("dojox/mdnd/AreaManager",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/_base/array","dojo/_base/sniff","dojo/_base/lang","dojo/query","dojo/topic","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/registry","dijit/_Widget","./Moveable"],function(e,t,i,r,o,n,a,s,d,l,c,u,h,f,m){var p=t("dojox.mdnd.AreaManager",null,{autoRefresh:!0,areaClass:"dojoxDndArea",dragHandleClass:"dojoxDragHandle",constructor:function(){this._areaList=[],this.resizeHandler=i.connect(e.global,"onresize",this,function(){this._dropMode.updateAreas(this._areaList)}),this._oldIndexArea=this._currentIndexArea=this._oldDropIndex=this._currentDropIndex=this._sourceIndexArea=this._sourceDropIndex=-1},init:function(){this.registerByClass()},registerByNode:function(e,t){var r=this._getIndexArea(e);if(e&&-1==r){var n=e.getAttribute("accept"),a=n?n.split(/\s*,\s*/):["text"],s={node:e,items:[],coords:{},margin:null,accept:a,initItems:!1};o.forEach(this._getChildren(e),function(e){this._setMarginArea(s,e),s.items.push(this._addMoveableItem(e))},this),this._areaList=this._dropMode.addArea(this._areaList,s),t||this._dropMode.updateAreas(this._areaList),i.publish("/dojox/mdnd/manager/register",[e])}},registerByClass:function(){s("."+this.areaClass).forEach(function(e){this.registerByNode(e,!0)},this),this._dropMode.updateAreas(this._areaList)},unregister:function(e){var t=this._getIndexArea(e);return-1!=t?(o.forEach(this._areaList[t].items,function(e){this._deleteMoveableItem(e)},this),this._areaList.splice(t,1),this._dropMode.updateAreas(this._areaList),!0):!1},_addMoveableItem:function(e){e.setAttribute("tabIndex","0");var t=this._searchDragHandle(e),r=new m({handle:t,skip:!0},e);l.add(t||e,"dragHandle");var o=e.getAttribute("dndType"),n={item:r,type:o?o.split(/\s*,\s*/):["text"],handlers:[i.connect(r,"onDragStart",this,"onDragStart")]};if(h&&h.byNode){var a=h.byNode(e);a&&(n.type=a.dndType?a.dndType.split(/\s*,\s*/):["text"],n.handlers.push(i.connect(a,"uninitialize",this,function(){this.removeDragItem(e.parentNode,r.node)})))}return n},_deleteMoveableItem:function(e){o.forEach(e.handlers,function(e){i.disconnect(e)});var t=e.item.node,r=this._searchDragHandle(t);l.remove(r||t,"dragHandle"),e.item.destroy()},_getIndexArea:function(e){if(e)for(var t=0;t<this._areaList.length;t++)if(this._areaList[t].node===e)return t;return-1},_searchDragHandle:function(e){if(e){var t=this.dragHandleClass.split(" "),i=t.length,r="";return o.forEach(t,function(e,t){r+="."+e,t!=i-1&&(r+=", ")}),s(r,e)[0]}},addDragItem:function(e,t,i,r){var o=!0;if(r||(o=e&&t&&(null===t.parentNode||t.parentNode&&1!==t.parentNode.nodeType)),o){var n=this._getIndexArea(e);if(-1!==n){var a=this._addMoveableItem(t),s=this._areaList[n].items;if(i>=0&&i<s.length){var d=s.slice(0,i),l=s.slice(i,s.length);d[d.length]=a,this._areaList[n].items=d.concat(l),e.insertBefore(t,s[i].item.node)}else this._areaList[n].items.push(a),e.appendChild(t);return this._setMarginArea(this._areaList[n],t),this._areaList[n].initItems=!1,!0}}return!1},removeDragItem:function(e,t){var i=this._getIndexArea(e);if(e&&-1!==i)for(var r=this._areaList[i].items,o=0;o<r.length;o++)if(r[o].item.node===t)return this._deleteMoveableItem(r[o]),r.splice(o,1),e.removeChild(t);return null},_getChildren:function(e){var t=[];return o.forEach(e.childNodes,function(e){if(1==e.nodeType)if(h&&h.byNode){var i=h.byNode(e);i?i.dragRestriction||t.push(e):t.push(e)}else t.push(e)}),t},_setMarginArea:function(e,t){e&&null===e.margin&&t&&(e.margin=c.getMarginExtents(t))},findCurrentIndexArea:function(e,t){return this._oldIndexArea=this._currentIndexArea,this._currentIndexArea=this._dropMode.getTargetArea(this._areaList,e,this._currentIndexArea),this._currentIndexArea!=this._oldIndexArea&&(-1!=this._oldIndexArea&&this.onDragExit(e,t),-1!=this._currentIndexArea&&this.onDragEnter(e,t)),this._currentIndexArea},_isAccepted:function(e,t){this._accept=!1;for(var i=0;i<t.length;++i)for(var r=0;r<e.length;++r)if(e[r]==t[i]){this._accept=!0;break}},onDragStart:function(t,r,o){this.autoRefresh&&this._dropMode.updateAreas(this._areaList);var s=n("webkit")?e.body():e.body().parentNode;this._cover||(this._cover=u.create("div",{"class":"dndCover"}),this._cover2=a.clone(this._cover),l.add(this._cover2,"dndCover2"));var d=s.scrollHeight+"px";this._cover.style.height=this._cover2.style.height=d,e.body().appendChild(this._cover),e.body().appendChild(this._cover2),this._dragStartHandler=i.connect(t.ownerDocument,"ondragstart",e,"stopEvent"),this._sourceIndexArea=this._lastValidIndexArea=this._currentIndexArea=this._getIndexArea(t.parentNode);for(var c=this._areaList[this._sourceIndexArea],h=c.items,f=0;f<h.length;f++)if(h[f].item.node==t){this._dragItem=h[f],this._dragItem.handlers.push(i.connect(this._dragItem.item,"onDrag",this,"onDrag")),this._dragItem.handlers.push(i.connect(this._dragItem.item,"onDragEnd",this,"onDrop")),h.splice(f,1),this._currentDropIndex=this._sourceDropIndex=f;break}var m=null;this._sourceDropIndex!==c.items.length&&(m=c.items[this._sourceDropIndex].item.node),n("ie")>7&&(this._eventsIE7=[i.connect(this._cover,"onmouseover",e,"stopEvent"),i.connect(this._cover,"onmouseout",e,"stopEvent"),i.connect(this._cover,"onmouseenter",e,"stopEvent"),i.connect(this._cover,"onmouseleave",e,"stopEvent")]);var p=t.style;p.left=r.x+"px",p.top=r.y+"px","relative"!=p.position&&""!=p.position||(p.position="absolute"),this._cover.appendChild(t),this._dropIndicator.place(c.node,m,o),l.add(t,"dragNode"),this._accept=!0,i.publish("/dojox/mdnd/drag/start",[t,c,this._sourceDropIndex])},onDragEnter:function(e,t){this._currentIndexArea===this._sourceIndexArea?this._accept=!0:this._isAccepted(this._dragItem.type,this._areaList[this._currentIndexArea].accept)},onDragExit:function(e,t){this._accept=!1},onDrag:function(e,t,i,r){var o=this._dropMode.getDragPoint(t,i,r);this.findCurrentIndexArea(o,i),-1!==this._currentIndexArea&&this._accept&&this.placeDropIndicator(o,i)},placeDropIndicator:function(e,t){this._oldDropIndex=this._currentDropIndex;var i=this._areaList[this._currentIndexArea];return i.initItems||this._dropMode.initItems(i),this._currentDropIndex=this._dropMode.getDropIndex(i,e),this._currentIndexArea===this._oldIndexArea&&this._oldDropIndex===this._currentDropIndex||this._placeDropIndicator(t),this._currentDropIndex},_placeDropIndicator:function(e){var t=this._areaList[this._lastValidIndexArea],i=this._areaList[this._currentIndexArea];this._dropMode.refreshItems(t,this._oldDropIndex,e,!1);var r=null;-1!=this._currentDropIndex&&(r=i.items[this._currentDropIndex].item.node),this._dropIndicator.place(i.node,r),this._lastValidIndexArea=this._currentIndexArea,this._dropMode.refreshItems(i,this._currentDropIndex,e,!0)},onDropCancel:function(){if(!this._accept){var e=this._getIndexArea(this._dropIndicator.node.parentNode);-1!=e?this._currentIndexArea=e:this._currentIndexArea=0}},onDrop:function(t){this.onDropCancel();var r=this._areaList[this._currentIndexArea];l.remove(t,"dragNode");var n=t.style;n.position="relative",n.left="0",n.top="0",n.width="auto",r.node==this._dropIndicator.node.parentNode?r.node.insertBefore(t,this._dropIndicator.node):(r.node.appendChild(t),this._currentDropIndex=r.items.length);var a=this._currentDropIndex;-1==a&&(a=r.items.length);var s=r.items,d=s.slice(0,a),c=s.slice(a,s.length);d[d.length]=this._dragItem,r.items=d.concat(c),this._setMarginArea(r,t),o.forEach(this._areaList,function(e){e.initItems=!1}),i.disconnect(this._dragItem.handlers.pop()),i.disconnect(this._dragItem.handlers.pop()),this._resetAfterDrop(),this._cover&&(e.body().removeChild(this._cover),e.body().removeChild(this._cover2)),i.publish("/dojox/mdnd/drop",[t,r,a])},_resetAfterDrop:function(){this._accept=!1,this._dragItem=null,this._currentDropIndex=-1,this._currentIndexArea=-1,this._oldDropIndex=-1,this._sourceIndexArea=-1,this._sourceDropIndex=-1,this._dropIndicator.remove(),this._dragStartHandler&&i.disconnect(this._dragStartHandler),n("ie")>7&&o.forEach(this._eventsIE7,i.disconnect)},destroy:function(){for(;this._areaList.length>0;)if(!this.unregister(this._areaList[0].node))throw new Error("Error while destroying AreaManager");i.disconnect(this.resizeHandler),this._dropIndicator.destroy(),this._dropMode.destroy(),dojox.mdnd.autoScroll&&dojox.mdnd.autoScroll.destroy(),this.refreshListener&&i.unsubscribe(this.refreshListener),this._cover&&(u.destroy(this._cover),u.destroy(this._cover2),delete this._cover,delete this._cover2)}});return f&&a.extend(f,{dndType:"text"}),dojox.mdnd._areaManager=null,dojox.mdnd.areaManager=function(){return dojox.mdnd._areaManager||(dojox.mdnd._areaManager=new dojox.mdnd.AreaManager),dojox.mdnd._areaManager},p});//# sourceMappingURL=AreaManager.js.map