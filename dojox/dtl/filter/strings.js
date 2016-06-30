//>>built
define("dojox/dtl/filter/strings",["dojo/_base/lang","dojo/_base/array","dojox/string/tokenize","dojox/string/sprintf","../filter/htmlstrings","../_base"],function(e,t,i,a,r,o){var n=e.getObject("filter.strings",!0,o);return e.mixin(n,{_urlquote:function(e,t){return t||(t="/"),i(e,/([^\w-_.])/g,function(e){if(-1==t.indexOf(e)){if(" "==e)return"+";for(var i=e.charCodeAt(0).toString(16).toUpperCase();i.length<2;)i="0"+i;return"%"+i}return e}).join("")},addslashes:function(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/'/g,"\\'")},capfirst:function(e){return e=""+e,e.charAt(0).toUpperCase()+e.substring(1)},center:function(e,t){t=t||e.length,e+="";var i=t-e.length;i%2&&(e+=" ",i-=1);for(var a=0;i>a;a+=2)e=" "+e+" ";return e},cut:function(e,t){return t=t+""||"",e+="",e.replace(new RegExp(t,"g"),"")},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(e){return e.replace(n._fix_ampersands,"&amp;")},floatformat:function(e,t){t=parseInt(t||-1,10),e=parseFloat(e);var i=e-e.toFixed(0);return!i&&0>t?e.toFixed():(e=e.toFixed(Math.abs(t)),0>t?parseFloat(e)+"":e)},iriencode:function(e){return n._urlquote(e,"/#%[]=:;$&()+,!")},linenumbers:function(e){for(var t,i=dojox.dtl.filter,a=e.split("\n"),r=[],o=(a.length+"").length,n=0;n<a.length;n++)t=a[n],r.push(i.strings.ljust(n+1,o)+". "+dojox.dtl._base.escape(t));return r.join("\n")},ljust:function(e,t){for(e+="",t=parseInt(t,10);e.length<t;)e+=" ";return e},lower:function(e){return(e+"").toLowerCase()},make_list:function(e){var t=[];if("number"==typeof e&&(e+=""),e.charAt){for(var i=0;i<e.length;i++)t.push(e.charAt(i));return t}if("object"==typeof e){for(var a in e)t.push(e[a]);return t}return[]},rjust:function(e,t){for(e+="",t=parseInt(t,10);e.length<t;)e=" "+e;return e},slugify:function(e){return e=e.replace(/[^\w\s-]/g,"").toLowerCase(),e.replace(/[\-\s]+/g,"-")},_strings:{},stringformat:function(e,t){t=""+t;var i=n._strings;return i[t]||(i[t]=new a.Formatter("%"+t)),i[t].format(e)},title:function(e){for(var t,i,a="",r=0;r<e.length;r++)i=e.charAt(r),a+=" "!=t&&"\n"!=t&&"	"!=t&&t?i.toLowerCase():i.toUpperCase(),t=i;return a},_truncatewords:/[ \n\r\t]/,truncatewords:function(e,t){if(t=parseInt(t,10),!t)return e;for(var i,a,r=0,o=e.length,d=0;r<e.length;r++){if(i=e.charAt(r),n._truncatewords.test(a)){if(!n._truncatewords.test(i)&&(++d,d==t))return e.substring(0,o+1)+" ..."}else n._truncatewords.test(i)||(o=r);a=i}return e},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,link:!0,base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(e,a){if(a=parseInt(a,10),0>=a)return"";var r=0,o=[],d=i(e,n._truncate_words,function(e,i){if(i){if(++r,a>r)return i;if(r==a)return i+" ..."}var d=e.match(n._truncate_tag);if(d&&!(r>=a)){var s=d[1],l=d[2].toLowerCase();d[3];if(s||n._truncate_singlets[l]);else if(s){var m=t.indexOf(o,l);-1!=m&&(o=o.slice(m+1))}else o.unshift(l);return e}}).join("");d=d.replace(/\s+$/g,"");for(var s,l=0;s=o[l];l++)d+="</"+s+">";return d},upper:function(e){return e.toUpperCase()},urlencode:function(e){return n._urlquote(e)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(e){return n.urlizetrunc(e)},urlizetrunc:function(e,t){return t=parseInt(t),i(e,/(\S+)/g,function(e){var i=n._urlize.exec(e);if(!i)return e;var a=(i[1],i[2]),r=(i[3],0==a.indexOf("www.")),o=-1!=a.indexOf("@"),d=-1!=a.indexOf(":"),s=0==a.indexOf("http://"),l=0==a.indexOf("https://"),m=/[a-zA-Z0-9]/.test(a.charAt(0)),u=a.substring(a.length-4),h=a;return t>3&&(h=h.substring(0,t-3)+"..."),r||!o&&!s&&a.length&&m&&(".org"==u||".net"==u||".com"==u)?'<a href="http://'+a+'" rel="nofollow">'+h+"</a>":s||l?'<a href="'+a+'" rel="nofollow">'+h+"</a>":o&&!r&&!d&&n._urlize2.test(a)?'<a href="mailto:'+a+'">'+a+"</a>":e}).join("")},wordcount:function(t){return t=e.trim(t),t?t.split(/\s+/g).length:0},wordwrap:function(e,t){t=parseInt(t);var i=[],a=e.split(/\s+/g);if(a.length){var r=a.shift();i.push(r);for(var o=r.length-r.lastIndexOf("\n")-1,n=0;n<a.length;n++){if(r=a[n],-1!=r.indexOf("\n"))var d=r.split(/\n/g);else var d=[r];o+=d[0].length+1,t&&o>t?(i.push("\n"),o=d[d.length-1].length):(i.push(" "),d.length>1&&(o=d[d.length-1].length)),i.push(r)}}return i.join("")}}),n});//# sourceMappingURL=strings.js.map