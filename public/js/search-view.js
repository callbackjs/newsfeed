// anonymous, self-invoking function to limit scope
(function() {
  const SearchView = {}

  /* Renders the search, allowing the client to query and see results. */
  SearchView.render = searchElement => {
    searchElement.addEventListener('submit', event => {
      event.preventDefault()
      const searchInputElement = searchElement.querySelector('input[name="query"]')
      searchAndRenderResults(searchElement, searchInputElement.value)
    })
  }

  /* Searches the services with the provided query and renders the results. */
  function searchAndRenderResults(searchElement, query) {
    searchElement.classList.add('loading')
    SearchModel.search(query, (error, results) => {
      if (error) {
        document.querySelector('.error').textContent = 'Failed to load search results.'
      } else {
        const searchContainerElement = searchElement.querySelector('#search-results')
        searchContainerElement.innerHTML = ''
        searchContainerElement.appendChild(Templates.renderSearchResults(results))

        const searchResultsElements = Array.from(searchContainerElement.querySelectorAll('.result'))
        searchResultsElements.forEach((resultElement, index) => {
          resultElement.addEventListener('click', () => {
            selectSearchResult(searchElement, results[index])
          })
        })

        searchElement.classList.remove('loading')
        searchContainerElement.classList.remove('hide')
      }
    })
  }

  /* Creates a new post in the newsfeed based on the selected search result. */
  function selectSearchResult(searchElement, result) {
    searchElement.querySelector('#search-results').classList.add('hide')
    searchElement.querySelector('input[name="query"]').value = ''

    PostModel.add(result, (error, post) => {
      if (error) {
        document.querySelector('.error').textContent = 'Failed to add the post.'
      } else {
        NewsfeedView.renderPost(document.querySelector('#newsfeed'), post)
      }
    })
  }

  window.SearchView = SearchView
})()
