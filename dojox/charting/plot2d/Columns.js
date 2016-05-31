//>>built
define("dojox/charting/plot2d/Columns",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,d,n,l,s,m){var h=l.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Columns",[r,o],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var e=d.collectSimpleStats(this.series);return e.hmin-=.5,e.hmax+=.5,e},createRect:function(e,t,a){var i;return this.opt.enableCache&&e._rectFreePool.length>0?(i=e._rectFreePool.pop(),i.setShape(a),t.add(i)):i=t.createRect(a),this.opt.enableCache&&e._rectUsePool.push(i),i},render:function(a,r){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,r);this.resetEvents(),this.dirty=this.isDirty();var o;this.dirty&&(t.forEach(this.series,h),this._eventSeries={},this.cleanGroup(),o=this.getGroup(),n.forEachRev(this.series,function(e){e.cleanGroup(o)}));var d=this.chart.theme,l=this._hScaler.scaler.getTransformerFromModel(this._hScaler),s=this._vScaler.scaler.getTransformerFromModel(this._vScaler),m=Math.max(0,this._vScaler.bounds.lower),u=s(m),f=this.events(),c=this.getBarProperties(),y=this.series.length;t.forEach(this.series,function(e){e.hidden&&y--});for(var v=this.series.length-1;v>=0;--v){var p=this.series[v];if(this.dirty||p.dirty){p.cleanGroup(),this.opt.enableCache&&(p._rectFreePool=(p._rectFreePool?p._rectFreePool:[]).concat(p._rectUsePool?p._rectUsePool:[]),p._rectUsePool=[]);var g=d.next("column",[this.opt,p]),M=new Array(p.data.length);if(p.hidden)p.dyn.fill=g.series.fill;else{y--,o=p.group;for(var b=t.some(p.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),w=b?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,F=b?Math.min(p.data.length,Math.ceil(this._hScaler.bounds.to)):p.data.length,j=w;F>j;++j){var I=p.data[j];if(null!=I){var k,_,x=this.getValue(I,j,v,b),E=s(x.y),A=Math.abs(E-u);if(this.opt.styleFunc||"number"!=typeof I){var T="number"!=typeof I?[I]:[];this.opt.styleFunc&&T.push(this.opt.styleFunc(I)),k=d.addMixin(g,"column",T,!0)}else k=d.post(g,"column");if(c.width>=1&&A>=0){var G={x:r.l+l(x.x+.5)+c.gap+c.thickness*y,y:a.height-r.b-(x.y>m?E:u),width:c.width,height:A};if(k.series.shadow){var C=e.clone(G);C.x+=k.series.shadow.dx,C.y+=k.series.shadow.dy,_=this.createRect(p,o,C).setFill(k.series.shadow.color).setStroke(k.series.shadow),this.animate&&this._animateColumn(_,a.height-r.b+u,A)}var S=this._plotFill(k.series.fill,a,r);S=this._shapeFill(S,G);var z=this.createRect(p,o,G).setFill(S).setStroke(k.series.stroke);if(z.setFilter&&k.series.filter&&z.setFilter(k.series.filter),p.dyn.fill=z.getFill(),p.dyn.stroke=z.getStroke(),f){var D={element:"column",index:j,run:p,shape:z,shadow:_,cx:x.x+.5,cy:x.y,x:b?j:p.data[j].x,y:b?p.data[j]:p.data[j].y};this._connectEvents(D),M[j]=D}!isNaN(x.py)&&x.py>m&&(G.height=E-s(x.py)),this.createLabel(o,I,G,k),this.animate&&this._animateColumn(z,a.height-r.b-u,A)}}}this._eventSeries[p.name]=M,p.dirty=!1}}else d.skip(),this._reconnectEvents(p.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,a,r),this},getValue:function(e,t,a,i){var r,o;return i?(r="number"==typeof e?e:e.y,o=t):(r=e.y,o=e.x-1),{x:o,y:r}},getBarProperties:function(){var e=d.calculateBarSize(this._hScaler.bounds.scale,this.opt);return{gap:e.gap,width:e.size,thickness:0}},_animateColumn:function(t,a,i){0==i&&(i=1),m.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Columns.js.map