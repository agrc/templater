//>>built
define("dojo/domReady",["./has"],function(e){function t(e){l.push(e),d&&i()}function i(){if(!o){for(o=!0;l.length;)try{l.shift()(s)}catch(e){}o=!1,t._onQEmpty()}}var o,n=function(){return this}(),s=document,r={loaded:1,complete:1},a="string"!=typeof s.readyState,d=!!r[s.readyState],l=[];if(t.load=function(e,i,o){t(o)},t._Q=l,t._onQEmpty=function(){},a&&(s.readyState="loading"),!d){var h=[],c=function(e){e=e||n.event,d||"readystatechange"==e.type&&!r[s.readyState]||(a&&(s.readyState="complete"),d=1,i())},u=function(e,t){e.addEventListener(t,c,!1),l.push(function(){e.removeEventListener(t,c,!1)})};if(!e("dom-addeventlistener")){u=function(e,t){t="on"+t,e.attachEvent(t,c),l.push(function(){e.detachEvent(t,c)})};var p=s.createElement("div");try{p.doScroll&&null===n.frameElement&&h.push(function(){try{return p.doScroll("left"),1}catch(e){}})}catch(f){}}if(u(s,"DOMContentLoaded"),u(n,"load"),"onreadystatechange"in s?u(s,"readystatechange"):a||h.push(function(){return r[s.readyState]}),h.length){var m=function(){if(!d){for(var e=h.length;e--;)if(h[e]())return void c("poller");setTimeout(m,30)}};m()}}return t});//# sourceMappingURL=domReady.js.map