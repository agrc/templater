//>>built
define("dijit/_base/manager",["dojo/_base/array","dojo/_base/config","dojo/_base/lang","../registry","../main"],function(t,e,i,o,s){var n={};return t.forEach(["byId","getUniqueId","findWidgets","_destroyAll","byNode","getEnclosingWidget"],function(t){n[t]=o[t]}),i.mixin(n,{defaultDuration:e.defaultDuration||200}),i.mixin(s,n),s});//# sourceMappingURL=manager.js.map