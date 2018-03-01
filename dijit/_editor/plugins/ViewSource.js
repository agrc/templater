//>>built
define("dijit/_editor/plugins/ViewSource",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../..","../../registry","dojo/i18n!../nls/commands"],function(e,t,i,o,n,r,s,a,l,d,c,u,h,f,p,m,g,v){var _=i("dijit._editor.plugins.ViewSource",p,{stripScripts:!0,stripComments:!0,stripIFrames:!0,readOnly:!1,_fsPlugin:null,toggle:function(){u("webkit")&&(this._vsFocused=!0),this.button.set("checked",!this.button.get("checked"))},_initButton:function(){var e=a.getLocalization("dijit._editor","commands"),t=this.editor;this.button=new m({label:e.viewSource,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"ViewSource",tabIndex:"-1",onChange:d.hitch(this,"_showSource")}),this.button.set("readOnly",!1)},setEditor:function(e){this.editor=e,this._initButton(),this.editor.addKeyHandler(l.F12,!0,!0,d.hitch(this,function(e){this.button.focus(),this.toggle(),e.stopPropagation(),e.preventDefault(),setTimeout(d.hitch(this,function(){this.editor.focused&&this.editor.focus()}),100)}))},_showSource:function(i){var o,n=this.editor,r=n._plugins;this._sourceShown=i;var a=this;try{if(this.sourceArea||this._createSourceView(),i){n._sourceQueryCommandEnabled=n.queryCommandEnabled,n.queryCommandEnabled=function(e){return"viewsource"===e.toLowerCase()},this.editor.onDisplayChanged(),o=n.get("value"),o=this._filter(o),n.set("value",o),e.forEach(r,function(e){!e||e instanceof _||!e.isInstanceOf(p)||e.set("disabled",!0)}),this._fsPlugin&&(this._fsPlugin._getAltViewNode=function(){return a.sourceArea}),this.sourceArea.value=o,this.sourceArea.style.height=n.iframe.style.height,this.sourceArea.style.width=n.iframe.style.width,n.iframe.parentNode.style.position="relative",s.set(n.iframe,{position:"absolute",top:0,visibility:"hidden"}),s.set(this.sourceArea,{display:"block"});var l=function(){var e=h.getBox(n.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return;this._prevW=e.w,this._prevH=e.h}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(d.hitch(this,function(){delete this._resizer,this._resize()}),10)};this._resizeHandle=c(window,"resize",d.hitch(this,l)),setTimeout(d.hitch(this,this._resize),100),this.editor.onNormalizedDisplayChanged(),this.editor.__oldGetValue=this.editor.getValue,this.editor.getValue=d.hitch(this,function(){var e=this.sourceArea.value;return e=this._filter(e)}),this._setListener=t.after(this.editor,"setValue",d.hitch(this,function(e){e=e||"",e=this._filter(e),this.sourceArea.value=e}),!0)}else{if(!n._sourceQueryCommandEnabled)return;this._setListener.remove(),delete this._setListener,this._resizeHandle.remove(),delete this._resizeHandle,this.editor.__oldGetValue&&(this.editor.getValue=this.editor.__oldGetValue,delete this.editor.__oldGetValue),n.queryCommandEnabled=n._sourceQueryCommandEnabled,this._readOnly||(o=this.sourceArea.value,o=this._filter(o),n.beginEditing(),n.set("value",o),n.endEditing()),e.forEach(r,function(e){e&&e.isInstanceOf(p)&&e.set("disabled",!1)}),s.set(this.sourceArea,"display","none"),s.set(n.iframe,{position:"relative",visibility:"visible"}),delete n._sourceQueryCommandEnabled,this.editor.onDisplayChanged()}setTimeout(d.hitch(this,function(){var e=n.domNode.parentNode;if(e){var t=v.getEnclosingWidget(e);t&&t.resize&&t.resize()}n.resize()}),300)}catch(e){}},updateState:function(){this.button.set("disabled",this.get("disabled"))},_resize:function(){var e=this.editor,t=e.getHeaderHeight(),i=e.getFooterHeight(),o=r.position(e.domNode),n=r.getPadBorderExtents(e.iframe.parentNode),s=r.getMarginExtents(e.iframe.parentNode),a=r.getPadBorderExtents(e.domNode),l={w:o.w-a.w,h:o.h-(t+a.h+i)};if(this._fsPlugin&&this._fsPlugin.isFullscreen){var d=h.getBox(e.ownerDocument);l.w=d.w-a.w,l.h=d.h-(t+a.h+i)}r.setMarginBox(this.sourceArea,{w:Math.round(l.w-(n.w+s.w)),h:Math.round(l.h-(n.h+s.h))})},_createSourceView:function(){var e=this.editor,t=e._plugins;this.sourceArea=n.create("textarea"),this.readOnly&&(o.set(this.sourceArea,"readOnly",!0),this._readOnly=!0),s.set(this.sourceArea,{padding:"0px",margin:"0px",borderWidth:"0px",borderStyle:"none"}),o.set(this.sourceArea,"aria-label",this.editor.id),n.place(this.sourceArea,e.iframe,"before"),u("ie")&&e.iframe.parentNode.lastChild!==e.iframe&&s.set(e.iframe.parentNode.lastChild,{width:"0px",height:"0px",padding:"0px",margin:"0px",borderWidth:"0px",borderStyle:"none"}),e._viewsource_oldFocus=e.focus;var i=this;e.focus=function(){if(i._sourceShown)i.setSourceAreaCaret();else try{this._vsFocused?(delete this._vsFocused,f.focus(e.editNode)):e._viewsource_oldFocus()}catch(e){}};var r,a;for(r=0;r<t.length;r++)if((a=t[r])&&("dijit._editor.plugins.FullScreen"===a.declaredClass||a.declaredClass===g._scopeName+"._editor.plugins.FullScreen")){this._fsPlugin=a;break}this._fsPlugin&&(this._fsPlugin._viewsource_getAltViewNode=this._fsPlugin._getAltViewNode,this._fsPlugin._getAltViewNode=function(){return i._sourceShown?i.sourceArea:this._viewsource_getAltViewNode()}),this.own(c(this.sourceArea,"keydown",d.hitch(this,function(t){this._sourceShown&&t.keyCode==l.F12&&t.ctrlKey&&t.shiftKey&&(this.button.focus(),this.button.set("checked",!1),setTimeout(d.hitch(this,function(){e.focus()}),100),t.stopPropagation(),t.preventDefault())})))},_stripScripts:function(e){return e&&(e=e.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/gi,""),e=e.replace(/<\s*script\b([^<>]|\s)*>?/gi,""),e=e.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/gi,"")),e},_stripComments:function(e){return e&&(e=e.replace(/<!--(.|\s){1,}?-->/g,"")),e},_stripIFrames:function(e){return e&&(e=e.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/gi,"")),e},_filter:function(e){return e&&(this.stripScripts&&(e=this._stripScripts(e)),this.stripComments&&(e=this._stripComments(e)),this.stripIFrames&&(e=this._stripIFrames(e))),e},setSourceAreaCaret:function(){var e=this.sourceArea;if(f.focus(e),this._sourceShown&&!this.readOnly)if(e.setSelectionRange)e.setSelectionRange(0,0);else if(this.sourceArea.createTextRange){var t=e.createTextRange();t.collapse(!0),t.moveStart("character",-99999),t.moveStart("character",0),t.moveEnd("character",0),t.select()}},destroy:function(){this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizeHandle&&(this._resizeHandle.remove(),delete this._resizeHandle),this._setListener&&(this._setListener.remove(),delete this._setListener),this.inherited(arguments)}});return p.registry.viewSource=p.registry.viewsource=function(e){return new _({readOnly:"readOnly"in e&&e.readOnly,stripComments:!("stripComments"in e)||e.stripComments,stripScripts:!("stripScripts"in e)||e.stripScripts,stripIFrames:!("stripIFrames"in e)||e.stripIFrames})},_});//# sourceMappingURL=ViewSource.js.map