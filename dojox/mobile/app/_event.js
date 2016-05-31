//>>built
define("dojox/mobile/app/_event",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.mobile.app._event"),e.experimental("dojox.mobile.app._event.js"),e.mixin(i.mobile.app,{eventMap:{},connectFlick:function(t,i,o){var a,n,r,s,l,d,h,c,u=!1,m=(e.connect("onmousedown",t,function(i){u=!1,a=i.targetTouches?i.targetTouches[0].clientX:i.clientX,n=i.targetTouches?i.targetTouches[0].clientY:i.clientY,c=(new Date).getTime(),l=e.connect(t,"onmousemove",m),d=e.connect(t,"onmouseup",f)}),function(t){e.stopEvent(t),r=t.targetTouches?t.targetTouches[0].clientX:t.clientX,s=t.targetTouches?t.targetTouches[0].clientY:t.clientY,Math.abs(Math.abs(r)-Math.abs(a))>15?(u=!0,h=r>a?"ltr":"rtl"):Math.abs(Math.abs(s)-Math.abs(n))>15&&(u=!0,h=s>n?"ttb":"btt")}),f=function(a){if(e.stopEvent(a),l&&e.disconnect(l),d&&e.disconnect(d),u){var n={target:t,direction:h,duration:(new Date).getTime()-c};i&&o?i[o](n):o(n)}}}}),i.mobile.app.isIPhone=e.isSafari&&(navigator.userAgent.indexOf("iPhone")>-1||navigator.userAgent.indexOf("iPod")>-1),i.mobile.app.isWebOS=navigator.userAgent.indexOf("webOS")>-1,i.mobile.app.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>-1,(i.mobile.app.isIPhone||i.mobile.app.isAndroid)&&(i.mobile.app.eventMap={onmousedown:"ontouchstart",mousedown:"ontouchstart",onmouseup:"ontouchend",mouseup:"ontouchend",onmousemove:"ontouchmove",mousemove:"ontouchmove"}),e._oldConnect=e._connect,e._connect=function(t,o,a,n,r){if(o=i.mobile.app.eventMap[o]||o,"flick"==o||"onflick"==o){if(!e.global.Mojo)return i.mobile.app.connectFlick(t,a,n);o=Mojo.Event.flick}return e._oldConnect(t,o,a,n,r)}});//# sourceMappingURL=_event.js.map