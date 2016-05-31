//>>built
define("dojo/number",["./_base/lang","./i18n","./i18n!./cldr/nls/number","./string","./regexp"],function(e,t,n,i,o){var r={};if(e.setObject("dojo.number",r),r.format=function(n,i){i=e.mixin({},i||{});var o=t.normalizeLocale(i.locale),a=t.getLocalization("dojo.cldr","number",o);i.customs=a;var s=i.pattern||a[(i.type||"decimal")+"Format"];return isNaN(n)||Math.abs(n)==1/0?null:r._applyPattern(n,s,i)},r._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/,r._applyPattern=function(e,t,n){n=n||{};var i=n.customs.group,o=n.customs.decimal,a=t.split(";"),s=a[0];if(t=a[0>e?1:0]||"-"+s,-1!=t.indexOf("%"))e*=100;else if(-1!=t.indexOf("‰"))e*=1e3;else if(-1!=t.indexOf("¤"))i=n.customs.currencyGroup||i,o=n.customs.currencyDecimal||o,t=t.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/,function(e,t,i,o){var r=["symbol","currency","displayName"][i.length-1],a=n[r]||n.currency||"";return a?t+a+o:""});else if(-1!=t.indexOf("E"))throw new Error("exponential notation not supported");var d=r._numberPatternRE,l=s.match(d);if(!l)throw new Error("unable to find a number expression in pattern: "+t);return n.fractional===!1&&(n.places=0),t.replace(d,r._formatAbsolute(e,l[0],{decimal:o,group:i,places:n.places,round:n.round}))},r.round=function(e,t,n){var i=10/(n||10);return(i*+e).toFixed(t)/i},0==.9.toFixed()){var a=r.round;r.round=function(e,t,n){var i=Math.pow(10,-t||0),o=Math.abs(e);return!e||o>=i?i=0:(o/=i,(.5>o||o>=.95)&&(i=0)),a(e,t,n)+(e>0?i:-i)}}return r._formatAbsolute=function(e,t,n){n=n||{},n.places===!0&&(n.places=0),n.places===1/0&&(n.places=6);var o=t.split("."),a="string"==typeof n.places&&n.places.indexOf(","),s=n.places;a?s=n.places.substring(a+1):s>=0||(s=(o[1]||[]).length),n.round<0||(e=r.round(e,s,n.round));var d=String(Math.abs(e)).split("."),l=d[1]||"";if(o[1]||n.places){a&&(n.places=n.places.substring(0,a));var c=void 0!==n.places?n.places:o[1]&&o[1].lastIndexOf("0")+1;c>l.length&&(d[1]=i.pad(l,c,"0",!0)),s<l.length&&(d[1]=l.substr(0,s))}else d[1]&&d.pop();var u=o[0].replace(",","");c=u.indexOf("0"),-1!=c&&(c=u.length-c,c>d[0].length&&(d[0]=i.pad(d[0],c)),-1==u.indexOf("#")&&(d[0]=d[0].substr(d[0].length-c)));var h,f,p=o[0].lastIndexOf(",");if(-1!=p){h=o[0].length-p-1;var m=o[0].substr(0,p);p=m.lastIndexOf(","),-1!=p&&(f=m.length-p-1)}for(var g=[],v=d[0];v;){var y=v.length-h;g.push(y>0?v.substr(y):v),v=y>0?v.slice(0,y):"",f&&(h=f,delete f)}return d[0]=g.reverse().join(n.group||","),d.join(n.decimal||".")},r.regexp=function(e){return r._parseInfo(e).regexp},r._parseInfo=function(e){e=e||{};var n=t.normalizeLocale(e.locale),i=t.getLocalization("dojo.cldr","number",n),a=e.pattern||i[(e.type||"decimal")+"Format"],s=i.group,d=i.decimal,l=1;if(-1!=a.indexOf("%"))l/=100;else if(-1!=a.indexOf("‰"))l/=1e3;else{var c=-1!=a.indexOf("¤");c&&(s=i.currencyGroup||s,d=i.currencyDecimal||d)}var u=a.split(";");1==u.length&&u.push("-"+u[0]);var h=o.buildGroupRE(u,function(t){return t="(?:"+o.escapeString(t,".")+")",t.replace(r._numberPatternRE,function(t){var n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:d,exponent:!1},i=t.split("."),o=e.places;1==i.length&&1!=l&&(i[1]="###"),1==i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&void 0==e.fractional&&(n.fractional=!0),!e.places&&o<i[1].length&&(o+=","+i[1].length),n.places=o);var a=i[0].split(",");return a.length>1&&(n.groupSize=a.pop().length,a.length>1&&(n.groupSize2=a.pop().length)),"("+r._realNumberRegexp(n)+")"})},!0);return c&&(h=h.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(t,n,i,r){var a=["symbol","currency","displayName"][i.length-1],s=o.escapeString(e[a]||e.currency||"");return s?(n=n?"[\\s\\xa0]":"",r=r?"[\\s\\xa0]":"",e.strict?n+s+r:(n&&(n+="*"),r&&(r+="*"),"(?:"+n+s+r+")?")):""})),{regexp:h.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:d,factor:l}},r.parse=function(e,t){var n=r._parseInfo(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;var o=i[1];if(!i[1]){if(!i[2])return NaN;o=i[2],n.factor*=-1}return o=o.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),o*n.factor},r._realNumberRegexp=function(e){e=e||{},"places"in e||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(e.places)||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var t=r._integerRegexp(e),n=o.buildGroupRE(e.fractional,function(t){var n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places==1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n},!0),i=o.buildGroupRE(e.exponent,function(t){return t?"([eE]"+r._integerRegexp({signed:e.eSigned})+")":""}),a=t+n;return n&&(a="(?:(?:"+a+")|(?:"+n+"))"),a+i},r._integerRegexp=function(e){e=e||{},"signed"in e||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="";var t=o.buildGroupRE(e.signed,function(e){return e?"[-+]":""},!0),n=o.buildGroupRE(e.separator,function(t){if(!t)return"(?:\\d+)";t=o.escapeString(t)," "==t?t="\\s":" "==t&&(t="\\s\\xa0");var n=e.groupSize,i=e.groupSize2;if(i){var r="(?:0|[1-9]\\d{0,"+(i-1)+"}(?:["+t+"]\\d{"+i+"})*["+t+"]\\d{"+n+"})";return n-i>0?"(?:"+r+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":r}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"},!0);return t+n},r});//# sourceMappingURL=number.js.map