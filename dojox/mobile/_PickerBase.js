//>>built
define("dojox/mobile/_PickerBase",["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_PickerBase"],function(e,t,i,a,r,o,n){var s=t(o("dojo-bidi")?"dojox.mobile.NonBidi_PickerBase":"dojox.mobile._PickerBase",[r,a,i],{slotClasses:[],slotProps:[],slotOrder:[],buildRendering:function(){this.inherited(arguments),this.slots=[];for(var e=0;e<this.slotClasses.length;e++){var t=this.slotOrder.length?this.slotOrder[e]:e,i=new this.slotClasses[t](this.slotProps[t]);this.addChild(i),this.slots[t]=i}},startup:function(){this._started||(this._duringStartup=!0,this.inherited(arguments),this.reset(),delete this._duringStartup)},getSlots:function(){return this.slots.length?this.slots:e.filter(this.getChildren(),function(e){return-1!==e.declaredClass.indexOf("Slot")})},_getValuesAttr:function(){return e.map(this.getSlots(),function(e){return e.get("value")})},_setValuesAttr:function(t){e.forEach(this.getSlots(),function(e,i){e.set("value",t[i])})},_setColorsAttr:function(t){e.forEach(this.getSlots(),function(e,i){e.setColor&&e.setColor(t[i])})},reset:function(){e.forEach(this.getSlots(),function(e){e.setInitialValue()})}});return o("dojo-bidi")?t("dojox.mobile._PickerBase",[s,n]):s});//# sourceMappingURL=_PickerBase.js.map