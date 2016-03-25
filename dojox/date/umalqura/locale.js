//>>built
define("dojox/date/umalqura/locale",["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/islamic"],function(e,t,a,i,r,o,d,n,l){function s(e,t,a,r,o){return o.replace(/([a-z])\1*/gi,function(a){var r,n,l=a.charAt(0),s=a.length,m=["abbr","wide","narrow"];switch(l){case"G":r=t.eraAbbr[0];break;case"y":r=String(e.getFullYear());break;case"M":var u=e.getMonth();if(3>s)r=u+1,n=!0;else{var f=["months","format",m[s-3]].join("-");r=t[f][u]}break;case"d":r=e.getDate(!0),n=!0;break;case"E":var h=e.getDay();if(3>s)r=h+1,n=!0;else{var c=["days","format",m[s-3]].join("-");r=t[c][h]}break;case"a":var y=e.getHours()<12?"am":"pm";r=t["dayPeriods-format-wide-"+y];break;case"h":case"H":case"K":case"k":var v=e.getHours();switch(l){case"h":r=v%12||12;break;case"H":r=v;break;case"K":r=v%12;break;case"k":r=v||24}n=!0;break;case"m":r=e.getMinutes(),n=!0;break;case"s":r=e.getSeconds(),n=!0;break;case"S":r=Math.round(e.getMilliseconds()*Math.pow(10,s-3)),n=!0;break;case"z":if(r=i.getTimezoneName(e.toGregorian()))break;s=4;case"Z":var p=e.toGregorian().getTimezoneOffset(),g=[0>=p?"+":"-",d.pad(Math.floor(Math.abs(p)/60),2),d.pad(Math.abs(p)%60,2)];4==s&&(g.splice(0,0,"GMT"),g.splice(3,0,":")),r=g.join("");break;default:throw new Error("dojox.date.umalqura.locale.formatPattern: invalid pattern char: "+o)}return n&&(r=d.pad(r,s)),r})}function m(e,t,i,r){var o=function(e){return e};t=t||o,i=i||o,r=r||o;var d=e.match(/(''|[^'])+/g),n="'"==e.charAt(0);return a.forEach(d,function(e,a){e?(d[a]=(n?i:t)(e),n=!n):d[a]=""}),r(d.join(""))}function u(e,t,a,i){i=o.escapeString(i);r.normalizeLocale(a.locale);return i.replace(/([a-z])\1*/gi,function(i){var r,o=i.charAt(0),d=i.length,n="",l="";switch(a.strict?(d>1&&(n="0{"+(d-1)+"}"),d>2&&(l="0{"+(d-2)+"}")):(n="0?",l="0{0,2}"),o){case"y":r="\\d+";break;case"M":r=d>2?"\\S+ ?\\S+":n+"[1-9]|1[0-2]";break;case"d":r="[12]\\d|"+n+"[1-9]|3[01]";break;case"E":r="\\S+";break;case"h":r=n+"[1-9]|1[0-2]";break;case"k":r=n+"\\d|1[01]";break;case"H":r=n+"\\d|1\\d|2[0-3]";break;case"K":r=n+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":r=n+"\\d|[0-5]\\d";break;case"S":r="\\d{"+d+"}";break;case"a":var s=a.am||t["dayPeriods-format-wide-am"],m=a.pm||t["dayPeriods-format-wide-pm"];a.strict?r=s+"|"+m:(r=s+"|"+m,s!=s.toLowerCase()&&(r+="|"+s.toLowerCase()),m!=m.toLowerCase()&&(r+="|"+m.toLowerCase()));break;default:r=".*"}return e&&e.push(i),"("+r+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var f=t.getObject("date.umalqura.locale",!0,e);f.format=function(e,a){a=a||{};var i=r.normalizeLocale(a.locale),o=a.formatLength||"short",d=f._getIslamicBundle(i),n=[],l=t.hitch(this,s,e,d,i,a.fullYear);if("year"==a.selector){var u=e.getFullYear();return u}if("time"!=a.selector){var h=a.datePattern||d["dateFormat-"+o];h&&n.push(m(h,l))}if("date"!=a.selector){var c=a.timePattern||d["timeFormat-"+o];c&&n.push(m(c,l))}var y=n.join(" ");return y},f.regexp=function(e){return f._parseInfo(e).regexp},f._parseInfo=function(e){e=e||{};var a,i=r.normalizeLocale(e.locale),o=f._getIslamicBundle(i),d=e.formatLength||"short",n=e.datePattern||o["dateFormat-"+d],l=e.timePattern||o["timeFormat-"+d];a="date"==e.selector?n:"time"==e.selector?l:"undefined"==typeof l?n:n+" "+l;var s=[],h=m(a,t.hitch(this,u,s,o,e));return{regexp:h,tokens:s,bundle:o}},f.parse=function(e,t){e=e.replace(/[\u200E\u200F\u202A\u202E]/g,""),t||(t={});var i=f._parseInfo(t),o=i.tokens,d=i.bundle,l=i.regexp.replace(/[\u200E\u200F\u202A\u202E]/g,""),s=new RegExp("^"+l+"$"),m=s.exec(e);r.normalizeLocale(t.locale);if(!m)return null;var u=[1389,0,1,0,0,0,0],h="",c=0,y=["abbr","wide","narrow"],v=(a.every(m,function(e,i){if(!i)return!0;var r=o[i-1],n=r.length;switch(r.charAt(0)){case"y":u[0]=Number(e);break;case"M":if(n>2){var l=d["months-format-"+y[n-3]].concat();if(t.strict||(e=e.replace(".","").toLowerCase(),l=a.map(l,function(e){return e?e.replace(".","").toLowerCase():e})),e=a.indexOf(l,e),-1==e)return!1;c=n}else e--;u[1]=Number(e);break;case"D":u[1]=0;case"d":u[2]=Number(e);break;case"a":var s=t.am||d["dayPeriods-format-wide-am"],m=t.pm||d["dayPeriods-format-wide-pm"];if(!t.strict){var f=/\./g;e=e.replace(f,"").toLowerCase(),s=s.replace(f,"").toLowerCase(),m=m.replace(f,"").toLowerCase()}if(t.strict&&e!=s&&e!=m)return!1;h=e==m?"p":e==s?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":u[3]=Number(e);break;case"m":u[4]=Number(e);break;case"s":u[5]=Number(e);break;case"S":u[6]=Number(e)}return!0}),+u[3]);"p"===h&&12>v?u[3]=v+12:"a"===h&&12==v&&(u[3]=0);var p=new n(u[0],u[1],u[2],u[3],u[4],u[5],u[6]);return p};var h=[];return f.addCustomFormats=function(e,t){h.push({pkg:e,name:t})},f._getIslamicBundle=function(e){var i={};return a.forEach(h,function(a){var o=r.getLocalization(a.pkg,a.name,e);i=t.mixin(i,o)},this),i},f.addCustomFormats("dojo.cldr","islamic"),f.getNames=function(e,t,a,i,r){var o,d=f._getIslamicBundle(i),n=[e,a,t];if("standAlone"==a){var l=n.join("-");o=d[l],1==o[0]&&(o=void 0)}return n[1]="format",(o||d[n.join("-")]).concat()},f.weekDays=f.getNames("days","wide","format"),f.months=f.getNames("months","wide","format"),f});//# sourceMappingURL=locale.js.map