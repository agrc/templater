//>>built
define("dojo/_base/event",["./kernel","../on","../has","../dom-geometry"],function(e,t,n,i){if(t._fixEvent){var o=t._fixEvent;t._fixEvent=function(e,t){return e=o(e,t),e&&i.normalizeEvent(e),e}}var r={fix:function(e,n){return t._fixEvent?t._fixEvent(e,n):e},stop:function(e){n("dom-addeventlistener")||e&&e.preventDefault?(e.preventDefault(),e.stopPropagation()):(e=e||window.event,e.cancelBubble=!0,t._preventDefault.call(e))}};return e.fixEvent=r.fix,e.stopEvent=r.stop,r});//# sourceMappingURL=event.js.map