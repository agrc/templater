//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarMonthYear.html":'<div class="dojoxCal-MY-labels" style="left: 0px;"	\n	dojoAttachPoint="myContainer" dojoAttachEvent="onclick: onClick">\n		<table cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\n				<tbody>\n						<tr class="dojoxCal-MY-G-Template">\n								<td class="dojoxCal-MY-M-Template">\n										<div class="dojoxCalendarMonthLabel"></div>\n								</td>\n								<td class="dojoxCal-MY-M-Template">\n										<div class="dojoxCalendarMonthLabel"></div>\n								</td>\n								<td class="dojoxCal-MY-Y-Template">\n										<div class="dojoxCalendarYearLabel"></div>\n								</td>\n								<td class="dojoxCal-MY-Y-Template">\n										<div class="dojoxCalendarYearLabel"></div>\n								</td>\n						 </tr>\n						 <tr class="dojoxCal-MY-btns">\n						 	 <td class="dojoxCal-MY-btns" colspan="4">\n						 		 <span class="dijitReset dijitInline dijitButtonNode ok-btn" dojoAttachEvent="onclick: onOk" dojoAttachPoint="okBtn">\n						 	 	 	 <button	class="dijitReset dijitStretch dijitButtonContents">OK</button>\n								 </span>\n								 <span class="dijitReset dijitInline dijitButtonNode cancel-btn" dojoAttachEvent="onclick: onCancel" dojoAttachPoint="cancelBtn">\n						 	 		 <button	class="dijitReset dijitStretch dijitButtonContents">Cancel</button>\n								 </span>\n						 	 </td>\n						 </tr>\n				</tbody>\n		</table>\n</div>\n'}}),define("dojox/widget/_CalendarMonthYearView",["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/date/locale","dojo/text!./Calendar/CalendarMonthYear.html"],function(e,t,i,a,o,r,n,s,l,d){return e("dojox.widget._CalendarMonthYearView",[t,i],{templateString:d,datePart:"year",displayedYears:10,useHeader:!1,postCreate:function(){this.cloneClass(".dojoxCal-MY-G-Template",5,".dojoxCal-MY-btns"),this.monthContainer=this.yearContainer=this.myContainer;var e="dojoxCalendarYearLabel",t="dojoxCalendarDecrease",i="dojoxCalendarIncrease";a("."+e,this.myContainer).forEach(function(a,r){var n=i;switch(r){case 0:n=t;case 1:o.remove(a,e),o.add(a,n)}}),this._decBtn=a("."+t,this.myContainer)[0],this._incBtn=a("."+i,this.myContainer)[0],a(".dojoxCal-MY-M-Template",this.domNode).filter(function(e){return 1==e.cellIndex}).addClass("dojoxCal-MY-M-last"),r.connect(this,"onBeforeDisplay",s.hitch(this,function(){this._cachedDate=new Date(this.get("value").getTime()),this._populateYears(this._cachedDate.getFullYear()),this._populateMonths(),this._updateSelectedMonth(),this._updateSelectedYear()})),r.connect(this,"_populateYears",s.hitch(this,function(){this._updateSelectedYear()})),r.connect(this,"_populateMonths",s.hitch(this,function(){this._updateSelectedMonth()})),this._cachedDate=this.get("value"),this._populateYears(),this._populateMonths(),this.addFx(".dojoxCalendarMonthLabel,.dojoxCalendarYearLabel ",this.myContainer)},_setValueAttr:function(e){e&&e.getFullYear()&&this._populateYears(e.getFullYear())},getHeader:function(){return null},_getMonthNames:function(e){return this._monthNames=this._monthNames||l.getNames("months",e,"standAlone",this.getLang()),this._monthNames},_populateMonths:function(){var e,t=this._getMonthNames("abbr"),i=this.get("value").getFullYear(),r=t[this.get("value").getMonth()],n=this.get("displayedYear");a(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(a,s){this._setText(a,t[s]),e=r===t[s]&&i===n,o.toggle(a.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],e)}));var l=this.get("constraints");if(l){var d=new Date;d.setFullYear(this._year);var h=-1,c=12;if(l.min){var u=l.min.getFullYear();u>this._year?h=12:u==this._year&&(h=l.min.getMonth())}if(l.max){var m=l.max.getFullYear();m<this._year?c=-1:m==this._year&&(c=l.max.getMonth())}a(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(e,t){o[h>t||t>c?"add":"remove"](e,"dijitCalendarDisabledDate")}))}},_populateYears:function(e){var t,i=this.get("constraints"),r=this.get("value").getFullYear(),n=e||r,l=n-Math.floor(this.displayedYears/2),d=i&&i.min?i.min.getFullYear():l-1e4;this._displayedYear=n;var h,c=a(".dojoxCalendarYearLabel",this.yearContainer),u=i&&i.max?i.max.getFullYear()-l:c.length,m="dijitCalendarDisabledDate";c.forEach(s.hitch(this,function(e,i){u>=i&&this._setText(e,l+i),h=l+i==r,o.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],h),o.toggle(e,m,i>u),t=l+i==r,o.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],t)})),this._incBtn&&o.toggle(this._incBtn,m,u<c.length),this._decBtn&&o.toggle(this._decBtn,m,d>=l);var f=this.getHeader();f&&this._setText(this.getHeader(),l+" - "+(l+11))},_updateSelectedYear:function(){this._year=String((this._cachedDate||this.get("value")).getFullYear()),this._updateSelectedNode(".dojoxCalendarYearLabel",s.hitch(this,function(e){return null!==this._year&&e.innerHTML==this._year}))},_updateSelectedMonth:function(){var e=(this._cachedDate||this.get("value")).getMonth();this._month=e,this._updateSelectedNode(".dojoxCalendarMonthLabel",function(t,i){return i==e})},_updateSelectedNode:function(e,t){var i="dijitCalendarSelectedDate";a(e,this.domNode).forEach(function(e,a,r){o.toggle(e.parentNode,i,t(e,a,r))});var r=a(".dojoxCal-MY-M-Template div",this.myContainer).filter(function(e){return o.contains(e.parentNode,i)})[0];if(r){var n=o.contains(r,"dijitCalendarDisabledDate");o.toggle(this.okBtn,"dijitDisabled",n)}},onClick:function(e){function t(t){return o.contains(e.target,t)}var i;if(t("dijitCalendarDisabledDate"))return n.stop(e),!1;if(t("dojoxCalendarMonthLabel"))i="dojoxCal-MY-M-Template",this._month=e.target.parentNode.cellIndex+2*e.target.parentNode.parentNode.rowIndex,this._cachedDate.setMonth(this._month),this._updateSelectedMonth();else{if(!t("dojoxCalendarYearLabel"))return t("dojoxCalendarDecrease")?(this._populateYears(this._displayedYear-10),!0):t("dojoxCalendarIncrease")?(this._populateYears(this._displayedYear+10),!0):!0;i="dojoxCal-MY-Y-Template",this._year=Number(e.target.innerHTML),this._cachedDate.setYear(this._year),this._populateMonths(),this._updateSelectedYear()}return n.stop(e),!1},onOk:function(e){return n.stop(e),o.contains(this.okBtn,"dijitDisabled")?!1:(this.onValueSelected(this._cachedDate),!1)},onCancel:function(e){return n.stop(e),this.onValueSelected(this.get("value")),!1}})});//# sourceMappingURL=_CalendarMonthYearView.js.map