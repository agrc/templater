//>>built
define("lodash/_baseSet",["./_assignValue","./_baseCastPath","./_isIndex","./_isKey","./isObject"],function(e,t,i,o,a){function n(n,s,d,l){s=o(s,n)?[s+""]:t(s);for(var h=-1,c=s.length,u=c-1,m=n;null!=m&&++h<c;){var f=s[h];if(a(m)){var p=d;if(h!=u){var g=m[f];p=l?l(g,f,m):r,p===r&&(p=null==g?i(s[h+1])?[]:{}:g)}e(m,f,p)}m=m[f]}return n}var r;return n});//# sourceMappingURL=_baseSet.js.map