//>>built
define("dojox/charting/action2d/Magnify",["dojo/_base/connect","dojo/_base/declare","./PlotAction","dojox/gfx/matrix","dojox/gfx/fx","dojo/fx","dojo/fx/easing"],function(e,t,a,i,r,d,o){var n=2;return t("dojox.charting.action2d.Magnify",a,{defaultParams:{duration:400,easing:o.backOut,scale:n},optionalParams:{},constructor:function(e,t,a){this.scale=a&&"number"==typeof a.scale?a.scale:n,this.connect()},process:function(t){if(t.shape&&t.type in this.overOutEvents&&"cx"in t&&"cy"in t&&"spider_plot"!=t.element&&"spider_poly"!=t.element){var a,o,n,l=t.run.name,s=t.index,m=[];l in this.anim?a=this.anim[l][s]:this.anim[l]={},a?a.action.stop(!0):this.anim[l][s]=a={},"onmouseover"==t.type?(o=i.identity,n=this.scale):(o=i.scaleAt(this.scale,t.cx,t.cy),n=1/this.scale);var u={shape:t.shape,duration:this.duration,easing:this.easing,transform:[{name:"scaleAt",start:[1,t.cx,t.cy],end:[n,t.cx,t.cy]},o]};if(t.shape&&m.push(r.animateTransform(u)),t.outline&&(u.shape=t.outline,m.push(r.animateTransform(u))),t.shadow&&(u.shape=t.shadow,m.push(r.animateTransform(u))),!m.length)return void delete this.anim[l][s];a.action=d.combine(m),"onmouseout"==t.type&&e.connect(a.action,"onEnd",this,function(){this.anim[l]&&delete this.anim[l][s]}),a.action.play()}}})});//# sourceMappingURL=Magnify.js.map