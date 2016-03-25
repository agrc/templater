//>>built
define("dijit/layout/StackContainer",["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/ready","dojo/topic","dojo/when","../registry","../_WidgetBase","./_LayoutWidget"],function(t,e,i,o,n,a,s,r,d,l,h,u,c,p){a("dijit-legacy-requires")&&d(0,function(){var t=["dijit/layout/StackController"];require(t)});var f=i("dijit.layout.StackContainer",p,{doLayout:!0,persist:!1,baseClass:"dijitStackContainer",buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"dijitLayoutContainer")},postCreate:function(){this.inherited(arguments),this.own(r(this.domNode,"keydown",s.hitch(this,"_onKeyDown")))},startup:function(){if(!this._started){var i=this.getChildren();t.forEach(i,this._setupChild,this),this.persist?this.selectedChildWidget=u.byId(e(this.id+"_selectedChild")):t.some(i,function(t){return t.selected&&(this.selectedChildWidget=t),t.selected},this);var o=this.selectedChildWidget;!o&&i[0]&&(o=this.selectedChildWidget=i[0],o.selected=!0),l.publish(this.id+"-startup",{children:i,selected:o,textDir:this.textDir}),this.inherited(arguments)}},resize:function(){if(!this._hasBeenShown){this._hasBeenShown=!0;var t=this.selectedChildWidget;t&&this._showChild(t)}this.inherited(arguments)},_setupChild:function(t){var e=t.domNode,i=n.place("<div role='tabpanel' class='"+this.baseClass+"ChildWrapper dijitHidden'>",t.domNode,"replace"),o=t["aria-label"]||t.title||t.label;o&&i.setAttribute("aria-label",o),n.place(e,i),t._wrapper=i,this.inherited(arguments),"none"==e.style.display&&(e.style.display="block"),t.domNode.removeAttribute("title")},addChild:function(t,e){this.inherited(arguments),this._started&&(l.publish(this.id+"-addChild",t,e),this.layout(),this.selectedChildWidget||this.selectChild(t))},removeChild:function(e){var i=t.indexOf(this.getChildren(),e);if(this.inherited(arguments),n.destroy(e._wrapper),delete e._wrapper,this._started&&l.publish(this.id+"-removeChild",e),!this._descendantsBeingDestroyed){if(this.selectedChildWidget===e&&(this.selectedChildWidget=void 0,this._started)){var o=this.getChildren();o.length&&this.selectChild(o[Math.max(i-1,0)])}this._started&&this.layout()}},selectChild:function(t,i){var o;return t=u.byId(t),this.selectedChildWidget!=t&&(o=this._transition(t,this.selectedChildWidget,i),this._set("selectedChildWidget",t),l.publish(this.id+"-selectChild",t,this._focused),this.persist&&e(this.id+"_selectedChild",this.selectedChildWidget.id)),h(o||!0)},_transition:function(t,e){e&&this._hideChild(e);var i=this._showChild(t);return t.resize&&(this.doLayout?t.resize(this._containerContentBox||this._contentBox):t.resize()),i},_adjacent:function(e){var i=this.getChildren(),o=t.indexOf(i,this.selectedChildWidget);return o+=e?1:i.length-1,i[o%i.length]},forward:function(){return this.selectChild(this._adjacent(!0),!0)},back:function(){return this.selectChild(this._adjacent(!1),!0)},_onKeyDown:function(t){l.publish(this.id+"-containerKeyDown",{e:t,page:this})},layout:function(){var t=this.selectedChildWidget;t&&t.resize&&(this.doLayout?t.resize(this._containerContentBox||this._contentBox):t.resize())},_showChild:function(t){var e=this.getChildren();return t.isFirstChild=t==e[0],t.isLastChild=t==e[e.length-1],t._set("selected",!0),t._wrapper&&o.replace(t._wrapper,"dijitVisible","dijitHidden"),t._onShow&&t._onShow()||!0},_hideChild:function(t){t._set("selected",!1),t._wrapper&&o.replace(t._wrapper,"dijitHidden","dijitVisible"),t.onHide&&t.onHide()},closeChild:function(t){var e=t.onClose&&t.onClose(this,t);e&&(this.removeChild(t),t.destroyRecursive())},destroyDescendants:function(e){this._descendantsBeingDestroyed=!0,this.selectedChildWidget=void 0,t.forEach(this.getChildren(),function(t){e||this.removeChild(t),t.destroyRecursive(e)},this),this._descendantsBeingDestroyed=!1}});return f.ChildWidgetProperties={selected:!1,disabled:!1,closable:!1,iconClass:"dijitNoIcon",showTitle:!0},s.extend(c,f.ChildWidgetProperties),f});//# sourceMappingURL=StackContainer.js.map