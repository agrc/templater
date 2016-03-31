//>>built
define("dojox/io/xhrPlugins",["dojo/_base/kernel","dojo/_base/xhr","dojo/AdapterRegistry"],function(e,t,a){function i(){return n=dojox.io.xhrPlugins.plainXhr=n||e._defaultXhr||t}e.getObject("io.xhrPlugins",!0,dojox);var r,n;dojox.io.xhrPlugins.register=function(){var t=i();return r||(r=new a,e[e._defaultXhr?"_defaultXhr":"xhr"]=function(e,t,a){return r.match.apply(r,arguments)},r.register("xhr",function(e,t){if(!t.url.match(/^\w*:\/\//))return!0;var a=window.location.href.match(/^.*?\/\/.*?\//)[0];return t.url.substring(0,a.length)==a},t)),r.register.apply(r,arguments)},dojox.io.xhrPlugins.addProxy=function(t){var a=i();dojox.io.xhrPlugins.register("proxy",function(e,t){return!0},function(i,r,n){return r.url=t+encodeURIComponent(r.url),a.call(e,i,r,n)})};var o;return dojox.io.xhrPlugins.addCrossSiteXhr=function(t,a){var r=i();if(void 0===o&&window.XMLHttpRequest)try{var n=new XMLHttpRequest;n.open("GET","http://testing-cross-domain-capability.com",!0),o=!0,e.config.noRequestedWithHeaders=!0}catch(s){o=!1}dojox.io.xhrPlugins.register("cs-xhr",function(e,i){return(o||window.XDomainRequest&&i.sync!==!0&&("GET"==e||"POST"==e||a))&&i.url.substring(0,t.length)==t},o?r:function(){var t=e._xhrObj;e._xhrObj=function(){function e(e,a){return function(){t.readyState=a,t.status=e}}var t=new XDomainRequest;return t.readyState=1,t.setRequestHeader=function(){},t.getResponseHeader=function(e){return"Content-Type"==e?t.contentType:null},t.onload=e(200,4),t.onprogress=e(200,3),t.onerror=e(404,4),t};var r=(a?a(i()):i()).apply(e,arguments);return e._xhrObj=t,r})},dojox.io.xhrPlugins.fullHttpAdapter=function(t,a){return function(i,r,n){var o={},s={};"GET"!=i&&(s["http-method"]=i,r.putData&&a&&(o["http-content"]=r.putData,delete r.putData,n=!1),r.postData&&a&&(o["http-content"]=r.postData,delete r.postData,n=!1),i="POST");for(var l in r.headers){var d=l.match(/^X-/)?l.substring(2).replace(/-/g,"_").toLowerCase():"http-"+l;s[d]=r.headers[l]}return r.query=e.objectToQuery(s),e._ioAddQueryToUrl(r),r.content=e.mixin(r.content||{},o),t.call(e,i,r,n)}},dojox.io.xhrPlugins});//# sourceMappingURL=xhrPlugins.js.map