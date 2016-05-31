//>>built
define("dojox/charting/themes/Electric",["../Theme","dojox/gfx/gradutils","./common"],function(e,t,a){var i=e.generateGradient,r={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:75};return a.Electric=new e({chart:{fill:"#252525",stroke:{color:"#252525"},pageStyle:{backgroundColor:"#252525",backgroundImage:"none",color:"#ccc"}},plotarea:{fill:"#252525"},axis:{stroke:{color:"#aaa",width:1},tick:{color:"#777",position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",fontColor:"#777"}},series:{stroke:{width:2,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#ccc"},marker:{stroke:{width:3,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#ccc"},seriesThemes:[{fill:i(r,"#004cbf","#06f")},{fill:i(r,"#bf004c","#f06")},{fill:i(r,"#43bf00","#6f0")},{fill:i(r,"#7300bf","#90f")},{fill:i(r,"#bf7300","#f90")},{fill:i(r,"#00bf73","#0f9")}],markerThemes:[{fill:"#06f",stroke:{color:"#06f"}},{fill:"#f06",stroke:{color:"#f06"}},{fill:"#6f0",stroke:{color:"#6f0"}},{fill:"#90f",stroke:{color:"#90f"}},{fill:"#f90",stroke:{color:"#f90"}},{fill:"#0f9",stroke:{color:"#0f9"}}]}),a.Electric.next=function(t,a,i){var r="line"==t;if(r||"area"==t){var o=this.seriesThemes[this._current%this.seriesThemes.length];o.fill.space="plot",r&&(o.stroke={width:2.5,color:o.fill.colors[1].color}),"area"==t&&(o.fill.y2=90);var d=e.prototype.next.apply(this,arguments);return delete o.stroke,o.fill.y2=75,o.fill.space="shape",d}return e.prototype.next.apply(this,arguments)},a.Electric.post=function(a,i){return a=e.prototype.post.apply(this,arguments),"slice"!=i&&"circle"!=i||!a.series.fill||"radial"!=a.series.fill.type||(a.series.fill=t.reverse(a.series.fill)),a},a.Electric});//# sourceMappingURL=Electric.js.map