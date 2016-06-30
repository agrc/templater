//>>built
define("dojox/charting/plot2d/Grid",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/sniff","./CartesianBase","./common","dojox/lang/utils","dojox/gfx/fx"],function(e,t,i,a,r,n,o,d){var s=function(e,t){return e.value-t.value};return t("dojox.charting.plot2d.Grid",r,{defaultParams:{hMajorLines:!0,hMinorLines:!1,vMajorLines:!0,vMinorLines:!1,hStripes:!1,vStripes:!1,animate:null,enableCache:!1,renderOnAxis:!0},optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},vFill:{},hAlternateFill:{},vAlternateFill:{}},constructor:function(t,i){this.opt=e.clone(this.defaultParams),o.updateWithObject(this.opt,i),o.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,this.opt.enableCache&&(this._lineFreePool=[],this._lineUsePool=[],this._rectFreePool=[],this._rectUsePool=[])},addSeries:function(e){return this},getSeriesStats:function(){return e.delegate(n.defaultStats)},cleanGroup:function(){this.inherited(arguments),this.opt.enableCache&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._rectFreePool=this._rectFreePool.concat(this._rectUsePool),this._rectUsePool=[])},createLine:function(e,t){var i;return this.opt.enableCache&&this._lineFreePool.length>0?(i=this._lineFreePool.pop(),i.setShape(t),e.add(i)):i=e.createLine(t),this.opt.enableCache&&this._lineUsePool.push(i),i},createRect:function(e,t){var i;return this.opt.enableCache&&this._rectFreePool.length>0?(i=this._rectFreePool.pop(),i.setShape(t),e.add(i)):i=e.createRect(t),this.opt.enableCache&&this._rectUsePool.push(i),i},render:function(e,t){if(this.zoom)return this.performZoom(e,t);if(this.dirty=this.isDirty(),!this.dirty)return this;this.cleanGroup();var i,r,n=this.getGroup(),o=this.chart.theme;if(a("ios")&&a("ios")<6||a("android")||a("safari")&&!a("ios")){var d=Math.max(0,e.width-t.l-t.r),s=Math.max(0,e.height-t.t-t.b);n.createRect({x:t.l,y:t.t,width:d,height:s})}if(this._vAxis){r=this._vAxis.getTicks();var l=this._vAxis.getScaler();if(null!=r&&null!=l){var u=l.scaler.getTransformerFromModel(l);this.opt.hStripes&&this._renderHRect(r,o.grid,e,t,l,u),this.opt.hMinorLines&&(i=this.opt.minorHLine||o.grid&&o.grid.minorLine||o.axis.minorTick,this._renderHLines(r.minor,i,e,t,l,u)),this.opt.hMajorLines&&(i=this.opt.majorHLine||o.grid&&o.grid.majorLine||o.axis.majorTick,this._renderHLines(r.major,i,e,t,l,u))}}if(this._hAxis){r=this._hAxis.getTicks();var c=this._hAxis.getScaler();if(null!=r&&null!=c){var f=c.scaler.getTransformerFromModel(c);this.opt.vStripes&&this._renderVRect(r,o.grid,e,t,c,f),r&&this.opt.vMinorLines&&(i=this.opt.minorVLine||o.grid&&o.grid.minorLine||o.axis.minorTick,this._renderVLines(r.minor,i,e,t,c,f)),r&&this.opt.vMajorLines&&(i=this.opt.majorVLine||o.grid&&o.grid.majorLine||o.axis.majorTick,this._renderVLines(r.major,i,e,t,c,f))}}return this.dirty=!1,this},_renderHLines:function(e,t,a,r,n,o){var d=this.getGroup();i.forEach(e,function(e){if(this.opt.renderOnAxis||e.value!=(this._vAxis.opt.leftBottom?n.bounds.from:n.bounds.to)){var i=a.height-r.b-o(e.value),s=this.createLine(d,{x1:r.l,y1:i,x2:a.width-r.r,y2:i}).setStroke(t);this.animate&&this._animateGrid(s,"h",r.l,r.r+r.l-a.width)}},this)},_renderVLines:function(e,t,a,r,n,o){var d=this.getGroup();i.forEach(e,function(e){if(this.opt.renderOnAxis||e.value!=(this._hAxis.opt.leftBottom?n.bounds.from:n.bounds.to)){var i=r.l+o(e.value),s=this.createLine(d,{x1:i,y1:r.t,x2:i,y2:a.height-r.b}).setStroke(t);this.animate&&this._animateGrid(s,"v",a.height-r.b,a.height-r.b-r.t)}},this)},_renderHRect:function(e,t,i,a,r,n){var o,d,l,u,c,f=e.major.concat(e.minor);f.sort(s),f[0].value>r.bounds.from&&f.splice(0,0,{value:r.bounds.from}),f[f.length-1].value<r.bounds.to&&f.push({value:r.bounds.to});for(var m=this.getGroup(),h=0;h<f.length-1;h++)d=f[h],l=i.height-a.b-n(d.value),u=i.height-a.b-n(f[h+1].value),o=h%2==0?this.opt.hAlternateFill||t&&t.alternateFill:this.opt.hFill||t&&t.fill,o&&(c=this.createRect(m,{x:a.l,y:l,width:i.width-a.r,height:l-u}).setFill(o),this.animate&&this._animateGrid(c,"h",a.l,a.r+a.l-i.width))},_renderVRect:function(e,t,i,a,r,n){var o,d,l,u,c,f=e.major.concat(e.minor);f.sort(s),f[0].value>r.bounds.from&&f.splice(0,0,{value:r.bounds.from}),f[f.length-1].value<r.bounds.to&&f.push({value:r.bounds.to});for(var m=this.getGroup(),h=0;h<f.length-1;h++)d=f[h],l=a.l+n(d.value),u=a.l+n(f[h+1].value),o=h%2==0?this.opt.vAlternateFill||t&&t.alternateFill:this.opt.vFill||t&&t.fill,o&&(c=this.createRect(m,{x:l,y:a.t,width:u-l,height:i.width-a.r}).setFill(o),this.animate&&this._animateGrid(c,"v",i.height-a.b,i.height-a.b-a.t))},_animateGrid:function(t,i,a,r){var n="h"==i?[a,0]:[0,a],o="h"==i?[1/r,1]:[1,1/r];d.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:n,end:[0,0]},{name:"scale",start:o,end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Grid.js.map