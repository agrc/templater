//>>built
define("dojo/text",["./_base/kernel","require","./has","./request"],function(t,e,i,n){var o;o=function(t,e,i){n(t,{sync:!!e,headers:{"X-Requested-With":null}}).then(i)};var r={},a=function(t){if(t){t=t.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");var e=t.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);e&&(t=e[1])}else t="";return t},s={},d={};return t.cache=function(t,i,n){var s;"string"==typeof t?/\//.test(t)?(s=t,n=i):s=e.toUrl(t.replace(/\./g,"/")+(i?"/"+i:"")):(s=t+"",n=i);var d=void 0!=n&&"string"!=typeof n?n.value:n,l=n&&n.sanitize;return"string"==typeof d?(r[s]=d,l?a(d):d):null===d?(delete r[s],null):(s in r||o(s,!0,function(t){r[s]=t}),l?a(r[s]):r[s])},{dynamic:!0,normalize:function(t,e){var i=t.split("!"),n=i[0];return(/^\./.test(n)?e(n):n)+(i[1]?"!"+i[1]:"")},load:function(t,e,i){var n=t.split("!"),l=n.length>1,u=n[0],h=e.toUrl(n[0]),c="url:"+h,f=s,p=function(t){i(l?a(t):t)};if(u in r?f=r[u]:e.cache&&c in e.cache?f=e.cache[c]:h in r&&(f=r[h]),f===s)if(d[h])d[h].push(p);else{var m=d[h]=[p];o(h,!e.async,function(t){r[u]=r[h]=t;for(var e=0;e<m.length;)m[e++](t);delete d[h]})}else p(f)}}});//# sourceMappingURL=text.js.map