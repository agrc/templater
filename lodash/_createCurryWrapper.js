//>>built
define("lodash/_createCurryWrapper",["./_apply","./_createCtorWrapper","./_createHybridWrapper","./_createRecurryWrapper","./_getPlaceholder","./_replaceHolders","./_root"],function(e,t,i,o,a,r,n){function s(s,d,h){function c(){for(var t=arguments.length,m=Array(t),f=t,p=a(c);f--;)m[f]=arguments[f];var g=3>t&&m[0]!==p&&m[t-1]!==p?[]:r(m,p);if(t-=g.length,h>t)return o(s,d,i,c.placeholder,l,m,g,l,l,h-t);var y=this&&this!==n&&this instanceof c?u:s;return e(y,this,m)}var u=t(s);return c}var l;return s});//# sourceMappingURL=_createCurryWrapper.js.map