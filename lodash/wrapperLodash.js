//>>built
define("lodash/wrapperLodash",["./_LazyWrapper","./_LodashWrapper","./_baseLodash","./isArray","./isObjectLike","./_wrapperClone"],function(e,t,i,a,r,n){function o(i){if(r(i)&&!a(i)&&!(i instanceof e)){if(i instanceof t)return i;if(l.call(i,"__wrapped__"))return n(i)}return new t(i)}var s=Object.prototype,l=s.hasOwnProperty;return o.prototype=i.prototype,o.prototype.constructor=o,o});//# sourceMappingURL=wrapperLodash.js.map