//>>built
define("dojox/geo/openlayers/Map",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/dom","dojo/dom-style","./_base","./TouchInteractionSupport","./Layer","./Patch"],function(e,t,a,i,r,o,n,s,l,d,u){return e.experimental("dojox.geo.openlayers.Map"),u.patchGFX(),t("dojox.geo.openlayers.Map",null,{olMap:null,_tp:null,constructor:function(e,t){t||(t={}),e=o.byId(e),this._tp={x:0,y:0};var a=t.openLayersMapOptions;if(a||(a={controls:[new OpenLayers.Control.ScaleLine({maxWidth:200}),new OpenLayers.Control.Navigation]}),t.accessible){var i=new OpenLayers.Control.KeyboardDefaults;a.controls||(a.controls=[]),a.controls.push(i)}var r=t.baseLayerType;r||(r=s.BaseLayerType.OSM);var n=new OpenLayers.Map(e,a);this.olMap=n,this._layerDictionary={olLayers:[],layers:[]},t.touchHandler&&(this._touchControl=new l(n));var d=this._createBaseLayer(t);this.addLayer(d),this.initialFit(t)},initialFit:function(e){var t=e.initialLocation;t||(t=[-160,70,160,-70]),this.fitTo(t)},setBaseLayerType:function(e){if(e==this.baseLayerType)return null;var t=null;"string"==typeof e?(t={baseLayerName:e,baseLayerType:e},this.baseLayerType=e):"object"==typeof e&&(t=e,this.baseLayerType=t.baseLayerType);var a=null;if(null!=t&&(a=this._createBaseLayer(t),null!=a)){var i=this.olMap,r=i.getZoom(),o=i.getCenter(),n=!!o&&!!i.baseLayer&&!!i.baseLayer.map;if(n){var l=i.getProjectionObject();null!=l&&(o=o.transform(l,s.EPSG4326))}var d=i.baseLayer;if(null!=d){var u=this._getLayer(d);this.removeLayer(u)}null!=a&&this.addLayer(a),n&&(l=i.getProjectionObject(),null!=l&&(o=o.transform(s.EPSG4326,l)),i.setCenter(o,r))}return a},getBaseLayerType:function(){return this.baseLayerType},getScale:function(e){var t=null,a=this.olMap;if(e){var i=a.getUnits();if(!i)return null;var r=OpenLayers.INCHES_PER_UNIT;t=(a.getGeodesicPixelSize().w||1e-6)*r.km*OpenLayers.DOTS_PER_INCH}else t=a.getScale();return t},getOLMap:function(){return this.olMap},_createBaseLayer:function(e){var t=null,a=e.baseLayerType,i=e.baseLayerUrl,r=e.baseLayerName,o=e.baseLayerOptions;switch(r||(r=a),o||(o={}),a){case s.BaseLayerType.OSM:o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM(r,i,o)});break;case s.BaseLayerType.Transport:o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM.TransportMap(r,i,o)});break;case s.BaseLayerType.WMS:i||(i="http://labs.metacarta.com/wms/vmap0",o.layers||(o.layers="basic")),t=new d(r,{olLayer:new OpenLayers.Layer.WMS(r,i,o,{transitionEffect:"resize"})});break;case s.BaseLayerType.GOOGLE:t=new d(r,{olLayer:new OpenLayers.Layer.Google(r,o)});break;case s.BaseLayerType.VIRTUAL_EARTH:t=new d(r,{olLayer:new OpenLayers.Layer.VirtualEarth(r,o)});break;case s.BaseLayerType.YAHOO:t=new d(r,{olLayer:new OpenLayers.Layer.Yahoo(r,o)});break;case s.BaseLayerType.ARCGIS:i||(i="http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/export"),t=new d(r,{olLayer:new OpenLayers.Layer.ArcGIS93Rest(r,i,o,{})})}return null==t&&(a instanceof OpenLayers.Layer?t=a:(o.transitionEffect="resize",t=new d(r,{olLayer:new OpenLayers.Layer.OSM(r,i,o)}),this.baseLayerType=s.BaseLayerType.OSM)),t},removeLayer:function(e){var t=this.olMap,a=i.indexOf(this._layerDictionary.layers,e);a>0&&this._layerDictionary.layers.splice(a,1);var r=e.olLayer,o=i.indexOf(this._layerDictionary.olLayers,r);o>0&&this._layerDictionary.olLayers.splice(a,o),t.removeLayer(r,!1)},layerIndex:function(e,t){var a=this.olMap;return t?(a.setLayerIndex(e.olLayer,t),this._layerDictionary.layers.sort(function(e,t){return a.getLayerIndex(e.olLayer)-a.getLayerIndex(t.olLayer)}),this._layerDictionary.olLayers.sort(function(e,t){return a.getLayerIndex(e)-a.getLayerIndex(t)}),t):a.getLayerIndex(e.olLayer)},addLayer:function(e){e.dojoMap=this;var t=this.olMap,a=e.olLayer;this._layerDictionary.olLayers.push(a),this._layerDictionary.layers.push(e),t.addLayer(a),e.added()},_getLayer:function(e){var t=i.indexOf(this._layerDictionary.olLayers,e);return-1!=t?this._layerDictionary.layers[t]:null},getLayer:function(e,t){var a=this.olMap,r=a.getBy("layers",e,t),o=new Array;return i.forEach(r,function(e){o.push(this._getLayer(e))},this),o},getLayerCount:function(){var e=this.olMap;return null==e.layers?0:e.layers.length},fitTo:function(e){var t=this.olMap,a=s.EPSG4326;if(null==e){var i=this.transformXY(0,0,a);return void t.setCenter(new OpenLayers.LonLat(i.x,i.y))}var o=null;if("string"==typeof e)var n=r.fromJson(e);else n=e;var l,d;if(n.hasOwnProperty("bounds")){var u=n.bounds;o=new OpenLayers.Bounds,l=this.transformXY(u[0],u[1],a),o.left=l.x,o.top=l.y,d=this.transformXY(u[2],u[3],a),o.right=d.x,o.bottom=d.y}if(null==o&&n.hasOwnProperty("position")){var m=n.position,h=n.hasOwnProperty("extent")?n.extent:1;"string"==typeof h&&(h=parseFloat(h)),o=new OpenLayers.Bounds,l=this.transformXY(m[0]-h,m[1]+h,a),o.left=l.x,o.top=l.y,d=this.transformXY(m[0]+h,m[1]-h,a),o.right=d.x,o.bottom=d.y}null==o&&4==e.length&&(o=new OpenLayers.Bounds,l=this.transformXY(e[0],e[1],a),o.left=l.x,o.top=l.y,d=this.transformXY(e[2],e[3],a),o.right=d.x,o.bottom=d.y),null!=o&&t.zoomToExtent(o,!0)},transform:function(e,t,a){return this.transformXY(e.x,e.y,t,a)},transformXY:function(e,t,a,i){var r=this._tp;return r.x=e,r.y=t,a||(a=s.EPSG4326),i||(i=this.olMap.getProjectionObject()),r=OpenLayers.Projection.transform(r,a,i)}})});//# sourceMappingURL=Map.js.map