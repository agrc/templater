//>>built
define("dojox/rpc/ProxiedPath",["dojo","dojox","dojox/rpc/Service"],function(e,t){t.rpc.envelopeRegistry.register("PROXIED-PATH",function(e){return"PROXIED-PATH"==e},{serialize:function(i,o,a){var r,n=t.rpc.getTarget(i,o);if(e.isArray(a))for(r=0;r<a.length;r++)n+="/"+(null==a[r]?"":a[r]);else for(r in a)n+="/"+r+"/"+a[r];return{data:"",target:(o.proxyUrl||i.proxyUrl)+"?url="+encodeURIComponent(n)}},deserialize:function(e){return e}})});//# sourceMappingURL=ProxiedPath.js.map