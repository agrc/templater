//>>built
define("dojo/dom-attr",["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(e,t,i,n,o,s){function r(e,t){var i=e.getAttributeNode&&e.getAttributeNode(t);return!!i&&i.specified}var a={innerHTML:1,textContent:1,className:1,htmlFor:t("ie"),value:1},d={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};e.has=function(e,t){var i=t.toLowerCase();return a[s.names[i]||t]||r(n.byId(e),d[i]||t)},e.get=function(e,t){e=n.byId(e);var o=t.toLowerCase(),h=s.names[o]||t,l=a[h],c=e[h];if(l&&"undefined"!=typeof c)return c;if("textContent"==h)return s.get(e,h);if("href"!=h&&("boolean"==typeof c||i.isFunction(c)))return c;var u=d[o]||t;return r(e,u)?e.getAttribute(u):null},e.set=function(t,r,h){if(t=n.byId(t),2==arguments.length){for(var l in r)e.set(t,l,r[l]);return t}var c=r.toLowerCase(),u=s.names[c]||r,p=a[u];return"style"==u&&"string"!=typeof h?(o.set(t,h),t):p||"boolean"==typeof h||i.isFunction(h)?s.set(t,r,h):(t.setAttribute(d[c]||r,h),t)},e.remove=function(e,t){n.byId(e).removeAttribute(d[t.toLowerCase()]||t)},e.getNodeProp=function(e,t){e=n.byId(e);var i=t.toLowerCase(),o=s.names[i]||t;if(o in e&&"href"!=o)return e[o];var a=d[i]||t;return r(e,a)?e.getAttribute(a):null}});//# sourceMappingURL=dom-attr.js.map