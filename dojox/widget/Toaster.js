//>>built
define("dojox/widget/Toaster",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/fx","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dijit/registry","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/BackgroundIframe","dojo/fx","dojo/has","dojo/_base/window","dojo/window"],function(e,t,i,o,a,n,r,s,d,l,h,c,u,m,f){t.getObject("dojox.widget",!0);var p=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)};return e("dojox.widget.Toaster",[d,l],{templateString:'<div class="dijitToasterClip" dojoAttachPoint="clipNode"><div class="dijitToasterContainer" dojoAttachPoint="containerNode" dojoAttachEvent="onclick:onSelect"><div class="dijitToasterContent" dojoAttachPoint="contentNode"></div></div></div>',messageTopic:"",messageTypes:{MESSAGE:"message",WARNING:"warning",ERROR:"error",FATAL:"fatal"},defaultType:"message",positionDirection:"br-up",positionDirectionTypes:["br-up","br-left","bl-up","bl-right","tr-down","tr-left","tl-down","tl-right"],duration:2e3,slideDuration:500,separator:"<hr></hr>",postCreate:function(){this.inherited(arguments),this.hide(),m.body().appendChild(this.domNode),this.messageTopic&&i.subscribe(this.messageTopic,this,"_handleMessage")},_handleMessage:function(e){t.isString(e)?this.setContent(e):this.setContent(e.message,e.type,e.duration)},setContent:function(e,i,s){if(s=void 0===s?this.duration:s,this.slideAnim&&("playing"!=this.slideAnim.status()&&this.slideAnim.stop(),"playing"==this.slideAnim.status()||this.fadeAnim&&"playing"==this.fadeAnim.status()))return void setTimeout(t.hitch(this,function(){this.setContent(e,i,s)}),50);for(var d in this.messageTypes)n.remove(this.containerNode,"dijitToaster"+p(this.messageTypes[d]));a.set(this.containerNode,"opacity",1),this._setContent(e),n.add(this.containerNode,"dijitToaster"+p(i||this.defaultType)),this.show();var l=r.getMarginBox(this.containerNode);if(this._cancelHideTimer(),this.isVisible)this._placeClip(),this._stickyMessage||this._setHideTimer(s);else{var h=this.containerNode.style,u=this.positionDirection;if(u.indexOf("-up")>=0)h.left="0px",h.top=l.h+10+"px";else if(u.indexOf("-left")>=0)h.left=l.w+10+"px",h.top="0px";else if(u.indexOf("-right")>=0)h.left=0-l.w-10+"px",h.top="0px";else{if(!(u.indexOf("-down")>=0))throw new Error(this.id+".positionDirection is invalid: "+u);h.left="0px",h.top=0-l.h-10+"px"}this.slideAnim=c.slideTo({node:this.containerNode,top:0,left:0,duration:this.slideDuration}),this.connect(this.slideAnim,"onEnd",function(e,t){this.fadeAnim=o.fadeOut({node:this.containerNode,duration:1e3}),this.connect(this.fadeAnim,"onEnd",function(e){this.isVisible=!1,this.hide()}),this._setHideTimer(s),this.connect(this,"onSelect",function(e){this._cancelHideTimer(),this._stickyMessage=!1,this.fadeAnim.play()}),this.isVisible=!0}),this.slideAnim.play()}},_setContent:function(e){return t.isFunction(e)?void e(this):(e&&this.isVisible&&(e=this.contentNode.innerHTML+this.separator+e),void(this.contentNode.innerHTML=e))},_cancelHideTimer:function(){this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=null)},_setHideTimer:function(e){this._cancelHideTimer(),e>0?(this._cancelHideTimer(),this._hideTimer=setTimeout(t.hitch(this,function(e){this.bgIframe&&this.bgIframe.iframe&&(this.bgIframe.iframe.style.display="none"),this._hideTimer=null,this._stickyMessage=!1,this.fadeAnim.play()}),e)):this._stickyMessage=!0},_placeClip:function(){var e=f.getBox(),t=r.getMarginBox(this.containerNode),i=this.clipNode.style;i.height=t.h+"px",i.width=t.w+"px";var o=this.positionDirection;if(o.match(/^t/)?i.top=e.t+"px":o.match(/^b/)&&(i.top=e.h-t.h-2+e.t+"px"),o.match(/^[tb]r-/)?i.left=e.w-t.w-1-e.l+"px":o.match(/^[tb]l-/)?i.left="0px":o.match(/^[tb]c-/)&&(i.left=Math.round((e.w-t.w-1-e.l)/2)+"px"),i.clip="rect(0px, "+t.w+"px, "+t.h+"px, 0px)",u("ie")){this.bgIframe||(this.clipNode.id||(this.clipNode.id=s.getUniqueId("dojox_widget_Toaster_clipNode")),this.bgIframe=new h(this.clipNode));var a=this.bgIframe.iframe;a&&(a.style.display="block")}},onSelect:function(e){},show:function(){a.set(this.domNode,"display","block"),this._placeClip(),this._scrollConnected||(this._scrollConnected=i.connect(f,"onscroll",this,this._placeClip))},hide:function(){a.set(this.domNode,"display","none"),this._scrollConnected&&(i.disconnect(this._scrollConnected),this._scrollConnected=!1),a.set(this.containerNode,"opacity",1)}})});//# sourceMappingURL=Toaster.js.map