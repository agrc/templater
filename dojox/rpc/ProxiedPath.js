//>>built
define("dojox/rpc/ProxiedPath",["dojo","dojox","dojox/rpc/Service"],function(e,t){t.rpc.envelopeRegistry.register("PROXIED-PATH",function(e){return"PROXIED-PATH"==e},{serialize:function(i,a,o){var r,n=t.rpc.getTarget(i,a);if(e.isArray(o))for(r=0;r<o.length;r++)n+="/"+(null==o[r]?"":o[r]);else for(r in o)n+="/"+r+"/"+o[r];return{data:"",target:(a.proxyUrl||i.proxyUrl)+"?url="+encodeURIComponent(n)}},deserialize:function(e){return e}})});//# sourceMappingURL=ProxiedPath.js.map