//>>built
define("dojox/geo/openlayers/GfxLayer",["dojo/_base/declare","dojo/_base/connect","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","./Feature","./Layer"],function(e,t,a,i,r,n,o){return e("dojox.geo.openlayers.GfxLayer",o,{_viewport:null,constructor:function(e,a){var r=i.createSurface(this.olLayer.div,100,100);this._surface=r;var n;n=a&&a.viewport?a.viewport:r.createGroup(),this.setViewport(n),t.connect(this.olLayer,"onMapResize",this,"onMapResize"),this.olLayer.getDataExtent=this.getDataExtent},getViewport:function(){return this._viewport},setViewport:function(e){this._viewport&&this._viewport.removeShape(),this._viewport=e,this._surface.add(e)},onMapResize:function(){this._surfaceSize()},setMap:function(e){this.inherited(arguments),this._surfaceSize()},getDataExtent:function(){var e=this._surface.getDimensions();return e},getSurface:function(){return this._surface},_surfaceSize:function(){var e=this.olLayer.map.getSize();this._surface.setDimensions(e.w,e.h)},moveTo:function(e){var t=a.get(this.olLayer.map.layerContainerDiv),i=parseInt(t.left),n=parseInt(t.top);if(e.zoomChanged||i||n){var o=this.olLayer.div;if(a.set(o,{left:-i+"px",top:-n+"px"}),null==this._features)return;var s=this.getViewport();s.setTransform(r.translate(i,n)),this.inherited(arguments)}},added:function(){this.inherited(arguments),this._surfaceSize()}})});//# sourceMappingURL=GfxLayer.js.map