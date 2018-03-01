//>>built
define("dojox/charting/plot2d/Pie",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","./Base","./_PlotEvents","./common","dojox/gfx","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","dojo/has"],function(e,t,a,i,r,o,d,n,l,s,m){var u=.2;return a("dojox.charting.plot2d.Pie",[i,r],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",htmlLabels:!0,radGrad:"native",fanSize:5,startAngle:0},optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(t,a){this.opt=e.clone(this.defaultParams),s.updateWithObject(this.opt,a),s.updateWithPattern(this.opt,a,this.optionalParams),this.axes=[],this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(e){return this},addSeries:function(e){return this.run=e,this},getSeriesStats:function(){return e.delegate(o.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},render:function(a,i){if(!this.dirty)return this;this.resetEvents(),this.dirty=!1,this._eventSeries={},this.cleanGroup();var r=this.group,o=this.chart.theme;if(!this.run||!this.run.data.length)return this;var s,f,h,y,c,v,M=(a.width-i.l-i.r)/2,g=(a.height-i.t-i.b)/2,p=Math.min(M,g),b="font"in this.opt?this.opt.font:o.series.font,F=n._degToRad(this.opt.startAngle),w=F,k=this.events(),I=t.map(this.run.data,function(e,a){return"number"!=typeof e&&e.hidden&&(this.runFilter.push(a),e.hidden=!1),t.some(this.runFilter,function(e){return e==a})?"number"==typeof e?0:{y:0,text:e.text}:e},this);this.dyn=[],"radius"in this.opt&&(p=this.opt.radius,v=p-this.opt.labelOffset);var _={cx:i.l+M,cy:i.t+g,r:p};if(this.opt.shadow||o.shadow){var E=this.opt.shadow||o.shadow,j=e.clone(_);j.cx+=E.dx,j.cy+=E.dy,r.createCircle(j).setFill(E.color).setStroke(E)}if(r.setFilter&&(this.opt.filter||o.filter)&&r.createCircle(_).setFill(o.series.stroke).setFilter(this.opt.filter||o.filter),"number"==typeof I[0]){if(f=l.map(I,"x ? Math.max(x, 0) : 0"),l.every(f,"<= 0"))return r.createCircle(_).setStroke(o.series.stroke),this.dyn=t.map(f,function(){return{}}),this;h=l.map(f,"/this",l.foldl(f,"+",0)),this.opt.labels&&(y=t.map(h,function(e){return e>0?this._getLabel(100*e)+"%":""},this))}else{if(f=l.map(I,"x ? Math.max(x.y, 0) : 0"),l.every(f,"<= 0"))return r.createCircle(_).setStroke(o.series.stroke),this.dyn=t.map(f,function(){return{}}),this;h=l.map(f,"/this",l.foldl(f,"+",0)),this.opt.labels&&(y=t.map(h,function(e,t){if(e<0)return"";var a=I[t];return"text"in a?a.text:this._getLabel(100*e)+"%"},this))}var z=l.map(I,function(e,t){var a=[this.opt,this.run];return null!==e&&"number"!=typeof e&&a.push(e),this.opt.styleFunc&&a.push(this.opt.styleFunc(e)),o.next("slice",a,!0)},this);this.opt.labels&&(s=b?d.normalizedLength(d.splitFontString(b).size):0,c=l.foldl1(l.map(y,function(e,t){var a=z[t].series.font;return d._base._getTextBox(e,{font:a}).w},this),"Math.max(a, b)")/2,this.opt.labelOffset<0&&(p=Math.min(M-2*c,g-s)+this.opt.labelOffset),v=p-this.opt.labelOffset);var A=new Array(h.length);if(t.some(h,function(e,t){if(e<0)return!1;var o,d,l=I[t],s=z[t];if(0==e)return this.dyn.push({fill:s.series.fill,stroke:s.series.stroke}),!1;if(e>=1){o=this._plotFill(s.series.fill,a,i),o=this._shapeFill(o,{x:_.cx-_.r,y:_.cy-_.r,width:2*_.r,height:2*_.r}),o=this._pseudoRadialFill(o,{x:_.cx,y:_.cy},_.r);var m=r.createCircle(_).setFill(o).setStroke(s.series.stroke);return this.dyn.push({fill:o,stroke:s.series.stroke}),k&&(d={element:"slice",index:t,run:this.run,shape:m,x:t,y:"number"==typeof l?l:l.y,cx:_.cx,cy:_.cy,cr:p},this._connectEvents(d),A[t]=d),!1}var f=w+2*e*Math.PI;t+1==h.length&&(f=F+2*Math.PI);var y=f-w,c=_.cx+p*Math.cos(w),v=_.cy+p*Math.sin(w),M=_.cx+p*Math.cos(f),g=_.cy+p*Math.sin(f),b=n._degToRad(this.opt.fanSize);if(s.series.fill&&"radial"===s.series.fill.type&&"fan"===this.opt.radGrad&&y>b){var E=r.createGroup(),j=Math.ceil(y/b),G=y/j;o=this._shapeFill(s.series.fill,{x:_.cx-_.r,y:_.cy-_.r,width:2*_.r,height:2*_.r});for(var x=0;x<j;++x){var S=0==x?c:_.cx+p*Math.cos(w+(x-u)*G),T=0==x?v:_.cy+p*Math.sin(w+(x-u)*G),D=x==j-1?M:_.cx+p*Math.cos(w+(x+1+u)*G),C=x==j-1?g:_.cy+p*Math.sin(w+(x+1+u)*G);E.createPath().moveTo(_.cx,_.cy).lineTo(S,T).arcTo(p,p,0,G>Math.PI,!0,D,C).lineTo(_.cx,_.cy).closePath().setFill(this._pseudoRadialFill(o,{x:_.cx,y:_.cy},p,w+(x+.5)*G,w+(x+.5)*G))}E.createPath().moveTo(_.cx,_.cy).lineTo(c,v).arcTo(p,p,0,y>Math.PI,!0,M,g).lineTo(_.cx,_.cy).closePath().setStroke(s.series.stroke),m=E}else m=r.createPath().moveTo(_.cx,_.cy).lineTo(c,v).arcTo(p,p,0,y>Math.PI,!0,M,g).lineTo(_.cx,_.cy).closePath().setStroke(s.series.stroke),o=s.series.fill,o&&"radial"===o.type?(o=this._shapeFill(o,{x:_.cx-_.r,y:_.cy-_.r,width:2*_.r,height:2*_.r}),"linear"===this.opt.radGrad&&(o=this._pseudoRadialFill(o,{x:_.cx,y:_.cy},p,w,f))):o&&"linear"===o.type&&(o=this._plotFill(o,a,i),o=this._shapeFill(o,m.getBoundingBox())),m.setFill(o);return this.dyn.push({fill:o,stroke:s.series.stroke}),k&&(d={element:"slice",index:t,run:this.run,shape:m,x:t,y:"number"==typeof l?l:l.y,cx:_.cx,cy:_.cy,cr:p},this._connectEvents(d),A[t]=d),w=f,!1},this),this.opt.labels){var G=m("dojo-bidi")&&this.chart.isRightToLeft();if("default"==this.opt.labelStyle)w=F,t.some(h,function(e,t){if(e<=0)return!1;var i=z[t];if(e>=1)return this.renderLabel(r,_.cx,_.cy+s/2,y[t],i,this.opt.labelOffset>0),!0;var o=w+2*e*Math.PI;if(t+1==h.length&&(o=F+2*Math.PI),this.opt.omitLabels&&o-w<.001)return!1;var d=(w+o)/2,n=_.cx+v*Math.cos(d),l=_.cy+v*Math.sin(d)+s/2;return this.renderLabel(r,G?a.width-n:n,l,y[t],i,this.opt.labelOffset>0),w=o,!1},this);else if("columns"==this.opt.labelStyle){w=F;var x=this.opt.omitLabels,S=[];t.forEach(h,function(e,t){var a=w+2*e*Math.PI;t+1==h.length&&(a=F+2*Math.PI);var i=(w+a)/2;S.push({angle:i,left:Math.cos(i)<0,theme:z[t],index:t,omit:!!x&&a-w<.001}),w=a});var T=d._base._getTextBox("a",{font:b}).h;this._getProperLabelRadius(S,T,1.1*_.r),t.forEach(S,function(e,t){if(!e.omit){var i=_.cx-2*_.r,o=_.cx+2*_.r,n=d._base._getTextBox(y[t],{font:e.theme.series.font}).w,l=_.cx+e.labelR*Math.cos(e.angle),s=_.cy+e.labelR*Math.sin(e.angle),m=e.left?i+n:o-n,u=e.left?i:m,f=r.createPath().moveTo(_.cx+_.r*Math.cos(e.angle),_.cy+_.r*Math.sin(e.angle));Math.abs(e.labelR*Math.cos(e.angle))<2*_.r-n&&f.lineTo(l,s),f.lineTo(m,s).setStroke(e.theme.series.labelWiring),this.renderLabel(r,G?a.width-n-u:u,s,y[t],e.theme,!1,"left")}},this)}}var D=0;return this._eventSeries[this.run.name]=l.map(I,function(e){return e<=0?null:A[D++]}),m("dojo-bidi")&&this._checkOrientation(this.group,a,i),this},_getProperLabelRadius:function(e,t,a){var i,r,o=1,d=1;if(1==e.length)return void(e[0].labelR=a);for(var n=0;n<e.length;n++){var l=Math.abs(Math.sin(e[n].angle));e[n].left?o>=l&&(o=l,i=e[n]):d>=l&&(d=l,r=e[n])}i.labelR=r.labelR=a,this._calculateLabelR(i,e,t),this._calculateLabelR(r,e,t)},_calculateLabelR:function(e,t,a){for(var i,r=e.index,o=t.length,d=e.labelR;!(t[r%o].left^t[(r+1)%o].left);)t[(r+1)%o].omit||(i=(Math.sin(t[r%o].angle)*d+(t[r%o].left?-a:a))/Math.sin(t[(r+1)%o].angle),d=i<e.labelR?e.labelR:i,t[(r+1)%o].labelR=d),r++;r=e.index;for(var n=0==r?o-1:r-1;!(t[r].left^t[n].left);)t[n].omit||(i=(Math.sin(t[r].angle)*d+(t[r].left?a:-a))/Math.sin(t[n].angle),d=i<e.labelR?e.labelR:i,t[n].labelR=d),r--,n--,r=r<0?r+t.length:r,n=n<0?n+t.length:n}})});//# sourceMappingURL=Pie.js.map