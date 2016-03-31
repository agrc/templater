//>>built
define("dojox/rpc/OfflineRest",["dojo","dojox","dojox/data/ClientFilter","dojox/rpc/Rest","dojox/storage"],function(e,t){function i(e){return e.replace(/[^0-9A-Za-z_]/g,"_")}function a(e,a){l&&!m&&(a||e&&e.__id)&&t.storage.put(i(a||e.__id),"object"==typeof e?t.json.ref.toJson(e):e,function(){},u)}function o(e){return e instanceof Error&&(503==e.status||e.status>12e3||!e.status)}function n(){if(l){var e=t.storage.get("dirty",u);if(e)for(var i in e)d(i,e)}}function r(){f.sendChanges(),f.downloadChanges()}function s(e,a,o,n,r){"delete"==e?t.storage.remove(i(a),u):t.storage.put(i(o),n,function(){},u);var s=r&&r._store;s&&(s.updateResultSet(s._localBaseResults,s._localBaseFetch),t.storage.put(i(r._getRequest(s._localBaseFetch.query).url),t.json.ref.toJson(s._localBaseResults),function(){},u))}function d(e,i){var a=i[e],n=t.rpc.JsonRest.getServiceAndId(a.id),r=v(a.method,n.service,n.id,a.content);return i[e]=a,t.storage.put("dirty",i,function(){},u),r.addBoth(function(i){if(o(i))return null;var a=t.storage.get("dirty",u)||{};return delete a[e],t.storage.put("dirty",a,function(){},u),i}),r}var l,h=t.rpc.Rest,u="dojox_rpc_OfflineRest",c=h._index;t.storage.manager.addOnLoad(function(){l=t.storage.manager.available;for(var e in c)a(c[e],e)});var m,f,p=setInterval(r,15e3);e.connect(document,"ononline",r),f=t.rpc.OfflineRest={turnOffAutoSync:function(){clearInterval(p)},sync:r,sendChanges:n,downloadChanges:function(){},addStore:function(e,t){f.stores.push(e),e.fetch({queryOptions:{cache:!0},query:t,onComplete:function(t,i){e._localBaseResults=t,e._localBaseFetch=i}})}},f.stores=[];var g=h._get;h._get=function(r,s){try{if(n(),window.navigator&&navigator.onLine===!1)throw new Error;var d=g(r,s)}catch(h){d=new e.Deferred,d.errback(h)}var c=t.rpc._sync;return d.addCallback(function(e){return a(e,r._getRequest(s).url),e}),d.addErrback(function(a){if(l){if(o(a)){var n={},h=function(a,o){if(n[a])return o;var r=e.fromJson(t.storage.get(i(a),u))||o;n[a]=r;for(var s in r){var d=r[s];a=d&&d.$ref,a&&(a.substring&&"cid:"==a.substring(0,4)&&(a=a.substring(4)),r[s]=h(a,d))}if(r instanceof Array)for(s=0;s<r.length;s++)void 0===r[s]&&r.splice(s--,1);return r};m=!0;var f=h(r._getRequest(s).url);return f?(m=!1,f):a}return a}return c?new Error("Storage manager not loaded, can not continue"):(d=new e.Deferred,d.addCallback(arguments.callee),t.storage.manager.addOnLoad(function(){d.callback()}),d)}),d},e.addOnLoad(function(){e.connect(t.data,"restListener",function(i){var a=i.channel,o=i.event.toLowerCase(),n=t.rpc.JsonRest&&t.rpc.JsonRest.getServiceAndId(a).service;s(o,a,"post"==o?a+i.result.id:a,e.toJson(i.result),n)})});var v=h._change;return h._change=function(e,i,a,o){if(!l)return v.apply(this,arguments);var n=i._getRequest(a).url;s(e,n,t.rpc.JsonRest._contentId,o,i);var r=t.storage.get("dirty",u)||{};if("put"==e||"delete"==e)var h=n;else{h=0;for(var c in r)isNaN(parseInt(c))||(h=c);h++}return r[h]={method:e,id:n,content:o},d(h,r)},e.connect(c,"onLoad",a),e.connect(c,"onUpdate",a),f});//# sourceMappingURL=OfflineRest.js.map