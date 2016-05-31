//>>built
define("dojox/date/islamic/Date",["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(e,t,a){var i=t("dojox.date.islamic.Date",null,{_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,_GREGORIAN_EPOCH:1721425.5,_ISLAMIC_EPOCH:1948439.5,constructor:function(){var e=arguments.length;if(e)if(1==e){var t=arguments[0];"number"==typeof t&&(t=new Date(t)),t instanceof Date?this.fromGregorian(t):""==t?this._date=new Date(""):(this._year=t._year,this._month=t._month,this._date=t._date,this._hours=t._hours,this._minutes=t._minutes,this._seconds=t._seconds,this._milliseconds=t._milliseconds)}else e>=3&&(this._year+=arguments[0],this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date)},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){return this._year},getDay:function(){return this.toGregorian().getDay()},getHours:function(){return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(e){if(e=parseInt(e),e>0&&e<=this.getDaysInIslamicMonth(this._month,this._year))this._date=e;else{var t;if(e>0){for(t=this.getDaysInIslamicMonth(this._month,this._year);e>t;e-=t,t=this.getDaysInIslamicMonth(this._month,this._year))this._month++,this._month>=12&&(this._year++,this._month-=12);this._date=e}else{for(t=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);0>=e;t=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,this._month<0&&(this._year--,this._month+=12),e+=t;this._date=e}}return this},setFullYear:function(e){this._year=+e},setMonth:function(e){this._year+=Math.floor(e/12),e>0?this._month=Math.floor(e%12):this._month=Math.floor((e%12+12)%12)},setHours:function(){var e=arguments.length,t=0;for(e>=1&&(t=parseInt(arguments[0])),e>=2&&(this._minutes=parseInt(arguments[1])),e>=3&&(this._seconds=parseInt(arguments[2])),4==e&&(this._milliseconds=parseInt(arguments[3]));t>=24;){this._date++;var a=this.getDaysInIslamicMonth(this._month,this._year);this._date>a&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=a),t-=24}this._hours=t},_addMinutes:function(e){return e+=this._minutes,this.setMinutes(e),this.setHours(this._hours+parseInt(e/60)),this},_addSeconds:function(e){return e+=this._seconds,this.setSeconds(e),this._addMinutes(parseInt(e/60)),this},_addMilliseconds:function(e){return e+=this._milliseconds,this.setMilliseconds(e),this._addSeconds(parseInt(e/1e3)),this},setMinutes:function(e){return this._minutes=e%60,this},setSeconds:function(e){return this._seconds=e%60,this},setMilliseconds:function(e){return this._milliseconds=e%1e3,this},toString:function(){if(isNaN(this._date))return"Invalidate Date";var e=new Date;return e.setHours(this._hours),e.setMinutes(this._minutes),e.setSeconds(this._seconds),e.setMilliseconds(this._milliseconds),this._month+" "+this._date+" "+this._year+" "+e.toTimeString()},toGregorian:function(){var e=this._year,t=this._month,i=this._date,r=i+Math.ceil(29.5*t)+354*(e-1)+Math.floor((3+11*e)/30)+this._ISLAMIC_EPOCH-1,o=Math.floor(r-.5)+.5,n=o-this._GREGORIAN_EPOCH,d=Math.floor(n/146097),l=this._mod(n,146097),s=Math.floor(l/36524),u=this._mod(l,36524),m=Math.floor(u/1461),c=this._mod(u,1461),h=Math.floor(c/365),f=400*d+100*s+4*m+h;4!=s&&4!=h&&f++;var y=this._GREGORIAN_EPOCH+365*(f-1)+Math.floor((f-1)/4)-Math.floor((f-1)/100)+Math.floor((f-1)/400),p=o-y,v=this._GREGORIAN_EPOCH-1+365*(f-1)+Math.floor((f-1)/4)-Math.floor((f-1)/100)+Math.floor((f-1)/400)+Math.floor(739/12+(a.isLeapYear(new Date(f,3,1))?-1:-2)+1),g=v>o?0:a.isLeapYear(new Date(f,3,1))?1:2,M=Math.floor((12*(p+g)+373)/367),b=this._GREGORIAN_EPOCH-1+365*(f-1)+Math.floor((f-1)/4)-Math.floor((f-1)/100)+Math.floor((f-1)/400)+Math.floor((367*M-362)/12+(2>=M?0:a.isLeapYear(new Date(f,M-1,1))?-1:-2)+1),w=o-b+1,_=new Date(f,M-1,w,this._hours,this._minutes,this._seconds,this._milliseconds);return _},fromGregorian:function(e){var t=new Date(e),i=t.getFullYear(),r=t.getMonth(),o=t.getDate(),n=this._GREGORIAN_EPOCH-1+365*(i-1)+Math.floor((i-1)/4)+-Math.floor((i-1)/100)+Math.floor((i-1)/400)+Math.floor((367*(r+1)-362)/12+(2>=r+1?0:a.isLeapYear(t)?-1:-2)+o);n=Math.floor(n)+.5;var d=n-this._ISLAMIC_EPOCH,l=Math.floor((30*d+10646)/10631),s=Math.ceil((d-29-this._yearStart(l))/29.5);s=Math.min(s,11);var u=Math.ceil(d-this._monthStart(l,s))+1;return this._date=u,this._month=s,this._year=l,this._hours=t.getHours(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),this._milliseconds=t.getMilliseconds(),this._day=t.getDay(),this},valueOf:function(){return this.toGregorian().valueOf()},_yearStart:function(e){return 354*(e-1)+Math.floor((3+11*e)/30)},_monthStart:function(e,t){return Math.ceil(29.5*t)+354*(e-1)+Math.floor((3+11*e)/30)},_civilLeapYear:function(e){return 11>(14+11*e)%30},getDaysInIslamicMonth:function(e,t){var a=0;return a=29+(e+1)%2,11==e&&this._civilLeapYear(t)&&a++,a},_mod:function(e,t){return e-t*Math.floor(e/t)}});return i.getDaysInIslamicMonth=function(e){return(new i).getDaysInIslamicMonth(e.getMonth(),e.getFullYear())},i});//# sourceMappingURL=Date.js.map