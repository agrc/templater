//>>built
define("dojox/form/DayTextBox",["dojo/_base/kernel","dojo/_base/lang","dojox/widget/DailyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(e,t,i,r,a,n){return e.experimental("dojox/form/DayTextBox"),n("dojox.form.DayTextBox",a,{popupClass:i,parse:function(e){return e},format:function(e){return e.getDate?e.getDate():e},validator:function(e){var t=Number(e),i=/(^-?\d\d*$)/.test(String(e));return""==e||null==e||i&&t>=1&&31>=t},_setValueAttr:function(e,t,i){e&&e.getDate&&(e=e.getDate()),r.prototype._setValueAttr.call(this,e,t,i)},openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=t.hitch(this,function(e){this.focus(),setTimeout(t.hitch(this,"closeDropDown"),1),r.prototype._setValueAttr.call(this,String(e.getDate()),!0,String(e.getDate()))})}})});//# sourceMappingURL=DayTextBox.js.map