//>>built
define("dojo/_base/unload",["./kernel","./lang","../on"],function(e,t,i){var o=window,n={addOnWindowUnload:function(n,r){e.windowUnloaded||i(o,"unload",e.windowUnloaded=function(){}),i(o,"unload",t.hitch(n,r))},addOnUnload:function(e,n){i(o,"beforeunload",t.hitch(e,n))}};return e.addOnWindowUnload=n.addOnWindowUnload,e.addOnUnload=n.addOnUnload,n});//# sourceMappingURL=unload.js.map