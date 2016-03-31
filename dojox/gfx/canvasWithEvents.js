//>>built
define("dojox/gfx/canvasWithEvents",["dojo/_base/lang","dojo/_base/declare","dojo/has","dojo/on","dojo/aspect","dojo/touch","dojo/_base/Color","dojo/dom","dojo/dom-geometry","dojo/_base/window","./_base","./canvas","./shape","./matrix"],function(e,t,a,i,r,n,o,s,l,d,u,m,c,h){function f(t){var a={};for(var i in t)"function"==typeof t[i]?a[i]=e.hitch(t,i):a[i]=t[i];return a}a.add("dom-mutableEvents",function(){var e=document.createEvent("UIEvents");try{return Object.defineProperty?Object.defineProperty(e,"type",{value:"foo"}):e.type="foo","foo"===e.type}catch(t){return!1}});var g=u.canvasWithEvents={};g.Shape=t("dojox.gfx.canvasWithEvents.Shape",m.Shape,{_testInputs:function(e,t){if(this.clip||!this.canvasFill&&this.strokeStyle)this._hitTestPixel(e,t);else{this._renderShape(e);for(var a=t.length,i=this.getTransform(),r=0;a>r;++r){var n=t[r];if(!n.target){var o=n.x,s=n.y,l=i?h.multiplyPoint(h.invert(i),o,s):{x:o,y:s};n.target=this._hitTestGeometry(e,l.x,l.y)}}}},_hitTestPixel:function(e,t){for(var a=0;a<t.length;++a){var i=t[a];if(!i.target){var r=i.x,n=i.y;e.clearRect(0,0,1,1),e.save(),e.translate(-r,-n),this._render(e,!0),i.target=e.getImageData(0,0,1,1).data[0]?this:null,e.restore()}}},_hitTestGeometry:function(e,t,a){return e.isPointInPath(t,a)?this:null},_renderFill:function(e,t){return e.pickingMode?void("canvasFill"in this&&t&&e.fill()):void this.inherited(arguments)},_renderStroke:function(e){if(this.strokeStyle&&e.pickingMode){var t=this.strokeStyle.color;try{this.strokeStyle.color=new o(e.strokeStyle),this.inherited(arguments)}finally{this.strokeStyle.color=t}}else this.inherited(arguments)},getEventSource:function(){return this.surface.rawNode},on:function(e,t){var a=this.rawNode;return i(this.getEventSource(),e,function(e){s.isDescendant(e.target,a)&&t.apply(a,arguments)})},connect:function(t,a,i){return"on"==t.substring(0,2)&&(t=t.substring(2)),this.on(t,i?e.hitch(a,i):e.hitch(null,a))},disconnect:function(e){e.remove()}}),g.Group=t("dojox.gfx.canvasWithEvents.Group",[g.Shape,m.Group],{_testInputs:function(e,t){var a,i,r,n=this.children,o=this.getTransform();if(0!==n.length){var s=[];for(a=0;a<t.length;++a)if(r=t[a],s[a]={x:r.x,y:r.y},!r.target){var l=r.x,d=r.y,u=o?h.multiplyPoint(h.invert(o),l,d):{x:l,y:d};r.x=u.x,r.y=u.y}for(a=n.length-1;a>=0;--a){n[a]._testInputs(e,t);var m=!0;for(i=0;i<t.length;++i)if(null==t[i].target){m=!1;break}if(m)break}if(this.clip)for(a=0;a<t.length;++a)r=t[a],r.x=s[a].x,r.y=s[a].y,r.target&&(e.clearRect(0,0,1,1),e.save(),e.translate(-r.x,-r.y),this._render(e,!0),e.getImageData(0,0,1,1).data[0]||(r.target=null),e.restore());else for(a=0;a<t.length;++a)t[a].x=s[a].x,t[a].y=s[a].y}}}),g.Image=t("dojox.gfx.canvasWithEvents.Image",[g.Shape,m.Image],{_renderShape:function(e){var t=this.shape;e.pickingMode?e.fillRect(t.x,t.y,t.width,t.height):this.inherited(arguments)},_hitTestGeometry:function(e,t,a){var i=this.shape;return t>=i.x&&t<=i.x+i.width&&a>=i.y&&a<=i.y+i.height?this:null}}),g.Text=t("dojox.gfx.canvasWithEvents.Text",[g.Shape,m.Text],{_testInputs:function(e,t){return this._hitTestPixel(e,t)}}),g.Rect=t("dojox.gfx.canvasWithEvents.Rect",[g.Shape,m.Rect],{}),g.Circle=t("dojox.gfx.canvasWithEvents.Circle",[g.Shape,m.Circle],{}),g.Ellipse=t("dojox.gfx.canvasWithEvents.Ellipse",[g.Shape,m.Ellipse],{}),g.Line=t("dojox.gfx.canvasWithEvents.Line",[g.Shape,m.Line],{}),g.Polyline=t("dojox.gfx.canvasWithEvents.Polyline",[g.Shape,m.Polyline],{}),g.Path=t("dojox.gfx.canvasWithEvents.Path",[g.Shape,m.Path],{}),g.TextPath=t("dojox.gfx.canvasWithEvents.TextPath",[g.Shape,m.TextPath],{});var p=null;g.Surface=t("dojox.gfx.canvasWithEvents.Surface",m.Surface,{constructor:function(){this._elementUnderPointer=null},fixTarget:function(e){var t=this;return function(i){var r;if(p)if(a("dom-mutableEvents"))Object.defineProperties(i,p);else{i=f(i);for(r in p)i[r]=p[r].value}else{var n=t.getEventSource(),o=n._dojoElementFromPoint((i.changedTouches?i.changedTouches[0]:i).pageX,(i.changedTouches?i.changedTouches[0]:i).pageY);a("dom-mutableEvents")?Object.defineProperties(i,{target:{value:o,configurable:!0,enumerable:!0},gfxTarget:{value:o.shape,configurable:!0,enumerable:!0}}):(i=f(i),i.target=o,i.gfxTarget=o.shape)}if(a("touch")){if(i.changedTouches&&i.changedTouches[0]){var s=i.changedTouches[0];for(r in s)i[r]||(a("dom-mutableEvents")?Object.defineProperty(i,r,{value:s[r],configurable:!0,enumerable:!0}):i[r]=s[r])}i.corrected=i}return e.call(this,i)}},_checkPointer:function(e){function t(t,a,r){for(var n,s=e.bubbles,l=0;n=t[l];++l)p={target:{value:a,configurable:!0,enumerable:!0},gfxTarget:{value:a.shape,configurable:!0,enumerable:!0},relatedTarget:{value:r,configurable:!0,enumerable:!0}},Object.defineProperty(e,"bubbles",{value:n.bubbles,configurable:!0,enumerable:!0}),i.emit(o,n.type,e),p=null;Object.defineProperty(e,"bubbles",{value:s,configurable:!0,enumerable:!0})}var a={out:[{type:"mouseout",bubbles:!0},{type:"MSPointerOut",bubbles:!0},{type:"pointerout",bubbles:!0},{type:"mouseleave",bubbles:!1},{type:"dojotouchout",bubbles:!0}],over:[{type:"mouseover",bubbles:!0},{type:"MSPointerOver",bubbles:!0},{type:"pointerover",bubbles:!0},{type:"mouseenter",bubbles:!1},{type:"dojotouchover",bubbles:!0}]},r=e.target,n=this._elementUnderPointer,o=this.getEventSource();n!==r&&(n&&n!==o&&t(a.out,n,r),this._elementUnderPointer=r,r&&r!==o&&t(a.over,r,n))},getEventSource:function(){return this.rawNode},on:function(e,t){return i(this.getEventSource(),e,t)},connect:function(t,a,i){return"on"==t.substring(0,2)&&(t=t.substring(2)),this.on(t,i?e.hitch(a,i):a)},disconnect:function(e){e.remove()},_initMirrorCanvas:function(){this._initMirrorCanvas=function(){};var t=this.getEventSource(),r=this.mirrorCanvas=t.ownerDocument.createElement("canvas");r.width=1,r.height=1,r.style.position="absolute",r.style.left=r.style.top="-99999px",t.parentNode.appendChild(r);var n="mousemove";a("pointer-events")?n="pointermove":a("MSPointer")?n="MSPointerMove":a("touch-events")&&(n="touchmove"),i(t,n,e.hitch(this,"_checkPointer"))},destroy:function(){this.mirrorCanvas&&(this.mirrorCanvas.parentNode.removeChild(this.mirrorCanvas),this.mirrorCanvas=null),this.inherited(arguments)}}),g.createSurface=function(e,t,a){if(!t&&!a){var i=l.position(e);t=t||i.w,a=a||i.h}"number"==typeof t&&(t+="px"),"number"==typeof a&&(a+="px");var r=new g.Surface,n=s.byId(e),o=n.ownerDocument.createElement("canvas");o.width=u.normalizedLength(t),o.height=u.normalizedLength(a),n.appendChild(o),r.rawNode=o,r._parent=n,r.surface=r,u._base._fixMsTouchAction(r);var d=o.addEventListener,m=o.removeEventListener,c=[],h=function(e,t,a){r._initMirrorCanvas();var i=r.fixTarget(t);c.push({original:t,actual:i}),d.call(this,e,i,a)},f=function(e,t,a){for(var i,r=0;i=c[r];++r)if(i.original===t){m.call(this,e,i.actual,a),c.splice(r,1);break}};try{Object.defineProperties(o,{addEventListener:{value:h,enumerable:!0,configurable:!0},removeEventListener:{value:f}})}catch(p){o.addEventListener=h,o.removeEventListener=f}return o._dojoElementFromPoint=function(e,t){if(!r.mirrorCanvas)return this;var a=l.position(this,!0);e-=a.x,t-=a.y;var i=r.mirrorCanvas,n=i.getContext("2d"),o=r.children;n.clearRect(0,0,i.width,i.height),n.save(),n.strokeStyle="rgba(127,127,127,1.0)",n.fillStyle="rgba(127,127,127,1.0)",n.pickingMode=!0;for(var s=[{x:e,y:t}],d=o.length-1;d>=0&&(o[d]._testInputs(n,s),!s[0].target);d--);return n.restore(),s[0]&&s[0].target?s[0].target.rawNode:this},r};var y={createObject:function(){var e=this.inherited(arguments),t={};return e.rawNode={shape:e,ownerDocument:e.surface.rawNode.ownerDocument,parentNode:e.parent?e.parent.rawNode:null,addEventListener:function(a,i){for(var n,o=t[a]=t[a]||[],s=0;n=o[s];++s)if(n.listener===i)return;o.push({listener:i,handle:r.after(this,"on"+a,e.surface.fixTarget(i),!0)})},removeEventListener:function(e,a){var i=t[e];if(i)for(var r,n=0;r=i[n];++n)if(r.listener===a)return r.handle.remove(),void i.splice(n,1)}},e}};return g.Group.extend(y),g.Surface.extend(y),g});//# sourceMappingURL=canvasWithEvents.js.map