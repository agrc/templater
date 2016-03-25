//>>built
define("dijit/_editor/plugins/AlwaysShowToolbar",["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","../_Plugin"],function(e,t,i,r,a,o,n,s,d){return e("dijit._editor.plugins.AlwaysShowToolbar",d,{_handleScroll:!0,setEditor:function(e){e.iframe&&(this.editor=e,e.onLoadDeferred.then(a.hitch(this,this.enable)))},enable:function(e){return this._updateHeight(),this.own(o(window,"scroll",a.hitch(this,"globalOnScrollHandler")),this.editor.on("NormalizedDisplayChanged",a.hitch(this,"_updateHeight"))),e},_updateHeight:function(){var e=this.editor;if(e.isLoaded&&!e.height){var t=r.getMarginSize(e.editNode).h;if(n("opera")&&(t=e.editNode.scrollHeight),t||(t=r.getMarginSize(e.document.body).h),this._fixEnabled&&(t+=r.getMarginSize(this.editor.header).h),0!=t){if(n("ie")<=7&&this.editor.minHeight){var i=parseInt(this.editor.minHeight);i>t&&(t=i)}t!=this._lastHeight&&(this._lastHeight=t,r.setMarginBox(e.iframe,{h:this._lastHeight}))}}},_lastHeight:0,globalOnScrollHandler:function(){var e=n("ie")<7;if(this._handleScroll){var a=this.editor.header;this._scrollSetUp||(this._scrollSetUp=!0,this._scrollThreshold=r.position(a,!0).y);var o=r.docScroll(this.editor.ownerDocument).y,s=a.style;if(o>this._scrollThreshold&&o<this._scrollThreshold+this._lastHeight){if(!this._fixEnabled){var d=r.getMarginSize(a);this.editor.iframe.style.marginTop=d.h+"px",e?(s.left=r.position(a).x,a.previousSibling?this._IEOriginalPos=["after",a.previousSibling]:a.nextSibling?this._IEOriginalPos=["before",a.nextSibling]:this._IEOriginalPos=["last",a.parentNode],this.editor.ownerDocumentBody.appendChild(a),t.add(a,"dijitIEFixedToolbar")):(s.position="fixed",s.top="0px"),r.setMarginBox(a,{w:d.w}),s.zIndex=2e3,this._fixEnabled=!0}var l=this.height?parseInt(this.editor.height):this.editor._lastHeight;s.display=o>this._scrollThreshold+l?"none":""}else this._fixEnabled&&(this.editor.iframe.style.marginTop="",s.position="",s.top="",s.zIndex="",s.display="",e&&(s.left="",t.remove(a,"dijitIEFixedToolbar"),this._IEOriginalPos?(i.place(a,this._IEOriginalPos[1],this._IEOriginalPos[0]),this._IEOriginalPos=null):i.place(a,this.editor.iframe,"before")),s.width="",this._fixEnabled=!1)}},destroy:function(){this._IEOriginalPos=null,this._handleScroll=!1,this.inherited(arguments),n("ie")<7&&t.remove(this.editor.header,"dijitIEFixedToolbar")}})});//# sourceMappingURL=AlwaysShowToolbar.js.map