//>>built
define("lodash/_baseIsMatch",["./_Stack","./_baseIsEqual"],function(e,t){function i(i,r,s,l){var d=s.length,c=d,h=!l;if(null==i)return!c;for(i=Object(i);d--;){var u=s[d];if(h&&u[2]?u[1]!==i[u[0]]:!(u[0]in i))return!1}for(;++d<c;){u=s[d];var m=u[0],f=i[m],g=u[1];if(h&&u[2]){if(f===a&&!(m in i))return!1}else{var p=new e;if(l)var y=l(f,g,m,i,r,p);if(!(y===a?t(g,f,o|n,l,p):y))return!1}}return!0}var a,o=1,n=2;return i});//# sourceMappingURL=_baseIsMatch.js.map