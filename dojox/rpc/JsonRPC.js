//>>built
define("dojox/rpc/JsonRPC",["dojo","dojox","dojox/rpc/Service","dojo/errors/RequestError"],function(e,t,i,r){function n(t){return{serialize:function(i,r,n,o){var a={id:this._requestId++,method:r.name,params:n};return t&&(a.jsonrpc=t),{data:e.toJson(a),handleAs:"json",contentType:"application/json",transport:"POST"}},deserialize:function(t){if(("Error"==t.name||t instanceof r)&&(t=e.fromJson(t.responseText)),t.error){var i=new Error(t.error.message||t.error);return i._rpcErrorObject=t.error,i}return t.result}}}t.rpc.envelopeRegistry.register("JSON-RPC-1.0",function(e){return"JSON-RPC-1.0"==e},e.mixin({namedParams:!1},n())),t.rpc.envelopeRegistry.register("JSON-RPC-2.0",function(e){return"JSON-RPC-2.0"==e},e.mixin({namedParams:!0},n("2.0")))});//# sourceMappingURL=JsonRPC.js.map