//>>built
define("dojox/charting/StoreSeries",["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred"],function(e,t,a){return t("dojox.charting.StoreSeries",null,{constructor:function(e,t,a){this.store=e,this.kwArgs=t,this.value=a?"function"==typeof a?a:"object"==typeof a?function(e){var t={};for(var i in a)t[i]=e[a[i]];return t}:function(e){return e[a]}:function(e){return e.value},this.data=[],this._initialRendering=!0,this.fetch()},destroy:function(){this.observeHandle&&this.observeHandle.remove()},setSeriesObject:function(e){this.series=e},fetch:function(t,i){function r(){o.data=e.map(o.objects,function(e){return o.value(e,o.store)}),o._pushDataChanges()}var o=this;this.observeHandle&&this.observeHandle.remove();var n=this.store.query(t||this.kwArgs.query,i||this.kwArgs);a.when(n,function(e){o.objects=e,r()}),n.observe&&(this.observeHandle=n.observe(r,!0))},_pushDataChanges:function(){this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),this._initialRendering=!1,this.series.chart.delayedRender())}})});//# sourceMappingURL=StoreSeries.js.map