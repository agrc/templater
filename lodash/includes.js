//>>built
define("lodash/includes",["./_baseIndexOf","./isArrayLike","./isString","./toInteger","./values"],function(e,t,i,o,a){function n(n,s,d,l){n=t(n)?n:a(n),d=d&&!l?o(d):0;var h=n.length;return 0>d&&(d=r(h+d,0)),i(n)?h>=d&&n.indexOf(s,d)>-1:!!h&&e(n,s,d)>-1}var r=Math.max;return n});//# sourceMappingURL=includes.js.map