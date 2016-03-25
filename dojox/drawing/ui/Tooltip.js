//>>built
define("dojox/drawing/ui/Tooltip",["dojo","../util/oo","../plugins/_Plugin","../manager/_registry"],function(e,t,i,a){var r=null,o=t.declare(i,function(e){this.createDom()},{show:function(t,i){this.domNode.innerHTML=i;var a=30,r=t.data.x+t.data.width,o=t.data.y+t.data.height,n=r+this.mouse.origin.x+a,s=o+this.mouse.origin.y+a;e.style(this.domNode,{display:"inline",left:n+"px",top:s+"px"});var d=e.marginBox(this.domNode);this.createShape(n-this.mouse.origin.x,s-this.mouse.origin.y,d.w,d.h)},createShape:function(e,t,i,a){this.balloon&&this.balloon.destroy();var r=5,o=e+i,n=t+a,s=[],d=function(){for(var e=0;e<arguments.length;e++)s.push(arguments[e])};d({x:e,y:t+5},{t:"Q",x:e,y:t},{x:e+r,y:t}),d({t:"L",x:o-r,y:t}),d({t:"Q",x:o,y:t},{x:o,y:t+r}),d({t:"L",x:o,y:n-r}),d({t:"Q",x:o,y:n},{x:o-r,y:n}),d({t:"L",x:e+r,y:n}),d({t:"Q",x:e,y:n},{x:e,y:n-r}),d({t:"L",x:e,y:t+r}),this.balloon=this.drawing.addUI("path",{points:s})},createDom:function(){this.domNode=e.create("span",{"class":"drawingTooltip"},document.body),e.style(this.domNode,{display:"none",position:"absolute"})}}),n=t.declare(i,function(e){r||(r=new o(e)),e.stencil||this.button&&(this.connect(this.button,"onOver",this,"onOver"),this.connect(this.button,"onOut",this,"onOut"))},{width:300,height:200,onOver:function(){r.show(this.button,this.data.text)},onOut:function(){}});return e.setObject("dojox.drawing.ui.Tooltip",n),a.register({name:"dojox.drawing.ui.Tooltip"},"stencil"),n});//# sourceMappingURL=Tooltip.js.map