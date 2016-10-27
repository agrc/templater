//>>built
define("dojox/date/buddhist/Date",["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(e,t,i){var r=t("dojox.date.buddhist.Date",null,{_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,constructor:function(){var e=arguments.length;if(e)if(1==e){var t=arguments[0];"number"==typeof t&&(t=new Date(t)),t instanceof Date?this.fromGregorian(t):""==t?this._date=new Date(""):(this._year=t._year,this._month=t._month,this._date=t._date,this._hours=t._hours,this._minutes=t._minutes,this._seconds=t._seconds,this._milliseconds=t._milliseconds)}else e>=3&&(this._year+=arguments[0],this._month+=arguments[1],this._date+=arguments[2],this._month>11&&(this._month=0),this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date)},getDate:function(e){return parseInt(this._date)},getMonth:function(){return parseInt(this._month)},getFullYear:function(){return parseInt(this._year)},getHours:function(){return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(e){if(e=parseInt(e),e>0&&e<=this._getDaysInMonth(this._month,this._year))this._date=e;else{var t;if(e>0){for(t=this._getDaysInMonth(this._month,this._year);e>t;e-=t,t=this._getDaysInMonth(this._month,this._year))this._month++,this._month>=12&&(this._year++,this._month-=12);this._date=e}else{for(t=this._getDaysInMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);0>=e;t=this._getDaysInMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,this._month<0&&(this._year--,this._month+=12),e+=t;this._date=e}}return this},setFullYear:function(e,t,i){this._year=parseInt(e)},setMonth:function(e){for(this._year+=Math.floor(e/12),this._month=Math.floor(e%12);this._month<0;this._month=this._month+12);},setHours:function(){var e=arguments.length,t=0;for(e>=1&&(t=parseInt(arguments[0])),e>=2&&(this._minutes=parseInt(arguments[1])),e>=3&&(this._seconds=parseInt(arguments[2])),4==e&&(this._milliseconds=parseInt(arguments[3]));t>=24;){this._date++;var i=this._getDaysInMonth(this._month,this._year);this._date>i&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=i),t-=24}this._hours=t},_addMinutes:function(e){return e+=this._minutes,this.setMinutes(e),this.setHours(this._hours+parseInt(e/60)),this},_addSeconds:function(e){return e+=this._seconds,this.setSeconds(e),this._addMinutes(parseInt(e/60)),this},_addMilliseconds:function(e){return e+=this._milliseconds,this.setMilliseconds(e),this._addSeconds(parseInt(e/1e3)),this},setMinutes:function(e){return this._minutes=e%60,this},setSeconds:function(e){return this._seconds=e%60,this},setMilliseconds:function(e){return this._milliseconds=e%1e3,this},toString:function(){return isNaN(this._date)?"Invalid Date":this._date+", "+this._month+", "+this._year+"  "+this._hours+":"+this._minutes+":"+this._seconds},_getDaysInMonth:function(e,t){return i.getDaysInMonth(new Date(t-543,e))},fromGregorian:function(e){var t=new Date(e);return this._date=t.getDate(),this._month=t.getMonth(),this._year=t.getFullYear()+543,this._hours=t.getHours(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),this._milliseconds=t.getMilliseconds(),this._day=t.getDay(),this},toGregorian:function(){return new Date(this._year-543,this._month,this._date,this._hours,this._minutes,this._seconds,this._milliseconds)},getDay:function(){return this.toGregorian().getDay()}});return r.prototype.valueOf=function(){return this.toGregorian().valueOf()},r});//# sourceMappingURL=Date.js.map