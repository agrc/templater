//>>built
define("dojox/date/buddhist",["..","dojo/_base/lang","dojo/date","./buddhist/Date"],function(e,t,a,r){var i=t.getObject("date.buddhist",!0,e);return i.getDaysInMonth=function(e){return a.getDaysInMonth(e.toGregorian())},i.isLeapYear=function(e){return a.isLeapYear(e.toGregorian())},i.compare=function(e,t,r){return a.compare(e,t,r)},i.add=function(e,t,a){var i=new r(e);switch(t){case"day":i.setDate(e.getDate(!0)+a);break;case"weekday":var o,n,d=a%5;d?(o=d,n=parseInt(a/5)):(o=a>0?5:-5,n=a>0?(a-5)/5:(a+5)/5);var l=e.getDay(),s=0;6==l&&a>0?s=1:0==l&&0>a&&(s=-1);var m=l+o;0!=m&&6!=m||(s=a>0?2:-2),a=7*n+o+s,i.setDate(e.getDate(!0)+a);break;case"year":i.setFullYear(e.getFullYear()+a);break;case"week":a*=7,i.setDate(e.getDate(!0)+a);break;case"month":i.setMonth(e.getMonth()+a);break;case"hour":i.setHours(e.getHours()+a);break;case"minute":i._addMinutes(a);break;case"second":i._addSeconds(a);break;case"millisecond":i._addMilliseconds(a)}return i},i.difference=function(e,t,a){t=t||new r,a=a||"day";var o=t.getFullYear()-e.getFullYear(),n=1;switch(a){case"weekday":var d=Math.round(i.difference(e,t,"day")),l=parseInt(i.difference(e,t,"week")),s=d%7;if(0==s)d=5*l;else{var m=0,u=e.getDay(),f=t.getDay();l=parseInt(d/7),s=d%7;var c=new r(t);c.setDate(c.getDate(!0)+7*l);var h=c.getDay();if(d>0)switch(!0){case 5==u:m=-1;break;case 6==u:m=0;break;case 5==f:m=-1;break;case 6==f:m=-2;break;case h+s>5:m=-2}else if(0>d)switch(!0){case 5==u:m=0;break;case 6==u:m=1;break;case 5==f:m=2;break;case 6==f:m=1;break;case 0>h+s:m=2}d+=m,d-=2*l}n=d;break;case"year":n=o;break;case"month":var y=t.toGregorian()>e.toGregorian()?t:e,v=t.toGregorian()>e.toGregorian()?e:t,p=y.getMonth(),g=v.getMonth();if(0==o)n=y.getMonth()-v.getMonth();else{n=12-g,n+=p;var M=v.getFullYear()+1,b=y.getFullYear();for(M;b>M;M++)n+=12}t.toGregorian()<e.toGregorian()&&(n=-n);break;case"week":n=parseInt(i.difference(e,t,"day")/7);break;case"day":n/=24;case"hour":n/=60;case"minute":n/=60;case"second":n/=1e3;case"millisecond":n*=t.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(n)},i});//# sourceMappingURL=buddhist.js.map