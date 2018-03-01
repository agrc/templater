//>>built
define("dojox/drawing/annotations/BoxShadow",["dojo","dojo/_base/Color","../util/oo"],function(e,t,a){return a.declare(function(a){this.stencil=a.stencil,this.util=a.stencil.util,this.mouse=a.stencil.mouse,this.style=a.stencil.style;var i={size:6,mult:4,alpha:.05,place:"BR",color:"#646464"};switch(delete a.stencil,this.options=e.mixin(i,a),this.options.color=new t(this.options.color),this.options.color.a=this.options.alpha,this.stencil.shortType){case"image":case"rect":this.method="createForRect";break;case"ellipse":this.method="createForEllipse";break;case"line":this.method="createForLine";break;case"path":this.method="createForPath";break;case"vector":this.method="createForZArrow"}this.method&&(this.render(),this.stencil.connectMult([[this.stencil,"onTransform",this,"onTransform"],"createForZArrow"==this.method?[this.stencil,"render",this,"render"]:[this.stencil,"render",this,"onRender"],[this.stencil,"onDelete",this,"destroy"]]))},{showing:!0,render:function(){this.container&&this.container.removeShape(),this.container=this.stencil.container.createGroup(),this.container.moveToBack();var e=this.options,t=e.size,a=e.mult,i="createForPath"==this.method?this.stencil.points:this.stencil.data,r=i.r||1,o=e.place,n=e.color;this[this.method](e,t,a,i,r,o,n)},hide:function(){this.showing&&(this.showing=!1,this.container.removeShape())},show:function(){this.showing||(this.showing=!0,this.stencil.container.add(this.container))},createForPath:function(t,a,i,r,o,n,d){for(var l=a*i/4,s=/B/.test(n)?l:/T/.test(n)?-1*l:0,m=/R/.test(n)?l:/L/.test(n)?-1*l:0,u=!0,h=1;h<=a;h++){var f=h*i;if("svg"==dojox.gfx.renderer){var c=[];e.forEach(r,function(e,t){if(0==t)c.push("M "+(e.x+m)+" "+(e.y+s));else{var a=e.t||"L ";c.push(a+(e.x+m)+" "+(e.y+s))}},this),u&&c.push("Z"),this.container.createPath(c.join(", ")).setStroke({width:f,color:d,cap:"round"})}else{var y=this.container.createPath({}).setStroke({width:f,color:d,cap:"round"});e.forEach(this.points,function(e,t){0==t||"M"==e.t?y.moveTo(e.x+m,e.y+s):"Z"==e.t?u&&y.closePath():y.lineTo(e.x+m,e.y+s)},this),u&&y.closePath()}}},createForLine:function(e,t,a,i,r,o,n){for(var d=t*a/4,l=/B/.test(o)?d:/T/.test(o)?-1*d:0,s=/R/.test(o)?d:/L/.test(o)?-1*d:0,m=1;m<=t;m++){var u=m*a;this.container.createLine({x1:i.x1+s,y1:i.y1+l,x2:i.x2+s,y2:i.y2+l}).setStroke({width:u,color:n,cap:"round"})}},createForEllipse:function(e,t,a,i,r,o,n){for(var d=t*a/8,l=/B/.test(o)?d:/T/.test(o)?-1*d:0,s=/R/.test(o)?.8*d:/L/.test(o)?-.8*d:0,m=1;m<=t;m++){var u=m*a;this.container.createEllipse({cx:i.cx+s,cy:i.cy+l,rx:i.rx-d,ry:i.ry-d,r:r}).setStroke({width:u,color:n})}},createForRect:function(e,t,a,i,r,o,n){for(var d=t*a/2,l=/B/.test(o)?d:/T/.test(o)?0:d/2,s=/R/.test(o)?d:/L/.test(o)?0:d/2,m=1;m<=t;m++){var u=m*a;this.container.createRect({x:i.x+s,y:i.y+l,width:i.width-d,height:i.height-d,r:r}).setStroke({width:u,color:n})}},arrowPoints:function(){var e=this.stencil.data,t=this.stencil.getRadius(),a=this.style.zAngle+30,i=this.util.pointOnCircle(e.x1,e.y1,.75*t,a),r={start:{x:e.x1,y:e.y1},x:i.x,y:i.y},a=this.util.angle(r),o=this.util.length(r),n=this.style.arrows.length,d=this.style.arrows.width/3;o<n&&(n=o/2);var l=this.util.pointOnCircle(r.x,r.y,-n,a-d),s=this.util.pointOnCircle(r.x,r.y,-n,a+d);return[{x:r.x,y:r.y},l,s]},createForZArrow:function(t,a,i,r,o,n,d){if(!(this.stencil.data.cosphi<1)&&this.stencil.points[0])for(var l=a*i/4,s=/B/.test(n)?l:/T/.test(n)?-1*l:0,m=/R/.test(n)?l:/L/.test(n)?-1*l:0,u=!0,h=1;h<=a;h++){var f=h*i;if(!(r=this.arrowPoints()))return;if("svg"==dojox.gfx.renderer){var c=[];e.forEach(r,function(e,t){if(0==t)c.push("M "+(e.x+m)+" "+(e.y+s));else{var a=e.t||"L ";c.push(a+(e.x+m)+" "+(e.y+s))}},this),u&&c.push("Z"),this.container.createPath(c.join(", ")).setStroke({width:f,color:d,cap:"round"}).setFill(d)}else{var y=this.container.createPath({}).setStroke({width:f,color:d,cap:"round"});e.forEach(r,function(e,t){0==t||"M"==e.t?y.moveTo(e.x+m,e.y+s):"Z"==e.t?u&&y.closePath():y.lineTo(e.x+m,e.y+s)},this),u&&y.closePath()}var p=this.stencil.points;this.container.createLine({x1:p[0].x,y1:p[0].y,x2:r[0].x,y2:r[0].y}).setStroke({width:f,color:d,cap:"round"})}},onTransform:function(){this.render()},onRender:function(){this.container.moveToBack()},destroy:function(){this.container&&this.container.removeShape()}})});//# sourceMappingURL=BoxShadow.js.map