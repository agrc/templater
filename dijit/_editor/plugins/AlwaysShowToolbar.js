//>>built
define("dijit/_editor/plugins/AlwaysShowToolbar",["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","../_Plugin"],function(e,t,i,o,n,r,a,s,d){return e("dijit._editor.plugins.AlwaysShowToolbar",d,{_handleScroll:!0,setEditor:function(e){e.iframe&&(this.editor=e,e.onLoadDeferred.then(n.hitch(this,this.enable)))},enable:function(e){return this._updateHeight(),this.own(r(window,"scroll",n.hitch(this,"globalOnScrollHandler")),this.editor.on("NormalizedDisplayChanged",n.hitch(this,"_updateHeight"))),e},_updateHeight:function(){var e=this.editor;if(e.isLoaded&&!e.height){var t=o.getMarginSize(e.editNode).h;if(a("opera")&&(t=e.editNode.scrollHeight),t||(t=o.getMarginSize(e.document.body).h),this._fixEnabled&&(t+=o.getMarginSize(this.editor.header).h),0!=t){if(a("ie")<=7&&this.editor.minHeight){var i=parseInt(this.editor.minHeight);t<i&&(t=i)}t!=this._lastHeight&&(this._lastHeight=t,o.setMarginBox(e.iframe,{h:this._lastHeight}))}}},_lastHeight:0,globalOnScrollHandler:function(){var e=a("ie")<7;if(this._handleScroll){var n=this.editor.header;this._scrollSetUp||(this._scrollSetUp=!0,this._scrollThreshold=o.position(n,!0).y);var r=o.docScroll(this.editor.ownerDocument).y,s=n.style;if(r>this._scrollThreshold&&r<this._scrollThreshold+this._lastHeight){if(!this._fixEnabled){var d=o.getMarginSize(n);this.editor.iframe.style.marginTop=d.h+"px",e?(s.left=o.position(n).x,n.previousSibling?this._IEOriginalPos=["after",n.previousSibling]:n.nextSibling?this._IEOriginalPos=["before",n.nextSibling]:this._IEOriginalPos=["last",n.parentNode],this.editor.ownerDocumentBody.appendChild(n),t.add(n,"dijitIEFixedToolbar")):(s.position="fixed",s.top="0px"),o.setMarginBox(n,{w:d.w}),s.zIndex=2e3,this._fixEnabled=!0}var l=this.height?parseInt(this.editor.height):this.editor._lastHeight;s.display=r>this._scrollThreshold+l?"none":""}else this._fixEnabled&&(this.editor.iframe.style.marginTop="",s.position="",s.top="",s.zIndex="",s.display="",e&&(s.left="",t.remove(n,"dijitIEFixedToolbar"),this._IEOriginalPos?(i.place(n,this._IEOriginalPos[1],this._IEOriginalPos[0]),this._IEOriginalPos=null):i.place(n,this.editor.iframe,"before")),s.width="",this._fixEnabled=!1)}},destroy:function(){this._IEOriginalPos=null,this._handleScroll=!1,this.inherited(arguments),a("ie")<7&&t.remove(this.editor.header,"dijitIEFixedToolbar")}})});//# sourceMappingURL=AlwaysShowToolbar.js.map