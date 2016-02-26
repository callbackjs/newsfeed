// anonymous, self-invoking function to limit scope
(function() {
  var NewsfeedView = {};

  /* Renders the newsfeed into the given $newsfeed element. */
  NewsfeedView.render = function($newsfeed) {
    // TODO
  };

  /* Given post information, renders a post element into $newsfeed. */
  NewsfeedView.renderPost = function($newsfeed, post, updateMasonry) {
    // TODO

    if (updateMasonry) {
      $newsfeed.imagesLoaded(function() {
        $newsfeed.masonry('prepended', $post);
      });
    }
  };

  window.NewsfeedView = NewsfeedView;
})();
