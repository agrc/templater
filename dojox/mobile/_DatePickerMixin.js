//>>built
define("dojox/mobile/_DatePickerMixin",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/date","dojo/date/locale","dojo/date/stamp"],function(e,t,i,o,r,n){var a={format:function(e){return r.format(e,{datePattern:this.pattern,selector:"date",locale:this.picker.lang})}},s=i.mixin({initLabels:function(){if(this.labels=[],this.labelFrom!==this.labelTo){var e,t,i=new Date(this.labelFrom,0,1);for(e=this.labelFrom,t=0;e<=this.labelTo;e++,t++)i.setFullYear(e),this.labels.push(this.format(i))}}},a),d=i.mixin({initLabels:function(){this.labels=[];for(var e=new Date(2e3,0,16),t=0;12>t;t++)e.setMonth(t),this.labels.push(this.format(e))}},a),l=i.mixin({initLabels:function(){this.labels=[];for(var e=new Date(2e3,0,1),t=1;31>=t;t++)e.setDate(t),this.labels.push(this.format(e))}},a);return t("dojox.mobile._DatePickerMixin",null,{yearPattern:"yyyy",monthPattern:"MMM",dayPattern:"d",initSlots:function(){var e=this.slotClasses,i=this.slotProps;e[0]=t(e[0],s),e[1]=t(e[1],d),e[2]=t(e[2],l),i[2].picker=i[1].picker=i[0].picker=this,i[0].pattern=this.yearPattern,i[1].pattern=this.monthPattern,i[2].pattern=this.dayPattern,this.reorderSlots()},reorderSlots:function(){if(!this.slotOrder.length){var t=r._parseInfo({locale:this.lang}).bundle["dateFormat-short"].toLowerCase().split(/[^ymd]+/,3);this.slotOrder=e.map(t,function(e){return{y:0,m:1,d:2}[e.charAt(0)]})}},reset:function(){var t=new Date,i=e.map(this.slots,function(e){return e.format(t)});this.set("colors",i),this._disableEndDaysOfMonth(),this.value?(this.set("value",this.value),this.value=null):this.values?(this.set("values",this.values),this.values=null):this.set("values",i)},_onYearSet:function(){var e=this.slots[0],t=e.get("value");e._previousValue&&t==e._previousValue||(this._disableEndDaysOfMonth(),e._previousValue=t,e._set("value",t),this.onYearSet())},onYearSet:function(){},_onMonthSet:function(){var e=this.slots[1],t=e.get("value");e._previousValue&&t==e._previousValue||(this._disableEndDaysOfMonth(),e._previousValue=t,e._set("value",t),this.onMonthSet())},onMonthSet:function(){},_onDaySet:function(){var e=this.slots[2],t=e.get("value");e._previousValue&&t==e._previousValue||this._disableEndDaysOfMonth()||(e._previousValue=t,e._set("value",t),this.onDaySet())},onDaySet:function(){},_disableEndDaysOfMonth:function(){var e=this.slots[0].pattern+"/"+this.slots[1].pattern,t=this.get("values"),i=r.parse(t[0]+"/"+t[1],{datePattern:e,selector:"date",locale:this.lang}),n=o.getDaysInMonth(i),a=!1;return n<t[2]&&(a=!0,this.slots[2]._spinToValue(n,!1)),this.disableValues(n),a},_getDateAttr:function(){var e=this.get("values"),t=this.slots,i=t[0].pattern+"/"+t[1].pattern+"/"+t[2].pattern;return r.parse(e[0]+"/"+e[1]+"/"+e[2],{datePattern:i,selector:"date",locale:this.lang})},_setValuesAttr:function(t){e.forEach(this.getSlots(),function(e,i){var o=t[i];if("number"==typeof o){var r=[1970,1,1];r.splice(i,1,o-0),o=e.format(new Date(r[0],r[1]-1,r[2]))}e.set("value",o)})},_setValueAttr:function(t){var i=n.fromISOString(t);this.set("values",e.map(this.slots,function(e){return e.format(i)}))},_getValueAttr:function(){return n.toISOString(this.get("date"),{selector:"date"})}})});//# sourceMappingURL=_DatePickerMixin.js.map