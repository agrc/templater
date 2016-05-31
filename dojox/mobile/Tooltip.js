//>>built
define("dojox/mobile/Tooltip",["dojo/_base/array","dijit/registry","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/place","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip"],function(e,t,i,a,r,o,n,s,l,d,u,h){var c=i(u("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",d,{baseClass:"mblTooltip mblTooltipHidden",buildRendering:function(){this.inherited(arguments),this.anchor=o.create("div",{"class":"mblTooltipAnchor"},this.domNode,"first"),this.arrow=o.create("div",{"class":"mblTooltipArrow"},this.anchor),this.innerArrow=o.create("div",{"class":"mblTooltipInnerArrow"},this.anchor),this.containerNode||(this.containerNode=this.domNode)},show:function(i,o){var d=this.domNode,u={MRM:"mblTooltipAfter",MLM:"mblTooltipBefore",BMT:"mblTooltipBelow",TMB:"mblTooltipAbove",BLT:"mblTooltipBelow",TLB:"mblTooltipAbove",BRT:"mblTooltipBelow",TRB:"mblTooltipAbove",TLT:"mblTooltipBefore",TRT:"mblTooltipAfter",BRB:"mblTooltipAfter",BLB:"mblTooltipBefore"};r.remove(d,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]),e.forEach(t.findWidgets(d),function(e){"auto"==e.height&&"function"==typeof e.resize&&(e._parentPadBorderExtentsBottom||(e._parentPadBorderExtentsBottom=n.getPadBorderExtents(d).b),e.resize())}),o&&(o=e.map(o,function(e){return{after:"after-centered",before:"before-centered"}[e]||e}));var h=l.around(d,i,o||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight()),c=u[h.corner+h.aroundCorner.charAt(0)]||"";r.add(d,c);var m=n.position(i,!0);return s.set(this.anchor,"mblTooltipAbove"==c||"mblTooltipBelow"==c?{top:"",left:Math.max(0,m.x-h.x+(m.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",top:Math.max(0,m.y-h.y+(m.h>>1)-(this.arrow.offsetHeight>>1))+"px"}),r.replace(d,"mblTooltipVisible","mblTooltipHidden"),this.resize=a.hitch(this,"show",i,o),h},hide:function(){this.resize=void 0,r.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible")},onBlur:function(e){return!0},destroy:function(){this.anchor&&(this.anchor.removeChild(this.innerArrow),this.anchor.removeChild(this.arrow),this.domNode.removeChild(this.anchor),this.anchor=this.arrow=this.innerArrow=void 0),this.inherited(arguments)}});return u("dojo-bidi")?i("dojox.mobile.Tooltip",[c,h]):c});//# sourceMappingURL=Tooltip.js.map