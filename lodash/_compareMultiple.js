//>>built
define("lodash/_compareMultiple",["./_compareAscending"],function(e){function t(t,i,o){for(var a=-1,n=t.criteria,r=i.criteria,s=n.length,d=o.length;++a<s;){var l=e(n[a],r[a]);if(l){if(a>=d)return l;var h=o[a];return l*("desc"==h?-1:1)}}return t.index-i.index}return t});//# sourceMappingURL=_compareMultiple.js.map