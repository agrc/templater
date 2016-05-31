define("lodash/zipObject", ['./_assignValue', './_baseZipObject'], function(assignValue, baseZipObject) {

  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property names and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} [props=[]] The property names.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }

  return zipObject;
});