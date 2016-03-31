//>>built
define("dijit/registry",["dojo/_base/array","dojo/_base/window","./main"],function(t,e,i){var o={},n={},a={length:0,add:function(t){if(n[t.id])throw new Error("Tried to register widget with id=="+t.id+" but that id is already registered");n[t.id]=t,this.length++},remove:function(t){n[t]&&(delete n[t],this.length--)},byId:function(t){return"string"==typeof t?n[t]:t},byNode:function(t){return n[t.getAttribute("widgetId")]},toArray:function(){var t=[];for(var e in n)t.push(n[e]);return t},getUniqueId:function(t){var e;do e=t+"_"+(t in o?++o[t]:o[t]=0);while(n[e]);return"dijit"==i._scopeName?e:i._scopeName+"_"+e},findWidgets:function(t,e){function i(t){for(var a=t.firstChild;a;a=a.nextSibling)if(1==a.nodeType){var s=a.getAttribute("widgetId");if(s){var d=n[s];d&&o.push(d)}else a!==e&&i(a)}}var o=[];return i(t),o},_destroyAll:function(){i._curFocus=null,i._prevFocus=null,i._activeStack=[],t.forEach(a.findWidgets(e.body()),function(t){t._destroyed||(t.destroyRecursive?t.destroyRecursive():t.destroy&&t.destroy())})},getEnclosingWidget:function(t){for(;t;){var e=1==t.nodeType&&t.getAttribute("widgetId");if(e)return n[e];t=t.parentNode}return null},_hash:n};return i.registry=a,a});//# sourceMappingURL=registry.js.map