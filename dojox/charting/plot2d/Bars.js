//>>built
define("dojox/charting/plot2d/Bars",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/gfx/fx","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/reversed"],function(e,t,i,a,r,n,o,s,d,l,u){var c=u.lambda("item.purgeGroup()");return i("dojox.charting.plot2d.Bars",[r,n],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""},constructor:function(t,i){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),d.updateWithObject(this.opt,i),d.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var e,t=o.collectSimpleStats(this.series);return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,t.vmax=e,t},createRect:function(e,t,i){var a;return this.opt.enableCache&&e._rectFreePool.length>0?(a=e._rectFreePool.pop(),a.setShape(i),t.add(a)):a=t.createRect(i),this.opt.enableCache&&e._rectUsePool.push(a),a},createLabel:function(e,t,i,a){if(this.opt.labels&&"outside"==this.opt.labelStyle){var r=i.y+i.height/2,n=i.x+i.width+this.opt.labelOffset;this.renderLabel(e,n,r,this._getLabel(isNaN(t.y)?t:t.y),a,"start")}else this.inherited(arguments)},render:function(i,r){if(this.zoom&&!this.isDataDirty())return this.performZoom(i,r);this.dirty=this.isDirty(),this.resetEvents();var n;this.dirty&&(t.forEach(this.series,c),this._eventSeries={},this.cleanGroup(),n=this.getGroup(),l.forEachRev(this.series,function(e){e.cleanGroup(n)}));var o=this.chart.theme,s=this._hScaler.scaler.getTransformerFromModel(this._hScaler),d=this._vScaler.scaler.getTransformerFromModel(this._vScaler),u=Math.max(0,this._hScaler.bounds.lower),f=s(u),h=this.events(),m=this.getBarProperties(),p=this.series.length;t.forEach(this.series,function(e){e.hidden&&p--});for(var y=p,v=this.series.length-1;v>=0;--v){var g=this.series[v];if(this.dirty||g.dirty){g.cleanGroup(),this.opt.enableCache&&(g._rectFreePool=(g._rectFreePool?g._rectFreePool:[]).concat(g._rectUsePool?g._rectUsePool:[]),g._rectUsePool=[]);var b=o.next("bar",[this.opt,g]);if(g.hidden)g.dyn.fill=b.series.fill,g.dyn.stroke=b.series.stroke;else{y--;var M=new Array(g.data.length);n=g.group;for(var k=t.some(g.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),w=k?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,_=k?Math.min(g.data.length,Math.ceil(this._vScaler.bounds.to)):g.data.length,j=w;_>j;++j){var x=g.data[j];if(null!=x){var F,I,E=this.getValue(x,j,v,k),S=s(E.y),A=Math.abs(S-f);if(this.opt.styleFunc||"number"!=typeof x){var C="number"!=typeof x?[x]:[];this.opt.styleFunc&&C.push(this.opt.styleFunc(x)),F=o.addMixin(b,"bar",C,!0)}else F=o.post(b,"bar");if(A>=0&&m.height>=1){var T={x:r.l+(E.y<u?S:f),y:i.height-r.b-d(E.x+1.5)+m.gap+m.thickness*(p-y-1),width:A,height:m.height};if(F.series.shadow){var z=e.clone(T);z.x+=F.series.shadow.dx,z.y+=F.series.shadow.dy,I=this.createRect(g,n,z).setFill(F.series.shadow.color).setStroke(F.series.shadow),this.animate&&this._animateBar(I,r.l+f,-A)}var P=this._plotFill(F.series.fill,i,r);P=this._shapeFill(P,T);var N=this.createRect(g,n,T).setFill(P).setStroke(F.series.stroke);if(N.setFilter&&F.series.filter&&N.setFilter(F.series.filter),g.dyn.fill=N.getFill(),g.dyn.stroke=N.getStroke(),h){var D={element:"bar",index:j,run:g,shape:N,shadow:I,cx:E.y,cy:E.x+1.5,x:k?j:g.data[j].x,y:k?g.data[j]:g.data[j].y};this._connectEvents(D),M[j]=D}!isNaN(E.py)&&E.py>u&&(T.x+=s(E.py),T.width-=s(E.py)),this.createLabel(n,x,T,F),this.animate&&this._animateBar(N,r.l+f,-A)}}}this._eventSeries[g.name]=M,g.dirty=!1}}else o.skip(),this._reconnectEvents(g.name)}return this.dirty=!1,a("dojo-bidi")&&this._checkOrientation(this.group,i,r),this},getValue:function(e,t,i,a){var r,n;return a?(r="number"==typeof e?e:e.y,n=t):(r=e.y,n=e.x-1),{y:r,x:n}},getBarProperties:function(){var e=o.calculateBarSize(this._vScaler.bounds.scale,this.opt);return{gap:e.gap,height:e.size,thickness:0}},_animateBar:function(t,i,a){0==a&&(a=1),s.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[i-i/a,0],end:[0,0]},{name:"scale",start:[1/a,1],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Bars.js.map