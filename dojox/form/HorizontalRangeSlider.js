//>>built
require({cache:{"url:dojox/form/resources/HorizontalRangeSlider.html":'<table class="dijit dijitReset dijitSlider dijitSliderH dojoxRangeSlider" cellspacing="0" cellpadding="0" border="0" rules="none" dojoAttachEvent="onkeypress:_onKeyPress,onkeyup:_onKeyUp" role="presentation"\n	><tr class="dijitReset"\n		><td class="dijitReset" colspan="2"></td\n		><td dojoAttachPoint="topDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"></td\n		><td class="dijitReset" colspan="2"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n			><div class="dijitSliderDecrementIconH" tabIndex="-1" style="display:none" dojoAttachPoint="decrementButton"><span class="dijitSliderButtonInner">-</span></div\n		></td\n		><td class="dijitReset"\n			><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" dojoAttachEvent="onmousedown:_onClkDecBumper"></div\n		></td\n		><td class="dijitReset"\n			><input dojoAttachPoint="valueNode" type="hidden" ${!nameAttrSetting}\n			/><div role="presentation" class="dojoxRangeSliderBarContainer" dojoAttachPoint="sliderBarContainer"\n				><div class="dijitSliderMoveable dijitSliderMoveableH"\n					><div class="dijitSliderImageHandle dijitSliderImageHandleH" dojoAttachPoint="sliderHandle,focusNode" tabIndex="${tabIndex}" dojoAttachEvent="onmousedown:_onHandleClick" role="slider"></div\n				></div\n				><div role="presentation" dojoAttachPoint="progressBar" class="dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" dojoAttachEvent="onmousedown:_onBarClick"></div\n				><div class="dijitSliderMoveable dijitSliderMoveableH"\n					><div class="dijitSliderImageHandle dijitSliderImageHandleH" dojoAttachPoint="sliderHandleMax" tabIndex="${tabIndex}" dojoAttachEvent="onmousedown:_onHandleClickMax" role="slider"></div\n				></div\n				><div role="presentation" dojoAttachPoint="remainingBar" class="dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" dojoAttachEvent="onmousedown:_onRemainingBarClick"></div\n			></div\n		></td\n		><td class="dijitReset"\n			><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" dojoAttachEvent="onmousedown:_onClkIncBumper"></div\n		></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n			><div class="dijitSliderIncrementIconH" tabIndex="-1" style="display:none" dojoAttachPoint="incrementButton"><span class="dijitSliderButtonInner">+</span></div\n		></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset" colspan="2"></td\n		><td dojoAttachPoint="containerNode,bottomDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"></td\n		><td class="dijitReset" colspan="2"></td\n	></tr\n></table>\n'}}),define("dojox/form/HorizontalRangeSlider",["dojo/_base/declare","dojox/form/_RangeSliderMixin","dojo/text!./resources/HorizontalRangeSlider.html","dijit/form/HorizontalSlider"],function(e,t,i,r){return e("dojox.form.HorizontalRangeSlider",[r,t],{templateString:i})});//# sourceMappingURL=HorizontalRangeSlider.js.map