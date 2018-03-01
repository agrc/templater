//>>built
define("dojox/analytics/plugins/gestureEvents",["dojo/_base/lang","../_base","dojo/_base/window","dojo/on","dojo/_base/config","dojo/touch","dojox/gesture/tap","dojox/gesture/swipe"],function(e,t,i,a,r,n,o,s){return t.plugins.gestureEvents=new function(){void 0===r.watchSwipe||r.watchSwipe?this.watchSwipe=!0:this.watchSwipe=!1,this.swipeSampleDelay=r.swipeSampleDelay||1e3,this.targetProps=r.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],this.textContentMaxChars=r.textContentMaxChars||50,this.addDataSwipe=e.hitch(t,"addData","gesture.swipe"),this.sampleSwipe=function(t){return this._rateLimited||(this.addDataSwipe(this.trimEvent(t)),this._rateLimited=!0,setTimeout(e.hitch(this,function(){this._rateLimited&&(this.trimEvent(this._lastSwipeEvent),delete this._lastSwipeEvent,delete this._rateLimited)}),this.swipeSampleDelay)),this._lastSwipeEvent=t,t},this.watchSwipe&&a(i.doc,s,e.hitch(this,"sampleSwipe")),this.addData=e.hitch(t,"addData","gesture.tap"),this.onGestureTap=function(e){this.addData(this.trimEvent(e))},a(i.doc,o,e.hitch(this,"onGestureTap")),this.addDataDoubleTap=e.hitch(t,"addData","gesture.tap.doubletap"),this.onGestureDoubleTap=function(e){this.addDataDoubleTap(this.trimEvent(e))},a(i.doc,o.doubletap,e.hitch(this,"onGestureDoubleTap")),this.addDataTapHold=e.hitch(t,"addData","gesture.tap.taphold"),this.onGestureTapHold=function(e){this.addDataTapHold(this.trimEvent(e))},a(i.doc,o.hold,e.hitch(this,"onGestureTapHold")),this.trimEvent=function(e){var t={};for(var i in e)switch(i){case"target":var a=this.targetProps;t[i]={};for(var r=0;r<a.length;r++)e[i][a[r]]&&("text"==a[r]||"textContent"==a[r]?"HTML"!=e[i].localName&&"BODY"!=e[i].localName&&(t[i][a[r]]=e[i][a[r]].substr(0,this.textContentMaxChars)):t[i][a[r]]=e[i][a[r]]);break;case"clientX":case"clientY":case"screenX":case"screenY":case"dx":case"dy":case"time":t[i]=e[i]}return t}}});//# sourceMappingURL=gestureEvents.js.map