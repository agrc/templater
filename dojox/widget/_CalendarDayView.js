//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarDay.html":'<div class="dijitCalendarDayLabels" style="left: 0px;" dojoAttachPoint="dayContainer">\n	<div dojoAttachPoint="header">\n		<div dojoAttachPoint="monthAndYearHeader">\n			<span dojoAttachPoint="monthLabelNode" class="dojoxCalendarMonthLabelNode"></span>\n			<span dojoAttachPoint="headerComma" class="dojoxCalendarComma">,</span>\n			<span dojoAttachPoint="yearLabelNode" class="dojoxCalendarDayYearLabel"></span>\n		</div>\n	</div>\n	<table cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\n		<thead>\n			<tr>\n				<td class="dijitCalendarDayLabelTemplate"><div class="dijitCalendarDayLabel"></div></td>\n			</tr>\n		</thead>\n		<tbody dojoAttachEvent="onclick: _onDayClick">\n			<tr class="dijitCalendarWeekTemplate">\n				<td class="dojoxCalendarNextMonth dijitCalendarDateTemplate">\n					<div class="dijitCalendarDateLabel"></div>\n				</td>\n			</tr>\n		</tbody>\n	</table>\n</div>\n'}}),define("dojox/widget/_CalendarDayView",["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/event","dojo/date","dojo/date/locale","dojo/text!./Calendar/CalendarDay.html","dojo/cldr/supplemental","dojo/NodeList-dom"],function(e,t,i,a,o,n,r,s,l,d){return e("dojox.widget._CalendarDayView",[t,i],{templateString:l,datePart:"month",dayWidth:"narrow",postCreate:function(){this.cloneClass(".dijitCalendarDayLabelTemplate",6),this.cloneClass(".dijitCalendarDateTemplate",6),this.cloneClass(".dijitCalendarWeekTemplate",5);var e=s.getNames("days",this.dayWidth,"standAlone",this.getLang()),t=d.getFirstDayOfWeek(this.getLang());a(".dijitCalendarDayLabel",this.domNode).forEach(function(i,a){this._setText(i,e[(a+t)%7])},this)},onDisplay:function(){this._addedFx||(this._addedFx=!0,this.addFx(".dijitCalendarDateTemplate div",this.domNode))},_onDayClick:function(e){if("undefined"!=typeof e.target._date){var t=new Date(this.get("displayMonth")),i=e.target.parentNode,a="dijitCalendar",s=o.contains(i,a+"PreviousMonth")?-1:o.contains(i,a+"NextMonth")?1:0;return s&&(t=r.add(t,"month",s)),t.setDate(e.target._date),this.isDisabledDate(t)?void n.stop(e):void this.parent._onDateSelected(t)}},_setValueAttr:function(e){this._populateDays()},_populateDays:function(){var e=new Date(this.get("displayMonth"));e.setDate(1);var t=e.getDay(),i=r.getDaysInMonth(e),o=r.getDaysInMonth(r.add(e,"month",-1)),n=new Date,l=this.get("value"),h=d.getFirstDayOfWeek(this.getLang());h>t&&(h-=7);var u=r.compare,c=".dijitCalendarDateTemplate",m="dijitCalendarSelectedDate",f=this._lastDate,g=null==f||f.getMonth()!=e.getMonth()||f.getFullYear()!=e.getFullYear();if(this._lastDate=e,!g)return void a(c,this.domNode).removeClass(m).filter(function(e){return e.className.indexOf("dijitCalendarCurrent")>-1&&e._date==l.getDate()}).addClass(m);a(c,this.domNode).forEach(function(s,d){d+=h;var c,f=new Date(e),g="dijitCalendar",p=0;t>d?(c=o-t+d+1,p=-1,g+="Previous"):d>=t+i?(c=d-t-i+1,p=1,g+="Next"):(c=d-t+1,g+="Current"),p&&(f=r.add(f,"month",p)),f.setDate(c),u(f,n,"date")||(g="dijitCalendarCurrentDate "+g),u(f,l,"date")||u(f,l,"month")||u(f,l,"year")||(g=m+" "+g),this.isDisabledDate(f,this.getLang())&&(g=" dijitCalendarDisabledDate "+g);var y=this.getClassForDate(f,this.getLang());y&&(g=y+" "+g),s.className=g+"Month dijitCalendarDateTemplate",s.dijitDateValue=f.valueOf();var v=a(".dijitCalendarDateLabel",s)[0];this._setText(v,f.getDate()),v._date=v.parentNode._date=f.getDate()},this);var p=s.getNames("months","wide","standAlone",this.getLang());this._setText(this.monthLabelNode,p[e.getMonth()]),this._setText(this.yearLabelNode,e.getFullYear())}})});//# sourceMappingURL=_CalendarDayView.js.map