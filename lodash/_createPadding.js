//>>built
define("lodash/_createPadding",["./repeat","./_stringSize","./_stringToArray","./toInteger"],function(e,t,i,a){function o(o,n,s){n=a(n);var l=t(o);if(!n||l>=n)return"";var d=n-l;s=s===r?" ":s+"";var h=e(s,c(d/t(s)));return u.test(s)?i(h).slice(0,d).join(""):h.slice(0,d)}var r,n="\\ud800-\\udfff",s="\\u0300-\\u036f\\ufe20-\\ufe23",l="\\u20d0-\\u20f0",d="\\ufe0e\\ufe0f",h="\\u200d",u=RegExp("["+h+n+s+l+d+"]"),c=Math.ceil;return o});//# sourceMappingURL=_createPadding.js.map