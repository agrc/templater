//>>built
define("dojox/dtl/filter/htmlstrings",["dojo/_base/lang","../_base"],function(e,t){var i=e.getObject("filter.htmlstrings",!0,t);return e.mixin(i,{_linebreaksrn:/(\r\n|\n\r)/g,_linebreaksn:/\n{2,}/g,_linebreakss:/(^\s+|\s+$)/g,_linebreaksbr:/\n/g,_removetagsfind:/[a-z0-9]+/g,_striptags:/<[^>]*?>/g,linebreaks:function(e){var t=[],a=i;e=e.replace(a._linebreaksrn,"\n");for(var r=e.split(a._linebreaksn),n=0;n<r.length;n++){var o=r[n].replace(a._linebreakss,"").replace(a._linebreaksbr,"<br />");t.push("<p>"+o+"</p>")}return t.join("\n\n")},linebreaksbr:function(e){var t=i;return e.replace(t._linebreaksrn,"\n").replace(t._linebreaksbr,"<br />")},removetags:function(e,t){for(var a,r=i,n=[];a=r._removetagsfind.exec(t);)n.push(a[0]);return n="("+n.join("|")+")",e.replace(new RegExp("</?s*"+n+"s*[^>]*>","gi"),"")},striptags:function(e){return e.replace(dojox.dtl.filter.htmlstrings._striptags,"")}}),i});//# sourceMappingURL=htmlstrings.js.map