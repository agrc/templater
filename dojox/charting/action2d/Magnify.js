//>>built
define("dojox/charting/action2d/Magnify",["dojo/_base/connect","dojo/_base/declare","./PlotAction","dojox/gfx/matrix","dojox/gfx/fx","dojo/fx","dojo/fx/easing"],function(e,t,a,i,r,n,o){var d=2;return t("dojox.charting.action2d.Magnify",a,{defaultParams:{duration:400,easing:o.backOut,scale:d},optionalParams:{},constructor:function(e,t,a){this.scale=a&&"number"==typeof a.scale?a.scale:d,this.connect()},process:function(t){if(t.shape&&t.type in this.overOutEvents&&"cx"in t&&"cy"in t&&"spider_plot"!=t.element&&"spider_poly"!=t.element){var a,o,d,s=t.run.name,l=t.index,u=[];s in this.anim?a=this.anim[s][l]:this.anim[s]={},a?a.action.stop(!0):this.anim[s][l]=a={},"onmouseover"==t.type?(o=i.identity,d=this.scale):(o=i.scaleAt(this.scale,t.cx,t.cy),d=1/this.scale);var m={shape:t.shape,duration:this.duration,easing:this.easing,transform:[{name:"scaleAt",start:[1,t.cx,t.cy],end:[d,t.cx,t.cy]},o]};if(t.shape&&u.push(r.animateTransform(m)),t.outline&&(m.shape=t.outline,u.push(r.animateTransform(m))),t.shadow&&(m.shape=t.shadow,u.push(r.animateTransform(m))),!u.length)return void delete this.anim[s][l];a.action=n.combine(u),"onmouseout"==t.type&&e.connect(a.action,"onEnd",this,function(){this.anim[s]&&delete this.anim[s][l]}),a.action.play()}}})});//# sourceMappingURL=Magnify.js.map