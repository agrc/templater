//>>built
define("dojox/charting/plot2d/Candlesticks",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,d,o,n,l,s,m){var u=l.lambda("item.purgeGroup()");return t("dojox.charting.plot2d.Candlesticks",[r,d],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(this.defaultParams),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},collectStats:function(t){for(var i=e.delegate(o.defaultStats),r=0;r<t.length;r++){var d=t[r];if(d.data.length){var n=i.vmin,l=i.vmax;"ymin"in d&&"ymax"in d||a.forEach(d.data,function(e,t){if(null!==e){var a=e.x||t+1;i.hmin=Math.min(i.hmin,a),i.hmax=Math.max(i.hmax,a),i.vmin=Math.min(i.vmin,e.open,e.close,e.high,e.low),i.vmax=Math.max(i.vmax,e.open,e.close,e.high,e.low)}}),"ymin"in d&&(i.vmin=Math.min(n,d.ymin)),"ymax"in d&&(i.vmax=Math.max(l,d.ymax))}}return i},getSeriesStats:function(){var e=this.collectStats(this.series);return e.hmin-=.5,e.hmax+=.5,e},render:function(e,t){if(this.zoom&&!this.isDataDirty())return this.performZoom(e,t);this.resetEvents(),this.dirty=this.isDirty();var r;this.dirty&&(a.forEach(this.series,u),this._eventSeries={},this.cleanGroup(),r=this.getGroup(),n.forEachRev(this.series,function(e){e.cleanGroup(r)}));var d,l,s,m=this.chart.theme,f=this._hScaler.scaler.getTransformerFromModel(this._hScaler),h=this._vScaler.scaler.getTransformerFromModel(this._vScaler),y=this.events();d=o.calculateBarSize(this._hScaler.bounds.scale,this.opt),l=d.gap,s=d.size;for(var c=this.series.length-1;c>=0;--c){var v=this.series[c];if(this.dirty||v.dirty){v.cleanGroup();var M=m.next("candlestick",[this.opt,v]),g=new Array(v.data.length);if(v.hidden)v.dyn.fill=M.series.fill,v.dyn.stroke=M.series.stroke;else{r=v.group;for(var p=0;p<v.data.length;++p){var b=v.data[p];if(null!==b){var w=m.addMixin(M,"candlestick",b,!0),k=f(b.x||p+.5)+t.l+l,F=e.height-t.b,I=h(b.open),j=h(b.close),E=h(b.high),_=h(b.low);if("mid"in b)var G=h(b.mid);if(_>E){var T=E;E=_,_=T}if(s>=1){var x=I>j,S={x1:s/2,x2:s/2,y1:F-E,y2:F-_},z={x:0,y:F-Math.max(I,j),width:s,height:Math.max(x?I-j:j-I,1)},A=r.createGroup();A.setTransform({dx:k,dy:0});var C=A.createGroup();if(C.createLine(S).setStroke(w.series.stroke),C.createRect(z).setStroke(w.series.stroke).setFill(x?w.series.fill:"white"),"mid"in b&&C.createLine({x1:w.series.stroke.width||1,x2:s-(w.series.stroke.width||1),y1:F-G,y2:F-G}).setStroke(x?"white":w.series.stroke),v.dyn.fill=w.series.fill,v.dyn.stroke=w.series.stroke,y){var H={element:"candlestick",index:p,run:v,shape:C,x:k,y:F-Math.max(I,j),cx:s/2,cy:F-Math.max(I,j)+Math.max(x?I-j:j-I,1)/2,width:s,height:Math.max(x?I-j:j-I,1),data:b};this._connectEvents(H),g[p]=H}}this.animate&&this._animateCandlesticks(A,F-_,E-_)}}this._eventSeries[v.name]=g,v.dirty=!1}}else m.skip(),this._reconnectEvents(v.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,e,t),this},tooltipFunc:function(e){return'<table cellpadding="1" cellspacing="0" border="0" style="font-size:0.9em;"><tr><td>Open:</td><td align="right"><strong>'+e.data.open+'</strong></td></tr><tr><td>High:</td><td align="right"><strong>'+e.data.high+'</strong></td></tr><tr><td>Low:</td><td align="right"><strong>'+e.data.low+'</strong></td></tr><tr><td>Close:</td><td align="right"><strong>'+e.data.close+"</strong></td></tr>"+(void 0!==e.data.mid?'<tr><td>Mid:</td><td align="right"><strong>'+e.data.mid+"</strong></td></tr>":"")+"</table>"},_animateCandlesticks:function(t,a,i){m.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Candlesticks.js.map