//>>built
define("dojox/wire/ml/Service",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dojox/xml/parser,dojox/wire/_base,dojox/wire/ml/util"],function(e,t,i){e.provide("dojox.wire.ml.Service"),e.require("dijit._Widget"),e.require("dojox.xml.parser"),e.require("dojox.wire._base"),e.require("dojox.wire.ml.util"),e.declare("dojox.wire.ml.Service",t._Widget,{url:"",serviceUrl:"",serviceType:"",handlerClass:"",preventCache:!0,postCreate:function(){this.handler=this._createHandler()},_handlerClasses:{TEXT:"dojox.wire.ml.RestHandler",XML:"dojox.wire.ml.XmlHandler",JSON:"dojox.wire.ml.JsonHandler","JSON-RPC":"dojo.rpc.JsonService"},_createHandler:function(){if(this.url){var t=this;e.xhrGet({url:this.url,handleAs:"json",sync:!0}).addCallback(function(e){t.smd=e}),this.smd&&!this.serviceUrl&&(this.serviceUrl=this.smd.serviceUrl||this.smd.serviceURL)}var a=void 0;return this.handlerClass?a=i.wire._getClass(this.handlerClass):this.serviceType?(a=this._handlerClasses[this.serviceType])&&e.isString(a)&&(a=i.wire._getClass(a),this._handlerClasses[this.serviceType]=a):this.smd&&this.smd.serviceType&&(a=this._handlerClasses[this.smd.serviceType])&&e.isString(a)&&(a=i.wire._getClass(a),this._handlerClasses[this.smd.serviceType]=a),a?new a:null},callMethod:function(t,i){var a=new e.Deferred;return this.handler.bind(t,i,a,this.serviceUrl),a}})});//# sourceMappingURL=Service.js.map