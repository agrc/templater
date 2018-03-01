//>>built
define("dojox/form/_RangeSliderMixin",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/_base/event","dojo/_base/sniff","dojo/dom-style","dojo/dom-geometry","dojo/keys","dijit","dojo/dnd/Mover","dojo/dnd/Moveable","dijit/form/_FormValueWidget","dijit/focus","dojo/fx","dojox/fx"],function(e,t,a,i,r,n,o,s,d,l,u,h,m,c,f){var y=function(e,t){return e-t},p=e("dojox.form._RangeSliderMixin",null,{_setTabIndexAttr:["sliderHandle","sliderHandleMax"],value:[0,100],postMixInProperties:function(){this.inherited(arguments),this.value=a.map(this.value,function(e){return parseInt(e,10)})},postCreate:function(){this.inherited(arguments),this.value.sort(y);var t=this,a=e(v,{constructor:function(){this.widget=t}});this._movableMax=new h(this.sliderHandleMax,{mover:a}),this.sliderHandle.setAttribute("aria-valuemin",this.minimum),this.sliderHandle.setAttribute("aria-valuemax",this.maximum),this.sliderHandleMax.setAttribute("aria-valuemin",this.minimum),this.sliderHandleMax.setAttribute("aria-valuemax",this.maximum);var i=e(g,{constructor:function(){this.widget=t}});this._movableBar=new h(this.progressBar,{mover:i}),this.focusNode.removeAttribute("aria-valuemin"),this.focusNode.removeAttribute("aria-valuemax"),this.focusNode.removeAttribute("aria-valuenow")},destroy:function(){this.inherited(arguments),this._movableMax.destroy(),this._movableBar.destroy()},_onKeyPress:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey)){var a=e.target===this.sliderHandleMax,i=e.target===this.progressBar,n=t.delegate(d,this.isLeftToRight()?{PREV_ARROW:d.LEFT_ARROW,NEXT_ARROW:d.RIGHT_ARROW}:{PREV_ARROW:d.RIGHT_ARROW,NEXT_ARROW:d.LEFT_ARROW}),o=0,s=!1;switch(e.keyCode){case n.HOME:return this._setValueAttr(this.minimum,!0,a),void r.stop(e);case n.END:return this._setValueAttr(this.maximum,!0,a),void r.stop(e);case n.PREV_ARROW:case n.DOWN_ARROW:s=!0;case n.NEXT_ARROW:case n.UP_ARROW:o=1;break;case n.PAGE_DOWN:s=!0;case n.PAGE_UP:o=this.pageIncrement;break;default:return void this.inherited(arguments)}s&&(o=-o),o&&(i?this._bumpValue([{change:o,useMaxValue:!1},{change:o,useMaxValue:!0}]):this._bumpValue(o,a),r.stop(e))}},_onHandleClickMax:function(e){this.disabled||this.readOnly||(n("ie")||c.focus(this.sliderHandleMax),r.stop(e))},_onClkIncBumper:function(){this._setValueAttr(!1===this._descending?this.minimum:this.maximum,!0,!0)},_bumpValue:function(e,a){var i=t.isArray(e)?[this._getBumpValue(e[0].change,e[0].useMaxValue),this._getBumpValue(e[1].change,e[1].useMaxValue)]:this._getBumpValue(e,a);this._setValueAttr(i,!0,a)},_getBumpValue:function(e,t){var a=t?1:0,i=o.getComputedStyle(this.sliderBarContainer),r=s.getContentBox(this.sliderBarContainer,i),n=this.discreteValues,d=this.value[a];(n<=1||n==1/0)&&(n=r[this._pixelCount]),n--;var l=this.maximum>this.minimum?(d-this.minimum)*n/(this.maximum-this.minimum)+e:0;return l<0&&(l=0),l>n&&(l=n),l*(this.maximum-this.minimum)/n+this.minimum},_onBarClick:function(e){this.disabled||this.readOnly||(n("ie")||c.focus(this.progressBar),r.stop(e))},_onRemainingBarClick:function(e){if(!this.disabled&&!this.readOnly){n("ie")||c.focus(this.progressBar);var t=s.position(this.sliderBarContainer,!0),a=s.position(this.progressBar,!0),i=e[this._mousePixelCoord],o=a[this._startingPixelCoord],d=o+a[this._pixelCount],l=this._isReversed()?i<=o:i>=d,u=this._isReversed()?t[this._pixelCount]-i+t[this._startingPixelCoord]:i-t[this._startingPixelCoord];this._setPixelValue(u,t[this._pixelCount],!0,l),r.stop(e)}},_setPixelValue:function(e,t,a,i){if(!this.disabled&&!this.readOnly){var r=this._getValueByPixelValue(e,t);this._setValueAttr(r,a,i)}},_getValueByPixelValue:function(e,t){e=e<0?0:t<e?t:e;var a=this.discreteValues;(a<=1||a==1/0)&&(a=t),a--;var i=t/a,r=Math.round(e/i);return(this.maximum-this.minimum)*r/a+this.minimum},_setValueAttr:function(e,a,i){var r=t.clone(this.value);t.isArray(e)?r=e:r[i?1:0]=e,this._lastValueReported="",this.valueNode.value=e=r,r.sort(y),this.sliderHandle.setAttribute("aria-valuenow",r[0]),this.sliderHandleMax.setAttribute("aria-valuenow",r[1]),m.prototype._setValueAttr.apply(this,arguments),this._printSliderBar(a,i)},_printSliderBar:function(e,t){var a=this.maximum>this.minimum?(this.value[0]-this.minimum)/(this.maximum-this.minimum):0,r=this.maximum>this.minimum?(this.value[1]-this.minimum)/(this.maximum-this.minimum):0,n=a;a>r&&(a=r,r=n);var o=this._isReversed()?100*(1-a):100*a,s=this._isReversed()?100*(1-r):100*r,d=this._isReversed()?100*(1-r):100*a;if(e&&this.slideDuration>0&&this.progressBar.style[this._progressPixelSize]){var l=(parseFloat(this.progressBar.style[this._handleOffsetCoord]),this.slideDuration/10);if(0===l)return;l<0&&(l=0-l);var u={},h={},m={};u[this._handleOffsetCoord]={start:this.sliderHandle.parentNode.style[this._handleOffsetCoord],end:o,units:"%"},h[this._handleOffsetCoord]={start:this.sliderHandleMax.parentNode.style[this._handleOffsetCoord],end:s,units:"%"},m[this._handleOffsetCoord]={start:this.progressBar.style[this._handleOffsetCoord],end:d,units:"%"},m[this._progressPixelSize]={start:this.progressBar.style[this._progressPixelSize],end:100*(r-a),units:"%"};var c=i.animateProperty({node:this.sliderHandle.parentNode,duration:l,properties:u}),y=i.animateProperty({node:this.sliderHandleMax.parentNode,duration:l,properties:h}),p=i.animateProperty({node:this.progressBar,duration:l,properties:m});f.combine([c,y,p]).play()}else this.sliderHandle.parentNode.style[this._handleOffsetCoord]=o+"%",this.sliderHandleMax.parentNode.style[this._handleOffsetCoord]=s+"%",this.progressBar.style[this._handleOffsetCoord]=d+"%",this.progressBar.style[this._progressPixelSize]=100*(r-a)+"%"}}),v=e("dijit.form._SliderMoverMax",u,{onMouseMove:function(e){var a=this.widget,i=a._abspos;i||(i=a._abspos=s.position(a.sliderBarContainer,!0),a._setPixelValue_=t.hitch(a,"_setPixelValue"),a._isReversed_=a._isReversed());var r=e[a._mousePixelCoord]-i[a._startingPixelCoord];a._setPixelValue_(a._isReversed_?i[a._pixelCount]-r:r,i[a._pixelCount],!1,!0)},destroy:function(e){u.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0)}}),g=e("dijit.form._SliderBarMover",u,{onMouseMove:function(e){var a=this.widget;if(!a.disabled&&!a.readOnly){var i=a._abspos,r=a._bar,n=a._mouseOffset;i||(i=a._abspos=s.position(a.sliderBarContainer,!0),a._setPixelValue_=t.hitch(a,"_setPixelValue"),a._getValueByPixelValue_=t.hitch(a,"_getValueByPixelValue"),a._isReversed_=a._isReversed()),r||(r=a._bar=s.position(a.progressBar,!0)),n||(n=a._mouseOffset=e[a._mousePixelCoord]-r[a._startingPixelCoord]);var o=e[a._mousePixelCoord]-i[a._startingPixelCoord]-n,d=o+r[a._pixelCount];pixelValues=[o,d],pixelValues.sort(y),pixelValues[0]<=0&&(pixelValues[0]=0,pixelValues[1]=r[a._pixelCount]),pixelValues[1]>=i[a._pixelCount]&&(pixelValues[1]=i[a._pixelCount],pixelValues[0]=i[a._pixelCount]-r[a._pixelCount]);var l=[a._getValueByPixelValue(a._isReversed_?i[a._pixelCount]-pixelValues[0]:pixelValues[0],i[a._pixelCount]),a._getValueByPixelValue(a._isReversed_?i[a._pixelCount]-pixelValues[1]:pixelValues[1],i[a._pixelCount])];a._setValueAttr(l,!1,!1)}},destroy:function(){u.prototype.destroy.apply(this,arguments);var e=this.widget;e._abspos=null,e._bar=null,e._mouseOffset=null,e._setValueAttr(e.value,!0)}});return p});//# sourceMappingURL=_RangeSliderMixin.js.map