//>>built
define("dojox/charting/action2d/_IndicatorElement",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","../plot2d/Indicator","dojo/has","../plot2d/common","../axis2d/common","dojox/gfx"],function(e,t,a,i,r){var d=function(e,t,a){var i,r=e?{x:t[0],y:a[0][0]}:{x:a[0][0],y:t[0]};return t.length>1&&(i=e?{x:t[1],y:a[1][0]}:{x:a[1][0],y:t[1]}),[r,i]},o=a("dojox.charting.action2d._IndicatorElement",i,{constructor:function(e,t){t||(t={}),this.inter=t.inter},_updateVisibility:function(e,t,a){var i="x"==a?this._hAxis:this._vAxis,r=i.getWindowScale();this.chart.setAxisWindow(i.name,r,i.getWindowOffset()+(e[a]-t[a])/r),this._noDirty=!0,this.chart.render(),this._noDirty=!1,this._initTrack()},_trackMove:function(){this._updateIndicator(this.pageCoord),this._tracker=setTimeout(e.hitch(this,this._trackMove),100)},_initTrack:function(){this._tracker||(this._tracker=setTimeout(e.hitch(this,this._trackMove),500))},stopTrack:function(){this._tracker&&(clearTimeout(this._tracker),this._tracker=null)},render:function(){if(this.isDirty()){var t=this.inter,a=t.plot,i=t.opt.vertical;this.opt.offset=t.opt.offset||(i?{x:0,y:5}:{x:5,y:0}),t.opt.labelFunc&&(this.opt.labelFunc=function(e,a,r,o,n){var s=d(i,a,r);return t.opt.labelFunc(s[0],s[1],o,n)}),t.opt.fillFunc&&(this.opt.fillFunc=function(e,a,r){var o=d(i,a,r);return t.opt.fillFunc(o[0],o[1])}),this.opt=e.delegate(t.opt,this.opt),this.pageCoord?(this.opt.values=[],this.opt.labels=this.secondCoord?"trend":"markers"):(this.opt.values=null,this.inter.onChange({})),this.hAxis=a.hAxis,this.vAxis=a.vAxis,this.inherited(arguments)}},_updateIndicator:function(){var e=this._updateCoordinates(this.pageCoord,this.secondCoord);if(!(e.length>1))return void this.inter.onChange({});var a=this.opt.vertical;this._data=[],this.opt.values=[],t.forEach(e,function(e){e&&(this.opt.values.push(a?e.x:e.y),this._data.push([a?e.y:e.x]))},this),this.inherited(arguments)},_renderText:function(e,t,a,i,r,o,n,s){this.inter.opt.labels&&this.inherited(arguments);var l=d(this.opt.vertical,n,s);this.inter.onChange({start:l[0],end:l[1],label:t})},_updateCoordinates:function(e,t){r("dojo-bidi")&&this._checkXCoords(e,t);var a=this.inter,i=a.plot,d=a.opt.vertical,o=this.chart.getAxis(i.hAxis),n=this.chart.getAxis(i.vAxis),s=o.name,l=n.name,m=o.getScaler().bounds,u=n.getScaler().bounds,h=d?"x":"y",f=d?s:l,c=d?m:u;if(t){var y;d?e.x>t.x&&(y=t,t=e,e=y):e.y>t.y&&(y=t,t=e,e=y)}var v,p=i.toData(e);t&&(v=i.toData(t));var g={};g[s]=m.from,g[l]=u.from;var M=i.toPage(g);g[s]=m.to,g[l]=u.to;var b=i.toPage(g);if(p[f]<c.from){if(!v&&a.opt.autoScroll&&!a.opt.mouseOver)return this._updateVisibility(e,M,h),[];if(a.opt.mouseOver)return[];e[h]=M[h],p=i.toData(e)}else if(p[f]>c.to){if(!v&&a.opt.autoScroll&&!a.opt.mouseOver)return this._updateVisibility(e,b,h),[];if(a.opt.mouseOver)return[];e[h]=b[h],p=i.toData(e)}var w,k=this._snapData(p,h,d);return null==k.y?[]:(t&&(v[f]<c.from?(t[h]=M[h],v=i.toData(t)):v[f]>c.to&&(t[h]=b[h],v=i.toData(t)),w=this._snapData(v,h,d),null==w.y&&(w=null)),[k,w])},_snapData:function(e,t,a){var i,d,o=this.chart.getSeries(this.inter.opt.series).data,n=o.length;for(i=0;n>i;++i)if(d=o[i],null==d);else if("number"==typeof d){if(i+1>e[t])break}else if(d[t]>e[t])break;r("dojo-bidi")&&(i=n-i,d=o[i],e[t]>1&&(e[t]=n-e[t]+1,e[t]>n&&(e[t]=n-.1)));var s,l,m,u;if("number"==typeof d?(s=i+1,l=d,i>0&&(m=i,u=o[i-1])):(s=d.x,l=d.y,i>0&&(m=o[i-1].x,u=o[i-1].y)),i>0){var h=a?(s+m)/2:(l+u)/2;e[t]<=h&&(s=m,l=u)}return{x:s,y:l}},cleanGroup:function(e){return this.inherited(arguments),this.group.moveToFront(),this},isDirty:function(){return!this._noDirty&&(this.dirty||this.inter.plot.isDirty())}});return r("dojo-bidi")&&o.extend({_checkXCoords:function(e,t){this.chart.isRightToLeft()&&(e&&(e.x=this.chart.dim.width+(this.chart.offsets.l-this.chart.offsets.r)-e.x),t&&(t.x=this.chart.dim.width+(this.chart.offsets.l-this.chart.offsets.r)-t.x))}}),o});//# sourceMappingURL=_IndicatorElement.js.map