//>>built
define("lodash/_baseIsMatch",["./_Stack","./_baseIsEqual"],function(e,t){function i(i,a,s,l){var d=s.length,u=d,c=!l;if(null==i)return!u;for(i=Object(i);d--;){var h=s[d];if(c&&h[2]?h[1]!==i[h[0]]:!(h[0]in i))return!1}for(;++d<u;){h=s[d];var f=h[0],m=i[f],p=h[1];if(c&&h[2]){if(m===o&&!(f in i))return!1}else{var g=new e,v=l?l(m,p,f,i,a,g):o;if(!(v===o?t(p,m,l,r|n,g):v))return!1}}return!0}var o,r=1,n=2;return i});//# sourceMappingURL=_baseIsMatch.js.map