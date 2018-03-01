//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarDay.html":'<div class="dijitCalendarDayLabels" style="left: 0px;" dojoAttachPoint="dayContainer">\n\t<div dojoAttachPoint="header">\n\t\t<div dojoAttachPoint="monthAndYearHeader">\n\t\t\t<span dojoAttachPoint="monthLabelNode" class="dojoxCalendarMonthLabelNode"></span>\n\t\t\t<span dojoAttachPoint="headerComma" class="dojoxCalendarComma">,</span>\n\t\t\t<span dojoAttachPoint="yearLabelNode" class="dojoxCalendarDayYearLabel"></span>\n\t\t</div>\n\t</div>\n\t<table cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<td class="dijitCalendarDayLabelTemplate"><div class="dijitCalendarDayLabel"></div></td>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody dojoAttachEvent="onclick: _onDayClick">\n\t\t\t<tr class="dijitCalendarWeekTemplate">\n\t\t\t\t<td class="dojoxCalendarNextMonth dijitCalendarDateTemplate">\n\t\t\t\t\t<div class="dijitCalendarDateLabel"></div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n'}}),define("dojox/widget/_CalendarDayView",["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/event","dojo/date","dojo/date/locale","dojo/text!./Calendar/CalendarDay.html","dojo/cldr/supplemental","dojo/NodeList-dom"],function(e,t,i,a,o,n,r,s,l,d){return e("dojox.widget._CalendarDayView",[t,i],{templateString:l,datePart:"month",dayWidth:"narrow",postCreate:function(){this.cloneClass(".dijitCalendarDayLabelTemplate",6),this.cloneClass(".dijitCalendarDateTemplate",6),this.cloneClass(".dijitCalendarWeekTemplate",5);var e=s.getNames("days",this.dayWidth,"standAlone",this.getLang()),t=d.getFirstDayOfWeek(this.getLang());a(".dijitCalendarDayLabel",this.domNode).forEach(function(i,a){this._setText(i,e[(a+t)%7])},this)},onDisplay:function(){this._addedFx||(this._addedFx=!0,this.addFx(".dijitCalendarDateTemplate div",this.domNode))},_onDayClick:function(e){if(void 0!==e.target._date){var t=new Date(this.get("displayMonth")),i=e.target.parentNode,a="dijitCalendar",s=o.contains(i,a+"PreviousMonth")?-1:o.contains(i,a+"NextMonth")?1:0;if(s&&(t=r.add(t,"month",s)),t.setDate(e.target._date),this.isDisabledDate(t))return void n.stop(e);this.parent._onDateSelected(t)}},_setValueAttr:function(e){this._populateDays()},_populateDays:function(){var e=new Date(this.get("displayMonth"));e.setDate(1);var t=e.getDay(),i=r.getDaysInMonth(e),o=r.getDaysInMonth(r.add(e,"month",-1)),n=new Date,l=this.get("value"),c=d.getFirstDayOfWeek(this.getLang());c>t&&(c-=7);var h=r.compare,u=".dijitCalendarDateTemplate",m="dijitCalendarSelectedDate",f=this._lastDate,g=null==f||f.getMonth()!=e.getMonth()||f.getFullYear()!=e.getFullYear();if(this._lastDate=e,!g)return void a(u,this.domNode).removeClass(m).filter(function(e){return e.className.indexOf("dijitCalendarCurrent")>-1&&e._date==l.getDate()}).addClass(m);a(u,this.domNode).forEach(function(s,d){d+=c;var u,f=new Date(e),g="dijitCalendar",p=0;d<t?(u=o-t+d+1,p=-1,g+="Previous"):d>=t+i?(u=d-t-i+1,p=1,g+="Next"):(u=d-t+1,g+="Current"),p&&(f=r.add(f,"month",p)),f.setDate(u),h(f,n,"date")||(g="dijitCalendarCurrentDate "+g),h(f,l,"date")||h(f,l,"month")||h(f,l,"year")||(g=m+" "+g),this.isDisabledDate(f,this.getLang())&&(g=" dijitCalendarDisabledDate "+g);var y=this.getClassForDate(f,this.getLang());y&&(g=y+" "+g),s.className=g+"Month dijitCalendarDateTemplate",s.dijitDateValue=f.valueOf();var v=a(".dijitCalendarDateLabel",s)[0];this._setText(v,f.getDate()),v._date=v.parentNode._date=f.getDate()},this);var p=s.getNames("months","wide","standAlone",this.getLang());this._setText(this.monthLabelNode,p[e.getMonth()]),this._setText(this.yearLabelNode,e.getFullYear())}})});//# sourceMappingURL=_CalendarDayView.js.map