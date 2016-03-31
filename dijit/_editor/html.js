//>>built
define("dijit/_editor/html",["dojo/_base/array","dojo/_base/lang","dojo/sniff"],function(e,t,i){var n={};t.setObject("dijit._editor.html",n);var a=n.escapeXml=function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),t||(e=e.replace(/'/gm,"&#39;")),e};return n.getNodeHtml=function(e){var t=[];return n.getNodeHtmlHelper(e,t),t.join("")},n.getNodeHtmlHelper=function(t,o){switch(t.nodeType){case 1:var s=t.nodeName.toLowerCase();if(!s||"/"==s.charAt(0))return"";o.push("<",s);var r,d=[],l={};if(i("dom-attributes-explicit")||i("dom-attributes-specified-flag"))for(var h=0;r=t.attributes[h++];){var u=r.name;if("_dj"!==u.substr(0,3)&&(!i("dom-attributes-specified-flag")||r.specified)&&!(u in l)){var c=r.value;"src"!=u&&"href"!=u||t.getAttribute("_djrealurl")&&(c=t.getAttribute("_djrealurl")),8===i("ie")&&"style"===u&&(c=c.replace("HEIGHT:","height:").replace("WIDTH:","width:")),d.push([u,c]),l[u]=c}}else{var p=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),m=p.outerHTML,g=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi,f=m.match(g);m=m.substr(0,m.indexOf(">")),e.forEach(f,function(e){if(e){var i=e.indexOf("=");if(i>0){var n=e.substring(0,i);if("_dj"!=n.substr(0,3)){if(("src"==n||"href"==n)&&t.getAttribute("_djrealurl"))return void d.push([n,t.getAttribute("_djrealurl")]);var a,o;switch(n){case"style":a=t.style.cssText.toLowerCase();break;case"class":a=t.className;break;case"width":if("img"===s){o=/width=(\S+)/i.exec(m),o&&(a=o[1]);break}case"height":if("img"===s){o=/height=(\S+)/i.exec(m),o&&(a=o[1]);break}default:a=t.getAttribute(n)}null!=a&&d.push([n,a.toString()])}}}},this)}d.sort(function(e,t){return e[0]<t[0]?-1:e[0]==t[0]?0:1});for(var v=0;r=d[v++];)o.push(" ",r[0],'="',"string"==typeof r[1]?a(r[1],!0):r[1],'"');switch(s){case"br":case"hr":case"img":case"input":case"base":case"meta":case"area":case"basefont":o.push(" />");break;case"script":o.push(">",t.innerHTML,"</",s,">");break;default:o.push(">"),t.hasChildNodes()&&n.getChildrenHtmlHelper(t,o),o.push("</",s,">")}break;case 4:case 3:o.push(a(t.nodeValue,!0));break;case 8:o.push("<!--",a(t.nodeValue,!0),"-->");break;default:o.push("<!-- Element not recognized - Type: ",t.nodeType," Name: ",t.nodeName,"-->")}},n.getChildrenHtml=function(e){var t=[];return n.getChildrenHtmlHelper(e,t),t.join("")},n.getChildrenHtmlHelper=function(e,t){if(e)for(var a,o=e.childNodes||e,s=!i("ie")||o!==e,r=0;a=o[r++];)s&&a.parentNode!=e||n.getNodeHtmlHelper(a,t)},n});//# sourceMappingURL=html.js.map