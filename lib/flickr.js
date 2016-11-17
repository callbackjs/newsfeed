const request = require('request')

const FLICKR_URL = 'https://api.flickr.com/services/rest/?'
const FLICKR_API_KEY = '3cffcc97867ea6aaf3d7fa2690f0ae10'

/**
 * Queries Flickr for photos that match the given query.
 *
 * @param query -- the search query to send to Flickr
 *
 * Calls @param callback(error, results):
 *  error -- the error that occurred or null if no error
 *  results -- if error is null, contains the search results
 */
module.exports.search = (query, callback) => {
  // TODO
}
