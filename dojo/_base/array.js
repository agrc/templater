//>>built
define("dojo/_base/array",["./kernel","../has","./lang"],function(e,t,i){function o(e){return a[e]=new Function("item","index","array",e)}function n(e){var t=!e;return function(i,n,r){var s,l=0,d=i&&i.length||0;if(d&&"string"==typeof i&&(i=i.split("")),"string"==typeof n&&(n=a[n]||o(n)),r){for(;d>l;++l)if(s=!n.call(r,i[l],l,i),e^s)return!s}else for(;d>l;++l)if(s=!n(i[l],l,i),e^s)return!s;return t}}function r(e){var t=1,i=0,o=0;return e||(t=i=o=-1),function(n,r,a,d){if(d&&t>0)return l.lastIndexOf(n,r,a);var h,u=n&&n.length||0,c=e?u+o:i;for(a===s?h=e?i:u+o:0>a?(h=u+a,0>h&&(h=i)):h=a>=u?u+o:a,u&&"string"==typeof n&&(n=n.split(""));h!=c;h+=t)if(n[h]==r)return h;return-1}}var s,a={},l={every:n(!1),some:n(!0),indexOf:r(!0),lastIndexOf:r(!1),forEach:function(e,t,i){var n=0,r=e&&e.length||0;if(r&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=a[t]||o(t)),i)for(;r>n;++n)t.call(i,e[n],n,e);else for(;r>n;++n)t(e[n],n,e)},map:function(e,t,i,n){var r=0,s=e&&e.length||0,l=new(n||Array)(s);if(s&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=a[t]||o(t)),i)for(;s>r;++r)l[r]=t.call(i,e[r],r,e);else for(;s>r;++r)l[r]=t(e[r],r,e);return l},filter:function(e,t,i){var n,r=0,s=e&&e.length||0,l=[];if(s&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=a[t]||o(t)),i)for(;s>r;++r)n=e[r],t.call(i,n,r,e)&&l.push(n);else for(;s>r;++r)n=e[r],t(n,r,e)&&l.push(n);return l},clearCache:function(){a={}}};return i.mixin(e,l),l});//# sourceMappingURL=array.js.map