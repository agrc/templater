//>>built
define("lodash/_createFlow",["./_LodashWrapper","./_baseFlatten","./_getData","./_getFuncName","./isArray","./_isLaziable","./rest"],function(e,t,i,a,o,r,n){function s(s){return n(function(n){n=t(n,1);var p=n.length,g=p,y=e.prototype.thru;for(s&&n.reverse();g--;){var v=n[g];if("function"!=typeof v)throw new TypeError(h);if(y&&!b&&"wrapper"==a(v))var b=new e([],!0)}for(g=b?g:p;++g<p;){v=n[g];var _=a(v),M="wrapper"==_?i(v):l;b=M&&r(M[0])&&M[1]==(m|c|u|f)&&!M[4].length&&1==M[9]?b[a(M[0])].apply(b,M[3]):1==v.length&&r(v)?b[_]():b.thru(v)}return function(){var e=arguments,t=e[0];if(b&&1==e.length&&o(t)&&t.length>=d)return b.plant(t).value();for(var i=0,a=p?n[i].apply(this,e):t;++i<p;)a=n[i].call(this,a);return a}})}var l,d=200,h="Expected a function",c=8,u=32,m=128,f=256;return s});//# sourceMappingURL=_createFlow.js.map