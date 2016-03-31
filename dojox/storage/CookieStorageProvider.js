//>>built
define("dojox/storage/CookieStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager,dojo/cookie"],function(e,t,i){e.provide("dojox.storage.CookieStorageProvider"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.require("dojo.cookie"),e.declare("dojox.storage.CookieStorageProvider",[i.storage.Provider],{store:null,cookieName:"dojoxStorageCookie",storageLife:730,initialize:function(){this.store=e.fromJson(e.cookie(this.cookieName))||{},this.initialized=!0,i.storage.manager.loaded()},isAvailable:function(){return e.cookie.isSupported()},put:function(t,i,a,n){this._assertIsValidKey(t),n=n||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(n),fullKey=this.getFullKey(t,n),this.store[fullKey]=e.toJson(i),this._save();var o=e.toJson(this.store)===e.cookie(this.cookieName);o||this.remove(t,n),a&&a(o?this.SUCCESS:this.FAILED,t,null,n)},get:function(t,i){return this._assertIsValidKey(t),i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i),t=this.getFullKey(t,i),this.store[t]?e.fromJson(this.store[t]):null},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";var t=[];for(var i in this.store)this._beginsWith(i,e)&&(i=i.substring(e.length),t.push(i));return t},clear:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";for(var t in this.store)this._beginsWith(t,e)&&delete this.store[t];this._save()},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),this._assertIsValidKey(e),e=this.getFullKey(e,t),delete this.store[e],this._save()},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;var i=/^__([^_]*)_/;for(var a in this.store)if(1==i.test(a)){var n=a.match(i)[1];"undefined"==typeof t[n]&&(t[n]=!0,e.push(n))}return e},isPermanent:function(){return!0},getMaximumSize:function(){return 4},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){return"__"+t+"_"+e},_save:function(){e.cookie(this.cookieName,e.toJson(this.store),{expires:this.storageLife})},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e)},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e)}}),i.storage.manager.register("dojox.storage.CookieStorageProvider",new i.storage.CookieStorageProvider)});//# sourceMappingURL=CookieStorageProvider.js.map