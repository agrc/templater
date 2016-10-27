//>>built
define("dijit/_base/focus",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus","../selection","../main"],function(t,e,i,o,n,s,a,d){var r={_curFocus:null,_prevFocus:null,isCollapsed:function(){return d.getBookmark().isCollapsed},getBookmark:function(){var t=n.global==window?a:new a.SelectionManager(n.global);return t.getBookmark()},moveToBookmark:function(t){var e=n.global==window?a:new a.SelectionManager(n.global);return e.moveToBookmark(t)},getFocus:function(t,i){var o=!s.curNode||t&&e.isDescendant(s.curNode,t.domNode)?d._prevFocus:s.curNode;return{node:o,bookmark:o&&o==s.curNode&&n.withGlobal(i||n.global,d.getBookmark),openedForWindow:i}},_activeStack:[],registerIframe:function(t){return s.registerIframe(t)},unregisterIframe:function(t){t&&t.remove()},registerWin:function(t,e){return s.registerWin(t,e)},unregisterWin:function(t){t&&t.remove()}};return s.focus=function(t){if(t){var e="node"in t?t.node:t,i=t.bookmark,o=t.openedForWindow,a=i?i.isCollapsed:!1;if(e){var r="iframe"==e.tagName.toLowerCase()?e.contentWindow:e;if(r&&r.focus)try{r.focus()}catch(l){}s._onFocusNode(e)}if(i&&n.withGlobal(o||n.global,d.isCollapsed)&&!a){o&&o.focus();try{n.withGlobal(o||n.global,d.moveToBookmark,null,[i])}catch(h){}}}},s.watch("curNode",function(t,e,i){d._curFocus=i,d._prevFocus=e,i&&o.publish("focusNode",i)}),s.watch("activeStack",function(t,e,i){d._activeStack=i}),s.on("widget-blur",function(t,e){o.publish("widgetBlur",t,e)}),s.on("widget-focus",function(t,e){o.publish("widgetFocus",t,e)}),i.mixin(d,r),d});//# sourceMappingURL=focus.js.map