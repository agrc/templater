//>>built
define("dojox/gfx/registry",["dojo/has","./shape"],function(e,t){e.add("gfxRegistry",1);var i={},r={},a={};return i.register=t.register=function(e){var t=e.declaredClass.split(".").pop(),i=t in r?++r[t]:r[t]=0,o=t+i;return a[o]=e,o},i.byId=t.byId=function(e){return a[e]},i.dispose=t.dispose=function(e,t){if(t&&e.children)for(var r=0;r<e.children.length;++r)i.dispose(e.children[r],!0);var o=e.getUID();a[o]=null,delete a[o]},i});//# sourceMappingURL=registry.js.map