//>>built
define("lodash/_baseIsNative",["./isFunction","./_isMasked","./isObject","./_toSource"],function(e,t,i,a){function o(o){return!(!i(o)||t(o))&&(e(o)?u:r).test(a(o))}var n=/[\\^$.*+?()[\]{}|]/g,r=/^\[object .+?Constructor\]$/,s=Function.prototype,d=Object.prototype,l=s.toString,h=d.hasOwnProperty,u=RegExp("^"+l.call(h).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");return o});//# sourceMappingURL=_baseIsNative.js.map