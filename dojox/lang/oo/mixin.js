//>>built
define("dojox/lang/oo/mixin",["dojo","dijit","dojox","dojo/require!dojox/lang/oo/Filter,dojox/lang/oo/Decorator"],function(e,t,i){e.provide("dojox.lang.oo.mixin"),e.experimental("dojox.lang.oo.mixin"),e.require("dojox.lang.oo.Filter"),e.require("dojox.lang.oo.Decorator"),function(){var t=i.lang.oo,a=t.Filter,r=t.Decorator,n={},o=function(e){return e},s=function(e,t,i){return t},l=function(e,t,i,a){e[t]=i},d=e._extraNames,u=d.length,c=t.applyDecorator=function(e,t,i,a){if(i instanceof r){var n=i.decorator;return i=c(e,t,i.value,a),n(t,i,a)}return e(t,i,a)};t.__mixin=function(e,t,i,a,r){var o,s,l,m,h,f;for(o in t)l=t[o],o in n&&n[o]===l||(s=a(o,e,t,l),!s||s in e&&s in n&&n[s]===l||(h=e[s],m=c(i,s,l,h),h!==m&&r(e,s,m,h)));if(u)for(f=0;u>f;++f)o=d[f],l=t[o],o in n&&n[o]===l||(s=a(o,e,t,l),!s||s in e&&s in n&&n[s]===l||(h=e[s],m=c(i,s,l,h),h!==m&&r(e,s,m,h)));return e},t.mixin=function(e,i){for(var n,d,u=1,c=arguments.length;c>u;++u)i=arguments[u],i instanceof a?(d=i.filter,i=i.bag):d=o,i instanceof r?(n=i.decorator,i=i.value):n=s,t.__mixin(e,i,n,d,l);return e}}()});//# sourceMappingURL=mixin.js.map