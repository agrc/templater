//>>built
define("lodash/_createHybrid",["./_composeArgs","./_composeArgsRight","./_countHolders","./_createCtor","./_createRecurry","./_getHolder","./_reorder","./_replaceHolders","./_root"],function(e,t,i,a,r,o,n,s,l){function d(y,v,b,_,x,k,w,M,j,T){function C(){for(var h=arguments.length,c=Array(h),u=h;u--;)c[u]=arguments[u];if(A)var m=o(C),f=i(c,m);if(_&&(c=e(c,_,x,A)),k&&(c=t(c,k,w,A)),h-=f,A&&h<T){var p=s(c,m);return r(y,v,d,C.placeholder,b,c,p,M,j,T-h)}var g=S?b:this,N=F?g[y]:y;return h=c.length,M?c=n(c,M):E&&h>1&&c.reverse(),I&&j<h&&(c.length=j),this&&this!==l&&this instanceof C&&(N=P||a(N)),N.apply(g,c)}var I=v&p,S=v&c,F=v&u,A=v&(m|f),E=v&g,P=F?h:a(y);return C}var h,c=1,u=2,m=8,f=16,p=128,g=512;return d});//# sourceMappingURL=_createHybrid.js.map