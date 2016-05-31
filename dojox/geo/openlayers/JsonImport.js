//>>built
define("dojox/geo/openlayers/JsonImport",["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(e,t,i,a,r,n,o){return e("dojox.geo.openlayers.JsonImport",null,{constructor:function(e){this._params=e},loadData:function(){var e=this._params;t.get({url:e.url,handleAs:"json",sync:!0,load:i.hitch(this,this._gotData),error:i.hitch(this,this._loadError)})},_gotData:function(e){var t=this._params.nextFeature;if(i.isFunction(t)){var r=e.layerExtent,s=r[0],l=r[1],d=s+r[2],m=l+r[3],u=e.layerExtentLL,h=u[0],c=u[1],f=h+u[2],p=c+u[3],g=h,v=p,y=f,k=c,b=e.features;for(var M in b){var w=b[M],_=w.shape,j=null;if(i.isArray(_[0])){var I=new Array;a.forEach(_,function(e){var t=this._makeGeometry(e,s,l,d,m,g,v,y,k);I.push(t)},this);var x=new n(I);j=new o(x),t.call(this,j)}else j=this._makeFeature(_,s,l,d,m,g,v,y,k),t.call(this,j)}var T=this._params.complete;i.isFunction(T)&&T.call(this,T)}},_makeGeometry:function(e,t,i,a,n,o,s,l,d){for(var m=[],u=0,h=0;h<e.length-1;h+=2){var c=e[h],f=e[h+1];u=(c-t)/(a-t);var p=u*(l-o)+o;u=(f-i)/(n-i);var g=u*(d-s)+s;m.push({x:p,y:g})}var v=new r(m);return v},_makeFeature:function(e,t,i,a,r,n,s,l,d){var m=this._makeGeometry(e,t,i,a,r,n,s,l,d),u=new o(m);return u},_loadError:function(){var e=this._params.error;i.isFunction(e)&&e.apply(this,parameters)}})});//# sourceMappingURL=JsonImport.js.map