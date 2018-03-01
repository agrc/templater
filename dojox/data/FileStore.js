//>>built
define("dojox/data/FileStore",["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","dojo/_base/json","dojo/_base/xhr"],function(e,t,a,i,r){return e("dojox.data.FileStore",null,{constructor:function(e){e&&e.label&&(this.label=e.label),e&&e.url&&(this.url=e.url),e&&e.options&&(t.isArray(e.options)?this.options=e.options:t.isString(e.options)&&(this.options=e.options.split(","))),e&&e.pathAsQueryParam&&(this.pathAsQueryParam=!0),e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache)},url:"",_storeRef:"_S",label:"name",_identifier:"path",_attributes:["children","directory","name","path","modified","size","parentDir"],pathSeparator:"/",options:[],failOk:!1,urlPreventCache:!0,_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.FileStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.FileStore: a function was passed an attribute argument that was not an attribute name string")},pathAsQueryParam:!1,getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},getValue:function(e,t,a){var i=this.getValues(e,t);return i&&i.length>0?i[0]:a},getAttributes:function(e){return this._attributes},hasAttribute:function(e,t){return this._assertIsItem(e),this._assertIsAttribute(t),t in e},getIdentity:function(e){return this.getValue(e,this._identifier)},getIdentityAttributes:function(e){return[this._identifier]},isItemLoaded:function(e){var t=this.isItem(e);return t&&"boolean"==typeof e._loaded&&!e._loaded&&(t=!1),t},loadItem:function(e){var n=e.item,o=this,d=e.scope||a.global,l={};this.options.length>0&&(l.options=i.toJson(this.options)),this.pathAsQueryParam&&(l.path=n.parentPath+this.pathSeparator+n.name);var s={url:this.pathAsQueryParam?this.url:this.url+"/"+n.parentPath+"/"+n.name,handleAs:"json-comment-optional",content:l,preventCache:this.urlPreventCache,failOk:this.failOk},m=r.get(s);m.addErrback(function(t){e.onError&&e.onError.call(d,t)}),m.addCallback(function(a){delete n.parentPath,delete n._loaded,t.mixin(n,a),o._processItem(n),e.onItem&&e.onItem.call(d,n)})},getLabel:function(e){return this.getValue(e,this.label)},getLabelAttributes:function(e){return[this.label]},containsValue:function(e,t,a){for(var i=this.getValues(e,t),r=0;r<i.length;r++)if(i[r]==a)return!0;return!1},getValues:function(e,a){this._assertIsItem(e),this._assertIsAttribute(a);var i=e[a];return void 0===i||t.isArray(i)?void 0===i&&(i=[]):i=[i],i},isItem:function(e){return!(!e||e[this._storeRef]!==this)},close:function(e){},fetch:function(e){e=e||{},e.store||(e.store=this);var t=this,n=e.scope||a.global,o={};e.query&&(o.query=i.toJson(e.query)),e.sort&&(o.sort=i.toJson(e.sort)),e.queryOptions&&(o.queryOptions=i.toJson(e.queryOptions)),"number"==typeof e.start&&(o.start=""+e.start),"number"==typeof e.count&&(o.count=""+e.count),this.options.length>0&&(o.options=i.toJson(this.options));var d={url:this.url,preventCache:this.urlPreventCache,failOk:this.failOk,handleAs:"json-comment-optional",content:o},l=r.get(d);l.addCallback(function(a){t._processResult(a,e)}),l.addErrback(function(t){e.onError&&e.onError.call(n,t,e)})},fetchItemByIdentity:function(e){var t=e.identity,n=this,o=e.scope||a.global,d={};this.options.length>0&&(d.options=i.toJson(this.options)),this.pathAsQueryParam&&(d.path=t);var l={url:this.pathAsQueryParam?this.url:this.url+"/"+t,handleAs:"json-comment-optional",content:d,preventCache:this.urlPreventCache,failOk:this.failOk},s=r.get(l);s.addErrback(function(t){e.onError&&e.onError.call(o,t)}),s.addCallback(function(t){var a=n._processItem(t);e.onItem&&e.onItem.call(o,a)})},_processResult:function(e,t){var i=t.scope||a.global;try{e.pathSeparator&&(this.pathSeparator=e.pathSeparator),t.onBegin&&t.onBegin.call(i,e.total,t);var r=this._processItemArray(e.items);if(t.onItem){var n;for(n=0;n<r.length;n++)t.onItem.call(i,r[n],t);r=null}t.onComplete&&t.onComplete.call(i,r,t)}catch(e){t.onError&&t.onError.call(i,e,t)}},_processItemArray:function(e){var t;for(t=0;t<e.length;t++)this._processItem(e[t]);return e},_processItem:function(e){if(!e)return null;if(e[this._storeRef]=this,e.children&&e.directory)if(t.isArray(e.children)){var a,i=e.children;for(a=0;a<i.length;a++){var r=i[a];t.isObject(r)?i[a]=this._processItem(r):(i[a]={name:r,_loaded:!1,parentPath:e.path},i[a][this._storeRef]=this)}}else delete e.children;return e}})});//# sourceMappingURL=FileStore.js.map