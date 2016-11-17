// anonymous, self-invoking function to limit scope
(function() {

  const Grid = {}

  let gridMasonry = null

  /* Adds the specified post to the grid
   *
   * Arguments:
   * newsfeedElement -- the newsfeed HTML element
   * postElement - the post HTML element to add to the newsfeed grid
   */
  Grid.add = (newsfeedElement, postElement) => {
    if (!gridMasonry) {
      gridMasonry = new Masonry(newsfeedElement, {
        columnWidth: '.post',
        itemSelector: '.post',
      })
    }

    newsfeedElement.insertBefore(postElement, newsfeedElement.children[0])
    imagesLoaded(newsfeedElement, () => {
      gridMasonry.layout()
    })
  }

  /* Removes the specified post from the grid
   *
   * Arguments:
   * postElement - the post HTML element to remove from the newsfeed grid
   */
  Grid.remove = postElement => {
    postElement.parentNode.removeChild(postElement)
    gridMasonry.layout()
  }

  window.Grid = Grid
})()
