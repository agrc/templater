//>>built
define("dojox/wire/ml/DataStore",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dojox/wire/_base"],function(e,t,i){e.provide("dojox.wire.ml.DataStore"),e.require("dijit._Widget"),e.require("dojox.wire._base"),e.declare("dojox.wire.ml.DataStore",t._Widget,{storeClass:"",postCreate:function(){this.store=this._createStore()},_createStore:function(){if(!this.storeClass)return null;var e=i.wire._getClass(this.storeClass);if(!e)return null;for(var t={},r=this.domNode.attributes,o=0;o<r.length;o++){var a=r.item(o);a.specified&&!this[a.nodeName]&&(t[a.nodeName]=a.nodeValue)}return new e(t)},getFeatures:function(){return this.store.getFeatures()},fetch:function(e){return this.store.fetch(e)},save:function(e){this.store.save(e)},newItem:function(e){return this.store.newItem(e)},deleteItem:function(e){return this.store.deleteItem(e)},revert:function(){return this.store.revert()}})});//# sourceMappingURL=DataStore.js.map