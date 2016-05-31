//>>built
define("dojox/geo/openlayers/TouchInteractionSupport",["dojo/_base/declare","dojo/_base/connect","dojo/_base/html","dojo/_base/lang","dojo/_base/event","dojo/_base/window"],function(e,t,i,a,r,o){return e("dojox.geo.openlayers.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,_touchMoveListener:null,_touchEndListener:null,_initialFingerSpacing:null,_initialScale:null,_tapCount:null,_tapThreshold:null,_lastTap:null,constructor:function(e){this._map=e,this._centerTouchLocation=new OpenLayers.LonLat(0,0);var i=this._map.div;t.connect(i,"touchstart",this,this._touchStartHandler),t.connect(i,"touchmove",this,this._touchMoveHandler),t.connect(i,"touchend",this,this._touchEndHandler),this._tapCount=0,this._lastTap={x:0,y:0},this._tapThreshold=100},_getTouchBarycenter:function(e){var t=e.touches,a=t[0],r=null;r=t.length>1?t[1]:t[0];var o=i.marginBox(this._map.div),n=(a.pageX+r.pageX)/2-o.l,s=(a.pageY+r.pageY)/2-o.t;return{x:n,y:s}},_getFingerSpacing:function(e){var t=e.touches,i=-1;if(t.length>=2){var a=t[1].pageX-t[0].pageX,r=t[1].pageY-t[0].pageY;i=Math.sqrt(a*a+r*r)}return i},_isDoubleTap:function(e){var t=!1,i=e.touches;if(this._tapCount>0&&1==i.length){var r=i[0].pageX-this._lastTap.x,o=i[0].pageY-this._lastTap.y,n=r*r+o*o;n<this._tapThreshold?t=!0:this._tapCount=0}return this._tapCount++,this._lastTap.x=i[0].pageX,this._lastTap.y=i[0].pageY,setTimeout(a.hitch(this,function(){this._tapCount=0}),300),t},_doubleTapHandler:function(e){var t=e.touches,a=i.marginBox(this._map.div),r=t[0].pageX-a.l,o=t[0].pageY-a.t,n=this._map.getLonLatFromPixel(new OpenLayers.Pixel(r,o));this._map.setCenter(new OpenLayers.LonLat(n.lon,n.lat),this._map.getZoom()+1)},_touchStartHandler:function(e){if(r.stop(e),this._isDoubleTap(e))return void this._doubleTapHandler(e);var i=this._getTouchBarycenter(e);this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(i.x,i.y)),this._initialFingerSpacing=this._getFingerSpacing(e),this._initialScale=this._map.getScale(),this._touchMoveListener||(this._touchMoveListener=t.connect(o.global,"touchmove",this,this._touchMoveHandler)),this._touchEndListener||(this._touchEndListener=t.connect(o.global,"touchend",this,this._touchEndHandler))},_touchEndHandler:function(e){r.stop(e);var i=e.touches;if(0==i.length)this._touchMoveListener&&(t.disconnect(this._touchMoveListener),this._touchMoveListener=null),this._touchEndListener&&(t.disconnect(this._touchEndListener),this._touchEndListener=null);else{var a=this._getTouchBarycenter(e);this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(a.x,a.y))}},_touchMoveHandler:function(e){r.stop(e);var t=this._getTouchBarycenter(e),i=this._map.getLonLatFromPixel(new OpenLayers.Pixel(t.x,t.y)),a=i.lon-this._centerTouchLocation.lon,o=i.lat-this._centerTouchLocation.lat,n=1,s=e.touches;if(s.length>=2){var d=this._getFingerSpacing(e);n=d/this._initialFingerSpacing,this._map.zoomToScale(this._initialScale/n)}var l=this._map.getCenter();this._map.setCenter(new OpenLayers.LonLat(l.lon-a,l.lat-o))}})});//# sourceMappingURL=TouchInteractionSupport.js.map