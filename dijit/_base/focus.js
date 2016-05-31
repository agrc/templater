//>>built
define("dijit/_base/focus",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus","../selection","../main"],function(t,e,o,i,n,s,r,d){var a={_curFocus:null,_prevFocus:null,isCollapsed:function(){return d.getBookmark().isCollapsed},getBookmark:function(){var t=n.global==window?r:new r.SelectionManager(n.global);return t.getBookmark()},moveToBookmark:function(t){var e=n.global==window?r:new r.SelectionManager(n.global);return e.moveToBookmark(t)},getFocus:function(t,o){var i=!s.curNode||t&&e.isDescendant(s.curNode,t.domNode)?d._prevFocus:s.curNode;return{node:i,bookmark:i&&i==s.curNode&&n.withGlobal(o||n.global,d.getBookmark),openedForWindow:o}},_activeStack:[],registerIframe:function(t){return s.registerIframe(t)},unregisterIframe:function(t){t&&t.remove()},registerWin:function(t,e){return s.registerWin(t,e)},unregisterWin:function(t){t&&t.remove()}};return s.focus=function(t){if(t){var e="node"in t?t.node:t,o=t.bookmark,i=t.openedForWindow,r=o?o.isCollapsed:!1;if(e){var a="iframe"==e.tagName.toLowerCase()?e.contentWindow:e;if(a&&a.focus)try{a.focus()}catch(c){}s._onFocusNode(e)}if(o&&n.withGlobal(i||n.global,d.isCollapsed)&&!r){i&&i.focus();try{n.withGlobal(i||n.global,d.moveToBookmark,null,[o])}catch(h){}}}},s.watch("curNode",function(t,e,o){d._curFocus=o,d._prevFocus=e,o&&i.publish("focusNode",o)}),s.watch("activeStack",function(t,e,o){d._activeStack=o}),s.on("widget-blur",function(t,e){i.publish("widgetBlur",t,e)}),s.on("widget-focus",function(t,e){i.publish("widgetFocus",t,e)}),o.mixin(d,a),d});//# sourceMappingURL=focus.js.map