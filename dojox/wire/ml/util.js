//>>built
define("dojox/wire/ml/util",["dojo","dijit","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(e,t,i){e.provide("dojox.wire.ml.util"),e.require("dojox.xml.parser"),e.require("dojox.wire.Wire"),i.wire.ml._getValue=function(a,r){if(a){var n=void 0;if(r&&a.length>=9&&"arguments"==a.substring(0,9))return n=a.substring(9),new i.wire.Wire({property:n}).getValue(r);var o=a.indexOf(".");o>=0&&(n=a.substring(o+1),a=a.substring(0,o));var s=t.byId(a)||e.byId(a)||e.getObject(a);if(s)return n?new i.wire.Wire({object:s,property:n}).getValue():s}},i.wire.ml._setValue=function(e,t){if(e){var a=e.indexOf(".");if(!(a<0)){var r=this._getValue(e.substring(0,a));if(r){var n=e.substring(a+1);new i.wire.Wire({object:r,property:n}).setValue(t)}}}},e.declare("dojox.wire.ml.XmlElement",null,{constructor:function(t){e.isString(t)&&(t=this._getDocument().createElement(t)),this.element=t},getPropertyValue:function(e){var t=void 0;if(!this.element)return t;if(!e)return t;if("@"==e.charAt(0)){var a=e.substring(1);t=this.element.getAttribute(a)}else if("text()"==e){var r=this.element.firstChild;r&&(t=r.nodeValue)}else{for(var n=[],o=0;o<this.element.childNodes.length;o++){var s=this.element.childNodes[o];1===s.nodeType&&s.nodeName==e&&n.push(new i.wire.ml.XmlElement(s))}n.length>0&&(t=1===n.length?n[0]:n)}return t},setPropertyValue:function(t,a){var r,n;if(this.element&&t)if("@"==t.charAt(0)){var o=t.substring(1);a?this.element.setAttribute(o,a):this.element.removeAttribute(o)}else if("text()"==t){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);a&&(n=this._getDocument().createTextNode(a),this.element.appendChild(n))}else{var s,l=null;for(r=this.element.childNodes.length-1;r>=0;r--)s=this.element.childNodes[r],1===s.nodeType&&s.nodeName==t&&(l||(l=s.nextSibling),this.element.removeChild(s));if(a)if(e.isArray(a))for(r in a){var d=a[r];d.element&&this.element.insertBefore(d.element,l)}else a instanceof i.wire.ml.XmlElement?a.element&&this.element.insertBefore(a.element,l):(s=this._getDocument().createElement(t),n=this._getDocument().createTextNode(a),s.appendChild(n),this.element.insertBefore(s,l))}},toString:function(){var e="";if(this.element){var t=this.element.firstChild;t&&(e=t.nodeValue)}return e},toObject:function(){if(!this.element)return null;var t,a="",r={},n=0;for(t=0;t<this.element.childNodes.length;t++){var o=this.element.childNodes[t];if(1===o.nodeType){n++;var s=new i.wire.ml.XmlElement(o).toObject(),l=o.nodeName,d=r[l];d?e.isArray(d)?d.push(s):r[l]=[d,s]:r[l]=s}else 3!==o.nodeType&&4!==o.nodeType||(a+=o.nodeValue)}var h=0;if(1===this.element.nodeType)for(h=this.element.attributes.length,t=0;t<h;t++){var u=this.element.attributes[t];r["@"+u.nodeName]=u.nodeValue}if(0===n){if(0===h)return a;r["text()"]=a}return r},_getDocument:function(){return this.element?9==this.element.nodeType?this.element:this.element.ownerDocument:i.xml.parser.parse()}})});//# sourceMappingURL=util.js.map