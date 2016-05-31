//>>built
define("dijit/focus",["dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/Evented","dojo/_base/lang","dojo/on","dojo/domReady","dojo/sniff","dojo/Stateful","dojo/_base/window","dojo/window","./a11y","./registry","./main"],function(t,e,o,i,n,s,d,r,a,c,h,u,l,f,p,m,_){var j,v,N=e([u,d],{curNode:null,activeStack:[],constructor:function(){var e=r.hitch(this,function(t){o.isDescendant(this.curNode,t)&&this.set("curNode",null),o.isDescendant(this.prevNode,t)&&this.set("prevNode",null)});t.before(s,"empty",e),t.before(s,"destroy",e)},registerIframe:function(t){return this.registerWin(t.contentWindow,t)},registerWin:function(t,e){var o=this,i=t.document&&t.document.body;if(i){var n=h("pointer-events")?"pointerdown":h("MSPointer")?"MSPointerDown":h("touch-events")?"mousedown, touchstart":"mousedown",s=a(t.document,n,function(t){t&&t.target&&null==t.target.parentNode||o._onTouchNode(e||t.target,"mouse")}),d=a(i,"focusin",function(t){if(t.target.tagName){var i=t.target.tagName.toLowerCase();"#document"!=i&&"body"!=i&&(p.isFocusable(t.target)?o._onFocusNode(e||t.target):o._onTouchNode(e||t.target))}}),r=a(i,"focusout",function(t){o._onBlurNode(e||t.target)});return{remove:function(){s.remove(),d.remove(),r.remove(),s=d=r=null,i=null}}}},_onBlurNode:function(t){var e=(new Date).getTime();j+100>e||(this._clearFocusTimer&&clearTimeout(this._clearFocusTimer),this._clearFocusTimer=setTimeout(r.hitch(this,function(){this.set("prevNode",this.curNode),this.set("curNode",null)}),0),this._clearActiveWidgetsTimer&&clearTimeout(this._clearActiveWidgetsTimer),v+100>e||(this._clearActiveWidgetsTimer=setTimeout(r.hitch(this,function(){delete this._clearActiveWidgetsTimer,this._setStack([])}),0)))},_onTouchNode:function(t,e){v=(new Date).getTime(),this._clearActiveWidgetsTimer&&(clearTimeout(this._clearActiveWidgetsTimer),delete this._clearActiveWidgetsTimer),n.contains(t,"dijitPopup")&&(t=t.firstChild);var o=[];try{for(;t;){var s=i.get(t,"dijitPopupParent");if(s)t=m.byId(s).domNode;else if(t.tagName&&"body"==t.tagName.toLowerCase()){if(t===l.body())break;t=f.get(t.ownerDocument).frameElement}else{var d=t.getAttribute&&t.getAttribute("widgetId"),r=d&&m.byId(d);!r||"mouse"==e&&r.get("disabled")||o.unshift(d),t=t.parentNode}}}catch(a){}this._setStack(o,e)},_onFocusNode:function(t){t&&9!=t.nodeType&&(j=(new Date).getTime(),this._clearFocusTimer&&(clearTimeout(this._clearFocusTimer),delete this._clearFocusTimer),this._onTouchNode(t),t!=this.curNode&&(this.set("prevNode",this.curNode),this.set("curNode",t)))},_setStack:function(t,e){var o=this.activeStack,i=o.length-1,n=t.length-1;if(t[n]!=o[i]){this.set("activeStack",t);var s,d;for(d=i;d>=0&&o[d]!=t[d];d--)s=m.byId(o[d]),s&&(s._hasBeenBlurred=!0,s.set("focused",!1),s._focusManager==this&&s._onBlur(e),this.emit("widget-blur",s,e));for(d++;n>=d;d++)s=m.byId(t[d]),s&&(s.set("focused",!0),s._focusManager==this&&s._onFocus(e),this.emit("widget-focus",s,e))}},focus:function(t){if(t)try{t.focus()}catch(e){}}}),g=new N;c(function(){var t=g.registerWin(f.get(document));h("ie")&&a(window,"unload",function(){t&&(t.remove(),t=null)})}),_.focus=function(t){g.focus(t)};for(var T in g)/^_/.test(T)||(_.focus[T]="function"==typeof g[T]?r.hitch(g,T):g[T]);return g.watch(function(t,e,o){_.focus[t]=o}),g});//# sourceMappingURL=focus.js.map