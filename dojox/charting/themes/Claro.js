//>>built
define("dojox/charting/themes/Claro",["../Theme","dojox/gfx/gradutils","./common"],function(e,t,a){var i=e.generateGradient,r={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};return a.Claro=new e({chart:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]},stroke:{color:"#b5bcc7"}},plotarea:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]}},axis:{stroke:{color:"#888c76",width:1},tick:{color:"#888c76",position:"center",font:"normal normal normal 7pt Verdana, Arial, sans-serif",fontColor:"#888c76"}},series:{stroke:{width:2.5,color:"#fff"},outline:null,font:"normal normal normal 7pt Verdana, Arial, sans-serif",fontColor:"#131313"},marker:{stroke:{width:1.25,color:"#131313"},outline:{width:1.25,color:"#131313"},font:"normal normal normal 8pt Verdana, Arial, sans-serif",fontColor:"#131313"},seriesThemes:[{fill:i(r,"#2a6ead","#3a99f2")},{fill:i(r,"#613e04","#996106")},{fill:i(r,"#0e3961","#155896")},{fill:i(r,"#55aafa","#3f7fba")},{fill:i(r,"#ad7b2a","#db9b35")}],markerThemes:[{fill:"#2a6ead",stroke:{color:"#fff"}},{fill:"#613e04",stroke:{color:"#fff"}},{fill:"#0e3961",stroke:{color:"#fff"}},{fill:"#55aafa",stroke:{color:"#fff"}},{fill:"#ad7b2a",stroke:{color:"#fff"}}]}),a.Claro.next=function(t,a,i){var r,o,n="line"==t;if(n||"area"==t){r=this.seriesThemes[this._current%this.seriesThemes.length];var d=this.markerThemes[this._current%this.markerThemes.length];return r.fill.space="plot",n&&(r.stroke={width:4,color:r.fill.colors[0].color}),d.outline={width:1.25,color:d.fill},o=e.prototype.next.apply(this,arguments),delete r.outline,delete r.stroke,r.fill.space="shape",o}return"candlestick"==t?(r=this.seriesThemes[this._current%this.seriesThemes.length],r.fill.space="plot",r.stroke={width:1,color:r.fill.colors[0].color},o=e.prototype.next.apply(this,arguments)):e.prototype.next.apply(this,arguments)},a.Claro.post=function(a,i){return a=e.prototype.post.apply(this,arguments),"slice"!=i&&"circle"!=i||!a.series.fill||"radial"!=a.series.fill.type||(a.series.fill=t.reverse(a.series.fill)),a},a.Claro});//# sourceMappingURL=Claro.js.map