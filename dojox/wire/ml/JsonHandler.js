//>>built
define("dojox/wire/ml/JsonHandler",["dojo","dijit","dojox","dojo/require!dojox/wire/ml/RestHandler,dojox/wire/_base,dojox/wire/ml/util"],function(e,t,i){e.provide("dojox.wire.ml.JsonHandler"),e.require("dojox.wire.ml.RestHandler"),e.require("dojox.wire._base"),e.require("dojox.wire.ml.util"),e.declare("dojox.wire.ml.JsonHandler",i.wire.ml.RestHandler,{contentType:"text/json",handleAs:"json",headers:{Accept:"*/json"},_getContent:function(t,i){var r=null;if("POST"==t||"PUT"==t){var o=i?i[0]:void 0;o&&(r=e.isString(o)?o:e.toJson(o))}return r}})});//# sourceMappingURL=JsonHandler.js.map