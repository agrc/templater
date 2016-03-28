//>>built
define("dojo/aspect",[],function(){"use strict";function e(e,t,i,o){var n,r=e[t],a="around"==t;if(a){var s=i(function(){return r.advice(this,arguments)});n={remove:function(){s&&(s=e=i=null)},advice:function(e,t){return s?s.apply(e,t):r.advice(e,t)}}}else n={remove:function(){if(n.advice){var o=n.previous,r=n.next;r||o?(o?o.next=r:e[t]=r,r&&(r.previous=o)):delete e[t],e=i=n.advice=null}},id:e.nextId++,advice:i,receiveArguments:o};if(r&&!a)if("after"==t){for(;r.next&&(r=r.next););r.next=n,n.previous=r}else"before"==t&&(e[t]=n,n.next=r,r.previous=n);else e[t]=n;return n}function t(t){return function(o,n,r,a){var s,d=o[n];d&&d.target==o||(o[n]=s=function(){for(var e=s.nextId,t=arguments,o=s.before;o;)o.advice&&(t=o.advice.apply(this,t)||t),o=o.next;if(s.around)var n=s.around.advice(this,t);for(var r=s.after;r&&r.id<e;){if(r.advice)if(r.receiveArguments){var a=r.advice.apply(this,t);n=a===i?n:a}else n=r.advice.call(this,n,t);r=r.next}return n},d&&(s.around={advice:function(e,t){return d.apply(e,t)}}),s.target=o,s.nextId=s.nextId||0);var l=e(s||d,t,r,a);return r=null,l}}var i,o=t("after"),n=t("before"),r=t("around");return{before:n,around:r,after:o}});//# sourceMappingURL=aspect.js.map