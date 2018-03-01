//>>built
define("dojox/geo/openlayers/JsonImport",["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(e,t,i,a,r,o,n){return e("dojox.geo.openlayers.JsonImport",null,{constructor:function(e){this._params=e},loadData:function(){var e=this._params;t.get({url:e.url,handleAs:"json",sync:!0,load:i.hitch(this,this._gotData),error:i.hitch(this,this._loadError)})},_gotData:function(e){var t=this._params.nextFeature;if(i.isFunction(t)){var r=e.layerExtent,s=r[0],d=r[1],l=s+r[2],h=d+r[3],u=e.layerExtentLL,m=u[0],c=u[1],f=m+u[2],p=c+u[3],y=m,g=p,v=f,k=c,b=e.features;for(var M in b){var w=b[M],_=w.shape,x=null;if(i.isArray(_[0])){var j=new Array;a.forEach(_,function(e){var t=this._makeGeometry(e,s,d,l,h,y,g,v,k);j.push(t)},this);var I=new o(j);x=new n(I),t.call(this,x)}else x=this._makeFeature(_,s,d,l,h,y,g,v,k),t.call(this,x)}var T=this._params.complete;i.isFunction(T)&&T.call(this,T)}},_makeGeometry:function(e,t,i,a,o,n,s,d,l){for(var h=[],u=0,m=0;m<e.length-1;m+=2){var c=e[m],f=e[m+1];u=(c-t)/(a-t);var p=u*(d-n)+n;u=(f-i)/(o-i);var y=u*(l-s)+s;h.push({x:p,y:y})}return new r(h)},_makeFeature:function(e,t,i,a,r,o,s,d,l){var h=this._makeGeometry(e,t,i,a,r,o,s,d,l);return new n(h)},_loadError:function(){var e=this._params.error;i.isFunction(e)&&e.apply(this,parameters)}})});//# sourceMappingURL=JsonImport.js.map