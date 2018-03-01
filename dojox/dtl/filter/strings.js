//>>built
define("dojox/dtl/filter/strings",["dojo/_base/lang","dojo/_base/array","dojox/string/tokenize","dojox/string/sprintf","../filter/htmlstrings","../_base"],function(e,t,a,i,r,o){var n=e.getObject("filter.strings",!0,o);return e.mixin(n,{_urlquote:function(e,t){return t||(t="/"),a(e,/([^\w-_.])/g,function(e){if(-1==t.indexOf(e)){if(" "==e)return"+";for(var a=e.charCodeAt(0).toString(16).toUpperCase();a.length<2;)a="0"+a;return"%"+a}return e}).join("")},addslashes:function(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/'/g,"\\'")},capfirst:function(e){return e=""+e,e.charAt(0).toUpperCase()+e.substring(1)},center:function(e,t){t=t||e.length,e+="";var a=t-e.length;a%2&&(e+=" ",a-=1);for(var i=0;i<a;i+=2)e=" "+e+" ";return e},cut:function(e,t){return t=t+""||"",e+="",e.replace(new RegExp(t,"g"),"")},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(e){return e.replace(n._fix_ampersands,"&amp;")},floatformat:function(e,t){return t=parseInt(t||-1,10),e=parseFloat(e),!(e-e.toFixed(0))&&t<0?e.toFixed():(e=e.toFixed(Math.abs(t)),t<0?parseFloat(e)+"":e)},iriencode:function(e){return n._urlquote(e,"/#%[]=:;$&()+,!")},linenumbers:function(e){for(var t,a=dojox.dtl.filter,i=e.split("\n"),r=[],o=(i.length+"").length,n=0;n<i.length;n++)t=i[n],r.push(a.strings.ljust(n+1,o)+". "+dojox.dtl._base.escape(t));return r.join("\n")},ljust:function(e,t){for(e+="",t=parseInt(t,10);e.length<t;)e+=" ";return e},lower:function(e){return(e+"").toLowerCase()},make_list:function(e){var t=[];if("number"==typeof e&&(e+=""),e.charAt){for(var a=0;a<e.length;a++)t.push(e.charAt(a));return t}if("object"==typeof e){for(var i in e)t.push(e[i]);return t}return[]},rjust:function(e,t){for(e+="",t=parseInt(t,10);e.length<t;)e=" "+e;return e},slugify:function(e){return e=e.replace(/[^\w\s-]/g,"").toLowerCase(),e.replace(/[\-\s]+/g,"-")},_strings:{},stringformat:function(e,t){t=""+t;var a=n._strings;return a[t]||(a[t]=new i.Formatter("%"+t)),a[t].format(e)},title:function(e){for(var t,a,i="",r=0;r<e.length;r++)a=e.charAt(r),i+=" "!=t&&"\n"!=t&&"\t"!=t&&t?a.toLowerCase():a.toUpperCase(),t=a;return i},_truncatewords:/[ \n\r\t]/,truncatewords:function(e,t){if(!(t=parseInt(t,10)))return e;for(var a,i,r=0,o=e.length,d=0;r<e.length;r++){if(a=e.charAt(r),n._truncatewords.test(i)){if(!n._truncatewords.test(a)&&++d==t)return e.substring(0,o+1)+" ..."}else n._truncatewords.test(a)||(o=r);i=a}return e},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,link:!0,base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(e,i){if((i=parseInt(i,10))<=0)return"";var r=0,o=[],d=a(e,n._truncate_words,function(e,a){if(a){if(++r<i)return a;if(r==i)return a+" ..."}var d=e.match(n._truncate_tag);if(d&&!(r>=i)){var s=d[1],l=d[2].toLowerCase();d[3];if(s||n._truncate_singlets[l]);else if(s){var m=t.indexOf(o,l);-1!=m&&(o=o.slice(m+1))}else o.unshift(l);return e}}).join("");d=d.replace(/\s+$/g,"");for(var s,l=0;s=o[l];l++)d+="</"+s+">";return d},upper:function(e){return e.toUpperCase()},urlencode:function(e){return n._urlquote(e)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(e){return n.urlizetrunc(e)},urlizetrunc:function(e,t){return t=parseInt(t),a(e,/(\S+)/g,function(e){var a=n._urlize.exec(e);if(!a)return e;var i=(a[1],a[2]),r=(a[3],0==i.indexOf("www.")),o=-1!=i.indexOf("@"),d=-1!=i.indexOf(":"),s=0==i.indexOf("http://"),l=0==i.indexOf("https://"),m=/[a-zA-Z0-9]/.test(i.charAt(0)),u=i.substring(i.length-4),h=i;return t>3&&(h=h.substring(0,t-3)+"..."),r||!o&&!s&&i.length&&m&&(".org"==u||".net"==u||".com"==u)?'<a href="http://'+i+'" rel="nofollow">'+h+"</a>":s||l?'<a href="'+i+'" rel="nofollow">'+h+"</a>":o&&!r&&!d&&n._urlize2.test(i)?'<a href="mailto:'+i+'">'+i+"</a>":e}).join("")},wordcount:function(t){return t=e.trim(t),t?t.split(/\s+/g).length:0},wordwrap:function(e,t){t=parseInt(t);var a=[],i=e.split(/\s+/g);if(i.length){var r=i.shift();a.push(r);for(var o=r.length-r.lastIndexOf("\n")-1,n=0;n<i.length;n++){if(r=i[n],-1!=r.indexOf("\n"))var d=r.split(/\n/g);else var d=[r];o+=d[0].length+1,t&&o>t?(a.push("\n"),o=d[d.length-1].length):(a.push(" "),d.length>1&&(o=d[d.length-1].length)),a.push(r)}}return a.join("")}}),n});//# sourceMappingURL=strings.js.map