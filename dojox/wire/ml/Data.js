//>>built
define("dojox/wire/ml/Data",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_Container,dojox/wire/ml/util"],function(e,t,i){e.provide("dojox.wire.ml.Data"),e.require("dijit._Widget"),e.require("dijit._Container"),e.require("dojox.wire.ml.util"),e.declare("dojox.wire.ml.Data",[t._Widget,t._Container],{startup:function(){this._initializeProperties()},_initializeProperties:function(e){this._properties&&!e||(this._properties={});var t=this.getChildren();for(var o in t){var a=t[o];a instanceof i.wire.ml.DataProperty&&a.name&&this.setPropertyValue(a.name,a.getValue())}},getPropertyValue:function(e){return this._properties[e]},setPropertyValue:function(e,t){this._properties[e]=t}}),e.declare("dojox.wire.ml.DataProperty",[t._Widget,t._Container],{name:"",type:"",value:"",_getValueAttr:function(){return this.getValue()},getValue:function(){var e=this.value;if(this.type)if("number"==this.type)e=parseInt(e);else if("boolean"==this.type)e="true"==e;else if("array"==this.type){e=[];var t=this.getChildren();for(var o in t){var a=t[o];a instanceof i.wire.ml.DataProperty&&e.push(a.getValue())}}else if("object"==this.type){e={};var t=this.getChildren();for(var o in t){var a=t[o];a instanceof i.wire.ml.DataProperty&&a.name&&(e[a.name]=a.getValue())}}else if("element"==this.type){e=new i.wire.ml.XmlElement(e);var t=this.getChildren();for(var o in t){var a=t[o];a instanceof i.wire.ml.DataProperty&&a.name&&e.setPropertyValue(a.name,a.getValue())}}return e}})});//# sourceMappingURL=Data.js.map