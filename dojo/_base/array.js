//>>built
define("dojo/_base/array",["./kernel","../has","./lang"],function(e,t,i){function o(e){return s[e]=new Function("item","index","array",e)}function n(e){var t=!e;return function(i,n,r){var a,l=0,d=i&&i.length||0;if(d&&"string"==typeof i&&(i=i.split("")),"string"==typeof n&&(n=s[n]||o(n)),r){for(;d>l;++l)if(a=!n.call(r,i[l],l,i),e^a)return!a}else for(;d>l;++l)if(a=!n(i[l],l,i),e^a)return!a;return t}}function r(e){var t=1,i=0,o=0;return e||(t=i=o=-1),function(n,r,s,d){if(d&&t>0)return l.lastIndexOf(n,r,s);var h,c=n&&n.length||0,u=e?c+o:i;for(s===a?h=e?i:c+o:0>s?(h=c+s,0>h&&(h=i)):h=s>=c?c+o:s,c&&"string"==typeof n&&(n=n.split(""));h!=u;h+=t)if(n[h]==r)return h;return-1}}var a,s={},l={every:n(!1),some:n(!0),indexOf:r(!0),lastIndexOf:r(!1),forEach:function(e,t,i){var n=0,r=e&&e.length||0;if(r&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||o(t)),i)for(;r>n;++n)t.call(i,e[n],n,e);else for(;r>n;++n)t(e[n],n,e)},map:function(e,t,i,n){var r=0,a=e&&e.length||0,l=new(n||Array)(a);if(a&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||o(t)),i)for(;a>r;++r)l[r]=t.call(i,e[r],r,e);else for(;a>r;++r)l[r]=t(e[r],r,e);return l},filter:function(e,t,i){var n,r=0,a=e&&e.length||0,l=[];if(a&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||o(t)),i)for(;a>r;++r)n=e[r],t.call(i,n,r,e)&&l.push(n);else for(;a>r;++r)n=e[r],t(n,r,e)&&l.push(n);return l},clearCache:function(){s={}}};return i.mixin(e,l),l});//# sourceMappingURL=array.js.map