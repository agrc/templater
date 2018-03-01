define("lodash/_baseIsMap", ['./_getTag', './isObjectLike'], function(getTag, isObjectLike) {

  /** `Object#toString` result references. */
  var mapTag = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }

  return baseIsMap;
});
