//>>built
define("dojox/wire/XmlWire",["dojo","dijit","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(e,t,i){e.provide("dojox.wire.XmlWire"),e.require("dojox.xml.parser"),e.require("dojox.wire.Wire"),e.declare("dojox.wire.XmlWire",i.wire.Wire,{_wireClass:"dojox.wire.XmlWire",constructor:function(e){},_getValue:function(e){if(!e||!this.path)return e;var t,i=e,a=this.path;"/"==a.charAt(0)&&(t=a.indexOf("/",1),a=a.substring(t+1));var o=a.split("/"),n=o.length-1;for(t=0;n>t;t++)if(i=this._getChildNode(i,o[t]),!i)return;var r=this._getNodeValue(i,o[n]);return r},_setValue:function(e,t){if(!this.path)return e;var i,a=e,o=this._getDocument(a),n=this.path;if("/"==n.charAt(0)){if(i=n.indexOf("/",1),!a){var r=n.substring(1,i);a=o.createElement(r),e=a}n=n.substring(i+1)}else if(!a)return;var s=n.split("/"),l=s.length-1;for(i=0;l>i;i++){var d=this._getChildNode(a,s[i]);d||(d=o.createElement(s[i]),a.appendChild(d)),a=d}return this._setNodeValue(a,s[l],t),e},_getNodeValue:function(e,t){var i=void 0;if("@"==t.charAt(0)){var a=t.substring(1);i=e.getAttribute(a)}else if("text()"==t){var o=e.firstChild;o&&(i=o.nodeValue)}else{i=[];for(var n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];1===r.nodeType&&r.nodeName==t&&i.push(r)}}return i},_setNodeValue:function(e,t,i){if("@"==t.charAt(0)){var a=t.substring(1);i?e.setAttribute(a,i):e.removeAttribute(a)}else if("text()"==t){for(;e.firstChild;)e.removeChild(e.firstChild);if(i){var o=this._getDocument(e).createTextNode(i);e.appendChild(o)}}},_getChildNode:function(e,t){var i=1,a=t.indexOf("[");if(a>=0){var o=t.indexOf("]");i=t.substring(a+1,o),t=t.substring(0,a)}for(var n=1,r=0;r<e.childNodes.length;r++){var s=e.childNodes[r];if(1===s.nodeType&&s.nodeName==t){if(n==i)return s;n++}}return null},_getDocument:function(e){return e?9==e.nodeType?e:e.ownerDocument:i.xml.parser.parse()}})});//# sourceMappingURL=XmlWire.js.map