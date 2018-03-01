//>>built
define("dojox/wire/TreeAdapter",["dojo","dijit","dojox","dojo/require!dojox/wire/CompositeWire"],function(e,t,i){e.provide("dojox.wire.TreeAdapter"),e.require("dojox.wire.CompositeWire"),e.declare("dojox.wire.TreeAdapter",i.wire.CompositeWire,{_wireClass:"dojox.wire.TreeAdapter",constructor:function(e){this._initializeChildren(this.nodes)},_getValue:function(t){if(!t||!this.nodes)return t;var i=t;e.isArray(i)||(i=[i]);var r=[];for(var o in i)for(var n in this.nodes)r=r.concat(this._getNodes(i[o],this.nodes[n]));return r},_setValue:function(e,t){throw new Error("Unsupported API: "+this._wireClass+"._setValue")},_initializeChildren:function(e){if(e)for(var t in e){var r=e[t];r.node&&(r.node.parent=this,i.wire.isWire(r.node)||(r.node=i.wire.create(r.node))),r.title&&(r.title.parent=this,i.wire.isWire(r.title)||(r.title=i.wire.create(r.title))),r.children&&this._initializeChildren(r.children)}},_getNodes:function(t,i){var r=null;if(i.node){if(!(r=i.node.getValue(t)))return[];e.isArray(r)||(r=[r])}else r=[t];var o=[];for(var n in r){t=r[n];var a={};if(i.title?a.title=i.title.getValue(t):a.title=t,i.children){var s=[];for(var d in i.children)s=s.concat(this._getNodes(t,i.children[d]));s.length>0&&(a.children=s)}o.push(a)}return o}})});//# sourceMappingURL=TreeAdapter.js.map