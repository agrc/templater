//>>built
define("dojox/analytics/plugins/gestureEvents",["dojo/_base/lang","../_base","dojo/_base/window","dojo/on","dojo/_base/config","dojo/touch","dojox/gesture/tap","dojox/gesture/swipe"],function(e,t,a,i,r,d,o,n){return t.plugins.gestureEvents=new function(){void 0===r.watchSwipe||r.watchSwipe?this.watchSwipe=!0:this.watchSwipe=!1,this.swipeSampleDelay=r.swipeSampleDelay||1e3,this.targetProps=r.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],this.textContentMaxChars=r.textContentMaxChars||50,this.addDataSwipe=e.hitch(t,"addData","gesture.swipe"),this.sampleSwipe=function(t){return this._rateLimited||(this.addDataSwipe(this.trimEvent(t)),this._rateLimited=!0,setTimeout(e.hitch(this,function(){this._rateLimited&&(this.trimEvent(this._lastSwipeEvent),delete this._lastSwipeEvent,delete this._rateLimited)}),this.swipeSampleDelay)),this._lastSwipeEvent=t,t},this.watchSwipe&&i(a.doc,n,e.hitch(this,"sampleSwipe")),this.addData=e.hitch(t,"addData","gesture.tap"),this.onGestureTap=function(e){this.addData(this.trimEvent(e))},i(a.doc,o,e.hitch(this,"onGestureTap")),this.addDataDoubleTap=e.hitch(t,"addData","gesture.tap.doubletap"),this.onGestureDoubleTap=function(e){this.addDataDoubleTap(this.trimEvent(e))},i(a.doc,o.doubletap,e.hitch(this,"onGestureDoubleTap")),this.addDataTapHold=e.hitch(t,"addData","gesture.tap.taphold"),this.onGestureTapHold=function(e){this.addDataTapHold(this.trimEvent(e))},i(a.doc,o.hold,e.hitch(this,"onGestureTapHold")),this.trimEvent=function(e){var t={};for(var a in e)switch(a){case"target":var i=this.targetProps;t[a]={};for(var r=0;r<i.length;r++)e[a][i[r]]&&("text"==i[r]||"textContent"==i[r]?"HTML"!=e[a].localName&&"BODY"!=e[a].localName&&(t[a][i[r]]=e[a][i[r]].substr(0,this.textContentMaxChars)):t[a][i[r]]=e[a][i[r]]);break;case"clientX":case"clientY":case"screenX":case"screenY":case"dx":case"dy":case"time":t[a]=e[a]}return t}}});//# sourceMappingURL=gestureEvents.js.map