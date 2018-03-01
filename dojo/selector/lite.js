//>>built
define("dojo/selector/lite",["../has","../_base/kernel"],function(e,t){"use strict";var a=document.createElement("div"),i=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector,r=a.querySelectorAll,d=/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;e.add("dom-matches-selector",!!i),e.add("dom-qsa",!!r);var o=function(a,i){if(s&&a.indexOf(",")>-1)return s(a,i);var d=i?i.ownerDocument||i:t.doc||document,m=(r?/^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/:/^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(a);if(i=i||d,m){var f=8===e("ie")&&e("quirks")?i.nodeType===d.nodeType:null!==i.parentNode&&9!==i.nodeType&&i.parentNode===d;if(m[2]&&f){var u=t.byId?t.byId(m[2],d):d.getElementById(m[2]);if(!u||m[1]&&m[1]!=u.tagName.toLowerCase())return[];if(i!=d)for(var y=u;y!=i;)if(!(y=y.parentNode))return[];return m[3]?o(m[3],u):[u]}if(m[3]&&i.getElementsByClassName)return i.getElementsByClassName(m[4]);var u;if(m[5]){if(u=i.getElementsByTagName(m[5]),!m[4]&&!m[6])return u;a=(m[4]||"")+m[6]}}if(r)return 1===i.nodeType&&"object"!==i.nodeName.toLowerCase()?n(i,a,i.querySelectorAll):i.querySelectorAll(a);u||(u=i.getElementsByTagName("*"));for(var h=[],M=0,v=u.length;M<v;M++){var c=u[M];1==c.nodeType&&l(c,a,i)&&h.push(c)}return h},n=function(e,t,a){var i=e,r=e.getAttribute("id"),o=r||"__dojo__",n=e.parentNode,l=/^\s*[+~]/.test(t);if(l&&!n)return[];r?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),l&&n&&(e=e.parentNode);for(var s=t.match(d),m=0;m<s.length;m++)s[m]="[id='"+o+"'] "+s[m];t=s.join(",");try{return a.call(e,t)}finally{r||i.removeAttribute("id")}};if(!e("dom-matches-selector"))var l=function(){function e(e,t,a){var i=t.charAt(0);'"'!=i&&"'"!=i||(t=t.slice(1,-1)),t=t.replace(/\\/g,"");var r=n[a||""];return function(a){var i=a.getAttribute(e);return i&&r(i,t)}}function t(e){return function(t,a){for(;(t=t.parentNode)!=a;)if(e(t,a))return!0}}function i(e){return function(t,a){return t=t.parentNode,e?t!=a&&e(t,a):t==a}}function r(e,t){return e?function(a,i){return t(a)&&e(a,i)}:t}var d="div"==a.tagName?"toLowerCase":"toUpperCase",o={"":function(e){return e=e[d](),function(t){return t.tagName==e}},".":function(e){var t=" "+e+" ";return function(a){return a.className.indexOf(e)>-1&&(" "+a.className+" ").indexOf(t)>-1}},"#":function(e){return function(t){return t.id==e}}},n={"^=":function(e,t){return 0==e.indexOf(t)},"*=":function(e,t){return e.indexOf(t)>-1},"$=":function(e,t){return e.substring(e.length-t.length,e.length)==t},"~=":function(e,t){return(" "+e+" ").indexOf(" "+t+" ")>-1},"|=":function(e,t){return 0==(e+"-").indexOf(t+"-")},"=":function(e,t){return e==t},"":function(e,t){return!0}},l={};return function(a,d,n){var s=l[d];if(!s){if(d.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g,function(a,d,n,l,m,f,u){return l?s=r(s,o[n||""](l.replace(/\\/g,""))):d?s=(" "==d?t:i)(s):m&&(s=r(s,e(m,u,f))),""}))throw new Error("Syntax error in query");if(!s)return!0;l[d]=s}return s(a,n)}}();if(!e("dom-qsa"))var s=function(e,t){for(var a=e.match(d),i=[],r=0;r<a.length;r++){e=new String(a[r].replace(/\s*$/,"")),e.indexOf=escape;for(var n=o(e,t),l=0,s=n.length;l<s;l++){var m=n[l];i[m.sourceIndex]=m}}var f=[];for(r in i)f.push(i[r]);return f};return o.match=i?function(e,t,a){return a&&9!=a.nodeType?n(a,t,function(t){return i.call(e,t)}):i.call(e,t)}:l,o});//# sourceMappingURL=lite.js.map