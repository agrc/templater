//>>built
define("dojox/date/umalqura/Date",["dojo/_base/lang","dojo/_base/declare","dojo/date","../islamic/Date"],function(e,t,i){var a=t("dojox.date.umalqura.Date",null,{_MONTH_LENGTH:["101010101010","110101010100","111011001001","011011010100","011011101010","001101101100","101010101101","010101010101","011010101001","011110010010","101110101001","010111010100","101011011010","010101011100","110100101101","011010010101","011101001010","101101010100","101101101010","010110101101","010010101110","101001001111","010100010111","011010001011","011010100101","101011010101","001011010110","100101011011","010010011101","101001001101","110100100110","110110010101","010110101100","100110110110","001010111010","101001011011","010100101011","101010010101","011011001010","101011101001","001011110100","100101110110","001010110110","100101010110","101011001010","101110100100","101111010010","010111011001","001011011100","100101101101","010101001101","101010100101","101101010010","101110100101","010110110100","100110110110","010101010111","001010010111","010101001011","011010100011","011101010010","101101100101","010101101010","101010101011","010100101011","110010010101","110101001010","110110100101","010111001010","101011010110","100101010111","010010101011","100101001011","101010100101","101101010010","101101101010","010101110101","001001110110","100010110111","010001011011","010101010101","010110101001","010110110100","100111011010","010011011101","001001101110","100100110110","101010101010","110101010100","110110110010","010111010101","001011011010","100101011011","010010101011","101001010101","101101001001","101101100100","101101110001","010110110100","101010110101","101001010101","110100100101","111010010010","111011001001","011011010100","101011101001","100101101011","010010101011","101010010011","110101001001","110110100100","110110110010","101010111001","010010111010","101001011011","010100101011","101010010101","101100101010","101101010101","010101011100","010010111101","001000111101","100100011101","101010010101","101101001010","101101011010","010101101101","001010110110","100100111011","010010011011","011001010101","011010101001","011101010100","101101101010","010101101100","101010101101","010101010101","101100101001","101110010010","101110101001","010111010100","101011011010","010101011010","101010101011","010110010101","011101001001","011101100100","101110101010","010110110101","001010110110","101001010110","111001001101","101100100101","101101010010","101101101010","010110101101","001010101110","100100101111","010010010111","011001001011","011010100101","011010101100","101011010110","010101011101","010010011101","101001001101","110100010110","110110010101","010110101010","010110110101","001011011010","100101011011","010010101101","010110010101","011011001010","011011100100","101011101010","010011110101","001010110110","100101010110","101010101010","101101010100","101111010010","010111011001","001011101010","100101101101","010010101101","101010010101","101101001010","101110100101","010110110010","100110110101","010011010110","101010010111","010101000111","011010010011","011101001001","101101010101","010101101010","101001101011","010100101011","101010001011","110101000110","110110100011","010111001010","101011010110","010011011011","001001101011","100101001011","101010100101","101101010010","101101101001","010101110101","000101110110","100010110111","001001011011","010100101011","010101100101","010110110100","100111011010","010011101101","000101101101","100010110110","101010100110","110101010010","110110101001","010111010100","101011011010","100101011011","010010101011","011001010011","011100101001","011101100010","101110101001","010110110010","101010110101","010101010101","101100100101","110110010010","111011001001","011011010010","101011101001","010101101011","010010101011","101001010101","110100101001","110101010100","110110101010","100110110101","010010111010","101000111011","010010011011","101001001101","101010101010","101011010101","001011011010","100101011101","010001011110","101000101110","110010011010","110101010101","011010110010","011010111001","010010111010","101001011101","010100101101","101010010101","101101010010","101110101000","101110110100","010110111001","001011011010","100101011010","101101001010","110110100100","111011010001","011011101000","101101101010","010101101101","010100110101","011010010101","110101001010","110110101000","110111010100","011011011010","010101011011","001010011101","011000101011","101100010101","101101001010","101110010101","010110101010","101010101110","100100101110","110010001111","010100100111","011010010101","011010101010","101011010110","010101011101","001010011101"],_hijriBegin:1300,_hijriEnd:1600,_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,constructor:function(){var e=arguments.length;if(e)if(1==e){var t=arguments[0];"number"==typeof t&&(t=new Date(t)),t instanceof Date?this.fromGregorian(t):""==t?this._date=new Date(""):(this._year=t._year,this._month=t._month,this._date=t._date,this._hours=t._hours,this._minutes=t._minutes,this._seconds=t._seconds,this._milliseconds=t._milliseconds)}else e>=3&&(this._year+=arguments[0],this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date)},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){return this._year},getDay:function(){return this.toGregorian().getDay()},getHours:function(){return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(e){if((e=parseInt(e))>0&&e<=this.getDaysInIslamicMonth(this._month,this._year))this._date=e;else{var t;if(e>0){for(t=this.getDaysInIslamicMonth(this._month,this._year);e>t;e-=t,t=this.getDaysInIslamicMonth(this._month,this._year))++this._month>=12&&(this._year++,this._month-=12);this._date=e}else{for(t=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);e<=0;t=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,this._month<0&&(this._year--,this._month+=12),e+=t;this._date=e}}return this},setFullYear:function(e){this._year=+e},setMonth:function(e){this._year+=Math.floor(e/12),this._month=e>0?Math.floor(e%12):Math.floor((e%12+12)%12)},setHours:function(){var e=arguments.length,t=0;for(e>=1&&(t=parseInt(arguments[0])),e>=2&&(this._minutes=parseInt(arguments[1])),e>=3&&(this._seconds=parseInt(arguments[2])),4==e&&(this._milliseconds=parseInt(arguments[3]));t>=24;){this._date++;var i=this.getDaysInIslamicMonth(this._month,this._year);this._date>i&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=i),t-=24}this._hours=t},_addMinutes:function(e){return e+=this._minutes,this.setMinutes(e),this.setHours(this._hours+parseInt(e/60)),this},_addSeconds:function(e){return e+=this._seconds,this.setSeconds(e),this._addMinutes(parseInt(e/60)),this},_addMilliseconds:function(e){return e+=this._milliseconds,this.setMilliseconds(e),this._addSeconds(parseInt(e/1e3)),this},setMinutes:function(e){for(;e>=60;){if(++this._hours>=24){this._date++,this._hours-=24;var t=this.getDaysInIslamicMonth(this._month,this._year);this._date>t&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=t)}e-=60}this._minutes=e},setSeconds:function(e){for(;e>=60;){if(++this._minutes>=60&&(this._hours++,this._minutes-=60,this._hours>=24)){this._date++,this._hours-=24;var t=this.getDaysInIslamicMonth(this._month,this._year);this._date>t&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=t)}e-=60}this._seconds=e},setMilliseconds:function(e){for(;e>=1e3;){if(++this.setSeconds>=60&&(this._minutes++,this.setSeconds-=60,this._minutes>=60&&(this._hours++,this._minutes-=60,this._hours>=24))){this._date++,this._hours-=24;var t=this.getDaysInIslamicMonth(this._month,this._year);this._date>t&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=t)}e-=1e3}this._milliseconds=e},toString:function(){var e=new Date;return e.setHours(this._hours),e.setMinutes(this._minutes),e.setSeconds(this._seconds),e.setMilliseconds(this._milliseconds),this._month+" "+this._date+" "+this._year+" "+e.toTimeString()},toGregorian:function(){var e=this._year,t=this._month,a=this._date,r=new Date,o=a-1,n=new Date(1882,10,12,this._hours,this._minutes,this._seconds,this._milliseconds);if(e>=this._hijriBegin&&e<=this._hijriEnd){for(var s=0;s<e-this._hijriBegin;s++)for(var d=0;d<12;d++)o+=parseInt(this._MONTH_LENGTH[s][d],10)+29;for(d=0;d<t;d++)o+=parseInt(this._MONTH_LENGTH[e-this._hijriBegin][d],10)+29;r=i.add(n,"day",o)}else{var l=new dojox.date.islamic.Date(this._year,this._month,this._date,this._hours,this._minutes,this._seconds,this._milliseconds);r=new Date(l.toGregorian())}return r},getDaysDiff:function(e,t){var i=Math.abs(e.getTime()-t.getTime());return Math.round(i/864e5)},fromGregorian:function(e){var t=new Date(e),i=new Date(1882,10,12,0,0,0,0),a=new Date(2174,10,25,23,59,59,999),r=this.getDaysDiff(t,i);if(t-i>=0&&t-a<=0)for(var o=1300,n=0;n<this._MONTH_LENGTH.length;n++,o++)for(var s=0;s<12;s++){var d=parseInt(this._MONTH_LENGTH[n][s],10)+29;if(r<=d)return this._date=r+1,this._date>d&&(this._date=1,s++),s>11&&(s=0,o++),this._month=s,this._year=o,this._hours=t.getHours(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),this._milliseconds=t.getMilliseconds(),this._day=t.getDay(),this;r=parseInt(r,10)-d}else{var l=new dojox.date.islamic.Date(t);this._date=l.getDate(),this._month=l.getMonth(),this._year=l.getFullYear(),this._hours=e.getHours(),this._minutes=e.getMinutes(),this._seconds=e.getSeconds(),this._milliseconds=e.getMilliseconds(),this._day=e.getDay()}return this},valueOf:function(){return this.toGregorian().valueOf()},_yearStart:function(e){return 354*(e-1)+Math.floor((3+11*e)/30)},_monthStart:function(e,t){return Math.ceil(29.5*t)+354*(e-1)+Math.floor((3+11*e)/30)},_civilLeapYear:function(e){return(14+11*e)%30<11},getDaysInIslamicMonth:function(e,t){if(t>=this._hijriBegin&&t<=this._hijriEnd){var i=t-this._hijriBegin,a=0;a=1==this._MONTH_LENGTH[i].charAt(e)?30:29}else{a=(new dojox.date.islamic.Date).getDaysInIslamicMonth(e,t)}return a}});return a.getDaysInIslamicMonth=function(e){return(new a).getDaysInIslamicMonth(e.getMonth(),e.getFullYear())},a});//# sourceMappingURL=Date.js.map