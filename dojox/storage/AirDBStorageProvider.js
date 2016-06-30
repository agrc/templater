//>>built
define("dojox/storage/AirDBStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/manager,dojox/storage/Provider"],function(e,t,i){e.provide("dojox.storage.AirDBStorageProvider"),e.require("dojox.storage.manager"),e.require("dojox.storage.Provider"),e.isAIR&&!function(){if(!t)var t={};t.File=window.runtime.flash.filesystem.File,t.SQLConnection=window.runtime.flash.data.SQLConnection,t.SQLStatement=window.runtime.flash.data.SQLStatement,e.declare("dojox.storage.AirDBStorageProvider",[i.storage.Provider],{DATABASE_FILE:"dojo.db",TABLE_NAME:"__DOJO_STORAGE",initialized:!1,_db:null,initialize:function(){this.initialized=!1;try{this._db=new t.SQLConnection,this._db.open(t.File.applicationStorageDirectory.resolvePath(this.DATABASE_FILE)),this._sql("CREATE TABLE IF NOT EXISTS "+this.TABLE_NAME+"(namespace TEXT, key TEXT, value TEXT)"),this._sql("CREATE UNIQUE INDEX IF NOT EXISTS namespace_key_index ON "+this.TABLE_NAME+" (namespace, key)"),this.initialized=!0}catch(e){}i.storage.manager.loaded()},_sql:function(e,i){var a=new t.SQLStatement;if(a.sqlConnection=this._db,a.text=e,i)for(var r in i)a.parameters[r]=i[r];return a.execute(),a.getResult()},_beginTransaction:function(){this._db.begin()},_commitTransaction:function(){this._db.commit()},isAvailable:function(){return!0},put:function(e,t,i,a){if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);if(a=a||this.DEFAULT_NAMESPACE,0==this.isValidKey(a))throw new Error("Invalid namespace given: "+a);try{this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{":namespace":a,":key":e}),this._sql("INSERT INTO "+this.TABLE_NAME+" VALUES (:namespace, :key, :value)",{":namespace":a,":key":e,":value":t})}catch(r){return void i(this.FAILED,e,r.toString())}i&&i(this.SUCCESS,e,null,a)},get:function(e,t){if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);t=t||this.DEFAULT_NAMESPACE;var i=this._sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{":namespace":t,":key":e});return i.data&&i.data.length?i.data[0].value:null},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t=this._sql("SELECT namespace FROM "+this.TABLE_NAME+" DESC GROUP BY namespace");if(t.data)for(var i=0;i<t.data.length;i++)t.data[i].namespace!=this.DEFAULT_NAMESPACE&&e.push(t.data[i].namespace);return e},getKeys:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);var t=[],i=this._sql("SELECT key FROM "+this.TABLE_NAME+" WHERE namespace = :namespace",{":namespace":e});if(i.data)for(var a=0;a<i.data.length;a++)t.push(i.data[a].key);return t},clear:function(e){if(0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace",{":namespace":e})},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{":namespace":t,":key":e})},putMultiple:function(e,t,i,a){if(this.isValidKeyArray(e)===!1||!t instanceof Array||e.length!=t.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+t+"]");if(null!=a&&"undefined"!=typeof a||(a=this.DEFAULT_NAMESPACE),0==this.isValidKey(a))throw new Error("Invalid namespace given: "+a);this._statusHandler=i;try{this._beginTransaction();for(var r=0;r<e.length;r++)this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{":namespace":a,":key":e[r]}),this._sql("INSERT INTO "+this.TABLE_NAME+" VALUES (:namespace, :key, :value)",{":namespace":a,":key":e[r],":value":t[r]});this._commitTransaction()}catch(o){return void(i&&i(this.FAILED,e,o.toString(),a))}i&&i(this.SUCCESS,e,null)},getMultiple:function(e,t){if(this.isValidKeyArray(e)===!1)throw new Error("Invalid key array given: "+e);if(null!=t&&"undefined"!=typeof t||(t=this.DEFAULT_NAMESPACE),0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);for(var i=[],a=0;a<e.length;a++){var r=this._sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{":namespace":t,":key":e[a]});i[a]=r.data&&r.data.length?r.data[0].value:null}return i},removeMultiple:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._beginTransaction();for(var i=0;i<e.length;i++)this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = namespace = :namespace AND key = :key",{":namespace":t,":key":e[i]});this._commitTransaction()},isPermanent:function(){return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")}}),i.storage.manager.register("dojox.storage.AirDBStorageProvider",new i.storage.AirDBStorageProvider),i.storage.manager.initialize()}()});//# sourceMappingURL=AirDBStorageProvider.js.map