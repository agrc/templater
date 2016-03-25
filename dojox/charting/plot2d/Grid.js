//>>built
define("dojox/charting/plot2d/Grid",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/sniff","./CartesianBase","./common","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,r,o,d,n){var s=function(e,t){return e.value-t.value};return t("dojox.charting.plot2d.Grid",r,{defaultParams:{hMajorLines:!0,hMinorLines:!1,vMajorLines:!0,vMinorLines:!1,hStripes:!1,vStripes:!1,animate:null,enableCache:!1,renderOnAxis:!0},optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},vFill:{},hAlternateFill:{},vAlternateFill:{}},constructor:function(t,a){this.opt=e.clone(this.defaultParams),d.updateWithObject(this.opt,a),d.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate,this.opt.enableCache&&(this._lineFreePool=[],this._lineUsePool=[],this._rectFreePool=[],this._rectUsePool=[])},addSeries:function(e){return this},getSeriesStats:function(){return e.delegate(o.defaultStats)},cleanGroup:function(){this.inherited(arguments),this.opt.enableCache&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._rectFreePool=this._rectFreePool.concat(this._rectUsePool),this._rectUsePool=[])},createLine:function(e,t){var a;return this.opt.enableCache&&this._lineFreePool.length>0?(a=this._lineFreePool.pop(),a.setShape(t),e.add(a)):a=e.createLine(t),this.opt.enableCache&&this._lineUsePool.push(a),a},createRect:function(e,t){var a;return this.opt.enableCache&&this._rectFreePool.length>0?(a=this._rectFreePool.pop(),a.setShape(t),e.add(a)):a=e.createRect(t),this.opt.enableCache&&this._rectUsePool.push(a),a},render:function(e,t){if(this.zoom)return this.performZoom(e,t);if(this.dirty=this.isDirty(),!this.dirty)return this;this.cleanGroup();var a,r,o=this.getGroup(),d=this.chart.theme;if(i("ios")&&i("ios")<6||i("android")||i("safari")&&!i("ios")){var n=Math.max(0,e.width-t.l-t.r),s=Math.max(0,e.height-t.t-t.b);o.createRect({x:t.l,y:t.t,width:n,height:s})}if(this._vAxis){r=this._vAxis.getTicks();var l=this._vAxis.getScaler();if(null!=r&&null!=l){var m=l.scaler.getTransformerFromModel(l);this.opt.hStripes&&this._renderHRect(r,d.grid,e,t,l,m),this.opt.hMinorLines&&(a=this.opt.minorHLine||d.grid&&d.grid.minorLine||d.axis.minorTick,this._renderHLines(r.minor,a,e,t,l,m)),this.opt.hMajorLines&&(a=this.opt.majorHLine||d.grid&&d.grid.majorLine||d.axis.majorTick,this._renderHLines(r.major,a,e,t,l,m))}}if(this._hAxis){r=this._hAxis.getTicks();var u=this._hAxis.getScaler();if(null!=r&&null!=u){var h=u.scaler.getTransformerFromModel(u);this.opt.vStripes&&this._renderVRect(r,d.grid,e,t,u,h),r&&this.opt.vMinorLines&&(a=this.opt.minorVLine||d.grid&&d.grid.minorLine||d.axis.minorTick,this._renderVLines(r.minor,a,e,t,u,h)),r&&this.opt.vMajorLines&&(a=this.opt.majorVLine||d.grid&&d.grid.majorLine||d.axis.majorTick,this._renderVLines(r.major,a,e,t,u,h))}}return this.dirty=!1,this},_renderHLines:function(e,t,i,r,o,d){var n=this.getGroup();a.forEach(e,function(e){if(this.opt.renderOnAxis||e.value!=(this._vAxis.opt.leftBottom?o.bounds.from:o.bounds.to)){var a=i.height-r.b-d(e.value),s=this.createLine(n,{x1:r.l,y1:a,x2:i.width-r.r,y2:a}).setStroke(t);this.animate&&this._animateGrid(s,"h",r.l,r.r+r.l-i.width)}},this)},_renderVLines:function(e,t,i,r,o,d){var n=this.getGroup();a.forEach(e,function(e){if(this.opt.renderOnAxis||e.value!=(this._hAxis.opt.leftBottom?o.bounds.from:o.bounds.to)){var a=r.l+d(e.value),s=this.createLine(n,{x1:a,y1:r.t,x2:a,y2:i.height-r.b}).setStroke(t);this.animate&&this._animateGrid(s,"v",i.height-r.b,i.height-r.b-r.t)}},this)},_renderHRect:function(e,t,a,i,r,o){var d,n,l,m,u,h=e.major.concat(e.minor);h.sort(s),h[0].value>r.bounds.from&&h.splice(0,0,{value:r.bounds.from}),h[h.length-1].value<r.bounds.to&&h.push({value:r.bounds.to});for(var f=this.getGroup(),c=0;c<h.length-1;c++)n=h[c],l=a.height-i.b-o(n.value),m=a.height-i.b-o(h[c+1].value),d=c%2==0?this.opt.hAlternateFill||t&&t.alternateFill:this.opt.hFill||t&&t.fill,d&&(u=this.createRect(f,{x:i.l,y:l,width:a.width-i.r,height:l-m}).setFill(d),this.animate&&this._animateGrid(u,"h",i.l,i.r+i.l-a.width))},_renderVRect:function(e,t,a,i,r,o){var d,n,l,m,u,h=e.major.concat(e.minor);h.sort(s),h[0].value>r.bounds.from&&h.splice(0,0,{value:r.bounds.from}),h[h.length-1].value<r.bounds.to&&h.push({value:r.bounds.to});for(var f=this.getGroup(),c=0;c<h.length-1;c++)n=h[c],l=i.l+o(n.value),m=i.l+o(h[c+1].value),d=c%2==0?this.opt.vAlternateFill||t&&t.alternateFill:this.opt.vFill||t&&t.fill,d&&(u=this.createRect(f,{x:l,y:i.t,width:m-l,height:a.width-i.r}).setFill(d),this.animate&&this._animateGrid(u,"v",a.height-i.b,a.height-i.b-i.t))},_animateGrid:function(t,a,i,r){var o="h"==a?[i,0]:[0,i],d="h"==a?[1/r,1]:[1,1/r];n.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:o,end:[0,0]},{name:"scale",start:d,end:[1,1]},{name:"original"}]},this.animate)).play()}})});//# sourceMappingURL=Grid.js.map