//>>built
define("lodash/_baseIsEqualDeep",["./_Stack","./_equalArrays","./_equalByTag","./_equalObjects","./_getTag","./isArray","./_isHostObject","./isTypedArray"],function(e,t,i,a,o,r,n,s){function l(l,m,p,g,y,v){var b=r(l),_=r(m),M=c,x=c;b||(M=o(l),M=M==h?u:M),_||(x=o(m),x=x==h?u:x);var w=M==u&&!n(l),k=x==u&&!n(m),j=M==x;if(j&&!w)return v||(v=new e),b||s(l)?t(l,m,p,g,y,v):i(l,m,M,p,g,y,v);if(!(y&d)){var T=w&&f.call(l,"__wrapped__"),I=k&&f.call(m,"__wrapped__");if(T||I)return v||(v=new e),p(T?l.value():l,I?m.value():m,g,y,v)}return j?(v||(v=new e),a(l,m,p,g,y,v)):!1}var d=2,h="[object Arguments]",c="[object Array]",u="[object Object]",m=Object.prototype,f=m.hasOwnProperty;return l});//# sourceMappingURL=_baseIsEqualDeep.js.map