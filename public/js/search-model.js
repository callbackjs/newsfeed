// anonymous, self-invoking function to limit scope
(function() {
  var SearchModel = {};

  var SEARCH_URL = '/search';

  /**
   * Loads API search results for a given query.
   *
   * Calls: callback(error, results)
   *  error -- the error that occurred or NULL if no error occurred
   *  results -- an array of search results
   */
  SearchModel.search = function(query, callback) {
    // TODO
  };

  window.SearchModel = SearchModel;
})();
