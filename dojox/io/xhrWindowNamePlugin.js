//>>built
define("dojox/io/xhrWindowNamePlugin",["dojo/_base/kernel","dojo/_base/json","dojo/_base/xhr","dojox/io/xhrPlugins","dojox/io/windowName","dojox/io/httpParse","dojox/secure/capability"],function(e,t,i,a,r,o,n){return e.getObject("io.xhrWindowNamePlugin",!0,dojox),dojox.io.xhrWindowNamePlugin=function(t,i,o){a.register("windowName",function(e,a){return!0!==a.sync&&("GET"==e||"POST"==e||i)&&a.url.substring(0,t.length)==t},function(t,a,s){var d=r.send,l=a.load;a.load=void 0;var u=(i?i(d,!0):d)(t,a,s);return u.addCallback(function(t){var i=u.ioArgs;return i.xhr={getResponseHeader:function(t){return e.queryToObject(i.hash.match(/[^#]*$/)[0])[t]}},"json"==i.handleAs?(o||n.validate(t,["Date"],{}),e.fromJson(t)):e._contentHandlers[i.handleAs||"text"]({responseText:t})}),a.load=l,l&&u.addCallback(l),u})},dojox.io.xhrWindowNamePlugin});//# sourceMappingURL=xhrWindowNamePlugin.js.map