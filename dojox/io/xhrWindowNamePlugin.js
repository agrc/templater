//>>built
define("dojox/io/xhrWindowNamePlugin",["dojo/_base/kernel","dojo/_base/json","dojo/_base/xhr","dojox/io/xhrPlugins","dojox/io/windowName","dojox/io/httpParse","dojox/secure/capability"],function(e,t,i,a,r,n,o){return e.getObject("io.xhrWindowNamePlugin",!0,dojox),dojox.io.xhrWindowNamePlugin=function(t,i,n){a.register("windowName",function(e,a){return!0!==a.sync&&("GET"==e||"POST"==e||i)&&a.url.substring(0,t.length)==t},function(t,a,s){var l=r.send,d=a.load;a.load=void 0;var u=(i?i(l,!0):l)(t,a,s);return u.addCallback(function(t){var i=u.ioArgs;return i.xhr={getResponseHeader:function(t){return e.queryToObject(i.hash.match(/[^#]*$/)[0])[t]}},"json"==i.handleAs?(n||o.validate(t,["Date"],{}),e.fromJson(t)):e._contentHandlers[i.handleAs||"text"]({responseText:t})}),a.load=d,d&&u.addCallback(d),u})},dojox.io.xhrWindowNamePlugin});//# sourceMappingURL=xhrWindowNamePlugin.js.map