//>>built
require({cache:{"url:dojox/layout/resources/GridContainer.html":'<div id="${id}" class="gridContainer" dojoAttachPoint="containerNode" tabIndex="0" dojoAttachEvent="onkeypress:_selectFocus">\n\t<div dojoAttachPoint="gridContainerDiv">\n\t\t<table class="gridContainerTable" dojoAttachPoint="gridContainerTable" cellspacing="0" cellpadding="0">\n\t\t\t<tbody>\n\t\t\t\t<tr dojoAttachPoint="gridNode" >\n\t\t\t\t\t\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>'}}),define("dojox/layout/GridContainerLite",["dojo/_base/kernel","dojo/text!./resources/GridContainer.html","dojo/_base/declare","dojo/query","dojo/_base/sniff","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/dom-attr","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/keys","dojo/topic","dijit/registry","dijit/focus","dijit/_base/focus","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/layout/_LayoutWidget","dojo/_base/NodeList","dojox/mdnd/AreaManager","dojox/mdnd/DropIndicator","dojox/mdnd/dropMode/OverDropMode","dojox/mdnd/AutoScroll"],function(e,t,i,r,a,n,o,s,l,d,c,u,h,f,m,p,g,y,v,b,_,k,w){var M=i("dojox.layout.GridContainerLite",[_,b],{autoRefresh:!0,templateString:t,dragHandleClass:"dojoxDragHandle",nbZones:1,doLayout:!0,isAutoOrganized:!0,acceptTypes:[],colWidths:"",constructor:function(e,t){this.acceptTypes=(e||{}).acceptTypes||["text"],this._disabled=!0},postCreate:function(){this.inherited(arguments),this._grid=[],this._createCells(),this.subscribe("/dojox/mdnd/drop","resizeChildAfterDrop"),this.subscribe("/dojox/mdnd/drag/start","resizeChildAfterDragStart"),this._dragManager=w.areaManager(),this._dragManager.autoRefresh=this.autoRefresh,this._dragManager.dragHandleClass=this.dragHandleClass,this.doLayout?this._border={h:a("ie")?s.getBorderExtents(this.gridContainerTable).h:0,w:6==a("ie")?1:0}:(o.set(this.domNode,"overflowY","hidden"),o.set(this.gridContainerTable,"height","auto"))},startup:function(){this._started||(this.isAutoOrganized?this._organizeChildren():this._organizeChildrenManually(),c.forEach(this.getChildren(),function(e){e.startup()}),this._isShown()&&this.enableDnd(),this.inherited(arguments))},resizeChildAfterDrop:function(e,t,i){if(this._disabled)return!1;if(p.getEnclosingWidget(t.node)==this){var r=p.byNode(e);if(r.resize&&u.isFunction(r.resize)&&r.resize(),r.set("column",e.parentNode.cellIndex),this.doLayout){var a=this._contentBox.h;s.getContentBox(this.gridContainerDiv).h>=a&&o.set(this.gridContainerTable,"height",a-this._border.h+"px")}return!0}return!1},resizeChildAfterDragStart:function(e,t,i){return!this._disabled&&(p.getEnclosingWidget(t.node)==this&&(this._draggedNode=e,this.doLayout&&s.setMarginBox(this.gridContainerTable,{h:s.getContentBox(this.gridContainerDiv).h-this._border.h}),!0))},getChildren:function(){var e=new k;return c.forEach(this._grid,function(t){r("> [widgetId]",t.node).map(p.byNode).forEach(function(t){e.push(t)})}),e},_isShown:function(){if("open"in this)return this.open;var e=this.domNode;return"none"!=e.style.display&&"hidden"!=e.style.visibility&&!n.contains(e,"dijitHidden")},layout:function(){if(this.doLayout){var e=this._contentBox;s.setMarginBox(this.gridContainerTable,{h:e.h-this._border.h}),s.setContentSize(this.domNode,{w:e.w-this._border.w})}c.forEach(this.getChildren(),function(e){e.resize&&u.isFunction(e.resize)&&e.resize()})},onShow:function(){this._disabled&&this.enableDnd()},onHide:function(){this._disabled||this.disableDnd()},_createCells:function(){0===this.nbZones&&(this.nbZones=1);for(var e=this.acceptTypes.join(","),t=0,i=this._computeColWidth();t<this.nbZones;)this._grid.push({node:l.create("td",{class:"gridContainerZone",accept:e,id:this.id+"_dz"+t,style:{width:i[t]+"%"}},this.gridNode)}),t++},_getZonesAttr:function(){return r(".gridContainerZone",this.containerNode)},enableDnd:function(){var e=this._dragManager;c.forEach(this._grid,function(t){e.registerByNode(t.node)}),e._dropMode.updateAreas(e._areaList),this._disabled=!1},disableDnd:function(){var e=this._dragManager;c.forEach(this._grid,function(t){e.unregister(t.node)}),e._dropMode.updateAreas(e._areaList),this._disabled=!0},_organizeChildren:function(){for(var e=M.superclass.getChildren.call(this),t=this.nbZones,i=Math.floor(e.length/t),r=e.length%t,a=0,n=0;n<t;n++){for(var o=0;o<i;o++)this._insertChild(e[a],n),a++;if(r>0){try{this._insertChild(e[a],n),a++}catch(e){}r--}else if(0===i)break}},_organizeChildrenManually:function(){for(var e,t=M.superclass.getChildren.call(this),i=t.length,r=0;r<i;r++){e=t[r];try{this._insertChild(e,e.column-1)}catch(e){}}},_insertChild:function(e,t,i){var r=this._grid[t].node,a=r.childNodes.length;return(void 0===i||i>a)&&(i=a),this._disabled?(l.place(e.domNode,r,i),d.set(e.domNode,"tabIndex","0")):e.dragRestriction?(l.place(e.domNode,r,i),d.set(e.domNode,"tabIndex","0")):this._dragManager.addDragItem(r,e.domNode,i,!0),e.set("column",t),e},removeChild:function(e){this._disabled?this.inherited(arguments):this._dragManager.removeDragItem(e.domNode.parentNode,e.domNode)},addService:function(e,t,i){kernel.deprecated("addService is deprecated.","Please use  instead.","Future"),this.addChild(e,t,i)},addChild:function(e,t,i){e.domNode.id=e.id,M.superclass.addChild.call(this,e,0),(t<0||void 0===t)&&(t=0),i<=0&&(i=0);try{return this._insertChild(e,t,i)}catch(e){}return null},_setColWidthsAttr:function(e){this.colWidths=u.isString(e)?e.split(","):u.isArray(e)?e:[e],this._started&&this._updateColumnsWidth()},_updateColumnsWidth:function(e){for(var t=this._grid.length,i=this._computeColWidth(),r=0;r<t;r++)this._grid[r].node.style.width=i[r]+"%"},_computeColWidth:function(){var e,t,i=this.colWidths||[],r=[],a=0;for(t=0;t<this.nbZones;t++)r.length<i.length?(a+=1*i[t],r.push(i[t])):(e||(e=(100-a)/(this.nbZones-t))<0&&(e=100/this.nbZones),r.push(e),a+=1*e);if(a>100){var n=100/a;for(t=0;t<r.length;t++)r[t]*=n}return r},_selectFocus:function(e){if(!this._disabled){var t,i,r,n,o,s,l,c=e.keyCode,u=f,v=null,b=y.getFocus(),_=b.node,k=this._dragManager;if(_==this.containerNode)switch(s=this.gridNode.childNodes,c){case u.DOWN_ARROW:case u.RIGHT_ARROW:for(t=!1,i=0;i<s.length;i++){for(o=s[i].childNodes,r=0;r<o.length;r++)if(null!==(v=o[r])&&"none"!=v.style.display){g.focus(v),h.stop(e),t=!0;break}if(t)break}break;case u.UP_ARROW:case u.LEFT_ARROW:for(s=this.gridNode.childNodes,t=!1,i=s.length-1;i>=0;i--){for(o=s[i].childNodes,r=o.length;r>=0;r--)if(null!==(v=o[r])&&"none"!=v.style.display){g.focus(v),h.stop(e),t=!0;break}if(t)break}}else if(_.parentNode.parentNode==this.gridNode){var w=c==u.UP_ARROW||c==u.LEFT_ARROW?"lastChild":"firstChild",M=c==u.UP_ARROW||c==u.LEFT_ARROW?"previousSibling":"nextSibling";switch(c){case u.UP_ARROW:case u.DOWN_ARROW:h.stop(e),t=!1;for(var x=_;!t;){o=x.parentNode.childNodes;var j=0;for(i=0;i<o.length&&("none"!=o[i].style.display&&j++,!(j>1));i++);if(1==j)return;v=null===x[M]?x.parentNode[w]:x[M],"none"===v.style.display?x=v:t=!0}if(e.shiftKey){var S=_.parentNode;for(i=0;i<this.gridNode.childNodes.length&&S!=this.gridNode.childNodes[i];i++);for(o=this.gridNode.childNodes[i].childNodes,r=0;r<o.length&&v!=o[r];r++);(a("mozilla")||a("webkit"))&&i--,l=p.byNode(_),l.dragRestriction?m.publish("/dojox/layout/gridContainer/moveRestriction",this):(n=k.removeDragItem(S,_),this.addChild(l,i,r),d.set(_,"tabIndex","0"),g.focus(_))}else g.focus(v);break;case u.RIGHT_ARROW:case u.LEFT_ARROW:if(h.stop(e),e.shiftKey){var E=0;if(null===_.parentNode[M])a("ie")&&c==u.LEFT_ARROW&&(E=this.gridNode.childNodes.length-1);else if(3==_.parentNode[M].nodeType)E=this.gridNode.childNodes.length-2;else{for(i=0;i<this.gridNode.childNodes.length&&_.parentNode[M]!=this.gridNode.childNodes[i];i++)E++;(a("mozilla")||a("webkit"))&&E--}l=p.byNode(_);var C=_.getAttribute("dndtype");C=null===C?l&&l.dndType?l.dndType.split(/\s*,\s*/):["text"]:C.split(/\s*,\s*/);var I=!1;for(i=0;i<this.acceptTypes.length;i++)for(r=0;r<C.length;r++)if(C[r]==this.acceptTypes[i]){I=!0;break}if(I&&!l.dragRestriction){var T=_.parentNode,F=0;if(u.LEFT_ARROW==c){var A=E;(a("mozilla")||a("webkit"))&&(A=E+1),F=this.gridNode.childNodes[A].childNodes.length}n=k.removeDragItem(T,_),this.addChild(l,E,F),d.set(n,"tabIndex","0"),g.focus(n)}else m.publish("/dojox/layout/gridContainer/moveRestriction",this)}else{for(var N=_.parentNode;null===v;)if(N=null!==N[M]&&3!==N[M].nodeType?N[M]:"previousSibling"===M?N.parentNode.childNodes[N.parentNode.childNodes.length-1]:N.parentNode.childNodes[a("ie")?0:1],(v=N[w])&&"none"==v.style.display){o=v.parentNode.childNodes;var P=null;if("previousSibling"==M){for(i=o.length-1;i>=0;i--)if("none"!=o[i].style.display){P=o[i];break}}else for(i=0;i<o.length;i++)if("none"!=o[i].style.display){P=o[i];break}P?v=P:(_=v,N=_.parentNode,v=null)}g.focus(v)}}}}},destroy:function(){var e=this._dragManager;c.forEach(this._grid,function(t){e.unregister(t.node)}),this.inherited(arguments)}});return M.ChildWidgetProperties={column:"1",dragRestriction:!1},u.extend(v,M.ChildWidgetProperties),M});//# sourceMappingURL=GridContainerLite.js.map