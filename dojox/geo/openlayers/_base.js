//>>built
define("dojox/geo/openlayers/_base",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.geo.openlayers",!0);t.BaseLayerType={OSM:"OSM",Transport:"OSM.Transport",WMS:"WMS",GOOGLE:"Google",VIRTUAL_EARTH:"VirtualEarth",BING:"VirtualEarth",YAHOO:"Yahoo",ARCGIS:"ArcGIS"},t.EPSG4326=new OpenLayers.Projection("EPSG:4326");var a=/^\s*(\d{1,3})[D°]\s*(\d{1,2})[M']\s*(\d{1,2}\.?\d*)\s*(S|"|'')\s*([NSEWnsew]{0,1})\s*$/i;return t.parseDMS=function(e,t){var i=a.exec(e);if(null==i||i.length<5)return parseFloat(e);var r=parseFloat(i[1]),o=parseFloat(i[2]),n=parseFloat(i[3]),s=i[5];if(t){var l=s.toLowerCase(),d=r+(o+n/60)/60;return"w"!=l&&"s"!=l||(d=-d),d}return[r,o,n,s]},t});//# sourceMappingURL=_base.js.map