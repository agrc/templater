//>>built
define("dojox/encoding/crypto/SimpleAES",["../base64","./_base"],function(e,t){function i(e,t){for(var i=4,s=t.length/i-1,d=[[],[],[],[]],l=0;4*i>l;l++)d[l%4][Math.floor(l/4)]=e[l];d=n(d,t,0,i);for(var u=1;s>u;u++)d=a(d,i),d=r(d,i),d=o(d,i),d=n(d,t,u,i);d=a(d,i),d=r(d,i),d=n(d,t,s,i);for(var c=new Array(4*i),l=0;4*i>l;l++)c[l]=d[l%4][Math.floor(l/4)];return c}function a(e,t){for(var i=0;4>i;i++)for(var a=0;t>a;a++)e[i][a]=f[e[i][a]];return e}function r(e,t){for(var i=new Array(4),a=1;4>a;a++){for(var r=0;4>r;r++)i[r]=e[a][(r+a)%t];for(var r=0;4>r;r++)e[a][r]=i[r]}return e}function o(e,t){for(var i=0;4>i;i++){for(var a=new Array(4),r=new Array(4),o=0;4>o;o++)a[o]=e[o][i],r[o]=128&e[o][i]?e[o][i]<<1^283:e[o][i]<<1;e[0][i]=r[0]^a[1]^r[1]^a[2]^a[3],e[1][i]=a[0]^r[1]^a[2]^r[2]^a[3],e[2][i]=a[0]^a[1]^r[2]^a[3]^r[3],e[3][i]=a[0]^r[0]^a[1]^a[2]^r[3]}return e}function n(e,t,i,a){for(var r=0;4>r;r++)for(var o=0;a>o;o++)e[r][o]^=t[4*i+o][r];return e}function s(e){for(var t=4,i=e.length/4,a=i+6,r=new Array(t*(a+1)),o=new Array(4),n=0;i>n;n++){var s=[e[4*n],e[4*n+1],e[4*n+2],e[4*n+3]];r[n]=s}for(var n=i;t*(a+1)>n;n++){r[n]=new Array(4);for(var u=0;4>u;u++)o[u]=r[n-1][u];if(n%i==0){o=d(l(o));for(var u=0;4>u;u++)o[u]^=m[n/i][u]}else i>6&&n%i==4&&(o=d(o));for(var u=0;4>u;u++)r[n][u]=r[n-i][u]^o[u]}return r}function d(e){for(var t=0;4>t;t++)e[t]=f[e[t]];return e}function l(e){e[4]=e[0];for(var t=0;4>t;t++)e[t]=e[t+1];return e}function u(e,t,a){if(128!=a&&192!=a&&256!=a)return"";for(var r=a/8,o=new Array(r),n=0;r>n;n++)o[n]=255&t.charCodeAt(n);var d=i(o,s(o));d=d.concat(d.slice(0,r-16));for(var l=16,u=new Array(l),c=(new Date).getTime(),n=0;4>n;n++)u[n]=c>>>8*n&255;for(var n=0;4>n;n++)u[n+4]=c/4294967296>>>8*n&255;for(var h=s(d),f=Math.ceil(e.length/l),m=new Array(f),p=0;f>p;p++){for(var y=0;4>y;y++)u[15-y]=p>>>8*y&255;for(var y=0;4>y;y++)u[15-y-4]=p/4294967296>>>8*y;for(var v=i(u,h),g=f-1>p?l:(e.length-1)%l+1,b="",n=0;g>n;n++){var w=e.charCodeAt(p*l+n),M=w^v[n];b+=(16>M?"0":"")+M.toString(16)}m[p]=b}for(var _="",n=0;8>n;n++)_+=(u[n]<16?"0":"")+u[n].toString(16);return _+" "+m.join(" ")}function c(e){var t=[];return e.replace(/(..)/g,function(e){t.push(parseInt(e,16))}),t}function h(e,t,a){if(128!=a&&192!=a&&256!=a)return"";for(var r=a/8,o=new Array(r),n=0;r>n;n++)o[n]=255&t.charCodeAt(n);var d=s(o),l=i(o,d);l=l.concat(l.slice(0,r-16));var u=s(l);e=e.split(" ");var h=16,f=new Array(h),m=e[0];f=c(m);for(var p=new Array(e.length-1),y=1;y<e.length;y++){for(var v=0;4>v;v++)f[15-v]=y-1>>>8*v&255;for(var v=0;4>v;v++)f[15-v-4]=y/4294967296-1>>>8*v&255;for(var g=i(f,u),b="",w=c(e[y]),n=0;n<w.length;n++){var M=(e[y].charCodeAt(n),w[n]^g[n]);b+=String.fromCharCode(M)}p[y-1]=b}return p.join("")}var f=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],m=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];return t.SimpleAES=new function(){this.encrypt=function(e,t){return u(e,t,256)},this.decrypt=function(e,t){return h(e,t,256)}},t.SimpleAES});//# sourceMappingURL=SimpleAES.js.map