//>>built
define("dojox/css3/transit",["dojo/_base/array","dojo/dom-style","dojo/promise/all","dojo/sniff","./transition"],function(e,t,a,i,r){return function(e,o,d){var n=d&&d.reverse?-1:1;if(!d||!d.transition||!r[d.transition]||i("ie")&&i("ie")<10)return e&&t.set(e,"display","none"),o&&t.set(o,"display",""),d.transitionDefs&&(d.transitionDefs[e.id]&&d.transitionDefs[e.id].resolve(e),d.transitionDefs[o.id]&&d.transitionDefs[o.id].resolve(o)),new a([]);var l=[],s=[],m=2e3;if(d.duration?m=d.duration:(m=250,"fade"===d.transition?m=600:"flip"===d.transition&&(m=200)),e){t.set(e,"display","");var u=r[d.transition](e,{in:!1,direction:n,duration:m,deferred:d.transitionDefs&&d.transitionDefs[e.id]?d.transitionDefs[e.id]:null});l.push(u.deferred),s.push(u)}if(o){t.set(o,"display","");var f=r[d.transition](o,{direction:n,duration:m,deferred:d.transitionDefs&&d.transitionDefs[o.id]?d.transitionDefs[o.id]:null});l.push(f.deferred),s.push(f)}return"flip"===d.transition?r.chainedPlay(s):r.groupedPlay(s),a(l)}});//# sourceMappingURL=transit.js.map