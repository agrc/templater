//>>built
define("dojox/data/OpmlStore",["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr","dojo/data/util/simpleFetch","dojo/data/util/filter","dojo/_base/kernel"],function(e,t,a,i,r,o){var n=e("dojox.data.OpmlStore",null,{constructor:function(e){this._xmlData=null,this._arrayOfTopLevelItems=[],this._arrayOfAllItems=[],this._metadataNodes=null,this._loadFinished=!1,this.url=e.url,this._opmlData=e.data,e.label&&(this.label=e.label),this._loadInProgress=!1,this._queuedFetches=[],this._identityMap={},this._identCount=0,this._idProp="_I",e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache)},label:"text",url:"",urlPreventCache:!1,_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojo.data.OpmlStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if(!t.isString(e))throw new Error("dojox.data.OpmlStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string")},_removeChildNodesThatAreNotElementNodes:function(e,t){var a=e.childNodes;if(0!==a.length){var i,r,o=[];for(i=0;i<a.length;++i)r=a[i],1!=r.nodeType&&o.push(r);for(i=0;i<o.length;++i)r=o[i],e.removeChild(r);if(t)for(i=0;i<a.length;++i)r=a[i],this._removeChildNodesThatAreNotElementNodes(r,t)}},_processRawXmlTree:function(e){this._loadFinished=!0,this._xmlData=e;var t=e.getElementsByTagName("head"),a=t[0];a&&(this._removeChildNodesThatAreNotElementNodes(a),this._metadataNodes=a.childNodes);var i=e.getElementsByTagName("body"),r=i[0];if(r){this._removeChildNodesThatAreNotElementNodes(r,!0);for(var o=i[0].childNodes,n=0;n<o.length;++n){var d=o[n];"outline"==d.tagName&&(this._identityMap[this._identCount]=d,this._identCount++,this._arrayOfTopLevelItems.push(d),this._arrayOfAllItems.push(d),this._checkChildNodes(d))}}},_checkChildNodes:function(e){if(e.firstChild)for(var t=0;t<e.childNodes.length;t++){var a=e.childNodes[t];"outline"==a.tagName&&(this._identityMap[this._identCount]=a,this._identCount++,this._arrayOfAllItems.push(a),this._checkChildNodes(a))}},_getItemsArray:function(e){return e&&e.deep?this._arrayOfAllItems:this._arrayOfTopLevelItems},getValue:function(e,t,a){if(this._assertIsItem(e),this._assertIsAttribute(t),"children"==t)return e.firstChild||a;var i=e.getAttribute(t);return void 0!==i?i:a},getValues:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t);var a=[];if("children"==t)for(var i=0;i<e.childNodes.length;++i)a.push(e.childNodes[i]);else null!==e.getAttribute(t)&&a.push(e.getAttribute(t));return a},getAttributes:function(e){this._assertIsItem(e);for(var t=[],a=e,i=a.attributes,r=0;r<i.length;++r){var o=i.item(r);t.push(o.nodeName)}return a.childNodes.length>0&&t.push("children"),t},hasAttribute:function(e,t){return this.getValues(e,t).length>0},containsValue:function(e,t,a){var i=void 0;return"string"==typeof a&&(i=r.patternToRegExp(a,!1)),this._containsValue(e,t,a,i)},_containsValue:function(e,t,a,i){for(var r=this.getValues(e,t),o=0;o<r.length;++o){var n=r[o];if("string"==typeof n&&i)return null!==n.match(i);if(a===n)return!0}return!1},isItem:function(e){return e&&1==e.nodeType&&"outline"==e.tagName&&e.ownerDocument===this._xmlData},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getLabel:function(e){return this.isItem(e)?this.getValue(e,this.label):void 0},getLabelAttributes:function(e){return[this.label]},_fetchItems:function(e,t,i){var o=this,n=function(e,a){var i=null;if(e.query){i=[];var n=e.queryOptions?e.queryOptions.ignoreCase:!1,d={};for(var l in e.query){var s=e.query[l];"string"==typeof s&&(d[l]=r.patternToRegExp(s,n))}for(var m=0;m<a.length;++m){var u=!0,f=a[m];for(var l in e.query){var s=e.query[l];o._containsValue(f,l,s,d[l])||(u=!1)}u&&i.push(f)}}else a.length>0&&(i=a.slice(0,a.length));t(i,e)};if(this._loadFinished)n(e,this._getItemsArray(e.queryOptions));else if(this._loadInProgress)this._queuedFetches.push({args:e,filter:n});else if(""!==this.url){this._loadInProgress=!0;var d={url:o.url,handleAs:"xml",preventCache:o.urlPreventCache},l=a.get(d);l.addCallback(function(t){o._processRawXmlTree(t),n(e,o._getItemsArray(e.queryOptions)),o._handleQueuedFetches()}),l.addErrback(function(e){throw e})}else{if(!this._opmlData)throw new Error("dojox.data.OpmlStore: No OPML source data was provided as either URL or XML data input.");this._processRawXmlTree(this._opmlData),this._opmlData=null,n(e,this._getItemsArray(e.queryOptions))}},getFeatures:function(){var e={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0};return e},getIdentity:function(e){if(this.isItem(e))for(var t in this._identityMap)if(this._identityMap[t]===e)return t;return null},fetchItemByIdentity:function(e){if(this._loadFinished){var t=this._identityMap[e.identity];if(this.isItem(t)||(t=null),e.onItem){var i=e.scope?e.scope:o.global;e.onItem.call(i,t)}}else{var r=this;if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:e});else{this._loadInProgress=!0;var n={url:r.url,handleAs:"xml"},d=a.get(n);d.addCallback(function(t){var a=e.scope?e.scope:o.global;try{r._processRawXmlTree(t);var i=r._identityMap[e.identity];r.isItem(i)||(i=null),e.onItem&&e.onItem.call(a,i),r._handleQueuedFetches()}catch(n){e.onError&&e.onError.call(a,n)}}),d.addErrback(function(t){if(this._loadInProgress=!1,e.onError){var a=e.scope?e.scope:o.global;e.onError.call(a,t)}})}else if(this._opmlData){this._processRawXmlTree(this._opmlData),this._opmlData=null;var t=this._identityMap[e.identity];if(r.isItem(t)||(t=null),e.onItem){var i=e.scope?e.scope:o.global;e.onItem.call(i,t)}}}},getIdentityAttributes:function(e){return null},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var e=0;e<this._queuedFetches.length;e++){var t=this._queuedFetches[e],a=t.args,i=t.filter;i?i(a,this._getItemsArray(a.queryOptions)):this.fetchItemByIdentity(a)}this._queuedFetches=[]}},close:function(e){}});return t.extend(n,i),n});//# sourceMappingURL=OpmlStore.js.map