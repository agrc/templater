//>>built
define("dojox/date/buddhist",["dojox/main","dojo/_base/lang","dojo/date","./buddhist/Date"],function(e,t,a,i){var r=t.getObject("date.buddhist",!0,e);return r.getDaysInMonth=function(e){return a.getDaysInMonth(e.toGregorian())},r.isLeapYear=function(e){return a.isLeapYear(e.toGregorian())},r.compare=function(e,t,i){return a.compare(e,t,i)},r.add=function(e,t,a){var r=new i(e);switch(t){case"day":r.setDate(e.getDate(!0)+a);break;case"weekday":var o,n,d=a%5;d?(o=d,n=parseInt(a/5)):(o=a>0?5:-5,n=a>0?(a-5)/5:(a+5)/5);var l=e.getDay(),s=0;6==l&&a>0?s=1:0==l&&a<0&&(s=-1);var m=l+o;0!=m&&6!=m||(s=a>0?2:-2),a=7*n+o+s,r.setDate(e.getDate(!0)+a);break;case"year":r.setFullYear(e.getFullYear()+a);break;case"week":a*=7,r.setDate(e.getDate(!0)+a);break;case"month":r.setMonth(e.getMonth()+a);break;case"hour":r.setHours(e.getHours()+a);break;case"minute":r._addMinutes(a);break;case"second":r._addSeconds(a);break;case"millisecond":r._addMilliseconds(a)}return r},r.difference=function(e,t,a){t=t||new i,a=a||"day";var o=t.getFullYear()-e.getFullYear(),n=1;switch(a){case"weekday":var d=Math.round(r.difference(e,t,"day")),l=parseInt(r.difference(e,t,"week")),s=d%7;if(0==s)d=5*l;else{var m=0,u=e.getDay(),f=t.getDay();l=parseInt(d/7),s=d%7;var h=new i(t);h.setDate(h.getDate(!0)+7*l);var c=h.getDay();if(d>0)switch(!0){case 5==u:m=-1;break;case 6==u:m=0;break;case 5==f:m=-1;break;case 6==f:m=-2;break;case c+s>5:m=-2}else if(d<0)switch(!0){case 5==u:m=0;break;case 6==u:m=1;break;case 5==f:m=2;break;case 6==f:m=1;break;case c+s<0:m=2}d+=m,d-=2*l}n=d;break;case"year":n=o;break;case"month":var y=t.toGregorian()>e.toGregorian()?t:e,v=t.toGregorian()>e.toGregorian()?e:t,g=y.getMonth(),M=v.getMonth();if(0==o)n=y.getMonth()-v.getMonth();else{n=12-M,n+=g;var p=v.getFullYear()+1,b=y.getFullYear();for(p;p<b;p++)n+=12}t.toGregorian()<e.toGregorian()&&(n=-n);break;case"week":n=parseInt(r.difference(e,t,"day")/7);break;case"day":n/=24;case"hour":n/=60;case"minute":n/=60;case"second":n/=1e3;case"millisecond":n*=t.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(n)},r});//# sourceMappingURL=buddhist.js.map