// anonymous, self-invoking function to limit scope
(function() {
  const PostModel = {}

  const POSTS_URL= '/posts'

  /**
   * Loads all newsfeed posts from the server.
   *
   * Calls: callback(error, posts)
   *  error -- the error that occurred or null if no error occurred
   *  results -- an array of newsfeed posts
   */
  PostModel.loadAll = callback => {
    // TODO
  }

  /* Adds the given post to the list of posts. The post must *not* have
   * an _id associated with it.
   *
   * Calls: callback(error, post)
   *  error -- the error that occurred or null if no error occurred
   *  post -- the post added, with an _id attribute
   */
  PostModel.add = (post, callback) => {
    // TODO
  }

  /* Removes the post with the given id.
   *
   * Calls: callback(error)
   *  error -- the error that occurred or null if no error occurred
   */
  PostModel.remove = (id, callback) => {
    // TODO
  }

  /* Upvotes the post with the given id.
   *
   * Calls: callback(error, post)
   *  error -- the error that occurred or null if no error occurred
   *  post -- the updated post model
   */
  PostModel.upvote = (id, callback) => {
    // TODO
  }

  window.PostModel = PostModel
})()
