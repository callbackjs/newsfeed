const request = require('request')

const YT_URL = 'https://www.googleapis.com/youtube/v3/search'
const YT_API_KEY = 'AIzaSyDDP01Gnj3-wfoqM59xQz6pryJQhmYWCt8'
const YT_EMBED_URL = 'http://www.youtube.com/embed/'

/**
 * Queries YouTube for videos that match the given query.
 *
 * @param query -- the search query to send to YouTube
 *
 * Calls @param callback(error, results):
 *  error -- the error that occurred or null if no error
 *  results -- if error is null, contains the search results
 */
module.exports.search = (query, callback) => {
  // TODO
}
