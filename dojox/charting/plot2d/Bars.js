//>>built
define("dojox/charting/plot2d/Bars",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/gfx/fx","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/reversed"],function(e,t,a,i,r,d,o,n,l,s,m){var u=m.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Bars",[r,d],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),l.updateWithObject(this.opt,a),l.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var e,t=o.collectSimpleStats(this.series);return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,t.vmax=e,t},createRect:function(e,t,a){var i;return this.opt.enableCache&&e._rectFreePool.length>0?(i=e._rectFreePool.pop(),i.setShape(a),t.add(i)):i=t.createRect(a),this.opt.enableCache&&e._rectUsePool.push(i),i},createLabel:function(e,t,a,i){if(this.opt.labels&&"outside"==this.opt.labelStyle){var r=a.y+a.height/2,d=a.x+a.width+this.opt.labelOffset;this.renderLabel(e,d,r,this._getLabel(isNaN(t.y)?t:t.y),i,"start")}else this.inherited(arguments)},render:function(a,r){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,r);this.dirty=this.isDirty(),this.resetEvents();var d;this.dirty&&(t.forEach(this.series,u),this._eventSeries={},this.cleanGroup(),d=this.getGroup(),s.forEachRev(this.series,function(e){e.cleanGroup(d)}));var o=this.chart.theme,n=this._hScaler.scaler.getTransformerFromModel(this._hScaler),l=this._vScaler.scaler.getTransformerFromModel(this._vScaler),m=Math.max(0,this._hScaler.bounds.lower),f=n(m),h=this.events(),c=this.getBarProperties(),y=this.series.length;t.forEach(this.series,function(e){e.hidden&&y--});for(var v=y,p=this.series.length-1;p>=0;--p){var g=this.series[p];if(this.dirty||g.dirty){g.cleanGroup(),this.opt.enableCache&&(g._rectFreePool=(g._rectFreePool?g._rectFreePool:[]).concat(g._rectUsePool?g._rectUsePool:[]),g._rectUsePool=[]);var M=o.next("bar",[this.opt,g]);if(g.hidden)g.dyn.fill=M.series.fill,g.dyn.stroke=M.series.stroke;else{v--;var b=new Array(g.data.length);d=g.group;for(var w=t.some(g.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),_=w?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,F=w?Math.min(g.data.length,Math.ceil(this._vScaler.bounds.to)):g.data.length,I=_;F>I;++I){var k=g.data[I];if(null!=k){var j,E,A=this.getValue(k,I,p,w),x=n(A.y),T=Math.abs(x-f);if(this.opt.styleFunc||"number"!=typeof k){var C="number"!=typeof k?[k]:[];this.opt.styleFunc&&C.push(this.opt.styleFunc(k)),j=o.addMixin(M,"bar",C,!0)}else j=o.post(M,"bar");if(T>=0&&c.height>=1){var G={x:r.l+(A.y<m?x:f),y:a.height-r.b-l(A.x+1.5)+c.gap+c.thickness*(y-v-1),width:T,height:c.height};if(j.series.shadow){var D=e.clone(G);D.x+=j.series.shadow.dx,D.y+=j.series.shadow.dy,E=this.createRect(g,d,D).setFill(j.series.shadow.color).setStroke(j.series.shadow),this.animate&&this._animateBar(E,r.l+f,-T)}var S=this._plotFill(j.series.fill,a,r);S=this._shapeFill(S,G);var N=this.createRect(g,d,G).setFill(S).setStroke(j.series.stroke);if(N.setFilter&&j.series.filter&&N.setFilter(j.series.filter),g.dyn.fill=N.getFill(),g.dyn.stroke=N.getStroke(),h){var z={element:"bar",index:I,run:g,shape:N,shadow:E,cx:A.y,cy:A.x+1.5,x:w?I:g.data[I].x,y:w?g.data[I]:g.data[I].y};this._connectEvents(z),b[I]=z}!isNaN(A.py)&&A.py>m&&(G.x+=n(A.py),G.width-=n(A.py)),this.createLabel(d,k,G,j),this.animate&&this._animateBar(N,r.l+f,-T)}}}this._eventSeries[g.name]=b,g.dirty=!1}}else o.skip(),this._reconnectEvents(g.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,a,r),this},getValue:function(e,t,a,i){var r,d;return i?(r="number"==typeof e?e:e.y,d=t):(r=e.y,d=e.x-1),{y:r,x:d}},getBarProperties:function(){var e=o.calculateBarSize(this._vScaler.bounds.scale,this.opt);return{gap:e.gap,height:e.size,thickness:0}},_animateBar:function(t,a,i){0==i&&(i=1),n.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[a-a/i,0],end:[0,0]},{name:"scale",start:[1/i,1],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Bars.js.map