//>>built
define("lodash/_baseUniq",["./_SetCache","./_arrayIncludes","./_arrayIncludesWith","./_cacheHas","./_createSet","./_setToArray"],function(e,t,i,a,o,n){function r(r,l,d){var h=-1,u=t,c=r.length,m=!0,f=[],p=f;if(d)m=!1,u=i;else if(c>=s){var g=l?null:o(r);if(g)return n(g);m=!1,u=a,p=new e}else p=l?[]:f;e:for(;++h<c;){var v=r[h],y=l?l(v):v;if(v=d||0!==v?v:0,m&&y===y){for(var b=p.length;b--;)if(p[b]===y)continue e;l&&p.push(y),f.push(v)}else u(p,y,d)||(p!==f&&p.push(y),f.push(v))}return f}var s=200;return r});//# sourceMappingURL=_baseUniq.js.map