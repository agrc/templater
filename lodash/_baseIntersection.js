//>>built
define("lodash/_baseIntersection",["./_SetCache","./_arrayIncludes","./_arrayIncludesWith","./_arrayMap","./_baseUnary","./_cacheHas"],function(e,t,i,a,o,r){function n(n,d,h){for(var u=h?i:t,c=n[0].length,m=n.length,f=m,p=Array(m),g=1/0,y=[];f--;){var v=n[f];f&&d&&(v=a(v,o(d))),g=l(v.length,g),p[f]=!h&&(d||c>=120&&v.length>=120)?new e(f&&v):s}v=n[0];var b=-1,_=p[0];e:for(;++b<c&&y.length<g;){var x=v[b],w=d?d(x):x;if(!(_?r(_,w):u(y,w,h))){for(f=m;--f;){var M=p[f];if(!(M?r(M,w):u(n[f],w,h)))continue e}_&&_.push(w),y.push(x)}}return y}var s,l=Math.min;return n});//# sourceMappingURL=_baseIntersection.js.map