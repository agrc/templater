//>>built
define("dijit/_editor/plugins/FullScreen",["dojo/aspect","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../../registry","dojo/i18n!../nls/commands"],function(e,t,i,o,n,a,r,s,l,d,c,h,u,f,m,p){var g=t("dijit._editor.plugins.FullScreen",f,{zIndex:500,_origState:null,_origiFrameState:null,_resizeHandle:null,isFullscreen:!1,toggle:function(){this.button.set("checked",!this.button.get("checked"))},_initButton:function(){var e=a.getLocalization("dijit._editor","commands"),t=this.editor;this.button=new m({label:e.fullScreen,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"FullScreen",tabIndex:"-1",onChange:s.hitch(this,"_setFullScreen")})},setEditor:function(e){this.editor=e,this._initButton(),this.editor.addKeyHandler(r.F11,!0,!0,s.hitch(this,function(e){return this.toggle(),e.stopPropagation(),e.preventDefault(),this.editor.defer("focus",250),!0})),this.own(l(this.editor.domNode,"keydown",s.hitch(this,"_containFocus")))},_containFocus:function(e){if(this.isFullscreen){var t=this.editor;if(!t.isTabIndent&&t._fullscreen_oldOnKeyDown&&e.keyCode===r.TAB){var i=u.curNode,o=this._getAltViewNode();i==t.iframe||o&&i===o?setTimeout(s.hitch(this,function(){t.toolbar.focus()}),10):o&&"none"===n.get(t.iframe,"display")?setTimeout(s.hitch(this,function(){u.focus(o)}),10):setTimeout(s.hitch(this,function(){t.focus()}),10),event.stopPropagation(),event.preventDefault()}else t._fullscreen_oldOnKeyDown&&t._fullscreen_oldOnKeyDown(e)}},_resizeEditor:function(){var e=h.getBox(this.editor.ownerDocument);o.setMarginBox(this.editor.domNode,{w:e.w,h:e.h});var t=this.editor.getHeaderHeight(),i=this.editor.getFooterHeight(),n=o.getPadBorderExtents(this.editor.domNode),a=o.getPadBorderExtents(this.editor.iframe.parentNode),r=o.getMarginExtents(this.editor.iframe.parentNode),s=e.h-(t+n.h+i);o.setMarginBox(this.editor.iframe.parentNode,{h:s,w:e.w}),o.setMarginBox(this.editor.iframe,{h:s-(a.h+r.h)})},_getAltViewNode:function(){},_setFullScreen:function(t){var a=this.editor,r=a.ownerDocumentBody,c=a.domNode.parentNode,u=h.getBox(a.ownerDocument);if(this.isFullscreen=t,t){for(;c&&c!==r;)i.add(c,"dijitForceStatic"),c=c.parentNode;this._editorResizeHolder=this.editor.resize,a.resize=function(){},a._fullscreen_oldOnKeyDown=a.onKeyDown,a.onKeyDown=s.hitch(this,this._containFocus),this._origState={},this._origiFrameState={};var f=a.domNode,m=f&&f.style||{};this._origState={width:m.width||"",height:m.height||"",top:n.get(f,"top")||"",left:n.get(f,"left")||"",position:n.get(f,"position")||"static",marginBox:o.getMarginBox(a.domNode)};var g=a.iframe,_=g&&g.style||{},v=n.get(a.iframe,"backgroundColor");if(this._origiFrameState={backgroundColor:v||"transparent",width:_.width||"auto",height:_.height||"auto",zIndex:_.zIndex||""},n.set(a.domNode,{position:"absolute",top:"0px",left:"0px",zIndex:this.zIndex,width:u.w+"px",height:u.h+"px"}),n.set(a.iframe,{height:"100%",width:"100%",zIndex:this.zIndex,backgroundColor:"transparent"!==v&&"rgba(0, 0, 0, 0)"!==v?v:"white"}),n.set(a.iframe.parentNode,{height:"95%",width:"100%"}),r.style&&r.style.overflow?this._oldOverflow=n.get(r,"overflow"):this._oldOverflow="",d("ie")&&!d("quirks")){if(r.parentNode&&r.parentNode.style&&r.parentNode.style.overflow)this._oldBodyParentOverflow=r.parentNode.style.overflow;else try{this._oldBodyParentOverflow=n.get(r.parentNode,"overflow")}catch(y){this._oldBodyParentOverflow="scroll"}n.set(r.parentNode,"overflow","hidden")}n.set(r,"overflow","hidden");var b=function(){var e=h.getBox(a.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(s.hitch(this,function(){delete this._resizer,this._resizeEditor()}),10)};this._resizeHandle=l(window,"resize",s.hitch(this,b)),this._resizeHandle2=e.after(a,"onResize",s.hitch(this,function(){this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(s.hitch(this,function(){delete this._resizer,this._resizeEditor()}),10)})),this._resizeEditor();var j=this.editor.toolbar.domNode;setTimeout(function(){h.scrollIntoView(j)},250)}else{for(this._resizeHandle&&(this._resizeHandle.remove(),this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),this._rst&&(clearTimeout(this._rst),this._rst=null);c&&c!==r;)i.remove(c,"dijitForceStatic"),c=c.parentNode;if(this._editorResizeHolder&&(this.editor.resize=this._editorResizeHolder),!this._origState&&!this._origiFrameState)return;a._fullscreen_oldOnKeyDown&&(a.onKeyDown=a._fullscreen_oldOnKeyDown,delete a._fullscreen_oldOnKeyDown);var C=this;setTimeout(function(){var e=C._origState.marginBox,t=C._origState.height;d("ie")&&!d("quirks")&&(r.parentNode.style.overflow=C._oldBodyParentOverflow,delete C._oldBodyParentOverflow),n.set(r,"overflow",C._oldOverflow),delete C._oldOverflow,n.set(a.domNode,C._origState),n.set(a.iframe.parentNode,{height:"",width:""}),n.set(a.iframe,C._origiFrameState),delete C._origState,delete C._origiFrameState;var i=p.getEnclosingWidget(a.domNode.parentNode);i&&i.resize?i.resize():(!t||t.indexOf("%")<0)&&setTimeout(s.hitch(this,function(){a.resize({h:e.h})}),0),h.scrollIntoView(C.editor.toolbar.domNode)},100)}},updateState:function(){this.button.set("disabled",this.get("disabled"))},destroy:function(){this._resizeHandle&&(this._resizeHandle.remove(),this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),this._resizer&&(clearTimeout(this._resizer),this._resizer=null),this.inherited(arguments)}});return f.registry.fullScreen=f.registry.fullscreen=function(e){return new g({zIndex:"zIndex"in e?e.zIndex:500})},g});//# sourceMappingURL=FullScreen.js.map