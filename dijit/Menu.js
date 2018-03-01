//>>built
define("dijit/Menu",["require","dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","./popup","./DropDownMenu","dojo/ready"],function(t,e,o,i,n,s,a,d,r,h,l,c,u,f,_,m){return l("dijit-legacy-requires")&&m(0,function(){t(["dijit/MenuItem","dijit/PopupMenuItem","dijit/CheckedMenuItem","dijit/MenuSeparator"])}),o("dijit.Menu",_,{constructor:function(){this._bindings=[]},targetNodeIds:[],selector:"",contextMenuForWindow:!1,leftClickToOpen:!1,refocus:!0,postCreate:function(){this.contextMenuForWindow?this.bindDomNode(this.ownerDocumentBody):e.forEach(this.targetNodeIds,this.bindDomNode,this),this.inherited(arguments)},_iframeContentWindow:function(t){return u.get(this._iframeContentDocument(t))||this._iframeContentDocument(t).__parent__||t.name&&document.frames[t.name]||null},_iframeContentDocument:function(t){return t.contentDocument||t.contentWindow&&t.contentWindow.document||t.name&&document.frames[t.name]&&document.frames[t.name].document||null},bindDomNode:function(t){t=i.byId(t,this.ownerDocument);var e;if("iframe"==t.tagName.toLowerCase()){var o=t,s=this._iframeContentWindow(o);e=c.body(s.document)}else e=t==c.body(this.ownerDocument)?this.ownerDocument.documentElement:t;var a={node:t,iframe:o};n.set(t,"_dijitMenu"+this.id,this._bindings.push(a));var l=r.hitch(this,function(t){var e=this.selector,i=e?function(t){return h.selector(e,t)}:function(t){return t},n=this;return[h(t,i(this.leftClickToOpen?"click":"contextmenu"),function(t){t.stopPropagation(),t.preventDefault(),(new Date).getTime()<n._lastKeyDown+500||n._scheduleOpen(this,o,{x:t.pageX,y:t.pageY},t.target)}),h(t,i("keydown"),function(t){(93==t.keyCode||t.shiftKey&&t.keyCode==d.F10||n.leftClickToOpen&&t.keyCode==d.SPACE)&&(t.stopPropagation(),t.preventDefault(),n._scheduleOpen(this,o,null,t.target),n._lastKeyDown=(new Date).getTime())})]});a.connects=e?l(e):[],o&&(a.onloadHandler=r.hitch(this,function(){var t=this._iframeContentWindow(o),e=c.body(t.document);a.connects=l(e)}),o.addEventListener?o.addEventListener("load",a.onloadHandler,!1):o.attachEvent("onload",a.onloadHandler))},unBindDomNode:function(t){var e;try{e=i.byId(t,this.ownerDocument)}catch(t){return}var o="_dijitMenu"+this.id;if(e&&n.has(e,o)){for(var s,a=n.get(e,o)-1,d=this._bindings[a];s=d.connects.pop();)s.remove();var r=d.iframe;r&&(r.removeEventListener?r.removeEventListener("load",d.onloadHandler,!1):r.detachEvent("onload",d.onloadHandler)),n.remove(e,o),delete this._bindings[a]}},_scheduleOpen:function(t,e,o,i){this._openTimer||(this._openTimer=this.defer(function(){delete this._openTimer,this._openMyself({target:i,delegatedTarget:t,iframe:e,coords:o})},1))},_openMyself:function(t){function e(){D.refocus&&y&&y.focus(),f.close(D)}var o=t.target,n=t.iframe,d=t.coords,r=!d;if(this.currentTarget=t.delegatedTarget,d){if(n){var h=s.position(n,!0),c=this._iframeContentWindow(n),u=s.docScroll(c.document),_=a.getComputedStyle(n),m=a.toPixelValue,p=(l("ie")&&l("quirks")?0:m(n,_.paddingLeft))+(l("ie")&&l("quirks")?m(n,_.borderLeftWidth):0),g=(l("ie")&&l("quirks")?0:m(n,_.paddingTop))+(l("ie")&&l("quirks")?m(n,_.borderTopWidth):0);d.x+=h.x+p-u.x,d.y+=h.y+g-u.y}}else d=s.position(o,!0),d.x+=10,d.y+=10;var D=this,v=this._focusManager.get("prevNode"),j=this._focusManager.get("curNode"),y=!j||i.isDescendant(j,this.domNode)?v:j;f.open({popup:this,x:d.x,y:d.y,onExecute:e,onCancel:e,orient:this.isLeftToRight()?"L":"R"}),this.focus(),r||this.defer(function(){this._cleanUp(!0)}),this._onBlur=function(){this.inherited("_onBlur",arguments),f.close(this)}},destroy:function(){e.forEach(this._bindings,function(t){t&&this.unBindDomNode(t.node)},this),this.inherited(arguments)}})});//# sourceMappingURL=Menu.js.map