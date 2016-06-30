//>>built
define("dojox/charting/action2d/Tooltip",["dijit/Tooltip","dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/connect","dojo/dom-style","./PlotAction","dojox/gfx/matrix","dojo/has","dojo/has!dojo-bidi?../bidi/action2d/Tooltip","dojox/lang/functional","dojox/lang/functional/scan","dojox/lang/functional/fold"],function(e,t,a,i,r,d,o,n,l,s,m){var u=function(e,t){var a=e.run&&e.run.data&&e.run.data[e.index];return a&&"number"!=typeof a&&(a.tooltip||a.text)?a.tooltip||a.text:t.tooltipFunc?t.tooltipFunc(e):e.y},f=Math.PI/4,h=Math.PI/2,c=a(l("dojo-bidi")?"dojox.charting.action2d.NonBidiTooltip":"dojox.charting.action2d.Tooltip",o,{defaultParams:{text:u,mouseOver:!0},optionalParams:{},constructor:function(e,t,a){this.text=a&&a.text?a.text:u,this.mouseOver=a&&void 0!=a.mouseOver?a.mouseOver:!0,this.connect()},process:function(a){if("onplotreset"===a.type||"onmouseout"===a.type)return e.hide(this.aroundRect),this.aroundRect=null,void("onplotreset"===a.type&&delete this.angles);if(!(!a.shape||this.mouseOver&&"onmouseover"!==a.type||!this.mouseOver&&"onclick"!==a.type)){var d={type:"rect"},o=["after-centered","before-centered"];switch(a.element){case"marker":d.x=a.cx,d.y=a.cy,d.w=d.h=1;break;case"circle":d.x=a.cx-a.cr,d.y=a.cy-a.cr,d.w=d.h=2*a.cr;break;case"spider_circle":d.x=a.cx,d.y=a.cy,d.w=d.h=1;break;case"spider_plot":return;case"column":o=["above-centered","below-centered"];case"bar":d=t.clone(a.shape.getShape()),d.w=d.width,d.h=d.height;break;case"candlestick":d.x=a.x,d.y=a.y,d.w=a.width,d.h=a.height;break;default:if(!this.angles){var s="number"==typeof a.run.data[0]?m.map(a.run.data,"x ? Math.max(x, 0) : 0"):m.map(a.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=m.map(m.scanl(s,"+",0),"* 2 * Math.PI / this",m.foldl(s,"+",0))}var u=n._degToRad(a.plot.opt.startAngle),c=(this.angles[a.index]+this.angles[a.index+1])/2+u;d.x=a.cx+a.cr*Math.cos(c),d.y=a.cy+a.cr*Math.sin(c),d.w=d.h=1,u&&(0>c||c>2*Math.PI)&&(c=Math.abs(2*Math.PI-Math.abs(c))),f>c||(h+f>c?o=["below-centered","above-centered"]:c<Math.PI+f?o=["before-centered","after-centered"]:c<2*Math.PI-f&&(o=["above-centered","below-centered"]))}l("dojo-bidi")&&this._recheckPosition(a,d,o);var y=this.chart.getCoords();d.x+=y.x,d.y+=y.y,d.x=Math.round(d.x),d.y=Math.round(d.y),d.w=Math.ceil(d.w),d.h=Math.ceil(d.h),this.aroundRect=d;var v=this.text(a,this.plot);v&&e.show(this._format(v),this.aroundRect,o),this.mouseOver||(this._handle=r.connect(i.doc,"onclick",this,"onClick"))}},onClick:function(){this.process({type:"onmouseout"})},_recheckPosition:function(e,t,a){},_format:function(e){return e}});return l("dojo-bidi")?a("dojox.charting.action2d.Tooltip",[c,s]):c});//# sourceMappingURL=Tooltip.js.map