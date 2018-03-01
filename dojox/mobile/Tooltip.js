//>>built
define("dojox/mobile/Tooltip",["dojo/_base/array","dijit/registry","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/place","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip"],function(e,t,i,a,o,r,n,s,l,d,h,u){var c=i(h("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",d,{baseClass:"mblTooltip mblTooltipHidden",buildRendering:function(){this.inherited(arguments),this.anchor=r.create("div",{class:"mblTooltipAnchor"},this.domNode,"first"),this.arrow=r.create("div",{class:"mblTooltipArrow"},this.anchor),this.innerArrow=r.create("div",{class:"mblTooltipInnerArrow"},this.anchor),this.containerNode||(this.containerNode=this.domNode)},show:function(i,r){var d=this.domNode,h={MRM:"mblTooltipAfter",MLM:"mblTooltipBefore",BMT:"mblTooltipBelow",TMB:"mblTooltipAbove",BLT:"mblTooltipBelow",TLB:"mblTooltipAbove",BRT:"mblTooltipBelow",TRB:"mblTooltipAbove",TLT:"mblTooltipBefore",TRT:"mblTooltipAfter",BRB:"mblTooltipAfter",BLB:"mblTooltipBefore"};o.remove(d,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]),e.forEach(t.findWidgets(d),function(e){"auto"==e.height&&"function"==typeof e.resize&&(e._parentPadBorderExtentsBottom||(e._parentPadBorderExtentsBottom=n.getPadBorderExtents(d).b),e.resize())}),r&&(r=e.map(r,function(e){return{after:"after-centered",before:"before-centered"}[e]||e}));var u=l.around(d,i,r||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight()),c=h[u.corner+u.aroundCorner.charAt(0)]||"";o.add(d,c);var m=n.position(i,!0);return s.set(this.anchor,"mblTooltipAbove"==c||"mblTooltipBelow"==c?{top:"",left:Math.max(0,m.x-u.x+(m.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",top:Math.max(0,m.y-u.y+(m.h>>1)-(this.arrow.offsetHeight>>1))+"px"}),o.replace(d,"mblTooltipVisible","mblTooltipHidden"),this.resize=a.hitch(this,"show",i,r),u},hide:function(){this.resize=void 0,o.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible")},onBlur:function(e){return!0},destroy:function(){this.anchor&&(this.anchor.removeChild(this.innerArrow),this.anchor.removeChild(this.arrow),this.domNode.removeChild(this.anchor),this.anchor=this.arrow=this.innerArrow=void 0),this.inherited(arguments)}});return h("dojo-bidi")?i("dojox.mobile.Tooltip",[c,u]):c});//# sourceMappingURL=Tooltip.js.map