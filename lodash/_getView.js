//>>built
define("lodash/_getView",[],function(){function e(e,a,o){for(var n=-1,r=o.length;++n<r;){var s=o[n],d=s.size;switch(s.type){case"drop":e+=d;break;case"dropRight":a-=d;break;case"take":a=i(a,e+d);break;case"takeRight":e=t(e,a-d)}}return{start:e,end:a}}var t=Math.max,i=Math.min;return e});//# sourceMappingURL=_getView.js.map