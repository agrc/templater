//>>built
define("dojox/mobile/Opener",["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","./Tooltip","./Overlay","./lazyLoadUtils"],function(e,t,i,a,r,o,n,s,l,d,u){var h=r.contains(a.doc.documentElement,"dj_phone"),c=e("dojox.mobile.Opener",h?d:l,{lazy:!1,requires:"",buildRendering:function(){this.inherited(arguments),this.cover=o.create("div",{onclick:i.hitch(this,"_onBlur"),"class":"mblOpenerUnderlay",style:{position:h?"absolute":"fixed",backgroundColor:"transparent",overflow:"hidden",zIndex:"-1"}},this.domNode,"first")},onShow:function(e){},onHide:function(e,t){},show:function(e,i){if(this.lazy){this.lazy=!1;var a=this;return t.when(u.instantiateLazyWidgets(this.domNode,this.requires),function(){return a.show(e,i)})}return this.node=e,this.onShow(e),n.set(this.cover,{top:"0px",left:"0px",width:"0px",height:"0px"}),this._resizeCover(s.position(this.domNode,!1)),this.inherited(arguments)},hide:function(e){this.inherited(arguments),this.onHide(this.node,e)},_reposition:function(){var e=this.inherited(arguments);return this._resizeCover(e),e},_resizeCover:function(e){if(h){if(parseInt(n.get(this.cover,"top"))!=-e.y||parseInt(n.get(this.cover,"height"))!=e.y){var t=Math.max(e.x,0);n.set(this.cover,{top:-e.y+"px",left:-t+"px",width:e.w+t+"px",height:e.y+"px"})}}else n.set(this.cover,{width:Math.max(a.doc.documentElement.scrollWidth||a.body().scrollWidth||a.doc.documentElement.clientWidth)+"px",height:Math.max(a.doc.documentElement.scrollHeight||a.body().scrollHeight||a.doc.documentElement.clientHeight)+"px"})},_onBlur:function(e){var t=this.onBlur(e);return t!==!1&&this.hide(e),t}});return c.prototype.baseClass+=" mblOpener",c});//# sourceMappingURL=Opener.js.map