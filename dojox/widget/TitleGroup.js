//>>built
define("dojox/widget/TitleGroup",["dojo","dijit/registry","dijit/_Widget","dijit/TitlePane"],function(e,t,i,a){var o=a.prototype,n=function(){var e=this._dxfindParent&&this._dxfindParent();e&&e.selectChild(this)};return o._dxfindParent=function(){var e=this.domNode.parentNode;return e?(e=t.getEnclosingWidget(e))&&e instanceof dojox.widget.TitleGroup&&e:e},e.connect(o,"_onTitleClick",n),e.connect(o,"_onTitleKey",function(t){t&&t.type&&"keypress"==t.type&&t.charOrCode==e.keys.TAB||n.apply(this,arguments)}),e.declare("dojox.widget.TitleGroup",dijit._Widget,{class:"dojoxTitleGroup",addChild:function(e,t){return e.placeAt(this.domNode,t)},removeChild:function(e){return this.domNode.removeChild(e.domNode),e},selectChild:function(i){return i&&e.query("> .dijitTitlePane",this.domNode).forEach(function(e){var a=t.byNode(e);a&&a!==i&&a.open&&a.toggle()}),i}})});//# sourceMappingURL=TitleGroup.js.map