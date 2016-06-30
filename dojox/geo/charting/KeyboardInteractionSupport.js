//>>built
define("dojox/geo/charting/KeyboardInteractionSupport",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/html","dojo/dom","dojox/lang/functional","dojo/keys"],function(e,t,i,a,n,r,o,s){return t("dojox.geo.charting.KeyboardInteractionSupport",null,{_map:null,_zoomEnabled:!1,constructor:function(e,t){this._map=e,t&&(this._zoomEnabled=t.enableZoom)},connect:function(){var e=r.byId(this._map.container);n.attr(e,{tabindex:0,role:"presentation","aria-label":"map"}),this._keydownListener=a.connect(e,"keydown",this,"keydownHandler"),this._onFocusListener=a.connect(e,"focus",this,"onFocus"),this._onBlurListener=a.connect(e,"blur",this,"onBlur")},disconnect:function(){a.disconnect(this._keydownListener),this._keydownListener=null,a.disconnect(this._onFocusListener),this._onFocusListener=null,a.disconnect(this._onBlurListener),this._onBlurListener=null},keydownHandler:function(e){switch(e.keyCode){case s.LEFT_ARROW:this._directTo(-1,-1,1,-1);break;case s.RIGHT_ARROW:this._directTo(-1,-1,-1,1);break;case s.UP_ARROW:this._directTo(1,-1,-1,-1);break;case s.DOWN_ARROW:this._directTo(-1,1,-1,-1);break;case s.SPACE:this._map.selectedFeature&&!this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomIn();break;case s.ESCAPE:this._map.selectedFeature&&this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomOut();break;default:return}i.stop(e)},onFocus:function(e){if(!this._map.selectedFeature&&!this._map.focused){this._map.focused=!0;var t,i=!1;if(this._map.lastSelectedFeature)t=this._map.lastSelectedFeature;else{var a=this._map.getMapCenter(),n=1/0;o.forIn(this._map.mapObj.features,function(e){var i=Math.sqrt(Math.pow(e._center[0]-a.x,2)+Math.pow(e._center[1]-a.y,2));n>i&&(n=i,t=e)}),i=!0}t&&(i&&t._onclickHandler(null),this._map.mapObj.marker.show(t.id))}},onBlur:function(){this._map.lastSelectedFeature=this._map.selectedFeature},_directTo:function(e,t,i,a){var n=this._map.selectedFeature,r=n._center[0],s=n._center[1],l=1/0,d=null;o.forIn(this._map.mapObj.features,function(n){var o=Math.abs(r-n._center[0]),u=Math.abs(s-n._center[1]),c=o+u;(e-t)*(s-n._center[1])>0&&u>o&&l>c&&(l=c,d=n),(i-a)*(r-n._center[0])>0&&o>u&&l>c&&(l=c,d=n)}),d&&(this._map.mapObj.marker.hide(),d._onclickHandler(null),this._map.mapObj.marker.show(d.id))}})});//# sourceMappingURL=KeyboardInteractionSupport.js.map