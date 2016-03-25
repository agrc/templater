//>>built
define("dojox/mvc/parserExtension",["require","dojo/_base/kernel","dojo/_base/lang","dojo/has!dojo-parser?:dojo/_base/window","dojo/has","dojo/has!dojo-mobile-parser?:dojo/parser","dojo/has!dojo-parser?:dojox/mobile/parser","dojox/mvc/_atBindingMixin","dojox/mvc/Element"],function(e,t,i,a,o,r,n,s){o.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{o.add("dojo-parser",!!e("dojo/parser"))}catch(l){}try{o.add("dojo-mobile-parser",!!e("dojox/mobile/parser"))}catch(l){}if(o("dojo-parser")){var d=r.scan;r.scan=function(e,a){return d.apply(this,i._toArray(arguments)).then(function(i){for(var r=(a.scope||t._scopeName)+"Type",n="data-"+(a.scope||t._scopeName)+"-",l=n+"type",d=o("dom-qsa")?e.querySelectorAll("["+s.prototype.dataBindAttr+"]"):e.getElementsByTagName("*"),h=0,c=d.length;c>h;h++){var u=d[h];u.getAttribute(l)||u.getAttribute(r)||!u.getAttribute(s.prototype.dataBindAttr)||i.push({types:["dojox/mvc/Element"],node:u})}return i})}}if(o("dojo-mobile-parser")){var h=n.parse;n.parse=function(e,r){var n=((r||{}).scope||t._scopeName)+"Type",l="data-"+((r||{}).scope||t._scopeName)+"-",d=l+"type";nodes=o("dom-qsa")?(e||a.body()).querySelectorAll("["+s.prototype.dataBindAttr+"]"):(e||a.body()).getElementsByTagName("*");for(var c=0,u=nodes.length;u>c;c++){var m=nodes[c];m.getAttribute(d)||m.getAttribute(n)||!m.getAttribute(s.prototype.dataBindAttr)||m.setAttribute(d,"dojox/mvc/Element")}return h.apply(this,i._toArray(arguments))}}return r||n});//# sourceMappingURL=parserExtension.js.map