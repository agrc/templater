//>>built
define("dojox/charting/plot2d/Stacked",["dojo/_base/declare","dojo/_base/lang","./Default","./commonStacked"],function(e,t,a,i){return e("dojox.charting.plot2d.Stacked",a,{getSeriesStats:function(){return i.collectStats(this.series,t.hitch(this,"isNullValue"))},buildSegments:function(e,a){for(var r=this.series[e],n=a?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,o=a?Math.min(r.data.length-1,Math.ceil(this._hScaler.bounds.to)):r.data.length-1,d=null,l=[],s=t.hitch(this,"isNullValue"),m=n;m<=o;m++){var u=a?i.getIndexValue(this.series,e,m,s):i.getValue(this.series,e,r.data[m]?r.data[m].x:null,s);s(u[0])||!a&&null==u[0].y?this.opt.interpolate&&!a||(d=null):(d||(d=[],l.push({index:m,rseg:d})),d.push(u[0]))}return l}})});//# sourceMappingURL=Stacked.js.map