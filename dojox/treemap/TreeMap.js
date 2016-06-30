//>>built
define("dojox/treemap/TreeMap",["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/Color","dojo/touch","dojo/when","dojo/on","dojo/query","dojo/dom-construct","dojo/dom-geometry","dojo/dom-class","dojo/dom-style","./_utils","dijit/_WidgetBase","dojox/widget/_Invalidating","dojox/widget/Selection","dojo/_base/sniff","dojo/uacss"],function(e,t,i,a,r,o,n,s,l,d,u,c,h,m,f,p,g,v){return i("dojox.treemap.TreeMap",[f,p,g],{baseClass:"dojoxTreeMap",store:null,query:{},queryOptions:null,itemToRenderer:null,_dataChanged:!1,rootItem:null,_rootItemChanged:!1,tooltipAttr:"",areaAttr:"",_areaChanged:!1,labelAttr:"label",labelThreshold:NaN,colorAttr:"",colorModel:null,_coloringChanged:!1,groupAttrs:[],groupFuncs:null,_groupFuncs:null,_groupingChanged:!1,constructor:function(){this.itemToRenderer={},this.invalidatingProperties=["colorModel","groupAttrs","groupFuncs","areaAttr","areaFunc","labelAttr","labelFunc","labelThreshold","tooltipAttr","tooltipFunc","colorAttr","colorFunc","rootItem"]},getIdentity:function(e){return e.__treeID?e.__treeID:this.store.getIdentity(e)},resize:function(e){e&&(u.setMarginBox(this.domNode,e),this.invalidateRendering())},postCreate:function(){this.inherited(arguments),this.own(s(this.domNode,"mouseover",t.hitch(this,this._onMouseOver))),this.own(s(this.domNode,"mouseout",t.hitch(this,this._onMouseOut))),this.own(s(this.domNode,o.release,t.hitch(this,this._onMouseUp))),this.domNode.setAttribute("role","presentation"),this.domNode.setAttribute("aria-label","treemap")},buildRendering:function(){this.inherited(arguments),this.refreshRendering()},refreshRendering:function(){var e=!1;if(this._dataChanged&&(this._dataChanged=!1,this._groupingChanged=!0,this._coloringChanged=!0),this._groupingChanged&&(this._groupingChanged=!1,this._set("rootItem",null),this._updateTreeMapHierarchy(),e=!0),this._rootItemChanged&&(this._rootItemChanged=!1,e=!0),this._coloringChanged&&(this._coloringChanged=!1,null!=this.colorModel&&null!=this._data&&this.colorModel.initialize&&this.colorModel.initialize(this._data,t.hitch(this,function(e){return this.colorFunc(e,this.store)}))),this._areaChanged&&(this._areaChanged=!1,this._removeAreaForGroup()),void 0!=this.domNode&&null!=this._items){e&&d.empty(this.domNode);var i,a=this.rootItem;if(null!=a){var r=this._getRenderer(a);r&&(this._isLeaf(a)&&(a=r.parentItem),i=r.parentItem)}var o=u.getMarginBox(this.domNode);null!=a?this._buildRenderer(this.domNode,i,a,{x:o.l,y:o.t,w:o.w,h:o.h},0,e):this._buildChildrenRenderers(this.domNode,a?a:{__treeRoot:!0,children:this._items},0,e,o)}},_setRootItemAttr:function(e){this._rootItemChanged=!0,this._set("rootItem",e)},_setStoreAttr:function(e){var i;if(this._observeHandler&&(this._observeHandler.remove(),this._observeHandler=null),null!=e){var a=e.query(this.query,this.queryOptions);a.observe&&(this._observeHandler=a.observe(t.hitch(this,this._updateItem),!0)),i=n(a,t.hitch(this,this._initItems))}else i=this._initItems([]);return this._set("store",e),i},_initItems:function(e){return this._dataChanged=!0,this._data=e,this.invalidateRendering(),e},_updateItem:function(e,t,i){-1!=t?i!=t?this._data.splice(t,1):this._data[i]=e:-1!=i&&this._data.splice(i,0,e),this._dataChanged=!0,this.invalidateRendering()},_setGroupAttrsAttr:function(t){this._groupingChanged=!0,null==this.groupFuncs&&(null!=t?this._groupFuncs=e.map(t,function(e){return function(t){return t[e]}}):this._groupFuncs=null),this._set("groupAttrs",t)},_setGroupFuncsAttr:function(t){this._groupingChanged=!0,this._set("groupFuncs",this._groupFuncs=t),null==t&&null!=this.groupAttrs&&(this._groupFuncs=e.map(this.groupAttrs,function(e){return function(t){return t[e]}}))},_setAreaAttrAttr:function(e){this._areaChanged=!0,this._set("areaAttr",e)},areaFunc:function(e,t){return this.areaAttr&&this.areaAttr.length>0?parseFloat(e[this.areaAttr]):1},_setAreaFuncAttr:function(e){this._areaChanged=!0,this._set("areaFunc",e)},labelFunc:function(e,t){var i=this.labelAttr&&this.labelAttr.length>0?e[this.labelAttr]:null;return i?i.toString():null},tooltipFunc:function(e,t){var i=this.tooltipAttr&&this.tooltipAttr.length>0?e[this.tooltipAttr]:null;return i?i.toString():null},_setColorModelAttr:function(e){this._coloringChanged=!0,this._set("colorModel",e)},_setColorAttrAttr:function(e){this._coloringChanged=!0,this._set("colorAttr",e)},colorFunc:function(e,t){var i=this.colorAttr&&this.colorAttr.length>0?e[this.colorAttr]:0;return null==i&&(i=0),parseFloat(i)},_setColorFuncAttr:function(e){this._coloringChanged=!0,this._set("colorFunc",e)},createRenderer:function(e,t,i){var a=d.create("div");return"header"!=i&&(h.set(a,"overflow","hidden"),h.set(a,"position","absolute")),a},styleRenderer:function(e,t,i,a){switch(a){case"leaf":h.set(e,"background",this.getColorForItem(t).toHex());case"header":var r=this.getLabelForItem(t);r&&(isNaN(this.labelThreshold)||i<this.labelThreshold)?e.innerHTML=r:d.empty(e)}},_updateTreeMapHierarchy:function(){null!=this._data&&(null!=this._groupFuncs&&this._groupFuncs.length>0?this._items=m.group(this._data,this._groupFuncs,t.hitch(this,this._getAreaForItem)).children:this._items=this._data)},_removeAreaForGroup:function(e){var t;if(null!=e){if(!e.__treeValue)return;delete e.__treeValue,t=e.children}else t=this._items;if(t)for(var i=0;i<t.length;++i)this._removeAreaForGroup(t[i])},_getAreaForItem:function(e){var t=this.areaFunc(e,this.store);return isNaN(t)?0:t},_computeAreaForItem:function(e){var t;if(e.__treeID){if(t=e.__treeValue,!t){t=0;for(var i=e.children,a=0;a<i.length;++a)t+=this._computeAreaForItem(i[a]);e.__treeValue=t}}else t=this._getAreaForItem(e);return t},getColorForItem:function(e){var t=this.colorFunc(e,this.store);return null!=this.colorModel?this.colorModel.getColor(t):new r(t)},getLabelForItem:function(e){return e.__treeName?e.__treeName:this.labelFunc(e,this.store)},_buildChildrenRenderers:function(i,a,r,o,n,s){var l=a.children,d=u.getMarginBox(i),c=m.solve(l,d.w,d.h,t.hitch(this,this._computeAreaForItem),!this.isLeftToRight()),h=c.rectangles;n&&(h=e.map(h,function(e){return e.x+=n.l,e.y+=n.t,e}));for(var f,p=0;p<l.length;++p)f=h[p],this._buildRenderer(i,a,l[p],f,r,o,s)},_isLeaf:function(e){return!e.children},_isRoot:function(e){return e.__treeRoot},_getRenderer:function(e,t,i){if(t)for(var a=0;a<i.children.length;++a)if(i.children[a].item==e)return i.children[a];return this.itemToRenderer[this.getIdentity(e)]},_buildRenderer:function(e,t,i,a,r,o,n){var s=this._isLeaf(i),l=o?null:this._getRenderer(i,n,e);l=s?this._updateLeafRenderer(l,i,r):this._updateGroupRenderer(l,i,r),o&&(l.level=r,l.item=i,l.parentItem=t,this.itemToRenderer[this.getIdentity(i)]=l,this.updateRenderers(i));var c=Math.floor(a.x),h=Math.floor(a.y),m=Math.floor(a.x+a.w+1e-11)-c,f=Math.floor(a.y+a.h+1e-11)-h;if(o&&d.place(l,e),u.setMarginBox(l,{l:c,t:h,w:m,h:f}),!s){var p=u.getContentBox(l);this._layoutGroupContent(l,p.w,p.h,r+1,o,n)}this.onRendererUpdated({renderer:l,item:i,kind:s?"leaf":"group",level:r})},_layoutGroupContent:function(e,t,i,a,r,o){var n=l(".dojoxTreeMapHeader",e)[0],s=l(".dojoxTreeMapGroupContent",e)[0];if(null!=n&&null!=s){var d=u.getMarginBox(n);d.h>i?(d.h=i,h.set(s,"display","none")):(h.set(s,"display","block"),u.setMarginBox(s,{l:0,t:d.h,w:t,h:i-d.h}),this._buildChildrenRenderers(s,e.item,a,r,null,o)),u.setMarginBox(n,{l:0,t:0,w:t,h:d.h})}},_updateGroupRenderer:function(e,t,i){var a=null==e;null==e&&(e=this.createRenderer("div",i,"group"),c.add(e,"dojoxTreeMapGroup")),this.styleRenderer(e,t,i,"group");var r=l(".dojoxTreeMapHeader",e)[0];r=this._updateHeaderRenderer(r,t,i),a&&d.place(r,e);var o=l(".dojoxTreeMapGroupContent",e)[0];return o=this._updateGroupContentRenderer(o,t,i),a&&d.place(o,e),e},_updateHeaderRenderer:function(e,t,i){return null==e&&(e=this.createRenderer(t,i,"header"),c.add(e,"dojoxTreeMapHeader"),c.add(e,"dojoxTreeMapHeader_"+i)),this.styleRenderer(e,t,i,"header"),e},_updateLeafRenderer:function(e,t,i){null==e&&(e=this.createRenderer(t,i,"leaf"),c.add(e,"dojoxTreeMapLeaf"),c.add(e,"dojoxTreeMapLeaf_"+i)),this.styleRenderer(e,t,i,"leaf");var a=this.tooltipFunc(t,this.store);return a&&(e.title=a),e},_updateGroupContentRenderer:function(e,t,i){return null==e&&(e=this.createRenderer(t,i,"content"),c.add(e,"dojoxTreeMapGroupContent"),c.add(e,"dojoxTreeMapGroupContent_"+i)),this.styleRenderer(e,t,i,"content"),e},_getRendererFromTarget:function(e){for(var t=e;t!=this.domNode&&!t.item;)t=t.parentNode;return t},_onMouseOver:function(e){var t=this._getRendererFromTarget(e.target);if(t.item){var i=t.item;this._hoveredItem=i,this.updateRenderers(i),this.onItemRollOver({renderer:t,item:i,triggerEvent:e})}},_onMouseOut:function(e){var t=this._getRendererFromTarget(e.target);if(t.item){var i=t.item;this._hoveredItem=null,this.updateRenderers(i),this.onItemRollOut({renderer:t,item:i,triggerEvent:e})}},_onMouseUp:function(e){var t=this._getRendererFromTarget(e.target);t.item&&this.selectFromEvent(e,t.item,t,!0)},onRendererUpdated:function(){},onItemRollOver:function(){},onItemRollOut:function(){},updateRenderers:function(e){if(e){t.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++){var a=e[i],r=this._getRenderer(a);if(r){var o,n=this.isItemSelected(a),s=v("ie");if(n){if(c.add(r,"dojoxTreeMapSelected"),s&&(v("quirks")||9>s)){o=r.previousSibling;var l=h.get(r);o&&c.contains(o,"dojoxTreeMapIEHack")||(o=this.createRenderer(a,-10,"group"),c.add(o,"dojoxTreeMapIEHack"),c.add(o,"dojoxTreeMapSelected"),h.set(o,{position:"absolute",overflow:"hidden"}),d.place(o,r,"before"));var u=2*parseInt(h.get(o,"border-width"));this._isLeaf(a)?u-=1:u+=1,"auto"!=l.left&&h.set(o,{left:parseInt(l.left)+1+"px",top:parseInt(l.top)+1+"px",width:parseInt(l.width)-u+"px",height:parseInt(l.height)-u+"px"})}}else s&&(v("quirks")||9>s)&&(o=r.previousSibling,o&&c.contains(o,"dojoxTreeMapIEHack")&&o.parentNode.removeChild(o)),c.remove(r,"dojoxTreeMapSelected");this._hoveredItem==a?c.add(r,"dojoxTreeMapHovered"):c.remove(r,"dojoxTreeMapHovered"),n||this._hoveredItem==a?h.set(r,"zIndex",20):h.set(r,"zIndex",v("ie")<=7?0:"auto")}}}}})});//# sourceMappingURL=TreeMap.js.map