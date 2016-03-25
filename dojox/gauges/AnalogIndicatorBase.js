//>>built
define("dojox/gauges/AnalogIndicatorBase",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/fx","dojox/gfx","./_Indicator"],function(e,t,a,i,r,o){return t("dojox.gauges.AnalogIndicatorBase",[o],{draw:function(e,t){if(this.shape)this._move(t);else{this.text&&(this.text.parent.remove(this.text),this.text=null);var a=this._gauge._getAngle(Math.min(Math.max(this.value,this._gauge.min),this._gauge.max));this.color=this.color||"#000000",this.length=this.length||this._gauge.radius,this.width=this.width||1,this.offset=this.offset||0,this.highlight=this.highlight||"#D0D0D0";var i=this._getShapes(e,this._gauge,this);if(i){if(i.length>1){this.shape=e.createGroup();for(var o=0;o<i.length;o++)this.shape.add(i[o])}else this.shape=i[0];this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(a)]),this.shape.connect("onmouseover",this,this.handleMouseOver),this.shape.connect("onmouseout",this,this.handleMouseOut),this.shape.connect("onmousedown",this,this.handleMouseDown),this.shape.connect("touchstart",this,this.handleTouchStart)}if(this.label){var n=this.direction;n||(n="outside");var s;s="inside"==n?-this.length+this.offset-5:this.length+this.offset+5;var d=this._gauge._getRadians(90-a);this._layoutLabel(e,this.label+"",this._gauge.cx,this._gauge.cy,s,d,n)}this.currentValue=this.value}},_layoutLabel:function(e,t,a,i,o,n,s){var d,l=this.font?this.font:r.defaultFont,h=r._base._getTextBox(t,{font:r.makeFontString(r.makeParameters(r.defaultFont,l))}),m=h.w,u=l.size,c=r.normalizedLength(u),f=a+Math.cos(n)*o-m/2,p=i-Math.sin(n)*o-c/2,y=[];d=f;var g=d,v=-Math.tan(n)*d+i+Math.tan(n)*a;v>=p&&p+c>=v&&y.push({x:g,y:v}),d=f+m,g=d,v=-Math.tan(n)*d+i+Math.tan(n)*a,v>=p&&p+c>=v&&y.push({x:g,y:v}),d=p,g=-1/Math.tan(n)*d+a+1/Math.tan(n)*i,v=d,g>=f&&f+m>=g&&y.push({x:g,y:v}),d=p+c,g=-1/Math.tan(n)*d+a+1/Math.tan(n)*i,v=d,g>=f&&f+m>=g&&y.push({x:g,y:v});var M;if("inside"==s)for(var b=0;b<y.length;b++){var k=y[b];if(M=this._distance(k.x,k.y,a,i)-o,M>=0){f=a+Math.cos(n)*(o-M)-m/2,p=i-Math.sin(n)*(o-M)-c/2;break}}else for(b=0;b<y.length;b++)if(k=y[b],M=this._distance(k.x,k.y,a,i)-o,0>=M){f=a+Math.cos(n)*(o-M)-m/2,p=i-Math.sin(n)*(o-M)-c/2;break}this.text=this._gauge.drawText(e,t,f+m/2,p+c,"middle",this.color,this.font)},_distance:function(e,t,a,i){return Math.sqrt((a-e)*(a-e)+(i-t)*(i-t))},_move:function(t){var o=Math.min(Math.max(this.value,this._gauge.min),this._gauge.max),n=this.currentValue;if(t){var s=this._gauge._getAngle(o);this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(s)]),this.currentValue=o}else if(n!=o){var d=new i.Animation({curve:[n,o],duration:this.duration,easing:this.easing});a.connect(d,"onAnimate",e.hitch(this,function(e){this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},r.matrix.rotateg(this._gauge._getAngle(e))]),this.currentValue=e})),d.play()}}})});//# sourceMappingURL=AnalogIndicatorBase.js.map