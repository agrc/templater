define("lodash/concat", ['./_arrayConcat', './_baseFlatten', './isArray', './rest'], function(arrayConcat, baseFlatten, isArray, rest) {

  /**
   * Creates a new array concatenating `array` with any additional arrays
   * and/or values.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  var concat = rest(function(array, values) {
    if (!isArray(array)) {
      array = array == null ? [] : [Object(array)];
    }
    values = baseFlatten(values, 1);
    return arrayConcat(array, values);
  });

  return concat;
});