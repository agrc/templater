//>>built
define("dojox/mobile/Tooltip",["dojo/_base/array","dijit/registry","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/place","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip"],function(e,t,i,a,o,n,r,s,l,d,h,c){var u=i(h("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",d,{baseClass:"mblTooltip mblTooltipHidden",buildRendering:function(){this.inherited(arguments),this.anchor=n.create("div",{"class":"mblTooltipAnchor"},this.domNode,"first"),this.arrow=n.create("div",{"class":"mblTooltipArrow"},this.anchor),this.innerArrow=n.create("div",{"class":"mblTooltipInnerArrow"},this.anchor),this.containerNode||(this.containerNode=this.domNode)},show:function(i,n){var d=this.domNode,h={MRM:"mblTooltipAfter",MLM:"mblTooltipBefore",BMT:"mblTooltipBelow",TMB:"mblTooltipAbove",BLT:"mblTooltipBelow",TLB:"mblTooltipAbove",BRT:"mblTooltipBelow",TRB:"mblTooltipAbove",TLT:"mblTooltipBefore",TRT:"mblTooltipAfter",BRB:"mblTooltipAfter",BLB:"mblTooltipBefore"};o.remove(d,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]),e.forEach(t.findWidgets(d),function(e){"auto"==e.height&&"function"==typeof e.resize&&(e._parentPadBorderExtentsBottom||(e._parentPadBorderExtentsBottom=r.getPadBorderExtents(d).b),e.resize())}),n&&(n=e.map(n,function(e){return{after:"after-centered",before:"before-centered"}[e]||e}));var c=l.around(d,i,n||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight()),u=h[c.corner+c.aroundCorner.charAt(0)]||"";o.add(d,u);var m=r.position(i,!0);return s.set(this.anchor,"mblTooltipAbove"==u||"mblTooltipBelow"==u?{top:"",left:Math.max(0,m.x-c.x+(m.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",top:Math.max(0,m.y-c.y+(m.h>>1)-(this.arrow.offsetHeight>>1))+"px"}),o.replace(d,"mblTooltipVisible","mblTooltipHidden"),this.resize=a.hitch(this,"show",i,n),c},hide:function(){this.resize=void 0,o.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible")},onBlur:function(e){return!0},destroy:function(){this.anchor&&(this.anchor.removeChild(this.innerArrow),this.anchor.removeChild(this.arrow),this.domNode.removeChild(this.anchor),this.anchor=this.arrow=this.innerArrow=void 0),this.inherited(arguments)}});return h("dojo-bidi")?i("dojox.mobile.Tooltip",[u,c]):u});//# sourceMappingURL=Tooltip.js.map