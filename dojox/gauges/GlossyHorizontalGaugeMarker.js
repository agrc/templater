//>>built
define("dojox/gauges/GlossyHorizontalGaugeMarker",["dojo/_base/declare","dojo/_base/Color","./BarLineIndicator"],function(e,t,a){return e("dojox.gauges.GlossyHorizontalGaugeMarker",[a],{interactionMode:"gauge",color:"black",_getShapes:function(e){if(!this._gauge)return null;var a=this.value;a<this._gauge.min&&(a=this._gauge.min),a>this._gauge.max&&(a=this._gauge.max);var i=this._gauge._getPosition(a),r=[],n=new t(this.color);n.a=.67;var o=t.blendColors(n,new t("white"),.4),s=r[0]=e.createGroup(),l=this._gauge.height/100;l=Math.max(l,.5),l=Math.min(l,1),s.setTransform({xx:1,xy:0,yx:0,yy:1,dx:i,dy:0});var d=s.createGroup().setTransform({xx:1,xy:0,yx:0,yy:1,dx:10*-l,dy:this._gauge.dataY+this.offset}),m=d.createGroup().setTransform({xx:l,xy:0,yx:0,yy:l,dx:0,dy:0});return m.createRect({x:.5,y:0,width:20,height:47,r:6}).setFill(n).setStroke(o),m.createPath({path:"M 10.106 41 L 10.106 6 C 10.106 2.687 7.419 0 4.106 0 L 0.372 0 C -0.738 6.567 1.022 15.113 1.022 23.917 C 1.022 32.721 2.022 40.667 0.372 47 L 4.106 47 C 7.419 47 10.106 44.314 10.106 41 Z"}).setFill(o).setTransform({xx:1,xy:0,yx:0,yy:1,dx:10.306,dy:.009}),m.createRect({x:9.5,y:1.5,width:2,height:34,r:.833717}).setFill(n).setStroke(this.color),m.createRect({x:9,y:0,width:3,height:34,r:6}).setFill({type:"linear",x1:9,y1:0,x2:9,y2:34,colors:[{offset:0,color:"white"},{offset:1,color:this.color}]}),r}})});//# sourceMappingURL=GlossyHorizontalGaugeMarker.js.map