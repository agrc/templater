//>>built
define("dojox/gesture/Base",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/on","dojo/touch","dojo/has","../main"],function(e,t,i,a,n,r,o,s,l){return e.experimental("dojox.gesture.Base"),a.getObject("gesture",!0,l),t(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(e){a.mixin(this,e),this.init()},init:function(){if(this._elements=[],s("touch")||!this.touchOnly){var e=this.defaultEvent;this.call=this._handle(e),this._events=[e],i.forEach(this.subEvents,function(t){this[t]=this._handle(e+"."+t),this._events.push(e+"."+t)},this)}},_handle:function(e){var t=this;return function(i,a){var n=arguments;n.length>2&&(i=n[1],a=n[2]);var o=i&&(i.nodeType||i.attachEvent||i.addEventListener);if(o){var s=t._add(i,e,a),l={remove:function(){s.remove(),t._remove(i,e)}};return l}return r(i,e,a)}},_add:function(e,t,i){var n=this._getGestureElement(e);if(!n){n={target:e,data:{},handles:{}};var s=a.hitch(this,"_process",n,"press"),l=a.hitch(this,"_process",n,"move"),d=a.hitch(this,"_process",n,"release"),u=a.hitch(this,"_process",n,"cancel"),c=n.handles;this.touchOnly?(c.press=r(e,"touchstart",s),c.move=r(e,"touchmove",l),c.release=r(e,"touchend",d),c.cancel=r(e,"touchcancel",u)):(c.press=o.press(e,s),c.move=o.move(e,l),c.release=o.release(e,d),c.cancel=o.cancel(e,u)),this._elements.push(n)}return n.handles[t]=n.handles[t]?++n.handles[t]:1,r(e,t,i)},_getGestureElement:function(e){for(var t,i=0;i<this._elements.length;i++)if(t=this._elements[i],t.target===e)return t},_process:function(e,t,i){i._locking=i._locking||{},i._locking[this.defaultEvent]||this.isLocked(i.currentTarget)||("INPUT"==i.target.tagName&&"radio"!=i.target.type&&"checkbox"!=i.target.type||"TEXTAREA"==i.target.tagName||i.preventDefault(),i._locking[this.defaultEvent]=!0,this[t](e.data,i))},press:function(e,t){},move:function(e,t){},release:function(e,t){},cancel:function(e,t){},fire:function(e,t){e&&t&&(t.bubbles=!0,t.cancelable=!0,r.emit(e,t.type,t))},_remove:function(e,t){var a=this._getGestureElement(e);if(a&&a.handles){a.handles[t]--;var n=a.handles;if(!i.some(this._events,function(e){return n[e]>0})){this._cleanHandles(n);var r=i.indexOf(this._elements,a);r>=0&&this._elements.splice(r,1)}}},_cleanHandles:function(e){for(var t in e)e[t].remove&&e[t].remove(),delete e[t]},lock:function(e){this._lock=e},unLock:function(){this._lock=null},isLocked:function(e){return this._lock&&e?this._lock!==e&&n.isDescendant(e,this._lock):!1},destroy:function(){i.forEach(this._elements,function(e){this._cleanHandles(e.handles)},this),this._elements=null}})});//# sourceMappingURL=Base.js.map