//>>built
define("dijit/_Widget",["dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/query","dojo/ready","./registry","./_WidgetBase","./_OnDijitClickMixin","./_FocusMixin","dojo/uacss","./hccss"],function(t,e,o,i,n,s,d,a,r,c,h,u,l){function f(){}function p(t){return function(e,i,n,s){return e&&"string"==typeof i&&e[i]==f?e.on(i.substring(2).toLowerCase(),d.hitch(n,s)):t.apply(o,arguments)}}t.around(o,"connect",p),s.connect&&t.around(s,"connect",p);var j=i("dijit._Widget",[h,u,l],{onClick:f,onDblClick:f,onKeyDown:f,onKeyPress:f,onKeyUp:f,onMouseDown:f,onMouseMove:f,onMouseOut:f,onMouseOver:f,onMouseLeave:f,onMouseEnter:f,onMouseUp:f,constructor:function(t){this._toConnect={};for(var e in t)this[e]===f&&(this._toConnect[e.replace(/^on/,"").toLowerCase()]=t[e],delete t[e])},postCreate:function(){this.inherited(arguments);for(var t in this._toConnect)this.on(t,this._toConnect[t]);delete this._toConnect},on:function(t,e){return this[this._onMap(t)]===f?o.connect(this.domNode,t.toLowerCase(),this,e):this.inherited(arguments)},_setFocusedAttr:function(t){this._focused=t,this._set("focused",t)},setAttribute:function(t,e){s.deprecated(this.declaredClass+"::setAttribute(attr, value) is deprecated. Use set() instead.","","2.0"),this.set(t,e)},attr:function(t,e){var o=arguments.length;return o>=2||"object"==typeof t?this.set.apply(this,arguments):this.get(t)},getDescendants:function(){return s.deprecated(this.declaredClass+"::getDescendants() is deprecated. Use getChildren() instead.","","2.0"),this.containerNode?a("[widgetId]",this.containerNode).map(c.byNode):[]},_onShow:function(){this.onShow()},onShow:function(){},onHide:function(){},onClose:function(){return!0}});return n("dijit-legacy-requires")&&r(0,function(){var t=["dijit/_base"];require(t)}),j});//# sourceMappingURL=_Widget.js.map