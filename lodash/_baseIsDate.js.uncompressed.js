define("lodash/_baseIsDate", ['./_baseGetTag', './isObjectLike'], function(baseGetTag, isObjectLike) {

  /** `Object#toString` result references. */
  var dateTag = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return isObjectLike(value) && baseGetTag(value) == dateTag;
  }

  return baseIsDate;
});