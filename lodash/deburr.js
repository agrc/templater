//>>built
define("lodash/deburr",["./_deburrLetter","./toString"],function(e,t){function i(i){return i=t(i),i&&i.replace(a,e).replace(s,"")}var a=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,o="\\u0300-\\u036f\\ufe20-\\ufe23",n="\\u20d0-\\u20f0",r="["+o+n+"]",s=RegExp(r,"g");return i});//# sourceMappingURL=deburr.js.map