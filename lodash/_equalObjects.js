//>>built
define("lodash/_equalObjects",["./_baseHas","./keys"],function(e,t){function i(i,r,o,s,l,d){var u=l&n,c=t(i),h=c.length,m=t(r),f=m.length;if(h!=f&&!u)return!1;for(var g=h;g--;){var p=c[g];if(!(u?p in r:e(r,p)))return!1}var y=d.get(i);if(y)return y==r;var v=!0;d.set(i,r);for(var b=u;++g<h;){p=c[g];var k=i[p],_=r[p];if(s)var x=u?s(_,k,p,r,i,d):s(k,_,p,i,r,d);if(!(x===a?k===_||o(k,_,s,l,d):x)){v=!1;break}b||(b="constructor"==p)}if(v&&!b){var w=i.constructor,j=r.constructor;w!=j&&"constructor"in i&&"constructor"in r&&!("function"==typeof w&&w instanceof w&&"function"==typeof j&&j instanceof j)&&(v=!1)}return d["delete"](i),v}var a,n=2;return i});//# sourceMappingURL=_equalObjects.js.map