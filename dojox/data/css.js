//>>built
define("dojox/data/css",["dojo/_base/lang","dojo/_base/array"],function(e,t){var a=e.getObject("dojox.data.css",!0);return a.rules={},a.rules.forEach=function(e,a,i){if(i){var r=function(i){t.forEach(i[i.cssRules?"cssRules":"rules"],function(t){if(!t.type||3!==t.type){var r="";i&&i.href&&(r=i.href),e.call(a||this,t,i,r)}})};t.forEach(i,r)}},a.findStyleSheets=function(e){var i=[],r=function(e){var r=a.findStyleSheet(e);r&&t.forEach(r,function(e){-1===t.indexOf(i,e)&&i.push(e)})};return t.forEach(e,r),i},a.findStyleSheet=function(e){var a=[];"."===e.charAt(0)&&(e=e.substring(1));var i=function(r){return r.href&&r.href.match(e)?(a.push(r),!0):r.imports?t.some(r.imports,function(e){return i(e)}):t.some(r[r.cssRules?"cssRules":"rules"],function(e){return!(!e.type||3!==e.type||!i(e.styleSheet))})};return t.some(document.styleSheets,i),a},a.determineContext=function(e){var i=[];e=e&&e.length>0?a.findStyleSheets(e):document.styleSheets;var r=function(e){i.push(e),e.imports&&t.forEach(e.imports,function(e){r(e)}),t.forEach(e[e.cssRules?"cssRules":"rules"],function(e){e.type&&3===e.type&&r(e.styleSheet)})};return t.forEach(e,r),i},a});//# sourceMappingURL=css.js.map