//>>built
define("dojo/when",["./Deferred","./promise/Promise"],function(e,t){"use strict";return function(i,n,o,s){var r=i&&"function"==typeof i.then,a=r&&i instanceof t;if(!r)return arguments.length>1?n?n(i):i:(new e).resolve(i);if(!a){var d=new e(i.cancel);i.then(d.resolve,d.reject,d.progress),i=d.promise}return n||o||s?i.then(n,o,s):i}});//# sourceMappingURL=when.js.map