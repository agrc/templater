//>>built
define("dojox/wire/ml/Transfer",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_Container,dojox/wire/_base,dojox/wire/ml/Action"],function(e,t,i){e.provide("dojox.wire.ml.Transfer"),e.require("dijit._Widget"),e.require("dijit._Container"),e.require("dojox.wire._base"),e.require("dojox.wire.ml.Action"),e.declare("dojox.wire.ml.Transfer",i.wire.ml.Action,{source:"",sourceStore:"",sourceAttribute:"",sourcePath:"",type:"",converter:"",target:"",targetStore:"",targetAttribute:"",targetPath:"",delimiter:"",_run:function(){var e=this._getWire("source"),t=this._getWire("target");i.wire.transfer(e,t,arguments)},_getWire:function(e){var t=void 0;if(t="source"==e?{object:this.source,dataStore:this.sourceStore,attribute:this.sourceAttribute,path:this.sourcePath,type:this.type,converter:this.converter}:{object:this.target,dataStore:this.targetStore,attribute:this.targetAttribute,path:this.targetPath},t.object)if(t.object.length>=9&&"arguments"==t.object.substring(0,9))t.property=t.object.substring(9),t.object=null;else{var a=t.object.indexOf(".");0>a?t.object=i.wire.ml._getValue(t.object):(t.property=t.object.substring(a+1),t.object=i.wire.ml._getValue(t.object.substring(0,a)))}t.dataStore&&(t.dataStore=i.wire.ml._getValue(t.dataStore));var n=void 0,o=this.getChildren();for(var a in o){var r=o[a];r instanceof i.wire.ml.ChildWire&&r.which==e&&(n||(n={}),r._addWire(this,n))}return n&&(n.object=i.wire.create(t),n.dataStore=t.dataStore,t=n),t}}),e.declare("dojox.wire.ml.ChildWire",t._Widget,{which:"source",object:"",property:"",type:"",converter:"",attribute:"",path:"",name:"",_addWire:function(e,t){this.name?(t.children||(t.children={}),t.children[this.name]=this._getWire(e)):(t.children||(t.children=[]),t.children.push(this._getWire(e)))},_getWire:function(e){return{object:this.object?i.wire.ml._getValue(this.object):void 0,property:this.property,type:this.type,converter:this.converter,attribute:this.attribute,path:this.path}}}),e.declare("dojox.wire.ml.ColumnWire",i.wire.ml.ChildWire,{column:"",_addWire:function(e,t){this.column?(t.columns||(t.columns={}),t.columns[this.column]=this._getWire(e)):(t.columns||(t.columns=[]),t.columns.push(this._getWire(e)))}}),e.declare("dojox.wire.ml.NodeWire",[i.wire.ml.ChildWire,t._Container],{titleProperty:"",titleAttribute:"",titlePath:"",_addWire:function(e,t){t.nodes||(t.nodes=[]),t.nodes.push(this._getWires(e))},_getWires:function(e){var t={node:this._getWire(e),title:{type:"string",property:this.titleProperty,attribute:this.titleAttribute,path:this.titlePath}},a=[],n=this.getChildren();for(var o in n){var r=n[o];r instanceof i.wire.ml.NodeWire&&a.push(r._getWires(e))}return a.length>0&&(t.children=a),t}}),e.declare("dojox.wire.ml.SegmentWire",i.wire.ml.ChildWire,{_addWire:function(e,t){t.segments||(t.segments=[]),t.segments.push(this._getWire(e)),e.delimiter&&!t.delimiter&&(t.delimiter=e.delimiter)}})});//# sourceMappingURL=Transfer.js.map