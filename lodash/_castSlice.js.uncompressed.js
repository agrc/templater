define("lodash/_castSlice", ['./_baseSlice'], function(baseSlice) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return (!start && end >= length) ? array : baseSlice(array, start, end);
  }

  return castSlice;
});