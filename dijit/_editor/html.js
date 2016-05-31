//>>built
define("dijit/_editor/html",["dojo/_base/array","dojo/_base/lang","dojo/sniff"],function(e,t,i){var n={};t.setObject("dijit._editor.html",n);var s=n.escapeXml=function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),t||(e=e.replace(/'/gm,"&#39;")),e};return n.getNodeHtml=function(e){var t=[];return n.getNodeHtmlHelper(e,t),t.join("")},n.getNodeHtmlHelper=function(t,a){switch(t.nodeType){case 1:var o=t.nodeName.toLowerCase();if(!o||"/"==o.charAt(0))return"";a.push("<",o);var d,r=[],l={};if(i("dom-attributes-explicit")||i("dom-attributes-specified-flag"))for(var h=0;d=t.attributes[h++];){var u=d.name;if("_dj"!==u.substr(0,3)&&(!i("dom-attributes-specified-flag")||d.specified)&&!(u in l)){var c=d.value;"src"!=u&&"href"!=u||t.getAttribute("_djrealurl")&&(c=t.getAttribute("_djrealurl")),8===i("ie")&&"style"===u&&(c=c.replace("HEIGHT:","height:").replace("WIDTH:","width:")),r.push([u,c]),l[u]=c}}else{var p=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),g=p.outerHTML,f=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi,m=g.match(f);g=g.substr(0,g.indexOf(">")),e.forEach(m,function(e){if(e){var i=e.indexOf("=");if(i>0){var n=e.substring(0,i);if("_dj"!=n.substr(0,3)){if(("src"==n||"href"==n)&&t.getAttribute("_djrealurl"))return void r.push([n,t.getAttribute("_djrealurl")]);var s,a;switch(n){case"style":s=t.style.cssText.toLowerCase();break;case"class":s=t.className;break;case"width":if("img"===o){a=/width=(\S+)/i.exec(g),a&&(s=a[1]);break}case"height":if("img"===o){a=/height=(\S+)/i.exec(g),a&&(s=a[1]);break}default:s=t.getAttribute(n)}null!=s&&r.push([n,s.toString()])}}}},this)}r.sort(function(e,t){return e[0]<t[0]?-1:e[0]==t[0]?0:1});for(var b=0;d=r[b++];)a.push(" ",d[0],'="',"string"==typeof d[1]?s(d[1],!0):d[1],'"');switch(o){case"br":case"hr":case"img":case"input":case"base":case"meta":case"area":case"basefont":a.push(" />");break;case"script":a.push(">",t.innerHTML,"</",o,">");break;default:a.push(">"),t.hasChildNodes()&&n.getChildrenHtmlHelper(t,a),a.push("</",o,">")}break;case 4:case 3:a.push(s(t.nodeValue,!0));break;case 8:a.push("<!--",s(t.nodeValue,!0),"-->");break;default:a.push("<!-- Element not recognized - Type: ",t.nodeType," Name: ",t.nodeName,"-->")}},n.getChildrenHtml=function(e){var t=[];return n.getChildrenHtmlHelper(e,t),t.join("")},n.getChildrenHtmlHelper=function(e,t){if(e)for(var s,a=e.childNodes||e,o=!i("ie")||a!==e,d=0;s=a[d++];)o&&s.parentNode!=e||n.getNodeHtmlHelper(s,t)},n});//# sourceMappingURL=html.js.map