//>>built
define("dojox/geo/charting/_Marker",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/sniff","./_base"],function(e,t,i,a){return i("dojox.geo.charting._Marker",null,{_needTooltipRefresh:null,_map:null,constructor:function(e,t){this._map=t;var i=t.mapObj;this.features=i.features,this.markerData=e,_needTooltipRefresh=!1},show:function(e,t){this.currentFeature=this.features[e],this._map.showTooltips&&this.currentFeature&&(this.markerText=this.currentFeature.markerText||this.markerData[e]||e,dojox.geo.charting.showTooltip(this.markerText,this.currentFeature.shape,["before"])),this._needTooltipRefresh=!1},hide:function(){this._map.showTooltips&&this.currentFeature&&dojox.geo.charting.hideTooltip(this.currentFeature.shape),this._needTooltipRefresh=!1},_getGroupBoundingBox:function(i){var a=i.children,o=a[0],r=o.getBoundingBox();this._arround=e.clone(r),t.forEach(a,function(e){var t=e.getBoundingBox();this._arround.x=Math.min(this._arround.x,t.x),this._arround.y=Math.min(this._arround.y,t.y)},this)},_toWindowCoords:function(e,t,i){var o=(e.x-this.topLeft[0])*this.scale,r=(e.y-this.topLeft[1])*this.scale;3.5==a("ff")?(e.x=t.x,e.y=t.y):a("chrome")?(e.x=i.x+o,e.y=i.y+r):(e.x=t.x+o,e.y=t.y+r),e.width=this.currentFeature._bbox[2]*this.scale,e.height=this.currentFeature._bbox[3]*this.scale,e.x+=e.width/6,e.y+=e.height/4}})});//# sourceMappingURL=_Marker.js.map