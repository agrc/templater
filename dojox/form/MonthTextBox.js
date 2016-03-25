//>>built
define("dojox/form/MonthTextBox",["dojo/_base/kernel","dojo/_base/lang","dojox/widget/MonthlyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(e,t,i,a,r,o){return e.experimental("dojox/form/DateTextBox"),o("dojox.form.MonthTextBox",r,{popupClass:i,selector:"date",postMixInProperties:function(){this.inherited(arguments),this.constraints.datePattern="MM"},format:function(e){return e||0===e?e.getMonth?e.getMonth()+1:Number(e)+1:1},parse:function(e,t){return Number(e)-1},serialize:function(e,t){return String(e)},validator:function(e){var t=Number(e),i=/(^-?\d\d*$)/.test(String(e));return""==e||null==e||i&&t>=1&&12>=t},_setValueAttr:function(e,t,i){e&&e.getMonth&&(e=e.getMonth()),a.prototype._setValueAttr.call(this,e,t,i)},openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=t.hitch(this,function(e){this.focus(),setTimeout(t.hitch(this,"closeDropDown"),1),a.prototype._setValueAttr.call(this,e,!0,e)})}})});//# sourceMappingURL=MonthTextBox.js.map