//>>built
define("dojox/storage/BehaviorStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(e,t,i){e.provide("dojox.storage.BehaviorStorageProvider"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.declare("dojox.storage.BehaviorStorageProvider",[i.storage.Provider],{store:null,storeName:"__dojox_BehaviorStorage",keys:[],initialize:function(){try{this.store=this._createStore(),this.store.load(this.storeName)}catch(e){throw new Error("Store is not available: "+e)}var t=this.get("keys","dojoxSystemNS");this.keys=t||[],this.initialized=!0,i.storage.manager.loaded()},isAvailable:function(){return e.isIE&&e.isIE>=5},_createStore:function(){var t=e.create("link",{id:this.storeName+"Node",style:{display:"none"}},e.query("head")[0]);return t.addBehavior("#default#userdata"),t},put:function(t,i,o,n){this._assertIsValidKey(t),n=n||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(n);var r=this.getFullKey(t,n);i=e.toJson(i),this.store.setAttribute(r,i),this.store.save(this.storeName);var a=this.store.getAttribute(r)===i;a&&(this._addKey(r),this.store.setAttribute("__dojoxSystemNS_keys",e.toJson(this.keys)),this.store.save(this.storeName)),o&&o(a?this.SUCCESS:this.FAILED,t,null,n)},get:function(t,i){return this._assertIsValidKey(t),i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i),t=this.getFullKey(t,i),e.fromJson(this.store.getAttribute(t))},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],i=0;i<this.keys.length;i++){var o=this.keys[i];this._beginsWith(o,e)&&(o=o.substring(e.length),t.push(o))}return t},clear:function(t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),t="__"+t+"_";for(var i=[],o=0;o<this.keys.length;o++){var n=this.keys[o];this._beginsWith(n,t)&&i.push(n)}e.forEach(i,function(e){this.store.removeAttribute(e),this._removeKey(e)},this),this.put("keys",this.keys,null,"dojoxSystemNS"),this.store.save(this.storeName)},remove:function(e,t){this._assertIsValidKey(e),t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),e=this.getFullKey(e,t),this.store.removeAttribute(e),this._removeKey(e),this.put("keys",this.keys,null,"dojoxSystemNS"),this.store.save(this.storeName)},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;for(var i=/^__([^_]*)_/,o=0;o<this.keys.length;o++){var n=this.keys[o];if(1==i.test(n)){var r=n.match(i)[1];"undefined"==typeof t[r]&&(t[r]=!0,e.push(r))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){return 64},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e)},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e)},_addKey:function(e){this._removeKey(e),this.keys.push(e)},_removeKey:function(t){this.keys=e.filter(this.keys,function(e){return e!==t},this)}}),i.storage.manager.register("dojox.storage.BehaviorStorageProvider",new i.storage.BehaviorStorageProvider)});//# sourceMappingURL=BehaviorStorageProvider.js.map