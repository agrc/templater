//>>built
define("lodash/isTypedArray",["./isLength","./isObjectLike"],function(e,t){function i(i){return t(i)&&e(i.length)&&!!I[C.call(i)]}var r="[object Arguments]",o="[object Array]",n="[object Boolean]",a="[object Date]",s="[object Error]",l="[object Function]",d="[object Map]",u="[object Number]",c="[object Object]",h="[object RegExp]",f="[object Set]",m="[object String]",p="[object WeakMap]",g="[object ArrayBuffer]",y="[object Float32Array]",v="[object Float64Array]",b="[object Int8Array]",_="[object Int16Array]",x="[object Int32Array]",j="[object Uint8Array]",w="[object Uint8ClampedArray]",k="[object Uint16Array]",M="[object Uint32Array]",I={};I[y]=I[v]=I[b]=I[_]=I[x]=I[j]=I[w]=I[k]=I[M]=!0,I[r]=I[o]=I[g]=I[n]=I[a]=I[s]=I[l]=I[d]=I[u]=I[c]=I[h]=I[f]=I[m]=I[p]=!1;var S=Object.prototype,C=S.toString;return i});//# sourceMappingURL=isTypedArray.js.map