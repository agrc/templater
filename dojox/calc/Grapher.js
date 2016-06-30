//>>built
require({cache:{"url:dojox/calc/templates/Grapher.html":'<div>\n<div data-dojo-attach-point="chartsParent" class="dojoxCalcChartHolder"></div>\n<div data-dojo-attach-point="outerDiv">\n<div data-dojo-type="dijit.form.DropDownButton" data-dojo-attach-point="windowOptions" class="dojoxCalcDropDownForWindowOptions" title="Window Options">\n	<div>Window Options</div>\n	<div data-dojo-type="dijit.TooltipDialog" data-dojo-attach-point="windowOptionsInside" class="dojoxCalcTooltipDialogForWindowOptions" title="">\n		<table class="dojoxCalcGraphOptionTable">\n			<tr>\n				<td>\n					Width:\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphWidth" class="dojoxCalcGraphWidth" value="500" />\n				</td>\n				<td>\n					Height:\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphHeight" class="dojoxCalcGraphHeight" value="500" />\n				</td>\n			</tr>\n			<tr>\n				<td>\n					X >=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMinX" class="dojoxCalcGraphMinX" value="-10" />\n				</td>\n\n				<td>\n					X <=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMaxX" class="dojoxCalcGraphMaxX" value="10" />\n				</td>\n			</tr>\n			<tr>\n				<td>\n					Y >=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMinY" class="dojoxCalcGraphMinY" value="-10" />\n				</td>\n\n				<td>\n					Y <=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMaxY" class="dojoxCalcGraphMaxY" value="10" />\n				</td>\n			</tr>\n		</table>\n	</div>\n</div>\n\n<BR>\n\n<div class="dojoxCalcGrapherFuncOuterDiv">\n	<table class="dojoxCalcGrapherFuncTable" data-dojo-attach-point="graphTable">\n	</table>\n</div>\n\n<div data-dojo-type="dijit.form.DropDownButton" data-dojo-attach-point=\'addFuncButton\' class="dojoxCalcDropDownAddingFunction">\n	<div>Add Function</div>\n	<div data-dojo-type="dijit.TooltipDialog" data-dojo-attach-point="addFuncInside" class="dojoxCalcTooltipDialogAddingFunction" title="">\n		<table class="dojoxCalcGrapherModeTable">\n			<tr>\n				<td>\n					Mode:\n				</td>\n				<td>\n					<select data-dojo-type="dijit.form.Select" data-dojo-attach-point="funcMode" class="dojoxCalcFunctionModeSelector">\n						<option value="y=" selected="selected">y=</option>\n						<option value="x=">x=</option>\n					</select>\n				</td>\n				<td>\n			</tr>\n	\n			<tr>\n				<td>\n					<input data-dojo-type="dijit.form.Button" data-dojo-attach-point="createFunc" class="dojoxCalcAddFunctionButton" label="Create" />\n				</td>\n			</tr>\n		</table>\n	</div>\n</div>\n<BR>\n<BR>\n<table class="dijitInline dojoxCalcGrapherLayout">\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'selectAllButton\' label="Select All" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'deselectAllButton\' label="Deselect All" />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'drawButton\'label="Draw Selected" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'eraseButton\' label="Erase Selected" />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'deleteButton\' label="Delete Selected" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'closeButton\' label="Close" />\n		</td>\n	</tr>\n</table>\n</div>\n</div>\n'}}),define("dojox/calc/Grapher",["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dojox/math/_base","dijit/registry","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/TextBox","dijit/form/CheckBox","dijit/ColorPalette","dojox/charting/Chart","dojox/charting/axis2d/Default","dojox/charting/plot2d/Default","dojox/charting/plot2d/Lines","dojox/charting/themes/Tufte","dojo/colors","dojo/text!./templates/Grapher.html","dojox/calc/_Executor","dijit/form/Button","dijit/form/Select"],function(e,t,a,i,r,o,n,d,l,s,m,u,h,f,c,y,p,v,g,M,b,w,_,F){var k=1e-15/9,I=1e200,j=Math.log(2),E={graphNumber:0,fOfX:!0,color:{stroke:"black"}},x=e("dojox.calc.Grapher",[n,l,d],{templateString:_,addXYAxes:function(e){return e.addAxis("x",{max:parseInt(this.graphMaxX.get("value")),min:parseInt(this.graphMinX.get("value")),majorLabels:!0,minorLabels:!0,minorTicks:!1,microTicks:!1,htmlLabels:!0,labelFunc:function(e){return e},maxLabelSize:30,fixUpper:"major",fixLower:"major",majorTick:{length:3}}).addAxis("y",{max:parseInt(this.graphMaxY.get("value")),min:parseInt(this.graphMinY.get("value")),labelFunc:function(e){return e},maxLabelSize:50,vertical:!0,microTicks:!1,minorTicks:!0,majorTick:{stroke:"black",length:3}})},selectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!0)},deselectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!1)},drawOne:function(e){},onDraw:function(){},erase:function(e){for(var t=0,a="Series "+this.array[e][this.funcNumberIndex]+"_"+t;a in this.array[e][this.chartIndex].runs;)this.array[e][this.chartIndex].removeSeries(a),t++,a="Series "+this.array[e][this.funcNumberIndex]+"_"+t;this.array[e][this.chartIndex].render(),this.setStatus(e,"Hidden")},onErase:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].get("checked")&&this.erase(e)},onDelete:function(){for(var e=0;e<this.rowCount;e++)if(this.array[e][this.checkboxIndex].get("checked")){this.erase(e);for(var t=0;t<this.functionRef;t++)this.array[e][t]&&this.array[e][t].destroy&&this.array[e][t].destroy();this.graphTable.deleteRow(e),this.array.splice(e,1),this.rowCount--,e--}},checkboxIndex:0,functionMode:1,expressionIndex:2,colorIndex:3,dropDownIndex:4,tooltipIndex:5,colorBoxFieldsetIndex:6,statusIndex:7,chartIndex:8,funcNumberIndex:9,evaluatedExpression:10,functionRef:11,createFunction:function(){var e=this.graphTable.insertRow(-1);this.array[e.rowIndex]=[];var n=e.insertCell(-1),d=i.create("div");n.appendChild(d);var l=new c({},d);this.array[e.rowIndex][this.checkboxIndex]=l,r.add(d,"dojoxCalcCheckBox"),n=e.insertCell(-1);var s=this.funcMode.get("value");d=a.doc.createTextNode(s),n.appendChild(d),this.array[e.rowIndex][this.functionMode]=s,n=e.insertCell(-1),d=i.create("div"),n.appendChild(d);var m=new f({},d);this.array[e.rowIndex][this.expressionIndex]=m,r.add(d,"dojoxCalcExpressionBox");var p=i.create("div"),v=new y({changedColor:this.changedColor},p);r.add(p,"dojoxCalcColorPalette"),this.array[e.rowIndex][this.colorIndex]=v;var g=i.create("div"),M=new h({content:v},g);this.array[e.rowIndex][this.tooltipIndex]=M,r.add(g,"dojoxCalcContainerOfColor"),n=e.insertCell(-1),d=i.create("div"),n.appendChild(d);var b=i.create("fieldset");o.set(b,{backgroundColor:"black",width:"1em",height:"1em",display:"inline"}),this.array[e.rowIndex][this.colorBoxFieldsetIndex]=b;var w=new u({label:"Color ",dropDown:M},d);w.containerNode.appendChild(b),this.array[e.rowIndex][this.dropDownIndex]=w,r.add(d,"dojoxCalcDropDownForColor"),n=e.insertCell(-1),d=i.create("fieldset"),d.innerHTML="Hidden",this.array[e.rowIndex][this.statusIndex]=d,r.add(d,"dojoxCalcStatusBox"),n.appendChild(d),d=i.create("div"),o.set(d,{position:"absolute",left:"0px",top:"0px"}),this.chartsParent.appendChild(d),this.array[e.rowIndex][this.chartNodeIndex]=d,r.add(d,"dojoxCalcChart");var _=new dojox.charting.Chart(d).setTheme(dojox.charting.themes.Tufte).addPlot("default",{type:"Lines",shadow:{dx:1,dy:1,width:2,color:[0,0,0,.3]}});this.addXYAxes(_),this.array[e.rowIndex][this.chartIndex]=_,v.set("chart",_),v.set("colorBox",b),v.set("onChange",t.hitch(v,"changedColor")),this.array[e.rowIndex][this.funcNumberIndex]=this.funcNumber++,this.rowCount++},setStatus:function(e,t){this.array[e][this.statusIndex].innerHTML=t},changedColor:function(){for(var e=this.get("chart"),t=this.get("colorBox"),a=0;a<e.series.length;a++)e.series[a].stroke&&e.series[a].stroke.color&&(e.series[a].stroke.color=this.get("value"),e.dirty=!0);e.render(),o.set(t,{backgroundColor:this.get("value")})},makeDirty:function(){this.dirty=!0},checkDirty1:function(){setTimeout(t.hitch(this,"checkDirty"),0)},checkDirty:function(){if(this.dirty){for(var e=0;e<this.rowCount;e++)this.array[e][this.chartIndex].removeAxis("x"),this.array[e][this.chartIndex].removeAxis("y"),this.addXYAxes(this.array[e][this.chartIndex]);this.onDraw()}this.dirty=!1},postCreate:function(){this.inherited(arguments),this.createFunc.set("onClick",t.hitch(this,"createFunction")),this.selectAllButton.set("onClick",t.hitch(this,"selectAll")),this.deselectAllButton.set("onClick",t.hitch(this,"deselectAll")),this.drawButton.set("onClick",t.hitch(this,"onDraw")),this.eraseButton.set("onClick",t.hitch(this,"onErase")),this.deleteButton.set("onClick",t.hitch(this,"onDelete")),this.dirty=!1,this.graphWidth.set("onChange",t.hitch(this,"makeDirty")),this.graphHeight.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxX.set("onChange",t.hitch(this,"makeDirty")),this.graphMinX.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxY.set("onChange",t.hitch(this,"makeDirty")),this.graphMinY.set("onChange",t.hitch(this,"makeDirty")),this.windowOptionsInside.set("onClose",t.hitch(this,"checkDirty1")),this.funcNumber=0,this.rowCount=0,this.array=[]},startup:function(){this.inherited(arguments);var e=m.getEnclosingWidget(this.domNode.parentNode);e&&"function"==typeof e.close?this.closeButton.set("onClick",t.hitch(e,"close")):o.set(this.closeButton.domNode,{display:"none"}),this.createFunction(),this.array[0][this.checkboxIndex].set("checked",!0),this.onDraw(),this.erase(0),this.array[0][this.expressionIndex].value=""}});return t.mixin(F,{draw:function(e,a,i){i=t.mixin({},E,i),e.fullGeometry();var r,o,n;1==i.fOfX?(r="x",o="y",n=F.generatePoints(a,r,o,e.axes.x.scaler.bounds.span,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper)):(r="y",o="x",n=F.generatePoints(a,r,o,e.axes.y.scaler.bounds.span,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper));var d=0;if(n.length>0)for(;d<n.length;d++)n[d].length>0&&e.addSeries("Series "+i.graphNumber+"_"+d,n[d],i.color);for(var l="Series "+i.graphNumber+"_"+d;l in e.runs;)e.removeSeries(l),d++,l="Series "+i.graphNumber+"_"+d;return e.render(),n},generatePoints:function(e,t,a,i,r,o,n,d){function l(e,i,r,o){for(;r>=i;){var n=(i[t]+r[t])/2,d={};if(d[t]=n,d[a]=e(d[t]),o==d[a]||d[t]==r[t]||d[t]==i[t])return d;var l=!0;o<d[a]&&(l=!1),d[a]<r[a]?l?i=d:r=d:d[a]<i[a]&&(l?r=d:i=d)}return NaN}function s(e,i,r){for(var o,n=[[],[]],d=i,l=r;d[t]<=l[t];){var s=(d[t]+l[t])/2;o={},o[t]=s,o[a]=e(s);var m=u(o[t]),h={};if(h[t]=m,h[a]=e(m),Math.abs(h[a])>=Math.abs(o[a]))n[0].push(o),d=h;else{if(n[1].unshift(o),l[t]==o[t])break;l=o}}return n}function m(e,t){var a=!1,i=!1;return t>e&&(a=!0),t>0&&(i=!0),{inc:a,pos:i}}function u(e){var t;return t=e>-1&&1>e?0>e?e>=-k?-e:e/Math.ceil(e/k):k:Math.abs(e)*k,e+t}function h(e,i){return(i[a]-e[a])/(i[t]-e[t])}var f,c,y=1<<Math.ceil(Math.log(i)/j),p=(o-r)/y,v=[],g=0;v[g]=[];for(var M,b,w=r,_=0;y>=_;w+=p,_++){if(b={},b[t]=w,b[a]=e({_name:t,_value:w,_graphing:!0}),null==b[t]||null==b[a])return{};if(!isNaN(b[a])&&!isNaN(b[t]))if(v[g].push(b),3!=v[g].length){if(!(v[g].length<4)&&(c=m(h(v[g][v[g].length-3],v[g][v[g].length-2]),h(v[g][v[g].length-2],v[g][v[g].length-1])),f.inc!=c.inc||f.pos!=c.pos)){var F=s(e,v[g][v[g].length-3],v[g][v[g].length-1]);b=v[g].pop(),v[g].pop();for(var E=0;E<F[0].length;E++)v[g].push(F[0][E]);for(M=1;M<F.length;M++)v[++g]=F.pop();v[g].push(b),f=c}}else f=m(h(v[g][v[g].length-3],v[g][v[g].length-2]),h(v[g][v[g].length-2],v[g][v[g].length-1]))}for(;v.length>1;){for(M=0;M<v[1].length;M++)v[0][v[0].length-1][t]!=v[1][M][t]&&v[0].push(v[1][M]);v.splice(1,1)}v=v[0];var x=0,S=[[]];for(M=0;M<v.length;M++){var A,C,T,z;if(isNaN(v[M][a])||isNaN(v[M][t])){for(;isNaN(v[M][a])||isNaN(v[M][t]);)v.splice(M,1);S[++x]=[],M--}else if(v[M][a]>d||v[M][a]<n){M>0&&v[M-1].y!=n&&v[M-1].y!=d&&(z=h(v[M-1],v[M]),z>I?z=I:-I>z&&(z=-I),C=v[M][a]>d?d:n,T=v[M][a]-z*v[M][t],A=(C-T)/z,b={},b[t]=A,b[a]=e(A),b[a]!=C&&(b=l(e,v[M-1],v[M],C)),S[x].push(b),S[++x]=[]);for(;M<v.length&&(v[M][a]>d||v[M][a]<n);)M++;if(M>=v.length){0==S[x].length&&S.splice(x,1);break}M>0&&v[M].y!=n&&v[M].y!=d&&(z=h(v[M-1],v[M]),z>I?z=I:-I>z&&(z=-I),C=v[M-1][a]>d?d:n,T=v[M][a]-z*v[M][t],A=(C-T)/z,b={},b[t]=A,b[a]=e(A),b[a]!=C&&(b=l(e,v[M-1],v[M],C)),S[x].push(b),S[x].push(v[M]))}else S[x].push(v[M])}return S},Grapher:x})});//# sourceMappingURL=Grapher.js.map