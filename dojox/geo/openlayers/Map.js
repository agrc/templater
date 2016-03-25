//>>built
define("dojox/geo/openlayers/Map",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/dom","dojo/dom-style","./_base","./TouchInteractionSupport","./Layer","./Patch"],function(e,t,i,a,r,o,n,s,l,d,u){return e.experimental("dojox.geo.openlayers.Map"),u.patchGFX(),t("dojox.geo.openlayers.Map",null,{olMap:null,_tp:null,constructor:function(e,t){t||(t={}),e=o.byId(e),this._tp={x:0,y:0};var i=t.openLayersMapOptions;if(i||(i={controls:[new OpenLayers.Control.ScaleLine({maxWidth:200}),new OpenLayers.Control.Navigation]}),t.accessible){var a=new OpenLayers.Control.KeyboardDefaults;i.controls||(i.controls=[]),i.controls.push(a)}var r=t.baseLayerType;r||(r=s.BaseLayerType.OSM);var n=new OpenLayers.Map(e,i);this.olMap=n,this._layerDictionary={olLayers:[],layers:[]},t.touchHandler&&(this._touchControl=new l(n));var d=this._createBaseLayer(t);this.addLayer(d),this.initialFit(t)},initialFit:function(e){var t=e.initialLocation;t||(t=[-160,70,160,-70]),this.fitTo(t)},setBaseLayerType:function(e){if(e==this.baseLayerType)return null;var t=null;"string"==typeof e?(t={baseLayerName:e,baseLayerType:e},this.baseLayerType=e):"object"==typeof e&&(t=e,this.baseLayerType=t.baseLayerType);var i=null;if(null!=t&&(i=this._createBaseLayer(t),null!=i)){var a=this.olMap,r=a.getZoom(),o=a.getCenter(),n=!!o&&!!a.baseLayer&&!!a.baseLayer.map;if(n){var l=a.getProjectionObject();null!=l&&(o=o.transform(l,s.EPSG4326))}var d=a.baseLayer;if(null!=d){var u=this._getLayer(d);this.removeLayer(u)}null!=i&&this.addLayer(i),n&&(l=a.getProjectionObject(),null!=l&&(o=o.transform(s.EPSG4326,l)),a.setCenter(o,r))}return i},getBaseLayerType:function(){return this.baseLayerType},getScale:function(e){var t=null,i=this.olMap;if(e){var a=i.getUnits();if(!a)return null;var r=OpenLayers.INCHES_PER_UNIT;t=(i.getGeodesicPixelSize().w||1e-6)*r.km*OpenLayers.DOTS_PER_INCH}else t=i.getScale();return t},getOLMap:function(){return this.olMap},_createBaseLayer:function(e){var t=null,i=e.baseLayerType,a=e.baseLayerUrl,r=e.baseLayerName,o=e.baseLayerOptions;switch(r||(r=i),o||(o={}),i){case s.BaseLayerType.OSM:o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM(r,a,o)});break;case s.BaseLayerType.Transport:o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM.TransportMap(r,a,o)});break;case s.BaseLayerType.WMS:a||(a="http://labs.metacarta.com/wms/vmap0",o.layers||(o.layers="basic")),t=new d(r,{olLayer:new OpenLayers.Layer.WMS(r,a,o,{transitionEffect:"resize"})});break;case s.BaseLayerType.GOOGLE:t=new d(r,{olLayer:new OpenLayers.Layer.Google(r,o)});break;case s.BaseLayerType.VIRTUAL_EARTH:t=new d(r,{olLayer:new OpenLayers.Layer.VirtualEarth(r,o)});break;case s.BaseLayerType.YAHOO:t=new d(r,{olLayer:new OpenLayers.Layer.Yahoo(r,o)});break;case s.BaseLayerType.ARCGIS:a||(a="http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/export"),t=new d(r,{olLayer:new OpenLayers.Layer.ArcGIS93Rest(r,a,o,{})})}return null==t&&(i instanceof OpenLayers.Layer?t=i:(o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM(r,a,o)}),this.baseLayerType=s.BaseLayerType.OSM)),t},removeLayer:function(e){var t=this.olMap,i=a.indexOf(this._layerDictionary.layers,e);i>0&&this._layerDictionary.layers.splice(i,1);var r=e.olLayer,o=a.indexOf(this._layerDictionary.olLayers,r);o>0&&this._layerDictionary.olLayers.splice(i,o),t.removeLayer(r,!1)},layerIndex:function(e,t){var i=this.olMap;return t?(i.setLayerIndex(e.olLayer,t),this._layerDictionary.layers.sort(function(e,t){return i.getLayerIndex(e.olLayer)-i.getLayerIndex(t.olLayer)}),this._layerDictionary.olLayers.sort(function(e,t){return i.getLayerIndex(e)-i.getLayerIndex(t)}),t):i.getLayerIndex(e.olLayer)},addLayer:function(e){e.dojoMap=this;var t=this.olMap,i=e.olLayer;this._layerDictionary.olLayers.push(i),this._layerDictionary.layers.push(e),t.addLayer(i),e.added()},_getLayer:function(e){var t=a.indexOf(this._layerDictionary.olLayers,e);return-1!=t?this._layerDictionary.layers[t]:null},getLayer:function(e,t){var i=this.olMap,r=i.getBy("layers",e,t),o=new Array;return a.forEach(r,function(e){o.push(this._getLayer(e))},this),o},getLayerCount:function(){var e=this.olMap;return null==e.layers?0:e.layers.length},fitTo:function(e){var t=this.olMap,i=s.EPSG4326;if(null==e){var a=this.transformXY(0,0,i);return void t.setCenter(new OpenLayers.LonLat(a.x,a.y))}var o=null;if("string"==typeof e)var n=r.fromJson(e);else n=e;var l,d;if(n.hasOwnProperty("bounds")){var u=n.bounds;o=new OpenLayers.Bounds,l=this.transformXY(u[0],u[1],i),o.left=l.x,o.top=l.y,d=this.transformXY(u[2],u[3],i),o.right=d.x,o.bottom=d.y}if(null==o&&n.hasOwnProperty("position")){var h=n.position,m=n.hasOwnProperty("extent")?n.extent:1;"string"==typeof m&&(m=parseFloat(m)),o=new OpenLayers.Bounds,l=this.transformXY(h[0]-m,h[1]+m,i),o.left=l.x,o.top=l.y,d=this.transformXY(h[0]+m,h[1]-m,i),o.right=d.x,o.bottom=d.y}null==o&&4==e.length&&(o=new OpenLayers.Bounds,l=this.transformXY(e[0],e[1],i),o.left=l.x,o.top=l.y,d=this.transformXY(e[2],e[3],i),o.right=d.x,o.bottom=d.y),null!=o&&t.zoomToExtent(o,!0)},transform:function(e,t,i){return this.transformXY(e.x,e.y,t,i)},transformXY:function(e,t,i,a){var r=this._tp;return r.x=e,r.y=t,i||(i=s.EPSG4326),a||(a=this.olMap.getProjectionObject()),r=OpenLayers.Projection.transform(r,i,a)}})});//# sourceMappingURL=Map.js.map