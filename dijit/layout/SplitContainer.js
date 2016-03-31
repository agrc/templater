//>>built
define("dijit/layout/SplitContainer",["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/event","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/sniff","../registry","../_WidgetBase","./_LayoutWidget"],function(e,t,i,n,o,s,r,a,d,l,c,h,u,f,p,g){var m=i("dijit.layout.SplitContainer",g,{constructor:function(){l.deprecated("dijit.layout.SplitContainer is deprecated","use BorderContainer with splitter instead",2)},activeSizing:!1,sizerWidth:7,orientation:"horizontal",persist:!0,baseClass:"dijitSplitContainer",postMixInProperties:function(){this.inherited("postMixInProperties",arguments),this.isHorizontal="horizontal"==this.orientation},postCreate:function(){if(this.inherited(arguments),this.sizers=[],u("mozilla")&&(this.domNode.style.overflow="-moz-scrollbars-none"),"object"==typeof this.sizerWidth)try{this.sizerWidth=parseInt(this.sizerWidth.toString())}catch(e){this.sizerWidth=7}var t=this.ownerDocument.createElement("div");this.virtualSizer=t,t.style.position="relative",t.style.zIndex=10,t.className=this.isHorizontal?"dijitSplitContainerVirtualSizerH":"dijitSplitContainerVirtualSizerV",this.domNode.appendChild(t),n.setSelectable(t,!1)},destroy:function(){if(delete this.virtualSizer,this._ownconnects)for(var e;e=this._ownconnects.pop();)e.remove();this.inherited(arguments)},startup:function(){this._started||(e.forEach(this.getChildren(),function(e,t,i){this._setupChild(e),t<i.length-1&&this._addSizer()},this),this.persist&&this._restoreState(),this.inherited(arguments))},_setupChild:function(e){this.inherited(arguments),e.domNode.style.position="absolute",o.add(e.domNode,"dijitSplitPane")},_onSizerMouseDown:function(e){if(e.target.id){for(var t=0;t<this.sizers.length&&this.sizers[t].id!=e.target.id;t++);t<this.sizers.length&&this.beginSizing(e,t)}},_addSizer:function(e){e=void 0===e?this.sizers.length:e;var t=this.ownerDocument.createElement("div");t.id=f.getUniqueId("dijit_layout_SplitterContainer_Splitter"),this.sizers.splice(e,0,t),this.domNode.appendChild(t),t.className=this.isHorizontal?"dijitSplitContainerSizerH":"dijitSplitContainerSizerV";var i=this.ownerDocument.createElement("div");i.className="thumb",t.appendChild(i),this.connect(t,"onmousedown","_onSizerMouseDown"),n.setSelectable(t,!1)},removeChild:function(t){if(this.sizers.length){var i=e.indexOf(this.getChildren(),t);-1!=i&&(i==this.sizers.length&&i--,s.destroy(this.sizers[i]),this.sizers.splice(i,1))}this.inherited(arguments),this._started&&this.layout()},addChild:function(e,t){if("undefined"!=typeof t&&"last"!=t||(t=this.getChildren().length),this.inherited(arguments,[e,t]),this._started){var i=this.getChildren();i.length>1&&this._addSizer(t),this.layout()}},layout:function(){this.paneWidth=this._contentBox.w,this.paneHeight=this._contentBox.h;var t=this.getChildren();if(t.length){var i=this.isHorizontal?this.paneWidth:this.paneHeight;t.length>1&&(i-=this.sizerWidth*(t.length-1));var n=0;e.forEach(t,function(e){n+=e.sizeShare});var o=i/n,s=0;e.forEach(t.slice(0,t.length-1),function(e){var t=Math.round(o*e.sizeShare);e.sizeActual=t,s+=t}),t[t.length-1].sizeActual=i-s,this._checkSizes();var r=0,a=t[0].sizeActual;this._movePanel(t[0],r,a),t[0].position=r,r+=a,this.sizers&&e.some(t.slice(1),function(e,t){return this.sizers[t]?(this._moveSlider(this.sizers[t],r,this.sizerWidth),this.sizers[t].position=r,r+=this.sizerWidth,a=e.sizeActual,this._movePanel(e,r,a),e.position=r,void(r+=a)):!0},this)}},_movePanel:function(e,t,i){var n;this.isHorizontal?(e.domNode.style.left=t+"px",e.domNode.style.top=0,n={w:i,h:this.paneHeight},e.resize?e.resize(n):r.setMarginBox(e.domNode,n)):(e.domNode.style.left=0,e.domNode.style.top=t+"px",n={w:this.paneWidth,h:i},e.resize?e.resize(n):r.setMarginBox(e.domNode,n))},_moveSlider:function(e,t,i){this.isHorizontal?(e.style.left=t+"px",e.style.top=0,r.setMarginBox(e,{w:i,h:this.paneHeight})):(e.style.left=0,e.style.top=t+"px",r.setMarginBox(e,{w:this.paneWidth,h:i}))},_growPane:function(e,t){return e>0&&t.sizeActual>t.sizeMin&&(t.sizeActual-t.sizeMin>e?(t.sizeActual=t.sizeActual-e,e=0):(e-=t.sizeActual-t.sizeMin,t.sizeActual=t.sizeMin)),e},_checkSizes:function(){var t=0,i=0,n=this.getChildren();if(e.forEach(n,function(e){i+=e.sizeActual,t+=e.sizeMin}),i>=t){var o=0;if(e.forEach(n,function(e){e.sizeActual<e.sizeMin&&(o+=e.sizeMin-e.sizeActual,e.sizeActual=e.sizeMin)}),o>0){var s=this.isDraggingLeft?n.reverse():n;e.forEach(s,function(e){o=this._growPane(o,e)},this)}}else e.forEach(n,function(e){e.sizeActual=Math.round(i*(e.sizeMin/t))})},beginSizing:function(e,t){var i=this.getChildren();this.paneBefore=i[t],this.paneAfter=i[t+1],this.paneBefore.sizeBeforeDrag=this.paneBefore.sizeActual,this.paneAfter.sizeBeforeDrag=this.paneAfter.sizeActual,this.paneAfter.positionBeforeDrag=this.paneAfter.position,this.isSizing=!0,this.sizingSplitter=this.sizers[t],this.sizingSplitter.positionBeforeDrag=a.get(this.sizingSplitter,this.isHorizontal?"left":"top"),this.cover?this.cover.style.zIndex=5:this.cover=s.create("div",{style:{position:"absolute",zIndex:5,top:0,left:0,width:"100%",height:"100%"}},this.domNode),this.sizingSplitter.style.zIndex=6,this.startPoint=this.lastPoint=this.isHorizontal?e.pageX:e.pageY,this.maxDelta=this.paneAfter.sizeActual-this.paneAfter.sizeMin,this.minDelta=-1*(this.paneBefore.sizeActual-this.paneBefore.sizeMin),this.activeSizing||this._showSizingLine(),this._ownconnects=[h(this.ownerDocument.documentElement,"mousemove",c.hitch(this,"changeSizing")),h(this.ownerDocument.documentElement,"mouseup",c.hitch(this,"endSizing"))],d.stop(e)},changeSizing:function(e){if(this.isSizing){this.lastPoint=this.isHorizontal?e.pageX:e.pageY;var t=Math.max(Math.min(this.lastPoint-this.startPoint,this.maxDelta),this.minDelta);this.activeSizing?this._updateSize(t):this._moveSizingLine(t),d.stop(e)}},endSizing:function(){if(this.isSizing){this.cover&&(this.cover.style.zIndex=-1),this.activeSizing||this._hideSizingLine();var e=Math.max(Math.min(this.lastPoint-this.startPoint,this.maxDelta),this.minDelta);this._updateSize(e),this.isSizing=!1,this.persist&&this._saveState(this);for(var t;t=this._ownconnects.pop();)t.remove()}},_updateSize:function(t){this.paneBefore.sizeActual=this.paneBefore.sizeBeforeDrag+t,this.paneAfter.position=this.paneAfter.positionBeforeDrag+t,this.paneAfter.sizeActual=this.paneAfter.sizeBeforeDrag-t,e.forEach(this.getChildren(),function(e){e.sizeShare=e.sizeActual}),this._started&&this.layout()},_showSizingLine:function(){this._moveSizingLine(0),r.setMarginBox(this.virtualSizer,this.isHorizontal?{w:this.sizerWidth,h:this.paneHeight}:{w:this.paneWidth,h:this.sizerWidth}),this.virtualSizer.style.display="block"},_hideSizingLine:function(){this.virtualSizer.style.display="none"},_moveSizingLine:function(e){var t=e+this.sizingSplitter.positionBeforeDrag;a.set(this.virtualSizer,this.isHorizontal?"left":"top",t+"px")},_getCookieName:function(e){return this.id+"_"+e},_restoreState:function(){e.forEach(this.getChildren(),function(e,i){var n=this._getCookieName(i),o=t(n);if(o){var s=parseInt(o);"number"==typeof s&&(e.sizeShare=s)}},this)},_saveState:function(){this.persist&&e.forEach(this.getChildren(),function(e,i){t(this._getCookieName(i),e.sizeShare,{expires:365})},this)}});return m.ChildWidgetProperties={sizeMin:10,sizeShare:10},c.extend(p,m.ChildWidgetProperties),m});//# sourceMappingURL=SplitContainer.js.map