//>>built
define("dojox/lang/oo/mixin",["dojo","dijit","dojox","dojo/require!dojox/lang/oo/Filter,dojox/lang/oo/Decorator"],function(e,t,i){e.provide("dojox.lang.oo.mixin"),e.experimental("dojox.lang.oo.mixin"),e.require("dojox.lang.oo.Filter"),e.require("dojox.lang.oo.Decorator"),function(){var t=i.lang.oo,a=t.Filter,r=t.Decorator,o={},n=function(e){return e},s=function(e,t,i){return t},d=function(e,t,i,a){e[t]=i},l=e._extraNames,h=l.length,c=t.applyDecorator=function(e,t,i,a){if(i instanceof r){var o=i.decorator;return i=c(e,t,i.value,a),o(t,i,a)}return e(t,i,a)};t.__mixin=function(e,t,i,a,r){var n,s,d,u,m,f;for(n in t)d=t[n],n in o&&o[n]===d||(s=a(n,e,t,d),!s||s in e&&s in o&&o[s]===d||(m=e[s],u=c(i,s,d,m),m!==u&&r(e,s,u,m)));if(h)for(f=0;h>f;++f)n=l[f],d=t[n],n in o&&o[n]===d||(s=a(n,e,t,d),!s||s in e&&s in o&&o[s]===d||(m=e[s],u=c(i,s,d,m),m!==u&&r(e,s,u,m)));return e},t.mixin=function(e,i){for(var o,l,h=1,c=arguments.length;c>h;++h)i=arguments[h],i instanceof a?(l=i.filter,i=i.bag):l=n,i instanceof r?(o=i.decorator,i=i.value):o=s,t.__mixin(e,i,o,l,d);return e}}()});//# sourceMappingURL=mixin.js.map