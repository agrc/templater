//>>built
define("lodash/_baseSet",["./_assignValue","./_castPath","./_isIndex","./isObject","./_toKey"],function(e,t,i,a,o){function n(n,s,l,d){if(!a(n))return n;s=t(s,n);for(var h=-1,c=s.length,u=c-1,m=n;null!=m&&++h<c;){var f=o(s[h]),p=l;if(h!=u){var g=m[f];p=d?d(g,f,m):r,p===r&&(p=a(g)?g:i(s[h+1])?[]:{})}e(m,f,p),m=m[f]}return n}var r;return n});//# sourceMappingURL=_baseSet.js.map