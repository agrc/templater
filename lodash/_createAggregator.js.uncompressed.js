define("lodash/_createAggregator", ['./_arrayAggregator', './_baseAggregator', './_baseIteratee', './isArray'], function(arrayAggregator, baseAggregator, baseIteratee, isArray) {

  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};

      return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
  }

  return createAggregator;
});