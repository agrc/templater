define("lodash/_freeGlobal", [], function() {

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  return freeGlobal;
});
