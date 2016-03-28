//>>built
define("dojox/date/hebrew/Date",["dojo/_base/lang","dojo/_base/declare","./numerals"],function(e,t,a){var i=t("dojox.date.hebrew.Date",null,{_MONTH_LENGTH:[[30,30,30],[29,29,30],[29,30,30],[29,29,29],[30,30,30],[30,30,30],[29,29,29],[30,30,30],[29,29,29],[30,30,30],[29,29,29],[30,30,30],[29,29,29]],_MONTH_START:[[0,0,0],[30,30,30],[59,59,60],[88,89,90],[117,118,119],[147,148,149],[147,148,149],[176,177,178],[206,207,208],[235,236,237],[265,266,267],[294,295,296],[324,325,326],[353,354,355]],_LEAP_MONTH_START:[[0,0,0],[30,30,30],[59,59,60],[88,89,90],[117,118,119],[147,148,149],[177,178,179],[206,207,208],[236,237,238],[265,266,267],[295,296,297],[324,325,326],[354,355,356],[383,384,385]],_GREGORIAN_MONTH_COUNT:[[31,31,0,0],[28,29,31,31],[31,31,59,60],[30,30,90,91],[31,31,120,121],[30,30,151,152],[31,31,181,182],[31,31,212,213],[30,30,243,244],[31,31,273,274],[30,30,304,305],[31,31,334,335]],_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,constructor:function(){var e=arguments.length;if(e)if(1==e){var t=arguments[0];"number"==typeof t&&(t=new Date(t)),t instanceof Date?this.fromGregorian(t):""==t?this._year=this._month=this._date=this._hours=this._minutes=this._seconds=this._milliseconds=NaN:(this._year=t._year,this._month=t._month,this._date=t._date,this._hours=t._hours,this._minutes=t._minutes,this._seconds=t._seconds,this._milliseconds=t._milliseconds)}else e>=3&&(this._year+=arguments[0],this._month+=arguments[1],this._date+=arguments[2],this._month>12&&(this._month=0),this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date);this._setDay()},getDate:function(){return this._date},getDateLocalized:function(e){return(e||dojo.locale).match(/^he(?:-.+)?$/)?a.getDayHebrewLetters(this._date):this.getDate()},getMonth:function(){return this._month},getFullYear:function(){return this._year},getHours:function(){return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(e){e=+e;var t;if(e>0)for(;e>(t=this.getDaysInHebrewMonth(this._month,this._year));)e-=t,this._month++,this._month>=13&&(this._year++,this._month-=13);else for(;0>=e;)t=this.getDaysInHebrewMonth(this._month-1>=0?this._month-1:12,this._month-1>=0?this._year:this._year-1),this._month--,this._month<0&&(this._year--,this._month+=13),e+=t;return this._date=e,this._setDay(),this},setFullYear:function(e,t,a){this._year=e=+e,this.isLeapYear(e)||5!=this._month||this._month++,void 0!==t&&this.setMonth(t),void 0!==a&&this.setDate(a);var i=this.getDaysInHebrewMonth(this._month,this._year);return i<this._date&&(this._date=i),this._setDay(),this},setMonth:function(e){if(e=+e,this.isLeapYear(this._year)||5!=e||e++,e>=0)for(;e>12;)this._year++,e-=13,!this.isLeapYear(this._year)&&e>=5&&e++;else for(;0>e;)this._year--,e+=!this.isLeapYear(this._year)&&-7>e?12:13;this._month=e;var t=this.getDaysInHebrewMonth(this._month,this._year);return t<this._date&&(this._date=t),this._setDay(),this},setHours:function(){var e=arguments.length,t=0;for(e>=1&&(t=+arguments[0]),e>=2&&(this._minutes=+arguments[1]),e>=3&&(this._seconds=+arguments[2]),4==e&&(this._milliseconds=+arguments[3]);t>=24;){this._date++;var a=this.getDaysInHebrewMonth(this._month,this._year);this._date>a&&(this._month++,this.isLeapYear(this._year)||5!=this._month||this._month++,this._month>=13&&(this._year++,this._month-=13),this._date-=a),t-=24}return this._hours=t,this._setDay(),this},_addMinutes:function(e){return e+=this._minutes,this.setMinutes(e),this.setHours(this._hours+parseInt(e/60)),this},_addSeconds:function(e){return e+=this._seconds,this.setSeconds(e),this._addMinutes(parseInt(e/60)),this},_addMilliseconds:function(e){return e+=this._milliseconds,this.setMilliseconds(e),this._addSeconds(parseInt(e/1e3)),this},setMinutes:function(e){return this._minutes=e%60,this},setSeconds:function(e){return this._seconds=e%60,this},setMilliseconds:function(e){return this._milliseconds=e%1e3,this},_setDay:function(){var e=this._startOfYear(this._year);0!=this._month&&(e+=(this.isLeapYear(this._year)?this._LEAP_MONTH_START:this._MONTH_START)[this._month||0][this._yearType(this._year)]),e+=this._date-1,this._day=(e+1)%7},toString:function(){return isNaN(this._date)?"Invalid Date":this._date+", "+this._month+", "+this._year+"  "+this._hours+":"+this._minutes+":"+this._seconds},getDaysInHebrewMonth:function(e,t){var a=1==e||2==e?this._yearType(t):0;return this.isLeapYear(this._year)||5!=e?this._MONTH_LENGTH[e][a]:0},_yearType:function(e){var t=this._handleGetYearLength(Number(e));t>380&&(t-=30);var a=t-353;if(0>a||a>2)throw new Error("Illegal year length "+t+" in year "+e);return a},_handleGetYearLength:function(e){return this._startOfYear(e+1)-this._startOfYear(e)},_startOfYear:function(e){var t=Math.floor((235*e-234)/19),a=13753*t+11880+204,i=29*t+Math.floor(a/25920);a%=25920;var r=i%7;return 2!=r&&4!=r&&6!=r||(i+=1,r=i%7),1==r&&a>16404&&!this.isLeapYear(e)?i+=2:0==r&&a>23269&&this.isLeapYear(e-1)&&(i+=1),i},isLeapYear:function(e){var t=(12*e+17)%19;return t>=(0>t?-7:12)},fromGregorian:function(e){var t=isNaN(e)?NaN:this._computeHebrewFields(e);return this._year=isNaN(e)?NaN:t[0],this._month=isNaN(e)?NaN:t[1],this._date=isNaN(e)?NaN:t[2],this._hours=e.getHours(),this._milliseconds=e.getMilliseconds(),this._minutes=e.getMinutes(),this._seconds=e.getSeconds(),isNaN(e)||this._setDay(),this},_computeHebrewFields:function(e){for(var t=this._getJulianDayFromGregorianDate(e),a=t-347997,i=Math.floor(24*a*1080/765433),r=Math.floor((19*i+234)/235)+1,o=this._startOfYear(r),n=a-o;1>n;)r--,o=this._startOfYear(r),n=a-o;for(var d=this._yearType(r),s=this.isLeapYear(r)?this._LEAP_MONTH_START:this._MONTH_START,l=0;n>s[l][d];)l++;l--;var m=n-s[l][d];return[r,l,m]},toGregorian:function(){var e=this._year||0,t=this._month||0,a=this._date||0,i=this._startOfYear(e);0!=t&&(i+=(this.isLeapYear(e)?this._LEAP_MONTH_START:this._MONTH_START)[t][this._yearType(e)]);var r=a+i+347997,o=r-1721426,n=[],d=this._floorDivide(o,146097,n),s=this._floorDivide(n[0],36524,n),l=this._floorDivide(n[0],1461,n),m=this._floorDivide(n[0],365,n),u=400*d+100*s+4*l+m,h=n[0];4==s||4==m?h=365:++u;var f=!(u%4)&&(u%100||!(u%400)),c=0,y=f?60:59;h>=y&&(c=f?1:2);var v=Math.floor((12*(h+c)+6)/367),g=h-this._GREGORIAN_MONTH_COUNT[v][f?3:2]+1;return new Date(u,v,g,this._hours,this._minutes,this._seconds,this._milliseconds)},_floorDivide:function(e,t,a){if(e>=0)return a[0]=e%t,Math.floor(e/t);var i=Math.floor(e/t);return a[0]=e-i*t,i},getDay:function(){var e=this._year,t=this._month,a=this._date,i=this._startOfYear(e);return 0!=t&&(i+=(this.isLeapYear(e)?this._LEAP_MONTH_START:this._MONTH_START)[t][this._yearType(e)]),i+=a-1,(i+1)%7},_getJulianDayFromGregorianDate:function(e){var t=e.getFullYear(),a=e.getMonth(),i=e.getDate(),r=!(t%4)&&(t%100||!(t%400)),o=t-1,n=365*o+Math.floor(o/4)-Math.floor(o/100)+Math.floor(o/400)+1721426-1;return a>0&&(n+=this._GREGORIAN_MONTH_COUNT[a][r?3:2]),n+=i}});return i.prototype.valueOf=function(){return this.toGregorian().valueOf()},i});//# sourceMappingURL=Date.js.map