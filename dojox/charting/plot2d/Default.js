//>>built
define("dojox/charting/plot2d/Default",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,n,d,l,s,m){var u=l.lambda("item.purgeGroup()"),f=1200;return t("dojox.charting.plot2d.Default",[r,o],{defaultParams:{lines:!0,areas:!1,markers:!1,tension:"",animate:!1,enableCache:!1,interpolate:!1},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",marker:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",markerFontColor:""},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},createPath:function(e,t,a){var i;return this.opt.enableCache&&e._pathFreePool.length>0?(i=e._pathFreePool.pop(),i.setShape(a),t.add(i)):i=t.createPath(a),this.opt.enableCache&&e._pathUsePool.push(i),i},buildSegments:function(e,t){for(var a=this.series[e],i=t?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,r=t?Math.min(a.data.length,Math.ceil(this._hScaler.bounds.to)):a.data.length,o=null,n=[],d=i;r>d;d++)null==a.data[d]||!t&&null==a.data[d].y?this.opt.interpolate&&!t||(o=null):(o||(o=[],n.push({index:d,rseg:o})),o.push(t&&a.data[d].hasOwnProperty("y")?a.data[d].y:a.data[d]));return n},render:function(t,r){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,r);this.resetEvents(),this.dirty=this.isDirty();var o;this.dirty&&(a.forEach(this.series,u),this._eventSeries={},this.cleanGroup(),this.getGroup().setTransform(null),o=this.getGroup(),d.forEachRev(this.series,function(e){e.cleanGroup(o)}));for(var l,s,c=this.chart.theme,h=this.events(),y=this.series.length-1;y>=0;--y){var M=this.series[y];if(this.dirty||M.dirty)if(M.cleanGroup(),this.opt.enableCache&&(M._pathFreePool=(M._pathFreePool?M._pathFreePool:[]).concat(M._pathUsePool?M._pathUsePool:[]),M._pathUsePool=[]),M.data.length){var v,p=c.next(this.opt.areas?"area":"line",[this.opt,M],!0),g=this._hScaler.scaler.getTransformerFromModel(this._hScaler),b=this._vScaler.scaler.getTransformerFromModel(this._vScaler),k=this._eventSeries[M.name]=new Array(M.data.length);if(o=M.group,M.hidden)this.opt.lines&&(M.dyn.stroke=p.series.stroke),this.opt.markers&&(M.dyn.markerFill=p.marker.fill,M.dyn.markerStroke=p.marker.stroke,M.dyn.marker=p.symbol),this.opt.areas&&(M.dyn.fill=p.series.fill);else{for(var w=a.some(M.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),F=this.buildSegments(y,w),I=0;I<F.length;I++){var j=F[I];if(v=w?a.map(j.rseg,function(e,a){return{x:g(a+j.index+1)+r.l,y:t.height-r.b-b(e),data:e}},this):a.map(j.rseg,function(e){return{x:g(e.x)+r.l,y:t.height-r.b-b(e.y),data:e}},this),w&&this.opt.interpolate)for(;I<F.length;)I++,j=F[I],j&&(v=v.concat(a.map(j.rseg,function(e,a){return{x:g(a+j.index+1)+r.l,y:t.height-r.b-b(e),data:e}},this)));var E=this.opt.tension?n.curve(v,this.opt.tension):"";if(this.opt.areas&&v.length>1){var _=this._plotFill(p.series.fill,t,r),G=e.clone(v);if(this.opt.tension){var T="L"+G[G.length-1].x+","+(t.height-r.b)+" L"+G[0].x+","+(t.height-r.b)+" L"+G[0].x+","+G[0].y;M.dyn.fill=o.createPath(E+" "+T).setFill(_).getFill()}else G.push({x:v[v.length-1].x,y:t.height-r.b}),G.push({x:v[0].x,y:t.height-r.b}),G.push(v[0]),M.dyn.fill=o.createPolyline(G).setFill(_).getFill()}(this.opt.lines||this.opt.markers)&&(l=p.series.stroke,p.series.outline&&(s=M.dyn.outline=n.makeStroke(p.series.outline),s.width=2*s.width+l.width)),this.opt.markers&&(M.dyn.marker=p.symbol);var z=null,A=null,S=null;if(l&&p.series.shadow&&v.length>1){var x=p.series.shadow,C=a.map(v,function(e){return{x:e.x+x.dx,y:e.y+x.dy}});this.opt.lines&&(this.opt.tension?M.dyn.shadow=o.createPath(n.curve(C,this.opt.tension)).setStroke(x).getStroke():M.dyn.shadow=o.createPolyline(C).setStroke(x).getStroke()),this.opt.markers&&p.marker.shadow&&(x=p.marker.shadow,S=a.map(C,function(e){return this.createPath(M,o,"M"+e.x+" "+e.y+" "+p.symbol).setStroke(x).setFill(x.color)},this))}if(this.opt.lines&&v.length>1){var N;s&&(this.opt.tension?M.dyn.outline=o.createPath(E).setStroke(s).getStroke():M.dyn.outline=o.createPolyline(v).setStroke(s).getStroke()),this.opt.tension?M.dyn.stroke=(N=o.createPath(E)).setStroke(l).getStroke():M.dyn.stroke=(N=o.createPolyline(v)).setStroke(l).getStroke(),N.setFilter&&p.series.filter&&N.setFilter(p.series.filter)}var H=null;if(this.opt.markers){var D=p;z=new Array(v.length),A=new Array(v.length),s=null,D.marker.outline&&(s=n.makeStroke(D.marker.outline),s.width=2*s.width+(D.marker.stroke?D.marker.stroke.width:0)),a.forEach(v,function(e,t){if(this.opt.styleFunc||"number"!=typeof e.data){var a="number"!=typeof e.data?[e.data]:[];this.opt.styleFunc&&a.push(this.opt.styleFunc(e.data)),D=c.addMixin(p,"marker",a,!0)}else D=c.post(p,"marker");var i="M"+e.x+" "+e.y+" "+D.symbol;s&&(A[t]=this.createPath(M,o,i).setStroke(s)),z[t]=this.createPath(M,o,i).setStroke(D.marker.stroke).setFill(D.marker.fill)},this),M.dyn.markerFill=D.marker.fill,M.dyn.markerStroke=D.marker.stroke,!H&&this.opt.labels&&(H=z[0].getBoundingBox()),h?a.forEach(z,function(e,t){var a={element:"marker",index:t+j.index,run:M,shape:e,outline:A[t]||null,shadow:S&&S[t]||null,cx:v[t].x,cy:v[t].y};w?(a.x=t+j.index+1,a.y=M.data[t+j.index]):(a.x=j.rseg[t].x,a.y=M.data[t+j.index].y),this._connectEvents(a),k[t+j.index]=a},this):delete this._eventSeries[M.name]}if(this.opt.labels){var Q=H?H.width:2,P=H?H.height:2;a.forEach(v,function(e,t){if(this.opt.styleFunc||"number"!=typeof e.data){var a="number"!=typeof e.data?[e.data]:[];this.opt.styleFunc&&a.push(this.opt.styleFunc(e.data)),D=c.addMixin(p,"marker",a,!0)}else D=c.post(p,"marker");this.createLabel(o,j.rseg[t],{x:e.x-Q/2,y:e.y-P/2,width:Q,height:P},D)},this)}}M.dirty=!1}}else M.dirty=!1,c.skip();else c.skip(),this._reconnectEvents(M.name)}if(i("dojo-bidi")&&this._checkOrientation(this.group,t,r),this.animate){var L=this.getGroup();m.animateTransform(e.delegate({shape:L,duration:f,transform:[{name:"translate",start:[0,t.height-r.b],end:[0,0]},{name:"scale",start:[1,0],end:[1,1]},{name:"original"}]},this.animate)).play()}return this.dirty=!1,this}})});//# sourceMappingURL=Default.js.map