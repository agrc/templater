//>>built
define("dojox/sql/_crypto",["dojo","dijit","dojox"],function(dojo,dijit,dojox){dojo.provide("dojox.sql._crypto"),dojo.mixin(dojox.sql._crypto,{_POOL_SIZE:100,encrypt:function(e,t,i){this._initWorkerPool();var a={plaintext:e,password:t};a=dojo.toJson(a),a="encr:"+String(a),this._assignWork(a,i)},decrypt:function(e,t,i){this._initWorkerPool();var a={ciphertext:e,password:t};a=dojo.toJson(a),a="decr:"+String(a),this._assignWork(a,i)},_initWorkerPool:function(){if(!this._manager)try{this._manager=google.gears.factory.create("beta.workerpool","1.0"),this._unemployed=[],this._employed={},this._handleMessage=[];var e=this;this._manager.onmessage=function(t,i){var a=e._employed["_"+i];if(e._employed["_"+i]=void 0,e._unemployed.push("_"+i),e._handleMessage.length){var r=e._handleMessage.shift();e._assignWork(r.msg,r.callback)}a(t)};for(var t="function _workerInit(){gearsWorkerPool.onmessage = "+String(this._workerHandler)+";}",i=t+" _workerInit();",a=0;a<this._POOL_SIZE;a++)this._unemployed.push("_"+this._manager.createWorker(i))}catch(r){throw r.message||r}},_assignWork:function(e,t){if(!this._handleMessage.length&&this._unemployed.length){var i=this._unemployed.shift().substring(1);this._employed["_"+i]=t,this._manager.sendMessage(e,parseInt(i,10))}else this._handleMessage={msg:e,callback:t}},_workerHandler:function(msg,sender){function Cipher(e,t){for(var i=4,a=t.length/i-1,r=[[],[],[],[]],n=0;4*i>n;n++)r[n%4][Math.floor(n/4)]=e[n];r=AddRoundKey(r,t,0,i);for(var o=1;a>o;o++)r=SubBytes(r,i),r=ShiftRows(r,i),r=MixColumns(r,i),r=AddRoundKey(r,t,o,i);r=SubBytes(r,i),r=ShiftRows(r,i),r=AddRoundKey(r,t,a,i);for(var s=new Array(4*i),n=0;4*i>n;n++)s[n]=r[n%4][Math.floor(n/4)];return s}function SubBytes(e,t){for(var i=0;4>i;i++)for(var a=0;t>a;a++)e[i][a]=Sbox[e[i][a]];return e}function ShiftRows(e,t){for(var i=new Array(4),a=1;4>a;a++){for(var r=0;4>r;r++)i[r]=e[a][(r+a)%t];for(var r=0;4>r;r++)e[a][r]=i[r]}return e}function MixColumns(e,t){for(var i=0;4>i;i++){for(var a=new Array(4),r=new Array(4),n=0;4>n;n++)a[n]=e[n][i],r[n]=128&e[n][i]?e[n][i]<<1^283:e[n][i]<<1;e[0][i]=r[0]^a[1]^r[1]^a[2]^a[3],e[1][i]=a[0]^r[1]^a[2]^r[2]^a[3],e[2][i]=a[0]^a[1]^r[2]^a[3]^r[3],e[3][i]=a[0]^r[0]^a[1]^a[2]^r[3]}return e}function AddRoundKey(e,t,i,a){for(var r=0;4>r;r++)for(var n=0;a>n;n++)e[r][n]^=t[4*i+n][r];return e}function KeyExpansion(e){for(var t=4,i=e.length/4,a=i+6,r=new Array(t*(a+1)),n=new Array(4),o=0;i>o;o++){var s=[e[4*o],e[4*o+1],e[4*o+2],e[4*o+3]];r[o]=s}for(var o=i;t*(a+1)>o;o++){r[o]=new Array(4);for(var l=0;4>l;l++)n[l]=r[o-1][l];if(o%i==0){n=SubWord(RotWord(n));for(var l=0;4>l;l++)n[l]^=Rcon[o/i][l]}else i>6&&o%i==4&&(n=SubWord(n));for(var l=0;4>l;l++)r[o][l]=r[o-i][l]^n[l]}return r}function SubWord(e){for(var t=0;4>t;t++)e[t]=Sbox[e[t]];return e}function RotWord(e){e[4]=e[0];for(var t=0;4>t;t++)e[t]=e[t+1];return e}function AESEncryptCtr(e,t,i){if(128!=i&&192!=i&&256!=i)return"";for(var a=i/8,r=new Array(a),n=0;a>n;n++)r[n]=255&t.charCodeAt(n);var o=Cipher(r,KeyExpansion(r));o=o.concat(o.slice(0,a-16));for(var s=16,l=new Array(s),d=(new Date).getTime(),n=0;4>n;n++)l[n]=d>>>8*n&255;for(var n=0;4>n;n++)l[n+4]=d/4294967296>>>8*n&255;for(var u=KeyExpansion(o),c=Math.ceil(e.length/s),h=new Array(c),m=0;c>m;m++){for(var f=0;4>f;f++)l[15-f]=m>>>8*f&255;for(var f=0;4>f;f++)l[15-f-4]=m/4294967296>>>8*f;for(var g=Cipher(l,u),p=c-1>m?s:(e.length-1)%s+1,y="",n=0;p>n;n++){var v=e.charCodeAt(m*s+n),b=v^g[n];y+=String.fromCharCode(b)}h[m]=escCtrlChars(y)}for(var k="",n=0;8>n;n++)k+=String.fromCharCode(l[n]);return k=escCtrlChars(k),k+"-"+h.join("-")}function AESDecryptCtr(e,t,i){if(128!=i&&192!=i&&256!=i)return"";for(var a=i/8,r=new Array(a),n=0;a>n;n++)r[n]=255&t.charCodeAt(n);var o=KeyExpansion(r),s=Cipher(r,o);s=s.concat(s.slice(0,a-16));var l=KeyExpansion(s);e=e.split("-");for(var d=16,u=new Array(d),c=unescCtrlChars(e[0]),n=0;8>n;n++)u[n]=c.charCodeAt(n);for(var h=new Array(e.length-1),m=1;m<e.length;m++){for(var f=0;4>f;f++)u[15-f]=m-1>>>8*f&255;for(var f=0;4>f;f++)u[15-f-4]=m/4294967296-1>>>8*f&255;var g=Cipher(u,l);e[m]=unescCtrlChars(e[m]);for(var p="",n=0;n<e[m].length;n++){var y=e[m].charCodeAt(n),v=y^g[n];p+=String.fromCharCode(v)}h[m-1]=p}return h.join("")}function escCtrlChars(e){return e.replace(/[\0\t\n\v\f\r\xa0!-]/g,function(e){return"!"+e.charCodeAt(0)+"!"})}function unescCtrlChars(e){return e.replace(/!\d\d?\d?!/g,function(e){return String.fromCharCode(e.slice(1,-1))})}function encrypt(e,t){return AESEncryptCtr(e,t,256)}function decrypt(e,t){return AESDecryptCtr(e,t,256)}var Sbox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Rcon=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],cmd=msg.substr(0,4),arg=msg.substr(5);if("encr"==cmd){arg=eval("("+arg+")");var plaintext=arg.plaintext,password=arg.password,results=encrypt(plaintext,password);gearsWorkerPool.sendMessage(String(results),sender)}else if("decr"==cmd){arg=eval("("+arg+")");var ciphertext=arg.ciphertext,password=arg.password,results=decrypt(ciphertext,password);gearsWorkerPool.sendMessage(String(results),sender)}}})});//# sourceMappingURL=_crypto.js.map