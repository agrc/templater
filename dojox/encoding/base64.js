//>>built
define("dojox/encoding/base64",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.encoding.base64",!0),i="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return t.encode=function(e){for(var t=[],a=e.length,n=a%3,o=a-n,s=0;s<o;){var d=e[s++]<<16|e[s++]<<8|e[s++];t.push(r.charAt(d>>>18&63)),t.push(r.charAt(d>>>12&63)),t.push(r.charAt(d>>>6&63)),t.push(r.charAt(63&d))}switch(n){case 2:var d=e[s++]<<16|e[s++]<<8;t.push(r.charAt(d>>>18&63)),t.push(r.charAt(d>>>12&63)),t.push(r.charAt(d>>>6&63)),t.push(i);break;case 1:var d=e[s++]<<16;t.push(r.charAt(d>>>18&63)),t.push(r.charAt(d>>>12&63)),t.push(i),t.push(i)}return t.join("")},t.decode=function(e){for(var t=e.split(""),a=[],n=t.length;t[--n]==i;);for(var o=0;o<n;){var s=r.indexOf(t[o++])<<18;o<=n&&(s|=r.indexOf(t[o++])<<12),o<=n&&(s|=r.indexOf(t[o++])<<6),o<=n&&(s|=r.indexOf(t[o++])),a.push(s>>>16&255),a.push(s>>>8&255),a.push(255&s)}for(;0==a[a.length-1];)a.pop();return a},t});//# sourceMappingURL=base64.js.map