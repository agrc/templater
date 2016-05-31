//>>built
define("dojox/gauges/GlossyHorizontalGauge",["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/Color","dojox/gfx","./BarGauge","./BarCircleIndicator","./GlossyHorizontalGaugeMarker"],function(e,t,i,a,n,r,o,s){return e("dojox.gauges.GlossyHorizontalGauge",[r],{_defaultIndicator:o,color:"black",markerColor:"black",majorTicksInterval:10,_majorTicksLength:10,majorTicksColor:"#c4c4c4",minorTicksInterval:5,_minorTicksLength:6,minorTicksColor:"#c4c4c4",value:0,noChange:!1,title:"",font:"normal normal normal 10pt serif",scalePrecision:0,_font:null,_margin:2,_minBorderWidth:2,_maxBorderWidth:6,_tickLabelOffset:5,_designHeight:100,constructor:function(){this.min=0,this.max=100},startup:function(){if(this.inherited(arguments),!this._gaugeStarted){this._gaugeStarted=!0;var e=this.height/this._designHeight;this._minorTicksLength=this._minorTicksLength*e,this._majorTicksLength=this._majorTicksLength*e;var a=this._font;this._computeDataRectangle();var r=n.normalizedLength(a.size),o=r+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),l=Math.max(0,(this.height-o)/2);this.addRange({low:this.min?this.min:0,high:this.max?this.max:100,color:[0,0,0,0]}),this.setMajorTicks({fixedPrecision:!0,precision:this.scalePrecision,font:a,labelPlacement:"inside",offset:l-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength,color:this.majorTicksColor}),this.setMinorTicks({labelPlacement:"inside",offset:l-this._minorTicksLength/2,interval:this.minorTicksInterval,length:this._minorTicksLength,color:this.minorTicksColor}),this._needle=new s({hideValue:!0,title:this.title,noChange:this.noChange,offset:l,color:this.markerColor,value:this.value}),this.addIndicator(this._needle),t.connect(this._needle,"valueChanged",i.hitch(this,function(){this.value=this._needle.value,this.onValueChanged()}))}},_layoutGauge:function(){if(this._gaugeStarted){var e=this._font;this._computeDataRectangle();var t=n.normalizedLength(e.size),i=t+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),a=Math.max(0,(this.height-i)/2);this._setMajorTicksProperty({fixedPrecision:!0,precision:this.scalePrecision,font:e,offset:a-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength}),this._setMinorTicksProperty({offset:a-this._minorTicksLength/2,interval:this.minorTicksInterval,length:this._minorTicksLength}),this.removeIndicator(this._needle),this._needle.offset=a,this.addIndicator(this._needle)}},_formatNumber:function(e){var t=this._getNumberModule();return t?t.format(e,{places:this.scalePrecision}):e.toFixed(this.scalePrecision)},_computeDataRectangle:function(){if(this._gaugeStarted){var e=this._font,t=this._getTextWidth(this._formatNumber(this.min),e)/2,i=this._getTextWidth(this._formatNumber(this.max),e)/2,a=Math.max(t,i),n=this._getBorderWidth()+Math.max(this._majorTicksLength,this._majorTicksLength)/2+a;this.dataHeight=this.height,this.dataY=0,this.dataX=n+this._margin,this.dataWidth=Math.max(0,this.width-2*this.dataX)}},_getTextWidth:function(e,t){return n._base._getTextBox(e,{font:n.makeFontString(n.makeParameters(n.defaultFont,t))}).w||0},_getBorderWidth:function(){return Math.max(this._minBorderWidth,Math.min(this._maxBorderWidth,this._maxBorderWidth*this.height/this._designHeight))},drawBackground:function(e){if(!this._gaugeBackground){var t=a.blendColors(new a(this.color),new a("white"),.4);this._gaugeBackground=e.createGroup();var i=this._getBorderWidth(),n=this._margin,r=this.width,o=this.height,s=Math.min(o/4,23);this._gaugeBackground.createRect({x:n,y:n,width:Math.max(0,r-2*n),height:Math.max(0,o-2*n),r:s}).setFill(this.color);var l=n+i,d=r-i-n,u=n+i,m=r-2*i-2*n,c=o-2*i-2*n;if(!(0>=m||0>=c)){s=Math.min(s,m/2),s=Math.min(s,c/2),this._gaugeBackground.createRect({x:l,y:u,width:m,height:c,r:s}).setFill({type:"linear",x1:l,y1:0,x2:l,y2:o-i-n,colors:[{offset:0,color:t},{offset:.2,color:this.color},{offset:.8,color:this.color},{offset:1,color:t}]});var h=4*(Math.sqrt(2)-1)/3*s;this._gaugeBackground.createPath({path:"M"+l+" "+(u+s)+"C"+l+" "+(u+s-h)+" "+(l+s-h)+" "+u+" "+(l+s)+" "+u+"L"+(d-s)+" "+u+"C"+(d-s+h)+" "+u+" "+d+" "+(u+s-h)+" "+d+" "+(u+s)+"L"+d+" "+(u+o/2)+"L"+l+" "+(u+o/3)+"Z"}).setFill({type:"linear",x1:l,y1:u,x2:l,y2:u+this.height/2,colors:[{offset:0,color:t},{offset:1,color:a.blendColors(new a(this.color),new a("white"),.2)}]})}}},onValueChanged:function(){},_setColorAttr:function(e){this.color=e?e:"black",this._gaugeBackground&&this._gaugeBackground.parent&&this._gaugeBackground.parent.remove(this._gaugeBackground),this._gaugeBackground=null,this.draw()},_setMarkerColorAttr:function(e){this.markerColor=e,this._needle&&(this.removeIndicator(this._needle),this._needle.color=e,this._needle.shape=null,this.addIndicator(this._needle))},_setMajorTicksIntervalAttr:function(e){this.majorTicksInterval=e,this._setMajorTicksProperty({interval:this.majorTicksInterval})},setMajorTicksLength:function(e){return this._majorTicksLength=e,this._layoutGauge(),this},getMajorTicksLength:function(){return this._majorTicksLength},_setMajorTicksColorAttr:function(e){this.majorTicksColor=e,this._setMajorTicksProperty({color:this.majorTicksColor})},_setMajorTicksProperty:function(e){null!=this.majorTicks&&(i.mixin(this.majorTicks,e),this.setMajorTicks(this.majorTicks))},_setMinorTicksIntervalAttr:function(e){this.minorTicksInterval=e,this._setMinorTicksProperty({interval:this.minorTicksInterval})},setMinorTicksLength:function(e){return this._minorTicksLength=e,this._layoutGauge(),this},getMinorTicksLength:function(){return this._minorTicksLength},_setMinorTicksColorAttr:function(e){this.minorTicksColor=e,this._setMinorTicksProperty({color:this.minorTicksColor})},_setMinorTicksProperty:function(e){null!=this.minorTicks&&(i.mixin(this.minorTicks,e),this.setMinorTicks(this.minorTicks))},_setMinAttr:function(e){this.min=e,this._computeDataRectangle(),null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw()},_setMaxAttr:function(e){this.max=e,this._computeDataRectangle(),null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw()},_setValueAttr:function(e){if(e=Math.min(this.max,e),e=Math.max(this.min,e),this.value=e,this._needle){var t=this._needle.noChange;this._needle.noChange=!1,this._needle.update(e),this._needle.noChange=t}},_setScalePrecisionAttr:function(e){this.scalePrecision=e,this._layoutGauge()},_setNoChangeAttr:function(e){this.noChange=e,this._needle&&(this._needle.noChange=this.noChange)},_setTitleAttr:function(e){this.title=e,this._needle&&(this._needle.title=this.title)},_setFontAttr:function(e){this.font=e,this._font=n.splitFontString(e),this._layoutGauge()}})});//# sourceMappingURL=GlossyHorizontalGauge.js.map