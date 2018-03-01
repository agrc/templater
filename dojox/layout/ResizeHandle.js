//>>built
define("dojox/layout/ResizeHandle",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/event","dojo/_base/fx","dojo/_base/window","dojo/fx","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/declare","dojo/touch","dijit/_base/manager","dijit/_Widget","dijit/_TemplatedMixin"],function(e,t,i,a,o,n,r,s,l,d,h,u,c,m,f,p,g){e.experimental("dojox.layout.ResizeHandle");var v=c("dojox.layout._ResizeHelper",p,{show:function(){u.set(this.domNode,"display","")},hide:function(){u.set(this.domNode,"display","none")},resize:function(e){h.setMarginBox(this.domNode,e)}});return c("dojox.layout.ResizeHandle",[p,g],{targetId:"",targetContainer:null,resizeAxis:"xy",activeResize:!1,activeResizeClass:"dojoxResizeHandleClone",animateSizing:!0,animateMethod:"chain",animateDuration:225,minHeight:100,minWidth:100,constrainMax:!1,maxHeight:0,maxWidth:0,fixedAspect:!1,intermediateChanges:!1,startTopic:"/dojo/resize/start",endTopic:"/dojo/resize/stop",templateString:'<div dojoAttachPoint="resizeHandle" class="dojoxResizeHandle"><div></div></div>',postCreate:function(){this.connect(this.resizeHandle,m.press,"_beginSizing"),this.activeResize?this.animateSizing=!1:(this._resizeHelper=f.byId("dojoxGlobalResizeHelper"),this._resizeHelper||(this._resizeHelper=new v({id:"dojoxGlobalResizeHelper"}).placeAt(r.body()),d.add(this._resizeHelper.domNode,this.activeResizeClass))),this.minSize||(this.minSize={w:this.minWidth,h:this.minHeight}),this.constrainMax&&(this.maxSize={w:this.maxWidth,h:this.maxHeight}),this._resizeX=this._resizeY=!1;var e=t.partial(d.add,this.resizeHandle);switch(this.resizeAxis.toLowerCase()){case"xy":this._resizeX=this._resizeY=!0,e("dojoxResizeNW");break;case"x":this._resizeX=!0,e("dojoxResizeW");break;case"y":this._resizeY=!0,e("dojoxResizeN")}},_beginSizing:function(e){if(!this._isSizing&&(i.publish(this.startTopic,[this]),this.targetWidget=f.byId(this.targetId),this.targetDomNode=this.targetWidget?this.targetWidget.domNode:l.byId(this.targetId),this.targetContainer&&(this.targetDomNode=this.targetContainer),this.targetDomNode)){if(!this.activeResize){var t=h.position(this.targetDomNode,!0);this._resizeHelper.resize({l:t.x,t:t.y,w:t.w,h:t.h}),this._resizeHelper.show(),this.isLeftToRight()||(this._resizeHelper.startPosition={l:t.x,t:t.y})}this._isSizing=!0,this.startPoint={x:e.clientX,y:e.clientY};var a=u.getComputedStyle(this.targetDomNode),n="border-model"===h.boxModel,s=n?{w:0,h:0}:h.getPadBorderExtents(this.targetDomNode,a),d=h.getMarginExtents(this.targetDomNode,a);if(this.startSize={w:u.get(this.targetDomNode,"width",a),h:u.get(this.targetDomNode,"height",a),pbw:s.w,pbh:s.h,mw:d.w,mh:d.h},!this.isLeftToRight()&&"absolute"==u.get(this.targetDomNode,"position")){var c=h.position(this.targetDomNode,!0);this.startPosition={l:c.x,t:c.y}}this._pconnects=[i.connect(r.doc,m.move,this,"_updateSizing"),i.connect(r.doc,m.release,this,"_endSizing")],o.stop(e)}},_updateSizing:function(e){if(this.activeResize)this._changeSizing(e);else{var t=this._getNewCoords(e,"border",this._resizeHelper.startPosition);if(!1===t)return;this._resizeHelper.resize(t)}e.preventDefault()},_getNewCoords:function(e,t,i){try{if(!e.clientX||!e.clientY)return!1}catch(e){return!1}this._activeResizeLastEvent=e;var a=(this.isLeftToRight()?1:-1)*(this.startPoint.x-e.clientX),o=this.startPoint.y-e.clientY,n=this.startSize.w-(this._resizeX?a:0),r=this.startSize.h-(this._resizeY?o:0),s=this._checkConstraints(n,r);switch(i=i||this.startPosition,i&&this._resizeX&&(s.l=i.l+a,s.w!=n&&(s.l+=n-s.w),s.t=i.t),t){case"margin":s.w+=this.startSize.mw,s.h+=this.startSize.mh;case"border":s.w+=this.startSize.pbw,s.h+=this.startSize.pbh}return s},_checkConstraints:function(e,t){if(this.minSize){var i=this.minSize;e<i.w&&(e=i.w),t<i.h&&(t=i.h)}if(this.constrainMax&&this.maxSize){var a=this.maxSize;e>a.w&&(e=a.w),t>a.h&&(t=a.h)}if(this.fixedAspect){var o=this.startSize.w,n=this.startSize.h,r=o*t-n*e;r<0?e=t*o/n:r>0&&(t=e*n/o)}return{w:e,h:t}},_changeSizing:function(e){var i=this.targetWidget&&t.isFunction(this.targetWidget.resize),a=this._getNewCoords(e,i&&"margin");if(!1!==a){if(i)this.targetWidget.resize(a);else if(this.animateSizing){var o=s[this.animateMethod]([n.animateProperty({node:this.targetDomNode,properties:{width:{start:this.startSize.w,end:a.w}},duration:this.animateDuration}),n.animateProperty({node:this.targetDomNode,properties:{height:{start:this.startSize.h,end:a.h}},duration:this.animateDuration})]);o.play()}else u.set(this.targetDomNode,{width:a.w+"px",height:a.h+"px"});this.intermediateChanges&&this.onResize(e)}},_endSizing:function(e){a.forEach(this._pconnects,i.disconnect);var o=t.partial(i.publish,this.endTopic,[this]);this.activeResize?o():(this._resizeHelper.hide(),this._changeSizing(e),setTimeout(o,this.animateDuration+15)),this._isSizing=!1,this.onResize(e)},onResize:function(e){}})});//# sourceMappingURL=ResizeHandle.js.map