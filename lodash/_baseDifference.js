//>>built
define("lodash/_baseDifference",["./_SetCache","./_arrayIncludes","./_arrayIncludesWith","./_arrayMap","./_baseUnary","./_cacheHas"],function(e,t,i,a,r,n){function o(o,l,d,u){var c=-1,h=t,m=!0,f=o.length,g=[],p=l.length;if(!f)return g;d&&(l=a(l,r(d))),u?(h=i,m=!1):l.length>=s&&(h=n,m=!1,l=new e(l));e:for(;++c<f;){var y=o[c],v=d?d(y):y;if(m&&v===v){for(var b=p;b--;)if(l[b]===v)continue e;g.push(y)}else h(l,v,u)||g.push(y)}return g}var s=200;return o});//# sourceMappingURL=_baseDifference.js.map