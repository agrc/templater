//>>built
define("lodash/_createWrapper",["./_baseSetData","./_createBaseWrapper","./_createCurryWrapper","./_createHybridWrapper","./_createPartialWrapper","./_getData","./_mergeData","./_setData","./toInteger"],function(e,t,i,a,n,o,r,s,l){function d(d,b,_,k,x,w,j,M){var I=b&m;if(!I&&"function"!=typeof d)throw new TypeError(u);var C=k?k.length:0;if(C||(b&=~(g|v),k=x=c),j=j===c?j:y(l(j),0),M=M===c?M:l(M),C-=x?x.length:0,b&v){var S=k,A=x;k=x=c}var E=I?c:o(d),T=[d,b,_,k,x,S,A,w,j,M];if(E&&r(T,E),d=T[0],b=T[1],_=T[2],k=T[3],x=T[4],M=T[9]=null==T[9]?I?0:d.length:y(T[9]-C,0),!M&&b&(f|p)&&(b&=~(f|p)),b&&b!=h)N=b==f||b==p?i(d,b,M):b!=g&&b!=(h|g)||x.length?a.apply(c,T):n(d,b,_,k);else var N=t(d,b,_);var F=E?e:s;return F(N,T)}var c,u="Expected a function",h=1,m=2,f=8,p=16,g=32,v=64,y=Math.max;return d});//# sourceMappingURL=_createWrapper.js.map