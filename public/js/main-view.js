// anonymous, self-invoking function to limit scope
(function() {
  const MainView = {}

  MainView.render = bodyElement => {
    NewsfeedView.render(bodyElement.querySelector('#newsfeed'))
    SearchView.render(bodyElement.querySelector('#search'))
  }

  window.MainView = MainView
})()
