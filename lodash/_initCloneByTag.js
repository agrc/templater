//>>built
define("lodash/_initCloneByTag",["./_cloneArrayBuffer","./_cloneDataView","./_cloneRegExp","./_cloneSymbol","./_cloneTypedArray"],function(e,t,i,a,o){function n(n,M,C){var I=n.constructor;switch(M){case f:return e(n);case r:case s:return new I(+n);case p:return t(n,C);case g:case v:case y:case b:case k:case _:case x:case j:case w:return o(n,C);case l:return new I;case d:case h:return new I(n);case c:return i(n);case u:return new I;case m:return a(n)}}var r="[object Boolean]",s="[object Date]",l="[object Map]",d="[object Number]",c="[object RegExp]",u="[object Set]",h="[object String]",m="[object Symbol]",f="[object ArrayBuffer]",p="[object DataView]",g="[object Float32Array]",v="[object Float64Array]",y="[object Int8Array]",b="[object Int16Array]",k="[object Int32Array]",_="[object Uint8Array]",x="[object Uint8ClampedArray]",j="[object Uint16Array]",w="[object Uint32Array]";return n});//# sourceMappingURL=_initCloneByTag.js.map