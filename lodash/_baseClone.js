//>>built
define("lodash/_baseClone",["./_Stack","./_arrayEach","./_assignValue","./_baseAssign","./_baseForOwn","./_cloneBuffer","./_copyArray","./_copySymbols","./_getTag","./_initCloneArray","./_initCloneByTag","./_initCloneObject","./isArray","./isBuffer","./_isHostObject","./isObject"],function(e,t,i,a,n,o,r,s,l,d,c,u,h,m,f,p){function g(b,k,_,x,M,I,T){var A;if(x&&(A=I?x(b,M,I,T):x(b)),A!==v)return A;if(!p(b))return b;var S=h(b);if(S){if(A=d(b),!k)return r(b,A)}else{var E=l(b),N=E==j||E==w;if(m(b))return o(b,k);if(E==C||E==y||N&&!I){if(f(b))return I?b:{};if(A=u(N?{}:b),!k)return A=a(A,b),_?s(b,A):A}else{if(!q[E])return I?b:{};A=c(b,E,k)}}T||(T=new e);var z=T.get(b);return z?z:(T.set(b,A),(S?t:n)(b,function(e,t){i(A,t,g(e,k,_,x,t,b,T))}),_&&!S?s(b,A):A)}var v,y="[object Arguments]",b="[object Array]",k="[object Boolean]",_="[object Date]",x="[object Error]",j="[object Function]",w="[object GeneratorFunction]",M="[object Map]",I="[object Number]",C="[object Object]",T="[object RegExp]",A="[object Set]",S="[object String]",E="[object Symbol]",N="[object WeakMap]",z="[object ArrayBuffer]",P="[object Float32Array]",F="[object Float64Array]",L="[object Int8Array]",D="[object Int16Array]",G="[object Int32Array]",B="[object Uint8Array]",O="[object Uint8ClampedArray]",H="[object Uint16Array]",R="[object Uint32Array]",q={};return q[y]=q[b]=q[z]=q[k]=q[_]=q[P]=q[F]=q[L]=q[D]=q[G]=q[M]=q[I]=q[C]=q[T]=q[A]=q[S]=q[E]=q[B]=q[O]=q[H]=q[R]=!0,q[x]=q[j]=q[N]=!1,g});//# sourceMappingURL=_baseClone.js.map