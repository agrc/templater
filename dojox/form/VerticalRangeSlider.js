//>>built
require({cache:{"url:dojox/form/resources/VerticalRangeSlider.html":'<table class="dijitReset dijitSlider dijitSliderV dojoxRangeSlider" cellspacing="0" cellpadding="0" border="0" rules="none"\n	role="presentation"\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV"\n			><div class="dijitSliderIncrementIconV" tabIndex="-1" style="display:none" dojoAttachPoint="decrementButton" dojoAttachEvent="onclick: increment"><span class="dijitSliderButtonInner">+</span></div\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset"\n			><center><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderTopBumper" dojoAttachEvent="onclick:_onClkIncBumper"></div></center\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td dojoAttachPoint="leftDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationL dijitSliderDecorationV" style="text-align:center;height:100%;"></td\n		><td class="dijitReset" style="height:100%;"\n			><input dojoAttachPoint="valueNode" type="hidden" ${!nameAttrSetting}\n			/><center role="presentation" style="position:relative;height:100%;" dojoAttachPoint="sliderBarContainer"\n				><div role="presentation" dojoAttachPoint="remainingBar" class="dijitSliderBar dijitSliderBarV dijitSliderRemainingBar dijitSliderRemainingBarV" dojoAttachEvent="onmousedown:_onRemainingBarClick"\n					><div class="dijitSliderMoveable dijitSliderMoveableV" style="vertical-align:top;" role="slider"\n						><div class="dijitSliderImageHandle dijitSliderImageHandleV" dojoAttachPoint="sliderHandle,focusNode" tabIndex="${tabIndex}" dojoAttachEvent="onkeypress:_onKeyPress,onmousedown:_onHandleClick"></div\n					></div\n					><div role="presentation" dojoAttachPoint="progressBar" class="dijitSliderBar dijitSliderBarV dijitSliderProgressBar dijitSliderProgressBarV" dojoAttachEvent="onkeypress:_onKeyPress,onmousedown:_onBarClick"\n					></div\n					><div class="dijitSliderMoveable dijitSliderMoveableV" style="vertical-align:top;" role="slider"\n						><div class="dijitSliderImageHandle dijitSliderImageHandleV" dojoAttachPoint="sliderHandleMax" tabIndex="${tabIndex}" dojoAttachEvent="onkeypress:_onKeyPress,onmousedown:_onHandleClickMax"></div\n					></div\n				></div\n			></center\n		></td\n		><td dojoAttachPoint="containerNode,rightDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationR dijitSliderDecorationV" style="text-align:center;height:100%;"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset"\n			><center><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderBottomBumper" dojoAttachEvent="onclick:_onClkDecBumper"></div></center\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV"\n			><div class="dijitSliderDecrementIconV" tabIndex="-1" style="display:none" dojoAttachPoint="incrementButton" dojoAttachEvent="onclick: decrement"><span class="dijitSliderButtonInner">-</span></div\n		></td\n		><td class="dijitReset"></td\n	></tr\n></table>\n'}}),define("dojox/form/VerticalRangeSlider",["dojo/_base/declare","dojox/form/_RangeSliderMixin","dojo/text!./resources/VerticalRangeSlider.html","dijit/form/VerticalSlider"],function(e,t,i,a){return e("dojox.form.VerticalRangeSlider",[a,t],{templateString:i})});//# sourceMappingURL=VerticalRangeSlider.js.map