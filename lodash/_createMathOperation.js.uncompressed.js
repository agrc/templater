define("lodash/_createMathOperation", ['./_baseToNumber', './_baseToString'], function(baseToNumber, baseToString) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Creates a function that performs a mathematical operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @param {number} [defaultValue] The value used for `undefined` arguments.
   * @returns {Function} Returns the new mathematical operation function.
   */
  function createMathOperation(operator, defaultValue) {
    return function(value, other) {
      var result;
      if (value === undefined && other === undefined) {
        return defaultValue;
      }
      if (value !== undefined) {
        result = value;
      }
      if (other !== undefined) {
        if (result === undefined) {
          return other;
        }
        if (typeof value == 'string' || typeof other == 'string') {
          value = baseToString(value);
          other = baseToString(other);
        } else {
          value = baseToNumber(value);
          other = baseToNumber(other);
        }
        result = operator(value, other);
      }
      return result;
    };
  }

  return createMathOperation;
});