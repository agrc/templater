define("lodash/min", ['./_baseExtremum', './identity', './lt'], function(baseExtremum, identity, lt) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey
   * `undefined` is returned.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  function min(array) {
    return (array && array.length)
      ? baseExtremum(array, identity, lt)
      : undefined;
  }

  return min;
});
