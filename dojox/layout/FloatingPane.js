//>>built
require({cache:{"url:dojox/layout/resources/FloatingPane.html":'<div class="dojoxFloatingPane" id="${id}">\n	<div tabindex="0" role="button" class="dojoxFloatingPaneTitle" dojoAttachPoint="focusNode">\n		<span dojoAttachPoint="closeNode" dojoAttachEvent="onclick: close" class="dojoxFloatingCloseIcon"></span>\n		<span dojoAttachPoint="maxNode" dojoAttachEvent="onclick: maximize" class="dojoxFloatingMaximizeIcon">&thinsp;</span>\n		<span dojoAttachPoint="restoreNode" dojoAttachEvent="onclick: _restore" class="dojoxFloatingRestoreIcon">&thinsp;</span>	\n		<span dojoAttachPoint="dockNode" dojoAttachEvent="onclick: minimize" class="dojoxFloatingMinimizeIcon">&thinsp;</span>\n		<span dojoAttachPoint="titleNode" class="dijitInline dijitTitleNode"></span>\n	</div>\n	<div dojoAttachPoint="canvas" class="dojoxFloatingPaneCanvas">\n		<div dojoAttachPoint="containerNode" role="region" tabindex="-1" class="${contentClass}">\n		</div>\n		<span dojoAttachPoint="resizeHandle" class="dojoxFloatingResizeHandle"></span>\n	</div>\n</div>\n'}}),define("dojox/layout/FloatingPane",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","dojo/_base/declare","dojo/_base/fx","dojo/_base/connect","dojo/_base/array","dojo/_base/sniff","dojo/window","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/_TemplatedMixin","dijit/_Widget","dijit/BackgroundIframe","dojo/dnd/Moveable","./ContentPane","./ResizeHandle","dojo/text!./resources/FloatingPane.html","./Dock"],function(e,t,i,a,o,r,n,s,l,d,h,u,c,m,f,p,g,v,y,b,x){e.experimental("dojox.layout.FloatingPane");var _=a("dojox.layout.FloatingPane",[v,m],{closable:!0,dockable:!0,resizable:!1,maxable:!1,resizeAxis:"xy",title:"",dockTo:"",duration:400,contentClass:"dojoxFloatingPaneContent",_showAnim:null,_hideAnim:null,_dockNode:null,_restoreState:{},_allFPs:[],_startZ:100,templateString:b,attributeMap:t.delegate(f.prototype.attributeMap,{title:{type:"innerHTML",node:"titleNode"}}),postCreate:function(){this.inherited(arguments),new g(this.domNode,{handle:this.focusNode}),this.dockable||(this.dockNode.style.display="none"),this.closable||(this.closeNode.style.display="none"),this.maxable||(this.maxNode.style.display="none",this.restoreNode.style.display="none"),this.resizable?this.domNode.style.width=u.getMarginBox(this.domNode).w+"px":this.resizeHandle.style.display="none",this._allFPs.push(this),this.domNode.style.position="absolute",this.bgIframe=new p(this.domNode),this._naturalState=u.position(this.domNode)},startup:function(){if(!this._started){if(this.inherited(arguments),this.resizable&&(s("ie")?this.canvas.style.overflow="auto":this.containerNode.style.overflow="auto",this._resizeHandle=new y({targetId:this.id,resizeAxis:this.resizeAxis},this.resizeHandle)),this.dockable){var e=this.dockTo;if(this.dockTo?this.dockTo=dijit.byId(this.dockTo):this.dockTo=dijit.byId("dojoxGlobalFloatingDock"),!this.dockTo){var t,a;e?(t=e,a=d.byId(e)):(a=c.create("div",null,i.body()),h.add(a,"dojoxFloatingDockDefault"),t="dojoxGlobalFloatingDock"),this.dockTo=new x({id:t,autoPosition:"south"},a),this.dockTo.startup()}"none"!=this.domNode.style.display&&"hidden"!=this.domNode.style.visibility||this.minimize()}this.connect(this.focusNode,"onmousedown","bringToTop"),this.connect(this.domNode,"onmousedown","bringToTop"),this.resize(u.position(this.domNode)),this._started=!0}},setTitle:function(t){e.deprecated("pane.setTitle","Use pane.set('title', someTitle)","2.0"),this.set("title",t)},close:function(){this.closable&&(r.unsubscribe(this._listener),this.hide(t.hitch(this,function(){this.destroyRecursive()})))},hide:function(e){o.fadeOut({node:this.domNode,duration:this.duration,onEnd:t.hitch(this,function(){this.domNode.style.display="none",this.domNode.style.visibility="hidden",this.dockTo&&this.dockable&&this.dockTo._positionDock(null),e&&e()})}).play()},show:function(e){var i=(o.fadeIn({node:this.domNode,duration:this.duration,beforeBegin:t.hitch(this,function(){this.domNode.style.display="",this.domNode.style.visibility="visible",this.dockTo&&this.dockable&&this.dockTo._positionDock(null),"function"==typeof e&&e(),this._isDocked=!1,this._dockNode&&(this._dockNode.destroy(),this._dockNode=null)})}).play(),u.getContentBox(this.domNode));this.resize(t.mixin(u.position(this.domNode),{w:i.w,h:i.h})),this._onShow()},minimize:function(){this._isDocked||this.hide(t.hitch(this,"_dock"))},maximize:function(){this._maximized||(this._naturalState=u.position(this.domNode),this._isDocked&&(this.show(),setTimeout(t.hitch(this,"maximize"),this.duration)),h.add(this.focusNode,"floatingPaneMaximized"),this.resize(l.getBox()),this._maximized=!0)},_restore:function(){this._maximized&&(this.resize(this._naturalState),h.remove(this.focusNode,"floatingPaneMaximized"),this._maximized=!1)},_dock:function(){!this._isDocked&&this.dockable&&(this._dockNode=this.dockTo.addNode(this),this._isDocked=!0)},resize:function(e){e=e||this._naturalState,this._naturalState=e;var t=this.domNode.style;"t"in e?t.top=e.t+"px":"y"in e&&(t.top=e.y+"px"),"l"in e?t.left=e.l+"px":"x"in e&&(t.left=e.x+"px"),t.width=e.w+"px",t.height=e.h+"px";var i={l:0,t:0,w:e.w,h:e.h-this.focusNode.offsetHeight};u.setMarginBox(this.canvas,i),this._checkIfSingleChild(),this._singleChild&&this._singleChild.resize&&this._singleChild.resize(i)},bringToTop:function(){var e=n.filter(this._allFPs,function(e){return e!==this},this);e.sort(function(e,t){return e.domNode.style.zIndex-t.domNode.style.zIndex}),e.push(this),n.forEach(e,function(e,t){e.domNode.style.zIndex=this._startZ+2*t,h.remove(e.domNode,"dojoxFloatingPaneFg")},this),h.add(this.domNode,"dojoxFloatingPaneFg")},destroy:function(){this._allFPs.splice(n.indexOf(this._allFPs,this),1),this._resizeHandle&&this._resizeHandle.destroy(),this.inherited(arguments)}});return _});//# sourceMappingURL=FloatingPane.js.map