//>>built
define("dojox/encoding/base64",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.encoding.base64",!0),i="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return t.encode=function(e){for(var t=[],a=e.length,n=a%3,o=a-n,s=0;o>s;){var l=e[s++]<<16|e[s++]<<8|e[s++];t.push(r.charAt(l>>>18&63)),t.push(r.charAt(l>>>12&63)),t.push(r.charAt(l>>>6&63)),t.push(r.charAt(63&l))}switch(n){case 2:var l=e[s++]<<16|e[s++]<<8;t.push(r.charAt(l>>>18&63)),t.push(r.charAt(l>>>12&63)),t.push(r.charAt(l>>>6&63)),t.push(i);break;case 1:var l=e[s++]<<16;t.push(r.charAt(l>>>18&63)),t.push(r.charAt(l>>>12&63)),t.push(i),t.push(i)}return t.join("")},t.decode=function(e){for(var t=e.split(""),a=[],n=t.length;t[--n]==i;);for(var o=0;n>o;){var s=r.indexOf(t[o++])<<18;n>=o&&(s|=r.indexOf(t[o++])<<12),n>=o&&(s|=r.indexOf(t[o++])<<6),n>=o&&(s|=r.indexOf(t[o++])),a.push(s>>>16&255),a.push(s>>>8&255),a.push(255&s)}for(;0==a[a.length-1];)a.pop();return a},t});//# sourceMappingURL=base64.js.map