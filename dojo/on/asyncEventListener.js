//>>built
define("dojo/on/asyncEventListener",["../on","../has","../_base/window","../dom-construct","../domReady!"],function(e,t,a,i){function r(e){var t,a={};for(t in e)a[t]=e[t];return a}var d,o,n=!1;if(i){d=i.create("input",{type:"button"},a.body()),e.once(d,"click",function(e){o=e}),d.click();try{n=void 0===o.clientX}catch(e){n=!0}finally{i.destroy(d)}}return t.add("native-async-event-support",!n),function(e){return n?function(t){e.call(this,r(t))}:e}});//# sourceMappingURL=asyncEventListener.js.map