//>>built
define("dojox/widget/rotator/Wipe",["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(e,t,i){function a(e,t,i,a){var r=[0,t,0,0];return e==s?r=[0,t,i,t]:e==l?r=[i,t,i,0]:e==d&&(r=[0,0,i,0]),null!=a&&(r[e]=e==o||e==d?a:(e%2?t:i)-a),r}function r(e,t,r,n,o){i.set(e,"clip",null==t?"auto":"rect("+a(t,r,n,o).join("px,")+"px)")}function n(a,n){var o=n.next.node,s=n.rotatorBox.w,l=n.rotatorBox.h;return i.set(o,{display:"",zIndex:(i.get(n.current.node,"zIndex")||1)+1}),r(o,a,s,l),new t.Animation(e.mixin({node:o,curve:[0,a%2?s:l],onAnimate:function(e){r(o,a,s,l,parseInt(e))}},n))}var o=2,s=3,l=0,d=1,u={wipeDown:function(e){return n(o,e)},wipeRight:function(e){return n(s,e)},wipeUp:function(e){return n(l,e)},wipeLeft:function(e){return n(d,e)}};return e.mixin(e.getObject("dojox.widget.rotator"),u),u});//# sourceMappingURL=Wipe.js.map