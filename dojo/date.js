//>>built
define("dojo/date",["./has","./_base/lang"],function(t,e){var i={};return i.getDaysInMonth=function(t){var e=t.getMonth(),n=[31,28,31,30,31,30,31,31,30,31,30,31];return 1==e&&i.isLeapYear(t)?29:n[e]},i.isLeapYear=function(t){var e=t.getFullYear();return!(e%400&&(e%4||!(e%100)))},i.getTimezoneName=function(t){var e,i=t.toString(),n="",o=i.indexOf("(");if(o>-1)n=i.substring(++o,i.indexOf(")"));else{var a=/([A-Z\/]+) \d{4}$/;(e=i.match(a))?n=e[1]:(i=t.toLocaleString(),a=/ ([A-Z\/]+)$/,(e=i.match(a))&&(n=e[1]))}return"AM"==n||"PM"==n?"":n},i.compare=function(t,e,i){return t=new Date(+t),e=new Date(+(e||new Date)),"date"==i?(t.setHours(0,0,0,0),e.setHours(0,0,0,0)):"time"==i&&(t.setFullYear(0,0,0),e.setFullYear(0,0,0)),t>e?1:e>t?-1:0},i.add=function(t,e,i){var n=new Date(+t),o=!1,a="Date";switch(e){case"day":break;case"weekday":var s,r,d=i%5;d?(s=d,r=parseInt(i/5)):(s=i>0?5:-5,r=i>0?(i-5)/5:(i+5)/5);var l=t.getDay(),h=0;6==l&&i>0?h=1:0==l&&0>i&&(h=-1);var c=l+s;0!=c&&6!=c||(h=i>0?2:-2),i=7*r+s+h;break;case"year":a="FullYear",o=!0;break;case"week":i*=7;break;case"quarter":i*=3;case"month":o=!0,a="Month";break;default:a="UTC"+e.charAt(0).toUpperCase()+e.substring(1)+"s"}return a&&n["set"+a](n["get"+a]()+i),o&&n.getDate()<t.getDate()&&n.setDate(0),n},i.difference=function(t,e,n){e=e||new Date,n=n||"day";var o=e.getFullYear()-t.getFullYear(),a=1;switch(n){case"quarter":var s=t.getMonth(),r=e.getMonth(),d=Math.floor(s/3)+1,l=Math.floor(r/3)+1;l+=4*o,a=l-d;break;case"weekday":var h=Math.round(i.difference(t,e,"day")),c=parseInt(i.difference(t,e,"week")),u=h%7;if(0==u)h=5*c;else{var p=0,f=t.getDay(),g=e.getDay();c=parseInt(h/7),u=h%7;var m=new Date(t);m.setDate(m.getDate()+7*c);var _=m.getDay();if(h>0)switch(!0){case 6==f:p=-1;break;case 0==f:p=0;break;case 6==g:p=-1;break;case 0==g:p=-2;break;case _+u>5:p=-2}else if(0>h)switch(!0){case 6==f:p=0;break;case 0==f:p=1;break;case 6==g:p=2;break;case 0==g:p=1;break;case 0>_+u:p=2}h+=p,h-=2*c}a=h;break;case"year":a=o;break;case"month":a=e.getMonth()-t.getMonth()+12*o;break;case"week":a=parseInt(i.difference(t,e,"day")/7);break;case"day":a/=24;case"hour":a/=60;case"minute":a/=60;case"second":a/=1e3;case"millisecond":a*=e.getTime()-t.getTime()}return Math.round(a)},e.mixin(e.getObject("dojo.date",!0),i),i});//# sourceMappingURL=date.js.map