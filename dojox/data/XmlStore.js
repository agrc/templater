//>>built
define("dojox/data/XmlStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/xhr","dojo/data/util/simpleFetch","dojo/_base/query","dojo/_base/array","dojo/_base/kernel","dojo/data/util/filter","dojox/xml/parser","dojox/data/XmlItem"],function(e,t,a,i,r,o,d,n,l,s){var m=t("dojox.data.XmlStore",null,{constructor:function(e){e&&(this.url=e.url,this.rootItem=e.rootItem||e.rootitem||this.rootItem,this.keyAttribute=e.keyAttribute||e.keyattribute||this.keyAttribute,this._attributeMap=e.attributeMap||e.attributemap,this.label=e.label||this.label,this.sendQuery=e.sendQuery||e.sendquery||this.sendQuery,"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache)),this._newItems=[],this._deletedItems=[],this._modifiedItems=[]},url:"",rootItem:"",keyAttribute:"",label:"",sendQuery:!1,attributeMap:null,urlPreventCache:!0,getValue:function(e,t,a){var i,r,o=e.element;if("tagName"===t)return o.nodeName;if("childNodes"===t){for(i=0;i<o.childNodes.length;i++)if(r=o.childNodes[i],1===r.nodeType)return this._getItem(r);return a}if("text()"===t){for(i=0;i<o.childNodes.length;i++)if(r=o.childNodes[i],3===r.nodeType||4===r.nodeType)return r.nodeValue;return a}if(t=this._getAttribute(o.nodeName,t),"@"===t.charAt(0)){var d=t.substring(1),n=o.getAttribute(d);return n?n:a}for(i=0;i<o.childNodes.length;i++)if(r=o.childNodes[i],1===r.nodeType&&r.nodeName===t)return this._getItem(r);return a},getValues:function(e,t){var a,i,r=e.element,o=[];if("tagName"===t)return[r.nodeName];if("childNodes"===t){for(a=0;a<r.childNodes.length;a++)i=r.childNodes[a],1===i.nodeType&&o.push(this._getItem(i));return o}if("text()"===t){var d=r.childNodes;for(a=0;a<d.length;a++)i=d[a],3!==i.nodeType&&4!==i.nodeType||o.push(i.nodeValue);return o}if(t=this._getAttribute(r.nodeName,t),"@"===t.charAt(0)){var n=t.substring(1),l=r.getAttribute(n);return void 0!==l?[l]:[]}for(a=0;a<r.childNodes.length;a++)i=r.childNodes[a],1===i.nodeType&&i.nodeName===t&&o.push(this._getItem(i));return o},getAttributes:function(e){var t,a=e.element,i=[];if(i.push("tagName"),a.childNodes.length>0){var r={},o=!0,d=!1;for(t=0;t<a.childNodes.length;t++){var n=a.childNodes[t];if(1===n.nodeType){var l=n.nodeName;r[l]||(i.push(l),r[l]=l),o=!0}else 3===n.nodeType&&(d=!0)}o&&i.push("childNodes"),d&&i.push("text()")}for(t=0;t<a.attributes.length;t++)i.push("@"+a.attributes[t].nodeName);if(this._attributeMap)for(var s in this._attributeMap)if(t=s.indexOf("."),t>0){var m=s.substring(0,t);m===a.nodeName&&i.push(s.substring(t+1))}else i.push(s);return i},hasAttribute:function(e,t){return void 0!==this.getValue(e,t)},containsValue:function(e,t,a){for(var i=this.getValues(e,t),r=0;r<i.length;r++)if("string"==typeof a){if(i[r].toString&&i[r].toString()===a)return!0}else if(i[r]===a)return!0;return!1},isItem:function(e){return!!(e&&e.element&&e.store&&e.store===this)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getFeatures:function(){var e={"dojo.data.api.Read":!0,"dojo.data.api.Write":!0};return this.sendQuery&&""===this.keyAttribute||(e["dojo.data.api.Identity"]=!0),e},getLabel:function(e){if(""!==this.label&&this.isItem(e)){var t=this.getValue(e,this.label);if(t)return t.toString()}},getLabelAttributes:function(e){return""!==this.label?[this.label]:null},_fetchItems:function(e,t,i){var r=this._getFetchUrl(e);if(!r)return void i(new Error("No URL specified."),e);var o=this.sendQuery?{}:e,d=this,n={url:r,handleAs:"xml",preventCache:d.urlPreventCache},l=a.get(n);l.addCallback(function(a){var i=d._getItems(a,o);i&&i.length>0?t(i,e):t([],e)}),l.addErrback(function(t){i(t,e)})},_getFetchUrl:function(t){if(!this.sendQuery)return this.url;var a=t.query;if(!a)return this.url;if(e.isString(a))return this.url+a;var i="";for(var r in a){var o=a[r];o&&(i&&(i+="&"),i+=r+"="+o)}if(!i)return this.url;var d=this.url;return d+=d.indexOf("?")<0?"?":"&",d+i},_getItems:function(e,t){var a=null;t&&(a=t.query);var i=[],d=null;d=""!==this.rootItem?r(this.rootItem,e):e.documentElement.childNodes;var l=t.queryOptions?t.queryOptions.deep:!1;l&&(d=this._flattenNodes(d));for(var s=0;s<d.length;s++){var m=d[s];if(1==m.nodeType){var u=this._getItem(m);if(a){var f,h,c=t.queryOptions?t.queryOptions.ignoreCase:!1,y=!1,v=!0,p={};for(var g in a)f=a[g],"string"==typeof f?p[g]=n.patternToRegExp(f,c):f&&(p[g]=f);for(var M in a){v=!1;var b=this.getValues(u,M);for(h=0;h<b.length;h++){if(f=b[h]){var w=a[M];if("string"==typeof f&&p[M])y=null!==f.match(p[M]);else if("object"==typeof f)if(f.toString&&p[M]){var k=f.toString();y=null!==k.match(p[M])}else y="*"===w||w===f}if(y)break}if(!y)break}(v||y)&&i.push(u)}else i.push(u)}}return o.forEach(i,function(e){e.element.parentNode&&e.element.parentNode.removeChild(e.element)},this),i},_flattenNodes:function(e){var t=[];if(e){var a;for(a=0;a<e.length;a++){var i=e[a];t.push(i),i.childNodes&&i.childNodes.length>0&&(t=t.concat(this._flattenNodes(i.childNodes)))}}return t},close:function(e){},newItem:function(e,t){e=e||{};var a=e.tagName;if(!a&&(a=this.rootItem,""===a))return null;var i=this._getDocument(),r=i.createElement(a);for(var o in e){var d;if("tagName"!==o)if("text()"===o)d=i.createTextNode(e[o]),r.appendChild(d);else if(o=this._getAttribute(a,o),"@"===o.charAt(0)){var n=o.substring(1);r.setAttribute(n,e[o])}else{var l=i.createElement(o);d=i.createTextNode(e[o]),l.appendChild(d),r.appendChild(l)}}var s=this._getItem(r);this._newItems.push(s);var m=null;if(t&&t.parent&&t.attribute){m={item:t.parent,attribute:t.attribute,oldValue:void 0};var u=this.getValues(t.parent,t.attribute);if(u&&u.length>0){var f=u.slice(0,u.length);1===u.length?m.oldValue=u[0]:m.oldValue=u.slice(0,u.length),f.push(s),this.setValues(t.parent,t.attribute,f),m.newValue=this.getValues(t.parent,t.attribute)}else this.setValue(t.parent,t.attribute,s),m.newValue=s}return s},deleteItem:function(e){var t=e.element;return t.parentNode?(this._backupItem(e),t.parentNode.removeChild(t),!0):(this._forgetItem(e),this._deletedItems.push(e),!0)},setValue:function(e,t,a){if("tagName"===t)return!1;this._backupItem(e);var i,r,o=e.element;if("childNodes"===t)i=a.element,o.appendChild(i);else if("text()"===t){for(;o.firstChild;)o.removeChild(o.firstChild);r=this._getDocument(o).createTextNode(a),o.appendChild(r)}else if(t=this._getAttribute(o.nodeName,t),"@"===t.charAt(0)){var d=t.substring(1);o.setAttribute(d,a)}else{for(var n=0;n<o.childNodes.length;n++){var l=o.childNodes[n];if(1===l.nodeType&&l.nodeName===t){i=l;break}}var s=this._getDocument(o);if(i)for(;i.firstChild;)i.removeChild(i.firstChild);else i=s.createElement(t),o.appendChild(i);r=s.createTextNode(a),i.appendChild(r)}return!0},setValues:function(e,t,a){if("tagName"===t)return!1;this._backupItem(e);var i,r,o,d=e.element;if("childNodes"===t){for(;d.firstChild;)d.removeChild(d.firstChild);for(i=0;i<a.length;i++)r=a[i].element,d.appendChild(r)}else if("text()"===t){for(;d.firstChild;)d.removeChild(d.firstChild);var n="";for(i=0;i<a.length;i++)n+=a[i];o=this._getDocument(d).createTextNode(n),d.appendChild(o)}else if(t=this._getAttribute(d.nodeName,t),"@"===t.charAt(0)){var l=t.substring(1);d.setAttribute(l,a[0])}else{for(i=d.childNodes.length-1;i>=0;i--){var s=d.childNodes[i];1===s.nodeType&&s.nodeName===t&&d.removeChild(s)}var m=this._getDocument(d);for(i=0;i<a.length;i++)r=m.createElement(t),o=m.createTextNode(a[i]),r.appendChild(o),d.appendChild(r)}return!0},unsetAttribute:function(e,t){if("tagName"===t)return!1;this._backupItem(e);var a=e.element;if("childNodes"===t||"text()"===t)for(;a.firstChild;)a.removeChild(a.firstChild);else if(t=this._getAttribute(a.nodeName,t),"@"===t.charAt(0)){var i=t.substring(1);a.removeAttribute(i)}else for(var r=a.childNodes.length-1;r>=0;r--){var o=a.childNodes[r];1===o.nodeType&&o.nodeName===t&&a.removeChild(o)}return!0},save:function(e){e||(e={});var t;for(t=0;t<this._modifiedItems.length;t++)this._saveItem(this._modifiedItems[t],e,"PUT");for(t=0;t<this._newItems.length;t++){var a=this._newItems[t];a.element.parentNode?(this._newItems.splice(t,1),t--):this._saveItem(this._newItems[t],e,"POST")}for(t=0;t<this._deletedItems.length;t++)this._saveItem(this._deletedItems[t],e,"DELETE")},revert:function(){return this._newItems=[],this._restoreItems(this._deletedItems),this._deletedItems=[],this._restoreItems(this._modifiedItems),this._modifiedItems=[],!0},isDirty:function(e){if(e){var t=this._getRootElement(e.element);return this._getItemIndex(this._newItems,t)>=0||this._getItemIndex(this._deletedItems,t)>=0||this._getItemIndex(this._modifiedItems,t)>=0}return this._newItems.length>0||this._deletedItems.length>0||this._modifiedItems.length>0},_saveItem:function(e,t,i){var r,o;if(r="PUT"===i?this._getPutUrl(e):"DELETE"===i?this._getDeleteUrl(e):this._getPostUrl(e),!r)return void(t.onError&&(o=t.scope||d.global,t.onError.call(o,new Error("No URL for saving content: "+this._getPostContent(e)))));var n,l={url:r,method:i||"POST",contentType:"text/xml",handleAs:"xml"};"PUT"===i?(l.putData=this._getPutContent(e),n=a.put(l)):"DELETE"===i?n=a.del(l):(l.postData=this._getPostContent(e),n=a.post(l)),o=t.scope||d.global;var s=this;n.addCallback(function(a){s._forgetItem(e),t.onComplete&&t.onComplete.call(o)}),n.addErrback(function(e){t.onError&&t.onError.call(o,e)})},_getPostUrl:function(e){return this.url},_getPutUrl:function(e){return this.url},_getDeleteUrl:function(e){var t=this.url;if(e&&""!==this.keyAttribute){var a=this.getValue(e,this.keyAttribute);if(a){var i="@"===this.keyAttribute.charAt(0)?this.keyAttribute.substring(1):this.keyAttribute;t+=t.indexOf("?")<0?"?":"&",t+=i+"="+a}}return t},_getPostContent:function(e){return"<?xml version='1.0'?>"+l.innerXML(e.element)},_getPutContent:function(e){return"<?xml version='1.0'?>"+l.innerXML(e.element)},_getAttribute:function(e,t){if(this._attributeMap){var a=e+"."+t,i=this._attributeMap[a];i?t=i:(i=this._attributeMap[t],i&&(t=i))}return t},_getItem:function(e){try{var t=null;return""===this.keyAttribute&&(t=this._getXPath(e)),new s(e,this,t)}catch(a){}return null},_getItemIndex:function(e,t){for(var a=0;a<e.length;a++)if(e[a].element===t)return a;return-1},_backupItem:function(e){var t=this._getRootElement(e.element);this._getItemIndex(this._newItems,t)>=0||this._getItemIndex(this._modifiedItems,t)>=0||(t!=e.element&&(e=this._getItem(t)),e._backup=t.cloneNode(!0),this._modifiedItems.push(e))},_restoreItems:function(e){o.forEach(e,function(e){e._backup&&(e.element=e._backup,e._backup=null)},this)},_forgetItem:function(e){var t=e.element,a=this._getItemIndex(this._newItems,t);a>=0&&this._newItems.splice(a,1),a=this._getItemIndex(this._deletedItems,t),a>=0&&this._deletedItems.splice(a,1),a=this._getItemIndex(this._modifiedItems,t),a>=0&&this._modifiedItems.splice(a,1)},_getDocument:function(e){return e?e.ownerDocument:this._document?null:l.parse()},_getRootElement:function(e){for(;e.parentNode;)e=e.parentNode;return e},_getXPath:function(e){var t=null;if(!this.sendQuery){var a=e;for(t="";a&&a!=e.ownerDocument;){for(var i=0,r=a,o=a.nodeName;r;)r=r.previousSibling,r&&r.nodeName===o&&i++;var d="/"+o+"["+i+"]";t=t?d+t:d,a=a.parentNode}}return t},getIdentity:function(e){if(this.isItem(e)){var t=null;return this.sendQuery&&""!==this.keyAttribute?t=this.getValue(e,this.keyAttribute).toString():this.serverQuery||(t=""!==this.keyAttribute?this.getValue(e,this.keyAttribute).toString():e.q),t}throw new Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item")},getIdentityAttributes:function(e){if(this.isItem(e))return""!==this.keyAttribute?[this.keyAttribute]:null;throw new Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item")},fetchItemByIdentity:function(e){var t=null,i=null,r=this,o=null,n=null,l=null;if(r.sendQuery){if(""!==r.keyAttribute){var s={query:{}};s.query[r.keyAttribute]=e.identity,o=this._getFetchUrl(s),t=function(t){var a=null;if(t){var i=r._getItems(t,{});if(1===i.length)a=i[0];else if(e.onError){var o=e.scope||d.global;e.onError.call(o,new Error("More than one item was returned from the server for the denoted identity"))}}e.onItem&&(o=e.scope||d.global,e.onItem.call(o,a))},n={url:o,handleAs:"xml",preventCache:r.urlPreventCache},l=a.get(n),l.addCallback(t),e.onError&&l.addErrback(function(t){var a=e.scope||d.global;e.onError.call(a,t)})}else if(e.onError){var m=e.scope||d.global;e.onError.call(m,new Error("XmlStore is not told that the server to provides identity support.  No keyAttribute specified."))}}else t=function(t){if(t)if(""!==r.keyAttribute){var a={};a.query={},a.query[r.keyAttribute]=e.identity,a.queryOptions={deep:!0};var o=r._getItems(t,a);i=e.scope||d.global,1===o.length?e.onItem&&e.onItem.call(i,o[0]):0===o.length?e.onItem&&e.onItem.call(i,null):e.onError&&e.onError.call(i,new Error("Items array size for identity lookup greater than 1, invalid keyAttribute."))}else{var n,l=e.identity.split("/"),s=t;for(n=0;n<l.length;n++)if(l[n]&&""!==l[n]){var m=l[n];m=m.substring(0,m.length-1);var u=m.split("["),f=u[0],h=parseInt(u[1],10),c=0;if(!s)break;var y=s.childNodes;if(y){var v,p=null;for(v=0;v<y.length;v++){var g=y[v];if(g.nodeName===f){if(!(h>c)){p=g;break}c++}}s=p?p:null}else s=null}var M=null;s&&(M=r._getItem(s),M.element.parentNode&&M.element.parentNode.removeChild(M.element)),e.onItem&&(i=e.scope||d.global,e.onItem.call(i,M))}},o=this._getFetchUrl(null),n={url:o,handleAs:"xml",preventCache:r.urlPreventCache},l=a.get(n),l.addCallback(t),e.onError&&l.addErrback(function(t){var a=e.scope||d.global;e.onError.call(a,t)})}});return e.extend(m,i),m});//# sourceMappingURL=XmlStore.js.map