//>>built
define("lodash/_baseDifference",["./_SetCache","./_arrayIncludes","./_arrayIncludesWith","./_arrayMap","./_baseUnary","./_cacheHas"],function(e,t,i,a,o,r){function n(n,l,d,h){var c=-1,u=t,m=!0,f=n.length,p=[],g=l.length;if(!f)return p;d&&(l=a(l,o(d))),h?(u=i,m=!1):l.length>=s&&(u=r,m=!1,l=new e(l));e:for(;++c<f;){var y=n[c],v=d?d(y):y;if(m&&v===v){for(var b=g;b--;)if(l[b]===v)continue e;p.push(y)}else u(l,v,h)||p.push(y)}return p}var s=200;return n});//# sourceMappingURL=_baseDifference.js.map