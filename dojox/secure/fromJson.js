//>>built
define("dojox/secure/fromJson",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.secure.fromJson"),i.secure.fromJson="undefined"!=typeof JSON?JSON.parse:function(){function e(e,t,i){return t?a[t]:String.fromCharCode(parseInt(i,16))}var t="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",i='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',r='(?:"'+i+'*")',o=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+t+"|"+r+")","g"),n=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),a={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=new String(""),d=(Object,Array,Object.hasOwnProperty);return function(t,i){var r,a=t.match(o),l=a[0],u=!1;"{"===l?r={}:"["===l?r=[]:(r=[],u=!0);for(var c,h=[r],f=1-u,m=a.length;f<m;++f){l=a[f];var p;switch(l.charCodeAt(0)){default:p=h[0],p[c||p.length]=+l,c=void 0;break;case 34:if(l=l.substring(1,l.length-1),-1!==l.indexOf("\\")&&(l=l.replace(n,e)),p=h[0],!c){if(!(p instanceof Array)){c=l||s;break}c=p.length}p[c]=l,c=void 0;break;case 91:p=h[0],h.unshift(p[c||p.length]=[]),c=void 0;break;case 93:h.shift();break;case 102:p=h[0],p[c||p.length]=!1,c=void 0;break;case 110:p=h[0],p[c||p.length]=null,c=void 0;break;case 116:p=h[0],p[c||p.length]=!0,c=void 0;break;case 123:p=h[0],h.unshift(p[c||p.length]={}),c=void 0;break;case 125:h.shift()}}if(u){if(1!==h.length)throw new Error;r=r[0]}else if(h.length)throw new Error;if(i){var g=function(e,t){var r=e[t];if(r&&"object"==typeof r){var o=null;for(var n in r)if(d.call(r,n)&&r!==e){var a=g(r,n);void 0!==a?r[n]=a:(o||(o=[]),o.push(n))}if(o)for(var s=o.length;--s>=0;)delete r[o[s]]}return i.call(e,t,r)};r=g({"":r},"")}return r}}()});//# sourceMappingURL=fromJson.js.map