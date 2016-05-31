//>>built
define("dojox/gesture/Base",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/on","dojo/touch","dojo/has","../main"],function(e,t,i,a,r,o,n,s,d){return e.experimental("dojox.gesture.Base"),a.getObject("gesture",!0,d),t(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(e){a.mixin(this,e),this.init()},init:function(){if(this._elements=[],s("touch")||!this.touchOnly){var e=this.defaultEvent;this.call=this._handle(e),this._events=[e],i.forEach(this.subEvents,function(t){this[t]=this._handle(e+"."+t),this._events.push(e+"."+t)},this)}},_handle:function(e){var t=this;return function(i,a){var r=arguments;r.length>2&&(i=r[1],a=r[2]);var n=i&&(i.nodeType||i.attachEvent||i.addEventListener);if(n){var s=t._add(i,e,a),d={remove:function(){s.remove(),t._remove(i,e)}};return d}return o(i,e,a)}},_add:function(e,t,i){var r=this._getGestureElement(e);if(!r){r={target:e,data:{},handles:{}};var s=a.hitch(this,"_process",r,"press"),d=a.hitch(this,"_process",r,"move"),l=a.hitch(this,"_process",r,"release"),h=a.hitch(this,"_process",r,"cancel"),u=r.handles;this.touchOnly?(u.press=o(e,"touchstart",s),u.move=o(e,"touchmove",d),u.release=o(e,"touchend",l),u.cancel=o(e,"touchcancel",h)):(u.press=n.press(e,s),u.move=n.move(e,d),u.release=n.release(e,l),u.cancel=n.cancel(e,h)),this._elements.push(r)}return r.handles[t]=r.handles[t]?++r.handles[t]:1,o(e,t,i)},_getGestureElement:function(e){for(var t,i=0;i<this._elements.length;i++)if(t=this._elements[i],t.target===e)return t},_process:function(e,t,i){i._locking=i._locking||{},i._locking[this.defaultEvent]||this.isLocked(i.currentTarget)||("INPUT"==i.target.tagName&&"radio"!=i.target.type&&"checkbox"!=i.target.type||"TEXTAREA"==i.target.tagName||i.preventDefault(),i._locking[this.defaultEvent]=!0,this[t](e.data,i))},press:function(e,t){},move:function(e,t){},release:function(e,t){},cancel:function(e,t){},fire:function(e,t){e&&t&&(t.bubbles=!0,t.cancelable=!0,o.emit(e,t.type,t))},_remove:function(e,t){var a=this._getGestureElement(e);if(a&&a.handles){a.handles[t]--;var r=a.handles;if(!i.some(this._events,function(e){return r[e]>0})){this._cleanHandles(r);var o=i.indexOf(this._elements,a);o>=0&&this._elements.splice(o,1)}}},_cleanHandles:function(e){for(var t in e)e[t].remove&&e[t].remove(),delete e[t]},lock:function(e){this._lock=e},unLock:function(){this._lock=null},isLocked:function(e){return this._lock&&e?this._lock!==e&&r.isDescendant(e,this._lock):!1},destroy:function(){i.forEach(this._elements,function(e){this._cleanHandles(e.handles)},this),this._elements=null}})});//# sourceMappingURL=Base.js.map