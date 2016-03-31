//>>built
define("dojox/mobile/_DataMixin",["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred"],function(e,t,i,a,o){return e.deprecated("dojox/mobile/_DataMixin","Use dojox/mobile/_StoreMixin instead","2.0"),i("dojox.mobile._DataMixin",null,{store:null,query:null,queryOptions:null,setStore:function(e,i,a){return e===this.store?null:(this.store=e,this._setQuery(i,a),e&&e.getFeatures()["dojo.data.api.Notification"]&&(t.forEach(this._conn||[],this.disconnect,this),this._conn=[this.connect(e,"onSet","onSet"),this.connect(e,"onNew","onNew"),this.connect(e,"onDelete","onDelete"),this.connect(e,"close","onStoreClose")]),this.refresh())},setQuery:function(e,t){return this._setQuery(e,t),this.refresh()},_setQuery:function(e,t){this.query=e,this.queryOptions=t||this.queryOptions},refresh:function(){if(!this.store)return null;var e=new o,t=a.hitch(this,function(t,i){this.onComplete(t,i),e.resolve()}),i=a.hitch(this,function(t,i){this.onError(t,i),e.resolve()}),r=this.query;return this.store.fetch({query:r,queryOptions:this.queryOptions,onComplete:t,onError:i,start:r&&r.start,count:r&&r.count}),e}})});//# sourceMappingURL=_DataMixin.js.map