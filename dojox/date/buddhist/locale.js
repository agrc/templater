//>>built
define("dojox/date/buddhist/locale",["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/buddhist"],function(e,t,a,i,r,o,n,d){function s(e,t,a,r,o){return o.replace(/([a-z])\1*/gi,function(a){var r,d,s=a.charAt(0),l=a.length,m=["abbr","wide","narrow"];switch(s){case"G":r=t.eraAbbr[0];break;case"y":r=String(e.getFullYear());break;case"M":var u=e.getMonth();if(3>l)r=u+1,d=!0;else{var h=["months","format",m[l-3]].join("-");r=t[h][u]}break;case"d":r=e.getDate(!0),d=!0;break;case"E":var f=e.getDay();if(3>l)r=f+1,d=!0;else{var c=["days","format",m[l-3]].join("-");r=t[c][f]}break;case"a":var y=e.getHours()<12?"am":"pm";r=t["dayPeriods-format-wide-"+y];break;case"h":case"H":case"K":case"k":var v=e.getHours();switch(s){case"h":r=v%12||12;break;case"H":r=v;break;case"K":r=v%12;break;case"k":r=v||24}d=!0;break;case"m":r=e.getMinutes(),d=!0;break;case"s":r=e.getSeconds(),d=!0;break;case"S":r=Math.round(e.getMilliseconds()*Math.pow(10,l-3)),d=!0;break;case"z":if(r=i.getTimezoneName(e.toGregorian()))break;l=4;case"Z":var p=e.toGregorian().getTimezoneOffset(),g=[0>=p?"+":"-",n.pad(Math.floor(Math.abs(p)/60),2),n.pad(Math.abs(p)%60,2)];4==l&&(g.splice(0,0,"GMT"),g.splice(3,0,":")),r=g.join("");break;default:throw new Error("dojox.date.buddhist.locale.formatPattern: invalid pattern char: "+o)}return d&&(r=n.pad(r,l)),r})}function l(e,t,i,r){var o=function(e){return e};t=t||o,i=i||o,r=r||o;var n=e.match(/(''|[^'])+/g),d="'"==e.charAt(0);return a.forEach(n,function(e,a){e?(n[a]=(d?i:t)(e),d=!d):n[a]=""}),r(n.join(""))}function m(e,t,a,i){i=o.escapeString(i);r.normalizeLocale(a.locale);return i.replace(/([a-z])\1*/gi,function(i){var r,o=i.charAt(0),n=i.length,d="",s="";switch(a.strict?(n>1&&(d="0{"+(n-1)+"}"),n>2&&(s="0{"+(n-2)+"}")):(d="0?",s="0{0,2}"),o){case"y":r="\\d+";break;case"M":r=n>2?"\\S+":d+"[1-9]|1[0-2]";break;case"d":r="[12]\\d|"+d+"[1-9]|3[01]";break;case"E":r="\\S+";break;case"h":r=d+"[1-9]|1[0-2]";break;case"k":r=d+"\\d|1[01]";break;case"H":r=d+"\\d|1\\d|2[0-3]";break;case"K":r=d+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":r=d+"\\d|[0-5]\\d";break;case"S":r="\\d{"+n+"}";break;case"a":var l=a.am||t["dayPeriods-format-wide-am"],m=a.pm||t["dayPeriods-format-wide-pm"];a.strict?r=l+"|"+m:(r=l+"|"+m,l!=l.toLowerCase()&&(r+="|"+l.toLowerCase()),m!=m.toLowerCase()&&(r+="|"+m.toLowerCase()));break;default:r=".*"}return e&&e.push(i),"("+r+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var u=t.getObject("date.buddhist.locale",!0,e);u.format=function(e,a){a=a||{};var i=r.normalizeLocale(a.locale),o=a.formatLength||"short",n=u._getBuddhistBundle(i),d=[],m=t.hitch(this,s,e,n,i,a.fullYear);if("year"==a.selector){var h=e.getFullYear();return h}if("time"!=a.selector){var f=a.datePattern||n["dateFormat-"+o];f&&d.push(l(f,m))}if("date"!=a.selector){var c=a.timePattern||n["timeFormat-"+o];c&&d.push(l(c,m))}var y=d.join(" ");return y},u.regexp=function(e){return u._parseInfo(e).regexp},u._parseInfo=function(e){e=e||{};var a,i=r.normalizeLocale(e.locale),o=u._getBuddhistBundle(i),n=e.formatLength||"short",d=e.datePattern||o["dateFormat-"+n],s=e.timePattern||o["timeFormat-"+n];a="date"==e.selector?d:"time"==e.selector?s:"undefined"==typeof s?d:d+" "+s;var h=[],f=l(a,t.hitch(this,m,h,o,e));return{regexp:f,tokens:h,bundle:o}},u.parse=function(e,t){e=e.replace(/[\u200E\u200F\u202A-\u202E]/g,""),t||(t={});var i=u._parseInfo(t),o=i.tokens,n=i.bundle,s=new RegExp("^"+i.regexp+"$"),l=s.exec(e);r.normalizeLocale(t.locale);if(!l)return null;var m=[2513,0,1,0,0,0,0],h="",f=0,c=["abbr","wide","narrow"],y=(a.every(l,function(e,i){if(!i)return!0;var r=o[i-1],d=r.length;switch(r.charAt(0)){case"y":m[0]=Number(e);break;case"M":if(d>2){var s=n["months-format-"+c[d-3]].concat();if(t.strict||(e=e.replace(".","").toLowerCase(),s=a.map(s,function(e){return e?e.replace(".","").toLowerCase():e})),e=a.indexOf(s,e),-1==e)return!1;f=d}else e--;m[1]=Number(e);break;case"D":m[1]=0;case"d":m[2]=Number(e);break;case"a":var l=t.am||n["dayPeriods-format-wide-am"],u=t.pm||n["dayPeriods-format-wide-pm"];if(!t.strict){var y=/\./g;e=e.replace(y,"").toLowerCase(),l=l.replace(y,"").toLowerCase(),u=u.replace(y,"").toLowerCase()}if(t.strict&&e!=l&&e!=u)return!1;h=e==u?"p":e==l?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":m[3]=Number(e);break;case"m":m[4]=Number(e);break;case"s":m[5]=Number(e);break;case"S":m[6]=Number(e)}return!0}),+m[3]);"p"===h&&12>y?m[3]=y+12:"a"===h&&12==y&&(m[3]=0);var v=new d(m[0],m[1],m[2],m[3],m[4],m[5],m[6]);return v};var h=[];return u.addCustomFormats=function(e,t){h.push({pkg:e,name:t})},u._getBuddhistBundle=function(e){var i={};return a.forEach(h,function(a){var o=r.getLocalization(a.pkg,a.name,e);i=t.mixin(i,o)},this),i},u.addCustomFormats("dojo.cldr","buddhist"),u.getNames=function(e,t,a,i,r){var o,n=u._getBuddhistBundle(i),d=[e,a,t];if("standAlone"==a){var s=d.join("-");o=n[s],1==o[0]&&(o=void 0)}return d[1]="format",(o||n[d.join("-")]).concat()},u});//# sourceMappingURL=locale.js.map