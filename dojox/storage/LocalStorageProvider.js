//>>built
define("dojox/storage/LocalStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(e,t,i){e.provide("dojox.storage.LocalStorageProvider"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.declare("dojox.storage.LocalStorageProvider",[i.storage.Provider],{store:null,initialize:function(){this.store=localStorage,this.initialized=!0,i.storage.manager.loaded()},isAvailable:function(){return"undefined"!=typeof localStorage},put:function(t,i,o,a){this._assertIsValidKey(t),a=a||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(a);var n=this.getFullKey(t,a);i=e.toJson(i);try{this.store.setItem(n,i),o&&o(this.SUCCESS,t,null,a)}catch(r){o&&o(this.FAILED,t,r.toString(),a)}},get:function(t,i){return this._assertIsValidKey(t),i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i),t=this.getFullKey(t,i),e.fromJson(this.store.getItem(t))},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],i=0;i<this.store.length;i++){var o=this.store.key(i);this._beginsWith(o,e)&&(o=o.substring(e.length),t.push(o))}return t},clear:function(t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),t="__"+t+"_";for(var i=[],o=0;o<this.store.length;o++)this._beginsWith(this.store.key(o),t)&&i.push(this.store.key(o));e.forEach(i,e.hitch(this.store,"removeItem"))},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),this.store.removeItem(this.getFullKey(e,t))},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;for(var i=/^__([^_]*)_/,o=0;o<this.store.length;o++){var a=this.store.key(o);if(1==i.test(a)){var n=a.match(i)[1];"undefined"==typeof t[n]&&(t[n]=!0,e.push(n))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){return i.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e)},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e)}}),i.storage.manager.register("dojox.storage.LocalStorageProvider",new i.storage.LocalStorageProvider)});//# sourceMappingURL=LocalStorageProvider.js.map