//>>built
define("dojox/encoding/base64",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.encoding.base64",!0),i="=",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return t.encode=function(e){for(var t=[],r=e.length,o=r%3,n=r-o,s=0;n>s;){var l=e[s++]<<16|e[s++]<<8|e[s++];t.push(a.charAt(l>>>18&63)),t.push(a.charAt(l>>>12&63)),t.push(a.charAt(l>>>6&63)),t.push(a.charAt(63&l))}switch(o){case 2:var l=e[s++]<<16|e[s++]<<8;t.push(a.charAt(l>>>18&63)),t.push(a.charAt(l>>>12&63)),t.push(a.charAt(l>>>6&63)),t.push(i);break;case 1:var l=e[s++]<<16;t.push(a.charAt(l>>>18&63)),t.push(a.charAt(l>>>12&63)),t.push(i),t.push(i)}return t.join("")},t.decode=function(e){for(var t=e.split(""),r=[],o=t.length;t[--o]==i;);for(var n=0;o>n;){var s=a.indexOf(t[n++])<<18;o>=n&&(s|=a.indexOf(t[n++])<<12),o>=n&&(s|=a.indexOf(t[n++])<<6),o>=n&&(s|=a.indexOf(t[n++])),r.push(s>>>16&255),r.push(s>>>8&255),r.push(255&s)}for(;0==r[r.length-1];)r.pop();return r},t});//# sourceMappingURL=base64.js.map