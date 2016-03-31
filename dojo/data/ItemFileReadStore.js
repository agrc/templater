//>>built
define("dojo/data/ItemFileReadStore",["../_base/kernel","../_base/lang","../_base/declare","../_base/array","../_base/xhr","../Evented","./util/filter","./util/simpleFetch","../date/stamp"],function(e,t,a,i,r,d,o,l,n){var s=a("dojo.data.ItemFileReadStore",[d],{constructor:function(e){this._arrayOfAllItems=[],this._arrayOfTopLevelItems=[],this._loadFinished=!1,this._jsonFileUrl=e.url,this._ccUrl=e.url,this.url=e.url,this._jsonData=e.data,this.data=null,this._datatypeMap=e.typeMap||{},this._datatypeMap.Date||(this._datatypeMap.Date={type:Date,deserialize:function(e){return n.fromISOString(e)}}),this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0},this._itemsByIdentity=null,this._storeRefPropName="_S",this._itemNumPropName="_0",this._rootItemPropName="_RI",this._reverseRefMap="_RRM",this._loadInProgress=!1,this._queuedFetches=[],void 0!==e.urlPreventCache&&(this.urlPreventCache=!!e.urlPreventCache),void 0!==e.hierarchical&&(this.hierarchical=!!e.hierarchical),e.clearOnClose&&(this.clearOnClose=!0),"failOk"in e&&(this.failOk=!!e.failOk)},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:!1,urlPreventCache:!1,failOk:!1,hierarchical:!0,_assertIsItem:function(e){if(!this.isItem(e))throw new Error(this.declaredClass+": Invalid item argument.")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error(this.declaredClass+": Invalid attribute argument.")},getValue:function(e,t,a){var i=this.getValues(e,t);return i.length>0?i[0]:a},getValues:function(e,t){return this._assertIsItem(e),this._assertIsAttribute(t),(e[t]||[]).slice(0)},getAttributes:function(e){this._assertIsItem(e);var t=[];for(var a in e)a!==this._storeRefPropName&&a!==this._itemNumPropName&&a!==this._rootItemPropName&&a!==this._reverseRefMap&&t.push(a);return t},hasAttribute:function(e,t){return this._assertIsItem(e),this._assertIsAttribute(t),t in e},containsValue:function(e,t,a){var i=void 0;return"string"==typeof a&&(i=o.patternToRegExp(a,!1)),this._containsValue(e,t,a,i)},_containsValue:function(e,a,r,d){return i.some(this.getValues(e,a),function(e){if(null!==e&&!t.isObject(e)&&d){if(e.toString().match(d))return!0}else if(r===e)return!0})},isItem:function(e){return!(!e||e[this._storeRefPropName]!==this||this._arrayOfAllItems[e[this._itemNumPropName]]!==e)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},getFeatures:function(){return this._features},getLabel:function(e){return this._labelAttr&&this.isItem(e)?this.getValue(e,this._labelAttr):void 0},getLabelAttributes:function(e){return this._labelAttr?[this._labelAttr]:null},filter:function(e,t,a){var i,r,d=[];if(e.query){var l,n=e.queryOptions?e.queryOptions.ignoreCase:!1,s={};for(r in e.query)l=e.query[r],"string"==typeof l?s[r]=o.patternToRegExp(l,n):l instanceof RegExp&&(s[r]=l);for(i=0;i<t.length;++i){var m=!0,f=t[i];if(null===f)m=!1;else for(r in e.query)l=e.query[r],this._containsValue(f,r,l,s[r])||(m=!1);m&&d.push(f)}a(d,e)}else{for(i=0;i<t.length;++i){var h=t[i];null!==h&&d.push(h)}a(d,e)}},_fetchItems:function(a,i,d){var o=this;if(this._loadFinished)this.filter(a,this._getItemsArray(a.queryOptions),i);else if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,this._ccUrl=this.url),null!=this.data&&(this._jsonData=this.data,this.data=null),this._jsonFileUrl)if(this._loadInProgress)this._queuedFetches.push({args:a,filter:t.hitch(o,"filter"),findCallback:t.hitch(o,i)});else{this._loadInProgress=!0;var l={url:o._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk},n=r.get(l);n.addCallback(function(e){try{o._getItemsFromLoadedData(e),o._loadFinished=!0,o._loadInProgress=!1,o.filter(a,o._getItemsArray(a.queryOptions),i),o._handleQueuedFetches()}catch(t){o._loadFinished=!0,o._loadInProgress=!1,d(t,a)}}),n.addErrback(function(e){o._loadInProgress=!1,d(e,a)});var s=null;a.abort&&(s=a.abort),a.abort=function(){var e=n;e&&-1===e.fired&&(e.cancel(),e=null),s&&s.call(a)}}else if(this._jsonData)try{this._loadFinished=!0,this._getItemsFromLoadedData(this._jsonData),this._jsonData=null,o.filter(a,this._getItemsArray(a.queryOptions),i)}catch(m){d(m,a)}else d(new Error(this.declaredClass+": No JSON source data was provided as either URL or a nested Javascript object."),a)},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var e=0;e<this._queuedFetches.length;e++){var t=this._queuedFetches[e],a=t.args,i=t.filter,r=t.findCallback;i?i(a,this._getItemsArray(a.queryOptions),r):this.fetchItemByIdentity(a)}this._queuedFetches=[]}},_getItemsArray:function(e){return e&&e.deep?this._arrayOfAllItems:this._arrayOfTopLevelItems},close:function(e){this.clearOnClose&&this._loadFinished&&!this._loadInProgress&&(!(""!=this._jsonFileUrl&&null!=this._jsonFileUrl||""!=this.url&&null!=this.url||null!=this.data),this._arrayOfAllItems=[],this._arrayOfTopLevelItems=[],this._loadFinished=!1,this._itemsByIdentity=null,this._loadInProgress=!1,this._queuedFetches=[])},_getItemsFromLoadedData:function(e){function a(e){return null!==e&&"object"==typeof e&&(!t.isArray(e)||r)&&!t.isFunction(e)&&(e.constructor==Object||t.isArray(e))&&"undefined"==typeof e._reference&&"undefined"==typeof e._type&&"undefined"==typeof e._value&&d.hierarchical}function i(e){d._arrayOfAllItems.push(e);for(var r in e){var o=e[r];if(o)if(t.isArray(o))for(var l=o,n=0;n<l.length;++n){var s=l[n];a(s)&&i(s)}else a(o)&&i(o)}}var r=!1,d=this;this._labelAttr=e.label;var o,l;for(this._arrayOfAllItems=[],this._arrayOfTopLevelItems=e.items,o=0;o<this._arrayOfTopLevelItems.length;++o)l=this._arrayOfTopLevelItems[o],t.isArray(l)&&(r=!0),i(l),l[this._rootItemPropName]=!0;var n,s={};for(o=0;o<this._arrayOfAllItems.length;++o){l=this._arrayOfAllItems[o];for(n in l){if(n!==this._rootItemPropName){var m=l[n];null!==m?t.isArray(m)||(l[n]=[m]):l[n]=[null]}s[n]=n}}for(;s[this._storeRefPropName];)this._storeRefPropName+="_";for(;s[this._itemNumPropName];)this._itemNumPropName+="_";for(;s[this._reverseRefMap];)this._reverseRefMap+="_";var f,h=e.identifier;if(h)for(this._itemsByIdentity={},this._features["dojo.data.api.Identity"]=h,o=0;o<this._arrayOfAllItems.length;++o){l=this._arrayOfAllItems[o],f=l[h];var u=f[0];if(Object.hasOwnProperty.call(this._itemsByIdentity,u)){if(this._jsonFileUrl)throw new Error(this.declaredClass+":  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+h+"].  Value collided: ["+u+"]");if(this._jsonData)throw new Error(this.declaredClass+":  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+h+"].  Value collided: ["+u+"]")}else this._itemsByIdentity[u]=l}else this._features["dojo.data.api.Identity"]=Number;for(o=0;o<this._arrayOfAllItems.length;++o)l=this._arrayOfAllItems[o],l[this._storeRefPropName]=this,l[this._itemNumPropName]=o;for(o=0;o<this._arrayOfAllItems.length;++o){l=this._arrayOfAllItems[o];for(n in l){f=l[n];for(var y=0;y<f.length;++y)if(m=f[y],null!==m&&"object"==typeof m){if("_type"in m&&"_value"in m){var c=m._type,M=this._datatypeMap[c];if(!M)throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+c+"'");if(t.isFunction(M))f[y]=new M(m._value);else{if(!t.isFunction(M.deserialize))throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");f[y]=M.deserialize(m._value)}}if(m._reference){var v=m._reference;if(t.isObject(v))for(var g=0;g<this._arrayOfAllItems.length;++g){var p=this._arrayOfAllItems[g],F=!0;for(var b in v)p[b]!=v[b]&&(F=!1);F&&(f[y]=p)}else f[y]=this._getItemByIdentity(v);if(this.referenceIntegrity){var I=f[y];this.isItem(I)&&this._addReferenceToMap(I,l,n)}}else this.isItem(m)&&this.referenceIntegrity&&this._addReferenceToMap(m,l,n)}}}},_addReferenceToMap:function(e,t,a){},getIdentity:function(e){var t=this._features["dojo.data.api.Identity"];if(t===Number)return e[this._itemNumPropName];var a=e[t];return a?a[0]:null},fetchItemByIdentity:function(t){var a,i;if(this._loadFinished)a=this._getItemByIdentity(t.identity),t.onItem&&(i=t.scope?t.scope:e.global,t.onItem.call(i,a));else{var d=this;if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,this._ccUrl=this.url),null!=this.data&&null==this._jsonData&&(this._jsonData=this.data,this.data=null),this._jsonFileUrl)if(this._loadInProgress)this._queuedFetches.push({args:t});else{this._loadInProgress=!0;var o={url:d._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk},l=r.get(o);l.addCallback(function(i){var r=t.scope?t.scope:e.global;try{d._getItemsFromLoadedData(i),d._loadFinished=!0,d._loadInProgress=!1,a=d._getItemByIdentity(t.identity),t.onItem&&t.onItem.call(r,a),d._handleQueuedFetches()}catch(o){d._loadInProgress=!1,t.onError&&t.onError.call(r,o)}}),l.addErrback(function(a){if(d._loadInProgress=!1,t.onError){var i=t.scope?t.scope:e.global;t.onError.call(i,a)}})}else this._jsonData&&(d._getItemsFromLoadedData(d._jsonData),d._jsonData=null,d._loadFinished=!0,a=d._getItemByIdentity(t.identity),t.onItem&&(i=t.scope?t.scope:e.global,t.onItem.call(i,a)))}},_getItemByIdentity:function(e){var t=null;return this._itemsByIdentity?Object.hasOwnProperty.call(this._itemsByIdentity,e)&&(t=this._itemsByIdentity[e]):Object.hasOwnProperty.call(this._arrayOfAllItems,e)&&(t=this._arrayOfAllItems[e]),void 0===t&&(t=null),t},getIdentityAttributes:function(e){var t=this._features["dojo.data.api.Identity"];return t===Number?null:[t]},_forceLoad:function(){var t=this;if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,this._ccUrl=this.url),null!=this.data&&(this._jsonData=this.data,this.data=null),this._jsonFileUrl){var a={url:this._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk,sync:!0},i=r.get(a);i.addCallback(function(e){try{if(t._loadInProgress===!0||t._loadFinished){if(t._loadInProgress)throw new Error(this.declaredClass+":  Unable to perform a synchronous load, an async load is in progress.")}else t._getItemsFromLoadedData(e),t._loadFinished=!0}catch(a){throw a}}),i.addErrback(function(e){throw e})}else this._jsonData&&(t._getItemsFromLoadedData(t._jsonData),t._jsonData=null,t._loadFinished=!0)}});return t.extend(s,l),s});//# sourceMappingURL=ItemFileReadStore.js.map