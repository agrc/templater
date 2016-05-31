//>>built
define("lodash/debounce",["./isObject","./now","./toNumber"],function(e,t,i){function a(a,s,l){function d(){_&&clearTimeout(_),g&&clearTimeout(g),M=0,p=g=b=_=x=o}function h(e,i){i&&clearTimeout(i),g=_=x=o,e&&(M=t(),y=a.apply(b,p),_||g||(p=b=o))}function u(){var e=s-(t()-v);0>=e||e>s?h(x,g):_=setTimeout(u,e)}function c(){return(_&&x||g&&j)&&(y=a.apply(b,p)),d(),y}function m(){h(j,_)}function f(){if(p=arguments,v=t(),b=this,x=j&&(_||!k),w===!1)var e=k&&!_;else{M||g||k||(M=v);var i=w-(v-M),r=(0>=i||i>w)&&(k||g);r?(g&&(g=clearTimeout(g)),M=v,y=a.apply(b,p)):g||(g=setTimeout(m,i))}return r&&_?_=clearTimeout(_):_||s===w||(_=setTimeout(u,s)),e&&(r=!0,y=a.apply(b,p)),!r||_||g||(p=b=o),y}var p,g,y,v,b,_,x,M=0,k=!1,w=!1,j=!0;if("function"!=typeof a)throw new TypeError(r);return s=i(s)||0,e(l)&&(k=!!l.leading,w="maxWait"in l&&n(i(l.maxWait)||0,s),j="trailing"in l?!!l.trailing:j),f.cancel=d,f.flush=c,f}var o,r="Expected a function",n=Math.max;return a});//# sourceMappingURL=debounce.js.map