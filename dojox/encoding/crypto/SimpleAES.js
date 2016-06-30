//>>built
define("dojox/encoding/crypto/SimpleAES",["../base64","./_base"],function(e,t){function i(e,t){for(var i=4,s=t.length/i-1,d=[[],[],[],[]],l=0;4*i>l;l++)d[l%4][Math.floor(l/4)]=e[l];d=o(d,t,0,i);for(var u=1;s>u;u++)d=r(d,i),d=a(d,i),d=n(d,i),d=o(d,t,u,i);d=r(d,i),d=a(d,i),d=o(d,t,s,i);for(var c=new Array(4*i),l=0;4*i>l;l++)c[l]=d[l%4][Math.floor(l/4)];return c}function r(e,t){for(var i=0;4>i;i++)for(var r=0;t>r;r++)e[i][r]=f[e[i][r]];return e}function a(e,t){for(var i=new Array(4),r=1;4>r;r++){for(var a=0;4>a;a++)i[a]=e[r][(a+r)%t];for(var a=0;4>a;a++)e[r][a]=i[a]}return e}function n(e,t){for(var i=0;4>i;i++){for(var r=new Array(4),a=new Array(4),n=0;4>n;n++)r[n]=e[n][i],a[n]=128&e[n][i]?e[n][i]<<1^283:e[n][i]<<1;e[0][i]=a[0]^r[1]^a[1]^r[2]^r[3],e[1][i]=r[0]^a[1]^r[2]^a[2]^r[3],e[2][i]=r[0]^r[1]^a[2]^r[3]^a[3],e[3][i]=r[0]^a[0]^r[1]^r[2]^a[3]}return e}function o(e,t,i,r){for(var a=0;4>a;a++)for(var n=0;r>n;n++)e[a][n]^=t[4*i+n][a];return e}function s(e){for(var t=4,i=e.length/4,r=i+6,a=new Array(t*(r+1)),n=new Array(4),o=0;i>o;o++){var s=[e[4*o],e[4*o+1],e[4*o+2],e[4*o+3]];a[o]=s}for(var o=i;t*(r+1)>o;o++){a[o]=new Array(4);for(var u=0;4>u;u++)n[u]=a[o-1][u];if(o%i==0){n=d(l(n));for(var u=0;4>u;u++)n[u]^=m[o/i][u]}else i>6&&o%i==4&&(n=d(n));for(var u=0;4>u;u++)a[o][u]=a[o-i][u]^n[u]}return a}function d(e){for(var t=0;4>t;t++)e[t]=f[e[t]];return e}function l(e){e[4]=e[0];for(var t=0;4>t;t++)e[t]=e[t+1];return e}function u(e,t,r){if(128!=r&&192!=r&&256!=r)return"";for(var a=r/8,n=new Array(a),o=0;a>o;o++)n[o]=255&t.charCodeAt(o);var d=i(n,s(n));d=d.concat(d.slice(0,a-16));for(var l=16,u=new Array(l),c=(new Date).getTime(),o=0;4>o;o++)u[o]=c>>>8*o&255;for(var o=0;4>o;o++)u[o+4]=c/4294967296>>>8*o&255;for(var h=s(d),f=Math.ceil(e.length/l),m=new Array(f),p=0;f>p;p++){for(var g=0;4>g;g++)u[15-g]=p>>>8*g&255;for(var g=0;4>g;g++)u[15-g-4]=p/4294967296>>>8*g;for(var y=i(u,h),v=f-1>p?l:(e.length-1)%l+1,b="",o=0;v>o;o++){var M=e.charCodeAt(p*l+o),_=M^y[o];b+=(16>_?"0":"")+_.toString(16)}m[p]=b}for(var w="",o=0;8>o;o++)w+=(u[o]<16?"0":"")+u[o].toString(16);return w+" "+m.join(" ")}function c(e){var t=[];return e.replace(/(..)/g,function(e){t.push(parseInt(e,16))}),t}function h(e,t,r){if(128!=r&&192!=r&&256!=r)return"";for(var a=r/8,n=new Array(a),o=0;a>o;o++)n[o]=255&t.charCodeAt(o);var d=s(n),l=i(n,d);l=l.concat(l.slice(0,a-16));var u=s(l);e=e.split(" ");var h=16,f=new Array(h),m=e[0];f=c(m);for(var p=new Array(e.length-1),g=1;g<e.length;g++){for(var y=0;4>y;y++)f[15-y]=g-1>>>8*y&255;for(var y=0;4>y;y++)f[15-y-4]=g/4294967296-1>>>8*y&255;for(var v=i(f,u),b="",M=c(e[g]),o=0;o<M.length;o++){var _=(e[g].charCodeAt(o),M[o]^v[o]);b+=String.fromCharCode(_)}p[g-1]=b}return p.join("")}var f=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],m=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];return t.SimpleAES=new function(){this.encrypt=function(e,t){return u(e,t,256)},this.decrypt=function(e,t){return h(e,t,256)}},t.SimpleAES});//# sourceMappingURL=SimpleAES.js.map