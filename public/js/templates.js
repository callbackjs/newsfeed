// anonymous, self-invoking function to limit scope
(function() {

  var Templates = {};

  /* Creates an HTMLElement to display a post.
   *
   * Arguments:
   * post -- the post object with the following key-value pairs:
   *   api: the API type ('flickr', 'youtube', or 'soundcloud')
   *   title: the post title
   *   source: the source URL
   *   upvotes: the number of upvotes
   */
  Templates.renderPost = function(post) {
    var content;
    switch (post.api) {
      case 'flickr':
        content = tag('img', {
          src: post.source,
          alt: post.title
        }, []);
        break;

      case 'youtube':
        content = tag('iframe', {
          type: 'text/html',
          width: '100%',
          height: '250',
          frameborder: '0',
          src: post.source
        }, []);
        break;

      case 'soundcloud':
        content = tag('iframe', {
          type: 'text/html',
          width: '100%',
          frameborder: '0',
          src: post.source
        }, []);
        break;

      default:
        throw new Exception('Invalid API: ' + post.api);
    }

    return tag('div', {class: 'post'}, [
      tag('div', {class: 'meta'}, [
        tag('h2', {}, post.title),

        tag('div', {class: 'actions'}, [
          tag('a', {
            href: '#',
            class: 'upvote'
          }, [
            tag('i', {class: 'fa fa-chevron-up'}, []),
            tag('span', {class: 'upvote-count'}, post.upvotes)
          ]),

          tag('span', {class: 'separator'}, ' • '),
          tag('a', {
            href: '#',
            class: 'remove'
          }, [
            tag('i', {class: 'fa fa-trash'}, [])
          ])
        ])
      ]),

      content
    ]);
  };

  /* Creates an HTMLElement to display search results.
   *
   * Arguments:
   * results -- an array of search result objects, each with key-value pairs:
   *   api: the API type ('flickr', 'youtube', or 'soundcloud')
   *   title: the title of the search result
   */
  Templates.renderSearchResults = function(results) {
    if (results.length === 0) {
      return tag('span', {}, 'No results found.');
    }

    return tag('div', {}, results.map(function(result) {
      return tag('div', {class: 'result'}, [
        tag('img', {
          alt: result.api,
          src: 'images/' + result.api + '.png'
        }, []),
        tag('span', {}, result.title)
      ]);
    }));
  };

  /* Creates and returns an HTMLElement representing a tag of the given name.
   * attrs is an object, where the key-value pairs represent HTML attributes to
   * set on the tag. contents is an array of strings/HTMLElements (or just
   * a single string/HTMLElement) that will be contained within the tag.
   *
   * Examples:
   * tag('p', {}, 'A simple paragraph') => <p>A simple paragraph</p>
   * tag('a', {href: '/about'}, 'About') => <a href="/about">About</a>
   *
   * tag('ul', {}, tag('li', {}, 'First item')) => <ul><li>First item</li></ul>
   *
   * tag('div', {}, [
   *   tag('h1', {'class': 'headline'}, 'JavaScript'),
   *   ' is awesome, ',
   *   tag('span', {}, 'especially in CS42.')
   * ])
   * => <div>
   *      <h1 class="headline">JavaScript</h1>
   *      is awesome,
   *      <span>especially in CS42.</span>
   *    </div>
   */
  function tag(name, attrs, contents) {
    var element = document.createElement(name);
    for (var attr in attrs) {
      element.setAttribute(attr, attrs[attr]);
    }

    // If contents is a single string or HTMLElement, make it an array of one
    // element; this guarantees that contents is an array below.
    if (!(contents instanceof Array)) {
      contents = [contents];
    }

    contents.forEach(function(piece) {
      if (piece instanceof HTMLElement) {
        element.appendChild(piece);
      } else {
        // must create a text node for a raw string
        element.appendChild(document.createTextNode(piece));
      }
    });

    return element;
  }

  window.Templates = Templates;

})();
