//>>built
define("dojox/date/persian/locale",["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/persian"],function(e,t,i,r,a,n,o,s,d){function l(e,t,i,a,n){return n.replace(/([a-z])\1*/gi,function(i){var a,s,d=i.charAt(0),l=i.length,u=["abbr","wide","narrow"];switch(d){case"G":a=t.eraAbbr[0];break;case"y":a=String(e.getFullYear());break;case"M":var c=e.getMonth();if(3>l)a=c+1,s=!0;else{var f=["months","format",u[l-3]].join("-");a=t[f][c]}break;case"d":a=e.getDate(!0),s=!0;break;case"E":var m=e.getDay();if(3>l)a=m+1,s=!0;else{var h=["days","format",u[l-3]].join("-");a=t[h][m]}break;case"a":var y=e.getHours()<12?"am":"pm";a=t["dayPeriods-format-wide-"+y];break;case"h":case"H":case"K":case"k":var p=e.getHours();switch(d){case"h":a=p%12||12;break;case"H":a=p;break;case"K":a=p%12;break;case"k":a=p||24}s=!0;break;case"m":a=e.getMinutes(),s=!0;break;case"s":a=e.getSeconds(),s=!0;break;case"S":a=Math.round(e.getMilliseconds()*Math.pow(10,l-3)),s=!0;break;case"z":if(a=r.getTimezoneName(e.toGregorian()))break;l=4;case"Z":var v=e.toGregorian().getTimezoneOffset(),g=[0>=v?"+":"-",o.pad(Math.floor(Math.abs(v)/60),2),o.pad(Math.abs(v)%60,2)];4==l&&(g.splice(0,0,"GMT"),g.splice(3,0,":")),a=g.join("");break;default:throw new Error("dojox.date.persian.locale.formatPattern: invalid pattern char: "+n)}return s&&(a=o.pad(a,l)),a})}function u(e,t,r,a){var n=function(e){return e};t=t||n,r=r||n,a=a||n;var o=e.match(/(''|[^'])+/g),s="'"==e.charAt(0);return i.forEach(o,function(e,i){e?(o[i]=(s?r:t)(e),s=!s):o[i]=""}),a(o.join(""))}function c(e,t,i,r){r=n.escapeString(r);a.normalizeLocale(i.locale);return r.replace(/([a-z])\1*/gi,function(r){var a,n=r.charAt(0),o=r.length,s="",d="";switch(i.strict?(o>1&&(s="0{"+(o-1)+"}"),o>2&&(d="0{"+(o-2)+"}")):(s="0?",d="0{0,2}"),n){case"y":a="\\d+";break;case"M":a=o>2?"\\S+ ?\\S+":s+"[1-9]|1[0-2]";break;case"d":a="[12]\\d|"+s+"[1-9]|3[01]";break;case"E":a="\\S+";break;case"h":a=s+"[1-9]|1[0-2]";break;case"k":a=s+"\\d|1[01]";break;case"H":a=s+"\\d|1\\d|2[0-3]";break;case"K":a=s+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":a=s+"\\d|[0-5]\\d";break;case"S":a="\\d{"+o+"}";break;case"a":var l=i.am||t["dayPeriods-format-wide-am"],u=i.pm||t["dayPeriods-format-wide-pm"];i.strict?a=l+"|"+u:(a=l+"|"+u,l!=l.toLowerCase()&&(a+="|"+l.toLowerCase()),u!=u.toLowerCase()&&(a+="|"+u.toLowerCase()));break;default:a=".*"}return e&&e.push(r),"("+a+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var f=t.getObject("date.persian.locale",!0,e);f.format=function(e,i){i=i||{};var r=a.normalizeLocale(i.locale),n=i.formatLength||"short",o=f._getPersianBundle(r),s=[],d=t.hitch(this,l,e,o,r,i.fullYear);if("year"==i.selector){var c=e.getFullYear();return c}if("time"!=i.selector){var m=i.datePattern||o["dateFormat-"+n];m&&s.push(u(m,d))}if("date"!=i.selector){var h=i.timePattern||o["timeFormat-"+n];h&&s.push(u(h,d))}var y=s.join(" ");return y},f.regexp=function(e){return f._parseInfo(e).regexp},f._parseInfo=function(e){e=e||{};var i,r=a.normalizeLocale(e.locale),n=f._getPersianBundle(r),o=e.formatLength||"short",s=e.datePattern||n["dateFormat-"+o],d=e.timePattern||n["timeFormat-"+o];i="date"==e.selector?s:"time"==e.selector?d:"undefined"==typeof d?s:s+" "+d;var l=[],m=u(i,t.hitch(this,c,l,n,e));return{regexp:m,tokens:l,bundle:n}},f.parse=function(e,t){e=e.replace(/[\u200E\u200F\u202A\u202E]/g,""),t||(t={});var r=f._parseInfo(t),n=r.tokens,o=r.bundle,d=r.regexp.replace(/[\u200E\u200F\u202A\u202E]/g,""),l=new RegExp("^"+d+"$"),u=l.exec(e);a.normalizeLocale(t.locale);if(!u)return null;var c=[1389,0,1,0,0,0,0],m="",h=0,y=["abbr","wide","narrow"],p=(i.every(u,function(e,r){if(!r)return!0;var a=n[r-1],s=a.length;switch(a.charAt(0)){case"y":c[0]=Number(e);break;case"M":if(s>2){var d=o["months-format-"+y[s-3]].concat();if(t.strict||(e=e.replace(".","").toLowerCase(),d=i.map(d,function(e){return e?e.replace(".","").toLowerCase():e})),e=i.indexOf(d,e),-1==e)return!1;h=s}else e--;c[1]=Number(e);break;case"D":c[1]=0;case"d":c[2]=Number(e);break;case"a":var l=t.am||o["dayPeriods-format-wide-am"],u=t.pm||o["dayPeriods-format-wide-pm"];if(!t.strict){var f=/\./g;e=e.replace(f,"").toLowerCase(),l=l.replace(f,"").toLowerCase(),u=u.replace(f,"").toLowerCase()}if(t.strict&&e!=l&&e!=u)return!1;m=e==u?"p":e==l?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":c[3]=Number(e);break;case"m":c[4]=Number(e);break;case"s":c[5]=Number(e);break;case"S":c[6]=Number(e)}return!0}),+c[3]);"p"===m&&12>p?c[3]=p+12:"a"===m&&12==p&&(c[3]=0);var v=new s(c[0],c[1],c[2],c[3],c[4],c[5],c[6]);return v};var m=[];return f.addCustomFormats=function(e,t){m.push({pkg:e,name:t})},f._getPersianBundle=function(e){var r={};return i.forEach(m,function(i){var n=a.getLocalization(i.pkg,i.name,e);r=t.mixin(r,n)},this),r},f.addCustomFormats("dojo.cldr","persian"),f.getNames=function(e,t,i,r,a){var n,o=f._getPersianBundle(r),s=[e,i,t];if("standAlone"==i){var d=s.join("-");n=o[d],1==n[0]&&(n=void 0)}return s[1]="format",(n||o[s.join("-")]).concat()},f.weekDays=f.getNames("days","wide","format"),f.months=f.getNames("months","wide","format"),f});//# sourceMappingURL=locale.js.map