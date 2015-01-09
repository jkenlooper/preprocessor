/**
 * Module dependencies
 */

var rework = require('rework');
var suit = require('rework-suit');
//var import_depends = require('../../rework-import-depends');
var import_depends = require('./rework-import-depends');

/**
 * Module export
 */

module.exports = preprocessor;

/**
 * Process CSS
 *
 * @param {String} css
 * @return {String}
 */

function preprocessor(css, options) {
  if (typeof css !== 'string') {
    throw new Error('suitcss-preprocessor: did not receive a String');
  }

  options = options || {};

  css = rework(css, options)
    .use(import_depends(options))
    .use(suit(options))
    .toString(options);

  return css;
}
