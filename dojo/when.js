//>>built
define("dojo/when",["./Deferred","./promise/Promise"],function(e,t){"use strict";return function(i,n,o,r){var s=i&&"function"==typeof i.then,a=s&&i instanceof t;if(!s)return arguments.length>1?n?n(i):i:(new e).resolve(i);if(!a){var d=new e(i.cancel);i.then(d.resolve,d.reject,d.progress),i=d.promise}return n||o||r?i.then(n,o,r):i}});//# sourceMappingURL=when.js.map