//>>built
define("dijit/_base/wai",["dojo/dom-attr","dojo/_base/lang","../main","../hccss"],function(t,e,i){var o={hasWaiRole:function(t,e){var i=this.getWaiRole(t);return e?i.indexOf(e)>-1:i.length>0},getWaiRole:function(i){return e.trim((t.get(i,"role")||"").replace("wairole:",""))},setWaiRole:function(e,i){t.set(e,"role",i)},removeWaiRole:function(i,o){var n=t.get(i,"role");if(n)if(o){var a=e.trim((" "+n+" ").replace(" "+o+" "," "));t.set(i,"role",a)}else i.removeAttribute("role")},hasWaiState:function(t,e){return t.hasAttribute?t.hasAttribute("aria-"+e):!!t.getAttribute("aria-"+e)},getWaiState:function(t,e){return t.getAttribute("aria-"+e)||""},setWaiState:function(t,e,i){t.setAttribute("aria-"+e,i)},removeWaiState:function(t,e){t.removeAttribute("aria-"+e)}};return e.mixin(i,o),i});//# sourceMappingURL=wai.js.map