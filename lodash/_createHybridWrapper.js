//>>built
define("lodash/_createHybridWrapper",["./_composeArgs","./_composeArgsRight","./_countHolders","./_createCtorWrapper","./_createRecurryWrapper","./_getPlaceholder","./_reorder","./_replaceHolders","./_root"],function(e,t,i,o,r,n,a,s,d){function l(v,y,b,_,x,j,M,w,k,C){function I(){for(var c=arguments.length,u=c,h=Array(c);u--;)h[u]=arguments[u];if(A)var f=n(I),m=i(h,f);if(_&&(h=e(h,_,x,A)),j&&(h=t(h,j,M,A)),c-=m,A&&C>c){var p=s(h,f);return r(v,y,l,I.placeholder,b,h,p,w,k,C-c)}var g=S?b:this,P=N?g[v]:v;return c=h.length,w?h=a(h,w):F&&c>1&&h.reverse(),T&&c>k&&(h.length=k),this&&this!==d&&this instanceof I&&(P=E||o(P)),P.apply(g,h)}var T=y&p,S=y&u,N=y&h,A=y&(f|m),F=y&g,E=N?c:o(v);return I}var c,u=1,h=2,f=8,m=16,p=128,g=512;return l});//# sourceMappingURL=_createHybridWrapper.js.map