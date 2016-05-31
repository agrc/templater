//>>built
define("dojox/mvc/StatefulSeries",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/mvc/at"],function(e,t,i,o){return t("dojox.mvc.StatefulSeries",null,{constructor:function(t){function a(){n.series&&(n.series.chart.updateSeries(n.series.name,n),n.series.chart.delayedRender())}var n=this;this._handles=[],this.data=e.map(t,function(e,t){if("dojox.mvc.at"==(e||{}).atsignature){var r=e.target,s=e.targetProp;if(i.isString(r))throw new Error("Literal-based dojox/mvc/at is not supported in dojox/mvc/StatefulSeries.");if(e.bindDirection&&!(e.bindDirection&o.from),s&&i.isFunction(r.set)&&i.isFunction(r.watch)){var d=e.converter,l=(d||{}).format&&i.hitch({target:r,source:this},d.format);this._handles.push(r.watch(s,function(e,i,o){n.data[t]=l?l(o):o,a()}))}return s?i.isFunction(r.get)?r.get(s):r[s]:r}return e},this),a()},destroy:function(){for(var e=null;e=this._handles.pop();)e.unwatch()},setSeriesObject:function(e){this.series=e}})});//# sourceMappingURL=StatefulSeries.js.map