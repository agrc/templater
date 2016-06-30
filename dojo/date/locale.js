//>>built
define("dojo/date/locale",["../_base/lang","../_base/array","../date","../cldr/supplemental","../i18n","../regexp","../string","../i18n!../cldr/nls/gregorian","module"],function(e,t,a,i,r,d,o,n,l){function s(e,t,a,r){return r.replace(/([a-z])\1*/gi,function(d){var n,l,s=d.charAt(0),m=d.length,f=["abbr","wide","narrow"];switch(s){case"G":n=t[4>m?"eraAbbr":"eraNames"][e.getFullYear()<0?0:1];break;case"y":switch(n=e.getFullYear(),m){case 1:break;case 2:if(!a.fullYear){n=String(n),n=n.substr(n.length-2);break}default:l=!0}break;case"Q":case"q":n=Math.ceil((e.getMonth()+1)/3),l=!0;break;case"M":case"L":var u=e.getMonth();if(3>m)n=u+1,l=!0;else{var M=["months","L"==s?"standAlone":"format",f[m-3]].join("-");n=t[M][u]}break;case"w":var h=0;n=y._getWeekOfYear(e,h),l=!0;break;case"d":n=e.getDate(),l=!0;break;case"D":n=y._getDayOfYear(e),l=!0;break;case"e":case"c":var c=e.getDay();if(2>m){n=(c-i.getFirstDayOfWeek(a.locale)+8)%7;break}case"E":if(c=e.getDay(),3>m)n=c+1,l=!0;else{var v=["days","c"==s?"standAlone":"format",f[m-3]].join("-");n=t[v][c]}break;case"a":var p=e.getHours()<12?"am":"pm";n=a[p]||t["dayPeriods-format-wide-"+p];break;case"h":case"H":case"K":case"k":var g=e.getHours();switch(s){case"h":n=g%12||12;break;case"H":n=g;break;case"K":n=g%12;break;case"k":n=g||24}l=!0;break;case"m":n=e.getMinutes(),l=!0;break;case"s":n=e.getSeconds(),l=!0;break;case"S":n=Math.round(e.getMilliseconds()*Math.pow(10,m-3)),l=!0;break;case"v":case"z":if(n=y._getZone(e,!0,a))break;m=4;case"Z":var b=y._getZone(e,!1,a),F=[0>=b?"+":"-",o.pad(Math.floor(Math.abs(b)/60),2),o.pad(Math.abs(b)%60,2)];4==m&&(F.splice(0,0,"GMT"),F.splice(3,0,":")),n=F.join("");break;default:throw new Error("dojo.date.locale.format: invalid pattern char: "+r)}return l&&(n=o.pad(n,m)),n})}function m(e,a,i,r){var d=function(e){return e};a=a||d,i=i||d,r=r||d;var o=e.match(/(''|[^'])+/g),n="'"==e.charAt(0);return t.forEach(o,function(e,t){e?(o[t]=(n?i:a)(e.replace(/''/g,"'")),n=!n):o[t]=""}),r(o.join(""))}function f(e,t,a,i){return i=d.escapeString(i),a.strict||(i=i.replace(" a"," ?a")),i.replace(/([a-z])\1*/gi,function(i){var r,d=i.charAt(0),o=i.length,n="",l="";switch(a.strict?(o>1&&(n="0{"+(o-1)+"}"),o>2&&(l="0{"+(o-2)+"}")):(n="0?",l="0{0,2}"),d){case"y":r="\\d{2,4}";break;case"M":case"L":r=o>2?"\\S+?":"1[0-2]|"+n+"[1-9]";break;case"D":r="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+n+"[1-9][0-9]|"+l+"[1-9]";break;case"d":r="3[01]|[12]\\d|"+n+"[1-9]";break;case"w":r="[1-4][0-9]|5[0-3]|"+n+"[1-9]";break;case"E":case"e":case"c":r=".+?";break;case"h":r="1[0-2]|"+n+"[1-9]";break;case"k":r="1[01]|"+n+"\\d";break;case"H":r="1\\d|2[0-3]|"+n+"\\d";break;case"K":r="1\\d|2[0-4]|"+n+"[1-9]";break;case"m":case"s":r="[0-5]\\d";break;case"S":r="\\d{"+o+"}";break;case"a":var s=a.am||t["dayPeriods-format-wide-am"],m=a.pm||t["dayPeriods-format-wide-pm"];r=s+"|"+m,a.strict||(s!=s.toLowerCase()&&(r+="|"+s.toLowerCase()),m!=m.toLowerCase()&&(r+="|"+m.toLowerCase()),-1!=r.indexOf(".")&&(r+="|"+r.replace(/\./g,""))),r=r.replace(/\./g,"\\.");break;default:r=".*"}return e&&e.push(i),"("+r+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var y={};e.setObject(l.id.replace(/\//g,"."),y),y._getZone=function(e,t,i){return t?a.getTimezoneName(e):e.getTimezoneOffset()},y.format=function(t,a){a=a||{};var i=r.normalizeLocale(a.locale),d=a.formatLength||"short",o=y._getGregorianBundle(i),n=[],l=e.hitch(this,s,t,o,a);if("year"==a.selector)return m(o["dateFormatItem-yyyy"]||"yyyy",l);var f;return"date"!=a.selector&&(f=a.timePattern||o["timeFormat-"+d],f&&n.push(m(f,l))),"time"!=a.selector&&(f=a.datePattern||o["dateFormat-"+d],f&&n.push(m(f,l))),1==n.length?n[0]:o["dateTimeFormat-"+d].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,t){return n[t]})},y.regexp=function(e){return y._parseInfo(e).regexp},y._parseInfo=function(t){t=t||{};var a,i=r.normalizeLocale(t.locale),d=y._getGregorianBundle(i),o=t.formatLength||"short",n=t.datePattern||d["dateFormat-"+o],l=t.timePattern||d["timeFormat-"+o];a="date"==t.selector?n:"time"==t.selector?l:d["dateTimeFormat-"+o].replace(/\{(\d+)\}/g,function(e,t){return[l,n][t]});var s=[],u=m(a,e.hitch(this,f,s,d,t));return{regexp:u,tokens:s,bundle:d}},y.parse=function(e,i){var r=/[\u200E\u200F\u202A\u202E]/g,d=y._parseInfo(i),o=d.tokens,n=d.bundle,l=new RegExp("^"+d.regexp.replace(r,"")+"$",d.strict?"":"i"),s=l.exec(e&&e.replace(r,""));if(!s)return null;var m=["abbr","wide","narrow"],f=[1970,0,1,0,0,0,0],u="",M=t.every(s,function(e,a){if(!a)return!0;var r=o[a-1],d=r.length,l=r.charAt(0);switch(l){case"y":if(2!=d&&i.strict)f[0]=e;else if(100>e){e=Number(e);var s=""+(new Date).getFullYear(),y=100*s.substring(0,2),M=Math.min(Number(s.substring(2,4))+20,99);f[0]=M>e?y+e:y-100+e}else{if(i.strict)return!1;f[0]=e}break;case"M":case"L":if(d>2){var h=n["months-"+("L"==l?"standAlone":"format")+"-"+m[d-3]].concat();if(i.strict||(e=e.replace(".","").toLowerCase(),h=t.map(h,function(e){return e.replace(".","").toLowerCase()})),e=t.indexOf(h,e),-1==e)return!1}else e--;f[1]=e;break;case"E":case"e":case"c":var c=n["days-"+("c"==l?"standAlone":"format")+"-"+m[d-3]].concat();if(i.strict||(e=e.toLowerCase(),c=t.map(c,function(e){return e.toLowerCase()})),e=t.indexOf(c,e),-1==e)return!1;break;case"D":f[1]=0;case"d":f[2]=e;break;case"a":var v=i.am||n["dayPeriods-format-wide-am"],p=i.pm||n["dayPeriods-format-wide-pm"];if(!i.strict){var g=/\./g;e=e.replace(g,"").toLowerCase(),v=v.replace(g,"").toLowerCase(),p=p.replace(g,"").toLowerCase()}if(i.strict&&e!=v&&e!=p)return!1;u=e==p?"p":e==v?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":if(e>23)return!1;f[3]=e;break;case"m":f[4]=e;break;case"s":f[5]=e;break;case"S":f[6]=e}return!0}),h=+f[3];"p"===u&&12>h?f[3]=h+12:"a"===u&&12==h&&(f[3]=0);var c=new Date(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);i.strict&&c.setFullYear(f[0]);var v=o.join(""),p=-1!=v.indexOf("d"),g=-1!=v.indexOf("M");return!M||g&&c.getMonth()>f[1]||p&&c.getDate()>f[2]?null:((g&&c.getMonth()<f[1]||p&&c.getDate()<f[2])&&(c=a.add(c,"hour",1)),c)};var u=[],M={};return y.addCustomFormats=function(e,t){u.push({pkg:e,name:t}),M={}},y._getGregorianBundle=function(a){if(M[a])return M[a];var i={};return t.forEach(u,function(t){var d=r.getLocalization(t.pkg,t.name,a);i=e.mixin(i,d)},this),M[a]=i},y.addCustomFormats(l.id.replace(/\/date\/locale$/,".cldr"),"gregorian"),y.getNames=function(e,t,a,i){var r,d=y._getGregorianBundle(i),o=[e,a,t];if("standAlone"==a){var n=o.join("-");r=d[n],1==r[0]&&(r=void 0)}return o[1]="format",(r||d[o.join("-")]).concat()},y.isWeekend=function(e,t){var a=i.getWeekend(t),r=(e||new Date).getDay();return a.end<a.start&&(a.end+=7,r<a.start&&(r+=7)),r>=a.start&&r<=a.end},y._getDayOfYear=function(e){return a.difference(new Date(e.getFullYear(),0,1,e.getHours()),e)+1},y._getWeekOfYear=function(e,t){1==arguments.length&&(t=0);var a=new Date(e.getFullYear(),0,1).getDay(),i=(a-t+7)%7,r=Math.floor((y._getDayOfYear(e)+i-1)/7);return a==t&&r++,r},y});//# sourceMappingURL=locale.js.map