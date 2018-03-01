//>>built
define("dojox/geo/charting/KeyboardInteractionSupport",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/html","dojo/dom","dojox/lang/functional","dojo/keys"],function(e,t,a,i,r,o,n,d){return t("dojox.geo.charting.KeyboardInteractionSupport",null,{_map:null,_zoomEnabled:!1,constructor:function(e,t){this._map=e,t&&(this._zoomEnabled=t.enableZoom)},connect:function(){var e=o.byId(this._map.container);r.attr(e,{tabindex:0,role:"presentation","aria-label":"map"}),this._keydownListener=i.connect(e,"keydown",this,"keydownHandler"),this._onFocusListener=i.connect(e,"focus",this,"onFocus"),this._onBlurListener=i.connect(e,"blur",this,"onBlur")},disconnect:function(){i.disconnect(this._keydownListener),this._keydownListener=null,i.disconnect(this._onFocusListener),this._onFocusListener=null,i.disconnect(this._onBlurListener),this._onBlurListener=null},keydownHandler:function(e){switch(e.keyCode){case d.LEFT_ARROW:this._directTo(-1,-1,1,-1);break;case d.RIGHT_ARROW:this._directTo(-1,-1,-1,1);break;case d.UP_ARROW:this._directTo(1,-1,-1,-1);break;case d.DOWN_ARROW:this._directTo(-1,1,-1,-1);break;case d.SPACE:this._map.selectedFeature&&!this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomIn();break;case d.ESCAPE:this._map.selectedFeature&&this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomOut();break;default:return}a.stop(e)},onFocus:function(e){if(!this._map.selectedFeature&&!this._map.focused){this._map.focused=!0;var t,a=!1;if(this._map.lastSelectedFeature)t=this._map.lastSelectedFeature;else{var i=this._map.getMapCenter(),r=1/0;n.forIn(this._map.mapObj.features,function(e){var a=Math.sqrt(Math.pow(e._center[0]-i.x,2)+Math.pow(e._center[1]-i.y,2));a<r&&(r=a,t=e)}),a=!0}t&&(a&&t._onclickHandler(null),this._map.mapObj.marker.show(t.id))}},onBlur:function(){this._map.lastSelectedFeature=this._map.selectedFeature},_directTo:function(e,t,a,i){var r=this._map.selectedFeature,o=r._center[0],d=r._center[1],s=1/0,l=null;n.forIn(this._map.mapObj.features,function(r){var n=Math.abs(o-r._center[0]),m=Math.abs(d-r._center[1]),u=n+m;(e-t)*(d-r._center[1])>0&&n<m&&s>u&&(s=u,l=r),(a-i)*(o-r._center[0])>0&&n>m&&s>u&&(s=u,l=r)}),l&&(this._map.mapObj.marker.hide(),l._onclickHandler(null),this._map.mapObj.marker.show(l.id))}})});//# sourceMappingURL=KeyboardInteractionSupport.js.map