//>>built
define("lodash/_getView",[],function(){function e(e,o,n){for(var r=-1,a=n.length;++r<a;){var s=n[r],d=s.size;switch(s.type){case"drop":e+=d;break;case"dropRight":o-=d;break;case"take":o=i(o,e+d);break;case"takeRight":e=t(e,o-d)}}return{start:e,end:o}}var t=Math.max,i=Math.min;return e});//# sourceMappingURL=_getView.js.map