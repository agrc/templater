//>>built
define("dojox/form/_RangeSliderMixin",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/_base/event","dojo/_base/sniff","dojo/dom-style","dojo/dom-geometry","dojo/keys","dijit","dojo/dnd/Mover","dojo/dnd/Moveable","dijit/form/_FormValueWidget","dijit/focus","dojo/fx","dojox/fx"],function(e,t,i,a,r,o,n,s,l,d,u,c,h,m,f){var p=function(e,t){return t-e},g=function(e,t){return e-t},v=e("dojox.form._RangeSliderMixin",null,{_setTabIndexAttr:["sliderHandle","sliderHandleMax"],value:[0,100],postMixInProperties:function(){this.inherited(arguments),this.value=i.map(this.value,function(e){return parseInt(e,10)})},postCreate:function(){this.inherited(arguments),this.value.sort(this._isReversed()?p:g);var t=this,i=e(y,{constructor:function(){this.widget=t}});this._movableMax=new c(this.sliderHandleMax,{mover:i}),this.sliderHandle.setAttribute("aria-valuemin",this.minimum),this.sliderHandle.setAttribute("aria-valuemax",this.maximum),this.sliderHandleMax.setAttribute("aria-valuemin",this.minimum),this.sliderHandleMax.setAttribute("aria-valuemax",this.maximum);var a=e(b,{constructor:function(){this.widget=t}});this._movableBar=new c(this.progressBar,{mover:a}),this.focusNode.removeAttribute("aria-valuemin"),this.focusNode.removeAttribute("aria-valuemax"),this.focusNode.removeAttribute("aria-valuenow")},destroy:function(){this.inherited(arguments),this._movableMax.destroy(),this._movableBar.destroy()},_onKeyPress:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey)){var i=e.target===this.sliderHandleMax,a=e.target===this.progressBar,o=t.delegate(l,this.isLeftToRight()?{PREV_ARROW:l.LEFT_ARROW,NEXT_ARROW:l.RIGHT_ARROW}:{PREV_ARROW:l.RIGHT_ARROW,NEXT_ARROW:l.LEFT_ARROW}),n=0,s=!1;switch(e.keyCode){case o.HOME:return this._setValueAttr(this.minimum,!0,i),void r.stop(e);case o.END:return this._setValueAttr(this.maximum,!0,i),void r.stop(e);case o.PREV_ARROW:case o.DOWN_ARROW:s=!0;case o.NEXT_ARROW:case o.UP_ARROW:n=1;break;case o.PAGE_DOWN:s=!0;case o.PAGE_UP:n=this.pageIncrement;break;default:return void this.inherited(arguments)}s&&(n=-n),n&&(a?this._bumpValue([{change:n,useMaxValue:!1},{change:n,useMaxValue:!0}]):this._bumpValue(n,i),r.stop(e))}},_onHandleClickMax:function(e){this.disabled||this.readOnly||(o("ie")||m.focus(this.sliderHandleMax),r.stop(e))},_onClkIncBumper:function(){this._setValueAttr(this._descending===!1?this.minimum:this.maximum,!0,!0)},_bumpValue:function(e,i){var a=t.isArray(e)?[this._getBumpValue(e[0].change,e[0].useMaxValue),this._getBumpValue(e[1].change,e[1].useMaxValue)]:this._getBumpValue(e,i);this._setValueAttr(a,!0,i)},_getBumpValue:function(e,t){var i=t?1:0;this._isReversed()&&(i=1-i);var a=n.getComputedStyle(this.sliderBarContainer),r=s.getContentBox(this.sliderBarContainer,a),o=this.discreteValues,l=this.value[i];(1>=o||o==1/0)&&(o=r[this._pixelCount]),o--;var d=this.maximum>this.minimum?(l-this.minimum)*o/(this.maximum-this.minimum)+e:0;return 0>d&&(d=0),d>o&&(d=o),d*(this.maximum-this.minimum)/o+this.minimum},_onBarClick:function(e){this.disabled||this.readOnly||(o("ie")||m.focus(this.progressBar),r.stop(e))},_onRemainingBarClick:function(e){if(!this.disabled&&!this.readOnly){o("ie")||m.focus(this.progressBar);var t=s.position(this.sliderBarContainer,!0),i=s.position(this.progressBar,!0),a=e[this._mousePixelCoord],n=i[this._startingPixelCoord],l=n+i[this._pixelCount],d=this._isReversed()?n>=a:a>=l,u=this._isReversed()?t[this._pixelCount]-a+t[this._startingPixelCoord]:a-t[this._startingPixelCoord];this._setPixelValue(u,t[this._pixelCount],!0,d),r.stop(e)}},_setPixelValue:function(e,t,i,a){if(!this.disabled&&!this.readOnly){var r=this._getValueByPixelValue(e,t);this._setValueAttr(r,i,a)}},_getValueByPixelValue:function(e,t){e=0>e?0:e>t?t:e;var i=this.discreteValues;(1>=i||i==1/0)&&(i=t),i--;var a=t/i,r=Math.round(e/a);return(this.maximum-this.minimum)*r/i+this.minimum},_setValueAttr:function(e,i,a){var r=this.value;t.isArray(e)?r=e:a?this._isReversed()?r[0]=e:r[1]=e:this._isReversed()?r[1]=e:r[0]=e,this._lastValueReported="",this.valueNode.value=this.value=e=r,this.value.sort(this._isReversed()?p:g),this.sliderHandle.setAttribute("aria-valuenow",r[0]),this.sliderHandleMax.setAttribute("aria-valuenow",r[1]),h.prototype._setValueAttr.apply(this,arguments),this._printSliderBar(i,a)},_printSliderBar:function(e,t){var i=this.maximum>this.minimum?(this.value[0]-this.minimum)/(this.maximum-this.minimum):0,r=this.maximum>this.minimum?(this.value[1]-this.minimum)/(this.maximum-this.minimum):0,o=i;i>r&&(i=r,r=o);var n=this._isReversed()?100*(1-i):100*i,s=this._isReversed()?100*(1-r):100*r,l=this._isReversed()?100*(1-r):100*i;if(e&&this.slideDuration>0&&this.progressBar.style[this._progressPixelSize]){var d=(parseFloat(this.progressBar.style[this._handleOffsetCoord]),this.slideDuration/10);if(0===d)return;0>d&&(d=0-d);var u={},c={},h={};u[this._handleOffsetCoord]={start:this.sliderHandle.parentNode.style[this._handleOffsetCoord],end:n,units:"%"},c[this._handleOffsetCoord]={start:this.sliderHandleMax.parentNode.style[this._handleOffsetCoord],end:s,units:"%"},h[this._handleOffsetCoord]={start:this.progressBar.style[this._handleOffsetCoord],end:l,units:"%"},h[this._progressPixelSize]={start:this.progressBar.style[this._progressPixelSize],end:100*(r-i),units:"%"};var m=a.animateProperty({node:this.sliderHandle.parentNode,duration:d,properties:u}),p=a.animateProperty({node:this.sliderHandleMax.parentNode,duration:d,properties:c}),g=a.animateProperty({node:this.progressBar,duration:d,properties:h}),v=f.combine([m,p,g]);v.play()}else this.sliderHandle.parentNode.style[this._handleOffsetCoord]=n+"%",this.sliderHandleMax.parentNode.style[this._handleOffsetCoord]=s+"%",this.progressBar.style[this._handleOffsetCoord]=l+"%",this.progressBar.style[this._progressPixelSize]=100*(r-i)+"%"}}),y=e("dijit.form._SliderMoverMax",u,{onMouseMove:function(e){var i=this.widget,a=i._abspos;a||(a=i._abspos=s.position(i.sliderBarContainer,!0),i._setPixelValue_=t.hitch(i,"_setPixelValue"),i._isReversed_=i._isReversed());var r=e[i._mousePixelCoord]-a[i._startingPixelCoord];i._setPixelValue_(i._isReversed_?a[i._pixelCount]-r:r,a[i._pixelCount],!1,!0)},destroy:function(e){u.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0)}}),b=e("dijit.form._SliderBarMover",u,{onMouseMove:function(e){var i=this.widget;if(!i.disabled&&!i.readOnly){var a=i._abspos,r=i._bar,o=i._mouseOffset;a||(a=i._abspos=s.position(i.sliderBarContainer,!0),i._setPixelValue_=t.hitch(i,"_setPixelValue"),i._getValueByPixelValue_=t.hitch(i,"_getValueByPixelValue"),i._isReversed_=i._isReversed()),r||(r=i._bar=s.position(i.progressBar,!0)),o||(o=i._mouseOffset=e[i._mousePixelCoord]-r[i._startingPixelCoord]);var n=e[i._mousePixelCoord]-a[i._startingPixelCoord]-o,l=n+r[i._pixelCount];pixelValues=[n,l],pixelValues.sort(g),pixelValues[0]<=0&&(pixelValues[0]=0,pixelValues[1]=r[i._pixelCount]),pixelValues[1]>=a[i._pixelCount]&&(pixelValues[1]=a[i._pixelCount],pixelValues[0]=a[i._pixelCount]-r[i._pixelCount]);var d=[i._getValueByPixelValue(i._isReversed_?a[i._pixelCount]-pixelValues[0]:pixelValues[0],a[i._pixelCount]),i._getValueByPixelValue(i._isReversed_?a[i._pixelCount]-pixelValues[1]:pixelValues[1],a[i._pixelCount])];i._setValueAttr(d,!1,!1)}},destroy:function(){u.prototype.destroy.apply(this,arguments);var e=this.widget;e._abspos=null,e._bar=null,e._mouseOffset=null,e._setValueAttr(e.value,!0)}});return v});//# sourceMappingURL=_RangeSliderMixin.js.map