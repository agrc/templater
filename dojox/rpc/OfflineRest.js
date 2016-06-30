//>>built
define("dojox/rpc/OfflineRest",["dojo","dojox","dojox/data/ClientFilter","dojox/rpc/Rest","dojox/storage"],function(e,t){function i(e){return e.replace(/[^0-9A-Za-z_]/g,"_")}function a(e,a){d&&!m&&(a||e&&e.__id)&&t.storage.put(i(a||e.__id),"object"==typeof e?t.json.ref.toJson(e):e,function(){},c)}function n(e){return e instanceof Error&&(503==e.status||e.status>12e3||!e.status)}function o(){if(d){var e=t.storage.get("dirty",c);if(e)for(var i in e)l(i,e)}}function r(){f.sendChanges(),f.downloadChanges()}function s(e,a,n,o,r){"delete"==e?t.storage.remove(i(a),c):t.storage.put(i(n),o,function(){},c);var s=r&&r._store;s&&(s.updateResultSet(s._localBaseResults,s._localBaseFetch),t.storage.put(i(r._getRequest(s._localBaseFetch.query).url),t.json.ref.toJson(s._localBaseResults),function(){},c))}function l(e,i){var a=i[e],o=t.rpc.JsonRest.getServiceAndId(a.id),r=y(a.method,o.service,o.id,a.content);return i[e]=a,t.storage.put("dirty",i,function(){},c),r.addBoth(function(i){if(n(i))return null;var a=t.storage.get("dirty",c)||{};return delete a[e],t.storage.put("dirty",a,function(){},c),i}),r}var d,h=t.rpc.Rest,c="dojox_rpc_OfflineRest",u=h._index;t.storage.manager.addOnLoad(function(){d=t.storage.manager.available;for(var e in u)a(u[e],e)});var m,f,g=setInterval(r,15e3);e.connect(document,"ononline",r),f=t.rpc.OfflineRest={turnOffAutoSync:function(){clearInterval(g)},sync:r,sendChanges:o,downloadChanges:function(){},addStore:function(e,t){f.stores.push(e),e.fetch({queryOptions:{cache:!0},query:t,onComplete:function(t,i){e._localBaseResults=t,e._localBaseFetch=i}})}},f.stores=[];var p=h._get;h._get=function(r,s){try{if(o(),window.navigator&&navigator.onLine===!1)throw new Error;var l=p(r,s)}catch(h){l=new e.Deferred,l.errback(h)}var u=t.rpc._sync;return l.addCallback(function(e){return a(e,r._getRequest(s).url),e}),l.addErrback(function(a){if(d){if(n(a)){var o={},h=function(a,n){if(o[a])return n;var r=e.fromJson(t.storage.get(i(a),c))||n;o[a]=r;for(var s in r){var l=r[s];a=l&&l.$ref,a&&(a.substring&&"cid:"==a.substring(0,4)&&(a=a.substring(4)),r[s]=h(a,l))}if(r instanceof Array)for(s=0;s<r.length;s++)void 0===r[s]&&r.splice(s--,1);return r};m=!0;var f=h(r._getRequest(s).url);return f?(m=!1,f):a}return a}return u?new Error("Storage manager not loaded, can not continue"):(l=new e.Deferred,l.addCallback(arguments.callee),t.storage.manager.addOnLoad(function(){l.callback()}),l)}),l},e.addOnLoad(function(){e.connect(t.data,"restListener",function(i){var a=i.channel,n=i.event.toLowerCase(),o=t.rpc.JsonRest&&t.rpc.JsonRest.getServiceAndId(a).service;s(n,a,"post"==n?a+i.result.id:a,e.toJson(i.result),o)})});var y=h._change;return h._change=function(e,i,a,n){if(!d)return y.apply(this,arguments);var o=i._getRequest(a).url;s(e,o,t.rpc.JsonRest._contentId,n,i);var r=t.storage.get("dirty",c)||{};if("put"==e||"delete"==e)var h=o;else{h=0;for(var u in r)isNaN(parseInt(u))||(h=u);h++}return r[h]={method:e,id:o,content:n},l(h,r)},e.connect(u,"onLoad",a),e.connect(u,"onUpdate",a),f});//# sourceMappingURL=OfflineRest.js.map