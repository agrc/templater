//>>built
define("lodash/toArray",["./_Symbol","./_copyArray","./_getTag","./isArrayLike","./isString","./_iteratorToArray","./_mapToArray","./_setToArray","./_stringToArray","./values"],function(e,t,i,a,o,r,n,s,d,l){function h(e){if(!e)return[];if(a(e))return o(e)?d(e):t(e);if(f&&e[f])return r(e[f]());var h=i(e);return(h==u?n:h==m?s:l)(e)}var c,u="[object Map]",m="[object Set]",f=e?e.iterator:c;return h});//# sourceMappingURL=toArray.js.map