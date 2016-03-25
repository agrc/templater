//>>built
define("dojo/string",["./_base/kernel","./_base/lang"],function(t,e){var i=/[&<>'"\/]/g,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},o={};return e.setObject("dojo.string",o),o.escape=function(t){return t?t.replace(i,function(t){return n[t]}):""},o.rep=function(t,e){if(0>=e||!t)return"";for(var i=[];1&e&&i.push(t),e>>=1;)t+=t;return i.join("")},o.pad=function(t,e,i,n){i||(i="0");var r=String(t),a=o.rep(i,Math.ceil((e-r.length)/i.length));return n?r+a:a+r},o.substitute=function(i,n,o,r){return r=r||t.global,o=o?e.hitch(r,o):function(t){return t},i.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,i,a){var s=e.getObject(i,!1,n);return a&&(s=e.getObject(a,!1,r).call(r,s,i)),o(s,i).toString()})},o.trim=String.prototype.trim?e.trim:function(t){t=t.replace(/^\s+/,"");for(var e=t.length-1;e>=0;e--)if(/\S/.test(t.charAt(e))){t=t.substring(0,e+1);break}return t},o});//# sourceMappingURL=string.js.map