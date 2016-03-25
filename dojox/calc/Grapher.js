//>>built
require({cache:{"url:dojox/calc/templates/Grapher.html":'<div>\n<div data-dojo-attach-point="chartsParent" class="dojoxCalcChartHolder"></div>\n<div data-dojo-attach-point="outerDiv">\n<div data-dojo-type="dijit.form.DropDownButton" data-dojo-attach-point="windowOptions" class="dojoxCalcDropDownForWindowOptions" title="Window Options">\n	<div>Window Options</div>\n	<div data-dojo-type="dijit.TooltipDialog" data-dojo-attach-point="windowOptionsInside" class="dojoxCalcTooltipDialogForWindowOptions" title="">\n		<table class="dojoxCalcGraphOptionTable">\n			<tr>\n				<td>\n					Width:\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphWidth" class="dojoxCalcGraphWidth" value="500" />\n				</td>\n				<td>\n					Height:\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphHeight" class="dojoxCalcGraphHeight" value="500" />\n				</td>\n			</tr>\n			<tr>\n				<td>\n					X >=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMinX" class="dojoxCalcGraphMinX" value="-10" />\n				</td>\n\n				<td>\n					X <=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMaxX" class="dojoxCalcGraphMaxX" value="10" />\n				</td>\n			</tr>\n			<tr>\n				<td>\n					Y >=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMinY" class="dojoxCalcGraphMinY" value="-10" />\n				</td>\n\n				<td>\n					Y <=\n				</td>\n				<td>\n					<input data-dojo-type="dijit.form.TextBox" data-dojo-attach-point="graphMaxY" class="dojoxCalcGraphMaxY" value="10" />\n				</td>\n			</tr>\n		</table>\n	</div>\n</div>\n\n<BR>\n\n<div class="dojoxCalcGrapherFuncOuterDiv">\n	<table class="dojoxCalcGrapherFuncTable" data-dojo-attach-point="graphTable">\n	</table>\n</div>\n\n<div data-dojo-type="dijit.form.DropDownButton" data-dojo-attach-point=\'addFuncButton\' class="dojoxCalcDropDownAddingFunction">\n	<div>Add Function</div>\n	<div data-dojo-type="dijit.TooltipDialog" data-dojo-attach-point="addFuncInside" class="dojoxCalcTooltipDialogAddingFunction" title="">\n		<table class="dojoxCalcGrapherModeTable">\n			<tr>\n				<td>\n					Mode:\n				</td>\n				<td>\n					<select data-dojo-type="dijit.form.Select" data-dojo-attach-point="funcMode" class="dojoxCalcFunctionModeSelector">\n						<option value="y=" selected="selected">y=</option>\n						<option value="x=">x=</option>\n					</select>\n				</td>\n				<td>\n			</tr>\n	\n			<tr>\n				<td>\n					<input data-dojo-type="dijit.form.Button" data-dojo-attach-point="createFunc" class="dojoxCalcAddFunctionButton" label="Create" />\n				</td>\n			</tr>\n		</table>\n	</div>\n</div>\n<BR>\n<BR>\n<table class="dijitInline dojoxCalcGrapherLayout">\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'selectAllButton\' label="Select All" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'deselectAllButton\' label="Deselect All" />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'drawButton\'label="Draw Selected" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'eraseButton\' label="Erase Selected" />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'deleteButton\' label="Delete Selected" />\n		</td>\n		<td class="dojoxCalcGrapherButtonContainer">\n			<input data-dojo-type="dijit.form.Button" class="dojoxCalcGrapherButton" data-dojo-attach-point=\'closeButton\' label="Close" />\n		</td>\n	</tr>\n</table>\n</div>\n</div>\n'}}),define("dojox/calc/Grapher",["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dojox/math/_base","dijit/registry","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/TextBox","dijit/form/CheckBox","dijit/ColorPalette","dojox/charting/Chart","dojox/charting/axis2d/Default","dojox/charting/plot2d/Default","dojox/charting/plot2d/Lines","dojox/charting/themes/Tufte","dojo/colors","dojo/text!./templates/Grapher.html","dojox/calc/_Executor","dijit/form/Button","dijit/form/Select"],function(e,t,a,i,r,d,o,n,l,s,m,u,h,f,y,c,v,p,M,g,b,w,k,F){var j=1e-15/9,I=1e200,_=Math.log(2),E={graphNumber:0,fOfX:!0,color:{stroke:"black"}},G=e("dojox.calc.Grapher",[o,l,n],{templateString:k,addXYAxes:function(e){return e.addAxis("x",{max:parseInt(this.graphMaxX.get("value")),min:parseInt(this.graphMinX.get("value")),majorLabels:!0,minorLabels:!0,minorTicks:!1,microTicks:!1,htmlLabels:!0,labelFunc:function(e){return e},maxLabelSize:30,fixUpper:"major",fixLower:"major",majorTick:{length:3}}).addAxis("y",{max:parseInt(this.graphMaxY.get("value")),min:parseInt(this.graphMinY.get("value")),labelFunc:function(e){return e},maxLabelSize:50,vertical:!0,microTicks:!1,minorTicks:!0,majorTick:{stroke:"black",length:3}})},selectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!0)},deselectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!1)},drawOne:function(e){},onDraw:function(){},erase:function(e){for(var t=0,a="Series "+this.array[e][this.funcNumberIndex]+"_"+t;a in this.array[e][this.chartIndex].runs;)this.array[e][this.chartIndex].removeSeries(a),t++,a="Series "+this.array[e][this.funcNumberIndex]+"_"+t;this.array[e][this.chartIndex].render(),this.setStatus(e,"Hidden")},onErase:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].get("checked")&&this.erase(e)},onDelete:function(){for(var e=0;e<this.rowCount;e++)if(this.array[e][this.checkboxIndex].get("checked")){this.erase(e);for(var t=0;t<this.functionRef;t++)this.array[e][t]&&this.array[e][t].destroy&&this.array[e][t].destroy();this.graphTable.deleteRow(e),this.array.splice(e,1),this.rowCount--,e--}},checkboxIndex:0,functionMode:1,expressionIndex:2,colorIndex:3,dropDownIndex:4,tooltipIndex:5,colorBoxFieldsetIndex:6,statusIndex:7,chartIndex:8,funcNumberIndex:9,evaluatedExpression:10,functionRef:11,createFunction:function(){var e=this.graphTable.insertRow(-1);this.array[e.rowIndex]=[];var o=e.insertCell(-1),n=i.create("div");o.appendChild(n);var l=new y({},n);this.array[e.rowIndex][this.checkboxIndex]=l,r.add(n,"dojoxCalcCheckBox"),o=e.insertCell(-1);var s=this.funcMode.get("value");n=a.doc.createTextNode(s),o.appendChild(n),this.array[e.rowIndex][this.functionMode]=s,o=e.insertCell(-1),n=i.create("div"),o.appendChild(n);var m=new f({},n);this.array[e.rowIndex][this.expressionIndex]=m,r.add(n,"dojoxCalcExpressionBox");var v=i.create("div"),p=new c({changedColor:this.changedColor},v);r.add(v,"dojoxCalcColorPalette"),this.array[e.rowIndex][this.colorIndex]=p;var M=i.create("div"),g=new h({content:p},M);this.array[e.rowIndex][this.tooltipIndex]=g,r.add(M,"dojoxCalcContainerOfColor"),o=e.insertCell(-1),n=i.create("div"),o.appendChild(n);var b=i.create("fieldset");d.set(b,{backgroundColor:"black",width:"1em",height:"1em",display:"inline"}),this.array[e.rowIndex][this.colorBoxFieldsetIndex]=b;var w=new u({label:"Color ",dropDown:g},n);w.containerNode.appendChild(b),this.array[e.rowIndex][this.dropDownIndex]=w,r.add(n,"dojoxCalcDropDownForColor"),o=e.insertCell(-1),n=i.create("fieldset"),n.innerHTML="Hidden",this.array[e.rowIndex][this.statusIndex]=n,r.add(n,"dojoxCalcStatusBox"),o.appendChild(n),n=i.create("div"),d.set(n,{position:"absolute",left:"0px",top:"0px"}),this.chartsParent.appendChild(n),this.array[e.rowIndex][this.chartNodeIndex]=n,r.add(n,"dojoxCalcChart");var k=new dojox.charting.Chart(n).setTheme(dojox.charting.themes.Tufte).addPlot("default",{type:"Lines",shadow:{dx:1,dy:1,width:2,color:[0,0,0,.3]}});this.addXYAxes(k),this.array[e.rowIndex][this.chartIndex]=k,p.set("chart",k),p.set("colorBox",b),p.set("onChange",t.hitch(p,"changedColor")),this.array[e.rowIndex][this.funcNumberIndex]=this.funcNumber++,this.rowCount++},setStatus:function(e,t){this.array[e][this.statusIndex].innerHTML=t},changedColor:function(){for(var e=this.get("chart"),t=this.get("colorBox"),a=0;a<e.series.length;a++)e.series[a].stroke&&e.series[a].stroke.color&&(e.series[a].stroke.color=this.get("value"),e.dirty=!0);e.render(),d.set(t,{backgroundColor:this.get("value")})},makeDirty:function(){this.dirty=!0},checkDirty1:function(){setTimeout(t.hitch(this,"checkDirty"),0)},checkDirty:function(){if(this.dirty){for(var e=0;e<this.rowCount;e++)this.array[e][this.chartIndex].removeAxis("x"),this.array[e][this.chartIndex].removeAxis("y"),this.addXYAxes(this.array[e][this.chartIndex]);this.onDraw()}this.dirty=!1},postCreate:function(){this.inherited(arguments),this.createFunc.set("onClick",t.hitch(this,"createFunction")),this.selectAllButton.set("onClick",t.hitch(this,"selectAll")),this.deselectAllButton.set("onClick",t.hitch(this,"deselectAll")),this.drawButton.set("onClick",t.hitch(this,"onDraw")),this.eraseButton.set("onClick",t.hitch(this,"onErase")),this.deleteButton.set("onClick",t.hitch(this,"onDelete")),this.dirty=!1,this.graphWidth.set("onChange",t.hitch(this,"makeDirty")),this.graphHeight.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxX.set("onChange",t.hitch(this,"makeDirty")),this.graphMinX.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxY.set("onChange",t.hitch(this,"makeDirty")),this.graphMinY.set("onChange",t.hitch(this,"makeDirty")),this.windowOptionsInside.set("onClose",t.hitch(this,"checkDirty1")),this.funcNumber=0,this.rowCount=0,this.array=[]},startup:function(){this.inherited(arguments);var e=m.getEnclosingWidget(this.domNode.parentNode);e&&"function"==typeof e.close?this.closeButton.set("onClick",t.hitch(e,"close")):d.set(this.closeButton.domNode,{display:"none"}),this.createFunction(),this.array[0][this.checkboxIndex].set("checked",!0),this.onDraw(),this.erase(0),this.array[0][this.expressionIndex].value=""}});return t.mixin(F,{draw:function(e,a,i){i=t.mixin({},E,i),e.fullGeometry();var r,d,o;1==i.fOfX?(r="x",d="y",o=F.generatePoints(a,r,d,e.axes.x.scaler.bounds.span,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper)):(r="y",d="x",o=F.generatePoints(a,r,d,e.axes.y.scaler.bounds.span,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper));var n=0;if(o.length>0)for(;n<o.length;n++)o[n].length>0&&e.addSeries("Series "+i.graphNumber+"_"+n,o[n],i.color);for(var l="Series "+i.graphNumber+"_"+n;l in e.runs;)e.removeSeries(l),n++,l="Series "+i.graphNumber+"_"+n;return e.render(),o},generatePoints:function(e,t,a,i,r,d,o,n){function l(e,i,r,d){for(;r>=i;){var o=(i[t]+r[t])/2,n={};if(n[t]=o,n[a]=e(n[t]),d==n[a]||n[t]==r[t]||n[t]==i[t])return n;var l=!0;d<n[a]&&(l=!1),n[a]<r[a]?l?i=n:r=n:n[a]<i[a]&&(l?r=n:i=n)}return NaN}function s(e,i,r){for(var d,o=[[],[]],n=i,l=r;n[t]<=l[t];){var s=(n[t]+l[t])/2;d={},d[t]=s,d[a]=e(s);var m=u(d[t]),h={};if(h[t]=m,h[a]=e(m),Math.abs(h[a])>=Math.abs(d[a]))o[0].push(d),n=h;else{if(o[1].unshift(d),l[t]==d[t])break;l=d}}return o}function m(e,t){var a=!1,i=!1;return t>e&&(a=!0),t>0&&(i=!0),{inc:a,pos:i}}function u(e){var t;return t=e>-1&&1>e?0>e?e>=-j?-e:e/Math.ceil(e/j):j:Math.abs(e)*j,e+t}function h(e,i){return(i[a]-e[a])/(i[t]-e[t])}var f,y,c=1<<Math.ceil(Math.log(i)/_),v=(d-r)/c,p=[],M=0;p[M]=[];for(var g,b,w=r,k=0;c>=k;w+=v,k++){if(b={},b[t]=w,b[a]=e({_name:t,_value:w,_graphing:!0}),null==b[t]||null==b[a])return{};if(!isNaN(b[a])&&!isNaN(b[t]))if(p[M].push(b),3!=p[M].length){if(!(p[M].length<4)&&(y=m(h(p[M][p[M].length-3],p[M][p[M].length-2]),h(p[M][p[M].length-2],p[M][p[M].length-1])),f.inc!=y.inc||f.pos!=y.pos)){var F=s(e,p[M][p[M].length-3],p[M][p[M].length-1]);b=p[M].pop(),p[M].pop();for(var E=0;E<F[0].length;E++)p[M].push(F[0][E]);for(g=1;g<F.length;g++)p[++M]=F.pop();p[M].push(b),f=y}}else f=m(h(p[M][p[M].length-3],p[M][p[M].length-2]),h(p[M][p[M].length-2],p[M][p[M].length-1]))}for(;p.length>1;){for(g=0;g<p[1].length;g++)p[0][p[0].length-1][t]!=p[1][g][t]&&p[0].push(p[1][g]);p.splice(1,1)}p=p[0];var G=0,A=[[]];for(g=0;g<p.length;g++){var x,S,T,C;if(isNaN(p[g][a])||isNaN(p[g][t])){for(;isNaN(p[g][a])||isNaN(p[g][t]);)p.splice(g,1);A[++G]=[],g--}else if(p[g][a]>n||p[g][a]<o){g>0&&p[g-1].y!=o&&p[g-1].y!=n&&(C=h(p[g-1],p[g]),C>I?C=I:-I>C&&(C=-I),S=p[g][a]>n?n:o,T=p[g][a]-C*p[g][t],x=(S-T)/C,b={},b[t]=x,b[a]=e(x),b[a]!=S&&(b=l(e,p[g-1],p[g],S)),A[G].push(b),A[++G]=[]);for(;g<p.length&&(p[g][a]>n||p[g][a]<o);)g++;if(g>=p.length){0==A[G].length&&A.splice(G,1);break}g>0&&p[g].y!=o&&p[g].y!=n&&(C=h(p[g-1],p[g]),C>I?C=I:-I>C&&(C=-I),S=p[g-1][a]>n?n:o,T=p[g][a]-C*p[g][t],x=(S-T)/C,b={},b[t]=x,b[a]=e(x),b[a]!=S&&(b=l(e,p[g-1],p[g],S)),A[G].push(b),A[G].push(p[g]))}else A[G].push(p[g])}return A},Grapher:G})});//# sourceMappingURL=Grapher.js.map