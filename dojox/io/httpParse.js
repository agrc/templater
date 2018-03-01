//>>built
define("dojox/io/httpParse",["dojo/_base/kernel"],function(e){return e.getObject("io.httpParse",!0,dojox),dojox.io.httpParse=function(e,t,i){var a=[],r=e.length;do{var o={},n=e.match(/(\n*[^\n]+)/);if(!n)return null;e=e.substring(n[0].length+1),n=n[1];var s=e.match(/([^\n]+\n)*/)[0];e=e.substring(s.length);var l=e.substring(0,1);e=e.substring(1),s=(t||"")+s;var d=s;s=s.match(/[^:\n]+:[^\n]+\n/g);for(var h=0;h<s.length;h++){var u=s[h].indexOf(":");o[s[h].substring(0,u)]=s[h].substring(u+1).replace(/(^[ \r\n]*)|([ \r\n]*)$/g,"")}n=n.split(" ");var c,m={status:parseInt(n[1],10),statusText:n[2],readyState:3,getAllResponseHeaders:function(){return d},getResponseHeader:function(e){return o[e]}},f=o["Content-Length"];if(f){if(!(f<=e.length))return a;c=e.substring(0,f)}else if(c=e.match(/(.*)HTTP\/\d\.\d \d\d\d[\w\s]*\n/))c=c[0];else{if(i&&"\n"!=l)return a;c=e}a.push(m),e=e.substring(c.length),m.responseText=c,m.readyState=4,m._lastIndex=r-e.length}while(e);return a},dojox.io.httpParse});//# sourceMappingURL=httpParse.js.map