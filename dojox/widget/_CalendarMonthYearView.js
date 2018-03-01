//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarMonthYear.html":'<div class="dojoxCal-MY-labels" style="left: 0px;"\t\n\tdojoAttachPoint="myContainer" dojoAttachEvent="onclick: onClick">\n\t\t<table cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\n\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr class="dojoxCal-MY-G-Template">\n\t\t\t\t\t\t\t\t<td class="dojoxCal-MY-M-Template">\n\t\t\t\t\t\t\t\t\t\t<div class="dojoxCalendarMonthLabel"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class="dojoxCal-MY-M-Template">\n\t\t\t\t\t\t\t\t\t\t<div class="dojoxCalendarMonthLabel"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class="dojoxCal-MY-Y-Template">\n\t\t\t\t\t\t\t\t\t\t<div class="dojoxCalendarYearLabel"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class="dojoxCal-MY-Y-Template">\n\t\t\t\t\t\t\t\t\t\t<div class="dojoxCalendarYearLabel"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t </tr>\n\t\t\t\t\t\t <tr class="dojoxCal-MY-btns">\n\t\t\t\t\t\t \t <td class="dojoxCal-MY-btns" colspan="4">\n\t\t\t\t\t\t \t\t <span class="dijitReset dijitInline dijitButtonNode ok-btn" dojoAttachEvent="onclick: onOk" dojoAttachPoint="okBtn">\n\t\t\t\t\t\t \t \t \t <button\tclass="dijitReset dijitStretch dijitButtonContents">OK</button>\n\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t <span class="dijitReset dijitInline dijitButtonNode cancel-btn" dojoAttachEvent="onclick: onCancel" dojoAttachPoint="cancelBtn">\n\t\t\t\t\t\t \t \t\t <button\tclass="dijitReset dijitStretch dijitButtonContents">Cancel</button>\n\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t \t </td>\n\t\t\t\t\t\t </tr>\n\t\t\t\t</tbody>\n\t\t</table>\n</div>\n'}}),define("dojox/widget/_CalendarMonthYearView",["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/date/locale","dojo/text!./Calendar/CalendarMonthYear.html"],function(e,t,i,a,r,n,o,s,l,d){return e("dojox.widget._CalendarMonthYearView",[t,i],{templateString:d,datePart:"year",displayedYears:10,useHeader:!1,postCreate:function(){this.cloneClass(".dojoxCal-MY-G-Template",5,".dojoxCal-MY-btns"),this.monthContainer=this.yearContainer=this.myContainer;var e="dojoxCalendarYearLabel",t="dojoxCalendarDecrease",i="dojoxCalendarIncrease";a("."+e,this.myContainer).forEach(function(a,n){var o=i;switch(n){case 0:o=t;case 1:r.remove(a,e),r.add(a,o)}}),this._decBtn=a("."+t,this.myContainer)[0],this._incBtn=a("."+i,this.myContainer)[0],a(".dojoxCal-MY-M-Template",this.domNode).filter(function(e){return 1==e.cellIndex}).addClass("dojoxCal-MY-M-last"),n.connect(this,"onBeforeDisplay",s.hitch(this,function(){this._cachedDate=new Date(this.get("value").getTime()),this._populateYears(this._cachedDate.getFullYear()),this._populateMonths(),this._updateSelectedMonth(),this._updateSelectedYear()})),n.connect(this,"_populateYears",s.hitch(this,function(){this._updateSelectedYear()})),n.connect(this,"_populateMonths",s.hitch(this,function(){this._updateSelectedMonth()})),this._cachedDate=this.get("value"),this._populateYears(),this._populateMonths(),this.addFx(".dojoxCalendarMonthLabel,.dojoxCalendarYearLabel ",this.myContainer)},_setValueAttr:function(e){e&&e.getFullYear()&&this._populateYears(e.getFullYear())},getHeader:function(){return null},_getMonthNames:function(e){return this._monthNames=this._monthNames||l.getNames("months",e,"standAlone",this.getLang()),this._monthNames},_populateMonths:function(){var e,t=this._getMonthNames("abbr"),i=this.get("value").getFullYear(),n=t[this.get("value").getMonth()],o=this.get("displayedYear");a(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(a,s){this._setText(a,t[s]),e=n===t[s]&&i===o,r.toggle(a.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],e)}));var l=this.get("constraints");if(l){(new Date).setFullYear(this._year);var d=-1,h=12;if(l.min){var u=l.min.getFullYear();u>this._year?d=12:u==this._year&&(d=l.min.getMonth())}if(l.max){var c=l.max.getFullYear();c<this._year?h=-1:c==this._year&&(h=l.max.getMonth())}a(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(e,t){r[t<d||t>h?"add":"remove"](e,"dijitCalendarDisabledDate")}))}},_populateYears:function(e){var t,i=this.get("constraints"),n=this.get("value").getFullYear(),o=e||n,l=o-Math.floor(this.displayedYears/2),d=i&&i.min?i.min.getFullYear():l-1e4;this._displayedYear=o;var h,u=a(".dojoxCalendarYearLabel",this.yearContainer),c=i&&i.max?i.max.getFullYear()-l:u.length,m="dijitCalendarDisabledDate";u.forEach(s.hitch(this,function(e,i){i<=c&&this._setText(e,l+i),h=l+i==n,r.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],h),r.toggle(e,m,i>c),t=l+i==n,r.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],t)})),this._incBtn&&r.toggle(this._incBtn,m,c<u.length),this._decBtn&&r.toggle(this._decBtn,m,d>=l),this.getHeader()&&this._setText(this.getHeader(),l+" - "+(l+11))},_updateSelectedYear:function(){this._year=String((this._cachedDate||this.get("value")).getFullYear()),this._updateSelectedNode(".dojoxCalendarYearLabel",s.hitch(this,function(e){return null!==this._year&&e.innerHTML==this._year}))},_updateSelectedMonth:function(){var e=(this._cachedDate||this.get("value")).getMonth();this._month=e,this._updateSelectedNode(".dojoxCalendarMonthLabel",function(t,i){return i==e})},_updateSelectedNode:function(e,t){var i="dijitCalendarSelectedDate";a(e,this.domNode).forEach(function(e,a,n){r.toggle(e.parentNode,i,t(e,a,n))});var n=a(".dojoxCal-MY-M-Template div",this.myContainer).filter(function(e){return r.contains(e.parentNode,i)})[0];if(n){var o=r.contains(n,"dijitCalendarDisabledDate");r.toggle(this.okBtn,"dijitDisabled",o)}},onClick:function(e){function t(t){return r.contains(e.target,t)}if(t("dijitCalendarDisabledDate"))return o.stop(e),!1;if(t("dojoxCalendarMonthLabel"))"dojoxCal-MY-M-Template",this._month=e.target.parentNode.cellIndex+2*e.target.parentNode.parentNode.rowIndex,this._cachedDate.setMonth(this._month),this._updateSelectedMonth();else{if(!t("dojoxCalendarYearLabel"))return t("dojoxCalendarDecrease")?(this._populateYears(this._displayedYear-10),!0):!t("dojoxCalendarIncrease")||(this._populateYears(this._displayedYear+10),!0);"dojoxCal-MY-Y-Template",this._year=Number(e.target.innerHTML),this._cachedDate.setYear(this._year),this._populateMonths(),this._updateSelectedYear()}return o.stop(e),!1},onOk:function(e){return o.stop(e),!r.contains(this.okBtn,"dijitDisabled")&&(this.onValueSelected(this._cachedDate),!1)},onCancel:function(e){return o.stop(e),this.onValueSelected(this.get("value")),!1}})});//# sourceMappingURL=_CalendarMonthYearView.js.map