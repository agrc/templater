//>>built
define("dojox/drawing/ui/Button",["dojo","../util/oo","../stencil/Rect","../stencil/Ellipse","../stencil/Text","../manager/_registry"],function(e,t,a,i,r,o){var n=t.declare(function(t){t.subShape=!0,e.mixin(this,t),this.width=t.data.width||2*t.data.rx,this.height=t.data.height||2*t.data.ry,this.y=t.data.y||t.data.cy-t.data.ry,this.id=this.id||this.util.uid(this.type),this.util.attr(this.container,"id",this.id),this.callback&&(this.hitched=e.hitch(this.scope||window,this.callback,this)),t.drawingType="ui",t.data.width&&t.data.height?this.shape=new a(t):this.shape=new i(t);var o=function(t,a,i){e.forEach(["norm","over","down","selected"],function(e){t[e].fill[a]=i})};if(o(this.style.button,"y2",this.height+this.y),o(this.style.button,"y1",this.y),t.icon&&!t.icon.text){var n=this.drawing.getConstructor(t.icon.type),d=this.makeOptions(t.icon);d.data=e.mixin(d.data,this.style.button.icon.norm),d.data&&0===d.data.borderWidth?d.data.fill=this.style.button.icon.norm.fill=d.data.color:("line"==t.icon.type||"path"==t.icon.type&&!t.icon.closePath)&&(this.style.button.icon.selected.color=this.style.button.icon.selected.fill),this.icon=new n(d)}else(t.text||t.icon&&t.icon.text)&&(d=this.makeOptions(t.text||t.icon.text),d.data.color=this.style.button.icon.norm.color,this.style.button.icon.selected.color=this.style.button.icon.selected.fill,this.icon=new r(d),this.icon.attr({height:this.icon._lineHeight,y:(this.height-this.icon._lineHeight)/2+this.y}));var s=this.drawing.getConstructor(this.toolType);s&&this.drawing.addUI("tooltip",{data:{text:s.setup.tooltip},button:this}),this.onOut()},{callback:null,scope:null,hitched:null,toolType:"",onClick:function(e){},makeOptions:function(t,a){a=a||1,t=e.clone(t);var i={util:this.util,mouse:this.mouse,container:this.container,subShape:!0};if("string"==typeof t)i.data={x:this.data.x-5,y:this.data.y+2,width:this.data.width,height:this.data.height,text:t,makeFit:!0};else if(t.points){e.forEach(t.points,function(e){e.x=e.x*this.data.width*.01*a+this.data.x,e.y=e.y*this.data.height*.01*a+this.data.y},this),i.data={};for(var r in t)"points"!=r&&(i.data[r]=t[r]);i.points=t.points}else{for(r in t)/x|width/.test(r)?t[r]=t[r]*this.data.width*.01*a:/y|height/.test(r)&&(t[r]=t[r]*this.data.height*.01*a),/x/.test(r)&&!/r/.test(r)?t[r]+=this.data.x:/y/.test(r)&&!/r/.test(r)&&(t[r]+=this.data.y);delete t.type,i.data=t}return i.drawingType="ui",i},enabled:!0,selected:!1,type:"drawing.library.UI.Button",select:function(){this.selected=!0,this.icon&&this.icon.attr(this.style.button.icon.selected),this._change(this.style.button.selected),this.shape.shadow&&this.shape.shadow.hide()},deselect:function(){this.selected=!1,this.icon&&this.icon.attr(this.style.button.icon.norm),this.shape.shadow&&this.shape.shadow.show(),this._change(this.style.button.norm)},disable:function(){this.enabled&&(this.enabled=!1,this._change(this.style.button.disabled),this.icon.attr({color:this.style.button.norm.color}))},enable:function(){this.enabled||(this.enabled=!0,this._change(this.style.button.norm),this.icon.attr({color:this.style.button.icon.norm.color}))},_change:function(e){this.shape.attr(e),this.shape.shadow&&this.shape.shadow.container.moveToBack(),this.icon&&this.icon.shape.moveToFront()},onOver:function(){!this.selected&&this.enabled&&this._change(this.style.button.over)},onOut:function(){this.selected||this._change(this.style.button.norm)},onDown:function(){!this.selected&&this.enabled&&this._change(this.style.button.selected)},onUp:function(){this.enabled&&(this._change(this.style.button.over),this.hitched&&this.hitched(),this.onClick(this))},attr:function(e){this.icon&&this.icon.attr(e)}});return e.setObject("dojox.drawing.ui.Button",n),o.register({name:"dojox.drawing.ui.Button"},"stencil"),n});//# sourceMappingURL=Button.js.map