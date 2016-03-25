//>>built
define("dojox/mdnd/AreaManager",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/_base/array","dojo/_base/sniff","dojo/_base/lang","dojo/query","dojo/topic","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/registry","dijit/_Widget","./Moveable"],function(e,t,i,a,n,o,r,s,l,d,c,u,m,h,f){var p=t("dojox.mdnd.AreaManager",null,{autoRefresh:!0,areaClass:"dojoxDndArea",dragHandleClass:"dojoxDragHandle",constructor:function(){this._areaList=[],this.resizeHandler=i.connect(e.global,"onresize",this,function(){this._dropMode.updateAreas(this._areaList)}),this._oldIndexArea=this._currentIndexArea=this._oldDropIndex=this._currentDropIndex=this._sourceIndexArea=this._sourceDropIndex=-1},init:function(){this.registerByClass()},registerByNode:function(e,t){var a=this._getIndexArea(e);if(e&&-1==a){var o=e.getAttribute("accept"),r=o?o.split(/\s*,\s*/):["text"],s={node:e,items:[],coords:{},margin:null,accept:r,initItems:!1};n.forEach(this._getChildren(e),function(e){this._setMarginArea(s,e),s.items.push(this._addMoveableItem(e))},this),this._areaList=this._dropMode.addArea(this._areaList,s),t||this._dropMode.updateAreas(this._areaList),i.publish("/dojox/mdnd/manager/register",[e])}},registerByClass:function(){s("."+this.areaClass).forEach(function(e){this.registerByNode(e,!0)},this),this._dropMode.updateAreas(this._areaList)},unregister:function(e){var t=this._getIndexArea(e);return-1!=t?(n.forEach(this._areaList[t].items,function(e){this._deleteMoveableItem(e)},this),this._areaList.splice(t,1),this._dropMode.updateAreas(this._areaList),!0):!1},_addMoveableItem:function(e){e.setAttribute("tabIndex","0");var t=this._searchDragHandle(e),a=new f({handle:t,skip:!0},e);d.add(t||e,"dragHandle");var n=e.getAttribute("dndType"),o={item:a,type:n?n.split(/\s*,\s*/):["text"],handlers:[i.connect(a,"onDragStart",this,"onDragStart")]};if(m&&m.byNode){var r=m.byNode(e);r&&(o.type=r.dndType?r.dndType.split(/\s*,\s*/):["text"],o.handlers.push(i.connect(r,"uninitialize",this,function(){this.removeDragItem(e.parentNode,a.node)})))}return o},_deleteMoveableItem:function(e){n.forEach(e.handlers,function(e){i.disconnect(e)});var t=e.item.node,a=this._searchDragHandle(t);d.remove(a||t,"dragHandle"),e.item.destroy()},_getIndexArea:function(e){if(e)for(var t=0;t<this._areaList.length;t++)if(this._areaList[t].node===e)return t;return-1},_searchDragHandle:function(e){if(e){var t=this.dragHandleClass.split(" "),i=t.length,a="";return n.forEach(t,function(e,t){a+="."+e,t!=i-1&&(a+=", ")}),s(a,e)[0]}},addDragItem:function(e,t,i,a){var n=!0;if(a||(n=e&&t&&(null===t.parentNode||t.parentNode&&1!==t.parentNode.nodeType)),n){var o=this._getIndexArea(e);if(-1!==o){var r=this._addMoveableItem(t),s=this._areaList[o].items;if(i>=0&&i<s.length){var l=s.slice(0,i),d=s.slice(i,s.length);l[l.length]=r,this._areaList[o].items=l.concat(d),e.insertBefore(t,s[i].item.node)}else this._areaList[o].items.push(r),e.appendChild(t);return this._setMarginArea(this._areaList[o],t),this._areaList[o].initItems=!1,!0}}return!1},removeDragItem:function(e,t){var i=this._getIndexArea(e);if(e&&-1!==i)for(var a=this._areaList[i].items,n=0;n<a.length;n++)if(a[n].item.node===t)return this._deleteMoveableItem(a[n]),a.splice(n,1),e.removeChild(t);return null},_getChildren:function(e){var t=[];return n.forEach(e.childNodes,function(e){if(1==e.nodeType)if(m&&m.byNode){var i=m.byNode(e);i?i.dragRestriction||t.push(e):t.push(e)}else t.push(e)}),t},_setMarginArea:function(e,t){e&&null===e.margin&&t&&(e.margin=c.getMarginExtents(t))},findCurrentIndexArea:function(e,t){return this._oldIndexArea=this._currentIndexArea,this._currentIndexArea=this._dropMode.getTargetArea(this._areaList,e,this._currentIndexArea),this._currentIndexArea!=this._oldIndexArea&&(-1!=this._oldIndexArea&&this.onDragExit(e,t),-1!=this._currentIndexArea&&this.onDragEnter(e,t)),this._currentIndexArea},_isAccepted:function(e,t){this._accept=!1;for(var i=0;i<t.length;++i)for(var a=0;a<e.length;++a)if(e[a]==t[i]){this._accept=!0;break}},onDragStart:function(t,a,n){this.autoRefresh&&this._dropMode.updateAreas(this._areaList);var s=o("webkit")?e.body():e.body().parentNode;this._cover||(this._cover=u.create("div",{"class":"dndCover"}),this._cover2=r.clone(this._cover),d.add(this._cover2,"dndCover2"));var l=s.scrollHeight+"px";this._cover.style.height=this._cover2.style.height=l,e.body().appendChild(this._cover),e.body().appendChild(this._cover2),this._dragStartHandler=i.connect(t.ownerDocument,"ondragstart",e,"stopEvent"),this._sourceIndexArea=this._lastValidIndexArea=this._currentIndexArea=this._getIndexArea(t.parentNode);for(var c=this._areaList[this._sourceIndexArea],m=c.items,h=0;h<m.length;h++)if(m[h].item.node==t){this._dragItem=m[h],this._dragItem.handlers.push(i.connect(this._dragItem.item,"onDrag",this,"onDrag")),this._dragItem.handlers.push(i.connect(this._dragItem.item,"onDragEnd",this,"onDrop")),m.splice(h,1),this._currentDropIndex=this._sourceDropIndex=h;break}var f=null;this._sourceDropIndex!==c.items.length&&(f=c.items[this._sourceDropIndex].item.node),o("ie")>7&&(this._eventsIE7=[i.connect(this._cover,"onmouseover",e,"stopEvent"),i.connect(this._cover,"onmouseout",e,"stopEvent"),i.connect(this._cover,"onmouseenter",e,"stopEvent"),i.connect(this._cover,"onmouseleave",e,"stopEvent")]);var p=t.style;p.left=a.x+"px",p.top=a.y+"px","relative"!=p.position&&""!=p.position||(p.position="absolute"),this._cover.appendChild(t),this._dropIndicator.place(c.node,f,n),d.add(t,"dragNode"),this._accept=!0,i.publish("/dojox/mdnd/drag/start",[t,c,this._sourceDropIndex])},onDragEnter:function(e,t){this._currentIndexArea===this._sourceIndexArea?this._accept=!0:this._isAccepted(this._dragItem.type,this._areaList[this._currentIndexArea].accept)},onDragExit:function(e,t){this._accept=!1},onDrag:function(e,t,i,a){var n=this._dropMode.getDragPoint(t,i,a);this.findCurrentIndexArea(n,i),-1!==this._currentIndexArea&&this._accept&&this.placeDropIndicator(n,i)},placeDropIndicator:function(e,t){this._oldDropIndex=this._currentDropIndex;var i=this._areaList[this._currentIndexArea];return i.initItems||this._dropMode.initItems(i),this._currentDropIndex=this._dropMode.getDropIndex(i,e),this._currentIndexArea===this._oldIndexArea&&this._oldDropIndex===this._currentDropIndex||this._placeDropIndicator(t),this._currentDropIndex},_placeDropIndicator:function(e){var t=this._areaList[this._lastValidIndexArea],i=this._areaList[this._currentIndexArea];this._dropMode.refreshItems(t,this._oldDropIndex,e,!1);var a=null;-1!=this._currentDropIndex&&(a=i.items[this._currentDropIndex].item.node),this._dropIndicator.place(i.node,a),this._lastValidIndexArea=this._currentIndexArea,this._dropMode.refreshItems(i,this._currentDropIndex,e,!0)},onDropCancel:function(){if(!this._accept){var e=this._getIndexArea(this._dropIndicator.node.parentNode);-1!=e?this._currentIndexArea=e:this._currentIndexArea=0}},onDrop:function(t){this.onDropCancel();var a=this._areaList[this._currentIndexArea];d.remove(t,"dragNode");var o=t.style;o.position="relative",o.left="0",o.top="0",o.width="auto",a.node==this._dropIndicator.node.parentNode?a.node.insertBefore(t,this._dropIndicator.node):(a.node.appendChild(t),this._currentDropIndex=a.items.length);var r=this._currentDropIndex;-1==r&&(r=a.items.length);var s=a.items,l=s.slice(0,r),c=s.slice(r,s.length);l[l.length]=this._dragItem,a.items=l.concat(c),this._setMarginArea(a,t),n.forEach(this._areaList,function(e){e.initItems=!1}),i.disconnect(this._dragItem.handlers.pop()),i.disconnect(this._dragItem.handlers.pop()),this._resetAfterDrop(),this._cover&&(e.body().removeChild(this._cover),e.body().removeChild(this._cover2)),i.publish("/dojox/mdnd/drop",[t,a,r])},_resetAfterDrop:function(){this._accept=!1,this._dragItem=null,this._currentDropIndex=-1,this._currentIndexArea=-1,this._oldDropIndex=-1,this._sourceIndexArea=-1,this._sourceDropIndex=-1,this._dropIndicator.remove(),this._dragStartHandler&&i.disconnect(this._dragStartHandler),o("ie")>7&&n.forEach(this._eventsIE7,i.disconnect)},destroy:function(){for(;this._areaList.length>0;)if(!this.unregister(this._areaList[0].node))throw new Error("Error while destroying AreaManager");i.disconnect(this.resizeHandler),this._dropIndicator.destroy(),this._dropMode.destroy(),dojox.mdnd.autoScroll&&dojox.mdnd.autoScroll.destroy(),this.refreshListener&&i.unsubscribe(this.refreshListener),this._cover&&(u.destroy(this._cover),u.destroy(this._cover2),delete this._cover,delete this._cover2)}});return h&&r.extend(h,{dndType:"text"}),dojox.mdnd._areaManager=null,dojox.mdnd.areaManager=function(){return dojox.mdnd._areaManager||(dojox.mdnd._areaManager=new dojox.mdnd.AreaManager),dojox.mdnd._areaManager},p});//# sourceMappingURL=AreaManager.js.map