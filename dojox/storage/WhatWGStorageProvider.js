//>>built
define("dojox/storage/WhatWGStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(e,t,i){e.provide("dojox.storage.WhatWGStorageProvider"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.declare("dojox.storage.WhatWGStorageProvider",[i.storage.Provider],{initialized:!1,_domain:null,_available:null,_statusHandler:null,_allNamespaces:null,_storageEventListener:null,initialize:function(){1!=e.config.disableWhatWGStorage&&(this._domain=location.hostname,this.initialized=!0,i.storage.manager.loaded())},isAvailable:function(){try{globalStorage[location.hostname]}catch(e){return this._available=!1,this._available}return this._available=!0,this._available},put:function(t,i,a,n){if(0==this.isValidKey(t))throw new Error("Invalid key given: "+t);n=n||this.DEFAULT_NAMESPACE,t=this.getFullKey(t,n),this._statusHandler=a,i=e.isString(i)?"string:"+i:e.toJson(i);var o=e.hitch(this,function(e){window.removeEventListener("storage",o,!1),a&&a.call(null,this.SUCCESS,t,null,n)});window.addEventListener("storage",o,!1);try{var r=globalStorage[this._domain];r.setItem(t,i)}catch(s){this._statusHandler.call(null,this.FAILED,t,s.toString(),n)}},get:function(t,i){if(0==this.isValidKey(t))throw new Error("Invalid key given: "+t);i=i||this.DEFAULT_NAMESPACE,t=this.getFullKey(t,i);var a=globalStorage[this._domain],n=a.getItem(t);return null==n||""==n?null:(n=n.value,n=e.isString(n)&&/^string:/.test(n)?n.substring("string:".length):e.fromJson(n))},getNamespaces:function(){for(var e=[this.DEFAULT_NAMESPACE],t={},i=globalStorage[this._domain],a=/^__([^_]*)_/,n=0;n<i.length;n++){var o=i.key(n);if(1==a.test(o)){var r=o.match(a)[1];"undefined"==typeof t[r]&&(t[r]=!0,e.push(r))}}return e},getKeys:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);var t;t=e==this.DEFAULT_NAMESPACE?new RegExp("^([^_]{2}.*)$"):new RegExp("^__"+e+"_(.*)$");for(var i=globalStorage[this._domain],a=[],n=0;n<i.length;n++){var o=i.key(n);1==t.test(o)&&(o=o.match(t)[1],a.push(o))}return a},clear:function(t){if(t=t||this.DEFAULT_NAMESPACE,0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);var i;i=t==this.DEFAULT_NAMESPACE?new RegExp("^[^_]{2}"):new RegExp("^__"+t+"_");for(var a=globalStorage[this._domain],n=[],o=0;o<a.length;o++)1==i.test(a.key(o))&&(n[n.length]=a.key(o));e.forEach(n,e.hitch(a,"removeItem"))},remove:function(e,t){e=this.getFullKey(e,t);var i=globalStorage[this._domain];i.removeItem(e)},isPermanent:function(){return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},getFullKey:function(e,t){if(t=t||this.DEFAULT_NAMESPACE,0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);return t==this.DEFAULT_NAMESPACE?e:"__"+t+"_"+e}}),i.storage.manager.register("dojox.storage.WhatWGStorageProvider",new i.storage.WhatWGStorageProvider)});//# sourceMappingURL=WhatWGStorageProvider.js.map