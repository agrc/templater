//>>built
define("dojox/layout/RotatorContainer",["dojo/_base/declare","dojo/_base/html","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/fx","dijit/_base/manager","dijit/layout/StackContainer","dijit/layout/StackController","dijit/_Widget","dijit/_Templated","dijit/_Contained"],function(e,t,i,a,r,o,n,s,l,d,h,c,u){var m=e("dojox.layout.RotatorContainer",[l,c],{templateString:'<div class="dojoxRotatorContainer"><div dojoAttachPoint="tabNode"></div><div class="dojoxRotatorPager" dojoAttachPoint="pagerNode"></div><div class="dojoxRotatorContent" dojoAttachPoint="containerNode"></div></div>',showTabs:!0,transitionDelay:5e3,transition:"fade",transitionDuration:1e3,autoStart:!0,suspendOnHover:!1,pauseOnManualChange:null,reverse:!1,pagerId:"",cycles:-1,pagerClass:"dojox.layout.RotatorPager",postCreate:function(){this.inherited(arguments),t.style(this.domNode,"position","relative"),this.cycles-0==this.cycles&&-1!=this.cycles?this.cycles++:this.cycles=-1,null===this.pauseOnManualChange&&(this.pauseOnManualChange=!this.suspendOnHover);var e=this.id||"rotator"+(new Date).getTime(),a=new d({containerId:e},this.tabNode);this.tabNode=a.domNode,this._stackController=a,t.style(this.tabNode,"display",this.showTabs?"":"none"),this.connect(a,"onButtonClick","_manualChange"),this._subscriptions=[i.subscribe(this.id+"-cycle",this,"_cycle"),i.subscribe(this.id+"-state",this,"_state")];var r=Math.round(.75*this.transitionDelay);r<this.transitionDuration&&(this.transitionDuration=r),this.suspendOnHover&&(this.connect(this.domNode,"onmouseover","_onMouseOver"),this.connect(this.domNode,"onmouseout","_onMouseOut"))},startup:function(){if(!this._started){for(var e=this.getChildren(),t=0,i=e.length;i>t;t++)if(e[t].declaredClass==this.pagerClass){this.pagerNode.appendChild(e[t].domNode);break}this.inherited(arguments),this.autoStart?setTimeout(a.hitch(this,"_play"),10):this._updatePager()}},destroy:function(){r.forEach(this._subscriptions,i.unsubscribe),this.inherited(arguments)},_setShowTabsAttr:function(e){this.showTabs=e,t.style(this.tabNode,"display",e?"":"none")},_updatePager:function(){var e=this.getChildren();i.publish(this.id+"-update",[this._playing,r.indexOf(e,this.selectedChildWidget)+1,e.length])},_onMouseOver:function(){this._resetTimer(),this._over=!0},_onMouseOut:function(){this._over=!1,this._playing&&(clearTimeout(this._timer),this._timer=setTimeout(a.hitch(this,"_play",!0),200))},_resetTimer:function(){clearTimeout(this._timer),this._timer=null},_cycle:function(e){(e instanceof Boolean||"boolean"==typeof e)&&this._manualChange();var t=this.getChildren(),i=t.length,a=r.indexOf(t,this.selectedChildWidget)+(e===!1||e!==!0&&this.reverse?-1:1);this.selectChild(t[i>a?0>a?i-1:a:0]),this._updatePager()},_manualChange:function(){this.pauseOnManualChange&&(this._playing=!1),this.cycles=-1},_play:function(e){this._playing=!0,this._resetTimer(),e!==!0&&this.cycles>0&&this.cycles--,0==this.cycles?this._pause():this.suspendOnHover&&this._over||!this.transitionDelay||(this._timer=setTimeout(a.hitch(this,"_cycle"),this.selectedChildWidget.domNode.getAttribute("transitionDelay")||this.transitionDelay)),this._updatePager()},_pause:function(){this._playing=!1,this._resetTimer()},_state:function(e){e?(this.cycles=-1,this._play()):this._pause()},_transition:function(e,t){if(this._resetTimer(),t&&this.transitionDuration)switch(this.transition){case"fade":return void this._fade(e,t)}this._transitionEnd(),this.inherited(arguments)},_transitionEnd:function(){this._playing?this._play():this._updatePager()},_fade:function(e,t){this._styleNode(t.domNode,1,1),this._styleNode(e.domNode,0,2),this._showChild(e),this.doLayout&&e.resize&&e.resize(this._containerContentBox||this._contentBox);var i={duration:this.transitionDuration},r=n.combine([o.fadeOut(a.mixin({node:t.domNode},i)),o.fadeIn(a.mixin({node:e.domNode},i))]);this.connect(r,"onEnd",a.hitch(this,function(){this._hideChild(t),this._transitionEnd()})),r.play()},_styleNode:function(e,i,a){t.style(e,"opacity",i),t.style(e,"zIndex",a),t.style(e,"position","absolute")}});return e("dojox.layout.RotatorPager",[h,c,u],{widgetsInTemplate:!0,rotatorId:"",postMixInProperties:function(){this.templateString="<div>"+this.srcNodeRef.innerHTML+"</div>"},postCreate:function(){var e=s.byId(this.rotatorId)||this.getParent();e&&"dojox.layout.RotatorContainer"==e.declaredClass&&(this.previous&&i.connect(this.previous,"onClick",function(){i.publish(e.id+"-cycle",[!1])}),this.next&&i.connect(this.next,"onClick",function(){i.publish(e.id+"-cycle",[!0])}),this.playPause&&i.connect(this.playPause,"onClick",function(){this.set("label",this.checked?"Pause":"Play"),i.publish(e.id+"-state",[this.checked])}),this._subscriptions=[i.subscribe(e.id+"-state",this,"_state"),i.subscribe(e.id+"-update",this,"_update")])},destroy:function(){r.forEach(this._subscriptions,i.unsubscribe),this.inherited(arguments)},_state:function(e){this.playPause&&this.playPause.checked!=e&&(this.playPause.set("label",e?"Pause":"Play"),this.playPause.set("checked",e))},_update:function(e,t,i){this._state(e),this.current&&t&&(this.current.innerHTML=t),this.total&&i&&(this.total.innerHTML=i)}}),m});//# sourceMappingURL=RotatorContainer.js.map