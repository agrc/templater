//>>built
require({cache:{"url:dijit/templates/TreeNode.html":'<div class="dijitTreeNode" role="presentation"\n	><div data-dojo-attach-point="rowNode" class="dijitTreeRow" role="presentation"\n		><span data-dojo-attach-point="expandoNode" class="dijitInline dijitTreeExpando" role="presentation"></span\n		><span data-dojo-attach-point="expandoNodeText" class="dijitExpandoText" role="presentation"></span\n		><span data-dojo-attach-point="contentNode"\n			class="dijitTreeContent" role="presentation">\n			<span role="presentation" class="dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point="iconNode"></span\n			><span data-dojo-attach-point="labelNode,focusNode" class="dijitTreeLabel" role="treeitem"\n				   tabindex="-1" aria-selected="false" id="${id}_label"></span>\n		</span\n	></div>\n	<div data-dojo-attach-point="containerNode" class="dijitTreeNodeContainer" role="presentation"\n		 style="display: none;" aria-labelledby="${id}_label"></div>\n</div>\n',"url:dijit/templates/Tree.html":'<div role="tree">\n	<div class="dijitInline dijitTreeIndent" style="position: absolute; top: -9999px" data-dojo-attach-point="indentDetector"></div>\n	<div class="dijitTreeExpando dijitTreeExpandoLoading" data-dojo-attach-point="rootLoadingIndicator"></div>\n	<div data-dojo-attach-point="containerNode" class="dijitTreeContainer" role="presentation">\n	</div>\n</div>\n'}}),define("dijit/Tree",["dojo/_base/array","dojo/aspect","dojo/cookie","dojo/_base/declare","dojo/Deferred","dojo/promise/all","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/errors/create","dojo/fx","dojo/has","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/topic","dojo/touch","dojo/when","./a11yclick","./focus","./registry","./_base/manager","./_Widget","./_TemplatedMixin","./_Container","./_Contained","./_CssStateMixin","./_KeyNavMixin","dojo/text!./templates/TreeNode.html","dojo/text!./templates/Tree.html","./tree/TreeStoreModel","./tree/ForestStoreModel","./tree/_dndSelector","dojo/query!css2"],function(e,t,i,o,n,s,d,a,r,l,h,c,p,u,f,m,N,_,g,v,b,x,C,j,y,T,E,w,D,I,P,A,S,k,L){function R(e){return m.delegate(e.promise||e,{addCallback:function(e){this.then(e)},addErrback:function(e){this.otherwise(e)}})}var M=o("dijit._TreeNode",[y,T,E,w,D],{item:null,isTreeNode:!0,label:"",_setLabelAttr:function(e){this.labelNode["html"==this.labelType?"innerHTML":"innerText"in this.labelNode?"innerText":"textContent"]=e,this._set("label",e),p("dojo-bidi")&&this.applyTextDir(this.labelNode)},labelType:"text",isExpandable:null,isExpanded:!1,state:"NotLoaded",templateString:P,baseClass:"dijitTreeNode",cssStateNodes:{rowNode:"dijitTreeRow"},_setTooltipAttr:{node:"rowNode",type:"attribute",attribute:"title"},buildRendering:function(){this.inherited(arguments),this._setExpando(),this._updateItemClasses(this.item),this.isExpandable&&this.labelNode.setAttribute("aria-expanded",this.isExpanded),this.setSelected(!1)},_setIndentAttr:function(t){var i=Math.max(t,0)*this.tree._nodePixelIndent+"px";l.set(this.domNode,"backgroundPosition",i+" 0px"),l.set(this.rowNode,this.isLeftToRight()?"paddingLeft":"paddingRight",i),e.forEach(this.getChildren(),function(e){e.set("indent",t+1)}),this._set("indent",t)},markProcessing:function(){this.state="Loading",this._setExpando(!0)},unmarkProcessing:function(){this._setExpando(!1)},_updateItemClasses:function(e){var t=this.tree,i=t.model;t._v10Compat&&e===i.root&&(e=null),this._applyClassAndStyle(e,"icon","Icon"),this._applyClassAndStyle(e,"label","Label"),this._applyClassAndStyle(e,"row","Row"),this.tree._startPaint(!0)},_applyClassAndStyle:function(e,t,i){var o="_"+t+"Class",n=t+"Node",s=this[o];this[o]=this.tree["get"+i+"Class"](e,this.isExpanded),a.replace(this[n],this[o]||"",s||""),l.set(this[n],this.tree["get"+i+"Style"](e,this.isExpanded)||{})},_updateLayout:function(){var e=this.getParent(),t=!e||!e.rowNode||"none"==e.rowNode.style.display;a.toggle(this.domNode,"dijitTreeIsRoot",t),a.toggle(this.domNode,"dijitTreeIsLast",!t&&!this.getNextSibling())},_setExpando:function(e){var t=["dijitTreeExpandoLoading","dijitTreeExpandoOpened","dijitTreeExpandoClosed","dijitTreeExpandoLeaf"],i=["*","-","+","*"],o=e?0:this.isExpandable?this.isExpanded?1:2:3;a.replace(this.expandoNode,t[o],t),this.expandoNodeText.innerHTML=i[o]},expand:function(){if(this._expandDeferred)return R(this._expandDeferred);this._collapseDeferred&&(this._collapseDeferred.cancel(),delete this._collapseDeferred),this.isExpanded=!0,this.labelNode.setAttribute("aria-expanded","true"),(this.tree.showRoot||this!==this.tree.rootNode)&&this.containerNode.setAttribute("role","group"),a.add(this.contentNode,"dijitTreeContentExpanded"),this._setExpando(),this._updateItemClasses(this.item),this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","true");var e=c.wipeIn({node:this.containerNode,duration:j.defaultDuration}),i=this._expandDeferred=new n(function(){e.stop()});return t.after(e,"onEnd",function(){i.resolve(!0)},!0),e.play(),R(i)},collapse:function(){if(this._collapseDeferred)return R(this._collapseDeferred);this._expandDeferred&&(this._expandDeferred.cancel(),delete this._expandDeferred),this.isExpanded=!1,this.labelNode.setAttribute("aria-expanded","false"),this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","false"),a.remove(this.contentNode,"dijitTreeContentExpanded"),this._setExpando(),this._updateItemClasses(this.item);var e=c.wipeOut({node:this.containerNode,duration:j.defaultDuration}),i=this._collapseDeferred=new n(function(){e.stop()});return t.after(e,"onEnd",function(){i.resolve(!0)},!0),e.play(),R(i)},indent:0,setChildItems:function(t){var i=this.tree,o=i.model,n=[],a=i.focusedChild,r=this.getChildren();e.forEach(r,function(e){E.prototype.removeChild.call(this,e)},this),this.defer(function(){e.forEach(r,function(t){function n(t){var s=o.getIdentity(t.item),d=i._itemNodesMap[s];if(1==d.length)delete i._itemNodesMap[s];else{var a=e.indexOf(d,t);-1!=a&&d.splice(a,1)}e.forEach(t.getChildren(),n)}if(!t._destroyed&&!t.getParent()){if(i.dndController.removeTreeNode(t),n(t),i.persist){var s=e.map(t.getTreePath(),function(e){return i.model.getIdentity(e)}).join("/");for(var r in i._openedNodes)r.substr(0,s.length)==s&&delete i._openedNodes[r];i._saveExpandedNodes()}i.lastFocusedChild&&!d.isDescendant(i.lastFocusedChild,i.domNode)&&delete i.lastFocusedChild,a&&!d.isDescendant(a,i.domNode)&&i.focus(),t.destroyRecursive()}})}),this.state="Loaded",t&&t.length>0?(this.isExpandable=!0,e.forEach(t,function(e){var t,s=o.getIdentity(e),d=i._itemNodesMap[s];if(d)for(var a=0;a<d.length;a++)if(d[a]&&!d[a].getParent()){t=d[a],t.set("indent",this.indent+1);break}t||(t=this.tree._createTreeNode({item:e,tree:i,isExpandable:o.mayHaveChildren(e),label:i.getLabel(e),labelType:i.model&&i.model.labelType||"text",tooltip:i.getTooltip(e),ownerDocument:i.ownerDocument,dir:i.dir,lang:i.lang,textDir:i.textDir,indent:this.indent+1}),d?d.push(t):i._itemNodesMap[s]=[t]),this.addChild(t),(this.tree.autoExpand||this.tree._state(t))&&n.push(i._expandNode(t))},this),e.forEach(this.getChildren(),function(e){e._updateLayout()})):this.isExpandable=!1,this._setExpando&&this._setExpando(!1),this._updateItemClasses(this.item);var l=s(n);return this.tree._startPaint(l),R(l)},getTreePath:function(){for(var e=this,t=[];e&&e!==this.tree.rootNode;)t.unshift(e.item),e=e.getParent();return t.unshift(this.tree.rootNode.item),t},getIdentity:function(){return this.tree.model.getIdentity(this.item)},removeChild:function(t){this.inherited(arguments);var i=this.getChildren();0==i.length&&(this.isExpandable=!1,this.collapse()),e.forEach(i,function(e){e._updateLayout()})},makeExpandable:function(){this.isExpandable=!0,this._setExpando(!1)},setSelected:function(e){this.labelNode.setAttribute("aria-selected",e?"true":"false"),a.toggle(this.rowNode,"dijitTreeRowSelected",e)},focus:function(){x.focus(this.focusNode)}});p("dojo-bidi")&&M.extend({_setTextDirAttr:function(t){!t||this.textDir==t&&this._created||(this._set("textDir",t),this.applyTextDir(this.labelNode),e.forEach(this.getChildren(),function(e){e.set("textDir",t)},this))}});var F=o("dijit.Tree",[y,I,T,D],{baseClass:"dijitTree",store:null,model:null,query:null,label:"",showRoot:!0,childrenAttr:["children"],paths:[],path:[],selectedItems:null,selectedItem:null,openOnClick:!1,openOnDblClick:!1,templateString:A,persist:!1,autoExpand:!1,dndController:L,dndParams:["onDndDrop","itemCreator","onDndCancel","checkAcceptance","checkItemAcceptance","dragThreshold","betweenThreshold"],onDndDrop:null,itemCreator:null,onDndCancel:null,checkAcceptance:null,checkItemAcceptance:null,dragThreshold:5,betweenThreshold:0,_nodePixelIndent:19,_publish:function(e,t){_.publish(this.id,m.mixin({tree:this,event:e},t||{}))},postMixInProperties:function(){this.tree=this,this.autoExpand&&(this.persist=!1),this._itemNodesMap={},!this.cookieName&&this.id&&(this.cookieName=this.id+"SaveStateCookie"),this.expandChildrenDeferred=new n,this.pendingCommandsPromise=this.expandChildrenDeferred.promise,this.inherited(arguments)},postCreate:function(){this._initState();var e=this;if(this.own(N(this.containerNode,N.selector(".dijitTreeNode",g.enter),function(t){e._onNodeMouseEnter(C.byNode(this),t)}),N(this.containerNode,N.selector(".dijitTreeNode",g.leave),function(t){e._onNodeMouseLeave(C.byNode(this),t)}),N(this.containerNode,N.selector(".dijitTreeRow",b.press),function(t){e._onNodePress(C.getEnclosingWidget(this),t)}),N(this.containerNode,N.selector(".dijitTreeRow",b),function(t){e._onClick(C.getEnclosingWidget(this),t)}),N(this.containerNode,N.selector(".dijitTreeRow","dblclick"),function(t){e._onDblClick(C.getEnclosingWidget(this),t)})),this.model||this._store2model(),this.own(t.after(this.model,"onChange",m.hitch(this,"_onItemChange"),!0),t.after(this.model,"onChildrenChange",m.hitch(this,"_onItemChildrenChange"),!0),t.after(this.model,"onDelete",m.hitch(this,"_onItemDelete"),!0)),this.inherited(arguments),this.dndController){m.isString(this.dndController)&&(this.dndController=m.getObject(this.dndController));for(var i={},o=0;o<this.dndParams.length;o++)this[this.dndParams[o]]&&(i[this.dndParams[o]]=this[this.dndParams[o]]);this.dndController=new this.dndController(this,i)}this._load(),this.onLoadDeferred=R(this.pendingCommandsPromise),this.onLoadDeferred.then(m.hitch(this,"onLoad"))},_store2model:function(){this._v10Compat=!0,u.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");var e={id:this.id+"_ForestStoreModel",store:this.store,query:this.query,childrenAttrs:this.childrenAttr};this.params.mayHaveChildren&&(e.mayHaveChildren=m.hitch(this,"mayHaveChildren")),this.params.getItemChildren&&(e.getChildren=m.hitch(this,function(e,t,i){this.getItemChildren(this._v10Compat&&e===this.model.root?null:e,t,i)})),this.model=new k(e),this.showRoot=Boolean(this.label)},onLoad:function(){},_load:function(){this.model.getRoot(m.hitch(this,function(e){var t=this.rootNode=this.tree._createTreeNode({item:e,tree:this,isExpandable:!0,label:this.label||this.getLabel(e),labelType:this.model.labelType||"text",textDir:this.textDir,indent:this.showRoot?0:-1});this.showRoot?(this.domNode.setAttribute("aria-multiselectable",!this.dndController.singular),this.rootLoadingIndicator.style.display="none"):(t.rowNode.style.display="none",this.domNode.setAttribute("role","presentation"),this.domNode.removeAttribute("aria-expanded"),this.domNode.removeAttribute("aria-multiselectable"),this["aria-label"]?(t.containerNode.setAttribute("aria-label",this["aria-label"]),this.domNode.removeAttribute("aria-label")):this["aria-labelledby"]&&(t.containerNode.setAttribute("aria-labelledby",this["aria-labelledby"]),this.domNode.removeAttribute("aria-labelledby")),t.labelNode.setAttribute("role","presentation"),t.labelNode.removeAttribute("aria-selected"),t.containerNode.setAttribute("role","tree"),t.containerNode.setAttribute("aria-expanded","true"),t.containerNode.setAttribute("aria-multiselectable",!this.dndController.singular)),this.containerNode.appendChild(t.domNode);var i=this.model.getIdentity(e);this._itemNodesMap[i]?this._itemNodesMap[i].push(t):this._itemNodesMap[i]=[t],t._updateLayout(),this._expandNode(t).then(m.hitch(this,function(){this._destroyed||(this.rootLoadingIndicator.style.display="none",this.expandChildrenDeferred.resolve(!0))}))}),m.hitch(this,function(e){}))},getNodesByItem:function(e){if(!e)return[];var t=m.isString(e)?e:this.model.getIdentity(e);return[].concat(this._itemNodesMap[t])},_setSelectedItemAttr:function(e){this.set("selectedItems",[e])},_setSelectedItemsAttr:function(t){var i=this;return this.pendingCommandsPromise=this.pendingCommandsPromise.always(m.hitch(this,function(){var o=e.map(t,function(e){return!e||m.isString(e)?e:i.model.getIdentity(e)}),n=[];e.forEach(o,function(e){n=n.concat(i._itemNodesMap[e]||[])}),this.set("selectedNodes",n)}))},_setPathAttr:function(e){return R(e.length?this.set("paths",[e]).then(function(e){return e[0]}):this.set("paths",[]).then(function(e){return e[0]}))},_setPathsAttr:function(t){function i(t,n){var s=t.shift(),d=e.filter(n,function(e){return e.getIdentity()==s})[0];if(d)return t.length?o._expandNode(d).then(function(){return i(t,d.getChildren())}):d;throw new F.PathError("Could not expand path at "+s)}var o=this;return R(this.pendingCommandsPromise=this.pendingCommandsPromise.always(function(){return s(e.map(t,function(t){if(t=e.map(t,function(e){return m.isString(e)?e:o.model.getIdentity(e)}),t.length)return i(t,[o.rootNode]);throw new F.PathError("Empty path")}))}).then(function(e){return o.set("selectedNodes",e),o.paths}))},_setSelectedNodeAttr:function(e){this.set("selectedNodes",[e])},_setSelectedNodesAttr:function(e){this.dndController.setSelection(e)},expandAll:function(){function t(o){return i._expandNode(o).then(function(){var i=e.filter(o.getChildren()||[],function(e){return e.isExpandable});return s(e.map(i,t))})}var i=this;return R(t(this.rootNode))},collapseAll:function(){function t(o){var n=e.filter(o.getChildren()||[],function(e){return e.isExpandable}),d=s(e.map(n,t));return!o.isExpanded||o==i.rootNode&&!i.showRoot?d:d.then(function(){return i._collapseNode(o)})}var i=this;return R(t(this.rootNode))},mayHaveChildren:function(){},getItemChildren:function(){},getLabel:function(e){return this.model.getLabel(e)},getIconClass:function(e,t){return!e||this.model.mayHaveChildren(e)?t?"dijitFolderOpened":"dijitFolderClosed":"dijitLeaf"},getLabelClass:function(){},getRowClass:function(){},getIconStyle:function(){},getLabelStyle:function(){},getRowStyle:function(){},getTooltip:function(){return""},_onDownArrow:function(e,t){var i=this._getNext(t);i&&i.isTreeNode&&this.focusNode(i)},_onUpArrow:function(e,t){var i=t.getPreviousSibling();if(i)for(t=i;t.isExpandable&&t.isExpanded&&t.hasChildren();){var o=t.getChildren();t=o[o.length-1]}else{var n=t.getParent();(this.showRoot||n!==this.rootNode)&&(t=n)}t&&t.isTreeNode&&this.focusNode(t)},_onRightArrow:function(e,t){t.isExpandable&&!t.isExpanded?this._expandNode(t):t.hasChildren()&&(t=t.getChildren()[0],t&&t.isTreeNode&&this.focusNode(t))},_onLeftArrow:function(e,t){if(t.isExpandable&&t.isExpanded)this._collapseNode(t);else{var i=t.getParent();i&&i.isTreeNode&&(this.showRoot||i!==this.rootNode)&&this.focusNode(i)}},focusLastChild:function(){var e=this._getLast();e&&e.isTreeNode&&this.focusNode(e)},_getFirst:function(){return this.showRoot?this.rootNode:this.rootNode.getChildren()[0]},_getLast:function(){for(var e=this.rootNode;e.isExpanded;){var t=e.getChildren();if(!t.length)break;e=t[t.length-1]}return e},_getNext:function(e){if(e.isExpandable&&e.isExpanded&&e.hasChildren())return e.getChildren()[0];for(;e&&e.isTreeNode;){var t=e.getNextSibling();if(t)return t;e=e.getParent()}return null},childSelector:".dijitTreeRow",isExpandoNode:function(e,t){return d.isDescendant(e,t.expandoNode)||d.isDescendant(e,t.expandoNodeText)},_onNodePress:function(e,t){this.focusNode(e)},__click:function(e,t,i,o){var n=t.target,s=this.isExpandoNode(n,e);e.isExpandable&&(i||s)?this._onExpandoClick({node:e}):(this._publish("execute",{item:e.item,node:e,evt:t}),this[o](e.item,e,t),this.focusNode(e)),t.stopPropagation(),t.preventDefault()},_onClick:function(e,t){this.__click(e,t,this.openOnClick,"onClick")},_onDblClick:function(e,t){this.__click(e,t,this.openOnDblClick,"onDblClick")},_onExpandoClick:function(e){var t=e.node;this.focusNode(t),t.isExpanded?this._collapseNode(t):this._expandNode(t)},onClick:function(){},onDblClick:function(){},onOpen:function(){},onClose:function(){},_getNextNode:function(e){return u.deprecated(this.declaredClass+"::_getNextNode(node) is deprecated. Use _getNext(node) instead.","","2.0"),this._getNext(e)},_getRootOrFirstNode:function(){return u.deprecated(this.declaredClass+"::_getRootOrFirstNode() is deprecated. Use _getFirst() instead.","","2.0"),this._getFirst()},_collapseNode:function(e){if(e._expandNodeDeferred&&delete e._expandNodeDeferred,"Loading"!=e.state&&e.isExpanded){var t=e.collapse();return this.onClose(e.item,e),this._state(e,!1),this._startPaint(t),t}},_expandNode:function(e){if(e._expandNodeDeferred)return e._expandNodeDeferred;var t=this.model,i=e.item;e._loadDeferred||(e.markProcessing(),e._loadDeferred=new n,t.getChildren(i,function(t){e.unmarkProcessing(),e.setChildItems(t).then(function(){e._loadDeferred.resolve(t)})},function(t){e._loadDeferred.reject(t)}));var o=e._loadDeferred.then(m.hitch(this,function(){var t=e.expand();return this.onOpen(e.item,e),this._state(e,!0),t}));return this._startPaint(o),o},focusNode:function(e){var t=this.domNode.scrollLeft;this.focusChild(e),this.domNode.scrollLeft=t},_onNodeMouseEnter:function(){},_onNodeMouseLeave:function(){},_onItemChange:function(t){var i=this.model,o=i.getIdentity(t),n=this._itemNodesMap[o];if(n){var s=this.getLabel(t),d=this.getTooltip(t);e.forEach(n,function(e){e.set({item:t,label:s,tooltip:d}),e._updateItemClasses(t)})}},_onItemChildrenChange:function(t,i){var o=this.model,n=o.getIdentity(t),s=this._itemNodesMap[n];s&&e.forEach(s,function(e){e.setChildItems(i)})},_onItemDelete:function(t){var i=this.model,o=i.getIdentity(t),n=this._itemNodesMap[o];n&&(e.forEach(n,function(e){this.dndController.removeTreeNode(e);var t=e.getParent();t&&t.removeChild(e),this.lastFocusedChild&&!d.isDescendant(this.lastFocusedChild,this.domNode)&&delete this.lastFocusedChild,this.focusedChild&&!d.isDescendant(this.focusedChild,this.domNode)&&this.focus(),e.destroyRecursive()},this),delete this._itemNodesMap[o])},_initState:function(){if(this._openedNodes={},this.persist&&this.cookieName){var t=i(this.cookieName);t&&e.forEach(t.split(","),function(e){this._openedNodes[e]=!0},this)}},_state:function(t,i){if(!this.persist)return!1;var o=e.map(t.getTreePath(),function(e){return this.model.getIdentity(e)},this).join("/");return 1===arguments.length?this._openedNodes[o]:(i?this._openedNodes[o]=!0:delete this._openedNodes[o],void this._saveExpandedNodes())},_saveExpandedNodes:function(){if(this.persist&&this.cookieName){var e=[];for(var t in this._openedNodes)e.push(t);i(this.cookieName,e.join(","),{expires:365})}},destroy:function(){this._curSearch&&(this._curSearch.timer.remove(),delete this._curSearch),this.rootNode&&this.rootNode.destroyRecursive(),this.dndController&&!m.isString(this.dndController)&&this.dndController.destroy(),this.rootNode=null,this.inherited(arguments)},destroyRecursive:function(){this.destroy()},resize:function(e){e&&r.setMarginBox(this.domNode,e),this._nodePixelIndent=r.position(this.tree.indentDetector).w||this._nodePixelIndent,this.expandChildrenDeferred.then(m.hitch(this,function(){this.rootNode.set("indent",this.showRoot?0:-1),this._adjustWidths()}))},_outstandingPaintOperations:0,_startPaint:function(e){this._outstandingPaintOperations++,this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer);var t=m.hitch(this,function(){this._outstandingPaintOperations--,this._outstandingPaintOperations<=0&&!this._adjustWidthsTimer&&this._started&&(this._adjustWidthsTimer=this.defer("_adjustWidths"))});v(e,t,t)},_adjustWidths:function(){this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer),this.containerNode.style.width="auto",this.containerNode.style.width=this.domNode.scrollWidth>this.domNode.offsetWidth?"auto":"100%"},_createTreeNode:function(e){return new M(e)},focus:function(){this.lastFocusedChild?this.focusNode(this.lastFocusedChild):this.focusFirstChild()}});return p("dojo-bidi")&&F.extend({_setTextDirAttr:function(e){e&&this.textDir!=e&&(this._set("textDir",e),this.rootNode.set("textDir",e))}}),F.PathError=h("TreePathError"),F._TreeNode=M,F});//# sourceMappingURL=Tree.js.map