//>>built
define("dojox/drawing/plugins/tools/Iconize",["dojo","../../util/oo","../_Plugin","../../manager/_registry"],function(e,t,a,i){var r=t.declare(a,function(e){},{onClick:function(){var e;for(var t in this.stencils.stencils)if("path"==this.stencils.stencils[t].shortType){e=this.stencils.stencils[t];break}e&&this.makeIcon(e.points)},makeIcon:function(t){var a=function(e){return Number(e.toFixed(1))},i=1e4,r=1e4;t.forEach(function(e){void 0===e.x||isNaN(e.x)||(i=Math.min(i,e.x),r=Math.min(r,e.y))});var o=0,n=0;t.forEach(function(e){void 0===e.x||isNaN(e.x)||(e.x=a(e.x-i),e.y=a(e.y-r),o=Math.max(o,e.x),n=Math.max(n,e.y))});var d=60,s=20;t.forEach(function(e){e.x=a(e.x/o)*d+s,e.y=a(e.y/n)*d+s});var l="[\n";e.forEach(t,function(e,a){l+="{	",e.t&&(l+="t:'"+e.t+"'"),void 0===e.x||isNaN(e.x)||(e.t&&(l+=", "),l+="x:"+e.x+",		y:"+e.y),l+="	}",a!=t.length-1&&(l+=","),l+="\n"}),l+="]";var m=e.byId("data");m&&(m.value=l)}});return r.setup={name:"dojox.drawing.plugins.tools.Iconize",tooltip:"Iconize Tool",iconClass:"iconPan"},e.setObject("dojox.drawing.plugins.tools.Iconize",r),i.register(r.setup,"plugin"),r});//# sourceMappingURL=Iconize.js.map