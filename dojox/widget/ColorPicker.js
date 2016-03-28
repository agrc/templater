//>>built
require({cache:{"url:dojox/widget/ColorPicker/ColorPicker.html":'<table class="dojoxColorPicker" dojoAttachEvent="onkeypress: _handleKey" cellpadding="0" cellspacing="0" role="presentation">\n	<tr>\n		<td valign="top" class="dojoxColorPickerRightPad">\n			<div class="dojoxColorPickerBox">\n				<!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. -->\n				<img title="${saturationPickerTitle}" alt="${saturationPickerTitle}" class="dojoxColorPickerPoint" src="${_pickerPointer}" tabIndex="0" dojoAttachPoint="cursorNode" style="position: absolute; top: 0px; left: 0px;">\n				<img role="presentation" alt="" dojoAttachPoint="colorUnderlay" dojoAttachEvent="onclick: _setPoint, onmousedown: _stopDrag" class="dojoxColorPickerUnderlay" src="${_underlay}" ondragstart="return false">\n			</div>\n		</td>\n		<td valign="top" class="dojoxColorPickerRightPad">\n			<div class="dojoxHuePicker">\n				<!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. -->\n				<img dojoAttachPoint="hueCursorNode" tabIndex="0" class="dojoxHuePickerPoint" title="${huePickerTitle}" alt="${huePickerTitle}" src="${_huePickerPointer}" style="position: absolute; top: 0px; left: 0px;">\n				<div class="dojoxHuePickerUnderlay" dojoAttachPoint="hueNode">\n				    <img role="presentation" alt="" dojoAttachEvent="onclick: _setHuePoint, onmousedown: _stopDrag" src="${_hueUnderlay}">\n				</div>\n			</div>\n		</td>\n		<td valign="top">\n			<table cellpadding="0" cellspacing="0" role="presentation">\n				<tr>\n					<td valign="top" class="dojoxColorPickerPreviewContainer">\n						<table cellpadding="0" cellspacing="0" role="presentation">\n							<tr>\n								<td valign="top" class="dojoxColorPickerRightPad">\n									<div dojoAttachPoint="previewNode" class="dojoxColorPickerPreview"></div>\n								</td>\n								<td valign="top">\n									<div dojoAttachPoint="safePreviewNode" class="dojoxColorPickerWebSafePreview"></div>\n								</td>\n							</tr>\n						</table>\n					</td>\n				</tr>\n				<tr>\n					<td valign="bottom">\n						<table class="dojoxColorPickerOptional" cellpadding="0" cellspacing="0" role="presentation">\n							<tr>\n								<td>\n									<div class="dijitInline dojoxColorPickerRgb" dojoAttachPoint="rgbNode">\n										<table cellpadding="1" cellspacing="1" role="presentation">\n										<tr><td><label for="${_uId}_r">${redLabel}</label></td><td><input id="${_uId}_r" dojoAttachPoint="Rval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n										<tr><td><label for="${_uId}_g">${greenLabel}</label></td><td><input id="${_uId}_g" dojoAttachPoint="Gval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n										<tr><td><label for="${_uId}_b">${blueLabel}</label></td><td><input id="${_uId}_b" dojoAttachPoint="Bval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n										</table>\n									</div>\n								</td>\n								<td>\n									<div class="dijitInline dojoxColorPickerHsv" dojoAttachPoint="hsvNode">\n										<table cellpadding="1" cellspacing="1" role="presentation">\n										<tr><td><label for="${_uId}_h">${hueLabel}</label></td><td><input id="${_uId}_h" dojoAttachPoint="Hval"size="1" dojoAttachEvent="onchange: _colorInputChange"> ${degLabel}</td></tr>\n										<tr><td><label for="${_uId}_s">${saturationLabel}</label></td><td><input id="${_uId}_s" dojoAttachPoint="Sval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n										<tr><td><label for="${_uId}_v">${valueLabel}</label></td><td><input id="${_uId}_v" dojoAttachPoint="Vval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n										</table>\n									</div>\n								</td>\n							</tr>\n							<tr>\n								<td colspan="2">\n									<div class="dojoxColorPickerHex" dojoAttachPoint="hexNode" aria-live="polite">	\n										<label for="${_uId}_hex">&nbsp;${hexLabel}&nbsp;</label><input id="${_uId}_hex" dojoAttachPoint="hexCode, focusNode, valueNode" size="6" class="dojoxColorPickerHexCode" dojoAttachEvent="onchange: _colorInputChange">\n									</div>\n								</td>\n							</tr>\n						</table>\n					</td>\n				</tr>\n			</table>\n		</td>\n	</tr>\n</table>\n\n'}}),define("dojox/widget/ColorPicker",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/_base/connect","dojo/_base/sniff","dojo/_base/window","dojo/_base/event","dojo/dom","dojo/dom-class","dojo/keys","dojo/fx","dojo/dnd/move","dijit/registry","dijit/_base/focus","dijit/form/_FormWidget","dijit/typematic","dojox/color","dojo/i18n","dojo/i18n!./nls/ColorPicker","dojo/i18n!dojo/cldr/nls/number","dojo/text!./ColorPicker/ColorPicker.html"],function(e,t,i,a,o,n,r,s,d,l,h,u,c,m,f,g,p,v,y,b,_,M,x){e.experimental("dojox.widget.ColorPicker");var w=function(e){return e};return t("dojox.widget.ColorPicker",p,{showRgb:!0,showHsv:!0,showHex:!0,webSafe:!0,animatePoint:!0,slideDuration:250,liveUpdate:!1,PICKER_HUE_H:150,PICKER_SAT_VAL_H:150,PICKER_SAT_VAL_W:150,PICKER_HUE_SELECTOR_H:8,PICKER_SAT_SELECTOR_H:10,PICKER_SAT_SELECTOR_W:10,value:"#ffffff",_underlay:require.toUrl("dojox/widget/ColorPicker/images/underlay.png"),_hueUnderlay:require.toUrl("dojox/widget/ColorPicker/images/hue.png"),_pickerPointer:require.toUrl("dojox/widget/ColorPicker/images/pickerPointer.png"),_huePickerPointer:require.toUrl("dojox/widget/ColorPicker/images/hueHandle.png"),_huePickerPointerAlly:require.toUrl("dojox/widget/ColorPicker/images/hueHandleA11y.png"),templateString:x,postMixInProperties:function(){h.contains(s.body(),"dijit_a11y")&&(this._huePickerPointer=this._huePickerPointerAlly),this._uId=f.getUniqueId(this.id),i.mixin(this,b.getLocalization("dojox.widget","ColorPicker")),i.mixin(this,b.getLocalization("dojo.cldr","number")),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),r("ie")<7&&(this.colorUnderlay.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this._underlay+"', sizingMethod='scale')",this.colorUnderlay.src=this._blankGif.toString()),this.showRgb||(this.rgbNode.style.visibility="hidden"),this.showHsv||(this.hsvNode.style.visibility="hidden"),this.showHex||(this.hexNode.style.visibility="hidden"),this.webSafe||(this.safePreviewNode.style.visibility="hidden")},startup:function(){this._started||(this._started=!0,this.set("value",this.value),this._mover=new m.boxConstrainedMoveable(this.cursorNode,{box:{t:-(this.PICKER_SAT_SELECTOR_H/2),l:-(this.PICKER_SAT_SELECTOR_W/2),w:this.PICKER_SAT_VAL_W,h:this.PICKER_SAT_VAL_H}}),this._hueMover=new m.boxConstrainedMoveable(this.hueCursorNode,{box:{t:-(this.PICKER_HUE_SELECTOR_H/2),l:0,w:0,h:this.PICKER_HUE_H}}),this._subs=[],this._subs.push(n.subscribe("/dnd/move/stop",i.hitch(this,"_clearTimer"))),this._subs.push(n.subscribe("/dnd/move/start",i.hitch(this,"_setTimer"))),this._keyListeners=[],this._connects.push(v.addKeyListener(this.hueCursorNode,{charOrCode:u.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateHueCursorNode),25,25)),this._connects.push(v.addKeyListener(this.hueCursorNode,{charOrCode:u.DOWN_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateHueCursorNode),25,25)),this._connects.push(v.addKeyListener(this.cursorNode,{charOrCode:u.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateCursorNode),25,25)),this._connects.push(v.addKeyListener(this.cursorNode,{charOrCode:u.DOWN_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateCursorNode),25,25)),this._connects.push(v.addKeyListener(this.cursorNode,{charOrCode:u.LEFT_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateCursorNode),25,25)),this._connects.push(v.addKeyListener(this.cursorNode,{charOrCode:u.RIGHT_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,i.hitch(this,this._updateCursorNode),25,25)))},_setValueAttr:function(e,t){this._started&&this.setColor(e,t)},setColor:function(e,t){e=y.fromString(e),this._updatePickerLocations(e),this._updateColorInputs(e),this._updateValue(e,t)},_setTimer:function(e){e.node!=this.cursorNode&&e.node!=this.hueCursorNode||(g.focus(e.node),l.setSelectable(this.domNode,!1),this._timer=setInterval(i.hitch(this,"_updateColor"),45))},_clearTimer:function(e){this._timer&&(clearInterval(this._timer),this._timer=null,this.onChange(this.value),l.setSelectable(this.domNode,!0))},_setHue:function(e){o.style(this.colorUnderlay,"backgroundColor",y.fromHsv(e,100,100).toHex())},_updateHueCursorNode:function(e,t,i){if(-1!==e){var a=o.style(this.hueCursorNode,"top"),n=this.PICKER_HUE_SELECTOR_H/2;a+=n;var r=!1;i.charOrCode==u.UP_ARROW?a>0&&(a-=1,r=!0):i.charOrCode==u.DOWN_ARROW&&a<this.PICKER_HUE_H&&(a+=1,r=!0),a-=n,r&&o.style(this.hueCursorNode,"top",a+"px")}else this._updateColor(!0)},_updateCursorNode:function(e,t,i){var a=this.PICKER_SAT_SELECTOR_H/2,n=this.PICKER_SAT_SELECTOR_W/2;if(-1!==e){var r=o.style(this.cursorNode,"top"),s=o.style(this.cursorNode,"left");r+=a,s+=n;var d=!1;i.charOrCode==u.UP_ARROW?r>0&&(r-=1,d=!0):i.charOrCode==u.DOWN_ARROW?r<this.PICKER_SAT_VAL_H&&(r+=1,d=!0):i.charOrCode==u.LEFT_ARROW?s>0&&(s-=1,d=!0):i.charOrCode==u.RIGHT_ARROW&&s<this.PICKER_SAT_VAL_W&&(s+=1,d=!0),d&&(r-=a,s-=n,o.style(this.cursorNode,"top",r+"px"),o.style(this.cursorNode,"left",s+"px"))}else this._updateColor(!0)},_updateColor:function(e){var t=this.PICKER_HUE_SELECTOR_H/2,i=this.PICKER_SAT_SELECTOR_H/2,a=this.PICKER_SAT_SELECTOR_W/2,n=o.style(this.hueCursorNode,"top")+t,r=o.style(this.cursorNode,"top")+i,s=o.style(this.cursorNode,"left")+a,d=Math.round(360-n/this.PICKER_HUE_H*360),l=y.fromHsv(d,s/this.PICKER_SAT_VAL_W*100,100-r/this.PICKER_SAT_VAL_H*100);this._updateColorInputs(l),this._updateValue(l,e),d!=this._hue&&this._setHue(d)},_colorInputChange:function(e){var t,i=!1;switch(e.target){case this.hexCode:t=y.fromString(e.target.value),i=!0;break;case this.Rval:case this.Gval:case this.Bval:t=y.fromArray([this.Rval.value,this.Gval.value,this.Bval.value]),i=!0;break;case this.Hval:case this.Sval:case this.Vval:t=y.fromHsv(this.Hval.value,this.Sval.value,this.Vval.value),i=!0}i&&(this._updatePickerLocations(t),this._updateColorInputs(t),this._updateValue(t,!0))},_updateValue:function(e,t){var i=e.toHex();this.value=this.valueNode.value=i,!t||this._timer&&!this.liveUpdate||this.onChange(i)},_updatePickerLocations:function(e){var t=this.PICKER_HUE_SELECTOR_H/2,i=this.PICKER_SAT_SELECTOR_H/2,a=this.PICKER_SAT_SELECTOR_W/2,n=e.toHsv(),r=Math.round(this.PICKER_HUE_H-n.h/360*this.PICKER_HUE_H)-t,s=Math.round(n.s/100*this.PICKER_SAT_VAL_W)-a,d=Math.round(this.PICKER_SAT_VAL_H-n.v/100*this.PICKER_SAT_VAL_H)-i;this.animatePoint?(c.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:r,left:0}).play(),c.slideTo({node:this.cursorNode,duration:this.slideDuration,top:d,left:s}).play()):(o.style(this.hueCursorNode,"top",r+"px"),o.style(this.cursorNode,{left:s+"px",top:d+"px"})),n.h!=this._hue&&this._setHue(n.h)},_updateColorInputs:function(e){var t=e.toHex();if(this.showRgb&&(this.Rval.value=e.r,this.Gval.value=e.g,this.Bval.value=e.b),this.showHsv){var i=e.toHsv();this.Hval.value=Math.round(i.h),this.Sval.value=Math.round(i.s),this.Vval.value=Math.round(i.v)}this.showHex&&(this.hexCode.value=t),this.previewNode.style.backgroundColor=t,this.webSafe&&(this.safePreviewNode.style.backgroundColor=w(t))},_setHuePoint:function(e){var t=this.PICKER_HUE_SELECTOR_H/2,a=e.layerY-t;this.animatePoint?c.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:a,left:0,onEnd:i.hitch(this,function(){this._updateColor(!1),g.focus(this.hueCursorNode)})}).play():(o.style(this.hueCursorNode,"top",a+"px"),this._updateColor(!1))},_setPoint:function(e){var t=this.PICKER_SAT_SELECTOR_H/2,a=this.PICKER_SAT_SELECTOR_W/2,n=e.layerY-t,r=e.layerX-a;e&&g.focus(e.target),this.animatePoint?c.slideTo({node:this.cursorNode,duration:this.slideDuration,top:n,left:r,onEnd:i.hitch(this,function(){this._updateColor(!0),g.focus(this.cursorNode)})}).play():(o.style(this.cursorNode,{left:r+"px",top:n+"px"}),this._updateColor(!1))},_handleKey:function(e){},focus:function(){this.focused||g.focus(this.focusNode)},_stopDrag:function(e){d.stop(e)},destroy:function(){this.inherited(arguments),a.forEach(this._subs,function(e){n.unsubscribe(e)}),delete this._subs}})});//# sourceMappingURL=ColorPicker.js.map