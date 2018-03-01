//>>built
define("dojox/rpc/Service",["dojo","dojox","dojo/AdapterRegistry","dojo/_base/url"],function(e,t){return e.declare("dojox.rpc.Service",null,{constructor:function(t,i){function a(t){t._baseUrl=new e._Url(e.isBrowser?location.href:e.config.baseUrl,r||".")+"",n._smd=t;for(var i in n._smd.services){for(var a=i.split("."),o=n,s=0;s<a.length-1;s++)o=o[a[s]]||(o[a[s]]={});o[a[a.length-1]]=n._generateService(i,n._smd.services[i])}}var r,n=this;if(t)if(e.isString(t)||t instanceof e._Url){r=t instanceof e._Url?t+"":t;var o=e._getText(r);if(!o)throw new Error("Unable to load SMD from "+t);a(e.fromJson(o))}else a(t);this._options=i||{},this._requestId=0},_generateService:function(i,a){if(this[i])throw new Error("WARNING: "+i+" already exists for service. Unable to generate function");a.name=i;var r=e.hitch(this,"_executeMethod",a),n=t.rpc.transportRegistry.match(a.transport||this._smd.transport);n.getExecutor&&(r=n.getExecutor(r,a,this));var o=a.returns||(a._schema={}),s="/"+i+"/";return o._service=r,r.servicePath=s,r._schema=o,r.id=t.rpc.Service._nextId++,r},_getRequest:function(i,a){var r,n=this._smd,o=t.rpc.envelopeRegistry.match(i.envelope||n.envelope||"NONE"),s=(i.parameters||[]).concat(n.parameters||[]);if(o.namedParams){if(1==a.length&&e.isObject(a[0]))a=a[0];else{var l={};for(r=0;r<i.parameters.length;r++)void 0===a[r]&&i.parameters[r].optional||(l[i.parameters[r].name]=a[r]);a=l}if(i.strictParameters||n.strictParameters)for(r in a){for(var d=!1,h=0;h<s.length;h++)s[h].name==r&&(d=!0);d||delete a[r]}for(r=0;r<s.length;r++){var u=s[r];if(!u.optional&&u.name&&!a[u.name])if(u.default)a[u.name]=u.default;else if(!(u.name in a))throw new Error("Required parameter "+u.name+" was omitted")}}else s&&s[0]&&s[0].name&&1==a.length&&e.isObject(a[0])&&(a=!1===o.namedParams?t.rpc.toOrdered(s,a):a[0]);e.isObject(this._options)&&(a=e.mixin(a,this._options));var c=i._schema||i.returns,m=o.serialize.apply(this,[n,i,a]);m._envDef=o;var f=i.contentType||n.contentType||m.contentType;return e.mixin(m,{sync:this._options.sync||t.rpc._sync,contentType:f,headers:i.headers||n.headers||m.headers||{},target:m.target||t.rpc.getTarget(n,i),transport:i.transport||n.transport||m.transport,envelope:i.envelope||n.envelope||m.envelope,timeout:i.timeout||n.timeout,callbackParamName:i.callbackParamName||n.callbackParamName,rpcObjectParamName:i.rpcObjectParamName||n.rpcObjectParamName,schema:c,handleAs:m.handleAs||"auto",preventCache:i.preventCache||n.preventCache,frameDoc:this._options.frameDoc||void 0})},_executeMethod:function(e){var i,a=[];for(i=1;i<arguments.length;i++)a.push(arguments[i]);var r=this._getRequest(e,a),n=t.rpc.transportRegistry.match(r.transport).fire(r);return n.addBoth(function(e){return r._envDef.deserialize.call(this,e)}),n}}),t.rpc.getTarget=function(t,i){var a=t._baseUrl;return t.target&&(a=new e._Url(a,t.target)+""),i.target&&(a=new e._Url(a,i.target)+""),a},t.rpc.toOrdered=function(t,i){if(e.isArray(i))return i;for(var a=[],r=0;r<t.length;r++)a.push(i[t[r].name]);return a},t.rpc.transportRegistry=new e.AdapterRegistry(!0),t.rpc.envelopeRegistry=new e.AdapterRegistry(!0),t.rpc.envelopeRegistry.register("URL",function(e){return"URL"==e},{serialize:function(t,i,a){return{data:e.objectToQuery(a),transport:"POST"}},deserialize:function(e){return e},namedParams:!0}),t.rpc.envelopeRegistry.register("JSON",function(e){return"JSON"==e},{serialize:function(t,i,a){return{data:e.toJson(a),handleAs:"json",contentType:"application/json"}},deserialize:function(e){return e}}),t.rpc.envelopeRegistry.register("PATH",function(e){return"PATH"==e},{serialize:function(i,a,r){var n,o=t.rpc.getTarget(i,a);if(e.isArray(r))for(n=0;n<r.length;n++)o+="/"+r[n];else for(n in r)o+="/"+n+"/"+r[n];return{data:"",target:o}},deserialize:function(e){return e}}),t.rpc.transportRegistry.register("POST",function(e){return"POST"==e},{fire:function(t){return t.url=t.target,t.postData=t.data,e.rawXhrPost(t)}}),t.rpc.transportRegistry.register("GET",function(e){return"GET"==e},{fire:function(t){return t.url=t.target+(t.data?"?"+(t.rpcObjectParamName?t.rpcObjectParamName+"=":"")+t.data:""),e.xhrGet(t)}}),t.rpc.transportRegistry.register("JSONP",function(e){return"JSONP"==e},{fire:function(t){return t.url=t.target+(-1==t.target.indexOf("?")?"?":"&")+(t.rpcObjectParamName?t.rpcObjectParamName+"=":"")+t.data,t.callbackParamName=t.callbackParamName||"callback",e.io.script.get(t)}}),t.rpc.Service._nextId=1,e._contentHandlers.auto=function(t){var i=e._contentHandlers,a=t.getResponseHeader("Content-Type");return a?a.match(/\/.*json/)?i.json(t):a.match(/\/javascript/)?i.javascript(t):a.match(/\/xml/)?i.xml(t):i.text(t):i.text(t)},t.rpc.Service});//# sourceMappingURL=Service.js.map