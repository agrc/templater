//>>built
define("dojox/charting/widget/Legend",["dojo/_base/declare","dijit/_WidgetBase","dojox/gfx","dojo/_base/array","dojo/has","dojo/has!dojo-bidi?../bidi/widget/Legend","dojox/lang/functional","dojo/dom","dojo/dom-construct","dojo/dom-class","dijit/registry"],function(e,t,a,i,r,d,o,n,l,s,m){var u=e(r("dojo-bidi")?"dojox.charting.widget.NonBidiLegend":"dojox.charting.widget.Legend",t,{chartRef:"",horizontal:!0,swatchSize:18,legendBody:null,postCreate:function(){!this.chart&&this.chartRef&&(this.chart=m.byId(this.chartRef)||m.byNode(n.byId(this.chartRef)),this.chart),this.chart=this.chart.chart||this.chart,this.refresh()},buildRendering:function(){this.domNode=l.create("table",{role:"group","aria-label":"chart legend",class:"dojoxLegendNode"}),this.legendBody=l.create("tbody",null,this.domNode),this.inherited(arguments)},destroy:function(){this._surfaces&&i.forEach(this._surfaces,function(e){e.destroy()}),this.inherited(arguments)},refresh:function(){for(this._surfaces&&i.forEach(this._surfaces,function(e){e.destroy()}),this._surfaces=[];this.legendBody.lastChild;)l.destroy(this.legendBody.lastChild);this.horizontal&&(s.add(this.domNode,"dojoxLegendHorizontal"),this._tr=l.create("tr",null,this.legendBody),this._inrow=0);var e=this.series||this.chart.series;if(0!=e.length)if("dojox.charting.plot2d.Pie"==e[0].chart.stack[0].declaredClass){var t=e[0].chart.stack[0];if("number"==typeof t.run.data[0]){var a=o.map(t.run.data,"Math.max(x, 0)"),r=o.map(a,"/this",o.foldl(a,"+",0));i.forEach(r,function(e,a){this._addLabel(t.dyn[a],t._getLabel(100*e)+"%")},this)}else i.forEach(t.run.data,function(e,a){this._addLabel(t.dyn[a],e.legend||e.text||e.y)},this)}else i.forEach(e,function(e){this._addLabel(e.dyn,e.legend||e.name)},this)},_addLabel:function(e,t){var a=l.create("td"),i=l.create("div",null,a),d=l.create("label",null,a),o=l.create("div",{style:{width:this.swatchSize+"px",height:this.swatchSize+"px",float:"left"}},i);if(s.add(i,"dojoxLegendIcon dijitInline"),s.add(d,"dojoxLegendText"),this._tr)this._tr.appendChild(a),++this._inrow===this.horizontal&&(this._tr=l.create("tr",null,this.legendBody),this._inrow=0);else{l.create("tr",null,this.legendBody).appendChild(a)}this._makeIcon(o,e),d.innerHTML=String(t),r("dojo-bidi")&&(d.dir=this.getTextDir(t,d.dir))},_makeIcon:function(e,t){var i={h:this.swatchSize,w:this.swatchSize},r=a.createSurface(e,i.w,i.h);if(this._surfaces.push(r),t.fill)r.createRect({x:2,y:2,width:i.w-4,height:i.h-4}).setFill(t.fill).setStroke(t.stroke);else if(t.stroke||t.marker){var d={x1:0,y1:i.h/2,x2:i.w,y2:i.h/2};if(t.stroke&&r.createLine(d).setStroke(t.stroke),t.marker){var o={x:i.w/2,y:i.h/2};r.createPath({path:"M"+o.x+" "+o.y+" "+t.marker}).setFill(t.markerFill).setStroke(t.markerStroke)}}else r.createRect({x:2,y:2,width:i.w-4,height:i.h-4}).setStroke("black"),r.createLine({x1:2,y1:2,x2:i.w-2,y2:i.h-2}).setStroke("black"),r.createLine({x1:2,y1:i.h-2,x2:i.w-2,y2:2}).setStroke("black")}});return r("dojo-bidi")?e("dojox.charting.widget.Legend",[u,d]):u});//# sourceMappingURL=Legend.js.map