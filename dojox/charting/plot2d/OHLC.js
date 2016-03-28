//>>built
define("dojox/charting/plot2d/OHLC",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,d,n,l,s,m){var u=l.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.OHLC",[r,o],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(this.defaultParams),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},collectStats:function(a){for(var i=e.delegate(d.defaultStats),r=0;r<a.length;r++){var o=a[r];if(o.data.length){var n=i.vmin,l=i.vmax;"ymin"in o&&"ymax"in o||t.forEach(o.data,function(e,t){if(null!==e){var a=e.x||t+1;i.hmin=Math.min(i.hmin,a),i.hmax=Math.max(i.hmax,a),i.vmin=Math.min(i.vmin,e.open,e.close,e.high,e.low),i.vmax=Math.max(i.vmax,e.open,e.close,e.high,e.low)}}),"ymin"in o&&(i.vmin=Math.min(n,o.ymin)),"ymax"in o&&(i.vmax=Math.max(l,o.ymax))}}return i},getSeriesStats:function(){var e=this.collectStats(this.series);return e.hmin-=.5,e.hmax+=.5,e},render:function(e,a){if(this.zoom&&!this.isDataDirty())return this.performZoom(e,a);if(this.resetEvents(),this.dirty=this.isDirty(),this.dirty){t.forEach(this.series,u),this._eventSeries={},this.cleanGroup();var r=this.getGroup();n.forEachRev(this.series,function(e){e.cleanGroup(r)})}var o,l,s,m=this.chart.theme,h=this._hScaler.scaler.getTransformerFromModel(this._hScaler),f=this._vScaler.scaler.getTransformerFromModel(this._vScaler),c=this.events();o=d.calculateBarSize(this._hScaler.bounds.scale,this.opt),l=o.gap,s=o.size;for(var y=this.series.length-1;y>=0;--y){var v=this.series[y];if(this.dirty||v.dirty){v.cleanGroup();for(var p=m.next("candlestick",[this.opt,v]),r=v.group,g=new Array(v.data.length),M=0;M<v.data.length;++M){var b=v.data[M];if(null!==b){var w=m.addMixin(p,"candlestick",b,!0),_=h(b.x||M+.5)+a.l+l,F=e.height-a.b,I=f(b.open),k=f(b.close),j=f(b.high),E=f(b.low);if(E>j){var x=j;j=E,E=x}if(s>=1){var A={x1:s/2,x2:s/2,y1:F-j,y2:F-E},T={x1:0,x2:s/2+(w.series.stroke.width||1)/2,y1:F-I,y2:F-I},C={x1:s/2-(w.series.stroke.width||1)/2,x2:s,y1:F-k,y2:F-k},G=r.createGroup();G.setTransform({dx:_,dy:0});var S=G.createGroup();if(S.createLine(A).setStroke(w.series.stroke),S.createLine(T).setStroke(w.series.stroke),S.createLine(C).setStroke(w.series.stroke),v.dyn.stroke=w.series.stroke,c){var D={element:"candlestick",index:M,run:v,shape:S,x:_,y:F-Math.max(I,k),cx:s/2,cy:F-Math.max(I,k)+Math.max(I>k?I-k:k-I,1)/2,width:s,height:Math.max(I>k?I-k:k-I,1),data:b};this._connectEvents(D),g[M]=D}}this.animate&&this._animateOHLC(G,F-E,j-E)}}this._eventSeries[v.name]=g,v.dirty=!1}else m.skip(),this._reconnectEvents(v.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,e,a),this},_animateOHLC:function(t,a,i){m.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=OHLC.js.map