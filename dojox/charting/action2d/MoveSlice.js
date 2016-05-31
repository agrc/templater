//>>built
define("dojox/charting/action2d/MoveSlice",["dojo/_base/connect","dojo/_base/declare","dojo/_base/array","./PlotAction","dojo/fx/easing","dojox/gfx/matrix","dojox/gfx/fx","dojox/lang/functional","dojox/lang/functional/scan","dojox/lang/functional/fold"],function(e,t,a,i,r,o,n,d){var s=1.05,l=7;return t("dojox.charting.action2d.MoveSlice",i,{defaultParams:{duration:400,easing:r.backOut,scale:s,shift:l},optionalParams:{},constructor:function(e,t,a){a||(a={}),this.scale="number"==typeof a.scale?a.scale:s,this.shift="number"==typeof a.shift?a.shift:l,this.connect()},process:function(t){if(t.shape&&"slice"==t.element&&t.type in this.overOutEvents){if(!this.angles){var i=o._degToRad(t.plot.opt.startAngle);"number"==typeof t.run.data[0]?this.angles=d.map(d.scanl(t.run.data,"+",0),"* 2 * Math.PI / this",d.foldl(t.run.data,"+",0)):this.angles=d.map(d.scanl(t.run.data,"a + b.y",0),"* 2 * Math.PI / this",d.foldl(t.run.data,"a + b.y",0)),this.angles=a.map(this.angles,function(e){return e+i})}var r,s,l,m,u,f=t.index,h=(this.angles[f]+this.angles[f+1])/2,c=o.rotateAt(-h,t.cx,t.cy),y=o.rotateAt(h,t.cx,t.cy);r=this.anim[f],r?r.action.stop(!0):this.anim[f]=r={},"onmouseover"==t.type?(m=0,u=this.shift,s=1,l=this.scale):(m=this.shift,u=0,s=this.scale,l=1),r.action=n.animateTransform({shape:t.shape,duration:this.duration,easing:this.easing,transform:[y,{name:"translate",start:[m,0],end:[u,0]},{name:"scaleAt",start:[s,t.cx,t.cy],end:[l,t.cx,t.cy]},c]}),"onmouseout"==t.type&&e.connect(r.action,"onEnd",this,function(){delete this.anim[f]}),r.action.play()}},reset:function(){delete this.angles}})});//# sourceMappingURL=MoveSlice.js.map