//>>built
require({cache:{"url:dojox/layout/resources/GridContainer.html":'<div id="${id}" class="gridContainer" dojoAttachPoint="containerNode" tabIndex="0" dojoAttachEvent="onkeypress:_selectFocus">\n	<div dojoAttachPoint="gridContainerDiv">\n		<table class="gridContainerTable" dojoAttachPoint="gridContainerTable" cellspacing="0" cellpadding="0">\n			<tbody>\n				<tr dojoAttachPoint="gridNode" >\n					\n				</tr>\n			</tbody>\n		</table>\n	</div>\n</div>'}}),define("dojox/layout/GridContainerLite",["dojo/_base/kernel","dojo/text!./resources/GridContainer.html","dojo/_base/declare","dojo/query","dojo/_base/sniff","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/dom-attr","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/keys","dojo/topic","dijit/registry","dijit/focus","dijit/_base/focus","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/layout/_LayoutWidget","dojo/_base/NodeList","dojox/mdnd/AreaManager","dojox/mdnd/DropIndicator","dojox/mdnd/dropMode/OverDropMode","dojox/mdnd/AutoScroll"],function(e,t,i,a,r,n,o,s,l,d,u,c,h,m,f,p,g,y,v,k,b,w){var M=i("dojox.layout.GridContainerLite",[b,k],{autoRefresh:!0,templateString:t,dragHandleClass:"dojoxDragHandle",nbZones:1,doLayout:!0,isAutoOrganized:!0,acceptTypes:[],colWidths:"",constructor:function(e,t){this.acceptTypes=(e||{}).acceptTypes||["text"],this._disabled=!0},postCreate:function(){this.inherited(arguments),this._grid=[],this._createCells(),this.subscribe("/dojox/mdnd/drop","resizeChildAfterDrop"),this.subscribe("/dojox/mdnd/drag/start","resizeChildAfterDragStart"),this._dragManager=dojox.mdnd.areaManager(),this._dragManager.autoRefresh=this.autoRefresh,this._dragManager.dragHandleClass=this.dragHandleClass,this.doLayout?this._border={h:r("ie")?s.getBorderExtents(this.gridContainerTable).h:0,w:6==r("ie")?1:0}:(o.set(this.domNode,"overflowY","hidden"),o.set(this.gridContainerTable,"height","auto"))},startup:function(){this._started||(this.isAutoOrganized?this._organizeChildren():this._organizeChildrenManually(),u.forEach(this.getChildren(),function(e){e.startup()}),this._isShown()&&this.enableDnd(),this.inherited(arguments))},resizeChildAfterDrop:function(e,t,i){if(this._disabled)return!1;if(p.getEnclosingWidget(t.node)==this){var a=p.byNode(e);if(a.resize&&c.isFunction(a.resize)&&a.resize(),a.set("column",e.parentNode.cellIndex),this.doLayout){var r=this._contentBox.h,n=s.getContentBox(this.gridContainerDiv).h;n>=r&&o.set(this.gridContainerTable,"height",r-this._border.h+"px")}return!0}return!1},resizeChildAfterDragStart:function(e,t,i){return this._disabled?!1:p.getEnclosingWidget(t.node)==this?(this._draggedNode=e,this.doLayout&&s.setMarginBox(this.gridContainerTable,{h:s.getContentBox(this.gridContainerDiv).h-this._border.h}),!0):!1},getChildren:function(){var e=new w;return u.forEach(this._grid,function(t){a("> [widgetId]",t.node).map(p.byNode).forEach(function(t){e.push(t)})}),e},_isShown:function(){if("open"in this)return this.open;var e=this.domNode;return"none"!=e.style.display&&"hidden"!=e.style.visibility&&!n.contains(e,"dijitHidden")},layout:function(){if(this.doLayout){var e=this._contentBox;s.setMarginBox(this.gridContainerTable,{h:e.h-this._border.h}),s.setContentSize(this.domNode,{w:e.w-this._border.w})}u.forEach(this.getChildren(),function(e){e.resize&&c.isFunction(e.resize)&&e.resize()})},onShow:function(){this._disabled&&this.enableDnd()},onHide:function(){this._disabled||this.disableDnd()},_createCells:function(){0===this.nbZones&&(this.nbZones=1);for(var e=this.acceptTypes.join(","),t=0,i=this._computeColWidth();t<this.nbZones;)this._grid.push({node:l.create("td",{"class":"gridContainerZone",accept:e,id:this.id+"_dz"+t,style:{width:i[t]+"%"}},this.gridNode)}),t++},_getZonesAttr:function(){return a(".gridContainerZone",this.containerNode)},enableDnd:function(){var e=this._dragManager;u.forEach(this._grid,function(t){e.registerByNode(t.node)}),e._dropMode.updateAreas(e._areaList),this._disabled=!1},disableDnd:function(){var e=this._dragManager;u.forEach(this._grid,function(t){e.unregister(t.node)}),e._dropMode.updateAreas(e._areaList),this._disabled=!0},_organizeChildren:function(){for(var e=dojox.layout.GridContainerLite.superclass.getChildren.call(this),t=this.nbZones,i=Math.floor(e.length/t),a=e.length%t,r=0,n=0;t>n;n++){for(var o=0;i>o;o++)this._insertChild(e[r],n),r++;if(a>0){try{this._insertChild(e[r],n),r++}catch(s){}a--}else if(0===i)break}},_organizeChildrenManually:function(){for(var e,t=dojox.layout.GridContainerLite.superclass.getChildren.call(this),i=t.length,a=0;i>a;a++){e=t[a];try{this._insertChild(e,e.column-1)}catch(r){}}},_insertChild:function(e,t,i){var a=this._grid[t].node,r=a.childNodes.length;return("undefined"==typeof i||i>r)&&(i=r),this._disabled?(l.place(e.domNode,a,i),d.set(e.domNode,"tabIndex","0")):e.dragRestriction?(l.place(e.domNode,a,i),d.set(e.domNode,"tabIndex","0")):this._dragManager.addDragItem(a,e.domNode,i,!0),e.set("column",t),e},removeChild:function(e){this._disabled?this.inherited(arguments):this._dragManager.removeDragItem(e.domNode.parentNode,e.domNode)},addService:function(e,t,i){kernel.deprecated("addService is deprecated.","Please use  instead.","Future"),this.addChild(e,t,i)},addChild:function(e,t,i){e.domNode.id=e.id,dojox.layout.GridContainerLite.superclass.addChild.call(this,e,0),(0>t||void 0===t)&&(t=0),0>=i&&(i=0);try{return this._insertChild(e,t,i)}catch(a){}return null},_setColWidthsAttr:function(e){this.colWidths=c.isString(e)?e.split(","):c.isArray(e)?e:[e],this._started&&this._updateColumnsWidth()},_updateColumnsWidth:function(e){for(var t=this._grid.length,i=this._computeColWidth(),a=0;t>a;a++)this._grid[a].node.style.width=i[a]+"%"},_computeColWidth:function(){var e,t,i=this.colWidths||[],a=[],r=0;for(t=0;t<this.nbZones;t++)a.length<i.length?(r+=1*i[t],a.push(i[t])):(e||(e=(100-r)/(this.nbZones-t),0>e&&(e=100/this.nbZones)),a.push(e),r+=1*e);if(r>100){var n=100/r;for(t=0;t<a.length;t++)a[t]*=n}return a},_selectFocus:function(e){if(!this._disabled){var t,i,a,n,o,s,l,u=e.keyCode,c=m,v=null,k=y.getFocus(),b=k.node,w=this._dragManager;if(b==this.containerNode)switch(s=this.gridNode.childNodes,u){case c.DOWN_ARROW:case c.RIGHT_ARROW:for(t=!1,i=0;i<s.length;i++){for(o=s[i].childNodes,a=0;a<o.length;a++)if(v=o[a],null!==v&&"none"!=v.style.display){g.focus(v),h.stop(e),t=!0;break}if(t)break}break;case c.UP_ARROW:case c.LEFT_ARROW:for(s=this.gridNode.childNodes,t=!1,i=s.length-1;i>=0;i--){for(o=s[i].childNodes,a=o.length;a>=0;a--)if(v=o[a],null!==v&&"none"!=v.style.display){g.focus(v),h.stop(e),t=!0;break}if(t)break}}else if(b.parentNode.parentNode==this.gridNode){var M=u==c.UP_ARROW||u==c.LEFT_ARROW?"lastChild":"firstChild",_=u==c.UP_ARROW||u==c.LEFT_ARROW?"previousSibling":"nextSibling";switch(u){case c.UP_ARROW:case c.DOWN_ARROW:h.stop(e),t=!1;for(var x=b;!t;){o=x.parentNode.childNodes;var j=0;for(i=0;i<o.length&&("none"!=o[i].style.display&&j++,!(j>1));i++);if(1==j)return;v=null===x[_]?x.parentNode[M]:x[_],"none"===v.style.display?x=v:t=!0}if(e.shiftKey){var z=b.parentNode;for(i=0;i<this.gridNode.childNodes.length&&z!=this.gridNode.childNodes[i];i++);for(o=this.gridNode.childNodes[i].childNodes,a=0;a<o.length&&v!=o[a];a++);(r("mozilla")||r("webkit"))&&i--,l=p.byNode(b),l.dragRestriction?f.publish("/dojox/layout/gridContainer/moveRestriction",this):(n=w.removeDragItem(z,b),this.addChild(l,i,a),d.set(b,"tabIndex","0"),g.focus(b))}else g.focus(v);break;case c.RIGHT_ARROW:case c.LEFT_ARROW:if(h.stop(e),e.shiftKey){var I=0;if(null===b.parentNode[_])r("ie")&&u==c.LEFT_ARROW&&(I=this.gridNode.childNodes.length-1);else if(3==b.parentNode[_].nodeType)I=this.gridNode.childNodes.length-2;else{for(i=0;i<this.gridNode.childNodes.length&&b.parentNode[_]!=this.gridNode.childNodes[i];i++)I++;(r("mozilla")||r("webkit"))&&I--}l=p.byNode(b);var E=b.getAttribute("dndtype");E=null===E?l&&l.dndType?l.dndType.split(/\s*,\s*/):["text"]:E.split(/\s*,\s*/);var A=!1;for(i=0;i<this.acceptTypes.length;i++)for(a=0;a<E.length;a++)if(E[a]==this.acceptTypes[i]){A=!0;break}if(A&&!l.dragRestriction){var S=b.parentNode,F=0;if(c.LEFT_ARROW==u){var T=I;(r("mozilla")||r("webkit"))&&(T=I+1),F=this.gridNode.childNodes[T].childNodes.length}n=w.removeDragItem(S,b),this.addChild(l,I,F),d.set(n,"tabIndex","0"),g.focus(n)}else f.publish("/dojox/layout/gridContainer/moveRestriction",this)}else{for(var C=b.parentNode;null===v;)if(C=null!==C[_]&&3!==C[_].nodeType?C[_]:"previousSibling"===_?C.parentNode.childNodes[C.parentNode.childNodes.length-1]:C.parentNode.childNodes[r("ie")?0:1],v=C[M],v&&"none"==v.style.display){o=v.parentNode.childNodes;var L=null;if("previousSibling"==_){for(i=o.length-1;i>=0;i--)if("none"!=o[i].style.display){L=o[i];break}}else for(i=0;i<o.length;i++)if("none"!=o[i].style.display){L=o[i];break}L?v=L:(b=v,C=b.parentNode,v=null)}g.focus(v)}}}}},destroy:function(){var e=this._dragManager;u.forEach(this._grid,function(t){e.unregister(t.node)}),this.inherited(arguments)}});return M.ChildWidgetProperties={column:"1",dragRestriction:!1},c.extend(v,M.ChildWidgetProperties),M});//# sourceMappingURL=GridContainerLite.js.map