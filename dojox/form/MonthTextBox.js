//>>built
define("dojox/form/MonthTextBox",["dojo/_base/kernel","dojo/_base/lang","dojox/widget/MonthlyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(e,t,a,i,r,n){return e.experimental("dojox/form/DateTextBox"),n("dojox.form.MonthTextBox",r,{popupClass:a,selector:"date",postMixInProperties:function(){this.inherited(arguments),this.constraints.datePattern="MM"},format:function(e){return e||0===e?e.getMonth?e.getMonth()+1:Number(e)+1:1},parse:function(e,t){return Number(e)-1},serialize:function(e,t){return String(e)},validator:function(e){var t=Number(e),a=/(^-?\d\d*$)/.test(String(e));return""==e||null==e||a&&t>=1&&t<=12},_setValueAttr:function(e,t,a){e&&e.getMonth&&(e=e.getMonth()),i.prototype._setValueAttr.call(this,e,t,a)},openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=t.hitch(this,function(e){this.focus(),setTimeout(t.hitch(this,"closeDropDown"),1),i.prototype._setValueAttr.call(this,e,!0,e)})}})});//# sourceMappingURL=MonthTextBox.js.map