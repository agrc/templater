//>>built
define("dojox/charting/plot2d/Bubble",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,n,d,s,l,m){var u=s.lambda("item.purgeGroup()");return t("dojox.charting.plot2d.Bubble",[r,o],{defaultParams:{animate:null},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelFunc:null},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),l.updateWithObject(this.opt,a),l.updateWithPattern(this.opt,a,this.optionalParams),this.opt.labelFunc||(this.opt.labelFunc=function(e,t,a){return this._getLabel(e.size,t,a)}),this.animate=this.opt.animate},render:function(e,t){var r;if(this.zoom&&!this.isDataDirty())return this.performZoom(e,t);this.resetEvents(),this.dirty=this.isDirty(),this.dirty&&(a.forEach(this.series,u),this._eventSeries={},this.cleanGroup(),r=this.getGroup(),d.forEachRev(this.series,function(e){e.cleanGroup(r)}));for(var o=this.chart.theme,s=this._hScaler.scaler.getTransformerFromModel(this._hScaler),l=this._vScaler.scaler.getTransformerFromModel(this._vScaler),m=this.events(),c=this.series.length-1;c>=0;--c){var f=this.series[c];if(this.dirty||f.dirty)if(f.cleanGroup(),f.data.length){if("number"!=typeof f.data[0]){var h=o.next("circle",[this.opt,f]),y=a.map(f.data,function(a){return a?{x:s(a.x)+t.l,y:e.height-t.b-l(a.y),radius:this._vScaler.bounds.scale*(a.size/2)}:null},this);if(f.hidden)f.dyn.fill=h.series.fill,f.dyn.stroke=h.series.stroke;else{r=f.group;var v=null,M=null,p=null,g=this.opt.styleFunc,b=function(e){return g?o.addMixin(h,"circle",[e,g(e)],!0):o.addMixin(h,"circle",e,!0)};if(h.series.shadow&&(p=a.map(y,function(a,i){if(null!==a){var o=b(f.data[i]),n=o.series.shadow,d=r.createCircle({cx:a.x+n.dx,cy:a.y+n.dy,r:a.radius}).setStroke(n).setFill(n.color);return this.animate&&this._animateBubble(d,e.height-t.b,a.radius),d}return null},this),p.length&&(f.dyn.shadow=p[p.length-1].getStroke())),h.series.outline&&(M=a.map(y,function(a,i){if(null!==a){var o=b(f.data[i]),d=n.makeStroke(o.series.outline);d.width=2*d.width+h.series.stroke.width;var s=r.createCircle({cx:a.x,cy:a.y,r:a.radius}).setStroke(d);return this.animate&&this._animateBubble(s,e.height-t.b,a.radius),s}return null},this),M.length&&(f.dyn.outline=M[M.length-1].getStroke())),v=a.map(y,function(a,i){if(null!==a){var o=b(f.data[i]),n={x:a.x-a.radius,y:a.y-a.radius,width:2*a.radius,height:2*a.radius},d=this._plotFill(o.series.fill,e,t);d=this._shapeFill(d,n);var s=r.createCircle({cx:a.x,cy:a.y,r:a.radius}).setFill(d).setStroke(o.series.stroke);return s.setFilter&&o.series.filter&&s.setFilter(o.series.filter),this.animate&&this._animateBubble(s,e.height-t.b,a.radius),this.createLabel(r,f.data[i],n,o),s}return null},this),v.length&&(f.dyn.fill=v[v.length-1].getFill(),f.dyn.stroke=v[v.length-1].getStroke()),m){var w=new Array(v.length);a.forEach(v,function(e,t){if(null!==e){var a={element:"circle",index:t,run:f,shape:e,outline:M&&M[t]||null,shadow:p&&p[t]||null,x:f.data[t].x,y:f.data[t].y,r:f.data[t].size/2,cx:y[t].x,cy:y[t].y,cr:y[t].radius};this._connectEvents(a),w[t]=a}},this),this._eventSeries[f.name]=w}else delete this._eventSeries[f.name];f.dirty=!1}}}else f.dirty=!1,o.skip();else o.skip(),this._reconnectEvents(f.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,e,t),this},_animateBubble:function(t,a,i){m.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[0,a],end:[0,0]},{name:"scale",start:[0,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Bubble.js.map