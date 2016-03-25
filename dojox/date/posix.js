//>>built
define("dojox/date/posix",["dojo/_base/kernel","dojo/date","dojo/date/locale","dojo/string","dojo/cldr/supplemental"],function(e,t,a,i,r){var o=e.getObject("date.posix",!0,dojox);return o.strftime=function(e,r,n){for(var d=null,l=function(e,t){return i.pad(e,t||2,d||"0")},s=a._getGregorianBundle(n),u=function(i){switch(i){case"a":return a.getNames("days","abbr","format",n)[e.getDay()];case"A":return a.getNames("days","wide","format",n)[e.getDay()];case"b":case"h":return a.getNames("months","abbr","format",n)[e.getMonth()];case"B":return a.getNames("months","wide","format",n)[e.getMonth()];case"c":return a.format(e,{formatLength:"full",locale:n});case"C":return l(Math.floor(e.getFullYear()/100));case"d":return l(e.getDate());case"D":return u("m")+"/"+u("d")+"/"+u("y");case"e":return null==d&&(d=" "),l(e.getDate());case"f":return null==d&&(d=" "),l(e.getMonth()+1);case"g":break;case"G":break;case"F":return u("Y")+"-"+u("m")+"-"+u("d");case"H":return l(e.getHours());case"I":return l(e.getHours()%12||12);case"j":return l(a._getDayOfYear(e),3);case"k":return null==d&&(d=" "),l(e.getHours());case"l":return null==d&&(d=" "),l(e.getHours()%12||12);case"m":return l(e.getMonth()+1);case"M":return l(e.getMinutes());case"n":return"\n";case"p":return s["dayPeriods-format-wide-"+(e.getHours()<12?"am":"pm")];case"r":return u("I")+":"+u("M")+":"+u("S")+" "+u("p");case"R":return u("H")+":"+u("M");case"S":return l(e.getSeconds());case"t":return"	";case"T":return u("H")+":"+u("M")+":"+u("S");case"u":return String(e.getDay()||7);case"U":return l(a._getWeekOfYear(e));case"V":return l(o.getIsoWeekOfYear(e));case"W":return l(a._getWeekOfYear(e,1));case"w":return String(e.getDay());case"x":return a.format(e,{selector:"date",formatLength:"full",locale:n});case"X":return a.format(e,{selector:"time",formatLength:"full",locale:n});case"y":return l(e.getFullYear()%100);case"Y":return String(e.getFullYear());case"z":var r=e.getTimezoneOffset();return(r>0?"-":"+")+l(Math.floor(Math.abs(r)/60))+":"+l(Math.abs(r)%60);case"Z":return t.getTimezoneName(e);case"%":return"%"}},m="",h=0,f=0,c=null;-1!=(f=r.indexOf("%",h));){switch(m+=r.substring(h,f++),r.charAt(f++)){case"_":d=" ";break;case"-":d="";break;case"0":d="0";break;case"^":c="upper";break;case"*":c="lower";break;case"#":c="swap";break;default:d=null,f--}var y=u(r.charAt(f++));switch(c){case"upper":y=y.toUpperCase();break;case"lower":y=y.toLowerCase();break;case"swap":for(var p=y.toLowerCase(),v="",g="",M=0;M<y.length;M++)g=y.charAt(M),v+=g==p.charAt(M)?g.toUpperCase():g.toLowerCase();y=v}c=null,m+=y,h=f}return m+=r.substring(h)},o.getStartOfWeek=function(e,a){isNaN(a)&&(a=r.getFirstDayOfWeek?r.getFirstDayOfWeek():0);var i=a;i-=e.getDay()>=a?e.getDay():7-e.getDay();var o=new Date(e);return o.setHours(0,0,0,0),t.add(o,"day",i)},o.setIsoWeekOfYear=function(e,a){if(!a)return e;var i=o.getIsoWeekOfYear(e),r=a-i;if(0>a){var n=o.getIsoWeeksInYear(e);r=n+a+1-i}return t.add(e,"week",r)},o.getIsoWeekOfYear=function(e){var t=o.getStartOfWeek(e,1),a=new Date(e.getFullYear(),0,4);a=o.getStartOfWeek(a,1);var i=t.getTime()-a.getTime();return 0>i?o.getIsoWeeksInYear(t):Math.ceil(i/6048e5)+1},o.getIsoWeeksInYear=function(e){function t(e){return e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400)}var a=e.getFullYear();return t(a)%7==4||t(a-1)%7==3?53:52},o});//# sourceMappingURL=posix.js.map