//>>built
define("dojo/data/util/sorter",["../../_base/lang"],function(e){var t={};return e.setObject("dojo.data.util.sorter",t),t.basicComparator=function(e,t){var i=-1;return null===e&&(e=void 0),null===t&&(t=void 0),e==t?i=0:(e>t||null==e)&&(i=1),i},t.createSortFunction=function(e,i){function r(e,t,i,r){return function(a,n){var o=r.getValue(a,e),d=r.getValue(n,e);return t*i(o,d)}}for(var a,n=[],o=i.comparatorMap,d=t.basicComparator,s=0;s<e.length;s++){a=e[s];var l=a.attribute;if(l){var u=a.descending?-1:1,f=d;o&&("string"!=typeof l&&"toString"in l&&(l=l.toString()),f=o[l]||d),n.push(r(l,u,f,i))}}return function(e,t){for(var i=0;i<n.length;){var r=n[i++](e,t);if(0!==r)return r}return 0}},t});//# sourceMappingURL=sorter.js.map