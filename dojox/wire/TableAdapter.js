//>>built
define("dojox/wire/TableAdapter",["dojo","dijit","dojox","dojo/require!dojox/wire/CompositeWire"],function(e,t,i){e.provide("dojox.wire.TableAdapter"),e.require("dojox.wire.CompositeWire"),e.declare("dojox.wire.TableAdapter",i.wire.CompositeWire,{_wireClass:"dojox.wire.TableAdapter",constructor:function(e){this._initializeChildren(this.columns)},_getValue:function(t){if(!t||!this.columns)return t;var i=t;e.isArray(i)||(i=[i]);var o=[];for(var r in i){var n=this._getRow(i[r]);o.push(n)}return o},_setValue:function(e,t){throw new Error("Unsupported API: "+this._wireClass+"._setValue")},_getRow:function(t){var i=e.isArray(this.columns)?[]:{};for(var o in this.columns)i[o]=this.columns[o].getValue(t);return i}})});//# sourceMappingURL=TableAdapter.js.map