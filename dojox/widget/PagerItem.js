//>>built
define("dojox/widget/PagerItem",["dojo/_base/declare","dojo/dom-geometry","dojo/dom-style","dojo/parser","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(e,t,i,r,o,a){return e("dojox.widget._PagerItem",[o,a],{templateString:'<li class="pagerItem" data-dojo-attach-point="containerNode"></li>',resizeChildren:function(){var e=t.getMarginBox(this.containerNode);i.set(this.containerNode.firstChild,{width:e.w+"px",height:e.h+"px"})},parseChildren:function(){r.parse(this.containerNode)}})});//# sourceMappingURL=PagerItem.js.map