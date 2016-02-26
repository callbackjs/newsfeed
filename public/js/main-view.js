// anonymous, self-invoking function to limit scope
(function() {
  var MainView = {};

  MainView.render = function($body) {
    NewsfeedView.render($body.find('#newsfeed'));
    SearchView.render($body.find('#search'));
  };

  window.MainView = MainView;
})();
