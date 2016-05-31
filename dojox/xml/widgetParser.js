//>>built
define("dojox/xml/widgetParser",["dojo/_base/lang","dojo/_base/window","dojo/_base/sniff","dojo/query","dojo/parser","dojox/xml/parser"],function(e,t,i,a,o,r){var n=lang.getObject("dojox.xml",!0);return xXml.widgetParser=new function(){var o=e;this.parseNode=function(e){var t=[];return o.query("script[type='text/xml']",e).forEach(function(e){t.push.apply(t,this._processScript(e))},this).orphan(),o.parser.instantiate(t)},this._processScript=function(e){var t=e.src?o._getText(e.src):e.innerHTML||e.firstChild.nodeValue,i=this.toHTML(dojox.xml.parser.parse(t).firstChild),r=o.query("[dojoType]",i);return a(">",i).place(e,"before"),e.parentNode.removeChild(e),r},this.toHTML=function(e){var a,r=e.nodeName,n=t.doc,s=e.nodeType;if(s>=3)return n.createTextNode(3==s||4==s?e.nodeValue:"");var l=e.localName||r.split(":").pop(),d=e.namespaceURI||(e.getNamespaceUri?e.getNamespaceUri():"");if("html"==d)a=n.createElement(l);else{var h=d+"."+l;a=a||n.createElement("dijit.form.ComboBox"==h?"select":"div"),a.setAttribute("dojoType",h)}return o.forEach(e.attributes,function(e){var t=e.name||e.nodeName,o=e.value||e.nodeValue;0!=t.indexOf("xmlns")&&(i("ie")&&"style"==t?a.style.setAttribute("cssText",o):a.setAttribute(t,o))}),o.forEach(e.childNodes,function(e){var t=this.toHTML(e);"script"==l?a.text+=t.nodeValue:a.appendChild(t)},this),a}},n.widgetParser});//# sourceMappingURL=widgetParser.js.map