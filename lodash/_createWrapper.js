//>>built
define("lodash/_createWrapper",["./_baseSetData","./_createBaseWrapper","./_createCurryWrapper","./_createHybridWrapper","./_createPartialWrapper","./_getData","./_mergeData","./_setData","./toInteger"],function(e,t,i,a,n,o,r,s,l){function d(d,k,b,_,x,j,w,M){var I=k&m;if(!I&&"function"!=typeof d)throw new TypeError(u);var C=_?_.length:0;if(C||(k&=~(g|v),_=x=c),w=w===c?w:y(l(w),0),M=M===c?M:l(M),C-=x?x.length:0,k&v){var A=_,S=x;_=x=c}var T=I?c:o(d),E=[d,k,b,_,x,A,S,j,w,M];if(T&&r(E,T),d=E[0],k=E[1],b=E[2],_=E[3],x=E[4],M=E[9]=null==E[9]?I?0:d.length:y(E[9]-C,0),!M&&k&(f|p)&&(k&=~(f|p)),k&&k!=h)z=k==f||k==p?i(d,k,M):k!=g&&k!=(h|g)||x.length?a.apply(c,E):n(d,k,b,_);else var z=t(d,k,b);var N=T?e:s;return N(z,E)}var c,u="Expected a function",h=1,m=2,f=8,p=16,g=32,v=64,y=Math.max;return d});//# sourceMappingURL=_createWrapper.js.map