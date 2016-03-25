//>>built
define("dojox/geo/charting/KeyboardInteractionSupport",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/html","dojo/dom","dojox/lang/functional","dojo/keys"],function(e,t,a,i,n,o,r,s){return t("dojox.geo.charting.KeyboardInteractionSupport",null,{_map:null,_zoomEnabled:!1,constructor:function(e,t){this._map=e,t&&(this._zoomEnabled=t.enableZoom)},connect:function(){var e=o.byId(this._map.container);n.attr(e,{tabindex:0,role:"presentation","aria-label":"map"}),this._keydownListener=i.connect(e,"keydown",this,"keydownHandler"),this._onFocusListener=i.connect(e,"focus",this,"onFocus"),this._onBlurListener=i.connect(e,"blur",this,"onBlur")},disconnect:function(){i.disconnect(this._keydownListener),this._keydownListener=null,i.disconnect(this._onFocusListener),this._onFocusListener=null,i.disconnect(this._onBlurListener),this._onBlurListener=null},keydownHandler:function(e){switch(e.keyCode){case s.LEFT_ARROW:this._directTo(-1,-1,1,-1);break;case s.RIGHT_ARROW:this._directTo(-1,-1,-1,1);break;case s.UP_ARROW:this._directTo(1,-1,-1,-1);break;case s.DOWN_ARROW:this._directTo(-1,1,-1,-1);break;case s.SPACE:this._map.selectedFeature&&!this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomIn();break;case s.ESCAPE:this._map.selectedFeature&&this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomOut();break;default:return}a.stop(e)},onFocus:function(e){if(!this._map.selectedFeature&&!this._map.focused){this._map.focused=!0;var t,a=!1;if(this._map.lastSelectedFeature)t=this._map.lastSelectedFeature;else{var i=this._map.getMapCenter(),n=1/0;r.forIn(this._map.mapObj.features,function(e){var a=Math.sqrt(Math.pow(e._center[0]-i.x,2)+Math.pow(e._center[1]-i.y,2));n>a&&(n=a,t=e)}),a=!0}t&&(a&&t._onclickHandler(null),this._map.mapObj.marker.show(t.id))}},onBlur:function(){this._map.lastSelectedFeature=this._map.selectedFeature},_directTo:function(e,t,a,i){var n=this._map.selectedFeature,o=n._center[0],s=n._center[1],l=1/0,d=null;r.forIn(this._map.mapObj.features,function(n){var r=Math.abs(o-n._center[0]),c=Math.abs(s-n._center[1]),u=r+c;(e-t)*(s-n._center[1])>0&&c>r&&l>u&&(l=u,d=n),(a-i)*(o-n._center[0])>0&&r>c&&l>u&&(l=u,d=n)}),d&&(this._map.mapObj.marker.hide(),d._onclickHandler(null),this._map.mapObj.marker.show(d.id))}})});//# sourceMappingURL=KeyboardInteractionSupport.js.map