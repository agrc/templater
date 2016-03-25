//>>built
define("dojox/data/HtmlStore",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/_base/xhr","dojo/_base/kernel","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/xml/parser"],function(e,t,a,i,r,o,n,d,s){var l=e("dojox.data.HtmlStore",null,{constructor:function(e){if(e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache),e&&"trimWhitespace"in e&&(this.trimWhitespace=!!e.trimWhitespace),e.url){if(!e.dataId)throw new Error("dojo.data.HtmlStore: Cannot instantiate using url without an id!");this.url=e.url,this.dataId=e.dataId}else e.dataId&&(this.dataId=e.dataId);e&&"fetchOnCreate"in e&&(this.fetchOnCreate=!!e.fetchOnCreate),this.fetchOnCreate&&this.dataId&&this.fetch()},url:"",dataId:"",trimWhitespace:!1,urlPreventCache:!1,fetchOnCreate:!1,_indexItems:function(){if(this._getHeadings(),this._rootNode.rows){this._rootNode.tBodies&&this._rootNode.tBodies.length>0&&(this._rootNode=this._rootNode.tBodies[0]);var e;for(e=0;e<this._rootNode.rows.length;e++)this._rootNode.rows[e]._ident=e+1}else{var t=1;for(e=0;e<this._rootNode.childNodes.length;e++)1===this._rootNode.childNodes[e].nodeType&&(this._rootNode.childNodes[e]._ident=t,t++)}},_getHeadings:function(){this._headings=[],this._rootNode.tHead?t.forEach(this._rootNode.tHead.rows[0].cells,a.hitch(this,function(e){var t=s.textContent(e);this._headings.push(this.trimWhitespace?a.trim(t):t)})):this._headings=["name"]},_getAllItems:function(){var e,t=[];if(this._rootNode.rows)for(e=0;e<this._rootNode.rows.length;e++)t.push(this._rootNode.rows[e]);else for(e=0;e<this._rootNode.childNodes.length;e++)1===this._rootNode.childNodes[e].nodeType&&t.push(this._rootNode.childNodes[e]);return t},_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojo.data.HtmlStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojo.data.HtmlStore: a function was passed an attribute argument that was not an attribute name string");return t.indexOf(this._headings,e)},getValue:function(e,t,a){var i=this.getValues(e,t);return i.length>0?i[0]:a},getValues:function(e,t){this._assertIsItem(e);var i=this._assertIsAttribute(t);if(i>-1){var r;return r=e.cells?s.textContent(e.cells[i]):s.textContent(e),[this.trimWhitespace?a.trim(r):r]}return[]},getAttributes:function(e){this._assertIsItem(e);for(var t=[],a=0;a<this._headings.length;a++)this.hasAttribute(e,this._headings[a])&&t.push(this._headings[a]);return t},hasAttribute:function(e,t){return this.getValues(e,t).length>0},containsValue:function(e,t,a){var i=void 0;return"string"==typeof a&&(i=d.patternToRegExp(a,!1)),this._containsValue(e,t,a,i)},_containsValue:function(e,t,a,i){for(var r=this.getValues(e,t),o=0;o<r.length;++o){var n=r[o];if("string"==typeof n&&i)return null!==n.match(i);if(a===n)return!0}return!1},isItem:function(e){return e&&i.isDescendant(e,this._rootNode)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},_fetchItems:function(e,t,a){if(this._rootNode)this._finishFetchItems(e,t,a);else if(this.url){var o={url:this.url,handleAs:"text",preventCache:this.urlPreventCache},n=this,d=r.get(o);d.addCallback(function(i){var r=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var a=0;a<e.childNodes.length;a++){var i=r(e.childNodes[a],t);if(i)return i}return null},o=document.createElement("div");o.innerHTML=i,n._rootNode=r(o,n.dataId),n._indexItems(),n._finishFetchItems(e,t,a)}),d.addErrback(function(t){a(t,e)})}else this._rootNode=i.byId(this.dataId),this._indexItems(),this._finishFetchItems(e,t,a)},_finishFetchItems:function(e,t,a){var i=[],r=this._getAllItems();if(e.query){var o=e.queryOptions?e.queryOptions.ignoreCase:!1;i=[];var n,s,l={};for(n in e.query)s=e.query[n]+"","string"==typeof s&&(l[n]=d.patternToRegExp(s,o));for(var u=0;u<r.length;++u){var c=!0,m=r[u];for(n in e.query)s=e.query[n]+"",this._containsValue(m,n,s,l[n])||(c=!1);c&&i.push(m)}t(i,e)}else r.length>0&&(i=r.slice(0,r.length)),t(i,e)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(e){},getLabel:function(e){return this.isItem(e)?e.cells?"Item #"+this.getIdentity(e):this.getValue(e,"name"):void 0},getLabelAttributes:function(e){return e.cells?null:["name"]},getIdentity:function(e){return this._assertIsItem(e),this.hasAttribute(e,"name")?this.getValue(e,"name"):e._ident},getIdentityAttributes:function(e){return null},fetchItemByIdentity:function(e){var t=e.identity,a=this,n=null,d=null;if(this._rootNode)this._rootNode.rows[t+1]&&(n=this._rootNode.rows[t+1],e.onItem&&(d=e.scope?e.scope:o.global,e.onItem.call(d,n)));else if(this.url){var l={url:this.url,handleAs:"text"},u=r.get(l);u.addCallback(function(i){var r=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var a=0;a<e.childNodes.length;a++){var i=r(e.childNodes[a],t);if(i)return i}return null},l=document.createElement("div");if(l.innerHTML=i,a._rootNode=r(l,a.dataId),a._indexItems(),a._rootNode.rows&&t<=a._rootNode.rows.length)n=a._rootNode.rows[t-1];else for(var u=0;u<a._rootNode.childNodes.length;u++)if(1===a._rootNode.childNodes[u].nodeType&&t===s.textContent(a._rootNode.childNodes[u])){n=a._rootNode.childNodes[u];break}e.onItem&&(d=e.scope?e.scope:o.global,e.onItem.call(d,n))}),u.addErrback(function(t){e.onError&&(d=e.scope?e.scope:o.global,e.onError.call(d,t))})}else{if(this._rootNode=i.byId(this.dataId),this._indexItems(),a._rootNode.rows)n=this._rootNode.rows[t+1];else for(var c=0;c<a._rootNode.childNodes.length;c++)1===a._rootNode.childNodes[c].nodeType&&t===s.textContent(a._rootNode.childNodes[c])&&(n=a._rootNode.childNodes[c]);e.onItem&&(d=e.scope?e.scope:o.global,e.onItem.call(d,n))}}});return a.extend(l,n),l});//# sourceMappingURL=HtmlStore.js.map