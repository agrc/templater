define("lodash/_baseCastFunction", ['./identity'], function(identity) {

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the array-like object.
   */
  function baseCastFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  return baseCastFunction;
});
