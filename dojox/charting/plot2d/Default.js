//>>built
define("dojox/charting/plot2d/Default",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,d,n,l,s,m){var u=l.lambda("item.purgeGroup()"),f=1200;return t("dojox.charting.plot2d.Default",[r,o],{defaultParams:{lines:!0,areas:!1,markers:!1,tension:"",animate:!1,enableCache:!1,interpolate:!1},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",marker:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",markerFontColor:""},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},createPath:function(e,t,a){var i;return this.opt.enableCache&&e._pathFreePool.length>0?(i=e._pathFreePool.pop(),i.setShape(a),t.add(i)):i=t.createPath(a),this.opt.enableCache&&e._pathUsePool.push(i),i},buildSegments:function(e,t){for(var a=this.series[e],i=t?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,r=t?Math.min(a.data.length,Math.ceil(this._hScaler.bounds.to)):a.data.length,o=null,d=[],n=i;r>n;n++)null==a.data[n]||!t&&null==a.data[n].y?this.opt.interpolate&&!t||(o=null):(o||(o=[],d.push({index:n,rseg:o})),o.push(t&&a.data[n].hasOwnProperty("y")?a.data[n].y:a.data[n]));return d},render:function(t,r){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,r);this.resetEvents(),this.dirty=this.isDirty();var o;this.dirty&&(a.forEach(this.series,u),this._eventSeries={},this.cleanGroup(),this.getGroup().setTransform(null),o=this.getGroup(),n.forEachRev(this.series,function(e){e.cleanGroup(o)}));for(var l,s,h=this.chart.theme,y=this.events(),c=this.series.length-1;c>=0;--c){var v=this.series[c];if(this.dirty||v.dirty)if(v.cleanGroup(),this.opt.enableCache&&(v._pathFreePool=(v._pathFreePool?v._pathFreePool:[]).concat(v._pathUsePool?v._pathUsePool:[]),v._pathUsePool=[]),v.data.length){var M,p=h.next(this.opt.areas?"area":"line",[this.opt,v],!0),g=this._hScaler.scaler.getTransformerFromModel(this._hScaler),b=this._vScaler.scaler.getTransformerFromModel(this._vScaler),k=this._eventSeries[v.name]=new Array(v.data.length);if(o=v.group,v.hidden)this.opt.lines&&(v.dyn.stroke=p.series.stroke),this.opt.markers&&(v.dyn.markerFill=p.marker.fill,v.dyn.markerStroke=p.marker.stroke,v.dyn.marker=p.symbol),this.opt.areas&&(v.dyn.fill=p.series.fill);else{for(var w=a.some(v.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),F=this.buildSegments(c,w),I=0;I<F.length;I++){var j=F[I];if(M=w?a.map(j.rseg,function(e,a){return{x:g(a+j.index+1)+r.l,y:t.height-r.b-b(e),data:e}},this):a.map(j.rseg,function(e){return{x:g(e.x)+r.l,y:t.height-r.b-b(e.y),data:e}},this),w&&this.opt.interpolate)for(;I<F.length;)I++,j=F[I],j&&(M=M.concat(a.map(j.rseg,function(e,a){return{x:g(a+j.index+1)+r.l,y:t.height-r.b-b(e),data:e}},this)));var E=this.opt.tension?d.curve(M,this.opt.tension):"";if(this.opt.areas&&M.length>1){var G=this._plotFill(p.series.fill,t,r),_=e.clone(M);if(this.opt.tension){var z="L"+_[_.length-1].x+","+(t.height-r.b)+" L"+_[0].x+","+(t.height-r.b)+" L"+_[0].x+","+_[0].y;v.dyn.fill=o.createPath(E+" "+z).setFill(G).getFill()}else _.push({x:M[M.length-1].x,y:t.height-r.b}),_.push({x:M[0].x,y:t.height-r.b}),_.push(M[0]),v.dyn.fill=o.createPolyline(_).setFill(G).getFill()}(this.opt.lines||this.opt.markers)&&(l=p.series.stroke,p.series.outline&&(s=v.dyn.outline=d.makeStroke(p.series.outline),s.width=2*s.width+l.width)),this.opt.markers&&(v.dyn.marker=p.symbol);var A=null,T=null,S=null;if(l&&p.series.shadow&&M.length>1){var x=p.series.shadow,N=a.map(M,function(e){return{x:e.x+x.dx,y:e.y+x.dy}});this.opt.lines&&(this.opt.tension?v.dyn.shadow=o.createPath(d.curve(N,this.opt.tension)).setStroke(x).getStroke():v.dyn.shadow=o.createPolyline(N).setStroke(x).getStroke()),this.opt.markers&&p.marker.shadow&&(x=p.marker.shadow,S=a.map(N,function(e){return this.createPath(v,o,"M"+e.x+" "+e.y+" "+p.symbol).setStroke(x).setFill(x.color)},this))}if(this.opt.lines&&M.length>1){var H;s&&(this.opt.tension?v.dyn.outline=o.createPath(E).setStroke(s).getStroke():v.dyn.outline=o.createPolyline(M).setStroke(s).getStroke()),this.opt.tension?v.dyn.stroke=(H=o.createPath(E)).setStroke(l).getStroke():v.dyn.stroke=(H=o.createPolyline(M)).setStroke(l).getStroke(),H.setFilter&&p.series.filter&&H.setFilter(p.series.filter)}var Q=null;if(this.opt.markers){var C=p;A=new Array(M.length),T=new Array(M.length),s=null,C.marker.outline&&(s=d.makeStroke(C.marker.outline),s.width=2*s.width+(C.marker.stroke?C.marker.stroke.width:0)),a.forEach(M,function(e,t){if(this.opt.styleFunc||"number"!=typeof e.data){var a="number"!=typeof e.data?[e.data]:[];this.opt.styleFunc&&a.push(this.opt.styleFunc(e.data)),C=h.addMixin(p,"marker",a,!0)}else C=h.post(p,"marker");var i="M"+e.x+" "+e.y+" "+C.symbol;s&&(T[t]=this.createPath(v,o,i).setStroke(s)),A[t]=this.createPath(v,o,i).setStroke(C.marker.stroke).setFill(C.marker.fill)},this),v.dyn.markerFill=C.marker.fill,v.dyn.markerStroke=C.marker.stroke,!Q&&this.opt.labels&&(Q=A[0].getBoundingBox()),y?a.forEach(A,function(e,t){var a={element:"marker",index:t+j.index,run:v,shape:e,outline:T[t]||null,shadow:S&&S[t]||null,cx:M[t].x,cy:M[t].y};w?(a.x=t+j.index+1,a.y=v.data[t+j.index]):(a.x=j.rseg[t].x,a.y=v.data[t+j.index].y),this._connectEvents(a),k[t+j.index]=a},this):delete this._eventSeries[v.name]}if(this.opt.labels){var P=Q?Q.width:2,D=Q?Q.height:2;a.forEach(M,function(e,t){if(this.opt.styleFunc||"number"!=typeof e.data){var a="number"!=typeof e.data?[e.data]:[];this.opt.styleFunc&&a.push(this.opt.styleFunc(e.data)),C=h.addMixin(p,"marker",a,!0)}else C=h.post(p,"marker");this.createLabel(o,j.rseg[t],{x:e.x-P/2,y:e.y-D/2,width:P,height:D},C)},this)}}v.dirty=!1}}else v.dirty=!1,h.skip();else h.skip(),this._reconnectEvents(v.name)}if(i("dojo-bidi")&&this._checkOrientation(this.group,t,r),this.animate){var L=this.getGroup();m.animateTransform(e.delegate({shape:L,duration:f,transform:[{name:"translate",start:[0,t.height-r.b],end:[0,0]},{name:"scale",start:[1,0],end:[1,1]},{name:"original"}]},this.animate)).play()}return this.dirty=!1,this}})});//# sourceMappingURL=Default.js.map