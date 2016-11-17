// anonymous, self-invoking function to limit scope
(function() {
  const SearchModel = {}

  const SEARCH_URL = '/search'
  const STATUS_OK = 200

  /**
   * Loads API search results for a given query.
   *
   * Calls: callback(error, results)
   *  error -- the error that occurred or NULL if no error occurred
   *  results -- an array of search results
   */
  SearchModel.search = (query, callback) => {
    // TODO
  }

  window.SearchModel = SearchModel
})()
