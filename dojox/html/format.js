//>>built
define("dojox/html/format",["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(e,t,i,a,r){var o=e.getObject("dojox.html.format",!0);return o.prettyPrint=function(o,n,s,l,d){var h,c=[],u=0,m=[],f="	",p="",g=[],y=/[=]([^"']+?)(\s|>)/g,v=/style=("[^"]*"|'[^']*'|\S*)/gi,b=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;if(n&&n>0&&10>n)for(f="",h=0;n>h;h++)f+=" ";var k=a.doc.createElement("div");k.innerHTML=o;var w=t.encode,M=t.decode,j=function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"small":return!0;default:return!1}},_=k.ownerDocument.createElement("div"),x=function(e){var t=e.cloneNode(!1);_.appendChild(t);var i=_.innerHTML;return _.innerHTML="",i},T=function(){var e,t="";for(e=0;u>e;e++)t+=f;return t.length},C=function(){var e;for(e=0;u>e;e++)c.push(f)},I=function(){c.push("\n")},F=function(e){p+=w(e.nodeValue,l)},E=function(t){var i,a,r=t.split("\n");for(i=0;i<r.length;i++)r[i]=e.trim(r[i]);if(t=r.join(" "),t=e.trim(t),""!==t){var o=[];if(s&&s>0){var n=T(),l=s;for(s>n&&(l-=n);t;)if(t.length>s){for(i=l;i>0&&" "!==t.charAt(i);i--);if(!i)for(i=l;i<t.length&&" "!==t.charAt(i);i++);var d=t.substring(0,i);if(d=e.trim(d),t=e.trim(t.substring(i==t.length?t.length:i+1,t.length)),d){for(a="",i=0;u>i;i++)a+=f;d=a+d+"\n"}o.push(d)}else{for(a="",i=0;u>i;i++)a+=f;t=a+t+"\n",o.push(t),t=null}return o.join("")}for(a="",i=0;u>i;i++)a+=f;return t=a+t+"\n"}return""},S=function(e){return e&&(e=e.replace(/&quot;/gi,'"'),e=e.replace(/&gt;/gi,">"),e=e.replace(/&lt;/gi,"<"),e=e.replace(/&amp;/gi,"&")),e},A=function(t){if(t){t=S(t);var i,a,r,o,n=0,s=t.split("\n"),l=[];for(i=0;i<s.length;i++){var d=s[i],h=d.indexOf("\n")>-1;if(d=e.trim(d)){var c=n;for(r=0;r<d.length;r++){var m=d.charAt(r);"{"===m?n++:"}"===m&&(n--,c=n)}for(o="",a=0;u+c>a;a++)o+=f;l.push(o+d+"\n")}else h&&0===i&&l.push("\n")}t=l.join("")}return t},z=function(t){var a=t.nodeName.toLowerCase(),r=e.trim(x(t)),o=r.substring(0,r.indexOf(">")+1);o=o.replace(y,'="$1"$2'),o=o.replace(v,function(t){var a=t.substring(0,6),r=t.substring(6,t.length),o=r.charAt(0);r=e.trim(r.substring(1,r.length-1)),r=r.split(";");var n=[];i.forEach(r,function(t){t=e.trim(t),t&&(t=t.substring(0,t.indexOf(":")).toLowerCase()+t.substring(t.indexOf(":"),t.length),n.push(t))}),n=n.sort(),r=n.join("; ");var s=e.trim(r);return s&&";"!==s?(r+=";",a+o+r+o):""});var n=[];o=o.replace(b,function(t){return n.push(e.trim(t)),""}),n=n.sort(),o="<"+a,n.length&&(o+=" "+n.join(" ")),-1!=r.indexOf("</")?(m.push(a),o+=">"):(o+=d?" />":">",m.push(!1));var s=j(a);g.push(s),p&&!s&&(c.push(E(p)),p=""),s?p+=o:(C(),c.push(o),I(),u++)},P=function(){var e=g.pop();p&&!e&&(c.push(E(p)),p="");var t=m.pop();t?(t="</"+t+">",e?p+=t:(u--,C(),c.push(t),I())):u--},G=function(e){var t=M(e.nodeValue,l);C(),c.push("<!--"),I(),u++,c.push(E(t)),u--,C(),c.push("-->"),I()},L=function(t){var i=t.childNodes;if(i){var a;for(a=0;a<i.length;a++){var o=i[a];if(1===o.nodeType){var n=e.trim(o.tagName.toLowerCase());if(r("ie")&&o.parentNode!=t)continue;if(n&&"/"===n.charAt(0))continue;if(z(o),"script"===n)c.push(A(o.innerHTML));else if("pre"===n){var s=o.innerHTML;r("mozilla")&&(s=s.replace("<br>","\n"),s=s.replace("<pre>",""),s=s.replace("</pre>","")),"\n"!==s.charAt(s.length-1)&&(s+="\n"),c.push(s)}else L(o);P()}else 3===o.nodeType||4===o.nodeType?F(o):8===o.nodeType&&G(o)}}};return L(k),p&&(c.push(E(p)),p=""),c.join("")},o});//# sourceMappingURL=format.js.map