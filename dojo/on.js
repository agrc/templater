//>>built
define("dojo/on",["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(e,t,i){"use strict";function n(e,t,n,o,s){var r=t.match(/(.*):(.*)/);if(r)return t=r[2],r=r[1],a.selector(r,t).call(s,e,n);if(i("touch")&&(d.test(t)&&(n=C(n)),i("event-orientationchange")||"orientationchange"!=t||(t="resize",e=window,n=C(n))),p&&(n=p(n)),e.addEventListener){var h=t in c,l=h?c[t]:t;return e.addEventListener(l,n,h),{remove:function(){e.removeEventListener(l,n,h)}}}if(t="on"+t,_&&e.attachEvent)return _(e,t,n);throw new Error("Target must be an event emitter")}function o(){this.cancelable=!1,this.defaultPrevented=!0}function s(){this.bubbles=!1}var r=window.ScriptEngineMajorVersion;i.add("jscript",r&&r()+ScriptEngineMinorVersion()/10),i.add("event-orientationchange",i("touch")&&!i("android")),i.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation),i.add("event-focusin",function(e,t,i){return"onfocusin"in i}),i("touch")&&i.add("touch-can-modify-event-delegate",function(){var e=function(){};e.prototype=document.createEvent("MouseEvents");try{var t=new e;return t.target=null,null===t.target}catch(i){return!1}});var a=function(e,t,i,o){return"function"!=typeof e.on||"function"==typeof t||e.nodeType?a.parse(e,t,i,n,o,this):e.on(t,i)};a.pausable=function(e,t,i,n){var o,s=a(e,t,function(){return o?void 0:i.apply(this,arguments)},n);return s.pause=function(){o=!0},s.resume=function(){o=!1},s},a.once=function(e,t,i,n){var o=a(e,t,function(){return o.remove(),i.apply(this,arguments)});return o},a.parse=function(e,t,i,n,o,s){var r;if(t.call)return t.call(s,e,i);if(t instanceof Array?r=t:t.indexOf(",")>-1&&(r=t.split(/\s*,\s*/)),r){for(var d,h=[],l=0;d=r[l++];)h.push(a.parse(e,d,i,n,o,s));return h.remove=function(){for(var e=0;e<h.length;e++)h[e].remove()},h}return n(e,t,i,o,s)};var d=/^touch/;a.matches=function(e,i,n,o,s){for(s=s&&"function"==typeof s.matches?s:t.query,o=o!==!1,1!=e.nodeType&&(e=e.parentNode);!s.matches(e,i,n);)if(e==n||o===!1||!(e=e.parentNode)||1!=e.nodeType)return!1;return e},a.selector=function(e,t,i){return function(n,o){function s(t){return a.matches(t,e,n,i,r)}var r="function"==typeof e?{matches:e}:this,d=t.bubble;return d?a(n,d(s),o):a(n,t,function(e){var t=s(e.target);return t?o.call(t,e):void 0})}};var h=[].slice,l=a.emit=function(e,t,i){var n=h.call(arguments,2),r="on"+t;if("parentNode"in e){var a=n[0]={};for(var d in i)a[d]=i[d];a.preventDefault=o,a.stopPropagation=s,a.target=e,a.type=t,i=a}do e[r]&&e[r].apply(e,n);while(i&&i.bubbles&&(e=e.parentNode));return i&&i.cancelable&&i},c=i("event-focusin")?{}:{focusin:"focus",focusout:"blur"};if(!i("event-stopimmediatepropagation"))var u=function(){this.immediatelyStopped=!0,this.modified=!0},p=function(e){return function(t){return t.immediatelyStopped?void 0:(t.stopImmediatePropagation=u,e.apply(this,arguments))}};if(i("dom-addeventlistener"))a.emit=function(e,t,i){if(e.dispatchEvent&&document.createEvent){var n=e.ownerDocument||document,o=n.createEvent("HTMLEvents");o.initEvent(t,!!i.bubbles,!!i.cancelable);for(var s in i)s in o||(o[s]=i[s]);return e.dispatchEvent(o)&&o}return l.apply(a,arguments)};else{a._fixEvent=function(e,t){if(!e){var i=t&&(t.ownerDocument||t.document||t).parentWindow||window;e=i.event}if(!e)return e;try{f&&e.type==f.type&&e.srcElement==f.target&&(e=f)}catch(n){}if(!e.target)switch(e.target=e.srcElement,e.currentTarget=t||e.srcElement,"mouseover"==e.type&&(e.relatedTarget=e.fromElement),"mouseout"==e.type&&(e.relatedTarget=e.toElement),e.stopPropagation||(e.stopPropagation=b,e.preventDefault=x),e.type){case"keypress":var o="charCode"in e?e.charCode:e.keyCode;10==o?(o=0,e.keyCode=13):13==o||27==o?o=0:3==o&&(o=99),e.charCode=o,v(e)}return e};var f,m=function(e){this.handle=e};m.prototype.remove=function(){delete _dojoIEListeners_[this.handle]};var g=function(e){return function(t){t=a._fixEvent(t,this);var i=e.call(this,t);return t.modified&&(f||setTimeout(function(){f=null}),f=t),i}},_=function(t,n,o){if(o=g(o),((t.ownerDocument?t.ownerDocument.parentWindow:t.parentWindow||t.window||window)!=top||i("jscript")<5.8)&&!i("config-_allow_leaks")){"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var s=t[n];if(!s||!s.listeners){var r=s;s=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}"),s.listeners=[],t[n]=s,s.global=this,r&&s.listeners.push(_dojoIEListeners_.push(r)-1)}var a;return s.listeners.push(a=s.global._dojoIEListeners_.push(o)-1),new m(a)}return e.after(t,n,o,!0)},v=function(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):"",e.charOrCode=e.keyChar||e.keyCode},b=function(){this.cancelBubble=!0},x=a._preventDefault=function(){if(this.bubbledKeyCode=this.keyCode,this.ctrlKey)try{this.keyCode=0}catch(e){}this.defaultPrevented=!0,this.returnValue=!1,this.modified=!0}}if(i("touch"))var y=function(){},j=window.orientation,C=function(e){return function(t){var n=t.corrected;if(!n){var o=t.type;try{delete t.type}catch(s){}if(t.type){if(i("touch-can-modify-event-delegate"))y.prototype=t,n=new y;else{n={};for(var r in t)n[r]=t[r]}n.preventDefault=function(){t.preventDefault()},n.stopPropagation=function(){t.stopPropagation()}}else n=t,n.type=o;if(t.corrected=n,"resize"==o)return j==window.orientation?null:(j=window.orientation,n.type="orientationchange",e.call(this,n));"rotation"in n||(n.rotation=0,n.scale=1);var a=n.changedTouches[0];for(var d in a)delete n[d],n[d]=a[d]}return e.call(this,n)}};return a});//# sourceMappingURL=on.js.map