//>>built
define("dojox/gauges/AnalogIndicatorBase",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/fx","dojox/gfx","./_Indicator"],function(e,t,a,i,o,r){return t("dojox.gauges.AnalogIndicatorBase",[r],{draw:function(e,t){if(this.shape)this._move(t);else{this.text&&(this.text.parent.remove(this.text),this.text=null);var a=this._gauge._getAngle(Math.min(Math.max(this.value,this._gauge.min),this._gauge.max));this.color=this.color||"#000000",this.length=this.length||this._gauge.radius,this.width=this.width||1,this.offset=this.offset||0,this.highlight=this.highlight||"#D0D0D0";var i=this._getShapes(e,this._gauge,this);if(i){if(i.length>1){this.shape=e.createGroup();for(var r=0;r<i.length;r++)this.shape.add(i[r])}else this.shape=i[0];this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},o.matrix.rotateg(a)]),this.shape.connect("onmouseover",this,this.handleMouseOver),this.shape.connect("onmouseout",this,this.handleMouseOut),this.shape.connect("onmousedown",this,this.handleMouseDown),this.shape.connect("touchstart",this,this.handleTouchStart)}if(this.label){var n=this.direction;n||(n="outside");var s;s="inside"==n?-this.length+this.offset-5:this.length+this.offset+5;var l=this._gauge._getRadians(90-a);this._layoutLabel(e,this.label+"",this._gauge.cx,this._gauge.cy,s,l,n)}this.currentValue=this.value}},_layoutLabel:function(e,t,a,i,r,n,s){var l,d=this.font?this.font:o.defaultFont,u=o._base._getTextBox(t,{font:o.makeFontString(o.makeParameters(o.defaultFont,d))}),m=u.w,h=d.size,c=o.normalizedLength(h),f=a+Math.cos(n)*r-m/2,p=i-Math.sin(n)*r-c/2,g=[];l=f;var v=l,y=-Math.tan(n)*l+i+Math.tan(n)*a;y>=p&&y<=p+c&&g.push({x:v,y:y}),l=f+m,v=l,y=-Math.tan(n)*l+i+Math.tan(n)*a,y>=p&&y<=p+c&&g.push({x:v,y:y}),l=p,v=-1/Math.tan(n)*l+a+1/Math.tan(n)*i,y=l,v>=f&&v<=f+m&&g.push({x:v,y:y}),l=p+c,v=-1/Math.tan(n)*l+a+1/Math.tan(n)*i,y=l,v>=f&&v<=f+m&&g.push({x:v,y:y});var k;if("inside"==s)for(var b=0;b<g.length;b++){var M=g[b];if((k=this._distance(M.x,M.y,a,i)-r)>=0){f=a+Math.cos(n)*(r-k)-m/2,p=i-Math.sin(n)*(r-k)-c/2;break}}else for(b=0;b<g.length;b++)if(M=g[b],(k=this._distance(M.x,M.y,a,i)-r)<=0){f=a+Math.cos(n)*(r-k)-m/2,p=i-Math.sin(n)*(r-k)-c/2;break}this.text=this._gauge.drawText(e,t,f+m/2,p+c,"middle",this.color,this.font)},_distance:function(e,t,a,i){return Math.sqrt((a-e)*(a-e)+(i-t)*(i-t))},_move:function(t){var r=Math.min(Math.max(this.value,this._gauge.min),this._gauge.max),n=this.currentValue;if(t){var s=this._gauge._getAngle(r);this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},o.matrix.rotateg(s)]),this.currentValue=r}else if(n!=r){var l=new i.Animation({curve:[n,r],duration:this.duration,easing:this.easing});a.connect(l,"onAnimate",e.hitch(this,function(e){this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},o.matrix.rotateg(this._gauge._getAngle(e))]),this.currentValue=e})),l.play()}}})});//# sourceMappingURL=AnalogIndicatorBase.js.map