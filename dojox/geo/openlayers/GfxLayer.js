//>>built
define("dojox/geo/openlayers/GfxLayer",["dojo/_base/declare","dojo/_base/connect","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","./Feature","./Layer"],function(e,t,i,a,o,n,r){return e("dojox.geo.openlayers.GfxLayer",r,{_viewport:null,constructor:function(e,i){var o=a.createSurface(this.olLayer.div,100,100);this._surface=o;var n;n=i&&i.viewport?i.viewport:o.createGroup(),this.setViewport(n),t.connect(this.olLayer,"onMapResize",this,"onMapResize"),this.olLayer.getDataExtent=this.getDataExtent},getViewport:function(){return this._viewport},setViewport:function(e){this._viewport&&this._viewport.removeShape(),this._viewport=e,this._surface.add(e)},onMapResize:function(){this._surfaceSize()},setMap:function(e){this.inherited(arguments),this._surfaceSize()},getDataExtent:function(){return this._surface.getDimensions()},getSurface:function(){return this._surface},_surfaceSize:function(){var e=this.olLayer.map.getSize();this._surface.setDimensions(e.w,e.h)},moveTo:function(e){var t=i.get(this.olLayer.map.layerContainerDiv),a=parseInt(t.left),n=parseInt(t.top);if(e.zoomChanged||a||n){var r=this.olLayer.div;if(i.set(r,{left:-a+"px",top:-n+"px"}),null==this._features)return;this.getViewport().setTransform(o.translate(a,n)),this.inherited(arguments)}},added:function(){this.inherited(arguments),this._surfaceSize()}})});//# sourceMappingURL=GfxLayer.js.map