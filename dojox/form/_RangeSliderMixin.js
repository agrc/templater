//>>built
define("dojox/form/_RangeSliderMixin",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/_base/event","dojo/_base/sniff","dojo/dom-style","dojo/dom-geometry","dojo/keys","dijit","dojo/dnd/Mover","dojo/dnd/Moveable","dijit/form/_FormValueWidget","dijit/focus","dojo/fx","dojox/fx"],function(e,t,i,a,r,n,o,s,d,l,u,c,h,m,f){var p=function(e,t){return t-e},v=function(e,t){return e-t},y=e("dojox.form._RangeSliderMixin",null,{_setTabIndexAttr:["sliderHandle","sliderHandleMax"],value:[0,100],postMixInProperties:function(){this.inherited(arguments),this.value=i.map(this.value,function(e){return parseInt(e,10)})},postCreate:function(){this.inherited(arguments),this.value.sort(this._isReversed()?p:v);var t=this,i=e(g,{constructor:function(){this.widget=t}});this._movableMax=new c(this.sliderHandleMax,{mover:i}),this.sliderHandle.setAttribute("aria-valuemin",this.minimum),this.sliderHandle.setAttribute("aria-valuemax",this.maximum),this.sliderHandleMax.setAttribute("aria-valuemin",this.minimum),this.sliderHandleMax.setAttribute("aria-valuemax",this.maximum);var a=e(b,{constructor:function(){this.widget=t}});this._movableBar=new c(this.progressBar,{mover:a}),this.focusNode.removeAttribute("aria-valuemin"),this.focusNode.removeAttribute("aria-valuemax"),this.focusNode.removeAttribute("aria-valuenow")},destroy:function(){this.inherited(arguments),this._movableMax.destroy(),this._movableBar.destroy()},_onKeyPress:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey)){var i=e.target===this.sliderHandleMax,a=e.target===this.progressBar,n=t.delegate(d,this.isLeftToRight()?{PREV_ARROW:d.LEFT_ARROW,NEXT_ARROW:d.RIGHT_ARROW}:{PREV_ARROW:d.RIGHT_ARROW,NEXT_ARROW:d.LEFT_ARROW}),o=0,s=!1;switch(e.keyCode){case n.HOME:return this._setValueAttr(this.minimum,!0,i),void r.stop(e);case n.END:return this._setValueAttr(this.maximum,!0,i),void r.stop(e);case n.PREV_ARROW:case n.DOWN_ARROW:s=!0;case n.NEXT_ARROW:case n.UP_ARROW:o=1;break;case n.PAGE_DOWN:s=!0;case n.PAGE_UP:o=this.pageIncrement;break;default:return void this.inherited(arguments)}s&&(o=-o),o&&(a?this._bumpValue([{change:o,useMaxValue:!1},{change:o,useMaxValue:!0}]):this._bumpValue(o,i),r.stop(e))}},_onHandleClickMax:function(e){this.disabled||this.readOnly||(n("ie")||m.focus(this.sliderHandleMax),r.stop(e))},_onClkIncBumper:function(){this._setValueAttr(this._descending===!1?this.minimum:this.maximum,!0,!0)},_bumpValue:function(e,i){var a=t.isArray(e)?[this._getBumpValue(e[0].change,e[0].useMaxValue),this._getBumpValue(e[1].change,e[1].useMaxValue)]:this._getBumpValue(e,i);this._setValueAttr(a,!0,i)},_getBumpValue:function(e,t){var i=t?1:0;this._isReversed()&&(i=1-i);var a=o.getComputedStyle(this.sliderBarContainer),r=s.getContentBox(this.sliderBarContainer,a),n=this.discreteValues,d=this.value[i];(1>=n||n==1/0)&&(n=r[this._pixelCount]),n--;var l=this.maximum>this.minimum?(d-this.minimum)*n/(this.maximum-this.minimum)+e:0;return 0>l&&(l=0),l>n&&(l=n),l*(this.maximum-this.minimum)/n+this.minimum},_onBarClick:function(e){this.disabled||this.readOnly||(n("ie")||m.focus(this.progressBar),r.stop(e))},_onRemainingBarClick:function(e){if(!this.disabled&&!this.readOnly){n("ie")||m.focus(this.progressBar);var t=s.position(this.sliderBarContainer,!0),i=s.position(this.progressBar,!0),a=e[this._mousePixelCoord],o=i[this._startingPixelCoord],d=o+i[this._pixelCount],l=this._isReversed()?o>=a:a>=d,u=this._isReversed()?t[this._pixelCount]-a+t[this._startingPixelCoord]:a-t[this._startingPixelCoord];this._setPixelValue(u,t[this._pixelCount],!0,l),r.stop(e)}},_setPixelValue:function(e,t,i,a){if(!this.disabled&&!this.readOnly){var r=this._getValueByPixelValue(e,t);this._setValueAttr(r,i,a)}},_getValueByPixelValue:function(e,t){e=0>e?0:e>t?t:e;var i=this.discreteValues;(1>=i||i==1/0)&&(i=t),i--;var a=t/i,r=Math.round(e/a);return(this.maximum-this.minimum)*r/i+this.minimum},_setValueAttr:function(e,i,a){var r=this.value;t.isArray(e)?r=e:a?this._isReversed()?r[0]=e:r[1]=e:this._isReversed()?r[1]=e:r[0]=e,this._lastValueReported="",this.valueNode.value=this.value=e=r,this.value.sort(this._isReversed()?p:v),this.sliderHandle.setAttribute("aria-valuenow",r[0]),this.sliderHandleMax.setAttribute("aria-valuenow",r[1]),h.prototype._setValueAttr.apply(this,arguments),this._printSliderBar(i,a)},_printSliderBar:function(e,t){var i=this.maximum>this.minimum?(this.value[0]-this.minimum)/(this.maximum-this.minimum):0,r=this.maximum>this.minimum?(this.value[1]-this.minimum)/(this.maximum-this.minimum):0,n=i;i>r&&(i=r,r=n);var o=this._isReversed()?100*(1-i):100*i,s=this._isReversed()?100*(1-r):100*r,d=this._isReversed()?100*(1-r):100*i;if(e&&this.slideDuration>0&&this.progressBar.style[this._progressPixelSize]){var l=(parseFloat(this.progressBar.style[this._handleOffsetCoord]),this.slideDuration/10);if(0===l)return;0>l&&(l=0-l);var u={},c={},h={};u[this._handleOffsetCoord]={start:this.sliderHandle.parentNode.style[this._handleOffsetCoord],end:o,units:"%"},c[this._handleOffsetCoord]={start:this.sliderHandleMax.parentNode.style[this._handleOffsetCoord],end:s,units:"%"},h[this._handleOffsetCoord]={start:this.progressBar.style[this._handleOffsetCoord],end:d,units:"%"},h[this._progressPixelSize]={start:this.progressBar.style[this._progressPixelSize],end:100*(r-i),units:"%"};var m=a.animateProperty({node:this.sliderHandle.parentNode,duration:l,properties:u}),p=a.animateProperty({node:this.sliderHandleMax.parentNode,duration:l,properties:c}),v=a.animateProperty({node:this.progressBar,duration:l,properties:h}),y=f.combine([m,p,v]);y.play()}else this.sliderHandle.parentNode.style[this._handleOffsetCoord]=o+"%",this.sliderHandleMax.parentNode.style[this._handleOffsetCoord]=s+"%",this.progressBar.style[this._handleOffsetCoord]=d+"%",this.progressBar.style[this._progressPixelSize]=100*(r-i)+"%"}}),g=e("dijit.form._SliderMoverMax",u,{onMouseMove:function(e){var i=this.widget,a=i._abspos;a||(a=i._abspos=s.position(i.sliderBarContainer,!0),i._setPixelValue_=t.hitch(i,"_setPixelValue"),i._isReversed_=i._isReversed());var r=e[i._mousePixelCoord]-a[i._startingPixelCoord];i._setPixelValue_(i._isReversed_?a[i._pixelCount]-r:r,a[i._pixelCount],!1,!0)},destroy:function(e){u.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0)}}),b=e("dijit.form._SliderBarMover",u,{onMouseMove:function(e){var i=this.widget;if(!i.disabled&&!i.readOnly){var a=i._abspos,r=i._bar,n=i._mouseOffset;a||(a=i._abspos=s.position(i.sliderBarContainer,!0),i._setPixelValue_=t.hitch(i,"_setPixelValue"),i._getValueByPixelValue_=t.hitch(i,"_getValueByPixelValue"),i._isReversed_=i._isReversed()),r||(r=i._bar=s.position(i.progressBar,!0)),n||(n=i._mouseOffset=e[i._mousePixelCoord]-r[i._startingPixelCoord]);var o=e[i._mousePixelCoord]-a[i._startingPixelCoord]-n,d=o+r[i._pixelCount];pixelValues=[o,d],pixelValues.sort(v),pixelValues[0]<=0&&(pixelValues[0]=0,pixelValues[1]=r[i._pixelCount]),pixelValues[1]>=a[i._pixelCount]&&(pixelValues[1]=a[i._pixelCount],pixelValues[0]=a[i._pixelCount]-r[i._pixelCount]);var l=[i._getValueByPixelValue(i._isReversed_?a[i._pixelCount]-pixelValues[0]:pixelValues[0],a[i._pixelCount]),i._getValueByPixelValue(i._isReversed_?a[i._pixelCount]-pixelValues[1]:pixelValues[1],a[i._pixelCount])];i._setValueAttr(l,!1,!1)}},destroy:function(){u.prototype.destroy.apply(this,arguments);var e=this.widget;e._abspos=null,e._bar=null,e._mouseOffset=null,e._setValueAttr(e.value,!0)}});return y});//# sourceMappingURL=_RangeSliderMixin.js.map