//>>built
define("dojox/date/hebrew/locale",["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","./numerals","dojo/i18n!dojo/cldr/nls/hebrew"],function(e,t,i,a,r,o,n,s,d){function l(e,t,i,a,r){return r.replace(/([a-z])\1*/gi,function(a){var o,s,l=a.charAt(0),m=a.length,h=["abbr","wide","narrow"];switch(l){case"G":o=t[4>m?"eraAbbr":"eraNames"][0];break;case"y":o=i.match(/^he(?:-.+)?$/)?d.getYearHebrewLetters(e.getFullYear()):String(e.getFullYear());break;case"M":var f=e.getMonth();if(3>m)!e.isLeapYear(e.getFullYear())&&f>5&&f--,i.match(/^he(?:-.+)?$/)?o=d.getMonthHebrewLetters(f):(o=f+1,s=!0);else{var c=u.getNames("months",h[m-3],"format",i,e);o=c[f]}break;case"d":i.match(/^he(?:-.+)?$/)?o=e.getDateLocalized(i):(o=e.getDate(),s=!0);break;case"E":var y=e.getDay();if(3>m)o=y+1,s=!0;else{var v=["days","format",h[m-3]].join("-");o=t[v][y]}break;case"a":var p=e.getHours()<12?"am":"pm";o=t["dayPeriods-format-wide-"+p];break;case"h":case"H":case"K":case"k":var g=e.getHours();switch(l){case"h":o=g%12||12;break;case"H":o=g;break;case"K":o=g%12;break;case"k":o=g||24}s=!0;break;case"m":o=e.getMinutes(),s=!0;break;case"s":o=e.getSeconds(),s=!0;break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,m-3)),s=!0;break;case"z":o="";break;default:throw new Error("dojox.date.hebrew.locale.formatPattern: invalid pattern char: "+r)}return s&&(o=n.pad(o,m)),o})}function m(e,t,a,r){var o=function(e){return e};t=t||o,a=a||o,r=r||o;var n=e.match(/(''|[^'])+/g),s="'"==e.charAt(0);return i.forEach(n,function(e,i){e?(n[i]=(s?a:t)(e),s=!s):n[i]=""}),r(n.join(""))}function h(e,t,i,a){a=o.escapeString(a);var n=r.normalizeLocale(i.locale);return a.replace(/([a-z])\1*/gi,function(a){var r,o=a.charAt(0),s=a.length,d="",l="";switch(i.strict?(s>1&&(d="0{"+(s-1)+"}"),s>2&&(l="0{"+(s-2)+"}")):(d="0?",l="0{0,2}"),o){case"y":r="\\S+";break;case"M":r=n.match("^he(?:-.+)?$")?s>2?"\\S+ ?\\S+":"\\S{1,4}":s>2?"\\S+ ?\\S+":d+"[1-9]|1[0-3]";break;case"d":r=n.match("^he(?:-.+)?$")?"\\S['\"'׳]{1,2}\\S?":"[12]\\d|"+d+"[1-9]|30";break;case"E":r=n.match("^he(?:-.+)?$")?s>3?"\\S+ ?\\S+":"\\S":"\\S+";break;case"h":r=d+"[1-9]|1[0-2]";break;case"k":r=d+"\\d|1[01]";break;case"H":r=d+"\\d|1\\d|2[0-3]";break;case"K":r=d+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":r=d+"\\d|[0-5]\\d";break;case"S":r="\\d{"+s+"}";break;case"a":var m=i.am||t["dayPeriods-format-wide-am"],h=i.pm||t["dayPeriods-format-wide-pm"];i.strict?r=m+"|"+h:(r=m+"|"+h,m!=m.toLowerCase()&&(r+="|"+m.toLowerCase()),h!=h.toLowerCase()&&(r+="|"+h.toLowerCase()));break;default:r=".*"}return e&&e.push(a),"("+r+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var u=t.getObject("date.hebrew.locale",!0,e);r.getLocalization("dojo.cldr","hebrew"),u.format=function(e,i){i=i||{};var a=r.normalizeLocale(i.locale),o=i.formatLength||"short",n=u._getHebrewBundle(a),s=[],h=t.hitch(this,l,e,n,a,i.fullYear);if("year"==i.selector){var f=e.getFullYear();return a.match(/^he(?:-.+)?$/)?d.getYearHebrewLetters(f):f}if("time"!=i.selector){var c=i.datePattern||n["dateFormat-"+o];c&&s.push(m(c,h))}if("date"!=i.selector){var y=i.timePattern||n["timeFormat-"+o];y&&s.push(m(y,h))}var v=s.join(" ");return v},u.regexp=function(e){return u._parseInfo(e).regexp},u._parseInfo=function(e){e=e||{};var i,a=r.normalizeLocale(e.locale),o=u._getHebrewBundle(a),n=e.formatLength||"short",s=e.datePattern||o["dateFormat-"+n],d=e.timePattern||o["timeFormat-"+n];i="date"==e.selector?s:"time"==e.selector?d:void 0===d?s:s+" "+d;var l=[],f=m(i,t.hitch(this,h,l,o,e));return{regexp:f,tokens:l,bundle:o}},u.parse=function(e,t){e=e.replace(/[\u200E\u200F\u202A-\u202E]/g,""),t||(t={});var a=u._parseInfo(t),o=a.tokens,n=a.bundle,l=new RegExp("^"+a.regexp+"$"),m=l.exec(e),h=r.normalizeLocale(t.locale);if(!m)return null;var f=[5730,3,23,0,0,0,0],c="",y=0,v=["abbr","wide","narrow"],p=(i.every(m,function(e,a){if(!a)return!0;var r=o[a-1],l=r.length;switch(r.charAt(0)){case"y":h.match(/^he(?:-.+)?$/)?f[0]=d.parseYearHebrewLetters(e):f[0]=Number(e);break;case"M":if(l>2){var m=u.getNames("months",v[l-3],"format",h,new s(5769,1,1)),p=u.getNames("months",v[l-3],"format",h,new s(5768,1,1));t.strict||(e=e.replace(".","").toLowerCase(),m=i.map(m,function(e){return e?e.replace(".","").toLowerCase():e}),p=i.map(p,function(e){return e?e.replace(".","").toLowerCase():e}));var g=e;if(e=i.indexOf(m,g),-1==e&&(e=i.indexOf(p,g),-1==e))return!1;y=l}else h.match(/^he(?:-.+)?$/)?e=d.parseMonthHebrewLetters(e):e--;f[1]=Number(e);break;case"D":f[1]=0;case"d":h.match(/^he(?:-.+)?$/)?f[2]=d.parseDayHebrewLetters(e):f[2]=Number(e);break;case"a":var M=t.am||n["dayPeriods-format-wide-am"],b=t.pm||n["dayPeriods-format-wide-pm"];if(!t.strict){var k=/\./g;e=e.replace(k,"").toLowerCase(),M=M.replace(k,"").toLowerCase(),b=b.replace(k,"").toLowerCase()}if(t.strict&&e!=M&&e!=b)return!1;c=e==b?"p":e==M?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":f[3]=Number(e);break;case"m":f[4]=Number(e);break;case"s":f[5]=Number(e);break;case"S":f[6]=Number(e)}return!0}),+f[3]);"p"===c&&12>p?f[3]=p+12:"a"===c&&12==p&&(f[3]=0);var g=new s(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);return 3>y&&f[1]>=5&&!g.isLeapYear(g.getFullYear())&&g.setMonth(f[1]+1),g};var f=[];return u.addCustomFormats=function(e,t){f.push({pkg:e,name:t})},u._getHebrewBundle=function(e){var a={};return i.forEach(f,function(i){var o=r.getLocalization(i.pkg,i.name,e);a=t.mixin(a,o)},this),a},u.addCustomFormats("dojo.cldr","hebrew"),u.getNames=function(e,t,i,a,r){var o,n=u._getHebrewBundle(a),s=[e,i,t];if("standAlone"==i){var d=s.join("-");o=n[d],1==o[0]&&(o=void 0)}s[1]="format";var l=(o||n[s.join("-")]).concat();return"months"==e&&(r.isLeapYear(r.getFullYear())?(s.push("leap"),l[6]=n[s.join("-")]):delete l[5]),l},u});//# sourceMappingURL=locale.js.map