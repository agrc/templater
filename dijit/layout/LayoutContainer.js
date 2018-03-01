//>>built
define("dijit/layout/LayoutContainer",["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-style","dojo/_base/lang","../_WidgetBase","./_LayoutWidget","./utils"],function(t,e,i,n,o,a,s,r){var d=e("dijit.layout.LayoutContainer",s,{design:"headline",baseClass:"dijitLayoutContainer",startup:function(){this._started||(t.forEach(this.getChildren(),this._setupChild,this),this.inherited(arguments))},_setupChild:function(t){this.inherited(arguments),t.region&&i.add(t.domNode,this.baseClass+"Pane")},_getOrderedChildren:function(){var e=t.map(this.getChildren(),function(t,e){return{pane:t,weight:["center"==t.region?1/0:0,t.layoutPriority,("sidebar"==this.design?1:-1)*(/top|bottom/.test(t.region)?1:-1),e]}},this);return e.sort(function(t,e){for(var i=t.weight,n=e.weight,o=0;o<i.length;o++)if(i[o]!=n[o])return i[o]-n[o];return 0}),t.map(e,function(t){return t.pane})},layout:function(){r.layoutChildren(this.domNode,this._contentBox,this._getOrderedChildren())},addChild:function(t,e){this.inherited(arguments),this._started&&this.layout()},removeChild:function(t){this.inherited(arguments),this._started&&this.layout(),i.remove(t.domNode,this.baseClass+"Pane"),n.set(t.domNode,{top:"auto",bottom:"auto",left:"auto",right:"auto",position:"static"}),n.set(t.domNode,/top|bottom/.test(t.region)?"width":"height","auto")}});return d.ChildWidgetProperties={region:"",layoutAlign:"",layoutPriority:0},o.extend(a,d.ChildWidgetProperties),d});//# sourceMappingURL=LayoutContainer.js.map