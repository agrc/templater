//>>built
define("dojo/store/DataStore",["../_base/lang","../_base/declare","../Deferred","../_base/array","./util/QueryResults","./util/SimpleQueryEngine"],function(e,t,a,i,r,d){var o=null;return t("dojo.store.DataStore",o,{target:"",constructor:function(t){if(e.mixin(this,t),!("idProperty"in t)){var a;try{a=this.store.getIdentityAttributes()}catch(i){}this.idProperty=(e.isArray(a)?a[0]:a)||this.idProperty}var r=this.store.getFeatures();r["dojo.data.api.Read"]||(this.get=null),r["dojo.data.api.Identity"]||(this.getIdentity=null),r["dojo.data.api.Write"]||(this.put=this.add=null)},idProperty:"id",store:null,queryEngine:d,_objectConverter:function(e){function t(e){for(var r={},d=a.getAttributes(e),o=0;o<d.length;o++){var n=d[o],l=a.getValues(e,n);if(l.length>1){for(var s=0;s<l.length;s++){var m=l[s];"object"==typeof m&&a.isItem(m)&&(l[s]=t(m))}m=l}else{var m=a.getValue(e,n);"object"==typeof m&&a.isItem(m)&&(m=t(m))}r[d[o]]=m}return i in r||!a.getIdentity||(r[i]=a.getIdentity(e)),r}var a=this.store,i=this.idProperty;return function(a){return e(a&&t(a))}},get:function(e,t){var i,r,d=new a;if(this.store.fetchItemByIdentity({identity:e,onItem:this._objectConverter(function(e){d.resolve(i=e)}),onError:function(e){d.reject(r=e)}}),void 0!==i)return null==i?void 0:i;if(r)throw r;return d.promise},put:function(e,t){t=t||{};var i="undefined"!=typeof t.id?t.id:this.getIdentity(e),r=this.store,d=this.idProperty,o=new a;if("undefined"==typeof i){var n=r.newItem(e);r.save({onComplete:function(){o.resolve(n)},onError:function(e){o.reject(e)}})}else r.fetchItemByIdentity({identity:i,onItem:function(a){if(a){if(t.overwrite===!1)return o.reject(new Error("Overwriting existing object not allowed"));for(var i in e)i!=d&&e.hasOwnProperty(i)&&r.getValue(a,i)!=e[i]&&r.setValue(a,i,e[i])}else{if(t.overwrite===!0)return o.reject(new Error("Creating new object not allowed"));var a=r.newItem(e)}r.save({onComplete:function(){o.resolve(a)},onError:function(e){o.reject(e)}})},onError:function(e){o.reject(e)}});return o.promise},add:function(e,t){return(t=t||{}).overwrite=!1,this.put(e,t)},remove:function(e){var t=this.store,i=new a;return this.store.fetchItemByIdentity({identity:e,onItem:function(e){try{null==e?i.resolve(!1):(t.deleteItem(e),t.save(),i.resolve(!0))}catch(a){i.reject(a)}},onError:function(e){i.reject(e)}}),i.promise},query:function(t,d){var o,n=new a(function(){o.abort&&o.abort()});n.total=new a;var l=this._objectConverter(function(e){return e});return o=this.store.fetch(e.mixin({query:t,onBegin:function(e){n.total.resolve(e)},onComplete:function(e){n.resolve(i.map(e,l))},onError:function(e){n.reject(e)}},d)),r(n)},getIdentity:function(e){return e[this.idProperty]}})});//# sourceMappingURL=DataStore.js.map