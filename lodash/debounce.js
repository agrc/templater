//>>built
define("lodash/debounce",["./isObject","./now","./toNumber"],function(e,t,i){function a(a,l,d){function h(e){var t=b,i=_;return b=_=o,j=e,x=a.apply(i,t)}function c(e){return j=e,M=setTimeout(f,l),I?h(e):x}function u(e){var t=e-w,i=e-j,a=l-t;return T?s(a,k-i):a}function m(e){var t=e-w,i=e-j;return w===o||t>=l||t<0||T&&i>=k}function f(){var e=t();if(m(e))return p(e);M=setTimeout(f,u(e))}function p(e){return M=o,C&&b?h(e):(b=_=o,x)}function g(){M!==o&&clearTimeout(M),j=0,b=w=_=M=o}function y(){return M===o?x:p(t())}function v(){var e=t(),i=m(e);if(b=arguments,_=this,w=e,i){if(M===o)return c(w);if(T)return M=setTimeout(f,l),h(w)}return M===o&&(M=setTimeout(f,l)),x}var b,_,k,x,M,w,j=0,I=!1,T=!1,C=!0;if("function"!=typeof a)throw new TypeError(n);return l=i(l)||0,e(d)&&(I=!!d.leading,T="maxWait"in d,k=T?r(i(d.maxWait)||0,l):k,C="trailing"in d?!!d.trailing:C),v.cancel=g,v.flush=y,v}var o,n="Expected a function",r=Math.max,s=Math.min;return a});//# sourceMappingURL=debounce.js.map