//>>built
define("dojox/mobile/SpinWheelDatePicker",["dojo/_base/array","dojo/_base/declare","dojo/dom-class","./_DatePickerMixin","./SpinWheel","./SpinWheelSlot"],function(e,t,i,a,n,o){return t("dojox.mobile.SpinWheelDatePicker",[n,a],{slotClasses:[o,o,o],slotProps:[{labelFrom:1970,labelTo:2038},{},{}],buildRendering:function(){this.initSlots(),this.inherited(arguments),i.add(this.domNode,"mblSpinWheelDatePicker"),this._conn=[this.connect(this.slots[0],"onFlickAnimationEnd","_onYearSet"),this.connect(this.slots[1],"onFlickAnimationEnd","_onMonthSet"),this.connect(this.slots[2],"onFlickAnimationEnd","_onDaySet")]},disableValues:function(t){e.forEach(this.slots[2].panelNodes,function(e){for(var a=27;31>a;a++)i.toggle(e.childNodes[a],"mblSpinWheelSlotLabelGray",a>=t)})}})});//# sourceMappingURL=SpinWheelDatePicker.js.map