//>>built
define("lodash/debounce",["./isObject","./now","./toNumber"],function(e,t,i){function a(a,s,l){function d(){k&&clearTimeout(k),g&&clearTimeout(g),_=0,p=g=b=k=x=o}function h(e,i){i&&clearTimeout(i),g=k=x=o,e&&(_=t(),y=a.apply(b,p),k||g||(p=b=o))}function u(){var e=s-(t()-v);0>=e||e>s?h(x,g):k=setTimeout(u,e)}function c(){return(k&&x||g&&j)&&(y=a.apply(b,p)),d(),y}function m(){h(j,k)}function f(){if(p=arguments,v=t(),b=this,x=j&&(k||!M),w===!1)var e=M&&!k;else{_||g||M||(_=v);var i=w-(v-_),r=(0>=i||i>w)&&(M||g);r?(g&&(g=clearTimeout(g)),_=v,y=a.apply(b,p)):g||(g=setTimeout(m,i))}return r&&k?k=clearTimeout(k):k||s===w||(k=setTimeout(u,s)),e&&(r=!0,y=a.apply(b,p)),!r||k||g||(p=b=o),y}var p,g,y,v,b,k,x,_=0,M=!1,w=!1,j=!0;if("function"!=typeof a)throw new TypeError(r);return s=i(s)||0,e(l)&&(M=!!l.leading,w="maxWait"in l&&n(i(l.maxWait)||0,s),j="trailing"in l?!!l.trailing:j),f.cancel=d,f.flush=c,f}var o,r="Expected a function",n=Math.max;return a});//# sourceMappingURL=debounce.js.map