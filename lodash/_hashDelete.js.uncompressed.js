define("lodash/_hashDelete", ['./_hashHas'], function(hashHas) {

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(hash, key) {
    return hashHas(hash, key) && delete hash[key];
  }

  return hashDelete;
});