//>>built
define("dojox/lang/oo/rearrange",["dojo","dijit","dojox"],function(e,t,a){e.provide("dojox.lang.oo.rearrange"),function(){var t=e._extraNames,i=t.length,r=Object.prototype.toString,n={};a.lang.oo.rearrange=function(e,a){var o,s,l,d;for(o in a)s=a[o],s&&"[object String]"!=r.call(s)||(l=e[o],o in n&&n[o]===l||(delete e[o]||(e[o]=void 0),s&&(e[s]=l)));if(i)for(d=0;i>d;++d)o=t[d],s=a[o],s&&"[object String]"!=r.call(s)||(l=e[o],o in n&&n[o]===l||(delete e[o]||(e[o]=void 0),s&&(e[s]=l)));return e}}()});//# sourceMappingURL=rearrange.js.map