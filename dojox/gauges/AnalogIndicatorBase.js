//>>built
define("dojox/gauges/AnalogIndicatorBase",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/fx","dojox/gfx","./_Indicator"],function(e,t,i,a,r,o){return t("dojox.gauges.AnalogIndicatorBase",[o],{draw:function(e,t){if(this.shape)this._move(t);else{this.text&&(this.text.parent.remove(this.text),this.text=null);var i=this._gauge._getAngle(Math.min(Math.max(this.value,this._gauge.min),this._gauge.max));this.color=this.color||"#000000",this.length=this.length||this._gauge.radius,this.width=this.width||1,this.offset=this.offset||0,this.highlight=this.highlight||"#D0D0D0";var a=this._getShapes(e,this._gauge,this);if(a){if(a.length>1){this.shape=e.createGroup();for(var o=0;o<a.length;o++)this.shape.add(a[o])}else this.shape=a[0];this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(i)]),this.shape.connect("onmouseover",this,this.handleMouseOver),this.shape.connect("onmouseout",this,this.handleMouseOut),this.shape.connect("onmousedown",this,this.handleMouseDown),this.shape.connect("touchstart",this,this.handleTouchStart)}if(this.label){var n=this.direction;n||(n="outside");var s;s="inside"==n?-this.length+this.offset-5:this.length+this.offset+5;var d=this._gauge._getRadians(90-i);this._layoutLabel(e,this.label+"",this._gauge.cx,this._gauge.cy,s,d,n)}this.currentValue=this.value}},_layoutLabel:function(e,t,i,a,o,n,s){var d,l=this.font?this.font:r.defaultFont,u=r._base._getTextBox(t,{font:r.makeFontString(r.makeParameters(r.defaultFont,l))}),m=u.w,c=l.size,h=r.normalizedLength(c),f=i+Math.cos(n)*o-m/2,y=a-Math.sin(n)*o-h/2,p=[];d=f;var g=d,v=-Math.tan(n)*d+a+Math.tan(n)*i;v>=y&&y+h>=v&&p.push({x:g,y:v}),d=f+m,g=d,v=-Math.tan(n)*d+a+Math.tan(n)*i,v>=y&&y+h>=v&&p.push({x:g,y:v}),d=y,g=-1/Math.tan(n)*d+i+1/Math.tan(n)*a,v=d,g>=f&&f+m>=g&&p.push({x:g,y:v}),d=y+h,g=-1/Math.tan(n)*d+i+1/Math.tan(n)*a,v=d,g>=f&&f+m>=g&&p.push({x:g,y:v});var b;if("inside"==s)for(var M=0;M<p.length;M++){var w=p[M];if(b=this._distance(w.x,w.y,i,a)-o,b>=0){f=i+Math.cos(n)*(o-b)-m/2,y=a-Math.sin(n)*(o-b)-h/2;break}}else for(M=0;M<p.length;M++)if(w=p[M],b=this._distance(w.x,w.y,i,a)-o,0>=b){f=i+Math.cos(n)*(o-b)-m/2,y=a-Math.sin(n)*(o-b)-h/2;break}this.text=this._gauge.drawText(e,t,f+m/2,y+h,"middle",this.color,this.font)},_distance:function(e,t,i,a){return Math.sqrt((i-e)*(i-e)+(a-t)*(a-t))},_move:function(t){var o=Math.min(Math.max(this.value,this._gauge.min),this._gauge.max),n=this.currentValue;if(t){var s=this._gauge._getAngle(o);this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(s)]),this.currentValue=o}else if(n!=o){var d=new a.Animation({curve:[n,o],duration:this.duration,easing:this.easing});i.connect(d,"onAnimate",e.hitch(this,function(e){this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(this._gauge._getAngle(e))]),this.currentValue=e})),d.play()}}})});//# sourceMappingURL=AnalogIndicatorBase.js.map