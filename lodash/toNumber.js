//>>built
define("lodash/toNumber",["./isFunction","./isObject"],function(e,t){function i(i){if(t(i)){var d=e(i.valueOf)?i.valueOf():i;i=t(d)?d+"":d}if("string"!=typeof i)return 0===i?i:+i;i=i.replace(o,"");var h=n.test(i);return h||s.test(i)?l(i.slice(2),h?2:8):r.test(i)?a:+i}var a=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;return i});//# sourceMappingURL=toNumber.js.map