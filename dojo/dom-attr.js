//>>built
define("dojo/dom-attr",["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(t,e,i,o,n,r){function s(t,e){var i=t.getAttributeNode&&t.getAttributeNode(e);return!!i&&i.specified}var a={innerHTML:1,textContent:1,className:1,htmlFor:e("ie"),value:1},d={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};t.has=function(t,e){var i=e.toLowerCase();return a[r.names[i]||e]||s(o.byId(t),d[i]||e)},t.get=function(t,e){t=o.byId(t);var n=e.toLowerCase(),l=r.names[n]||e,h=a[l],c=t[l];if(h&&"undefined"!=typeof c)return c;if("textContent"==l)return r.get(t,l);if("href"!=l&&("boolean"==typeof c||i.isFunction(c)))return c;var u=d[n]||e;return s(t,u)?t.getAttribute(u):null},t.set=function(e,s,l){if(e=o.byId(e),2==arguments.length){for(var h in s)t.set(e,h,s[h]);return e}var c=s.toLowerCase(),u=r.names[c]||s,f=a[u];return"style"==u&&"string"!=typeof l?(n.set(e,l),e):f||"boolean"==typeof l||i.isFunction(l)?r.set(e,s,l):(e.setAttribute(d[c]||s,l),e)},t.remove=function(t,e){o.byId(t).removeAttribute(d[e.toLowerCase()]||e)},t.getNodeProp=function(t,e){t=o.byId(t);var i=e.toLowerCase(),n=r.names[i]||e;if(n in t&&"href"!=n)return t[n];var a=d[i]||e;return s(t,a)?t.getAttribute(a):null}});//# sourceMappingURL=dom-attr.js.map