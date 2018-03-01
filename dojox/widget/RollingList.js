//>>built
define("dojox/widget/RollingList",["dojo","dijit","dojox","dojo/i18n!dijit/nls/common","dojo/require!dojo/window,dijit/layout/ContentPane,dijit/_Templated,dijit/_Contained,dijit/layout/_LayoutWidget,dijit/Menu,dijit/form/Button,dijit/focus,dijit/_base/focus,dojox/html/metrics,dojo/i18n"],function(e,t,i){e.provide("dojox.widget.RollingList"),e.experimental("dojox.widget.RollingList"),e.require("dojo.window"),e.require("dijit.layout.ContentPane"),e.require("dijit._Templated"),e.require("dijit._Contained"),e.require("dijit.layout._LayoutWidget"),e.require("dijit.Menu"),e.require("dijit.form.Button"),e.require("dijit.focus"),e.require("dijit._base.focus"),e.require("dojox.html.metrics"),e.require("dojo.i18n"),e.requireLocalization("dijit","common"),e.declare("dojox.widget._RollingListPane",[t.layout.ContentPane,t._Templated,t._Contained],{templateString:'<div class="dojoxRollingListPane"><table><tbody><tr><td dojoAttachPoint="containerNode"></td></tr></tbody></div>',parentWidget:null,parentPane:null,store:null,items:null,query:null,queryOptions:null,_focusByNode:!0,minWidth:0,_setContentAndScroll:function(e,t){this._setContent(e,t),this.parentWidget.scrollIntoView(this)},_updateNodeWidth:function(t,i){t.style.width="",e.marginBox(t).w<i&&e.marginBox(t,{w:i})},_onMinWidthChange:function(e){this._updateNodeWidth(this.domNode,e)},_setMinWidthAttr:function(e){e!==this.minWidth&&(this.minWidth=e,this._onMinWidthChange(e))},startup:function(){this._started||(this.store&&this.store.getFeatures()["dojo.data.api.Notification"]&&window.setTimeout(e.hitch(this,function(){this.connect(this.store,"onSet","_onSetItem"),this.connect(this.store,"onNew","_onNewItem"),this.connect(this.store,"onDelete","_onDeleteItem")}),1),this.connect(this.focusNode||this.domNode,"onkeypress","_focusKey"),this.parentWidget._updateClass(this.domNode,"Pane"),this.inherited(arguments),this._onMinWidthChange(this.minWidth))},_focusKey:function(t){if(t.charOrCode==e.keys.BACKSPACE)return void e.stopEvent(t);t.charOrCode==e.keys.LEFT_ARROW&&this.parentPane?(this.parentPane.focus(),this.parentWidget.scrollIntoView(this.parentPane)):t.charOrCode==e.keys.ENTER&&this.parentWidget._onExecute()},focus:function(e){if(this.parentWidget._focusedPane!=this&&(this.parentWidget._focusedPane=this,this.parentWidget.scrollIntoView(this),this._focusByNode&&(!this.parentWidget._savedFocus||e)))try{(this.focusNode||this.domNode).focus()}catch(e){}},_onShow:function(){this.inherited(arguments),(this.store||this.items)&&(this.refreshOnShow&&this.domNode||!this.isLoaded&&this.domNode)&&this.refresh()},_load:function(){this.isLoaded=!1,this.items?(this._setContentAndScroll(this.onLoadStart(),!0),window.setTimeout(e.hitch(this,"_doQuery"),1)):this._doQuery()},_doLoadItems:function(t,i){var a=0,o=this.store;if(e.forEach(t,function(e){o.isItemLoaded(e)||a++}),0===a)i();else{var r=function(e){0===--a&&i()};e.forEach(t,function(e){o.isItemLoaded(e)||o.loadItem({item:e,onItem:r})})}},_doQuery:function(){if(this.domNode){var t=this.parentWidget.preloadItems;t=!0===t||this.items&&this.items.length<=Number(t),this.items&&t?this._doLoadItems(this.items,e.hitch(this,"onItems")):this.items?this.onItems():(this._setContentAndScroll(this.onFetchStart(),!0),this.store.fetch({query:this.query,onComplete:function(e){this.items=e,this.onItems()},onError:function(e){this._onError("Fetch",e)},scope:this}))}},_hasItem:function(e){for(var t,i=this.items||[],a=0;t=i[a];a++)if(this.parentWidget._itemsMatch(t,e))return!0;return!1},_onSetItem:function(e,t,i,a){this._hasItem(e)&&this.refresh()},_onNewItem:function(e,t){var i;!t&&!this.parentPane||t&&this.parentPane&&this.parentPane._hasItem(t.item)&&(i=this.parentPane._getSelected())&&this.parentWidget._itemsMatch(i.item,t.item)?(this.items.push(e),this.refresh()):t&&this.parentPane&&this._hasItem(t.item)&&this.refresh()},_onDeleteItem:function(t){this._hasItem(t)&&(this.items=e.filter(this.items,function(e){return e!=t}),this.refresh())},onFetchStart:function(){return this.loadingMessage},onFetchError:function(e){return this.errorMessage},onLoadStart:function(){return this.loadingMessage},onLoadError:function(e){return this.errorMessage},onItems:function(){this.onLoadDeferred||(this.cancel(),this.onLoadDeferred=new e.Deferred(e.hitch(this,"cancel"))),this._onLoadHandler()}}),e.declare("dojox.widget._RollingListGroupPane",[i.widget._RollingListPane],{templateString:'<div><div dojoAttachPoint="containerNode"></div><div dojoAttachPoint="menuContainer"><div dojoAttachPoint="menuNode"></div></div></div>',_menu:null,_setContent:function(e){this._menu||this.inherited(arguments)},_onMinWidthChange:function(t){if(this._menu){var i=e.marginBox(this.domNode).w,a=e.marginBox(this._menu.domNode).w;this._updateNodeWidth(this._menu.domNode,t-(i-a))}},onItems:function(){var t;this._menu&&(t=this._getSelected(),this._menu.destroyRecursive()),this._menu=this._getMenu();var i,a;if(this.items.length?e.forEach(this.items,function(e){(i=this.parentWidget._getMenuItemForItem(e,this))&&(t&&this.parentWidget._itemsMatch(i.item,t.item)&&(a=i),this._menu.addChild(i))},this):(i=this.parentWidget._getMenuItemForItem(null,this))&&this._menu.addChild(i),a){if(this._setSelected(a),t&&!t.children&&a.children||t&&t.children&&!a.children){var o=this.parentWidget._getPaneForItem(a.item,this,a.children);o?this.parentWidget.addChild(o,this.getIndexInParent()+1):(this.parentWidget._removeAfter(this),this.parentWidget._onItemClick(null,this,a.item,a.children))}}else t&&this.parentWidget._removeAfter(this);this.containerNode.innerHTML="",this.containerNode.appendChild(this._menu.domNode),this.parentWidget.scrollIntoView(this),this._checkScrollConnection(!0),this.inherited(arguments),this._onMinWidthChange(this.minWidth)},_checkScrollConnection:function(t){var i=this.store;this._scrollConn&&this.disconnect(this._scrollConn),delete this._scrollConn,e.every(this.items,function(e){return i.isItemLoaded(e)})||(t&&this._loadVisibleItems(),this._scrollConn=this.connect(this.domNode,"onscroll","_onScrollPane"))},startup:function(){this.inherited(arguments),this.parentWidget._updateClass(this.domNode,"GroupPane")},focus:function(i){if(this._menu){this._pendingFocus&&this.disconnect(this._pendingFocus),delete this._pendingFocus;var a=this._menu.focusedChild;if(!a){var o=e.query(".dojoxRollingListItemSelected",this.domNode)[0];o&&(a=t.byNode(o))}if(a||(a=this._menu.getChildren()[0]||this._menu),this._focusByNode=!1,a.focusNode){if(!this.parentWidget._savedFocus||i)try{a.focusNode.focus()}catch(e){}window.setTimeout(function(){try{e.window.scrollIntoView(a.focusNode)}catch(e){}},1)}else a.focus?this.parentWidget._savedFocus&&!i||a.focus():this._focusByNode=!0;this.inherited(arguments)}else this._pendingFocus||(this._pendingFocus=this.connect(this,"onItems","focus"))},_getMenu:function(){var i=this,a=new t.Menu({parentMenu:this.parentPane?this.parentPane._menu:null,onCancel:function(e){i.parentPane&&i.parentPane.focus(!0)},_moveToPopup:function(e){this.focusedChild&&!this.focusedChild.disabled&&this.onItemClick(this.focusedChild,e)}},this.menuNode);return this.connect(a,"onItemClick",function(t,i){if(!t.disabled)if(i.alreadySelected=e.hasClass(t.domNode,"dojoxRollingListItemSelected"),i.alreadySelected&&("keypress"==i.type&&i.charOrCode!=e.keys.ENTER||"internal"==i.type)){var o=this.parentWidget.getChildren()[this.getIndexInParent()+1];o&&(o.focus(!0),this.parentWidget.scrollIntoView(o))}else this._setSelected(t,a),this.parentWidget._onItemClick(i,this,t.item,t.children),"keypress"==i.type&&i.charOrCode==e.keys.ENTER&&this.parentWidget._onExecute()}),a._started||a.startup(),a},_onScrollPane:function(){this._visibleLoadPending&&window.clearTimeout(this._visibleLoadPending),this._visibleLoadPending=window.setTimeout(e.hitch(this,"_loadVisibleItems"),500)},_loadVisibleItems:function(){delete this._visibleLoadPending;var t=this._menu;if(t){var i=t.getChildren();if(i&&i.length){var a=function(t,i,a){var o=e.getComputedStyle(t),r=0;return i&&(r+=e._getMarginExtents(t,o).t),a&&(r+=e._getPadBorderExtents(t,o).t),r},o=a(this.domNode,!1,!0)+a(this.containerNode,!0,!0)+a(t.domNode,!0,!0)+a(i[0].domNode,!0,!1),r=e.contentBox(this.domNode).h,n=this.domNode.scrollTop-o-r/2,s=n+3*r/2,d=e.filter(i,function(e){var t=e.domNode.offsetTop,i=e.store,a=e.item;return t>=n&&t<=s&&!i.isItemLoaded(a)}),l=e.map(d,function(e){return e.item}),h=e.hitch(this,function(){var i,a=this._getSelected();e.forEach(l,function(e,o){var r=this.parentWidget._getMenuItemForItem(e,this),n=d[o],s=n.getIndexInParent();t.removeChild(n),r&&(a&&this.parentWidget._itemsMatch(r.item,a.item)&&(i=r),t.addChild(r,s),t.focusedChild==n&&t.focusChild(r)),n.destroy()},this),this._checkScrollConnection(!1)});this._doLoadItems(l,h)}}},_getSelected:function(t){if(t||(t=this._menu),t)for(var i,a=this._menu.getChildren(),o=0;i=a[o];o++)if(e.hasClass(i.domNode,"dojoxRollingListItemSelected"))return i;return null},_setSelected:function(t,i){i||(i=this._menu),i&&e.forEach(i.getChildren(),function(e){this.parentWidget._updateClass(e.domNode,"Item",{Selected:t&&e==t&&!e.disabled})},this)}}),e.declare("dojox.widget.RollingList",[t._Widget,t._Templated,t._Container],{templateString:e.cache("dojox.widget","RollingList/RollingList.html",'<div class="dojoxRollingList ${className}"\n\t><div class="dojoxRollingListContainer" dojoAttachPoint="containerNode" dojoAttachEvent="onkeypress:_onKey"\n\t></div\n\t><div class="dojoxRollingListButtons" dojoAttachPoint="buttonsNode"\n        ><button dojoType="dijit.form.Button" dojoAttachPoint="okButton"\n\t\t\t\tdojoAttachEvent="onClick:_onExecute">${okButtonLabel}</button\n        ><button dojoType="dijit.form.Button" dojoAttachPoint="cancelButton"\n\t\t\t\tdojoAttachEvent="onClick:_onCancel">${cancelButtonLabel}</button\n\t></div\n></div>\n'),widgetsInTemplate:!0,className:"",store:null,query:null,queryOptions:null,childrenAttrs:["children"],parentAttr:"",value:null,executeOnDblClick:!0,preloadItems:!1,showButtons:!1,okButtonLabel:"",cancelButtonLabel:"",minPaneWidth:0,postMixInProperties:function(){this.inherited(arguments);var t=e.i18n.getLocalization("dijit","common");this.okButtonLabel=this.okButtonLabel||t.buttonOk,this.cancelButtonLabel=this.cancelButtonLabel||t.buttonCancel},_setShowButtonsAttr:function(t){var i=!1;(this.showButtons!=t&&this._started||this.showButtons==t&&!this.started)&&(i=!0),e.toggleClass(this.domNode,"dojoxRollingListButtonsHidden",!t),this.showButtons=t,i&&(this._started?this.layout():window.setTimeout(e.hitch(this,"layout"),0))},_itemsMatch:function(e,t){return!e&&!t||!(!e||!t)&&(e==t||this._isIdentity&&this.store.getIdentity(e)==this.store.getIdentity(t))},_removeAfter:function(t){"number"!=typeof t&&(t=this.getIndexOfChild(t)),t>=0&&e.forEach(this.getChildren(),function(e,i){i>t&&(this.removeChild(e),e.destroyRecursive())},this);for(var i=this.getChildren(),a=i[i.length-1],o=null;a&&!o;){var r=a._getSelected?a._getSelected():null;r&&(o=r.item),a=a.parentPane}this._setInProgress||this._setValue(o)},addChild:function(e,t){t>0&&this._removeAfter(t-1),this.inherited(arguments),e._started||e.startup(),e.attr("minWidth",this.minPaneWidth),this.layout(),this._savedFocus||e.focus()},_setMinPaneWidthAttr:function(t){t!==this.minPaneWidth&&(this.minPaneWidth=t,e.forEach(this.getChildren(),function(e){e.attr("minWidth",t)}))},_updateClass:function(t,i,a){this._declaredClasses||(this._declaredClasses=("dojoxRollingList "+this.className).split(" ")),e.forEach(this._declaredClasses,function(o){if(o){e.addClass(t,o+i);for(var r in a||{})e.toggleClass(t,o+i+r,a[r]);e.toggleClass(t,o+i+"FocusSelected",e.hasClass(t,o+i+"Focus")&&e.hasClass(t,o+i+"Selected")),e.toggleClass(t,o+i+"HoverSelected",e.hasClass(t,o+i+"Hover")&&e.hasClass(t,o+i+"Selected"))}})},scrollIntoView:function(t){this._scrollingTimeout&&window.clearTimeout(this._scrollingTimeout),delete this._scrollingTimeout,this._scrollingTimeout=window.setTimeout(e.hitch(this,function(){t.domNode&&e.window.scrollIntoView(t.domNode),delete this._scrollingTimeout}),1)},resize:function(e){t.layout._LayoutWidget.prototype.resize.call(this,e)},layout:function(){var t=this.getChildren();if(this._contentBox){var a=this.buttonsNode,o=this._contentBox.h-e.marginBox(a).h-i.html.metrics.getScrollbar().h;e.forEach(t,function(t){e.marginBox(t.domNode,{h:o})})}if(this._focusedPane){var r=this._focusedPane;delete this._focusedPane,this._savedFocus||r.focus()}else t&&t.length&&(this._savedFocus||t[0].focus())},_onChange:function(e){this.onChange(e)},_setValue:function(e){delete this._setInProgress,this._itemsMatch(this.value,e)||(this.value=e,this._onChange(e))},_setValueAttr:function(t){if((!this._itemsMatch(this.value,t)||t)&&(!this._setInProgress||this._setInProgress!==t)){if(this._setInProgress=t,!t||!this.store.isItem(t)){var i=this.getChildren()[0];return i._setSelected(null),void this._onItemClick(null,i,null,null)}var a=e.hitch(this,function(i,a){var o,r=this.store;if(this.parentAttr&&r.getFeatures()["dojo.data.api.Identity"]&&((o=this.store.getValue(i,this.parentAttr))||""===o)){var n=function(e){a(r.getIdentity(e)==r.getIdentity(i)?null:[e])};""===o?a(null):"string"==typeof o?r.fetchItemByIdentity({identity:o,onItem:n}):r.isItem(o)&&n(o)}else{var s=this.childrenAttrs.length,d=[];e.forEach(this.childrenAttrs,function(e){var o={};o[e]=i,r.fetch({query:o,scope:this,onComplete:function(e){this._setInProgress===t&&(d=d.concat(e),0===--s&&a(d))}})},this)}}),o=e.hitch(this,function(i,a){var r,n=i[a],s=this.getChildren()[a];if(n&&s){var d=e.hitch(this,function(){if(r&&this.disconnect(r),delete r,this._setInProgress===t){var d=e.filter(s._menu.getChildren(),function(e){return this._itemsMatch(e.item,n)},this)[0];d&&(a++,s._menu.onItemClick(d,{type:"internal",stopPropagation:function(){},preventDefault:function(){}}),i[a]?o(i,a):(this._setValue(n),this.onItemClick(n,s,this.getChildItems(n))))}});s.isLoaded?d():r=this.connect(s,"onLoad",d)}else 0===a&&this.set("value",null)}),r=[],n=e.hitch(this,function(e){e&&e.length?(r.push(e[0]),a(e[0],n)):(e||r.pop(),r.reverse(),o(r,0))}),s=this.domNode.style;"none"==s.display||"hidden"==s.visibility?this._setValue(t):this._itemsMatch(t,this._visibleItem)||n([t])}},_onItemClick:function(e,t,i,a){if(e){var o=this._getPaneForItem(i,t,a);if("click"==e.type&&e.alreadySelected&&o){this._removeAfter(t.getIndexInParent()+1);var r=t.getNextSibling();r&&r._setSelected&&r._setSelected(null),this.scrollIntoView(r)}else o?(this.addChild(o,t.getIndexInParent()+1),this._savedFocus&&o.focus(!0)):(this._removeAfter(t),this.scrollIntoView(t))}else t&&(this._removeAfter(t),this.scrollIntoView(t));e&&"internal"==e.type||(this._setValue(i),this.onItemClick(i,t,a)),this._visibleItem=i},_getPaneForItem:function(e,t,i){var a=this.getPaneForItem(e,t,i);return a.store=this.store,a.parentWidget=this,a.parentPane=t||null,e?a.items=i||[e]:(a.query=this.query,a.queryOptions=this.queryOptions),a},_getMenuItemForItem:function(i,a){var o=this.store;if(i&&o&&o.isItem(i)){var r,n=o.isItemLoaded(i),s=n?this.getChildItems(i):void 0;if(s)if(r=this.getMenuItemForItem(i,a,s),r.children=s,this._updateClass(r.domNode,"Item",{Expanding:!0}),r._started)e.style(r.arrowWrapper,"visibility","");else var d=r.connect(r,"startup",function(){this.disconnect(d),e.style(this.arrowWrapper,"visibility","")});else r=this.getMenuItemForItem(i,a,null),n?this._updateClass(r.domNode,"Item",{Single:!0}):(this._updateClass(r.domNode,"Item",{Unloaded:!0}),r.attr("disabled",!0));if(r.store=this.store,r.item=i,r.label||r.attr("label",this.store.getLabel(i).replace(/</,"&lt;")),r.focusNode){var l=this;r.focus=function(){if(!this.disabled)try{this.focusNode.focus()}catch(e){}},r.connect(r.focusNode,"onmouseenter",function(){this.disabled||l._updateClass(this.domNode,"Item",{Hover:!0})}),r.connect(r.focusNode,"onmouseleave",function(){this.disabled||l._updateClass(this.domNode,"Item",{Hover:!1})}),r.connect(r.focusNode,"blur",function(){l._updateClass(this.domNode,"Item",{Focus:!1,Hover:!1})}),r.connect(r.focusNode,"focus",function(){l._updateClass(this.domNode,"Item",{Focus:!0}),l._focusedPane=a}),this.executeOnDblClick&&r.connect(r.focusNode,"ondblclick",function(){l._onExecute()})}return r}var h=new t.MenuItem({label:"---",disabled:!0,iconClass:"dojoxEmpty",focus:function(){}});return this._updateClass(h.domNode,"Item"),h},_setStore:function(e){if(e!==this.store||!this._started){this.store=e,this._isIdentity=e.getFeatures()["dojo.data.api.Identity"];var t=this._getPaneForItem();this.addChild(t,0)}},_onKey:function(i){if(i.charOrCode==e.keys.BACKSPACE)return void e.stopEvent(i);if(i.charOrCode==e.keys.ESCAPE&&this._savedFocus){try{t.focus(this._savedFocus)}catch(i){}return void e.stopEvent(i)}return i.charOrCode==e.keys.LEFT_ARROW||i.charOrCode==e.keys.RIGHT_ARROW?void e.stopEvent(i):void 0},_resetValue:function(){this.set("value",this._lastExecutedValue)},_onCancel:function(){this._resetValue(),this.onCancel()},_onExecute:function(){this._lastExecutedValue=this.get("value"),this.onExecute()},focus:function(){var e=this._savedFocus;if(this._savedFocus=t.getFocus(this),this._savedFocus.node||delete this._savedFocus,this._focusedPane){this._savedFocus=t.getFocus(this);var i=this._focusedPane;delete this._focusedPane,e||i.focus(!0)}else{var a=this.getChildren()[0];a&&!e&&a.focus(!0)}},handleKey:function(t){return t.keyCode==e.keys.DOWN_ARROW?(delete this._savedFocus,this.focus(),!1):t.keyCode!=e.keys.ESCAPE||(this._onCancel(),!1)},_updateChildClasses:function(){var t=this.getChildren(),i=t.length;e.forEach(t,function(t,a){e.toggleClass(t.domNode,"dojoxRollingListPaneCurrentChild",a==i-1),e.toggleClass(t.domNode,"dojoxRollingListPaneCurrentSelected",a==i-2)})},startup:function(){this._started||(this.getParent&&this.getParent()||(this.resize(),this.connect(e.global,"onresize","resize")),this.connect(this,"addChild","_updateChildClasses"),this.connect(this,"removeChild","_updateChildClasses"),this._setStore(this.store),this.set("showButtons",this.showButtons),this.inherited(arguments),this._lastExecutedValue=this.get("value"))},getChildItems:function(t){var i,a=this.store;return e.forEach(this.childrenAttrs,function(e){var o=a.getValues(t,e);o&&o.length&&(i=(i||[]).concat(o))}),i},getMenuItemForItem:function(e,i,a){return new t.MenuItem({})},getPaneForItem:function(e,t,a){return!e||a?new i.widget._RollingListGroupPane({}):null},onItemClick:function(e,t,i){},onExecute:function(){},onCancel:function(){},onChange:function(e){}})});//# sourceMappingURL=RollingList.js.map