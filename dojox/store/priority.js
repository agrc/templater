//>>built
define("dojox/store/priority",["dojo/_base/lang","dojo/Deferred","dojo/when"],function(e,t,i){function a(){for(var e=r.length-1;e>=n;e--){var t=r[e],i=t&&t[t.length-1];if(i){t.pop(),n++;try{i.executor(function(){n--,a()})}catch(o){i.def.reject(o),a()}}}}function o(){var e=new t;return{promise:{total:{then:function(t,i){return e.then(function(e){return e.results.total}).then(t,i)}},forEach:function(t,i){return e.then(function(e){return e.results.forEach(t,i)})},map:function(t,i){return e.then(function(e){return e.results.map(t,i)})},filter:function(t,i){return e.then(function(e){return e.results.filter(t,i)})},then:function(t,a){return e.then(function(e){return i(e.results,t,a)})}},resolve:e.resolve,reject:e.reject}}var r=[],n=0;return function(n,s){s=s||{};var l=e.delegate(n);return["add","put","query","remove","get"].forEach(function(e){var d=n[e];d&&(l[e]=function(l,u){u=u||{};var h,c;if(u.immediate)return d.call(n,l,u);u.immediate=!0,"query"===e?(c=function(e){var t=d.call(n,l,u);h.resolve({results:t}),i(t,e,e)},h=o()):(c=function(e){i(d.call(n,l,u),function(t){h.resolve(t),e()},function(t){h.reject(t),e()})},h=new t);var m=u.priority>-1?u.priority:s.priority>-1?s.priority:4;return(r[m]||(r[m]=[])).push({executor:c,def:h}),a(),h.promise})}),l}});//# sourceMappingURL=priority.js.map