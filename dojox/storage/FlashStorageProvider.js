//>>built
define("dojox/storage/FlashStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/flash,dojox/storage/manager,dojox/storage/Provider"],function(dojo,dijit,dojox){dojo.provide("dojox.storage.FlashStorageProvider"),dojo.require("dojox.flash"),dojo.require("dojox.storage.manager"),dojo.require("dojox.storage.Provider"),dojo.declare("dojox.storage.FlashStorageProvider",dojox.storage.Provider,{initialized:!1,_available:null,_statusHandler:null,_flashReady:!1,_pageReady:!1,initialize:function(){if(1!=dojo.config.disableFlashStorage){dojox.flash.addLoadedListener(dojo.hitch(this,function(){this._flashReady=!0,this._flashReady&&this._pageReady&&this._loaded()}));var e=dojo.moduleUrl("dojox","storage/Storage.swf").toString();dojox.flash.setSwf(e,!1),dojo.connect(dojo,"loaded",this,function(){this._pageReady=!0,this._flashReady&&this._pageReady&&this._loaded()})}},setFlushDelay:function(e){if(null===e||"undefined"==typeof e||isNaN(e))throw new Error("Invalid argunment: "+e);dojox.flash.comm.setFlushDelay(String(e))},getFlushDelay:function(){return Number(dojox.flash.comm.getFlushDelay())},flush:function(e){null!=e&&"undefined"!=typeof e||(e=dojox.storage.DEFAULT_NAMESPACE),dojox.flash.comm.flush(e)},isAvailable:function(){return this._available=!dojo.config.disableFlashStorage},put:function(e,t,i,a){if(!this.isValidKey(e))throw new Error("Invalid key given: "+e);if(a||(a=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(a))throw new Error("Invalid namespace given: "+a);this._statusHandler=i,t=dojo.isString(t)?"string:"+t:dojo.toJson(t),dojox.flash.comm.put(e,t,a)},putMultiple:function(e,t,i,a){if(!this.isValidKeyArray(e)||!t instanceof Array||e.length!=t.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+t+"]");if(a||(a=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(a))throw new Error("Invalid namespace given: "+a);this._statusHandler=i;for(var r=e.join(","),o=[],n=0;n<t.length;n++)dojo.isString(t[n])?t[n]="string:"+t[n]:t[n]=dojo.toJson(t[n]),o[n]=t[n].length;var s=t.join(""),l=o.join(",");dojox.flash.comm.putMultiple(r,s,l,a)},get:function(e,t){if(!this.isValidKey(e))throw new Error("Invalid key given: "+e);if(t||(t=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(t))throw new Error("Invalid namespace given: "+t);var i=dojox.flash.comm.get(e,t);return""==i?null:this._destringify(i)},getMultiple:function(keys,namespace){if(!this.isValidKeyArray(keys))throw new("Invalid key array given: "+keys);if(namespace||(namespace=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(namespace))throw new Error("Invalid namespace given: "+namespace);for(var metaKey=keys.join(","),metaResults=dojox.flash.comm.getMultiple(metaKey,namespace),results=eval("("+metaResults+")"),i=0;i<results.length;i++)results[i]=""==results[i]?null:this._destringify(results[i]);return results},_destringify:function(e){return e=dojo.isString(e)&&/^string:/.test(e)?e.substring("string:".length):dojo.fromJson(e)},getKeys:function(e){if(e||(e=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);var t=dojox.flash.comm.getKeys(e);return null!=t&&"null"!=t||(t=""),t=t.split(","),t.sort(),t},getNamespaces:function(){var e=dojox.flash.comm.getNamespaces();return null!=e&&"null"!=e||(e=dojox.storage.DEFAULT_NAMESPACE),e=e.split(","),e.sort(),e},clear:function(e){if(e||(e=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);dojox.flash.comm.clear(e)},remove:function(e,t){if(t||(t=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(t))throw new Error("Invalid namespace given: "+t);dojox.flash.comm.remove(e,t)},removeMultiple:function(e,t){if(this.isValidKeyArray(e)||dojo.raise("Invalid key array given: "+e),t||(t=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(t))throw new Error("Invalid namespace given: "+t);var i=e.join(",");dojox.flash.comm.removeMultiple(i,t)},isPermanent:function(){return!0},getMaximumSize:function(){return dojox.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){return!0},showSettingsUI:function(){dojox.flash.comm.showSettings(),dojox.flash.obj.setVisible(!0),dojox.flash.obj.center()},hideSettingsUI:function(){dojox.flash.obj.setVisible(!1),dojo.isFunction(dojox.storage.onHideSettingsUI)&&dojox.storage.onHideSettingsUI.call(null)},getResourceList:function(){return[]},_loaded:function(){this._allNamespaces=this.getNamespaces(),this.initialized=!0,dojox.storage.manager.loaded()},_onStatus:function(e,t,i){var a=dojox.storage,r=dojox.flash.obj;e==a.PENDING?(r.center(),r.setVisible(!0)):r.setVisible(!1),a._statusHandler&&a._statusHandler.call(null,e,t,null,i)}}),dojox.storage.manager.register("dojox.storage.FlashStorageProvider",new dojox.storage.FlashStorageProvider)});//# sourceMappingURL=FlashStorageProvider.js.map