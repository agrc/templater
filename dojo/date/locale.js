//>>built
define("dojo/date/locale",["../_base/lang","../_base/array","../date","../cldr/supplemental","../i18n","../regexp","../string","../i18n!../cldr/nls/gregorian","module"],function(e,t,a,i,r,d,o,n,l){function s(e,t,a,r){return r.replace(/([a-z])\1*/gi,function(d){var n,l,s=d.charAt(0),m=d.length,f=["abbr","wide","narrow"];switch(s){case"G":n=t[4>m?"eraAbbr":"eraNames"][e.getFullYear()<0?0:1];break;case"y":switch(n=e.getFullYear(),m){case 1:break;case 2:if(!a.fullYear){n=String(n),n=n.substr(n.length-2);break}default:l=!0}break;case"Q":case"q":n=Math.ceil((e.getMonth()+1)/3),l=!0;break;case"M":case"L":var h=e.getMonth();if(3>m)n=h+1,l=!0;else{var c=["months","L"==s?"standAlone":"format",f[m-3]].join("-");n=t[c][h]}break;case"w":var y=0;n=u._getWeekOfYear(e,y),l=!0;break;case"d":n=e.getDate(),l=!0;break;case"D":n=u._getDayOfYear(e),l=!0;break;case"e":case"c":var v=e.getDay();if(2>m){n=(v-i.getFirstDayOfWeek(a.locale)+8)%7;break}case"E":if(v=e.getDay(),3>m)n=v+1,l=!0;else{var p=["days","c"==s?"standAlone":"format",f[m-3]].join("-");n=t[p][v]}break;case"a":var M=e.getHours()<12?"am":"pm";n=a[M]||t["dayPeriods-format-wide-"+M];break;case"h":case"H":case"K":case"k":var g=e.getHours();switch(s){case"h":n=g%12||12;break;case"H":n=g;break;case"K":n=g%12;break;case"k":n=g||24}l=!0;break;case"m":n=e.getMinutes(),l=!0;break;case"s":n=e.getSeconds(),l=!0;break;case"S":n=Math.round(e.getMilliseconds()*Math.pow(10,m-3)),l=!0;break;case"v":case"z":if(n=u._getZone(e,!0,a))break;m=4;case"Z":var b=u._getZone(e,!1,a),w=[0>=b?"+":"-",o.pad(Math.floor(Math.abs(b)/60),2),o.pad(Math.abs(b)%60,2)];4==m&&(w.splice(0,0,"GMT"),w.splice(3,0,":")),n=w.join("");break;default:throw new Error("dojo.date.locale.format: invalid pattern char: "+r)}return l&&(n=o.pad(n,m)),n})}function m(e,a,i,r){var d=function(e){return e};a=a||d,i=i||d,r=r||d;var o=e.match(/(''|[^'])+/g),n="'"==e.charAt(0);return t.forEach(o,function(e,t){e?(o[t]=(n?i:a)(e.replace(/''/g,"'")),n=!n):o[t]=""}),r(o.join(""))}function f(e,t,a,i){return i=d.escapeString(i),a.strict||(i=i.replace(" a"," ?a")),i.replace(/([a-z])\1*/gi,function(i){var r,d=i.charAt(0),o=i.length,n="",l="";switch(a.strict?(o>1&&(n="0{"+(o-1)+"}"),o>2&&(l="0{"+(o-2)+"}")):(n="0?",l="0{0,2}"),d){case"y":r="\\d{2,4}";break;case"M":case"L":r=o>2?"\\S+?":"1[0-2]|"+n+"[1-9]";break;case"D":r="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+n+"[1-9][0-9]|"+l+"[1-9]";break;case"d":r="3[01]|[12]\\d|"+n+"[1-9]";break;case"w":r="[1-4][0-9]|5[0-3]|"+n+"[1-9]";break;case"E":case"e":case"c":r=".+?";break;case"h":r="1[0-2]|"+n+"[1-9]";break;case"k":r="1[01]|"+n+"\\d";break;case"H":r="1\\d|2[0-3]|"+n+"\\d";break;case"K":r="1\\d|2[0-4]|"+n+"[1-9]";break;case"m":case"s":r="[0-5]\\d";break;case"S":r="\\d{"+o+"}";break;case"a":var s=a.am||t["dayPeriods-format-wide-am"],m=a.pm||t["dayPeriods-format-wide-pm"];r=s+"|"+m,a.strict||(s!=s.toLowerCase()&&(r+="|"+s.toLowerCase()),m!=m.toLowerCase()&&(r+="|"+m.toLowerCase()),-1!=r.indexOf(".")&&(r+="|"+r.replace(/\./g,""))),r=r.replace(/\./g,"\\.");break;default:r=".*"}return e&&e.push(i),"("+r+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var u={};e.setObject(l.id.replace(/\//g,"."),u),u._getZone=function(e,t,i){return t?a.getTimezoneName(e):e.getTimezoneOffset()},u.format=function(t,a){a=a||{};var i=r.normalizeLocale(a.locale),d=a.formatLength||"short",o=u._getGregorianBundle(i),n=[],l=e.hitch(this,s,t,o,a);if("year"==a.selector)return m(o["dateFormatItem-yyyy"]||"yyyy",l);var f;return"date"!=a.selector&&(f=a.timePattern||o["timeFormat-"+d],f&&n.push(m(f,l))),"time"!=a.selector&&(f=a.datePattern||o["dateFormat-"+d],f&&n.push(m(f,l))),1==n.length?n[0]:o["dateTimeFormat-"+d].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,t){return n[t]})},u.regexp=function(e){return u._parseInfo(e).regexp},u._parseInfo=function(t){t=t||{};var a,i=r.normalizeLocale(t.locale),d=u._getGregorianBundle(i),o=t.formatLength||"short",n=t.datePattern||d["dateFormat-"+o],l=t.timePattern||d["timeFormat-"+o];a="date"==t.selector?n:"time"==t.selector?l:d["dateTimeFormat-"+o].replace(/\{(\d+)\}/g,function(e,t){return[l,n][t]});var s=[],h=m(a,e.hitch(this,f,s,d,t));return{regexp:h,tokens:s,bundle:d}},u.parse=function(e,i){var r=/[\u200E\u200F\u202A\u202E]/g,d=u._parseInfo(i),o=d.tokens,n=d.bundle,l=new RegExp("^"+d.regexp.replace(r,"")+"$",d.strict?"":"i"),s=l.exec(e&&e.replace(r,""));if(!s)return null;var m=["abbr","wide","narrow"],f=[1970,0,1,0,0,0,0],h="",c=t.every(s,function(e,a){if(!a)return!0;var r=o[a-1],d=r.length,l=r.charAt(0);switch(l){case"y":if(2!=d&&i.strict)f[0]=e;else if(100>e){e=Number(e);var s=""+(new Date).getFullYear(),u=100*s.substring(0,2),c=Math.min(Number(s.substring(2,4))+20,99);f[0]=c>e?u+e:u-100+e}else{if(i.strict)return!1;f[0]=e}break;case"M":case"L":if(d>2){var y=n["months-"+("L"==l?"standAlone":"format")+"-"+m[d-3]].concat();if(i.strict||(e=e.replace(".","").toLowerCase(),y=t.map(y,function(e){return e.replace(".","").toLowerCase()})),e=t.indexOf(y,e),-1==e)return!1}else e--;f[1]=e;break;case"E":case"e":case"c":var v=n["days-"+("c"==l?"standAlone":"format")+"-"+m[d-3]].concat();if(i.strict||(e=e.toLowerCase(),v=t.map(v,function(e){return e.toLowerCase()})),e=t.indexOf(v,e),-1==e)return!1;break;case"D":f[1]=0;case"d":f[2]=e;break;case"a":var p=i.am||n["dayPeriods-format-wide-am"],M=i.pm||n["dayPeriods-format-wide-pm"];if(!i.strict){var g=/\./g;e=e.replace(g,"").toLowerCase(),p=p.replace(g,"").toLowerCase(),M=M.replace(g,"").toLowerCase()}if(i.strict&&e!=p&&e!=M)return!1;h=e==M?"p":e==p?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":if(e>23)return!1;f[3]=e;break;case"m":f[4]=e;break;case"s":f[5]=e;break;case"S":f[6]=e}return!0}),y=+f[3];"p"===h&&12>y?f[3]=y+12:"a"===h&&12==y&&(f[3]=0);var v=new Date(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);i.strict&&v.setFullYear(f[0]);var p=o.join(""),M=-1!=p.indexOf("d"),g=-1!=p.indexOf("M");return!c||g&&v.getMonth()>f[1]||M&&v.getDate()>f[2]?null:((g&&v.getMonth()<f[1]||M&&v.getDate()<f[2])&&(v=a.add(v,"hour",1)),v)};var h=[],c={};return u.addCustomFormats=function(e,t){h.push({pkg:e,name:t}),c={}},u._getGregorianBundle=function(a){if(c[a])return c[a];var i={};return t.forEach(h,function(t){var d=r.getLocalization(t.pkg,t.name,a);i=e.mixin(i,d)},this),c[a]=i},u.addCustomFormats(l.id.replace(/\/date\/locale$/,".cldr"),"gregorian"),u.getNames=function(e,t,a,i){var r,d=u._getGregorianBundle(i),o=[e,a,t];if("standAlone"==a){var n=o.join("-");r=d[n],1==r[0]&&(r=void 0)}return o[1]="format",(r||d[o.join("-")]).concat()},u.isWeekend=function(e,t){var a=i.getWeekend(t),r=(e||new Date).getDay();return a.end<a.start&&(a.end+=7,r<a.start&&(r+=7)),r>=a.start&&r<=a.end},u._getDayOfYear=function(e){return a.difference(new Date(e.getFullYear(),0,1,e.getHours()),e)+1},u._getWeekOfYear=function(e,t){1==arguments.length&&(t=0);var a=new Date(e.getFullYear(),0,1).getDay(),i=(a-t+7)%7,r=Math.floor((u._getDayOfYear(e)+i-1)/7);return a==t&&r++,r},u});//# sourceMappingURL=locale.js.map