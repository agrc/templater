//>>built
define("dijit/layout/StackContainer",["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/ready","dojo/topic","dojo/when","../registry","../_WidgetBase","./_LayoutWidget"],function(e,t,i,o,n,r,a,s,l,d,h,u,c,f){r("dijit-legacy-requires")&&l(0,function(){var e=["dijit/layout/StackController"];require(e)});var p=i("dijit.layout.StackContainer",f,{doLayout:!0,persist:!1,baseClass:"dijitStackContainer",buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"dijitLayoutContainer")},postCreate:function(){this.inherited(arguments),this.own(s(this.domNode,"keydown",a.hitch(this,"_onKeyDown")))},startup:function(){if(!this._started){var i=this.getChildren();e.forEach(i,this._setupChild,this),this.persist?this.selectedChildWidget=u.byId(t(this.id+"_selectedChild")):e.some(i,function(e){return e.selected&&(this.selectedChildWidget=e),e.selected},this);var o=this.selectedChildWidget;!o&&i[0]&&(o=this.selectedChildWidget=i[0],o.selected=!0),d.publish(this.id+"-startup",{children:i,selected:o,textDir:this.textDir}),this.inherited(arguments)}},resize:function(){if(!this._hasBeenShown){this._hasBeenShown=!0;var e=this.selectedChildWidget;e&&this._showChild(e)}this.inherited(arguments)},_setupChild:function(e){var t=e.domNode,i=n.place("<div role='tabpanel' class='"+this.baseClass+"ChildWrapper dijitHidden'>",e.domNode,"replace"),o=e["aria-label"]||e.title||e.label;o&&i.setAttribute("aria-label",o),n.place(t,i),e._wrapper=i,this.inherited(arguments),"none"==t.style.display&&(t.style.display="block"),e.domNode.removeAttribute("title")},addChild:function(e,t){this.inherited(arguments),this._started&&(d.publish(this.id+"-addChild",e,t),this.layout(),this.selectedChildWidget||this.selectChild(e))},removeChild:function(t){var i=e.indexOf(this.getChildren(),t);if(this.inherited(arguments),n.destroy(t._wrapper),delete t._wrapper,this._started&&d.publish(this.id+"-removeChild",t),!this._descendantsBeingDestroyed){if(this.selectedChildWidget===t&&(this.selectedChildWidget=void 0,this._started)){var o=this.getChildren();o.length&&this.selectChild(o[Math.max(i-1,0)])}this._started&&this.layout()}},selectChild:function(e,i){var o;return e=u.byId(e),this.selectedChildWidget!=e&&(o=this._transition(e,this.selectedChildWidget,i),this._set("selectedChildWidget",e),d.publish(this.id+"-selectChild",e,this._focused),this.persist&&t(this.id+"_selectedChild",this.selectedChildWidget.id)),h(o||!0)},_transition:function(e,t){t&&this._hideChild(t);var i=this._showChild(e);return e.resize&&(this.doLayout?e.resize(this._containerContentBox||this._contentBox):e.resize()),i},_adjacent:function(t){var i=this.getChildren(),o=e.indexOf(i,this.selectedChildWidget);return o+=t?1:i.length-1,i[o%i.length]},forward:function(){return this.selectChild(this._adjacent(!0),!0)},back:function(){return this.selectChild(this._adjacent(!1),!0)},_onKeyDown:function(e){d.publish(this.id+"-containerKeyDown",{e:e,page:this})},layout:function(){var e=this.selectedChildWidget;e&&e.resize&&(this.doLayout?e.resize(this._containerContentBox||this._contentBox):e.resize())},_showChild:function(e){var t=this.getChildren();return e.isFirstChild=e==t[0],e.isLastChild=e==t[t.length-1],e._set("selected",!0),e._wrapper&&o.replace(e._wrapper,"dijitVisible","dijitHidden"),e._onShow&&e._onShow()||!0},_hideChild:function(e){e._set("selected",!1),e._wrapper&&o.replace(e._wrapper,"dijitHidden","dijitVisible"),e.onHide&&e.onHide()},closeChild:function(e){var t=e.onClose&&e.onClose(this,e);t&&(this.removeChild(e),e.destroyRecursive())},destroyDescendants:function(t){this._descendantsBeingDestroyed=!0,this.selectedChildWidget=void 0,e.forEach(this.getChildren(),function(e){t||this.removeChild(e),e.destroyRecursive(t)},this),this._descendantsBeingDestroyed=!1}});return p.ChildWidgetProperties={selected:!1,disabled:!1,closable:!1,iconClass:"dijitNoIcon",showTitle:!0},a.extend(c,p.ChildWidgetProperties),p});//# sourceMappingURL=StackContainer.js.map