//>>built
define("dojo/io-query",["./_base/lang"],function(t){var e={};return{objectToQuery:function(i){var n=encodeURIComponent,o=[];for(var a in i){var s=i[a];if(s!=e[a]){var r=n(a)+"=";if(t.isArray(s))for(var d=0,l=s.length;d<l;++d)o.push(r+n(s[d]));else o.push(r+n(s))}}return o.join("&")},queryToObject:function(e){for(var i,n,o,a=decodeURIComponent,s=e.split("&"),r={},d=0,l=s.length;d<l;++d)if(o=s[d],o.length){var h=o.indexOf("=");h<0?(i=a(o),n=""):(i=a(o.slice(0,h)),n=a(o.slice(h+1))),"string"==typeof r[i]&&(r[i]=[r[i]]),t.isArray(r[i])?r[i].push(n):r[i]=n}return r}}});//# sourceMappingURL=io-query.js.map