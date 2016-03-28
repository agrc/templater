//>>built
require({cache:{"url:dijit/form/templates/HorizontalSlider.html":'<table class="dijit dijitReset dijitSlider dijitSliderH" cellspacing="0" cellpadding="0" border="0" rules="none" data-dojo-attach-event="onkeydown:_onKeyDown, onkeyup:_onKeyUp"\n	role="presentation"\n	><tr class="dijitReset"\n		><td class="dijitReset" colspan="2"></td\n		><td data-dojo-attach-point="topDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"></td\n		><td class="dijitReset" colspan="2"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n			><div class="dijitSliderDecrementIconH" style="display:none" data-dojo-attach-point="decrementButton"><span class="dijitSliderButtonInner">-</span></div\n		></td\n		><td class="dijitReset"\n			><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" data-dojo-attach-event="press:_onClkDecBumper"></div\n		></td\n		><td class="dijitReset"\n			><input data-dojo-attach-point="valueNode" type="hidden" ${!nameAttrSetting}\n			/><div class="dijitReset dijitSliderBarContainerH" role="presentation" data-dojo-attach-point="sliderBarContainer"\n				><div role="presentation" data-dojo-attach-point="progressBar" class="dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" data-dojo-attach-event="press:_onBarClick"\n					><div class="dijitSliderMoveable dijitSliderMoveableH"\n						><div data-dojo-attach-point="sliderHandle,focusNode" class="dijitSliderImageHandle dijitSliderImageHandleH" data-dojo-attach-event="press:_onHandleClick" role="slider"></div\n					></div\n				></div\n				><div role="presentation" data-dojo-attach-point="remainingBar" class="dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" data-dojo-attach-event="press:_onBarClick"></div\n			></div\n		></td\n		><td class="dijitReset"\n			><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" data-dojo-attach-event="press:_onClkIncBumper"></div\n		></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n			><div class="dijitSliderIncrementIconH" style="display:none" data-dojo-attach-point="incrementButton"><span class="dijitSliderButtonInner">+</span></div\n		></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset" colspan="2"></td\n		><td data-dojo-attach-point="containerNode,bottomDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"></td\n		><td class="dijitReset" colspan="2"></td\n	></tr\n></table>\n'}}),define("dijit/form/HorizontalSlider",["dojo/_base/array","dojo/_base/declare","dojo/dnd/move","dojo/_base/fx","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/dnd/Moveable","dojo/dnd/Mover","dojo/query","dojo/mouse","dojo/on","../_base/manager","../focus","../typematic","./Button","./_FormValueWidget","../_Container","dojo/text!./templates/HorizontalSlider.html"],function(e,t,i,n,o,r,s,a,d,l,c,u,h,f,p,m,g,v,_,b,y){var j=t("dijit.form._SliderMover",c,{onMouseMove:function(e){var t=this.widget,i=t._abspos;i||(i=t._abspos=o.position(t.sliderBarContainer,!0),t._setPixelValue_=a.hitch(t,"_setPixelValue"),t._isReversed_=t._isReversed());var n=e[t._mousePixelCoord]-i[t._startingPixelCoord];t._setPixelValue_(t._isReversed_?i[t._pixelCount]-n:n,i[t._pixelCount],!1)},destroy:function(e){c.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0)}}),k=t("dijit.form.HorizontalSlider",[_,b],{templateString:y,value:0,showButtons:!0,minimum:0,maximum:100,discreteValues:1/0,pageIncrement:2,clickSelect:!0,slideDuration:p.defaultDuration,_setIdAttr:"",_setNameAttr:"valueNode",baseClass:"dijitSlider",cssStateNodes:{incrementButton:"dijitSliderIncrementButton",decrementButton:"dijitSliderDecrementButton",focusNode:"dijitSliderThumb"},_mousePixelCoord:"pageX",_pixelCount:"w",_startingPixelCoord:"x",_handleOffsetCoord:"left",_progressPixelSize:"width",_onKeyUp:function(e){this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey||this._setValueAttr(this.value,!0)},_onKeyDown:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey)){switch(e.keyCode){case s.HOME:this._setValueAttr(this.minimum,!1);break;case s.END:this._setValueAttr(this.maximum,!1);break;case this._descending||this.isLeftToRight()?s.RIGHT_ARROW:s.LEFT_ARROW:case this._descending===!1?s.DOWN_ARROW:s.UP_ARROW:case this._descending===!1?s.PAGE_DOWN:s.PAGE_UP:this.increment(e);break;case this._descending||this.isLeftToRight()?s.LEFT_ARROW:s.RIGHT_ARROW:case this._descending===!1?s.UP_ARROW:s.DOWN_ARROW:case this._descending===!1?s.PAGE_UP:s.PAGE_DOWN:this.decrement(e);break;default:return}e.stopPropagation(),e.preventDefault()}},_onHandleClick:function(e){this.disabled||this.readOnly||(d("ie")||m.focus(this.sliderHandle),e.stopPropagation(),e.preventDefault())},_isReversed:function(){return!this.isLeftToRight()},_onBarClick:function(e){if(!this.disabled&&!this.readOnly&&this.clickSelect){m.focus(this.sliderHandle),e.stopPropagation(),e.preventDefault();var t=o.position(this.sliderBarContainer,!0),i=e[this._mousePixelCoord]-t[this._startingPixelCoord];this._setPixelValue(this._isReversed()?t[this._pixelCount]-i:i,t[this._pixelCount],!0),this._movable.onMouseDown(e)}},_setPixelValue:function(e,t,i){if(!this.disabled&&!this.readOnly){var n=this.discreteValues;(1>=n||n==1/0)&&(n=t),n--;var o=t/n,r=Math.round(e/o);this._setValueAttr(Math.max(Math.min((this.maximum-this.minimum)*r/n+this.minimum,this.maximum),this.minimum),i)}},_setValueAttr:function(e,t){this._set("value",e),this.valueNode.value=e,this.focusNode.setAttribute("aria-valuenow",e),this.inherited(arguments);var i=this.maximum>this.minimum?(e-this.minimum)/(this.maximum-this.minimum):0,o=this._descending===!1?this.remainingBar:this.progressBar,r=this._descending===!1?this.progressBar:this.remainingBar;if(this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),t&&this.slideDuration>0&&o.style[this._progressPixelSize]){var s=this,a={},d=parseFloat(o.style[this._progressPixelSize]),l=this.slideDuration*(i-d/100);if(0==l)return;0>l&&(l=0-l),a[this._progressPixelSize]={start:d,end:100*i,units:"%"},this._inProgressAnim=n.animateProperty({node:o,duration:l,onAnimate:function(e){r.style[s._progressPixelSize]=100-parseFloat(e[s._progressPixelSize])+"%"},onEnd:function(){delete s._inProgressAnim},properties:a}),this._inProgressAnim.play()}else o.style[this._progressPixelSize]=100*i+"%",r.style[this._progressPixelSize]=100*(1-i)+"%"},_bumpValue:function(e,t){if(!(this.disabled||this.readOnly||this.maximum<=this.minimum)){var i=r.getComputedStyle(this.sliderBarContainer),n=o.getContentBox(this.sliderBarContainer,i),s=this.discreteValues;(1>=s||s==1/0)&&(s=n[this._pixelCount]),s--;var a=(this.value-this.minimum)*s/(this.maximum-this.minimum)+e;0>a&&(a=0),a>s&&(a=s),a=a*(this.maximum-this.minimum)/s+this.minimum,this._setValueAttr(a,t)}},_onClkBumper:function(e){this.disabled||this.readOnly||!this.clickSelect||this._setValueAttr(e,!0)},_onClkIncBumper:function(){this._onClkBumper(this._descending===!1?this.minimum:this.maximum)},_onClkDecBumper:function(){this._onClkBumper(this._descending===!1?this.maximum:this.minimum)},decrement:function(e){this._bumpValue(e.keyCode==s.PAGE_DOWN?-this.pageIncrement:-1)},increment:function(e){this._bumpValue(e.keyCode==s.PAGE_UP?this.pageIncrement:1)},_mouseWheeled:function(e){this.focused&&(e.stopPropagation(),e.preventDefault(),this._bumpValue(e.wheelDelta<0?-1:1,!0))},startup:function(){this._started||(e.forEach(this.getChildren(),function(e){this[e.container]!=this.containerNode&&this[e.container].appendChild(e.domNode)},this),this.inherited(arguments))},_typematicCallback:function(e,t,i){-1==e?this._setValueAttr(this.value,!0):this[t==(this._descending?this.incrementButton:this.decrementButton)?"decrement":"increment"](i)},buildRendering:function(){this.inherited(arguments),this.showButtons&&(this.incrementButton.style.display="",this.decrementButton.style.display="");var e=u('label[for="'+this.id+'"]');e.length&&(e[0].id||(e[0].id=this.id+"_label"),this.focusNode.setAttribute("aria-labelledby",e[0].id)),this.focusNode.setAttribute("aria-valuemin",this.minimum),this.focusNode.setAttribute("aria-valuemax",this.maximum)},postCreate:function(){this.inherited(arguments),this.showButtons&&this.own(g.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500),g.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500)),this.own(f(this.domNode,h.wheel,a.hitch(this,"_mouseWheeled")));var e=t(j,{widget:this});this._movable=new l(this.sliderHandle,{mover:e}),this._layoutHackIE7()},destroy:function(){this._movable.destroy(),this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),this.inherited(arguments)}});return k._Mover=j,k});//# sourceMappingURL=HorizontalSlider.js.map