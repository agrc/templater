//>>built
define("dojox/data/PersevereStore",["dojo","dojox","require","dojox/data/JsonQueryRestStore","dojox/rpc/Client","dojo/_base/url"],function(e,t,a){t.json.ref.serializeFunctions=!0;var i=e.declare("dojox.data.PersevereStore",t.data.JsonQueryRestStore,{useFullIdInQueries:!0,jsonQueryPagination:!1});return i.getStores=function(i,r){i=i&&(i.match(/\/$/)?i:i+"/")||"/",i.match(/^\w*:\/\//)&&(a("dojox/io/xhrScriptPlugin"),t.io.xhrScriptPlugin(i,"callback",t.io.xhrPlugins.fullHttpAdapter));var o=e.xhr;e.xhr=function(t,a){return(a.headers=a.headers||{})["Server-Methods"]="false",o.apply(e,arguments)};var n=t.rpc.Rest(i,!0);t.rpc._sync=r;var d,s=n("Class/"),l={},u=0;return s.addCallback(function(a){function r(a){a["extends"]&&a["extends"].prototype&&(a.prototype&&a.prototype.isPrototypeOf(a["extends"].prototype)||(r(a["extends"]),t.rpc.Rest._index[a.prototype.__id]=a.prototype=e.mixin(e.delegate(a["extends"].prototype),a.prototype)))}function o(a,i){if(a&&i)for(var r in a){var o=a[r];"client"==o.runAt||i[r]||(i[r]=function(a){return function(){var i=e.rawXhrPost({url:this.__id,postData:t.json.ref.toJson({method:a,id:u++,params:e._toArray(arguments)}),handleAs:"json"});return i.addCallback(function(e){return e.error?new Error(e.error):e.result}),i}}(r))}}t.json.ref.resolveJson(a,{index:t.rpc.Rest._index,idPrefix:"/Class/",assignAbsoluteIds:!0});for(var n in a)if("object"==typeof a[n]){var s=a[n];r(s),o(s.methods,s.prototype=s.prototype||{}),o(s.staticMethods,s),l[a[n].id]=new t.data.PersevereStore({target:new e._Url(i,a[n].id)+"/",schema:s})}return d=l}),e.xhr=o,r?d:s},i.addProxy=function(){a("dojox/io/xhrPlugins"),t.io.xhrPlugins.addProxy("/proxy/")},i});//# sourceMappingURL=PersevereStore.js.map