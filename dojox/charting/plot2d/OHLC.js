//>>built
define("dojox/charting/plot2d/OHLC",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,n,d,l,s,m){var u=l.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.OHLC",[r,o],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(this.defaultParams),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},collectStats:function(a){for(var i=e.delegate(n.defaultStats),r=0;r<a.length;r++){var o=a[r];if(o.data.length){var d=i.vmin,l=i.vmax;"ymin"in o&&"ymax"in o||t.forEach(o.data,function(e,t){if(null!==e){var a=e.x||t+1;i.hmin=Math.min(i.hmin,a),i.hmax=Math.max(i.hmax,a),i.vmin=Math.min(i.vmin,e.open,e.close,e.high,e.low),i.vmax=Math.max(i.vmax,e.open,e.close,e.high,e.low)}}),"ymin"in o&&(i.vmin=Math.min(d,o.ymin)),"ymax"in o&&(i.vmax=Math.max(l,o.ymax))}}return i},getSeriesStats:function(){var e=this.collectStats(this.series);return e.hmin-=.5,e.hmax+=.5,e},render:function(e,a){if(this.zoom&&!this.isDataDirty())return this.performZoom(e,a);if(this.resetEvents(),this.dirty=this.isDirty(),this.dirty){t.forEach(this.series,u),this._eventSeries={},this.cleanGroup();var r=this.getGroup();d.forEachRev(this.series,function(e){e.cleanGroup(r)})}var o,l,s,m=this.chart.theme,h=this._hScaler.scaler.getTransformerFromModel(this._hScaler),f=this._vScaler.scaler.getTransformerFromModel(this._vScaler),c=this.events();o=n.calculateBarSize(this._hScaler.bounds.scale,this.opt),l=o.gap,s=o.size;for(var y=this.series.length-1;y>=0;--y){var p=this.series[y];if(this.dirty||p.dirty){p.cleanGroup();for(var v=m.next("candlestick",[this.opt,p]),r=p.group,g=new Array(p.data.length),M=0;M<p.data.length;++M){var b=p.data[M];if(null!==b){var w=m.addMixin(v,"candlestick",b,!0),F=h(b.x||M+.5)+a.l+l,_=e.height-a.b,j=f(b.open),I=f(b.close),k=f(b.high),x=f(b.low);if(x>k){var E=k;k=x,x=E}if(s>=1){var S={x1:s/2,x2:s/2,y1:_-k,y2:_-x},C={x1:0,x2:s/2+(w.series.stroke.width||1)/2,y1:_-j,y2:_-j},G={x1:s/2-(w.series.stroke.width||1)/2,x2:s,y1:_-I,y2:_-I},A=r.createGroup();A.setTransform({dx:F,dy:0});var T=A.createGroup();if(T.createLine(S).setStroke(w.series.stroke),T.createLine(C).setStroke(w.series.stroke),T.createLine(G).setStroke(w.series.stroke),p.dyn.stroke=w.series.stroke,c){var z={element:"candlestick",index:M,run:p,shape:T,x:F,y:_-Math.max(j,I),cx:s/2,cy:_-Math.max(j,I)+Math.max(j>I?j-I:I-j,1)/2,width:s,height:Math.max(j>I?j-I:I-j,1),data:b};this._connectEvents(z),g[M]=z}}this.animate&&this._animateOHLC(A,_-x,k-x)}}this._eventSeries[p.name]=g,p.dirty=!1}else m.skip(),this._reconnectEvents(p.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,e,a),this},_animateOHLC:function(t,a,i){m.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=OHLC.js.map