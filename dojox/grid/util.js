//>>built
define("dojox/grid/util",["../main","dojo/_base/lang","dojo/dom"],function(e,t,i){var a=t.getObject("grid.util",!0,e);return a.na="...",a.rowIndexTag="gridRowIndex",a.gridViewTag="gridView",a.fire=function(e,t,i){var a=e&&t&&e[t];return a&&(i?a.apply(e,i):e[t]())},a.setStyleHeightPx=function(e,t){if(t>=0){var i=e.style,a=t+"px";e&&i.height!=a&&(i.height=a)}},a.mouseEvents=["mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"],a.keyEvents=["keyup","keydown","keypress"],a.funnelEvents=function(e,t,i,r){for(var n=r?r:a.mouseEvents.concat(a.keyEvents),o=0,s=n.length;s>o;o++)t.connect(e,"on"+n[o],i)},a.removeNode=function(e){return e=i.byId(e),e&&e.parentNode&&e.parentNode.removeChild(e),e},a.arrayCompare=function(e,t){for(var i=0,a=e.length;a>i;i++)if(e[i]!=t[i])return!1;return e.length==t.length},a.arrayInsert=function(e,t,i){e.length<=t?e[t]=i:e.splice(t,0,i)},a.arrayRemove=function(e,t){e.splice(t,1)},a.arraySwap=function(e,t,i){var a=e[t];e[t]=e[i],e[i]=a},a});//# sourceMappingURL=util.js.map