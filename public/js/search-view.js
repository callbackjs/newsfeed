// anonymous, self-invoking function to limit scope
(function() {
  var SearchView = {};

  /* Renders the search, allowing the client to query and see results. */
  SearchView.render = function($search) {
    $search.submit(function(event) {
      event.preventDefault();
      var $searchInput = $search.find('input[name="query"]');
      searchAndRenderResults($search, $searchInput.val());
    });
  };

  /* Searches the services with the provided query and renders the results. */
  function searchAndRenderResults($search, query) {
    var $searchResults = $search.find('#search-results');
    $search.addClass('loading');

    SearchModel.search(query, function(error, results) {
      if (error) {
        $('.error').text('Failed to load search results.');
      } else {
        $searchResults.html(Templates.renderSearchResults(results));
        $searchResults.find('.result').each(function(index, result) {
          $(result).click(function() {
            selectSearchResult($search, results[index]);
          });
        });

        $search.removeClass('loading');
        $searchResults.show();
      }
    });
  }

  /* Creates a new post in the newsfeed based on the selected search result. */
  function selectSearchResult($search, result) {
    $search.find('#search-results').hide();
    $search.find('input[name="query"]').val('');

    PostModel.add(result, function(error, post) {
      if (error) {
        $('.error').text('Failed to add the post.');
      } else {
        NewsfeedView.renderPost($('#newsfeed'), post, true);
      }
    });
  }

  window.SearchView = SearchView;
})();
