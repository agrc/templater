//>>built
define("dojox/geo/openlayers/JsonImport",["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(e,t,a,i,r,o,n){return e("dojox.geo.openlayers.JsonImport",null,{constructor:function(e){this._params=e},loadData:function(){var e=this._params;t.get({url:e.url,handleAs:"json",sync:!0,load:a.hitch(this,this._gotData),error:a.hitch(this,this._loadError)})},_gotData:function(e){var t=this._params.nextFeature;if(a.isFunction(t)){var r=e.layerExtent,s=r[0],l=r[1],d=s+r[2],h=l+r[3],u=e.layerExtentLL,m=u[0],c=u[1],f=m+u[2],p=c+u[3],g=m,y=p,v=f,b=c,M=e.features;for(var k in M){var w=M[k],_=w.shape,I=null;if(a.isArray(_[0])){var x=new Array;i.forEach(_,function(e){var t=this._makeGeometry(e,s,l,d,h,g,y,v,b);x.push(t)},this);var T=new o(x);I=new n(T),t.call(this,I)}else I=this._makeFeature(_,s,l,d,h,g,y,v,b),t.call(this,I)}var j=this._params.complete;a.isFunction(j)&&j.call(this,j)}},_makeGeometry:function(e,t,a,i,o,n,s,l,d){for(var h=[],u=0,m=0;m<e.length-1;m+=2){var c=e[m],f=e[m+1];u=(c-t)/(i-t);var p=u*(l-n)+n;u=(f-a)/(o-a);var g=u*(d-s)+s;h.push({x:p,y:g})}var y=new r(h);return y},_makeFeature:function(e,t,a,i,r,o,s,l,d){var h=this._makeGeometry(e,t,a,i,r,o,s,l,d),u=new n(h);return u},_loadError:function(){var e=this._params.error;a.isFunction(e)&&e.apply(this,parameters)}})});//# sourceMappingURL=JsonImport.js.map