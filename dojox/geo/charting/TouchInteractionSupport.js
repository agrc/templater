//>>built
define("dojox/geo/charting/TouchInteractionSupport",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/window"],function(e,t,i,a,o){return t("dojox.geo.charting.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,_touchMoveListener:null,_touchEndListener:null,_touchEndTapListener:null,_touchStartListener:null,_initialFingerSpacing:null,_initialScale:null,_tapCount:null,_tapThreshold:null,_lastTap:null,_doubleTapPerformed:!1,_oneFingerTouch:!1,_tapCancel:!1,constructor:function(e){this._map=e,this._centerTouchLocation={x:0,y:0},this._tapCount=0,this._lastTap={x:0,y:0},this._tapThreshold=100},connect:function(){this._touchStartListener=this._map.surface.connect("touchstart",this,this._touchStartHandler)},disconnect:function(){this._touchStartListener&&(a.disconnect(this._touchStartListener),this._touchStartListener=null)},_getTouchBarycenter:function(e){var t=e.touches,i=t[0],a=null;a=t.length>1?t[1]:t[0];var o=this._map._getContainerBounds(),r=(i.pageX+a.pageX)/2-o.x,n=(i.pageY+a.pageY)/2-o.y;return{x:r,y:n}},_getFingerSpacing:function(e){var t=e.touches,i=-1;if(t.length>=2){var a=t[1].pageX-t[0].pageX,o=t[1].pageY-t[0].pageY;i=Math.sqrt(a*a+o*o)}return i},_isDoubleTap:function(t){var i=!1,a=t.touches;if(this._tapCount>0&&1==a.length){var o=a[0].pageX-this._lastTap.x,r=a[0].pageY-this._lastTap.y,n=o*o+r*r;n<this._tapThreshold?i=!0:this._tapCount=0}return this._tapCount++,this._lastTap.x=a[0].pageX,this._lastTap.y=a[0].pageY,setTimeout(e.hitch(this,function(){this._tapCount=0}),300),i},_doubleTapHandler:function(e){var t=this._getFeatureFromTouchEvent(e);if(t)this._map.fitToMapArea(t._bbox,15,!0);else{var i=e.touches,a=this._map._getContainerBounds(),o=i[0].pageX-a.x,r=i[0].pageY-a.y,n=this._map.screenCoordsToMapCoords(o,r);this._map.setMapCenterAndScale(n.x,n.y,2*this._map.getMapScale(),!0)}},_getFeatureFromTouchEvent:function(e){var t=null;return e.gfxTarget&&e.gfxTarget.getParent&&(t=this._map.mapObj.features[e.gfxTarget.getParent().id]),t},_touchStartHandler:function(e){if(i.stop(e),this._oneFingerTouch=1==e.touches.length,this._tapCancel=!this._oneFingerTouch,this._doubleTapPerformed=!1,this._isDoubleTap(e))return this._doubleTapHandler(e),void(this._doubleTapPerformed=!0);var t=this._getTouchBarycenter(e),r=this._map.screenCoordsToMapCoords(t.x,t.y);this._centerTouchLocation.x=r.x,this._centerTouchLocation.y=r.y,this._initialFingerSpacing=this._getFingerSpacing(e),this._initialScale=this._map.getMapScale(),this._touchMoveListener||(this._touchMoveListener=a.connect(o.global,"touchmove",this,this._touchMoveHandler)),this._touchEndTapListener||(this._touchEndTapListener=this._map.surface.connect("touchend",this,this._touchEndTapHandler)),this._touchEndListener||(this._touchEndListener=a.connect(o.global,"touchend",this,this._touchEndHandler))},_touchEndTapHandler:function(t){var i=t.touches;0==i.length&&(this._oneFingerTouch&&!this._tapCancel&&(this._oneFingerTouch=!1,setTimeout(e.hitch(this,function(){if(!this._doubleTapPerformed){var e=t.changedTouches[0].pageX-this._lastTap.x,i=t.changedTouches[0].pageY-this._lastTap.y,a=e*e+i*i;a<this._tapThreshold&&this._singleTapHandler(t)}}),350)),this._tapCancel=!1)},_touchEndHandler:function(e){i.stop(e);var t=e.touches;if(0==t.length)this._touchMoveListener&&(a.disconnect(this._touchMoveListener),this._touchMoveListener=null),this._touchEndListener&&(a.disconnect(this._touchEndListener),this._touchEndListener=null);else{var o=this._getTouchBarycenter(e),r=this._map.screenCoordsToMapCoords(o.x,o.y);this._centerTouchLocation.x=r.x,this._centerTouchLocation.y=r.y}},_singleTapHandler:function(e){var t=this._getFeatureFromTouchEvent(e);if(t)t._onclickHandler(e);else{for(var i in this._map.mapObj.features)this._map.mapObj.features[i].select(!1);this._map.onFeatureClick(null)}},_touchMoveHandler:function(e){if(i.stop(e),!this._tapCancel){var t=e.touches[0].pageX-this._lastTap.x,a=e.touches[0].pageY-this._lastTap.y,o=t*t+a*a;o>this._tapThreshold&&(this._tapCancel=!0)}var r=this._getTouchBarycenter(e),n=this._map.screenCoordsToMapCoords(r.x,r.y),d=n.x-this._centerTouchLocation.x,s=n.y-this._centerTouchLocation.y,l=1,u=e.touches;if(u.length>=2){var h=this._getFingerSpacing(e);l=h/this._initialFingerSpacing,this._map.setMapScale(this._initialScale*l)}var c=this._map.getMapCenter();this._map.setMapCenter(c.x-d,c.y-s)}})});//# sourceMappingURL=TouchInteractionSupport.js.map