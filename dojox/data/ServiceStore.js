//>>built
define("dojox/data/ServiceStore",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(e,t,i){return e("dojox.data.ServiceStore",t.getObject("dojox.data.ClientFilter",0)||null,{service:null,constructor:function(e){this.byId=this.fetchItemByIdentity,this._index={},e&&t.mixin(this,e),this.idAttribute=e&&e.idAttribute||this.schema&&this.schema._idAttr},schema:null,idAttribute:"id",labelAttribute:"label",syncMode:!1,estimateCountFactor:1,getSchema:function(){return this.schema},loadLazyValues:!0,getValue:function(e,t,i){var a=e[t];return a||(t in e?a:e._loadObject?(dojox.rpc._sync=!0)&&arguments.callee.call(this,dojox.data.ServiceStore.prototype.loadItem({item:e})||{},t,i):i)},getValues:function(e,t){var i=this.getValue(e,t);return i instanceof Array?i:void 0===i?[]:[i]},getAttributes:function(e){var t=[];for(var i in e)!e.hasOwnProperty(i)||"_"==i.charAt(0)&&"_"==i.charAt(1)||t.push(i);return t},hasAttribute:function(e,t){return t in e},containsValue:function(e,t,a){return i.indexOf(this.getValues(e,t),a)>-1},isItem:function(e){return"object"==typeof e&&e&&!(e instanceof Date)},isItemLoaded:function(e){return e&&!e._loadObject},loadItem:function(e){var t;return e.item._loadObject?e.item._loadObject(function(i){t=i,delete t._loadObject;var a=i instanceof Error?e.onError:e.onItem;a&&a.call(e.scope,i)}):e.onItem&&e.onItem.call(e.scope,e.item),t},_currentId:0,_processResults:function(e,i){if(e&&"object"==typeof e){var a=e.__id;if(!a&&(a=this.idAttribute?e[this.idAttribute]:this._currentId++,void 0!==a)){var r=this._index[a];if(r){for(var o in r)delete r[o];e=t.mixin(r,e)}e.__id=a,this._index[a]=e}for(var n in e)e[n]=this._processResults(e[n],i).items;var d=e.length}return{totalCount:i.request.count==d?(i.request.start||0)+d*this.estimateCountFactor:d,items:e}},close:function(e){return e&&e.abort&&e.abort()},fetch:function(e){e=e||{},("syncMode"in e?e.syncMode:this.syncMode)&&(dojox.rpc._sync=!0);var t=this,i=e.scope||t,a=this.cachingFetch?this.cachingFetch(e):this._doQuery(e);return a.request=e,a.addCallback(function(r){e.clientFetch&&(r=t.clientSideFetch({query:e.clientFetch,sort:e.sort,start:e.start,count:e.count},r));var o=t._processResults(r,a);if(r=e.results=o.items,e.onBegin&&e.onBegin.call(i,o.totalCount,e),e.onItem)for(var n=0;n<r.length;n++)e.onItem.call(i,r[n],e);return e.onComplete&&e.onComplete.call(i,e.onItem?null:r,e),r}),a.addErrback(e.onError&&function(t){return e.onError.call(i,t,e)}),e.abort=function(){a.cancel()},e.store=this,e},_doQuery:function(e){var t="string"==typeof e.queryStr?e.queryStr:e.query;return this.service(t)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0,"dojo.data.api.Schema":this.schema}},getLabel:function(e){return this.getValue(e,this.labelAttribute)},getLabelAttributes:function(e){return[this.labelAttribute]},getIdentity:function(e){return e.__id},getIdentityAttributes:function(e){return[this.idAttribute]},fetchItemByIdentity:function(e){var t=this._index[(e._prefix||"")+e.identity];return t?t._loadObject?(e.item=t,this.loadItem(e)):(e.onItem&&e.onItem.call(e.scope,t),t):this.fetch({query:e.identity,onComplete:e.onItem,onError:e.onError,scope:e.scope}).results}})});//# sourceMappingURL=ServiceStore.js.map