//>>built
define("dojox/encoding/ascii85",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.encoding.ascii85",!0),a=function(e,t,a){var i,r,o,n=[0,0,0,0,0];for(i=0;t>i;i+=4){if(o=256*(256*(256*e[i]+e[i+1])+e[i+2])+e[i+3])for(r=0;5>r;n[r++]=o%85+33,o=Math.floor(o/85));else a.push("z");a.push(String.fromCharCode(n[4],n[3],n[2],n[1],n[0]))}};return t.encode=function(e){var t=[],i=e.length%4,r=e.length-i;if(a(e,r,t),i){for(var o=e.slice(r);o.length<4;)o.push(0);a(o,4,t);var n=t.pop();"z"==n&&(n="!!!!!"),t.push(n.substr(0,i+1))}return t.join("")},t.decode=function(e){var t,a,i,r,o,n,d=e.length,l=[],s=[0,0,0,0,0];for(t=0;d>t;++t)if("z"!=e.charAt(t)){for(a=0;5>a;++a)s[a]=e.charCodeAt(t+a)-33;if(n=d-t,5>n){for(a=n;4>a;s[++a]=0);s[n]=85}for(i=85*(85*(85*(85*s[0]+s[1])+s[2])+s[3])+s[4],r=255&i,i>>>=8,o=255&i,i>>>=8,l.push(i>>>8,255&i,o,r),a=n;5>a;++a,l.pop());t+=4}else l.push(0,0,0,0);return l},t});//# sourceMappingURL=ascii85.js.map