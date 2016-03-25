//>>built
define("dojox/charting/Chart",["../main","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/dom-style","dojo/dom","dojo/dom-geometry","dojo/dom-construct","dojo/_base/Color","dojo/sniff","./Element","./SimpleTheme","./Series","./axis2d/common","dojox/gfx/shape","dojox/gfx","dojo/has!dojo-bidi?./bidi/Chart","dojox/lang/functional","dojox/lang/functional/fold","dojox/lang/functional/reversed"],function(e,t,a,i,r,o,n,d,s,l,m,u,h,f,c,y,v,p){function g(e){return{min:e.hmin,max:e.hmax}}function M(e){return{min:e.vmin,max:e.vmax}}function b(e,t){e.hmin=t.min,e.hmax=t.max}function k(e,t){e.vmin=t.min,e.vmax=t.max}function w(e,t){return e&&t&&(e.min=Math.min(e.min,t.min),e.max=Math.max(e.max,t.max)),e||t}function F(e,t){var i={},r={};a.forEach(e,function(e){var t=i[e.name]=e.getSeriesStats();e.hAxis&&(r[e.hAxis]=w(r[e.hAxis],g(t))),e.vAxis&&(r[e.vAxis]=w(r[e.vAxis],M(t)))}),a.forEach(e,function(e){var a=i[e.name];e.hAxis&&b(a,r[e.hAxis]),e.vAxis&&k(a,r[e.vAxis]),e.initializeScalers(t,a)})}var I=t.getObject("charting",!0,e),_=p.lambda("item.clear()"),j=p.lambda("item.purgeGroup()"),E=p.lambda("item.destroy()"),x=p.lambda("item.dirty = false"),A=p.lambda("item.dirty = true"),z=p.lambda("item.name"),T=i(l("dojo-bidi")?"dojox.charting.NonBidiChart":"dojox.charting.Chart",null,{constructor:function(e,t){t||(t={}),this.margins=t.margins?t.margins:{l:10,t:10,r:10,b:10},this.stroke=t.stroke,this.fill=t.fill,this.delayInMs=t.delayInMs||200,this.title=t.title,this.titleGap=t.titleGap,this.titlePos=t.titlePos,this.titleFont=t.titleFont,this.titleFontColor=t.titleFontColor,this.chartTitle=null,this.htmlLabels=!0,"htmlLabels"in t&&(this.htmlLabels=t.htmlLabels),this.theme=null,this.axes={},this.stack=[],this.plots={},this.series=[],this.runs={},this.dirty=!0,this.node=o.byId(e);var a=n.getMarginBox(e);this.surface=y.createSurface(this.node,a.w||400,a.h||300),-1==this.surface.declaredClass.indexOf("vml")&&(this._nativeClip=!0)},destroy:function(){a.forEach(this.series,E),a.forEach(this.stack,E),p.forIn(this.axes,E),this.surface.destroy(),this.chartTitle&&this.chartTitle.tagName&&d.destroy(this.chartTitle)},getCoords:function(){var e=this.node,t=r.getComputedStyle(e),a=n.getMarginBox(e,t),i=n.position(e,!0);return a.x=i.x,a.y=i.y,a},setTheme:function(e){return this.theme=e.clone(),this.dirty=!0,this},addAxis:function(e,t){var a,i=t&&t.type||"Default";if("string"==typeof i){if(!I.axis2d||!I.axis2d[i])throw Error("Can't find axis: "+i+" - Check require() dependencies.");a=new I.axis2d[i](this,t)}else a=new i(this,t);return a.name=e,a.dirty=!0,e in this.axes&&this.axes[e].destroy(),this.axes[e]=a,this.dirty=!0,this},getAxis:function(e){return this.axes[e]},removeAxis:function(e){return e in this.axes&&(this.axes[e].destroy(),delete this.axes[e],this.dirty=!0),this},addPlot:function(e,t){var a,i=t&&t.type||"Default";if("string"==typeof i){if(!I.plot2d||!I.plot2d[i])throw Error("Can't find plot: "+i+" - didn't you forget to dojo.require() it?");a=new I.plot2d[i](this,t)}else a=new i(this,t);return a.name=e,a.dirty=!0,e in this.plots?(this.stack[this.plots[e]].destroy(),this.stack[this.plots[e]]=a):(this.plots[e]=this.stack.length,this.stack.push(a)),this.dirty=!0,this},getPlot:function(e){return this.stack[this.plots[e]]},removePlot:function(e){if(e in this.plots){var t=this.plots[e];delete this.plots[e],this.stack[t].destroy(),this.stack.splice(t,1),p.forIn(this.plots,function(e,a,i){e>t&&(i[a]=e-1)});var i=a.filter(this.series,function(t){return t.plot!=e});i.length<this.series.length&&(a.forEach(this.series,function(t){t.plot==e&&t.destroy()}),this.runs={},a.forEach(i,function(e,t){this.runs[e.plot]=t},this),this.series=i),this.dirty=!0}return this},getPlotOrder:function(){return p.map(this.stack,z)},setPlotOrder:function(e){var t={},a=p.filter(e,function(e){return!(e in this.plots)||e in t?!1:(t[e]=1,!0)},this);a.length<this.stack.length&&p.forEach(this.stack,function(e){var i=e.name;i in t||a.push(i)});var i=p.map(a,function(e){return this.stack[this.plots[e]]},this);return p.forEach(i,function(e,t){this.plots[e.name]=t},this),this.stack=i,this.dirty=!0,this},movePlotToFront:function(e){if(e in this.plots){var t=this.plots[e];if(t){var a=this.getPlotOrder();return a.splice(t,1),a.unshift(e),this.setPlotOrder(a)}}return this},movePlotToBack:function(e){if(e in this.plots){var t=this.plots[e];if(t<this.stack.length-1){var a=this.getPlotOrder();return a.splice(t,1),a.push(e),this.setPlotOrder(a)}}return this},addSeries:function(e,t,a){var i=new h(this,t,a);return i.name=e,e in this.runs?(this.series[this.runs[e]].destroy(),this.series[this.runs[e]]=i):(this.runs[e]=this.series.length,this.series.push(i)),this.dirty=!0,!("ymin"in i)&&"min"in i&&(i.ymin=i.min),!("ymax"in i)&&"max"in i&&(i.ymax=i.max),this},getSeries:function(e){return this.series[this.runs[e]]},removeSeries:function(e){if(e in this.runs){var t=this.runs[e];delete this.runs[e],this.series[t].destroy(),this.series.splice(t,1),p.forIn(this.runs,function(e,a,i){e>t&&(i[a]=e-1)}),this.dirty=!0}return this},updateSeries:function(e,t,a){if(e in this.runs){var i=this.series[this.runs[e]];i.update(t),a?this.dirty=!0:(this._invalidateDependentPlots(i.plot,!1),this._invalidateDependentPlots(i.plot,!0))}return this},getSeriesOrder:function(e){return p.map(p.filter(this.series,function(t){return t.plot==e}),z)},setSeriesOrder:function(e){var t,a={},i=p.filter(e,function(e){if(!(e in this.runs)||e in a)return!1;var i=this.series[this.runs[e]];if(t){if(i.plot!=t)return!1}else t=i.plot;return a[e]=1,!0},this);p.forEach(this.series,function(e){var r=e.name;r in a||e.plot!=t||i.push(r)});var r=p.map(i,function(e){return this.series[this.runs[e]]},this);return this.series=r.concat(p.filter(this.series,function(e){return e.plot!=t})),p.forEach(this.series,function(e,t){this.runs[e.name]=t},this),this.dirty=!0,this},moveSeriesToFront:function(e){if(e in this.runs){var t=this.runs[e],a=this.getSeriesOrder(this.series[t].plot);if(e!=a[0])return a.splice(t,1),a.unshift(e),this.setSeriesOrder(a)}return this},moveSeriesToBack:function(e){if(e in this.runs){var t=this.runs[e],a=this.getSeriesOrder(this.series[t].plot);if(e!=a[a.length-1])return a.splice(t,1),a.push(e),this.setSeriesOrder(a)}return this},resize:function(e,t){switch(arguments.length){case 1:n.setMarginBox(this.node,e);break;case 2:n.setMarginBox(this.node,{w:e,h:t})}var a=n.getMarginBox(this.node),i=this.surface.getDimensions();return i.width!=a.w||i.height!=a.h?(this.surface.setDimensions(a.w,a.h),this.dirty=!0,this.render()):this},getGeometry:function(){var e={};return p.forIn(this.axes,function(t){t.initialized()&&(e[t.name]={name:t.name,vertical:t.vertical,scaler:t.scaler,ticks:t.ticks})}),e},setAxisWindow:function(e,t,i,r){var o=this.axes[e];return o&&(o.setWindow(t,i),a.forEach(this.stack,function(t){t.hAxis!=e&&t.vAxis!=e||(t.zoom=r)})),this},setWindow:function(e,t,i,r,o){return"plotArea"in this||this.calculateGeometry(),p.forIn(this.axes,function(a){var o,n,d=a.getScaler().bounds,s=d.span/(d.upper-d.lower);a.vertical?(o=t,n=r/s/o):(o=e,n=i/s/o),a.setWindow(o,n)}),a.forEach(this.stack,function(e){e.zoom=o}),this},zoomIn:function(e,t,a){var i=this.axes[e];if(i){var r,o,n=i.getScaler().bounds,d=Math.min(t[0],t[1]),s=Math.max(t[0],t[1]);d=t[0]<n.lower?n.lower:d,s=t[1]>n.upper?n.upper:s,r=(n.upper-n.lower)/(s-d),o=d-n.lower,this.setAxisWindow(e,r,o),a?this.delayedRender():this.render()}},calculateGeometry:function(){if(this.dirty)return this.fullGeometry();var e=a.filter(this.stack,function(e){return e.dirty||e.hAxis&&this.axes[e.hAxis].dirty||e.vAxis&&this.axes[e.vAxis].dirty},this);return F(e,this.plotArea),this},fullGeometry:function(){this._makeDirty(),a.forEach(this.stack,_),this.theme||this.setTheme(new u),a.forEach(this.series,function(e){if(!(e.plot in this.plots)){if(!I.plot2d||!I.plot2d.Default)throw Error("Can't find plot: Default - didn't you forget to dojo.require() it?");var t=new I.plot2d.Default(this,{});t.name=e.plot,this.plots[e.plot]=this.stack.length,this.stack.push(t)}this.stack[this.plots[e.plot]].addSeries(e)},this),a.forEach(this.stack,function(e){e.assignAxes&&e.assignAxes(this.axes)},this);var e=this.dim=this.surface.getDimensions();e.width=y.normalizedLength(e.width),e.height=y.normalizedLength(e.height),p.forIn(this.axes,_),F(this.stack,e);var t=this.offsets={l:0,r:0,t:0,b:0},i=this;if(p.forIn(this.axes,function(e){l("dojo-bidi")&&i._resetLeftBottom(e),p.forIn(e.getOffsets(),function(e,a){t[a]=Math.max(e,t[a])})}),this.title){this.titleGap=0==this.titleGap?0:this.titleGap||this.theme.chart.titleGap||20,this.titlePos=this.titlePos||this.theme.chart.titlePos||"top",this.titleFont=this.titleFont||this.theme.chart.titleFont,this.titleFontColor=this.titleFontColor||this.theme.chart.titleFontColor||"black";var r=y.normalizedLength(y.splitFontString(this.titleFont).size);t["top"==this.titlePos?"t":"b"]+=r+this.titleGap}return p.forIn(this.margins,function(e,a){t[a]+=e}),this.plotArea={width:e.width-t.l-t.r,height:e.height-t.t-t.b},p.forIn(this.axes,_),F(this.stack,this.plotArea),this},render:function(){return this._delayedRenderHandle&&(clearTimeout(this._delayedRenderHandle),this._delayedRenderHandle=null),this.theme&&this.theme.clear(),this.dirty?this.fullRender():(this.calculateGeometry(),p.forEachRev(this.stack,function(e){e.render(this.dim,this.offsets)},this),p.forIn(this.axes,function(e){e.render(this.dim,this.offsets)},this),this._makeClean(),this)},fullRender:function(){this.fullGeometry();var e=this.offsets,t=this.dim,i=Math.max(0,t.width-e.l-e.r),r=Math.max(0,t.height-e.t-e.b);a.forEach(this.series,j),p.forIn(this.axes,j),a.forEach(this.stack,j);var o=this.surface.children;if(c.dispose)for(var n=0;n<o.length;++n)c.dispose(o[n]);if(this.chartTitle&&this.chartTitle.tagName&&d.destroy(this.chartTitle),this.surface.clear(),this.chartTitle=null,this._renderChartBackground(t,e),this._nativeClip?this._renderPlotBackground(t,e,i,r):this._renderPlotBackground(t,e,i,r),p.foldr(this.stack,function(a,i){return i.render(t,e),0},0),this._nativeClip||this._renderChartBackground(t,e),this.title){var s="canvas"==y.renderer&&this.htmlLabels,m=s||!l("ie")&&!l("opera")&&this.htmlLabels?"html":"gfx",u=y.normalizedLength(y.splitFontString(this.titleFont).size);this.chartTitle=f.createText[m](this,this.surface,t.width/2,"top"==this.titlePos?u+this.margins.t:t.height-this.margins.b,"middle",this.title,this.titleFont,this.titleFontColor)}return p.forIn(this.axes,function(a){a.render(t,e)}),this._makeClean(),this},_renderChartBackground:function(e,t){var a,i=this.theme,o=void 0!==this.fill?this.fill:i.chart&&i.chart.fill,n=void 0!==this.stroke?this.stroke:i.chart&&i.chart.stroke;if("inherit"==o){var d=this.node;for(o=new s(r.get(d,"backgroundColor"));0==o.a&&d!=document.documentElement;)o=new s(r.get(d,"backgroundColor")),d=d.parentNode}o&&(this._nativeClip?(o=m.prototype._shapeFill(m.prototype._plotFill(o,e),{x:0,y:0,width:e.width+1,height:e.height+1}),this.surface.createRect({width:e.width+1,height:e.height+1}).setFill(o)):(o=m.prototype._plotFill(o,e,t),t.l&&(a={x:0,y:0,width:t.l,height:e.height+1},this.surface.createRect(a).setFill(m.prototype._shapeFill(o,a))),t.r&&(a={x:e.width-t.r,y:0,width:t.r+1,height:e.height+2},this.surface.createRect(a).setFill(m.prototype._shapeFill(o,a))),t.t&&(a={x:0,y:0,width:e.width+1,height:t.t},this.surface.createRect(a).setFill(m.prototype._shapeFill(o,a))),t.b&&(a={x:0,y:e.height-t.b,width:e.width+1,height:t.b+2},this.surface.createRect(a).setFill(m.prototype._shapeFill(o,a))))),n&&this.surface.createRect({width:e.width-1,height:e.height-1}).setStroke(n)},_renderPlotBackground:function(e,t,a,i){var r=this.theme,o=r.plotarea&&r.plotarea.fill,n=r.plotarea&&r.plotarea.stroke,d={x:t.l-1,y:t.t-1,width:a+2,height:i+2};o&&(o=m.prototype._shapeFill(m.prototype._plotFill(o,e,t),d),this.surface.createRect(d).setFill(o)),n&&this.surface.createRect({x:t.l,y:t.t,width:a+1,height:i+1}).setStroke(n)},delayedRender:function(){return this._delayedRenderHandle||(this._delayedRenderHandle=setTimeout(t.hitch(this,function(){this.render()}),this.delayInMs)),this},connectToPlot:function(e,t,a){return e in this.plots?this.stack[this.plots[e]].connect(t,a):null},fireEvent:function(e,t,a){if(e in this.runs){var i=this.series[this.runs[e]].plot;if(i in this.plots){var r=this.stack[this.plots[i]];r&&r.fireEvent(e,t,a)}}return this},_makeClean:function(){a.forEach(this.axes,x),a.forEach(this.stack,x),a.forEach(this.series,x),this.dirty=!1},_makeDirty:function(){a.forEach(this.axes,A),a.forEach(this.stack,A),a.forEach(this.series,A),this.dirty=!0},_invalidateDependentPlots:function(e,t){if(e in this.plots){var i,r=this.stack[this.plots[e]],o=t?"vAxis":"hAxis";r[o]?(i=this.axes[r[o]],i&&i.dependOnData()&&(i.dirty=!0,a.forEach(this.stack,function(e){e[o]&&e[o]==r[o]&&(e.dirty=!0)}))):r.dirty=!0}},setDir:function(e){return this},_resetLeftBottom:function(e){},formatTruncatedLabel:function(e,t,a){}});return l("dojo-bidi")?i("dojox.charting.Chart",[T,v]):T});//# sourceMappingURL=Chart.js.map