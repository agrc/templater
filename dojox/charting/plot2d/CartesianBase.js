//>>built
define("dojox/charting/plot2d/CartesianBase",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/has","./Base","../scaler/primitive","dojox/gfx","dojox/gfx/fx","dojox/lang/utils"],function(e,t,a,i,r,o,n,d,s){return t("dojox.charting.plot2d.CartesianBase",r,{baseParams:{hAxis:"x",vAxis:"y",labels:!1,labelOffset:10,fixed:!0,precision:1,labelStyle:"inside",htmlLabels:!0,omitLabels:!0,labelFunc:null},constructor:function(t,a){this.axes=["hAxis","vAxis"],this.zoom=null,this.zoomQueue=[],this.lastWindow={vscale:1,hscale:1,xoffset:0,yoffset:0},this.hAxis=a&&a.hAxis||"x",this.vAxis=a&&a.vAxis||"y",this.series=[],this.opt=e.clone(this.baseParams),s.updateWithObject(this.opt,a)},clear:function(){return this.inherited(arguments),this._hAxis=null,this._vAxis=null,this},cleanGroup:function(e,t){if(this.inherited(arguments),!t&&this.chart._nativeClip){var a=this.chart.offsets,i=this.chart.dim,r=Math.max(0,i.width-a.l-a.r),o=Math.max(0,i.height-a.t-a.b);this.group.setClip({x:a.l,y:a.t,width:r,height:o}),this._clippedGroup||(this._clippedGroup=this.group.createGroup())}},purgeGroup:function(){this.inherited(arguments),this._clippedGroup=null},getGroup:function(){return this._clippedGroup||this.group},setAxis:function(e){return e&&(this[e.vertical?"_vAxis":"_hAxis"]=e),this},toPage:function(e){var t=this._hAxis,a=this._vAxis,i=t.getScaler(),r=a.getScaler(),o=i.scaler.getTransformerFromModel(i),n=r.scaler.getTransformerFromModel(r),d=this.chart.getCoords(),s=this.chart.offsets,l=this.chart.dim,m=function(e){var i={};return i.x=o(e[t.name])+d.x+s.l,i.y=d.y+l.height-s.b-n(e[a.name]),i};return e?m(e):m},toData:function(e){var t=this._hAxis,a=this._vAxis,i=t.getScaler(),r=a.getScaler(),o=i.scaler.getTransformerFromPlot(i),n=r.scaler.getTransformerFromPlot(r),d=this.chart.getCoords(),s=this.chart.offsets,l=this.chart.dim,m=function(e){var i={};return i[t.name]=o(e.x-d.x-s.l),i[a.name]=n(d.y+l.height-e.y-s.b),i};return e?m(e):m},isDirty:function(){return this.dirty||this._hAxis&&this._hAxis.dirty||this._vAxis&&this._vAxis.dirty},createLabel:function(e,t,a,i){if(this.opt.labels){var r,o,d=this.opt.labelFunc?this.opt.labelFunc.apply(this,[t,this.opt.fixed,this.opt.precision]):this._getLabel(isNaN(t.y)?t:t.y);if("inside"==this.opt.labelStyle){var s=n._base._getTextBox(d,{font:i.series.font});if(r=a.x+a.width/2,o=a.y+a.height/2+s.h/4,s.w>a.width||s.h>a.height)return}else r=a.x+a.width/2,o=a.y-this.opt.labelOffset;this.renderLabel(e,r,o,d,i,"inside"==this.opt.labelStyle)}},performZoom:function(t,i){var r=this._vAxis.scale||1,o=this._hAxis.scale||1,n=t.height-i.b,s=this._hScaler.bounds,l=(s.from-s.lower)*s.scale,m=this._vScaler.bounds,u=(m.from-m.lower)*m.scale,h=r/this.lastWindow.vscale,f=o/this.lastWindow.hscale,c=(this.lastWindow.xoffset-l)/(1==this.lastWindow.hscale?o:this.lastWindow.hscale),y=(u-this.lastWindow.yoffset)/(1==this.lastWindow.vscale?r:this.lastWindow.vscale),v=this.getGroup(),p=d.animateTransform(e.delegate({shape:v,duration:1200,transform:[{name:"translate",start:[0,0],end:[i.l*(1-f),n*(1-h)]},{name:"scale",start:[1,1],end:[f,h]},{name:"original"},{name:"translate",start:[0,0],end:[c,y]}]},this.zoom));return e.mixin(this.lastWindow,{vscale:r,hscale:o,xoffset:l,yoffset:u}),this.zoomQueue.push(p),a.connect(p,"onEnd",this,function(){this.zoom=null,this.zoomQueue.shift(),this.zoomQueue.length>0&&this.zoomQueue[0].play()}),1==this.zoomQueue.length&&this.zoomQueue[0].play(),this},initializeScalers:function(e,t){return this._hAxis?(this._hAxis.initialized()||this._hAxis.calculate(t.hmin,t.hmax,e.width),this._hScaler=this._hAxis.getScaler()):this._hScaler=o.buildScaler(t.hmin,t.hmax,e.width),this._vAxis?(this._vAxis.initialized()||this._vAxis.calculate(t.vmin,t.vmax,e.height),this._vScaler=this._vAxis.getScaler()):this._vScaler=o.buildScaler(t.vmin,t.vmax,e.height),this}})});//# sourceMappingURL=CartesianBase.js.map