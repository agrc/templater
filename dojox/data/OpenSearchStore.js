//>>built
define("dojox/data/OpenSearchStore",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/xhr","dojo/_base/array","dojo/_base/window","dojo/query","dojo/data/util/simpleFetch","dojox/xml/parser"],function(e,t,a,i,r,o,d,n,l){e.experimental("dojox.data.OpenSearchStore");var s=a("dojox.data.OpenSearchStore",null,{constructor:function(e){e&&(this.label=e.label,this.url=e.url,this.itemPath=e.itemPath,"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache));var t=i.get({url:this.url,handleAs:"xml",sync:!0,preventCache:this.urlPreventCache});t.addCallback(this,"_processOsdd"),t.addErrback(function(){throw new Error("Unable to load OpenSearch Description document from ".args.url)})},url:"",itemPath:"",_storeRef:"_S",urlElement:null,iframeElement:null,urlPreventCache:!0,ATOM_CONTENT_TYPE:3,ATOM_CONTENT_TYPE_STRING:"atom",RSS_CONTENT_TYPE:2,RSS_CONTENT_TYPE_STRING:"rss",XML_CONTENT_TYPE:1,XML_CONTENT_TYPE_STRING:"xml",_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.OpenSearchStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.OpenSearchStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(e,t,a){var i=this.getValues(e,t);return i?i[0]:a},getAttributes:function(e){return["content"]},hasAttribute:function(e,t){return!!this.getValue(e,t)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getLabel:function(e){},getLabelAttributes:function(e){return null},containsValue:function(e,t,a){for(var i=this.getValues(e,t),r=0;r<i.length;r++)if(i[r]===a)return!0;return!1},getValues:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t);var a=this.processItem(e,t);return a?[a]:void 0},isItem:function(e){return!(!e||e[this._storeRef]!==this)},close:function(e){},process:function(e){return this["_processOSD"+this.contentType](e)},processItem:function(e,t){return this["_processItem"+this.contentType](e.node,t)},_createSearchUrl:function(e){var t=this.urlElement.attributes.getNamedItem("template").nodeValue,a=(this.urlElement.attributes,t.indexOf("{searchTerms}"));return t=t.substring(0,a)+e.query.searchTerms+t.substring(a+13),r.forEach([{name:"count",test:e.count,def:"10"},{name:"startIndex",test:e.start,def:this.urlElement.attributes.getNamedItem("indexOffset")?this.urlElement.attributes.getNamedItem("indexOffset").nodeValue:0},{name:"startPage",test:e.startPage,def:this.urlElement.attributes.getNamedItem("pageOffset")?this.urlElement.attributes.getNamedItem("pageOffset").nodeValue:0},{name:"language",test:e.language,def:"*"},{name:"inputEncoding",test:e.inputEncoding,def:"UTF-8"},{name:"outputEncoding",test:e.outputEncoding,def:"UTF-8"}],function(e){t=t.replace("{"+e.name+"}",e.test||e.def),t=t.replace("{"+e.name+"?}",e.test||e.def)}),t},_fetchItems:function(e,t,a){e.query||(e.query={});var r=this,o=this._createSearchUrl(e),d={url:o,preventCache:this.urlPreventCache},n=i.get(d);n.addErrback(function(t){a(t,e)}),n.addCallback(function(a){var i=[];if(a){i=r.process(a);for(var o=0;o<i.length;o++)i[o]={node:i[o]},i[o][r._storeRef]=r}t(i,e)})},_processOSDxml:function(e){var t=o.doc.createElement("div");return t.innerHTML=e,d(this.itemPath,t)},_processItemxml:function(e,t){return"content"===t?e.innerHTML:void 0},_processOSDatom:function(e){return this._processOSDfeed(e,"entry")},_processItematom:function(e,t){return this._processItemfeed(e,t,"content")},_processOSDrss:function(e){return this._processOSDfeed(e,"item")},_processItemrss:function(e,t){return this._processItemfeed(e,t,"description")},_processOSDfeed:function(e,t){e=dojox.xml.parser.parse(e);for(var a=[],i=e.getElementsByTagName(t),r=0;r<i.length;r++)a.push(i.item(r));return a},_processItemfeed:function(e,t,a){if("content"===t){var i=e.getElementsByTagName(a).item(0);return this._getNodeXml(i,!0)}},_getNodeXml:function(e,t){var a;switch(e.nodeType){case 1:var i=[];if(!t){i.push("<"+e.tagName);var r;for(a=0;a<e.attributes.length;a++)r=e.attributes.item(a),i.push(" "+r.nodeName+'="'+r.nodeValue+'"');i.push(">")}for(a=0;a<e.childNodes.length;a++)i.push(this._getNodeXml(e.childNodes.item(a)));return t||i.push("</"+e.tagName+">\n"),i.join("");case 3:case 4:return e.nodeValue}},_processOsdd:function(e){var t,a,i=e.getElementsByTagName("Url"),r=[];for(a=0;a<i.length;a++)switch(t=i[a].attributes.getNamedItem("type").nodeValue){case"application/rss+xml":r[a]=this.RSS_CONTENT_TYPE;break;case"application/atom+xml":r[a]=this.ATOM_CONTENT_TYPE;break;default:r[a]=this.XML_CONTENT_TYPE}var o=0,d=r[0];for(a=1;a<i.length;a++)r[a]>d&&(o=a,d=r[a]);var n=i[o].nodeName.toLowerCase();if("url"==n){i[o].attributes;switch(this.urlElement=i[o],r[o]){case this.ATOM_CONTENT_TYPE:this.contentType=this.ATOM_CONTENT_TYPE_STRING;break;case this.RSS_CONTENT_TYPE:this.contentType=this.RSS_CONTENT_TYPE_STRING;break;case this.XML_CONTENT_TYPE:this.contentType=this.XML_CONTENT_TYPE_STRING}}}});return t.extend(s,n)});//# sourceMappingURL=OpenSearchStore.js.map