//>>built
define("dojox/data/HtmlStore",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/_base/xhr","dojo/_base/kernel","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/xml/parser"],function(e,t,r,i,a,n,o,s,d){var l=e("dojox.data.HtmlStore",null,{constructor:function(e){if(e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache),e&&"trimWhitespace"in e&&(this.trimWhitespace=!!e.trimWhitespace),e.url){if(!e.dataId)throw new Error("dojo.data.HtmlStore: Cannot instantiate using url without an id!");this.url=e.url,this.dataId=e.dataId}else e.dataId&&(this.dataId=e.dataId);e&&"fetchOnCreate"in e&&(this.fetchOnCreate=!!e.fetchOnCreate),this.fetchOnCreate&&this.dataId&&this.fetch()},url:"",dataId:"",trimWhitespace:!1,urlPreventCache:!1,fetchOnCreate:!1,_indexItems:function(){if(this._getHeadings(),this._rootNode.rows){this._rootNode.tBodies&&this._rootNode.tBodies.length>0&&(this._rootNode=this._rootNode.tBodies[0]);var e;for(e=0;e<this._rootNode.rows.length;e++)this._rootNode.rows[e]._ident=e+1}else{var t=1;for(e=0;e<this._rootNode.childNodes.length;e++)1===this._rootNode.childNodes[e].nodeType&&(this._rootNode.childNodes[e]._ident=t,t++)}},_getHeadings:function(){this._headings=[],this._rootNode.tHead?t.forEach(this._rootNode.tHead.rows[0].cells,r.hitch(this,function(e){var t=d.textContent(e);this._headings.push(this.trimWhitespace?r.trim(t):t)})):this._headings=["name"]},_getAllItems:function(){var e,t=[];if(this._rootNode.rows)for(e=0;e<this._rootNode.rows.length;e++)t.push(this._rootNode.rows[e]);else for(e=0;e<this._rootNode.childNodes.length;e++)1===this._rootNode.childNodes[e].nodeType&&t.push(this._rootNode.childNodes[e]);return t},_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojo.data.HtmlStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojo.data.HtmlStore: a function was passed an attribute argument that was not an attribute name string");return t.indexOf(this._headings,e)},getValue:function(e,t,r){var i=this.getValues(e,t);return i.length>0?i[0]:r},getValues:function(e,t){this._assertIsItem(e);var i=this._assertIsAttribute(t);if(i>-1){var a;return a=e.cells?d.textContent(e.cells[i]):d.textContent(e),[this.trimWhitespace?r.trim(a):a]}return[]},getAttributes:function(e){this._assertIsItem(e);for(var t=[],r=0;r<this._headings.length;r++)this.hasAttribute(e,this._headings[r])&&t.push(this._headings[r]);return t},hasAttribute:function(e,t){return this.getValues(e,t).length>0},containsValue:function(e,t,r){var i=void 0;return"string"==typeof r&&(i=s.patternToRegExp(r,!1)),this._containsValue(e,t,r,i)},_containsValue:function(e,t,r,i){for(var a=this.getValues(e,t),n=0;n<a.length;++n){var o=a[n];if("string"==typeof o&&i)return null!==o.match(i);if(r===o)return!0}return!1},isItem:function(e){return e&&i.isDescendant(e,this._rootNode)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},_fetchItems:function(e,t,r){if(this._rootNode)this._finishFetchItems(e,t,r);else if(this.url){var n={url:this.url,handleAs:"text",preventCache:this.urlPreventCache},o=this,s=a.get(n);s.addCallback(function(i){var a=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var r=0;r<e.childNodes.length;r++){var i=a(e.childNodes[r],t);if(i)return i}return null},n=document.createElement("div");n.innerHTML=i,o._rootNode=a(n,o.dataId),o._indexItems(),o._finishFetchItems(e,t,r)}),s.addErrback(function(t){r(t,e)})}else this._rootNode=i.byId(this.dataId),this._indexItems(),this._finishFetchItems(e,t,r)},_finishFetchItems:function(e,t,r){var i=[],a=this._getAllItems();if(e.query){var n=!!e.queryOptions&&e.queryOptions.ignoreCase;i=[];var o,d,l={};for(o in e.query)"string"==typeof(d=e.query[o]+"")&&(l[o]=s.patternToRegExp(d,n));for(var u=0;u<a.length;++u){var c=!0,f=a[u];for(o in e.query)d=e.query[o]+"",this._containsValue(f,o,d,l[o])||(c=!1);c&&i.push(f)}t(i,e)}else a.length>0&&(i=a.slice(0,a.length)),t(i,e)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(e){},getLabel:function(e){if(this.isItem(e))return e.cells?"Item #"+this.getIdentity(e):this.getValue(e,"name")},getLabelAttributes:function(e){return e.cells?null:["name"]},getIdentity:function(e){return this._assertIsItem(e),this.hasAttribute(e,"name")?this.getValue(e,"name"):e._ident},getIdentityAttributes:function(e){return null},fetchItemByIdentity:function(e){var t=e.identity,r=this,o=null,s=null;if(this._rootNode)this._rootNode.rows[t+1]&&(o=this._rootNode.rows[t+1],e.onItem&&(s=e.scope?e.scope:n.global,e.onItem.call(s,o)));else if(this.url){var l={url:this.url,handleAs:"text"},u=a.get(l);u.addCallback(function(i){var a=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var r=0;r<e.childNodes.length;r++){var i=a(e.childNodes[r],t);if(i)return i}return null},l=document.createElement("div");if(l.innerHTML=i,r._rootNode=a(l,r.dataId),r._indexItems(),r._rootNode.rows&&t<=r._rootNode.rows.length)o=r._rootNode.rows[t-1];else for(var u=0;u<r._rootNode.childNodes.length;u++)if(1===r._rootNode.childNodes[u].nodeType&&t===d.textContent(r._rootNode.childNodes[u])){o=r._rootNode.childNodes[u];break}e.onItem&&(s=e.scope?e.scope:n.global,e.onItem.call(s,o))}),u.addErrback(function(t){e.onError&&(s=e.scope?e.scope:n.global,e.onError.call(s,t))})}else{if(this._rootNode=i.byId(this.dataId),this._indexItems(),r._rootNode.rows)o=this._rootNode.rows[t+1];else for(var c=0;c<r._rootNode.childNodes.length;c++)1===r._rootNode.childNodes[c].nodeType&&t===d.textContent(r._rootNode.childNodes[c])&&(o=r._rootNode.childNodes[c]);e.onItem&&(s=e.scope?e.scope:n.global,e.onItem.call(s,o))}}});return r.extend(l,o),l});//# sourceMappingURL=HtmlStore.js.map