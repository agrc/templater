//>>built
require({cache:{"url:dijit/templates/Calendar.html":'<table cellspacing="0" cellpadding="0" class="dijitCalendarContainer" role="grid" aria-labelledby="${id}_mddb ${id}_year" data-dojo-attach-point="gridNode">\n	<thead>\n		<tr class="dijitReset dijitCalendarMonthContainer" valign="top">\n			<th class=\'dijitReset dijitCalendarArrow\' data-dojo-attach-point="decrementMonth" scope="col">\n				<span class="dijitInline dijitCalendarIncrementControl dijitCalendarDecrease" role="presentation"></span>\n				<span data-dojo-attach-point="decreaseArrowNode" class="dijitA11ySideArrow">-</span>\n			</th>\n			<th class=\'dijitReset\' colspan="5" scope="col">\n				<div data-dojo-attach-point="monthNode">\n				</div>\n			</th>\n			<th class=\'dijitReset dijitCalendarArrow\' scope="col" data-dojo-attach-point="incrementMonth">\n				<span class="dijitInline dijitCalendarIncrementControl dijitCalendarIncrease" role="presentation"></span>\n				<span data-dojo-attach-point="increaseArrowNode" class="dijitA11ySideArrow">+</span>\n			</th>\n		</tr>\n		<tr role="row">\n			${!dayCellsHtml}\n		</tr>\n	</thead>\n	<tbody data-dojo-attach-point="dateRowsNode" data-dojo-attach-event="ondijitclick: _onDayClick" class="dijitReset dijitCalendarBodyContainer">\n			${!dateRowsHtml}\n	</tbody>\n	<tfoot class="dijitReset dijitCalendarYearContainer">\n		<tr>\n			<td class=\'dijitReset\' valign="top" colspan="7" role="presentation">\n				<div class="dijitCalendarYearLabel">\n					<span data-dojo-attach-point="previousYearLabelNode" class="dijitInline dijitCalendarPreviousYear" role="button"></span>\n					<span data-dojo-attach-point="currentYearLabelNode" class="dijitInline dijitCalendarSelectedYear" role="button" id="${id}_year"></span>\n					<span data-dojo-attach-point="nextYearLabelNode" class="dijitInline dijitCalendarNextYear" role="button"></span>\n				</div>\n			</td>\n		</tr>\n	</tfoot>\n</table>\n'}}),define("dijit/CalendarLite",["dojo/_base/array","dojo/_base/declare","dojo/cldr/supplemental","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/dom","dojo/dom-class","dojo/_base/lang","dojo/on","dojo/sniff","dojo/string","./_WidgetBase","./_TemplatedMixin","dojo/text!./templates/Calendar.html","./a11yclick","./hccss"],function(t,e,a,i,n,s,d,o,r,l,c,h,u,j,p){var g=e("dijit.CalendarLite",[u,j],{templateString:p,dowTemplateString:'<th class="dijitReset dijitCalendarDayLabelTemplate" role="columnheader" scope="col"><span class="dijitCalendarDayLabel">${d}</span></th>',dateTemplateString:'<td class="dijitReset" role="gridcell" data-dojo-attach-point="dateCells"><span class="dijitCalendarDateLabel" data-dojo-attach-point="dateLabels"></span></td>',weekTemplateString:'<tr class="dijitReset dijitCalendarWeekTemplate" role="row">${d}${d}${d}${d}${d}${d}${d}</tr>',value:new Date(""),datePackage:"",dayWidth:"narrow",tabIndex:"0",currentFocus:new Date,_setSummaryAttr:"gridNode",baseClass:"dijitCalendar dijitCalendarLite",_isValidDate:function(t){return t&&!isNaN(t)&&"object"==typeof t&&t.toString()!=this.constructor.prototype.value.toString()},_getValueAttr:function(){var t=this._get("value");if(t&&!isNaN(t)){var e=new this.dateClassObj(t);return e.setHours(0,0,0,0),e.getDate()<t.getDate()&&(e=this.dateModule.add(e,"hour",1)),e}return null},_setValueAttr:function(t,e){"string"==typeof t&&(t=s.fromISOString(t)),t=this._patchDate(t),this._isValidDate(t)&&!this.isDisabledDate(t,this.lang)?(this._set("value",t),this.set("currentFocus",t),this._markSelectedDates([t]),this._created&&(e||"undefined"==typeof e)&&this.onChange(this.get("value"))):(this._set("value",null),this._markSelectedDates([]))},_patchDate:function(t){return t&&(t=new this.dateClassObj(t),t.setHours(1,0,0,0)),t},_setText:function(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(t.ownerDocument.createTextNode(e))},_populateGrid:function(){var e=new this.dateClassObj(this.currentFocus);e.setDate(1),e=this._patchDate(e);var i=e.getDay(),n=this.dateModule.getDaysInMonth(e),s=this.dateModule.getDaysInMonth(this.dateModule.add(e,"month",-1)),d=new this.dateClassObj,o=a.getFirstDayOfWeek(this.lang);if(o>i&&(o-=7),!this.summary){var r=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,e);this.gridNode.setAttribute("summary",r[e.getMonth()])}this._date2cell={},t.forEach(this.dateCells,function(t,a){var r,l=a+o,c=new this.dateClassObj(e),h="dijitCalendar",u=0;i>l?(r=s-i+l+1,u=-1,h+="Previous"):l>=i+n?(r=l-i-n+1,u=1,h+="Next"):(r=l-i+1,h+="Current"),u&&(c=this.dateModule.add(c,"month",u)),c.setDate(r),this.dateModule.compare(c,d,"date")||(h="dijitCalendarCurrentDate "+h),this.isDisabledDate(c,this.lang)?(h="dijitCalendarDisabledDate "+h,t.setAttribute("aria-disabled","true")):(h="dijitCalendarEnabledDate "+h,t.removeAttribute("aria-disabled"),t.setAttribute("aria-selected","false"));var j=this.getClassForDate(c,this.lang);j&&(h=j+" "+h),t.className=h+"Month dijitCalendarDateTemplate";var p=c.valueOf();this._date2cell[p]=t,t.dijitDateValue=p,this._setText(this.dateLabels[a],c.getDateLocalized?c.getDateLocalized(this.lang):c.getDate())},this)},_populateControls:function(){var e=new this.dateClassObj(this.currentFocus);e.setDate(1),this.monthWidget.set("month",e);var a=e.getFullYear()-1,i=new this.dateClassObj;t.forEach(["previous","current","next"],function(t){i.setFullYear(a++),this._setText(this[t+"YearLabelNode"],this.dateLocaleModule.format(i,{selector:"year",locale:this.lang}))},this)},goToToday:function(){this.set("value",new this.dateClassObj)},constructor:function(t){this.dateModule=t.datePackage?r.getObject(t.datePackage,!1):i,this.dateClassObj=this.dateModule.Date||Date,this.dateLocaleModule=t.datePackage?r.getObject(t.datePackage+".locale",!1):n},_createMonthWidget:function(){return g._MonthWidget({id:this.id+"_mddb",lang:this.lang,dateLocaleModule:this.dateLocaleModule},this.monthNode)},buildRendering:function(){var t=this.dowTemplateString,e=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang),i=a.getFirstDayOfWeek(this.lang);this.dayCellsHtml=h.substitute([t,t,t,t,t,t,t].join(""),{d:""},function(){return e[i++%7]});var n=h.substitute(this.weekTemplateString,{d:this.dateTemplateString});this.dateRowsHtml=[n,n,n,n,n,n].join(""),this.dateCells=[],this.dateLabels=[],this.inherited(arguments),d.setSelectable(this.domNode,!1);var s=new this.dateClassObj(this.currentFocus);this.monthWidget=this._createMonthWidget(),this.set("currentFocus",s,!1)},postCreate:function(){this.inherited(arguments),this._connectControls()},_connectControls:function(){var t=r.hitch(this,function(t,e,a){return this[t].dojoClick=!0,l(this[t],"click",r.hitch(this,function(){this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus,e,a))}))});this.own(t("incrementMonth","month",1),t("decrementMonth","month",-1),t("nextYearLabelNode","year",1),t("previousYearLabelNode","year",-1))},_setCurrentFocusAttr:function(t,e){var a=this.currentFocus,i=this._getNodeByDate(a);t=this._patchDate(t),this._set("currentFocus",t),this._date2cell&&0==this.dateModule.difference(a,t,"month")||(this._populateGrid(),this._populateControls(),this._markSelectedDates([this.value]));var n=this._getNodeByDate(t);n.setAttribute("tabIndex",this.tabIndex),(this.focused||e)&&n.focus(),i&&i!=n&&(c("webkit")?i.setAttribute("tabIndex","-1"):i.removeAttribute("tabIndex"))},focus:function(){this._setCurrentFocusAttr(this.currentFocus,!0)},_onDayClick:function(t){t.stopPropagation(),t.preventDefault();for(var e=t.target;e&&!e.dijitDateValue;e=e.parentNode);e&&!o.contains(e,"dijitCalendarDisabledDate")&&this.set("value",e.dijitDateValue)},_getNodeByDate:function(t){return t=this._patchDate(t),t&&this._date2cell?this._date2cell[t.valueOf()]:null},_markSelectedDates:function(e){function a(t,e){o.toggle(e,"dijitCalendarSelectedDate",t),e.setAttribute("aria-selected",t?"true":"false")}t.forEach(this._selectedCells||[],r.partial(a,!1)),this._selectedCells=t.filter(t.map(e,this._getNodeByDate,this),function(t){return t}),t.forEach(this._selectedCells,r.partial(a,!0))},onChange:function(){},isDisabledDate:function(){},getClassForDate:function(){}});return g._MonthWidget=e("dijit.CalendarLite._MonthWidget",u,{_setMonthAttr:function(e){var a=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,e),i=6==c("ie")?"":"<div class='dijitSpacer'>"+t.map(a,function(t){return"<div>"+t+"</div>"}).join("")+"</div>";this.domNode.innerHTML=i+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+a[e.getMonth()]+"</div>"}}),g});//# sourceMappingURL=CalendarLite.js.map