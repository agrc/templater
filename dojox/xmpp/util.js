//>>built
define("dojox/xmpp/util",["dojo","dijit","dojox","dojo/require!dojox/string/Builder,dojox/encoding/base64"],function(e,t,i){e.provide("dojox.xmpp.util"),e.require("dojox.string.Builder"),e.require("dojox.encoding.base64"),i.xmpp.util.xmlEncode=function(e){return e&&(e=e.replace("&","&amp;").replace(">","&gt;").replace("<","&lt;").replace("'","&apos;").replace('"',"&quot;")),e},i.xmpp.util.encodeJid=function(e){for(var t=new i.string.Builder,a=0;a<e.length;a++){var r=e.charAt(a),n=r;switch(r){case" ":n="\\20";break;case'"':n="\\22";break;case"#":n="\\23";break;case"&":n="\\26";break;case"'":n="\\27";break;case"/":n="\\2f";break;case":":n="\\3a";break;case"<":n="\\3c";break;case">":n="\\3e"}t.append(n)}return t.toString()},i.xmpp.util.decodeJid=function(e){return e=e.replace(/\\([23][02367acef])/g,function(e){switch(e){case"\\20":return" ";case"\\22":return'"';case"\\23":return"#";case"\\26":return"&";case"\\27":return"'";case"\\2f":return"/";case"\\3a":return":";case"\\3c":return"<";case"\\3e":return">"}return"ARG"})},i.xmpp.util.createElement=function(e,t,a){var r=new i.string.Builder("<");r.append(e+" ");for(var n in t)r.append(n+'="'),r.append(t[n]),r.append('" ');return a?r.append("/>"):r.append(">"),r.toString()},i.xmpp.util.stripHtml=function(e){for(var t=/<[^>]*?>/gi,i=0;i<arguments.length;i++);return e.replace(t,"")},i.xmpp.util.decodeHtmlEntities=function(t){var i=e.doc.createElement("textarea");return i.innerHTML=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"),i.value},i.xmpp.util.htmlToPlain=function(e){return e=i.xmpp.util.decodeHtmlEntities(e),e=e.replace(/<br\s*[i\/]{0,1}>/gi,"\n"),e=i.xmpp.util.stripHtml(e)},i.xmpp.util.Base64={},i.xmpp.util.Base64.encode=function(e){var t=function(e){for(var t=[],i=0;i<e.length;++i)t.push(e.charCodeAt(i));return t};return i.encoding.base64.encode(t(e))},i.xmpp.util.Base64.decode=function(t){var a=function(t){var i=[];return e.forEach(t,function(e){i.push(String.fromCharCode(e))}),i.join("")};return a(i.encoding.base64.decode(t))}});//# sourceMappingURL=util.js.map