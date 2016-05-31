//>>built
define("dojox/storage/GearsStorageProvider",["dojo","dijit","dojox","dojo/require!dojo/gears,dojox/storage/Provider,dojox/storage/manager,dojox/sql"],function(e,t,i){e.provide("dojox.storage.GearsStorageProvider"),e.require("dojo.gears"),e.require("dojox.storage.Provider"),e.require("dojox.storage.manager"),e.require("dojox.sql"),e.gears.available&&!function(){e.declare("dojox.storage.GearsStorageProvider",i.storage.Provider,{constructor:function(){},TABLE_NAME:"__DOJO_STORAGE",initialized:!1,_available:null,_storageReady:!1,initialize:function(){1!=e.config.disableGearsStorage&&(this.TABLE_NAME="__DOJO_STORAGE",this.initialized=!0,i.storage.manager.loaded())},isAvailable:function(){return this._available=e.gears.available},put:function(t,a,o,r){if(this._initStorage(),!this.isValidKey(t))throw new Error("Invalid key given: "+t);if(r=r||this.DEFAULT_NAMESPACE,!this.isValidKey(r))throw new Error("Invalid namespace given: "+t);a=e.isString(a)?"string:"+a:e.toJson(a);try{i.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",r,t),i.sql("INSERT INTO "+this.TABLE_NAME+" VALUES (?, ?, ?)",r,t,a)}catch(n){return void o(this.FAILED,t,n.toString(),r)}o&&o(i.storage.SUCCESS,t,null,r)},get:function(t,a){if(this._initStorage(),!this.isValidKey(t))throw new Error("Invalid key given: "+t);if(a=a||this.DEFAULT_NAMESPACE,!this.isValidKey(a))throw new Error("Invalid namespace given: "+t);var o=i.sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = ? AND  key = ?",a,t);return o.length?(o=o[0].value,o=e.isString(o)&&/^string:/.test(o)?o.substring("string:".length):e.fromJson(o)):null},getNamespaces:function(){this._initStorage();for(var e=[i.storage.DEFAULT_NAMESPACE],t=i.sql("SELECT namespace FROM "+this.TABLE_NAME+" DESC GROUP BY namespace"),a=0;a<t.length;a++)t[a].namespace!=i.storage.DEFAULT_NAMESPACE&&e.push(t[a].namespace);return e},getKeys:function(e){if(this._initStorage(),e=e||this.DEFAULT_NAMESPACE,!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);for(var t=i.sql("SELECT key FROM "+this.TABLE_NAME+" WHERE namespace = ?",e),a=[],o=0;o<t.length;o++)a.push(t[o].key);return a},clear:function(e){if(this._initStorage(),e=e||this.DEFAULT_NAMESPACE,!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);i.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ?",e)},remove:function(e,t){if(this._initStorage(),!this.isValidKey(e))throw new Error("Invalid key given: "+e);if(t=t||this.DEFAULT_NAMESPACE,!this.isValidKey(t))throw new Error("Invalid namespace given: "+e);i.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",t,e)},putMultiple:function(t,a,o,r){if(this._initStorage(),!this.isValidKeyArray(t)||!a instanceof Array||t.length!=a.length)throw new Error("Invalid arguments: keys = ["+t+"], values = ["+a+"]");if(null!=r&&"undefined"!=typeof r||(r=i.storage.DEFAULT_NAMESPACE),!this.isValidKey(r))throw new Error("Invalid namespace given: "+r);this._statusHandler=o;try{i.sql.open(),i.sql.db.execute("BEGIN TRANSACTION");for(var n="REPLACE INTO "+this.TABLE_NAME+" VALUES (?, ?, ?)",s=0;s<t.length;s++){var l=a[s];l=e.isString(l)?"string:"+l:e.toJson(l),i.sql.db.execute(n,[r,t[s],l])}i.sql.db.execute("COMMIT TRANSACTION"),i.sql.close()}catch(d){return void(o&&o(this.FAILED,t,d.toString(),r))}o&&o(i.storage.SUCCESS,t,null,r)},getMultiple:function(t,a){if(this._initStorage(),!this.isValidKeyArray(t))throw new("Invalid key array given: "+t);if(null!=a&&"undefined"!=typeof a||(a=i.storage.DEFAULT_NAMESPACE),!this.isValidKey(a))throw new Error("Invalid namespace given: "+a);for(var o="SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = ? AND  key = ?",r=[],n=0;n<t.length;n++){var s=i.sql(o,a,t[n]);s.length?(s=s[0].value,e.isString(s)&&/^string:/.test(s)?r[n]=s.substring("string:".length):r[n]=e.fromJson(s)):r[n]=null}return r},removeMultiple:function(e,t){if(this._initStorage(),!this.isValidKeyArray(e))throw new Error("Invalid arguments: keys = ["+e+"]");if(null!=t&&"undefined"!=typeof t||(t=i.storage.DEFAULT_NAMESPACE),!this.isValidKey(t))throw new Error("Invalid namespace given: "+t);i.sql.open(),i.sql.db.execute("BEGIN TRANSACTION");for(var a="DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",o=0;o<e.length;o++)i.sql.db.execute(a,[t,e[o]]);i.sql.db.execute("COMMIT TRANSACTION"),i.sql.close()},isPermanent:function(){return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},_initStorage:function(){if(!this._storageReady){if(!google.gears.factory.hasPermission){var e=null,t=null,a="This site would like to use Google Gears to enable enhanced functionality.",o=google.gears.factory.getPermission(e,t,a);if(!o)throw new Error("You must give permission to use Gears in order to store data")}try{i.sql("CREATE TABLE IF NOT EXISTS "+this.TABLE_NAME+"(  namespace TEXT,  key TEXT,  value TEXT )"),i.sql("CREATE UNIQUE INDEX IF NOT EXISTS namespace_key_index ON "+this.TABLE_NAME+" (namespace, key)")}catch(r){throw new Error("Unable to create storage tables for Gears in Dojo Storage")}this._storageReady=!0}}}),i.storage.manager.register("dojox.storage.GearsStorageProvider",new i.storage.GearsStorageProvider)}()});//# sourceMappingURL=GearsStorageProvider.js.map