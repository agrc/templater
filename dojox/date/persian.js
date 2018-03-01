//>>built
define("dojox/date/persian",["dojox/main","dojo/_base/lang","dojo/date","./persian/Date"],function(e,t,a,i){var r=t.getObject("date.persian",!0,e);return r.getDaysInMonth=function(e){return e.getDaysInPersianMonth(e.getMonth(),e.getFullYear())},r.compare=function(e,t,r){return e instanceof i&&(e=e.toGregorian()),t instanceof i&&(t=t.toGregorian()),a.compare.apply(null,arguments)},r.add=function(e,t,a){var r=new i(e);switch(t){case"day":r.setDate(e.getDate()+a);break;case"weekday":var o=e.getDay();if(o+a<5&&o+a>0)r.setDate(e.getDate()+a);else{var d=0,n=0;5==o?(o=4,n=a>0?-1:1):6==o&&(o=4,n=a>0?-2:2);var l=a>0?5-o-1:-o,s=a-l,m=parseInt(s/5);s%5!=0&&(d=a>0?2:-2),d=d+7*m+s%5+l,r.setDate(e.getDate()+d+n)}break;case"year":r.setFullYear(e.getFullYear()+a);break;case"week":a*=7,r.setDate(e.getDate()+a);break;case"month":var u=e.getMonth();r.setMonth(u+a);break;case"hour":r.setHours(e.getHours()+a);break;case"minute":r._addMinutes(a);break;case"second":r._addSeconds(a);break;case"millisecond":r._addMilliseconds(a)}return r},r.difference=function(e,t,a){t=t||new i,a=a||"day";var o=t.getFullYear()-e.getFullYear(),d=1;switch(a){case"weekday":var n=Math.round(r.difference(e,t,"day")),l=parseInt(r.difference(e,t,"week")),s=n%7;if(0==s)n=5*l;else{var m=0,u=e.getDay(),h=t.getDay();l=parseInt(n/7),s=n%7;var f=new i(e);f.setDate(f.getDate()+7*l);var c=f.getDay();if(n>0)switch(!0){case 5==u:m=-1;break;case 6==u:m=0;break;case 5==h:m=-1;break;case 6==h:m=-2;break;case c+s>5:m=-2}else if(n<0)switch(!0){case 5==u:m=0;break;case 6==u:m=1;break;case 5==h:m=2;break;case 6==h:m=1;break;case c+s<0:m=2}n+=m,n-=2*l}d=n;break;case"year":d=o;break;case"month":var y=t.toGregorian()>e.toGregorian()?t:e,p=t.toGregorian()>e.toGregorian()?e:t,v=y.getMonth(),M=p.getMonth();if(0==o)d=y.getMonth()-p.getMonth();else{d=12-M,d+=v;var g=p.getFullYear()+1,b=y.getFullYear();for(g;g<b;g++)d+=12}t.toGregorian()<e.toGregorian()&&(d=-d);break;case"week":d=parseInt(r.difference(e,t,"day")/7);break;case"day":d/=24;case"hour":d/=60;case"minute":d/=60;case"second":d/=1e3;case"millisecond":d*=t.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(d)},r});//# sourceMappingURL=persian.js.map