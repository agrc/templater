//>>built
define("dojo/regexp",["./_base/kernel","./_base/lang"],function(e,t){var i={};return t.setObject("dojo.regexp",i),i.escapeString=function(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(e){return t&&-1!=t.indexOf(e)?e:"\\"+e})},i.buildGroupRE=function(e,t,n){if(!(e instanceof Array))return t(e);for(var o=[],s=0;s<e.length;s++)o.push(t(e[s]));return i.group(o.join("|"),n)},i.group=function(e,t){return"("+(t?"?:":"")+e+")"},i});//# sourceMappingURL=regexp.js.map