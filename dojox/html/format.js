//>>built
define("dojox/html/format",["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(e,t,i,a,r){var o=e.getObject("dojox.html.format",!0);return o.prettyPrint=function(o,n,s,l,d){var h,u=[],c=0,m=[],f="\t",p="",g=[],y=/[=]([^"']+?)(\s|>)/g,v=/style=("[^"]*"|'[^']*'|\S*)/gi,b=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;if(n&&n>0&&n<10)for(f="",h=0;h<n;h++)f+=" ";var k=a.doc.createElement("div");k.innerHTML=o;var M=t.encode,w=t.decode,_=function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"small":return!0;default:return!1}},x=k.ownerDocument.createElement("div"),T=function(e){var t=e.cloneNode(!1);x.appendChild(t);var i=x.innerHTML;return x.innerHTML="",i},j=function(){var e,t="";for(e=0;e<c;e++)t+=f;return t.length},C=function(){var e;for(e=0;e<c;e++)u.push(f)},I=function(){u.push("\n")},F=function(e){p+=M(e.nodeValue,l)},S=function(t){var i,a,r=t.split("\n");for(i=0;i<r.length;i++)r[i]=e.trim(r[i]);if(t=r.join(" "),""!==(t=e.trim(t))){var o=[];if(s&&s>0){var n=j(),l=s;for(s>n&&(l-=n);t;)if(t.length>s){for(i=l;i>0&&" "!==t.charAt(i);i--);if(!i)for(i=l;i<t.length&&" "!==t.charAt(i);i++);var d=t.substring(0,i);if(d=e.trim(d),t=e.trim(t.substring(i==t.length?t.length:i+1,t.length)),d){for(a="",i=0;i<c;i++)a+=f;d=a+d+"\n"}o.push(d)}else{for(a="",i=0;i<c;i++)a+=f;t=a+t+"\n",o.push(t),t=null}return o.join("")}for(a="",i=0;i<c;i++)a+=f;return t=a+t+"\n"}return""},E=function(e){return e&&(e=e.replace(/&quot;/gi,'"'),e=e.replace(/&gt;/gi,">"),e=e.replace(/&lt;/gi,"<"),e=e.replace(/&amp;/gi,"&")),e},z=function(t){if(t){t=E(t);var i,a,r,o,n=0,s=t.split("\n"),l=[];for(i=0;i<s.length;i++){var d=s[i],h=d.indexOf("\n")>-1;if(d=e.trim(d)){var u=n;for(r=0;r<d.length;r++){var m=d.charAt(r);"{"===m?n++:"}"===m&&(n--,u=n)}for(o="",a=0;a<c+u;a++)o+=f;l.push(o+d+"\n")}else h&&0===i&&l.push("\n")}t=l.join("")}return t},A=function(t){var a=t.nodeName.toLowerCase(),r=e.trim(T(t)),o=r.substring(0,r.indexOf(">")+1);o=o.replace(y,'="$1"$2'),o=o.replace(v,function(t){var a=t.substring(0,6),r=t.substring(6,t.length),o=r.charAt(0);r=e.trim(r.substring(1,r.length-1)),r=r.split(";");var n=[];i.forEach(r,function(t){(t=e.trim(t))&&(t=t.substring(0,t.indexOf(":")).toLowerCase()+t.substring(t.indexOf(":"),t.length),n.push(t))}),n=n.sort(),r=n.join("; ");var s=e.trim(r);return s&&";"!==s?(r+=";",a+o+r+o):""});var n=[];o=o.replace(b,function(t){return n.push(e.trim(t)),""}),n=n.sort(),o="<"+a,n.length&&(o+=" "+n.join(" ")),-1!=r.indexOf("</")?(m.push(a),o+=">"):(o+=d?" />":">",m.push(!1));var s=_(a);g.push(s),p&&!s&&(u.push(S(p)),p=""),s?p+=o:(C(),u.push(o),I(),c++)},P=function(){var e=g.pop();p&&!e&&(u.push(S(p)),p="");var t=m.pop();t?(t="</"+t+">",e?p+=t:(c--,C(),u.push(t),I())):c--},D=function(e){var t=w(e.nodeValue,l);C(),u.push("\x3c!--"),I(),c++,u.push(S(t)),c--,C(),u.push("--\x3e"),I()},N=function(t){var i=t.childNodes;if(i){var a;for(a=0;a<i.length;a++){var o=i[a];if(1===o.nodeType){var n=e.trim(o.tagName.toLowerCase());if(r("ie")&&o.parentNode!=t)continue;if(n&&"/"===n.charAt(0))continue;if(A(o),"script"===n)u.push(z(o.innerHTML));else if("pre"===n){var s=o.innerHTML;r("mozilla")&&(s=s.replace("<br>","\n"),s=s.replace("<pre>",""),s=s.replace("</pre>","")),"\n"!==s.charAt(s.length-1)&&(s+="\n"),u.push(s)}else N(o);P()}else 3===o.nodeType||4===o.nodeType?F(o):8===o.nodeType&&D(o)}}};return N(k),p&&(u.push(S(p)),p=""),u.join("")},o});//# sourceMappingURL=format.js.map