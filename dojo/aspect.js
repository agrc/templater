//>>built
define("dojo/aspect",[],function(){"use strict";function e(e,t,i,o){var n,s=e[t],a="around"==t;if(a){var r=i(function(){return s.advice(this,arguments)});n={remove:function(){r&&(r=e=i=null)},advice:function(e,t){return r?r.apply(e,t):s.advice(e,t)}}}else n={remove:function(){if(n.advice){var o=n.previous,s=n.next;s||o?(o?o.next=s:e[t]=s,s&&(s.previous=o)):delete e[t],e=i=n.advice=null}},id:e.nextId++,advice:i,receiveArguments:o};if(s&&!a)if("after"==t){for(;s.next&&(s=s.next););s.next=n,n.previous=s}else"before"==t&&(e[t]=n,n.next=s,s.previous=n);else e[t]=n;return n}function t(t){return function(o,n,s,a){var r,d=o[n];d&&d.target==o||(o[n]=r=function(){for(var e=r.nextId,t=arguments,o=r.before;o;)o.advice&&(t=o.advice.apply(this,t)||t),o=o.next;if(r.around)var n=r.around.advice(this,t);for(var s=r.after;s&&s.id<e;){if(s.advice)if(s.receiveArguments){var a=s.advice.apply(this,t);n=a===i?n:a}else n=s.advice.call(this,n,t);s=s.next}return n},d&&(r.around={advice:function(e,t){return d.apply(e,t)}}),r.target=o,r.nextId=r.nextId||0);var l=e(r||d,t,s,a);return s=null,l}}var i,o=t("after"),n=t("before"),s=t("around");return{before:n,around:s,after:o}});//# sourceMappingURL=aspect.js.map