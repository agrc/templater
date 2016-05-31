//>>built
define("dojox/date/persian",["..","dojo/_base/lang","dojo/date","./persian/Date"],function(e,t,a,i){var r=t.getObject("date.persian",!0,e);return r.getDaysInMonth=function(e){return e.getDaysInPersianMonth(e.getMonth(),e.getFullYear())},r.compare=function(e,t,r){return e instanceof i&&(e=e.toGregorian()),t instanceof i&&(t=t.toGregorian()),a.compare.apply(null,arguments)},r.add=function(e,t,a){var r=new i(e);switch(t){case"day":r.setDate(e.getDate()+a);break;case"weekday":var o=e.getDay();if(5>o+a&&o+a>0)r.setDate(e.getDate()+a);else{var n=0,d=0;5==o?(o=4,d=a>0?-1:1):6==o&&(o=4,d=a>0?-2:2);var l=a>0?5-o-1:-o,s=a-l,m=parseInt(s/5);s%5!=0&&(n=a>0?2:-2),n=n+7*m+s%5+l,r.setDate(e.getDate()+n+d)}break;case"year":r.setFullYear(e.getFullYear()+a);break;case"week":a*=7,r.setDate(e.getDate()+a);break;case"month":var u=e.getMonth();r.setMonth(u+a);break;case"hour":r.setHours(e.getHours()+a);break;case"minute":r._addMinutes(a);break;case"second":r._addSeconds(a);break;case"millisecond":r._addMilliseconds(a)}return r},r.difference=function(e,t,a){t=t||new i,a=a||"day";var o=t.getFullYear()-e.getFullYear(),n=1;switch(a){case"weekday":var d=Math.round(r.difference(e,t,"day")),l=parseInt(r.difference(e,t,"week")),s=d%7;if(0==s)d=5*l;else{var m=0,u=e.getDay(),h=t.getDay();l=parseInt(d/7),s=d%7;var f=new i(e);f.setDate(f.getDate()+7*l);var c=f.getDay();if(d>0)switch(!0){case 5==u:m=-1;break;case 6==u:m=0;break;case 5==h:m=-1;break;case 6==h:m=-2;break;case c+s>5:m=-2}else if(0>d)switch(!0){case 5==u:m=0;break;case 6==u:m=1;break;case 5==h:m=2;break;case 6==h:m=1;break;case 0>c+s:m=2}d+=m,d-=2*l}n=d;break;case"year":n=o;break;case"month":var y=t.toGregorian()>e.toGregorian()?t:e,v=t.toGregorian()>e.toGregorian()?e:t,g=y.getMonth(),p=v.getMonth();if(0==o)n=y.getMonth()-v.getMonth();else{n=12-p,n+=g;var M=v.getFullYear()+1,b=y.getFullYear();for(M;b>M;M++)n+=12}t.toGregorian()<e.toGregorian()&&(n=-n);break;case"week":n=parseInt(r.difference(e,t,"day")/7);break;case"day":n/=24;case"hour":n/=60;case"minute":n/=60;case"second":n/=1e3;case"millisecond":n*=t.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(n)},r});//# sourceMappingURL=persian.js.map