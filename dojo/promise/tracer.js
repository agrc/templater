//>>built
define("dojo/promise/tracer",["../_base/lang","./Promise","../Evented"],function(e,t,a){"use strict";function i(e){setTimeout(function(){d.apply(r,e)},0)}var r=new a,d=r.emit;return r.emit=null,t.prototype.trace=function(){var t=e._toArray(arguments);return this.then(function(e){i(["resolved",e].concat(t))},function(e){i(["rejected",e].concat(t))},function(e){i(["progress",e].concat(t))}),this},t.prototype.traceRejected=function(){var t=e._toArray(arguments);return this.otherwise(function(e){i(["rejected",e].concat(t))}),this},r});//# sourceMappingURL=tracer.js.map