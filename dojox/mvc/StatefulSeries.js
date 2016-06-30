//>>built
define("dojox/mvc/StatefulSeries",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/mvc/at"],function(e,t,i,a){return t("dojox.mvc.StatefulSeries",null,{constructor:function(t){function o(){r.series&&(r.series.chart.updateSeries(r.series.name,r),r.series.chart.delayedRender())}var r=this;this._handles=[],this.data=e.map(t,function(e,t){if("dojox.mvc.at"==(e||{}).atsignature){var n=e.target,s=e.targetProp;if(i.isString(n))throw new Error("Literal-based dojox/mvc/at is not supported in dojox/mvc/StatefulSeries.");if(e.bindDirection&&!(e.bindDirection&a.from),s&&i.isFunction(n.set)&&i.isFunction(n.watch)){var d=e.converter,l=(d||{}).format&&i.hitch({target:n,source:this},d.format);this._handles.push(n.watch(s,function(e,i,a){r.data[t]=l?l(a):a,o()}))}return s?i.isFunction(n.get)?n.get(s):n[s]:n}return e},this),o()},destroy:function(){for(var e=null;e=this._handles.pop();)e.unwatch()},setSeriesObject:function(e){this.series=e}})});//# sourceMappingURL=StatefulSeries.js.map