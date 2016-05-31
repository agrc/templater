define("lodash/_baseCastPath", ['./isArray', './_stringToPath'], function(isArray, stringToPath) {

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast property path array.
   */
  function baseCastPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }

  return baseCastPath;
});