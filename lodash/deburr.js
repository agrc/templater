//>>built
define("lodash/deburr",["./_deburrLetter","./toString"],function(e,t){function i(i){return(i=t(i))&&i.replace(a,e).replace(d,"")}var a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",s=o+n+r,l="["+s+"]",d=RegExp(l,"g");return i});//# sourceMappingURL=deburr.js.map