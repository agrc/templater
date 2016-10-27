//>>built
define("dojox/geo/openlayers/GreatCircle",["dojo/_base/lang","./_base","./GeometryFeature"],function(e,t,a){var i=t.GreatCircle={toPointArray:function(e,t,a){var i=e.x,r=t.x,n=Math.min(i,r),o=Math.max(i,r),s=this.DEG2RAD,d=e.y*s,l=e.x*s,u=t.y*s,h=t.x*s;if(Math.abs(l-h)<=this.TOLERANCE){var m=Math.min(l,h);h=m+Math.PI}Math.abs(h-l)==Math.PI&&d+u==0&&(u+=Math.PI/18e7);for(var c=n*s,f=o*s,p=a*s,g=[],y=0,v=this.RAD2DEG;f>=c;){lat=Math.atan((Math.sin(d)*Math.cos(u)*Math.sin(c-h)-Math.sin(u)*Math.cos(d)*Math.sin(c-l))/(Math.cos(d)*Math.cos(u)*Math.sin(l-h)));var b={x:c*v,y:lat*v};g[y++]=b,f>c&&c+p>=f?c=f:c+=p}return g},toLineString:function(e,t,a){var i=this.toPointArray(e,t,a),r=new OpenLayers.Geometry.LineString(i);return r},toGeometryFeature:function(e,t,i){var r=this.toLineString(e,t,i);return new a(r)},DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,TOLERANCE:1e-5};return i});//# sourceMappingURL=GreatCircle.js.map