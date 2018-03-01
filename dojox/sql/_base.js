//>>built
define("dojox/sql/_base",["dojo","dijit","dojox","dojo/require!dojox/sql/_crypto"],function(e,t,i){e.provide("dojox.sql._base"),e.require("dojox.sql._crypto"),e.mixin(i.sql,{dbName:null,debug:!!e.exists("dojox.sql.debug")&&i.sql.debug,open:function(e){if(!this._dbOpen||e&&e!=this.dbName){this.dbName||(this.dbName="dot_store_"+window.location.href.replace(/[^0-9A-Za-z_]/g,"_"),this.dbName.length>63&&(this.dbName=this.dbName.substring(0,63))),e||(e=this.dbName);try{this._initDb(),this.db.open(e),this._dbOpen=!0}catch(e){throw e.message||e}}},close:function(t){if(!e.isIE&&(this._dbOpen||t&&t!=this.dbName)){t||(t=this.dbName);try{this.db.close(t),this._dbOpen=!1}catch(e){throw e.message||e}}},_exec:function(t){try{this._initDb(),this._dbOpen||(this.open(),this._autoClose=!0);var a=null,r=null,o=null,n=e._toArray(t);a=n.splice(0,1)[0],(this._needsEncrypt(a)||this._needsDecrypt(a))&&(r=n.splice(n.length-1,1)[0],o=n.splice(n.length-1,1)[0]),this.debug&&this._printDebugSQL(a,n);if(this._needsEncrypt(a))return new i.sql._SQLCrypto("encrypt",a,o,n,r),null;if(this._needsDecrypt(a))return new i.sql._SQLCrypto("decrypt",a,o,n,r),null;var s=this.db.execute(a,n);return s=this._normalizeResults(s),this._autoClose&&this.close(),s}catch(e){if(e=e.message||e,this._autoClose)try{this.close()}catch(e){}throw e}return null},_initDb:function(){if(!this.db)try{this.db=google.gears.factory.create("beta.database","1.0")}catch(t){throw e.setObject("google.gears.denied",!0),i.off&&i.off.onFrameworkEvent("coreOperationFailed"),"Google Gears must be allowed to run"}},_printDebugSQL:function(e,t){for(var i='dojox.sql("'+e+'"',a=0;a<t.length;a++)"string"==typeof t[a]?i+=', "'+t[a]+'"':i+=", "+t[a];i+=")"},_normalizeResults:function(e){var t=[];if(!e)return[];for(;e.isValidRow();){for(var i={},a=0;a<e.fieldCount();a++){var r=e.fieldName(a),o=e.field(a);i[r]=o}t.push(i),e.next()}return e.close(),t},_needsEncrypt:function(e){return/encrypt\([^\)]*\)/i.test(e)},_needsDecrypt:function(e){return/decrypt\([^\)]*\)/i.test(e)}}),e.declare("dojox.sql._SQLCrypto",null,{constructor:function(e,t,i,a,r){"encrypt"==e?this._execEncryptSQL(t,i,a,r):this._execDecryptSQL(t,i,a,r)},_execEncryptSQL:function(e,t,a,r){var o=this._stripCryptoSQL(e),n=this._flagEncryptedArgs(e,a),s=this;this._encrypt(o,t,a,n,function(a){var n=[],l=null;try{n=i.sql.db.execute(o,a)}catch(e){!0,l=e.message||e}if(null!=l){if(i.sql._autoClose)try{i.sql.close()}catch(e){}return void r(null,!0,l.toString())}if(n=i.sql._normalizeResults(n),i.sql._autoClose&&i.sql.close(),i.sql._needsDecrypt(e)){var d=s._determineDecryptedColumns(e);s._decrypt(n,d,t,function(e){r(e,!1,null)})}else r(n,!1,null)})},_execDecryptSQL:function(e,t,a,r){var o=this._stripCryptoSQL(e),n=this._determineDecryptedColumns(e),s=[],l=null;try{s=i.sql.db.execute(o,a)}catch(e){!0,l=e.message||e}if(null!=l){if(i.sql._autoClose)try{i.sql.close()}catch(e){}return void r(s,!0,l.toString())}s=i.sql._normalizeResults(s),i.sql._autoClose&&i.sql.close(),this._decrypt(s,n,t,function(e){r(e,!1,null)})},_encrypt:function(t,a,r,o,n){this._totalCrypto=0,this._finishedCrypto=0,this._finishedSpawningCrypto=!1,this._finalArgs=r;for(var s=0;s<r.length;s++)if(o[s]){var l=r[s],d=s;this._totalCrypto++,i.sql._crypto.encrypt(l,a,e.hitch(this,function(e){this._finalArgs[d]=e,++this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&n(this._finalArgs)}))}this._finishedSpawningCrypto=!0},_decrypt:function(e,t,i,a){this._totalCrypto=0,this._finishedCrypto=0,this._finishedSpawningCrypto=!1,this._finalResultSet=e;for(var r=0;r<e.length;r++){var o=e[r];for(var n in o)if("*"==t||t[n]){this._totalCrypto++;var s=o[n];this._decryptSingleColumn(n,s,i,r,function(e){a(e)})}}this._finishedSpawningCrypto=!0},_stripCryptoSQL:function(e){e=e.replace(/DECRYPT\(\*\)/gi,"*");var t=e.match(/ENCRYPT\([^\)]*\)/gi);if(null!=t)for(var i=0;i<t.length;i++){var a=t[i],r=a.match(/ENCRYPT\(([^\)]*)\)/i)[1];e=e.replace(a,r)}if(null!=(t=e.match(/DECRYPT\([^\)]*\)/gi)))for(i=0;i<t.length;i++){var o=t[i],n=o.match(/DECRYPT\(([^\)]*)\)/i)[1];e=e.replace(o,n)}return e},_flagEncryptedArgs:function(e,t){for(var i=new RegExp(/([\"][^\"]*\?[^\"]*[\"])|([\'][^\']*\?[^\']*[\'])|(\?)/gi),a=0,r=[];null!=i.exec(e);){if(!/^[\"\']/.test(RegExp.lastMatch+"")){var o=!1;/ENCRYPT\([^\)]*$/i.test(RegExp.leftContext)&&(o=!0),r[a]=o,a++}}return r},_determineDecryptedColumns:function(t){var i={};if(/DECRYPT\(\*\)/i.test(t))i="*";else for(var a=/DECRYPT\((?:\s*\w*\s*\,?)*\)/gi,r=a.exec(t);r;){var o=new String(RegExp.lastMatch),n=o.replace(/DECRYPT\(/i,"");n=n.replace(/\)/,""),n=n.split(/\s*,\s*/),e.forEach(n,function(e){/\s*\w* AS (\w*)/i.test(e)&&(e=e.match(/\s*\w* AS (\w*)/i)[1]),i[e]=!0}),r=a.exec(t)}return i},_decryptSingleColumn:function(t,a,r,o,n){i.sql._crypto.decrypt(a,r,e.hitch(this,function(e){this._finalResultSet[o][t]=e,++this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&n(this._finalResultSet)}))}}),function(){var t=i.sql;i.sql=new Function("return dojox.sql._exec(arguments);"),e.mixin(i.sql,t)}()});//# sourceMappingURL=_base.js.map