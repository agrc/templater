//>>built
define("lodash/defaults",["./_baseRest","./eq","./_isIterateeCall","./keysIn"],function(e,t,i,a){var r,n=Object.prototype,o=n.hasOwnProperty;return e(function(e,s){e=Object(e);var l=-1,d=s.length,h=d>2?s[2]:r;for(h&&i(s[0],s[1],h)&&(d=1);++l<d;)for(var u=s[l],c=a(u),m=-1,f=c.length;++m<f;){var p=c[m],g=e[p];(g===r||t(g,n[p])&&!o.call(e,p))&&(e[p]=u[p])}return e})});//# sourceMappingURL=defaults.js.map