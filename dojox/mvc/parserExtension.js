//>>built
define("dojox/mvc/parserExtension",["require","dojo/_base/kernel","dojo/_base/lang","dojo/has!dojo-parser?:dojo/_base/window","dojo/has","dojo/has!dojo-mobile-parser?:dojo/parser","dojo/has!dojo-parser?:dojox/mobile/parser","dojox/mvc/_atBindingMixin","dojox/mvc/Element"],function(e,t,i,a,o,n,r,s){o.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{o.add("dojo-parser",!!e("dojo/parser"))}catch(e){}try{o.add("dojo-mobile-parser",!!e("dojox/mobile/parser"))}catch(e){}if(o("dojo-parser")){var d=n.scan;n.scan=function(e,a){return d.apply(this,i._toArray(arguments)).then(function(i){for(var n=(a.scope||t._scopeName)+"Type",r="data-"+(a.scope||t._scopeName)+"-",d=r+"type",l=o("dom-qsa")?e.querySelectorAll("["+s.prototype.dataBindAttr+"]"):e.getElementsByTagName("*"),h=0,u=l.length;h<u;h++){var c=l[h];c.getAttribute(d)||c.getAttribute(n)||!c.getAttribute(s.prototype.dataBindAttr)||i.push({types:["dojox/mvc/Element"],node:c})}return i})}}if(o("dojo-mobile-parser")){var l=r.parse;r.parse=function(e,n){var r=((n||{}).scope||t._scopeName)+"Type",d="data-"+((n||{}).scope||t._scopeName)+"-",h=d+"type";nodes=o("dom-qsa")?(e||a.body()).querySelectorAll("["+s.prototype.dataBindAttr+"]"):(e||a.body()).getElementsByTagName("*");for(var u=0,c=nodes.length;u<c;u++){var m=nodes[u];m.getAttribute(h)||m.getAttribute(r)||!m.getAttribute(s.prototype.dataBindAttr)||m.setAttribute(h,"dojox/mvc/Element")}return l.apply(this,i._toArray(arguments))}}return n||r});//# sourceMappingURL=parserExtension.js.map