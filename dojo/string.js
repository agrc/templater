//>>built
define("dojo/string",["./_base/kernel","./_base/lang"],function(e,t){var i=/[&<>'"\/]/g,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},o={};return t.setObject("dojo.string",o),o.escape=function(e){return e?e.replace(i,function(e){return n[e]}):""},o.rep=function(e,t){if(t<=0||!e)return"";for(var i=[];1&t&&i.push(e),t>>=1;)e+=e;return i.join("")},o.pad=function(e,t,i,n){i||(i="0");var r=String(e),s=o.rep(i,Math.ceil((t-r.length)/i.length));return n?r+s:s+r},o.substitute=function(i,n,o,r){return r=r||e.global,o=o?t.hitch(r,o):function(e){return e},i.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,function(e,i,s){if(""==i)return"$";var a=t.getObject(i,!1,n);return s&&(a=t.getObject(s,!1,r).call(r,a,i)),o(a,i).toString()})},o.trim=String.prototype.trim?t.trim:function(e){e=e.replace(/^\s+/,"");for(var t=e.length-1;t>=0;t--)if(/\S/.test(e.charAt(t))){e=e.substring(0,t+1);break}return e},o});//# sourceMappingURL=string.js.map